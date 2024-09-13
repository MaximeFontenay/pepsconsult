import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.pepsconsult.fr',
  output: 'static',
  compressHTML: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
})