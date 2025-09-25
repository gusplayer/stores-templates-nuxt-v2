// server-middleware/redirect-ids.js
// CommonJS (Nuxt 2 + Vercel)

module.exports = function (req, res, next) {
  const host = req.headers['x-forwarded-host'] || req.headers.host || ''
  const url = req.url || '/'
  const [pathname, query = ''] = url.split('?')

  if (
    !(
      host === 'wapi.me' ||
      host.endsWith('.localhost:3000') ||
      host.endsWith('.wapi.me')
    )
  )
    return next()


  const rules = {
    8489: 'https://www.mariapazprincess.com/',
    18265: 'https://fitnesssuplementos.komercia.store/',
    15997: 'https://orginalworld.komercia.store/',
  }


  const match = pathname.match(/^\/wa\/(\d+)\/?$/)
  if (!match) return next()

  const id = match[1]
  const dest = rules[id]
  if (!dest) return next()


  const location = query
    ? `${dest}${dest.includes('?') ? '&' : '?'}${query}`
    : dest

  res.writeHead(301, { Location: location })
  return res.end()
}
