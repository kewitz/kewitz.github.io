const conf = require('./webpack.config')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  ...conf,
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: ['./'],
    port: 8080,
  },
  plugins: [
    ...conf.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ],
}
