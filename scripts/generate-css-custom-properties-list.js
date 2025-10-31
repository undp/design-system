#!/usr/bin/env node

/**
 * Generate a printable list of all available CSS custom properties
 * 
 * This script extracts CSS custom properties from the compiled CSS files
 * and formats them in a compact, grouped layout by type for easy reference.
 * Output format: --undpds-... properties grouped by category
 */

const fs = require('fs');
const path = require('path');

// Path to the compiled CSS file containing custom properties
const CSS_PATH = path.join(__dirname, '../docs/css/base-minimal.min.css');
const OUTPUT_PATH = path.join(__dirname, '../figma-tokens/css-custom-properties.md');

/**
 * Extract CSS custom properties with values from CSS content
 * @param {string} content - CSS file content
 * @returns {Map<string, string>} - Map of property names to their values
 */
function extractCustomProperties(content) {
  // Match all --undpds-* custom properties with their values
  const regex = /--(undpds-[a-z0-9_-]+)\s*:\s*([^;}\n]+)/g;
  const properties = new Map();
  
  let match;
  while ((match = regex.exec(content)) !== null) {
    const propName = `--${match[1]}`;
    const propValue = match[2].trim();
    // Store first occurrence (avoid duplicates)
    if (!properties.has(propName)) {
      properties.set(propName, propValue);
    }
  }
  
  // Sort by property name
  return new Map([...properties.entries()].sort((a, b) => a[0].localeCompare(b[0])));
}

/**
 * Group custom properties by their type/category
 * Categories: color, spacing, font-family, font-size, font-weight,
 * line-height, text-case, border, sizing, and other.
 * Empty categories are automatically removed.
 * @param {Map<string, string>} propertiesMap - Map of property names to values
 * @returns {Object} - Properties grouped by category with values
 */
function groupProperties(propertiesMap) {
  const groups = {
    color: [],
    spacing: [],
    'font-family': [],
    'font-size': [],
    'font-weight': [],
    'line-height': [],
    'text-case': [],
    border: [],
    sizing: [],
    other: []
  };

  propertiesMap.forEach((value, prop) => {
    // Extract the category from property name (--undpds-{category}-...)
    const parts = prop.replace('--undpds-', '').split('-');
    const propWithValue = { name: prop, value: value };
    
    if (parts[0] === 'color') {
      groups.color.push(propWithValue);
    } else if (parts[0] === 'spacing') {
      groups.spacing.push(propWithValue);
    } else if (parts[0] === 'font' && parts[1] === 'family') {
      groups['font-family'].push(propWithValue);
    } else if (parts[0] === 'font' && parts[1] === 'size') {
      groups['font-size'].push(propWithValue);
    } else if (parts[0] === 'font' && parts[1] === 'weight') {
      groups['font-weight'].push(propWithValue);
    } else if (parts[0] === 'line' && parts[1] === 'height') {
      groups['line-height'].push(propWithValue);
    } else if (parts[0] === 'text' && parts[1] === 'case') {
      groups['text-case'].push(propWithValue);
    } else if (parts[0] === 'border') {
      groups.border.push(propWithValue);
    } else if (parts[0] === 'sizing') {
      groups.sizing.push(propWithValue);
    } else {
      groups.other.push(propWithValue);
    }
  });

  // Remove empty groups
  Object.keys(groups).forEach(key => {
    if (groups[key].length === 0) {
      delete groups[key];
    }
  });

  return groups;
}

/**
 * Format properties in a table layout with values
 * @param {Object} groups - Properties grouped by category with values
 * @returns {string} - Formatted markdown content
 */
