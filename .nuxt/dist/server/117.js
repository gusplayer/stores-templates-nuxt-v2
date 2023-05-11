exports.ids = [117];
exports.modules = {

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c97f3818", content, true, context)
};

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_BannerFooter_1_vue_vue_type_style_index_0_id_b5e62e88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_BannerFooter_1_vue_vue_type_style_index_0_id_b5e62e88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_BannerFooter_1_vue_vue_type_style_index_0_id_b5e62e88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_BannerFooter_1_vue_vue_type_style_index_0_id_b5e62e88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_BannerFooter_1_vue_vue_type_style_index_0_id_b5e62e88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-banner[data-v-b5e62e88]{background:var(--background_color_2)}.header-content-logo[data-v-b5e62e88],.wrapper-banner[data-v-b5e62e88]{align-items:center;display:flex;justify-content:center}.banner[data-v-b5e62e88],.header-content-logo[data-v-b5e62e88],.wrapper-banner[data-v-b5e62e88]{width:100%}.banner[data-v-b5e62e88]{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/ko-BannerFooter-1.vue?vue&type=template&id=b5e62e88&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-banner"
  }, [this.banner ? _vm._ssrNode("<div class=\"header-content-logo\" data-v-b5e62e88>", "</div>", [this.banner.banner_footer ? _vm._ssrNode("<div class=\"wrapper-banner\" data-v-b5e62e88>", "</div>", [_c('client-only', [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryBanner(this.banner.banner_footer),
      expression: "idCloudinaryBanner(this.banner.banner_footer)"
    }],
    staticClass: "banner",
    attrs: {
      "loading": "lazy",
      "alt": "Banner tienda"
    }
  })])], 1) : _vm._e()]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/ko-BannerFooter-1.vue?vue&type=template&id=b5e62e88&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/ko-BannerFooter-1.vue?vue&type=script&lang=js&
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


/* harmony default export */ var ko_BannerFooter_1vue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-BannerFooter-1',
  computed: {
    banner() {
      return this.$store.state.settingByTemplate;
    }
  }
});
// CONCATENATED MODULE: ./components/template5/ko-BannerFooter-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var template5_ko_BannerFooter_1vue_type_script_lang_js_ = (ko_BannerFooter_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/ko-BannerFooter-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(241)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template5_ko_BannerFooter_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b5e62e88",
  "2f15abca"
  
)

/* harmony default export */ var ko_BannerFooter_1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=117.js.map