const CLOUDINARY_HOST = 'res.cloudinary.com'
const CDN_HOST = 'img.komercia.store'
const CDN_BASE_URL = `https://${CDN_HOST}`
const CLOUDINARY_HOST_SUFFIX = '.res.cloudinary.com'
const CLOUDINARY_URL_PATTERN =
  /((https?:)?\/\/[^\s"'()]+cloudinary\.com[^\s"'()]*)/gi

function cleanSegmentPath(path) {
  if (!path) return ''
  return path
    .split('/')
    .map((segment) => segment.trim())
    .filter(Boolean)
    .join('/')
}

function extractCloudinaryInfo(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return null

  let parsedUrl
  try {
    parsedUrl = new URL(rawUrl.trim())
  } catch (error) {
    return null
  }

  const host = parsedUrl.hostname.toLowerCase()
  const pathSegments = parsedUrl.pathname.split('/').filter(Boolean)
  if (!pathSegments.length) return null

  let account = ''
  let cursor = 0
  const isCdnHost = host === CDN_HOST
  const isCanonicalCloudinary = host === CLOUDINARY_HOST
  const isSubdomainCloudinary =
    !isCanonicalCloudinary && host.endsWith(CLOUDINARY_HOST_SUFFIX)

  if (isCdnHost || isCanonicalCloudinary) {
    account = pathSegments[cursor] || ''
    cursor += 1
  } else if (isSubdomainCloudinary) {
    account = host.slice(0, -CLOUDINARY_HOST_SUFFIX.length)
  } else {
    return null
  }

  const resourceType = pathSegments[cursor] || ''
  const deliveryType = pathSegments[cursor + 1] || ''
  if (!account || !resourceType || !deliveryType) return null

  cursor += isSubdomainCloudinary ? 2 : 2
  const remainingSegments = pathSegments.slice(cursor)
  if (!remainingSegments.length) return null

  const versionIndex = remainingSegments.findIndex((segment) =>
    /^v\d+$/i.test(segment),
  )
  const transformationSegments =
    versionIndex > -1 ? remainingSegments.slice(0, versionIndex) : []
  const versionSegment =
    versionIndex > -1 ? remainingSegments[versionIndex] : null
  const assetSegments =
    versionIndex > -1
      ? remainingSegments.slice(versionIndex + 1)
      : remainingSegments

  if (!assetSegments.length) return null

  return {
    account,
    resourceType,
    deliveryType,
    transformation: cleanSegmentPath(transformationSegments.join('/')),
    version: versionSegment,
    assetPath: assetSegments.join('/'),
    search: parsedUrl.search || '',
    hash: parsedUrl.hash || '',
    originalHost: host,
  }
}

function buildCdnUrl(info, transformationOverride = '', assetPathOverride) {
  if (!info) return null

  const transformation = cleanSegmentPath(
    transformationOverride || info.transformation,
  )
  const assetPath = assetPathOverride || info.assetPath
  if (!assetPath) return null

  const segments = [
    CDN_BASE_URL,
    info.account,
    info.resourceType,
    info.deliveryType,
  ]

  if (transformation) {
    segments.push(transformation)
  }

  if (info.version) {
    segments.push(info.version)
  }

  segments.push(assetPath)

  let url = segments.join('/')
  if (info.search) url += info.search
  if (info.hash) url += info.hash

  return url
}

export function replaceCloudinaryDomain(value) {
  if (!value || typeof value !== 'string') return value

  return value.replace(CLOUDINARY_URL_PATTERN, (match) => {
    const info = extractCloudinaryInfo(match)
    const cdnUrl = buildCdnUrl(info)
    return cdnUrl || match
  })
}

export function buildCloudinaryUrl(url, transformation = '') {
  const info = extractCloudinaryInfo(url)
  if (!info) return url

  const cdnUrl = buildCdnUrl(info, transformation)
  return cdnUrl || url
}

export function buildCloudinaryWebp(url, transformation = '', extension = 'webp') {
  const info = extractCloudinaryInfo(url)
  if (!info) return url

  const nextExtension = (extension || '').replace(/^\./, '') || 'webp'
  const assetSegments = info.assetPath.split('/')
  const fileName = assetSegments.pop()
  if (!fileName) return url

  const dotIndex = fileName.lastIndexOf('.')
  const baseName = dotIndex > -1 ? fileName.slice(0, dotIndex) : fileName
  assetSegments.push(`${baseName}.${nextExtension}`)

  const newAssetPath = assetSegments.join('/')
  const cdnUrl = buildCdnUrl(info, transformation, newAssetPath)
  return cdnUrl || url
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
