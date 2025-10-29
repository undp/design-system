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

  // Check 3: File was modified
  const originalContent = fs.readFileSync(backupPath, 'utf8');
  const newContent = fs.readFileSync(VARIABLES_PATH, 'utf8');

  if (newContent.includes('// FIGMA TOKENS START')) {
    console.log('   ✓ Figma tokens section added to variables file');
  } else {
    throw new Error('Figma tokens section not found in output');
  }

  // Check 4: Existing variables preserved
  const existingVarPattern = /\$img-path:/;
  if (existingVarPattern.test(newContent)) {
    console.log('   ✓ Existing variables preserved');
  } else {
    throw new Error('Existing variables were not preserved');
  }

  // Check 5: Sample tokens present
  const sampleTokens = [
    '$color-blue-600:',
    '$fontsize-20:',
    '$spacing-16:'
  ];

  let allTokensPresent = true;
  for (const token of sampleTokens) {
    if (!newContent.includes(token)) {
      console.log(`   ✗ Sample token missing: ${token}`);
      allTokensPresent = false;
    }
  }

  if (allTokensPresent) {
    console.log('   ✓ Sample tokens verified');
  } else {
    throw new Error('Some sample tokens are missing');
  }

  // Check 6: Valid SASS syntax (basic check)
  const invalidPatterns = [
    /\$[a-zA-Z0-9_-]+%:/,  // Variable names with %
    /\$[a-zA-Z0-9_-]+\s+[a-zA-Z0-9_-]+:/,  // Variable names with spaces
  ];

  let hasInvalidSyntax = false;
  for (const pattern of invalidPatterns) {
    if (pattern.test(newContent)) {
      console.log(`   ✗ Invalid SASS syntax detected: ${pattern}`);
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