function formatPropertiesCompact(groups) {
  const lines = [];
  
  lines.push('# CSS Custom Properties Reference');
  lines.push('');
  lines.push('This document lists all available CSS custom properties (CSS variables) in the UNDP Design System.');
  lines.push('These properties are automatically generated from Figma design tokens.');
  lines.push('');
  lines.push('**Usage:** `var(--undpds-property-name)`');
  lines.push('');
  lines.push('---');
  lines.push('');

  const totalProperties = Object.values(groups).reduce((sum, arr) => sum + arr.length, 0);
  lines.push(`**Total Properties:** ${totalProperties}`);
  lines.push('');

  // Format each group
  Object.entries(groups).forEach(([category, properties]) => {
    lines.push(`## ${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')} (${properties.length})`);
    lines.push('');
    
    // Use columns only if more than 10 properties
    if (properties.length <= 10) {
      // Simple list format for small sections
      properties.forEach(prop => {
        lines.push(`- \`${prop.name}\`: \`${prop.value}\``);
      });
    } else {
      // Determine column count based on max property name length
      const maxNameLength = Math.max(...properties.map(p => p.name.length));
      // Use 2 columns if property names are long (> 35 chars), otherwise 3 columns
      const columnsCount = maxNameLength > 35 ? 2 : 3;
      
      // Create table header based on column count
      if (columnsCount === 2) {
        lines.push('| Property | Value | Property | Value |');
        lines.push('|----------|-------|----------|-------|');
      } else {
        lines.push('| Property | Value | Property | Value | Property | Value |');
        lines.push('|----------|-------|----------|-------|----------|-------|');
      }
      
      // Split into rows and remove empty cells
      for (let i = 0; i < properties.length; i += columnsCount) {
        const row = [];
        for (let j = 0; j < columnsCount; j++) {
          const prop = properties[i + j];
          if (prop) {
            row.push(`\`${prop.name}\``);
            row.push(`\`${prop.value}\``);
          }
        }
        // Only add row if it has content
        if (row.length > 0) {
          lines.push(`| ${row.join(' | ')} |`);
        }
      }
    }
    
    lines.push('');
  });

  lines.push('---');
  lines.push('');
  lines.push('*This file is automatically generated by `scripts/generate-css-custom-properties-list.js`*');
  lines.push('*Last updated: ' + new Date().toISOString().split('T')[0] + '*');

  return lines.join('\n');
}

/**
 * Main function
 */
function generatePropertiesList() {
  console.log('📋 Generating CSS Custom Properties List...\n');
  
  // Check if CSS file exists
  if (!fs.existsSync(CSS_PATH)) {
    console.error(`❌ Error: CSS file not found at ${CSS_PATH}`);
    console.error('   Please run "npm run build" first to generate the CSS files.');
    process.exit(1);
  }
  
  // Read CSS file
  console.log(`📖 Reading CSS from: ${CSS_PATH}`);
  const cssContent = fs.readFileSync(CSS_PATH, 'utf8');
  
  // Extract custom properties
  console.log('🔍 Extracting custom properties...');
  const properties = extractCustomProperties(cssContent);
  console.log(`   Found ${properties.size} unique custom properties`);
  
  // Group properties
  console.log('📊 Grouping properties by category...');
  const groups = groupProperties(properties);
  const categoryCount = Object.keys(groups).length;
  console.log(`   Organized into ${categoryCount} categories`);
  
  // Format output
  console.log('✨ Formatting output...');
  const output = formatPropertiesCompact(groups);
  
  // Write to file
  console.log(`💾 Writing to: ${OUTPUT_PATH}`);
  fs.writeFileSync(OUTPUT_PATH, output, 'utf8');
  
  console.log('\n✅ CSS Custom Properties list generated successfully!');
  console.log(`📄 Output: ${path.relative(process.cwd(), OUTPUT_PATH)}`);
  
  // Summary
  console.log('\n📊 Summary by category:');
  Object.entries(groups).forEach(([category, properties]) => {
    console.log(`   - ${category}: ${properties.length} properties`);
  });
}

// Run the script
if (require.main === module) {
  try {
    generatePropertiesList();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error generating properties list:');
    console.error(error);
    process.exit(1);
  }
}

module.exports = { generatePropertiesList, extractCustomProperties, groupProperties };
