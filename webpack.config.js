'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: ['./src/js/bootstrap-theme.js', './src/scss/bootstrap-theme.scss'],
  output: { 
    filename: 'js/bootstrap-theme.min.js',
    path: path.resolve(__dirname, 'dist'),
    //assetModuleFilename: '../fonts/bc-sans/[hash][ext][query]' // move fonts into local directory, file loader deprecated

  },
  devServer:{
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
  
    new HtmlWebpackPlugin({
      filename: 'demo.html',
      template: './src/demo.html'
    }),

    new HtmlWebpackPlugin({
      filename: 'introduction.html',
      template: './src/introduction.html'
    }),
    
    //new HtmlWebpackPlugin({ template: './src/index.html' }),
    new miniCssExtractPlugin({
      filename: 'css/bootstrap-theme.min.css',
    })
  
  ],
  module: {
    rules: [
       // move fonts into local directory
       {
        test      : /\.(otf|ttf|eot|woff|woff2|svg)$/,
        type      : 'asset/resource',
        generator : {
          filename : 'fonts/bc-sans/[name][ext][query]',
        }
      },

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
