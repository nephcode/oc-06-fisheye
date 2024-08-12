import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Définit le répertoire racine pour Vite
  build: {
    outDir: '../dist', // Spécifie le répertoire de sortie
  },
});