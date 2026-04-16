#!/usr/bin/env node

/**
 * Generate Component Metadata
 *
 * Scans all Storybook story files and produces a machine-readable JSON
 * document at docs/component-metadata.json describing every component's:
 *   - title / category / name
 *   - file path
 *   - lifecycle status (draft / beta / stable / deprecated)
 *   - required CSS and JS assets (extracted from docs page source where present)
 *   - story names
 *
 * Lifecycle status is determined by a `@status` JSDoc tag on the story's
 * default export comment block, or by a `status` key in the story's
 * `parameters` object.  Falls back to "stable" when not specified.
 *
 * Usage:
 *   node scripts/generate-component-metadata.js
 *
 * Output:
 *   docs/component-metadata.json
 */

const fs = require('fs');
const path = require('path');

const STORIES_ROOT = path.resolve(__dirname, '../stories');
const DOCS_DIR = path.resolve(__dirname, '../docs');
const OUTPUT_PATH = path.join(DOCS_DIR, 'component-metadata.json');
const PKG_PATH = path.resolve(__dirname, '../package.json');

const pkg = JSON.parse(fs.readFileSync(PKG_PATH, 'utf8'));

const VALID_STATUSES = ['draft', 'beta', 'stable', 'deprecated'];

// ---------------------------------------------------------------------------
// File discovery (native fs — no glob dependency)
// ---------------------------------------------------------------------------

/**
 * Recursively find all story files under a directory.
 */
function findStoryFiles(dir, results = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findStoryFiles(full, results);
    } else if (/\.stories\.(js|jsx|ts|tsx)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Parsers
// ---------------------------------------------------------------------------

/**
 * Extract the Storybook title from the `export default { title: '...' }` block.
 * Only matches titles that look like a Storybook hierarchy path (contain '/')
 * and whose first segment is a known top-level category.
 */
const KNOWN_TIER1 = new Set([
  'Getting started', 'Foundation', 'Components', 'Patterns',
  'Utilities', 'Templates', 'Atom', 'Molecules', 'Organism', 'Documentation',
]);

function extractTitle(source) {
  // Search all title: '...' occurrences and return the first one that
  // looks like a real Storybook path (tier1/... with a known tier1).
  const re = /\btitle\s*:\s*['"`]([^'"`\n]{3,120})['"`]/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    const candidate = m[1].trim();
    if (!candidate.includes('/')) continue; // Storybook paths always have at least one '/'
    const tier1 = candidate.split('/')[0].trim();
    if (KNOWN_TIER1.has(tier1)) return candidate;
  }
  return null;
}

/**
 * Extract a lifecycle status from source.
 * Checks (in order):
 *   1. JSDoc @status tag on the default export comment
 *   2. parameters.status field
 */
function extractStatus(source) {
  // @status tag in a block comment above the default export
  const jsdocMatch = source.match(/@status\s+([\w-]+)/i);
  if (jsdocMatch) {
    const s = jsdocMatch[1].toLowerCase();
    if (VALID_STATUSES.includes(s)) return s;
  }

  // parameters.status: 'beta'
  const paramMatch = source.match(/[^@]status\s*:\s*['"`]([^'"`]+)['"`]/);
  if (paramMatch) {
    const s = paramMatch[1].toLowerCase();
    if (VALID_STATUSES.includes(s)) return s;
  }

  return 'stable';
}

/**
 * Extract named exports that look like stories (PascalCase / non-default).
 */
function extractStoryNames(source) {
  const names = [];
  const re = /export\s+(?:const|let|var|function)\s+([A-Z][A-Za-z0-9_]*)/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    if (!['Template', 'default'].includes(m[1])) {
      names.push(m[1]);
    }
  }
  return [...new Set(names)];
}

/**
 * Extract CDN CSS/JS URLs referenced in the story documentation block.
 */
function extractCdnRefs(source) {
  const css = [];
  const js = [];
  const urlRe = /https:\/\/cdn\.jsdelivr\.net\/npm\/@undp\/design-system-assets\/([^'")\s]+)/g;
  let m;
  while ((m = urlRe.exec(source)) !== null) {
    const url = m[0];
    if (url.endsWith('.css')) {
      if (!css.includes(url)) css.push(url);
    } else if (url.endsWith('.js')) {
      if (!js.includes(url)) js.push(url);
    }
  }
  return { css, js };
}

/**
 * Derive the component category hierarchy from a Storybook title string.
 *
 * e.g. 'Components/Navigation components/Breadcrumbs'
 *   → { tier1: 'Components', tier2: 'Navigation components', name: 'Breadcrumbs' }
 */
function parseTitle(title) {
  const parts = title.split('/').map(s => s.trim());
  return {
    tier1: parts[0] || null,
    tier2: parts.length >= 3 ? parts[1] : null,
    name: parts[parts.length - 1],
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  const storyFiles = findStoryFiles(STORIES_ROOT);

  console.log(`📖 Processing ${storyFiles.length} story files…\n`);

  const components = [];

  for (const filePath of storyFiles) {
    let source;
    try {
      source = fs.readFileSync(filePath, 'utf8');
    } catch {
      console.warn(`  ⚠️  Could not read: ${filePath}`);
      continue;
    }

    const title = extractTitle(source);
    if (!title) {
      continue;
    }

    const { tier1, tier2, name } = parseTitle(title);
    const storyNames = extractStoryNames(source);
    const status = extractStatus(source);
    const { css: cdnCss, js: cdnJs } = extractCdnRefs(source);
    const relPath = path.relative(STORIES_ROOT, filePath).replace(/\\/g, '/');

    components.push({
      title,
      category: {
        tier1,
        tier2,
        name,
      },
      status,
      storyFile: `stories/${relPath}`,
      stories: storyNames,
      assets: {
        css: cdnCss,
        js: cdnJs,
      },
    });
  }

  // Sort by title
  components.sort((a, b) => a.title.localeCompare(b.title));

  const output = {
    version: pkg.version,
    generatedAt: new Date().toISOString(),
    totalComponents: components.length,
    statusSummary: VALID_STATUSES.reduce((acc, s) => {
      acc[s] = components.filter(c => c.status === s).length;
      return acc;
    }, {}),
    components,
  };

  if (!fs.existsSync(DOCS_DIR)) {
    fs.mkdirSync(DOCS_DIR, { recursive: true });
  }
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2) + '\n');

  console.log(`✅ Component metadata written to docs/component-metadata.json`);
  console.log(`   Version    : ${output.version}`);
  console.log(`   Components : ${output.totalComponents}`);
  console.log(`   By status  :`);
  for (const [status, count] of Object.entries(output.statusSummary)) {
    console.log(`     ${status.padEnd(12)}: ${count}`);
  }
}

main();
