const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');

const webpackMerge = require('webpack-merge');
const loadModeConfig = env => require(`./build-utils/${env.mode}.config`)(env);

module.exports = env =>
  webpackMerge(
    {
      mode: env.mode,
      context: path.resolve(__dirname, 'src'),
      entry: './index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: ['babel-loader'],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[path]/[name].[ext]',
                  limit: 8192,
                  esModule: false,
                },
              },
              'img-loader',
            ],
          },
          {
            test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/',
                  limit: 10000,
                  mimetype: 'application/font-woff',
                },
              },
            ],
          },
          {
            test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/',
                },
              },
            ],
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          { test: /\.hbs$/, loader: 'handlebars-loader' },
        ],
      },
      plugins: [new CleanWebpackPlugin(), new FriendlyErrorsWebpackPlugin(), new WebpackBar()],
    },
    loadModeConfig(env),
  );
