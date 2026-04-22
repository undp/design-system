#!/usr/bin/env node

/**
 * Bundle Size Budget Checker
 *
 * Validates that key cumulative build artefacts stay within defined byte
 * budgets. Fails with a non-zero exit code when any budget is exceeded so
 * CI can gate PRs that accidentally inflate the bundle.
 *
 * Budgets are intentionally set ~25 % above current measured sizes to allow
 * for reasonable growth. Tighten them as the project matures.
 *
 * Current measured sizes (as of v1.7.3):
 *   components.min.css  289 285 B  → budget 375 000 B
 *   templates.min.css    19 705 B  → budget  50 000 B
 *   base-minimal.min.css 152 153 B → budget 200 000 B
 *   all.min.js           123 617 B → budget 175 000 B
 *
 * Usage:
 *   node scripts/check-bundle-size.js
 *
 * Override budgets via environment variables (bytes), e.g.:
 *   BUDGET_COMPONENTS_CSS=400000 node scripts/check-bundle-size.js
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.resolve(__dirname, '../docs');

// ---------------------------------------------------------------------------
// Budget definitions
// ---------------------------------------------------------------------------
const BUDGETS = [
  {
    label: 'components.min.css',
    file: 'css/components.min.css',
    budgetBytes: parseInt(process.env.BUDGET_COMPONENTS_CSS || '375000', 10),
  },
  {
    label: 'templates.min.css',
    file: 'css/templates.min.css',
    budgetBytes: parseInt(process.env.BUDGET_TEMPLATES_CSS || '50000', 10),
  },
  {
    label: 'base-minimal.min.css',
    file: 'css/base-minimal.min.css',
    budgetBytes: parseInt(process.env.BUDGET_BASE_CSS || '200000', 10),
  },
  {
    label: 'all.min.js',
    file: 'js/all.min.js',
    budgetBytes: parseInt(process.env.BUDGET_ALL_JS || '175000', 10),
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function humanSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function percent(actual, budget) {
  return ((actual / budget) * 100).toFixed(1);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  let failed = false;

  console.log('📦 Bundle size budget check\n');

  const colW = Math.max(...BUDGETS.map(b => b.label.length)) + 2;

  for (const budget of BUDGETS) {
    const filePath = path.join(DOCS_DIR, budget.file);

    if (!fs.existsSync(filePath)) {
      console.error(`❌ File not found: ${budget.file}`);
      console.error('   Run `npm run build` first.');
      process.exit(1);
    }

    const actual = fs.statSync(filePath).size;
    const over = actual > budget.budgetBytes;
    const pct = percent(actual, budget.budgetBytes);
    const icon = over ? '❌' : '✅';
    const label = budget.label.padEnd(colW);

    console.log(
      `${icon} ${label}  ${humanSize(actual).padEnd(10)}` +
      `  budget: ${humanSize(budget.budgetBytes).padEnd(10)}` +
      `  (${pct}% of budget)`
    );

    if (over) {
      const excess = actual - budget.budgetBytes;
      console.log(`   ⚠️  Exceeds budget by ${humanSize(excess)}.`);
      console.log(
        `   Investigate what grew and either optimise or update the budget in`
      );
      console.log(`   scripts/check-bundle-size.js if the increase is intentional.\n`);
      failed = true;
    }
  }

  console.log('');

  if (failed) {
    console.error('Bundle size check FAILED — see above.\n');
    process.exit(1);
  }

  console.log('All bundle sizes are within budget. ✅\n');
}

main();
