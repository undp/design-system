import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import RemoveEmptyScripts from 'webpack-remove-empty-scripts';
import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpackEntry from './webpack.entries.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgPath = path.resolve(__dirname, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

const packMode = 'production';

const banner = `
${pkg.description} ${pkg.version}
`;

/*
* Webpack build for scss and js
*/
export default [
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
        banner,
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
      }),
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
        banner,
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
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
        banner,
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
      }),
    ],
  },
];
