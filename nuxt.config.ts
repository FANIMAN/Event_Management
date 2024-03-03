// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: false },
//   css: ['~/assets/css/main.css'],
//   postcss: {
//     plugins: {
//       tailwindcss: {},
//       autoprefixer: {},
//     },
//   },
// })






import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    title: 'Santim Event',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Santim Event Management' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Customize the progress-bar color: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading
  loading: { color: '#D3AF35' }, // Change the color of the progress bar
  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ['~/assets/css/main.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // Server configuration: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-server
  // server: {
  //   port: 3000, // Customize the port where Nuxt server runs
  // },
  // // Environment variables: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env
  // env: {
  //   apiUrl: process.env.API_URL || 'https://example.com/api', // Define environment variables
  // },
  // Modern mode: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modern
  // modern: 'client',
  // Generate configuration: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate
  // generate: {
  //   // Specify dynamic routes to be pre-rendered
  //   routes: [
  //     '/events/1',
  //     '/events/2',
  //     // Add more routes as needed
  //   ],
  // },
  // Router configuration: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router
  // router: {
  //   // Customize the behavior of the router
  // },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Base URL for Axios requests
  //   baseURL: 'https://api.example.com',
  // },
};

export default config;

