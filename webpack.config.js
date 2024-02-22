'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: ['./src/js/main.js', './src/scss/styles.scss'],
  output: { 
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '../fonts/bc-sans/[hash][ext][query]' // move fonts into local directory, file loader deprecated
    /*
    path: __dirname + "/dist",
    publicPath: '../',
    filename: 'js/main.js',
    assetModuleFilename: 'fonts/bc-sans/[hash][ext][query]' // move fonts into local directory, file loader deprecated
    */
  },
  devServer:{
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new miniCssExtractPlugin({
      filename: 'css/main.css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Extracts CSS for each JS file that includes CSS
            loader: miniCssExtractPlugin.loader
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
