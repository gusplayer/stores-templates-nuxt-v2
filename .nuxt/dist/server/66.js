exports.ids = [66];
exports.modules = {

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("97c7fb32", content, true, context)
};

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_4d225d27_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_4d225d27_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_4d225d27_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_4d225d27_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_4d225d27_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-card[data-v-4d225d27]{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);align-items:center;background:var(--background_color_1);border-radius:5px;box-shadow:0 0 transparent,0 0 transparent,0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-sizing:border-box;display:flex;justify-content:center;width:100%}.container-card[data-v-4d225d27]{border-radius:5px;flex-direction:column}.container-card[data-v-4d225d27],.wrapper-image[data-v-4d225d27]{align-items:center;display:flex;overflow:hidden;position:relative;width:100%}.wrapper-image[data-v-4d225d27]{justify-content:center;max-height:300px;min-height:250px}.product-image[data-v-4d225d27]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.notproduct-image[data-v-4d225d27]{height:294px;max-height:294px;width:300px}.product-image-soldOut[data-v-4d225d27]{filter:grayscale(100%);-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.image_overlay[data-v-4d225d27]{background:hsla(0,0%,41%,.165);height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}#product-card:hover .image_overlay[data-v-4d225d27]{opacity:.7;transition:all .2s ease-out}.separador-stats[data-v-4d225d27]{height:95px;width:100%}.stats-container[data-v-4d225d27]{background:var(--background_color_1);display:flex;flex-direction:column;height:120px;justify-content:space-between;left:0;padding:20px 12px 0;position:absolute;top:288px;transition:all .2s ease-out;width:100%}#product-card:hover .stats-container[data-v-4d225d27]{top:241px;transition:all .2s ease-out}.card-info-1[data-v-4d225d27]{background:#e71f77;color:#fff;top:-44px}.card-info-1[data-v-4d225d27],.card-info-2[data-v-4d225d27]{align-items:center;border-radius:var(--radius_btn);display:flex;font-size:12px;justify-content:center;padding:1px 4px;position:absolute;right:0;z-index:2}.card-info-2[data-v-4d225d27]{background:#35dd8d;color:#000;font-weight:700;top:-22px}.content-name-product[data-v-4d225d27]{align-items:flex-start;display:flex;justify-content:center;min-height:36px;text-align:center;width:100%}.card-title[data-v-4d225d27]{color:var(--color_title);font-size:var(--fontSizeTitle);font-weight:var(--fontWeighTitle)}.content-text-price[data-v-4d225d27]{margin-top:5px;width:100%}.content-price[data-v-4d225d27],.content-text-price[data-v-4d225d27]{align-items:center;display:flex;justify-content:center}.content-price[data-v-4d225d27]{flex-direction:row;max-height:29px;min-height:29px}.content-price-empty[data-v-4d225d27]{margin-top:5px;max-height:29px;min-height:29px;width:100%}.text-price[data-v-4d225d27]{color:var(--color_price);font-size:20px;font-weight:var(--fontWeighPrice);line-height:1.4;text-align:center}.separator-price[data-v-4d225d27]{color:var(--color_price);margin-left:5px;margin-right:5px}.wrapper-btn-icon[data-v-4d225d27]{flex-direction:row;width:100%}#add_cart[data-v-4d225d27],.wrapper-btn-icon[data-v-4d225d27]{align-items:center;display:flex;justify-content:center}#add_cart[data-v-4d225d27]{background-color:var(--color_background_btn);border:2px solid var(--color_border_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);font-size:19px;font-weight:700;height:41px;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}#add_cart[data-v-4d225d27]:hover{background-color:var(--hover_Bg_btn);border:2px solid var(--hover_Border_btn);color:var(--hover_text_btn);cursor:pointer}#product-card:hover #add_cart[data-v-4d225d27]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.view_details[data-v-4d225d27]{align-items:center;background-color:transparent;border:2px solid var(--color_border_btn);border-radius:var(--radius_btn);color:var(--color_border_btn);display:flex;font-size:19px;font-weight:700;height:41px;justify-content:center;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}.view_details[data-v-4d225d27]:hover{border:2px solid var(--hover_Border_btn);color:var(--hover_Border_btn);cursor:pointer}#product-card:hover .view_details[data-v-4d225d27]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.separador-btn[data-v-4d225d27]{width:5px}.wrapper[data-v-4d225d27]{display:inline;display:initial;width:100%}.wrapper-movil[data-v-4d225d27]{display:none}.card-icon-cart-movil[data-v-4d225d27]:hover{color:var(--hover_text_btn)}.overlay-top[data-v-4d225d27]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background:#fff;border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#35dd8d;font-size:13px;height:29px;left:100%;overflow:hidden;padding:5px;position:absolute;right:0;top:43px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:0}#product-card:hover .overlay-top[data-v-4d225d27]{left:75%;width:67px}.overlay-free[data-v-4d225d27]{background-color:#35dd8d;border-radius:.25rem;color:#fff;height:35px;left:100%;overflow:hidden;position:absolute;right:0;text-align:center;top:0;transition:.5s ease;width:0}.txt-free[data-v-4d225d27]{font-size:13px;line-height:12px;margin-top:5px}#product-card:hover .overlay-free[data-v-4d225d27]{left:55%;transition-delay:.7s;width:125px}.overlay-polygon[data-v-4d225d27]{fill:#35dd8d;background-color:transparent;height:5%;left:100%;overflow:hidden;position:absolute;right:0;top:35px;width:0}#product-card:hover .overlay-polygon[data-v-4d225d27]{left:90%;transition-delay:.95s;width:5%}@media (max-width:1270px){.separador-stats[data-v-4d225d27]{height:105px}}@media (max-width:1249px){.separador-stats[data-v-4d225d27]{height:98px}}@media (max-width:768px){.wrapper[data-v-4d225d27]{display:none}.wrapper-movil[data-v-4d225d27]{display:inline;display:initial;width:100%}.content-card-items[data-v-4d225d27]{align-items:center;display:flex;flex-direction:column;height:75px;justify-content:space-between;padding:5px 10px;position:relative;width:100%}.card-title[data-v-4d225d27]{font-size:13px}.content-text-price[data-v-4d225d27]{margin-top:0}.text-price[data-v-4d225d27]{font-size:15px}.icon-cart[data-v-4d225d27]{margin-left:20px}.card-info-1[data-v-4d225d27]{font-size:10px;top:-43px}.card-info-2[data-v-4d225d27]{font-size:10px;top:-22px}.notproduct-image-res[data-v-4d225d27]{height:357px;max-height:357px;width:100%}}@media (max-width:450px){.notproduct-image-res[data-v-4d225d27]{height:170px;max-height:170px}.container-card[data-v-4d225d27]{max-width:200px;width:100%}.wrapper-image[data-v-4d225d27]{min-height:170px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productcard/Ko-ProductCard-1.vue?vue&type=template&id=4d225d27&scoped=true&
=======
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productcard/Ko-ProductCard-1.vue?vue&type=template&id=4d225d27&scoped=true&
>>>>>>> 8fc64a3b0afecc12b7dc65aa7021e406232a9a48
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-card",
    style: [_vm.settingGeneral, _vm.cardProduct, {
      '--font-style-1': _vm.settingGeneral.fount_1 ? _vm.settingGeneral.fount_1 : 'Poppins'
    }]
  }, [_vm._ssrNode("<div id=\"product-card\" class=\"container-card\" data-v-4d225d27>", "</div>", [_vm._ssrNode("<div class=\"wrapper\" data-v-4d225d27>", "</div>", [_c('nuxt-link', {
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
      value: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png' : _vm.idCloudinary(this.product.foto_cloudinary, 550, 550),
      expression: "\n              this.product.foto_cloudinary == 'sin_foto.jpeg'\n                ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'\n                : idCloudinary(this.product.foto_cloudinary, 550, 550)\n            "
    }],
    staticClass: "product-image",
    class: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'notproduct-image' : '',
    attrs: {
      "alt": "Product Img"
    }
  }) : _vm._e(), _vm._v(" "), _vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png' : _vm.idCloudinary(this.product.foto_cloudinary, 550, 550),
      expression: "\n              this.product.foto_cloudinary == 'sin_foto.jpeg'\n                ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'\n                : idCloudinary(this.product.foto_cloudinary, 550, 550)\n            "
    }],
    staticClass: "product-image-soldOut",
    class: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'notproduct-image' : '',
    attrs: {
      "alt": "Product Img"
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "image_overlay"
  })], 1), _vm._ssrNode(" " + (this.product.tag_promocion == 1 && this.product.promocion_valor ? "<div data-v-4d225d27><div class=\"overlay-top\" data-v-4d225d27><div data-v-4d225d27><p data-v-4d225d27>" + _vm._ssrEscape(_vm._s(this.product.promocion_valor) + "% OFF") + "</p></div></div> <div class=\"overlay-free\" data-v-4d225d27><p class=\"txt-free\" data-v-4d225d27>" + _vm._ssrEscape(_vm._s(_vm.$t('home_pdescuento'))) + "</p></div> <div class=\"overlay-polygon\" data-v-4d225d27><svg width=\"12px\" height=\"12px\" viewBox=\"0 0 255 255\" class=\"icon-overlay-free\" data-v-4d225d27><polygon points=\"0,0 127.5,127.5 255,0\" data-v-4d225d27></polygon></svg></div></div>" : "<!---->") + " <div class=\"separador-stats\" data-v-4d225d27></div> "), _vm._ssrNode("<div class=\"stats\" data-v-4d225d27>", "</div>", [_vm._ssrNode("<div class=\"stats-container\" data-v-4d225d27>", "</div>", [_vm._ssrNode((_vm.soldOut ? "<p class=\"card-info-1\" data-v-4d225d27>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_cardAgotado')) + "\n          ") + "</p>" : "<!---->") + " " + (!_vm.getFreeShipping ? "<p class=\"card-info-2\" data-v-4d225d27>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_cardGratis')) + "\n          ") + "</p>" : "<!---->") + " <div class=\"content-name-product\" data-v-4d225d27>" + (this.product.nombre.length >= 54 ? "<p class=\"card-title\" data-v-4d225d27>" + _vm._ssrEscape("\n              " + _vm._s(`${this.product.nombre.slice(0, 54)}...`) + "\n            ") + "</p>" : "<p class=\"card-title\" data-v-4d225d27>" + _vm._ssrEscape("\n              " + _vm._s(`${this.product.nombre.slice(0, 54)}`) + "\n            ") + "</p>") + "</div> " + (this.product.precio ? "<div class=\"content-text-price\" data-v-4d225d27>" + (this.estadoCart == true && this.equalsPrice ? "<div data-v-4d225d27>" + (this.minPrice ? "<p class=\"text-price\" data-v-4d225d27>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p>" : "<!---->") + "</div>" : this.estadoCart == true && this.minPrice != this.maxPrice && !this.equalsPrice ? "<div class=\"content-price\" data-v-4d225d27>" + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-4d225d27>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</div>" : "<!---->") + " <p class=\"separator-price\" data-v-4d225d27>-</p> " + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-4d225d27>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</div>" : "<!---->") + "</div>" : "<div data-v-4d225d27>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-4d225d27>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p>" : "<!---->") + "</div>") + "</div>" : "<div class=\"content-price-empty\" data-v-4d225d27></div>") + " "), _vm._ssrNode("<div class=\"wrapper-btn-icon\" data-v-4d225d27>", "</div>", [_c('nuxt-link', {
    staticClass: "view_details",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('home_cardvermas')))])]), _vm._ssrNode(" <div class=\"separador-btn\" data-v-4d225d27></div> "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div id=\"add_cart\" data-v-4d225d27>", "</div>", [_vm._ssrNode("<p style=\"height: 23px\" data-v-4d225d27>", "</p>", [_c('cartArrowDown'), _vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.$t('home_cardAgregar')) + "\n              "))], 2)]) : _vm._e()], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-movil\" data-v-4d225d27>", "</div>", [_c('nuxt-link', {
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
      value: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png' : _vm.idCloudinary(this.product.foto_cloudinary, 400, 400),
      expression: "\n              this.product.foto_cloudinary == 'sin_foto.jpeg'\n                ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'\n                : idCloudinary(this.product.foto_cloudinary, 400, 400)\n            "
    }],
    staticClass: "product-image",
    class: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'notproduct-image-res' : '',
    attrs: {
      "alt": "Product Img"
    }
  }) : _vm._e(), _vm._v(" "), _vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png' : _vm.idCloudinary(this.product.foto_cloudinary, 400, 400),
      expression: "\n              this.product.foto_cloudinary == 'sin_foto.jpeg'\n                ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'\n                : idCloudinary(this.product.foto_cloudinary, 400, 400)\n            "
    }],
    staticClass: "product-image-soldOut",
    class: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'notproduct-image-res' : '',
    attrs: {
      "alt": "Product Img"
    }
  }) : _vm._e()])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-card-items\" data-v-4d225d27>", "</div>", [_vm._ssrNode((_vm.soldOut ? "<p class=\"card-info-1\" data-v-4d225d27>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p>" : "<!---->") + " " + (!_vm.getFreeShipping ? "<p class=\"card-info-2\" data-v-4d225d27>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('home_cardGratis')) + "\n        ") + "</p>" : "<!---->") + " "), _c('nuxt-link', {
    staticClass: "content-name-product",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [this.product.nombre.length >= 25 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(`${this.product.nombre.slice(0, 25)}..`) + "\n          ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(`${this.product.nombre.slice(0, 30)}`) + "\n          ")])]), _vm._ssrNode(" "), this.product.precio ? _vm._ssrNode("<div class=\"content-text-price\" data-v-4d225d27>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [this.estadoCart == true && this.equalsPrice ? _c('div', [this.minPrice ? _c('p', {
    staticClass: "text-price"
  }, [_vm._v("\n                " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ")]) : _vm._e()]) : _vm.estadoCart && this.minPrice != this.maxPrice & !this.equalsPrice ? _c('div', {
    staticClass: "content-price"
  }, [this.product.precio > 0 || this.product.precio ? _c('div', {
    staticClass: "text-price"
  }, [_vm._v("\n                " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ")]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "separator-price"
  }, [_vm._v("-")]), _vm._v(" "), this.product.precio > 0 || this.product.precio ? _c('div', {
    staticClass: "text-price"
  }, [_vm._v("\n                " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ")]) : _vm._e()]) : _c('div', [this.product.precio > 0 || this.product.precio ? _c('p', {
    staticClass: "text-price"
  }, [_vm._v("\n                " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ")]) : _vm._e()])]), _vm._ssrNode(" "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div data-v-4d225d27>", "</div>", [_c('cartArrowDown', {
    staticClass: "icon-cart",
    on: {
      "click": _vm.addShoppingCart
    }
  })], 1) : _vm._e()], 2) : _vm._ssrNode("<div class=\"separator-movil\" data-v-4d225d27>", "</div>", [!this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div data-v-4d225d27>", "</div>", [_c('cartArrowDown', {
    on: {
      "click": _vm.addShoppingCart
    }
  })], 1) : _vm._e()])], 2)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/_productcard/Ko-ProductCard-1.vue?vue&type=template&id=4d225d27&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productcard/Ko-ProductCard-1.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko_ProductCard_1vue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'Ko-ProductCard-13',
  props: {
    product: Object,
    settingGeneral: Object,
    cardProduct: Object
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
  data() {
    return {
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
  computed: {
    facebookPixel() {
      return this.$store.state.analytics_tagmanager;
    },
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
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
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
                inventario += parseInt(item.unidades);
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
            precio: this.salesData.precio,
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
    productsCarts() {
      this.getDataProduct();
    }
  }
});
// CONCATENATED MODULE: ./components/template13/_productcard/Ko-ProductCard-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_Ko_ProductCard_1vue_type_script_lang_js_ = (Ko_ProductCard_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template13/_productcard/Ko-ProductCard-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(213)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_Ko_ProductCard_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4d225d27",
  "281243b4"
  
)

/* harmony default export */ var Ko_ProductCard_1 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(654);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1f317608", content, true, context)
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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    // filtro etiqueta URL
    sendTagUrlMix(tag_id, tag_Name) {
      this.$store.commit('products/FILTER_BY', {
        type: ['tag'],
        data: ''
      });
      this.$store.state.products.payloadTag = parseInt(tag_id);
      this.$store.state.products.payloadTagName = tag_Name;
    },
    // filtro categoría URL
    sendCategoryUrlMix(value) {
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      let urlFiltrada = decodeURIComponent(value);
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: urlFiltrada
      });
      if (this.$store.getters['products/filterProducts'].length) {
        this.$store.commit('SET_CATEGORY_PRODUCTO', urlFiltrada);
      } else {
        this.$store.commit('SET_CATEGORY_PRODUCTO', '');
      }
    },
    // filtro subcategoría URL
    SendSubCategoryUrlMix(value, categories, subcategories) {
      let urlFiltradaTemp = decodeURIComponent(value);
      let resTemp = urlFiltradaTemp.split('^');
      let urlFiltrada = decodeURIComponent(resTemp[0]);
      let filtradoSubCategories = subcategories.find(element => {
        if (element.categoria == parseInt(resTemp[1]) && element.nombre_subcategoria == urlFiltrada) {
          return element;
        }
      });
      if (filtradoSubCategories) {
        let filtradoCategories = categories.find(element => element.id == parseInt(resTemp[1]));
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: filtradoSubCategories.id
        });
        if (this.$store.getters['products/filterProducts'].length) {
          this.$store.commit('SET_CATEGORY_PRODUCTO', filtradoCategories.nombre_categoria_producto);
          this.$store.commit('SET_SUBCATEGORY_PRODUCTO', filtradoSubCategories.nombre_subcategoria);
        } else {
          this.$store.commit('SET_CATEGORY_PRODUCTO', '');
          this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
        }
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: ''
        });
      }
    },
    // filtro categoría, subcategoría y etiqueta
    getProductsFilter(value, tag_id, tag_Name, Lateral) {
      this.$store.commit('SET_STATE_BANNER', false);
      let type = this.$store.state.products.type;
      let payload = this.$store.state.products.payload;
      if (type.length < 2) {
        this.$store.state.products.payloadTag = tag_id ? tag_id : this.$store.state.products.payloadTag ? this.$store.state.products.payloadTag : '';
        this.$store.state.products.payloadTagName = tag_Name ? tag_Name : this.$store.state.products.payloadTagName ? this.$store.state.products.payloadTagName : '';
      }
      if (type && type.length >= 1) {
        if (type[0] == 'category' || type[0] == 'subcategory' || type[0] == 'tag') {
          this.$store.commit('products/FILTER_BY', {
            type: [type[0], `${value}`],
            data: payload
          });
        }
        if (type[0] == 'category' || type[0] == 'subcategory') {
          if (type[1] == 'tag') {
            this.$store.commit('products/FILTER_BY', {
              type: [type[0], type[1], `${value}`],
              data: payload
            });
            this.$store.state.products.payloadTag2 = tag_id ? tag_id : this.$store.state.products.payloadTag2 ? this.$store.state.products.payloadTag2 : '';
            this.$store.state.products.payloadTag2Name = tag_Name ? tag_Name : this.$store.state.products.payloadTag2Name ? this.$store.state.products.payloadTag2Name : '';
          }
        } else {
          this.$store.state.products.type = [];
          this.$store.commit('products/FILTER_BY', {
            type: [`${value}`],
            data: ''
          });
          this.setURlTag(tag_id, tag_Name);
        }
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: [`${value}`],
          data: ''
        });
        this.setURlTag(tag_id, tag_Name);
      }
      this.currentPage = 1;
      if (Lateral === true) {
        this.$router.push({
          path: '/productos'
        });
        this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false);
      }
    },
    allCategories() {
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
      this.currentPage = 1;
    },
    SearchProduct(search) {
      if (search.length) {
        this.search = search;
        this.$router.push({
          path: '',
          query: {
            search: search
          }
        });
        this.$store.commit('products/FILTER_BY', {
          type: ['search'],
          data: search
        });
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['all'],
          data: ''
        });
      }
      this.currentPage = 1;
    },
    setURlTag(id, name) {
      if (this.$store.state.products.type[0] == 'tag') {
        this.$router.push({
          path: '',
          query: {}
        });
        this.$router.push({
          path: '',
          query: {
            tagId: id,
            tagName: name
          }
        });
      }
    }
  }
});

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_bfe0a752_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(359);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_bfe0a752_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_bfe0a752_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_bfe0a752_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_bfe0a752_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container-product-max-w[data-v-bfe0a752]{max-width:1300px}.container-product-max-w[data-v-bfe0a752],.product-content[data-v-bfe0a752]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.product-content[data-v-bfe0a752]{background:var(--background_color_1);padding-bottom:80px}.content-banner-shop[data-v-bfe0a752],.content-banner-shop-r[data-v-bfe0a752]{display:flex;flex-direction:column;width:100%}.content-banner-shop-r[data-v-bfe0a752]{align-items:flex-start;justify-content:flex-start}.content-left[data-v-bfe0a752] .el-collapse{border-bottom:1px solid var(--color_icon);border-top:1px solid var(--color_icon);width:100%}.content-left[data-v-bfe0a752] .el-collapse-item__wrap{background-color:transparent;border-bottom:1px solid var(--color_icon);will-change:height}.content-left[data-v-bfe0a752] .el-collapse-item__header{background-color:transparent;border-bottom:1px solid var(--color_icon);color:var(--color_text);font-family:var(--font-style-1)!important;font-size:15px;font-weight:600}.content-left[data-v-bfe0a752] .el-collapse-item__header.is-active{border-bottom:none}.content-left[data-v-bfe0a752] .el-collapse-item__arrow{color:var(--color_icon)}.input-slide[data-v-bfe0a752]{background:transparent;border-style:none;color:var(--color_subtext);cursor:pointer;font-family:var(--font-style-1)!important;font-size:15px;height:30px;width:100%}.value-range-slide[data-v-bfe0a752]{width:100%}.value-range-slide[data-v-bfe0a752],.values-prices[data-v-bfe0a752]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.values-prices[data-v-bfe0a752]{width:80%}.value-price[data-v-bfe0a752]{color:#717171;cursor:default;font-family:var(--font-style-1)!important;font-size:14px;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:auto}.value-precio-change[data-v-bfe0a752]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.price[data-v-bfe0a752]{color:#2d2a2a;cursor:default;flex-direction:row;font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;justify-content:flex-start;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn-slider[data-v-bfe0a752],.price[data-v-bfe0a752]{align-items:center;display:flex}.btn-slider[data-v-bfe0a752]{justify-content:center;width:30%}.btn-items-left[data-v-bfe0a752]{align-items:center;background-color:#ededed;border-radius:35px;cursor:pointer;display:flex;font-family:var(--font-style-1)!important;font-size:12px;font-weight:600;justify-content:center;letter-spacing:.3px;padding:10px 14px;text-align:center;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn-items-left[data-v-bfe0a752]:hover{background-color:#e5e5e5}.content-items-categorias[data-v-bfe0a752]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.content-items-categorias-text[data-v-bfe0a752]{display:flex;flex-direction:row;width:100%}.text-categorias[data-v-bfe0a752]{color:#333;cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:600;margin-right:6px;width:auto}.separator-breadCrumbs[data-v-bfe0a752],.text-categorias[data-v-bfe0a752]{font-family:var(--font-style-1)!important}.separator-breadCrumbs[data-v-bfe0a752]{color:#8e8e8e;cursor:pointer;font-size:14px;margin-left:6px;margin-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:auto}.product-stock-text[data-v-bfe0a752]{color:#8e8e8e;font-size:14px;font-weight:600}.product-stock-active[data-v-bfe0a752],.product-stock-text[data-v-bfe0a752]{font-family:var(--font-style-1)!important}.product-stock-active[data-v-bfe0a752]{color:#000;font-size:15px;font-weight:600}.text-categorias-select[data-v-bfe0a752]{color:#8e8e8e;cursor:pointer;display:flex;flex-direction:row;font-family:var(--font-style-1)!important;font-size:14px;font-weight:400;margin-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.top-content[data-v-bfe0a752]{align-items:center;display:flex;flex-wrap:wrap;font-size:100%;justify-content:space-between;margin-bottom:20px;max-width:100%;width:100%}.categorys-list[data-v-bfe0a752],.subcategory-list[data-v-bfe0a752]{grid-gap:1rem;align-items:center;display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr));justify-content:flex-start;width:100%}.subcategory-list[data-v-bfe0a752]{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-category-left[data-v-bfe0a752]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.txt-Filter[data-v-bfe0a752]{align-items:center;color:var(--color_subtext);cursor:pointer;display:flex;flex-direction:row;font-family:var(--font-style-1)!important;font-size:15px;font-weight:400;justify-content:flex-start;line-height:1.3;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-Filter[data-v-bfe0a752]:hover{color:#eb7025}.txt-categorys[data-v-bfe0a752]{align-items:center;color:var(--color_subtext);cursor:pointer;display:flex;flex-direction:row;font-family:var(--font-style-1)!important;font-size:15px;font-weight:400;justify-content:flex-start;line-height:1.3;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-categorys[data-v-bfe0a752]:hover{color:#eb7025}.txt-categorys-active[data-v-bfe0a752]{align-items:center;color:#eb7025;cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:600;justify-content:flex-start;padding-right:1px;width:100%}.txt-categorys-active[data-v-bfe0a752],.txt-categorys:hover .rounded-list[data-v-bfe0a752]{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-categorys:hover .rounded-list[data-v-bfe0a752]{background-color:#eb7025}.rounded-list[data-v-bfe0a752]{background-color:#e5e5e5;border-radius:100px;height:10px;margin-right:10px;width:10px}.rounded-list[data-v-bfe0a752],.txt-rounded-list-active[data-v-bfe0a752]{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-rounded-list-active[data-v-bfe0a752]{background-color:#eb7025}.product-stock[data-v-bfe0a752]{color:#333;cursor:pointer;font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;margin-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.show-view-per-list[data-v-bfe0a752]{align-items:center;justify-content:center;width:auto}.show[data-v-bfe0a752]{cursor:pointer;margin-top:4px;width:100%}.show-icon[data-v-bfe0a752]{fill:var(--color_text);padding:3px}.show-icon-active[data-v-bfe0a752]{fill:var(--color_subtext);background-color:transparent}.show-icon[data-v-bfe0a752]:hover{fill:#000;background-color:#f8f8f8}.show:focus .show-icon[data-v-bfe0a752]{fill:#000}.items-end[data-v-bfe0a752]{align-items:center;flex-direction:row}.items-end[data-v-bfe0a752],.tittle-banner-shop[data-v-bfe0a752]{display:flex;justify-content:flex-start;width:100%}.tittle-banner-shop[data-v-bfe0a752]{align-items:flex-start;flex-direction:column}.btn-tittle-shop[data-v-bfe0a752]{align-items:flex-start;color:var(--color_text);font-family:var(--font-style-1)!important;font-weight:600;justify-content:flex-start;text-transform:uppercase}.product-text[data-v-bfe0a752]{display:flex;flex-direction:column;width:100%}.product-content-items[data-v-bfe0a752],.product-text[data-v-bfe0a752]{align-items:center;justify-content:center}.product-content-items[data-v-bfe0a752]{gap:1rem;text-align:center}.producto-items-content[data-v-bfe0a752]{width:100%}.content-item[data-v-bfe0a752]{flex-direction:row;margin-bottom:40px}.content-item[data-v-bfe0a752],.content-item-productos[data-v-bfe0a752]{align-items:center;display:flex;justify-content:center;width:100%}.content-item-productos[data-v-bfe0a752]{flex-direction:column}.content-products[data-v-bfe0a752],.content-products-empty[data-v-bfe0a752]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-products-empty[data-v-bfe0a752]{min-height:200px;text-align:center}.txt-products-empty[data-v-bfe0a752]{color:#3f3f3f;font-family:var(--font-style-1)!important;font-size:20px;font-weight:600;margin-top:6px}.pagination-medium[data-v-bfe0a752]{background:transparent;margin-top:50px}.pagination[data-v-bfe0a752]{background:transparent;color:#222;font-size:18px}.product_pagination[data-v-bfe0a752] .el-pagination.is-background .btn-next,.product_pagination[data-v-bfe0a752] .el-pagination.is-background .btn-prev,.product_pagination[data-v-bfe0a752] .el-pagination.is-background .el-pager li{background-color:transparent;color:#222}.product_pagination[data-v-bfe0a752] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-bfe0a752] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-bfe0a752] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--pagination_color)}.product_pagination[data-v-bfe0a752] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--pagination_color);color:#fff}.product-stock[data-v-bfe0a752]{cursor:default}.product-list[data-v-bfe0a752]{width:100%}@media (min-width:300px){.product-content-items[data-v-bfe0a752]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));width:100%}.btn-tittle-shop[data-v-bfe0a752]{font-size:16px;margin-bottom:10px}.content-shop-items[data-v-bfe0a752]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;padding-left:10px;padding-right:10px;width:100%}.content-left[data-v-bfe0a752]{display:none}.content-right[data-v-bfe0a752]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.top-content[data-v-bfe0a752]{display:none}.content-items-categorias-text[data-v-bfe0a752]{align-items:center;justify-content:center}.text-categorias-select[data-v-bfe0a752]{width:auto}.content-banner-shop[data-v-bfe0a752]{align-items:flex-start;justify-content:flex-start;margin-bottom:8px;margin-top:8px;padding-left:20px}.bannerProduct[data-v-bfe0a752]{display:none}.content-home[data-v-bfe0a752]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.txt-content-home[data-v-bfe0a752]{color:var(--color_text);cursor:pointer;font-family:var(--font-style-1)!important;font-size:16px;font-weight:600;line-height:1.1;padding-bottom:20px;padding-top:20px;text-transform:uppercase;width:auto}.txt-content-home[data-v-bfe0a752]:hover{color:#000}}@media (min-width:440px){.product-content-items[data-v-bfe0a752]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:768px){.btn-tittle-shop[data-v-bfe0a752]{font-size:36px;margin-bottom:0}.content-shop-items[data-v-bfe0a752]{padding-left:20px;padding-right:20px;width:100%}.bannerProduct[data-v-bfe0a752]{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:cover;border-bottom-width:1px;border-color:var(--color_icon);display:flex;justify-items:center;padding-bottom:20px;padding-top:20px;width:100%}.product-content-items[data-v-bfe0a752]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1024px){.product-text[data-v-bfe0a752]{width:100%}.product-content-items[data-v-bfe0a752]{grid-gap:2rem;display:grid;gap:2rem;grid-template-columns:repeat(2,minmax(0,1fr))}.content-items-categorias-text[data-v-bfe0a752]{align-items:center;justify-content:flex-start}.items-end[data-v-bfe0a752]{display:flex;padding-bottom:20px}.show-view-per-list[data-v-bfe0a752]{grid-gap:0;align-items:center;display:grid;gap:0;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:center;width:auto}.btn-tittle-shop[data-v-bfe0a752]{font-size:20px}.top-content[data-v-bfe0a752]{border-bottom:1px solid var(--color_icon);display:flex;padding-bottom:5px;padding-top:0}.content-left[data-v-bfe0a752]{align-items:flex-start;display:flex;flex-direction:column;justify-content:space-between;margin-right:30px;position:sticky;top:162px;width:300px}.content-banner-shop[data-v-bfe0a752]{display:none}.content-banner-shop-r[data-v-bfe0a752]{display:flex;padding-bottom:40px}.content-shop-items[data-v-bfe0a752]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;margin-top:40px;width:100%}.hidd[data-v-bfe0a752]{display:none}}@media (min-width:1280px){.product-content[data-v-bfe0a752]{margin-top:0}.content-left[data-v-bfe0a752]{width:400px}.product-content-items[data-v-bfe0a752]{grid-gap:.5rem;display:grid;gap:.5rem;grid-template-columns:repeat(3,minmax(0,1fr))}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko-ProductListFilter.vue?vue&type=template&id=bfe0a752&scoped=true&
=======
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko-ProductListFilter.vue?vue&type=template&id=bfe0a752&scoped=true&
>>>>>>> 8fc64a3b0afecc12b7dc65aa7021e406232a9a48
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate13 ? _c('div', {
    staticClass: "product-content",
    style: [_vm.settingByTemplate13[0].setting13General, _vm.settingByTemplate13[0].productListFilter]
  }, [_vm._ssrNode("<div class=\"container-product-max-w\"" + _vm._ssrStyle(null, [{
    '--font-style-1': this.settingByTemplate13[0].setting13General && this.settingByTemplate13[0].setting13General.fount_1 ? this.settingByTemplate13[0].setting13General.fount_1 : 'Poppins'
  }], null) + " data-v-bfe0a752>", "</div>", [_vm._ssrNode("<div class=\"content-shop-items\" data-v-bfe0a752>", "</div>", [_vm._ssrNode("<div class=\"content-left\" data-v-bfe0a752>", "</div>", [_c('nuxt-link', {
    staticClass: "content-home",
    attrs: {
      "to": "/productos"
    }
  }, [_c('p', {
    staticClass: "txt-content-home",
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('header_buscar_limpiar')) + "\n          ")])]), _vm._ssrNode(" "), _c('el-collapse', {
    on: {
      "change": _vm.handleChange
    },
    model: {
      value: _vm.activeNames,
      callback: function ($$v) {
        _vm.activeNames = $$v;
      },
      expression: "activeNames"
    }
  }, [_c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('header_buscar_producto'),
      "name": "1"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "input-slide",
    attrs: {
      "type": "search",
      "placeholder": _vm.$t('header_search')
    },
    domProps: {
      "value": _vm.search
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('el-collapse-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.categorias.length > 0,
      expression: "categorias.length > 0"
    }],
    attrs: {
      "title": _vm.$t('productdetail_categoria'),
      "name": "2"
    }
  }, [_c('div', {
    staticClass: "categorys-list"
  }, _vm._l(_vm.categorias, function (categorys, index) {
    return _c('div', {
      key: index,
      on: {
        "click": function ($event) {
          _vm.showSubCategory = true;
        }
      }
    }, [_c('div', {
      on: {
        "click": function ($event) {
          _vm.sendCategory(categorys, categorys.id, _vm.ref = false);
        }
      }
    }, [_c('p', {
      staticClass: "txt-categorys",
      class: categorys.id == _vm.indexSelect ? 'txt-categorys-active' : ''
    }, [_vm._v("\n                    " + _vm._s(categorys.nombre_categoria_producto) + "\n                  ")])])]);
  }), 0)]), _vm._v(" "), _c('el-collapse-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showSubCategory && _vm.selectedSubcategories.length,
      expression: "showSubCategory && selectedSubcategories.length"
    }],
    attrs: {
      "title": _vm.$t('home_subcategory'),
      "name": "3"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showSubCategory && _vm.selectedSubcategories.length,
      expression: "showSubCategory && selectedSubcategories.length"
    }],
    staticClass: "subcategory-list"
  }, _vm._l(_vm.selectedSubcategories, function (subcategorys, index) {
    return _c('div', {
      key: index
    }, [_c('div', {
      on: {
        "click": function ($event) {
          return _vm.SendSubCategory(subcategorys.id);
        }
      }
    }, [_c('p', {
      staticClass: "txt-categorys",
      class: subcategorys.id == _vm.indexSelect2 ? 'txt-categorys-active' : ''
    }, [_vm._v("\n                    " + _vm._s(subcategorys.nombre_subcategoria) + "\n                  ")])])]);
  }), 0)]), _vm._v(" "), _vm._l(_vm.allTags, function (itemsTags, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.allTags && _vm.allTags.length > 0,
        expression: "allTags && allTags.length > 0"
      }],
      key: index
    }, [itemsTags && itemsTags.status === 1 && itemsTags.properties.length > 0 ? _c('el-collapse-item', {
      attrs: {
        "title": itemsTags.name,
        "name": 6 + index
      }
    }, [_c('div', {
      staticClass: "categorys-list"
    }, _vm._l(itemsTags.properties, function (itemsProperties) {
      return _c('button', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: itemsProperties.status === 1,
          expression: "itemsProperties.status === 1"
        }],
        key: itemsProperties.id,
        staticClass: "txt-Filter",
        class: itemsProperties.name == _vm.etiqueta1 ? 'txt-categorys-active' :  false || itemsProperties.name == _vm.etiqueta2 ? 'txt-categorys-active' : '',
        on: {
          "click": function ($event) {
            return _vm.getProductsFilter('tag', itemsProperties.id, itemsProperties.name, false);
          }
        }
      }, [_vm._v("\n                  " + _vm._s(itemsProperties.name) + "\n                ")]);
    }), 0)]) : _vm._e()], 1);
  }), _vm._v(" "), _c('el-collapse-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.stateShipping,
      expression: "!stateShipping"
    }],
    attrs: {
      "title": _vm.$t('home_fenvio'),
      "name": "4"
    }
  }, [_c('div', {
    staticClass: "categorys-list"
  }, [_c('button', {
    staticClass: "txt-Filter",
    on: {
      "click": function ($event) {
        return _vm.getProductsFilter('ShippingFree');
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_gratis')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "txt-Filter",
    on: {
      "click": function ($event) {
        return _vm.getProductsFilter('NoShippingFree');
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_Singratis')) + "\n              ")])])]), _vm._v(" "), _c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('home_fprecio'),
      "name": "5"
    }
  }, [_c('div', {
    staticClass: "categorys-list"
  }, [_c('button', {
    staticClass: "txt-Filter",
    on: {
      "click": function ($event) {
        return _vm.getProductsFilter('higherNumber');
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_fpreciom')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "txt-Filter",
    on: {
      "click": function ($event) {
        return _vm.getProductsFilter('smallerNumber');
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_fprecioM')) + "\n              ")])])])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-right\" data-v-bfe0a752>", "</div>", [_c('nuxt-link', {
    staticClass: "content-home hidd",
    attrs: {
      "to": "/productos"
    }
  }, [_c('p', {
    staticClass: "txt-content-home",
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('header_buscar_limpiar')) + "\n          ")])]), _vm._ssrNode(" <div class=\"empty hidd\" data-v-bfe0a752></div> <div class=\"content-banner-shop-r\" data-v-bfe0a752><div class=\"tittle-banner-shop\" data-v-bfe0a752>" + (!this.nameCategoryHeader ? "<p class=\"btn-tittle-shop\" data-v-bfe0a752>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('header_productos')) + "\n            ") + "</p>" : "<div class=\"flex flex-col justify-start\" data-v-bfe0a752><p class=\"btn-tittle-shop\" data-v-bfe0a752>" + _vm._ssrEscape("\n                " + _vm._s(this.nameCategoryHeader) + "\n              ") + "</p> <div class=\"flex flex-row\" data-v-bfe0a752>" + (this.nameSubCategoryHeader ? "<p class=\"text-12 mr-4\" data-v-bfe0a752>" + _vm._ssrEscape("\n                  " + _vm._s(this.nameSubCategoryHeader) + "\n                ") + "</p>" : "<!---->") + " " + (this.nameSubCategoryHeader && this.etiqueta1 ? "<p class=\"text-12 mr-4\" data-v-bfe0a752>\n                  /\n                </p>" : "<!---->") + " " + (this.etiqueta1 ? "<p class=\"text-12\" data-v-bfe0a752>" + _vm._ssrEscape("\n                  " + _vm._s(this.etiqueta1) + "\n                ") + "</p>" : "<!---->") + " " + (this.etiqueta2 ? "<p class=\"ml-4 text-12\" data-v-bfe0a752>" + _vm._ssrEscape("\n                  / " + _vm._s(this.etiqueta2) + "\n                ") + "</p>" : "<!---->") + "</div></div>") + " " + (this.etiqueta1 && this.nameCategoryHeader == '' && this.nameSubCategoryHeader == '' ? "<div class=\"flex flex-col justify-start\" data-v-bfe0a752>" + (this.etiqueta1 ? "<p class=\"text-12\" data-v-bfe0a752>" + _vm._ssrEscape("\n                " + _vm._s(this.etiqueta1) + "\n              ") + "</p>" : "<!---->") + "</div>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div id=\"section\" class=\"producto-items-content\" data-v-bfe0a752>", "</div>", [_vm._ssrNode("<div class=\"content-item\" data-v-bfe0a752>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-bfe0a752>", "</div>", [_vm._ssrNode("<div id=\"grid-selection\" class=\"product-content-items\" data-v-bfe0a752>", "</div>", _vm._l(_vm.filterProduct, function (product) {
    return _vm._ssrNode("<div class=\"content-products h-full\" data-v-bfe0a752>", "</div>", [_c('KoProductCardFilter', {
      staticClass: "product-list",
      attrs: {
        "product": product,
        "cardProduct": _vm.settingByTemplate13[0].cardProduct,
        "settingGeneral": _vm.settingByTemplate13[0].setting13General
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), this.fullProducts.length == 0 ? _vm._ssrNode("<div class=\"content-products-empty\" data-v-bfe0a752>", "</div>", [_vm._ssrNode("<div class=\"header-content-logo\" data-v-bfe0a752>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/productos"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n                        `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n                      "
    }],
    staticClass: "header-logo",
    attrs: {
      "alt": "Logo Img"
    },
    on: {
      "click": _vm.clear
    }
  })])], 1), _vm._ssrNode(" <p class=\"txt-products-empty\" data-v-bfe0a752>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-bfe0a752>", "</div>", [_vm.fullProducts.length > this.numVistas ? _vm._ssrNode("<div class=\"product_pagination\" data-v-bfe0a752>", "</div>", [_c('el-pagination', {
    staticClass: "pagination",
    attrs: {
      "background": "",
      "layout": "prev, pager, next",
      "total": _vm.fullProducts.length,
      "page-size": this.numVistas,
      "current-page": _vm.currentPage
    },
    on: {
      "update:currentPage": function ($event) {
        _vm.currentPage = $event;
      },
      "update:current-page": function ($event) {
        _vm.currentPage = $event;
      }
    }
  })], 1) : _vm._e()])], 2)])])], 2)], 2)])]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/Ko-ProductListFilter.vue?vue&type=template&id=bfe0a752&scoped=true&

// EXTERNAL MODULE: ./components/template13/_productcard/Ko-ProductCard-1.vue + 4 modules
var Ko_ProductCard_1 = __webpack_require__(218);

// EXTERNAL MODULE: ./mixins/filterProducts.js
var filterProducts = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko-ProductListFilter.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko_ProductListFiltervue_type_script_lang_js_ = ({
  components: {
    KoProductCardFilter: Ko_ProductCard_1["a" /* default */]
  },
  props: {
    settingByTemplate13: Array,
    dataStore: Object,
    fullProducts: {},
    allTags: Array
  },
  mixins: [filterProducts["a" /* default */]],
  name: 'Ko13-ProductList-Filter',
  mounted() {
    this.getQuery();
    if (this.previousPage) {
      this.currentPage = this.previousPage;
    }
  },
  data() {
    return {
      search: '',
      currentPage: 1,
      showSubCategory: false,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      indexSelect: '',
      indexSelect2: '',
      numVistas: 15,
      activeNames: ['1', '2', '3', '4', '5'],
      stateShipping: false
    };
  },
  computed: {
    categorias() {
      return this.dataStore.categorias;
    },
    subcategories() {
      return this.dataStore.subcategorias;
    },
    getProductsCategories() {
      const initial = this.currentPage * 15 - 15;
      const final = initial + 15;
      return this.fullProducts.filter(product => product.categoria == this.select).slice(initial, final);
    },
    filterProduct() {
      const initial = this.currentPage * 15 - 15;
      const final = initial + 15;
      return this.fullProducts.slice(initial, final);
    },
    selectedCategory() {
      return this.$store.state.products.payload;
    },
    selectedType() {
      return this.$store.state.products.type;
    },
    nameCategoryHeader() {
      return this.$store.state.category_producto_header;
    },
    nameSubCategoryHeader() {
      return this.$store.state.subcategory_producto_header;
    },
    searchValue() {
      return this.$store.state.searchValue;
    },
    previousPage() {
      return this.$store.state.previousPage;
    },
    etiqueta1() {
      return this.$store.state.products.payloadTagName;
    },
    etiqueta2() {
      return this.$store.state.products.payloadTag2Name;
    }
  },
  methods: {
    getQuery() {
      if (this.$route.query && this.$route.query.category) {
        this.sendCategoryUrlMix(this.$route.query.category);
      } else if (this.$route.query && this.$route.query.subcategory) {
        this.SendSubCategoryUrlMix(this.$route.query.subcategory, this.categorias, this.subcategories);
      } else if (this.$route.query && this.$route.query.tagId && this.$route.query.tagName) {
        this.sendTagUrlMix(this.$route.query.tagId, this.$route.query.tagName);
      } else if (this.$route.query && this.$route.query.search) {
        this.SearchProduct(decodeURIComponent(this.$route.query.search));
      } else if (this.$route.fullPath == '/') {
        this.allCategories();
      }
    },
    setOptionShipping() {
      if (this.dataStore && this.dataStore.medios_envio) {
        let shipping = JSON.parse(this.dataStore.medios_envio.valores);
        switch (shipping.envio_metodo) {
          case 'sintarifa':
            this.stateShipping = false;
            break;
          case 'gratis':
            this.stateShipping = true;
            break;
          case 'tarifa_plana':
            this.stateShipping = false;
            break;
          case 'precio':
            this.stateShipping = false;
            break;
          case 'precio_ciudad':
            this.stateShipping = false;
            break;
          case 'peso':
            this.stateShipping = false;
            break;
          default:
        }
      }
    },
    SendSubCategory(value) {
      this.$store.commit('products/SET_PAYLOAD_TAG', '');
      this.$store.commit('products/SET_PAYLOAD_TAG2', '');
      this.indexSelect2 = value;
      this.selectSubcategory = value;
      let filtradoSubCategory = this.subcategories.find(element => element.id == value);
      let filtradoCategories = this.categorias.find(element => element.id == filtradoSubCategory.categoria);
      this.$store.commit('SET_CATEGORY_PRODUCTO', filtradoCategories.nombre_categoria_producto);
      this.nameSubCategory = filtradoSubCategory.nombre_subcategoria;
      this.$router.push({
        path: '',
        query: {
          subcategory: `${this.nameSubCategory}^${filtradoCategories.id}`
        }
      });
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', this.nameSubCategory);
      this.$store.commit('products/FILTER_BY', {
        type: ['subcategory'],
        data: value
      });
    },
    sendCategory(value, categoria, index, ref) {
      this.indexSelect = categoria;
      this.currentPage = 1;
      this.nameCategory = value.nombre_categoria_producto;
      this.nameSubCategory = '';
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory);
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$store.commit('products/SET_PAYLOAD_TAG', '');
      this.$store.commit('products/SET_PAYLOAD_TAG2', '');
      this.$router.push({
        path: '',
        query: {
          category: this.nameCategory
        }
      });
      this.selectedSubcategories = [];
      this.subcategories.find(subcategory => {
        if (subcategory.categoria === categoria) {
          this.selectedSubcategories.push(subcategory);
        }
      });
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto
      });
    },
    clear() {
      this.indexSelect = '';
      this.indexSelect2 = '';
      this.$router.push({
        path: '',
        query: {}
      });
      this.$store.commit('SET_CATEGORY_PRODUCTO', '');
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
      this.$emit('clear');
      this.nameCategory = '';
      this.showSubCategory = false;
      this.selectedSubcategories = [];
    },
    handleChange(val) {
      // console.log(val);
    }
  },
  watch: {
    search(value) {
      this.SearchProduct(value);
    },
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
    },
    nameCategoryHeader(value) {
      return value;
    },
    nameSubCategoryHeader(value) {
      return value;
    },
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.getQuery();
    },
    searchValue(value) {
      this.SearchProduct(value);
    }
  }
});
// CONCATENATED MODULE: ./components/template13/Ko-ProductListFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template13_Ko_ProductListFiltervue_type_script_lang_js_ = (Ko_ProductListFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template13/Ko-ProductListFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(653)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template13_Ko_ProductListFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bfe0a752",
  "4bad87e2"
  
)

/* harmony default export */ var Ko_ProductListFilter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=66.js.map