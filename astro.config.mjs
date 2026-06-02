import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site for Cloudflare Pages. Custom domain: nofreeze.pro
export default defineConfig({
  site: 'https://nofreeze.pro',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
