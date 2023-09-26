exports.ids = [212];
exports.modules = {

/***/ 1083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/template12/index.vue?vue&type=template&id=39fc6338&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate12 ? _c('div', {
    style: [{
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate12) === null || _vm$settingByTemplate2 === void 0 ? void 0 : _vm$settingByTemplate2.fontFamily) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"main-wrapper overflow-hidden\" data-v-39fc6338>", "</div>", [_c('K012-iHeader', _vm._b({
    attrs: {
      "id": "KHeaderX"
    }
  }, 'K012-iHeader', _vm.componentsProps, false)), _vm._ssrNode(" "), _c('K012-i-hero-image', _vm._b({}, 'K012-i-hero-image', _vm.componentsProps, false)), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"main-section_container\" data-v-39fc6338>", "</div>", [_c('K012-i-main-section', _vm._b({
    attrs: {
      "id": "KProductX"
    }
  }, 'K012-i-main-section', _vm.componentsProps, false))], 1), _vm._ssrNode(" "), _c('K012-i-footer', _vm._b({
    attrs: {
      "id": "KFooterX"
    }
  }, 'K012-i-footer', _vm.componentsProps, false)), _vm._ssrNode(" "), _c('K010-button-car')], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/template12/index.vue?vue&type=template&id=39fc6338&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/template12/index.vue?vue&type=script&lang=js&

/* harmony default export */ var template12vue_type_script_lang_js_ = ({
  name: 'KoTemplate12',
  components: {
    K012IHeader: () => __webpack_require__.e(/* import() */ 86).then(__webpack_require__.bind(null, 1137)),
    K012IHeroImage: () => __webpack_require__.e(/* import() */ 87).then(__webpack_require__.bind(null, 1138)),
    K012IMainSection: () => __webpack_require__.e(/* import() */ 88).then(__webpack_require__.bind(null, 1139)),
    K012IFooter: () => __webpack_require__.e(/* import() */ 85).then(__webpack_require__.bind(null, 1136)),
    K010ButtonCar: () => __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, 1114))
  },
  layout: 'default',
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'settingByTemplate12']),
    componentsProps() {
      return {
        dataStore: this.dataStore,
        settingByTemplate12: this.settingByTemplate12 ? this.settingByTemplate12 : null
      };
    }
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate);
  },
  methods: {
    addEventListenerTemplate(e) {
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080')) {
        if (e && e.data && e.data.componentToEdit) {
          this.$store.commit('SET_CURRENTSETTING12', e.data);
          switch (e.data.componentToEdit) {
            case 'header':
              this.moverseA('KHeaderX');
              break;
            case 'product':
              this.moverseA('KProductX');
              break;
            case 'footer':
              this.moverseA('KFooterX');
              break;
          }
        }
      }
    },
    moverseA(idDelElemento) {
      location.hash = '#' + idDelElemento;
    }
  }
});
// CONCATENATED MODULE: ./pages/template12/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_template12vue_type_script_lang_js_ = (template12vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/template12/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(606)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_template12vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "39fc6338",
  "be534fac"
  
)

/* harmony default export */ var template12 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(607);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6a75018c", content, true, context)
};

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39fc6338_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39fc6338_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39fc6338_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39fc6338_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_39fc6338_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-39fc6338]{font-family:var(--font-style-1)!important}.product_container:last-child .product_divider[data-v-39fc6338],main section:last-child .section-with-title_container .border-transparent[data-v-39fc6338]{display:none}.h-inherit[data-v-39fc6338]{height:inherit}.main-section_container[data-v-39fc6338]{box-shadow:0 20px 12px 2px rgba(0,0,0,.09)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map