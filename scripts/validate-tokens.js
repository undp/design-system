#!/usr/bin/env node

/**
 * Validation script for Figma token transformation
 * 
 * This script validates that the token transformation process works correctly
 * without modifying any files.
 */

const fs = require('fs');
const path = require('path');

// Import the transformation module
const { transformTokens } = require('./transform-tokens');

console.log('🧪 Validating Figma token transformation...\n');

// Backup the current variables file
const VARIABLES_PATH = path.join(__dirname, '../stories/assets/scss/_variables.scss');
const backupPath = VARIABLES_PATH + '.backup';

try {
  // Create backup
  console.log('📋 Creating backup of _variables.scss...');
  fs.copyFileSync(VARIABLES_PATH, backupPath);

  // Run transformation
  console.log('🔄 Running transformation...');
  const result = transformTokens();

  // Verify the transformation
  console.log('\n✅ Validation checks:');

  // Check 1: Transformation succeeded
  if (result.success) {
    console.log('   ✓ Transformation completed successfully');
  } else {
    throw new Error('Transformation failed');
  }

  // Check 2: Expected number of tokens
  if (result.tokensProcessed > 0) {
    console.log(`   ✓ Processed ${result.tokensProcessed} tokens`);
  } else {
    throw new Error('No tokens were processed');
  }

  // Check 3: Verify transformations applied or file is already up-to-date
  const originalContent = fs.readFileSync(backupPath, 'utf8');
  const newContent = fs.readFileSync(VARIABLES_PATH, 'utf8');

  // Check that file was either updated or already contains the expected tokens
  const hasTokenVariables = newContent.includes('$font-family-primary:') &&
                             newContent.includes('$color-border-default:');
  
  if (newContent !== originalContent) {
    console.log('   ✓ Variables file was updated with token values');
  } else if (hasTokenVariables) {
    console.log('   ✓ Variables file already up-to-date with token values');
  } else {
    throw new Error('Variables file was not modified and does not contain expected tokens');
  }

  // Check 4: Existing variables preserved
  const existingVarPattern = /\$img-path:/;
  if (existingVarPattern.test(newContent)) {
    console.log('   ✓ Existing non-token variables preserved');
  } else {
    throw new Error('Existing variables were not preserved');
  }

  // Check 5: Sample tokens present with correct naming
  const sampleTokens = [
    '$color-blue-600:',
    '$font-size-20:',
    '$spacing-16:',
    '$font-family-primary:',
    '$line-height-100:',
    '$color-border-default:'
  ];

  let allTokensPresent = true;
  for (const token of sampleTokens) {
    if (!newContent.includes(token)) {
      console.log(`   ✗ Sample token missing: ${token}`);
      allTokensPresent = false;
    }
  }

  if (allTokensPresent) {
    console.log('   ✓ Sample tokens verified (with hyphens)');
  } else {
    throw new Error('Some sample tokens are missing');
  }

  // Check 6: Semantic tokens use SASS references
  const semanticRefPattern = /\$color-border-default:\s+\$color-black/;
  if (semanticRefPattern.test(newContent)) {
    console.log('   ✓ Semantic tokens use SASS variable references');
  } else {
    console.log('   ⚠ Warning: Could not verify semantic token references');
  }

  // Check 7: Valid SASS syntax (basic check)
  const invalidPatterns = [
    { pattern: /\$[a-zA-Z0-9_-]+%\s*:/, desc: 'Variable names with %' },
    { pattern: /\$[a-zA-Z0-9_-]+\s+[a-zA-Z0-9_-]+\s*:/, desc: 'Variable names with spaces' },
  ];

  let hasInvalidSyntax = false;
  for (const { pattern, desc } of invalidPatterns) {
    const match = newContent.match(pattern);
    if (match) {
      console.log(`   ✗ Invalid SASS syntax detected (${desc}): ${match[0]}`);
      hasInvalidSyntax = true;
    }
  }

  if (!hasInvalidSyntax) {
    console.log('   ✓ SASS syntax validation passed');
  } else {
    throw new Error('Invalid SASS syntax detected');
  }

  console.log('\n✅ All validation checks passed!\n');

  // Restore backup
  console.log('🔄 Restoring original file...');
  fs.copyFileSync(backupPath, VARIABLES_PATH);
  fs.unlinkSync(backupPath);

  console.log('✅ Validation complete - original file restored\n');

  process.exit(0);
} catch (error) {
  console.error('\n❌ Validation failed:');
  console.error(error.message);

  // Restore backup if it exists
  if (fs.existsSync(backupPath)) {
    console.log('\n🔄 Restoring original file...');
    fs.copyFileSync(backupPath, VARIABLES_PATH);
    fs.unlinkSync(backupPath);
    console.log('✅ Original file restored\n');
  }

  process.exit(1);
}
