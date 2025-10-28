const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const RemoveEmptyScripts = require('webpack-remove-empty-scripts');
// const RemovePlugin = require('remove-files-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpackEntry = require('./webpack.entries');
const pkg = require('./package.json');

const packMode = 'production';

const banner = `
${pkg.description} ${pkg.version}
`;

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
              options: { sourceMap: true },
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
      new webpack.BannerPlugin({
        banner: banner,
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT
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
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false, // Remove comments
            },
          },
          extractComments: false, // Do not extract comments to a separate file
        }),
      ],
    },
    externals: {
      jquery: 'jQuery',
      Swiper: 'Swiper',
      gsap: 'gsap',
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new webpack.BannerPlugin({
        banner: banner,
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT
      }),
    ],
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
  {
    mode: packMode,
    entry: './stories/assets/js/init.js', // Special routine for the initialization script
    output: {
      path: path.resolve(__dirname, 'docs/js'), // Output directory
      filename: 'init.js', // Minified output file name
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false, // Remove comments
            },
          },
          extractComments: false, // Do not extract comments to a separate file
        }),
      ],
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: banner,
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT
      }),
    ],
  },
];