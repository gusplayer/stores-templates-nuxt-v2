import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a997840 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _7475a39b = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _022f1cdc = () => interopDefault(import('../pages/constructor/index.vue' /* webpackChunkName: "pages/constructor/index" */))
const _4a84afca = () => interopDefault(import('../pages/contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _927df9c8 = () => interopDefault(import('../pages/ig/index.vue' /* webpackChunkName: "pages/ig/index" */))
const _3fab1015 = () => interopDefault(import('../pages/micompra.vue' /* webpackChunkName: "pages/micompra" */))
const _5f542ada = () => interopDefault(import('../pages/template5/index.vue' /* webpackChunkName: "pages/template5/index" */))
const _653a9d54 = () => interopDefault(import('../pages/template6/index.vue' /* webpackChunkName: "pages/template6/index" */))
const _0bc15fd6 = () => interopDefault(import('../pages/template7/index.vue' /* webpackChunkName: "pages/template7/index" */))
const _19aa8426 = () => interopDefault(import('../pages/unicentro/index.vue' /* webpackChunkName: "pages/unicentro/index" */))
const _f9834516 = () => interopDefault(import('../pages/ig/contacto.vue' /* webpackChunkName: "pages/ig/contacto" */))
const _a2f76150 = () => interopDefault(import('../pages/ig/productos/_slug.vue' /* webpackChunkName: "pages/ig/productos/_slug" */))
const _ce89e4d6 = () => interopDefault(import('../pages/wa/producto/_slug.vue' /* webpackChunkName: "pages/wa/producto/_slug" */))
const _1e06bad0 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _2abcb93a = () => interopDefault(import('../pages/productos/_slug.vue' /* webpackChunkName: "pages/productos/_slug" */))
const _b9358700 = () => interopDefault(import('../pages/wa/_slug.vue' /* webpackChunkName: "pages/wa/_slug" */))
const _3fea4e32 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1a997840,
    name: "blog"
  }, {
    path: "/cart",
    component: _7475a39b,
    name: "cart"
  }, {
    path: "/constructor",
    component: _022f1cdc,
    name: "constructor"
  }, {
    path: "/contacto",
    component: _4a84afca,
    name: "contacto"
  }, {
    path: "/ig",
    component: _927df9c8,
    name: "ig"
  }, {
    path: "/micompra",
    component: _3fab1015,
    name: "micompra"
  }, {
    path: "/template5",
    component: _5f542ada,
    name: "template5"
  }, {
    path: "/template6",
    component: _653a9d54,
    name: "template6"
  }, {
    path: "/template7",
    component: _0bc15fd6,
    name: "template7"
  }, {
    path: "/unicentro",
    component: _19aa8426,
    name: "unicentro"
  }, {
    path: "/ig/contacto",
    component: _f9834516,
    name: "ig-contacto"
  }, {
    path: "/ig/productos/:slug?",
    component: _a2f76150,
    name: "ig-productos-slug"
  }, {
    path: "/wa/producto/:slug?",
    component: _ce89e4d6,
    name: "wa-producto-slug"
  }, {
    path: "/blog/:slug",
    component: _1e06bad0,
    name: "blog-slug"
  }, {
    path: "/productos/:slug?",
    component: _2abcb93a,
    name: "productos-slug"
  }, {
    path: "/wa/:slug?",
    component: _b9358700,
    name: "wa-slug"
  }, {
    path: "/",
    component: _3fea4e32,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
