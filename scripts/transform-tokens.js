#!/usr/bin/env node

/**
 * Transform Figma Design Tokens to SASS Variables
 * 
 * This script reads tokens from figma-tokens/input/tokens.json and transforms them
 * into SASS variables in stories/assets/scss/_variables.scss
 * 
 * Features:
 * - Resolves token references (e.g., {color.blue.600})
 * - Converts design token types to appropriate SASS values
 * - Updates existing variables with Figma token values (no duplicates)
 * - Uses SASS variable references for semantic tokens
 * - Generates proper SASS variable names with hyphens (font-family, font-size, etc.)
 */

const fs = require('fs');
const path = require('path');

// File paths
const TOKENS_PATH = path.join(__dirname, '../figma-tokens/input/tokens.json');
const VARIABLES_PATH = path.join(__dirname, '../stories/assets/scss/_variables.scss');

/**
 * Parse existing SASS variables from file content
 */
function parseExistingSassVariables(content) {
  const variables = new Map();
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Match SASS variable declarations: $variable-name: value;
    const match = trimmed.match(/^\$([a-zA-Z0-9_-]+)\s*:\s*(.+?);/);
    if (match) {
      const varName = match[1];
      const varValue = match[2];
      
      // Store the variable with its line number and value
      variables.set(varName, {
        value: varValue,
        lineNumber: i,
        originalLine: line
      });
    }
  }
  
  return variables;
}

/**
 * Migrate spacing variables > 13 to 3-digit notation
 * e.g., $spacing-36 -> $spacing-036
 */
function migrateSpacingNotation(lines) {
  const spacingPattern = /^\s*\$spacing-(\d+):/;
  
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(spacingPattern);
    if (match) {
      const num = parseInt(match[1], 10);
      // Migrate spacing variables > 13 to 3-digit notation
      if (num > 13) {
        const paddedNum = num.toString().padStart(3, '0');
        lines[i] = lines[i].replace(`$spacing-${num}:`, `$spacing-${paddedNum}:`);
      }
    }
  }
  
  return lines;
}

/**
 * Update existing SASS file with token values
 */
function updateSassVariables(existingContent, tokens) {
  let lines = existingContent.split('\n');
  
  // First, migrate existing spacing variables > 13 to 3-digit notation
  lines = migrateSpacingNotation(lines);
  
  // Re-parse after migration
  const existingVars = parseExistingSassVariables(lines.join('\n'));
  const updatedVars = new Set();
  const newVars = [];
  
  // Update existing variables with token values
  for (const token of tokens) {
    const varName = pathToVariableName(token.path, token.usePixelNotation);
    const varValue = token.sassReference || token.value;
    
    if (existingVars.has(varName)) {
      // Update existing variable
      const existing = existingVars.get(varName);
      const lineNum = existing.lineNumber;
      
      // Replace the line with updated value
      const indent = lines[lineNum].match(/^\s*/)[0];
      lines[lineNum] = `${indent}$${varName}: ${varValue};`;
      updatedVars.add(varName);
    } else {
      // Collect new variables to add
      newVars.push({
        name: varName,
        value: varValue,
        token: token
      });
    }
  }
  
  // Add new variables at the end of the file (before any trailing comments)
  if (newVars.length > 0) {
    // Find a good insertion point (before final comments or at end)
    let insertIndex = lines.length;
    
    // Group new variables by category
    const grouped = {};
    newVars.forEach(v => {
      const category = v.token.path[0];
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(v);
    });
    
    // Add new variables grouped by category
    const newLines = [];
    newLines.push('');
    newLines.push('// Additional Figma tokens (new variables)');
    
    for (const [category, vars] of Object.entries(grouped)) {
      newLines.push(`// ${category.charAt(0).toUpperCase() + category.slice(1)} tokens`);
      vars.forEach(v => {
        newLines.push(`$${v.name}: ${v.value};`);
      });
      newLines.push('');
    }
    
    // Insert before the end
    lines.splice(insertIndex, 0, ...newLines);
  }
  
  return {
    content: lines.join('\n'),
    updatedCount: updatedVars.size,
    newCount: newVars.length
  };
}

/**
 * Resolve token references like {color.blue.600} to actual values
 * Returns both the resolved value and the reference path for semantic tokens
 */
