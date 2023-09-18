exports.ids = [58,243];
exports.modules = {

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5c628114", content, true, context)
};

/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-ProductListFilterHoko.vue?vue&type=template&id=192afca7&scoped=true&
var render = function render() {
  var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product-content",
    style: [_vm.settingByTemplate11[0].settingGeneral, _vm.settingByTemplate11[0].productList, {
      '--font-style-1': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate11[0]) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.settingGeneral) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.fount_1) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"bannerProduct\" data-v-192afca7>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-192afca7>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-192afca7>/</p> <p class=\"txt-crumb s2\" data-v-192afca7>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('header_productos')) + "\n      ") + "</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container-product-max-w\" data-v-192afca7>", "</div>", [_vm._ssrNode("<div class=\"content-shop-items\" data-v-192afca7>", "</div>", [_vm._ssrNode("<div id=\"section\" class=\"producto-items-content\" data-v-192afca7>", "</div>", [_vm._ssrNode("<div class=\"content-item\" data-v-192afca7>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-192afca7>", "</div>", [_vm._ssrNode("<div id=\"grid-selection\" class=\"product-conten-items\" data-v-192afca7>", "</div>", _vm._l(_vm.producthoko.data, function (product) {
    return _vm._ssrNode("<div class=\"content-products h-full\" data-v-192afca7>", "</div>", [_c('KoProdcutCardFilter', {
      staticClass: "product-list",
      attrs: {
        "product": product,
        "settingKcardProduct": _vm.settingByTemplate11[0].cardProduct,
        "settingGeneral": _vm.settingByTemplate11[0].settingGeneral
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm.producthoko.total == 0 ? _vm._ssrNode("<div class=\"content-products-empty\" data-v-192afca7>", "</div>", [_vm._ssrNode("<div class=\"header-content-logo\" data-v-192afca7>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/productos"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n                      `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n                    "
    }],
    staticClass: "header-logo",
    attrs: {
      "alt": "Logo Img"
    }
  })])], 1), _vm._ssrNode(" <p class=\"txt-products-empty\" data-v-192afca7>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-192afca7>", "</div>", [_vm.producthoko.total > 10 ? _vm._ssrNode("<div class=\"product_pagination\" data-v-192afca7>", "</div>", [_c('el-pagination', {
    staticClass: "pagination",
    attrs: {
      "background": "",
      "layout": "prev, pager, next",
      "hide-on-single-page": true,
      "page-count": _vm.producthoko.last_page,
      "current-page": _vm.currentPage
    },
    on: {
      "current-change": _vm.currentChange
    }
  })], 1) : _vm._e()])], 2)])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/ko-ProductListFilterHoko.vue?vue&type=template&id=192afca7&scoped=true&

// EXTERNAL MODULE: ./components/template11/_productcard/ProductCardHoko.vue + 4 modules
var ProductCardHoko = __webpack_require__(258);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-ProductListFilterHoko.vue?vue&type=script&lang=js&

/* harmony default export */ var ko_ProductListFilterHokovue_type_script_lang_js_ = ({
  components: {
    KoProdcutCardFilter: ProductCardHoko["default"]
  },
  props: {
    settingByTemplate11: Array,
    dataStore: Object
  },
  name: 'Ko-ProductList-Filter',
  mounted() {
    if (this.previousPage) {
      this.currentPage = this.previousPage;
    }
    this.currentChange(1);
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    previousPage() {
      return this.$store.state.previousPage;
    },
    producthoko() {
      return this.$store.state.producthoko;
    }
  },
  methods: {
    currentChange(page) {
      this.$store.dispatch('GET_PRODUCTSHOKO', page);
      this.currentPage = page;
    }
  },
  watch: {
    currentPage() {
      this.$store.commit('SET_PREVIOUS_PAGE', this.currentPage);
      let timerTimeout = null;
      timerTimeout = setTimeout(() => {
        timerTimeout = null;
        window.scrollBy(0, -1500);
      }, 250);
    },
    previousPage() {
      if (this.previousPage) {
        this.currentPage = this.previousPage;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template11/ko-ProductListFilterHoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var template11_ko_ProductListFilterHokovue_type_script_lang_js_ = (ko_ProductListFilterHokovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/ko-ProductListFilterHoko.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(727)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template11_ko_ProductListFilterHokovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "192afca7",
  "23ddd784"
  
)

/* harmony default export */ var ko_ProductListFilterHoko = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardHoko_vue_vue_type_style_index_0_id_3c3e1aca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardHoko_vue_vue_type_style_index_0_id_3c3e1aca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardHoko_vue_vue_type_style_index_0_id_3c3e1aca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardHoko_vue_vue_type_style_index_0_id_3c3e1aca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardHoko_vue_vue_type_style_index_0_id_3c3e1aca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-image[data-v-3c3e1aca]{max-height:373px;min-height:373px;-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.producto[data-v-3c3e1aca]{background:var(--background_color_1);cursor:pointer}.datos-producto[data-v-3c3e1aca],.producto[data-v-3c3e1aca]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.datos-producto[data-v-3c3e1aca]{cursor:default;margin-bottom:24px;margin-top:24px}.container[data-v-3c3e1aca]{max-width:100%;position:relative}.tittle[data-v-3c3e1aca]{font-family:var(--font-style-1);font:inherit;font-size:100%;max-height:49px;min-height:49px}.tittle-xml[data-v-3c3e1aca]{display:inline;display:initial}.tittle-lg[data-v-3c3e1aca],.tittle-sm[data-v-3c3e1aca]{display:none}.card-title[data-v-3c3e1aca]{color:var(--color_title);font-family:var(--font-style-1)!important;font:inherit;font-size:var(--fontSizeTitle);font-weight:var(--fontWeighTitle);text-align:left}.producto:hover .text-price[data-v-3c3e1aca]{color:#333}.text-price[data-v-3c3e1aca]{color:var(--color_price);font-family:var(--font-style-1)!important;font-size:var(--fontSizePretitle);font-weight:var(--fontWeighPretitle);line-height:1.1;text-align:left;white-space:nowrap}.cart-Shop[data-v-3c3e1aca]{font:inherit;font-size:100%;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.overlay-bottom[data-v-3c3e1aca]{background-color:#000}.overlay-bottom[data-v-3c3e1aca]:hover{background-color:#3d3d3d}.txt-add[data-v-3c3e1aca]{font-size:15px;font-weight:800;letter-spacing:1px}.overlay-bottom:hover .txt-add[data-v-3c3e1aca],.txt-add[data-v-3c3e1aca]{color:#fff;transition:all .2s ease-in}.product-image-soldOut[data-v-3c3e1aca]{filter:grayscale(100%)}@media (min-width:300px){.card-title[data-v-3c3e1aca],.precio[data-v-3c3e1aca]{font-size:16px}.overlay-bottom[data-v-3c3e1aca],.overlay-bottom-promo[data-v-3c3e1aca]{bottom:15px;height:0;overflow:hidden;position:absolute;transition-duration:.1s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.producto:hover .overlay-bottom[data-v-3c3e1aca],.producto:hover .overlay-bottom-promo[data-v-3c3e1aca]{height:30px}}@media (min-width:768px){.overlay-bottom[data-v-3c3e1aca],.overlay-bottom-promo[data-v-3c3e1aca]{bottom:15px;height:0;overflow:hidden;position:absolute;transition-duration:.1s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.producto:hover .overlay-bottom[data-v-3c3e1aca],.producto:hover .overlay-bottom-promo[data-v-3c3e1aca]{height:40px}}@media (max-width:1125px){.tittle-xml[data-v-3c3e1aca]{display:none}.tittle-lg[data-v-3c3e1aca]{display:inline;display:initial}.tittle-sm[data-v-3c3e1aca]{display:none}}@media (max-width:400px){.tittle-lg[data-v-3c3e1aca],.tittle-xml[data-v-3c3e1aca]{display:none}.tittle-sm[data-v-3c3e1aca]{display:inline;display:initial}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productcard/ProductCardHoko.vue?vue&type=template&id=3c3e1aca&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto",
    style: [_vm.settingKcardProduct, _vm.settingGeneral, {
      '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"container\" data-v-3c3e1aca>", "</div>", [_c('nuxt-link', {
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
  }, [_vm._v("\n              " + _vm._s(_vm.$t('home_vistarapida')) + "\n            ")])])])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"datos-producto\" data-v-3c3e1aca>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productosHoko/` + _vm.product.id
      }
    }
  }, [_c('div', {
    staticClass: "tittle tittle-xml"
  }, [this.product.name >= 90 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.name.slice(0, 90)}...`) + "\n        ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.name.slice(0, 90)}`) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "tittle tittle-lg"
  }, [this.product.name >= 54 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.name.slice(0, 54)}...`) + "\n        ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.name.slice(0, 54)}`) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "tittle tittle-sm"
  }, [this.product.name >= 30 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.name.slice(0, 30)}...`) + "\n        ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.name.slice(0, 30)}`) + "\n        ")])])]), _vm._ssrNode(" <div class=\"precio\" data-v-3c3e1aca>" + (this.product.price ? "<div class=\"content-text-price\" data-v-3c3e1aca><p class=\"text-price\" data-v-3c3e1aca>" + _vm._ssrEscape("\n          " + _vm._s(_vm._f("currency")(this.product.price)) + "\n        ") + "</p></div>" : "<div class=\"h-27\" data-v-3c3e1aca></div>") + "</div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/_productcard/ProductCardHoko.vue?vue&type=template&id=3c3e1aca&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productcard/ProductCardHoko.vue?vue&type=script&lang=js&

/* harmony default export */ var ProductCardHokovue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-ProductCard-1-Ho',
  props: {
    product: Object,
    settingGeneral: Object,
    settingKcardProduct: Object
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
// CONCATENATED MODULE: ./components/template11/_productcard/ProductCardHoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_ProductCardHokovue_type_script_lang_js_ = (ProductCardHokovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/_productcard/ProductCardHoko.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(157)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_ProductCardHokovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3c3e1aca",
  "1f8b00aa"
  
)

/* harmony default export */ var ProductCardHoko = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(728);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2acb6960", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    // Imágenes de producto
    idCloudinary(url, width, height) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,f_auto,fl_lossy,q_auto/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad/${fitImage[1]}`;
      } else {
        return url;
      }
    },
    idCloudinaryQuality(url, width, height) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,f_auto,fl_lossy,q_90/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad/${fitImage[1]}`;
      } else {
        return url;
      }
    },
    idCloudinarys(url, width, height) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/c_scale,h_${height},w_${width}/${fitImage[1]}`;
      } else {
        return url;
      }
    },
    idCloudinaryBanner(url, type, width) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      let fitImage3;
      if (fitImage && fitImage.length > 1) {
        fitImage3 = fitImage[1].split('.');
      }
      if (fitImage2[2] == 'res.cloudinary.com') {
        if (type == 'banner') {
          return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/${fitImage3[0]}.webp`;
        } else if (type == 'bannerRes') {
          return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/c_scale,w_${width}/${fitImage3[0]}.webp`;
        }
      } else {
        return url;
      }
    }
  }
});

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductListFilterHoko_vue_vue_type_style_index_0_id_192afca7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(462);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductListFilterHoko_vue_vue_type_style_index_0_id_192afca7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductListFilterHoko_vue_vue_type_style_index_0_id_192afca7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductListFilterHoko_vue_vue_type_style_index_0_id_192afca7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductListFilterHoko_vue_vue_type_style_index_0_id_192afca7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-content[data-v-192afca7]{background:var(--background_color_1);flex-direction:column;padding-bottom:80px}.crumb[data-v-192afca7],.product-content[data-v-192afca7]{align-items:center;display:flex;justify-content:center;width:100%}.crumb[data-v-192afca7]{flex-direction:row}.txt-crumb[data-v-192afca7]{color:var(--breadCrumbs);cursor:pointer;font-family:var(--font-style-1)!important;font-size:15px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.s1[data-v-192afca7]:hover,.s2[data-v-192afca7]:hover{color:#000;transition:all .25s ease}.separatorCrumb[data-v-192afca7]{color:var(--breadCrumbs);cursor:pointer;font-family:var(--font-style-1)!important;font-size:9px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.container-product-max-w[data-v-192afca7]{display:flex;flex-direction:column;max-width:1400px;width:100%}.container-product-max-w[data-v-192afca7],.product-conten-items[data-v-192afca7]{align-items:center;justify-content:center}.product-conten-items[data-v-192afca7]{gap:1rem;text-align:center}.content-item[data-v-192afca7]{align-items:center;display:flex;flex-direction:row;justify-content:center;margin-bottom:40px;width:100%}.content-item-productos[data-v-192afca7],.content-products[data-v-192afca7],.content-products-empty[data-v-192afca7]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-products-empty[data-v-192afca7]{min-height:200px;text-align:center}.txt-products-empty[data-v-192afca7]{color:#3f3f3f;font-family:var(--font-style-1)!important;font-size:20px;font-weight:600;margin-top:6px}.pagination-medium[data-v-192afca7]{background:transparent;margin-top:50px}.pagination[data-v-192afca7]{background:transparent;color:#222;font-size:18px}.product_pagination[data-v-192afca7] .el-pagination.is-background .btn-next,.product_pagination[data-v-192afca7] .el-pagination.is-background .btn-prev,.product_pagination[data-v-192afca7] .el-pagination.is-background .el-pager li{background-color:transparent;color:#222}.product_pagination[data-v-192afca7] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-192afca7] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-192afca7] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:#eb7025}.product_pagination[data-v-192afca7] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:#eb7025;color:#fff}@media (min-width:300px){.content-shop-items[data-v-192afca7]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;margin-top:10px;width:90%}.bannerProduct[data-v-192afca7]{display:none}.product-conten-items[data-v-192afca7]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));width:100%}}@media (min-width:440px){.product-conten-items[data-v-192afca7]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:768px){.content-shop-items[data-v-192afca7]{margin-top:20px;width:93%}.bannerProduct[data-v-192afca7]{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:cover;border-bottom-width:1px;border-color:var(--border);display:flex;justify-items:center;padding-bottom:20px;padding-top:20px;width:100%}}@media (min-width:1024px){.content-shop-items[data-v-192afca7]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;margin-top:40px;width:95%}.product-conten-items[data-v-192afca7]{grid-gap:2.5rem;display:grid;gap:2.5rem;grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1280px){.product-content[data-v-192afca7]{margin-top:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template11-ko-product-list-filter-hoko.js.map