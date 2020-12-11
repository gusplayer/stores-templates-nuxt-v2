import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b9ece36 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1feef17b = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _4a05a406 = () => interopDefault(import('..\\pages\\catalogoPixel\\index.vue' /* webpackChunkName: "pages/catalogoPixel/index" */))
const _85415d9a = () => interopDefault(import('..\\pages\\constructor\\index.vue' /* webpackChunkName: "pages/constructor/index" */))
const _4a37e4ac = () => interopDefault(import('..\\pages\\contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _3979c929 = () => interopDefault(import('..\\pages\\ig\\index.vue' /* webpackChunkName: "pages/ig/index" */))
const _5feb2416 = () => interopDefault(import('..\\pages\\micompra.vue' /* webpackChunkName: "pages/micompra" */))
const _3088f052 = () => interopDefault(import('..\\pages\\template5\\index.vue' /* webpackChunkName: "pages/template5/index" */))
const _383a95b1 = () => interopDefault(import('..\\pages\\template6\\index.vue' /* webpackChunkName: "pages/template6/index" */))
const _3fec3b10 = () => interopDefault(import('..\\pages\\template7\\index.vue' /* webpackChunkName: "pages/template7/index" */))
const _684e8838 = () => interopDefault(import('..\\pages\\unicentro\\index.vue' /* webpackChunkName: "pages/unicentro/index" */))
const _80e47f70 = () => interopDefault(import('..\\pages\\ig\\contacto.vue' /* webpackChunkName: "pages/ig/contacto" */))
const _dc42c48e = () => interopDefault(import('..\\pages\\template6\\index_macrobrand.vue' /* webpackChunkName: "pages/template6/index_macrobrand" */))
const _53a126e0 = () => interopDefault(import('..\\pages\\ig\\productos\\_slug.vue' /* webpackChunkName: "pages/ig/productos/_slug" */))
const _6f0c10c6 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _d9c9901c = () => interopDefault(import('..\\pages\\productos\\_slug.vue' /* webpackChunkName: "pages/productos/_slug" */))
const _e66da7a6 = () => interopDefault(import('..\\pages\\wa\\_slug\\index.vue' /* webpackChunkName: "pages/wa/_slug/index" */))
const _cc763308 = () => interopDefault(import('..\\pages\\wp\\_slug\\index.vue' /* webpackChunkName: "pages/wp/_slug/index" */))
const _7b8758cc = () => interopDefault(import('..\\pages\\wa\\_slug\\producto\\_slugProduct.vue' /* webpackChunkName: "pages/wa/_slug/producto/_slugProduct" */))
const _dc1ebdaa = () => interopDefault(import('..\\pages\\wp\\_slug\\producto\\_slugProduct.vue' /* webpackChunkName: "pages/wp/_slug/producto/_slugProduct" */))
const _b88971f2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _6b9ece36,
    name: "blog"
  }, {
    path: "/cart",
    component: _1feef17b,
    name: "cart"
  }, {
    path: "/catalogoPixel",
    component: _4a05a406,
    name: "catalogoPixel"
  }, {
    path: "/constructor",
    component: _85415d9a,
    name: "constructor"
  }, {
    path: "/contacto",
    component: _4a37e4ac,
    name: "contacto"
  }, {
    path: "/ig",
    component: _3979c929,
    name: "ig"
  }, {
    path: "/micompra",
    component: _5feb2416,
    name: "micompra"
  }, {
    path: "/template5",
    component: _3088f052,
    name: "template5"
  }, {
    path: "/template6",
    component: _383a95b1,
    name: "template6"
  }, {
    path: "/template7",
    component: _3fec3b10,
    name: "template7"
  }, {
    path: "/unicentro",
    component: _684e8838,
    name: "unicentro"
  }, {
    path: "/ig/contacto",
    component: _80e47f70,
    name: "ig-contacto"
  }, {
    path: "/template6/index_macrobrand",
    component: _dc42c48e,
    name: "template6-index_macrobrand"
  }, {
    path: "/ig/productos/:slug?",
    component: _53a126e0,
    name: "ig-productos-slug"
  }, {
    path: "/blog/:slug",
    component: _6f0c10c6,
    name: "blog-slug"
  }, {
    path: "/productos/:slug?",
    component: _d9c9901c,
    name: "productos-slug"
  }, {
    path: "/wa/:slug?",
    component: _e66da7a6,
    name: "wa-slug"
  }, {
    path: "/wp/:slug?",
    component: _cc763308,
    name: "wp-slug"
  }, {
    path: "/wa/:slug?/producto/:slugProduct?",
    component: _7b8758cc,
    name: "wa-slug-producto-slugProduct"
  }, {
    path: "/wp/:slug?/producto/:slugProduct?",
    component: _dc1ebdaa,
    name: "wp-slug-producto-slugProduct"
  }, {
    path: "/",
    component: _b88971f2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
