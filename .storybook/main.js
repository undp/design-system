const path = require('path');

const config = {
  staticDirs: ['../stories/assets'],
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)', '../stories/**/*.mdx'],

  addons: ['@storybook/addon-links', {
    name: '@storybook/addon-essentials',
    options: {
      actions: false, // 👈 disable the actions addon
    },
  }, // 'storybook-addon-rtl',
  '@storybook/blocks', '@storybook/addon-a11y', '@storybook/react-webpack5', // '@chromatic-com/storybook',
  '@storybook/addon-webpack5-compiler-babel', '@whitespace/storybook-addon-html'],

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
  }
};

export default config;
