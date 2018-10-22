const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'babel-polyfill',
    './src/app/Index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
