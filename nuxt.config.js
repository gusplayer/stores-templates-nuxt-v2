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
    link: [
      {
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap',
        rel: 'stylesheet',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Cabin:wght@400;600&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Corben:wght@400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap',
      },
    ],
  },
  loading: { color: '#fff' },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/element-pagination.css',
    'swiper/dist/css/swiper.css',
    'aos/dist/aos.css',
    'core-components-npm/dist/ko.css',
  ],

  plugins: [
    '~/plugins/core-components-npm',
    '~/plugins/element',
    '~/plugins/mixinCommonMethods',
    '~/plugins/cloudinary',
    '~/plugins/material-icons',
    '~plugins/validate.js',
    { src: '@/plugins/aos.js', ssr: false },
    { src: '~/plugins/fuse.js', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/vue-carrusel.js', ssr: false },
  ],
  buildModules: ['@nuxtjs/google-analytics'],
  googleAnalytics: {
    id: 'UA-175264108-1', // Uso de respaldo
  },
  gtm: {
    id: 'GTM-KGB4QPR', // Uso de respaldo
  },
  // publicRuntimeConfig: {
  //   googleAnalytics: {
  //     id: process.env.GOOGLE_ANALYTICS_ID,
  //   },
  //   gtm: {
  //     id: process.env.GOOGLE_TAG_MANAGER_ID,
  //   },
  // },
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/gtm'],
  debug: {
    enabled: true,
    sendHitTask: true,
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
