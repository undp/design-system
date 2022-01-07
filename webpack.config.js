const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const CopyPlugin = require("copy-webpack-plugin");
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
            'css-loader',
            {
              loader: 'resolve-url-loader',
              options: {
                attempts: 1,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ],
        },
        {
          test: /\.(svg|png|jpg)$/,
          use: [
            {
              loader: 'url-loader'
            },
          ],
        },
      ]
    },
    resolve: {
      // @TODO: Need to find a valid solution
      alias: {
        "../../../../../../assets/icons/Bars.svg": path.resolve(__dirname, 'stories/assets/icons/Bars.svg'),
        "../../../../../../assets/icons/Chevron-down.svg": path.resolve(__dirname, 'stories/assets/icons/Chevron-down.svg'),
        "../../../../assets/icons/Chevron-down.svg": path.resolve(__dirname, 'stories/assets/icons/Chevron-down.svg'),
        "../../../../../../assets/icons/Times-blue.svg": path.resolve(__dirname, 'stories/assets/icons/Times-blue.svg')
      },
    },
    optimization: {
      minimizer: [
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
      ],
    },
    plugins: [
      // copying icons folder for better reach 
      // to dist folder
      new CopyPlugin({
        patterns: [
          { from: "./stories/assets/icons", to: "images" },
        ]
      }),
      // remove .js file from every .css file
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
          loader: 'url-loader'
        }
      ]
    }
  },
];

