exports.ids = [65];
exports.modules = {

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("b18485cc", content, true, context)
};

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCardHoko_1_vue_vue_type_style_index_0_id_48b83b34_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCardHoko_1_vue_vue_type_style_index_0_id_48b83b34_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCardHoko_1_vue_vue_type_style_index_0_id_48b83b34_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCardHoko_1_vue_vue_type_style_index_0_id_48b83b34_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCardHoko_1_vue_vue_type_style_index_0_id_48b83b34_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-card[data-v-48b83b34]{align-items:center;background:#fff;border:1px solid hsla(0,0%,95%,.637);border-radius:5px;box-shadow:0 1px 1px #e2e2e2;box-sizing:border-box;justify-content:center}.container-card[data-v-48b83b34],.wrapper-card[data-v-48b83b34]{display:flex;height:100%;width:100%}.container-card[data-v-48b83b34]{align-items:flex-start;border-radius:5px;flex-direction:column}.container-card[data-v-48b83b34],.wrapper-image[data-v-48b83b34]{overflow:hidden;position:relative}.wrapper-image[data-v-48b83b34]{align-items:center;display:flex;height:294px;justify-content:center;max-height:300px;min-height:294px;width:100%}.product-image[data-v-48b83b34]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.notproduct-image[data-v-48b83b34]{height:294px;max-height:294px;width:300px}.product-image-soldOut[data-v-48b83b34]{filter:grayscale(100%)}.image_overlay[data-v-48b83b34]{background:hsla(0,0%,41%,.165);height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}#product-card:hover .image_overlay[data-v-48b83b34]{opacity:.7;transition:all .2s ease-out}.separador-stats[data-v-48b83b34]{height:95px;width:100%}.stats-container[data-v-48b83b34]{background:#fff;display:flex;flex-direction:column;height:120px;justify-content:space-between;left:0;padding:20px 12px 0;position:absolute;top:288px;transition:all .2s ease-out;width:100%}#product-card:hover .stats-container[data-v-48b83b34]{top:241px;transition:all .2s ease-out}.card-info-1[data-v-48b83b34]{background:#e71f77;color:#fff;top:-44px}.card-info-1[data-v-48b83b34],.card-info-2[data-v-48b83b34]{align-items:center;border-radius:var(--radius_btn);display:flex;font-size:12px;justify-content:center;padding:1px 4px;position:absolute;right:0;z-index:2}.card-info-2[data-v-48b83b34]{background:#35dd8d;color:#000;font-weight:700;top:-22px}.content-name-product[data-v-48b83b34]{align-items:flex-start;display:flex;justify-content:center;min-height:36px;text-align:center;width:100%}.card-title[data-v-48b83b34]{color:#3f3f3f;font-size:15px;font-weight:500}.content-text-price[data-v-48b83b34]{margin-top:5px;width:100%}.content-price[data-v-48b83b34],.content-text-price[data-v-48b83b34]{align-items:center;display:flex;justify-content:center}.content-price[data-v-48b83b34]{flex-direction:row;max-height:29px;min-height:29px}.content-price-empty[data-v-48b83b34]{margin-top:5px;max-height:29px;min-height:29px;width:100%}.text-price[data-v-48b83b34]{color:#464646;font-size:20px;font-weight:500;line-height:1.4;text-align:center}.separator-price[data-v-48b83b34]{color:#464646;margin-left:5px;margin-right:5px}.wrapper-btn-icon[data-v-48b83b34]{flex-direction:row;width:100%}#add_cart[data-v-48b83b34],.wrapper-btn-icon[data-v-48b83b34]{align-items:center;display:flex;justify-content:center}#add_cart[data-v-48b83b34]{background-color:var(--color_background_btn);border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);font-size:19px;font-weight:700;height:41px;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}#add_cart[data-v-48b83b34]:hover{background-color:var(--btnhover);border:2px solid var(--btnhover);cursor:pointer}#product-card:hover #add_cart[data-v-48b83b34]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.view_details[data-v-48b83b34]{align-items:center;background-color:transparent;border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_background_btn);display:flex;font-size:19px;font-weight:700;height:41px;justify-content:center;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}.view_details[data-v-48b83b34]:hover{border:2px solid var(--btnhover);color:var(--btnhover);cursor:pointer}#product-card:hover .view_details[data-v-48b83b34]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.separador-btn[data-v-48b83b34]{width:5px}.wrapper[data-v-48b83b34]{display:inline;display:initial;height:100%;width:100%}.wrapper-movil[data-v-48b83b34]{display:none}.card-icon-cart-movil[data-v-48b83b34]:hover{color:var(--btnhover)}.overlay-top[data-v-48b83b34]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background:#fff;border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#35dd8d;font-size:13px;height:29px;left:100%;overflow:hidden;padding:5px;position:absolute;right:0;top:43px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:0}#product-card:hover .overlay-top[data-v-48b83b34]{left:75%;width:67px}.overlay-free[data-v-48b83b34]{background-color:#35dd8d;border-radius:.25rem;color:#fff;height:35px;left:100%;overflow:hidden;position:absolute;right:0;text-align:center;top:0;transition:.5s ease;width:0}.txt-free[data-v-48b83b34]{font-size:13px;line-height:12px;margin-top:5px}#product-card:hover .overlay-free[data-v-48b83b34]{left:55%;transition-delay:.7s;width:125px}.overlay-polygon[data-v-48b83b34]{fill:#35dd8d;background-color:transparent;height:5%;left:100%;overflow:hidden;position:absolute;right:0;top:35px;width:0}#product-card:hover .overlay-polygon[data-v-48b83b34]{left:90%;transition-delay:.95s;width:5%}@media (max-width:1270px){.separador-stats[data-v-48b83b34]{height:105px}}@media (max-width:1249px){.separador-stats[data-v-48b83b34]{height:98px}}@media (max-width:768px){.wrapper[data-v-48b83b34]{display:none}.wrapper-movil[data-v-48b83b34]{display:inline;display:initial;width:100%}.content-card-items[data-v-48b83b34]{align-items:center;display:flex;flex-direction:column;height:75px;justify-content:space-between;padding:5px 10px;position:relative;width:100%}.card-title[data-v-48b83b34]{font-size:13px}.content-text-price[data-v-48b83b34]{margin-top:0}.text-price[data-v-48b83b34]{font-size:15px}.icon-cart[data-v-48b83b34]{margin-left:20px}.card-info-1[data-v-48b83b34]{font-size:10px;top:-43px}.card-info-2[data-v-48b83b34]{font-size:10px;top:-22px}.notproduct-image-res[data-v-48b83b34]{height:357px;max-height:357px;width:100%}}@media (max-width:450px){.notproduct-image-res[data-v-48b83b34]{height:175px;max-height:170px}.container-card[data-v-48b83b34]{max-width:200px;width:100%}.wrapper-image[data-v-48b83b34]{height:175px;min-height:120px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productcard/Ko-ProductCardHoko-1.vue?vue&type=template&id=48b83b34&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-card"
  }, [_vm._ssrNode("<div id=\"product-card\" class=\"container-card\" data-v-48b83b34>", "</div>", [_vm._ssrNode("<div class=\"wrapper\" data-v-48b83b34>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-image",
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
      "loading": "lazy",
      "alt": "Product Img"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "image_overlay"
  })], 1), _vm._ssrNode(" <div class=\"separador-stats\" data-v-48b83b34></div> "), _vm._ssrNode("<div class=\"stats\" data-v-48b83b34>", "</div>", [_vm._ssrNode("<div class=\"stats-container\" data-v-48b83b34>", "</div>", [_vm._ssrNode((_vm.soldOut ? "<p class=\"card-info-1\" data-v-48b83b34>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_cardAgotado')) + "\n          ") + "</p>" : "<!---->") + " <div class=\"content-name-product\" data-v-48b83b34>" + (this.product.name >= 90 ? "<p class=\"card-title\" data-v-48b83b34>" + _vm._ssrEscape("\n              " + _vm._s(`${this.product.name.slice(0, 90)}...`) + "\n            ") + "</p>" : "<p class=\"card-title\" data-v-48b83b34>" + _vm._ssrEscape("\n              " + _vm._s(`${this.product.name.slice(0, 90)}`) + "\n            ") + "</p>") + "</div> " + (this.product.price ? "<div class=\"content-text-price\" data-v-48b83b34><p class=\"text-price\" data-v-48b83b34>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(this.product.price)) + "\n            ") + "</p></div>" : "<div class=\"content-price-empty\" data-v-48b83b34></div>") + " "), _vm._ssrNode("<div class=\"wrapper-btn-icon\" data-v-48b83b34>", "</div>", [_c('nuxt-link', {
    staticClass: "view_details",
    attrs: {
      "to": {
        path: `/productosHoko/` + _vm.product.id
      }
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('home_cardvermas')))])]), _vm._ssrNode(" <div class=\"separador-btn\" data-v-48b83b34></div>")], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-movil\" data-v-48b83b34>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-image",
    attrs: {
      "to": {
        path: `/productosHoko/` + _vm.product.id
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.product.images[0],
      expression: "product.images[0]"
    }],
    staticClass: "product-image",
    attrs: {
      "loading": "lazy",
      "alt": "Product Img"
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-card-items\" data-v-48b83b34>", "</div>", [_c('nuxt-link', {
    staticClass: "content-name-product",
    attrs: {
      "to": {
        path: `/productosHoko/` + _vm.product.id
      }
    }
  }, [this.product.name >= 25 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(`${this.product.name.slice(0, 25)}..`) + "\n          ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(`${this.product.name.slice(0, 30)}`) + "\n          ")])]), _vm._ssrNode(" "), this.product.price ? _vm._ssrNode("<div class=\"content-text-price\" data-v-48b83b34>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productosHoko/` + _vm.product.id
      }
    }
  }, [_c('p', {
    staticClass: "text-price"
  }, [_vm._v("\n              " + _vm._s(_vm._f("currency")(this.product.price)) + "\n            ")])])], 1) : _vm._e()], 2)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productcard/Ko-ProductCardHoko-1.vue?vue&type=template&id=48b83b34&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productcard/Ko-ProductCardHoko-1.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_ProductCardHoko_1vue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-ProductCard-5-Ho',
  props: {
    product: Object
  },
  computed: {
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
// CONCATENATED MODULE: ./components/template5/_productcard/Ko-ProductCardHoko-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_Ko_ProductCardHoko_1vue_type_script_lang_js_ = (Ko_ProductCardHoko_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/_productcard/Ko-ProductCardHoko-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(224)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_Ko_ProductCardHoko_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "48b83b34",
  "351bcab0"
  
)

