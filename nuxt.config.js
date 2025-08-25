import path from 'path'

export default {
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
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
  loading: { color: 'grey', height: '3px' },
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/css/tailwind.css'],
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
  modules: [
    '@nuxtjs/gtm',
    '@nuxtjs/sitemap', // activamos el módulo sitemap
    'nuxt-facebook-pixel-module',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
  ],
  sitemap: {
    path: '/sitemap.xml',
    gzip: true,
    hostname: process.env.HOST || 'https://www.buonavita.com.co',
    defaults: {
      priority: 1,
      lastmod: new Date(),
    },
    routes: async () => {
      const host = process.env.VERCEL_URL || 'www.buonavita.com.co'
      const hostname = host.startsWith('http') ? host : `https://${host}/`

      const hostRoutes = {
        'buonavita.com.co': [
          { url: '/', changefreq: 'daily', priority: 1.0 },
          { url: '/productos', changefreq: 'weekly', priority: 0.8 },
          {
            url: '/productos?category=Rebajas',
            changefreq: 'weekly',
            priority: 0.8,
          },
          {
            url: '/productos?category=Bolsos',
            changefreq: 'weekly',
            priority: 0.8,
          },
          {
            url: '/productos?category=Sandalias',
            changefreq: 'weekly',
            priority: 0.8,
          },
          {
            url: '/productos?page=1&category=Zapatos&subcategory=19656',
            changefreq: 'weekly',
            priority: 0.8,
          },
          {
            url: '/productos?page=1&category=Sandalias&subcategory=18814',
            changefreq: 'weekly',
            priority: 0.8,
          },
          {
            url: '/productos?page=1&category=Tenis',
            changefreq: 'weekly',
            priority: 0.8,
          },
          { url: '/contacto', changefreq: 'monthly', priority: 0.5 },
          { url: '/micompra', changefreq: 'weekly', priority: 0.8 },
          { url: '/blog', changefreq: 'weekly', priority: 0.8 },
        ],
      }

      let urls = hostRoutes[host] || [
        { url: '/', changefreq: 'daily', priority: 1.0 },
      ]

      // codifica query strings
      urls = urls.map((r) => {
        const [path, query] = r.url.split('?')
        return query ? { ...r, url: `${path}?${encodeURIComponent(query)}` } : r
      })

      console.log(`Sitemap host: ${host}`, urls)
      return urls
    },
  },

  components: true,
  facebook: { pixelId: '671820736795254', autoPageView: true },
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
  router: { base: '/' },
}
