import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _79d419e9 = () => interopDefault(import('../pages/template1/index.vue' /* webpackChunkName: "pages/template1/index" */))
const _b314ef32 = () => interopDefault(import('../pages/constructor/constructorK.vue' /* webpackChunkName: "pages/constructor/constructorK" */))
const _47df3a59 = () => interopDefault(import('../pages/template1/cart.vue' /* webpackChunkName: "pages/template1/cart" */))
const _e4ae90f0 = () => interopDefault(import('../pages/template1/contacto.vue' /* webpackChunkName: "pages/template1/contacto" */))
const _4f51ec36 = () => interopDefault(import('../pages/template1/productos/_slug.vue' /* webpackChunkName: "pages/template1/productos/_slug" */))
const _2e4f2280 = () => interopDefault(import('../pages/productos/_slug/index.vue' /* webpackChunkName: "pages/productos/_slug/index" */))
const _1a061bc1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _79d419e9,
    name: "template1"
  }, {
    path: "/constructor/constructorK",
    component: _b314ef32,
    name: "constructor-constructorK"
  }, {
    path: "/template1/cart",
    component: _47df3a59,
    name: "template1-cart"
  }, {
    path: "/template1/contacto",
    component: _e4ae90f0,
    name: "template1-contacto"
  }, {
    path: "/template1/productos/:slug?",
    component: _4f51ec36,
    name: "template1-productos-slug"
  }, {
    path: "/productos/:slug?",
    component: _2e4f2280,
    name: "productos-slug"
  }, {
    path: "/",
    component: _1a061bc1,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
