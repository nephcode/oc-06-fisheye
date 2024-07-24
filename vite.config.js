// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    target: 'esnext' // Changez ceci pour un environnement supportant top-level await
  }
});
