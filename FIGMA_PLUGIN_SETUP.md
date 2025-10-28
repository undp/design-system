# Figma Tokens Plugin - Quick Setup Guide

This guide provides step-by-step instructions for setting up the Figma Tokens plugin to export design tokens to the UNDP Design System.

## Plugin Installation

### Step 1: Install Tokens Studio for Figma

1. Open your Figma file containing the UNDP Design System
2. Click on the **Plugins** menu → **Browse plugins in Community**
3. Search for **"Tokens Studio for Figma"** (formerly known as Figma Tokens)
4. Click **Install** (or **Try it out** if you haven't installed it yet)

> **Note:** The plugin is free and open-source. You can find it at https://tokens.studio/

## Plugin Configuration

### Step 2: Open the Plugin

1. In your Figma file, go to **Plugins** → **Tokens Studio for Figma**
2. The plugin panel will open on the right side of your Figma window

### Step 3: Create or Import Token Sets

The plugin organizes tokens into "sets". For the UNDP Design System, you should have token sets for:

- **Colors** - All color tokens (blue, gray, yellow, red, green, azure, etc.)
- **Typography** - Font sizes and font families
- **Spacing** - Spacing scale values
- *Optional:* Sizing, Border radius, Shadows, etc.

#### Option A: Create Tokens from Figma Styles

If you have existing Figma styles:

1. In the plugin panel, click **Settings** (gear icon)
2. Go to **Import/Export** → **Import from Figma**
3. Select which style types to import:
   - ✅ Color styles
   - ✅ Text styles
   - ✅ Effect styles (if needed)
4. Click **Import**

#### Option B: Create Tokens Manually

1. Click the **+** button next to the token set name
2. Select token type (Color, Dimension, etc.)
3. Enter token name (e.g., `color.blue.500`)
4. Enter token value (e.g., `#3288ce`)
5. Click **Save**

### Step 4: Organize Token Structure

Organize your tokens hierarchically to match the expected structure:

```
color/
  ├── black
  ├── white
  ├── blue/
  │   ├── 100
  │   ├── 200
  │   ├── ...
  │   └── 800
  ├── gray/
  │   └── ...
  └── ...

font/
  └── size/
      ├── 12
      ├── 14
      └── ...

spacing/
  ├── 01
  ├── 02
  └── ...
```

## Token Export Configuration

### Step 5: Configure Export Settings

1. In the plugin, click **Settings** (gear icon)
2. Go to **Export** settings
3. Configure the following:

   **Format:**
   - Select: **JSON**
   
   **Structure:**
   - Select: **Nested** (hierarchical structure)
   
   **Token Format:**
   - ✅ Include `type` property
   - ✅ Include `value` property
   - ✅ Include `description` (optional but recommended)

### Step 6: Export Tokens

1. Click the **Export** button in the plugin (or go to Settings → Export)
2. Select all token sets you want to export
3. Click **Export** and save the file
4. Name the file `tokens.json`
5. Save it to the `tokens/figma/` directory in your local repository

## Token Naming Conventions

Follow these conventions when creating tokens:

### Colors

```json
{
  "color": {
    "blue": {
      "500": {
        "value": "#3288ce",
        "type": "color"
      }
    }
  }
}
```

This becomes: `$color-blue-500: #3288ce;`

### Font Sizes

```json
{
  "font": {
    "size": {
      "16": {
        "value": "1rem",
        "type": "fontSize"
      }
    }
  }
}
```

This becomes: `$font-size-16: 1rem;`

### Spacing

```json
{
  "spacing": {
    "05": {
      "value": "1rem",
      "type": "spacing"
    }
  }
}
```

This becomes: `$spacing-05: 1rem;`

## Token Synchronization Workflow

After exporting from Figma:

```bash
# 1. Place the exported tokens.json in the correct directory
# figma-tokens/input/tokens.json

# 2. Run the token sync command
npm run tokens:sync

# 3. Review the changes
git diff stories/assets/scss/_variables.scss

# 4. Test in Storybook
npm run storybook

# 5. Commit changes
git add figma-tokens/input/tokens.json stories/assets/scss/_variables.scss
git commit -m "Update design tokens from Figma"
```

## Best Practices

### Token Names

- Use descriptive names: `blue-500` instead of `primary-color`
- Use numbers for color scales: `100`, `200`, ..., `900`
- Use consistent spacing scale: `01`, `02`, etc.
- Avoid special characters except hyphens

### Token Values

- **Colors:** Use hex format `#RRGGBB` (uppercase or lowercase)
- **Sizes:** Use rem units for consistency (`1rem`, `0.75rem`)
- **Spacing:** Use rem units (`0.5rem`, `1rem`, `2rem`)

### Descriptions

Add descriptions to your tokens for better documentation:

```json
{
  "color": {
    "blue": {
      "500": {
        "value": "#3288ce",
        "type": "color",
        "description": "Primary brand blue, used for buttons and links"
      }
    }
  }
}
```

## Advanced Features

### Token Aliases (References)

You can reference other tokens:

```json
{
  "color": {
    "primary": {
      "value": "{color.blue.500}",
      "type": "color"
    }
  }
}
```

### Composite Tokens

For complex values:

```json
{
  "shadow": {
    "default": {
      "value": {
        "x": "0",
        "y": "2px",
        "blur": "4px",
        "color": "{color.black}"
      },
      "type": "shadow"
    }
  }
}
```

## Troubleshooting

### Issue: Plugin not showing tokens

**Solution:**
- Refresh the plugin (close and reopen)
- Check if you're on the correct token set
- Verify that token values are properly formatted

### Issue: Export file is empty

**Solution:**
- Make sure you selected token sets to export
- Check that tokens have both `value` and `type` properties
- Try exporting one token set at a time

### Issue: Tokens not syncing to Storybook

**Solution:**
- Verify `tokens.json` is in `tokens/figma/` directory
- Check JSON syntax is valid (use a JSON validator)
- Run `npm run tokens:build` separately to see detailed errors

## Support

For plugin-specific issues:
- Visit: https://tokens.studio/
- GitHub: https://github.com/tokens-studio/figma-plugin
- Discord: https://tokens.studio/discord

For UNDP Design System integration issues:
- See: [FIGMA_TOKENS_INTEGRATION.md](FIGMA_TOKENS_INTEGRATION.md)
- Create an issue in the repository

## Additional Resources

- [Tokens Studio Documentation](https://docs.tokens.studio/)
- [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)
- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
