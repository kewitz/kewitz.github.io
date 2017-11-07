const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'app/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'static'),
    publicPath: '/',
    filename: './bundle.js',
  },
  module: {
    rules: [
      { test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!less-loader',
          fallback: 'style-loader',
        }) },
      { test: /\.js[x]?$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app'),
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
}
