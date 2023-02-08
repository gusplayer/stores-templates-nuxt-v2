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
  // components: true,
  plugins: [
    '~/plugins/jsonld',
    '~/plugins/element',
    '~/plugins/mixinCommonMethods',
    '~/plugins/material-icons',
    '~plugins/validate.js',
    // '~/plugins/FacebookPixel',
    { src: '~/plugins/i18n' },
    { src: '~/plugins/chatFacebook.js', ssr: false },
    { src: '~/plugins/fuse.js', ssr: false },
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~/plugins/gtm', ssr: false },
    { src: '~/plugins/vueLazyLoad.js', ssr: false },
    { src: '~/plugins/elementTipTap', ssr: false },
  ],
  // '@/modules/generator'
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/gtm', '@nuxtjs/sitemap', 'nuxt-facebook-pixel-module'],
  facebook: {
    /* module options */
    pixelId: '671820736795254',
    autoPageView: true,
  },
  sitemap: {
    // hostname: 'https://komercia.store',
    gzip: true,
    defaults: {
      priority: 1,
      lastmod: new Date(),
    },
    exclude: [
      '/template10',
      '/template11',
      '/template12',
      '/template13',
      '/template5',
      '/template6',
      '/template7',
      '/template8',
      '/template9',
      '/template99',
      '/unicentro',
      '/template6/index_macrobrand',
      '/template99/templates/template1',
      '/template99/templates/template2',
      '/template99/templates/template3',
    ],
  },
  debug: {
    enabled: true,
  },
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    // publicPath: '/_nuxt/client/',
    transpile: ['vee-validate/dist/rules'],
    optimizeCSS: true,
    parallel: true,
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
