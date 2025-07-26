import { defineNuxtConfig } from 'nuxt/config'
console.log('Sanity Token:', process.env.NUXT_SANITY_TOKEN ? 'Found' : 'Missing')

export default defineNuxtConfig({
  compatibilityDate: "2025-07-25",
  
  modules: ['@nuxtjs/sanity'],
  
  sanity: {
    projectId: 'zjqxu8zg',
    dataset: 'production',
    // Remove everything else temporarily
  },

  runtimeConfig: {
    // Only put runtime-specific config here
    // Like API keys that need to be available at runtime
    public: {
      // Public runtime config (available on client-side)
    }
  }
})