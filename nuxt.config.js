/* eslint-disable no-undef */
export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'es',
      amp: true,
    },
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
    link: [
      {
        href:
          'https://fonts.googleapis.com/css2?family=David+Libre&family=Great+Vibes&family=Lora:ital@0;1&display=swap',
        rel: 'stylesheet',
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap',
        rel: 'stylesheet',
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
        rel: 'stylesheet',
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
    { src: '~plugins/ga.js', ssr: false },
    { src: '~/plugins/gtm', ssr: false },
    { src: '~/plugins/facebook-pixel', ssr: false },
    { src: '~/plugins/countryFlags.js', ssr: false },
    { src: '~/plugins/vue-lazyload.js', ssr: false },
    { src: '~/plugins/element-tiptap', ssr: false },
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
  pwa: {
    icon: false,
    meta: {
      title: process.env.npm_package_name || '',
      author: 'Komercia',
    },
    manifest: {
      name: process.env.npm_package_name || '',
      short_name: process.env.npm_package_name || '',
      lang: 'es',
    },
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
    // extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },

  router: {
    base: '/',
  },
}
