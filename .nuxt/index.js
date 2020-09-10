import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_596d4d33 from 'nuxt_plugin_workbox_596d4d33' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_vuesweetalert2_1afaf2ae from 'nuxt_plugin_vuesweetalert2_1afaf2ae' // Source: ./vue-sweetalert2.js (mode: 'client')
import nuxt_plugin_gtm_11f97b26 from 'nuxt_plugin_gtm_11f97b26' // Source: ./gtm.js (mode: 'all')
import nuxt_plugin_axios_b75c1c52 from 'nuxt_plugin_axios_b75c1c52' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_corecomponentsnpm_428ce86c from 'nuxt_plugin_corecomponentsnpm_428ce86c' // Source: ../plugins/core-components-npm (mode: 'all')
import nuxt_plugin_element_f89b5a74 from 'nuxt_plugin_element_f89b5a74' // Source: ../plugins/element (mode: 'all')
import nuxt_plugin_mixinCommonMethods_b0161b88 from 'nuxt_plugin_mixinCommonMethods_b0161b88' // Source: ../plugins/mixinCommonMethods (mode: 'all')
import nuxt_plugin_cloudinary_781c9a04 from 'nuxt_plugin_cloudinary_781c9a04' // Source: ../plugins/cloudinary (mode: 'all')
import nuxt_plugin_materialicons_5694302c from 'nuxt_plugin_materialicons_5694302c' // Source: ../plugins/material-icons (mode: 'all')
import nuxt_plugin_validate_4442dcea from 'nuxt_plugin_validate_4442dcea' // Source: ../plugins/validate.js (mode: 'all')
import nuxt_plugin_fuse_6e95fa80 from 'nuxt_plugin_fuse_6e95fa80' // Source: ../plugins/fuse.js (mode: 'client')
import nuxt_plugin_swiper_68e7f06e from 'nuxt_plugin_swiper_68e7f06e' // Source: ../plugins/swiper.js (mode: 'client')
import nuxt_plugin_vuecarrusel_74d92192 from 'nuxt_plugin_vuecarrusel_74d92192' // Source: ../plugins/vue-carrusel.js (mode: 'client')
import nuxt_plugin_ga_fb0a2534 from 'nuxt_plugin_ga_fb0a2534' // Source: ../plugins/ga.js (mode: 'client')
import nuxt_plugin_gtm_5e4639ea from 'nuxt_plugin_gtm_5e4639ea' // Source: ../plugins/gtm (mode: 'client')
import nuxt_plugin_facebookpixel_58a6ac96 from 'nuxt_plugin_facebookpixel_58a6ac96' // Source: ../plugins/facebook-pixel (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"template-nuxt-dokku","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Templates komercia"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"template-nuxt-dokku"},{"hid":"author","name":"author","content":"Miguel Moreno"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"template-nuxt-dokku"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"template-nuxt-dokku"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Templates komercia"}],"link":[{"rel":"manifest","href":"\u002F_nuxt\u002Fclient\u002Fmanifest.cd7ab465.json"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_596d4d33 === 'function') {
    await nuxt_plugin_workbox_596d4d33(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuesweetalert2_1afaf2ae === 'function') {
    await nuxt_plugin_vuesweetalert2_1afaf2ae(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_11f97b26 === 'function') {
    await nuxt_plugin_gtm_11f97b26(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_b75c1c52 === 'function') {
    await nuxt_plugin_axios_b75c1c52(app.context, inject)
  }

  if (typeof nuxt_plugin_corecomponentsnpm_428ce86c === 'function') {
    await nuxt_plugin_corecomponentsnpm_428ce86c(app.context, inject)
  }

  if (typeof nuxt_plugin_element_f89b5a74 === 'function') {
    await nuxt_plugin_element_f89b5a74(app.context, inject)
  }

  if (typeof nuxt_plugin_mixinCommonMethods_b0161b88 === 'function') {
    await nuxt_plugin_mixinCommonMethods_b0161b88(app.context, inject)
  }

  if (typeof nuxt_plugin_cloudinary_781c9a04 === 'function') {
    await nuxt_plugin_cloudinary_781c9a04(app.context, inject)
  }

  if (typeof nuxt_plugin_materialicons_5694302c === 'function') {
    await nuxt_plugin_materialicons_5694302c(app.context, inject)
  }

  if (typeof nuxt_plugin_validate_4442dcea === 'function') {
    await nuxt_plugin_validate_4442dcea(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_fuse_6e95fa80 === 'function') {
    await nuxt_plugin_fuse_6e95fa80(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_swiper_68e7f06e === 'function') {
    await nuxt_plugin_swiper_68e7f06e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuecarrusel_74d92192 === 'function') {
    await nuxt_plugin_vuecarrusel_74d92192(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ga_fb0a2534 === 'function') {
    await nuxt_plugin_ga_fb0a2534(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_gtm_5e4639ea === 'function') {
    await nuxt_plugin_gtm_5e4639ea(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_facebookpixel_58a6ac96 === 'function') {
    await nuxt_plugin_facebookpixel_58a6ac96(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
