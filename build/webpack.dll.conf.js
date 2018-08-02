const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['vue/dist/vue.common.js','vue-router', 'babel-polyfill','axios']
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[defaultName].dll.js',
    library: '[defaultName]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[defaultName]-manifest.json'),
      defaultName: '[defaultName]_library'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
};
