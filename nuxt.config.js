/* eslint-disable no-undef */
// const isProd = process.env.NODE_ENV === 'production'
export default {
  // mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // {
      //   name: 'google-site-verification',
      //   content: 'ce4pJPC3AEQoDU6jNkAEqV-Dwa1OUU8GxtRTR0d_MM8',
      // },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        name: ' google',
        content: ' notranslate',
      },
    ],
  },
  loading: {
    color: 'grey',
    height: '3px',
  },
  css: ['element-ui/lib/theme-chalk/index.css'],
  plugins: [
    '~/plugins/element',
    '~/plugins/mixinCommonMethods',
    '~/plugins/material-icons',
    '~plugins/validate.js',
    '~/plugins/facebook-pixel',
    { src: '~/plugins/i18n' },
    { src: '~/plugins/chatFacebook.js', ssr: false },
    { src: '~/plugins/fuse.js', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/vue-carrusel.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~/plugins/gtm', ssr: false },
    { src: '~/plugins/countryFlags.js', ssr: false },
    { src: '~/plugins/vue-lazyload.js', ssr: false },
    { src: '~/plugins/element-tiptap', ssr: false },
  ],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/gtm'],
  debug: {
    enabled: true,
  },
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
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
