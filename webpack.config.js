const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require('copy-webpack-plugin');

// Reset webpack config file

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "build/"), //reset
    publicPath: "/build/",//reset
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "build/"),// reset
    port: 3000,
    publicPath: "http://localhost:3000/build/",
    hotOnly: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([
      { 
        from: path.resolve(__dirname, "src/index.html"), 
        to: path.resolve(__dirname, "build/")//reset
      },
      {
        from: path.resolve(__dirname, "src/common/vendors/"), 
        to: path.resolve(__dirname, "build/public/")//reset
      }
    ]),
  ]
};