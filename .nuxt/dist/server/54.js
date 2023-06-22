exports.ids = [54];
exports.modules = {

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("41fbd912", content, true, context)
};

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_e9281132_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_e9281132_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_e9281132_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_e9281132_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_e9281132_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-card[data-v-e9281132]{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);align-items:center;background:var(--background_color_1);border-radius:5px;box-shadow:0 0 transparent,0 0 transparent,0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-sizing:border-box;display:flex;justify-content:center;width:100%}.container-card[data-v-e9281132]{border-radius:5px;flex-direction:column}.container-card[data-v-e9281132],.wrapper-image[data-v-e9281132]{align-items:center;display:flex;overflow:hidden;position:relative;width:100%}.wrapper-image[data-v-e9281132]{justify-content:center;max-height:300px;min-height:250px}.product-image[data-v-e9281132]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.notproduct-image[data-v-e9281132]{height:294px;max-height:294px;width:300px}.product-image-soldOut[data-v-e9281132]{filter:grayscale(100%);-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.image_overlay[data-v-e9281132]{background:hsla(0,0%,41%,.165);height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}#product-card:hover .image_overlay[data-v-e9281132]{opacity:.7;transition:all .2s ease-out}.separador-stats[data-v-e9281132]{height:95px;width:100%}.stats-container[data-v-e9281132]{background:var(--background_color_1);display:flex;flex-direction:column;height:120px;justify-content:space-between;left:0;padding:20px 12px 0;position:absolute;top:288px;transition:all .2s ease-out;width:100%}#product-card:hover .stats-container[data-v-e9281132]{top:241px;transition:all .2s ease-out}.card-info-1[data-v-e9281132]{background:#e71f77;color:#fff;top:-44px}.card-info-1[data-v-e9281132],.card-info-2[data-v-e9281132]{align-items:center;border-radius:var(--radius_btn);display:flex;font-size:12px;justify-content:center;padding:1px 4px;position:absolute;right:0;z-index:2}.card-info-2[data-v-e9281132]{background:#35dd8d;color:#000;font-weight:700;top:-22px}.content-name-product[data-v-e9281132]{align-items:flex-start;display:flex;justify-content:center;min-height:36px;text-align:center;width:100%}.card-title[data-v-e9281132]{color:var(--color_title);font-size:var(--fontSizeTitle);font-weight:var(--fontWeighTitle)}.content-text-price[data-v-e9281132]{margin-top:5px;width:100%}.content-price[data-v-e9281132],.content-text-price[data-v-e9281132]{align-items:center;display:flex;justify-content:center}.content-price[data-v-e9281132]{flex-direction:row;max-height:29px;min-height:29px}.content-price-empty[data-v-e9281132]{margin-top:5px;max-height:29px;min-height:29px;width:100%}.text-price[data-v-e9281132]{color:var(--color_price);font-size:20px;font-weight:var(--fontWeighPrice);line-height:1.4;text-align:center}.separator-price[data-v-e9281132]{color:var(--color_price);margin-left:5px;margin-right:5px}.wrapper-btn-icon[data-v-e9281132]{flex-direction:row;width:100%}#add_cart[data-v-e9281132],.wrapper-btn-icon[data-v-e9281132]{align-items:center;display:flex;justify-content:center}#add_cart[data-v-e9281132]{background-color:var(--color_background_btn);border:2px solid var(--color_border_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);font-size:19px;font-weight:700;height:41px;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}#add_cart[data-v-e9281132]:hover{background-color:var(--hover_Bg_btn);border:2px solid var(--hover_Border_btn);color:var(--hover_text_btn);cursor:pointer}#product-card:hover #add_cart[data-v-e9281132]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.view_details[data-v-e9281132]{align-items:center;background-color:transparent;border:2px solid var(--color_border_btn);border-radius:var(--radius_btn);color:var(--color_border_btn);display:flex;font-size:19px;font-weight:700;height:41px;justify-content:center;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}.view_details[data-v-e9281132]:hover{border:2px solid var(--hover_Border_btn);color:var(--hover_Border_btn);cursor:pointer}#product-card:hover .view_details[data-v-e9281132]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.separador-btn[data-v-e9281132]{width:5px}.wrapper[data-v-e9281132]{display:inline;display:initial;width:100%}.wrapper-movil[data-v-e9281132]{display:none}.card-icon-cart-movil[data-v-e9281132]:hover{color:var(--hover_text_btn)}.overlay-top[data-v-e9281132]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background:#fff;border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#35dd8d;font-size:13px;height:29px;left:100%;overflow:hidden;padding:5px;position:absolute;right:0;top:43px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:0}#product-card:hover .overlay-top[data-v-e9281132]{left:75%;width:67px}.overlay-free[data-v-e9281132]{background-color:#35dd8d;border-radius:.25rem;color:#fff;height:35px;left:100%;overflow:hidden;position:absolute;right:0;text-align:center;top:0;transition:.5s ease;width:0}.txt-free[data-v-e9281132]{font-size:13px;line-height:12px;margin-top:5px}#product-card:hover .overlay-free[data-v-e9281132]{left:55%;transition-delay:.7s;width:125px}.overlay-polygon[data-v-e9281132]{fill:#35dd8d;background-color:transparent;height:5%;left:100%;overflow:hidden;position:absolute;right:0;top:35px;width:0}#product-card:hover .overlay-polygon[data-v-e9281132]{left:90%;transition-delay:.95s;width:5%}@media (max-width:1270px){.separador-stats[data-v-e9281132]{height:105px}}@media (max-width:1249px){.separador-stats[data-v-e9281132]{height:98px}}@media (max-width:768px){.wrapper[data-v-e9281132]{display:none}.wrapper-movil[data-v-e9281132]{display:inline;display:initial;width:100%}.content-card-items[data-v-e9281132]{align-items:center;display:flex;flex-direction:column;height:75px;justify-content:space-between;padding:5px 10px;position:relative;width:100%}.card-title[data-v-e9281132]{font-size:13px}.content-text-price[data-v-e9281132]{margin-top:0}.text-price[data-v-e9281132]{font-size:15px}.icon-cart[data-v-e9281132]{margin-left:20px}.card-info-1[data-v-e9281132]{font-size:10px;top:-43px}.card-info-2[data-v-e9281132]{font-size:10px;top:-22px}.notproduct-image-res[data-v-e9281132]{height:357px;max-height:357px;width:100%}}@media (max-width:450px){.notproduct-image-res[data-v-e9281132]{height:170px;max-height:170px}.container-card[data-v-e9281132]{max-width:200px;width:100%}.wrapper-image[data-v-e9281132]{min-height:170px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productcard/Ko-ProductCard-1.vue?vue&type=template&id=e9281132&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-card",
    style: [_vm.settingGeneral, _vm.cardProduct, {
      '--font-style-1': _vm.settingGeneral.fount_1 ? _vm.settingGeneral.fount_1 : 'Poppins'
    }]
  }, [_vm._ssrNode("<div id=\"product-card\" class=\"container-card\" data-v-e9281132>", "</div>", [_vm._ssrNode("<div class=\"wrapper\" data-v-e9281132>", "</div>", [_c('nuxt-link', {
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
  })], 1), _vm._ssrNode(" " + (this.product.tag_promocion == 1 && this.product.promocion_valor ? "<div data-v-e9281132><div class=\"overlay-top\" data-v-e9281132><div data-v-e9281132><p data-v-e9281132>" + _vm._ssrEscape(_vm._s(this.product.promocion_valor) + "% OFF") + "</p></div></div> <div class=\"overlay-free\" data-v-e9281132><p class=\"txt-free\" data-v-e9281132>" + _vm._ssrEscape(_vm._s(_vm.$t('home_pdescuento'))) + "</p></div> <div class=\"overlay-polygon\" data-v-e9281132><svg width=\"12px\" height=\"12px\" viewBox=\"0 0 255 255\" class=\"icon-overlay-free\" data-v-e9281132><polygon points=\"0,0 127.5,127.5 255,0\" data-v-e9281132></polygon></svg></div></div>" : "<!---->") + " <div class=\"separador-stats\" data-v-e9281132></div> "), _vm._ssrNode("<div class=\"stats\" data-v-e9281132>", "</div>", [_vm._ssrNode("<div class=\"stats-container\" data-v-e9281132>", "</div>", [_vm._ssrNode((_vm.soldOut ? "<p class=\"card-info-1\" data-v-e9281132>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_cardAgotado')) + "\n          ") + "</p>" : "<!---->") + " " + (!_vm.getFreeShipping ? "<p class=\"card-info-2\" data-v-e9281132>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_cardGratis')) + "\n          ") + "</p>" : "<!---->") + " <div class=\"content-name-product\" data-v-e9281132>" + (this.product.nombre.length >= 54 ? "<p class=\"card-title\" data-v-e9281132>" + _vm._ssrEscape("\n              " + _vm._s(`${this.product.nombre.slice(0, 54)}...`) + "\n            ") + "</p>" : "<p class=\"card-title\" data-v-e9281132>" + _vm._ssrEscape("\n              " + _vm._s(`${this.product.nombre.slice(0, 54)}`) + "\n            ") + "</p>") + "</div> " + (this.product.precio ? "<div class=\"content-text-price\" data-v-e9281132>" + (this.estadoCart == true && this.equalsPrice ? "<div data-v-e9281132>" + (this.minPrice ? "<p class=\"text-price\" data-v-e9281132>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p>" : "<!---->") + "</div>" : this.estadoCart == true && this.minPrice != this.maxPrice && !this.equalsPrice ? "<div class=\"content-price\" data-v-e9281132>" + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-e9281132>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</div>" : "<!---->") + " <p class=\"separator-price\" data-v-e9281132>-</p> " + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-e9281132>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</div>" : "<!---->") + "</div>" : "<div data-v-e9281132>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-e9281132>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p>" : "<!---->") + "</div>") + "</div>" : "<div class=\"content-price-empty\" data-v-e9281132></div>") + " "), _vm._ssrNode("<div class=\"wrapper-btn-icon\" data-v-e9281132>", "</div>", [_c('nuxt-link', {
    staticClass: "view_details",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('home_cardvermas')))])]), _vm._ssrNode(" <div class=\"separador-btn\" data-v-e9281132></div> "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div id=\"add_cart\" data-v-e9281132>", "</div>", [_vm._ssrNode("<p style=\"height: 23px\" data-v-e9281132>", "</p>", [_c('cartArrowDown'), _vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.$t('home_cardAgregar')) + "\n              "))], 2)]) : _vm._e()], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-movil\" data-v-e9281132>", "</div>", [_c('nuxt-link', {
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
  }) : _vm._e()])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-card-items\" data-v-e9281132>", "</div>", [_vm._ssrNode((_vm.soldOut ? "<p class=\"card-info-1\" data-v-e9281132>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p>" : "<!---->") + " " + (!_vm.getFreeShipping ? "<p class=\"card-info-2\" data-v-e9281132>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('home_cardGratis')) + "\n        ") + "</p>" : "<!---->") + " "), _c('nuxt-link', {
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
  }, [_vm._v("\n            " + _vm._s(`${this.product.nombre.slice(0, 30)}`) + "\n          ")])]), _vm._ssrNode(" "), this.product.precio ? _vm._ssrNode("<div class=\"content-text-price\" data-v-e9281132>", "</div>", [_c('nuxt-link', {
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
  }, [_vm._v("\n                " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ")]) : _vm._e()])]), _vm._ssrNode(" "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div data-v-e9281132>", "</div>", [_c('cartArrowDown', {
    staticClass: "icon-cart",
    on: {
      "click": _vm.addShoppingCart
    }
  })], 1) : _vm._e()], 2) : _vm._ssrNode("<div class=\"separator-movil\" data-v-e9281132>", "</div>", [!this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div data-v-e9281132>", "</div>", [_c('cartArrowDown', {
    on: {
      "click": _vm.addShoppingCart
    }
  })], 1) : _vm._e()])], 2)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/_productcard/Ko-ProductCard-1.vue?vue&type=template&id=e9281132&scoped=true&

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
  
  var style0 = __webpack_require__(216)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_Ko_ProductCard_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e9281132",
  "8bc7c5c4"
  
)

