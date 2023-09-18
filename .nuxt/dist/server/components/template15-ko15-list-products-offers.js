exports.ids = [110];
exports.modules = {

/***/ 1191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-listProductsOffers.vue?vue&type=template&id=1462063a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.fullProducts.length > 0 ? _c('div', {
    staticClass: "w-full flex justify-center items-center py-30 lg:py-50 px-10",
    style: `background-color: ${_vm.listProductsOffers['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full max-w-9/5 md:max-w-9/0 h-auto relative flex flex-col items-center justify-center overflow-hidden\" data-v-1462063a>", "</div>", [_vm._ssrNode("<p class=\"w-full text-center mb-25 text-25 md:text-30 lg:text-40\"" + _vm._ssrStyle(null, `color: ${_vm.listProductsOffers.color_title_1}; font-weight: ${_vm.listProductsOffers.fontWeighTitle};`, null) + " data-v-1462063a>" + _vm._ssrEscape("\n      " + _vm._s(_vm.listProductsOffers.title) + "\n    ") + "</p> "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "w-full"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper w-full\" data-v-1462063a>", "</div>", _vm._l(_vm.fullProducts, function (product, index) {
    return _vm._ssrNode("<div class=\"swiper-slide w-full\" data-v-1462063a>", "</div>", [_c('KoProductCard', {
      attrs: {
        "product": product,
        "cardProducts": _vm.cardProducts,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1);
  }), 0), _vm._ssrNode(" " + (_vm.fullProducts.length > 1 ? "<div class=\"swiper-button-prev\" data-v-1462063a></div>" : "<!---->") + " " + (_vm.fullProducts.length > 1 ? "<div class=\"swiper-button-next\" data-v-1462063a></div>" : "<!---->"))], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template15/ko15-listProductsOffers.vue?vue&type=template&id=1462063a&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-listProductsOffers.vue?vue&type=script&lang=js&
/* harmony default export */ var ko15_listProductsOffersvue_type_script_lang_js_ = ({
  name: 'Ko15-listProductsOffers',
  props: {
    listProductsOffers: {
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
  },
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        setWrapperSize: true,
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 26,
        grabCursor: true,
        breakpoints: {
          1250: {
            slidesPerView: 4,
            spaceBetween: 35
          },
          1060: {
            slidesPerView: 4,
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
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
// CONCATENATED MODULE: ./components/template15/ko15-listProductsOffers.vue?vue&type=script&lang=js&
 /* harmony default export */ var template15_ko15_listProductsOffersvue_type_script_lang_js_ = (ko15_listProductsOffersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template15/ko15-listProductsOffers.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(805)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template15_ko15_listProductsOffersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1462063a",
  "46f83ad5"
  
)

/* harmony default export */ var ko15_listProductsOffers = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(806);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("36abc183", content, true, context)
};

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_listProductsOffers_vue_vue_type_style_index_0_id_1462063a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(501);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_listProductsOffers_vue_vue_type_style_index_0_id_1462063a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_listProductsOffers_vue_vue_type_style_index_0_id_1462063a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_listProductsOffers_vue_vue_type_style_index_0_id_1462063a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_listProductsOffers_vue_vue_type_style_index_0_id_1462063a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".giftLoad[data-v-1462063a],.swiper-slide[data-v-1462063a]{max-width:324px}.swiper-button-next[data-v-1462063a],.swiper-button-prev[data-v-1462063a]{color:#ed6436}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template15-ko15-list-products-offers.js.map