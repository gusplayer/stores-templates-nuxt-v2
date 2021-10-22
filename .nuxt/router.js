import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c8ae27b6 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _4fcc23a0 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _51e0b0e3 = () => interopDefault(import('../pages/catalogoPixel/index.vue' /* webpackChunkName: "pages/catalogoPixel/index" */))
const _0d76e1ad = () => interopDefault(import('../pages/constructor/index.vue' /* webpackChunkName: "pages/constructor/index" */))
const _d23cb562 = () => interopDefault(import('../pages/contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _e7eff4cc = () => interopDefault(import('../pages/micompra.vue' /* webpackChunkName: "pages/micompra" */))
const _8f2c00f4 = () => interopDefault(import('../pages/productos/index.vue' /* webpackChunkName: "pages/productos/index" */))
const _33c63c48 = () => interopDefault(import('../pages/template10/index.vue' /* webpackChunkName: "pages/template10/index" */))
const _7b01949d = () => interopDefault(import('../pages/template11/index.vue' /* webpackChunkName: "pages/template11/index" */))
const _0fe6475e = () => interopDefault(import('../pages/template12/index.vue' /* webpackChunkName: "pages/template12/index" */))
const _c730b524 = () => interopDefault(import('../pages/template5/index.vue' /* webpackChunkName: "pages/template5/index" */))
const _314c582f = () => interopDefault(import('../pages/template6/index.vue' /* webpackChunkName: "pages/template6/index" */))
const _739dea20 = () => interopDefault(import('../pages/template7/index.vue' /* webpackChunkName: "pages/template7/index" */))
const _5b15bdb1 = () => interopDefault(import('../pages/template8/index.vue' /* webpackChunkName: "pages/template8/index" */))
const _200b1f1c = () => interopDefault(import('../pages/template9/index.vue' /* webpackChunkName: "pages/template9/index" */))
const _5fb4559d = () => interopDefault(import('../pages/template99/index.vue' /* webpackChunkName: "pages/template99/index" */))
const _81870e70 = () => interopDefault(import('../pages/unicentro/index.vue' /* webpackChunkName: "pages/unicentro/index" */))
const _5cef007b = () => interopDefault(import('../pages/template6/index_macrobrand.vue' /* webpackChunkName: "pages/template6/index_macrobrand" */))
const _2eb2852f = () => interopDefault(import('../pages/template99/templates/template1/index.vue' /* webpackChunkName: "pages/template99/templates/template1/index" */))
const _78d19020 = () => interopDefault(import('../pages/template99/templates/template2/index.vue' /* webpackChunkName: "pages/template99/templates/template2/index" */))
const _587beab1 = () => interopDefault(import('../pages/template99/templates/template3/index.vue' /* webpackChunkName: "pages/template99/templates/template3/index" */))
const _cc1b6a46 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _92994384 = () => interopDefault(import('../pages/productos/_slug.vue' /* webpackChunkName: "pages/productos/_slug" */))
const _abbf3e70 = () => interopDefault(import('../pages/wa/_slug/index.vue' /* webpackChunkName: "pages/wa/_slug/index" */))
const _641462d7 = () => interopDefault(import('../pages/wp/_slug/index.vue' /* webpackChunkName: "pages/wp/_slug/index" */))
const _3f46d2fb = () => interopDefault(import('../pages/wa/_slug/productos/_slugProduct.vue' /* webpackChunkName: "pages/wa/_slug/productos/_slugProduct" */))
const _6443454e = () => interopDefault(import('../pages/wp/_slug/producto/_slugProduct.vue' /* webpackChunkName: "pages/wp/_slug/producto/_slugProduct" */))
const _6f845982 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _c8ae27b6,
    name: "blog"
  }, {
    path: "/cart",
    component: _4fcc23a0,
    name: "cart"
  }, {
    path: "/catalogoPixel",
    component: _51e0b0e3,
    name: "catalogoPixel"
  }, {
    path: "/constructor",
    component: _0d76e1ad,
    name: "constructor"
  }, {
    path: "/contacto",
    component: _d23cb562,
    name: "contacto"
  }, {
    path: "/micompra",
    component: _e7eff4cc,
    name: "micompra"
  }, {
    path: "/productos",
    component: _8f2c00f4,
    name: "productos"
  }, {
    path: "/template10",
    component: _33c63c48,
    name: "template10"
  }, {
    path: "/template11",
    component: _7b01949d,
    name: "template11"
  }, {
    path: "/template12",
    component: _0fe6475e,
    name: "template12"
  }, {
    path: "/template5",
    component: _c730b524,
    name: "template5"
  }, {
    path: "/template6",
    component: _314c582f,
    name: "template6"
  }, {
    path: "/template7",
    component: _739dea20,
    name: "template7"
  }, {
    path: "/template8",
    component: _5b15bdb1,
    name: "template8"
  }, {
    path: "/template9",
    component: _200b1f1c,
    name: "template9"
  }, {
    path: "/template99",
    component: _5fb4559d,
    name: "template99"
  }, {
    path: "/unicentro",
    component: _81870e70,
    name: "unicentro"
  }, {
    path: "/template6/index_macrobrand",
    component: _5cef007b,
    name: "template6-index_macrobrand"
  }, {
    path: "/template99/templates/template1",
    component: _2eb2852f,
    name: "template99-templates-template1"
  }, {
    path: "/template99/templates/template2",
    component: _78d19020,
    name: "template99-templates-template2"
  }, {
    path: "/template99/templates/template3",
    component: _587beab1,
    name: "template99-templates-template3"
  }, {
    path: "/blog/:slug",
    component: _cc1b6a46,
    name: "blog-slug"
  }, {
    path: "/productos/:slug",
    component: _92994384,
    name: "productos-slug"
  }, {
    path: "/wa/:slug",
    component: _abbf3e70,
    name: "wa-slug"
  }, {
    path: "/wp/:slug",
    component: _641462d7,
    name: "wp-slug"
  }, {
    path: "/wa/:slug?/productos/:slugProduct?",
    component: _3f46d2fb,
    name: "wa-slug-productos-slugProduct"
  }, {
    path: "/wp/:slug?/producto/:slugProduct?",
    component: _6443454e,
    name: "wp-slug-producto-slugProduct"
  }, {
    path: "/",
    component: _6f845982,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
