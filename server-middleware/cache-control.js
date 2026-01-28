export default function (req, res, next) {
  if (req.method !== 'GET') return next()

  const url = req.url || ''
  if (url.startsWith('/api/')) {
    return next()
  }

  if (url.includes('sitemap')) {
    return next()
  }

  const isHomePage = url === '/' || url === ''
  const isProductPage = url.includes('/producto/') || url.includes('/product/')
  const isCategoryPage =
    url.includes('/categoria/') || url.includes('/category/')
  const isCartPage = url.includes('/cart') || url.includes('/carrito')

  if (isCartPage || url.includes('/checkout') || url.includes('/micompra')) {
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    return next()
  }

  let cacheControl = 'public, s-maxage=60, stale-while-revalidate=300'

  if (isProductPage) {
    cacheControl = 'public, s-maxage=120, stale-while-revalidate=600'
  } else if (isCategoryPage) {
    cacheControl = 'public, s-maxage=90, stale-while-revalidate=450'
  } else if (isHomePage) {
    cacheControl = 'public, s-maxage=120, stale-while-revalidate=600'
  }

  res.setHeader('Vary', 'Host')
  res.setHeader('Cache-Control', cacheControl)

  next()
}
