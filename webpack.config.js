const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const RemoveEmptyScripts = require('webpack-remove-empty-scripts');
// const RemovePlugin = require('remove-files-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpackEntry = require('./webpack.entries');

const packMode = 'production';

/*
* Webpack build for scss and js
*/
module.exports = [
  {
    mode: packMode,
    entry: webpackEntry('css'),
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
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: 'sass-embedded',
                sourceMap: true,
                sassOptions: {
                  quietDeps: true,
                  silenceDeprecations: ['import', 'global-builtin'],
                },
              },
            },
          ],
        },
        {
          test: /\.(svg|png|jpg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
        {
          test: /\.(eot|woff|woff2|ttf)([?]?.*)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },
    resolve: {
      // @TODO: Need to find a valid option to manage these icon to resolve
      alias: {
        icons: path.resolve(__dirname, 'stories/assets/icons'),
        // '../../../../../../assets/icons/hamburger.svg': path.resolve(__dirname, 'stories/assets/icons/hamburger.svg'),
        // '../../../../../../assets/icons/chevron-down.svg': path.resolve(__dirname, 'stories/assets/icons/chevron-down.svg'),
        // '../../../../assets/icons/chevron-down.svg': path.resolve(__dirname, 'stories/assets/icons/chevron-down.svg'),
        // '../../../../../../assets/icons/times-blue.svg': path.resolve(__dirname, 'stories/assets/icons/times-blue.svg'),
        // '../../../assets/icons/chevron-small-right.svg': path.resolve(__dirname, 'stories/assets/icons/chevron-small-right.svg'),
      },
      extensions: ['.ts', '.js'],
    },
    optimization: {
      minimizer: [
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
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
          { from: './stories/assets/icons', to: 'images' },
          { from: './stories/assets/images/(undp|pnud)-logo-(blue|white).svg', to: 'images/[name][ext]' },
          { from: './stories/assets/fonts', to: 'fonts' },
        ],
      }),
      // remove .js file which is generated from every css file
      new RemoveEmptyScripts(),
      new MiniCssExtractPlugin({
        filename: '[name].min.css',
      }),
      // delete fonts from the root directory
      // new RemovePlugin({
      //   after: {
      //     include: [
      //       'fonts',
      //     ],
      //     trash: true,
      //   },
      // }),
    ],
    output: {
      path: path.resolve(__dirname, 'docs'),
    },
  },
  {
    mode: packMode,
    entry: webpackEntry('js'),
    resolve: {
      alias: {
        icons: path.resolve(__dirname, 'stories/assets/icons'),
      },
    },
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: '[name].min.js',
      libraryTarget: 'umd',
    },
    externals: {
      jquery: 'jQuery',
      Swiper: 'Swiper',
      gsap: 'gsap',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env'],
              ],
            },
          },
        },
        {
          test: /\.(svg|png|jpg)$/,
          type: 'asset',
        },
      ],
    },
  },
];