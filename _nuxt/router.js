import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _843a52e8 = () => interopDefault(import('..\\pages\\template1\\index.vue' /* webpackChunkName: "pages_template1_index" */))
const _1fad706c = () => interopDefault(import('..\\pages\\constructor\\constructorK.vue' /* webpackChunkName: "pages_constructor_constructorK" */))
const _1884dd56 = () => interopDefault(import('..\\pages\\template1\\cart.vue' /* webpackChunkName: "pages_template1_cart" */))
const _7c9a9405 = () => interopDefault(import('..\\pages\\template1\\contacto.vue' /* webpackChunkName: "pages_template1_contacto" */))
const _b5819966 = () => interopDefault(import('..\\pages\\template1\\productos\\_slug.vue' /* webpackChunkName: "pages_template1_productos__slug" */))
const _4e46984c = () => interopDefault(import('..\\pages\\productos\\_slug\\index.vue' /* webpackChunkName: "pages_productos__slug_index" */))
const _22530111 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _843a52e8,
    name: "template1"
  }, {
    path: "/constructor/constructorK",
    component: _1fad706c,
    name: "constructor-constructorK"
  }, {
    path: "/template1/cart",
    component: _1884dd56,
    name: "template1-cart"
  }, {
    path: "/template1/contacto",
    component: _7c9a9405,
    name: "template1-contacto"
  }, {
    path: "/template1/productos/:slug?",
    component: _b5819966,
    name: "template1-productos-slug"
  }, {
    path: "/productos/:slug?",
    component: _4e46984c,
    name: "productos-slug"
  }, {
    path: "/",
    component: _22530111,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
