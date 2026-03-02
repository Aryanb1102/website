import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

const site = process.env.PUBLIC_SITE || 'https://Aryanb1102.github.io';
const base = process.env.PUBLIC_BASE || '/';

export default defineConfig({
  site,
  base,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
  output: 'static',
});
