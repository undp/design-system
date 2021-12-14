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
    // Add SCSS support for CSS Modules.
    config.module.rules.push({
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Remove [contenthash] from image name.
    config.module.rules.push({
      test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|pdf)$/,
      loader: "file-loader",
      options: {
        name: 'static/media/[name].[ext]',
      },
    });

    return config;
  }
}
