exports.ids = [130];
exports.modules = {

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/Ko9-wrapper.vue?vue&type=template&id=d2d3e67c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-content",
    style: [_vm.wrapper, _vm.settingGeneral]
  }, [_vm._ssrNode("<div" + _vm._ssrStyle(null, [{
    '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Poppins'
  }], null) + " data-v-d2d3e67c>", "</div>", [_vm._ssrNode("<div class=\"wrapper-items-content\" data-v-d2d3e67c><div class=\"product-text\" data-v-d2d3e67c><div class=\"product-tittle\" data-v-d2d3e67c><span class=\"tittle\" data-v-d2d3e67c>" + _vm._ssrEscape(_vm._s(_vm.wrapper.title)) + "</span></div></div></div> "), _vm._ssrNode("<div class=\"wrapper-items\" data-v-d2d3e67c>", "</div>", _vm._l(_vm.wrapper.values, function (imagen, index) {
    return _vm._ssrNode("<div class=\"grid-imgs\" data-v-d2d3e67c>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, imagen.url_redirect ? 'cursorPointer' : null) + " data-v-d2d3e67c>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinary(imagen.url_img, 850, 850),
        expression: "idCloudinary(imagen.url_img, 850, 850)"
      }],
      staticClass: "img-wrapp",
      attrs: {
        "alt": "wrapper-images"
      }
    }, [])])]);
  }), 0)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/Ko9-wrapper.vue?vue&type=template&id=d2d3e67c&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/Ko9-wrapper.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko9_wrappervue_type_script_lang_js_ = ({
  name: 'Ko-wrapper',
  mixins: [idCloudinary["a" /* default */]],
  props: {
    dataStore: Object,
    wrapper: Object,
    settingGeneral: Object
  },
  methods: {
    openURL(index) {
      if (this.wrapper.values[index].url_redirect) {
        window.open(`${this.wrapper.values[index].url_redirect}`, '_blank', 'noreferrer noopener');
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template9/Ko9-wrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var template9_Ko9_wrappervue_type_script_lang_js_ = (Ko9_wrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/Ko9-wrapper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(686)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template9_Ko9_wrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d2d3e67c",
  "1fe0e6d9"
  
)

/* harmony default export */ var Ko9_wrapper = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(687);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1b35736f", content, true, context)
};

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko9_wrapper_vue_vue_type_style_index_0_id_d2d3e67c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(347);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko9_wrapper_vue_vue_type_style_index_0_id_d2d3e67c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko9_wrapper_vue_vue_type_style_index_0_id_d2d3e67c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko9_wrapper_vue_vue_type_style_index_0_id_d2d3e67c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko9_wrapper_vue_vue_type_style_index_0_id_d2d3e67c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".img-wrapp[data-v-d2d3e67c]{transition:all .15s ease-in}.cursorPointer[data-v-d2d3e67c]{cursor:pointer}.img-wrapp[data-v-d2d3e67c]:hover{position:relative;transform:scale(.95);transition:all .15s ease-in}.wrapper-content[data-v-d2d3e67c]{background:var(--background_color_1);padding-bottom:20px;width:100%}.wrapper-content[data-v-d2d3e67c],.wrapper-items-content[data-v-d2d3e67c]{align-items:center;display:flex;flex-direction:column;justify-content:center}.wrapper-items-content[data-v-d2d3e67c]{width:100%}.wrapper-items[data-v-d2d3e67c]{align-items:center;justify-content:center}.product-text[data-v-d2d3e67c]{margin-bottom:60px;margin-top:60px;width:100%}.product-text[data-v-d2d3e67c],.product-tittle[data-v-d2d3e67c]{align-items:center;display:flex;flex-direction:column;justify-content:center}.product-tittle[data-v-d2d3e67c]{text-align:center}.tittle[data-v-d2d3e67c]{align-items:center;color:var(--color_title);display:flex;flex-direction:column;font-family:var(--font-style-1);font-weight:700;justify-content:center}@media (min-width:300px){.product-tittle[data-v-d2d3e67c]{width:100%}.tittle[data-v-d2d3e67c]{font-size:30px;letter-spacing:0;line-height:1.1}.wrapper-items[data-v-d2d3e67c]{grid-gap:.5rem;display:grid;gap:.5rem;grid-template-columns:repeat(2,minmax(0,1fr))}.img-wrapp[data-v-d2d3e67c]{width:100%}.wrapper-items[data-v-d2d3e67c]{width:96vw}}@media (min-width:640px){.wrapper-items[data-v-d2d3e67c]{grid-gap:.5rem;display:grid;gap:.5rem;grid-template-columns:repeat(3,minmax(0,1fr));width:98vw}.tittle[data-v-d2d3e67c]{font-size:36px;line-height:34px}.product-text[data-v-d2d3e67c]{margin-bottom:0;margin-top:0;padding-bottom:50px;padding-top:30px}}@media (min-width:1024px){.wrapper-items[data-v-d2d3e67c]{grid-gap:.5rem;display:grid;gap:.5rem;grid-template-columns:repeat(5,minmax(0,1fr))}.img-wrapp[data-v-d2d3e67c]{transition:all .15s ease-in;width:90vw}.wrapper-items[data-v-d2d3e67c]{width:99vw}}@media (min-width:1920px){.product-tittle[data-v-d2d3e67c]{width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=ko9-wrapper.js.map