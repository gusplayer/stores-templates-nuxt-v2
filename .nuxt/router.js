import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2154b4ee = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _2c48b804 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _007567b3 = () => interopDefault(import('../pages/contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _14c87004 = () => interopDefault(import('../pages/micompra.vue' /* webpackChunkName: "pages/micompra" */))
const _2b6d84a2 = () => interopDefault(import('../pages/productos/index.vue' /* webpackChunkName: "pages/productos/index" */))
const _4640dfa6 = () => interopDefault(import('../pages/productosHoko/index.vue' /* webpackChunkName: "pages/productosHoko/index" */))
const _58ebff80 = () => interopDefault(import('../pages/template10/index.vue' /* webpackChunkName: "pages/template10/index" */))
const _686eb301 = () => interopDefault(import('../pages/template11/index.vue' /* webpackChunkName: "pages/template11/index" */))
const _0559347c = () => interopDefault(import('../pages/template12/index.vue' /* webpackChunkName: "pages/template12/index" */))
const _db8fcefa = () => interopDefault(import('../pages/template13/index.vue' /* webpackChunkName: "pages/template13/index" */))
const _0f6b2a8a = () => interopDefault(import('../pages/template5/index.vue' /* webpackChunkName: "pages/template5/index" */))
const _b760456a = () => interopDefault(import('../pages/template6/index.vue' /* webpackChunkName: "pages/template6/index" */))
const _3934900c = () => interopDefault(import('../pages/template7/index.vue' /* webpackChunkName: "pages/template7/index" */))
const _63cd7a66 = () => interopDefault(import('../pages/template8/index.vue' /* webpackChunkName: "pages/template8/index" */))
const _62fdf58e = () => interopDefault(import('../pages/template9/index.vue' /* webpackChunkName: "pages/template9/index" */))
const _4d217401 = () => interopDefault(import('../pages/template99/index.vue' /* webpackChunkName: "pages/template99/index" */))
const _6debfd8c = () => interopDefault(import('../pages/termsandconditions.vue' /* webpackChunkName: "pages/termsandconditions" */))
const _323ffde4 = () => interopDefault(import('../pages/unicentro/index.vue' /* webpackChunkName: "pages/unicentro/index" */))
const _1c6471df = () => interopDefault(import('../pages/template6/index_macrobrand.vue' /* webpackChunkName: "pages/template6/index_macrobrand" */))
const _07b6ecda = () => interopDefault(import('../pages/template99/templates/template1/index.vue' /* webpackChunkName: "pages/template99/templates/template1/index" */))
const _dded8758 = () => interopDefault(import('../pages/template99/templates/template2/index.vue' /* webpackChunkName: "pages/template99/templates/template2/index" */))
const _25edef15 = () => interopDefault(import('../pages/template99/templates/template3/index.vue' /* webpackChunkName: "pages/template99/templates/template3/index" */))
const _24c1f77e = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _29b6e35a = () => interopDefault(import('../pages/productos/_slug.vue' /* webpackChunkName: "pages/productos/_slug" */))
const _49ae2236 = () => interopDefault(import('../pages/productosHoko/_slug.vue' /* webpackChunkName: "pages/productosHoko/_slug" */))
const _7c49c82c = () => interopDefault(import('../pages/wa/_slug/index.vue' /* webpackChunkName: "pages/wa/_slug/index" */))
const _cd9fd08a = () => interopDefault(import('../pages/wa/_slug/blog/index.vue' /* webpackChunkName: "pages/wa/_slug/blog/index" */))
const _811dc2a0 = () => interopDefault(import('../pages/wa/_slug/micompra.vue' /* webpackChunkName: "pages/wa/_slug/micompra" */))
const _8a9bf896 = () => interopDefault(import('../pages/wa/_slug/blog/_slugBlog.vue' /* webpackChunkName: "pages/wa/_slug/blog/_slugBlog" */))
const _5f34a017 = () => interopDefault(import('../pages/wa/_slug/productos/_slugProduct.vue' /* webpackChunkName: "pages/wa/_slug/productos/_slugProduct" */))
const _229a519e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2154b4ee,
    name: "blog"
  }, {
    path: "/cart",
    component: _2c48b804,
    name: "cart"
  }, {
    path: "/contacto",
    component: _007567b3,
    name: "contacto"
  }, {
    path: "/micompra",
    component: _14c87004,
    name: "micompra"
  }, {
    path: "/productos",
    component: _2b6d84a2,
    name: "productos"
  }, {
    path: "/productosHoko",
    component: _4640dfa6,
    name: "productosHoko"
  }, {
    path: "/template10",
    component: _58ebff80,
    name: "template10"
  }, {
    path: "/template11",
    component: _686eb301,
    name: "template11"
  }, {
    path: "/template12",
    component: _0559347c,
    name: "template12"
  }, {
    path: "/template13",
    component: _db8fcefa,
    name: "template13"
  }, {
    path: "/template5",
    component: _0f6b2a8a,
    name: "template5"
  }, {
    path: "/template6",
    component: _b760456a,
    name: "template6"
  }, {
    path: "/template7",
    component: _3934900c,
    name: "template7"
  }, {
    path: "/template8",
    component: _63cd7a66,
    name: "template8"
  }, {
    path: "/template9",
    component: _62fdf58e,
    name: "template9"
  }, {
    path: "/template99",
    component: _4d217401,
    name: "template99"
  }, {
    path: "/termsandconditions",
    component: _6debfd8c,
    name: "termsandconditions"
  }, {
    path: "/unicentro",
    component: _323ffde4,
    name: "unicentro"
  }, {
    path: "/template6/index_macrobrand",
    component: _1c6471df,
    name: "template6-index_macrobrand"
  }, {
    path: "/template99/templates/template1",
    component: _07b6ecda,
    name: "template99-templates-template1"
  }, {
    path: "/template99/templates/template2",
    component: _dded8758,
    name: "template99-templates-template2"
  }, {
    path: "/template99/templates/template3",
    component: _25edef15,
    name: "template99-templates-template3"
  }, {
    path: "/blog/:slug",
    component: _24c1f77e,
    name: "blog-slug"
  }, {
    path: "/productos/:slug",
    component: _29b6e35a,
    name: "productos-slug"
  }, {
    path: "/productosHoko/:slug",
    component: _49ae2236,
    name: "productosHoko-slug"
  }, {
    path: "/wa/:slug",
    component: _7c49c82c,
    name: "wa-slug"
  }, {
    path: "/wa/:slug?/blog",
    component: _cd9fd08a,
    name: "wa-slug-blog"
  }, {
    path: "/wa/:slug?/micompra",
    component: _811dc2a0,
    name: "wa-slug-micompra"
  }, {
    path: "/wa/:slug?/blog/:slugBlog",
    component: _8a9bf896,
    name: "wa-slug-blog-slugBlog"
  }, {
    path: "/wa/:slug?/productos/:slugProduct?",
    component: _5f34a017,
    name: "wa-slug-productos-slugProduct"
  }, {
    path: "/",
    component: _229a519e,
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
