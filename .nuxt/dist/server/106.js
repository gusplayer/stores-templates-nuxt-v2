exports.ids = [106];
exports.modules = {

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(682);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("20343f59", content, true, context)
};

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_parallax_vue_vue_type_style_index_0_id_e8f1040c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(373);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_parallax_vue_vue_type_style_index_0_id_e8f1040c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_parallax_vue_vue_type_style_index_0_id_e8f1040c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_parallax_vue_vue_type_style_index_0_id_e8f1040c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_parallax_vue_vue_type_style_index_0_id_e8f1040c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-bg[data-v-e8f1040c],.content-parallax[data-v-e8f1040c]{align-items:center;display:flex;flex-direction:column;justify-content:center;max-height:500px;width:100%}.content-bg[data-v-e8f1040c]{background-attachment:fixed;background-position:50% 73.2661%;background-repeat:no-repeat;background-size:cover}.content-btn[data-v-e8f1040c],.content-txt[data-v-e8f1040c]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.cursorPointer[data-v-e8f1040c]{cursor:pointer}@media (min-width:300px){.txt-top[data-v-e8f1040c]{color:var(--colorPretitle);font-size:14px;font-weight:var(--fontWeighPretitle);letter-spacing:1px}.txt-bottom[data-v-e8f1040c],.txt-top[data-v-e8f1040c]{font-family:var(--font-style-1);text-align:center}.txt-bottom[data-v-e8f1040c]{color:var(--colorTitle);font-size:20px;font-weight:var(--fontWeighTitle);letter-spacing:0;margin-bottom:34px}.btn[data-v-e8f1040c],.txt-bottom[data-v-e8f1040c]{text-transform:uppercase}.btn[data-v-e8f1040c]{background-color:var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);cursor:pointer;font-size:14px;font-weight:400;line-height:21px;padding:10px 15px}.btn[data-v-e8f1040c]:hover{background-color:var(--hover_Bg_btn);color:var(--hover_text_btn)}.separator[data-v-e8f1040c]{background:var(--color_border);height:1px;margin-bottom:10px;margin-top:10px;text-transform:uppercase;width:60px}.content-txt[data-v-e8f1040c]{padding:50px 10px}}@media (min-width:768px){.txt-top[data-v-e8f1040c]{font-size:var(--fontSizePretitle)}.txt-bottom[data-v-e8f1040c]{font-size:40px}.btn[data-v-e8f1040c]{font-size:14px;letter-spacing:.4px;padding:10px 15px}.content-txt[data-v-e8f1040c]{padding:121px}}@media (min-width:1024px){.txt-bottom[data-v-e8f1040c]{font-size:var(--fontSizeTitle)}.btn[data-v-e8f1040c]{font-size:14px;margin-top:var(--marginTopBtn)}.content-txt[data-v-e8f1040c]{padding:171px 10px}}@media (min-width:1200px){.content-txt[data-v-e8f1040c]{padding:236px}.txt-bottom[data-v-e8f1040c]{font-size:var(--fontSizeTitle)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-parallax.vue?vue&type=template&id=e8f1040c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-parallax",
    style: [_vm.settingKparallax, _vm.settingGeneral, {
      '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<a" + _vm._ssrAttr("href", `${_vm.settingKparallax.visbleBtn ? '' : _vm.settingKparallax.url_redirect}`) + " rel=\"noreferrer noopener\"" + _vm._ssrClass("content-bg", _vm.settingKparallax.visbleBtn ? '' : 'cursorPointer') + _vm._ssrStyle(null, `background-image: url(${_vm.idCloudinaryBanner(_vm.settingKparallax.url_img_background)});`, null) + " data-v-e8f1040c><div class=\"content-txt\" data-v-e8f1040c><p class=\"txt-top\" data-v-e8f1040c>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingKparallax.pretitle.replace(/ /g, ' ')) + "\n      ") + "</p> <div class=\"separator\" data-v-e8f1040c></div> <p class=\"txt-bottom\" data-v-e8f1040c>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingKparallax.title.replace(/ /g, ' ')) + "\n      ") + "</p> " + (_vm.settingKparallax.visbleBtn ? "<div class=\"content-btn\" data-v-e8f1040c><a" + _vm._ssrAttr("href", _vm.settingKparallax.url_redirect ? _vm.settingKparallax.url_redirect : '') + " rel=\"noreferrer noopener\" data-v-e8f1040c><button class=\"btn\" data-v-e8f1040c>" + _vm._ssrEscape(_vm._s(_vm.$t('home_comprarAhora'))) + "</button></a></div>" : "<!---->") + "</div></a>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/ko-parallax.vue?vue&type=template&id=e8f1040c&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-parallax.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ko_parallaxvue_type_script_lang_js_ = ({
  name: 'Ko-Parallax',
  props: {
    settingKparallax: Object,
    settingGeneral: Object
  },
  mixins: [idCloudinary["a" /* default */]]
});
// CONCATENATED MODULE: ./components/template11/ko-parallax.vue?vue&type=script&lang=js&
 /* harmony default export */ var template11_ko_parallaxvue_type_script_lang_js_ = (ko_parallaxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/ko-parallax.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(681)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template11_ko_parallaxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e8f1040c",
  "050eb086"
  
)

/* harmony default export */ var ko_parallax = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=106.js.map