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
  let inPreserveSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check for PRESERVE marker
    if (trimmed.includes('PRESERVE:') || trimmed.includes('// PRESERVE')) {
      inPreserveSection = true;
    } else if (inPreserveSection && trimmed === '') {
      // End preserve section on empty line
      inPreserveSection = false;
    } else if (inPreserveSection && trimmed.startsWith('//') && trimmed.includes('Backwards compatibility aliases')) {
      // End preserve section when we hit the next section
      inPreserveSection = false;
    }

    // Match SASS variable declarations: $variable-name: value;
    const match = trimmed.match(/^\$([a-zA-Z0-9_-]+)\s*:\s*(.+?);/);
    if (match) {
      const varName = match[1];
      const varValue = match[2];

      // Store the variable with its line number and value
      variables.set(varName, {
        value: varValue,
        lineNumber: i,
        originalLine: line,
        preserve: inPreserveSection
      });
    }
  }

  return variables;
}

/**
 * Migrate spacing variables > 13 to 3-digit notation
 * Returns array of migrated variable numbers for backwards compatibility
 * Only tracks variables that actually had 2-digit notation (not 3-digit)
 * e.g., $spacing-36 -> $spacing-036
 */
function migrateSpacingNotation(lines) {
  const spacingPattern = /^\s*\$spacing-(\d+):/;
  const migratedVariables = [];

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(spacingPattern);
    if (match) {
      const numStr = match[1];
      const num = parseInt(numStr, 10);

      // Only migrate if it's 2-digit notation and > 13
      if (num > 13 && numStr.length === 2) {
        const paddedNum = num.toString().padStart(3, '0');
        lines[i] = lines[i].replace(`$spacing-${num}:`, `$spacing-${paddedNum}:`);

        // Track 36-90 range for backwards compatibility aliases
        if (num >= 36 && num <= 90) {
          migratedVariables.push(num);
        }
      }
    }
  }

  return { lines, migratedVariables };
}

/**
 * Check if a variable name matches token-derived patterns
 * Token-derived variables follow specific naming conventions from Figma tokens
 */
function isTokenDerivedVariable(varName) {
  // Patterns that indicate a variable is derived from Figma tokens
  const tokenPatterns = [
    /^color-.*-\d+$/,              // color-blue-600, color-gray-100
    /^color-(black|white)$/,       // color-black, color-white
    /^font-size-\d+$/,             // font-size-20
    /^font-family-.+$/,            // font-family-proximanova (NEW format)
    /^spacing-\d+$/,               // spacing-01, spacing-036
    /^line-height-\d+$/,           // line-height-100
    /^line-height-(body|heading|display)$/,  // semantic line heights
    /^font-weight-(bold|semibold|regular)$/, // font-weight tokens
    /^text-case-(none|uppercase)$/,          // text-case tokens
    /^border-(default|subtle)$/,             // border tokens
    /^color-.*-(primary|secondary|subtle|inverse|default|muted)$/, // semantic colors
    /^font-family-(primary|secondary)$/,     // semantic font families
    /^font-size-(body|heading|display)$/,    // semantic font sizes
    /^sizing-\d+$/                           // sizing tokens
  ];

  // Explicitly exclude legacy Font-Family variables (PascalCase format)
  // These are manually curated with fallback fonts and should be preserved
  if (/^Font-Family-.+$/.test(varName)) {
    return false;
  }

  return tokenPatterns.some(pattern => pattern.test(varName));
}

/**
 * Check if a variable should be excluded from deletion
 * even if it appears to be token-derived
 */
function shouldPreserveVariable(varName, varValue) {
  // Preserve variables that are aliases (reference other variables)
  if (varValue.startsWith('$')) {
    return true;
  }

  // Preserve font family variables with fallback fonts
  // (indicates they're manually curated)
  if (varName.toLowerCase().includes('font-family') || varName.includes('Font-Family')) {
    if (varValue.includes(',') && (varValue.includes('sans-serif') || varValue.includes('serif'))) {
      return true;
    }
  }

  return false;
}

