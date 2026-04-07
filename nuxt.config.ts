import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },

  extends: ['./layers/core', './layers/seo'],

  app: {
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-W4MT7HE598',
          async: true,
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-W4MT7HE598');`,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
      ],
    },
  },

  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
  ],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY ?? '',
  },

  routeRules: {
    '/**': { prerender: true },
    '/api/**': { prerender: false },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  site: {
    url: 'https://miralive.pl',
    name: 'Miralive — Specjalistyczne Usługi Ubezpieczeniowe',
    description: 'Miralive to nowoczesna agencja ubezpieczeniowa specjalizująca się w ubezpieczeniach życiowych, zdrowotnych, komunikacyjnych i firmowych. Ekspert Mirosława Poniatowska — indywidualne usługi ubezpieczeniowe we Włocławku i województwie kujawsko-pomorskim.',
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

  ogImage: {
    zeroRuntime: true,
    defaults: {
      renderer: 'satori',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
