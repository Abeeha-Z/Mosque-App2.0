export default defineNuxtConfig({
  modules: ['@nuxtjs/sanity'],
  runtimeConfig: {
    sanity: {
      token: process.env.NUXT_SANITY_TOKEN,
        projectId: 'zjqxu8zg',
      dataset: 'production',
      useCdn: false,
    // liveContent: {
    //   browserToken: process.env.NUXT_SANITY_LIVE_BROWSER_TOKEN,
    //   serverToken: process.env.NUXT_SANITY_LIVE_SERVER_TOKEN,
    // },
  },
  
}}
)
