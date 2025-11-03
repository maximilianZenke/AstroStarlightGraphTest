// @ts-check
import { defineConfig } from 'astro/config';
import sitegraphSitemapIntegration from 'starlight-site-graph/integration';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://maximilianzenke.github.io/Astro-Blog/',
  prefetch: true,
  base: '/Astro-Blog/',
  outDir: 'docs',

  integrations: [react(), sitegraphSitemapIntegration({
      sitemapConfig: {
          contentRoot: "./src",
      },
      graphConfig: {
    depth: 10,
    repelForce: 350,
    linkDistance: 75,
    colliderPadding: 50,
  }
  })],

  vite: {
    plugins: [tailwindcss()],
  },
});