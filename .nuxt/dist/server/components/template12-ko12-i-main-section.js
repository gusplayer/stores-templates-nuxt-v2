exports.ids = [88,259];
exports.modules = {

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/Ko12-IMainSection.vue?vue&type=template&id=804bbc86&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_vm._ssrNode("<div class=\"pt-20\"" + _vm._ssrStyle(null, `background:${_vm.settingByTemplate12.backgroundColor};`, null) + " data-v-804bbc86>", "</div>", [_vm.dataStore.categorias.length > 0 ? _vm._ssrNode("<div data-v-804bbc86>", "</div>", _vm._l(_vm.dataStore.categorias, function (category) {
    return _vm._ssrNode("<div class=\"pt-4 pb-4\" data-v-804bbc86>", "</div>", [_vm._ssrNode("<header class=\"text-center\" data-v-804bbc86><h2 class=\"text-title\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.titleColor};`, null) + " data-v-804bbc86>" + _vm._ssrEscape("\n            " + _vm._s(category.nombre_categoria_producto) + "\n          ") + "</h2></header> "), _vm.dataStore.subcategorias.length > 0 ? _vm._ssrNode("<div data-v-804bbc86>", "</div>", _vm._l(_vm.dataStore.subcategorias, function (subcategory, key) {
      return _vm._ssrNode("<div class=\"products-wrapper\"" + _vm._ssrStyle(null, null, {
        display: subcategory.categoria == category.id ? '' : 'none'
      }) + " data-v-804bbc86>", "</div>", [_vm._ssrNode("<div class=\"subcategori-Content\" data-v-804bbc86>" + (subcategory.categoria == category.id ? "<p class=\"text-subtitle\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.titleColor};`, null) + " data-v-804bbc86>" + _vm._ssrEscape("\n                " + _vm._s(subcategory.nombre_subcategoria) + "\n              ") + "</p>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"products-content\" data-v-804bbc86>", "</div>", _vm._l(_vm.fullProducts, function (product) {
        return _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
          display: product.categoria == category.nombre_categoria_producto && product.subcategoria == subcategory.id ? '' : 'none'
        }) + " data-v-804bbc86>", "</div>", [_c('ProductCard', {
          attrs: {
            "product": product.categoria == category.nombre_categoria_producto && product.subcategoria == subcategory.id ? product : {},
            "data-store": _vm.dataStore,
            "setting-by-template12": _vm.settingByTemplate12
          }
        })], 1);
      }), 0)], 2);
    }), 0) : _vm._ssrNode("<div class=\"products-content\" data-v-804bbc86>", "</div>", _vm._l(_vm.fullProducts, function (product) {
      return _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
        display: product.categoria == category.nombre_categoria_producto ? '' : 'none'
      }) + " data-v-804bbc86>", "</div>", [_c('ProductCard', {
        attrs: {
          "product": product.categoria == category.nombre_categoria_producto ? product : {},
          "data-store": _vm.dataStore,
          "setting-by-template12": _vm.settingByTemplate12
        }
      })], 1);
    }), 0)], 2);
  }), 0) : _vm._ssrNode("<div data-v-804bbc86>", "</div>", [_vm._ssrNode("<header class=\"text-center\" data-v-804bbc86><h2 class=\"text-title\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.titleColor};`, null) + " data-v-804bbc86>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('header_productos')) + "\n        ") + "</h2></header> "), _vm._ssrNode("<div class=\"products-content\" data-v-804bbc86>", "</div>", _vm._l(_vm.fullProducts, function (product) {
    return _vm._ssrNode("<div data-v-804bbc86>", "</div>", [_c('ProductCard', {
      attrs: {
        "product": product,
        "data-store": _vm.dataStore,
        "setting-by-template12": _vm.settingByTemplate12
      }
    })], 1);
  }), 0)], 2), _vm._ssrNode(" "), _vm.showModal ? _vm._ssrNode("<div class=\"modal\" data-v-804bbc86>", "</div>", [_c('K012-productDetail', {
    attrs: {
      "data-store": _vm.dataStore,
      "temp-data": _vm.tempData,
      "setting-by-template12": _vm.settingByTemplate12
    }
  })], 1) : _vm._e(), _vm._ssrNode(" <hr class=\"h-20 bg-transparent border-transparent\" data-v-804bbc86> <hr class=\"border-transparent divider border-0\" data-v-804bbc86>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template12/Ko12-IMainSection.vue?vue&type=template&id=804bbc86&scoped=true&

// EXTERNAL MODULE: ./components/template12/mixins/ComponentProps.vue + 2 modules
var ComponentProps = __webpack_require__(92);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/Ko12-IMainSection.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko12_IMainSectionvue_type_script_lang_js_ = ({
  name: 'Ko12IMainSection',
  components: {
    ProductCard: () => __webpack_require__.e(/* import() */ 89).then(__webpack_require__.bind(null, 1140)),
    K012ProductDetail: () => __webpack_require__.e(/* import() */ 84).then(__webpack_require__.bind(null, 1135))
  },
  mixins: [ComponentProps["default"]],
  data() {
    return {
      section: {
        title: 'MEAT & FIRST DISHES',
        subtitle: 'Slow cook meals and fresh fishes'
      },
      tempData: {}
    };
  },
  computed: {
    fullProducts() {
      return this.$store.getters['products/allProduct'];
    },
    searchValue() {
      return this.$store.state.searchValue;
    },
    showModal() {
      return this.$store.state.modalproductDetails;
    }
  },
  watch: {
    searchValue(value) {
      this.SearchProduct(value);
    }
  },
  methods: {
    OpenModalProductDetails(value) {
      this.tempData = value;
      this.$store.state.modalproductDetails = true;
    },
    SearchProduct(search) {
      if (search.length) {
        this.$store.commit('products/FILTER_BY', {
          type: ['search'],
          data: search
        });
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['all'],
          data: ''
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template12/Ko12-IMainSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var template12_Ko12_IMainSectionvue_type_script_lang_js_ = (Ko12_IMainSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template12/Ko12-IMainSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(690)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template12_Ko12_IMainSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "804bbc86",
  "7357291f"
  
)

/* harmony default export */ var Ko12_IMainSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gradient-line.6fc51f5.png";

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(691);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("d2bcb230", content, true, context)
};

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IMainSection_vue_vue_type_style_index_0_id_804bbc86_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(394);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IMainSection_vue_vue_type_style_index_0_id_804bbc86_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IMainSection_vue_vue_type_style_index_0_id_804bbc86_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IMainSection_vue_vue_type_style_index_0_id_804bbc86_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IMainSection_vue_vue_type_style_index_0_id_804bbc86_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(241);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".divider[data-v-804bbc86]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:50%;background-size:contain;height:3px;margin:0 auto;width:25%}.products-wrapper[data-v-804bbc86]{align-items:center;justify-content:center;width:100%}.subcategori-Content[data-v-804bbc86]{padding:30px 10px 20px}.products-content[data-v-804bbc86],.subcategori-Content[data-v-804bbc86]{margin:0 auto;max-width:940px;width:100%}.products-content[data-v-804bbc86]{grid-column-gap:20px;-moz-column-gap:20px;column-gap:20px;display:grid;grid-template-columns:repeat(2,minmax(420px,1fr));padding:10px 10px 20px}.modal[data-v-804bbc86]{background-color:#000;background-color:rgba(0,0,0,.4);height:100%;left:0;overflow:auto;padding-top:200px;position:fixed;top:0;width:100%;z-index:10}.text-title[data-v-804bbc86]{font-size:2.25rem}.text-subtitle[data-v-804bbc86],.text-title[data-v-804bbc86]{font-weight:600;text-transform:uppercase}.text-subtitle[data-v-804bbc86]{font-size:22px}@media (max-width:800px){.products-wrapper[data-v-804bbc86]{grid-template-columns:repeat(1,minmax(100%,1fr))}.text-title[data-v-804bbc86]{font-size:1.5rem}}@media (max-width:500px){.modal[data-v-804bbc86]{padding-top:80px}.products-wrapper[data-v-804bbc86]{padding:25px 10px 20px}.text-title[data-v-804bbc86]{font-size:1.5rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/mixins/ComponentProps.vue?vue&type=script&lang=js&
/* harmony default export */ var ComponentPropsvue_type_script_lang_js_ = ({
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate12: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/template12/mixins/ComponentProps.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_ComponentPropsvue_type_script_lang_js_ = (ComponentPropsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template12/mixins/ComponentProps.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_ComponentPropsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7357669e"
  
)

/* harmony default export */ var ComponentProps = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=template12-ko12-i-main-section.js.map