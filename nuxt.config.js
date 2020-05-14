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
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */

  css: [
    'element-ui/lib/theme-chalk/index.css',
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
    { src: '@/plugins/aos.js', ssr: false },
    { src: '~/plugins/fuse.js', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/vue-carrusel.js', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // '@nuxtjs/style-resources',
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
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push(
  //       {
  //         name: 'Home',
  //         path: '/',
  //         component: resolve(__dirname, './pages/home.vue'),
  //       },
  //     )
  //   },
  // },
}