/* harmony default export */ var Ko_ProductCard_1 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(851);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("28e1f7aa", content, true, context)
};

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(853);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("43a5c83a", content, true, context)
};

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(855);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7febab74", content, true, context)
};

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(857);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("321ae467", content, true, context)
};

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(859);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("ac0f93da", content, true, context)
};

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(861);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6b8db930", content, true, context)
};

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(863);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("38cdc168", content, true, context)
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "element-tiptap"
var external_element_tiptap_ = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./mixins/elemenTiptap.vue?vue&type=script&lang=js&

/* harmony default export */ var elemenTiptapvue_type_script_lang_js_ = ({
  computed: {
    extensions() {
      return [new external_element_tiptap_["Doc"](), new external_element_tiptap_["Paragraph"](), new external_element_tiptap_["Text"](), new external_element_tiptap_["Heading"]({
        level: 5,
        bubble: true
      }), new external_element_tiptap_["Bold"]({
        bubble: true
      }), new external_element_tiptap_["Italic"]({
        bubble: true
      }), new external_element_tiptap_["Underline"]({
        bubble: true
      }), new external_element_tiptap_["Strike"]({
        bubble: true
      }), new external_element_tiptap_["Code"]({
        bubble: true
      }), new external_element_tiptap_["CodeBlock"]({
        bubble: true
      }), new external_element_tiptap_["Blockquote"]({
        bubble: true
      }), new external_element_tiptap_["Link"]({
        bubble: true
      }), new external_element_tiptap_["BulletList"]({
        bubble: true
      }), new external_element_tiptap_["OrderedList"]({
        bubble: true
      }), new external_element_tiptap_["ListItem"]({
        bubble: true
      }), new external_element_tiptap_["TodoList"]({
        bubble: true
      }), new external_element_tiptap_["TodoItem"]({
        bubble: true
      }), new external_element_tiptap_["Iframe"]({
        bubble: true
      }), new external_element_tiptap_["Table"]({
        resizable: true,
        bubble: true
      }), new external_element_tiptap_["TableHeader"](), new external_element_tiptap_["TableRow"](), new external_element_tiptap_["TableCell"](), new external_element_tiptap_["Image"]({
        urlPattern: '',
        uploadRequest: '',
        bubble: true
      }), new external_element_tiptap_["TextAlign"]({
        alignments: ['left', 'center', 'right', 'justify'],
        bubble: true
      }), new external_element_tiptap_["LineHeight"]({
        lineHeights: ['100%', '200%', '300%']
      }), new external_element_tiptap_["Indent"]({
        minIndent: 0,
        maxIndent: 7
      }), new external_element_tiptap_["HorizontalRule"]({
        bubble: true
      }), new external_element_tiptap_["HardBreak"](), new external_element_tiptap_["TrailingNode"](), new external_element_tiptap_["History"](), new external_element_tiptap_["TextColor"]({
        colors: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#000000'],
        bubble: true
      }), new external_element_tiptap_["TextHighlight"]({
        colors: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#000000'],
        bubble: true
      }), new external_element_tiptap_["FormatClear"](), new external_element_tiptap_["FontSize"]({
        fontSizes: ['8', '10', '12', '14', '16', '18', '20', '24', '30', '36', '48', '60', '72'],
        bubble: true
      }), new external_element_tiptap_["Preview"](), new external_element_tiptap_["Print"](), new external_element_tiptap_["SelectAll"]()];
    }
  }
});
// CONCATENATED MODULE: ./mixins/elemenTiptap.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_elemenTiptapvue_type_script_lang_js_ = (elemenTiptapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./mixins/elemenTiptap.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_elemenTiptapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "445de0a8"
  
)

