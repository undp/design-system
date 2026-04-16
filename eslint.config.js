/**
 * ESLint Flat Config (ESLint v10+)
 *
 * Uses @eslint/eslintrc FlatCompat to translate the existing .eslintrc.json
 * config into the flat config format required by ESLint v10+.
 *
 * The legacy .eslintrc.json is kept as the source of truth for rules so that
 * existing tooling (editors, CI helpers) reading that file is unaffected.
 * This file simply bridges the two formats.
 */

const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const path = require('path');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  // Global ignores (replaces .eslintrc "ignorePatterns")
  {
    ignores: [
      '**/glideslider.js',
      'stories/assets/js/lib/**/*.js',
      // Build output — never lint generated assets
      'docs/**/*.js',
      'node_modules/**',
    ],
  },

  // Translate the legacy .eslintrc.json into flat config entries
  ...compat.config({
    env: {
      browser: true,
      es2021: true,
      es6: true,
      jquery: true,
    },
    extends: [
      'plugin:react/recommended',
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
    // Note: 'spellcheck' plugin is present in .eslintrc.json but has no active
    // rules configured, so it is omitted here to avoid compatibility issues with
    // the older eslint-plugin-spellcheck (0.0.20) and FlatCompat.
    plugins: ['react'],
    rules: {
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
      enforceForClassFields: 0,
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
      'react-a11y-role-has-required-aria-props': 0,
      '@typescript-eslint/no-empty-interface': 0,
      'react/jsx-props-no-spreading': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-console': 'off',
      'no-return-assign': ['warn', 'always'],
      'func-names': ['warn', 'never'],
      'no-underscore-dangle': 0,
      'no-use-before-define': 'off',
      'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],
      'linebreak-style': 'off',
    },
    settings: {
      'mdx/code-blocks': true,
    },
    overrides: [
      {
        files: ['stories/**/*.jsx', 'stories/**/*.mdx'],
      },
    ],
  }),
];
