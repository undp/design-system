#!/usr/bin/env node

/**
 * Build Smoke Tests
 *
 * Validates that the webpack build produced the expected set of output files
 * under docs/ and that critical files are non-empty / well-formed. Run this
 * after `npm run build` as a fast sanity check before publishing.
 *
 * Exit codes:
 *   0  All checks passed
 *   1  One or more checks failed
 *
 * Usage:
 *   node scripts/smoke-test.js
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DOCS_DIR = path.resolve(__dirname, '../docs');

let passed = 0;
let failed = 0;

// ---------------------------------------------------------------------------
// Assertion helpers
// ---------------------------------------------------------------------------
function ok(description) {
  console.log(`  ✅ ${description}`);
  passed += 1;
}

function fail(description, detail = '') {
  console.error(`  ❌ ${description}${detail ? `\n     ${detail}` : ''}`);
  failed += 1;
}

function assertExists(relPath, label) {
  const full = path.join(DOCS_DIR, relPath);
  if (fs.existsSync(full)) {
    ok(label || `File exists: ${relPath}`);
    return true;
  }
  fail(label || `File missing: ${relPath}`, `Expected at: ${full}`);
  return false;
}

function assertNonEmpty(relPath, label) {
  const full = path.join(DOCS_DIR, relPath);
  if (!fs.existsSync(full)) {
    fail(label || `File missing: ${relPath}`, `Expected at: ${full}`);
    return false;
  }
  const size = fs.statSync(full).size;
  if (size > 0) {
    ok(label || `Non-empty: ${relPath} (${size} bytes)`);
    return true;
  }
  fail(label || `File is empty: ${relPath}`);
  return false;
}

function assertContains(relPath, pattern, label) {
  const full = path.join(DOCS_DIR, relPath);
  if (!fs.existsSync(full)) {
    fail(label || `File missing: ${relPath}`);
    return false;
  }
  const content = fs.readFileSync(full, 'utf8');
  const found = pattern instanceof RegExp ? pattern.test(content) : content.includes(pattern);
  if (found) {
    ok(label || `Content match in ${relPath}`);
    return true;
  }
  fail(label || `Expected content not found in ${relPath}`, `Pattern: ${pattern}`);
  return false;
}

// ---------------------------------------------------------------------------
// Test suites
// ---------------------------------------------------------------------------

function testCssFiles() {
  console.log('\n📄 CSS Output Files');
  // Cumulative bundles
  assertNonEmpty('css/components.min.css', 'components.min.css is non-empty');
  assertNonEmpty('css/templates.min.css', 'templates.min.css is non-empty');
  assertNonEmpty('css/base-minimal.min.css', 'base-minimal.min.css is non-empty');
  assertNonEmpty('css/base-minimal-no-grid.min.css', 'base-minimal-no-grid.min.css is non-empty');

  // Spot-check individual component CSS files that must always exist
  const requiredComponents = [
    'accordion',
    'breadcrumbs',
    'buttons',
    'content-card',
    'modal',
    'tab',
    'sidebar',
  ];
  for (const name of requiredComponents) {
    assertExists(`css/components/${name}.min.css`, `Component CSS: ${name}.min.css`);
  }
}

function testJsFiles() {
  console.log('\n📜 JS Output Files');
  // Cumulative bundle
  assertNonEmpty('js/all.min.js', 'all.min.js is non-empty');
  // Initializer
  assertNonEmpty('js/init.js', 'init.js is non-empty');

  // Spot-check individual component JS files
  const requiredJs = [
    'accordion',
    'modal',
    'navigation',
    'tabs',
    'swiper',
  ];
  for (const name of requiredJs) {
    assertExists(`js/${name}.min.js`, `JS module: ${name}.min.js`);
  }
  assertContains(
    'js/filter-search-bar.min.js',
    /createElement\(["']a["']\)/,
    'Filter chips use the anchor markup required by chip styles'
  );
}

function testInitJs() {
  console.log('\n⚙️  init.js Integrity');
  const initPath = 'js/init.js';
  if (!assertNonEmpty(initPath, 'init.js is non-empty')) return;

  // Must contain core component handlers
  const handlers = [
    'accordion',
    'modal',
    'navigation',
    'tabs',
    'swiper',
    'sidebar',
    'custom-select',
    'lightbox-gallery',
  ];
  for (const h of handlers) {
    assertContains(
      initPath,
      `case"${h}"`,
      `init.js handles "${h}"`
    );
  }

  // Must set data-initialized
  assertContains(
    initPath,
    'data-initialized',
    'init.js sets data-initialized attribute'
  );

  // Must listen for DOMContentLoaded
  assertContains(
    initPath,
    'DOMContentLoaded',
    'init.js listens for DOMContentLoaded'
  );
}

function testFonts() {
  console.log('\n🔤 Fonts');
  const fontsDir = path.join(DOCS_DIR, 'fonts');
  if (!fs.existsSync(fontsDir)) {
    fail('Fonts directory exists');
    return;
  }
  const fonts = fs.readdirSync(fontsDir);
  if (fonts.length > 0) {
    ok(`Fonts directory contains ${fonts.length} file(s)`);
  } else {
    fail('Fonts directory is empty');
  }
}

function testManifest() {
  console.log('\n📋 Asset Manifest');
  const manifestPath = path.join(DOCS_DIR, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    // manifest.json is generated separately; skip gracefully if not present
    console.log('  ⏭️  manifest.json not found — run `npm run generate-manifest` to create it.');
    return;
  }

  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    ok('manifest.json is valid JSON');
  } catch (e) {
    fail('manifest.json is not valid JSON', e.message);
    return;
  }

  if (manifest.version) {
    ok(`manifest.json has version: ${manifest.version}`);
  } else {
    fail('manifest.json missing "version" field');
  }

  if (manifest.assets && Array.isArray(manifest.assets.css) && manifest.assets.css.length > 0) {
    ok(`manifest.json lists ${manifest.assets.css.length} CSS assets`);
  } else {
    fail('manifest.json has no CSS assets listed');
  }

  if (manifest.assets && Array.isArray(manifest.assets.js) && manifest.assets.js.length > 0) {
    ok(`manifest.json lists ${manifest.assets.js.length} JS assets`);
  } else {
    fail('manifest.json has no JS assets listed');
  }
}

/**
 * Check multiselect event construction with native read-only Event properties.
 * @returns {void} Reports failures without modifying source files or assets.
 */
