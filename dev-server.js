const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const [client, server] = require('./webpack.config');

// Add webpack dev server HMR entrypoints
client.entry.client.unshift(`webpack-dev-server/client?http://${process.env.HOST}:8080/`, "webpack/hot/only-dev-server");
// add HMR
client.plugins.push(new webpack.HotModuleReplacementPlugin());
// And finally, add 'react-hot-loader/webpack' to JS loaders

new WebpackDevServer(
  webpack([client, server]),
  Object.assign({}, client.devServer)
).listen(8080);
