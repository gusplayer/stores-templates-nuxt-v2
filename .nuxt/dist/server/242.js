exports.ids = [242];
exports.modules = {

/***/ 1180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/selectGroup.vue?vue&type=template&id=31d77afe&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-select"
  }, [_vm._ssrNode("<h4 class=\"title-input\" data-v-31d77afe>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</h4> "), _vm._ssrNode("<div class=\"select\" data-v-31d77afe>", "</div>", [_vm._ssrNode("<select name=\"format\"" + _vm._ssrStyle(null, _vm.value == -1 || !_vm.value ? 'color: #777' : '', null) + " data-v-31d77afe>", "</select>", [_vm._ssrNode("<option disabled=\"disabled\" data-v-31d77afe>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_seleccionarOpcion'))) + "</option> "), _vm._t("default")], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/_productdetails/selectGroup.vue?vue&type=template&id=31d77afe&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/selectGroup.vue?vue&type=script&lang=js&
/* harmony default export */ var selectGroupvue_type_script_lang_js_ = ({
  name: 'selectGroup-details',
  props: ['options', 'label', 'value', 'index', 'variantes'],
  mounted() {
    this.saveOption();
  },
  data() {
    return {};
  },
  methods: {
    updateValue() {
      this.$emit('input', this.$refs.format.value);
      if (this.$refs.format.value) {
        let variante = this.variantes[this.index].valores.filter(item => {
          return item.option == this.$refs.format.value;
        });
        this.$store.state.beforeCombination.splice(this.index, 1, variante[0].option);
      }
    },
    saveOption() {
      this.$store.state.beforeCombination.splice(this.index, 1, this.variantes[this.index].valores[0].option);
    }
  }
});
// CONCATENATED MODULE: ./components/template10/_productdetails/selectGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_selectGroupvue_type_script_lang_js_ = (selectGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/_productdetails/selectGroup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(922)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_selectGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "31d77afe",
  "5f2b90ab"
  
)

/* harmony default export */ var selectGroup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(923);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c45c7aae", content, true, context)
};

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_31d77afe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_31d77afe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_31d77afe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_31d77afe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_31d77afe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "select[data-v-31d77afe]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;background-image:none;border:0!important;box-shadow:none;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font-size:14px;font-weight:600;outline:0;transition:all .6s ease-in-out}select[data-v-31d77afe]::-ms-expand{display:none}.title-input[data-v-31d77afe]{color:#222;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font-size:14px;font-weight:600;text-transform:uppercase;transition:all .6s ease-in-out}.select[data-v-31d77afe]{background:#fff;border:2px solid #222;border-radius:var(--radius_btn);color:#222;display:flex;height:40px;overflow:hidden;position:relative;width:15em}select[data-v-31d77afe]{background-color:#fff;flex:1;font-size:1em;padding:0 .5em 0 1em}.select[data-v-31d77afe]:after,select[data-v-31d77afe]{color:#222;cursor:pointer}.select[data-v-31d77afe]:after{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"Dark Gray\"><path d=\"M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z\"/></svg>');padding:.4em 1em;pointer-events:none;position:absolute;right:0;top:0;transition:all .25s ease}option[data-v-31d77afe]{color:#222;font-size:14px;font-weight:400;transition:all .6s ease-in-out}option[data-v-31d77afe],option[data-v-31d77afe]:disabled{font-family:\"Poppins\",Helvetica,Arial,sans-serif!important}option[data-v-31d77afe]:disabled{background:#f8f8f8;color:#222;font-size:14px;font-weight:700;transition:all .6s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=242.js.map