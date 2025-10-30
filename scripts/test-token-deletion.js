#!/usr/bin/env node

/**
 * Test script to verify token deletion functionality
 * 
 * This script demonstrates that the transform-tokens script correctly:
 * 1. Identifies token-derived variables
 * 2. Deletes variables that are no longer in Figma tokens
 * 3. Preserves manually-maintained variables
 */

const fs = require('fs');
const path = require('path');
const { transformTokens } = require('./transform-tokens.js');

// File paths
const VARIABLES_PATH = path.join(__dirname, '../stories/assets/scss/_variables.scss');
const BACKUP_PATH = VARIABLES_PATH + '.deletion-test-backup';

console.log('🧪 Testing Token Deletion Functionality\n');

// Read and backup original content
const originalContent = fs.readFileSync(VARIABLES_PATH, 'utf8');
fs.writeFileSync(BACKUP_PATH, originalContent);

try {
  // Test 1: Add a fake token-derived variable
  console.log('Test 1: Adding fake token-derived variable...');
  const lines = originalContent.split('\n');
  
  // Find a safe insertion point (after the first color variable)
  const insertIndex = lines.findIndex(line => line.includes('$color-black') || line.includes('$color-'));
  
  if (insertIndex === -1) {
    throw new Error('Could not find insertion point (no color variables found)');
  }
  
  lines.splice(insertIndex + 1, 0, '$color-fake-999: #999999;');
  fs.writeFileSync(VARIABLES_PATH, lines.join('\n'));
  console.log('  ✓ Added $color-fake-999: #999999;');

  // Test 2: Run transformation
  console.log('\nTest 2: Running transformation...');
  const result = transformTokens({ jsonOutput: true });
  console.log(`  ✓ Transformation completed`);
  console.log(`  - Tokens processed: ${result.tokensProcessed}`);
  console.log(`  - Variables updated: ${result.variablesUpdated}`);
  console.log(`  - Variables added: ${result.variablesAdded}`);
  console.log(`  - Variables deleted: ${result.variablesDeleted}`);

  // Test 3: Verify deletion
  console.log('\nTest 3: Verifying deletion...');
  const newContent = fs.readFileSync(VARIABLES_PATH, 'utf8');
  const wasFakeDeleted = !newContent.includes('$color-fake-999');
  // Note: deletedVars contains variable names without the $ prefix
  const isInDeletedList = result.deletedVars.includes('color-fake-999');
  
  if (wasFakeDeleted && isInDeletedList) {
    console.log('  ✅ Fake variable was correctly deleted');
  } else {
    throw new Error(`Fake variable deletion failed (deleted: ${wasFakeDeleted}, in list: ${isInDeletedList})`);
  }

  // Test 4: Verify preservation of manual variables
  console.log('\nTest 4: Verifying preservation of manual variables...');
  const manualVarsPreserved = [
    '$img-path:',
    '$img-path-Icon:',
    '$width-150:',
    '$width-180:',
  ];
  
  let allPreserved = true;
  for (const varCheck of manualVarsPreserved) {
    if (!newContent.includes(varCheck)) {
      console.log(`  ❌ Manual variable missing: ${varCheck}`);
      allPreserved = false;
    }
  }
  
  if (allPreserved) {
    console.log('  ✅ All manual variables preserved');
  } else {
    throw new Error('Some manual variables were incorrectly deleted');
  }

  // Test 5: Verify preservation of legacy Font-Family variables
  console.log('\nTest 5: Verifying preservation of legacy Font-Family variables...');
  const legacyFontVars = [
    '$Font-Family-ProximaNova:',
    '$Font-Family-SohneBreit:',
    '$Font-Family-NotoSans:',
  ];
  
  let allLegacyPreserved = true;
  for (const varCheck of legacyFontVars) {
    if (!newContent.includes(varCheck)) {
      console.log(`  ❌ Legacy font variable missing: ${varCheck}`);
      allLegacyPreserved = false;
    }
  }
  
  if (allLegacyPreserved) {
    console.log('  ✅ All legacy Font-Family variables preserved');
  } else {
    throw new Error('Some legacy Font-Family variables were incorrectly deleted');
  }

  // Test 6: Show sample of deleted variables
  console.log('\nTest 6: Sample of deleted variables:');
  if (result.deletedVars.length > 0) {
    console.log('  Variables that were removed (first 5):');
    result.deletedVars.slice(0, 5).forEach(varName => {
      console.log(`    - $${varName}`);
    });
    if (result.deletedVars.length > 5) {
      console.log(`    ... and ${result.deletedVars.length - 5} more`);
    }
  } else {
    console.log('  ℹ️  No variables deleted (file was already in sync)');
  }

  console.log('\n✅ All tests passed!\n');
  
  // Restore original
  fs.writeFileSync(VARIABLES_PATH, originalContent);
  fs.unlinkSync(BACKUP_PATH);
  console.log('✓ Original file restored\n');
  
  process.exit(0);

} catch (error) {
  console.error('\n❌ Test failed:');
  console.error(error.message);
  console.error(error.stack);
  
  // Restore original
  if (fs.existsSync(BACKUP_PATH)) {
    fs.writeFileSync(VARIABLES_PATH, originalContent);
    fs.unlinkSync(BACKUP_PATH);
    console.log('\n✓ Original file restored\n');
  }
  
  process.exit(1);
}
