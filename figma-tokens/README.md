# Figma Design Tokens Integration

This directory contains Figma design tokens that are automatically synchronized with the UNDP Design System SASS variables.

## Overview

The design tokens in `tokens.json` serve as the single source of truth for design values (colors, typography, spacing, etc.) across the UNDP Design System. These tokens are automatically transformed into SASS variables that can be used throughout the codebase.

## File Structure

```
figma-tokens/
├── input/
│   └── tokens.json          # Source design tokens from Figma
└── README.md               # This file
```

## Token Structure

The `tokens.json` file contains two main groups of tokens:

### Primitive Tokens
Basic design values that form the foundation of the design system:
- **spacing**: Spacing scale (2px, 4px, 8px, etc.)
- **fontfamily**: Font family definitions
- **fontsize**: Font size scale
- **color**: Color palette (blue, gray, yellow, red, green, azure, black, white)
- **sizing**: Sizing scale for elements
- **lineheight**: Line height ratios
- **fontweight**: Font weight values
- **textcase**: Text transformation values

### Semantic Tokens
Higher-level tokens that reference primitive tokens:
- **fontfamily**: Primary and secondary fonts
- **fontsize**: Body, heading, and display font sizes
- **lineheight**: Body, heading, and display line heights
- **color**: Text, accent, brand, action, surface, background, and border colors
- **border**: Default and subtle border widths

## Automatic Synchronization

### How It Works

1. **Design Update**: When `tokens.json` is updated (either manually or via Figma export)
2. **Push to Master**: Changes are pushed to the `master` or `main` branch
3. **Workflow Trigger**: GitHub Actions workflow is triggered automatically
4. **Token Transformation**: Tokens are processed and converted to SASS variables
5. **PR Creation**: A pull request is created against the `develop` branch
6. **Review**: Team is notified to review the changes
7. **Merge**: After approval, changes are merged and become available

### GitHub Actions Workflow

The workflow (`.github/workflows/sync-figma-tokens.yml`) performs these steps:
- Checks out the repository
- Syncs with the latest master branch
- Runs the token transformation script
- Commits the updated SASS variables
- Creates a pull request against `develop`
- Adds a comment with change summary
- Tags repository owners for visibility

## Manual Transformation

You can also run the token transformation manually:

```bash
# Transform tokens to SASS variables
npm run transform-tokens

# Build assets with new tokens
npm run build
```

## Token Transformation Rules

### Reference Resolution
Tokens can reference other tokens using curly braces:
```json
{
  "color": {
    "brand": {
      "$type": "color",
      "$value": "{color.blue.600}"
    }
  }
}
```
This will resolve to the actual value of `color.blue.600`.

### Type Conversions

- **Font Sizes**: Converted from px to rem (16px = 1rem)
- **Colors**: Preserved as-is (hex codes)
- **Spacing/Sizing**: Preserved as-is (px values)
- **Line Heights**: Preserved as percentages
- **Font Families**: Wrapped in quotes for SASS compatibility

### Variable Naming

Tokens are converted to SASS variables using kebab-case:
- `color.blue.600` → `$color-blue-600`
- `fontsize.body.default` → `$fontsize-body-default`
- `lineheight.100%` → `$lineheight-100`

### Special Characters

Special characters like `%` are removed from variable names to ensure SASS compatibility.

## SASS Variables Output

The transformed tokens are written to:
```
stories/assets/scss/_variables.scss
```

The file structure:
```scss
// FIGMA TOKENS START
// Auto-generated from figma-tokens/input/tokens.json
// Do not edit this section manually

// Spacing tokens from Figma
$spacing-2: 2px;
$spacing-4: 4px;
// ... more tokens

// FIGMA TOKENS END

// Existing non-token variables are preserved below
$img-path: '../../../assets/images';
// ... etc
```

### Preservation of Existing Variables

The transformation script:
- ✅ Preserves all existing SASS variables not present in `tokens.json`
- ✅ Updates existing variables if they're defined in tokens
- ✅ Adds new variables from tokens
- ✅ Maintains file structure and comments

## CSS Custom Properties

The SASS variables are automatically converted to CSS custom properties via:
```
stories/assets/scss/_custom_properties.scss
```

This allows tokens to be used in both SASS and CSS:
```scss
// SASS usage
.element {
  color: $color-brand;
}
```

```css
/* CSS usage */
.element {
  color: var(--undpds-color-brand);
}
```

## Updating Tokens

### From Figma

1. Export tokens from Figma (using Figma Tokens plugin or similar)
2. Update `figma-tokens/input/tokens.json` with the exported data
3. Commit and push to `master` branch
4. Wait for the GitHub Actions workflow to complete
5. Review and merge the created PR

### Manual Update

1. Edit `figma-tokens/input/tokens.json` directly
2. Run `npm run transform-tokens` to test locally
3. Verify the changes in `stories/assets/scss/_variables.scss`
4. Run `npm run build` to ensure no errors
5. Commit and push changes
6. The workflow will still create a PR for review

## Validation

The transformation includes validation:
- ✅ Valid JSON structure
- ✅ Reference resolution
- ✅ SASS compilation
- ✅ CSS generation
- ✅ Build success

## Troubleshooting

### Build Errors After Token Update

```bash
# Check SASS syntax
npm run build

# Review the diff
git diff stories/assets/scss/_variables.scss

# Revert if needed
git checkout stories/assets/scss/_variables.scss
```

### Missing Token References

If you see warnings like "Could not resolve reference {token.name}":
1. Check that the referenced token exists in `tokens.json`
2. Verify the reference path is correct
3. Ensure primitive tokens are defined before semantic tokens

### Variable Name Conflicts

If a token name conflicts with an existing variable:
- Figma tokens take precedence (by design)
- Existing non-token variables are preserved
- Review the PR to ensure no unintended overwrites

## Best Practices

1. **Always use the workflow**: Let GitHub Actions handle the synchronization
2. **Review PRs carefully**: Check for unintended changes or removals
3. **Test locally first**: Run `npm run transform-tokens && npm run build` before pushing
4. **Document changes**: Add notes in the PR if specific tokens need attention
5. **Keep tokens organized**: Maintain clear primitive/semantic separation

## Support

For questions or issues:
- Review the transformation script: `scripts/transform-tokens.js`
- Check the workflow logs in GitHub Actions
- Consult the UNDP Design System documentation
- Open an issue in the repository
