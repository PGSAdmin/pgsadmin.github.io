export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    description: 'Pers Gasservice - Det’ mig med bindestregen',
    htmlAttrs: {
      lang: 'da',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Gasservice i Nordsjælland. Er uheldet ude, står vi klar til at efterse og reparere dit gasfyr med kort varsel.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'gasservice, gasfyr, vvs, nordsjælland, hornbæk',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Pers Gasservice - Det’ mig med bindestregen',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Gasservice i Nordsjælland. Er uheldet ude, står vi klar til at efterse og reparere dit gasfyr med kort varsel.',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://gas-service.dk',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://gas-service.dk/opengraph_logo.png',
      },
      {
        hid: 'og:image:url',
        property: 'og:image:url',
        content: 'https://gas-service.dk/opengraph_logo.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  fontawesome: {
    icons: {
      solid: ['faPhone', 'faEnvelope'],
    },
  },

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },
}
