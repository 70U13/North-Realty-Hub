import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    laravel({
      input: ['resources/css/app.css', 'resources/frontend/app.js'],
      refresh: true,
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Laravel API backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove '/api' prefix if needed
      },
    },
  },
});
