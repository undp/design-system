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

Tokens are converted to SASS variables using kebab-case with proper hyphenation for CSS property names:
- `color.blue.600` → `$color-blue-600`
- `fontfamily.proximanova` → `$font-family-proximanova`
- `fontsize.body.default` → `$font-size-body-default`
- `lineheight.100%` → `$line-height-100`
- `fontweight.bold` → `$font-weight-bold`
- `textcase.uppercase` → `$text-case-uppercase`

### Spacing Variables: Dual Notation System

**Spacing is the ONLY variable type that allows duplicates** to support both ranking and pixel-based systems:

#### Rank-Based Notation (2 digits, padded with zeros)
For semantic ranking from 01 to 13:
```scss
$spacing-01: 0.125rem;  // Rank 1
$spacing-02: 0.25rem;   // Rank 2
...
$spacing-12: 6rem;      // Rank 12
$spacing-13: 10rem;     // Rank 13 (max)
```
- Uses rem units
- Preserved from existing variables
- NOT modified by Figma tokens

#### Pixel-Based Notation (3 digits, padded with zeros)
For exact pixel values from Figma:
```scss
$spacing-002: 2px;      // From Figma token "2"
$spacing-004: 4px;      // From Figma token "4"
$spacing-016: 16px;     // From Figma token "16"
$spacing-036: 2.25rem;  // Migrated from $spacing-36
$spacing-160: 160px;    // From Figma token "160"
```
- Uses px or rem units
- Created/updated by Figma tokens
- All values > 13 use only this notation (no rank-based equivalent)
- Existing 2-digit variables > 13 are automatically migrated to 3-digit notation

**Why both notations?**
- Rank-based provides semantic meaning (spacing scale steps)
- Pixel-based provides exact Figma values for pixel-perfect implementation
- Designers can specify exact pixel values while developers can use semantic ranks

### Semantic Tokens Use SASS References

Semantic tokens reference primitive tokens using SASS variables rather than resolved values:
```scss
// Primitive token
$color-black: #000000;

// Semantic token (uses reference)
$color-border-default: $color-black;  // NOT #000000

// CSS custom property (automatically resolved)
--undpds-color-border-default: #000000;
```

This provides better maintainability - updating `$color-black` automatically updates all semantic tokens that reference it.

### Special Characters

Special characters like `%` are removed from variable names to ensure SASS compatibility.

## SASS Variables Output

The transformed tokens update existing variables in:
```
stories/assets/scss/_variables.scss
```

Variables are merged with the existing file:
- Existing variables with matching names are updated with Figma token values (Figma takes precedence)
- New variables from tokens are added to the end of the file
- Variables not present in tokens.json are preserved unchanged

Example file structure:
```scss
// Image variables (preserved)
$img-path: '../../../assets/images';

// Colors (updated with Figma values)
$color-black: #000000;
$color-white: #ffffff;
$color-blue-600: #006EB5;  // Updated from Figma

// Font sizes (updated)
$font-size-20: 1.25rem;

// ... other existing variables ...

// Additional Figma tokens (new variables)
// Font-family tokens
$font-family-proximanova: 'Proxima Nova';
$font-family-primary: $font-family-proximanova;  // Reference

// Semantic color tokens
$color-border-default: $color-black;  // Uses reference
$color-brand: $color-blue-600;
```

### Variable Merging Strategy

The transformation script:
- ✅ Updates existing variables with Figma token values (Figma takes precedence)
- ✅ Adds new variables from tokens at the end of the file
- ✅ Preserves all variables not present in tokens.json
- ✅ Uses SASS references for semantic tokens
- ✅ No duplicate variables created

## CSS Custom Properties

The SASS variables are automatically converted to CSS custom properties via:
```
stories/assets/scss/_custom_properties.scss
```

SASS variable references are automatically resolved during compilation:
```scss
// Input SASS
$color-black: #000000;
$color-border-default: $color-black;

// Output CSS
:root {
  --undpds-color-black: #000000;
  --undpds-color-border-default: #000000;  // Reference resolved
}
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
