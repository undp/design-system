const path = require("path");

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@whitespace/storybook-addon-html",
    "storybook-addon-rtl",
    "@storybook/addon-a11y",
  ],
  webpackFinal: async (config) => {
    // remove hash from the static file names
    // find the existing rule and override the name property
    config.module.rules.forEach(function(rule, index) {
      if (String(rule.test).search('svg') > 0) {
        config.module.rules[index].options.name = 'static/media/[name].[ext]';
      }
    });
    // add SCSS support for CSS Modules
    config.module.rules.push(
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      }
    );
    return config;
  }
}