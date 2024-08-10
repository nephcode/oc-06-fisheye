// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  console.log(`vite running in mode ${mode}`)

  const prod = {
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
  }

  const dev = {
    esbuild: {
      target: 'esnext' // Change this to an environment that supports top-level await
    }
  }

  return mode === 'development' ? dev : prod


});