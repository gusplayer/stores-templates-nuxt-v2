export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
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
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
  /*
   ** Plugins to load before mounting the App
   */
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
    // { src: '~/plugins/google-analytics.js', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  // buildModules: [
  //   [
  //     '@nuxtjs/google-analytics',
  //     {
  //       id: 'UA-92934137-1',
  //     },
  //   ],
  // ],
  debug: {
    enabled: true,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // ['@nuxtjs/google-tag-manager', { id: 'GTM-KGB4QPR', pageTracking: true }],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  // resolve: {
  //   root: [
  //     path.resolve('.'),
  //     path.resolve('../core-components-npm/src/components'),
  //   ],
  // },
  // build: {
  //   transpile: ['vee-validate/dist/rules'],
  //   extend(config, ctx) {
  //     if (ctx.isDev) {
  //       config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
  //     }
  //   },
  // },
  build: {
    publicPath: '/_nuxt/client/',
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  router: {
    base: '/',
  },
}
