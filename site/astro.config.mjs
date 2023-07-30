import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [markdoc()],
  vite: {
    plugins: [vanillaExtractPlugin({ identifiers: 'short' })],
  },
});
