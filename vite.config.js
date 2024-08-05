// vite.config.js
import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  esbuild: {
    target: 'esnext' // Change this to an environment that supports top-level await
  },
  server: {
    host: 'oc06-fisheye.local',
    port: 5006,
    https: false,
  },
  preview: {
    host: 'oc06-fisheye.local',
    port: 5106,
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        photographer: resolve(__dirname, 'public/photographer.html'),
        // Ajoutez ici vos fichiers JS que vous voulez compiler
        script1: resolve(__dirname, 'js/pages/photographer.js'),
        // Ajoutez autant d'entrées que nécessaire
      },
    },
  },
});