exports.ids = [86];
exports.modules = {

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/Ko-ProductList.vue?vue&type=template&id=115a94ee&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return this.listProducts.length > 0 ? _c('div', {
    staticClass: "product-content",
    style: [_vm.productList, _vm.settingGeneral]
  }, [_vm._ssrNode("<div class=\"producto-items-content\"" + _vm._ssrStyle(null, [{
    '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Poppins'
  }, {
    '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Roboto'
  }], null) + " data-v-115a94ee>", "</div>", [_vm._ssrNode("<div class=\"product-text\" data-v-115a94ee><span class=\"tittle\" data-v-115a94ee>" + _vm._ssrEscape(_vm._s(_vm.productList.title)) + "</span></div> "), _vm._ssrNode("<div class=\"content-item\" data-v-115a94ee>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-115a94ee>", "</div>", [_vm._ssrNode("<div class=\"product-conten-items\" data-v-115a94ee>", "</div>", _vm._l(_vm.listProducts, function (product) {
    return _vm._ssrNode("<div class=\"content-products\" data-v-115a94ee>", "</div>", [_c('KoProductCard', {
      attrs: {
        "product": product,
        "productListCard": _vm.productListCard,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "cont-product",
    attrs: {
      "to": "/productos"
    }
  }, [_c('button', {
    staticClass: "btn-products"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('home_allproducts')) + "\n          ")])])], 2)])], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/Ko-ProductList.vue?vue&type=template&id=115a94ee&scoped=true&

// EXTERNAL MODULE: ./components/template9/_productcard/ProductCard.vue + 4 modules
var ProductCard = __webpack_require__(221);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/Ko-ProductList.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_ProductListvue_type_script_lang_js_ = ({
  components: {
    KoProductCard: ProductCard["a" /* default */]
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    productList: Object,
    settingGeneral: Object,
    productListCard: Object
  },
  name: 'Ko-ProductList',
  mounted() {
    this.clear();
    var el = document.querySelector('.tittle');
    el.innerHTML = el.innerHTML.replace(/&nbsp;/g, ' ');
  },
  computed: {
    listProducts() {
      return this.fullProducts.slice(0, 8);
    }
  },
  methods: {
    clear() {
      this.$store.commit('SET_CATEGORY_PRODUCTO', '');
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.clear();
    }
  }
});
// CONCATENATED MODULE: ./components/template9/Ko-ProductList.vue?vue&type=script&lang=js&
 /* harmony default export */ var template9_Ko_ProductListvue_type_script_lang_js_ = (Ko_ProductListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/Ko-ProductList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(781)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template9_Ko_ProductListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "115a94ee",
  "0254f9a9"
  
)

/* harmony default export */ var Ko_ProductList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(211);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0860e448", content, true, context)
};

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_e43a4d0e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_e43a4d0e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_e43a4d0e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_e43a4d0e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_e43a4d0e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-image[data-v-e43a4d0e],.product-image-soldOut[data-v-e43a4d0e]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.product-image-soldOut[data-v-e43a4d0e]{filter:grayscale(100%)}.producto[data-v-e43a4d0e]{align-items:center;background:var(--background_color_card);cursor:pointer}.datos-producto[data-v-e43a4d0e],.producto[data-v-e43a4d0e]{display:flex;flex-direction:column;justify-content:center;width:100%}.datos-producto[data-v-e43a4d0e]{align-items:flex-start;cursor:default;margin-bottom:24px;margin-top:24px;padding-left:10px;padding-right:10px}.container[data-v-e43a4d0e]{max-width:100%;position:relative}.image[data-v-e43a4d0e]{height:auto;width:100%}.cart-Shop[data-v-e43a4d0e]{width:100%}.cart-Shop[data-v-e43a4d0e],.icons-hover[data-v-e43a4d0e]{font:inherit;font-size:100%;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.icons-hover[data-v-e43a4d0e]{grid-gap:0;display:grid;gap:0;grid-template-columns:repeat(1,minmax(0,1fr))}.icon-show-mobile[data-v-e43a4d0e]{fill:#fff}.tittle[data-v-e43a4d0e]{font-family:var(--font-style-2);font:inherit;font-size:100%;max-height:49px;min-height:49px}.tittle-xml[data-v-e43a4d0e]{display:inline;display:initial}.tittle-lg[data-v-e43a4d0e],.tittle-sm[data-v-e43a4d0e]{display:none}.categoria[data-v-e43a4d0e]{color:var(--color_category);font-family:var(--font-style-2)!important;font:inherit;font-weight:600}.card-title[data-v-e43a4d0e]{color:var(--color_text_card);font-family:var(--font-style-2)!important;font:inherit;font-weight:800;text-align:left}.producto:hover .text-price[data-v-e43a4d0e]{color:#333}.separator-price[data-v-e43a4d0e]{color:var(--color_price_card);font-size:16px}.separator-price[data-v-e43a4d0e],.text-price[data-v-e43a4d0e]{font-family:var(--font-style-2)!important}.text-price[data-v-e43a4d0e]{color:var(--color_price_card);font-size:16px;font-weight:600;line-height:1.1;text-align:left;white-space:nowrap}.text-free[data-v-e43a4d0e]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.icon-overlay-free[data-v-e43a4d0e]{color:#3d3d3d}.text-sould[data-v-e43a4d0e]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.overlay-bottom-promo[data-v-e43a4d0e]{background-color:#35dd8d;transition:all .2s ease-in}.overlay-bottom-promo[data-v-e43a4d0e]:hover{--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.overlay-bottom[data-v-e43a4d0e]{background-color:var(--color_background_btn)}.overlay-bottom[data-v-e43a4d0e]:hover{background-color:#3d3d3d}.txt-add[data-v-e43a4d0e]{color:var(--color_text_btn);font-size:15px;font-weight:800;letter-spacing:1px;transition:all .2s ease-in}.overlay-bottom:hover .txt-add[data-v-e43a4d0e]{color:#fff;transition:all .2s ease-in}.txt-free[data-v-e43a4d0e]{font-size:15px;font-weight:600}@media (min-width:300px){.categoria[data-v-e43a4d0e]{font-size:13px;margin-bottom:3px}.card-title[data-v-e43a4d0e],.precio[data-v-e43a4d0e]{font-size:16px}.overlay-bottom[data-v-e43a4d0e],.overlay-bottom-promo[data-v-e43a4d0e]{bottom:10px;height:0;left:10px;overflow:hidden;position:absolute;right:0;transition-duration:.1s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:110px}.producto:hover .overlay-bottom[data-v-e43a4d0e],.producto:hover .overlay-bottom-promo[data-v-e43a4d0e]{height:30px}.overlay-top[data-v-e43a4d0e]{--tw-bg-opacity:1;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:40px;overflow:hidden;position:absolute;right:0;top:10%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:45px}.overlay-free[data-v-e43a4d0e]{background-color:#3d3d3d;border-radius:.25rem;height:10%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:110px}.text-free[data-v-e43a4d0e]{font-size:75%}.overlay-polygon[data-v-e43a4d0e]{background-color:transparent;height:5%;right:15px;top:10%;width:5%}.overlay-polygon[data-v-e43a4d0e],.overlay-sould[data-v-e43a4d0e]{overflow:hidden;position:absolute}.overlay-sould[data-v-e43a4d0e]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:60%;right:0;top:0;transition:.5s ease;width:35%}.svg-sould-out[data-v-e43a4d0e]{height:40px;width:40px}.content-price[data-v-e43a4d0e]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separator-price[data-v-e43a4d0e]{margin-left:1px;margin-right:1px}}@media (min-width:768px){.text-free[data-v-e43a4d0e]{font-size:100%}.svg-sould-out[data-v-e43a4d0e]{height:60px;width:60px}.separator-price[data-v-e43a4d0e]{margin-left:4px;margin-right:4px}.overlay-bottom[data-v-e43a4d0e],.overlay-bottom-promo[data-v-e43a4d0e]{bottom:10px;height:0;left:10px;overflow:hidden;position:absolute;right:0;transition-duration:.1s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:110px}.producto:hover .overlay-bottom[data-v-e43a4d0e],.producto:hover .overlay-bottom-promo[data-v-e43a4d0e]{height:40px}}@media (min-width:1280px){.text-cart[data-v-e43a4d0e]{display:block}.overlay-top[data-v-e43a4d0e]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-e43a4d0e]{left:85%;width:40px}.overlay-free[data-v-e43a4d0e]{height:35px;left:100%;right:0;top:0;transition:.5s ease;width:0}.container:hover .overlay-free[data-v-e43a4d0e]{left:68%;transition-delay:.7s;width:32%}.overlay-polygon[data-v-e43a4d0e]{height:5%;left:100%;right:0;top:35px;width:0}.container:hover .overlay-polygon[data-v-e43a4d0e]{left:90%;transition-delay:.95s;width:5%}.overlay-sould[data-v-e43a4d0e]{height:20%;left:100%;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-e43a4d0e]{left:65%;transition-delay:.7s;width:35%}.svg-sould-out[data-v-e43a4d0e]{height:60px;width:60px}}@media (min-width:1920px){.overlay-top[data-v-e43a4d0e]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-e43a4d0e]{left:86%;width:40px}}@media (min-width:2560px){.overlay-top[data-v-e43a4d0e]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-e43a4d0e]{left:88%;width:40px}.overlay-sould[data-v-e43a4d0e]{height:20%;left:100%;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-e43a4d0e]{left:75%;transition-delay:.7s;width:30%}}@media (min-width:3000px){.overlay-top[data-v-e43a4d0e]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-e43a4d0e]{left:89%;width:40px}}@media (max-width:1125px){.tittle-xml[data-v-e43a4d0e]{display:none}.tittle-lg[data-v-e43a4d0e]{display:inline;display:initial}.tittle-sm[data-v-e43a4d0e]{display:none}}@media (max-width:400px){.tittle-lg[data-v-e43a4d0e],.tittle-xml[data-v-e43a4d0e]{display:none}.tittle-sm[data-v-e43a4d0e]{display:inline;display:initial}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productcard/ProductCard.vue?vue&type=template&id=e43a4d0e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto",
    style: [_vm.productListCard, _vm.settingGeneral]
  }, [_vm._ssrNode("<div class=\"container\"" + _vm._ssrStyle(null, [{
    '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Roboto'
  }], null) + " data-v-e43a4d0e>", "</div>", [_c('nuxt-link', {
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
  })], 1), _vm._ssrNode(" " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-top\" data-v-e43a4d0e><div class=\"icons-hover\" data-v-e43a4d0e><div class=\"transport-icon\" data-v-e43a4d0e>" + (!_vm.getFreeShipping && !_vm.soldOut ? "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" fill=\"#333\" class=\"transporte-icon\" data-v-e43a4d0e><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-e43a4d0e></path></svg>" : "<!---->") + "</div></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-free\" data-v-e43a4d0e><div class=\"text-free\" data-v-e43a4d0e><p class=\"txt-free\" data-v-e43a4d0e>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardGratis'))) + "</p></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-polygon\" data-v-e43a4d0e><svg width=\"12px\" height=\"12px\" viewBox=\"0 0 255 255\" class=\"icon-overlay-free\" data-v-e43a4d0e><polygon points=\"0,0 127.5,127.5 255,0\" class=\"fill-current\" data-v-e43a4d0e></polygon></svg></div>" : "<!---->") + " " + (_vm.soldOut ? "<div class=\"overlay-sould\" data-v-e43a4d0e><div class=\"text-sould\" data-v-e43a4d0e><svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" viewBox=\"0 0 512 512\" class=\"svg-sould-out\" data-v-e43a4d0e><g data-v-e43a4d0e><g data-v-e43a4d0e><path d=\"m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z\" fill=\"#cd3232\" data-v-e43a4d0e></path></g> <g data-v-e43a4d0e><path d=\"m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#cd3232\" data-v-e43a4d0e></path></g> <g data-v-e43a4d0e><path d=\"m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#ff4646\" data-v-e43a4d0e></path></g> <g data-v-e43a4d0e><circle cx=\"96\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-e43a4d0e></circle></g> <g data-v-e43a4d0e><circle cx=\"384\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-e43a4d0e></circle></g> <g data-v-e43a4d0e><path d=\"m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z\" fill=\"#463c4b\" data-v-e43a4d0e></path></g> <g data-v-e43a4d0e><circle cx=\"240\" cy=\"92.457\" fill=\"#ff4646\" r=\"24\" data-v-e43a4d0e></circle></g> <g data-v-e43a4d0e><g data-v-e43a4d0e><path d=\"m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z\" fill=\"#32283c\" data-v-e43a4d0e></path></g> <g data-v-e43a4d0e><path d=\"m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#32283c\" data-v-e43a4d0e></path></g> <g data-v-e43a4d0e><path d=\"m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#e6e6eb\" data-v-e43a4d0e></path></g> <g data-v-e43a4d0e><path d=\"m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z\" fill=\"#32283c\" data-v-e43a4d0e></path></g> <g data-v-e43a4d0e><path d=\"m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z\" fill=\"#32283c\" data-v-e43a4d0e></path></g> <g data-v-e43a4d0e><path d=\"m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z\" fill=\"#e6e6eb\" data-v-e43a4d0e></path></g> <path d=\"m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" fill=\"#e6e6eb\" data-v-e43a4d0e></path></g></g></svg></div></div>" : "<!---->") + " "), _c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [this.product.tag_promocion == 1 && this.product.promocion_valor ? _c('div', {
    staticClass: "overlay-bottom-promo"
  }, [_c('div', {
    staticClass: "cart-Shop"
  }, [_c('div', {
    staticClass: "text-cart"
  }, [_c('p', {
    staticClass: "w-full txt-add"
  }, [_vm._v("\n              " + _vm._s(this.product.promocion_valor) + "% OFF\n            ")])])])]) : _c('div', {
    staticClass: "overlay-bottom"
  }, [_c('div', {
    staticClass: "cart-Shop"
  }, [_c('div', {
    staticClass: "text-cart"
  }, [_c('p', {
    staticClass: "w-full txt-add"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('home_vistarapida')) + "\n            ")])])])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"datos-producto\"" + _vm._ssrStyle(null, [{
    '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Roboto'
  }], null) + " data-v-e43a4d0e>", "</div>", [_vm._ssrNode((this.product.categoria ? "<div class=\"categoria\" data-v-e43a4d0e>" + _vm._ssrEscape("\n      " + _vm._s(this.product.categoria) + "\n    ") + "</div>" : "<!---->") + " "), _c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('div', {
    staticClass: "tittle tittle-xml"
  }, [this.product.nombre.length >= 90 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.nombre.slice(0, 90)}...`) + "\n        ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.nombre.slice(0, 90)}`) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "tittle tittle-lg"
  }, [this.product.nombre.length >= 54 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.nombre.slice(0, 54)}...`) + "\n        ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.nombre.slice(0, 54)}`) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "tittle tittle-sm"
  }, [this.product.nombre.length >= 30 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.nombre.slice(0, 30)}...`) + "\n        ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.nombre.slice(0, 30)}`) + "\n        ")])])]), _vm._ssrNode(" <div class=\"precio\" data-v-e43a4d0e>" + (this.product.precio ? "<div class=\"content-text-price\" data-v-e43a4d0e>" + (this.estadoCart == true && this.equalsPrice ? "<div data-v-e43a4d0e>" + (this.minPrice ? "<p class=\"text-price\" data-v-e43a4d0e>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>" : this.estadoCart == true && this.minPrice != this.maxPrice && !this.equalsPrice ? "<div class=\"content-price\" data-v-e43a4d0e>" + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-e43a4d0e>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div>" : "<!---->") + " <p class=\"separator-price\" data-v-e43a4d0e>-</p> " + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-e43a4d0e>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div>" : "<!---->") + "</div>" : "<div data-v-e43a4d0e>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-e43a4d0e>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>") + "</div>" : "<div class=\"h-27\" data-v-e43a4d0e></div>") + "</div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/_productcard/ProductCard.vue?vue&type=template&id=e43a4d0e&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productcard/ProductCard.vue?vue&type=script&lang=js&


/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'Ko-ProductCard-9',
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
// CONCATENATED MODULE: ./components/template9/_productcard/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/_productcard/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(210)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e43a4d0e",
  "32767008"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(782);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("792ea924", content, true, context)
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

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_vue_vue_type_style_index_0_id_115a94ee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_vue_vue_type_style_index_0_id_115a94ee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_vue_vue_type_style_index_0_id_115a94ee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_vue_vue_type_style_index_0_id_115a94ee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_vue_vue_type_style_index_0_id_115a94ee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-content[data-v-115a94ee]{background:var(--background_color_1);padding-top:70px}.product-content[data-v-115a94ee],.producto-items-content[data-v-115a94ee]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.producto-items-content[data-v-115a94ee]{text-align:center}.product-conten-items[data-v-115a94ee]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start}.product-text[data-v-115a94ee]{margin-bottom:30px;max-width:470px;text-align:center;width:100%}.tittle[data-v-115a94ee]{color:var(--color_title);font-family:var(--font-style-1);font-weight:700}.content-item[data-v-115a94ee]{flex-direction:row;margin-bottom:40px}.content-item[data-v-115a94ee],.content-item-productos[data-v-115a94ee]{align-items:center;display:flex;justify-content:center;width:100%}.content-item-productos[data-v-115a94ee]{flex-direction:column}.btn-products[data-v-115a94ee]{border:2px solid var(--color_background_btn);color:var(--color_text_btn);font-family:var(--font-style-2);font-size:15px;font-weight:800;height:45px;letter-spacing:1px;margin-top:80px;padding-left:5px;padding-right:5px;width:auto}.btn-products[data-v-115a94ee],.btn-products[data-v-115a94ee]:hover{transition:all .15s ease-in}.btn-products[data-v-115a94ee]:hover{background-color:#2c2930;color:#fff}@media (min-width:300px){.product-conten-items[data-v-115a94ee]{grid-gap:1rem;display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));width:95%}.tittle[data-v-115a94ee]{font-size:30px;line-height:34px}}@media (min-width:500px){.product-conten-items[data-v-115a94ee]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));width:90%}}@media (min-width:1024px){.product-conten-items[data-v-115a94ee]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1000px){.product-conten-items[data-v-115a94ee]{width:95%}}@media (min-width:1160px){.product-conten-items[data-v-115a94ee]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));width:95vw}}@media (min-width:1920px){.tittle[data-v-115a94ee]{font-size:36px;line-height:34px}}@media (min-width:2560px){.product-conten-items[data-v-115a94ee]{gap:2.5rem}}@media (max-width:460px){.product-text[data-v-115a94ee]{width:90%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=86.js.map