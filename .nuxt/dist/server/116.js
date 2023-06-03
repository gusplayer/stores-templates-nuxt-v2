exports.ids = [116];
exports.modules = {

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(720);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5f4c2ee6", content, true, context)
};

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_offers_vue_vue_type_style_index_0_id_3f718fbf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_offers_vue_vue_type_style_index_0_id_3f718fbf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_offers_vue_vue_type_style_index_0_id_3f718fbf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_offers_vue_vue_type_style_index_0_id_3f718fbf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_offers_vue_vue_type_style_index_0_id_3f718fbf_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-section[data-v-3f718fbf]{background:var(--background_color_1);display:flex;flex-direction:column;padding-bottom:40px;padding-top:40px;width:100%}.content-section[data-v-3f718fbf],.content-wrapper[data-v-3f718fbf]{align-items:center;justify-content:center}.wrapper-center[data-v-3f718fbf],.wrapper-left[data-v-3f718fbf],.wrapper-right[data-v-3f718fbf]{cursor:pointer;display:flex;height:auto;justify-content:flex-start;overflow:hidden;position:relative;-webkit-transition:all .6s ease 0s;width:100%}.img-center[data-v-3f718fbf],.img-left[data-v-3f718fbf],.img-right[data-v-3f718fbf]{-o-object-fit:cover;object-fit:cover;overflow:hidden;-webkit-transition:all .6s ease 0s;width:100%}.wrapper-center:hover .img-center[data-v-3f718fbf],.wrapper-left:hover .img-left[data-v-3f718fbf],.wrapper-right:hover .img-right[data-v-3f718fbf]{overflow:hidden;position:relative;transform:scale(1.1);-webkit-transition:all .6s ease 0s}.txt-content[data-v-3f718fbf]{display:flex;flex-direction:column;height:100%;padding:20px 20px 0;position:absolute;width:100%}@media (min-width:300px){.content-wrapper[data-v-3f718fbf]{grid-gap:1.5rem;display:grid;gap:1.5rem;grid-template-columns:repeat(1,minmax(0,1fr));width:90%}.txt-top[data-v-3f718fbf]{font-size:13px;font-weight:400;letter-spacing:1px}.txt-bottom[data-v-3f718fbf],.txt-top[data-v-3f718fbf]{font-family:var(--font-style-1);text-transform:uppercase}.txt-bottom[data-v-3f718fbf]{font-size:25px;font-weight:700}}@media (min-width:768px){.content-wrapper[data-v-3f718fbf]{grid-gap:1.5rem;display:grid;gap:1.5rem;grid-template-columns:repeat(3,minmax(0,1fr));width:95%}.txt-bottom[data-v-3f718fbf]{font-size:20px}}@media (min-width:1024px){.txt-bottom[data-v-3f718fbf]{font-size:25px}}@media (min-width:1400px){.content-wrapper[data-v-3f718fbf]{max-width:1200px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-offers.vue?vue&type=template&id=3f718fbf&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("offers")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/ko14-offers.vue?vue&type=template&id=3f718fbf&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-offers.vue?vue&type=script&lang=js&

/* harmony default export */ var ko14_offersvue_type_script_lang_js_ = ({
  name: 'Ko14-Offers',
  props: {
    offers: Object,
    settingGeneral: Object,
    dataStore: Object
  },
  mixins: [idCloudinary["a" /* default */]]
});
// CONCATENATED MODULE: ./components/template14/ko14-offers.vue?vue&type=script&lang=js&
 /* harmony default export */ var template14_ko14_offersvue_type_script_lang_js_ = (ko14_offersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/ko14-offers.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(719)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template14_ko14_offersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3f718fbf",
  "2eb72874"
  
)

/* harmony default export */ var ko14_offers = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=116.js.map