/* harmony default export */ var Ko_ProductCardHoko_1 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(722);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("479f98be", content, true, context)
};

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(724);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("104b42b4", content, true, context)
};

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_1dae1175_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(391);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_1dae1175_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_1dae1175_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_1dae1175_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_1dae1175_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-1dae1175],.swiper-wrapper[data-v-1dae1175]{width:100%}.btnPrev[data-v-1dae1175]{left:0}.btnNext[data-v-1dae1175],.btnPrev[data-v-1dae1175]{background:var(--color_text);border-radius:25px;cursor:pointer;padding:0 22px;position:absolute;z-index:10}.btnNext[data-v-1dae1175]{right:0}.btn-icon[data-v-1dae1175]{align-items:center;bottom:.125em;color:#fff;display:flex;font-size:45px;justify-content:center;width:100%}.btn-icon[data-v-1dae1175]:hover{color:grey}.btn-products[data-v-1dae1175]{border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_background_btn);font-family:var(--font-style)!important;font-size:15px;font-weight:800;height:45px;letter-spacing:1px;margin-top:30px;padding-left:6px;padding-right:6px;transition:all .15s ease-in;width:auto}.btn-products[data-v-1dae1175]:hover{border:2px solid var(--btnhover);color:var(--btnhover);transition:all .15s ease-in}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductFavoritosHoko_vue_vue_type_style_index_0_id_8a8d595c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(392);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductFavoritosHoko_vue_vue_type_style_index_0_id_8a8d595c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductFavoritosHoko_vue_vue_type_style_index_0_id_8a8d595c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductFavoritosHoko_vue_vue_type_style_index_0_id_8a8d595c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductFavoritosHoko_vue_vue_type_style_index_0_id_8a8d595c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-ProductFavoritos[data-v-8a8d595c]{align-items:center;background-color:var(--background_color_2);box-sizing:border-box;padding:40px 0}.swiper-container[data-v-8a8d595c],.wrapper-ProductFavoritos[data-v-8a8d595c]{display:flex;flex-direction:column;justify-content:center;width:100%}.swiper-container[data-v-8a8d595c]{align-items:flex-start;max-width:1300px;padding:10px 20px;z-index:1}.content-title-ProductFavoritos[data-v-8a8d595c]{align-items:center;display:flex;justify-content:flex-start;max-width:1300px;padding:10px 20px;width:100%}.title-ProductFavoritos[data-v-8a8d595c]{background:transparent;color:var(--color_subtext);cursor:pointer;font-size:18px;font-weight:700;line-height:1.4}@media (max-width:770px){.swiper-container[data-v-8a8d595c]{padding:20px 8px}.content-title-ProductFavoritos[data-v-8a8d595c]{padding:10px}}@media (max-width:380px){.swiper-container[data-v-8a8d595c]{padding:20px 5px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko-ProductFavoritosHoko.vue?vue&type=template&id=8a8d595c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.producthoko && _vm.producthoko.total > 0 ? _c('div', {
    staticClass: "wrapper-ProductFavoritos"
  }, [_vm._ssrNode("<div class=\"content-title-ProductFavoritos\" data-v-8a8d595c><p class=\"title-ProductFavoritos\" data-v-8a8d595c>" + _vm._ssrEscape(_vm._s(_vm.$t('home_productos_hoko'))) + "</p></div> "), _c('KoSwipper', {
    attrs: {
      "products": _vm.producthoko
    }
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/Ko-ProductFavoritosHoko.vue?vue&type=template&id=8a8d595c&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productofavorito/productSlideHoko.vue?vue&type=template&id=1dae1175&scoped=true&
var productSlideHokovue_type_template_id_1dae1175_scoped_true_render = function render() {
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
    staticStyle: {
      "position": "relative"
    }
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-1dae1175>", "</div>", _vm._l(this.products.data, function (product, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\" data-v-1dae1175>", "</div>", [_c('client-only', [_c('KoProductCard1', {
      attrs: {
        "product": product
      }
    })], 1)], 1);
  }), 0), _vm._ssrNode(" "), this.products.total > 1 ? _vm._ssrNode("<div class=\"prev btnPrev\" data-v-1dae1175>", "</div>", [_c('FlechaLeft-icon', {
    staticClass: "btn-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" "), this.products.total > 1 ? _vm._ssrNode("<div class=\"next btnNext\" data-v-1dae1175>", "</div>", [_c('FlechaRight-icon', {
    staticClass: "btn-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "w-full flex justify-center",
    attrs: {
      "to": "/productosHoko"
    }
  }, [_c('button', {
    staticClass: "btn-products"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('home_allproducts')) + "\n    ")])])], 2);
};
var productSlideHokovue_type_template_id_1dae1175_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productofavorito/productSlideHoko.vue?vue&type=template&id=1dae1175&scoped=true&

