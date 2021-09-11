const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
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
  externals: {
    'react': "React",
    'react-dom': "ReactDOM",
    'styled-components': 'styled-components'
  },
  output: {
    path: path.join(__dirname, "/build"),
    publicPath: "/build/",
    filename: "bundle.js",
  },
};