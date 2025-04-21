import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Using the React plugin for Vite
  build: {
    rollupOptions: {
      external: ['netlify-identity-widget'], // Marking netlify-identity-widget as external
    },
  },
});
