exports.ids = [170];
exports.modules = {

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(534);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2bd85dc9", content, true, context)
};

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(536);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("00aac9d0", content, true, context)
};

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_blog_card_vue_vue_type_style_index_0_id_4dd8fa37_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_blog_card_vue_vue_type_style_index_0_id_4dd8fa37_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_blog_card_vue_vue_type_style_index_0_id_4dd8fa37_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_blog_card_vue_vue_type_style_index_0_id_4dd8fa37_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_blog_card_vue_vue_type_style_index_0_id_4dd8fa37_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".producto[data-v-4dd8fa37]{align-items:center;background-color:#fff;border-radius:9px;display:flex;flex-direction:column;height:100%;justify-content:flex-start;width:100%}.container[data-v-4dd8fa37]{position:relative}.content-imge[data-v-4dd8fa37]{border-top-left-radius:9px;border-top-right-radius:9px;cursor:pointer;display:flex;height:auto;justify-content:flex-start;position:relative;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-imge[data-v-4dd8fa37],.images[data-v-4dd8fa37]{overflow:hidden;width:100%}.images[data-v-4dd8fa37]{-o-object-fit:cover;object-fit:cover;-webkit-transition:all .5s ease 0s}.container:hover .images[data-v-4dd8fa37]{overflow:hidden;position:relative;transform:scale(1.1);transition-duration:.15s;transition-duration:.5s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition:all .5s ease 0s}.empty[data-v-4dd8fa37]{background:#ccc;height:100%;width:100%}.text-tittle[data-v-4dd8fa37]{grid-gap:0;display:grid;font:inherit;font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-day[data-v-4dd8fa37],.txt-month[data-v-4dd8fa37]{color:#222;font-weight:600}.txt-day[data-v-4dd8fa37],.txt-month[data-v-4dd8fa37]{font-weight:600}.txt-month[data-v-4dd8fa37]{letter-spacing:.3px;text-transform:uppercase}.content-abstract-article[data-v-4dd8fa37],.content-tittle-article[data-v-4dd8fa37],.content-txt-article[data-v-4dd8fa37]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;padding:0 5px;width:100%}.content-date-aticle[data-v-4dd8fa37]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.txt-article-abstract[data-v-4dd8fa37]{color:#222}@media (min-width:300px){.container[data-v-4dd8fa37]{max-width:100%}.empty[data-v-4dd8fa37],.images[data-v-4dd8fa37]{height:221px}.txt-day[data-v-4dd8fa37]{font-size:15px}.txt-month[data-v-4dd8fa37]{font-size:10px}.overlay-top[data-v-4dd8fa37]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:#fafafa;border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:45px;left:10px;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:10px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:40px}.txt-article-tittle[data-v-4dd8fa37]{align-items:flex-start;color:#222;cursor:pointer;display:flex;font-size:14px;font-weight:500;justify-content:flex-start;letter-spacing:.3px;margin-bottom:15px;margin-top:20px;text-align:left;transition-duration:.15s;transition-duration:.5s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.container:hover .txt-article-tittle[data-v-4dd8fa37]{color:#222;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-article-create[data-v-4dd8fa37],.txt-article-day[data-v-4dd8fa37],.txt-article-month[data-v-4dd8fa37]{font-size:12px;letter-spacing:.36px}.content-date-article[data-v-4dd8fa37]{margin-bottom:15px}.content-border-article[data-v-4dd8fa37]{background-color:#eee;height:1px;margin-bottom:15px;width:60px}.txt-article-abstract[data-v-4dd8fa37]{font-size:12px;margin-bottom:15px;text-align:left}.btn[data-v-4dd8fa37]{font-size:14px;line-height:24px}}@media (min-width:425px){.empty[data-v-4dd8fa37],.images[data-v-4dd8fa37]{height:272px}}@media (min-width:768px){.txt-day[data-v-4dd8fa37]{font-size:22px}.txt-month[data-v-4dd8fa37]{font-size:14px}.overlay-top[data-v-4dd8fa37]{height:65px;left:10px;right:0;top:10px;width:60px}.txt-article-tittle[data-v-4dd8fa37]{font-size:16px}.txt-article-abstract[data-v-4dd8fa37]{font-size:14px}.empty[data-v-4dd8fa37],.images[data-v-4dd8fa37]{height:250px}}@media (min-width:1024px){.overlay-top[data-v-4dd8fa37]{height:55px;left:10px;right:0;top:10px;width:50px}}@media (min-width:1280px){.txt-day[data-v-4dd8fa37]{font-size:20px}}@media (min-width:1400px){.empty[data-v-4dd8fa37],.images[data-v-4dd8fa37]{height:298px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_cd491306_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_cd491306_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_cd491306_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_cd491306_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_cd491306_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-blog[data-v-cd491306]{align-items:center;display:flex;flex-direction:column;height:100vh;justify-content:flex-start;width:100%}.wrapper-art-blog[data-v-cd491306]{align-items:flex-start;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);display:flex;height:calc(100vh - 55px);justify-content:center;max-width:900px;overflow-y:auto;transition:all .3s cubic-bezier(.25,.8,.25,1);width:100%}.content-art-blog[data-v-cd491306]{justify-content:flex-start;z-index:0}.contenedor[data-v-cd491306],.content-art-blog[data-v-cd491306]{align-items:center;display:flex;flex-direction:column}.contenedor[data-v-cd491306]{margin-top:30px}.contenedor[data-v-cd491306],.content-item-productos[data-v-cd491306]{justify-content:center;width:100%}.content-item-productos[data-v-cd491306]{display:flex;flex-direction:column}.content-item-productos[data-v-cd491306],.grid-products[data-v-cd491306]{align-items:center}.grid-products[data-v-cd491306]{grid-gap:1rem;box-sizing:border-box;display:grid;gap:1rem;justify-content:center;margin-bottom:40px}.pagination-medium[data-v-cd491306]{background:transparent;margin-top:10px}.pagination[data-v-cd491306]{background:transparent;color:#222444;font-size:18px}.product_pagination[data-v-cd491306] .el-pagination.is-background .btn-next,.product_pagination[data-v-cd491306] .el-pagination.is-background .btn-prev,.product_pagination[data-v-cd491306] .el-pagination.is-background .el-pager li{background-color:transparent;color:#222444}.product_pagination[data-v-cd491306] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-cd491306] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-cd491306] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--btnhover)}.product_pagination[data-v-cd491306] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:green;color:#fff}.txt-banner[data-v-cd491306]{color:#222;font-weight:600}.tittle-banner-blog[data-v-cd491306]{align-items:center}.banner-blog[data-v-cd491306],.tittle-banner-blog[data-v-cd491306]{display:flex;flex-direction:column;justify-content:center;width:100%}.banner-blog[data-v-cd491306]{align-items:flex-start;padding-top:8px;z-index:10}.crumb[data-v-cd491306]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separatorCrumb[data-v-cd491306]{font-size:9px}.separatorCrumb[data-v-cd491306],.txt-crumb[data-v-cd491306]{color:#222;cursor:pointer;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-crumb[data-v-cd491306]{font-size:15px}.s1[data-v-cd491306]:hover,.s2[data-v-cd491306]:hover{color:#222;transition:all .25s ease}@media (min-width:300px){.bannerBlog[data-v-cd491306]{align-items:center;background-color:#fff;border-bottom-width:1px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);display:flex;justify-content:center;max-width:900px;padding-bottom:20px;padding-top:20px;transition:all .3s cubic-bezier(.25,.8,.25,1);width:100%}.content-art-blog[data-v-cd491306]{width:90%}.tittle-banner-blog[data-v-cd491306]{align-items:flex-start;justify-content:flex-start;margin-top:20px}.grid-products[data-v-cd491306]{gap:2rem;grid-template-columns:repeat(1,minmax(0,1fr));width:100%}.content-products[data-v-cd491306]{background-color:#f9f9f9;border-radius:9px;border-width:1px;height:100%}.content-products[data-v-cd491306],.content-products[data-v-cd491306]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-products[data-v-cd491306]:hover{box-shadow:0 6px 15px 6px #bfbfbf;width:100%}.txt-banner[data-v-cd491306]{font-size:30px}.crumb[data-v-cd491306]{align-items:center;justify-content:center}}@media (min-width:768px){.grid-products[data-v-cd491306]{align-items:flex-start;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:flex-start}}@media (min-width:1024px){.grid-products[data-v-cd491306]{gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1025px){.tittle-banner-blog[data-v-cd491306]{align-items:flex-start;justify-content:flex-start}}@media (min-width:1280px){.grid-products[data-v-cd491306]{gap:2rem;width:100%}.tittle-banner-blog[data-v-cd491306]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wa/_slug/blog/index.vue?vue&type=template&id=e9dbea3a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex flex-col justify-center items-center",
    attrs: {
      "id": "width"
    }
  }, [_c('KBlogWapi')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/wa/_slug/blog/index.vue?vue&type=template&id=e9dbea3a&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp/blog_page/Ko-Blog.vue?vue&type=template&id=cd491306&scoped=true&
var Ko_Blogvue_type_template_id_cd491306_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-blog"
  }, [_vm._ssrNode("<div class=\"bannerBlog\" data-v-cd491306>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-cd491306>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: this.stateWapiME ? `/wa/${_vm.dataStore.tienda.id_tienda}/` : `/`
      }
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-cd491306>/</p> <p class=\"txt-crumb s2\" data-v-cd491306>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('header_blog')) + "\n      ") + "</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-art-blog\" data-v-cd491306>", "</div>", [_vm._ssrNode("<div class=\"content-art-blog\" data-v-cd491306>", "</div>", [_vm._ssrNode("<div class=\"banner-blog\" data-v-cd491306><div class=\"tittle-banner-blog\" data-v-cd491306><p class=\"txt-banner\" data-v-cd491306>Últimos blogs</p></div></div> "), _vm._ssrNode("<div class=\"contenedor\" data-v-cd491306>", "</div>", [_vm._ssrNode("<div class=\"content-item w-full\" data-v-cd491306>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-cd491306>", "</div>", [_vm._ssrNode("<div class=\"grid-products\" data-v-cd491306>", "</div>", _vm._l(_vm.filteredList, function (article) {
    return _vm._ssrNode("<div class=\"content-products\" data-v-cd491306>", "</div>", [_c('KoBlogCard', {
      attrs: {
        "article": article,
        "dataStore": _vm.dataStore
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-cd491306>", "</div>", [_vm.filteredList.length > 12 ? _vm._ssrNode("<div class=\"product_pagination\" data-v-cd491306>", "</div>", [_c('el-pagination', {
    staticClass: "pagination",
    attrs: {
      "background": "",
      "layout": "prev, pager, next",
      "total": _vm.filteredList.length,
      "page-size": 12,
      "current-page": _vm.currentPage
    },
    on: {
      "update:currentPage": function ($event) {
        _vm.currentPage = $event;
      },
      "update:current-page": function ($event) {
        _vm.currentPage = $event;
      }
    }
  })], 1) : _vm._e()])], 2)])])], 2)])], 2);
};
var Ko_Blogvue_type_template_id_cd491306_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/whatsapp/blog_page/Ko-Blog.vue?vue&type=template&id=cd491306&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp/blog_page/Ko-blog-card.vue?vue&type=template&id=4dd8fa37&scoped=true&
var Ko_blog_cardvue_type_template_id_4dd8fa37_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto h-full"
  }, [_c('nuxt-link', {
    staticClass: "container",
    attrs: {
      "to": {
        path: '/wa/' + _vm.dataStore.tienda.id_tienda + '/blog/' + _vm.article.slug,
        query: {
          idBlog: _vm.article.id
        }
      }
    },
    on: {
      "mouseover": function ($event) {
        _vm.hover = true;
      },
      "mouseleave": function ($event) {
        _vm.hover = false;
      }
    }
  }, [_c('div', {
    staticClass: "contet"
  }, [_c('div', {
    staticClass: "figure-img"
  }, [_c('div', {
    staticClass: "content-imge"
  }, [_vm.article.imagen_principal_url ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(this.article.imagen_principal_url, 400, 400),
      expression: "idCloudinary(this.article.imagen_principal_url, 400, 400)"
    }],
    staticClass: "images",
    attrs: {
      "alt": "right-banner"
    }
  }) : _c('div', {
    staticClass: "empty"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "contet"
  }, [_c('div', {
    staticClass: "overlay-top"
  }, [_c('div', {
    staticClass: "text-tittle"
  }, [_c('p', {
    staticClass: "txt-day"
  }, [_vm._v("\n            " + _vm._s(this.dayCreate) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "txt-month"
  }, [_vm._v("\n            " + _vm._s(this.nameMonth) + "\n          ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "content-txt-article"
  }, [_c('div', {
    staticClass: "content-tittle-article"
  }, [_c('div', {
    staticClass: "contet"
  }, [_c('p', {
    staticClass: "txt-article-tittle"
  }, [_vm._v("\n            " + _vm._s(this.article.titulo) + "\n          ")])])]), _vm._v(" "), _c('div', {
    staticClass: "content-abstract-article"
  }, [_c('p', {
    staticClass: "txt-article-abstract"
  }, [_vm._v("\n          " + _vm._s(this.article.resumen) + "\n        ")])])])])], 1);
};
var Ko_blog_cardvue_type_template_id_4dd8fa37_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/whatsapp/blog_page/Ko-blog-card.vue?vue&type=template&id=4dd8fa37&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp/blog_page/Ko-blog-card.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_blog_cardvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-Blogcard',
  props: {
    article: Object,
    dataStore: Object
  },
  mounted() {
    if (this.article.created_at) {
      let domain = this.article.created_at;
      let result = domain.split(' ');
      this.shippingCreated = result[0];
      let data = this.shippingCreated.split('-');
      this.dayCreate = data[2];
      this.monthCreate = data[1];
      this.yearCreate = data[0];
    }
    if (this.monthCreate == 1) {
      this.nameMonth = 'Ene';
    }
    if (this.monthCreate == 2) {
      this.nameMonth = 'Feb';
    }
    if (this.monthCreate == 3) {
      this.nameMonth = 'Mar';
    }
    if (this.monthCreate == 4) {
      this.nameMonth = 'Abr';
    }
    if (this.monthCreate == 5) {
      this.nameMonth = 'May';
    }
    if (this.monthCreate == 6) {
      this.nameMonth = 'Jun';
    }
    if (this.monthCreate == 7) {
      this.nameMonth = 'Jul';
    }
    if (this.monthCreate == 8) {
      this.nameMonth = 'Ago';
    }
    if (this.monthCreate == 9) {
      this.nameMonth = 'Sep';
    }
    if (this.monthCreate == 10) {
      this.nameMonth = 'Oct';
    }
    if (this.monthCreate == 11) {
      this.nameMonth = 'Nov';
    }
    if (this.monthCreate == 12) {
      this.nameMonth = 'Dic';
    }
  },
  data() {
    return {
      hover: false,
      shippingCreated: '',
      dayCreate: '',
      monthCreate: '',
      yearCreate: '',
      nameMonth: ''
    };
  }
});
// CONCATENATED MODULE: ./components/whatsapp/blog_page/Ko-blog-card.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_page_Ko_blog_cardvue_type_script_lang_js_ = (Ko_blog_cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/whatsapp/blog_page/Ko-blog-card.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(533)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_page_Ko_blog_cardvue_type_script_lang_js_,
  Ko_blog_cardvue_type_template_id_4dd8fa37_scoped_true_render,
  Ko_blog_cardvue_type_template_id_4dd8fa37_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "4dd8fa37",
  "2c299327"
  
)

/* harmony default export */ var Ko_blog_card = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp/blog_page/Ko-Blog.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko_Blogvue_type_script_lang_js_ = ({
  name: 'Ko-Blog',
  components: {
    KoBlogCard: Ko_blog_card
  },
  data() {
    return {
      currentPage: 1,
      search: ''
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'stateWapiME', 'listArticulos']),
    filterArticles() {
      const initial = this.currentPage * 12 - 12;
      const final = initial + 12;
      return this.filteredList.slice(initial, final);
    },
    filteredList() {
      if (this.search) {
        return this.listArticulos.filter(element => {
          return element.titulo.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        return this.listArticulos;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/whatsapp/blog_page/Ko-Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_page_Ko_Blogvue_type_script_lang_js_ = (Ko_Blogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/whatsapp/blog_page/Ko-Blog.vue



function Ko_Blog_injectStyles (context) {
  
  var style0 = __webpack_require__(535)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko_Blog_component = Object(componentNormalizer["a" /* default */])(
  blog_page_Ko_Blogvue_type_script_lang_js_,
  Ko_Blogvue_type_template_id_cd491306_scoped_true_render,
  Ko_Blogvue_type_template_id_cd491306_scoped_true_staticRenderFns,
  false,
  Ko_Blog_injectStyles,
  "cd491306",
  "c330fdb4"
  
)

/* harmony default export */ var Ko_Blog = (Ko_Blog_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wa/_slug/blog/index.vue?vue&type=script&lang=js&

/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  layout: 'wa',
  components: {
    KBlogWapi: Ko_Blog
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      const widthOutput = document.querySelector('#width');
      if (window.innerWidth > 1300) {
        widthOutput.style.width = '900px';
      } else {
        widthOutput.style.width = window.innerWidth + 'px';
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/wa/_slug/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _slug_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/wa/_slug/blog/index.vue





/* normalize component */

var blog_component = Object(componentNormalizer["a" /* default */])(
  _slug_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ba16819a"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (blog_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map