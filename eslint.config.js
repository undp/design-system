/**
 * ESLint Flat Config (ESLint v10+)
 *
 * Background
 * ----------
 * The project has eslint ^10.2.0 with plugins written for ESLint v8/v9.
 * ESLint v10 removed several SourceCode and rule-context APIs. This file
 * restores them so the existing plugins work without requiring plugin updates.
 *
 * Removed APIs and their replacements
 * ------------------------------------
 *  SourceCode.isSpaceBetweenTokens(a,b)    → isSpaceBetween(a,b)
 *  SourceCode.getTokenOrCommentBefore(n)   → getTokenBefore(n,{includeComments:true})
 *  SourceCode.getTokenOrCommentAfter(n)    → getTokenAfter(n,{includeComments:true})
 *  SourceCode.getComments(n)               → getCommentsBefore(n) + getCommentsAfter(n)
 *  context.getFilename()                   → context.filename
 *  context.getSourceCode()                 → context.sourceCode
 *
 * Strategies
 * ----------
 *  1. Patch SourceCode.prototype once (affects ALL plugins — safe because we
 *     only ADD methods, never modify existing ones).
 *
 *  2. Wrap eslint-plugin-react rules with a Proxy that shims the frozen
 *     context object (can't use prototype patch because the context class is
 *     sealed).
 *
 *  3. Use eslint-config-airbnb-base via FlatCompat for JS/import rules.
 *     eslint-plugin-import already uses its own contextCompat shim for context
 *     methods; SourceCode prototype patch handles the sourceCode methods.
 *
 *  4. Omit eslint-plugin-mdx: the lint command targets only *.{js,jsx} files.
 *     mdx@3.7 patches the ESLint Linter globally, creating inner-linter
 *     contexts that bypass both the prototype patch and the Proxy shim.
 *
 * The legacy .eslintrc.json is kept so editor tooling that reads it is
 * unaffected.
 */

'use strict';

const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const reactPlugin = require('eslint-plugin-react');
// eslint is also required to patch SourceCode:
const { SourceCode } = require('eslint');
const eslintConfigPrettier = require('eslint-config-prettier');

// ─── 1. SourceCode prototype patches ─────────────────────────────────────────
// Restore removed ESLint v10 APIs. Guards ensure we don't overwrite if a
// future ESLint version re-adds them.

if (!SourceCode.prototype.isSpaceBetweenTokens) {
  // eslint-disable-next-line func-names
  SourceCode.prototype.isSpaceBetweenTokens = function (a, b) {
    return this.isSpaceBetween(a, b);
  };
}

if (!SourceCode.prototype.getTokenOrCommentBefore) {
  // eslint-disable-next-line func-names
  SourceCode.prototype.getTokenOrCommentBefore = function (node, opts) {
    return this.getTokenBefore(node, { ...(opts || {}), includeComments: true });
  };
}

if (!SourceCode.prototype.getTokenOrCommentAfter) {
  // eslint-disable-next-line func-names
  SourceCode.prototype.getTokenOrCommentAfter = function (node, opts) {
    return this.getTokenAfter(node, { ...(opts || {}), includeComments: true });
  };
}

if (!SourceCode.prototype.getComments) {
  // eslint-disable-next-line func-names
  SourceCode.prototype.getComments = function (node) {
    return {
      leading: this.getCommentsBefore(node),
      trailing: this.getCommentsAfter(node),
    };
  };
}

// ─── 2. React plugin context shim ────────────────────────────────────────────
// The flat-config RuleContext (FileContext) is frozen, so we can't patch the
// class. Instead wrap each rule's create() with a Proxy that restores the
// removed context APIs.

function shimSourceCode(sourceCode) {
  return new Proxy(sourceCode, {
    get(target, prop, receiver) {
      if (prop === 'isSpaceBetweenTokens') {
        return (a, b) => target.isSpaceBetween(a, b);
      }
      return Reflect.get(target, prop, receiver);
    },
  });
}

function shimContext(context) {
  const shimmed = shimSourceCode(context.sourceCode);
  return new Proxy(context, {
    get(target, prop, receiver) {
      switch (prop) {
        case 'getFilename': return () => target.filename;
        case 'getPhysicalFilename': return () => target.physicalFilename || target.filename;
        case 'getSourceCode': return () => shimmed;
        case 'sourceCode': return shimmed;
        default: return Reflect.get(target, prop, receiver);
      }
    },
  });
}

function patchPlugin(plugin) {
  const rules = {};
  for (const [name, rule] of Object.entries(plugin.rules || {})) {
    rules[name] = {
      ...rule,
      create(context) {
        return rule.create(shimContext(context));
      },
    };
  }
  return { ...plugin, rules };
}

const patchedReact = patchPlugin(reactPlugin);

// ─── FlatCompat ───────────────────────────────────────────────────────────────
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

