const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');
const publicPath = path.resolve(__dirname, 'public');

module.exports = {
  entry: {
    main: path.join(srcPath, 'index.tsx'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      '@app': path.join(srcPath, 'app'),
      '@pages': path.join(srcPath, 'pages'),
      '@widgets': path.join(srcPath, 'widgets'),
      '@entities': path.join(srcPath, 'entities'),
      '@shared': path.join(srcPath, 'shared'),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: srcPath,
        exclude: [/node_modules/, /__tests__/, /\.test\.(t|j)sx?$/, /\.spec\.(t|j)sx?$/],
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }]
      },
      { enforce: 'pre', test: /\.js$/, use: ['source-map-loader'] },
      { test: /\.(png|jpe?g|gif|svg|webp|ico)$/i, type: 'asset/resource', generator: { filename: 'assets/images/[name][hash][ext]' } },
      { test: /\.(woff2?|eot|ttf|otf)$/i, type: 'asset/resource', generator: { filename: 'assets/fonts/[name][hash][ext]' } },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: publicPath, to: path.resolve(__dirname, 'dist'), globOptions: { ignore: ['**/index.html'] } }
      ]
    }),
    new Dotenv(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: { configFile: path.resolve(__dirname, 'tsconfig.json') }
    })
  ]
};
