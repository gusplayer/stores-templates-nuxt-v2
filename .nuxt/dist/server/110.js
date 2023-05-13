exports.ids = [110];
exports.modules = {

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(709);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("ee5a5728", content, true, context)
};

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_infoText_vue_vue_type_style_index_0_id_93ec20b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_infoText_vue_vue_type_style_index_0_id_93ec20b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_infoText_vue_vue_type_style_index_0_id_93ec20b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_infoText_vue_vue_type_style_index_0_id_93ec20b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_infoText_vue_vue_type_style_index_0_id_93ec20b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-section[data-v-93ec20b2]{background-color:var(--background_color_1);flex-direction:column;padding-bottom:var(--padding);padding-top:var(--padding)}.content-section[data-v-93ec20b2],.content-wrapper[data-v-93ec20b2]{align-items:center;display:flex;justify-content:center;width:100%}.content-wrapper[data-v-93ec20b2]{max-width:1300px;padding-left:20px;padding-right:20px}.setting_text[data-v-93ec20b2]{color:var(--colorText);font-size:var(--fontSizeTitle);font-weight:var(--fontWeighTitle)}@media (max-width:600px){.content-wrapper[data-v-93ec20b2]{padding-left:10px;padding-right:10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko-infoText.vue?vue&type=template&id=93ec20b2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.infoText ? _c('div', {
    staticClass: "content-section",
    style: [_vm.infoText, _vm.settingGeneral]
  }, [_vm._ssrNode("<div class=\"content-wrapper\" data-v-93ec20b2><p class=\"setting_text\"" + _vm._ssrStyle(null, `text-align: ${_vm.infoText.justingText};`, null) + " data-v-93ec20b2>" + _vm._ssrEscape("\n      " + _vm._s(_vm.infoText.text) + "\n    ") + "</p></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/Ko-infoText.vue?vue&type=template&id=93ec20b2&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko-infoText.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_infoTextvue_type_script_lang_js_ = ({
  name: 'Ko13-infoTexto',
  props: {
    settingGeneral: Object,
    infoText: Object
  },
  data() {
    return {
      infoText2: {
        '--colorText': '#B2A366'
      }
    };
  }
});
// CONCATENATED MODULE: ./components/template13/Ko-infoText.vue?vue&type=script&lang=js&
 /* harmony default export */ var template13_Ko_infoTextvue_type_script_lang_js_ = (Ko_infoTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template13/Ko-infoText.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(708)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template13_Ko_infoTextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "93ec20b2",
  "aa7c507e"
  
)

/* harmony default export */ var Ko_infoText = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=110.js.map