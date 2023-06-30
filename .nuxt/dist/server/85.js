exports.ids = [85];
exports.modules = {

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/Ko-gify.vue?vue&type=template&id=7fbdb95c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product-content",
    style: [_vm.settingKGify, _vm.settingGeneral]
  }, [_vm._ssrNode((!_vm.settingKCarousel.visible ? "<div class=\"separador-blog\" data-v-7fbdb95c></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"producto-items-content\"" + _vm._ssrStyle(null, [{
    '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'David Libre'
  }, {
    '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Great Vibes'
  }, {
    '--font-style-3': this.settingGeneral && this.settingGeneral.fount_3 ? this.settingGeneral.fount_3 : 'Lora'
  }], null) + " data-v-7fbdb95c>", "</div>", [_vm._ssrNode("<div class=\"product-text\" data-v-7fbdb95c><div class=\"product-tittle\" data-v-7fbdb95c><span class=\"tittle\" data-v-7fbdb95c>" + _vm._ssrEscape(_vm._s(_vm.settingKGify.pre_title)) + "</span></div> <div class=\"product-subtittle\" data-v-7fbdb95c><span class=\"subtittle\" data-v-7fbdb95c>" + _vm._ssrEscape(_vm._s(_vm.settingKGify.title)) + "</span></div> <div class=\"product-description\" data-v-7fbdb95c><span class=\"description\" data-v-7fbdb95c>" + _vm._ssrEscape("\n          " + _vm._s(_vm.settingKGify.description) + "\n        ") + "</span></div></div> "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-7fbdb95c>", "</div>", _vm._l(_vm.fullProducts, function (product) {
    return _vm._ssrNode("<div class=\"swiper-slide\" data-v-7fbdb95c>", "</div>", [_c('KoProductGifyCard', {
      staticClass: "gifyload",
      attrs: {
        "product": product,
        "settingKProdutCard": _vm.settingKProdutCard,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1);
  }), 0), _vm._ssrNode(" " + (this.fullProducts.length == 0 ? "<div class=\"content-products-empty\" data-v-7fbdb95c><p data-v-7fbdb95c>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p></div>" : "<!---->"))], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/Ko-gify.vue?vue&type=template&id=7fbdb95c&scoped=true&

// EXTERNAL MODULE: ./components/template7/_productcard/ProductCard.vue + 4 modules
var ProductCard = __webpack_require__(147);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/Ko-gify.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_gifyvue_type_script_lang_js_ = ({
  components: {
    KoProductGifyCard: ProductCard["a" /* default */]
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    settingGeneral: Object,
    settingKProdutCard: Object,
    settingKGify: Object,
    settingKCarousel: Object
  },
  name: 'Ko-gify-1',
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        },
        breakpoints: {
          10000: {
            slidesPerView: 6,
            spaceBetween: 20
          },
          2560: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 40
          },
          768: {
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
            slidesPerView: 2,
            slidesPerGroup: 2,
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
// CONCATENATED MODULE: ./components/template7/Ko-gify.vue?vue&type=script&lang=js&
 /* harmony default export */ var template7_Ko_gifyvue_type_script_lang_js_ = (Ko_gifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/Ko-gify.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(764)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template7_Ko_gifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7fbdb95c",
  "59050d47"
  
)

/* harmony default export */ var Ko_gify = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_8053bda6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_8053bda6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_8053bda6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_8053bda6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_8053bda6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-image[data-v-8053bda6],.product-image-soldOut[data-v-8053bda6]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.product-image-soldOut[data-v-8053bda6]{filter:grayscale(100%)}.block-icon[data-v-8053bda6]:hover,.transporte-icon[data-v-8053bda6]:hover{fill:var(--hover_card)}.hearts-icon[data-v-8053bda6]:hover{color:var(--hover_text)}.hearts-icon[data-v-8053bda6]{color:#333;height:100%;width:100%}.producto-productCard[data-v-8053bda6]{cursor:pointer;height:100%;justify-content:flex-start;margin-top:20px}.datos-producto[data-v-8053bda6],.producto-productCard[data-v-8053bda6]{align-items:center;display:flex;flex-direction:column}.datos-producto[data-v-8053bda6]{justify-content:center;padding-top:16px;width:100%}.container-productCard[data-v-8053bda6]{position:relative;width:100%}.image[data-v-8053bda6]{display:block;height:auto;width:100%}.icon[data-v-8053bda6]{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.cart-Shop[data-v-8053bda6],.cart-Shop-mobile[data-v-8053bda6]{font:inherit;font-size:100%;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.cart-Shop-mobile[data-v-8053bda6]{justify-column:center}.color_tex_btn[data-v-8053bda6]{color:var(--color_text_btn_card)}.icons-hover[data-v-8053bda6]{grid-gap:0;--tw-text-opacity:1;color:#3f3f3f;color:rgba(63,63,63,var(--tw-text-opacity));display:grid;font:inherit;font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.icon-show-mobile[data-v-8053bda6]{fill:#fff}.tittle[data-v-8053bda6]{color:var(--color_text_card);font-family:var(--font-style-1)!important;font:inherit;font-size:100%}.categoria[data-v-8053bda6]{color:var(--color_subtext_card);font-family:var(--font-style-3)!important;font:inherit;font-size:100%}.precio[data-v-8053bda6]{color:var(--color_price_card);font-family:var(--font-style-3)!important;font-weight:600}.text-free[data-v-8053bda6]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.icon-overlay-free[data-v-8053bda6]{color:#25db37}.text-sould[data-v-8053bda6]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}@media (min-width:300px){.text-cart[data-v-8053bda6]{display:none}.txt-cart[data-v-8053bda6]{color:var(--color_text_btn_card);width:100%}.overlay-bottom[data-v-8053bda6]{background:var(--color_background_btn_card);bottom:0;height:20%;left:10px;overflow:hidden;position:absolute;right:0;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:20%}.overlay-bottom[data-v-8053bda6]:hover{background:var(--hover_card)}.overlay-top[data-v-8053bda6]{--tw-bg-opacity:1;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:20%;left:80%;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:8%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:20%}.overlay-free[data-v-8053bda6]{background-color:#25db37;border-radius:.25rem;height:10%;left:45%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:50%}.text-free[data-v-8053bda6]{font-size:75%}.overlay-polygon[data-v-8053bda6]{background-color:transparent;height:5%;left:85%;top:10%;width:5%}.overlay-polygon[data-v-8053bda6],.overlay-sould[data-v-8053bda6]{overflow:hidden;position:absolute;right:0}.overlay-sould[data-v-8053bda6]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:60%;top:0;transition:.5s ease;width:35%}.svg-sould-out[data-v-8053bda6]{height:40px;width:40px}.cart-shop[data-v-8053bda6]{display:none}.content-price[data-v-8053bda6]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.text-price[data-v-8053bda6]{font-size:12px}.separator-price[data-v-8053bda6]{margin-left:1px;margin-right:1px}}@media (max-width:425px){.icon[data-v-8053bda6]{font-size:20px}.icon-show-mobile[data-v-8053bda6]{width:20px}}@media (min-width:426px){.icon[data-v-8053bda6]{font-size:25px}.icon-show-mobile[data-v-8053bda6]{width:25px}}@media (min-width:530px){.icon[data-v-8053bda6]{font-size:30px}.icon-show-mobile[data-v-8053bda6]{width:30px}}@media (min-width:768px){.text-free[data-v-8053bda6]{font-size:100%}.svg-sould-out[data-v-8053bda6]{height:60px;width:60px}.text-price[data-v-8053bda6]{font-size:15px}.separator-price[data-v-8053bda6]{margin-left:4px;margin-right:4px}}@media (max-width:1279px){.overlay-bottom[data-v-8053bda6]{align-items:center;bottom:10px;display:flex;height:18%;justify-content:center;left:10px;overflow:hidden;right:0;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:18%}.overlay-bottom[data-v-8053bda6]:hover{background:var(--hover_card)}.cart-shop-mobile[data-v-8053bda6]{display:flex}}@media (min-width:1280px){.icon[data-v-8053bda6]{margin-top:0}.text-cart[data-v-8053bda6]{display:block}.overlay-bottom[data-v-8053bda6]{bottom:0;height:0;left:0;overflow:hidden;position:absolute;right:0;width:100%}.overlay-bottom[data-v-8053bda6],.overlay-bottom[data-v-8053bda6]:hover{transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.overlay-bottom[data-v-8053bda6]:hover{background:var(--hover_card)}.container-productCard:hover .overlay-bottom[data-v-8053bda6]{height:12%}.overlay-top[data-v-8053bda6]{--tw-bg-opacity:1;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:20%;left:100%;overflow:hidden;position:absolute;right:0;top:6%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:0}.container-productCard:hover .overlay-top[data-v-8053bda6]{left:85%;width:15%}.overlay-free[data-v-8053bda6]{background-color:#25db37;border-radius:.25rem;height:10%;left:80%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:0}.container-productCard:hover .overlay-free[data-v-8053bda6]{left:55%;transition-delay:.7s;width:44%}.text-free[data-v-8053bda6]{font-size:100%}.overlay-polygon[data-v-8053bda6]{background-color:transparent;height:5%;left:100%;overflow:hidden;position:absolute;right:0;top:10%;width:0}.container-productCard:hover .overlay-polygon[data-v-8053bda6]{left:89%;transition-delay:.95s;width:5%}.overlay-sould[data-v-8053bda6]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:100%;overflow:hidden;position:absolute;right:0;top:5%;transition:.5s ease;width:0}.container-productCard:hover .overlay-sould[data-v-8053bda6]{left:65%;transition-delay:.7s;width:35%}.svg-sould-out[data-v-8053bda6]{height:60px;width:60px}.cart-shop[data-v-8053bda6]{display:flex}.cart-shop-mobile[data-v-8053bda6]{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_productcard/ProductCard.vue?vue&type=template&id=8053bda6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto-productCard",
    style: [_vm.settingKProdutCard, _vm.settingGeneral]
  }, [_vm._ssrNode("<div class=\"container-productCard\"" + _vm._ssrStyle(null, [{
    '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'David Libre'
  }, {
    '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Great Vibes'
  }, {
    '--font-style-3': this.settingGeneral && this.settingGeneral.fount_3 ? this.settingGeneral.fount_3 : 'Lora'
  }], null) + " data-v-8053bda6>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-image",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('client-only', [!_vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(this.product.foto_cloudinary, 550, 550),
      expression: "idCloudinary(this.product.foto_cloudinary, 550, 550)"
    }],
    staticClass: "product-image",
    attrs: {
      "alt": "Product Img"
    }
  }) : _vm._e(), _vm._v(" "), _vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(this.product.foto_cloudinary, 550, 550),
      expression: "idCloudinary(this.product.foto_cloudinary, 550, 550)"
    }],
    staticClass: "product-image-soldOut",
    attrs: {
      "alt": "Product Img"
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "image_overlay"
  })], 1), _vm._ssrNode(" " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-top\" data-v-8053bda6><div class=\"icons-hover\" data-v-8053bda6><div class=\"transport-icon\" data-v-8053bda6>" + (!_vm.getFreeShipping && !_vm.soldOut ? "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"#333\" class=\"transporte-icon\" data-v-8053bda6><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-8053bda6></path></svg>" : "<!---->") + "</div></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-free\" data-v-8053bda6><div class=\"text-free\" data-v-8053bda6><p data-v-8053bda6>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardGratis'))) + "</p></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-polygon\" data-v-8053bda6><svg width=\"12px\" height=\"12px\" viewBox=\"0 0 255 255\" class=\"icon-overlay-free\" data-v-8053bda6><polygon points=\"0,0 127.5,127.5 255,0\" class=\"fill-current\" data-v-8053bda6></polygon></svg></div>" : "<!---->") + " " + (_vm.soldOut ? "<div class=\"overlay-sould\" data-v-8053bda6><div class=\"text-sould\" data-v-8053bda6><svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" viewBox=\"0 0 512 512\" class=\"svg-sould-out\" data-v-8053bda6><g data-v-8053bda6><g data-v-8053bda6><path d=\"m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z\" fill=\"#cd3232\" data-v-8053bda6></path></g> <g data-v-8053bda6><path d=\"m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#cd3232\" data-v-8053bda6></path></g> <g data-v-8053bda6><path d=\"m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#ff4646\" data-v-8053bda6></path></g> <g data-v-8053bda6><circle cx=\"96\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-8053bda6></circle></g> <g data-v-8053bda6><circle cx=\"384\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-8053bda6></circle></g> <g data-v-8053bda6><path d=\"m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z\" fill=\"#463c4b\" data-v-8053bda6></path></g> <g data-v-8053bda6><circle cx=\"240\" cy=\"92.457\" fill=\"#ff4646\" r=\"24\" data-v-8053bda6></circle></g> <g data-v-8053bda6><g data-v-8053bda6><path d=\"m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z\" fill=\"#32283c\" data-v-8053bda6></path></g> <g data-v-8053bda6><path d=\"m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#32283c\" data-v-8053bda6></path></g> <g data-v-8053bda6><path d=\"m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#e6e6eb\" data-v-8053bda6></path></g> <g data-v-8053bda6><path d=\"m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z\" fill=\"#32283c\" data-v-8053bda6></path></g> <g data-v-8053bda6><path d=\"m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z\" fill=\"#32283c\" data-v-8053bda6></path></g> <g data-v-8053bda6><path d=\"m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z\" fill=\"#e6e6eb\" data-v-8053bda6></path></g> <path d=\"m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" fill=\"#e6e6eb\" data-v-8053bda6></path></g></g></svg></div></div>" : "<!---->") + " "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div class=\"overlay-bottom\" data-v-8053bda6>", "</div>", [_vm._ssrNode("<div class=\"cart-shop-mobile\" data-v-8053bda6>", "</div>", [_vm._ssrNode("<div class=\"icon-cart\" data-v-8053bda6>", "</div>", [_c('cart-icon', {
    staticClass: "icon"
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cart-Shop\" data-v-8053bda6>", "</div>", [_vm._ssrNode((!_vm.hover ? "<div class=\"text-cart\" data-v-8053bda6><p class=\"txt-cart\" data-v-8053bda6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_añadiralcarrito'))) + "</p></div>" : "<!---->") + " "), _vm.hover ? _vm._ssrNode("<div class=\"icon-cart\" data-v-8053bda6>", "</div>", [_c('cart-icon', {
    staticClass: "icon"
  })], 1) : _vm._e()], 2)], 2) : _vm._ssrNode("<div class=\"overlay-bottom\" data-v-8053bda6>", "</div>", [_vm._ssrNode("<div class=\"cart-shop-mobile\" data-v-8053bda6><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\" class=\"icon-show-mobile\" data-v-8053bda6><path d=\"M19 6H17A5 5 0 0 0 7 6H5A2 2 0 0 0 3 8V20A2 2 0 0 0 5 22H12.05A6.5 6.5 0 0 1 9 16.5A6.4 6.4 0 0 1 10.25 12.68A5 5 0 0 1 7 8H9A3 3 0 0 0 12 11H12.06A6.22 6.22 0 0 1 14.06 10.16A3 3 0 0 0 15 8H17A4.88 4.88 0 0 1 16.54 10.09A6.5 6.5 0 0 1 21 13.09V8A2 2 0 0 0 19 6M9 6A3 3 0 0 1 15 6M19.31 18.9A4.5 4.5 0 1 0 17.88 20.32L21 23.39L22.39 22M15.5 19A2.5 2.5 0 1 1 18 16.5A2.5 2.5 0 0 1 15.5 19Z\" data-v-8053bda6></path></svg></div> "), _vm._ssrNode("<div class=\"cart-Shop\" data-v-8053bda6>", "</div>", [_vm._ssrNode("<div class=\"text-cart\" data-v-8053bda6>", "</div>", [_c('nuxt-link', {
    attrs: {
      "nuxt-link": "",
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('p', {
    staticClass: "color_tex_btn"
  }, [_vm._v(_vm._s(_vm.$t('home_cardvermas')))])])], 1)])], 2)], 2), _vm._ssrNode(" <div class=\"datos-producto\"" + _vm._ssrStyle(null, [{
    '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'David Libre'
  }, {
    '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Great Vibes'
  }, {
    '--font-style-3': this.settingGeneral && this.settingGeneral.fount_3 ? this.settingGeneral.fount_3 : 'Lora'
  }], null) + " data-v-8053bda6><div class=\"tittle\" data-v-8053bda6>" + (this.product.nombre.length >= 54 ? "<p class=\"card-title\" data-v-8053bda6>" + _vm._ssrEscape("\n        " + _vm._s(`${this.product.nombre.slice(0, 54)}...`) + "\n      ") + "</p>" : "<p class=\"card-title\" data-v-8053bda6>" + _vm._ssrEscape("\n        " + _vm._s(`${this.product.nombre.slice(0, 54)}`) + "\n      ") + "</p>") + "</div> " + (this.product.categoria ? "<div class=\"categoria\" data-v-8053bda6>" + _vm._ssrEscape("\n      " + _vm._s(this.product.categoria) + "\n    ") + "</div>" : "<!---->") + " <div class=\"precio\" data-v-8053bda6>" + (this.product.precio ? "<div class=\"content-text-price\" data-v-8053bda6>" + (this.estadoCart == true && this.equalsPrice ? "<div data-v-8053bda6>" + (this.minPrice ? "<p class=\"text-price\" data-v-8053bda6>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>" : this.estadoCart == true && this.minPrice != this.maxPrice && !this.equalsPrice ? "<div class=\"content-price\" data-v-8053bda6>" + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-8053bda6>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div>" : "<!---->") + " <p class=\"separator-price\" data-v-8053bda6>-</p> " + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-8053bda6>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div>" : "<!---->") + "</div>" : "<div data-v-8053bda6>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-8053bda6>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>") + "</div>" : "<div class=\"h-20\" data-v-8053bda6></div>") + "</div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/_productcard/ProductCard.vue?vue&type=template&id=8053bda6&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_productcard/ProductCard.vue?vue&type=script&lang=js&


/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'Ko7-ProductCard-2',
  props: {
    product: Object,
    settingKProdutCard: Object,
    settingGeneral: Object
  },
  data() {
    return {
      hover: false,
      estadoCart: false,
      minPrice: '',
      maxPrice: '',
      idSlug: '',
      maxQuantityValue: 0,
      productIndexCart: null,
      productCart: {},
      salesData: null,
      spent: false,
      active: true,
      equalsPrice: false
    };
  },
  mounted() {
    this.idSlug = this.product.id;
    this.productPrice();
    if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
      this.estadoCart = true;
    }
    if (this.product) {
      this.getDataProduct();
    }
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore;
    },
    productsCarts() {
      return this.$store.state.productsCart;
    },
    getFreeShipping() {
      let free = true;
      if (this.product.envio_gratis == 1) {
        free = false;
      } else if (this.rangosByCiudad.envio_metodo === 'gratis') {
        free = false;
      }
      return free;
    },
    rangosByCiudad() {
      this.rangosByCiudades = JSON.parse(this.$store.state.envios.valores);
      return this.rangosByCiudades;
    },
    soldOut() {
      if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
        // this.estadoCart = true
        const arrCombinations = this.product.variantes;
        let inventario = 0;
        if (arrCombinations.length && arrCombinations[0].variantes !== '[object Object]') {
          if (arrCombinations[0].combinaciones.length && arrCombinations[0].combinaciones.length) {
            if (JSON.parse(arrCombinations[0].combinaciones[0].combinaciones).length) {
              JSON.parse(arrCombinations[0].combinaciones[0].combinaciones).forEach(item => {
                if (item.unidades) {
                  inventario += parseInt(item.unidades);
                }
              });
            }
          }
        }
        return !inventario;
      } else {
        return !this.product.stock;
      }
    }
  },
  methods: {
    getDataProduct() {
      if (this.product) {
        this.salesData = {
          precio: this.product.precio,
          unidades: this.product.stock,
          sku: this.product.sku,
          estado: true
        };
        this.maxQuantityValue = this.product.stock;
        this.productsCarts.find((productCart, index) => {
          if (productCart.id == this.product.id) {
            this.productIndexCart = index;
            this.productCart = productCart;
            this.maxQuantityValue = this.product.stock - productCart.cantidad;
          }
        });
        if (this.salesData.unidades == 0 || this.maxQuantityValue <= 0 || this.maxQuantityValue == 0) {
          this.spent = true;
        }
      }
    },
    addShoppingCart() {
      if (this.product) {
        this.productIndexCart = null;
        this.getDataProduct();
        if (this.product.id == this.idSlug) {
          let product = {
            id: this.product.id,
            precio: this.product.precio,
            cantidad: 1,
            foto_cloudinary: this.product.foto_cloudinary,
            nombre: this.product.nombre,
            combinacion: undefined,
            envio_gratis: this.product.envio_gratis
          };
          if (this.salesData) {
            product.limitQuantity = this.product.stock;
          } else {
            product.limitQuantity = this.product.stock;
          }
          if (typeof this.productIndexCart === 'number') {
            const mutableProduct = this.$store.state.productsCart[this.productIndexCart];
            mutableProduct.cantidad += 1;
            this.$store.state.productsCart.splice(this.productIndexCart, 1, mutableProduct);
          } else {
            this.$store.state.productsCart.push(product);
          }
          this.$store.commit('UPDATE_CONTENT_CART');
          // this.$router.push('/')
          this.$store.commit('SET_OPEN_ORDER', true);
          // this.$store.state.orderComponent = true
          this.$store.dispatch('SEND_ADD_TO_CART', 1);
        }
      }
    },
    productPrice() {
      if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
        const arrCombinations = this.product.variantes;
        if (arrCombinations.length && arrCombinations[0].variantes !== '[object Object]') {
          this.productVariants = true;
          if (this.product && this.product.combinaciones && this.product.combinaciones.length && this.product.combinaciones.length > 1) {
            let arrPrice = [];
            this.product.combinaciones.find(products => {
              if (products.precio && products.estado == true) {
                arrPrice.push(products.precio);
              }
            });
            if (arrPrice) {
              let resultPrice = arrPrice.sort(function (prev, next) {
                return prev - next;
              });
              if (resultPrice[resultPrice.length - 1]) {
                this.minPrice = resultPrice[0];
                this.maxPrice = resultPrice[resultPrice.length - 1];
                if (this.minPrice === this.maxPrice) {
                  this.equalsPrice = true;
                } else {
                  this.equalsPrice = false;
                }
              }
            }
          }
        }
      }
    }
  },
  watch: {
    productsCarts(value) {
      this.getDataProduct();
    }
  }
});
// CONCATENATED MODULE: ./components/template7/_productcard/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/_productcard/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(145)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8053bda6",
  "311d18ca"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(765);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("46953997", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  filters: {
    currency(value, codigo_pais, moneda) {
      let resultCurrent;
      if (codigo_pais && moneda) {
        if (value && codigo_pais == 'co' && moneda == 'COP') {
          // return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          return `$${new Intl.NumberFormat('de-DE').format(value)}`;
        } else if (value && codigo_pais == 'pe' && moneda == 'PEN') {
          // return `S/ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          return `S/ ${new Intl.NumberFormat('es-PE').format(value)}`;
        } else if (codigo_pais == 'internacional') {
          resultCurrent = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: moneda,
            minimumFractionDigits: 0
          }).format(value);
          return `${resultCurrent}`;
        } else {
          resultCurrent = new Intl.NumberFormat(codigo_pais, {
            style: 'currency',
            currency: moneda,
            minimumFractionDigits: 0
          }).format(value);
          return `${resultCurrent}`;
        }
      } else {
        if (value) {
          // return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          return `$${new Intl.NumberFormat('de-DE').format(value)}`;
        }
      }
    }
  }
});

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_gify_vue_vue_type_style_index_0_id_7fbdb95c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_gify_vue_vue_type_style_index_0_id_7fbdb95c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_gify_vue_vue_type_style_index_0_id_7fbdb95c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_gify_vue_vue_type_style_index_0_id_7fbdb95c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_gify_vue_vue_type_style_index_0_id_7fbdb95c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-content[data-v-7fbdb95c]{align-items:center;background:var(--background_color_1);display:flex;flex-direction:column;justify-content:center;padding-bottom:60px;padding-top:60px;width:100%}.separador-blog[data-v-7fbdb95c]{padding-top:100px}.product-conten-items[data-v-7fbdb95c],.product-text[data-v-7fbdb95c]{width:100%}. border[data-v-7fbdb95c],.description[data-v-7fbdb95c],.product-conten-items[data-v-7fbdb95c],.product-description[data-v-7fbdb95c],.product-subtittle[data-v-7fbdb95c],.product-text[data-v-7fbdb95c],.product-tittle[data-v-7fbdb95c],.subtittle[data-v-7fbdb95c],.tittle[data-v-7fbdb95c]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center}.tittle[data-v-7fbdb95c]{color:var(--color_pre_title);font-family:var(--font-style-2)!important}.subtittle[data-v-7fbdb95c]{color:var(--color_title);font-family:var(--font-style-1)!important}.description[data-v-7fbdb95c]{color:var(--color_description);font-family:var(--font-style-3)!important}.product-conten-items[data-v-7fbdb95c]{display:flex;flex-direction:row}@media (min-width:300px){.producto-items-content[data-v-7fbdb95c]{width:95%}.tittle[data-v-7fbdb95c]{font-size:24px;line-height:34px}.subtittle[data-v-7fbdb95c]{font-size:32px;line-height:42px}.description[data-v-7fbdb95c]{font-size:14px;line-height:24px}}@media (min-width:768px){.subtittle[data-v-7fbdb95c]{font-size:36px;line-height:46px}}@media (min-width:1024px){.product-text[data-v-7fbdb95c]{width:100%}}@media (min-width:1280px){.producto-items-content[data-v-7fbdb95c]{width:93%}}@media (min-width:1192px){.producto-items-content[data-v-7fbdb95c]{width:1192px}}@media (min-width:2560px){.tittle[data-v-7fbdb95c]{font-size:24px;line-height:34px}.subtittle[data-v-7fbdb95c]{font-size:36px;line-height:46px}.description[data-v-7fbdb95c]{font-size:14px;line-height:24px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("438dea13", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=85.js.map