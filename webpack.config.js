const webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'src/client/public')
var APP_DIR = path.resolve(__dirname, 'src/client/app')

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    APP_DIR + '/index.jsx'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: BUILD_DIR,
    publicPath: 'public/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: __dirname + '/src/client',
    hot: true
  }
}
