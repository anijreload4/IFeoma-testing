import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  vite: {
    plugins: [
      ViteImageOptimizer({
        jpg: {
          quality: 80
        },
        jpeg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      })
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            swiper: ['swiper'],
            'framer-motion': ['framer-motion'],
          }
        }
      }
    },
    ssr: {
      noExternal: ['@phosphor-icons/react']
    }
  }
});