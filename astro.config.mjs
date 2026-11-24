import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://ittools.local',
  compressHTML: true,
  build: {
    format: 'directory',
    assets: '_assets',
  },
});
