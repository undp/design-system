const path = require('path');

module.exports = {
  staticDirs: ['../stories/assets'],
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    'storybook-addon-rtl',
    '@storybook/addon-a11y',
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
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });

    // Ensure JavaScript and JSX files are handled correctly
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
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
  docs: {}
};
