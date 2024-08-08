const path = require('path');

module.exports = {
  staticDirs: ['../stories/assets'],
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)', '../stories/**/*.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    'storybook-addon-rtl',
    '@storybook/blocks',
    '@storybook/addon-a11y',
    '@storybook/react-webpack5',
    '@chromatic-com/storybook',
    '@storybook/addon-webpack5-compiler-babel'
  ],
  features: {
    buildStoriesJson: true,
    babelModeV7: true
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      icons: path.resolve(__dirname, '../stories/assets/icons')
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
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
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  env: config => ({
    ...config,
    CHROMATIC_VIEWPORTS: [375, 768, 1380, 1920]
  }),
  docs: {},
};