// EXTERNAL MODULE: ./components/template5/_productcard/Ko-ProductCardHoko-1.vue + 4 modules
var Ko_ProductCardHoko_1 = __webpack_require__(253);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productofavorito/productSlideHoko.vue?vue&type=script&lang=js&

/* harmony default export */ var productSlideHokovue_type_script_lang_js_ = ({
  name: 'productSlide-productFavorito',
  components: {
    KoProductCard1: Ko_ProductCardHoko_1["a" /* default */]
  },
  props: {
    products: {}
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
// CONCATENATED MODULE: ./components/template5/_productofavorito/productSlideHoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productofavorito_productSlideHokovue_type_script_lang_js_ = (productSlideHokovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/_productofavorito/productSlideHoko.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(721)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productofavorito_productSlideHokovue_type_script_lang_js_,
  productSlideHokovue_type_template_id_1dae1175_scoped_true_render,
  productSlideHokovue_type_template_id_1dae1175_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "1dae1175",
  "581495cd"
  
)

/* harmony default export */ var productSlideHoko = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko-ProductFavoritosHoko.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_ProductFavoritosHokovue_type_script_lang_js_ = ({
  name: 'Ko-ProductFavoritos-1',
  created() {
    this.$store.dispatch('GET_PRODUCTSHOKO', 1);
  },
  components: {
    KoSwipper: productSlideHoko
  },
  computed: {
    producthoko() {
      return this.$store.state.producthoko;
    }
  }
});
// CONCATENATED MODULE: ./components/template5/Ko-ProductFavoritosHoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var template5_Ko_ProductFavoritosHokovue_type_script_lang_js_ = (Ko_ProductFavoritosHokovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template5/Ko-ProductFavoritosHoko.vue



function Ko_ProductFavoritosHoko_injectStyles (context) {
  
  var style0 = __webpack_require__(723)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko_ProductFavoritosHoko_component = Object(componentNormalizer["a" /* default */])(
  template5_Ko_ProductFavoritosHokovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Ko_ProductFavoritosHoko_injectStyles,
  "8a8d595c",
  "ecd7d34e"
  
)

/* harmony default export */ var Ko_ProductFavoritosHoko = __webpack_exports__["default"] = (Ko_ProductFavoritosHoko_component.exports);

/***/ })

};;
//# sourceMappingURL=65.js.map