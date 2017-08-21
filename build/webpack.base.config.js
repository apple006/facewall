var webpack = require('webpack')
var path = require('path')

var baseConfig = {
  entry: {
    page: ['../index.js'],
    vendor1: ['jquery'],
    vendor2: ['three'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './[name]/[hash].js',
    publicPath: '/'
  },
  resolve: {
      extensions: ['', '.js'],
      fallback: [path.join(__dirname, './node_modules')],
  },
  module: {
      loaders: [
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
        },
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        }
      ]
    },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor2", "vendor1"],
      minChunks: Infinity
    })
  ]
}
module.exports = baseConfig;