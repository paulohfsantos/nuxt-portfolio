export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['/assets/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-mdi'],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_BASE,
      apiSecret: process.env.NUXT_PUBLIC_API_SECRET,
    }
  },
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
  imports: {
    dirs: ['./store'],
  },
  app: {
    head: {
      title: 'Portfolio - Paulo Santos',
    }
  },
})