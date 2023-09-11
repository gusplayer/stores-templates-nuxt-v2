exports.ids = [57];
exports.modules = {

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(689);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("398ce7b0", content, true, context)
};

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(691);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7ece468e", content, true, context)
};

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_e64cd65a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(348);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_e64cd65a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_e64cd65a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_e64cd65a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_e64cd65a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".producto[data-v-e64cd65a]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.container[data-v-e64cd65a]{background:var(--CardBg);position:relative}.content-imge[data-v-e64cd65a]{cursor:pointer;display:flex;height:auto;justify-content:flex-start;position:relative;transition-duration:.15s;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-imge[data-v-e64cd65a],.images[data-v-e64cd65a]{overflow:hidden;transition-property:all;width:100%}.images[data-v-e64cd65a]{-o-object-fit:cover;object-fit:cover;transition-duration:.15s;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.container:hover .images[data-v-e64cd65a]{overflow:hidden;position:relative;transform:rotate(2deg) scale(1.1);transition-duration:.15s;transition-duration:.5s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.empty[data-v-e64cd65a]{background:#ccc;height:100%;width:100%}.text-tittle[data-v-e64cd65a]{grid-gap:0;display:grid;font:inherit;font-family:var(--font-style-1);font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-day[data-v-e64cd65a],.txt-month[data-v-e64cd65a]{color:var(--ColorBg_Date2);font-family:var(--font-style-1);font-weight:600}.txt-day[data-v-e64cd65a],.txt-month[data-v-e64cd65a]{font-weight:600}.txt-month[data-v-e64cd65a]{letter-spacing:.3px;text-transform:uppercase}.content-abstract-article[data-v-e64cd65a],.content-tittle-article[data-v-e64cd65a],.content-txt-article[data-v-e64cd65a]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.content-date-aticle[data-v-e64cd65a]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.txt-article-create[data-v-e64cd65a],.txt-article-day[data-v-e64cd65a],.txt-article-month[data-v-e64cd65a]{color:var(--ColorText_Date);font-family:var(--font-style-1)}.txt-article-abstract[data-v-e64cd65a]{color:var(--CardDescription);font-family:var(--font-style-1)}.content-button-article[data-v-e64cd65a]{height:50px}.btn[data-v-e64cd65a]{box-shadow:inset 0 -50px 0 -41px var(--color_border);color:var(--colorTextBTn);cursor:pointer;display:flex;flex-direction:column;font-family:var(--font-style-1);font-weight:600;padding-left:10px;padding-right:10px;text-align:center;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:auto}.btn[data-v-e64cd65a]:hover{box-shadow:inset 0 -50px 0 0 #eb7025;color:#fff;padding:10px}@media (min-width:300px){.container[data-v-e64cd65a]{max-width:100%}.empty[data-v-e64cd65a],.images[data-v-e64cd65a]{height:167px}.txt-day[data-v-e64cd65a]{font-size:15px}.txt-month[data-v-e64cd65a]{font-size:10px}.overlay-top[data-v-e64cd65a]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:var(--ColorBg_Date);border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:45px;left:10px;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:10px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:40px}.txt-article-tittle[data-v-e64cd65a]{align-items:flex-start;color:var(--CardTitle);cursor:pointer;display:flex;font-family:var(--font-style-1);font-size:20px;font-weight:600;justify-content:flex-start;letter-spacing:.2px;margin-bottom:15px;margin-top:20px;text-align:left;transition-duration:.15s;transition-duration:.5s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-article-tittle[data-v-e64cd65a]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-article-create[data-v-e64cd65a],.txt-article-day[data-v-e64cd65a],.txt-article-month[data-v-e64cd65a]{font-size:12px;letter-spacing:.36px}.content-date-article[data-v-e64cd65a]{margin-bottom:15px}.content-border-article[data-v-e64cd65a]{background-color:var(--Card_border);height:1px;margin-bottom:15px;width:60px}.txt-article-abstract[data-v-e64cd65a]{font-size:15px;margin-bottom:15px;text-align:left}.btn[data-v-e64cd65a]{font-size:14px;line-height:24px}}@media (min-width:425px){.empty[data-v-e64cd65a],.images[data-v-e64cd65a]{height:272px}}@media (min-width:768px){.txt-day[data-v-e64cd65a]{font-size:22px}.txt-month[data-v-e64cd65a]{font-size:14px}.overlay-top[data-v-e64cd65a]{height:65px;left:10px;right:0;top:10px;width:60px}.empty[data-v-e64cd65a],.images[data-v-e64cd65a]{height:350px}}@media (min-width:1024px){.overlay-top[data-v-e64cd65a]{height:55px;left:10px;right:0;top:10px;width:50px}}@media (min-width:1280px){.txt-day[data-v-e64cd65a]{font-size:20px}}@media (min-width:1400px){.empty[data-v-e64cd65a],.images[data-v-e64cd65a]{height:298px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_blog_vue_vue_type_style_index_0_id_f1097e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(349);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_blog_vue_vue_type_style_index_0_id_f1097e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_blog_vue_vue_type_style_index_0_id_f1097e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_blog_vue_vue_type_style_index_0_id_f1097e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_blog_vue_vue_type_style_index_0_id_f1097e30_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-f1097e30]{align-items:center;background:var(--background_color_1);display:flex;font-size:18px;justify-content:center;text-align:center}.wrapper-content[data-v-f1097e30]{background-color:var(--background_color_1);padding-bottom:40px;padding-top:40px;width:100%}.product-text[data-v-f1097e30],.wrapper-content[data-v-f1097e30],.wrapper-items-content[data-v-f1097e30]{align-items:center;display:flex;flex-direction:column;justify-content:center}.product-text[data-v-f1097e30]{margin-bottom:30px;text-align:center;width:100%}.product-tittle[data-v-f1097e30]{align-items:center;display:flex;flex-direction:column;justify-content:center}.tittle[data-v-f1097e30]{align-items:center;display:flex;flex-direction:column;font-family:var(--font-style-1)!important;font-size:var(--font-size);font-weight:var(--font-weight);justify-content:center}.subtittle[data-v-f1097e30]{font-size:var(--font-size-d)}@media (min-width:300px){.wrapper-items[data-v-f1097e30],.wrapper-items-content[data-v-f1097e30]{width:90%}.tittle[data-v-f1097e30]{color:var(--color_title);margin-bottom:var(--marginbottomTitle)}.subtittle[data-v-f1097e30]{color:var(--color_description);font-weight:var(--font-weight-d);margin-bottom:var(--marginbottomDescription)}}@media (min-width:768px){.wrapper-items[data-v-f1097e30],.wrapper-items-content[data-v-f1097e30]{width:95%}}@media (min-width:1400px){.wrapper-items[data-v-f1097e30]{height:auto;max-width:1400px;width:100%}}@media (min-width:1920px){.product-tittle[data-v-f1097e30]{width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko10-blog.vue?vue&type=template&id=f1097e30&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-content",
    style: [_vm.settingGeneral, _vm.blog, {
      '--font-style-1': _vm.settingGeneral.fount_1 ? _vm.settingGeneral.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"wrapper-items-content\" data-v-f1097e30><div class=\"product-text\" data-v-f1097e30><div class=\"product-tittle\" data-v-f1097e30><p class=\"tittle\" data-v-f1097e30>" + _vm._ssrEscape(_vm._s(_vm.blog.title)) + "</p></div> <div class=\"product-subtittle\" data-v-f1097e30><p class=\"subtittle\" data-v-f1097e30>" + _vm._ssrEscape("\n          " + _vm._s(_vm.blog.description) + "\n        ") + "</p></div></div></div> "), _vm._ssrNode("<div class=\"wrapper-items\" data-v-f1097e30>", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-f1097e30>", "</div>", _vm._l(_vm.filteredList, function (article, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass(null, `swiper-slide wrapper-${index + 1}`) + " data-v-f1097e30>", "</div>", [_c('Kblog', {
      attrs: {
        "article": article,
        "blog": _vm.blog,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1);
  }), 0)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/Ko10-blog.vue?vue&type=template&id=f1097e30&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_blog/blogcard.vue?vue&type=template&id=e64cd65a&scoped=true&
