module.exports = {
  source: ['tokens/figma/**/*.json'],
  platforms: {
    scss: {
      // Use only valid built-in transforms plus our custom one
      transforms: [
        'attribute/cti',
        'name/custom-kebab',  // Use our custom name transform
        'size/rem',
        'color/css'
      ],
      buildPath: 'tokens/build/',
      files: [
        {
          destination: '_figma-tokens.scss',
          format: 'custom/figma-variables',
          options: {
            outputReferences: false
          }
        }
      ]
    }
  },
  preprocessors: ['tokens-studio'],
  log: {
    warnings: 'warn',
    verbosity: 'default'
  },
  hooks: {
    transforms: {
      'name/custom-kebab': {
        type: 'name',
        transform: (token) => {
          // Custom name transformation to match existing SCSS conventions
          const path = token.path;
          
          // Handle color tokens with light/dark/default variants
          if (path[0] === 'color' && path.length === 3) {
            const colorBase = path[1]; // e.g., 'yellow', 'red', 'green'
            const variant = path[2]; // e.g., 'light', 'default', 'dark'
            
            if (variant === 'default') {
              // Drop the 'default' suffix: color-yellow instead of color-yellow-default
              return `color-${colorBase}`;
            } else if (variant === 'light' || variant === 'dark') {
              // Prefix instead of suffix: color-light-yellow instead of color-yellow-light
              return `color-${variant}-${colorBase}`;
            }
          }
          
          // For all other tokens, use standard kebab-case
          return path.join('-');
        }
      }
    },
    formats: {
      'custom/figma-variables': function({ dictionary, file, options }) {
        const header = `// Auto-generated from Figma tokens
// DO NOT EDIT MANUALLY - This section is managed by the Figma token sync process
// Last updated: ${new Date().toISOString()}
// To update these tokens, export from Figma and run: npm run tokens:sync

/* FIGMA TOKENS START */
`;

        const footer = `
/* FIGMA TOKENS END */
`;

        // Group tokens by category for better organization
        const tokensByCategory = {};
        
        dictionary.allTokens.forEach(token => {
          const category = token.path[0]; // First level (color, font, spacing, etc.)
          if (!tokensByCategory[category]) {
            tokensByCategory[category] = [];
          }
          tokensByCategory[category].push(token);
        });

        // Generate SCSS variables
        let output = header;
        
        // Add section headers and variables
        Object.keys(tokensByCategory).sort().forEach(category => {
          output += `\n// ${category.charAt(0).toUpperCase() + category.slice(1)} tokens\n`;
          
          tokensByCategory[category].forEach(token => {
            const comment = token.comment || token.description;
            if (comment) {
              output += `// ${comment}\n`;
            }
            // Ensure hex colors are lowercase
            let value = token.value;
            if (typeof value === 'string' && value.match(/^#[0-9A-F]{6}$/i)) {
              value = value.toLowerCase();
            }
            output += `$${token.name}: ${value};\n`;
          });
        });

        output += footer;
        return output;
      }
    }
  }
};
