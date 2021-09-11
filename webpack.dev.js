const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack')
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
  contentBase: [path.join(__dirname, "build/"), path.join(__dirname, "src/common/")],
  publicPath: "http://localhost:3000/build/",
  port: 3000,
  hotOnly: true,
  historyApiFallback: true
  },
  plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: './index.html',
    filename: './index.html'
  }),
]
});