import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1393236f = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _5dd2ce31 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _466cdeb3 = () => interopDefault(import('..\\pages\\catalogoPixel\\index.vue' /* webpackChunkName: "pages/catalogoPixel/index" */))
const _3960912e = () => interopDefault(import('..\\pages\\constructor\\index.vue' /* webpackChunkName: "pages/constructor/index" */))
const _d502c140 = () => interopDefault(import('..\\pages\\contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _eab600aa = () => interopDefault(import('..\\pages\\micompra.vue' /* webpackChunkName: "pages/micompra" */))
const _40f254f0 = () => interopDefault(import('..\\pages\\productos\\index.vue' /* webpackChunkName: "pages/productos/index" */))
const _1c4a2d58 = () => interopDefault(import('..\\pages\\template10\\index.vue' /* webpackChunkName: "pages/template10/index" */))
const _46ad27f0 = () => interopDefault(import('..\\pages\\template5\\index.vue' /* webpackChunkName: "pages/template5/index" */))
const _3749dd32 = () => interopDefault(import('..\\pages\\template6\\index.vue' /* webpackChunkName: "pages/template6/index" */))
const _27e69274 = () => interopDefault(import('..\\pages\\template7\\index.vue' /* webpackChunkName: "pages/template7/index" */))
const _188347b6 = () => interopDefault(import('..\\pages\\template8\\index.vue' /* webpackChunkName: "pages/template8/index" */))
const _091ffcf8 = () => interopDefault(import('..\\pages\\template9\\index.vue' /* webpackChunkName: "pages/template9/index" */))
const _146f03ee = () => interopDefault(import('..\\pages\\unicentro\\index.vue' /* webpackChunkName: "pages/unicentro/index" */))
const _3702577a = () => interopDefault(import('..\\pages\\template6\\index_macrobrand.vue' /* webpackChunkName: "pages/template6/index_macrobrand" */))
const _11dc8227 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _3f3bb3a8 = () => interopDefault(import('..\\pages\\productos\\_slug.vue' /* webpackChunkName: "pages/productos/_slug" */))
const _38e9a7e3 = () => interopDefault(import('..\\pages\\wa\\_slug\\index.vue' /* webpackChunkName: "pages/wa/_slug/index" */))
const _45e56232 = () => interopDefault(import('..\\pages\\wp\\_slug\\index.vue' /* webpackChunkName: "pages/wp/_slug/index" */))
const _9d100ab8 = () => interopDefault(import('..\\pages\\wa\\_slug\\producto\\_slugProduct.vue' /* webpackChunkName: "pages/wa/_slug/producto/_slugProduct" */))
const _fda76f96 = () => interopDefault(import('..\\pages\\wp\\_slug\\producto\\_slugProduct.vue' /* webpackChunkName: "pages/wp/_slug/producto/_slugProduct" */))
const _22530111 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _1393236f,
    name: "blog"
  }, {
    path: "/cart",
    component: _5dd2ce31,
    name: "cart"
  }, {
    path: "/catalogoPixel",
    component: _466cdeb3,
    name: "catalogoPixel"
  }, {
    path: "/constructor",
    component: _3960912e,
    name: "constructor"
  }, {
    path: "/contacto",
    component: _d502c140,
    name: "contacto"
  }, {
    path: "/micompra",
    component: _eab600aa,
    name: "micompra"
  }, {
    path: "/productos",
    component: _40f254f0,
    name: "productos"
  }, {
    path: "/template10",
    component: _1c4a2d58,
    name: "template10"
  }, {
    path: "/template5",
    component: _46ad27f0,
    name: "template5"
  }, {
    path: "/template6",
    component: _3749dd32,
    name: "template6"
  }, {
    path: "/template7",
    component: _27e69274,
    name: "template7"
  }, {
    path: "/template8",
    component: _188347b6,
    name: "template8"
  }, {
    path: "/template9",
    component: _091ffcf8,
    name: "template9"
  }, {
    path: "/unicentro",
    component: _146f03ee,
    name: "unicentro"
  }, {
    path: "/template6/index_macrobrand",
    component: _3702577a,
    name: "template6-index_macrobrand"
  }, {
    path: "/blog/:slug",
    component: _11dc8227,
    name: "blog-slug"
  }, {
    path: "/productos/:slug",
    component: _3f3bb3a8,
    name: "productos-slug"
  }, {
    path: "/wa/:slug",
    component: _38e9a7e3,
    name: "wa-slug"
  }, {
    path: "/wp/:slug",
    component: _45e56232,
    name: "wp-slug"
  }, {
    path: "/wa/:slug?/producto/:slugProduct?",
    component: _9d100ab8,
    name: "wa-slug-producto-slugProduct"
  }, {
    path: "/wp/:slug?/producto/:slugProduct?",
    component: _fda76f96,
    name: "wp-slug-producto-slugProduct"
  }, {
    path: "/",
    component: _22530111,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
