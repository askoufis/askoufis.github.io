// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [vanillaExtractPlugin({ identifiers: 'short' })],
  },
});
