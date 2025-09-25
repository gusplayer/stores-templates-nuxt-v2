// server-middleware/redirect-ids.js
// CommonJS (Nuxt 2 + Vercel)

module.exports = function (req, res, next) {
  // Resuelve host real detrás de Vercel/Proxy
  const host = req.headers['x-forwarded-host'] || req.headers.host || ''
  const url = req.url || '/'
  const [pathname, query = ''] = url.split('?')

  // Aplica solo en el dominio deseado (wapi.me)
  if (
    !(
      host === 'wapi.me' ||
      host.endsWith('.localhost:3000') ||
      host.endsWith('.wapi.me')
    )
  )
    return next()

  // Reglas: ID -> destino absoluto
  const rules = {
    8489: 'https://komercia.co',
    18265: 'https://fitnesssuplementos.komercia.store/',
    15997: 'https://orginalworld.komercia.store/',
  }

  // Extrae /wa/:id (solo dígitos)
  const match = pathname.match(/^\/wa\/(\d+)\/?$/)
  if (!match) return next()

  const id = match[1]
  const dest = rules[id]
  if (!dest) return next()

  // Preserva querystring si venía (opcional)
  const location = query
    ? `${dest}${dest.includes('?') ? '&' : '?'}${query}`
    : dest

  res.writeHead(301, { Location: location })
  return res.end()
}
