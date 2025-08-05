import PrimeVue from 'primevue/config'
import Ripple from 'primevue/ripple'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.directive('ripple', Ripple)
})