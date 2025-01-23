import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: ['src/index.ts'],
      formats: ['es', 'cjs'],
      name: 'Test',
    },
    sourcemap: true,
    rollupOptions: {
      external: ['@vanilla-extract/css'],
    }  
  },
});
