require('babel/register');

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var resolve = {
  extensions: ['', '.js', '.jsx', 'jsx', 'js', '.css'],
  fallback: path.join(__dirname, 'node_modules'),
  root: path.join(__dirname, 'src', 'scripts'),
};

module.exports = {
  entry: [
    './src/scripts/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    sourceMapFileName: 'bundle.map',
    publicPath: '/public/' // Used in webpack-dev-server as the directory for bundle.js
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new webpack.NoErrorsPlugin()
  ],
  resolve: resolve,
  resolveLoader: resolve,
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint'
    }],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      }
    ]
  },
  postcss: [
    require('postcss-cssnext')({
      browsers: 'last 2 versions',
      features: {
        // https://github.com/robwierzbowski/node-pixrem/issues/40
        rem: false
      },
      import: true,
      compress: false,
      messages: true
    }),
    require('postcss-nested'),
    require('lost')
  ],
  debug: false,
  profile: false,
  eslint: {
    failOnError: false
  }
};