/* harmony default export */ var elemenTiptap = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_b5ebc844_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(461);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_b5ebc844_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_b5ebc844_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_b5ebc844_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_b5ebc844_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-b5ebc844]{box-sizing:border-box;max-width:375px;-o-object-position:center;object-position:center;overflow:hidden;width:375px}.photo[data-v-b5ebc844]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.photos .responsive .swiper-pagination-bullet[data-v-b5ebc844]{background-color:hsla(0,0%,100%,.5)}.photos .responsive .swiper-pagination-bullet-active[data-v-b5ebc844]{background-color:#fff}.youtube[data-v-b5ebc844]{grid-gap:5px;display:grid;justify-items:start;max-width:400px;width:99%}.youtube__action_back[data-v-b5ebc844]{background-color:var(--color_background_btn);border-style:none;color:var(--color_text_btn);outline:none}.wrapper-slider[data-v-b5ebc844] .swiper-pagination-bullet-active{background:var(--color_background_btn);opacity:1}.wrapper-slider[data-v-b5ebc844] .swiper-button-next,.wrapper-slider[data-v-b5ebc844] .swiper-button-prev{color:var(--color_background_btn)!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_2fff8f1a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(462);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_2fff8f1a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_2fff8f1a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_2fff8f1a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_2fff8f1a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "select[data-v-2fff8f1a]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;background-image:none;border:0!important;box-shadow:none;color:var(--color_subtext);font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;outline:0;transition:all .6s ease-in-out}select[data-v-2fff8f1a]::-ms-expand{display:none}.title-input[data-v-2fff8f1a]{color:#222;font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;text-transform:uppercase;transition:all .6s ease-in-out}.select[data-v-2fff8f1a]{background:transparent;border:2px solid var(--border);border-radius:var(--radius_btn);color:#222;display:flex;height:40px;overflow:hidden;position:relative;width:15em}.colortext[data-v-2fff8f1a]{color:var(--color_subtext)}select[data-v-2fff8f1a]{background-color:transparent;color:#222;cursor:pointer;flex:1;font-size:1em;padding:0 .5em 0 1em}.select[data-v-2fff8f1a]:after{color:var(--border);content:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"Dark Gray\"><path d=\"M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z\"/></svg>');cursor:pointer;padding:.4em 1em;pointer-events:none;position:absolute;right:0;top:0;transition:all .25s ease}option[data-v-2fff8f1a]{color:#222;font-size:14px;font-weight:400;transition:all .6s ease-in-out}option[data-v-2fff8f1a],option[data-v-2fff8f1a]:disabled{font-family:var(--font-style-1)!important}option[data-v-2fff8f1a]:disabled{background:#f8f8f8;color:#222;font-size:14px;font-weight:700;transition:all .6s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_c99d1210_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(463);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_c99d1210_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_c99d1210_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_c99d1210_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_c99d1210_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editor[data-v-c99d1210]{color:tras;width:100%}.editor[data-v-c99d1210] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-c99d1210] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-c99d1210] .el-tiptap-editor__content h1{font-family:var(--font-style-1);font-size:2em}.editor[data-v-c99d1210] .el-tiptap-editor__content h2{font-family:var(--font-style-1);font-size:1.5em}.editor[data-v-c99d1210] .el-tiptap-editor__content h3{font-family:var(--font-style-1);font-size:1.17em}.editor[data-v-c99d1210] .el-tiptap-editor__content h4{font-family:var(--font-style-1);font-size:1.12em}.editor[data-v-c99d1210] .el-tiptap-editor__content h5{font-family:var(--font-style-1);font-size:.83em}.editor[data-v-c99d1210] .el-tiptap-editor__content blockquote,.editor[data-v-c99d1210] .el-tiptap-editor__content code,.editor[data-v-c99d1210] .el-tiptap-editor__content em,.editor[data-v-c99d1210] .el-tiptap-editor__content li,.editor[data-v-c99d1210] .el-tiptap-editor__content ol,.editor[data-v-c99d1210] .el-tiptap-editor__content p,.editor[data-v-c99d1210] .el-tiptap-editor__content pre,.editor[data-v-c99d1210] .el-tiptap-editor__content s,.editor[data-v-c99d1210] .el-tiptap-editor__content span,.editor[data-v-c99d1210] .el-tiptap-editor__content strong,.editor[data-v-c99d1210] .el-tiptap-editor__content ul{font-family:var(--font-style-1)}.editor[data-v-c99d1210] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-c99d1210] .el-popper.el-tiptap-image-popper{display:none}.item-content[data-v-c99d1210]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;padding-bottom:4px;width:100%}.content-opt-tab[data-v-c99d1210] .el-collapse{border-bottom:transparent;border-top:transparent;width:100%}.content-opt-tab[data-v-c99d1210] .el-collapse-item__wrap{background-color:transparent;border-bottom:transparent;will-change:height}.content-opt-tab[data-v-c99d1210] .el-collapse-item__header{background-color:transparent;border-bottom:transparent;color:var(--color_text);font-family:var(--font-style-1)!important;font-size:16px;font-weight:600}.content-opt-tab[data-v-c99d1210] .el-collapse-item__header.is-active{border-bottom:none}.content-opt-tab[data-v-c99d1210] .el-collapse-item__arrow{color:var(--border)}.content_product_description[data-v-c99d1210]{align-items:flex-start;color:var(--color_subtext);display:flex;flex-direction:column;font-size:14px;font-weight:400;justify-content:center;line-height:1.42857143;width:100%}.content_product_description[data-v-c99d1210],h3[data-v-c99d1210]{font-family:var(--font-style-1)!important}h3[data-v-c99d1210]{align-self:flex-start;color:var(--color_text);font-size:15px;font-weight:600;text-transform:uppercase}h4[data-v-c99d1210]{align-items:flex-start;color:var(--color_text);display:flex;flex-direction:column;font-size:15px;font-weight:600;justify-content:center;line-height:1.42857143;margin-bottom:5px;width:100%}h4[data-v-c99d1210],li p[data-v-c99d1210]{font-family:var(--font-style-1)!important}li p[data-v-c99d1210]{color:var(--color_subtext);font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}.description-method[data-v-c99d1210],.price[data-v-c99d1210]{color:var(--color_subtext);font-family:var(--font-style-1)!important;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}img[data-v-c99d1210]{margin-top:15px;max-width:300px;width:30%}@media (min-width:300px){.content-opt-tab[data-v-c99d1210]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.tittle[data-v-c99d1210]{align-items:center;background-color:transparent;color:var(--color_subtext);display:flex;font-family:var(--font-style-1)!important;font-size:14px;font-weight:400;height:40px;justify-content:center;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}}@media (min-width:425px){.head-content[data-v-c99d1210]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-bottom:40px}.tittle[data-v-c99d1210]{font-size:12px;text-align:center}}@media (min-width:768px){.content-opt-tab[data-v-c99d1210]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;margin-top:0}.tittle[data-v-c99d1210]{align-items:center;font-size:14px;height:50px;justify-content:center;text-align:center;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_27d99d2b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(464);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_27d99d2b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_27d99d2b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_27d99d2b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_27d99d2b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-27d99d2b],.swiper-wrapper[data-v-27d99d2b]{width:100%}.btnPrev[data-v-27d99d2b]{left:0}.btnNext[data-v-27d99d2b],.btnPrev[data-v-27d99d2b]{background:#000;border-radius:25px;cursor:pointer;padding:0 22px;position:absolute;z-index:10}.btnNext[data-v-27d99d2b]{right:0}.btn-icon[data-v-27d99d2b]{align-items:center;bottom:.125em;color:#fff;display:flex;font-size:45px;justify-content:center;width:100%}.btn-icon[data-v-27d99d2b]:hover{color:grey}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_7fdcd880_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(465);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_7fdcd880_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_7fdcd880_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_7fdcd880_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_7fdcd880_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-ProductFavoritos[data-v-7fdcd880]{align-items:center;background:transparent;box-sizing:border-box;padding-top:30px}.swiper-container[data-v-7fdcd880],.wrapper-ProductFavoritos[data-v-7fdcd880]{display:flex;flex-direction:column;justify-content:center;width:100%}.swiper-container[data-v-7fdcd880]{align-items:flex-start;max-width:1460px}.content-title-ProductFavoritos[data-v-7fdcd880]{align-items:center;display:flex;justify-content:flex-start;max-width:1460px;padding-bottom:30px;width:100%}.title-ProductFavoritos[data-v-7fdcd880]{color:#2c2930;cursor:pointer;font-family:var(--font-style-1)!important;font-size:18px;font-weight:700;line-height:1.4}@media (max-width:770px){.swiper-container[data-v-7fdcd880]{padding-top:20px}.content-title-ProductFavoritos[data-v-7fdcd880]{padding-bottom:10px;padding-top:10px}}@media (max-width:380px){.swiper-container[data-v-7fdcd880]{padding:20px 5px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_6d471beb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(466);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_6d471beb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_6d471beb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_6d471beb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_6d471beb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "figure.zoom[data-v-6d471beb]{align-items:center;background-position:50% 50%;background-repeat:no-repeat;border-radius:10px;cursor:zoom-in;display:flex;justify-content:center;margin-bottom:10px;max-height:100%;max-width:100%;overflow:hidden;position:relative}figure.zoom img[data-v-6d471beb]{background-color:#fff;max-height:576px;max-width:100%;transition:opacity .3s}.photo_main[data-v-6d471beb]{-o-object-fit:contain;object-fit:contain}figure.zoom img[data-v-6d471beb]:hover{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_240bbff0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(467);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_240bbff0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_240bbff0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_240bbff0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_240bbff0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-facebook[data-v-240bbff0]{background-color:transparent;border:0;border-radius:5px;color:#1877f2;cursor:pointer;display:flex;justify-content:center;margin-right:20px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-facebook[data-v-240bbff0]:hover{color:#000}.btn-whatsapp[data-v-240bbff0]{background-color:transparent;border:0;border-radius:5px;color:#25d366;cursor:pointer;display:flex;justify-content:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-whatsapp[data-v-240bbff0]:hover{color:#000}.wp-icon[data-v-240bbff0]{bottom:3px;font-size:27px}.wrapper-left[data-v-240bbff0]{align-items:flex-start;display:flex;flex:2;flex-direction:row;padding-bottom:10px;width:100%}.photos_responsive[data-v-240bbff0]{display:none}.photos[data-v-240bbff0]{display:flex;height:100%;margin-right:30px;max-height:442px;max-width:110px;min-height:442px;min-width:110px;overflow:hidden;position:relative;width:100%}.photos_selected[data-v-240bbff0]{display:flex;flex-direction:column;height:100%;justify-content:stretch;max-height:100px;max-width:100px;min-height:100px;min-width:100px;width:100%}.img-list[data-v-240bbff0]{border-radius:6px;cursor:pointer;height:100%;margin-bottom:10px;-o-object-fit:cover;object-fit:cover;vertical-align:top;width:100%}.swiper-prev[data-v-240bbff0]{top:0}.swiper-next[data-v-240bbff0],.swiper-prev[data-v-240bbff0]{left:20px;position:absolute;z-index:2}.swiper-next[data-v-240bbff0]{bottom:0;font-size:25px}.icon-swiper[data-v-240bbff0]{color:var(--color_icon);cursor:pointer;font-size:60px}.icon-swiper[data-v-240bbff0]:hover{color:var(--hover_text)}.video[data-v-240bbff0]{border-radius:10px;height:100px;margin-bottom:10px;min-height:100px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100px}.wrapper-photo_main[data-v-240bbff0]{margin-right:10px;min-height:442px;position:relative}.photo_main[data-v-240bbff0],.wrapper-photo_main[data-v-240bbff0]{height:442px;max-height:442px;max-width:442px;width:100%}.photo_main[data-v-240bbff0]{border-radius:10px;-o-object-fit:contain;object-fit:contain;-o-object-position:top;object-position:top}.wrapper-productDetail[data-v-240bbff0]{align-items:center;background:var(--background_color_1);display:flex;justify-content:center;width:100%}.container-productDetail-loading[data-v-240bbff0]{height:calc(100vh - 420px);max-width:1200px;padding:50px 30px 30px}.container-productDetail[data-v-240bbff0],.container-productDetail-loading[data-v-240bbff0]{align-items:center;background:var(--background_color_1);display:flex;flex-direction:column;justify-content:center;width:100%}.container-productDetail[data-v-240bbff0]{height:100%}.left[data-v-240bbff0]{display:flex;flex-direction:column}.content-images[data-v-240bbff0],.left[data-v-240bbff0]{align-items:center;justify-content:center;width:100%}.content-images[data-v-240bbff0]{grid-gap:1rem;display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr))}.content-variant[data-v-240bbff0]{justify-content:center;margin-top:30px}.content-items-variant[data-v-240bbff0],.content-variant[data-v-240bbff0]{align-items:flex-start;display:flex;flex-direction:column;width:100%}.content-items-variant[data-v-240bbff0]{justify-content:flex-start;margin-bottom:8px}.aditional-images[data-v-240bbff0],.main-images[data-v-240bbff0],.youtuve-video[data-v-240bbff0]{align-items:center;display:flex;justify-content:center;width:100%}.right[data-v-240bbff0]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;margin-top:10px;width:100%}.content-addCart[data-v-240bbff0],.content-category[data-v-240bbff0],.content-name[data-v-240bbff0],.content-price[data-v-240bbff0]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.quantity[data-v-240bbff0]{align-items:center;display:flex;flex-direction:row;justify-content:center}.section-suggestProduct[data-v-240bbff0]{margin-bottom:40px;margin-top:40px;width:100%}.content-quantity-boxes[data-v-240bbff0]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:8px;margin-top:8px;width:100%}.card-discont[data-v-240bbff0]{background-color:var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);font-size:16px;margin-left:5px;margin-right:5px;padding:2px 10px}.text-promocion[data-v-240bbff0]{color:var(--color_subtext);font-size:14px;font-weight:700;-webkit-text-decoration:line-through;text-decoration:line-through}.quantity[data-v-240bbff0]{box-sizing:border-box;display:flex;flex-direction:row;max-width:240px;position:relative}.text-quantity[data-v-240bbff0]{align-self:center;color:var(--color_description);font-size:14px;font-weight:700;margin-right:15px}.quantity_items[data-v-240bbff0]{background:transparent;border:2px solid var(--border);font-size:16px;height:52px;text-align:center;width:79px}.quantity_remove[data-v-240bbff0]{border-bottom-left-radius:var(--radius_btn);border-top-left-radius:var(--radius_btn)}.quantity_value[data-v-240bbff0]{border-style:solid none;color:var(--color_subtext)}.quantity_add[data-v-240bbff0]{border-bottom-right-radius:var(--radius_btn);border-top-right-radius:var(--radius_btn)}.icon[data-v-240bbff0]{color:var(--color_subtext)}.icon[data-v-240bbff0]:hover,.quantity_add[data-v-240bbff0]:hover,.quantity_remove[data-v-240bbff0]:hover{color:var(--hover_text)}.container-alerta[data-v-240bbff0]{--tw-text-opacity:1;background-color:#fae84b;border:1px solid #e6d542;border-radius:var(--radius_btn);color:#000;color:rgb(0 0 0/var(--tw-text-opacity));font-size:14px;margin-bottom:90px;margin-left:105px;position:absolute;text-align:center;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:130px}.alerta[data-v-240bbff0]{padding:5px;text-align:center}@media (min-width:300px){.product-content[data-v-240bbff0]{align-items:center;flex-direction:column;justify-content:center;margin-top:40px;width:90%}.content-direction-btns[data-v-240bbff0]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.video[data-v-240bbff0]{height:200px;width:100%}.content-name[data-v-240bbff0],.content-price[data-v-240bbff0]{margin-bottom:20px}.tab[data-v-240bbff0]{display:flex;margin-top:20px;width:90%}.content-options[data-v-240bbff0]{flex-direction:column;justify-content:flex-start}.btn[data-v-240bbff0],.content-options[data-v-240bbff0]{align-items:center;display:flex;width:100%}.btn[data-v-240bbff0],.btn-disabled[data-v-240bbff0]{background-color:var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);flex-direction:row;height:54px;justify-content:center;transition:all .15s ease-in}.btn-disabled[data-v-240bbff0]{align-items:center;display:flex;width:100%}.btn:hover .text-addCart[data-v-240bbff0]{background:var(--hover_Bg_btn);color:var(--hover_text_btn);transition:all .15s ease-in}.quantity[data-v-240bbff0]{width:100%}.text-name[data-v-240bbff0]{color:var(--color_text);line-height:1}.text-name[data-v-240bbff0],.text-price[data-v-240bbff0]{font-family:var(--font-style-1)!important}.text-price[data-v-240bbff0]{color:var(--color_price);letter-spacing:.3px;line-height:26px}.text-stock[data-v-240bbff0]{color:#92bb35;font-size:14px;font-weight:600;letter-spacing:-.02em;line-height:1.42857143;margin-left:30px}.text-addCart[data-v-240bbff0],.text-stock[data-v-240bbff0]{font-family:var(--font-style-1)!important}.text-addCart[data-v-240bbff0]{color:var(--color_text_btn);font-size:12px;font-weight:600;text-transform:uppercase;white-space:nowrap}.minicart-icon[data-v-240bbff0]{fill:var(--color_text_btn);color:var(--color_text_btn);margin-bottom:5px;margin-right:10px}.text-variant[data-v-240bbff0]{color:var(--color_subtext);font-size:16px;font-weight:600;margin-right:10px;transition:all .6s ease-in-out}.text-option[data-v-240bbff0],.text-variant[data-v-240bbff0]{font-family:var(--font-style-1)!important}.text-option[data-v-240bbff0]{color:var(--color_subtext);font-size:16px;font-weight:600;transition:all .6s ease-in-out}.section-suggestProduct[data-v-240bbff0]{width:90%}.content-items-right[data-v-240bbff0]{flex-direction:column;justify-content:center}.content-items-right[data-v-240bbff0],.content-stock[data-v-240bbff0]{align-items:center;display:flex;width:100%}.content-stock[data-v-240bbff0]{flex-direction:row;justify-content:flex-start;margin-bottom:8px;margin-top:8px}.stock-text-1[data-v-240bbff0]{color:var(--color_subtext);font-size:16px;font-weight:600;margin-right:10px}.stock-text-1[data-v-240bbff0],.stock-text-2[data-v-240bbff0]{font-family:var(--font-style-1)!important}.stock-text-2[data-v-240bbff0]{color:var(--color_subtext);font-size:15px;font-weight:400;text-align:left}}@media (min-width:425px){.content-direction-btns[data-v-240bbff0]{display:flex;flex-direction:column}}@media (min-width:480px){.video[data-v-240bbff0]{height:250px}}@media (min-width:768px){.content-addCart[data-v-240bbff0]{width:236px}.video[data-v-240bbff0]{height:400px}.product-content[data-v-240bbff0],.tab[data-v-240bbff0]{width:95%}.product-content[data-v-240bbff0]{grid-gap:1rem;align-items:flex-start;display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:flex-start}.section-suggestProduct[data-v-240bbff0]{width:95%}}@media (min-width:850px){.video[data-v-240bbff0]{height:480px}}@media (min-width:1024px){.video[data-v-240bbff0]{height:300px}.content-options[data-v-240bbff0]{display:none}.content-direction-btns[data-v-240bbff0]{display:flex;flex-direction:column}}@media (min-width:1080px){.content-options[data-v-240bbff0]{width:100%}}@media (max-width:768px){.photos[data-v-240bbff0],.wrapper-photo_main[data-v-240bbff0]{display:none}.photos_responsive[data-v-240bbff0]{display:flex}}@media (min-width:1200px){.product-content[data-v-240bbff0],.section-suggestProduct[data-v-240bbff0],.tab[data-v-240bbff0]{max-width:1200px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko-ProductDetail-1.vue?vue&type=template&id=240bbff0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productDetail",
    style: [_vm.settingByTemplate13[0].detailsProduct, _vm.settingByTemplate13[0].setting13General, {
      '--font-style-1': this.settingByTemplate13[0].setting13General && this.settingByTemplate13[0].setting13General.fount_1 ? this.settingByTemplate13[0].setting13General.fount_1 : 'Poppins'
    }]
  }, [_vm.loading ? _vm._ssrNode("<div class=\"container-productDetail-loading\" data-v-240bbff0>", "</div>") : _vm._ssrNode("<div class=\"container-productDetail\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<div class=\"product-content\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<div class=\"left\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<div class=\"wrapper-left\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<div class=\"photos\" data-v-240bbff0>", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper h-full\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<div class=\"swiper-slide\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<div class=\"photos_selected\" data-v-240bbff0>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.data.detalle.foto_cloudinary, 150, 150),
      expression: "\n                        idCloudinary(data.detalle.foto_cloudinary, 150, 150)\n                      "
    }],
    staticClass: "img-list",
    attrs: {
      "alt": "Product Img"
    },
    on: {
      "click": function ($event) {
        return _vm.selectedPhoto(_vm.data.detalle.foto_cloudinary);
      }
    }
  }, [])])]), _vm._ssrNode(" "), _vm._l(_vm.data.fotos, function (foto, itemsFoto) {
    return _vm._ssrNode("<div class=\"swiper-slide h-full\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<div class=\"photos_selected\" data-v-240bbff0>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinaryQuality(foto.foto_cloudinary, 850, 850),
        expression: "\n                        idCloudinaryQuality(foto.foto_cloudinary, 850, 850)\n                      "
      }],
      staticClass: "img-list",
      attrs: {
        "alt": "Product Img"
      },
      on: {
        "click": function ($event) {
          return _vm.selectedPhoto(foto.foto_cloudinary);
        }
      }
    }, [])])]);
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide h-full\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<div class=\"photos_selected\" data-v-240bbff0>", "</div>", [_vm.idYoutube ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `https://img.youtube.com/vi/${_vm.idYoutube}/0.jpg`,
      expression: "`https://img.youtube.com/vi/${idYoutube}/0.jpg`"
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.idYoutube,
      expression: "idYoutube"
    }],
    staticClass: "video",
    attrs: {
      "alt": "Product Img"
    },
    on: {
      "mouseover": function ($event) {
        _vm.existYoutube = true;
      }
    }
  }, []) : _vm._e()])])], 2), _vm._ssrNode(" "), _vm.data.fotos.length > 3 ? _vm._ssrNode("<div class=\"swiper-prev\" data-v-240bbff0>", "</div>", [_c('FlechaUp-icon', {
    staticClass: "icon-swiper"
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.data.fotos.length > 3 ? _vm._ssrNode("<div class=\"swiper-next\" data-v-240bbff0>", "</div>", [_c('Flechadown-icon', {
    staticClass: "icon-swiper"
  })], 1) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-photo_main\" data-v-240bbff0>", "</div>", [this.activeZoom ? _vm._ssrNode("<div class=\"photo_main\"" + _vm._ssrStyle(null, null, {
    display: !_vm.existYoutube ? '' : 'none'
  }) + " data-v-240bbff0>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryQuality(_vm.selectPhotoUrl, 850, 850),
      expression: "idCloudinaryQuality(selectPhotoUrl, 850, 850)"
    }],
    staticClass: "photo_main",
    attrs: {
      "alt": "Product Zoom"
    }
  }, [])]) : _vm._e(), _vm._ssrNode(" "), !this.activeZoom ? _vm._ssrNode("<div class=\"photo_main\"" + _vm._ssrStyle(null, null, {
    display: !_vm.existYoutube ? '' : 'none'
  }) + " data-v-240bbff0>", "</div>", [_c('zoom', {
    attrs: {
      "photo": _vm.selectPhotoUrl
    }
  })], 1) : _vm._e(), _vm._ssrNode(" <iframe" + _vm._ssrAttr("src", `https://www.youtube.com/embed/${_vm.idYoutube}?rel=0&controls=0&showinfo=0`) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\" class=\"photo_main\"" + _vm._ssrStyle(null, null, {
    display: _vm.existYoutube ? '' : 'none'
  }) + " data-v-240bbff0></iframe>")], 2), _vm._ssrNode(" "), _c('ProductSlide', {
    staticClass: "w-full h-full box-border photos_responsive",
    attrs: {
      "photos": _vm.data.fotos,
      "photo": _vm.data.detalle.foto_cloudinary,
      "idYoutube": _vm.idYoutube
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"right\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<div class=\"content-items-right\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<div class=\"content-name\" data-v-240bbff0><p class=\"text-name\"" + _vm._ssrStyle(null, `font-size:${this.settingByTemplate13[0].detailsProduct['--fontSizeTitle']}; font-weight:${this.settingByTemplate13[0].detailsProduct['--fontWeighTitle']};`, null) + " data-v-240bbff0>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.detalle.nombre) + "\n            ") + "</p></div> <div class=\"content-price\" data-v-240bbff0><p class=\"text-price\"" + _vm._ssrStyle(null, `font-size:${this.settingByTemplate13[0].detailsProduct['--fontSizePrice']}; font-weight:${this.settingByTemplate13[0].detailsProduct['--fontWeighPrice']};`, {
    display: _vm.salesData.precio ? '' : 'none'
  }) + " data-v-240bbff0>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.salesData.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p> <div class=\"flex flex-row justify-center items-center\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-240bbff0><p class=\"card-discont\" data-v-240bbff0>" + _vm._ssrEscape("\n                " + _vm._s(_vm.data.info.promocion_valor) + "% De Descuento\n              ") + "</p> <p class=\"text-promocion\" data-v-240bbff0>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(_vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor ? Math.trunc(_vm.salesData.precio / (1 - _vm.data.info.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p></div></div> <div class=\"content-stock\" data-v-240bbff0><p class=\"stock-text-1\" data-v-240bbff0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_stock')) + ":") + "</p> <p class=\"stock-text-2\" data-v-240bbff0>" + _vm._ssrEscape(_vm._s(_vm.salesData.unidades)) + "</p></div> " + (_vm.data.info.descripcion_corta ? "<div class=\"content-stock\" data-v-240bbff0><p class=\"stock-text-1\" data-v-240bbff0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_informacion')) + ":") + "</p> <p class=\"stock-text-2\" data-v-240bbff0>" + _vm._ssrEscape(_vm._s(_vm.data.info.descripcion_corta)) + "</p></div>" : "<!---->") + " "), this.data.detalle.con_variante > 0 ? _vm._ssrNode("<div class=\"content-variant\" data-v-240bbff0>", "</div>", _vm._l(_vm.data.variantes, function (variant, index) {
    return _vm._ssrNode("<div class=\"content-items-variant\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<label for=\"variant name\" class=\"text-variant\" data-v-240bbff0>" + _vm._ssrEscape("\n                " + _vm._s(variant.nombre) + ":\n              ") + "</label> "), _c('SelectGroup', {
      attrs: {
        "index": index,
        "variantes": _vm.data.variantes
      }
    }, _vm._l(variant.valores, function (item) {
      return _c('option', {
        key: item.option,
        domProps: {
          "value": item.option
        }
      }, [_c('p', {
        staticClass: "text-option"
      }, [_vm._v("\n                    " + _vm._s(item.option) + "\n                  ")])]);
    }), 0)], 2);
  }), 0) : _vm._e(), _vm._ssrNode(" " + (_vm.userDropshipping.userName ? "<div class=\"w-full flex flex-row items-center my-8\" data-v-240bbff0><p class=\"text-variant\" style=\"margin-right: 10px\" data-v-240bbff0>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_dropshipping')) + "\n            ") + "</p> <p class=\"stock-text-2\" data-v-240bbff0>" + _vm._ssrEscape("\n              " + _vm._s(_vm.userDropshipping.userName) + "\n            ") + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"w-full flex flex-row items-center my-8\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<p class=\"text-variant\" style=\"margin-right: 10px\" data-v-240bbff0>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_compartir')) + "\n            ") + "</p> "), _vm._ssrNode("<a" + _vm._ssrAttr("href", this.sharingFacebook) + " target=\"_blank\" rel=\"noreferrer noopener\" class=\"btn-facebook\" data-v-240bbff0>", "</a>", [_c('facebook-icon', {
    staticClass: "wp-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"btn-whatsapp\" data-v-240bbff0>", "</button>", [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-direction-btns\" data-v-240bbff0>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("content-quantity-boxes relative", {
    disabled: !_vm.salesData.estado
  }) + " data-v-240bbff0>", "</div>", [_vm._ssrNode("<button class=\"quantity_items quantity_remove\" data-v-240bbff0>", "</button>", [_c('menos-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" <input name=\"quantityValue\" type=\"text\" placeholder=\"#\" id=\"InputQuantityValue\" onkeypress=\"return (event.charCode>47 && event.charCode<58)\"" + _vm._ssrAttr("value", _vm.quantityValue) + " class=\"quantity_items quantity_value\" data-v-240bbff0> "), _vm._ssrNode("<button class=\"quantity_items quantity_add\" data-v-240bbff0>", "</button>", [_c('mas-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" " + (this.maxQuantityValue == this.quantityValue ? "<div class=\"container-alerta\" data-v-240bbff0><span class=\"alerta\" data-v-240bbff0>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('cart_ultimaUnidad'))) + "</span></div>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"content-addCart mt-10\" data-v-240bbff0>" + (!_vm.spent && this.salesData.estado == true && (_vm.data.info.tipo_servicio == null || _vm.data.info.tipo_servicio == '0') ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-240bbff0><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"minicart-icon\" data-v-240bbff0><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-240bbff0></path></svg> <p class=\"text-addCart\" data-v-240bbff0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_añadiralcarrito')) + "\n                ") + "</p></button>" : !this.salesData.estado ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-240bbff0><p class=\"text-addCart\" data-v-240bbff0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n                ") + "</p></button>" : !_vm.spent && _vm.data.info.tipo_servicio == '1' ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-240bbff0><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"minicart-icon\" data-v-240bbff0><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-240bbff0></path></svg> <p class=\"text-addCart\" data-v-240bbff0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n                ") + "</p></button>" : _vm.spent ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-240bbff0><p class=\"text-addCart\" data-v-240bbff0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                ") + "</p></button>" : "<!---->") + "</div>")], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tab\" data-v-240bbff0>", "</div>", [_c('OptionTab', {
    attrs: {
      "dataStore": _vm.dataStore,
      "data": _vm.data,
      "envio": _vm.envio,
      "settingByTemplate13": _vm.settingByTemplate13
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-suggestProduct\" data-v-240bbff0>", "</div>", [_c('KoSuggestProduct', {
    attrs: {
      "category": this.category.slice(0, 12),
      "cardProduct": _vm.settingByTemplate13[0].cardProduct,
      "settingGeneral": _vm.settingByTemplate13[0].setting13General
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/Ko-ProductDetail-1.vue?vue&type=template&id=240bbff0&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productdetails/productSlide.vue?vue&type=template&id=b5ebc844&scoped=true&
var productSlidevue_type_template_id_b5ebc844_scoped_true_render = function render() {
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
    staticClass: "wrapper-slider"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-b5ebc844>", "</div>", [_vm._ssrNode("<div class=\"swiper-slide wrapper-image\" data-v-b5ebc844>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.photo, 550, 550),
      expression: "idCloudinary(photo, 550, 550)"
    }],
    staticClass: "photo",
    attrs: {
      "alt": "Product img"
    }
  }, [])]), _vm._ssrNode(" "), _vm._l(_vm.photos, function (photo) {
    return _vm._ssrNode("<div class=\"swiper-slide\" data-v-b5ebc844>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinary(photo.foto_cloudinary, 550, 550),
        expression: "idCloudinary(photo.foto_cloudinary, 550, 550)"
      }],
      staticClass: "photo",
      attrs: {
        "alt": "Product img"
      }
    }, [])]);
  }), _vm._ssrNode(" " + (_vm.idYoutube && _vm.idYoutube !== '' ? "<div class=\"swiper-slide\" data-v-b5ebc844><div class=\"youtube\" data-v-b5ebc844><button class=\"youtube__action_back\" data-v-b5ebc844><i class=\"material-icons\" data-v-b5ebc844></i></button> <iframe height=\"375\"" + _vm._ssrAttr("src", `https://www.youtube.com/embed/${_vm.idYoutube}?rel=0&controls=0&showinfo=0`) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\" style=\"max-width: 375px; width: 100%\" data-v-b5ebc844></iframe></div></div>" : "<!---->"))], 2), _vm._ssrNode(" " + (_vm.photos.length > 0 ? "<div class=\"swiper-button-prev\" data-v-b5ebc844></div>" : "<!---->") + " " + (_vm.photos.length > 0 ? "<div class=\"swiper-button-next\" data-v-b5ebc844></div>" : "<!---->"))], 2);
};
var productSlidevue_type_template_id_b5ebc844_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/_productdetails/productSlide.vue?vue&type=template&id=b5ebc844&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productdetails/productSlide.vue?vue&type=script&lang=js&

