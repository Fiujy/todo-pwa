import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'To-Do PWA',
        short_name: 'To-Do',
        description: 'A simple PWA with a to-do list',
        theme_color: '#ffffff',
      },
    }),
  ],
});