function testMultiSelectEvents() {
  console.log('\n📜 Multiselect Events');
  const sourcePath = path.resolve(__dirname, '../stories/assets/js/multi-select.js');
  const source = fs.readFileSync(sourcePath, 'utf8')
    .replace('export function multiSelect', 'function multiSelect');
  const payloads = {
    multiSelectToggle: {
      bubbles: true,
      cancelable: false,
      select_trigger_dataset_id: 'category',
      select_trigger_id: 'category-trigger',
      state: 'open',
      open: true,
      closed: false,
    },
    multiSelectInputToggle: {
      bubbles: true,
      cancelable: false,
      checkbox_id: 'category-option',
      state: true,
      toggle_state: 'checked',
      selected: true,
      unselected: false,
    },
  };

  for (const [type, payload] of Object.entries(payloads)) {
    try {
      const event = vm.runInNewContext(
        `${source}\ncreateCustomEvent(type, payload);`,
        { CustomEvent, type, payload }
      );
      const preservesPayload = Object.entries(payload)
        .every(([key, value]) => event[key] === value && event.detail[key] === value);
      if (event.type === type && preservesPayload) {
        ok(`${type} preserves event options, detail, and legacy properties`);
      } else {
        fail(`${type} preserves event options, detail, and legacy properties`);
      }
    } catch (error) {
      fail(`${type} constructs without assigning read-only properties`, error.message);
    }
  }
}

/**
 * Verify chip text uses associated labels rather than input sibling position.
 * @returns {void} Reports label regression checks without modifying assets.
 */