/**
 * Update existing SASS file with token values
 */
function updateSassVariables(existingContent, tokens) {
  let lines = existingContent.split('\n');

  // First, migrate existing spacing variables > 13 to 3-digit notation
  const migrationResult = migrateSpacingNotation(lines);
  lines = migrationResult.lines;
  const migratedVariables = migrationResult.migratedVariables;

  // Re-parse after migration
  const existingVars = parseExistingSassVariables(lines.join('\n'));
  const updatedVars = new Set();
  const newVars = [];
  
  // Build a set of all expected token variable names
  const expectedTokenVars = new Set();
  for (const token of tokens) {
    const varName = pathToVariableName(token.path, token.usePixelNotation);
    expectedTokenVars.add(varName);
  }

  // Identify variables to delete (token-derived but no longer in tokens.json)
  const varsToDelete = new Set();
  for (const [varName, varInfo] of existingVars.entries()) {
    if (isTokenDerivedVariable(varName) && !expectedTokenVars.has(varName)) {
      // Check if this variable should be preserved
      if (!varInfo.preserve && !shouldPreserveVariable(varName, varInfo.value)) {
        varsToDelete.add(varName);
      }
    }
  }

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

  // Find backwards compatibility mappings for deleted variables
  // Map deleted variables to existing ones if their values match
  const backwardsCompatMappings = new Map();
  for (const deletedVarName of varsToDelete) {
    const deletedVarInfo = existingVars.get(deletedVarName);
    const deletedValue = deletedVarInfo.value.trim();
    
    // Search for a matching variable in the current tokens
    for (const token of tokens) {
      const tokenVarName = pathToVariableName(token.path, token.usePixelNotation);
      const tokenValue = (token.sassReference || token.value).trim();
      
      // If values match, create a backwards compatibility alias
      if (deletedValue === tokenValue) {
        backwardsCompatMappings.set(deletedVarName, tokenVarName);
        break;
      }
    }
  }

  // Remove deleted variables (mark lines for deletion)
  const linesToDelete = new Set();
  for (const varName of varsToDelete) {
    const varInfo = existingVars.get(varName);
    linesToDelete.add(varInfo.lineNumber);
  }

  // Filter out deleted lines
  if (linesToDelete.size > 0) {
    lines = lines.filter((line, index) => !linesToDelete.has(index));
  }

  // Add new variables at the end of the file (before any trailing comments)
  if (newVars.length > 0) {
    // Find a good insertion point (before final comments or at end)
    let insertIndex = lines.length;

    // Group new variables by category, separating primitive and semantic
    const grouped = {};
    newVars.forEach(v => {
      const category = v.token.path[0];
      const isSemantic = v.token.isSemantic || false;
      
      if (!grouped[category]) {
        grouped[category] = {
          primitive: [],
          semantic: []
        };
      }
      
      if (isSemantic) {
        grouped[category].semantic.push(v);
      } else {
        grouped[category].primitive.push(v);
      }
    });

    // Add new variables grouped by category, with primitives before semantics
    const newLines = [];
    newLines.push('');
    newLines.push('// Additional Figma tokens (new variables)');

    for (const [category, categoryVars] of Object.entries(grouped)) {
      // Output primitive tokens first
      if (categoryVars.primitive.length > 0) {
        newLines.push(`// ${category.charAt(0).toUpperCase() + category.slice(1)} tokens`);
        categoryVars.primitive.forEach(v => {
          newLines.push(`$${v.name}: ${v.value};`);
        });
        newLines.push('');
      }
      
      // Then output semantic tokens (which may reference primitives)
      if (categoryVars.semantic.length > 0) {
        if (categoryVars.primitive.length === 0) {
          // If no primitives were output, add the category header
          newLines.push(`// ${category.charAt(0).toUpperCase() + category.slice(1)} tokens`);
        }
        categoryVars.semantic.forEach(v => {
          newLines.push(`$${v.name}: ${v.value};`);
        });
        newLines.push('');
      }
    }

    // Insert before the end
    lines.splice(insertIndex, 0, ...newLines);
  }

  // Remove any existing backwards compatibility sections to prevent duplicates
  const backwardsCompatMarkers = [
    '// Backwards compatibility aliases for spacing variables',
    '// Backwards compatibility aliases for deleted variables'
  ];
  
  for (const marker of backwardsCompatMarkers) {
    let markerIndex = -1;
    do {
      markerIndex = lines.findIndex((line, idx) =>
        idx > (markerIndex + 1) && line.trim() === marker
      );
      if (markerIndex !== -1) {
        // Find the end of this section (next empty line followed by non-comment or end of file)
        let endIndex = markerIndex + 1;
        while (endIndex < lines.length) {
          const line = lines[endIndex].trim();
          // Stop at empty line followed by non-comment/non-variable, or end of section
          if (line === '' && endIndex + 1 < lines.length) {
            const nextLine = lines[endIndex + 1].trim();
            if (nextLine && !nextLine.startsWith('//') && !nextLine.startsWith('$')) {
              break;
            }
          }
          endIndex++;
          // Also stop if we hit another section marker
          if (line.startsWith('//') && !line.includes('spacing') && !line.includes('Old 2-digit') && !line.includes('deleted')) {
            break;
          }
        }
        // Remove this section
        lines.splice(markerIndex, endIndex - markerIndex);
      }
    } while (markerIndex !== -1);
  }

  // Add backwards compatibility aliases for migrated spacing variables (36-90)
  if (migratedVariables.length > 0) {
    const backwardsCompatLines = [];
    backwardsCompatLines.push('');
    backwardsCompatLines.push('// Backwards compatibility aliases for spacing variables');
    backwardsCompatLines.push('// Old 2-digit notation pointing to new 3-digit notation');

    migratedVariables.sort((a, b) => a - b);
    migratedVariables.forEach(num => {
      const paddedNum = num.toString().padStart(3, '0');
      backwardsCompatLines.push(`$spacing-${num}: $spacing-${paddedNum};`);
    });

    // Add at the end of the file
    lines.push(...backwardsCompatLines);
  }

  // Add backwards compatibility aliases for deleted variables with matching values
  if (backwardsCompatMappings.size > 0) {
    const deletedCompatLines = [];
    deletedCompatLines.push('');
    deletedCompatLines.push('// Backwards compatibility aliases for deleted variables');
    deletedCompatLines.push('// Variables removed from Figma tokens but mapped to existing equivalents');

    // Sort by variable name for consistent output
    const sortedMappings = Array.from(backwardsCompatMappings.entries()).sort((a, b) => 
      a[0].localeCompare(b[0])
    );

    sortedMappings.forEach(([oldVar, newVar]) => {
      deletedCompatLines.push(`$${oldVar}: $${newVar};`);
    });

    // Add at the end of the file
    lines.push(...deletedCompatLines);
  }

  return {
    content: lines.join('\n'),
    updatedCount: updatedVars.size,
    newCount: newVars.length,
    deletedCount: varsToDelete.size,
    deletedVars: Array.from(varsToDelete),
    deletedMappedCount: backwardsCompatMappings.size,
    backwardsCompatCount: migratedVariables.length
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
 * @param {*} value - The token value to process
 * @param {string} type - The token type
 * @param {Map} existingVars - Map of existing SASS variables
 * @param {Array} pathArray - Token path array for variable name generation
 */
function processTokenValue(value, type, existingVars = null, pathArray = []) {
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

  // Handle font families - check existing variables first for complete definitions
  if (type === 'fontFamilies' && typeof value === 'string') {
    // Try to find existing font-family variable with the same base name
    if (existingVars && pathArray.length > 0) {
      const varName = pathToVariableName(pathArray, false);

      // Convert font name to PascalCase for legacy lookup
      const fontName = pathArray[pathArray.length - 1];
      const toPascalCase = (str) => {
        // Handle special cases
        if (str === 'proximanova') return 'ProximaNova';
        if (str === 'sohnebreit') return 'SohneBreit';
        if (str === 'unbangla') return 'UNBangla';
        // Handle Noto Sans variants
        if (str.startsWith('notosans')) {
          const suffix = str.replace('notosans', '');
          if (!suffix) return 'NotoSans';
          if (suffix === '-arabic') return 'NotoSans-Arabic';
          if (suffix === '-burmese') return 'NotoSans-Burmese';
          if (suffix === '-chinese') return 'NotoSans-Chinese';
          if (suffix === '-japanese') return 'NotoSans-Japanese';
          if (suffix === '-georgian') return 'NotoSans-Georgian';
          if (suffix === '-khmer') return 'NotoSans-Khmer';
          if (suffix === '-korean') return 'NotoSans-Korean';
          if (suffix === '-thai') return 'NotoSans-Thai';
        }
        // Default: capitalize first letter and keep rest
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

      const pascalCaseName = toPascalCase(fontName);
      const legacyName = `Font-Family-${pascalCaseName}`;

      // Check legacy naming FIRST (takes precedence), then new naming
      const existingVar = existingVars.get(legacyName) || existingVars.get(varName);

      if (existingVar) {
        // Use the existing value which may include fallback fonts
        return existingVar.value;
      }
    }

    // Fallback: add quotes if not present
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
 * @param {Object} obj - Token object to extract from
 * @param {Array} pathArray - Current path in token hierarchy
 * @param {Object} allTokensRoot - Root tokens object for reference resolution
 * @param {Boolean} isSemantic - Whether these are semantic tokens
 * @param {Map} existingVars - Map of existing SASS variables
 */
function extractTokens(obj, pathArray = [], allTokensRoot = {}, isSemantic = false, existingVars = null) {
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
        processedValue = processTokenValue(processedValue, value.$type, existingVars, currentPath);
      }      // Special handling for spacing tokens - ONLY use pixel-based notation (3 digits)
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
      tokens.push(...extractTokens(value, currentPath, allTokensRoot, isSemantic, existingVars));
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
  const existingVars = parseExistingSassVariables(existingContent);

  // Extract all tokens from primitive and semantic groups
  if (!jsonOutput) {
    console.log('🔍 Extracting tokens...');
  }
  const primitiveTokens = extractTokens(tokens.primitive || {}, [], tokens, false, existingVars);
  const semanticTokens = extractTokens(tokens.semantic || {}, [], tokens, true, existingVars);
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
    variablesAdded: updateResult.newCount,
    variablesDeleted: updateResult.deletedCount || 0,
    deletedVars: updateResult.deletedVars || [],
    deletedMappedCount: updateResult.deletedMappedCount || 0,
    backwardsCompatAdded: updateResult.backwardsCompatCount
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
  if (updateResult.deletedCount > 0) {
    console.log(`   - Variables deleted: ${updateResult.deletedCount}`);
    if (updateResult.deletedMappedCount > 0) {
      console.log(`   - Deleted variables mapped to equivalents: ${updateResult.deletedMappedCount}`);
    }
  }
  if (updateResult.backwardsCompatCount > 0) {
    console.log(`   - Backwards compatibility aliases: ${updateResult.backwardsCompatCount}`);
  }
  console.log('');

  // Show deleted variables if any
  if (updateResult.deletedCount > 0) {
    console.log('🗑️  Deleted variables (no longer in Figma tokens):');
    updateResult.deletedVars.forEach(varName => {
      console.log(`   - $${varName}`);
    });
    if (updateResult.deletedMappedCount > 0) {
      console.log(`   Note: ${updateResult.deletedMappedCount} of these have backwards compatibility aliases`);
    }
    console.log('');
  }

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