/* harmony default export */ var productSlidevue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'productSlide-details',
  props: ['photos', 'photo', 'idYoutube'],
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        slidesPerView: '1',
        // setWrapperSize: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
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
    setPhoto(photo) {
      return photo;
    }
  }
});
// CONCATENATED MODULE: ./components/template13/_productdetails/productSlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_productSlidevue_type_script_lang_js_ = (productSlidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template13/_productdetails/productSlide.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(850)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_productSlidevue_type_script_lang_js_,
  productSlidevue_type_template_id_b5ebc844_scoped_true_render,
  productSlidevue_type_template_id_b5ebc844_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "b5ebc844",
  "4ddb9194"
  
)

/* harmony default export */ var productSlide = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productdetails/selectGroup.vue?vue&type=template&id=2fff8f1a&scoped=true&
var selectGroupvue_type_template_id_2fff8f1a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-select"
  }, [_vm._ssrNode("<h4 class=\"title-input\" data-v-2fff8f1a>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</h4> "), _vm._ssrNode("<div class=\"select\" data-v-2fff8f1a>", "</div>", [_vm._ssrNode("<select name=\"format\"" + _vm._ssrClass(null, _vm.value == -1 || !_vm.value ? 'colortext' : '') + " data-v-2fff8f1a>", "</select>", [_vm._ssrNode("<option disabled=\"disabled\" data-v-2fff8f1a>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_seleccionarOpcion'))) + "</option> "), _vm._t("default")], 2)])], 2);
};
var selectGroupvue_type_template_id_2fff8f1a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/_productdetails/selectGroup.vue?vue&type=template&id=2fff8f1a&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productdetails/selectGroup.vue?vue&type=script&lang=js&
/* harmony default export */ var selectGroupvue_type_script_lang_js_ = ({
  name: 'selectGroup-details',
  props: ['options', 'label', 'value', 'index', 'variantes'],
  mounted() {
    this.saveOption();
  },
  data() {
    return {};
  },
  methods: {
    updateValue() {
      this.$emit('input', this.$refs.format.value);
      if (this.$refs.format.value) {
        let variante = this.variantes[this.index].valores.filter(item => {
          return item.option == this.$refs.format.value;
        });
        this.$store.state.beforeCombination.splice(this.index, 1, variante[0].option);
      }
    },
    saveOption() {
      this.$store.state.beforeCombination.splice(this.index, 1, this.variantes[this.index].valores[0].option);
    }
  }
});
// CONCATENATED MODULE: ./components/template13/_productdetails/selectGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_selectGroupvue_type_script_lang_js_ = (selectGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template13/_productdetails/selectGroup.vue



function selectGroup_injectStyles (context) {
  
  var style0 = __webpack_require__(852)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var selectGroup_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_selectGroupvue_type_script_lang_js_,
  selectGroupvue_type_template_id_2fff8f1a_scoped_true_render,
  selectGroupvue_type_template_id_2fff8f1a_scoped_true_staticRenderFns,
  false,
  selectGroup_injectStyles,
  "2fff8f1a",
  "59247ec1"
  
)

/* harmony default export */ var selectGroup = (selectGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productdetails/OptTab.vue?vue&type=template&id=c99d1210&scoped=true&
var OptTabvue_type_template_id_c99d1210_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate13 ? _c('div', {
    staticClass: "content-opt-tab",
    style: [_vm.settingByTemplate13[0].detailsProduct, _vm.settingByTemplate13[0].setting13General, {
      '--font-style-1': this.settingByTemplate13[0].setting13General && this.settingByTemplate13[0].setting13General.fount_1 ? this.settingByTemplate13[0].setting13General.fount_1 : 'Poppins'
    }]
  }, [_c('el-collapse', {
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
      "title": _vm.$t('productdetail_description'),
      "name": "1"
    }
  }, [_c('div', {
    staticClass: "editor"
  }, [_vm.data.info.descripcion ? _c('div', [_c('el-tiptap', {
    attrs: {
      "extensions": _vm.extensions,
      "spellcheck": false,
      "readonly": true,
      "charCounterCount": false,
      "tooltip": false,
      "showMenubar": false,
      "bubble": false
    },
    model: {
      value: _vm.data.info.descripcion,
      callback: function ($$v) {
        _vm.$set(_vm.data.info, "descripcion", $$v);
      },
      expression: "data.info.descripcion"
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('productdetail_opcionesPago'),
      "name": "2"
    }
  }, [_c('div', {
    staticClass: "item-content opcpago"
  }, [_c('ul', [_vm.mediospago.consignacion == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_consignacionBancaria')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('productdetail_consignacionBancariaMsg')))])]) : _vm._e(), _vm._v(" "), _vm.mediospago.contraentrega == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_PagoContra')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('productdetail_PagoContraMsg')))])]) : _vm._e(), _vm._v(" "), _vm.mediospago.convenir == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_pagoConvenir')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('productdetail_pagoConvenirMsg')))])]) : _vm._e(), _vm._v(" "), _vm.mediospago.credibanco == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_ConsignacionCredibanco')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_ConsignacionCredibancoMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "cursor_point",
    attrs: {
      "href": "https://www.credibanco.com/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335270/Templates%20Modos%20de%20pago/Credibanco_lprsof.png",
      "alt": "logo Credibanco"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.daviplata == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_Consignaciondaviplata')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_ConsignaciondaviplataMsg')) + "\n            ")]), _vm._v(" "), _c('img', {
    staticClass: "logo-pasarela-daviplata",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333767/Templates%20Modos%20de%20pago/5c89c897e1917d9209a762af_davi_qn90y9.png",
      "alt": "logo daviPlata"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.mediospago.efecty == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_ConsignacionEfecty')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('productdetail_ConsignacionEfectyMsg')))]), _vm._v(" "), _c('a', {
    staticClass: "cursor_point",
    attrs: {
      "href": "https://www.efecty.com.co/web/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-efecty",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333023/Templates%20Modos%20de%20pago/Efecty-png_q3fvog.png",
      "alt": "logo efecty"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.mercado_pago == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_PasarelaMercado')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaMercadoMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "cursor_point",
    attrs: {
      "href": "https://www.mercadopago.com",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-daviplata",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606331948/Templates%20Modos%20de%20pago/mercadopago_jyalpa.png",
      "alt": "logo mercadopago"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.nequi == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_Consignacionnequi')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_ConsignacionnequiMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "cursor_point",
    attrs: {
      "href": "https://www.nequi.com.co/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-daviplata",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333553/Templates%20Modos%20de%20pago/Nequi_by_Bancolombia_hxhkhb.png",
      "alt": "logo nequi"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.payco == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_PasarelaEpayco')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaEpaycoMsg')) + "\n            ")]), _vm._v(" "), _c('img', {
    staticClass: "logo-pasarela-payco",
    attrs: {
      "src": "https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png",
      "alt": "Pasarela de pagos epayco"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.mediospago.payu == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_PasarelaPayu')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://www.payulatam.com/co/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-payu",
    attrs: {
      "src": "https://ecommerce.payulatam.com/logos/PayU_CO.png",
      "alt": "PayU",
      "border": "0"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.wompi == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_Consignacionwompi')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://wompi.co/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-wompi",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335739/Templates%20Modos%20de%20pago/wompi_jxuitu.png",
      "alt": "wompi",
      "border": "0"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.wepay4u == 1 ? _c('li', [_c('h4', [_vm._v("WePay4U")]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('text_pago_WePay4U')) + "\n            ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://wepay4u.com/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-wompi",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/v1639078440/wePay4u/powered_by_z7sgqp.png",
      "alt": "wePay4u",
      "border": "0"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.tu_compra == 1 ? _c('li', [_c('h4', [_vm._v("Tucompra")]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('text_pago_Tucompra')) + "\n            ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://tucompra.com.co/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-wompi",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/tucompra_ss0oys.png",
      "alt": "tu_compra",
      "border": "0"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.flow == 1 ? _c('li', [_c('h4', [_vm._v("Tucompra")]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('text_pago_flowInfo')) + "\n            ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://www.flow.cl/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-wompi",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/flow_jevnwy.png",
      "alt": "flow",
      "border": "0"
    }
  })])]) : _vm._e()])])]), _vm._v(" "), _c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('productdetail_opinionesEnvio'),
      "name": "3"
    }
  }, [_c('div', {
    staticClass: "item-content opcenvio"
  }, [this.envios.envio_metodo ? _c('div', {
    staticClass: "deliverys section"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h3', {
    staticClass: "title-section"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_opinionesEnvio')) + "\n            ")])]), _vm._v(" "), this.envios.envio_metodo === 'precio_ciudad' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', {
    staticClass: "capitalize"
  }, [_vm._v("\n              • " + _vm._s(this.envios.envio_metodo.replace('_', ' por ')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg1')) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envios.envio_metodo === 'tarifa_plana' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', {
    staticClass: "capitalize"
  }, [_vm._v("\n              " + _vm._s(this.envios.envio_metodo.replace('_', ' ')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg2')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('cart_precio')) + "\n              " + _vm._s(_vm._f("currency")(this.envios.valor, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envios.envio_metodo === 'precio' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_precioTotalCompra')))]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_precioTotalCompraMsg')) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envios.envio_metodo === 'gratis' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_gratis')))]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_gratisMsg')) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envios.envio_metodo === 'sinEnvio' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('p', {
    staticClass: "description-method"
  }, [_vm._v("Pasas a recoger tu compra")])]) : _vm._e()]) : _vm._e()])])], 1)], 1) : _vm._e();
};
var OptTabvue_type_template_id_c99d1210_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/_productdetails/OptTab.vue?vue&type=template&id=c99d1210&scoped=true&

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(67);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productdetails/OptTab.vue?vue&type=script&lang=js&


