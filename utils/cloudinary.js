const CLOUDINARY_HOST = 'res.cloudinary.com'
const CDN_HOST = 'img.komercia.store'
const CDN_BASE_URL = `https://${CDN_HOST}`
const ALLOWED_HOSTS = [CLOUDINARY_HOST, CDN_HOST]
const UPLOAD_SEGMENT = '/upload/'

function extractCloudinaryInfo(url) {
  if (!url || typeof url !== 'string') return null
  const normalizedUrl = url.trim()
  if (!normalizedUrl) return null

  const hasAllowedHost = ALLOWED_HOSTS.some((host) =>
    normalizedUrl.includes(host),
  )
  if (!hasAllowedHost) return null

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

export function replaceCloudinaryDomain(url) {
  if (!url || typeof url !== 'string') return url
  if (!url.includes(CLOUDINARY_HOST)) return url
  return url.replace(/(https?:)?\/\/res\.cloudinary\.com/gi, CDN_BASE_URL)
}

export function buildCloudinaryUrl(url, transformation = '') {
  const info = extractCloudinaryInfo(url)
  if (!info) return url

  const cleanTransformation = transformation
    ? transformation.replace(/^\/+/, '').replace(/\/+$/, '')
    : ''
  const transformationPath = cleanTransformation ? `/${cleanTransformation}` : ''

  return `${CDN_BASE_URL}/${info.account}/image/upload${transformationPath}/${info.resourcePath}`
}

export function buildCloudinaryWebp(url, transformation = '', extension = 'webp') {
  const info = extractCloudinaryInfo(url)
  if (!info) return url

  const [publicId] = info.resourcePath.split('.')
  if (!publicId) return url

  const cleanTransformation = transformation
    ? transformation.replace(/^\/+/, '').replace(/\/+$/, '')
    : ''
  const transformationPath = cleanTransformation ? `/${cleanTransformation}` : ''

  return `${CDN_BASE_URL}/${info.account}/image/upload${transformationPath}/${publicId}.${extension}`
}

export function normalizeCloudinaryPayload(payload) {
  if (payload == null) return payload

  if (typeof payload === 'string') {
    return replaceCloudinaryDomain(payload)
  }

  if (Array.isArray(payload)) {
    return payload.map((item) => normalizeCloudinaryPayload(item))
  }

  const isPlainObject = Object.prototype.toString.call(payload) === '[object Object]'
  if (isPlainObject) {
    return Object.keys(payload).reduce((acc, key) => {
      acc[key] = normalizeCloudinaryPayload(payload[key])
      return acc
    }, {})
  }

  return payload
}

export const CLOUDINARY_CDN_BASE_URL = CDN_BASE_URL
export const CLOUDINARY_ORIGIN_HOST = CLOUDINARY_HOST
