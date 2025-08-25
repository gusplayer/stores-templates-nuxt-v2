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
    hostname: process.env.HOST?.startsWith('http')
      ? process.env.HOST
      : 'https://www.buonavita.com.co',
    defaults: {
      priority: 1,
      lastmod: new Date().toISOString(),
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
    routes: [
      '/',
      '/blog',
      '/contacto',
      '/micompra',
      '/productos',

      // Productos estáticos
      '/productos/bolso-1570-plata-281955',
      '/productos/bolso-2409-blanco-capuchino-288386',
      '/productos/bolso-2413-oro-288344',
      '/productos/bolso-4164-luna-287757',
      '/productos/bolso-blondi-lila-x-plata-176074',
      '/productos/sandalia-2353-almendra-x-luna-tejida-283727',
      '/productos/sandalia-7286-arizona-trigo-x-miel-181693',
      '/productos/sandalia-tacon-738-verde-185195',
      '/productos/tenis-buona-vita-blanco-x-piton-italiano-282127',
      '/productos/tenis-chirimia-negro-282222',
      '/productos/tenis-dulzaina-rosa-287279',
      '/productos/tenis-tambor-leopardo-288247',
      '/productos/zapato-7390-caramelo-x-mono-charol-negro-199086',
      '/productos/zapato-pds-33-negro-x-capuccino-199092',
      '/productos/zapato-pds-33-pardo-285551',
      '/productos/zapato-pds-40-plata-283735',
      '/productos/zapato-tacon-2530-verde-189536',
      '/productos/zueco-2822-negro-186757',
      '/productos/zueco-aleli-oro-193072',

      // Otras páginas
      '/termsandconditions',
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
