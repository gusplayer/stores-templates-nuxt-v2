const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')

module.exports = async function (req, res, next) {
  // Solo intercepta /sitemap.xml
  if (req.url !== '/sitemap.xml') return next()

  const host = req.headers.host || ''
  console.log(`Generando sitemap para el host: ${host}`)
  console.log(`URL solicitada: ${req.url}`)
  // Asegúrate de que el host sea válido

  const hostname = `https://${host}`

  let urls = []

  if (host.includes('buonavita.com.co')) {
    urls = [
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
        priority: 0.8,
      },
      {
        url: '/productos?page=1&category=Sandalias&subcategory=18814',
        priority: 0.8,
      },
      { url: '/productos?page=1&category=Tenis', priority: 0.8 },
      { url: '/contacto', changefreq: 'monthly', priority: 0.5 },
      { url: '/micompra', priority: 0.8 },
      { url: '/blog', priority: 0.8 },
    ]
  }

  try {
    const stream = new SitemapStream({ hostname })
    const xml = await streamToPromise(Readable.from(urls).pipe(stream)).then(
      (d) => d.toString()
    )

    res.setHeader('Content-Type', 'application/xml; charset=UTF-8')
    res.end(xml)
  } catch (err) {
    console.error('Error generando sitemap:', err)
    res.statusCode = 500
    res.end('Error generando sitemap')
  }
}
