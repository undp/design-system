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
 * - Preserves existing variables not present in tokens.json
 * - Generates proper SASS variable names
 */

const fs = require('fs');
const path = require('path');

// File paths
const TOKENS_PATH = path.join(__dirname, '../figma-tokens/input/tokens.json');
const VARIABLES_PATH = path.join(__dirname, '../stories/assets/scss/_variables.scss');

/**
 * Parse existing SASS variables to preserve non-token variables
 */
function parseExistingSassVariables(content) {
  const variables = new Map();
  const lines = content.split('\n');
  
  lines.forEach(line => {
    const trimmed = line.trim();
    // Match SASS variable declarations: $variable-name: value;
    const match = trimmed.match(/^\$([a-zA-Z0-9_-]+)\s*:\s*(.+?);/);
    if (match) {
      variables.set(match[1], match[2]);
    }
  });
  
  return variables;
}

/**
 * Resolve token references like {color.blue.600} to actual values
 */
function resolveTokenReference(value, tokens) {
  if (typeof value !== 'string' || !value.startsWith('{') || !value.endsWith('}')) {
    return value;
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
          return value;
        }
      }
      break;
    }
  }
  
  // If we found a token object with $value, resolve it recursively
  if (current && typeof current === 'object' && '$value' in current) {
    return resolveTokenReference(current.$value, tokens);
  }
  
  return current;
}

/**
 * Convert a nested token path to a SASS variable name
 * e.g., ['color', 'blue', '600'] => 'color-blue-600'
 * e.g., ['lineheight', '100%'] => 'lineheight-100'
 */
function pathToVariableName(pathArray, prefix = '') {
  const cleanedPath = pathArray.map(part => {
    // Remove % and other special characters that aren't valid in SASS variable names
    return part.toString().replace(/[%]/g, '');
  });
  const name = cleanedPath.join('-');
  return prefix ? `${prefix}-${name}` : name;
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
 */
function extractTokens(obj, pathArray = [], allTokensRoot = {}) {
  const tokens = [];
  
  for (const [key, value] of Object.entries(obj)) {
    // Skip metadata keys
    if (key.startsWith('$')) {
      continue;
    }
    
    const currentPath = [...pathArray, key];
    
    // If this is a token (has $value property)
    if (value && typeof value === 'object' && '$value' in value) {
      const resolvedValue = resolveTokenReference(value.$value, allTokensRoot);
      const processedValue = processTokenValue(resolvedValue, value.$type);
      
      tokens.push({
        path: currentPath,
        value: processedValue,
        type: value.$type,
        originalValue: value.$value
      });
    } else if (value && typeof value === 'object') {
      // Recursively process nested objects
      tokens.push(...extractTokens(value, currentPath, allTokensRoot));
    }
  }
  
  return tokens;
}

/**
 * Generate SASS variable declarations from tokens
 */
function generateSassVariables(tokens) {
  const lines = [];
  
  // Group tokens by category
  const grouped = {};
  tokens.forEach(token => {
    const category = token.path[0];
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(token);
  });
  
  // Generate variables for each category
  for (const [category, categoryTokens] of Object.entries(grouped)) {
    lines.push(`// ${category.charAt(0).toUpperCase() + category.slice(1)} tokens from Figma`);
    
    categoryTokens.forEach(token => {
      const varName = pathToVariableName(token.path);
      const value = token.value;
      lines.push(`$${varName}: ${value};`);
    });
    
    lines.push('');
  }
  
  return lines.join('\n');
}

/**
 * Merge Figma tokens with existing variables
 */
function mergeWithExistingVariables(existingContent, newTokenVariables, tokenVariableNames) {
  const lines = existingContent.split('\n');
  const resultLines = [];
  let inFigmaSection = false;
  let figmaStartIndex = -1;
  let figmaEndIndex = -1;
  
  // Find existing Figma tokens section
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('// FIGMA TOKENS START')) {
      inFigmaSection = true;
      figmaStartIndex = i;
    } else if (lines[i].includes('// FIGMA TOKENS END')) {
      inFigmaSection = false;
      figmaEndIndex = i;
      break;
    }
  }
  
  // Build the result
  if (figmaStartIndex >= 0 && figmaEndIndex >= 0) {
    // Replace existing Figma section
    resultLines.push(...lines.slice(0, figmaStartIndex));
    resultLines.push('// FIGMA TOKENS START');
    resultLines.push('// Auto-generated from figma-tokens/input/tokens.json');
    resultLines.push('// Do not edit this section manually');
    resultLines.push('');
    resultLines.push(newTokenVariables);
    resultLines.push('// FIGMA TOKENS END');
    resultLines.push(...lines.slice(figmaEndIndex + 1));
  } else {
    // Add new Figma section at the top after any initial comments
    let insertIndex = 0;
    while (insertIndex < lines.length && (lines[insertIndex].trim().startsWith('//') || lines[insertIndex].trim() === '')) {
      insertIndex++;
    }
    
    resultLines.push(...lines.slice(0, insertIndex));
    resultLines.push('// FIGMA TOKENS START');
    resultLines.push('// Auto-generated from figma-tokens/input/tokens.json');
    resultLines.push('// Do not edit this section manually');
    resultLines.push('');
    resultLines.push(newTokenVariables);
    resultLines.push('// FIGMA TOKENS END');
    resultLines.push('');
    resultLines.push(...lines.slice(insertIndex));
  }
  
  return resultLines.join('\n');
}

