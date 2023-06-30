exports.ids = [75];
exports.modules = {

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(259);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("485191bf", content, true, context)
};

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardHoko_vue_vue_type_style_index_0_id_43eb9e7d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardHoko_vue_vue_type_style_index_0_id_43eb9e7d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardHoko_vue_vue_type_style_index_0_id_43eb9e7d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardHoko_vue_vue_type_style_index_0_id_43eb9e7d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardHoko_vue_vue_type_style_index_0_id_43eb9e7d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-image[data-v-43eb9e7d]{max-height:444px;min-height:444px;-o-object-fit:contain;object-fit:contain;overflow:hidden;width:100%}.producto[data-v-43eb9e7d]{align-items:center;background:var(--background_color_card);cursor:pointer;height:100%}.datos-producto[data-v-43eb9e7d],.producto[data-v-43eb9e7d]{display:flex;flex-direction:column;justify-content:center;width:100%}.datos-producto[data-v-43eb9e7d]{align-items:flex-start;cursor:default;margin-bottom:24px;margin-top:24px}.container[data-v-43eb9e7d]{max-width:100%;position:relative}.cart-Shop[data-v-43eb9e7d]{font:inherit;font-size:100%;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.tittle[data-v-43eb9e7d]{font-family:var(--font-style-2);font:inherit;font-size:100%;max-height:49px;min-height:49px}.tittle-xml[data-v-43eb9e7d]{display:inline;display:initial}.tittle-lg[data-v-43eb9e7d],.tittle-sm[data-v-43eb9e7d]{display:none}.categoria[data-v-43eb9e7d]{color:var(--color_category);font-family:var(--font-style-2)!important;font:inherit;font-weight:600}.card-title[data-v-43eb9e7d]{color:var(--color_text_card);font-family:var(--font-style-2)!important;font:inherit;font-weight:800;text-align:left}.producto:hover .text-price[data-v-43eb9e7d]{color:#333}.text-price[data-v-43eb9e7d]{color:var(--color_price_card);font-family:var(--font-style-2)!important;font-size:16px;font-weight:600;line-height:1.1;text-align:left;white-space:nowrap}.overlay-bottom[data-v-43eb9e7d]{background-color:var(--color_background_btn)}.overlay-bottom[data-v-43eb9e7d]:hover{background-color:#3d3d3d}.txt-add[data-v-43eb9e7d]{color:var(--color_text_btn);font-size:15px;font-weight:800;letter-spacing:1px;transition:all .2s ease-in}.overlay-bottom:hover .txt-add[data-v-43eb9e7d]{color:#fff;transition:all .2s ease-in}.product-image-soldOut[data-v-43eb9e7d]{filter:grayscale(100%)}@media (min-width:300px){.categoria[data-v-43eb9e7d]{font-size:13px;margin-bottom:3px}.card-title[data-v-43eb9e7d],.precio[data-v-43eb9e7d]{font-size:16px}.overlay-bottom[data-v-43eb9e7d]{bottom:10px;height:0;left:10px;overflow:hidden;position:absolute;right:0;transition-duration:.1s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:110px}.producto:hover .overlay-bottom[data-v-43eb9e7d]{height:30px}.content-price[data-v-43eb9e7d]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}}@media (min-width:768px){.overlay-bottom[data-v-43eb9e7d]{bottom:10px;height:0;left:10px;overflow:hidden;position:absolute;right:0;transition-duration:.1s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:110px}.producto:hover .overlay-bottom[data-v-43eb9e7d]{height:40px}}@media (min-width:1280px){.text-cart[data-v-43eb9e7d]{display:block}}@media (max-width:1125px){.tittle-xml[data-v-43eb9e7d]{display:none}.tittle-lg[data-v-43eb9e7d]{display:inline;display:initial}.tittle-sm[data-v-43eb9e7d]{display:none}}@media (max-width:1366px){.product-image[data-v-43eb9e7d]{max-height:360px;min-height:360px}}@media (max-width:1280px){.product-image[data-v-43eb9e7d]{max-height:320px;min-height:320px}}@media (max-width:1024px){.product-image[data-v-43eb9e7d]{max-height:320px;min-height:320px}}@media (max-width:400px){.tittle-lg[data-v-43eb9e7d],.tittle-xml[data-v-43eb9e7d]{display:none}.tittle-sm[data-v-43eb9e7d]{display:inline;display:initial}.product-image[data-v-43eb9e7d]{max-height:220px;min-height:220px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productcard/ProductCardHoko.vue?vue&type=template&id=43eb9e7d&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto",
    style: [_vm.productListCard, _vm.settingGeneral]
  }, [_vm._ssrNode("<div class=\"container\"" + _vm._ssrStyle(null, [{
    '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Roboto'
  }], null) + " data-v-43eb9e7d>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productosHoko/` + _vm.product.id
      }
    }
  }, [_c('client-only', [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.product.images[0],
      expression: "product.images[0]"
    }],
    staticClass: "product-image",
    class: _vm.soldOut ? 'product-image-soldOut' : '',
    attrs: {
      "alt": "Product Img"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "image_overlay"
  })], 1), _vm._ssrNode(" "), _c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productosHoko/` + _vm.product.id
      }
    }
  }, [_c('div', {
    staticClass: "overlay-bottom"
  }, [_c('div', {
    staticClass: "cart-Shop"
  }, [_c('div', {
    staticClass: "text-cart"
  }, [_c('p', {
    staticClass: "w-full txt-add"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('home_vistarapida')) + "\n            ")])])])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"datos-producto\"" + _vm._ssrStyle(null, [{
    '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Roboto'
  }], null) + " data-v-43eb9e7d>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productosHoko/` + _vm.product.id
      }
    }
  }, [_c('div', {
    staticClass: "tittle tittle-xml"
  }, [this.product.name.length >= 90 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.name.slice(0, 90)}...`) + "\n        ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.name.slice(0, 90)}`) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "tittle tittle-lg"
  }, [this.product.name.length >= 54 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.name.slice(0, 54)}...`) + "\n        ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.name.slice(0, 54)}`) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "tittle tittle-sm"
  }, [this.product.name.length >= 30 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.name.slice(0, 30)}...`) + "\n        ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.name.slice(0, 30)}`) + "\n        ")])])]), _vm._ssrNode(" <div class=\"precio\" data-v-43eb9e7d>" + (this.product.price ? "<div class=\"content-text-price\" data-v-43eb9e7d><p class=\"text-price\" data-v-43eb9e7d>" + _vm._ssrEscape("\n          " + _vm._s(_vm._f("currency")(this.product.price)) + "\n        ") + "</p></div>" : "<div class=\"h-27\" data-v-43eb9e7d></div>") + "</div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/_productcard/ProductCardHoko.vue?vue&type=template&id=43eb9e7d&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productcard/ProductCardHoko.vue?vue&type=script&lang=js&

/* harmony default export */ var ProductCardHokovue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-ProductCard-9-Ho',
  props: {
    product: Object,
    settingGeneral: Object,
    productListCard: Object
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
      active: true
    };
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore;
    },
    soldOut() {
      if (this.product && this.product.stock_amount === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  filters: {
    currency(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
      }
      return '';
    }
  }
});
// CONCATENATED MODULE: ./components/template9/_productcard/ProductCardHoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_ProductCardHokovue_type_script_lang_js_ = (ProductCardHokovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/_productcard/ProductCardHoko.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(258)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_ProductCardHokovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "43eb9e7d",
  "3c554353"
  
)

