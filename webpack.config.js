// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const publicPath = isProd ? '/repo-name/' : './';

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'static/js/[name].[contenthash:8].js',
      publicPath: publicPath,
      clean: true,
    },
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'eval-source-map',
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 8080,
      open: true,
      compress: true,
      historyApiFallback: true, // SPA fallback
    },
resolve: {
  extensions: ['.tsx', '.ts', '.js', '.jsx'],
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@app': path.resolve(__dirname, 'src/app'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@widgets': path.resolve(__dirname, 'src/widgets'),
    '@entities': path.resolve(__dirname, 'src/entities'),
    '@shared': path.resolve(__dirname, 'src/shared'),
    '@api': path.resolve(__dirname, 'src/services/api'),
  },
},
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|ico|woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: { filename: 'assets/[name][hash][ext]' },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        inject: 'body',
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
      }),
      new Dotenv(),
    ],
    optimization: {
      splitChunks: { chunks: 'all', name: false },
      runtimeChunk: { name: entrypoint => `runtime~${entrypoint.name}` },
      minimize: isProd,
    },
  };
};
