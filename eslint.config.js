/**
 * ESLint Flat Config (ESLint v10+)
 *
 * ESLint v10 removed support for .eslintrc.* files and the legacy context API
 * (context.getFilename(), etc.). This file provides flat config using two
 * strategies:
 *
 *  1. Plugins that have native flat config support (eslint-plugin-react,
 *     eslint-plugin-jsx-a11y) are loaded directly without FlatCompat so they
 *     can use the new context.filename API.
 *
 *  2. Plugins/configs without native flat config support (eslint-config-airbnb,
 *     eslint-plugin-mdx) are loaded via FlatCompat with react.version set
 *     explicitly so the react plugin never calls context.getFilename().
 *
 * The legacy .eslintrc.json is kept so editor tooling that reads it is
 * unaffected.
 */

const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const reactPlugin = require('eslint-plugin-react');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

// Common rule overrides that match the legacy .eslintrc.json
const legacyRuleOverrides = {
  'import/prefer-default-export': 'off',
  'react/prop-types': 'off',
  'no-unused-vars': 'off',
  camelcase: 'off',
  'jsx-a11y/label-has-associated-control': 'off',
  'jsx-a11y/role-has-required-aria-props': 'off',
  'jsx-a11y/control-has-associated-label': 'off',
  'jsx-a11y/anchor-is-valid': 'off',
  'jsx-a11y/img-redundant-alt': 'off',
  'jsx-a11y/no-noninteractive-tabindex': 'off',
  'no-mixed-operators': 'off',
  'jsx-a11y/role-supports-aria-props': 'off',
  'no-param-reassign': 'off',
  'react/jsx-first-prop-new-line': 'off',
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
  'react/no-array-index-key': 0,
  eqeqeq: 'off',
  'react/button-has-type': 'off',
  'no-empty-pattern': 'off',
  'no-sequences': 'off',
  'react/style-prop-object': 'off',
  'vars-on-top': 'off',
  'no-redeclare': 'off',
  'mdx/no-unused-expressions': 'off',
  'prefer-const': 'off',
  'jsx-a11y/anchor-has-content': 'off',
  'import/no-unresolved': 0,
  'react/no-unescaped-entities': 0,
  'react/jsx-props-no-spreading': 'off',
  'import/no-extraneous-dependencies': 'off',
  'no-console': 'off',
  'no-return-assign': ['warn', 'always'],
  'func-names': ['warn', 'never'],
  'no-underscore-dangle': 0,
  'no-use-before-define': 'off',
  'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],
  'linebreak-style': 'off',
};

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

  // ─── React plugin (native flat config) ──────────────────────────────────────
  // Using the plugin natively bypasses FlatCompat's context shim entirely.
  // eslint-plugin-react@7.37+ provides configs.flat.recommended for ESLint v10.
  // We set react.version explicitly ('19') so the plugin never calls the
  // removed context.getFilename() API for React version detection.
  {
    plugins: { react: reactPlugin },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    settings: {
      // Explicit version prevents detectReactVersion() → context.getFilename()
      react: { version: '19' },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
    },
  },

  // ─── Airbnb + MDX via FlatCompat ────────────────────────────────────────────
  // airbnb and mdx don't have native flat configs. We bridge them here.
  // react.version must be set in settings so that any react plugin rules loaded
  // by airbnb's internal plugin:react/recommended also skip getFilename().
  ...compat.config({
    env: {
      browser: true,
      es2021: true,
      es6: true,
      jquery: true,
    },
    extends: [
      'airbnb',
      'plugin:mdx/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        mdx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    settings: {
      // Explicit React version prevents the eslint-plugin-react version detection
      // code from calling context.getFilename() which was removed in ESLint v10.
      react: { version: '19' },
      'mdx/code-blocks': true,
    },
    rules: legacyRuleOverrides,
    overrides: [
      {
        files: ['stories/**/*.jsx', 'stories/**/*.mdx'],
      },
    ],
  }),

  // ─── Scripts folder ─────────────────────────────────────────────────────────
  // Node.js scripts don't need React/browser rules.
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
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'no-console': 'off',
    },
  },
];
