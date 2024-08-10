import { defineConfig } from 'vite';

export default defineConfig({
  // Configurations générales pour le développement
  server: {
    port: 3000,  // Port sur lequel le serveur de développement va tourner
    open: true,  // Ouvrir automatiquement le navigateur
  },

  // Configurations pour la construction
  build: {
    outDir: 'dist',  // Répertoire de sortie pour les fichiers construits
    sourcemap: true, // Générer une source map pour le débogage
    rollupOptions: {
      input: 'index.html',  // Point d'entrée principal
    },
  },

  // Résolution de modules
  resolve: {
    alias: {
      '@': '/src',  // Exemple d'alias pour accéder plus facilement aux fichiers sources
    },
  },
});
