/* eslint-disable no-undef */
export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'ce4pJPC3AEQoDU6jNkAEqV-Dwa1OUU8GxtRTR0d_MM8',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
  },
  loading: {
    color: 'grey',
    height: '3px',
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'swiper/dist/css/swiper.css',
    'core-components-npm/dist/ko.css',
  ],
  plugins: [
    '~/plugins/core-components-npm',
    '~/plugins/element',
    '~/plugins/mixinCommonMethods',
    '~/plugins/cloudinary',
    '~/plugins/material-icons',
    '~plugins/validate.js',
    { src: '~/plugins/i18n' },
    { src: '~/plugins/fuse.js', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/vue-carrusel.js', ssr: false },
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~/plugins/gtm', mode: 'client' },
    { src: '~/plugins/facebook-pixel', mode: 'client' },
    { src: '~plugins/SocialSharing.js', ssr: false },
    { src: '~/plugins/countryFlags.js', ssr: false },
    { src: '~/plugins/vue-lazyload.js', ssr: false },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/gtm',
    'vue-sweetalert2/nuxt',
  ],
  buildModules: ['@nuxtjs/tailwindcss'],
  debug: {
    enabled: true,
  },
  axios: {},
  build: {
    publicPath: '/_nuxt/client/',
    transpile: ['vee-validate/dist/rules'],
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
  router: {
    base: '/',
  },
}
