import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import compress from 'astro-compress'
import robotsTxt from 'astro-robots-txt'
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
    vue(),
    sitemap(),
    robotsTxt(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  assetsInclude: {
    'src/assets': true,
  },
})
