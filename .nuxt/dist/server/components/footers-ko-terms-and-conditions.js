exports.ids = [30];
exports.modules = {

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("13f7e7f2", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_TermsAndConditions_vue_vue_type_style_index_0_id_760d0974_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_TermsAndConditions_vue_vue_type_style_index_0_id_760d0974_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_TermsAndConditions_vue_vue_type_style_index_0_id_760d0974_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_TermsAndConditions_vue_vue_type_style_index_0_id_760d0974_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_TermsAndConditions_vue_vue_type_style_index_0_id_760d0974_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".accordion[data-v-760d0974]{background-color:#eee;border-style:none;border-width:1px;color:#222;cursor:pointer;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;margin-bottom:0;outline:2px solid transparent;outline-offset:2px;text-align:left;transition:.4s;width:100%}.accordion[data-v-760d0974]:hover,.active[data-v-760d0974]{background-color:#ccc}.accordion[data-v-760d0974]:after{color:#222;content:\"\\276F\";float:right;font-weight:600}.accordion[data-v-760d0974]:after,.active[data-v-760d0974]:after{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.active[data-v-760d0974]:after{transform:rotate(90deg)}.panel[data-v-760d0974]{align-items:center;background-color:#fff;justify-content:flex-start;max-height:0;overflow:hidden;padding-left:40px;padding-right:40px;transition:.4s ease-out;width:100%}.modal-content[data-v-760d0974]{-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:animatetop-760d0974;animation-name:animatetop-760d0974;background-color:#fefefe;border:1px solid #888;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);margin:auto;max-height:600px;overflow-y:auto;padding:0;position:relative}.modal-content[data-v-760d0974]::-webkit-scrollbar{width:5px}.modal-content[data-v-760d0974]::-webkit-scrollbar-thumb{background:#a3a3a3;border-radius:4px}.modal-content[data-v-760d0974]::-webkit-scrollbar-thumb:active{background-color:#777}.modal-content[data-v-760d0974]::-webkit-scrollbar-thumb:hover{background:#686868;box-shadow:0 0 2px 1px rgba(0,0,0,.401)}@keyframes animatetop-760d0974{0%{opacity:0;top:-300px}to{opacity:1;top:0}}.close[data-v-760d0974]{color:#fff;float:right;font-size:28px;font-weight:600}.close[data-v-760d0974]:focus,.close[data-v-760d0974]:hover{color:#ccc;cursor:pointer;-webkit-text-decoration:none;text-decoration:none}.modal-header[data-v-760d0974]{background-color:#222;color:#fff;justify-content:space-between;padding:10px 20px;position:sticky;top:0}.content-items-modal[data-v-760d0974],.modal-header[data-v-760d0974]{align-items:center;display:flex;width:100%}.content-items-modal[data-v-760d0974]{flex-direction:column;justify-content:center}.txt-Legal[data-v-760d0974]{color:#fff;font-size:16px;font-weight:600}.content-modal[data-v-760d0974],.txt-Legal[data-v-760d0974]{font-family:\"Poppins\",Helvetica,Arial,sans-serif!important}.content-modal[data-v-760d0974]{border-bottom:1px solid #ccc;color:#222;font-size:16px;font-weight:600;padding-bottom:10px;padding-top:10px;position:sticky;top:62px}@media (min-width:300px){.modal-content[data-v-760d0974]{width:100%}.content-modal[data-v-760d0974]{font-size:14px;padding-left:20px;padding-right:20px}}@media (min-width:768px){.modal-content[data-v-760d0974]{width:70%}.content-modal[data-v-760d0974]{font-size:15px;padding-left:30px;padding-right:30px}}@media (min-width:1400px){.modal-content[data-v-760d0974]{width:50%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/ko-TermsAndConditions.vue?vue&type=template&id=760d0974&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-content"
  }, [_vm._ssrNode("<div class=\"modal-header\" data-v-760d0974>", "</div>", [_c('nuxt-link', {
    staticClass: "txt-Legal",
    attrs: {
      "to": "/termsandconditions"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('footer_condicionesLegales')) + "\n    ")]), _vm._ssrNode(" <span class=\"close\" data-v-760d0974>×</span>")], 2), _vm._ssrNode(" <div class=\"content-items-modal\" data-v-760d0974>" + (this.dataStore.politicas.datos ? "<button class=\"content-modal accordion\" data-v-760d0974>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_politicaTratamientos')) + "\n    ") + "</button>" : "<!---->") + " " + (this.dataStore.politicas.datos ? "<div class=\"panel\" data-v-760d0974>" + _vm._s(this.dataStore.politicas.datos) + "</div>" : "<!---->") + " " + (this.dataStore.politicas.garantia ? "<button class=\"content-modal accordion\" data-v-760d0974>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_politicaGarantia')) + "\n    ") + "</button>" : "<!---->") + " " + (this.dataStore.politicas.garantia ? "<div class=\"panel\" data-v-760d0974>" + _vm._s(this.dataStore.politicas.garantia) + "</div>" : "<!---->") + " " + (this.dataStore.politicas.devolucion ? "<button class=\"content-modal accordion\" data-v-760d0974>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_politicaDevoluciones')) + "\n    ") + "</button>" : "<!---->") + " " + (this.dataStore.politicas.devolucion ? "<div class=\"panel\" data-v-760d0974>" + _vm._s(this.dataStore.politicas.devolucion) + "</div>" : "<!---->") + " " + (this.dataStore.politicas.cambio ? "<button class=\"content-modal accordion\" data-v-760d0974>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_politicaCambio')) + "\n    ") + "</button>" : "<!---->") + " " + (this.dataStore.politicas.cambio ? "<div class=\"panel\" data-v-760d0974>" + _vm._s(this.dataStore.politicas.cambio) + "</div>" : "<!---->") + " " + (this.dataStore.politicas.envios ? "<button class=\"content-modal accordion\" data-v-760d0974>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_politicaEnvios')) + "\n    ") + "</button>" : "<!---->") + " " + (this.dataStore.politicas.envios ? "<div class=\"panel\" data-v-760d0974>" + _vm._s(this.dataStore.politicas.envios) + "</div>" : "<!---->") + " " + (this.dataStore.politicas.pagos ? "<button class=\"content-modal accordion\" data-v-760d0974>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_politicaPagos')) + "\n    ") + "</button>" : "<!---->") + " " + (this.dataStore.politicas.pagos ? "<div class=\"panel\" data-v-760d0974>" + _vm._s(this.dataStore.politicas.pagos) + "</div>" : "<!---->") + "</div> <div class=\"px-10 py-4\" style=\"background-color: #222\" data-v-760d0974><button class=\"txt-Legal\" data-v-760d0974>" + _vm._ssrEscape("\n      🔗 " + _vm._s(_vm.$t('footer_irPagina')) + "\n    ") + "</button></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/ko-TermsAndConditions.vue?vue&type=template&id=760d0974&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/ko-TermsAndConditions.vue?vue&type=script&lang=js&
/* harmony default export */ var ko_TermsAndConditionsvue_type_script_lang_js_ = ({
  name: 'Terms-and-Conditions',
  props: {
    dataStore: Object
  },
  mounted() {
    var acc = document.getElementsByClassName('accordion');
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.marginTop = '0px';
          panel.style.marginBottom = '0px';
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          panel.style.marginTop = '20px';
          panel.style.marginBottom = '20px';
        }
      });
    }
  },
  methods: {
    closeModalPolitics() {
      this.$store.state.modalpolitics05 = false;
    },
    goRouter() {
      this.$router.push({
        path: '/termsandconditions'
      });
      this.closeModalPolitics();
    }
  }
});
// CONCATENATED MODULE: ./components/footers/ko-TermsAndConditions.vue?vue&type=script&lang=js&
 /* harmony default export */ var footers_ko_TermsAndConditionsvue_type_script_lang_js_ = (ko_TermsAndConditionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/ko-TermsAndConditions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footers_ko_TermsAndConditionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "760d0974",
  "940e5430"
  
)

/* harmony default export */ var ko_TermsAndConditions = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=footers-ko-terms-and-conditions.js.map