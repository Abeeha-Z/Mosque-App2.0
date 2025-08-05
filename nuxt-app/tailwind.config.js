/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';
 
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [PrimeUI],
}

