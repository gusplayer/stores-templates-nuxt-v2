exports.ids = [73];
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

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(705);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2e23f274", content, true, context)
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

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_1_vue_vue_type_style_index_0_id_7e1af9da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_1_vue_vue_type_style_index_0_id_7e1af9da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_1_vue_vue_type_style_index_0_id_7e1af9da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_1_vue_vue_type_style_index_0_id_7e1af9da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_1_vue_vue_type_style_index_0_id_7e1af9da_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".giftLoad[data-v-7e1af9da],.swiper-slide[data-v-7e1af9da]{max-width:300px}.giftLoad[data-v-7e1af9da]:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.product-content[data-v-7e1af9da]{background:var(--background_color_1);padding-bottom:var(--padding);padding-top:var(--padding)}.product-content[data-v-7e1af9da],.product-text[data-v-7e1af9da]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.product-text[data-v-7e1af9da]{text-align:center}.product-subTittle[data-v-7e1af9da],.product-tittle[data-v-7e1af9da],.tittle[data-v-7e1af9da]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center}.tittle[data-v-7e1af9da]{color:var(--color_title);font-family:var(--font-style-1)!important;font-size:var(--fontSizeTitle);font-weight:var(--fontWeightTitle);margin-bottom:var(--marginbottomTitle)}.btn-products[data-v-7e1af9da]{align-items:center;display:flex;justify-content:center;margin-top:50px;width:100%}.btn[data-v-7e1af9da]{border-radius:var(--radius_btn);color:var(--color_text_btn);font-family:var(--font-style-1)!important;font-size:16px;font-weight:600;line-height:20px;margin-right:20px;padding-left:8px;padding-right:8px;-webkit-text-decoration:underline;text-decoration:underline}.btn[data-v-7e1af9da],.btn[data-v-7e1af9da]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn[data-v-7e1af9da]:hover{color:var(--hover_text_btn);transform:scale(1.1)}@media (min-width:300px){.producto-items-content[data-v-7e1af9da]{padding-left:10px;padding-right:10px;width:100%}.product-text[data-v-7e1af9da]{margin-bottom:30px}}@media (min-width:768px){.producto-items-content[data-v-7e1af9da]{padding-left:10px;padding-right:10px;width:100%}}@media (min-width:1024px){.product-text[data-v-7e1af9da]{width:100%}}@media (min-width:1400px){.producto-items-content[data-v-7e1af9da]{padding-left:20px;padding-right:20px;width:1300px}.tittle[data-v-7e1af9da]{line-height:50px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko-ProductList-1.vue?vue&type=template&id=7e1af9da&scoped=true&
=======
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko-ProductList-1.vue?vue&type=template&id=7e1af9da&scoped=true&
>>>>>>> 8fc64a3b0afecc12b7dc65aa7021e406232a9a48
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product-content",
    style: [_vm.settingGeneral, _vm.productList, {
      '--font-style-1': _vm.settingGeneral.fount_1 ? _vm.settingGeneral.fount_1 : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"producto-items-content\" data-v-7e1af9da>", "</div>", [_vm._ssrNode("<div class=\"product-text\" data-v-7e1af9da><div class=\"product-tittle\" data-v-7e1af9da><span class=\"tittle\" data-v-7e1af9da>" + _vm._ssrEscape(_vm._s(_vm.productList.title)) + "</span></div></div> "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [this.fullProducts.length > 0 ? _vm._ssrNode("<div class=\"swiper-wrapper pb-10\" data-v-7e1af9da>", "</div>", _vm._l(_vm.fullProducts.slice(0, 12), function (product) {
    return _vm._ssrNode("<div class=\"swiper-slide\" data-v-7e1af9da>", "</div>", [_c('KoProductCard', {
      staticClass: "giftLoad",
      attrs: {
        "product": product,
        "cardProduct": _vm.cardProduct,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1);
  }), 0) : _vm._ssrNode("<div class=\"content-products-empty\" data-v-7e1af9da><p data-v-7e1af9da>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p></div>")]), _vm._ssrNode(" " + (_vm.productList.visibleBtn ? "<div class=\"btn-products\" data-v-7e1af9da><a" + _vm._ssrAttr("href", _vm.productList.url_redirect ? _vm.productList.url_redirect : '') + " rel=\"noreferrer noopener\" data-v-7e1af9da><button class=\"btn\" data-v-7e1af9da>" + _vm._ssrEscape(_vm._s(_vm.productList.displayName)) + "</button></a></div>" : "<!---->"))], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/Ko-ProductList-1.vue?vue&type=template&id=7e1af9da&scoped=true&

// EXTERNAL MODULE: ./components/template13/_productcard/Ko-ProductCard-1.vue + 4 modules
var Ko_ProductCard_1 = __webpack_require__(218);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko-ProductList-1.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_ProductList_1vue_type_script_lang_js_ = ({
  components: {
    KoProductCard: Ko_ProductCard_1["a" /* default */]
  },
  props: {
    productList: Object,
    settingGeneral: Object,
    cardProduct: Object,
    dataStore: Object,
    fullProducts: {}
  },
  name: 'Ko13-ProductList-1',
  data() {
    return {
      swiperOption: {
        slidesPerView: '',
        spaceBetween: '',
        breakpoints: {
          10000: {
            slidesPerView: 4,
            spaceBetween: 25
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 5
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
// CONCATENATED MODULE: ./components/template13/Ko-ProductList-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var template13_Ko_ProductList_1vue_type_script_lang_js_ = (Ko_ProductList_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template13/Ko-ProductList-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(704)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template13_Ko_ProductList_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7e1af9da",
  "842528ca"
  
)

/* harmony default export */ var Ko_ProductList_1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=73.js.map