import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.xiaoxingyu2001.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  compressHTML: true,
});

