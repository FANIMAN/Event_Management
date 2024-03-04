// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})






// import type { NuxtConfig } from '@nuxt/types';

// const config: NuxtConfig = {
//   devtools: { enabled: false },
//   css: ['~/assets/css/main.css'],
//   postcss: {
//     plugins: {
//       tailwindcss: {},
//       autoprefixer: {},
//     },
//   },
//   head: {
//     title: 'Santim Event',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: 'Santim Event Management' },
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
//     ],
//   },

//   // Customize the progress-bar color: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading
//   loading: { color: '#D3AF35' }, // Change the color of the progress bar
// };

// export default config;

