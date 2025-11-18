const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      // override CSS for dev: style-loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  },
  devServer: {
    static: { directory: path.resolve(__dirname, 'dist') },
    historyApiFallback: true, // SPA fallback
    port: 3000,
    open: true,
    hot: true,
    client: { overlay: true },
  },
  optimization: { runtimeChunk: 'single' },
});
