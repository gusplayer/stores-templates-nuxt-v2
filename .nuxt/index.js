import Vue from 'vue'
import Vuex from 'vuex'
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

import nuxt_plugin_gtm_98d8009c from 'nuxt_plugin_gtm_98d8009c' // Source: ./gtm.js (mode: 'all')
import nuxt_plugin_workbox_8db84010 from 'nuxt_plugin_workbox_8db84010' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_330ca1ea from 'nuxt_plugin_metaplugin_330ca1ea' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_corecomponentsnpm_428ce86c from 'nuxt_plugin_corecomponentsnpm_428ce86c' // Source: ../plugins/core-components-npm (mode: 'all')
import nuxt_plugin_element_f89b5a74 from 'nuxt_plugin_element_f89b5a74' // Source: ../plugins/element (mode: 'all')
import nuxt_plugin_mixinCommonMethods_b0161b88 from 'nuxt_plugin_mixinCommonMethods_b0161b88' // Source: ../plugins/mixinCommonMethods (mode: 'all')
import nuxt_plugin_materialicons_5694302c from 'nuxt_plugin_materialicons_5694302c' // Source: ../plugins/material-icons (mode: 'all')
import nuxt_plugin_validate_4442dcea from 'nuxt_plugin_validate_4442dcea' // Source: ../plugins/validate.js (mode: 'all')
import nuxt_plugin_facebookpixel_58a6ac96 from 'nuxt_plugin_facebookpixel_58a6ac96' // Source: ../plugins/facebook-pixel (mode: 'all')
import nuxt_plugin_i18n_6a80ea94 from 'nuxt_plugin_i18n_6a80ea94' // Source: ../plugins/i18n (mode: 'all')
import nuxt_plugin_chatFacebook_4288b8c3 from 'nuxt_plugin_chatFacebook_4288b8c3' // Source: ../plugins/chatFacebook.js (mode: 'client')
import nuxt_plugin_fuse_6e95fa80 from 'nuxt_plugin_fuse_6e95fa80' // Source: ../plugins/fuse.js (mode: 'client')
import nuxt_plugin_swiper_68e7f06e from 'nuxt_plugin_swiper_68e7f06e' // Source: ../plugins/swiper.js (mode: 'client')
import nuxt_plugin_vuecarrusel_74d92192 from 'nuxt_plugin_vuecarrusel_74d92192' // Source: ../plugins/vue-carrusel.js (mode: 'client')
import nuxt_plugin_ga_fb0a2534 from 'nuxt_plugin_ga_fb0a2534' // Source: ../plugins/ga.js (mode: 'client')
import nuxt_plugin_gtm_5e4639ea from 'nuxt_plugin_gtm_5e4639ea' // Source: ../plugins/gtm (mode: 'client')
import nuxt_plugin_countryFlags_00220ce0 from 'nuxt_plugin_countryFlags_00220ce0' // Source: ../plugins/countryFlags.js (mode: 'client')
import nuxt_plugin_vuelazyload_d07c1d40 from 'nuxt_plugin_vuelazyload_d07c1d40' // Source: ../plugins/vue-lazyload.js (mode: 'client')
import nuxt_plugin_elementtiptap_3e05fbe2 from 'nuxt_plugin_elementtiptap_3e05fbe2' // Source: ../plugins/element-tiptap (mode: 'client')

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

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"template-nuxt-dokku","htmlAttrs":{"lang":"es"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Templates komercia"}],"link":[],"style":[],"script":[{"hid":"gtm-script","innerHTML":"if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https:\u002F\u002Fwww.googletagmanager.com\u002Fgtm.js?id='+i;f.parentNode.insertBefore(j,f);}})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"}],"noscript":[{"hid":"gtm-noscript","pbody":true,"innerHTML":""}],"__dangerouslyDisableSanitizersByTagID":{"gtm-script":["innerHTML"],"gtm-noscript":["innerHTML"]}},

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

  if (typeof nuxt_plugin_gtm_98d8009c === 'function') {
    await nuxt_plugin_gtm_98d8009c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_8db84010 === 'function') {
    await nuxt_plugin_workbox_8db84010(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_330ca1ea === 'function') {
    await nuxt_plugin_metaplugin_330ca1ea(app.context, inject)
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

  if (typeof nuxt_plugin_materialicons_5694302c === 'function') {
    await nuxt_plugin_materialicons_5694302c(app.context, inject)
  }

  if (typeof nuxt_plugin_validate_4442dcea === 'function') {
    await nuxt_plugin_validate_4442dcea(app.context, inject)
  }

  if (typeof nuxt_plugin_facebookpixel_58a6ac96 === 'function') {
    await nuxt_plugin_facebookpixel_58a6ac96(app.context, inject)
  }

  if (typeof nuxt_plugin_i18n_6a80ea94 === 'function') {
    await nuxt_plugin_i18n_6a80ea94(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_chatFacebook_4288b8c3 === 'function') {
    await nuxt_plugin_chatFacebook_4288b8c3(app.context, inject)
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

  if (process.client && typeof nuxt_plugin_countryFlags_00220ce0 === 'function') {
    await nuxt_plugin_countryFlags_00220ce0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuelazyload_d07c1d40 === 'function') {
    await nuxt_plugin_vuelazyload_d07c1d40(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_elementtiptap_3e05fbe2 === 'function') {
    await nuxt_plugin_elementtiptap_3e05fbe2(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
