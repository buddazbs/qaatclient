import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import compression from 'vite-plugin-compression';

export default defineConfig({
  base: '/qaatclient/', // ВАЖНО: должен совпадать с именем репозитория
  plugins: [
  react(),
  compression(), // Gzip
  compression({ algorithm: 'brotliCompress' }), // Brotli
],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@api': path.resolve(__dirname, './src/services/api'),
    },
  },
    optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'antd',
      '@ant-design/icons',
      '@reduxjs/toolkit',
      'react-redux',
    ],
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          antd: ['antd', '@ant-design/icons'],
          redux: ['@reduxjs/toolkit', 'react-redux'],
        },
      },
    },
  },
});