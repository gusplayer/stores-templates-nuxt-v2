import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _33dacb24 = () => interopDefault(import('..\\node_modules\\@nuxtjs\\tailwindcss\\lib\\ui\\pages\\index.vue' /* webpackChunkName: "" */))
const _a371ef60 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _00eb9720 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _2265e6f2 = () => interopDefault(import('..\\pages\\catalogoPixel\\index.vue' /* webpackChunkName: "pages/catalogoPixel/index" */))
const _421bc368 = () => interopDefault(import('..\\pages\\constructor\\index.vue' /* webpackChunkName: "pages/constructor/index" */))
const _248ace1f = () => interopDefault(import('..\\pages\\contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _24ab1754 = () => interopDefault(import('..\\pages\\ig\\index.vue' /* webpackChunkName: "pages/ig/index" */))
const _19b12e6a = () => interopDefault(import('..\\pages\\micompra.vue' /* webpackChunkName: "pages/micompra" */))
const _ea932872 = () => interopDefault(import('..\\pages\\template5\\index.vue' /* webpackChunkName: "pages/template5/index" */))
const _db2fddb4 = () => interopDefault(import('..\\pages\\template6\\index.vue' /* webpackChunkName: "pages/template6/index" */))
const _cbcc92f6 = () => interopDefault(import('..\\pages\\template7\\index.vue' /* webpackChunkName: "pages/template7/index" */))
const _bc694838 = () => interopDefault(import('..\\pages\\template8\\index.vue' /* webpackChunkName: "pages/template8/index" */))
const _7b07f8a6 = () => interopDefault(import('..\\pages\\unicentro\\index.vue' /* webpackChunkName: "pages/unicentro/index" */))
const _5e453e3d = () => interopDefault(import('..\\pages\\ig\\contacto.vue' /* webpackChunkName: "pages/ig/contacto" */))
const _2f9251b8 = () => interopDefault(import('..\\pages\\template6\\index_macrobrand.vue' /* webpackChunkName: "pages/template6/index_macrobrand" */))
const _1d982585 = () => interopDefault(import('..\\pages\\ig\\productos\\_slug.vue' /* webpackChunkName: "pages/ig/productos/_slug" */))
const _a6df31f0 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _256e9932 = () => interopDefault(import('..\\pages\\productos\\_slug.vue' /* webpackChunkName: "pages/productos/_slug" */))
const _3212b0bc = () => interopDefault(import('..\\pages\\wa\\_slug\\index.vue' /* webpackChunkName: "pages/wa/_slug/index" */))
const _181b3c1e = () => interopDefault(import('..\\pages\\wp\\_slug\\index.vue' /* webpackChunkName: "pages/wp/_slug/index" */))
const _560090c5 = () => interopDefault(import('..\\pages\\wa\\_slug\\producto\\_slugProduct.vue' /* webpackChunkName: "pages/wa/_slug/producto/_slugProduct" */))
const _25b4de56 = () => interopDefault(import('..\\pages\\wp\\_slug\\producto\\_slugProduct.vue' /* webpackChunkName: "pages/wp/_slug/producto/_slugProduct" */))
const _90ef3a9c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/_tailwind",
    component: _33dacb24,
    name: "_tailwind"
  }, {
    path: "/blog",
    component: _a371ef60,
    name: "blog"
  }, {
    path: "/cart",
    component: _00eb9720,
    name: "cart"
  }, {
    path: "/catalogoPixel",
    component: _2265e6f2,
    name: "catalogoPixel"
  }, {
    path: "/constructor",
    component: _421bc368,
    name: "constructor"
  }, {
    path: "/contacto",
    component: _248ace1f,
    name: "contacto"
  }, {
    path: "/ig",
    component: _24ab1754,
    name: "ig"
  }, {
    path: "/micompra",
    component: _19b12e6a,
    name: "micompra"
  }, {
    path: "/template5",
    component: _ea932872,
    name: "template5"
  }, {
    path: "/template6",
    component: _db2fddb4,
    name: "template6"
  }, {
    path: "/template7",
    component: _cbcc92f6,
    name: "template7"
  }, {
    path: "/template8",
    component: _bc694838,
    name: "template8"
  }, {
    path: "/unicentro",
    component: _7b07f8a6,
    name: "unicentro"
  }, {
    path: "/ig/contacto",
    component: _5e453e3d,
    name: "ig-contacto"
  }, {
    path: "/template6/index_macrobrand",
    component: _2f9251b8,
    name: "template6-index_macrobrand"
  }, {
    path: "/ig/productos/:slug?",
    component: _1d982585,
    name: "ig-productos-slug"
  }, {
    path: "/blog/:slug",
    component: _a6df31f0,
    name: "blog-slug"
  }, {
    path: "/productos/:slug?",
    component: _256e9932,
    name: "productos-slug"
  }, {
    path: "/wa/:slug?",
    component: _3212b0bc,
    name: "wa-slug"
  }, {
    path: "/wp/:slug?",
    component: _181b3c1e,
    name: "wp-slug"
  }, {
    path: "/wa/:slug?/producto/:slugProduct?",
    component: _560090c5,
    name: "wa-slug-producto-slugProduct"
  }, {
    path: "/wp/:slug?/producto/:slugProduct?",
    component: _25b4de56,
    name: "wp-slug-producto-slugProduct"
  }, {
    path: "/",
    component: _90ef3a9c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
