const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack')
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
  contentBase: path.join(__dirname, "src/common/vendors/"),
  publicPath: "http://localhost:3000/",
  port: 3000,
  hotOnly: true,
  historyApiFallback: true
  },
  plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin(),
  // new CopyPlugin([
  //   { 
  //     from: path.resolve(__dirname, "index.html"), 
  //     to: path.resolve(__dirname, "build/")
  //   }
  // ]),
]
});