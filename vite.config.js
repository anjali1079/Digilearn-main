import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Using the React plugin for Vite
  build: {
    rollupOptions: {
      external: ['netlify-identity-widget'], // Marking netlify-identity-widget as external
    },
  },
  // Enable optimized CSS output
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/global.scss"; // Automatically include global styles (e.g., for smooth scrolling)
        `,
      },
    },
  },
});
