// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint'],

  css: ['~/assets/css/main.css'],
  ui: {
    prefix: 'user-invalid:',
    fonts:true,
    colorMode: true,
    theme: {
      colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error']
    }
  },

  compatibilityDate: '2025-07-16',
  runtimeConfig: {
    public: {
      sanityProjectId: 'zjqxu8zg',
      sanityDataset: 'production'
    }
  }
})