/* harmony default export */ var ProductCardHoko = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(784);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("03403890", content, true, context)
};

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(786);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6a52d812", content, true, context)
};

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlidehoko_vue_vue_type_style_index_0_id_77a6df33_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlidehoko_vue_vue_type_style_index_0_id_77a6df33_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlidehoko_vue_vue_type_style_index_0_id_77a6df33_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlidehoko_vue_vue_type_style_index_0_id_77a6df33_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlidehoko_vue_vue_type_style_index_0_id_77a6df33_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-wrapper[data-v-77a6df33]{position:relative;width:100%}.swiper-slide[data-v-77a6df33]{width:100%}.swiper-pagination[data-v-77a6df33] .swiper-pagination-bullet{background-color:grey}.swiper-pagination[data-v-77a6df33] .swiper-pagination-bullet-active{background-color:var(--color_icon)}.btn[data-v-77a6df33]{background:#000;border-radius:25px;cursor:pointer;padding:0 22px}.btn-icon[data-v-77a6df33]{align-items:center;bottom:.125em;color:#fff;display:flex;font-size:45px;justify-content:center;width:100%}.btn-icon[data-v-77a6df33]:hover{color:var(--color_icon)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_slider_hoko_vue_vue_type_style_index_0_id_7fbf5994_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(421);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_slider_hoko_vue_vue_type_style_index_0_id_7fbf5994_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_slider_hoko_vue_vue_type_style_index_0_id_7fbf5994_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_slider_hoko_vue_vue_type_style_index_0_id_7fbf5994_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_slider_hoko_vue_vue_type_style_index_0_id_7fbf5994_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-ProductFavoritos[data-v-7fbf5994]{align-items:center;background:var(--background_color_1);box-sizing:border-box;padding:30px 0}.swiper-container[data-v-7fbf5994],.wrapper-ProductFavoritos[data-v-7fbf5994]{display:flex;flex-direction:column;justify-content:center;width:100%}.swiper-container[data-v-7fbf5994]{align-items:flex-start;width:93vw}.product-text[data-v-7fbf5994]{margin-bottom:30px;max-width:470px;text-align:center;width:100%}.tittle[data-v-7fbf5994]{color:var(--color_title);font-family:var(--font-style-1);font-weight:700}.btn-products[data-v-7fbf5994]{border:2px solid var(--color_background_btn);color:var(--color_text_btn);font-family:var(--font-style-2);font-size:15px;font-weight:800;height:45px;letter-spacing:1px;margin-top:80px;padding-left:5px;padding-right:5px;width:auto}.btn-products[data-v-7fbf5994],.btn-products[data-v-7fbf5994]:hover{transition:all .15s ease-in}.btn-products[data-v-7fbf5994]:hover{background-color:#2c2930;color:#fff}@media (max-width:1300px){.swiper-container[data-v-7fbf5994]{padding:20px 8px}.wrapper-ProductFavoritos[data-v-7fbf5994]{padding:30px 10px}}@media (max-width:770px){.swiper-container[data-v-7fbf5994]{padding:20px 8px}}@media (max-width:380px){.swiper-container[data-v-7fbf5994]{padding:20px 5px}}@media (min-width:300px){.tittle[data-v-7fbf5994]{font-size:30px;line-height:34px}}@media (min-width:1920px){.tittle[data-v-7fbf5994]{font-size:36px;line-height:34px}}@media (max-width:460px){.product-text[data-v-7fbf5994]{width:90%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/Ko-slider-hoko.vue?vue&type=template&id=7fbf5994&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.producthoko && _vm.producthoko.total > 0 ? _c('div', {
    staticClass: "wrapper-ProductFavoritos",
    style: [_vm.productList, _vm.settingGeneral, {
      '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Poppins'
    }, {
      '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"product-text\" data-v-7fbf5994><p class=\"tittle\" data-v-7fbf5994>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('home_productos_hoko')) + "\n    ") + "</p></div> "), _c('KoSwipper', {
    attrs: {
      "products": _vm.producthoko,
      "settingGeneral": _vm.settingGeneral,
      "productListCard": _vm.productListCard
    }
  }), _vm._ssrNode(" "), _c('nuxt-link', {
    attrs: {
      "to": "/productosHoko"
    }
  }, [_c('button', {
    staticClass: "btn-products"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('home_allproducts')) + "\n    ")])])], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/Ko-slider-hoko.vue?vue&type=template&id=7fbf5994&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productofavorito/productSlidehoko.vue?vue&type=template&id=77a6df33&scoped=true&
