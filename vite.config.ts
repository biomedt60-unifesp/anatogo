import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { generateAnatoApiPlugin } from './plugins/generateAnatoApi'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'anatogo'
const base = process.env.VITE_BASE ?? (process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/')

export default defineConfig({
  base,
  plugins: [
    generateAnatoApiPlugin(),
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: [
        'favicon.svg',
        'pwa-icon.svg',
        '404.html',
        'images/brain-intro.png',
        'images/prof-ossada.png',
        'images/prof-ossada-2.png',
      ],
      manifest: {
        name: 'Anatodex — Museu de Anatomia UNIFESP',
        short_name: 'Anatodex',
        description:
          'Atlas interativo dos sistemas do corpo humano. Guia do museu com Prof. Ossada — Turma 60 Biomedicina, UNIFESP.',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        orientation: 'portrait-primary',
        lang: 'pt-BR',
        start_url: './',
        scope: './',
        categories: ['education', 'medical'],
        icons: [
          {
            src: 'pwa-icon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: 'pwa-icon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,svg,woff2,woff}'],
        navigateFallback: 'index.html',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
})
