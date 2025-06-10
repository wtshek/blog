// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://wingtungshek.com/',
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false, // We're using our custom global.css
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-TW'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});