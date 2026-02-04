import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

const site = 'https://Aryanb1102.github.io';
const base = '/website/';

export default defineConfig({
  site,
  base,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
  output: 'static',
});