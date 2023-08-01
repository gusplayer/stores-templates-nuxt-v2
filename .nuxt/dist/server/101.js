exports.ids = [101];
exports.modules = {

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(638);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("891e63c8", content, true, context)
};

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(640);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2b8ac156", content, true, context)
};

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blogcard_vue_vue_type_style_index_0_id_a0ff3cde_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(334);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blogcard_vue_vue_type_style_index_0_id_a0ff3cde_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blogcard_vue_vue_type_style_index_0_id_a0ff3cde_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blogcard_vue_vue_type_style_index_0_id_a0ff3cde_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blogcard_vue_vue_type_style_index_0_id_a0ff3cde_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-blog[data-v-a0ff3cde],.content-items-blog[data-v-a0ff3cde]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-items-blog[data-v-a0ff3cde]{position:relative}.content-image[data-v-a0ff3cde],.images[data-v-a0ff3cde]{align-items:center;display:flex;justify-content:center;width:100%}.images[data-v-a0ff3cde]{height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}.text-tittle[data-v-a0ff3cde]{grid-gap:0;display:grid;font:inherit;font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-day[data-v-a0ff3cde],.txt-month[data-v-a0ff3cde]{color:#333;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font-weight:600}.txt-day[data-v-a0ff3cde],.txt-month[data-v-a0ff3cde]{font-weight:600}.txt-month[data-v-a0ff3cde]{letter-spacing:.3px;text-transform:uppercase}.content-info-blog[data-v-a0ff3cde]{align-items:center;border-color:#efefef;border-left-width:1px;border-right-width:1px;padding:20px}.cont-tittle[data-v-a0ff3cde],.content-info-blog[data-v-a0ff3cde]{display:flex;flex-direction:column;justify-content:center;width:100%}.cont-tittle[data-v-a0ff3cde]{align-items:flex-start}.cont-article[data-v-a0ff3cde],.cont-autor[data-v-a0ff3cde]{margin-top:15px}.cont-article[data-v-a0ff3cde],.cont-autor[data-v-a0ff3cde],.cont-date[data-v-a0ff3cde]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.cont-date[data-v-a0ff3cde]{border-color:#efefef;border-width:1px}.cont-day[data-v-a0ff3cde]{align-items:center;border-color:#efefef;border-right-width:1px;height:60px;width:70px}.cont-day[data-v-a0ff3cde],.cont-month-year[data-v-a0ff3cde]{display:flex;justify-content:center}.cont-month-year[data-v-a0ff3cde]{align-items:flex-start;flex-direction:column;padding-left:20px;width:100%}.text-tittle[data-v-a0ff3cde],.txt-article[data-v-a0ff3cde],.txt-autor[data-v-a0ff3cde],.txt-dates[data-v-a0ff3cde],.txt-day[data-v-a0ff3cde],.txt-day-create[data-v-a0ff3cde],.txt-month[data-v-a0ff3cde],.txt-tittle[data-v-a0ff3cde]{font-family:\"Poppins\",Helvetica,Arial,sans-serif!important}@media (min-width:300px){.txt-day[data-v-a0ff3cde]{font-size:15px}.txt-month[data-v-a0ff3cde]{font-size:10px}.overlay-top[data-v-a0ff3cde]{--tw-bg-opacity:1;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:45px;left:10px;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:10px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:40px}.txt-tittle[data-v-a0ff3cde]{color:#222;font-size:14px;font-weight:600}.txt-tittle[data-v-a0ff3cde],.txt-tittle[data-v-a0ff3cde]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-tittle[data-v-a0ff3cde]:hover{color:#eb7025}.txt-autor[data-v-a0ff3cde]{color:#222;font-size:12px}.txt-article[data-v-a0ff3cde]{color:#666;font-size:14px;font-weight:300;line-height:20px}.txt-day-create[data-v-a0ff3cde]{color:#eb7025;font-size:33px;font-weight:700}.txt-dates[data-v-a0ff3cde]{color:#666;font-size:12px;text-transform:uppercase}}@media (min-width:768px){.txt-day[data-v-a0ff3cde]{font-size:22px}.txt-month[data-v-a0ff3cde]{font-size:14px}.overlay-top[data-v-a0ff3cde]{height:65px;left:10px;right:0;top:10px;width:60px}}@media (min-width:1024px){.overlay-top[data-v-a0ff3cde]{height:65px;left:10px;right:0;top:10px;width:60px}}@media (min-width:1280px){.txt-day[data-v-a0ff3cde]{font-size:25px}.txt-tituloart[data-v-a0ff3cde]{font-size:36px;letter-spacing:-1px;line-height:1}.overlay-top[data-v-a0ff3cde]{height:75px;left:10px;right:0;top:10px;width:70px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_2a35cf3e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(335);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_2a35cf3e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_2a35cf3e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_2a35cf3e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_2a35cf3e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-blog[data-v-2a35cf3e]{background:#fff;width:100%}.content-art-blog[data-v-2a35cf3e],.content-blog[data-v-2a35cf3e]{align-items:center;display:flex;flex-direction:column;justify-content:center}.contenedor[data-v-2a35cf3e]{justify-content:flex-start;margin-top:30px}.contenedor[data-v-2a35cf3e],.content-item-productos[data-v-2a35cf3e]{align-items:center;display:flex;width:100%}.content-item-productos[data-v-2a35cf3e]{flex-direction:column}.content-item-productos[data-v-2a35cf3e],.grid-products[data-v-2a35cf3e]{justify-content:center}.grid-products[data-v-2a35cf3e]{grid-gap:1rem;align-items:center;box-sizing:border-box;display:grid;gap:1rem;margin-bottom:40px}.pagination-medium[data-v-2a35cf3e]{background:transparent;margin-top:10px}.pagination[data-v-2a35cf3e]{background:transparent;color:var(--color_text);font-size:18px}.product_pagination[data-v-2a35cf3e] .el-pagination.is-background .btn-next,.product_pagination[data-v-2a35cf3e] .el-pagination.is-background .btn-prev,.product_pagination[data-v-2a35cf3e] .el-pagination.is-background .el-pager li{background-color:transparent;color:var(--color_text)}.product_pagination[data-v-2a35cf3e] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-2a35cf3e] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-2a35cf3e] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--btnhover)}.product_pagination[data-v-2a35cf3e] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--color_icon);color:#fff}.txt-banner[data-v-2a35cf3e]{color:#222;font-family:\"Poppins\"!important;font-weight:600}.tittle-banner-blog[data-v-2a35cf3e]{align-items:center;flex-direction:column}.banner-blog[data-v-2a35cf3e],.tittle-banner-blog[data-v-2a35cf3e]{display:flex;justify-content:center;width:100%}.banner-blog[data-v-2a35cf3e]{align-items:flex-start;flex-direction:row;padding-top:8px;z-index:10}#separator[data-v-2a35cf3e]{margin-left:20px}.title[data-v-2a35cf3e]{color:#2c2930;font-family:\"Poppins\"!important;font-size:25px;font-weight:700;margin-bottom:20px}.crumb[data-v-2a35cf3e]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separatorCrumb[data-v-2a35cf3e]{color:#222;cursor:pointer;font-size:9px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.separatorCrumb[data-v-2a35cf3e],.txt-crumb[data-v-2a35cf3e]{font-family:\"Poppins\",Helvetica,Arial,sans-serif!important}.txt-crumb[data-v-2a35cf3e]{color:#222;cursor:pointer;font-size:15px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.s1[data-v-2a35cf3e]:hover,.s2[data-v-2a35cf3e]:hover{color:#eb7025;transition:all .25s ease}.input-text[data-v-2a35cf3e]{margin-top:8px}@media (min-width:300px){.bannerBlog[data-v-2a35cf3e]{display:none}.content-art-blog[data-v-2a35cf3e]{margin-top:140px;width:90%}.tittle-banner-blog[data-v-2a35cf3e]{align-items:flex-start;display:flex;justify-content:space-between}.grid-products[data-v-2a35cf3e]{gap:2rem;grid-template-columns:repeat(1,minmax(0,1fr));width:100%}.content-products[data-v-2a35cf3e],.content-products[data-v-2a35cf3e]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-products[data-v-2a35cf3e]:hover{box-shadow:0 6px 15px 6px #bfbfbf;width:100%}.txt-banner[data-v-2a35cf3e]{font-size:30px}#separator[data-v-2a35cf3e]{margin-left:10px}.title[data-v-2a35cf3e]{display:none}.crumb[data-v-2a35cf3e]{align-items:center;justify-content:center}}@media (min-width:768px){.grid-products[data-v-2a35cf3e]{align-items:flex-start;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:flex-start}.bannerBlog[data-v-2a35cf3e]{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:cover;display:flex;justify-items:center;padding-bottom:30px;padding-top:30px;width:100%}#separator[data-v-2a35cf3e]{margin-left:10px}}@media (min-width:1024px){.grid-products[data-v-2a35cf3e]{gap:1rem;grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1280px){.content-art-blog[data-v-2a35cf3e]{margin-top:0}.grid-products[data-v-2a35cf3e]{gap:2rem;width:100%}#separator[data-v-2a35cf3e]{margin-left:20px}}@media (min-width:1400px){.content-art-blog[data-v-2a35cf3e]{max-width:1400px;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/blog_page/Ko-Blog.vue?vue&type=template&id=2a35cf3e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-blog"
  }, [_vm._ssrNode("<div class=\"bannerBlog\" data-v-2a35cf3e>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-2a35cf3e>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-2a35cf3e>/</p> <p class=\"txt-crumb s2\" data-v-2a35cf3e>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('header_blog')) + "\n      ") + "</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-art-blog\" data-v-2a35cf3e>", "</div>", [_vm._ssrNode("<div class=\"banner-blog\" data-v-2a35cf3e><div class=\"tittle-banner-blog\" data-v-2a35cf3e><p class=\"txt-banner\" data-v-2a35cf3e>Últimos blogs</p></div> <input type=\"search\"" + _vm._ssrAttr("placeholder", _vm.$t('header_search')) + _vm._ssrAttr("value", _vm.search) + " data-v-2a35cf3e></div> "), _vm._ssrNode("<div class=\"contenedor\" data-v-2a35cf3e>", "</div>", [_vm._ssrNode("<div class=\"content-item w-full\" data-v-2a35cf3e>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-2a35cf3e>", "</div>", [_vm._ssrNode("<div class=\"grid-products\" data-v-2a35cf3e>", "</div>", _vm._l(_vm.filteredList, function (article) {
    return _vm._ssrNode("<div class=\"content-products\" data-v-2a35cf3e>", "</div>", [_c('KoblogCard', {
      attrs: {
        "article": article
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm.filteredList.length == 0 ? _vm._ssrNode("<div class=\"content-products-empty\" data-v-2a35cf3e>", "</div>", [_vm._ssrNode("<div class=\"header-content-logo\" data-v-2a35cf3e>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "header-logo",
    attrs: {
      "src": `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      "alt": "Logo Img"
    }
  })])], 1), _vm._ssrNode(" <p class=\"txt-products-empty\" data-v-2a35cf3e>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-2a35cf3e>", "</div>", [_vm.filteredList.length > 12 ? _vm._ssrNode("<div class=\"product_pagination\" data-v-2a35cf3e>", "</div>", [_c('el-pagination', {
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
  })], 1) : _vm._e()])], 2)])])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/blog_page/Ko-Blog.vue?vue&type=template&id=2a35cf3e&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/blog_page/_blogcard/ko-blogcard.vue?vue&type=template&id=a0ff3cde&scoped=true&
var ko_blogcardvue_type_template_id_a0ff3cde_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-blog"
  }, [_vm._ssrNode("<div class=\"content-items-blog\" data-v-a0ff3cde>", "</div>", [_vm._ssrNode("<div class=\"content-imge\" data-v-a0ff3cde>", "</div>", [_vm.article.imagen_principal_url ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(this.article.imagen_principal_url, 550, 550),
      expression: "idCloudinary(this.article.imagen_principal_url, 550, 550)"
    }],
    staticClass: "images",
    attrs: {
      "alt": "right-banner"
    }
  }, []) : _vm._e()]), _vm._ssrNode(" <div class=\"overlay-top\" data-v-a0ff3cde><div class=\"text-tittle\" data-v-a0ff3cde><p class=\"txt-day\" data-v-a0ff3cde>" + _vm._ssrEscape("\n          " + _vm._s(this.dayCreate) + "\n        ") + "</p> <p class=\"txt-month\" data-v-a0ff3cde>" + _vm._ssrEscape("\n          " + _vm._s(this.nameMonth) + "\n        ") + "</p></div></div> "), _c('nuxt-link', {
    staticClass: "content-info-blog",
    attrs: {
      "to": {
        path: `/blog/` + _vm.article.slug,
        query: {
          idBlog: _vm.article.id
        }
      }
    }
  }, [_c('div', {
    staticClass: "cont-tittle"
  }, [_c('p', {
    staticClass: "txt-tittle"
  }, [_vm._v(_vm._s(this.article.titulo))])]), _vm._v(" "), _c('div', {
    staticClass: "cont-autor"
  }, [_c('span', {
    staticClass: "flex-shrink-0 mx-1"
  }, [_c('img', {
    staticClass: "h-15 w-15 rounded-full mr-5",
    attrs: {
      "src": `${this.$store.state.urlKomercia}/users/user.jpg`,
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "txt-autor"
  }, [_vm._v(_vm._s(this.article.autor))])]), _vm._v(" "), _c('div', {
    staticClass: "cont-article"
  }, [_c('p', {
    staticClass: "txt-article"
  }, [_vm._v(_vm._s(this.article.resumen))])])]), _vm._ssrNode(" <div class=\"cont-date\" data-v-a0ff3cde><div class=\"cont-day\" data-v-a0ff3cde><p class=\"txt-day-create\" data-v-a0ff3cde>" + _vm._ssrEscape("\n          " + _vm._s(this.dayCreate) + "\n        ") + "</p></div> <div class=\"cont-month-year\" data-v-a0ff3cde><p class=\"txt-dates\" data-v-a0ff3cde>" + _vm._ssrEscape("\n          " + _vm._s(this.nameMonth) + "\n        ") + "</p> <p class=\"txt-dates\" data-v-a0ff3cde>" + _vm._ssrEscape("\n          " + _vm._s(this.yearCreate) + "\n        ") + "</p></div></div>")], 2)]);
};
var ko_blogcardvue_type_template_id_a0ff3cde_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/blog_page/_blogcard/ko-blogcard.vue?vue&type=template&id=a0ff3cde&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/blog_page/_blogcard/ko-blogcard.vue?vue&type=script&lang=js&

/* harmony default export */ var ko_blogcardvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-Blogcard',
  props: {
    article: Object
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
      nameMonth: '',
      dayCreate: '',
      monthCreate: '',
      yearCreate: ''
    };
  }
});
// CONCATENATED MODULE: ./components/template10/blog_page/_blogcard/ko-blogcard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _blogcard_ko_blogcardvue_type_script_lang_js_ = (ko_blogcardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/blog_page/_blogcard/ko-blogcard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(637)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _blogcard_ko_blogcardvue_type_script_lang_js_,
  ko_blogcardvue_type_template_id_a0ff3cde_scoped_true_render,
  ko_blogcardvue_type_template_id_a0ff3cde_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "a0ff3cde",
  "29491f05"
  
)

/* harmony default export */ var ko_blogcard = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/blog_page/Ko-Blog.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_Blogvue_type_script_lang_js_ = ({
  name: 'Ko-Blog',
  components: {
    KoblogCard: ko_blogcard
  },
  props: {
    dataStore: Object
  },
  data() {
    return {
      currentPage: 1,
      search: ''
    };
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos;
    },
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
// CONCATENATED MODULE: ./components/template10/blog_page/Ko-Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_page_Ko_Blogvue_type_script_lang_js_ = (Ko_Blogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template10/blog_page/Ko-Blog.vue



function Ko_Blog_injectStyles (context) {
  
  var style0 = __webpack_require__(639)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko_Blog_component = Object(componentNormalizer["a" /* default */])(
  blog_page_Ko_Blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Ko_Blog_injectStyles,
  "2a35cf3e",
  "7a5a6200"
  
)

/* harmony default export */ var Ko_Blog = __webpack_exports__["default"] = (Ko_Blog_component.exports);

/***/ })

};;
//# sourceMappingURL=101.js.map