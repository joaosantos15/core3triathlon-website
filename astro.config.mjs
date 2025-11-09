// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '', // github repo name
  outDir: './docs', // for github pages
  trailingSlash: 'ignore', 
  vite: {
    plugins: [tailwindcss()]
  }
});