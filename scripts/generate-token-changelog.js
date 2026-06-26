#!/usr/bin/env node

/**
 * Generate Token Changelog
 *
 * Compares two versions of figma-tokens/input/tokens.json (the version in the
 * current working tree vs the version from the last Git commit on that file)
 * and produces a human-readable Markdown changelog at:
 *   figma-tokens/CHANGELOG.md
 *
 * The changelog classifies each change by impact level:
 *   🔴 BREAKING  – a primitive token was removed or renamed
 *   🟡 CHANGED   – an existing token's value was modified
 *   🟢 ADDED     – a new token was introduced
 *   🗑️  REMOVED  – a token was removed (semantic / non-breaking)
 *
 * Usage (standalone):
 *   node scripts/generate-token-changelog.js
 *
 * Usage (CI / sync workflow – compare against a specific base ref):
 *   BASE_REF=origin/main node scripts/generate-token-changelog.js
 *
 * Output:
 *   figma-tokens/CHANGELOG.md  (prepended to existing content)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const TOKENS_PATH = path.resolve(__dirname, '../figma-tokens/input/tokens.json');
const CHANGELOG_PATH = path.resolve(__dirname, '../figma-tokens/CHANGELOG.md');
const PKG_PATH = path.resolve(__dirname, '../package.json');

const pkg = JSON.parse(fs.readFileSync(PKG_PATH, 'utf8'));

// ---------------------------------------------------------------------------
// Token flattening
// ---------------------------------------------------------------------------

/**
 * Recursively flatten a nested token tree into a Map of
 *   "category.subcategory.name" → { $type, $value }
 * Nodes that have a $value property are leaf tokens.
 */
