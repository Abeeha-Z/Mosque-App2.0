import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/sanity'],
  runtimeConfig: {
    compatibilityDate: "2025-07-25",
    sanity: {
      token: process.env.NUXT_SANITY_TOKEN,
      projectId: 'zjqxu8zg',
      dataset: 'production',
      useCdn: false,
  },

  
}}
)
