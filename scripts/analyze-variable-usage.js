#!/usr/bin/env node

/**
 * Variable Usage Analyzer
 * 
 * This script helps identify which components use specific SCSS variables.
 * Useful when variable names change and components need to be updated.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node scripts/analyze-variable-usage.js <variable-name> [search-directory]');
  console.log('');
  console.log('Examples:');
  console.log('  node scripts/analyze-variable-usage.js color-blue-500');
  console.log('  node scripts/analyze-variable-usage.js font-size-16 docs/');
  console.log('  node scripts/analyze-variable-usage.js spacing-05 stories/');
  console.log('');
  console.log('Default search directory: stories/');
  console.log('');
  process.exit(0);
}

const variableName = args[0];
const searchDir = args[1] || 'stories/';
// Sanitize inputs to prevent command injection
const sanitizedVariableName = variableName.replace(/[`$]/g, '\\$&');
const searchPattern = sanitizedVariableName.startsWith('\\$') ? sanitizedVariableName : `\\$${sanitizedVariableName}`;
// Sanitize directory path - only allow alphanumeric, /, -, _, and .
const sanitizedSearchDir = searchDir.replace(/[^a-zA-Z0-9/_.-]/g, '');

console.log(`🔍 Searching for usage of: ${searchPattern}`);
console.log(`📂 Search directory: ${sanitizedSearchDir}\n`);

try {
  // Search for the variable in SCSS files
  // Using shell: false and array form for better security, but grep doesn't support it well
  // So we carefully sanitize inputs instead
  const result = execSync(
    `grep -r "${searchPattern}" ${sanitizedSearchDir} --include="*.scss" --include="*.sass" -n`,
    { 
      encoding: 'utf8',
      cwd: path.join(__dirname, '..'),
      maxBuffer: 10 * 1024 * 1024 
    }
  );

  const lines = result.trim().split('\n');
  
  if (lines.length === 0 || (lines.length === 1 && lines[0] === '')) {
    console.log(`❌ Variable ${searchPattern} not found in any component files.`);
    console.log('');
    console.log('This could mean:');
    console.log('  - The variable is defined but not used');
    console.log('  - The variable name is incorrect');
    console.log('  - The variable is only used in non-component files');
    process.exit(0);
  }

  // Group by file
  const fileUsage = {};
  lines.forEach(line => {
    const match = line.match(/^([^:]+):(\d+):(.*)/);
    if (match) {
      const [, filePath, lineNum, content] = match;
      if (!fileUsage[filePath]) {
        fileUsage[filePath] = [];
      }
      fileUsage[filePath].push({ lineNum: parseInt(lineNum), content: content.trim() });
    }
  });

  console.log(`✅ Found ${lines.length} usage(s) in ${Object.keys(fileUsage).length} file(s):\n`);

  // Display results grouped by file
  Object.entries(fileUsage).forEach(([filePath, usages]) => {
    console.log(`📄 ${filePath}`);
    usages.forEach(({ lineNum, content }) => {
      console.log(`   Line ${lineNum}: ${content}`);
    });
    console.log('');
  });

  console.log('📊 Summary:');
  console.log(`  - Total files: ${Object.keys(fileUsage).length}`);
  console.log(`  - Total usages: ${lines.length}`);
  console.log('');
  console.log('💡 If this variable name changed, you need to update all these files.');

} catch (error) {
  if (error.status === 1) {
    // grep returns status 1 when no matches found
    console.log(`❌ Variable ${searchPattern} not found in any component files.`);
    console.log('');
    console.log('This could mean:');
    console.log('  - The variable is defined but not used');
    console.log('  - The variable name is incorrect');
    console.log('  - The variable is only used in non-component files');
  } else {
    console.error('❌ Error running search:', error.message);
  }
  process.exit(0);
}
