import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import loading from '../assets/img/imagen-cargando.gif'
import error from '../assets/img/lazyloadError.jpg'
import { replaceCloudinaryDomain } from '@/utils/cloudinary'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 2,
  error: error,
  loading: loading,
  filter: {
    progressive(listener) {
      if (listener && listener.src) {
        listener.src = replaceCloudinaryDomain(listener.src)
      }
    },
    webp(listener) {
      if (listener && listener.src) {
        listener.src = replaceCloudinaryDomain(listener.src)
      }
    },
    error(listener) {
      if (listener && listener.src) {
        listener.src = replaceCloudinaryDomain(listener.src)
      }
    },
  },
  adapter: {
    loading({ el }) {
      if (el && el.getAttribute) {
        const src = el.getAttribute('data-src') || el.getAttribute('src')
        if (src) {
          el.setAttribute('data-src', replaceCloudinaryDomain(src))
        }
      }
    },
  },
})
