# Figma to Storybook Design Token Integration

This document describes the one-way integration between Figma and Storybook using design tokens.

## Overview

The UNDP Design System uses Figma as the authoritative source for design tokens (colors, typography, spacing, etc.). These tokens are automatically synchronized to Storybook's SCSS variables using a token transformation pipeline.

## Architecture

```
Figma Design File
    ↓ (Export via Figma Plugin)
figma-tokens/input/tokens.json
    ↓ (Style Dictionary transformation)
tokens/build/_figma-tokens.scss
    ↓ (Merge script)
stories/assets/scss/_variables.scss
    ↓ (Webpack SCSS compilation)
Storybook Components
```

## Prerequisites

1. **Figma Account** with access to the UNDP Design System file
2. **Figma Tokens Plugin** (recommended) or manual token export capability
3. **Node.js** v20+ and npm

## Figma Plugin Setup

### Recommended: Figma Tokens Plugin

1. **Install the Plugin**
   - Open your Figma file
   - Go to **Plugins** → **Browse plugins in Community**
   - Search for **"Tokens Studio for Figma"** (formerly Figma Tokens)
   - Click **Install**

2. **Configure Token Export**
   - Run the plugin: **Plugins** → **Tokens Studio for Figma**
   - In the plugin, go to **Settings** → **Export**
   - Configure export format:
     - Format: **JSON**
     - Structure: **Nested** (hierarchical)
     - Include: All token types (color, spacing, typography, etc.)

3. **Export Tokens**
   - In the plugin, click **Export**
   - Select all token sets you want to export
   - Save the exported JSON file as `figma-tokens/input/tokens.json` in your local repository

### Alternative: Manual Export

If you prefer not to use a plugin, you can manually create the `tokens.json` file following this structure:

```json
{
  "color": {
    "blue": {
      "500": {
        "value": "#3288ce",
        "type": "color"
      }
    }
  },
  "font": {
    "size": {
      "16": {
        "value": "1rem",
        "type": "fontSize"
      }
    }
  },
  "spacing": {
    "05": {
      "value": "1rem",
      "type": "spacing"
    }
  }
}
```

## Token Synchronization Workflow

### Step 1: Export Tokens from Figma

Export your design tokens from Figma using the plugin (see above) and save to:
```
figma-tokens/input/tokens.json
```

### Step 2: Run Token Synchronization

Execute the synchronization script:

```bash
npm run tokens:sync
```

This command will:
1. ✅ Transform Figma tokens using Style Dictionary
2. ✅ Merge tokens with existing Storybook variables
3. ✅ Preserve Storybook-only variables
4. ✅ Update `stories/assets/scss/_variables.scss`
5. ✅ Create a backup at `_variables.scss.backup`

### Step 3: Review Changes

1. Check the updated `stories/assets/scss/_variables.scss` file
2. Verify that:
   - Figma tokens are in the `FIGMA TOKENS` section
   - Storybook-only variables are preserved in the `STORYBOOK-ONLY VARIABLES` section
   - All variable values are correct

### Step 4: Test in Storybook

```bash
npm run storybook
```

Navigate through your components to ensure:
- Colors render correctly
- Spacing is consistent
- Typography scales properly

### Step 5: Commit Changes

If everything looks good:

```bash
git add figma-tokens/input/tokens.json
git add stories/assets/scss/_variables.scss
git add package.json package-lock.json
git commit -m "Update design tokens from Figma"
git push
```

## Automated Workflow with GitHub Actions

For teams that want automated token synchronization, we provide a GitHub Actions workflow that handles the entire process automatically.

### Automated Workflow Benefits

- ✅ **Automatic processing**: Tokens sync automatically when pushed
- ✅ **Pull Request creation**: Changes are submitted as PRs for review
- ✅ **Build validation**: Ensures changes don't break the build
- ✅ **Team review**: Changes go through standard PR review process
- ✅ **Audit trail**: Clear history of all token updates

### Quick Setup

1. **Push tokens to the dedicated branch**:
   ```bash
   git checkout -b update-figma-tokens
   git add figma-tokens/input/tokens.json
   git commit -m "chore: update design tokens from Figma"
   git push origin update-figma-tokens
   ```

2. **GitHub Actions automatically**:
   - Runs token sync
   - Updates SCSS variables
   - Creates PR to `develop`
   - Validates build

3. **Review and merge the PR**

### Full Documentation

For complete setup instructions, workflow configuration, and advanced options, see:
- **[GITHUB_ACTIONS_WORKFLOW.md](GITHUB_ACTIONS_WORKFLOW.md)** - Complete GitHub Actions setup guide

## Token Structure

### Supported Token Types

The integration supports the following token types from Figma:

| Token Type | Figma Type | SCSS Output | Example |
|------------|-----------|-------------|---------|
| Colors | `color` | `$color-*` | `$color-blue-500: #3288ce;` |
| Font Sizes | `fontSize` | `$font-size-*` | `$font-size-16: 1rem;` |
| Spacing | `spacing` | `$spacing-*` | `$spacing-05: 1rem;` |

