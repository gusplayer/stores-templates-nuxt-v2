export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
  },
  loading: { color: '#fff' },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/element-pagination.css',
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
    { src: '~/plugins/fuse.js', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/vue-carrusel.js', ssr: false },
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~/plugins/gtm', mode: 'client' },
    { src: '~/plugins/facebook-pixel', mode: 'client' },
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/gtm'],

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
