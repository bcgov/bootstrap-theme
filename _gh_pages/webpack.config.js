const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/bootstrap-theme.js', './src/bootstrap-theme.scss'],
  output: {
    filename: 'dist/js/bootstrap-theme.min.js'
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
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/css/bootstrap-theme.min.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: 'node_modules/bootstrap/dist/js/',
        to: 'dist/js/'
      },
      {
        from: 'node_modules/jquery/dist/',
        to: 'dist/js/jquery/'
      },
      {
        from: 'node_modules/popper.js/dist/umd/',
        to: 'dist/js/popper.js/'
      },
      {
        from: 'src/fonts',
        to: 'dist/fonts'
      },
      {
        from: 'src/images',
        to: 'dist/images'
      }
    ]),
    /*
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),*/
  ],
};