### Variable Naming Convention

Figma tokens are transformed to SCSS variables using kebab-case with special rules for color variants:

**Standard tokens:**
- Figma: `color.blue.500` → SCSS: `$color-blue-500`
- Figma: `font.size.16` → SCSS: `$font-size-16`
- Figma: `spacing.05` → SCSS: `$spacing-05`

**Color variant tokens** (special transformation):
- Figma: `color.yellow.default` → SCSS: `$color-yellow` (default suffix is dropped)
- Figma: `color.yellow.light` → SCSS: `$color-light-yellow` (variant is prefixed)
- Figma: `color.yellow.dark` → SCSS: `$color-dark-yellow` (variant is prefixed)

This transformation ensures compatibility with existing SCSS conventions in the design system.

## File Structure

```
design-system/
├── tokens/
│   ├── figma/
│   │   └── tokens.json          # Exported from Figma
│   └── build/
│       └── _figma-tokens.scss   # Generated by Style Dictionary
├── scripts/
│   └── sync-figma-tokens.js     # Synchronization script
├── stories/assets/scss/
│   ├── _variables.scss          # Final merged variables
│   └── _variables.scss.backup   # Backup (generated)
├── style-dictionary.config.js   # Style Dictionary configuration
└── package.json
```

## Storybook-Only Variables

Some variables are specific to Storybook implementation and are not managed by Figma:

- Image paths (`$img-path-*`)
- Font family fallbacks
- Width constants (`$width-*`)
- Header heights
- SDG-specific colors and derivatives
- Language selectors

These variables are preserved in the `STORYBOOK-ONLY VARIABLES` section and can be edited manually.

## Variable Updates and Component Impact

### Handling Variable Name Changes

If a variable name changes in Figma:

1. The sync script will create the new variable
2. The old variable will be moved to Storybook-only variables
3. **Manual step required**: Update component SCSS files to use the new variable name

Example:
```scss
// Before
.component {
  color: $color-primary-blue;
}

// After (if renamed to $color-blue-500)
.component {
  color: $color-blue-500;
}
```

### Finding Variable Usage

To find where a variable is used:

```bash
# Search for a specific variable
grep -r "\$color-blue-500" stories/ --include="*.scss"

# Count variable usage
grep -r "\$color-\|\$font-\|\$spacing-" stories/ --include="*.scss" | wc -l
```

## Troubleshooting

### Issue: Style Dictionary build fails

**Solution:**
- Check that `figma-tokens/input/tokens.json` is valid JSON
- Ensure all required token properties (`value`, `type`) are present
- Run `npm run tokens:build` separately to see detailed errors

### Issue: Variables not updating in Storybook

**Solution:**
- Clear Webpack cache: Remove `.cache` directory
- Rebuild: `npm run build`
- Restart Storybook: `npm run storybook`

### Issue: Backup file not deleted

**Solution:**
- Review the backup at `stories/assets/scss/_variables.scss.backup`
- If changes look good, manually delete the backup:
  ```bash
  rm stories/assets/scss/_variables.scss.backup
  ```

### Issue: Lost custom variables

**Solution:**
- Restore from backup:
  ```bash
  cp stories/assets/scss/_variables.scss.backup stories/assets/scss/_variables.scss
  ```
- Re-run sync with corrected configuration

## Advanced Configuration

### Customizing Token Transformation

Edit `style-dictionary.config.js` to:
- Add custom transforms for new token types
- Change variable naming conventions
- Add additional output formats

Example - adding a custom transform:

```javascript
StyleDictionary.registerTransform({
  name: 'my-custom-transform',
  type: 'value',
  matcher: (token) => token.type === 'customType',
  transformer: (token) => {
    return `/* custom */ ${token.value}`;
  }
});
```

### Extending the Sync Script

The sync script at `scripts/sync-figma-tokens.js` can be customized to:
- Add validation rules
- Generate component migration guides
- Create automated pull requests
- Send notifications

## Best Practices

1. **Regular Syncs**: Update tokens regularly (e.g., weekly) to stay in sync with design
2. **Version Control**: Always commit both `tokens.json` and `_variables.scss` together
3. **Review Changes**: Use `git diff` to review changes before committing
4. **Test Thoroughly**: Test all components after major token updates
5. **Document Changes**: Add changelog entries for significant token updates
6. **Communicate**: Notify the team when design tokens are updated

## CI/CD Integration

Consider automating token synchronization in your CI/CD pipeline:

```yaml
# Example GitHub Actions workflow
name: Sync Design Tokens

on:
  push:
    paths:
      - 'figma-tokens/input/tokens.json'

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run tokens:sync
      - run: npm run build
      - run: npm run build-storybook
```

## Support

For questions or issues with the Figma token integration:

1. Check this documentation
2. Review existing issues in the repository
3. Contact the design system team
4. Create a new issue with the `tokens` label

## References

- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [Tokens Studio for Figma](https://tokens.studio/)
- [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)
