// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://xzbfsf.github.io',
  base: '/www',  // repo name
  trailingSlash: `never`,
  markdown: {
    shikiConfig: {
      theme: 'nord'
    }
  },
  integrations: [tailwind()]
});