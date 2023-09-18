exports.ids = [113];
exports.modules = {

/***/ 1194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-productListHome.vue?vue&type=template&id=3854798e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.fullProducts.length > 0 ? _c('div', {
    staticClass: "w-full flex justify-center items-center py-25 lg:py-40 px-10",
    style: `background-color: ${_vm.listProductsHome['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full max-w-9/5 md:max-w-9/0 h-auto relative flex flex-col items-center justify-center overflow-hidden\">", "</div>", [_vm._ssrNode("<p class=\"w-full text-center mb-25 text-25 md:text-30 lg:text-40\"" + _vm._ssrStyle(null, `color: ${_vm.listProductsHome.color_title_1}; font-weight: ${_vm.listProductsHome.fontWeighTitle};`, null) + ">" + _vm._ssrEscape("\n      " + _vm._s(_vm.listProductsHome.title) + "\n    ") + "</p> "), _vm._ssrNode("<div class=\"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5\">", "</div>", _vm._l(_vm.fullProducts.slice(0, 8), function (product) {
    return _vm._ssrNode("<div>", "</div>", [_c('KoProductCard', {
      staticClass: "w-full",
      attrs: {
        "product": product,
        "cardProducts": _vm.cardProducts,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1);
  }), 0)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template15/ko15-productListHome.vue?vue&type=template&id=3854798e&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-productListHome.vue?vue&type=script&lang=js&
/* harmony default export */ var ko15_productListHomevue_type_script_lang_js_ = ({
  name: 'Ko15-productListHome',
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
  },
  components: {
    KoProductCard: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 1086))
  }
});
// CONCATENATED MODULE: ./components/template15/ko15-productListHome.vue?vue&type=script&lang=js&
 /* harmony default export */ var template15_ko15_productListHomevue_type_script_lang_js_ = (ko15_productListHomevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template15/ko15-productListHome.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template15_ko15_productListHomevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e0b12940"
  
)

/* harmony default export */ var ko15_productListHome = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=template15-ko15-product-list-home.js.map