// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lehoangphuc747.github.io',
  base: process.env.NODE_ENV === 'production' ? '/hocanki' : undefined,
  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});