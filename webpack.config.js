const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname + "/src",

  entry: ['./bootstrap-theme.js', './styles/bootstrap-theme.scss'],

  output: {
    path: __dirname + "/dist",
    filename: 'js/bootstrap-theme.min.js'
  },
  module: {

    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract([{
          loader: "css-loader",
          options: {
            minimize: true
          }}, 'sass-loader'])
      },
      // Pull out all fonts because not all should be packaged because some browsers prefer different types
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '../'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'css/bootstrap-theme.min.css',
      allChunks: true,
    }),
    // We just copy these because the client may have already a dependency or choose a different JS package
    new CopyWebpackPlugin([
      {
        from: 'images',
        to: 'images'
      },
      {
        from: 'styles',
        to: 'src'
      }
    ]),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
  ],
};