function testFilterChipLabels() {
  console.log('\n📜 Filter Chip Labels');
  const sourcePath = path.resolve(__dirname, '../stories/assets/js/filter-search-bar.js');
  const source = fs.readFileSync(sourcePath, 'utf8')
    .replace('export default toggleFilter;', '')
    .replace('export { toggleFilter };', '');
  const cases = [
    ['Label before input', { labels: [{ textContent: '  Category  ' }] }, 'Category'],
    ['Label after input', {
      labels: [{ textContent: 'Region' }],
      nextElementSibling: { textContent: 'Wrong sibling' },
    }, 'Region'],
    ['Wrapping label', { labels: [{ textContent: 'Nested option' }] }, 'Nested option'],
    ['Multiple labels', { labels: [{ textContent: 'Region' }, { textContent: 'Africa' }] }, 'Region Africa'],
    ['Legacy sibling label', { nextElementSibling: { textContent: '  Legacy  ' } }, 'Legacy'],
    ['No label', { labels: [] }, ''],
  ];
  for (const [description, option, expected] of cases) {
    try {
      const actual = vm.runInNewContext(`${source}\ngetOptionLabel(option);`, { option });
      if (actual === expected) {
        ok(description);
      } else {
        fail(description, `Expected "${expected}", received "${actual}"`);
      }
    } catch (error) {
      fail(description, error.message);
    }
  }
}

/**
 * Verify multiselect disclosure state, focus safety, and changed-state events.
 * @returns {void} Reports accessibility regressions without changing assets.
 */
function testMultiSelectAccessibility() {
  console.log('\n♿ Multiselect Disclosure');
  const source = fs.readFileSync(path.resolve(__dirname, '../stories/assets/js/multi-select.js'), 'utf8')
    .replace('export function multiSelect', 'function multiSelect');
  const attributes = {};
  const panel = { setAttribute: (name, value) => { attributes[name] = value; } };
  const trigger = {
    dataset: {},
    setAttribute: (name, value) => { attributes[name] = value; },
  };
  const classes = new Set();
  const events = [];
  const element = {
    querySelector: (selector) => (selector === 'button' ? trigger : panel),
    classList: {
      contains: (name) => classes.has(name),
      toggle: (name, enabled) => (enabled ? classes.add(name) : classes.delete(name)),
    },
    dispatchEvent: (event) => events.push(event),
  };
  const document = { activeElement: null };
  trigger.focus = () => { document.activeElement = trigger; };
  panel.contains = (activeElement) => activeElement === panel;
  try {
    const select = vm.runInNewContext(`${source}\nnew MultiSelect(element);`, {
      element, document, CustomEvent,
    });
    select.setOpen(false, false);
    if (panel.hidden && attributes['aria-hidden'] === 'true' && attributes['aria-expanded'] === 'false' && events.length === 0) {
      ok('Closed initialization hides options without emitting a toggle');
    } else {
      fail('Closed initialization hides options without emitting a toggle');
    }
    select.setOpen(true);
    if (!panel.hidden && attributes['aria-hidden'] === 'false' && attributes['aria-expanded'] === 'true' && events[0]?.open) {
      ok('Opening exposes options and emits synchronized open state');
    } else {
      fail('Opening exposes options and emits synchronized open state');
    }
    document.activeElement = panel;
    select.setOpen(false);
    select.setOpen(false);
    if (panel.hidden && attributes['aria-hidden'] === 'true' && attributes['aria-expanded'] === 'false'
      && document.activeElement === trigger && events.length === 2 && events[1].closed) {
      ok('Closing restores focus before hiding options and emits only once');
    } else {
      fail('Closing restores focus before hiding options and emits only once');
    }
  } catch (error) {
    fail('Disclosure accessibility state', error.message);
  }
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

function main() {
  console.log('🔬 UNDP Design System — Build Smoke Tests');
  console.log(`   Docs directory: ${DOCS_DIR}`);

  if (!fs.existsSync(DOCS_DIR)) {
    console.error('\n❌ docs/ directory not found. Run `npm run build` first.');
    process.exit(1);
  }

  testCssFiles();
  testJsFiles();
  testInitJs();
  testFonts();
  testManifest();
  testMultiSelectEvents();
  testFilterChipLabels();
  testMultiSelectAccessibility();

  console.log(`\n${'─'.repeat(50)}`);
  console.log(`Results: ${passed} passed, ${failed} failed`);

  if (failed > 0) {
    console.error('\n❌ Smoke tests FAILED.\n');
    process.exit(1);
  }

  console.log('\n✅ All smoke tests passed.\n');
}

main();
