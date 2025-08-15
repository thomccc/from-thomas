import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://from-thomas.com',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Remove source file information
          sourcemap: false,
        },
      },
    },
  },
  // Disable source file information in development
  devToolbar: {
    enabled: false,
  },
});
