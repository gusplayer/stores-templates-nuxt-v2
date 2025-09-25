// A simple path join utility for use in the build process
import path from 'path'

export default {
  // Server configuration
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },

  // SEO and Head tags for the application
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: { lang: 'es' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'google', content: 'notranslate' },
    ],
  },

  // Loading indicator configuration
  loading: { color: 'grey', height: '3px' },

  // Global CSS files
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/css/tailwind.css'],

  // Nuxt plugins to be included in the build
  plugins: [
    '~/plugins/jsonld',
    '~/plugins/element',
    '~/plugins/material-icons',
    '~plugins/validate.js',
    { src: '~/plugins/i18n' },
    { src: '~/plugins/chatFacebook.js', ssr: false },
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~/plugins/gtm', ssr: false },
    { src: '~/plugins/vueLazyLoad.js', ssr: false },
    { src: '~/plugins/elementTipTap', ssr: false },
    { src: '~/plugins/chatwoot.js', ssr: false },
  ],

  // Nuxt modules to be included in the build
  modules: [
    '@nuxtjs/gtm',
    'nuxt-facebook-pixel-module',
    '@nuxtjs/sitemap', // Activate the sitemap module
  ],

  // Sitemap module configuration
  sitemap: {
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
      '/template14',
      '/template15',
      '/template16',
      '/template5',
      '/template6',
      '/template7',
      '/template8',
      '/template9',
      '/template99',
      '/unicentro',
    ],
  },

  // Component auto-discovery
  components: true,

  // Facebook Pixel module configuration
  facebook: { pixelId: '671820736795254', autoPageView: true },

  // Build configuration
  build: {
    postcss: {
      postcssOptions: { plugins: { tailwindcss: {}, autoprefixer: {} } },
    },
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    transpile: ['vee-validate/dist/rules'],
    optimizeCSS: true,
    parallel: true,
    splitChunks: {
      pages: true,
      vendor: true,
      commons: true,
      runtime: true,
      layouts: true,
    },
    optimization: { splitChunks: { name: false } },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) config.devtool = 'source-map'
    },
  },

  // Router configuration
  router: { base: '/' },
}
