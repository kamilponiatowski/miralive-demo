import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },

  extends: ['./layers/core', './layers/seo'],

  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
  ],

  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  site: {
    url: 'https://miralive.pl',
    name: 'Miralive — Specjalistyczne Doradztwo Ubezpieczeniowe',
    description: 'Miralive to nowoczesna agencja ubezpieczeniowa specjalizująca się w ubezpieczeniach życiowych, zdrowotnych, komunikacyjnych i firmowych. Ekspert Mirosława Poniatowska — indywidualne doradztwo we Włocławku i województwie kujawsko-pomorskim.',
    defaultLocale: 'pl',
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },

  fonts: {
    provider: 'bunny',
    families: [
      { name: 'Inter', weights: [400, 500, 600, 700, 800] },
    ],
  },

  ogImage: { zeroRuntime: true },

  vite: {
    plugins: [tailwindcss()],
  },
})
