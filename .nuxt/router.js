import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _794f6fae = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _39b826b7 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _534f7634 = () => interopDefault(import('..\\pages\\contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _6902b59e = () => interopDefault(import('..\\pages\\micompra.vue' /* webpackChunkName: "pages/micompra" */))
const _50291476 = () => interopDefault(import('..\\pages\\productos\\index.vue' /* webpackChunkName: "pages/productos/index" */))
const _0f3a28cb = () => interopDefault(import('..\\pages\\productosHoko\\index.vue' /* webpackChunkName: "pages/productosHoko/index" */))
const _182942dc = () => interopDefault(import('..\\pages\\template10\\index.vue' /* webpackChunkName: "pages/template10/index" */))
const _08c5f81e = () => interopDefault(import('..\\pages\\template11\\index.vue' /* webpackChunkName: "pages/template11/index" */))
const _034ea950 = () => interopDefault(import('..\\pages\\template12\\index.vue' /* webpackChunkName: "pages/template12/index" */))
const _0b004eaf = () => interopDefault(import('..\\pages\\template13\\index.vue' /* webpackChunkName: "pages/template13/index" */))
const _12b1f40e = () => interopDefault(import('..\\pages\\template14\\index.vue' /* webpackChunkName: "pages/template14/index" */))
const _1a63996d = () => interopDefault(import('..\\pages\\template15\\index.vue' /* webpackChunkName: "pages/template15/index" */))
const _283fa8e4 = () => interopDefault(import('..\\pages\\template5\\index.vue' /* webpackChunkName: "pages/template5/index" */))
const _18dc5e26 = () => interopDefault(import('..\\pages\\template6\\index.vue' /* webpackChunkName: "pages/template6/index" */))
const _09791368 = () => interopDefault(import('..\\pages\\template7\\index.vue' /* webpackChunkName: "pages/template7/index" */))
const _02f51bab = () => interopDefault(import('..\\pages\\template8\\index.vue' /* webpackChunkName: "pages/template8/index" */))
const _0aa6c10a = () => interopDefault(import('..\\pages\\template9\\index.vue' /* webpackChunkName: "pages/template9/index" */))
const _a57b3a1e = () => interopDefault(import('..\\pages\\template99\\index.vue' /* webpackChunkName: "pages/template99/index" */))
const _2da39202 = () => interopDefault(import('..\\pages\\termsandconditions.vue' /* webpackChunkName: "pages/termsandconditions" */))
const _23a5c374 = () => interopDefault(import('..\\pages\\unicentro\\index.vue' /* webpackChunkName: "pages/unicentro/index" */))
const _2e317606 = () => interopDefault(import('..\\pages\\template6\\index_macrobrand.vue' /* webpackChunkName: "pages/template6/index_macrobrand" */))
const _18d692d3 = () => interopDefault(import('..\\pages\\template99\\templates\\template1\\index.vue' /* webpackChunkName: "pages/template99/templates/template1/index" */))
const _20883832 = () => interopDefault(import('..\\pages\\template99\\templates\\template2\\index.vue' /* webpackChunkName: "pages/template99/templates/template2/index" */))
const _2839dd91 = () => interopDefault(import('..\\pages\\template99\\templates\\template3\\index.vue' /* webpackChunkName: "pages/template99/templates/template3/index" */))
const _79ce8d6a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7cbcb23e = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _4e72732e = () => interopDefault(import('..\\pages\\productos\\_slug.vue' /* webpackChunkName: "pages/productos/_slug" */))
const _0d838783 = () => interopDefault(import('..\\pages\\productosHoko\\_slug.vue' /* webpackChunkName: "pages/productosHoko/_slug" */))
const _48206769 = () => interopDefault(import('..\\pages\\wa\\_slug\\index.vue' /* webpackChunkName: "pages/wa/_slug/index" */))
const _533f3072 = () => interopDefault(import('..\\pages\\wa\\_slug\\blog\\index.vue' /* webpackChunkName: "pages/wa/_slug/blog/index" */))
const _b7844b5a = () => interopDefault(import('..\\pages\\wa\\_slug\\micompra.vue' /* webpackChunkName: "pages/wa/_slug/micompra" */))
const _47e36dc1 = () => interopDefault(import('..\\pages\\wa\\_slug\\blog\\_slugBlog.vue' /* webpackChunkName: "pages/wa/_slug/blog/_slugBlog" */))
const _ee0775a2 = () => interopDefault(import('..\\pages\\wa\\_slug\\productos\\_slugProduct.vue' /* webpackChunkName: "pages/wa/_slug/productos/_slugProduct" */))

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
    component: _794f6fae,
    name: "blog"
  }, {
    path: "/cart",
    component: _39b826b7,
    name: "cart"
  }, {
    path: "/contacto",
    component: _534f7634,
    name: "contacto"
  }, {
    path: "/micompra",
    component: _6902b59e,
    name: "micompra"
  }, {
    path: "/productos",
    component: _50291476,
    name: "productos"
  }, {
    path: "/productosHoko",
    component: _0f3a28cb,
    name: "productosHoko"
  }, {
    path: "/template10",
    component: _182942dc,
    name: "template10"
  }, {
    path: "/template11",
    component: _08c5f81e,
    name: "template11"
  }, {
    path: "/template12",
    component: _034ea950,
    name: "template12"
  }, {
    path: "/template13",
    component: _0b004eaf,
    name: "template13"
  }, {
    path: "/template14",
    component: _12b1f40e,
    name: "template14"
  }, {
    path: "/template15",
    component: _1a63996d,
    name: "template15"
  }, {
    path: "/template5",
    component: _283fa8e4,
    name: "template5"
  }, {
    path: "/template6",
    component: _18dc5e26,
    name: "template6"
  }, {
    path: "/template7",
    component: _09791368,
    name: "template7"
  }, {
    path: "/template8",
    component: _02f51bab,
    name: "template8"
  }, {
    path: "/template9",
    component: _0aa6c10a,
    name: "template9"
  }, {
    path: "/template99",
    component: _a57b3a1e,
    name: "template99"
  }, {
    path: "/termsandconditions",
    component: _2da39202,
    name: "termsandconditions"
  }, {
    path: "/unicentro",
    component: _23a5c374,
    name: "unicentro"
  }, {
    path: "/template6/index_macrobrand",
    component: _2e317606,
    name: "template6-index_macrobrand"
  }, {
    path: "/template99/templates/template1",
    component: _18d692d3,
    name: "template99-templates-template1"
  }, {
    path: "/template99/templates/template2",
    component: _20883832,
    name: "template99-templates-template2"
  }, {
    path: "/template99/templates/template3",
    component: _2839dd91,
    name: "template99-templates-template3"
  }, {
    path: "/",
    component: _79ce8d6a,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _7cbcb23e,
    name: "blog-slug"
  }, {
    path: "/productos/:slug",
    component: _4e72732e,
    name: "productos-slug"
  }, {
    path: "/productosHoko/:slug",
    component: _0d838783,
    name: "productosHoko-slug"
  }, {
    path: "/wa/:slug",
    component: _48206769,
    name: "wa-slug"
  }, {
    path: "/wa/:slug?/blog",
    component: _533f3072,
    name: "wa-slug-blog"
  }, {
    path: "/wa/:slug?/micompra",
    component: _b7844b5a,
    name: "wa-slug-micompra"
  }, {
    path: "/wa/:slug?/blog/:slugBlog",
    component: _47e36dc1,
    name: "wa-slug-blog-slugBlog"
  }, {
    path: "/wa/:slug?/productos/:slugProduct?",
    component: _ee0775a2,
    name: "wa-slug-productos-slugProduct"
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
