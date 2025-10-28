#!/usr/bin/env node

/**
 * Figma Token Integration Script
 * 
 * This script:
 * 1. Processes Figma tokens using Style Dictionary
 * 2. Merges them with existing Storybook variables
 * 3. Preserves Storybook-only variables
 * 4. Updates _variables.scss with proper sections
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const VARIABLES_PATH = path.join(__dirname, '../stories/assets/scss/_variables.scss');
const FIGMA_TOKENS_PATH = path.join(__dirname, '../tokens/build/_figma-tokens.scss');
const BACKUP_PATH = path.join(__dirname, '../stories/assets/scss/_variables.scss.backup');

// Marker comments to identify sections
const FIGMA_START_MARKER = '/* FIGMA TOKENS START */';
const FIGMA_END_MARKER = '/* FIGMA TOKENS END */';
const STORYBOOK_MARKER = '/* STORYBOOK-ONLY VARIABLES */';

console.log('🎨 Starting Figma token integration...\n');

// Step 1: Run Style Dictionary to generate tokens
console.log('📦 Building tokens with Style Dictionary...');
try {
  execSync('npx style-dictionary build --config style-dictionary.config.js', { 
    stdio: 'inherit', 
    cwd: path.join(__dirname, '..') 
  });
  console.log('✅ Tokens built successfully\n');
} catch (error) {
  console.error('❌ Failed to build tokens:', error.message);
  process.exit(1);
}

// Step 2: Read the generated Figma tokens
console.log('📖 Reading Figma tokens...');
if (!fs.existsSync(FIGMA_TOKENS_PATH)) {
  console.error(`❌ Figma tokens file not found at ${FIGMA_TOKENS_PATH}`);
  process.exit(1);
}
const figmaTokens = fs.readFileSync(FIGMA_TOKENS_PATH, 'utf8');
console.log('✅ Figma tokens loaded\n');

// Step 3: Read existing variables file
console.log('📖 Reading existing variables file...');
if (!fs.existsSync(VARIABLES_PATH)) {
  console.error(`❌ Variables file not found at ${VARIABLES_PATH}`);
  process.exit(1);
}
const existingContent = fs.readFileSync(VARIABLES_PATH, 'utf8');

// Create backup
fs.writeFileSync(BACKUP_PATH, existingContent);
console.log(`✅ Backup created at ${BACKUP_PATH}\n`);

// Step 4: Parse existing content to extract Storybook-only variables
console.log('🔍 Analyzing existing variables...');

// Extract all existing variable definitions
const variableRegex = /\$[\w-]+\s*:/g;
const existingVariables = new Set();
let match;
while ((match = variableRegex.exec(existingContent)) !== null) {
  existingVariables.add(match[0].trim().replace(':', ''));
}

// Extract Figma token variable names from generated file
const figmaVariables = new Set();
let figmaMatch;
while ((figmaMatch = variableRegex.exec(figmaTokens)) !== null) {
  figmaVariables.add(figmaMatch[0].trim().replace(':', ''));
}

// Identify Storybook-only variables
const storybookOnlyVars = new Set([...existingVariables].filter(v => !figmaVariables.has(v)));

console.log(`  - Total existing variables: ${existingVariables.size}`);
console.log(`  - Figma token variables: ${figmaVariables.size}`);
console.log(`  - Storybook-only variables: ${storybookOnlyVars.size}\n`);

// Step 5: Extract Storybook-only variable definitions
const storybookOnlyContent = [];
const lines = existingContent.split('\n');
let inComment = false;
let currentBlock = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmedLine = line.trim();
  
  // Check if this line contains a Storybook-only variable
  const hasStorybookVar = [...storybookOnlyVars].some(varName => 
    line.includes(varName + ':') || line.includes(varName + ' :')
  );
  
  if (hasStorybookVar) {
    // Include any preceding comments
    let j = i - 1;
    const precedingComments = [];
    while (j >= 0) {
      const prevLine = lines[j].trim();
      if (prevLine.startsWith('//') || prevLine === '') {
        precedingComments.unshift(lines[j]);
        j--;
      } else {
        break;
      }
    }
    
    storybookOnlyContent.push(...precedingComments);
    storybookOnlyContent.push(line);
    
    // Include any continuation lines or inline comments
    let k = i + 1;
    while (k < lines.length && !lines[k].trim().startsWith('$')) {
      if (lines[k].trim() !== '') {
        storybookOnlyContent.push(lines[k]);
      }
      k++;
      if (lines[k - 1].includes(';')) break;
    }
  }
}

// Step 6: Build the new variables file
console.log('🔨 Building new variables file...');

let newContent = '';

// Add file header comment
newContent += `// UNDP Design System Variables
// This file contains both Figma-synced tokens and Storybook-only variables
// 
// IMPORTANT:
// - Variables in the FIGMA TOKENS section are auto-generated and should not be edited manually
// - To update Figma tokens, export from Figma and run: npm run tokens:sync
// - Storybook-only variables can be edited manually in the designated section

`;

// Add Figma tokens
newContent += figmaTokens;

// Add Storybook-only variables section
if (storybookOnlyContent.length > 0) {
  newContent += '\n\n' + STORYBOOK_MARKER + '\n';
  newContent += '// These variables are specific to Storybook and are not synced with Figma\n';
  newContent += '// You can safely edit these variables\n\n';
  newContent += storybookOnlyContent.join('\n');
}

// Add closing comment
newContent += '\n\n/* variables end */\n';

// Step 7: Write the new file
fs.writeFileSync(VARIABLES_PATH, newContent);
console.log(`✅ Variables file updated at ${VARIABLES_PATH}\n`);

// Step 8: Summary
console.log('📊 Summary:');
console.log('  ✅ Figma tokens integrated');
console.log('  ✅ Storybook-only variables preserved');
console.log(`  ✅ Backup saved to ${BACKUP_PATH}`);
console.log('\n🎉 Figma token integration complete!');
console.log('\n⚠️  Next steps:');
console.log('  1. Review the changes in _variables.scss');
console.log('  2. Test your Storybook components');
console.log('  3. Commit the changes if everything looks good');
console.log('  4. Delete the backup file if no longer needed\n');