/**
 * Main transformation function
 */
function transformTokens() {
  console.log('🎨 Starting Figma tokens transformation...\n');
  
  // Read tokens file
  console.log(`📖 Reading tokens from: ${TOKENS_PATH}`);
  const tokensContent = fs.readFileSync(TOKENS_PATH, 'utf8');
  const tokens = JSON.parse(tokensContent);
  
  // Read existing variables file
  console.log(`📖 Reading existing variables from: ${VARIABLES_PATH}`);
  const existingContent = fs.readFileSync(VARIABLES_PATH, 'utf8');
  
  // Extract all tokens from primitive and semantic groups
  console.log('🔍 Extracting tokens...');
  const primitiveTokens = extractTokens(tokens.primitive || {}, [], tokens);
  const semanticTokens = extractTokens(tokens.semantic || {}, [], tokens);
  const allExtractedTokens = [...primitiveTokens, ...semanticTokens];
  
  console.log(`   Found ${primitiveTokens.length} primitive tokens`);
  console.log(`   Found ${semanticTokens.length} semantic tokens`);
  console.log(`   Total: ${allExtractedTokens.length} tokens\n`);
  
  // Generate SASS variables
  console.log('🔨 Generating SASS variables...');
  const sassVariables = generateSassVariables(allExtractedTokens);
  
  // Get list of generated variable names
  const tokenVariableNames = new Set(
    allExtractedTokens.map(token => pathToVariableName(token.path))
  );
  
  // Merge with existing content
  console.log('🔀 Merging with existing variables...');
  const mergedContent = mergeWithExistingVariables(existingContent, sassVariables, tokenVariableNames);
  
  // Write back to file
  console.log(`💾 Writing updated variables to: ${VARIABLES_PATH}`);
  fs.writeFileSync(VARIABLES_PATH, mergedContent, 'utf8');
  
  console.log('\n✅ Transformation complete!\n');
  
  // Generate summary
  console.log('📊 Summary:');
  console.log(`   - Total tokens processed: ${allExtractedTokens.length}`);
  console.log(`   - Primitive tokens: ${primitiveTokens.length}`);
  console.log(`   - Semantic tokens: ${semanticTokens.length}`);
  console.log('');
  
  // Show sample of generated variables
  console.log('📝 Sample of generated variables:');
  allExtractedTokens.slice(0, 5).forEach(token => {
    const varName = pathToVariableName(token.path);
    console.log(`   $${varName}: ${token.value};`);
  });
  if (allExtractedTokens.length > 5) {
    console.log(`   ... and ${allExtractedTokens.length - 5} more`);
  }
  
  return {
    success: true,
    tokensProcessed: allExtractedTokens.length,
    primitiveTokens: primitiveTokens.length,
    semanticTokens: semanticTokens.length
  };
}

// Run the transformation
if (require.main === module) {
  try {
    transformTokens();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during transformation:');
    console.error(error);
    process.exit(1);
  }
}

module.exports = { transformTokens };
