import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ae055c0 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _7a4fc76f = () => interopDefault(import('..\\pages\\contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _f0f56ff8 = () => interopDefault(import('..\\pages\\ig\\index.vue' /* webpackChunkName: "pages/ig/index" */))
const _7c55d5d2 = () => interopDefault(import('..\\pages\\template5\\index.vue' /* webpackChunkName: "pages/template5/index" */))
const _6cf28b14 = () => interopDefault(import('..\\pages\\template6\\index.vue' /* webpackChunkName: "pages/template6/index" */))
const _6485c2d8 = () => interopDefault(import('..\\pages\\wa\\index.vue' /* webpackChunkName: "pages/wa/index" */))
const _77595f9b = () => interopDefault(import('..\\pages\\constructor\\constructorK.vue' /* webpackChunkName: "pages/constructor/constructorK" */))
const _2965e0e6 = () => interopDefault(import('..\\pages\\ig\\contacto.vue' /* webpackChunkName: "pages/ig/contacto" */))
const _2149bd2a = () => interopDefault(import('..\\pages\\template5\\cart.vue' /* webpackChunkName: "pages/template5/cart" */))
const _905274cc = () => interopDefault(import('..\\pages\\template5\\contacto.vue' /* webpackChunkName: "pages/template5/contacto" */))
const _3eed378a = () => interopDefault(import('..\\pages\\wa\\cart.vue' /* webpackChunkName: "pages/wa/cart" */))
const _30bcb256 = () => interopDefault(import('..\\pages\\ig\\productos\\_slug.vue' /* webpackChunkName: "pages/ig/productos/_slug" */))
const _24675cb7 = () => interopDefault(import('..\\pages\\productos\\_slug.vue' /* webpackChunkName: "pages/productos/_slug" */))
const _62cf2190 = () => interopDefault(import('..\\pages\\wa\\_slug.vue' /* webpackChunkName: "pages/wa/_slug" */))
const _06f66b62 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/cart",
    component: _1ae055c0,
    name: "cart"
  }, {
    path: "/contacto",
    component: _7a4fc76f,
    name: "contacto"
  }, {
    path: "/ig",
    component: _f0f56ff8,
    name: "ig"
  }, {
    path: "/template5",
    component: _7c55d5d2,
    name: "template5"
  }, {
    path: "/template6",
    component: _6cf28b14,
    name: "template6"
  }, {
    path: "/wa",
    component: _6485c2d8,
    name: "wa"
  }, {
    path: "/constructor/constructorK",
    component: _77595f9b,
    name: "constructor-constructorK"
  }, {
    path: "/ig/contacto",
    component: _2965e0e6,
    name: "ig-contacto"
  }, {
    path: "/template5/cart",
    component: _2149bd2a,
    name: "template5-cart"
  }, {
    path: "/template5/contacto",
    component: _905274cc,
    name: "template5-contacto"
  }, {
    path: "/wa/cart",
    component: _3eed378a,
    name: "wa-cart"
  }, {
    path: "/ig/productos/:slug?",
    component: _30bcb256,
    name: "ig-productos-slug"
  }, {
    path: "/productos/:slug?",
    component: _24675cb7,
    name: "productos-slug"
  }, {
    path: "/wa/:slug",
    component: _62cf2190,
    name: "wa-slug"
  }, {
    path: "/",
    component: _06f66b62,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