var blogcardvue_type_template_id_e64cd65a_scoped_true_render = function render() {
  var _this$settingGeneral$, _this$settingGeneral;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto",
    style: [_vm.blog, _vm.settingGeneral, {
      '--font-style-1': (_this$settingGeneral$ = (_this$settingGeneral = this.settingGeneral) === null || _this$settingGeneral === void 0 ? void 0 : _this$settingGeneral.fount_1) !== null && _this$settingGeneral$ !== void 0 ? _this$settingGeneral$ : 'Roboto'
    }]
  }, [_c('nuxt-link', {
    staticClass: "container",
    attrs: {
      "to": {
        path: `/blog/` + _vm.article.slug,
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
    staticClass: "figure-img"
  }, [_c('div', {
    staticClass: "content-imge"
  }, [_vm.article.imagen_principal_url ? _c('img', {
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
  }) : _c('div', {
    staticClass: "empty"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "overlay-top"
  }, [_c('div', {
    staticClass: "text-tittle"
  }, [_c('p', {
    staticClass: "txt-day"
  }, [_vm._v("\n          " + _vm._s(this.dayCreate) + "\n        ")]), _vm._v(" "), _c('p', {
    staticClass: "txt-month"
  }, [_vm._v("\n          " + _vm._s(this.nameMonth) + "\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "content-txt-article"
  }, [_c('div', {
    staticClass: "content-tittle-article"
  }, [_c('span', {
    staticClass: "txt-article-tittle"
  }, [_vm._v("\n          " + _vm._s(this.article.titulo) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "content-date-article"
  }, [_c('span', {
    staticClass: "txt-article-day"
  }, [_vm._v(_vm._s(this.dayCreate))]), _vm._v(" "), _c('span', {
    staticClass: "txt-article-month"
  }, [_vm._v(_vm._s(this.nameMonth))]), _vm._v(" "), _c('span', {
    staticClass: "txt-article-create"
  }, [_vm._v(_vm._s(this.yearCreate))])]), _vm._v(" "), _c('div', {
    staticClass: "content-border-article"
  }), _vm._v(" "), _c('div', {
    staticClass: "content-abstract-article"
  }, [_c('span', {
    staticClass: "txt-article-abstract"
  }, [_vm._v("\n          " + _vm._s(this.article.resumen) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "content-button-article"
  }, [_c('button', {
    staticClass: "btn"
  }, [_vm._v("+ " + _vm._s(_vm.$t('home_leerMas')))])])])])], 1);
};
var blogcardvue_type_template_id_e64cd65a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/_blog/blogcard.vue?vue&type=template&id=e64cd65a&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_blog/blogcard.vue?vue&type=script&lang=js&

/* harmony default export */ var blogcardvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-Blogcard',
  props: {
    article: Object,
    blog: Object,
    settingGeneral: Object
  },
  mounted() {
    if (this.article.created_at) {
      const [shippingCreated] = this.article.created_at.split(' ');
      const [yearCreate, monthCreate, dayCreate] = shippingCreated.split('-');
      this.dayCreate = dayCreate;
      this.monthCreate = monthCreate;
      this.yearCreate = yearCreate;
    }
    this.nameMonth = this.monthNames[parseInt(this.monthCreate)];
  },
  data() {
    return {
      shippingCreated: '',
      dayCreate: '',
      monthCreate: '',
      yearCreate: '',
      nameMonth: '',
      monthNames: {
        1: 'Ene',
        2: 'Feb',
        3: 'Mar',
        4: 'Abr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Ago',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dic'
      }
    };
  }
});
// CONCATENATED MODULE: ./components/template10/_blog/blogcard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _blog_blogcardvue_type_script_lang_js_ = (blogcardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/_blog/blogcard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(688)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _blog_blogcardvue_type_script_lang_js_,
  blogcardvue_type_template_id_e64cd65a_scoped_true_render,
  blogcardvue_type_template_id_e64cd65a_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "e64cd65a",
  "3809f6ea"
  
)

/* harmony default export */ var blogcard = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko10-blog.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko10_blogvue_type_script_lang_js_ = ({
  name: 'Ko10-blog',
  components: {
    Kblog: blogcard
  },
  props: {
    blog: Object,
    dataStore: Object,
    settingGeneral: Object
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: '',
        spaceBetween: '',
        breakpoints: {
          10000: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          580: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
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
  },
  mounted() {
    this.mySwiper.slideTo(3, 1000, false);
  },
  watch: {}
});
// CONCATENATED MODULE: ./components/template10/Ko10-blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var template10_Ko10_blogvue_type_script_lang_js_ = (Ko10_blogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template10/Ko10-blog.vue



function Ko10_blog_injectStyles (context) {
  
  var style0 = __webpack_require__(690)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko10_blog_component = Object(componentNormalizer["a" /* default */])(
  template10_Ko10_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Ko10_blog_injectStyles,
  "f1097e30",
  "63c3df9e"
  
)

/* harmony default export */ var Ko10_blog = __webpack_exports__["default"] = (Ko10_blog_component.exports);

/***/ })

};;
//# sourceMappingURL=ko10-blog.js.map