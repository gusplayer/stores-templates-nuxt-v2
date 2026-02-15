import axios from 'axios'

// Timeout por defecto para todas las llamadas API (8 segundos)
const DEFAULT_TIMEOUT = 8000

// Número máximo de reintentos para errores de red
const MAX_RETRIES = 2

// Delay entre reintentos (ms)
const RETRY_DELAY = 500

// Errores que merecen reintento
const RETRYABLE_ERRORS = [
  'ECONNRESET',
  'ETIMEDOUT',
  'ECONNABORTED',
  'ENOTFOUND',
  'ENETUNREACH',
  'EAI_AGAIN',
]

/**
 * Verifica si un error es recuperable y merece reintento
 */
function isRetryableError(error) {
  if (!error) return false

  // Error de timeout de axios
  if (error.code === 'ECONNABORTED') return true

  // Errores de red
  if (error.code && RETRYABLE_ERRORS.includes(error.code)) return true

  // Error de respuesta 5xx del servidor (excepto 500 que puede ser intencional)
  if (error.response && error.response.status >= 502 && error.response.status <= 504) {
    return true
  }

  return false
}

/**
 * Espera un tiempo determinado
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Realiza una petición HTTP con timeout y reintentos automáticos
 * @param {Object} config - Configuración de axios
 * @param {Object} options - Opciones adicionales
 * @param {number} options.timeout - Timeout en ms (default: 8000)
 * @param {number} options.retries - Número de reintentos (default: 2)
 * @returns {Promise} - Respuesta de axios
 */
export async function axiosWithRetry(config, options = {}) {
  const timeout = options.timeout || DEFAULT_TIMEOUT
  const maxRetries = options.retries !== undefined ? options.retries : MAX_RETRIES

  let lastError = null

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await axios({
        ...config,
        timeout,
      })
      return response
    } catch (error) {
      lastError = error

      // Si no es un error recuperable, no reintentar
      if (!isRetryableError(error)) {
        throw error
      }

      // Si ya agotamos los reintentos, lanzar error
      if (attempt >= maxRetries) {
        throw error
      }

      // Esperar antes de reintentar (con backoff exponencial simple)
      const delay = RETRY_DELAY * (attempt + 1)
      await sleep(delay)
    }
  }

  throw lastError
}

/**
 * Crea una instancia de axios preconfigurada con timeout
 */
export function createAxiosInstance(baseConfig = {}) {
  const instance = axios.create({
    timeout: DEFAULT_TIMEOUT,
    ...baseConfig,
  })

  return instance
}

export default axiosWithRetry
