exports.ids = [89];
exports.modules = {

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko13-ProductList.vue?vue&type=template&id=529c99a4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product-content",
    style: [_vm.settingGeneral, _vm.productList, {
      '--font-style-1': _vm.settingGeneral.fount_1 ? _vm.settingGeneral.fount_1 : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"producto-items-content\" data-v-529c99a4>", "</div>", [_vm._ssrNode("<div class=\"product-text\" data-v-529c99a4><div class=\"product-tittle\" data-v-529c99a4><span class=\"tittle\" data-v-529c99a4>" + _vm._ssrEscape(_vm._s(_vm.productList.title)) + "</span></div></div> "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm.fullProducts.length > 0 ? _vm._ssrNode("<div class=\"swiper-wrapper pb-10\" data-v-529c99a4>", "</div>", _vm._l(_vm.fullProducts.slice(0, 12), function (product) {
    return _vm._ssrNode("<div class=\"swiper-slide\" data-v-529c99a4>", "</div>", [_c('KoProductCard', {
      staticClass: "giftLoad",
      attrs: {
        "product": product,
        "card-product": _vm.cardProduct,
        "setting-general": _vm.settingGeneral
      }
    })], 1);
  }), 0) : _vm._ssrNode("<div class=\"content-products-empty\" data-v-529c99a4><p data-v-529c99a4>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p></div>")]), _vm._ssrNode(" " + (_vm.productList.visibleBtn ? "<div class=\"btn-products\" data-v-529c99a4><a" + _vm._ssrAttr("href", _vm.productList.url_redirect ? _vm.productList.url_redirect : '') + " rel=\"noreferrer noopener\" data-v-529c99a4><button class=\"btn\" data-v-529c99a4>" + _vm._ssrEscape(_vm._s(_vm.productList.displayName)) + "</button></a></div>" : "<!---->"))], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/Ko13-ProductList.vue?vue&type=template&id=529c99a4&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko13-ProductList.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko13_ProductListvue_type_script_lang_js_ = ({
  name: 'Ko13ProductList',
  components: {
    KoProductCard: () => __webpack_require__.e(/* import() */ 90).then(__webpack_require__.bind(null, 98))
  },
  props: {
    productList: {
      type: Object,
      required: true
    },
    settingGeneral: {
      type: Object,
      required: true
    },
    cardProduct: {
      type: Object,
      required: true
    },
    dataStore: {
      type: Object,
      required: true
    },
    fullProducts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: '',
        spaceBetween: '',
        breakpoints: {
          10000: {
            slidesPerView: 4,
            spaceBetween: 25
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 5
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
});
// CONCATENATED MODULE: ./components/template13/Ko13-ProductList.vue?vue&type=script&lang=js&
 /* harmony default export */ var template13_Ko13_ProductListvue_type_script_lang_js_ = (Ko13_ProductListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template13/Ko13-ProductList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(737)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template13_Ko13_ProductListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "529c99a4",
  "04096121"
  
)

/* harmony default export */ var Ko13_ProductList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(738);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("78655d6e", content, true, context)
};

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko13_ProductList_vue_vue_type_style_index_0_id_529c99a4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(441);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko13_ProductList_vue_vue_type_style_index_0_id_529c99a4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko13_ProductList_vue_vue_type_style_index_0_id_529c99a4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko13_ProductList_vue_vue_type_style_index_0_id_529c99a4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko13_ProductList_vue_vue_type_style_index_0_id_529c99a4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".giftLoad[data-v-529c99a4],.swiper-slide[data-v-529c99a4]{max-width:300px}.giftLoad[data-v-529c99a4]:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.product-content[data-v-529c99a4]{background:var(--background_color_1);padding-bottom:var(--padding);padding-top:var(--padding)}.product-content[data-v-529c99a4],.product-text[data-v-529c99a4]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.product-text[data-v-529c99a4]{text-align:center}.product-subTittle[data-v-529c99a4],.product-tittle[data-v-529c99a4],.tittle[data-v-529c99a4]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center}.tittle[data-v-529c99a4]{color:var(--color_title);font-family:var(--font-style-1)!important;font-size:var(--fontSizeTitle);font-weight:var(--fontWeightTitle);margin-bottom:var(--marginbottomTitle)}.btn-products[data-v-529c99a4]{align-items:center;display:flex;justify-content:center;margin-top:50px;width:100%}.btn[data-v-529c99a4]{border-radius:var(--radius_btn);color:var(--color_text_btn);font-family:var(--font-style-1)!important;font-size:16px;font-weight:600;line-height:20px;margin-right:20px;padding-left:8px;padding-right:8px;-webkit-text-decoration:underline;text-decoration:underline}.btn[data-v-529c99a4],.btn[data-v-529c99a4]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn[data-v-529c99a4]:hover{color:var(--hover_text_btn);transform:scale(1.1)}@media (min-width:300px){.producto-items-content[data-v-529c99a4]{padding-left:10px;padding-right:10px;width:100%}.product-text[data-v-529c99a4]{margin-bottom:30px}}@media (min-width:768px){.producto-items-content[data-v-529c99a4]{padding-left:10px;padding-right:10px;width:100%}}@media (min-width:1024px){.product-text[data-v-529c99a4]{width:100%}}@media (min-width:1400px){.producto-items-content[data-v-529c99a4]{padding-left:20px;padding-right:20px;width:1300px}.tittle[data-v-529c99a4]{line-height:50px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template13-ko13-product-list.js.map