import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [markdoc(), react()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
