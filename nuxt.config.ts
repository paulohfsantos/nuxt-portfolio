export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['/assets/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
  app: {
    head: {
      title: 'Portfolio - Paulo Santos',
    }
  }
})