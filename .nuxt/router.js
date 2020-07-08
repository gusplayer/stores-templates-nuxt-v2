import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7cc31f8f = () => interopDefault(import('../pages/template1/index.vue' /* webpackChunkName: "pages/template1/index" */))
const _573b7d81 = () => interopDefault(import('../pages/constructor/constructorK.vue' /* webpackChunkName: "pages/constructor/constructorK" */))
const _fc74301a = () => interopDefault(import('../pages/template1/cart.vue' /* webpackChunkName: "pages/template1/cart" */))
const _1a29efbc = () => interopDefault(import('../pages/template1/contacto.vue' /* webpackChunkName: "pages/template1/contacto" */))
const _404fb80b = () => interopDefault(import('../pages/template1/productos/_slug.vue' /* webpackChunkName: "pages/template1/productos/_slug" */))
const _631e58b4 = () => interopDefault(import('../pages/productos/_slug/index.vue' /* webpackChunkName: "pages/productos/_slug/index" */))
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
    path: "/template1",
    component: _7cc31f8f,
    name: "template1"
  }, {
    path: "/constructor/constructorK",
    component: _573b7d81,
    name: "constructor-constructorK"
  }, {
    path: "/template1/cart",
    component: _fc74301a,
    name: "template1-cart"
  }, {
    path: "/template1/contacto",
    component: _1a29efbc,
    name: "template1-contacto"
  }, {
    path: "/template1/productos/:slug?",
    component: _404fb80b,
    name: "template1-productos-slug"
  }, {
    path: "/productos/:slug?",
    component: _631e58b4,
    name: "productos-slug"
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
