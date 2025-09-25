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
      if (listener && listener.el && listener.el.dataset) {
        listener.el.dataset.src = replaceCloudinaryDomain(listener.el.dataset.src)
        listener.el.dataset.error = replaceCloudinaryDomain(listener.el.dataset.error)
        listener.el.dataset.loading = replaceCloudinaryDomain(listener.el.dataset.loading)
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
      if (el) {
        if (el.dataset && el.dataset.src) {
          el.dataset.src = replaceCloudinaryDomain(el.dataset.src)
        }
        const src = el.getAttribute('src')
        if (src) {
          el.setAttribute('src', replaceCloudinaryDomain(src))
        }
      }
    },
    loaded({ el }) {
      if (el && el.getAttribute) {
        const src = el.getAttribute('src')
        if (src) {
          el.setAttribute('src', replaceCloudinaryDomain(src))
        }
      }
    },
    error({ el }) {
      if (el && el.getAttribute) {
        const src = el.getAttribute('src')
        if (src) {
          el.setAttribute('src', replaceCloudinaryDomain(src))
        }
      }
    },
  },
})
