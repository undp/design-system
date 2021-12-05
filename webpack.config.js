
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require("path");

module.exports = {
  entry: {
    "base-minimal": [
      './stories/assets/scss/base-minimal.scss'
    ],
    "components/accordion": [
      './stories/Components/UIcomponents/Accordion/accordion.scss'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(scss)/, 
        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new WebpackShellPlugin({
      onBuildStart:['rm -rf dist'], 
      onBuildEnd:['rm -rf dist/components dist/base-minimal.js']
    })
  ]
};