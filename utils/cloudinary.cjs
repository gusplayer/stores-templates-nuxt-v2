const CLOUDINARY_HOST = 'res.cloudinary.com'
const CDN_HOST = 'img.komercia.store'
const CDN_BASE_URL = `https://${CDN_HOST}`
const ALLOWED_HOSTS = [CLOUDINARY_HOST, CDN_HOST]
const UPLOAD_SEGMENT = '/upload/'

function extractCloudinaryInfo(url) {
  if (!url || typeof url !== 'string') return null
  if (!url.includes(CLOUDINARY_HOST) && !url.includes(CDN_HOST)) return null
  const normalizedUrl = url.trim()
  if (!normalizedUrl) return null
  const segments = normalizedUrl.split('/')
  if (segments.length < 5) return null
  const host = segments[2]
  if (!ALLOWED_HOSTS.includes(host)) return null
  const uploadParts = normalizedUrl.split(UPLOAD_SEGMENT)
  if (uploadParts.length < 2) return null
  return {
    account: segments[3],
    resourcePath: uploadParts[1],
  }
}

function replaceCloudinaryDomain(url) {
  if (!url || typeof url !== 'string') return url
  if (!url.includes(CLOUDINARY_HOST)) {
    return url.includes(CDN_HOST)
      ? url.replace(/(https?:)?\/\/img\.komercia\.store/gi, CDN_BASE_URL)
      : url
  }
  return url.replace(/(https?:)?\/\/res\.cloudinary\.com/gi, CDN_BASE_URL)
}

function buildCloudinaryUrl(url, transformation = '') {
  const info = extractCloudinaryInfo(url)
  if (!info) return replaceCloudinaryDomain(url)
  const cleanTransformation = transformation
    ? transformation.replace(/^\/+/, '').replace(/\/+$/, '')
    : ''
  const transformationPath = cleanTransformation ? `/${cleanTransformation}` : ''
  return `${CDN_BASE_URL}/${info.account}/image/upload${transformationPath}/${info.resourcePath}`
}

module.exports = {
  replaceCloudinaryDomain,
  buildCloudinaryUrl,
}
