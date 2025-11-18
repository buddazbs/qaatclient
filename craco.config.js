const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@shared': path.resolve(__dirname, 'src/shared')
    },
    configure: (webpackConfig) => {
      // убедиться, что расширения для TS присутствуют
      webpackConfig.resolve.extensions = webpackConfig.resolve.extensions || [];
      ['.ts', '.tsx', '.js', '.jsx', '.css'].forEach(ext => {
        if (!webpackConfig.resolve.extensions.includes(ext)) {
          webpackConfig.resolve.extensions.push(ext);
        }
      });
      return webpackConfig;
    }
  }
};
