exports.ids = [122];
exports.modules = {

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(738);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1f4bf888", content, true, context)
};

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_offersProduct_vue_vue_type_style_index_0_id_a7a65492_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_offersProduct_vue_vue_type_style_index_0_id_a7a65492_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_offersProduct_vue_vue_type_style_index_0_id_a7a65492_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_offersProduct_vue_vue_type_style_index_0_id_a7a65492_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_offersProduct_vue_vue_type_style_index_0_id_a7a65492_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_border:hover .border-hover[data-v-a7a65492]{-webkit-transition:all .6s ease 0s;width:120px}.wrapper-img[data-v-a7a65492]{cursor:pointer;display:flex;height:auto;justify-content:flex-start;width:100%}.wrapper-img[data-v-a7a65492],.wrapper_border:hover .effect-img[data-v-a7a65492]{overflow:hidden;position:relative;-webkit-transition:all .6s ease 0s}.wrapper_border:hover .effect-img[data-v-a7a65492]{transform:scale(1.1)}.border-hover[data-v-a7a65492],.effect-img[data-v-a7a65492]{-webkit-transition:all .6s ease 0s}.border-hover[data-v-a7a65492]{width:80px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-offersProduct.vue?vue&type=template&id=a7a65492&scoped=true&
var render = function render() {
  var _vm$offersProduct$url, _vm$offersProduct;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex justify-center items-center py-15 lg:py-20 px-10 md:px-0",
    style: `background-color: ${_vm.offersProduct['--background_color_1']}`
  }, [_vm._ssrNode("<a" + _vm._ssrAttr("href", (_vm$offersProduct$url = (_vm$offersProduct = _vm.offersProduct) === null || _vm$offersProduct === void 0 ? void 0 : _vm$offersProduct.url_redirect) !== null && _vm$offersProduct$url !== void 0 ? _vm$offersProduct$url : '') + " class=\"w-full max-w-7xl flex items-center justify-center border wrapper_border cursor-pointer\"" + _vm._ssrStyle(null, `border-color: ${_vm.offersProduct.color_border_component}; background-color: ${_vm.offersProduct['--background_color_2']}`, null) + " data-v-a7a65492>", "</a>", [_vm._ssrNode("<div class=\"w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center\" data-v-a7a65492>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-col justify-center items-start py-30 md:py-40 pl-20 md:pl-80 pr-20 md:pr-0\" data-v-a7a65492><p class=\"font-bold text-30 mb-10\"" + _vm._ssrStyle(null, `color: ${_vm.offersProduct.color_title}; font-size: ${_vm.offersProduct.fontSizeTitle}; font-weight: ${_vm.offersProduct.fontWeighTitle};`, null) + " data-v-a7a65492>\n          LEGACY WOODEN SOFA\n        </p> <div class=\"border h-2 my-10 md:my-15 border-hover\"" + _vm._ssrStyle(null, `border-color: ${_vm.offersProduct.color_border};`, null) + " data-v-a7a65492></div> <p class=\"mt-10 md:mt-50\"" + _vm._ssrStyle(null, `color: ${_vm.offersProduct.price}; font-size: ${_vm.offersProduct.fontSizePrice}; font-weight: ${_vm.offersProduct.fontWeighTitle};`, null) + " data-v-a7a65492>\n          $1,599\n          <span" + _vm._ssrStyle(null, `color: ${_vm.offersProduct.price_descount}; font-size: ${_vm.offersProduct.fontSizePriceDescount}; font-weight: ${_vm.offersProduct.fontWeighPriceDescount};`, null) + " data-v-a7a65492>\n            $1.199\n          </span></p></div> "), _vm._ssrNode("<div class=\"wrapper-img\" data-v-a7a65492>", "</div>", [_vm._ssrNode("<picture data-v-a7a65492>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.offersProduct.img_res, 'bannerRes', 800)) + " data-v-a7a65492> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.offersProduct.img, 'banner')) + " data-v-a7a65492> "), _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.offersProduct.img,
      expression: "offersProduct.img"
    }],
    staticClass: "w-full effect-img",
    attrs: {
      "alt": "offersProduct template14"
    }
  }, [])], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/ko14-offersProduct.vue?vue&type=template&id=a7a65492&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-offersProduct.vue?vue&type=script&lang=js&

/* harmony default export */ var ko14_offersProductvue_type_script_lang_js_ = ({
  name: 'Ko14-offersProduct',
  props: {
    offersProduct: Object,
    settingGeneral: Object,
    dataStore: Object
  },
  mixins: [idCloudinary["a" /* default */]]
});
// CONCATENATED MODULE: ./components/template14/ko14-offersProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var template14_ko14_offersProductvue_type_script_lang_js_ = (ko14_offersProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/ko14-offersProduct.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(737)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template14_ko14_offersProductvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a7a65492",
  "3d264ef9"
  
)

/* harmony default export */ var ko14_offersProduct = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=122.js.map