function resolveTokenReference(value, tokens, returnReference = false) {
  if (typeof value !== 'string' || !value.startsWith('{') || !value.endsWith('}')) {
    return returnReference ? { value, reference: null } : value;
  }
  
  const reference = value.slice(1, -1); // Remove { }
  const parts = reference.split('.');
  
  // Try to find in primitive tokens first, then semantic
  let current = tokens.primitive;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      // Try semantic tokens
      current = tokens.semantic;
      for (const part of parts) {
        if (current && typeof current === 'object' && part in current) {
          current = current[part];
        } else {
          console.warn(`Warning: Could not resolve reference ${value}`);
          return returnReference ? { value, reference: null } : value;
        }
      }
      break;
    }
  }
  
  // If we found a token object with $value, resolve it recursively
  if (current && typeof current === 'object' && '$value' in current) {
    const resolved = resolveTokenReference(current.$value, tokens, returnReference);
    if (returnReference && typeof current.$value === 'string' && current.$value.startsWith('{')) {
      // This is a reference to another token, return the reference
      return { value: resolved.value || resolved, reference: reference };
    }
    return resolved;
  }
  
  return returnReference ? { value: current, reference: null } : current;
}

/**
 * Convert a nested token path to a SASS variable name with proper hyphenation
 * Special handling for spacing variables which use dual notation:
 * - Rank-based (2 digits): $spacing-01, $spacing-02, ... $spacing-13
 * - Pixel-based (3 digits): $spacing-002, $spacing-004, etc.
 * 
 * e.g., ['fontfamily', 'proximanova'] => 'font-family-proximanova'
 * e.g., ['fontsize', '20'] => 'font-size-20'
 * e.g., ['lineheight', '100%'] => 'line-height-100'
 * e.g., ['color', 'blue', '600'] => 'color-blue-600'
 * e.g., ['spacing', '2'] => 'spacing-002' (pixel-based)
 * e.g., ['spacing', '16'] => 'spacing-016' (pixel-based)
 */
function pathToVariableName(pathArray, usePixelNotation = false) {
  const cleanedPath = pathArray.map((part, index) => {
    // Remove % and other special characters that aren't valid in SASS variable names
    let cleaned = part.toString().replace(/[%]/g, '');
    
    // Add hyphens for compound words if this is the first part (category)
    if (index === 0) {
      // fontfamily -> font-family
      // fontsize -> font-size
      // fontweight -> font-weight
      // lineheight -> line-height
      // textcase -> text-case
      const hyphenated = cleaned
        .replace(/^fontfamily$/i, 'font-family')
        .replace(/^fontsize$/i, 'font-size')
        .replace(/^fontweight$/i, 'font-weight')
        .replace(/^lineheight$/i, 'line-height')
        .replace(/^textcase$/i, 'text-case');
      return hyphenated;
    }
    
    // Special handling for spacing values - use 3-digit padding for pixel notation
    if (index === 1 && pathArray[0] === 'spacing' && usePixelNotation) {
      const num = parseInt(cleaned, 10);
      if (!isNaN(num)) {
        return num.toString().padStart(3, '0');
      }
    }
    
    return cleaned;
  });
  
  return cleanedPath.join('-');
}

/**
 * Process a token value based on its type
 */
function processTokenValue(value, type) {
  // Handle percentage values
  if (typeof value === 'string' && value.includes('%')) {
    return value;
  }
  
  // Handle pixel values
  if (typeof value === 'string' && value.includes('px')) {
    // Convert to rem if it's a font size, otherwise keep as px
    if (type === 'fontSizes') {
      const pxValue = parseFloat(value);
      const remValue = pxValue / 16;
      return `${remValue}rem`;
    }
    return value;
  }
  
  // Handle numeric values
  if (typeof value === 'number') {
    return value.toString();
  }
  
  // Handle color values - ensure they're valid hex codes
  if (type === 'color' && typeof value === 'string') {
    return value;
  }
  
  // Handle font weights
  if (type === 'fontWeights' && typeof value === 'string') {
    return value;
  }
  
  // Handle font families - add quotes if not present
  if (type === 'fontFamilies' && typeof value === 'string') {
    // Check if value already has quotes
    if (!value.startsWith("'") && !value.startsWith('"')) {
      return `'${value}'`;
    }
    return value;
  }
  
  return value;
}

/**
 * Recursively extract tokens from a token group
 * For spacing tokens, generates ONLY pixel-based notation (3 digits)
 * Rank-based notation (2 digits) is preserved from existing file
 */
