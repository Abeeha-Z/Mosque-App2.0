// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig(<any>{
  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@primevue/nuxt-module'],
  

  css: ['~/assets/css/main.css'],
  
   components: true,

  compatibilityDate: '2025-07-30',
  
  runtimeConfig: {
    public: {
      sanityProjectId: 'zjqxu8zg',
      sanityDataset: 'production'
    }
  },
  primevue: {
      // autoImport: true,
        options: {
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    cssLayer: true
                }
            }
        }
    },
        })