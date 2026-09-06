import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://xiaoxingyu2001.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  compressHTML: true,
});

