import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/odin-cv-project/',
  plugins: [
    react(),
    {
      ...eslint({
        cache: true,
        fix: true,
      }),
      apply: 'build',
    },
  ],
  server: {
    open: true,
    port: 3000,
    host: true,
  },
});