function extractTokens(obj, pathArray = [], allTokensRoot = {}, isSemantic = false) {
  const tokens = [];
  
  for (const [key, value] of Object.entries(obj)) {
    // Skip metadata keys
    if (key.startsWith('$')) {
      continue;
    }
    
    const currentPath = [...pathArray, key];
    
    // If this is a token (has $value property)
    if (value && typeof value === 'object' && '$value' in value) {
      let processedValue;
      let sassReference = null;
      
      // For semantic tokens, try to preserve references to primitive tokens
      if (isSemantic && typeof value.$value === 'string' && value.$value.startsWith('{')) {
        const refResult = resolveTokenReference(value.$value, allTokensRoot, true);
        const referencePath = value.$value.slice(1, -1); // Remove { }
        const referenceParts = referencePath.split('.');
        
        // Create SASS variable reference
        sassReference = '$' + pathToVariableName(referenceParts);
        processedValue = refResult.value;
      } else {
        processedValue = resolveTokenReference(value.$value, allTokensRoot);
        processedValue = processTokenValue(processedValue, value.$type);
      }
      
      // Special handling for spacing tokens - ONLY use pixel-based notation (3 digits)
      // Rank-based notation (2 digits) is preserved from existing variables
      if (pathArray[0] === 'spacing' && value.$type === 'spacing' && !isSemantic) {
        const token = {
          path: currentPath,
          value: processedValue,
          sassReference: sassReference,
          type: value.$type,
          originalValue: value.$value,
          isSemantic: isSemantic,
          usePixelNotation: true  // Always use 3-digit notation for Figma spacing tokens
        };
        tokens.push(token);
      } else {
        // For non-spacing tokens, use normal notation
        const token = {
          path: currentPath,
          value: processedValue,
          sassReference: sassReference,
          type: value.$type,
          originalValue: value.$value,
          isSemantic: isSemantic
        };
        tokens.push(token);
      }
    } else if (value && typeof value === 'object') {
      // Recursively process nested objects
      tokens.push(...extractTokens(value, currentPath, allTokensRoot, isSemantic));
    }
  }
  
  return tokens;
}

/**
 * Main transformation function
 */
function transformTokens(options = {}) {
  const { jsonOutput = false } = options;

  if (!jsonOutput) {
    console.log('🎨 Starting Figma tokens transformation...\n');
  }

  // Read tokens file
  if (!jsonOutput) {
    console.log(`📖 Reading tokens from: ${TOKENS_PATH}`);
  }
  const tokensContent = fs.readFileSync(TOKENS_PATH, 'utf8');
  const tokens = JSON.parse(tokensContent);

  // Read existing variables file
  if (!jsonOutput) {
    console.log(`📖 Reading existing variables from: ${VARIABLES_PATH}`);
  }
  const existingContent = fs.readFileSync(VARIABLES_PATH, 'utf8');

  // Extract all tokens from primitive and semantic groups
  if (!jsonOutput) {
    console.log('🔍 Extracting tokens...');
  }
  const primitiveTokens = extractTokens(tokens.primitive || {}, [], tokens, false);
  const semanticTokens = extractTokens(tokens.semantic || {}, [], tokens, true);
  const allExtractedTokens = [...primitiveTokens, ...semanticTokens];

  if (!jsonOutput) {
    console.log(`   Found ${primitiveTokens.length} primitive tokens`);
    console.log(`   Found ${semanticTokens.length} semantic tokens`);
    console.log(`   Total: ${allExtractedTokens.length} tokens\n`);
  }

  // Update existing SASS file with token values (no duplicates)
  if (!jsonOutput) {
    console.log('🔨 Updating SASS variables with Figma token values...');
  }
  const updateResult = updateSassVariables(existingContent, allExtractedTokens);

  // Write back to file
  if (!jsonOutput) {
    console.log(`💾 Writing updated variables to: ${VARIABLES_PATH}`);
  }
  fs.writeFileSync(VARIABLES_PATH, updateResult.content, 'utf8');

  const result = {
    success: true,
    tokensProcessed: allExtractedTokens.length,
    primitiveTokens: primitiveTokens.length,
    semanticTokens: semanticTokens.length,
    variablesUpdated: updateResult.updatedCount,
    variablesAdded: updateResult.newCount
  };

  if (jsonOutput) {
    console.log(JSON.stringify(result, null, 2));
    return result;
  }

  console.log('\n✅ Transformation complete!\n');

  // Generate summary
  console.log('📊 Summary:');
  console.log(`   - Total tokens processed: ${allExtractedTokens.length}`);
  console.log(`   - Primitive tokens: ${primitiveTokens.length}`);
  console.log(`   - Semantic tokens: ${semanticTokens.length}`);
  console.log(`   - Variables updated: ${updateResult.updatedCount}`);
  console.log(`   - Variables added: ${updateResult.newCount}`);
  console.log('');

  // Show sample of updated variables
  console.log('📝 Sample of updated variables:');
  allExtractedTokens.slice(0, 5).forEach(token => {
    const varName = pathToVariableName(token.path, token.usePixelNotation);
    const value = token.sassReference || token.value;
    console.log(`   $${varName}: ${value};`);
  });
  if (allExtractedTokens.length > 5) {
    console.log(`   ... and ${allExtractedTokens.length - 5} more`);
  }

  return result;
}

// Run the transformation
if (require.main === module) {
  try {
    const jsonOutput = process.argv.includes('--json');
    transformTokens({ jsonOutput });
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during transformation:');
    console.error(error);
    process.exit(1);
  }
}

module.exports = { transformTokens };
