const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const webpackEntry = require('./webpack.entries');
const packMode = 'production';

/*
* Webpack build for scss and js
*/
module.exports = [
  {
    mode: packMode,
    entry: webpackEntry(),
    module: {
      rules: [
        {
          test: /\.scss$/, 
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader:'css-loader',
              options: {
                url: false
              }
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(svg|png|jpg)$/,
          loader: 'url-loader?limit=8192'
        },
      ]
    },
    plugins: [
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].min.css',
      })
    ]
  },
  {
    mode: packMode,
    entry: webpackEntry('js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].min.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(svg|png|jpg)$/,
          loader: 'url-loader?limit=8192'
        }
      ]
    }
  },
];

