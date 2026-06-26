#!/usr/bin/env node

/**
 * Generate Asset Manifest
 *
 * Scans the docs/ build output directory and produces docs/manifest.json
 * containing the list of all CSS/JS assets with their sizes and SHA-256
 * checksums. The manifest is consumed by:
 *   - smoke-test.js  (file presence assertions)
 *   - release pipelines (artifact integrity checks)
 *   - consumers who need a stable listing of versioned CDN paths
 *
 * Usage:
 *   node scripts/generate-manifest.js
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DOCS_DIR = path.resolve(__dirname, '../docs');
const MANIFEST_PATH = path.join(DOCS_DIR, 'manifest.json');
const PKG_PATH = path.resolve(__dirname, '../package.json');

const pkg = JSON.parse(fs.readFileSync(PKG_PATH, 'utf8'));

/**
 * Compute the SHA-256 hex digest of a file.
 */
function sha256File(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

/**
 * Recursively collect all files under a directory that match the given
 * extensions. Returns paths relative to the docs root.
 */
function collectFiles(dir, extensions, base = dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(full, extensions, base));
    } else if (extensions.some(ext => entry.name.endsWith(ext))) {
      results.push(path.relative(base, full).replace(/\\/g, '/'));
    }
  }
  return results.sort();
}

function buildEntry(relPath) {
  const full = path.join(DOCS_DIR, relPath);
  const stat = fs.statSync(full);
  return {
    path: relPath,
    size: stat.size,
    sha256: sha256File(full),
  };
}

function main() {
  const cssFiles = collectFiles(path.join(DOCS_DIR, 'css'), ['.css']);
  const jsFiles = collectFiles(path.join(DOCS_DIR, 'js'), ['.js']);

  const manifest = {
    version: pkg.version,
    generatedAt: new Date().toISOString(),
    cdnBase: `https://cdn.jsdelivr.net/npm/@undp/design-system-assets@${pkg.version}/`,
    assets: {
      css: cssFiles.map(f => buildEntry(`css/${f}`)),
      js: jsFiles.map(f => buildEntry(`js/${f}`)),
    },
  };

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');

  const totalAssets = manifest.assets.css.length + manifest.assets.js.length;
  console.log(`✅ Manifest written to docs/manifest.json`);
  console.log(`   Version : ${manifest.version}`);
  console.log(`   CSS files: ${manifest.assets.css.length}`);
  console.log(`   JS files : ${manifest.assets.js.length}`);
  console.log(`   Total    : ${totalAssets} assets`);
}

main();
