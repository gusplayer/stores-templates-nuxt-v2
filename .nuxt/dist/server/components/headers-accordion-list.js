exports.ids = [224];
exports.modules = {

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(259);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("c6eb0db8", content, true, context)
};

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionList_vue_vue_type_style_index_0_id_6ee55808_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionList_vue_vue_type_style_index_0_id_6ee55808_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionList_vue_vue_type_style_index_0_id_6ee55808_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionList_vue_vue_type_style_index_0_id_6ee55808_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionList_vue_vue_type_style_index_0_id_6ee55808_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-6ee55808]{background:transparent;padding:5px 0;width:100%}.accordion[data-v-6ee55808]{cursor:pointer;margin:0}.accordion[data-v-6ee55808],.accordion-items[data-v-6ee55808]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;width:100%}.accordion-items[data-v-6ee55808]{padding-top:3px}.content[data-v-6ee55808]{align-items:flex-start;display:flex;flex-direction:column;margin-top:10px;padding-left:2px;width:100%}.icon[data-v-6ee55808]{color:var(--color_icon);font-size:24px;position:relative;top:-3px}.icon[data-v-6ee55808]:hover{color:var(--color_hover_text)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/_order1/_AccordionList.vue?vue&type=template&id=6ee55808&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper"
  }, [_vm._ssrNode("<div class=\"accordion\" data-v-6ee55808>", "</div>", [_vm._ssrNode("<div class=\"accordion-items\" data-v-6ee55808>", "</div>", [_vm._t("categorias"), _vm._ssrNode(" "), !_vm.show ? _c('Flechadown-icon', {
    staticClass: "icon"
  }) : _vm._e(), _vm._ssrNode(" "), _vm.show ? _c('FlechaUp-icon', {
    staticClass: "icon"
  }) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\"" + _vm._ssrStyle(null, null, {
    display: _vm.show ? '' : 'none'
  }) + " data-v-6ee55808>", "</div>", [_vm._t("subcategorias")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/headers/_order1/_AccordionList.vue?vue&type=template&id=6ee55808&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/_order1/_AccordionList.vue?vue&type=script&lang=js&
/* harmony default export */ var _AccordionListvue_type_script_lang_js_ = ({
  name: 'AccordionList-header',
  data: function () {
    return {
      show: false
    };
  },
  methods: {
    toggleItem: function () {
      this.show = !this.show;
    }
  }
});
// CONCATENATED MODULE: ./components/headers/_order1/_AccordionList.vue?vue&type=script&lang=js&
 /* harmony default export */ var _order1_AccordionListvue_type_script_lang_js_ = (_AccordionListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/headers/_order1/_AccordionList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(258)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _order1_AccordionListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6ee55808",
  "6358a02c"
  
)

/* harmony default export */ var _AccordionList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=headers-accordion-list.js.map