function flattenTokens(obj, prefix = '') {
  const result = new Map();

  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$')) continue; // skip meta keys
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object') {
      if ('$value' in value) {
        result.set(fullKey, {
          type: value.$type || 'unknown',
          value: value.$value,
        });
      } else {
        for (const [k, v] of flattenTokens(value, fullKey)) {
          result.set(k, v);
        }
      }
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// Git helpers
// ---------------------------------------------------------------------------

function getBaseTokens() {
  const baseRef = process.env.BASE_REF || 'HEAD~1';
  try {
    const raw = execSync(
      `git show ${baseRef}:figma-tokens/input/tokens.json 2>/dev/null`,
      { encoding: 'utf8' }
    );
    return JSON.parse(raw);
  } catch {
    console.warn(`⚠️  Could not load base tokens from ${baseRef} — treating all tokens as new.`);
    return {};
  }
}

// ---------------------------------------------------------------------------
// Diff
// ---------------------------------------------------------------------------

function diff(baseTokens, currentTokens) {
  const base = flattenTokens(baseTokens);
  const current = flattenTokens(currentTokens);

  const added = [];
  const changed = [];
  const removed = [];

  for (const [key, cur] of current) {
    if (!base.has(key)) {
      added.push({ key, ...cur });
    } else {
      const prev = base.get(key);
      const prevVal = typeof prev.value === 'object'
        ? JSON.stringify(prev.value)
        : String(prev.value);
      const curVal = typeof cur.value === 'object'
        ? JSON.stringify(cur.value)
        : String(cur.value);
      if (prevVal !== curVal) {
        changed.push({ key, type: cur.type, from: prev.value, to: cur.value });
      }
    }
  }

  for (const [key, prev] of base) {
    if (!current.has(key)) {
      removed.push({ key, ...prev });
    }
  }

  return { added, changed, removed };
}

/**
 * A removed token is considered BREAKING if it is in a "primitive" section
 * (i.e. not prefixed with a semantic group like color/text, color/action, etc.)
 * and it is likely referenced by semantic tokens or CSS.
 */
function isBreaking(tokenKey) {
  // Primitive tokens live directly under simple category names like
  // "color.blue.600", "spacing.16", "fontsize.20" etc.
  // Semantic tokens tend to have 3+ path segments with human-readable names.
  const parts = tokenKey.split('.');
  // Heuristic: 2 or 3 parts with numeric final segment → primitive
  if (parts.length <= 3 && /^\d/.test(parts[parts.length - 1])) return true;
  // Named primitives: color.black, color.white
  if (parts.length === 2 && parts[0] === 'color') return true;
  return false;
}

// ---------------------------------------------------------------------------
// Markdown generation
// ---------------------------------------------------------------------------

function formatValue(val) {
  if (val === null || val === undefined) return '_null_';
  if (typeof val === 'object') return `\`${JSON.stringify(val)}\``;
  // Wrap in backtick for readability
  return `\`${String(val)}\``;
}

function buildMarkdown({ added, changed, removed }, date, version) {
  const breaking = removed.filter(t => isBreaking(t.key));
  const nonBreaking = removed.filter(t => !isBreaking(t.key));

  const lines = [];

  lines.push(`## [${version}] — ${date}\n`);

  if (breaking.length === 0 && changed.length === 0 && added.length === 0 && nonBreaking.length === 0) {
    lines.push('_No token changes detected._\n');
    return lines.join('\n');
  }

  if (breaking.length > 0) {
    lines.push('### 🔴 Breaking Removals\n');
    lines.push(
      '> These primitive tokens were **removed**. CSS custom properties and SASS variables that reference them must be updated.\n'
    );
    for (const t of breaking) {
      lines.push(`- \`${t.key}\` _(${t.type})_ — was ${formatValue(t.value)}`);
    }
    lines.push('');
  }

  if (changed.length > 0) {
    lines.push('### 🟡 Changed Values\n');
    for (const t of changed) {
      lines.push(`- \`${t.key}\` _(${t.type})_ — ${formatValue(t.from)} → ${formatValue(t.to)}`);
    }
    lines.push('');
  }

  if (added.length > 0) {
    lines.push('### 🟢 Added\n');
    for (const t of added) {
      lines.push(`- \`${t.key}\` _(${t.type})_ = ${formatValue(t.value)}`);
    }
    lines.push('');
  }

  if (nonBreaking.length > 0) {
    lines.push('### 🗑️ Removed\n');
    for (const t of nonBreaking) {
      lines.push(`- \`${t.key}\` _(${t.type})_ — was ${formatValue(t.value)}`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  if (!fs.existsSync(TOKENS_PATH)) {
    console.error(`❌ Tokens file not found: ${TOKENS_PATH}`);
    process.exit(1);
  }

  const currentTokens = JSON.parse(fs.readFileSync(TOKENS_PATH, 'utf8'));
  const baseTokens = getBaseTokens();

  const { added, changed, removed } = diff(baseTokens, currentTokens);

  // Skip writing if nothing changed to avoid duplicate entries
  if (added.length === 0 && changed.length === 0 && removed.length === 0) {
    console.log('ℹ️  No token changes detected — CHANGELOG.md not modified.');
    return;
  }

  const date = new Date().toISOString().slice(0, 10);
  const newEntry = buildMarkdown({ added, changed, removed }, date, pkg.version);

  // Prepend to existing changelog (or create it)
  const header = `# Figma Token Changelog\n\n`;
  let existing = '';
  if (fs.existsSync(CHANGELOG_PATH)) {
    existing = fs.readFileSync(CHANGELOG_PATH, 'utf8');
    // Strip existing header so we can re-prepend it cleanly
    existing = existing.replace(/^# Figma Token Changelog\n+/, '');
  }

  fs.writeFileSync(CHANGELOG_PATH, header + newEntry + (existing ? '\n' + existing : ''));

  console.log(`✅ Token changelog written to figma-tokens/CHANGELOG.md`);
  console.log(`   Added   : ${added.length}`);
  console.log(`   Changed : ${changed.length}`);
  console.log(`   Removed : ${removed.length} (${removed.filter(t => isBreaking(t.key)).length} breaking)`);
}

main();