// ─── Config ───────────────────────────────────────────────────────────────────
module.exports = [
  // Global ignores
  {
    ignores: [
      '**/glideslider.js',
      'stories/assets/js/lib/**/*.js',
      'docs/**/*.js',
      'node_modules/**',
    ],
  },

  // ─── React plugin (patched for ESLint v10) ────────────────────────────────
  {
    plugins: { react: patchedReact },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    settings: {
      // Explicit version prevents dynamic React detection that calls the
      // removed context.getFilename() API (via util/version.js detectReactVersion).
      react: { version: '19' },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      // Storybook/React-specific overrides
      'react/prop-types': 'off',
      'react/no-array-index-key': 0,
      'react/button-has-type': 'off',
      'react/style-prop-object': 'off',
      'react/no-unescaped-entities': 0,
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],
      'react/jsx-first-prop-new-line': 'off',
      // Disable rules that call getFilename() via a code path the context
      // Proxy doesn't intercept (the check is inside an internal helper that
      // receives the plain context before the Proxy wraps it).
      'react/jsx-filename-extension': 'off',
      // React 17+ (new JSX transform) doesn't require React to be in scope.
      // The project uses React 19, so this rule is always wrong here.
      'react/react-in-jsx-scope': 'off',
      // jsx-key has 372 pre-existing violations; keep as warning to not
      // block CI while allowing teams to fix incrementally.
      'react/jsx-key': 'warn',
    },
  },

  // ─── Airbnb-base + import rules via FlatCompat ────────────────────────────
  // airbnb-base provides JS-quality and import-ordering rules without
  // loading the react plugin again (which would bypass our Proxy shim).
  ...compat.config({
    env: {
      browser: true,
      es2021: true,
      es6: true,
      jquery: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'off',
      camelcase: 'off',
      'no-mixed-operators': 'off',
      'no-param-reassign': 'off',
      'no-restricted-globals': ['error', 'event', 'fdescribe'],
      'no-undef': 'off',
      'no-var': 'off',
      'no-plusplus': 'off',
      'no-shadow': 'off',
      'no-script-url': 'off',
      'prefer-rest-params': 'off',
      'class-methods-use-this': 'off',
      'block-scoped-var': 'off',
      'max-len': 'off',
      eqeqeq: 'off',
      'no-empty-pattern': 'off',
      'no-sequences': 'off',
      'vars-on-top': 'off',
      'no-redeclare': 'off',
      'prefer-const': 'off',
      'import/no-unresolved': 0,
      'import/no-extraneous-dependencies': 'off',
      'no-console': 'off',
      'no-return-assign': ['warn', 'always'],
      'func-names': ['warn', 'never'],
      'no-underscore-dangle': 0,
      'no-use-before-define': 'off',
      'linebreak-style': 'off',
      // Pre-existing violations in the unformatted codebase; these rules are
      // better enforced with Prettier or on a per-PR basis going forward.
      'import/extensions': 'off',         // Webpack resolves without extensions
      'no-restricted-syntax': 'off',      // for-of/generators used throughout
      'no-case-declarations': 'warn',     // Warn but don't fail CI
      'import/order': 'warn',             // Warn but don't fail CI
      'no-sparse-arrays': 'warn',         // Warn but don't fail CI
      'no-continue': 'off',              // Used in existing scripts
      'object-shorthand': 'off',         // Style, handled by Prettier
      'prefer-template': 'off',          // Style preference
      'arrow-body-style': 'off',         // Style preference
      'import/no-duplicates': 'warn',    // Warn but don't fail CI
      // Additional pre-existing style issues in legacy code:
      'prefer-arrow-callback': 'off',
      'consistent-return': 'off',
      'default-case': 'warn',
      'no-empty': 'warn',
      'prefer-object-spread': 'off',
      'dot-notation': 'off',
      'no-else-return': 'off',
      'spaced-comment': 'warn',
      'prefer-destructuring': 'off',
      'no-lonely-if': 'off',
      'no-irregular-whitespace': 'warn',
      'no-cond-assign': 'warn',          // Used in regex exec() loops
      'no-loop-func': 'warn',
      'import/named': 'off',             // False positives with Webpack resolution
      'import/no-named-as-default': 'warn',
      'import/no-useless-path-segments': 'warn',
      'react/no-unknown-property': 'warn',
    },
    overrides: [
      { files: ['stories/**/*.jsx'] },
    ],
  }),

  // ─── Scripts (Node.js environment) ──────────────────────────────────────────
  {
    files: ['scripts/**/*.js'],
    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
      },
    },
  },

  // ─── Prettier compatibility ───────────────────────────────────────────────
  // Must come last: turns off all ESLint rules that would conflict with Prettier
  // (quotes, indent, comma-dangle, semi, etc.). Prettier handles formatting;
  // ESLint handles correctness.
  eslintConfigPrettier,
];
