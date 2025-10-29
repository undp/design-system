// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { createRequire } from "node:module";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);
const path = require('path');

const config = {
  staticDirs: ['../stories/assets'],
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)', '../stories/**/*.mdx'],

  addons: [
    '@storybook/addon-links',
    // '@storybook/addon-docs/blocks',
    '@storybook/addon-a11y',
    // '@chromatic-com/storybook',
    '@storybook/react-webpack5',
    '@storybook/addon-webpack5-compiler-babel',
    '@linus_janns/storybook-addon-html',
    '@storybook/addon-docs'
  ],

  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      icons: path.resolve(__dirname, '../stories/assets/icons')
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', { loader: 'sass-loader', options: { implementation: 'sass-embedded', sourceMap: false, sassOptions: { quietDeps: true, silenceDeprecations: ['import', 'global-builtin'] } } }],
      include: path.resolve(__dirname, '../')
    });

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', ['@babel/preset-react', { "runtime": "automatic" }]]
        }
      }
    });

    return config;
  },

  framework: '@storybook/react-webpack5',

  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: false,
      },
    },
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },

  features: {
    actions: false
  }
};

export default config;
