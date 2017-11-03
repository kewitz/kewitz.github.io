const webpack = require('webpack')

const { UglifyJsPlugin } = webpack.optimize

module.exports = {
  ...require('./webpack.config'),
  devtool: 'cheap-source-map',
  plugins: [
    new UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
}