/* harmony default export */ var OptTabvue_type_script_lang_js_ = ({
  mixins: [formatCurrent["a" /* default */], elemenTiptap["a" /* default */]],
  props: {
    dataStore: Object,
    data: {},
    envio: {},
    settingByTemplate13: Array
  },
  data() {
    return {
      activeNames: ['1']
    };
  },
  computed: {
    mediospago() {
      return this.dataStore.medios_pago;
    },
    activeClass() {
      if (this.data.info.descripcion == '' || this.data.info.descripcion == null) {
        return true;
      } else {
        return false;
      }
    },
    envios() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.data.medioEnvio = JSON.parse(this.dataStore.medios_envio.valores);
      return this.data.medioEnvio;
    }
  },
  methods: {
    handleChange(val) {
      // console.log(val);
    }
  },
  filters: {
    capitalize(value) {
      if (value) {
        value = value.toLowerCase();
        return value.replace(/^\w|\s\w/g, l => l.toUpperCase());
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template13/_productdetails/OptTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_OptTabvue_type_script_lang_js_ = (OptTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template13/_productdetails/OptTab.vue



function OptTab_injectStyles (context) {
  
  var style0 = __webpack_require__(854)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var OptTab_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_OptTabvue_type_script_lang_js_,
  OptTabvue_type_template_id_c99d1210_scoped_true_render,
  OptTabvue_type_template_id_c99d1210_scoped_true_staticRenderFns,
  false,
  OptTab_injectStyles,
  "c99d1210",
  "3d2209d8"
  
)

/* harmony default export */ var OptTab = (OptTab_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productdetails/suggestionsProducto.vue?vue&type=template&id=7fdcd880&scoped=true&
var suggestionsProductovue_type_template_id_7fdcd880_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.category.length ? _c('div', {
    staticClass: "wrapper-ProductFavoritos"
  }, [_vm._ssrNode("<div class=\"content-title-ProductFavoritos\" data-v-7fdcd880><p class=\"title-ProductFavoritos\" data-v-7fdcd880>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('home_destacadosMsg')) + "\n    ") + "</p></div> "), _c('KoSwipper', {
    attrs: {
      "products": _vm.category,
      "cardProduct": _vm.cardProduct,
      "settingGeneral": _vm.settingGeneral
    }
  })], 2) : _vm._e();
};
var suggestionsProductovue_type_template_id_7fdcd880_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/_productdetails/suggestionsProducto.vue?vue&type=template&id=7fdcd880&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productofavorito/productSlide.vue?vue&type=template&id=27d99d2b&scoped=true&
var productSlidevue_type_template_id_27d99d2b_scoped_true_render = function render() {
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
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-27d99d2b>", "</div>", _vm._l(this.products, function (product, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\" data-v-27d99d2b>", "</div>", [_c('client-only', [_c('KoProductCard1', {
      attrs: {
        "product": product,
        "cardProduct": _vm.cardProduct,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1)], 1);
  }), 0), _vm._ssrNode(" "), this.products.length > 1 ? _vm._ssrNode("<div class=\"prev btnPrev\" data-v-27d99d2b>", "</div>", [_c('FlechaLeft-icon', {
    staticClass: "btn-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" "), this.products.length > 1 ? _vm._ssrNode("<div class=\"next btnNext\" data-v-27d99d2b>", "</div>", [_c('FlechaRight-icon', {
    staticClass: "btn-icon"
  })], 1) : _vm._e()], 2);
};
var productSlidevue_type_template_id_27d99d2b_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/_productofavorito/productSlide.vue?vue&type=template&id=27d99d2b&scoped=true&

// EXTERNAL MODULE: ./components/template13/_productcard/Ko-ProductCard-1.vue + 4 modules
var Ko_ProductCard_1 = __webpack_require__(221);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productofavorito/productSlide.vue?vue&type=script&lang=js&

/* harmony default export */ var _productofavorito_productSlidevue_type_script_lang_js_ = ({
  name: 'productSlide-productFavorito-13',
  components: {
    KoProductCard1: Ko_ProductCard_1["a" /* default */]
  },
  props: {
    products: {},
    settingGeneral: Object,
    cardProduct: Object
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
            slidesPerView: 2,
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
// CONCATENATED MODULE: ./components/template13/_productofavorito/productSlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var template13_productofavorito_productSlidevue_type_script_lang_js_ = (_productofavorito_productSlidevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template13/_productofavorito/productSlide.vue



function productSlide_injectStyles (context) {
  
  var style0 = __webpack_require__(856)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var productSlide_component = Object(componentNormalizer["a" /* default */])(
  template13_productofavorito_productSlidevue_type_script_lang_js_,
  productSlidevue_type_template_id_27d99d2b_scoped_true_render,
  productSlidevue_type_template_id_27d99d2b_scoped_true_staticRenderFns,
  false,
  productSlide_injectStyles,
  "27d99d2b",
  "51ed9121"
  
)

/* harmony default export */ var _productofavorito_productSlide = (productSlide_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productdetails/suggestionsProducto.vue?vue&type=script&lang=js&

/* harmony default export */ var suggestionsProductovue_type_script_lang_js_ = ({
  name: 'suggestionsProducto13',
  props: {
    category: {},
    settingGeneral: Object,
    Object,
    cardProduct: Object
  },
  components: {
    KoSwipper: _productofavorito_productSlide
  }
});
// CONCATENATED MODULE: ./components/template13/_productdetails/suggestionsProducto.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_suggestionsProductovue_type_script_lang_js_ = (suggestionsProductovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template13/_productdetails/suggestionsProducto.vue



function suggestionsProducto_injectStyles (context) {
  
  var style0 = __webpack_require__(858)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var suggestionsProducto_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_suggestionsProductovue_type_script_lang_js_,
  suggestionsProductovue_type_template_id_7fdcd880_scoped_true_render,
  suggestionsProductovue_type_template_id_7fdcd880_scoped_true_staticRenderFns,
  false,
  suggestionsProducto_injectStyles,
  "7fdcd880",
  "3816f14d"
  
)

/* harmony default export */ var suggestionsProducto = (suggestionsProducto_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productdetails/zoomImg.vue?vue&type=template&id=6d471beb&scoped=true&
var zoomImgvue_type_template_id_6d471beb_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('figure', {
    staticClass: "zoom",
    style: _vm.setBackground(_vm.idCloudinary(_vm.photo, 850, 850)),
    on: {
      "mousemove": _vm.zoom
    }
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.idCloudinary(_vm.photo, 850, 850)) + " alt=\"Product Img\" class=\"photo_main\" data-v-6d471beb>")]);
};
var zoomImgvue_type_template_id_6d471beb_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/_productdetails/zoomImg.vue?vue&type=template&id=6d471beb&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productdetails/zoomImg.vue?vue&type=script&lang=js&

/* harmony default export */ var zoomImgvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'zoomImg-details',
  props: ['photo'],
  data() {
    return {
      activeZoom: true
    };
  },
  methods: {
    zoom(e) {
      const zoomer = e.currentTarget;
      let offsetX, offsetY;
      if (e.offsetY) {
        e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageY;
      }
      if (e.offsetX) {
        e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
      }
      const x = offsetX / zoomer.offsetWidth * 80;
      const y = offsetY / zoomer.offsetHeight * 80;
      zoomer.style.backgroundPosition = `${x}% ${y}%`;
    },
    setBackground(p) {
      return `background-image: url('${p}')`;
    }
  }
});
// CONCATENATED MODULE: ./components/template13/_productdetails/zoomImg.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_zoomImgvue_type_script_lang_js_ = (zoomImgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template13/_productdetails/zoomImg.vue



function zoomImg_injectStyles (context) {
  
  var style0 = __webpack_require__(860)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var zoomImg_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_zoomImgvue_type_script_lang_js_,
  zoomImgvue_type_template_id_6d471beb_scoped_true_render,
  zoomImgvue_type_template_id_6d471beb_scoped_true_staticRenderFns,
  false,
  zoomImg_injectStyles,
  "6d471beb",
  "8b2b0964"
  
)

/* harmony default export */ var zoomImg = (zoomImg_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko-ProductDetail-1.vue?vue&type=script&lang=js&








/* harmony default export */ var Ko_ProductDetail_1vue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'Ko-ProductDetail',
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebookPixel: Object,
    settingByTemplate13: Array
  },
  components: {
    OptionTab: OptTab,
    SelectGroup: selectGroup,
    KoSuggestProduct: suggestionsProducto,
    ProductSlide: productSlide,
    Zoom: zoomImg
  },
  mounted() {
    this.$store.state.beforeCombination = [];
    if (this.productsData && this.productsData.length && this.productsData.length > 0) {
      this.getDataProduct();
    } else {
      this.getDataProductPrev();
    }
    if (Object.keys(this.dataStore.medios_envio).length) {
      this.setOptionEnvio();
    }
    if (this.$route.query && this.$route.query.userId && this.$route.query.userName) {
      this.userDropshipping.userId = this.$route.query.userId;
      this.userDropshipping.userName = this.$route.query.userName;
    }
  },
  data() {
    return {
      id: this.$route.params.slug,
      loading: true,
      data: {},
      selectPhotoUrl: '',
      idYoutube: '',
      existYoutube: false,
      maxQuantityValue: 1,
      quantityValue: 1,
      productIndexCart: null,
      warranty: '',
      productCart: {},
      salesData: null,
      spent: false,
      envioproducto: '',
      envio: {
        titulo: '',
        desc: ''
      },
      activeZoom: true,
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 10,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        }
      },
      sharing: {
        url: '',
        quote: ''
      },
      sharingFacebook: '',
      userDropshipping: {
        userId: '',
        userName: ''
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    existPayments() {
      const mediospago = this.dataStore.medios_pago;
      if (mediospago.consignacion || mediospago.convenir || mediospago.payco || mediospago.tienda || mediospago.efecty) {
        return true;
      }
      return false;
    },
    beforeCombination() {
      return this.$store.state.beforeCombination;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    precio() {
      if (this.data.detalle.precio) {
        return `$${this.data.detalle.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
      }
    },
    category() {
      return this.productsData.filter(product => product.categoria == this.data.detalle.categoria_producto.nombre_categoria_producto && product.id !== this.data.detalle.id);
    }
  },
  methods: {
    searchIdForSlug() {
      const product = this.productsData.filter(product => product.slug === this.id);
      if (product.length) {
        return product[0].id;
      }
      return this.productsData[0].id;
    },
    getDataProduct() {
      const idOfSlug = this.searchIdForSlug();
      if (idOfSlug) {
        external_axios_default.a.get(`${this.$store.state.urlTemplate}/api/producto/${idOfSlug}`).then(response => {
          this.selectedPhoto(response.data.detalle.foto_cloudinary);
          this.videoYoutube(response.data.info.video);
          this.data = response.data;
          this.salesData = {
            precio: this.data.detalle.precio,
            unidades: this.data.info.inventario,
            sku: this.data.info.sku,
            estado: true
          };
          if (response && response.data) {
            this.sharing.url = window.location.href;
            this.sharing.quote = `Explora%20el%20producto%20${response.data.detalle.nombre}%2C%20te%20van%20a%20encantar.%0ALink%20del%20producto%3A%20${this.sharing.url}`;
            this.sharingFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.sharing.url}&quote=${this.sharing.quote}`;
          }
          this.maxQuantityValue = this.data.info.inventario;
          this.setOptionEnvio();
          for (const [index, productCart] of this.$store.state.productsCart.entries()) {
            if (this.data.detalle.id == productCart.id) {
              this.productIndexCart = index;
              this.productCart = productCart;
              this.maxQuantityValue = this.data.info.inventario - productCart.cantidad;
            }
          }
          if (this.salesData.unidades == 0 || this.maxQuantityValue <= 0) {
            this.spent = true;
          }
          this.loading = false;
          if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
            window.fbq('track', 'ViewContent', {
              content_type: 'product',
              content_ids: [`${this.data.detalle.id}`],
              contents: [{
                id: `${this.data.detalle.id}`,
                quantity: this.quantityValue
              }],
              value: this.salesData.precio ? this.salesData.precio : 0,
              currency: this.dataStore.tienda.moneda,
              content_name: this.data.detalle.nombre,
              content_category: 'otro'
            });
          }
        });
      } else {
        this.selectedPhoto(this.productsData[0].foto_cloudinary);
        this.data.detalle = {
          foto_cloudinary: this.productsData[0].foto_cloudinary,
          nombre: this.productsData[0].nombre,
          precio: this.productsData[0].precio
        };
        this.data.info = {
          marca: '',
          descripcion: ''
        };
        this.maxQuantityValue = 0;
        this.salesData = {
          precio: 29998,
          unidades: 0,
          sku: '4a00'
        };
        this.spent = true;
      }
    },
    getDataProductPrev() {
      this.data.detalle = {
        foto_cloudinary: 'https://vignette.wikia.nocookie.net/la-bitacora-del-capitan/images/6/67/Not_found.png/revision/latest?cb=20190509042801&path-prefix=es',
        nombre: 'Producto de prueba',
        precio: 29999
      };
      this.data.info = {
        marca: 'Marca de prueba',
        descripcion: 'Descripción de prueba'
      };
      this.maxQuantityValue = 0;
      this.salesData = {
        precio: 29999,
        unidades: 0,
        sku: '4a00'
      };
      this.spent = true;
    },
    setOptionEnvio() {
      if (this.data.detalle) {
        if (this.data.detalle.envio_gratis == 1) {
          this.envio = {
            titulo: 'Envío gratis',
            desc: 'Disfruta de este obsequio por parte de la tienda.'
          };
        } else {
          this.data.envioproducto = JSON.parse(this.envios.valores);
          switch (this.data.envioproducto.envio_metodo) {
            case 'gratis':
              this.envio = {
                titulo: 'Envío gratis',
                desc: 'Disfruta de este obsequio por parte de la tienda.'
              };
              break;
            case 'sinEnvio':
              this.envio = {
                titulo: 'Sin envio',
                desc: 'Tienes que acercarte a la tienda a recoger tu pedido.'
              };
              break;
            case 'tarifa_plana':
              this.envio = {
                titulo: 'Tarifa plana',
                desc: `Compra todo lo que quieras en nuestra tienda, el valor del envio siempre sera el mismo: Valor envio $${this.data.envioproducto.valor}`
              };
              break;
            case 'precio':
              this.envio = {
                titulo: 'Tarifa por precio',
                desc: 'Según la suma del costo de tus productos te cobraran el envio'
              };
              break;
            case 'precio_ciudad':
              this.envio = {
                titulo: 'Tarifa por ciudad',
                desc: 'Según la ciudad te cobraran el envio'
              };
              break;
            case 'peso':
              this.envio = {
                titulo: 'Tarifa por peso',
                desc: ''
              };
              break;
            default:
          }
        }
      }
    },
    quantity(productCart) {
      this.quantityValue = productCart.cantidad;
    },
    addQuantity() {
      if (this.maxQuantityValue > this.quantityValue) {
        this.quantityValue++;
        this.data.cantidad = this.quantityValue;
      } else {
        // Alerta de limite de sku
      }
    },
    removeQuantity() {
      if (this.data.cantidad >= 2) {
        this.quantityValue--;
        this.data.cantidad = this.quantityValue;
      }
    },
    setMiniPhoto(photo) {
      return photo;
    },
    selectedPhoto(photo) {
      this.selectPhotoUrl = photo;
      this.existYoutube = false;
    },
    videoYoutube(url) {
      let myregexp = /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/;
      let id = '';
      if (url && url !== '' && url !== 'null') {
        this.validVideo = true;
        id = url.match(myregexp);
        if (id) {
          this.idYoutube = id[1];
        }
      }
    },
    addShoppingCart() {
      if (!this.data.cantidad) {
        this.data.cantidad = this.quantityValue;
      }
      const product = {
        id: this.data.detalle.id,
        precio: this.salesData.precio,
        cantidad: this.data.cantidad,
        foto_cloudinary: this.data.detalle.foto_cloudinary,
        nombre: this.data.detalle.nombre,
        combinacion: this.salesData.combinacion,
        envio_gratis: this.data.detalle.envio_gratis,
        promocion_valor: this.data.info.promocion_valor,
        tag_promocion: this.data.info.tag_promocion,
        dropshipping: this.userDropshipping.userId
      };
      if (this.salesData) {
        product.limitQuantity = this.salesData.unidades;
      } else {
        product.limitQuantity = this.data.info.inventario;
      }
      if (typeof this.productIndexCart === 'number') {
        const mutableProduct = this.$store.state.productsCart[this.productIndexCart];
        mutableProduct.cantidad += this.data.cantidad;
        this.$store.state.productsCart.splice(this.productIndexCart, 1, mutableProduct);
      } else {
        this.$store.state.productsCart.push(product);
      }
      this.$store.commit('UPDATE_CONTENT_CART');
      this.$router.push('/productos');
      this.$store.commit('SET_OPEN_ORDER', true);
      // this.$store.state.orderComponent = true
      this.$store.dispatch('SEND_ADD_TO_CART', 1);
    },
    GoPayments() {
      let objeto = {
        id: this.data.info.id,
        cantidad: this.quantityValue,
        combinacion: this.salesData && this.salesData.combinacion ? this.salesData.combinacion : undefined,
        dropshipping: this.userDropshipping.userId
      };
      let json = {
        products: [objeto],
        tienda: {
          id: this.$store.state.tienda.id_tienda
        },
        canal: 'KOMERCIA'
      };
      json = JSON.stringify(json);
      if (json) {
        this.$store.dispatch('SEND_ADD_TO_CART', 2);
        if (this.layourUnicentro == true) {
          window.open(`https://checkout.komercia.co/?params=${json}`);
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`;
        }
      }
    },
    evalStock(mq, qv) {
      return !(mq - qv < 0);
    },
    mobileCheck() {
      window.mobilecheck = function () {
        var check = false;
        (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
      };
      return window.mobilecheck();
    },
    redirectWP() {
      let baseUrlMovil = 'https://api.whatsapp.com/send?';
      let baseUrlPc = 'https://web.whatsapp.com/send?';
      let urlProduct = window.location.href;
      let text = `Hola 😀, %0AQuiero compartir contigo éste  producto, seguro te va a encantar: ${this.data.detalle.nombre}%0A%0ALink de compra: ${urlProduct}%0A`;
      if (this.mobileCheck()) {
        window.open(`${baseUrlMovil}text=${text}`, '_blank');
      } else {
        window.open(`${baseUrlPc}text=${text}`, '_blank');
      }
    }
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook;
      this.links[1].link = this.dataStore.tienda.red_twitter;
      this.links[2].link = this.dataStore.tienda.red_instagram;
      this.links[3].link = this.dataStore.tienda.red_youtube;
    },
    productsData() {
      this.getDataProduct();
    },
    envios() {
      this.setOptionEnvio();
    },
    quantityValue(value) {
      if (value > this.maxQuantityValue) {
        this.quantityValue = this.maxQuantityValue;
      }
    },
    beforeCombination(value) {
      const combinationSelected = JSON.stringify(value);
      if (this.data.combinaciones) {
        if (this.data.combinaciones.combinaciones !== '[object Object]' && this.data.detalle.con_variante > 0) {
          const combinaciones = JSON.parse(this.data.combinaciones.combinaciones);
          const result = combinaciones.find(combinacion => JSON.stringify(combinacion.combinacion) == combinationSelected);
          this.productCart = [];
          this.productIndexCart = null;
          for (const [index, productCart] of this.$store.state.productsCart.entries()) {
            if (this.data.detalle.id == productCart.id && JSON.stringify(productCart.combinacion) == JSON.stringify(result.combinacion)) {
              this.productIndexCart = index;
              this.productCart = productCart;
            }
          }
          if (result) {
            this.spent = false;
            this.maxQuantityValue = result.unidades;
            if (result.unidades == 0) {
              this.spent = true;
            }
            if (this.productCart.cantidad) {
              this.maxQuantityValue = parseInt(result.unidades) - this.productCart.cantidad;
              if (this.maxQuantityValue <= 0) {
                this.spent = true;
              }
            }
            this.salesData = result;
            this.quantityValue = 1;
          }
        }
      }
    }
  },
  filters: {
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase();
      }
      return '';
    }
  },
  head() {
    return {
      title: `Vista del producto ${this.data && this.data.detalle ? this.data.detalle.nombre : ''}`,
      meta: [{
        hid: 'product:catalog_id',
        property: 'product:catalog_id',
        content: this.data && this.data.detalle ? this.data.detalle.id : ''
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: this.data && this.data.detalle ? this.data.detalle.nombre : ''
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: this.sharing && this.sharing.url ? this.sharing.url : ''
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: this.data && this.data.info ? this.data.info.descripcion_corta : ''
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: this.data && this.data.detalle ? this.data.detalle.foto_cloudinary : ''
      }, {
        hid: 'og:price:amount',
        property: 'og:price:amount',
        content: this.salesData && this.salesData.precio ? this.salesData.precio : ''
      }, {
        hid: 'og:price:currency',
        property: 'og:price:currency',
        content: this.dataStore.tienda.moneda ? this.dataStore.tienda.moneda : ''
      }, {
        hid: 'product:brand',
        property: 'product:brand',
        content: this.data && this.data.info && this.data.info.marca ? this.data.info.marca : ''
      }, {
        hid: 'product:availability',
        property: 'product:availability',
        content: this.salesData && this.salesData.unidades > 0 ? 'in stock' : 'out of stock'
      }, {
        hid: 'product:condition',
        property: 'product:condition',
        content: 'new'
      }, {
        hid: 'product:price:amount',
        property: 'product:price:amount',
        content: this.salesData && this.salesData.precio ? this.salesData.precio : ''
      }, {
        hid: 'product:price:currency',
        property: 'product:price:currency',
        content: this.dataStore.tienda.moneda ? this.dataStore.tienda.moneda : ''
      }, {
        hid: 'product:sale_price:amount',
        property: 'product:sale_price:amount',
        content: this.data && this.data.info && this.data.info.tag_promocion == 1 && this.data.info.promocion_valor ? Math.trunc(this.salesData.precio / (1 - this.data.info.promocion_valor / 100)) : ''
      }, {
        hid: 'product:sale_price:currency',
        property: 'product:sale_price:currency',
        content: this.dataStore.tienda.moneda ? this.dataStore.tienda.moneda : ''
      }]
    };
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      productID: this.data && this.data.detalle && this.data.detalle.id ? this.data.detalle.id : '',
      name: this.data && this.data.detalle && this.data.detalle.nombre ? this.data.detalle.nombre.slice(0, 149) : '',
      description: this.data && this.data.info && this.data.info.descripcion_corta ? this.data.info.descripcion_corta.slice(0, 9998) : `Producto de la tienda ${this.dataStore.tienda.nombre}`,
      url: this.sharing && this.sharing.url ? this.sharing.url : '',
      image: this.data && this.data.detalle && this.data.detalle.foto_cloudinary ? this.data.detalle.foto_cloudinary : '',
      brand: this.data && this.data.info && this.data.info.marca ? this.data.info.marca : '',
      sku: this.salesData && this.salesData.unidades ? this.salesData.unidades : '',
      offers: [{
        '@type': 'Offer',
        price: this.salesData && this.salesData.precio ? this.salesData.precio : '',
        priceCurrency: this.dataStore.tienda.moneda ? this.dataStore.tienda.moneda : '',
        itemCondition: 'https://schema.org/NewCondition',
        availability: this.salesData && this.salesData.unidades > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
      }],
      additionalProperty: [{
        '@type': 'PropertyValue',
        propertyID: 'item_group_id',
        value: this.data && this.data.detalle ? `FB${this.data.detalle.categoria_producto.id}_${this.data.detalle.categoria_producto.nombre_categoria_producto}` : '',
        status: 'active'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/template13/Ko-ProductDetail-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var template13_Ko_ProductDetail_1vue_type_script_lang_js_ = (Ko_ProductDetail_1vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template13/Ko-ProductDetail-1.vue



function Ko_ProductDetail_1_injectStyles (context) {
  
  var style0 = __webpack_require__(862)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko_ProductDetail_1_component = Object(componentNormalizer["a" /* default */])(
  template13_Ko_ProductDetail_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Ko_ProductDetail_1_injectStyles,
  "240bbff0",
  "4b4ebe63"
  
)

/* harmony default export */ var Ko_ProductDetail_1 = __webpack_exports__["default"] = (Ko_ProductDetail_1_component.exports);

/***/ })

};;
//# sourceMappingURL=54.js.map