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
  imports: {
    dirs: ['./store']
  },
  app: {
    head: {
      title: 'Portfolio - Paulo Santos',
    }
  }
})