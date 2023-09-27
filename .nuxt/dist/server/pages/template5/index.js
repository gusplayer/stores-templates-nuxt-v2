exports.ids = [217];
exports.modules = {

/***/ 1088:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/template5/index.vue?vue&type=template&id=28f477de&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3, _vm$settingByTemplate4, _vm$settingByTemplate5, _vm$dataHoko;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    style: [{
      '--font-style': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.settings) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.tipo_letra) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Roboto'
    }, (_vm$settingByTemplate4 = (_vm$settingByTemplate5 = _vm.settingByTemplate) === null || _vm$settingByTemplate5 === void 0 ? void 0 : _vm$settingByTemplate5.settings) !== null && _vm$settingByTemplate4 !== void 0 ? _vm$settingByTemplate4 : _vm.settingBase]
  }, [_vm.stateBanner ? _c('K05-banner', {
    attrs: {
      "id": "KHeaderX"
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.stateBanner ? _c('K05-component360') : _vm._e(), _vm._ssrNode(" "), _vm.stateBanner ? _c('K05-productFavoritos') : _vm._e(), _vm._ssrNode(" "), ((_vm$dataHoko = _vm.dataHoko) === null || _vm$dataHoko === void 0 ? void 0 : _vm$dataHoko.statehoko) == 1 && _vm.stateBanner ? _c('K05-productListHomeHoko', {
    attrs: {
      "id": "KProductX",
      "data-store": _vm.dataStore
    }
  }) : _vm._e(), _vm._ssrNode(" "), _c('K05-productListHome', {
    attrs: {
      "id": "KProductX",
      "data-store": _vm.dataStore,
      "full-products": _vm.fullProducts
    }
  }), _vm._ssrNode(" "), _c('K05-bannerFooter', {
    attrs: {
      "id": "KFooterX"
    }
  }), _vm._ssrNode(" "), _c('K05-newsletter', {
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/template5/index.vue?vue&type=template&id=28f477de&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/template5/index.vue?vue&type=script&lang=js&

/* harmony default export */ var template5vue_type_script_lang_js_ = ({
  name: 'KoTemplate5',
  components: {
    K05Banner: () => __webpack_require__.e(/* import() */ 157).then(__webpack_require__.bind(null, 1190)),
    K05Component360: () => __webpack_require__.e(/* import() */ 159).then(__webpack_require__.bind(null, 1192)),
    K05ProductFavoritos: () => __webpack_require__.e(/* import() */ 163).then(__webpack_require__.bind(null, 1196)),
    K05ProductListHomeHoko: () => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, 1199)),
    K05ProductListHome: () => __webpack_require__.e(/* import() */ 165).then(__webpack_require__.bind(null, 1198)),
    K05BannerFooter: () => __webpack_require__.e(/* import() */ 158).then(__webpack_require__.bind(null, 1191)),
    K05Newsletter: () => __webpack_require__.e(/* import() */ 161).then(__webpack_require__.bind(null, 1194))
  },
  layout: 'default',
  computed: {
    ...Object(external_vuex_["mapState"])(['template', 'dataStore', 'settingBase', 'stateBanner', 'settingByTemplate', 'dataHoko']),
    fullProducts() {
      return this.$store.getters['products/filterProducts'];
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
          this.$store.commit('SET_CURRENTSETTING5', e.data);
          switch (e.data.componentToEdit) {
            case 'header':
              this.moverseA('KHeaderX');
              break;
            case 'productList':
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
// CONCATENATED MODULE: ./pages/template5/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_template5vue_type_script_lang_js_ = (template5vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/template5/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(616)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_template5vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "28f477de",
  "60edaa68"
  
)

/* harmony default export */ var template5 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(617);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7de9f93c", content, true, context)
};

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_28f477de_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(357);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_28f477de_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_28f477de_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_28f477de_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_28f477de_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-28f477de]{font-family:var(--font-style-1)!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map