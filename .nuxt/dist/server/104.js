exports.ids = [104];
exports.modules = {

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(686);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7b46d9eb", content, true, context)
};

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_information_vue_vue_type_style_index_0_id_66be351a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(375);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_information_vue_vue_type_style_index_0_id_66be351a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_information_vue_vue_type_style_index_0_id_66be351a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_information_vue_vue_type_style_index_0_id_66be351a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_information_vue_vue_type_style_index_0_id_66be351a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-section[data-v-66be351a]{background:var(--background_color_1);display:flex;flex-direction:column;padding-bottom:40px;padding-top:60px;width:100%}.content-section[data-v-66be351a],.content-wrapper[data-v-66be351a]{align-items:center;justify-content:center}.wrapper-content-items[data-v-66be351a]{align-items:center;border:1px solid;display:flex;flex-direction:column;justify-content:flex-start;max-width:380px;padding:20px}.contentimg[data-v-66be351a]{max-height:60px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:60px}.text-title[data-v-66be351a]{font-size:16px;font-weight:500;letter-spacing:.3px;line-height:26px;margin-top:15px;text-align:center}.text-description[data-v-66be351a]{font-size:14px;font-weight:400;letter-spacing:.4px;line-height:21px;margin-top:10px;padding:0 10%;text-align:center}.btn[data-v-66be351a]{cursor:pointer;font-size:14px;letter-spacing:.3px;line-height:26px;margin-top:15px;-webkit-text-decoration:underline;text-decoration:underline;text-transform:uppercase}@media (max-width:600px){.wrapper-content-items[data-v-66be351a]{padding:10px 15px}}@media (min-width:300px){.content-wrapper[data-v-66be351a]{grid-gap:1.5rem;display:grid;gap:1.5rem;grid-template-columns:repeat(1,minmax(0,1fr));width:90%}.wrapper-content-items[data-v-66be351a]{height:100%;max-width:680px;width:100%}}@media (min-width:768px){.content-wrapper[data-v-66be351a]{grid-gap:1.5rem;display:grid;gap:1.5rem;grid-template-columns:repeat(3,minmax(0,1fr));width:95%}}@media (min-width:1200px){.content-wrapper[data-v-66be351a]{height:auto;max-width:1200px;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/information.vue?vue&type=template&id=66be351a&scoped=true&
=======
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/information.vue?vue&type=template&id=66be351a&scoped=true&
>>>>>>> 8fc64a3b0afecc12b7dc65aa7021e406232a9a48
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-section",
    style: [_vm.settingKinformation, _vm.settingGeneral]
  }, [_vm._ssrNode("<div class=\"content-wrapper\"" + _vm._ssrStyle(null, [{
    '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Roboto'
  }], null) + " data-v-66be351a>", "</div>", [_vm._ssrNode("<div class=\"wrapper-content-items\"" + _vm._ssrStyle(null, `border-color: ${_vm.settingKinformation.values[0].visibleBorder ? _vm.settingKinformation.values[0].colorBorder : _vm.none}; background:${_vm.settingKinformation.values[0].color_bg}; `, null) + " data-v-66be351a>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.settingKinformation.values[0].url_img_Top, 550, 550),
      expression: "\n          idCloudinary(settingKinformation.values[0].url_img_Top, 550, 550)\n        "
    }],
    staticClass: "contentimg",
    attrs: {
      "alt": "imgInfo1"
    }
  }, []), _vm._ssrNode(" <p class=\"text-title\"" + _vm._ssrStyle(null, `color: ${_vm.settingKinformation.values[0].colorTitle}; font-weight: ${_vm.settingKinformation.values[0].fontWeighTitle};`, null) + " data-v-66be351a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingKinformation.values[0].title) + "\n      ") + "</p> <p class=\"text-description\"" + _vm._ssrStyle(null, `color: ${_vm.settingKinformation.values[0].colorDescription}; font-weight: ${_vm.settingKinformation.values[0].fontWeighPretitle};`, null) + " data-v-66be351a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingKinformation.values[0].description) + "\n      ") + "</p> " + (_vm.settingKinformation.values[0].visbleBtn ? "<a" + _vm._ssrAttr("href", _vm.settingKinformation.values[0].url_redirect ? _vm.settingKinformation.values[0].url_redirect : '') + " rel=\"noreferrer noopener\" class=\"btn\"" + _vm._ssrStyle(null, `color: ${_vm.settingKinformation.values[0].colorBtn};`, null) + " data-v-66be351a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingKinformation.values[0].textBtn) + "\n      ") + "</a>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-content-items\"" + _vm._ssrStyle(null, `border-color: ${_vm.settingKinformation.values[1].visibleBorder ? _vm.settingKinformation.values[1].colorBorder : _vm.none}; background:${_vm.settingKinformation.values[1].color_bg}; `, null) + " data-v-66be351a>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.settingKinformation.values[1].url_img_Top, 550, 550),
      expression: "\n          idCloudinary(settingKinformation.values[1].url_img_Top, 550, 550)\n        "
    }],
    staticClass: "contentimg",
    attrs: {
      "alt": "imgInfo2"
    }
  }, []), _vm._ssrNode(" <p class=\"text-title\"" + _vm._ssrStyle(null, `color: ${_vm.settingKinformation.values[1].colorTitle}; font-weight: ${_vm.settingKinformation.values[1].fontWeighTitle};`, null) + " data-v-66be351a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingKinformation.values[1].title) + "\n      ") + "</p> <p class=\"text-description\"" + _vm._ssrStyle(null, `color: ${_vm.settingKinformation.values[1].colorDescription}; font-weight: ${_vm.settingKinformation.values[1].fontWeighPretitle};`, null) + " data-v-66be351a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingKinformation.values[1].description) + "\n      ") + "</p> " + (_vm.settingKinformation.values[1].visbleBtn ? "<a" + _vm._ssrAttr("href", _vm.settingKinformation.values[1].url_redirect ? _vm.settingKinformation.values[1].url_redirect : '') + " rel=\"noreferrer noopener\" class=\"btn\"" + _vm._ssrStyle(null, `color: ${_vm.settingKinformation.values[1].colorBtn};`, null) + " data-v-66be351a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingKinformation.values[1].textBtn) + "\n      ") + "</a>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-content-items\"" + _vm._ssrStyle(null, `border-color: ${_vm.settingKinformation.values[2].visibleBorder ? _vm.settingKinformation.values[2].colorBorder : _vm.none}; background:${_vm.settingKinformation.values[2].color_bg}; `, null) + " data-v-66be351a>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.settingKinformation.values[2].url_img_Top, 550, 550),
      expression: "\n          idCloudinary(settingKinformation.values[2].url_img_Top, 550, 550)\n        "
    }],
    staticClass: "contentimg",
    attrs: {
      "alt": "imgInfo3"
    }
  }, []), _vm._ssrNode(" <p class=\"text-title\"" + _vm._ssrStyle(null, `color: ${_vm.settingKinformation.values[2].colorTitle}; font-weight: ${_vm.settingKinformation.values[2].fontWeighTitle};`, null) + " data-v-66be351a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingKinformation.values[2].title) + "\n      ") + "</p> <p class=\"text-description\"" + _vm._ssrStyle(null, `color: ${_vm.settingKinformation.values[2].colorDescription}; font-weight: ${_vm.settingKinformation.values[2].fontWeighPretitle};`, null) + " data-v-66be351a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingKinformation.values[2].description) + "\n      ") + "</p> " + (_vm.settingKinformation.values[2].visbleBtn ? "<a" + _vm._ssrAttr("href", _vm.settingKinformation.values[2].url_redirect ? _vm.settingKinformation.values[2].url_redirect : '') + " rel=\"noreferrer noopener\" class=\"btn\"" + _vm._ssrStyle(null, `color: ${_vm.settingKinformation.values[2].colorBtn};`, null) + " data-v-66be351a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingKinformation.values[2].textBtn) + "\n      ") + "</a>" : "<!---->"))], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/information.vue?vue&type=template&id=66be351a&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/information.vue?vue&type=script&lang=js&

/* harmony default export */ var informationvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-information',
  props: {
    settingKinformation: Object,
    settingGeneral: Object
  }
});
// CONCATENATED MODULE: ./components/template11/information.vue?vue&type=script&lang=js&
 /* harmony default export */ var template11_informationvue_type_script_lang_js_ = (informationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/information.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(685)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template11_informationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "66be351a",
  "c2fb7072"
  
)

/* harmony default export */ var information = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=104.js.map