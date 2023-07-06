exports.ids = [138];
exports.modules = {

/***/ 1059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/_productofavorito/productSlide.vue?vue&type=template&id=1e28350b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "relative"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-1e28350b>", "</div>", _vm._l(this.products, function (product, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\" data-v-1e28350b>", "</div>", [_c('KoProductCard', {
      attrs: {
        "product": product,
        "cardProducts": _vm.cardProducts,
        "settingsGeneral": _vm.settingsGeneral
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), this.products.length > 1 ? _vm._ssrNode("<div class=\"prev btnPrev\" data-v-1e28350b>", "</div>", [_c('FlechaLeft-icon', {
    staticClass: "btn-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" "), this.products.length > 1 ? _vm._ssrNode("<div class=\"next btnNext\" data-v-1e28350b>", "</div>", [_c('FlechaRight-icon', {
    staticClass: "btn-icon"
  })], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/_productofavorito/productSlide.vue?vue&type=template&id=1e28350b&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/_productofavorito/productSlide.vue?vue&type=script&lang=js&
/* harmony default export */ var productSlidevue_type_script_lang_js_ = ({
  name: 'productSlide14',
  components: {
    KoProductCard: () => __webpack_require__.e(/* import() */ 133).then(__webpack_require__.bind(null, 914))
  },
  props: {
    products: {},
    settingsGeneral: Object,
    cardProducts: Object
  },
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination'
        },
        setWrapperSize: true,
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 22,
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        breakpoints: {
          10000: {
            slidesPerView: 4,
            spaceBetween: 25
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10
          },
          425: {
            slidesPerGroup: 1,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    changeSlide() {
      this.swiper.slidePrev(700, false);
    }
  }
});
// CONCATENATED MODULE: ./components/template14/_productofavorito/productSlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productofavorito_productSlidevue_type_script_lang_js_ = (productSlidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/_productofavorito/productSlide.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(912)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productofavorito_productSlidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1e28350b",
  "73a66d00"
  
)

/* harmony default export */ var productSlide = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(913);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("69328edf", content, true, context)
};

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1e28350b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(485);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1e28350b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1e28350b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1e28350b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1e28350b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-1e28350b],.swiper-wrapper[data-v-1e28350b]{width:100%}.btnPrev[data-v-1e28350b]{left:0}.btnNext[data-v-1e28350b],.btnPrev[data-v-1e28350b]{background:#000;border-radius:25px;cursor:pointer;padding:0 22px;position:absolute;z-index:10}.btnNext[data-v-1e28350b]{right:0}.btn-icon[data-v-1e28350b]{align-items:center;bottom:.125em;color:#fff;display:flex;font-size:45px;justify-content:center;width:100%}.btn-icon[data-v-1e28350b]:hover{color:grey}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=138.js.map