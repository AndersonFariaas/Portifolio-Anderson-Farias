// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Na Vercel, VERCEL_PROJECT_PRODUCTION_URL traz o domínio de produção (inclusive nos
// deploys de preview), então canonical, og:image e sitemap sempre apontam para produção.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = productionHost ? `https://${productionHost}` : 'http://localhost:4321';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
