// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL e BASE_PATH permitem publicar o mesmo código no GitHub Pages
// (subpasta /Portifolio-Anderson-Farias) ou na Vercel (raiz do domínio).
const site = process.env.SITE_URL ?? 'https://andersonfariaas.github.io';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
