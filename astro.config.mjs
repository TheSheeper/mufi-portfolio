// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import icon from "astro-icon"

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://thesheeper.github.io',
  base: '/mufi-portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [preact(), icon()],
  fonts: [{
    provider: fontProviders.local(),
    name: "TropiLand",
    cssVariable: "--font-tropi-land",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Tropi Land.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
});