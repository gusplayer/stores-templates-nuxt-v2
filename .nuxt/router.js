import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7475a39b = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _4a84afca = () => interopDefault(import('../pages/contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _5f542ada = () => interopDefault(import('../pages/template5/index.vue' /* webpackChunkName: "pages/template5/index" */))
const _653a9d54 = () => interopDefault(import('../pages/template6/index.vue' /* webpackChunkName: "pages/template6/index" */))
const _573b7d81 = () => interopDefault(import('../pages/constructor/constructorK.vue' /* webpackChunkName: "pages/constructor/constructorK" */))
const _52ebac6f = () => interopDefault(import('../pages/template5/cart.vue' /* webpackChunkName: "pages/template5/cart" */))
const _7a622e9e = () => interopDefault(import('../pages/template5/contacto.vue' /* webpackChunkName: "pages/template5/contacto" */))
const _2abcb93a = () => interopDefault(import('../pages/productos/_slug.vue' /* webpackChunkName: "pages/productos/_slug" */))
const _3fea4e32 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _224d0f6e = () => interopDefault(import('../pages/_productos_DELETE/_slug/index.vue' /* webpackChunkName: "pages/_productos_DELETE/_slug/index" */))

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
    component: _7475a39b,
    name: "cart"
  }, {
    path: "/contacto",
    component: _4a84afca,
    name: "contacto"
  }, {
    path: "/template5",
    component: _5f542ada,
    name: "template5"
  }, {
    path: "/template6",
    component: _653a9d54,
    name: "template6"
  }, {
    path: "/constructor/constructorK",
    component: _573b7d81,
    name: "constructor-constructorK"
  }, {
    path: "/template5/cart",
    component: _52ebac6f,
    name: "template5-cart"
  }, {
    path: "/template5/contacto",
    component: _7a622e9e,
    name: "template5-contacto"
  }, {
    path: "/productos/:slug?",
    component: _2abcb93a,
    name: "productos-slug"
  }, {
    path: "/",
    component: _3fea4e32,
    name: "index"
  }, {
    path: "/:productos_DELETE/:slug?",
    component: _224d0f6e,
    name: "productos_DELETE-slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
