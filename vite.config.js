// vite.config.js
import { defineConfig } from 'vite';

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
});