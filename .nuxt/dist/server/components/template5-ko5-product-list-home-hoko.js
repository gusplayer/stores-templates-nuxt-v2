exports.ids = [16,277];
exports.modules = {

/***/ 1206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko5-ProductListHomeHoko.vue?vue&type=template&id=0ea749e7&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productlist",
    style: [_vm.settingByTemplate, {
      '--font-style': _vm.settingByTemplate && _vm.settingByTemplate.tipo_letra ? _vm.settingByTemplate.tipo_letra : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"container-productlist\" data-v-0ea749e7>", "</div>", [_vm._ssrNode("<div class=\"content-title\" data-v-0ea749e7></div> <br data-v-0ea749e7> <div class=\"content-items-categorias\" data-v-0ea749e7><div class=\"content-items-categorias-text\" data-v-0ea749e7><p class=\"text-categorias\" data-v-0ea749e7>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('home_catalogo_hoko')) + "\n        ") + "</p></div></div> "), _vm._ssrNode("<div class=\"content-item\" data-v-0ea749e7>", "</div>", [_vm.producthoko ? _vm._ssrNode("<div class=\"content-item-productos\" data-v-0ea749e7>", "</div>", [_vm._ssrNode("<div class=\"grid-products\" data-v-0ea749e7>", "</div>", _vm._l(_vm.producthoko.data, function (product) {
    return _vm._ssrNode("<div class=\"content-products\" data-v-0ea749e7>", "</div>", [_c('KoProductCard1', {
      attrs: {
        "product": product
      }
    })], 1);
  }), 0), _vm._ssrNode(" " + (_vm.producthoko.total == 0 ? "<div class=\"content-products-empty\" data-v-0ea749e7><p data-v-0ea749e7>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-0ea749e7>", "</div>", [_vm.producthoko.total > 10 ? _vm._ssrNode("<div class=\"product_pagination\" data-v-0ea749e7>", "</div>", [_c('el-pagination', {
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
  })], 1) : _vm._e()])], 2) : _vm._e()])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/Ko5-ProductListHomeHoko.vue?vue&type=template&id=0ea749e7&scoped=true&

// EXTERNAL MODULE: ./components/template5/_productcard/Ko-ProductCardHoko-1.vue + 4 modules
var Ko_ProductCardHoko_1 = __webpack_require__(614);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko5-ProductListHomeHoko.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko5_ProductListHomeHokovue_type_script_lang_js_ = ({
  name: 'Ko5ProductListHomeHoko',
  components: {
    KoProductCard1: Ko_ProductCardHoko_1["default"]
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      search: '',
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
  },
  mounted() {
    if (this.previousPage) {
      this.currentPage = this.previousPage;
    }
    this.currentChange(1);
  },
  methods: {
    currentChange(page) {
      this.$store.dispatch('GET_PRODUCTSHOKO', page);
      this.currentPage = page;
    }
  }
});
// CONCATENATED MODULE: ./components/template5/Ko5-ProductListHomeHoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var template5_Ko5_ProductListHomeHokovue_type_script_lang_js_ = (Ko5_ProductListHomeHokovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/Ko5-ProductListHomeHoko.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(818)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template5_Ko5_ProductListHomeHokovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0ea749e7",
  "56c0ac95"
  
)

/* harmony default export */ var Ko5_ProductListHomeHoko = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(289);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("26dd912e", content, true, context)
};

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCardHoko_1_vue_vue_type_style_index_0_id_13903e24_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCardHoko_1_vue_vue_type_style_index_0_id_13903e24_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCardHoko_1_vue_vue_type_style_index_0_id_13903e24_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCardHoko_1_vue_vue_type_style_index_0_id_13903e24_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCardHoko_1_vue_vue_type_style_index_0_id_13903e24_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-card[data-v-13903e24]{align-items:center;background:#fff;border:1px solid hsla(0,0%,95%,.637);border-radius:5px;box-shadow:0 1px 1px #e2e2e2;box-sizing:border-box;justify-content:center}.container-card[data-v-13903e24],.wrapper-card[data-v-13903e24]{display:flex;height:100%;width:100%}.container-card[data-v-13903e24]{align-items:flex-start;border-radius:5px;flex-direction:column}.container-card[data-v-13903e24],.wrapper-image[data-v-13903e24]{overflow:hidden;position:relative}.wrapper-image[data-v-13903e24]{align-items:center;display:flex;height:294px;justify-content:center;max-height:300px;min-height:294px;width:100%}.product-image[data-v-13903e24]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.notproduct-image[data-v-13903e24]{height:294px;max-height:294px;width:300px}.product-image-soldOut[data-v-13903e24]{filter:grayscale(100%)}.image_overlay[data-v-13903e24]{background:hsla(0,0%,41%,.165);height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}#product-card:hover .image_overlay[data-v-13903e24]{opacity:.7;transition:all .2s ease-out}.separador-stats[data-v-13903e24]{height:95px;width:100%}.stats-container[data-v-13903e24]{background:#fff;display:flex;flex-direction:column;height:120px;justify-content:space-between;left:0;padding:20px 12px 0;position:absolute;top:288px;transition:all .2s ease-out;width:100%}#product-card:hover .stats-container[data-v-13903e24]{top:241px;transition:all .2s ease-out}.card-info-1[data-v-13903e24]{background:#e71f77;color:#fff;top:-44px}.card-info-1[data-v-13903e24],.card-info-2[data-v-13903e24]{align-items:center;border-radius:var(--radius_btn);display:flex;font-size:12px;justify-content:center;padding:1px 4px;position:absolute;right:0;z-index:2}.card-info-2[data-v-13903e24]{background:#35dd8d;color:#000;font-weight:700;top:-22px}.content-name-product[data-v-13903e24]{align-items:flex-start;display:flex;justify-content:center;min-height:36px;text-align:center;width:100%}.card-title[data-v-13903e24]{color:#3f3f3f;font-size:15px;font-weight:500}.content-text-price[data-v-13903e24]{margin-top:5px;width:100%}.content-price[data-v-13903e24],.content-text-price[data-v-13903e24]{align-items:center;display:flex;justify-content:center}.content-price[data-v-13903e24]{flex-direction:row;max-height:29px;min-height:29px}.content-price-empty[data-v-13903e24]{margin-top:5px;max-height:29px;min-height:29px;width:100%}.text-price[data-v-13903e24]{color:#464646;font-size:20px;font-weight:500;line-height:1.4;text-align:center}.separator-price[data-v-13903e24]{color:#464646;margin-left:5px;margin-right:5px}.wrapper-btn-icon[data-v-13903e24]{flex-direction:row;width:100%}#add_cart[data-v-13903e24],.wrapper-btn-icon[data-v-13903e24]{align-items:center;display:flex;justify-content:center}#add_cart[data-v-13903e24]{background-color:var(--color_background_btn);border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);font-size:19px;font-weight:700;height:41px;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}#add_cart[data-v-13903e24]:hover{background-color:var(--btnhover);border:2px solid var(--btnhover);cursor:pointer}#product-card:hover #add_cart[data-v-13903e24]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.view_details[data-v-13903e24]{align-items:center;background-color:transparent;border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_background_btn);display:flex;font-size:19px;font-weight:700;height:41px;justify-content:center;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}.view_details[data-v-13903e24]:hover{border:2px solid var(--btnhover);color:var(--btnhover);cursor:pointer}#product-card:hover .view_details[data-v-13903e24]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.separador-btn[data-v-13903e24]{width:5px}.wrapper[data-v-13903e24]{display:inline;display:initial;height:100%;width:100%}.wrapper-movil[data-v-13903e24]{display:none}.card-icon-cart-movil[data-v-13903e24]:hover{color:var(--btnhover)}.overlay-top[data-v-13903e24]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background:#fff;border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:#35dd8d;font-size:13px;height:29px;left:100%;overflow:hidden;padding:5px;position:absolute;right:0;top:43px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:0}#product-card:hover .overlay-top[data-v-13903e24]{left:75%;width:67px}.overlay-free[data-v-13903e24]{background-color:#35dd8d;border-radius:.25rem;color:#fff;height:35px;left:100%;overflow:hidden;position:absolute;right:0;text-align:center;top:0;transition:.5s ease;width:0}.txt-free[data-v-13903e24]{font-size:13px;line-height:12px;margin-top:5px}#product-card:hover .overlay-free[data-v-13903e24]{left:55%;transition-delay:.7s;width:125px}.overlay-polygon[data-v-13903e24]{fill:#35dd8d;background-color:transparent;height:5%;left:100%;overflow:hidden;position:absolute;right:0;top:35px;width:0}#product-card:hover .overlay-polygon[data-v-13903e24]{left:90%;transition-delay:.95s;width:5%}@media (max-width:1270px){.separador-stats[data-v-13903e24]{height:105px}}@media (max-width:1249px){.separador-stats[data-v-13903e24]{height:98px}}@media (max-width:768px){.wrapper[data-v-13903e24]{display:none}.wrapper-movil[data-v-13903e24]{display:inline;display:initial;width:100%}.content-card-items[data-v-13903e24]{align-items:center;display:flex;flex-direction:column;height:75px;justify-content:space-between;padding:5px 10px;position:relative;width:100%}.card-title[data-v-13903e24]{font-size:13px}.content-text-price[data-v-13903e24]{margin-top:0}.text-price[data-v-13903e24]{font-size:15px}.icon-cart[data-v-13903e24]{margin-left:20px}.card-info-1[data-v-13903e24]{font-size:10px;top:-43px}.card-info-2[data-v-13903e24]{font-size:10px;top:-22px}.notproduct-image-res[data-v-13903e24]{height:357px;max-height:357px;width:100%}}@media (max-width:450px){.notproduct-image-res[data-v-13903e24]{height:175px;max-height:170px}.container-card[data-v-13903e24]{max-width:200px;width:100%}.wrapper-image[data-v-13903e24]{height:175px;min-height:120px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(819);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("134f81b3", content, true, context)
};

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productcard/Ko-ProductCardHoko-1.vue?vue&type=template&id=13903e24&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-card"
  }, [_vm._ssrNode("<div id=\"product-card\" class=\"container-card\" data-v-13903e24>", "</div>", [_vm._ssrNode("<div class=\"wrapper\" data-v-13903e24>", "</div>", [_c('nuxt-link', {
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
  })], 1), _vm._ssrNode(" <div class=\"separador-stats\" data-v-13903e24></div> "), _vm._ssrNode("<div class=\"stats\" data-v-13903e24>", "</div>", [_vm._ssrNode("<div class=\"stats-container\" data-v-13903e24>", "</div>", [_vm._ssrNode((_vm.soldOut ? "<p class=\"card-info-1\" data-v-13903e24>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_cardAgotado')) + "\n          ") + "</p>" : "<!---->") + " <div class=\"content-name-product\" data-v-13903e24>" + (_vm.product.name >= 90 ? "<p class=\"card-title\" data-v-13903e24>" + _vm._ssrEscape("\n              " + _vm._s(`${_vm.product.name.slice(0, 90)}...`) + "\n            ") + "</p>" : "<p class=\"card-title\" data-v-13903e24>" + _vm._ssrEscape("\n              " + _vm._s(`${_vm.product.name.slice(0, 90)}`) + "\n            ") + "</p>") + "</div> " + (_vm.product.price ? "<div class=\"content-text-price\" data-v-13903e24><p class=\"text-price\" data-v-13903e24>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.product.price)) + "\n            ") + "</p></div>" : "<div class=\"content-price-empty\" data-v-13903e24></div>") + " "), _vm._ssrNode("<div class=\"wrapper-btn-icon\" data-v-13903e24>", "</div>", [_c('nuxt-link', {
    staticClass: "view_details",
    attrs: {
      "to": {
        path: `/productosHoko/` + _vm.product.id
      }
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('home_cardvermas')))])]), _vm._ssrNode(" <div class=\"separador-btn\" data-v-13903e24></div>")], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-movil\" data-v-13903e24>", "</div>", [_c('nuxt-link', {
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
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-card-items\" data-v-13903e24>", "</div>", [_c('nuxt-link', {
    staticClass: "content-name-product",
    attrs: {
      "to": {
        path: `/productosHoko/` + _vm.product.id
      }
    }
  }, [_vm.product.name >= 25 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(`${_vm.product.name.slice(0, 25)}..`) + "\n          ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(`${_vm.product.name.slice(0, 30)}`) + "\n          ")])]), _vm._ssrNode(" "), _vm.product.price ? _vm._ssrNode("<div class=\"content-text-price\" data-v-13903e24>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productosHoko/` + _vm.product.id
      }
    }
  }, [_c('p', {
    staticClass: "text-price"
  }, [_vm._v("\n              " + _vm._s(_vm._f("currency")(_vm.product.price)) + "\n            ")])])], 1) : _vm._e()], 2)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productcard/Ko-ProductCardHoko-1.vue?vue&type=template&id=13903e24&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productcard/Ko-ProductCardHoko-1.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_ProductCardHoko_1vue_type_script_lang_js_ = ({
  name: 'Ko5ProductCardHoko',
  filters: {
    currency(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
      }
      return '';
    }
  },
  mixins: [idCloudinary["a" /* default */]],
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    soldOut() {
      if (this.product && this.product.stock_amount === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template5/_productcard/Ko-ProductCardHoko-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_Ko_ProductCardHoko_1vue_type_script_lang_js_ = (Ko_ProductCardHoko_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/_productcard/Ko-ProductCardHoko-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(288)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_Ko_ProductCardHoko_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13903e24",
  "417380db"
  
)

/* harmony default export */ var Ko_ProductCardHoko_1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko5_ProductListHomeHoko_vue_vue_type_style_index_0_id_0ea749e7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(482);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko5_ProductListHomeHoko_vue_vue_type_style_index_0_id_0ea749e7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko5_ProductListHomeHoko_vue_vue_type_style_index_0_id_0ea749e7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko5_ProductListHomeHoko_vue_vue_type_style_index_0_id_0ea749e7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko5_ProductListHomeHoko_vue_vue_type_style_index_0_id_0ea749e7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-productlist[data-v-0ea749e7]{align-items:center;background:var(--background_color_2);box-sizing:border-box}.container-productlist[data-v-0ea749e7],.wrapper-productlist[data-v-0ea749e7]{display:flex;justify-content:center;width:100%}.container-productlist[data-v-0ea749e7]{flex-direction:column;max-width:1300px;padding:0 20px}.content-title[data-v-0ea749e7]{align-items:center;display:flex;justify-content:center;width:100%}.title[data-v-0ea749e7]{color:var(--color_text);font-size:38px;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:-.4px;line-height:1.24;margin-bottom:10px;margin-top:10px}.content-item-top[data-v-0ea749e7]{width:100%}.content-item[data-v-0ea749e7],.content-item-top[data-v-0ea749e7]{display:flex;flex-direction:row;justify-content:space-between}.content-item[data-v-0ea749e7]{align-items:center;margin-bottom:40px}.content-item>div[data-v-0ea749e7]:first-child{flex:1}.content-item>div[data-v-0ea749e7]:nth-child(2){flex:2}.content-filtrar[data-v-0ea749e7]{display:flex;flex-direction:row}.dropbtn[data-v-0ea749e7]{align-self:flex-end;background:transparent;color:var(--color_subtext);cursor:pointer;font-size:16px;font-weight:700;line-height:1.4;margin-right:2px}.content-items-categorias[data-v-0ea749e7]{align-items:center;justify-content:space-between;margin-bottom:20px}.content-items-categorias[data-v-0ea749e7],.content-items-categorias-text[data-v-0ea749e7]{display:flex;flex-direction:row}.text-categorias[data-v-0ea749e7]{font-size:18px}.text-categorias[data-v-0ea749e7],.text-categorias-select[data-v-0ea749e7]{align-self:flex-start;background:transparent;color:var(--color_subtext);cursor:pointer;display:flex;font-weight:700;line-height:1.4;margin-right:2px}.text-categorias-select[data-v-0ea749e7]{font-size:16px;margin-left:5px;margin-top:2px;opacity:.6}.dropdown-content[data-v-0ea749e7]{background-color:#fff;border-radius:10px;box-shadow:0 8px 20px 1px rgba(0,0,0,.2);display:none;position:absolute;z-index:2}.dropdown:hover .dropdown-content[data-v-0ea749e7]{display:block}.content-item-catalogo[data-v-0ea749e7]{align-self:baseline;background-color:var(--background_color_2);border-radius:10px;display:flex;max-width:205px;padding-bottom:10px;padding-top:10px;width:100%}.a-container[data-v-0ea749e7]{align-items:center;color:var(--color_subtext);display:block;font-size:16px;font-weight:700;justify-content:center;position:relative;transition:all .2s ease;width:205px}.a-container[data-v-0ea749e7],.item-categoria[data-v-0ea749e7]{background-color:var(--background_color_2);cursor:pointer}.item-categoria[data-v-0ea749e7]{padding:0 10px 0 20px}.item-categoria-active[data-v-0ea749e7],.item-categoria[data-v-0ea749e7]:hover{background:var(--color_background_hover);color:var(--color_hover_text)}.content-item-subcategorie[data-v-0ea749e7]{background:var(--color_background_hover);padding-left:40px;padding-right:10px}.item-subcategorie[data-v-0ea749e7]{cursor:pointer;font-size:13px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.item-subcategorie-active[data-v-0ea749e7],.item-subcategorie[data-v-0ea749e7]:hover{background:var(--color_background_hover);color:var(--color_hover_text)}.content-item-productos[data-v-0ea749e7]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.grid-products[data-v-0ea749e7]{grid-column-gap:25px;grid-row-gap:30px;box-sizing:border-box;display:grid;grid-template-columns:repeat(4,minmax(250px,2fr));margin:0 auto;width:100%}.content-products-empty[data-v-0ea749e7]{align-items:center;display:flex;justify-content:center;min-height:200px;text-align:center;width:100%}.content-products-empty p[data-v-0ea749e7]{color:var(--color_subtext);font-size:18px;font-weight:700;opacity:.6}.top-right[data-v-0ea749e7]{display:none}.header-icon-menu[data-v-0ea749e7]{color:var(--color_subtext);cursor:pointer;font-size:30px}.header-icon-close[data-v-0ea749e7]{color:rgba(21,20,57,.808);font-size:30px;margin-left:22px}.top-input-search[data-v-0ea749e7]{align-content:start;display:grid;justify-content:flex-end;position:relative}.top-input-search input[data-v-0ea749e7]{background-color:transparent;border:2px solid #afafaf;border-radius:var(--radius_btn);box-sizing:border-box;color:var(--color_subtext);font-size:14px;padding:10px 35px 10px 15px;width:100%}.top-input-search input[data-v-0ea749e7]::-moz-placeholder{color:var(--color_subtext);opacity:.7}.top-input-search input[data-v-0ea749e7]::placeholder{color:var(--color_subtext);opacity:.7}.top-input-search input[data-v-0ea749e7]:active,.top-input-search input[data-v-0ea749e7]:focus{border:2px solid var(--color_border_btn);border-radius:var(--radius_btn);outline:0}.top-input-search i.icon-search[data-v-0ea749e7]{color:var(--color_subtext);font-weight:700;position:absolute;right:15px;top:9px;z-index:2}.top-input-search .response[data-v-0ea749e7]{background-color:transparent;border:2px solid #d8d8d8;border-radius:var(--radius_btn);box-sizing:border-box;color:var(--color_subtext);font-size:12px;height:28px;justify-self:start;line-height:26px;padding:0 10px;white-space:nowrap}.pagination-medium[data-v-0ea749e7]{background:transparent;margin-top:10px}.pagination[data-v-0ea749e7]{background:transparent;color:var(--color_text);font-size:18px}.product_pagination[data-v-0ea749e7] .el-pagination.is-background .btn-next,.product_pagination[data-v-0ea749e7] .el-pagination.is-background .btn-prev,.product_pagination[data-v-0ea749e7] .el-pagination.is-background .el-pager li{background-color:transparent;color:var(--color_text)}.product_pagination[data-v-0ea749e7] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-0ea749e7] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-0ea749e7] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--btnhover)}.product_pagination[data-v-0ea749e7] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--color_icon);color:#fff}@media (max-width:1290px){.grid-products[data-v-0ea749e7]{grid-column-gap:15px;grid-row-gap:30px;grid-template-columns:repeat(4,minmax(240px,2fr))}}@media (max-width:1265px){.grid-products[data-v-0ea749e7]{grid-column-gap:10px;grid-row-gap:30px;grid-template-columns:repeat(4,minmax(240px,2fr))}}@media (max-width:1250px){.grid-products[data-v-0ea749e7]{grid-column-gap:25px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(250px,2fr))}}@media (max-width:1060px){.grid-products[data-v-0ea749e7]{grid-column-gap:20px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(250px,2fr))}}@media (max-width:1050px){.grid-products[data-v-0ea749e7]{grid-column-gap:20px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(240px,2fr))}}@media (max-width:1020px){.grid-products[data-v-0ea749e7]{grid-column-gap:15px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(240px,2fr))}}@media (max-width:1010px){.grid-products[data-v-0ea749e7]{grid-column-gap:10px;grid-template-columns:repeat(3,minmax(240px,2fr))}}@media (max-width:1000px){.grid-products[data-v-0ea749e7]{grid-column-gap:25px;grid-row-gap:30px;grid-template-columns:repeat(2,minmax(250px,2fr))}}@media (max-width:790px){.grid-products[data-v-0ea749e7]{grid-column-gap:20px;grid-row-gap:30px;grid-template-columns:repeat(2,minmax(250px,2fr))}}@media (max-width:780px){.grid-products[data-v-0ea749e7]{grid-column-gap:16px;grid-row-gap:30px;grid-template-columns:repeat(2,minmax(250px,2fr))}}@media (max-width:775px){.grid-products[data-v-0ea749e7]{grid-column-gap:20px;grid-row-gap:20px;grid-template-columns:repeat(2,minmax(250px,2fr))}}@media (max-width:770px){.container-productlist[data-v-0ea749e7]{padding:0}.content-item-productos[data-v-0ea749e7]{padding:15px}.title[data-v-0ea749e7]{font-size:25px;margin-top:20px}.grid-products[data-v-0ea749e7]{grid-template-columns:repeat(2,minmax(10px,2fr))}.dropbtn[data-v-0ea749e7]{margin-left:5px}.text-categorias[data-v-0ea749e7]{padding:0 10px}.content-title[data-v-0ea749e7]{padding:0 15px}}@media (max-width:700px){.content-items-categorias[data-v-0ea749e7]{margin-bottom:0;margin-left:5px}}@media (max-width:450px){.grid-products[data-v-0ea749e7]{grid-template-columns:repeat(2,minmax(160px,1fr))}.content-item-productos[data-v-0ea749e7]{padding:5px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template5-ko5-product-list-home-hoko.js.map