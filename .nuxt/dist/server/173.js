exports.ids = [173];
exports.modules = {

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-productListHome.vue?vue&type=template&id=23f85456&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.fullProducts.length > 0 ? _c('div', {
    staticClass: "w-full flex justify-center items-center py-15 lg:py-20 px-10",
    style: `background-color: ${_vm.listProductsHome['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full h-auto relative max-w-7xl flex flex-col items-center justify-center overflow-hidden\" data-v-23f85456>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-row justify-between items-start md:items-center mb-25\" data-v-23f85456>", "</div>", [_vm._ssrNode("<p class=\"w-full text-start\"" + _vm._ssrStyle(null, `color: ${_vm.listProductsHome.color_title}; font-size: ${_vm.listProductsHome.fontSizeTitle}; font-weight: ${_vm.listProductsHome.fontWeighTitle};`, null) + " data-v-23f85456>" + _vm._ssrEscape("\n        " + _vm._s(_vm.listProductsHome.title) + "\n      ") + "</p> "), _c('nuxt-link', {
    staticClass: "w-full text-end",
    style: `color: ${_vm.listProductsHome.color_text_btn}; font-size: ${_vm.listProductsHome.fontSizeTextBtn}; font-weight: ${_vm.listProductsHome.fontWeighTextBtn};`,
    attrs: {
      "to": {
        path: `/productos`
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.listProductsHome.text_btn) + "\n        "), _c('FlechaRight-icon', {
    style: `color: ${_vm.listProductsHome.color_text_btn}; font-size: ${_vm.listProductsHome.fontSizeTextBtn}; font-weight: ${_vm.listProductsHome.fontWeighTextBtn};`
  })], 1)], 2), _vm._ssrNode(" "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "w-full relative"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper w-full\" data-v-23f85456>", "</div>", _vm._l(_vm.fullProducts.slice(0, 12), function (product) {
    return _vm._ssrNode("<div class=\"swiper-slide w-full\" data-v-23f85456>", "</div>", [_c('KoProductCard', {
      staticClass: "w-full",
      attrs: {
        "product": product,
        "cardProducts": _vm.cardProducts,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1);
  }), 0)])], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/ko14-productListHome.vue?vue&type=template&id=23f85456&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-productListHome.vue?vue&type=script&lang=js&
/* harmony default export */ var ko14_productListHomevue_type_script_lang_js_ = ({
  name: 'Ko14-productListHome',
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
    KoProductCard: () => __webpack_require__.e(/* import() */ 29).then(__webpack_require__.bind(null, 975))
  },
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        setWrapperSize: true,
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 26,
        grabCursor: true,
        breakpoints: {
          1250: {
            slidesPerView: 3,
            spaceBetween: 35
          },
          1060: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          990: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          790: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
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
// CONCATENATED MODULE: ./components/template14/ko14-productListHome.vue?vue&type=script&lang=js&
 /* harmony default export */ var template14_ko14_productListHomevue_type_script_lang_js_ = (ko14_productListHomevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/ko14-productListHome.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(770)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template14_ko14_productListHomevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23f85456",
  "f14b6fe6"
  
)

/* harmony default export */ var ko14_productListHome = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(771);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2a26d838", content, true, context)
};

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_productListHome_vue_vue_type_style_index_0_id_23f85456_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(398);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_productListHome_vue_vue_type_style_index_0_id_23f85456_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_productListHome_vue_vue_type_style_index_0_id_23f85456_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_productListHome_vue_vue_type_style_index_0_id_23f85456_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_productListHome_vue_vue_type_style_index_0_id_23f85456_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".giftLoad[data-v-23f85456],.swiper-slide[data-v-23f85456]{max-width:300px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=173.js.map