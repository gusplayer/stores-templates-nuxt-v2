exports.ids = [148];
exports.modules = {

/***/ 1188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/ko16-productListHome.vue?vue&type=template&id=6f0c3662&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.fullProducts.length > 0 ? _c('div', {
    staticClass: "w-full flex justify-center items-center py-25 lg:py-40 px-10",
    style: `background-color: ${_vm.listProductsHome['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full max-w-[1200px] h-auto relative flex flex-col items-center justify-center overflow-hidden mt-20\">", "</div>", [_vm._ssrNode("<p class=\"w-full text-center mb-15 text-25 md:text-28 lg:text-32\"" + _vm._ssrStyle(null, `color: ${_vm.listProductsHome.color_title}; font-weight: ${_vm.listProductsHome.fontWeighTitle}; font-size: ${_vm.listProductsHome.fontSizeTitle};`, null) + ">" + _vm._ssrEscape("\n      " + _vm._s(_vm.listProductsHome.title) + "\n    ") + "</p> <p class=\"w-full text-center mb-50 text-14\"" + _vm._ssrStyle(null, `color: ${_vm.listProductsHome.color_text}; font-weight: ${_vm.listProductsHome.fontWeighText}; font-size: ${_vm.listProductsHome.fontSizeText};`, null) + ">" + _vm._ssrEscape("\n      " + _vm._s(_vm.listProductsHome.text) + "\n    ") + "</p> "), _vm._ssrNode("<div class=\"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5\">", "</div>", _vm._l(_vm.fullProducts.slice(0, 8), function (product) {
    return _vm._ssrNode("<div>", "</div>", [_c('KoProductCard', {
      staticClass: "w-full",
      attrs: {
        "product": product,
        "card-products": _vm.cardProducts,
        "setting-general": _vm.settingGeneral
      }
    })], 1);
  }), 0)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template16/ko16-productListHome.vue?vue&type=template&id=6f0c3662&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/ko16-productListHome.vue?vue&type=script&lang=js&
/* harmony default export */ var ko16_productListHomevue_type_script_lang_js_ = ({
  name: 'Ko16ProductListHome',
  components: {
    KoProductCard: () => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 580))
  },
  props: {
    listProductsHome: {
      type: Object,
      required: true
    },
    settingGeneral: {
      type: Object,
      required: true
    },
    cardProducts: {
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
  }
});
// CONCATENATED MODULE: ./components/template16/ko16-productListHome.vue?vue&type=script&lang=js&
 /* harmony default export */ var template16_ko16_productListHomevue_type_script_lang_js_ = (ko16_productListHomevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template16/ko16-productListHome.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template16_ko16_productListHomevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c3cc9800"
  
)

/* harmony default export */ var ko16_productListHome = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=template16-ko16-product-list-home.js.map