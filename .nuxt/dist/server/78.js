exports.ids = [78];
exports.modules = {

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("63c174c8", content, true, context)
};

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_0bd106ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_0bd106ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_0bd106ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_0bd106ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_0bd106ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".producto[data-v-0bd106ed]{align-items:center;background-color:var(--CardBg);display:flex;flex-direction:column;justify-content:flex-start;width:100%}.container[data-v-0bd106ed]{position:relative}.content-imge[data-v-0bd106ed]{cursor:pointer;display:flex;height:auto;justify-content:flex-start;position:relative;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-imge[data-v-0bd106ed],.images[data-v-0bd106ed]{overflow:hidden;width:100%}.images[data-v-0bd106ed]{-o-object-fit:cover;object-fit:cover;-webkit-transition:all .5s ease 0s}.container:hover .images[data-v-0bd106ed]{overflow:hidden;position:relative;transform:scale(1.1);transition-duration:.15s;transition-duration:.5s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition:all .5s ease 0s}.empty[data-v-0bd106ed]{background:#ccc;height:100%;width:100%}.text-tittle[data-v-0bd106ed]{grid-gap:0;display:grid;font:inherit;font-family:var(--font-style-1);font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-day[data-v-0bd106ed],.txt-month[data-v-0bd106ed]{color:var(--ColorText_Date);font-family:var(--font-style-1);font-weight:600}.txt-day[data-v-0bd106ed],.txt-month[data-v-0bd106ed]{font-weight:600}.txt-month[data-v-0bd106ed]{letter-spacing:.3px;text-transform:uppercase}.content-abstract-article[data-v-0bd106ed],.content-tittle-article[data-v-0bd106ed],.content-txt-article[data-v-0bd106ed]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;padding:0 5px;width:100%}.content-date-aticle[data-v-0bd106ed]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.txt-article-abstract[data-v-0bd106ed]{color:var(--CardDescription);font-family:var(--font-style-1)}@media (min-width:300px){.container[data-v-0bd106ed]{max-width:100%}.empty[data-v-0bd106ed],.images[data-v-0bd106ed]{height:221px}.txt-day[data-v-0bd106ed]{font-size:15px}.txt-month[data-v-0bd106ed]{font-size:10px}.overlay-top[data-v-0bd106ed]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:var(--ColorBg_Date);border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);height:45px;left:10px;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:10px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:40px}.txt-article-tittle[data-v-0bd106ed]{align-items:flex-start;color:var(--CardTitle);cursor:pointer;display:flex;font-family:var(--font-style-1);font-size:14px;font-weight:500;justify-content:flex-start;letter-spacing:.3px;margin-bottom:15px;margin-top:20px;text-align:left;transition-duration:.15s;transition-duration:.5s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.container:hover .txt-article-tittle[data-v-0bd106ed]{color:var(--CardTitle);transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-article-create[data-v-0bd106ed],.txt-article-day[data-v-0bd106ed],.txt-article-month[data-v-0bd106ed]{font-size:12px;letter-spacing:.36px}.content-date-article[data-v-0bd106ed]{margin-bottom:15px}.content-border-article[data-v-0bd106ed]{background-color:#eee;height:1px;margin-bottom:15px;width:60px}.txt-article-abstract[data-v-0bd106ed]{font-size:12px;margin-bottom:15px;text-align:left}.btn[data-v-0bd106ed]{font-size:14px;line-height:24px}}@media (min-width:425px){.empty[data-v-0bd106ed],.images[data-v-0bd106ed]{height:272px}}@media (min-width:768px){.txt-day[data-v-0bd106ed]{font-size:22px}.txt-month[data-v-0bd106ed]{font-size:14px}.overlay-top[data-v-0bd106ed]{height:65px;left:10px;right:0;top:10px;width:60px}.txt-article-tittle[data-v-0bd106ed]{font-size:16px}.txt-article-abstract[data-v-0bd106ed]{font-size:14px}.empty[data-v-0bd106ed],.images[data-v-0bd106ed]{height:250px}}@media (min-width:1024px){.overlay-top[data-v-0bd106ed]{height:55px;left:10px;right:0;top:10px;width:50px}}@media (min-width:1280px){.txt-day[data-v-0bd106ed]{font-size:20px}}@media (min-width:1400px){.empty[data-v-0bd106ed],.images[data-v-0bd106ed]{height:298px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_blog/blogcard.vue?vue&type=template&id=0bd106ed&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto h-full",
    style: _vm.settingKblog
  }, [_vm._ssrNode("<div class=\"container\" data-v-0bd106ed>", "</div>", [_c('nuxt-link', {
    staticClass: "contet",
    attrs: {
      "to": {
        path: `/blog/` + _vm.article.slug,
        query: {
          idBlog: _vm.article.id
        }
      }
    }
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
  })])])]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "contet",
    attrs: {
      "to": {
        path: `/blog/` + _vm.article.slug,
        query: {
          idBlog: _vm.article.id
        }
      }
    }
  }, [_c('div', {
    staticClass: "overlay-top"
  }, [_c('div', {
    staticClass: "text-tittle"
  }, [_c('p', {
    staticClass: "txt-day"
  }, [_vm._v("\n            " + _vm._s(this.dayCreate) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "txt-month"
  }, [_vm._v("\n            " + _vm._s(this.nameMonth) + "\n          ")])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-txt-article\" data-v-0bd106ed>", "</div>", [_vm._ssrNode("<div class=\"content-tittle-article\" data-v-0bd106ed>", "</div>", [_c('nuxt-link', {
    staticClass: "contet",
    attrs: {
      "to": {
        path: `/blog/` + _vm.article.slug,
        query: {
          idBlog: _vm.article.id
        }
      }
    }
  }, [_c('p', {
    staticClass: "txt-article-tittle"
  }, [_vm._v("\n            " + _vm._s(this.article.titulo) + "\n          ")])])], 1), _vm._ssrNode(" <div class=\"content-abstract-article\" data-v-0bd106ed><p class=\"txt-article-abstract\" data-v-0bd106ed>" + _vm._ssrEscape("\n          " + _vm._s(this.article.resumen) + "\n        ") + "</p></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/_blog/blogcard.vue?vue&type=template&id=0bd106ed&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_blog/blogcard.vue?vue&type=script&lang=js&

/* harmony default export */ var blogcardvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-Blogcard',
  props: {
    article: Object,
    settingKblog: Object
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
// CONCATENATED MODULE: ./components/template11/_blog/blogcard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _blog_blogcardvue_type_script_lang_js_ = (blogcardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/_blog/blogcard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(251)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _blog_blogcardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0bd106ed",
  "eeb18412"
  
)

/* harmony default export */ var blogcard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(625);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5c87c521", content, true, context)
};

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_343988a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(343);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_343988a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_343988a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_343988a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_343988a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-blog[data-v-343988a6]{background:var(--background_color_1);width:100%}.content-art-blog[data-v-343988a6],.content-blog[data-v-343988a6]{align-items:center;display:flex;flex-direction:column;justify-content:center}.content-art-blog[data-v-343988a6]{z-index:0}.contenedor[data-v-343988a6]{margin-top:30px}.contenedor[data-v-343988a6],.content-item-productos[data-v-343988a6]{display:flex;flex-direction:column;width:100%}.contenedor[data-v-343988a6],.content-item-productos[data-v-343988a6],.grid-products[data-v-343988a6]{align-items:center;justify-content:center}.grid-products[data-v-343988a6]{grid-gap:1rem;box-sizing:border-box;display:grid;gap:1rem;margin-bottom:40px}.pagination-medium[data-v-343988a6]{background:transparent;margin-top:10px}.pagination[data-v-343988a6]{background:transparent;color:var(--color_text);font-size:18px}.product_pagination[data-v-343988a6] .el-pagination.is-background .btn-next,.product_pagination[data-v-343988a6] .el-pagination.is-background .btn-prev,.product_pagination[data-v-343988a6] .el-pagination.is-background .el-pager li{background-color:transparent;color:var(--color_text)}.product_pagination[data-v-343988a6] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-343988a6] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-343988a6] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--btnhover)}.product_pagination[data-v-343988a6] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--color_icon);color:#fff}.txt-banner[data-v-343988a6]{color:var(--color_title);font-family:var(--font-style-1)!important;font-weight:600}.tittle-banner-blog[data-v-343988a6]{align-items:center}.banner-blog[data-v-343988a6],.tittle-banner-blog[data-v-343988a6]{display:flex;flex-direction:column;justify-content:center;width:100%}.banner-blog[data-v-343988a6]{align-items:flex-start;padding-top:8px;z-index:10}.crumb[data-v-343988a6]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separatorCrumb[data-v-343988a6]{color:#222;cursor:pointer;font-size:9px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.separatorCrumb[data-v-343988a6],.txt-crumb[data-v-343988a6]{font-family:var(--font-style-1)!important}.txt-crumb[data-v-343988a6]{color:var(--color_title);cursor:pointer;font-size:15px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.s1[data-v-343988a6]:hover,.s2[data-v-343988a6]:hover{color:var(--color_title);transition:all .25s ease}@media (min-width:300px){.bannerBlog[data-v-343988a6]{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:cover;border-bottom-width:1px;display:flex;justify-items:center;max-width:1200px;padding-bottom:20px;padding-top:20px;width:100%}.content-art-blog[data-v-343988a6]{width:90%}.tittle-banner-blog[data-v-343988a6]{align-items:flex-start;justify-content:flex-start;margin-top:20px}.grid-products[data-v-343988a6]{gap:2rem;grid-template-columns:repeat(1,minmax(0,1fr));width:100%}.content-products[data-v-343988a6],.content-products[data-v-343988a6]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-products[data-v-343988a6]:hover{box-shadow:0 6px 15px 6px #bfbfbf;width:100%}.txt-banner[data-v-343988a6]{font-size:30px}.crumb[data-v-343988a6]{align-items:center;justify-content:center}}@media (min-width:768px){.grid-products[data-v-343988a6]{align-items:flex-start;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:flex-start}}@media (min-width:1024px){.grid-products[data-v-343988a6]{gap:1rem;grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1025px){.tittle-banner-blog[data-v-343988a6]{align-items:flex-start;justify-content:flex-start}}@media (min-width:1280px){.grid-products[data-v-343988a6]{gap:2rem;width:100%}.tittle-banner-blog[data-v-343988a6]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:auto}}@media (min-width:1200px){.content-art-blog[data-v-343988a6]{max-width:1200px;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/blog_page/Ko-Blog.vue?vue&type=template&id=343988a6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-blog",
    style: [_vm.settingByTemplate11[0].blog, _vm.settingByTemplate11[0].setting11General, {
      '--font-style-1': this.settingByTemplate11[0].setting11General && this.settingByTemplate11[0].setting11General.fount_1 ? this.settingByTemplate11[0].setting11General.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"bannerBlog\" data-v-343988a6>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-343988a6>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-343988a6>/</p> <p class=\"txt-crumb s2\" data-v-343988a6>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('header_blog')) + "\n      ") + "</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-art-blog\" data-v-343988a6>", "</div>", [_vm._ssrNode("<div class=\"banner-blog\" data-v-343988a6><div class=\"tittle-banner-blog\" data-v-343988a6><p class=\"txt-banner\" data-v-343988a6>Últimos blogs</p></div></div> "), _vm._ssrNode("<div class=\"contenedor\" data-v-343988a6>", "</div>", [_vm._ssrNode("<div class=\"content-item w-full\" data-v-343988a6>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-343988a6>", "</div>", [_vm._ssrNode("<div class=\"grid-products\" data-v-343988a6>", "</div>", _vm._l(_vm.filteredList, function (article) {
    return _vm._ssrNode("<div class=\"content-products\" data-v-343988a6>", "</div>", [_c('KoblogCard', {
      attrs: {
        "article": article,
        "settingKblog": _vm.settingByTemplate11[0].blog
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm.filteredList.length == 0 ? _vm._ssrNode("<div class=\"content-products-empty\" data-v-343988a6>", "</div>", [_vm._ssrNode("<div class=\"header-content-logo\" data-v-343988a6>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n                    `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n                  "
    }],
    staticClass: "header-logo",
    attrs: {
      "alt": "Logo Img"
    }
  })])], 1), _vm._ssrNode(" <p class=\"txt-products-empty\" data-v-343988a6>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-343988a6>", "</div>", [_vm.filteredList.length > 12 ? _vm._ssrNode("<div class=\"product_pagination\" data-v-343988a6>", "</div>", [_c('el-pagination', {
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

// CONCATENATED MODULE: ./components/template11/blog_page/Ko-Blog.vue?vue&type=template&id=343988a6&scoped=true&

// EXTERNAL MODULE: ./components/template11/_blog/blogcard.vue + 4 modules
var blogcard = __webpack_require__(261);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/blog_page/Ko-Blog.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_Blogvue_type_script_lang_js_ = ({
  name: 'Ko-Blog',
  components: {
    KoblogCard: blogcard["a" /* default */]
  },
  props: {
    dataStore: Object,
    settingByTemplate11: Array
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
// CONCATENATED MODULE: ./components/template11/blog_page/Ko-Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_page_Ko_Blogvue_type_script_lang_js_ = (Ko_Blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/blog_page/Ko-Blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(624)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_page_Ko_Blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "343988a6",
  "0d046841"
  
)

/* harmony default export */ var Ko_Blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=78.js.map