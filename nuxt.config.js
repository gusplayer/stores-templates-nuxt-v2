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
    '@nuxtjs/sitemap', // Activate the sitemap module
    'nuxt-facebook-pixel-module',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
  ],

  // Sitemap module configuration
  sitemap: {
    path: '/sitemap.xml',
    gzip: true,
    hostname: process.env.HOST || 'https://www.buonavita.com.co',
    defaults: {
      priority: 1,
      lastmod: new Date(),
    },
    routes: async () => {
      // Define the routes for the sitemap.
      const urls = [
        '/',
        '/productos',
        '/productos?category=Rebajas',
        '/productos?category=Bolsos',
        '/productos?category=Sandalias',
        '/productos?page=1&category=Zapatos&subcategory=19656',
        '/productos?page=1&category=Sandalias&subcategory=18814',
        '/productos?page=1&category=Tenis',
        '/contacto',
        '/micompra',
        '/blog',
      ]

      // Log the generated URLs for debugging purposes
      console.log('Sitemap URLs:', urls)

      return urls
    },
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
