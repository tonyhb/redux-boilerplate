const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const WriteFilePlugin = require('write-file-webpack-plugin');
const [client, server] = require('./webpack.config');

// Add webpack dev server HMR entrypoints
client.entry.client.unshift(
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://${process.env.HOST}:8080/`,
  'webpack/hot/only-dev-server',
);
// add HMR
client.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new WriteFilePlugin(),
);

const proxy =  {
  '/api': {
    target: process.env.APIHOST || 'http://localhost',
    secure: false
  }
};

new WebpackDevServer(
  webpack([client, server]),
  Object.assign({}, client.devServer, { proxy })
).listen(8080);
