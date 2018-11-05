const nodeExternals = require('webpack-node-externals')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  // ...
  externals: [nodeExternals()],
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}