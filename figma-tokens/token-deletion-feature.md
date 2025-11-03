# Token Deletion Feature

## Overview

The Figma token synchronization workflow now supports automatic deletion of SASS variables when their corresponding tokens are removed from Figma. This ensures that the `_variables.scss` file stays in sync with the design tokens defined in Figma.

**New**: Deleted variables with matching values are automatically mapped to existing variables through backwards compatibility aliases, ensuring existing code continues to work seamlessly.

## How It Works

### 1. Token-Derived Variable Detection

The transform script identifies which variables in `_variables.scss` are derived from Figma tokens by matching against known patterns:

- **Color tokens**: `$color-blue-600`, `$color-black`, `$color-text-primary`
- **Font size tokens**: `$font-size-20`, `$font-size-body`
- **Font family tokens**: `$font-family-proximanova`, `$font-family-primary`
- **Spacing tokens**: `$spacing-002`, `$spacing-036`
- **Line height tokens**: `$line-height-100`, `$line-height-body`
- **Font weight tokens**: `$font-weight-bold`, `$font-weight-regular`
- **Text case tokens**: `$text-case-none`, `$text-case-uppercase`
- **Border tokens**: `$border-default`, `$border-subtle`
- **Sizing tokens**: `$sizing-16`, `$sizing-64`

### 2. Variable Preservation

The script is conservative and preserves variables that should not be deleted:

- **Manual variables**: Variables that don't match token patterns (e.g., `$img-path`, `$width-150`)
- **Legacy font families**: `$Font-Family-ProximaNova` and similar (PascalCase format with fallback fonts)
- **Alias variables**: Variables that reference other variables (e.g., `$spacing-36: $spacing-036;`)
- **Curated font families**: Font family variables with fallback fonts (e.g., `'ProximaNova', sans-serif`)

### 3. Deletion Process

When a token is removed from `figma-tokens/input/tokens.json`:

1. The transform script identifies the corresponding SASS variable
2. Checks if it's a token-derived variable
3. Verifies it's not in the exclusion list
4. Searches for existing variables with matching values
5. If a match is found, creates a backwards compatibility alias
6. If no match is found, removes the variable completely
7. Reports the deletion in the summary

### 4. Backwards Compatibility Aliases

**New Feature**: When a variable is deleted but its value matches an existing variable, a backwards compatibility alias is automatically created:

```scss
// Example: Old variable deleted, but value matches new variable
// Old: $sizing-8: 8px;
// New: $spacing-008: 8px;
// Result: Backwards compatibility alias created
$sizing-8: $spacing-008;
```

This ensures that existing SCSS code continues to work without any changes required.

## Workflow Integration

The GitHub Actions workflow (`sync-figma-tokens.yml`) now includes:

- **Detailed deletion reporting**: Lists all deleted variables in the PR description
- **Backwards compatibility tracking**: Shows how many deleted variables have aliases
- **Impact warning**: Alerts reviewers about potential breaking changes
- **Variable counts**: Tracks new, modified, and deleted variables

### PR Summary Example

```markdown
### Changes Summary
- **Total tokens processed**: 109
- **New variables**: 5
- **Modified variables**: 96
- **Removed variables**: 17

### 🗑️ Deleted Variables
The following SASS variables were removed because their corresponding tokens were deleted from Figma:
  - `$sizing-8`
  - `$spacing-05`

**Note**: 17 of these deleted variables have backwards compatibility aliases that map them to existing variables with matching values, ensuring existing code continues to work.

**Impact**: Review references to these variables in your SCSS files. Variables with backwards compatibility aliases will continue to work.
```

## Testing

### Running Tests

```bash
# Validate token transformation (includes deletion logic)
npm run validate-tokens

# Test deletion feature specifically
npm run test-token-deletion
```

### Test Coverage

The `test-token-deletion.js` script verifies:

1. ✅ Fake token-derived variables are correctly identified and deleted
2. ✅ Manual variables are preserved
3. ✅ Legacy Font-Family variables are preserved
4. ✅ Backwards compatibility aliases are preserved
5. ✅ Deletion results are accurately reported

## Migration Guide

### If Your Build Breaks After Token Sync

If the build fails after a token sync PR due to missing variables:

1. **Check the PR description** for the list of deleted variables
2. **Search your codebase** for references to these variables:
   ```bash
   grep -r "\$spacing-01" stories/
   ```
3. **Update references** to use new variable names or fallback values
4. **Review Figma** to understand why the token was removed

### Example Migration

If `$spacing-01` was deleted and replaced with `$spacing-002`:

```scss
// Before
.my-component {
  margin: $spacing-01;
}

// After
.my-component {
  margin: $spacing-002;
}
```

## Configuration

### Adding New Token Patterns

To add new token patterns for deletion detection, edit `scripts/transform-tokens.js`:

```javascript
function isTokenDerivedVariable(varName) {
  const tokenPatterns = [
    // ... existing patterns
    /^new-pattern-\d+$/,  // Add your pattern here
  ];
  // ...
}
```

### Excluding Variables from Deletion

To preserve specific variables, edit the `shouldPreserveVariable` function:

```javascript
function shouldPreserveVariable(varName, varValue) {
  // Add custom preservation logic
  if (varName.startsWith('special-')) {
    return true;
  }
  // ...
}
```

## Technical Details

### Transform Script Changes

- **New function**: `isTokenDerivedVariable(varName)` - Pattern matching for token-derived variables
- **New function**: `shouldPreserveVariable(varName, varValue)` - Exclusion logic
- **Updated function**: `updateSassVariables()` - Now tracks and deletes variables
- **New output fields**: `variablesDeleted`, `deletedVars` in transformation result

### Workflow Changes

- **Enhanced summary generation**: Extracts deletion info from JSON output
- **Deleted variables section**: Lists up to 20 deleted variables with overflow indication
- **Impact warning**: Alerts reviewers about potential breaking changes

## Benefits

1. **Automatic cleanup**: No manual intervention needed to remove obsolete variables
2. **Consistency**: `_variables.scss` always reflects current Figma tokens
3. **Visibility**: Deleted variables are clearly reported in PRs
4. **Safety**: Conservative approach preserves manually-maintained variables

## Limitations

1. **Pattern-based detection**: May not catch all edge cases
2. **No usage analysis**: Doesn't check if deleted variables are still in use
3. **Manual review required**: PRs with deletions should be carefully reviewed

## Future Enhancements

Potential improvements:

- [ ] Static analysis to detect variable usage before deletion
- [ ] Deprecation warnings before deletion
- [ ] Configurable token patterns via JSON config
- [ ] Dry-run mode to preview deletions
