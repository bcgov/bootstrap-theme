const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: __dirname + "/src",

  entry: ['./bootstrap-theme.js', './styles/bootstrap-theme.scss'],

  output: {
    path: __dirname + "/dist",
    publicPath: '../',
    filename: 'js/bootstrap-theme.min.js'
  },
  module: {

    rules: [
      // loader for regular css files
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      // scss loader for webpack
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      // move fonts into local directory
      {
        test: /\.(otf|ttf|eot|woff|woff2|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              debug: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/bootstrap-theme.min.css',
    }),
    // We just copy these because the client may have already a dependency or choose a different JS package
    new CopyWebpackPlugin([
      {
        from: 'fonts',
        to: 'fonts'
      },
      {
        from: 'images',
        to: 'images'
      },
      {
        from: 'styles',
        to: 'scss'
      }
    ]),
    new CleanWebpackPlugin({
      verbose: true,
      dry: false
    }),
  ],
};