var productSlidehokovue_type_template_id_77a6df33_scoped_true_render = function render() {
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
    ref: "mySwiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-77a6df33>", "</div>", _vm._l(this.products.data, function (product, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\" data-v-77a6df33>", "</div>", [_c('client-only', [_c('KoProductCard1', {
      attrs: {
        "product": product,
        "productListCard": _vm.productListCard,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1)], 1);
  }), 0)]);
};
var productSlidehokovue_type_template_id_77a6df33_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/_productofavorito/productSlidehoko.vue?vue&type=template&id=77a6df33&scoped=true&

// EXTERNAL MODULE: ./components/template9/_productcard/ProductCardHoko.vue + 4 modules
var ProductCardHoko = __webpack_require__(273);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productofavorito/productSlidehoko.vue?vue&type=script&lang=js&

/* harmony default export */ var productSlidehokovue_type_script_lang_js_ = ({
  name: 'productSlide-productFavorito-hoko',
  components: {
    KoProductCard1: ProductCardHoko["a" /* default */]
  },
  props: {
    products: {},
    settingGeneral: Object,
    productListCard: Object
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
          2000: {
            slidesPerView: 4,
            spaceBetween: 35
          },
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
            slidesPerView: 1,
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
  },
  methods: {
    changeSlide() {
      this.swiper.slidePrev(700, false);
    }
  }
});
// CONCATENATED MODULE: ./components/template9/_productofavorito/productSlidehoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productofavorito_productSlidehokovue_type_script_lang_js_ = (productSlidehokovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/_productofavorito/productSlidehoko.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(783)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productofavorito_productSlidehokovue_type_script_lang_js_,
  productSlidehokovue_type_template_id_77a6df33_scoped_true_render,
  productSlidehokovue_type_template_id_77a6df33_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "77a6df33",
  "9e9c15ae"
  
)

/* harmony default export */ var productSlidehoko = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/Ko-slider-hoko.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_slider_hokovue_type_script_lang_js_ = ({
  name: 'suggestionsProductoHoko',
  created() {
    this.$store.dispatch('GET_PRODUCTSHOKO', 1);
  },
  props: {
    productList: Object,
    settingGeneral: Object,
    productListCard: Object
  },
  components: {
    KoSwipper: productSlidehoko
  },
  computed: {
    producthoko() {
      return this.$store.state.producthoko;
    }
  }
});
// CONCATENATED MODULE: ./components/template9/Ko-slider-hoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var template9_Ko_slider_hokovue_type_script_lang_js_ = (Ko_slider_hokovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template9/Ko-slider-hoko.vue



function Ko_slider_hoko_injectStyles (context) {
  
  var style0 = __webpack_require__(785)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko_slider_hoko_component = Object(componentNormalizer["a" /* default */])(
  template9_Ko_slider_hokovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Ko_slider_hoko_injectStyles,
  "7fbf5994",
  "4f9f469a"
  
)

/* harmony default export */ var Ko_slider_hoko = __webpack_exports__["default"] = (Ko_slider_hoko_component.exports);

/***/ })

};;
//# sourceMappingURL=75.js.map