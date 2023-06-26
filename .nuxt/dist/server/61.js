exports.ids = [61];
exports.modules = {

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("78e13e99", content, true, context)
};

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_4d584cdc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_4d584cdc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_4d584cdc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_4d584cdc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_4d584cdc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-image[data-v-4d584cdc],.product-image-soldOut[data-v-4d584cdc]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.product-image-soldOut[data-v-4d584cdc]{filter:grayscale(100%)}.producto[data-v-4d584cdc]{background:var(--background_color_1);cursor:pointer;justify-content:flex-start}.datos-producto[data-v-4d584cdc],.producto[data-v-4d584cdc]{align-items:center;display:flex;flex-direction:column;height:100%;width:100%}.datos-producto[data-v-4d584cdc]{cursor:default;justify-content:space-between;margin:6px 10px}.container[data-v-4d584cdc]{height:100%;max-width:100%;position:relative}.image[data-v-4d584cdc]{height:auto;width:100%}.icon[data-v-4d584cdc]{color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.icon[data-v-4d584cdc],.icons-hover[data-v-4d584cdc]{--tw-text-opacity:1}.icons-hover[data-v-4d584cdc]{grid-gap:0;color:#3f3f3f;color:rgb(63 63 63/var(--tw-text-opacity));display:grid;font:inherit;font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.icon-show-mobile[data-v-4d584cdc]{fill:#fff}.tittle[data-v-4d584cdc]{align-items:center;display:flex;justify-content:center;width:100%}.card-title[data-v-4d584cdc],.tittle[data-v-4d584cdc]{font-family:var(--font-style-1)!important}.card-title[data-v-4d584cdc]{color:var(--color_title);font-size:var(--fontSizeTitle);font-weight:var(--fontWeighTitle);height:100%;max-height:58px;min-height:58px;padding-top:10px;text-align:center}.card-title[data-v-4d584cdc],.card-title[data-v-4d584cdc]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.card-title[data-v-4d584cdc]:hover{color:var(--hover_text)}.separator-price[data-v-4d584cdc]{color:var(--color_price);font-size:var(--fontSizePretitle);margin-top:10px}.separator-price[data-v-4d584cdc],.text-price[data-v-4d584cdc]{font-family:var(--font-style-1)!important}.text-price[data-v-4d584cdc]{color:var(--color_price);font-size:var(--fontSizePretitle);font-weight:var(--fontWeighPretitle);margin-top:10px;text-align:left;white-space:nowrap}.text-free[data-v-4d584cdc]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.icon-overlay-free[data-v-4d584cdc]{color:#222}.text-sould[data-v-4d584cdc]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.txt-free[data-v-4d584cdc]{font-size:15px;font-weight:600}.btn-content[data-v-4d584cdc]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.btn[data-v-4d584cdc]{background-color:var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);height:40px;margin-bottom:20px;margin-top:20px;padding-left:20px;padding-right:20px;width:auto}.btn[data-v-4d584cdc],.btn[data-v-4d584cdc]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn[data-v-4d584cdc]:hover{background-color:var(--hover_Bg_btn)}.txt-btn[data-v-4d584cdc]{color:var(--color_text_btn);font-size:12px;text-transform:uppercase}.icon-shop[data-v-4d584cdc]{fill:var(--color_text_btn);margin-bottom:5px;margin-right:5px}.cart-Shop-pro[data-v-4d584cdc]{background:red;color:#fff;font-size:12px;left:5px;padding:1px 5px;position:absolute;right:auto;text-transform:uppercase;top:5px}.text-cart[data-v-4d584cdc]{display:block}.txt-add[data-v-4d584cdc]{color:#fff;font-size:15px;font-weight:600;letter-spacing:1px}@media (min-width:300px){.overlay-top[data-v-4d584cdc]{--tw-bg-opacity:1;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:#fff;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);height:40px;overflow:hidden;position:absolute;top:10%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:45px}.overlay-free[data-v-4d584cdc],.overlay-top[data-v-4d584cdc]{right:0}.overlay-free[data-v-4d584cdc]{background-color:#222;border-radius:.25rem;height:10%;overflow:hidden;position:absolute;top:0;transition:.5s ease;width:110px}.text-free[data-v-4d584cdc]{font-size:75%}.overlay-polygon[data-v-4d584cdc]{background-color:transparent;height:5%;right:15px;top:10%;width:5%}.overlay-polygon[data-v-4d584cdc],.overlay-sould[data-v-4d584cdc]{overflow:hidden;position:absolute}.overlay-sould[data-v-4d584cdc]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:60%;right:0;top:0;transition:.5s ease;width:35%}.svg-sould-out[data-v-4d584cdc]{height:40px;width:40px}.content-price[data-v-4d584cdc]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separator-price[data-v-4d584cdc]{margin-left:1px;margin-right:1px}}@media (min-width:768px){.text-free[data-v-4d584cdc]{font-size:100%}.svg-sould-out[data-v-4d584cdc]{height:60px;width:60px}.separator-price[data-v-4d584cdc]{margin-left:4px;margin-right:4px}}@media (min-width:1280px){.icon[data-v-4d584cdc]{margin-top:0}.overlay-top[data-v-4d584cdc]{height:40px;left:100%;right:0;top:35px;width:0}.product-image[data-v-4d584cdc],.product-image-soldOut[data-v-4d584cdc]{height:360px}.container:hover .overlay-top[data-v-4d584cdc]{left:85%;width:40px}.overlay-free[data-v-4d584cdc]{height:35px;left:100%;right:0;top:0;transition:.5s ease;width:0}.container:hover .overlay-free[data-v-4d584cdc]{left:68%;transition-delay:.7s;width:32%}.overlay-polygon[data-v-4d584cdc]{height:5%;left:100%;right:0;top:35px;width:0}.container:hover .overlay-polygon[data-v-4d584cdc]{left:90%;transition-delay:.95s;width:5%}.overlay-sould[data-v-4d584cdc]{height:20%;left:100%;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-4d584cdc]{left:65%;transition-delay:.7s;width:35%}.svg-sould-out[data-v-4d584cdc]{height:60px;width:60px}}@media (min-width:1920px){.overlay-top[data-v-4d584cdc]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-4d584cdc]{left:86%;width:40px}}@media (min-width:2560px){.overlay-top[data-v-4d584cdc]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-4d584cdc]{left:88%;width:40px}.overlay-sould[data-v-4d584cdc]{height:20%;left:100%;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-4d584cdc]{left:75%;transition-delay:.7s;width:30%}}@media (min-width:3000px){.overlay-top[data-v-4d584cdc]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-4d584cdc]{left:89%;width:40px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productcard/ProductCard.vue?vue&type=template&id=4d584cdc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto",
    style: [_vm.cardProduct, _vm.settingGeneral, {
      '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"container\" data-v-4d584cdc>", "</div>", [_c('nuxt-link', {
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
      value: _vm.idCloudinary(this.product.foto_cloudinary, 400, 400),
      expression: "idCloudinary(this.product.foto_cloudinary, 400, 400)"
    }],
    staticClass: "product-image",
    attrs: {
      "alt": "Product Img"
    }
  }) : _vm._e(), _vm._v(" "), _vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(this.product.foto_cloudinary, 400, 400),
      expression: "idCloudinary(this.product.foto_cloudinary, 400, 400)"
    }],
    staticClass: "product-image-soldOut",
    attrs: {
      "alt": "Product Img"
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "image_overlay"
  })], 1), _vm._ssrNode(" " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-top\" data-v-4d584cdc><div class=\"icons-hover\" data-v-4d584cdc><div class=\"transport-icon\" data-v-4d584cdc>" + (!_vm.getFreeShipping && !_vm.soldOut ? "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" fill=\"#333\" class=\"transporte-icon\" data-v-4d584cdc><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-4d584cdc></path></svg>" : "<!---->") + "</div></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-free\" data-v-4d584cdc><div class=\"text-free\" data-v-4d584cdc><p class=\"txt-free\" data-v-4d584cdc>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardGratis'))) + "</p></div></div>" : "<!---->") + " " + (this.product.tag_promocion == 1 && this.product.promocion_valor ? "<div class=\"cart-Shop-pro\" data-v-4d584cdc><div class=\"text-cart\" data-v-4d584cdc><p data-v-4d584cdc>" + _vm._ssrEscape(_vm._s(this.product.promocion_valor) + "% OFF") + "</p></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-polygon\" data-v-4d584cdc><svg width=\"12px\" height=\"12px\" viewBox=\"0 0 255 255\" class=\"icon-overlay-free\" data-v-4d584cdc><polygon points=\"0,0 127.5,127.5 255,0\" class=\"fill-current\" data-v-4d584cdc></polygon></svg></div>" : "<!---->") + " " + (_vm.soldOut ? "<div class=\"overlay-sould\" data-v-4d584cdc><div class=\"text-sould\" data-v-4d584cdc><svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" viewBox=\"0 0 512 512\" class=\"svg-sould-out\" data-v-4d584cdc><g data-v-4d584cdc><g data-v-4d584cdc><path d=\"m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z\" fill=\"#cd3232\" data-v-4d584cdc></path></g> <g data-v-4d584cdc><path d=\"m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#cd3232\" data-v-4d584cdc></path></g> <g data-v-4d584cdc><path d=\"m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#ff4646\" data-v-4d584cdc></path></g> <g data-v-4d584cdc><circle cx=\"96\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-4d584cdc></circle></g> <g data-v-4d584cdc><circle cx=\"384\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-4d584cdc></circle></g> <g data-v-4d584cdc><path d=\"m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z\" fill=\"#463c4b\" data-v-4d584cdc></path></g> <g data-v-4d584cdc><circle cx=\"240\" cy=\"92.457\" fill=\"#ff4646\" r=\"24\" data-v-4d584cdc></circle></g> <g data-v-4d584cdc><g data-v-4d584cdc><path d=\"m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z\" fill=\"#32283c\" data-v-4d584cdc></path></g> <g data-v-4d584cdc><path d=\"m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#32283c\" data-v-4d584cdc></path></g> <g data-v-4d584cdc><path d=\"m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#e6e6eb\" data-v-4d584cdc></path></g> <g data-v-4d584cdc><path d=\"m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z\" fill=\"#32283c\" data-v-4d584cdc></path></g> <g data-v-4d584cdc><path d=\"m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z\" fill=\"#32283c\" data-v-4d584cdc></path></g> <g data-v-4d584cdc><path d=\"m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z\" fill=\"#e6e6eb\" data-v-4d584cdc></path></g> <path d=\"m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" fill=\"#e6e6eb\" data-v-4d584cdc></path></g></g></svg></div></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"datos-producto\" data-v-4d584cdc>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('div', {
    staticClass: "tittle"
  }, [this.product.nombre.length >= 54 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.nombre.slice(0, 54)}...`) + "\n        ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(`${this.product.nombre.slice(0, 54)}`) + "\n        ")])])]), _vm._ssrNode(" <div class=\"precio\" data-v-4d584cdc><div class=\"content-text-price\" data-v-4d584cdc>" + (this.estadoCart == true && this.equalsPrice ? "<div data-v-4d584cdc>" + (this.minPrice ? "<p class=\"text-price\" data-v-4d584cdc>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>" : this.estadoCart == true && this.minPrice && this.maxPrice && !this.equalsPrice ? "<div class=\"content-price\" data-v-4d584cdc><div class=\"text-price\" data-v-4d584cdc>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div> <p class=\"separator-price\" data-v-4d584cdc>-</p> <div class=\"text-price\" data-v-4d584cdc>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div></div>" : "<div data-v-4d584cdc>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-4d584cdc>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>") + "</div></div> "), _vm._ssrNode("<div class=\"content-btn\" data-v-4d584cdc>", "</div>", [!this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<button class=\"btn\" data-v-4d584cdc>", "</button>", [_vm._ssrNode("<div class=\"btn-content\" data-v-4d584cdc><i class=\"header-content-cart\" data-v-4d584cdc><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"icon-shop\" data-v-4d584cdc><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-4d584cdc></path></svg></i> <p class=\"txt-btn\" data-v-4d584cdc>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_añadiralcarrito')) + "\n          ") + "</p></div>")], 2) : _c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('button', {
    staticClass: "btn"
  }, [_c('div', {
    staticClass: "btn-content"
  }, [_c('i', {
    staticClass: "header-content-cart"
  }, [_c('svg', {
    staticClass: "icon-shop",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "18",
      "height": "18",
      "fill": "currentColor",
      "viewBox": "0 0 16 16"
    }
  }, [_c('path', {
    attrs: {
      "d": "M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
    }
  })])]), _vm._v(" "), _c('p', {
    staticClass: "txt-btn"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('home_cardvermas')) + "\n            ")])])])])], 1)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/_productcard/ProductCard.vue?vue&type=template&id=4d584cdc&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productcard/ProductCard.vue?vue&type=script&lang=js&


/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'Ko-ProductCard-10',
  props: {
    product: Object,
    cardProduct: Object,
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
// CONCATENATED MODULE: ./components/template10/_productcard/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/_productcard/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4d584cdc",
  "021ab8e4"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(840);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5e407dd0", content, true, context)
};

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(842);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5352cc1c", content, true, context)
};

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(844);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("58767fdd", content, true, context)
};

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(846);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("8938fe92", content, true, context)
};

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(848);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6a717e26", content, true, context)
};

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(850);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1fd3a61a", content, true, context)
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

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_31d77afe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(449);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_31d77afe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_31d77afe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_31d77afe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_31d77afe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "select[data-v-31d77afe]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;background-image:none;border:0!important;box-shadow:none;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font-size:14px;font-weight:600;outline:0;transition:all .6s ease-in-out}select[data-v-31d77afe]::-ms-expand{display:none}.title-input[data-v-31d77afe]{color:#222;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font-size:14px;font-weight:600;text-transform:uppercase;transition:all .6s ease-in-out}.select[data-v-31d77afe]{background:#fff;border:2px solid #222;border-radius:var(--radius_btn);color:#222;display:flex;height:40px;overflow:hidden;position:relative;width:15em}select[data-v-31d77afe]{background-color:#fff;flex:1;font-size:1em;padding:0 .5em 0 1em}.select[data-v-31d77afe]:after,select[data-v-31d77afe]{color:#222;cursor:pointer}.select[data-v-31d77afe]:after{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"Dark Gray\"><path d=\"M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z\"/></svg>');padding:.4em 1em;pointer-events:none;position:absolute;right:0;top:0;transition:all .25s ease}option[data-v-31d77afe]{color:#222;font-size:14px;font-weight:400;transition:all .6s ease-in-out}option[data-v-31d77afe],option[data-v-31d77afe]:disabled{font-family:\"Poppins\",Helvetica,Arial,sans-serif!important}option[data-v-31d77afe]:disabled{background:#f8f8f8;color:#222;font-size:14px;font-weight:700;transition:all .6s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_0806b916_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(450);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_0806b916_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_0806b916_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_0806b916_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_0806b916_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editor[data-v-0806b916]{width:100%}.editor[data-v-0806b916] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-0806b916] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-0806b916] .el-tiptap-editor__content h1{font-family:var(--font-style-1);font-size:2em}.editor[data-v-0806b916] .el-tiptap-editor__content h2{font-family:var(--font-style-1);font-size:1.5em}.editor[data-v-0806b916] .el-tiptap-editor__content h3{font-family:var(--font-style-1);font-size:1.17em}.editor[data-v-0806b916] .el-tiptap-editor__content h4{font-family:var(--font-style-1);font-size:1.12em}.editor[data-v-0806b916] .el-tiptap-editor__content h5{font-family:var(--font-style-1);font-size:.83em}.editor[data-v-0806b916] .el-tiptap-editor__content blockquote,.editor[data-v-0806b916] .el-tiptap-editor__content code,.editor[data-v-0806b916] .el-tiptap-editor__content em,.editor[data-v-0806b916] .el-tiptap-editor__content li,.editor[data-v-0806b916] .el-tiptap-editor__content ol,.editor[data-v-0806b916] .el-tiptap-editor__content p,.editor[data-v-0806b916] .el-tiptap-editor__content pre,.editor[data-v-0806b916] .el-tiptap-editor__content s,.editor[data-v-0806b916] .el-tiptap-editor__content span,.editor[data-v-0806b916] .el-tiptap-editor__content strong,.editor[data-v-0806b916] .el-tiptap-editor__content ul{font-family:var(--font-style-1)}.editor[data-v-0806b916] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-0806b916] .el-popper.el-tiptap-image-popper{display:none}.tab[data-v-0806b916]{align-items:center;cursor:pointer;justify-content:center;padding-left:4px;padding-right:4px;width:auto}.item-content[data-v-0806b916],.tab[data-v-0806b916]{display:flex;flex-direction:column}.item-content[data-v-0806b916]{align-items:flex-start;justify-content:flex-start;padding-bottom:4px;width:100%}.content_product_description[data-v-0806b916]{align-items:flex-start;color:var(--color_subtext);display:flex;flex-direction:column;font-size:14px;font-weight:400;justify-content:center;line-height:1.42857143;width:100%}.content_product_description[data-v-0806b916],h3[data-v-0806b916]{font-family:var(--font-style-1)!important}h3[data-v-0806b916]{align-self:flex-start;color:var(--color_subtext);font-size:15px;font-weight:600;text-transform:uppercase}h4[data-v-0806b916]{align-items:flex-start;color:var(--color_subtext);display:flex;flex-direction:column;font-size:15px;font-weight:600;justify-content:center;line-height:1.42857143;margin-bottom:5px;width:100%}h4[data-v-0806b916],li p[data-v-0806b916]{font-family:var(--font-style-1)!important}li p[data-v-0806b916]{color:var(--color_subtext);font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}.description-method[data-v-0806b916],.price[data-v-0806b916]{color:var(--color_subtext);font-family:var(--font-style-1)!important;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}img[data-v-0806b916]{margin-top:15px;max-width:300px;width:30%}@media (min-width:300px){.content-opt-tab[data-v-0806b916],.content-tab[data-v-0806b916]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-tab[data-v-0806b916]{border-color:var(--border);margin-top:6px}.head-content[data-v-0806b916]{grid-gap:.5rem;align-items:center;display:grid;gap:.5rem;grid-template-columns:repeat(1,minmax(0,1fr));justify-content:center;margin-bottom:40px;width:100%}.tittle[data-v-0806b916]{align-items:center;background-color:transparent;color:var(--color_subtext);display:flex;font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;height:40px;justify-content:center;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.show-select-active[data-v-0806b916]{background-color:var(--color_gb_tabs)}.show-select-active .tittle[data-v-0806b916]{color:var(--color_text_tabs)}}@media (min-width:425px){.head-content[data-v-0806b916]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-bottom:40px}.tittle[data-v-0806b916]{font-size:12px;text-align:center}}@media (min-width:768px){.content-opt-tab[data-v-0806b916]{border-width:1px;margin-top:0}.content-opt-tab[data-v-0806b916],.head-content[data-v-0806b916]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start}.head-content[data-v-0806b916]{border-bottom:1px solid transparent;flex-direction:column;gap:0;margin-bottom:0;width:60%}.tab[data-v-0806b916]{display:flex}.tab[data-v-0806b916],.tittle[data-v-0806b916]{align-items:center;justify-content:flex-start;width:100%}.tittle[data-v-0806b916]{font-size:14px;height:50px;padding-left:20px;text-align:center}.content-tab[data-v-0806b916]{align-items:flex-start;border-color:var(--border);border-width:1px;display:flex;flex-direction:row;justify-content:flex-start;margin-top:0;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.show-select-active[data-v-0806b916]{background-color:var(--color_gb_tabs);border-left-width:4px;width:100%}.show-select-active .tittle[data-v-0806b916]{color:var(--color_text_tabs)}.content-tab[data-v-0806b916]{padding:40px}}@media (min-width:1024px){.head-content[data-v-0806b916]{width:400px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_a3878c9e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(451);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_a3878c9e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_a3878c9e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_a3878c9e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_a3878c9e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-wrapper[data-v-a3878c9e]{position:relative;width:100%}.swiper-slide[data-v-a3878c9e]{width:100%}.swiper-pagination[data-v-a3878c9e] .swiper-pagination-bullet{background-color:grey}.swiper-pagination[data-v-a3878c9e] .swiper-pagination-bullet-active{background-color:var(--color_icon)}.btn[data-v-a3878c9e]{background:#000;border-radius:25px;cursor:pointer;padding:0 22px}.btn-icon[data-v-a3878c9e]{align-items:center;bottom:.125em;color:#fff;display:flex;font-size:45px;justify-content:center;width:100%}.btn-icon[data-v-a3878c9e]:hover{color:var(--color_icon)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_80da5564_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(452);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_80da5564_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_80da5564_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_80da5564_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_80da5564_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-ProductFavoritos[data-v-80da5564]{align-items:center;background:transparent;box-sizing:border-box;padding-top:30px}.swiper-container[data-v-80da5564],.wrapper-ProductFavoritos[data-v-80da5564]{display:flex;flex-direction:column;justify-content:center;width:100%}.swiper-container[data-v-80da5564]{align-items:flex-start;max-width:1460px}.content-title-ProductFavoritos[data-v-80da5564]{align-items:center;display:flex;justify-content:flex-start;max-width:1460px;padding-bottom:30px;width:100%}.title-ProductFavoritos[data-v-80da5564]{color:var(--color_subtext);cursor:pointer;font-family:var(--font-style-1)!important;font-size:18px;font-weight:700;line-height:1.4}@media (max-width:770px){.swiper-container[data-v-80da5564]{padding-top:20px}.content-title-ProductFavoritos[data-v-80da5564]{padding-bottom:10px;padding-top:10px}}@media (max-width:380px){.swiper-container[data-v-80da5564]{padding:20px 5px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_cc212430_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(453);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_cc212430_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_cc212430_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_cc212430_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_cc212430_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".photo[data-v-cc212430]{height:550px;-o-object-fit:cover;object-fit:contain;overflow:hidden;width:550px}.wrapper-carouse[data-v-cc212430],.wrapper-carouse[data-v-cc212430] .el-carousel__container{height:550px;max-height:550px;max-width:550px}.youtube[data-v-cc212430]{grid-gap:5px;display:grid;justify-items:start;max-width:550px;width:99%}.youtube__action_back[data-v-cc212430]{background-color:var(--color_background_btn);border-style:none;color:var(--color_text_btn);outline:none}@media (max-width:850px){.photo[data-v-cc212430],.wrapper-carouse[data-v-cc212430],.wrapper-carouse[data-v-cc212430] .el-carousel__container{height:400px;max-height:400px;max-width:400px}}@media (max-width:500px){.wrapper-carouse[data-v-cc212430]{margin-top:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_6ad88f37_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(454);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_6ad88f37_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_6ad88f37_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_6ad88f37_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_6ad88f37_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-productDetail[data-v-6ad88f37]{padding-bottom:40px}.container-productDetail-loading[data-v-6ad88f37],.wrapper-productDetail[data-v-6ad88f37]{align-items:center;background:var(--background_color_1);display:flex;justify-content:center;width:100%}.container-productDetail-loading[data-v-6ad88f37]{flex-direction:column;height:calc(100vh - 420px);max-width:1400px;padding:50px 30px 30px}.container-productDetail[data-v-6ad88f37]{align-items:center;flex-direction:column;height:100%;justify-content:center}.container-productDetail[data-v-6ad88f37],.product-content[data-v-6ad88f37]{display:flex;width:100%}.left[data-v-6ad88f37]{align-items:center;width:100%}.content-variant[data-v-6ad88f37],.left[data-v-6ad88f37]{display:flex;flex-direction:column;justify-content:center}.content-variant[data-v-6ad88f37]{align-items:flex-start;margin-bottom:8px;width:auto}.aditional-images[data-v-6ad88f37],.main-images[data-v-6ad88f37],.youtuve-video[data-v-6ad88f37]{align-items:center;display:flex;justify-content:center;width:100%}.content-price[data-v-6ad88f37],.right[data-v-6ad88f37]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.content-addCart[data-v-6ad88f37],.content-category[data-v-6ad88f37],.content-name[data-v-6ad88f37]{justify-content:flex-start;width:100%}.content-addCart[data-v-6ad88f37],.content-category[data-v-6ad88f37],.content-name[data-v-6ad88f37],.quantity[data-v-6ad88f37]{align-items:center;display:flex;flex-direction:row}.quantity[data-v-6ad88f37]{justify-content:center}.section-suggesProduct[data-v-6ad88f37]{background:var(--background_color_1);margin-top:40px;width:100%}.content-quantity-boxes[data-v-6ad88f37]{align-items:center;display:flex;justify-content:flex-start;margin-bottom:30px;margin-top:30px;width:100%}.txt-tittle-quantity[data-v-6ad88f37]{color:var(--color_subtext);font-size:16px;font-weight:700;margin-right:10px;min-width:70px;width:auto}.box-quantity[data-v-6ad88f37]{width:75px}.box-quantity[data-v-6ad88f37],.box-quantity-btns[data-v-6ad88f37]{align-items:center;background-color:transparent;border:1px solid var(--border);color:var(--color_subtext);display:flex;height:50px;justify-content:center;text-align:center}.box-quantity-btns[data-v-6ad88f37]{flex-direction:column;width:25px}.btn-quantity[data-v-6ad88f37]{align-items:center;background-color:transparent;border-color:var(--border);border-right-width:1px;border-top-width:1px;color:var(--color_subtext);display:flex;height:25px;justify-content:center;width:25px}.material-design-icon>.material-design-icon__svg[data-v-6ad88f37]{fill:var(--color_icon);bottom:0;height:1em;position:absolute;width:1em}.content-networks[data-v-6ad88f37]{margin-bottom:30px}.content-networks[data-v-6ad88f37],.social-networks[data-v-6ad88f37]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;width:auto}.social-networks[data-v-6ad88f37]{margin-right:20px}.facebook-icon[data-v-6ad88f37],.instagram-icon[data-v-6ad88f37],.twitter-icon[data-v-6ad88f37],.youtube-icon[data-v-6ad88f37]{fill:var(--color_icon);cursor:pointer;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.facebook-icon[data-v-6ad88f37]:hover,.instagram-icon[data-v-6ad88f37]:hover,.twitter-icon[data-v-6ad88f37]:hover,.youtube-icon[data-v-6ad88f37]:hover{fill:#eb7025;color:#eb7025;transform:scale(1.5);transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.card-discont[data-v-6ad88f37]{background-color:var(--color_background_btn);color:var(--color_text_btn);font-size:16px;margin-left:5px;margin-right:5px;padding:2px 10px}@media (min-width:300px){.product-content[data-v-6ad88f37]{align-items:center;flex-direction:column;justify-content:center;width:90%}.content-direction-btns[data-v-6ad88f37]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.video[data-v-6ad88f37]{height:200px;width:100%}.content-name[data-v-6ad88f37],.content-price[data-v-6ad88f37]{margin-bottom:30px}.tab[data-v-6ad88f37]{display:flex;margin-top:40px;width:90%}.content-cart[data-v-6ad88f37]{flex-direction:column;padding-bottom:1px}.content-cart[data-v-6ad88f37],.content-free-shipping[data-v-6ad88f37]{align-items:center;background:#f4f4f4;display:flex;height:54px;justify-content:center;width:100%}.content-free-shipping[data-v-6ad88f37]{flex-direction:row;margin-top:20px}.content-options[data-v-6ad88f37]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.text-addCart[data-v-6ad88f37]{color:var(--color_text_btn)}.btn[data-v-6ad88f37],.btn-disabled[data-v-6ad88f37]{align-items:center;background-color:var(--color_background_btn);display:flex;flex-direction:row;height:54px;justify-content:center;transition:all .15s ease-in;width:100%}.btn[data-v-6ad88f37]:hover{background-color:#eb7025;color:#fff;transition:all .15s ease-in}.quantity[data-v-6ad88f37]{width:100%}.quantity_add[data-v-6ad88f37],.quantity_remove[data-v-6ad88f37]{align-items:center;background:#f4f4f4;display:flex;justify-content:center}.text-name[data-v-6ad88f37]{color:var(--color_text);font-size:var(--fontSizeTitle);font-weight:var(--fontWeighTitle);letter-spacing:0;line-height:1;margin-top:var(--marginTopTitle);text-transform:uppercase}.text-name[data-v-6ad88f37],.text-price[data-v-6ad88f37]{font-family:var(--font-style-1)!important}.text-price[data-v-6ad88f37]{color:var(--color_price);font-size:var(--fontSizePrice);font-weight:var(--fontWeighPrice);letter-spacing:-.03em;line-height:1}.text-promo[data-v-6ad88f37]{color:var(--color_subtext);font-size:15px;font-weight:700;-webkit-text-decoration:line-through;text-decoration:line-through}.text-promo[data-v-6ad88f37],.text-stock[data-v-6ad88f37]{font-family:var(--font-style-1)!important}.text-stock[data-v-6ad88f37]{color:#92bb35;font-size:14px;font-weight:600;letter-spacing:-.02em;line-height:1.42857143;margin-left:30px}.text-icon[data-v-6ad88f37]{align-items:center;cursor:pointer;display:flex;justify-content:center;width:34px}.text-quantity_value[data-v-6ad88f37]{align-items:center;border:none;display:flex;font-size:21px;font-weight:600;justify-content:center;padding:0 35px;text-align:center;width:100%}.text-addCart[data-v-6ad88f37]{font-family:var(--font-style-1)!important;font-size:12px;font-weight:600;text-transform:uppercase;white-space:nowrap}.minicart-icon[data-v-6ad88f37]{fill:var(--color_text_btn);color:var(--color_text_btn);margin-bottom:5px;margin-right:10px}.text-variant[data-v-6ad88f37]{color:var(--color_subtext);font-size:16px;font-weight:600;transition:all .6s ease-in-out}.text-option[data-v-6ad88f37],.text-variant[data-v-6ad88f37]{font-family:var(--font-style-1)!important}.text-option[data-v-6ad88f37]{color:var(--color_subtext);font-size:16px;font-weight:600;transition:all .6s ease-in-out}.banner-detail[data-v-6ad88f37]{display:none}.section-suggesProduct[data-v-6ad88f37]{width:90%}}@media (min-width:425px){.content-direction-btns[data-v-6ad88f37]{display:flex;flex-direction:column}}@media (min-width:480px){.content-cart[data-v-6ad88f37]{margin-right:2px;width:40%}.video[data-v-6ad88f37]{height:250px}}@media (min-width:768px){.banner-detail[data-v-6ad88f37]{background-color:var(--background_color_2);background-position:50%;background-repeat:no-repeat;background-size:cover;height:220px;justify-items:center}.banner-detail[data-v-6ad88f37],.crumb[data-v-6ad88f37]{align-items:center;display:flex;width:100%}.crumb[data-v-6ad88f37]{flex-direction:row;justify-content:center}.separatorCrumb[data-v-6ad88f37]{color:var(--breadCrumbs);cursor:pointer;font-size:9px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.separatorCrumb[data-v-6ad88f37],.txt-crumb[data-v-6ad88f37]{font-family:var(--font-style-1)!important}.txt-crumb[data-v-6ad88f37]{color:var(--breadCrumbs);cursor:pointer;font-size:15px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.s1[data-v-6ad88f37]:hover,.s2[data-v-6ad88f37]:hover{color:#eb7025;transition:all .25s ease}.content-cart[data-v-6ad88f37]{width:150px}.content-addCart[data-v-6ad88f37]{width:236px}.video[data-v-6ad88f37]{height:400px}.product-content[data-v-6ad88f37],.tab[data-v-6ad88f37]{width:95%}.product-content[data-v-6ad88f37]{grid-gap:1rem;align-items:flex-start;display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:flex-start;margin-top:20px}.right[data-v-6ad88f37]{margin-top:40px}.section-suggesProduct[data-v-6ad88f37]{width:95%}}@media (min-width:850px){.video[data-v-6ad88f37]{height:480px}}@media (min-width:1024px){.video[data-v-6ad88f37]{height:300px}.content-options[data-v-6ad88f37]{display:none}.tab[data-v-6ad88f37]{display:flex}.content-free-shipping[data-v-6ad88f37]{width:100%}.product-content[data-v-6ad88f37]{gap:4rem}.content-direction-btns[data-v-6ad88f37]{display:flex;flex-direction:column}}@media (min-width:1080px){.content-free-shipping[data-v-6ad88f37],.content-options[data-v-6ad88f37]{width:100%}.video[data-v-6ad88f37]{height:320px}}@media (min-width:1135px){.video[data-v-6ad88f37]{height:380px}}@media (min-width:1250px){.video[data-v-6ad88f37]{height:420px}}@media (min-width:1350px){.video[data-v-6ad88f37]{height:480px}}@media (min-width:1400px){.video[data-v-6ad88f37]{height:520px}.product-content[data-v-6ad88f37],.section-suggesProduct[data-v-6ad88f37],.tab[data-v-6ad88f37]{max-width:1400px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko-ProductDetail.vue?vue&type=template&id=6ad88f37&scoped=true&
var render = function render() {
  var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productDetail",
    style: [_vm.settingByTemplate10[0].detailsProduct, _vm.settingByTemplate10[0].settingGeneral, {
      '--font-style-1': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate10[0]) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.settingGeneral) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.fount_1) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Roboto'
    }]
  }, [_vm.loading ? _vm._ssrNode("<div class=\"container-productDetail-loading\" data-v-6ad88f37>", "</div>") : _vm._ssrNode("<div class=\"container-productDetail\" data-v-6ad88f37>", "</div>", [_vm._ssrNode("<div id=\"BgProductlistF\" class=\"banner-detail\" data-v-6ad88f37>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-6ad88f37>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/productos"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-6ad88f37>/</p> <p class=\"txt-crumb s2\" data-v-6ad88f37>" + _vm._ssrEscape("\n          " + _vm._s(_vm.data.detalle.nombre) + "\n        ") + "</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"product-content\" data-v-6ad88f37>", "</div>", [_vm._ssrNode("<div class=\"left\" data-v-6ad88f37>", "</div>", [_vm._ssrNode("<div class=\"main-images\" data-v-6ad88f37>", "</div>", [_c('productSlide', {
    staticClass: "w-auto h-auto object-cover overflow-hidden",
    attrs: {
      "photos": _vm.data.fotos,
      "photo": _vm.data.detalle.foto_cloudinary,
      "idYoutube": _vm.idYoutube
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"right\" data-v-6ad88f37>", "</div>", [_vm._ssrNode("<div class=\"content-items-right\" data-v-6ad88f37>", "</div>", [_vm._ssrNode("<div class=\"content-name\" data-v-6ad88f37><p class=\"text-name\" data-v-6ad88f37>" + _vm._ssrEscape(_vm._s(_vm.data.detalle.nombre)) + "</p></div> <div class=\"content-networks\" data-v-6ad88f37>" + (_vm.dataStore.tienda.red_facebook != null ? "<a target=\"_blank\" rel=\"noreferrer noopener\"" + _vm._ssrAttr("href", _vm.dataStore.tienda.red_facebook) + " class=\"social-networks\" data-v-6ad88f37><i data-v-6ad88f37><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"18px\" width=\"18px\" fill=\"currentColor\" viewBox=\"0 0 24 24\" class=\"facebook-icon\" data-v-6ad88f37><path d=\"m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z\" data-v-6ad88f37></path></svg></i></a>" : "<!---->") + " " + (_vm.dataStore.tienda.red_twitter != null ? "<a target=\"_blank\" rel=\"noreferrer noopener\"" + _vm._ssrAttr("href", _vm.dataStore.tienda.red_twitter) + " class=\"social-networks\" data-v-6ad88f37><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" fill=\"currentColor\" height=\"18px\" width=\"18px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" class=\"twitter-icon\" style=\"enable-background: new 0 0 512 512\" data-v-6ad88f37><g data-v-6ad88f37><g data-v-6ad88f37><path d=\"M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z\" data-v-6ad88f37></path></g></g></svg></a>" : "<!---->") + " " + (_vm.dataStore.tienda.red_instagram != null ? "<a target=\"_blank\" rel=\"noreferrer noopener\"" + _vm._ssrAttr("href", _vm.dataStore.tienda.red_instagram) + " class=\"social-networks\" data-v-6ad88f37><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"18px\" width=\"18px\" fill=\"currentColor\" viewBox=\"0 0 511 511.9\" class=\"instagram-icon\" data-v-6ad88f37><path d=\"m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0\" data-v-6ad88f37></path> <path d=\"m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0\" data-v-6ad88f37></path> <path d=\"m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0\" data-v-6ad88f37></path></svg></a>" : "<!---->") + " " + (_vm.dataStore.tienda.red_youtube != null ? "<a target=\"_blank\" rel=\"noreferrer noopener\"" + _vm._ssrAttr("href", _vm.dataStore.tienda.red_youtube) + " class=\"social-networks\" data-v-6ad88f37><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"19px\" width=\"19px\" fill=\"currentColor\" viewBox=\"-21 -117 682.66672 682\" class=\"youtube-icon\" data-v-6ad88f37><path d=\"m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0\" data-v-6ad88f37></path></svg></a>" : "<!---->") + "</div> <div class=\"content-price\" data-v-6ad88f37><p class=\"text-promo\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-6ad88f37>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor ? Math.trunc(_vm.salesData.precio / (1 - _vm.data.info.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p> <div class=\"flex flex-row justify-start items-center\" data-v-6ad88f37><p class=\"text-price\"" + _vm._ssrStyle(null, null, {
    display: _vm.salesData.precio ? '' : 'none'
  }) + " data-v-6ad88f37>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(_vm.salesData.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p> <p class=\"card-discont\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-6ad88f37>" + _vm._ssrEscape("\n                " + _vm._s(_vm.data.info.promocion_valor) + "% De Descuento\n              ") + "</p></div></div> "), this.data.detalle.con_variante > 0 ? _vm._ssrNode("<div class=\"content-variant\" data-v-6ad88f37>", "</div>", _vm._l(_vm.data.variantes, function (variant, index) {
    return _vm._ssrNode("<div data-v-6ad88f37>", "</div>", [_vm._ssrNode("<label for=\"variant name\" class=\"text-variant\" data-v-6ad88f37>" + _vm._ssrEscape("\n                " + _vm._s(variant.nombre) + ":\n              ") + "</label> "), _c('SelectGroup', {
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
  }), 0) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-direction-btns\" data-v-6ad88f37>", "</div>", [_vm._ssrNode((_vm.data.info.descripcion_corta ? "<div class=\"flex flex-col items-start\" data-v-6ad88f37><div class=\"txt-tittle-quantity\" data-v-6ad88f37>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('productdetail_informacion')) + "\n              ") + "</div> <p class=\"txt-quantity\" data-v-6ad88f37>" + _vm._ssrEscape(_vm._s(_vm.data.info.descripcion_corta)) + "</p></div>" : "<!---->") + " " + (_vm.userDropshipping.userName ? "<div class=\"w-full flex flex-row items-center my-8\" data-v-6ad88f37><p class=\"text-variant\" style=\"margin-right: 10px\" data-v-6ad88f37>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('productdetail_dropshipping')) + "\n              ") + "</p> <p class=\"txt-quantity\" data-v-6ad88f37>" + _vm._ssrEscape("\n                " + _vm._s(_vm.userDropshipping.userName) + "\n              ") + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div" + _vm._ssrClass("content-quantity-boxes", {
    disabled: !_vm.salesData.estado
  }) + " data-v-6ad88f37>", "</div>", [_vm._ssrNode("<div class=\"txt-tittle-quantity\" data-v-6ad88f37>Cantidad:</div> <div class=\"box-quantity\" data-v-6ad88f37><p class=\"txt-quantity\" data-v-6ad88f37>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p></div> "), _vm._ssrNode("<div class=\"box-quantity-btns\" data-v-6ad88f37>", "</div>", [_vm._ssrNode("<div class=\"btn-quantity btn1\" data-v-6ad88f37>", "</div>", [_c('FlechaUp-icon', {
    staticClass: "text-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn-quantity btn2\" data-v-6ad88f37>", "</div>", [_c('Flechadown-icon', {
    staticClass: "text-icon"
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"content-addCart\" data-v-6ad88f37>" + (!_vm.spent && this.salesData.estado == true && (_vm.data.info.tipo_servicio == null || _vm.data.info.tipo_servicio == '0') ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-6ad88f37><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"minicart-icon\" data-v-6ad88f37><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-6ad88f37></path></svg> <p class=\"text-addCart\" data-v-6ad88f37>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_añadiralcarrito')) + "\n                ") + "</p></button>" : !this.salesData.estado ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-6ad88f37><p class=\"text-addCart\" data-v-6ad88f37>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n                ") + "</p></button>" : !_vm.spent && _vm.data.info.tipo_servicio == '1' ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-6ad88f37><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"minicart-icon\" data-v-6ad88f37><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-6ad88f37></path></svg> <p class=\"text-addCart\" data-v-6ad88f37>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n                ") + "</p></button>" : _vm.spent ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-6ad88f37><p class=\"text-addCart\" data-v-6ad88f37>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                ") + "</p></button>" : "<!---->") + "</div>")], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tab\" data-v-6ad88f37>", "</div>", [_c('OptionTab', {
    attrs: {
      "dataStore": _vm.dataStore,
      "data": _vm.data,
      "envio": _vm.envio,
      "settingByTemplate10": _vm.settingByTemplate10
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-suggesProduct\" data-v-6ad88f37>", "</div>", [_c('KoSuggesProduct', {
    attrs: {
      "category": this.category.slice(0, 8),
      "cardProduct": _vm.settingByTemplate10[0].cardProduct,
      "settingGeneral": _vm.settingByTemplate10[0].settingGeneral
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/Ko-ProductDetail.vue?vue&type=template&id=6ad88f37&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/selectGroup.vue?vue&type=template&id=31d77afe&scoped=true&
var selectGroupvue_type_template_id_31d77afe_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-select"
  }, [_vm._ssrNode("<h4 class=\"title-input\" data-v-31d77afe>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</h4> "), _vm._ssrNode("<div class=\"select\" data-v-31d77afe>", "</div>", [_vm._ssrNode("<select name=\"format\"" + _vm._ssrStyle(null, _vm.value == -1 || !_vm.value ? 'color: #777' : '', null) + " data-v-31d77afe>", "</select>", [_vm._ssrNode("<option disabled=\"disabled\" data-v-31d77afe>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_seleccionarOpcion'))) + "</option> "), _vm._t("default")], 2)])], 2);
};
var selectGroupvue_type_template_id_31d77afe_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/_productdetails/selectGroup.vue?vue&type=template&id=31d77afe&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/selectGroup.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./components/template10/_productdetails/selectGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_selectGroupvue_type_script_lang_js_ = (selectGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/_productdetails/selectGroup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(839)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_selectGroupvue_type_script_lang_js_,
  selectGroupvue_type_template_id_31d77afe_scoped_true_render,
  selectGroupvue_type_template_id_31d77afe_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "31d77afe",
  "40c56a84"
  
)

/* harmony default export */ var selectGroup = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/OptTab.vue?vue&type=template&id=0806b916&scoped=true&
var OptTabvue_type_template_id_0806b916_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-opt-tab",
    style: [_vm.settingByTemplate10[0].detailsProduct, _vm.settingByTemplate10[0].setting10General]
  }, [_vm._ssrNode("<div class=\"head-content\" data-v-0806b916><div" + _vm._ssrClass("tab", _vm.selecttag == 1 ? 'show-select-active' : '') + " data-v-0806b916><p class=\"tittle\" data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_description'))) + "</p></div> <div" + _vm._ssrClass("tab", _vm.selecttag == 2 ? 'show-select-active' : '') + " data-v-0806b916><p class=\"tittle\" data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_opcionesPago'))) + "</p></div> <div" + _vm._ssrClass("tab", _vm.selecttag == 3 ? 'show-select-active' : '') + " data-v-0806b916><p class=\"tittle\" data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_opinionesEnvio'))) + "</p></div></div> <div class=\"content-tab\" data-v-0806b916>" + (_vm.focusbtn1 ? "<div class=\"item-content descripcion\" style=\"color: #777\" data-v-0806b916>" + _vm._s(_vm.data.info.descripcion) + "</div>" : "<!---->") + " " + (_vm.focusbtn2 ? "<div class=\"item-content opcpago\" data-v-0806b916><ul data-v-0806b916>" + (_vm.mediospago.consignacion == 1 ? "<li data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancaria'))) + "</h4> <p data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancariaMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.contraentrega == 1 ? "<li data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContra'))) + "</h4> <p data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContraMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.convenir == 1 ? "<li data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenir'))) + "</h4> <p data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenirMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.credibanco == 1 ? "<li data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionCredibanco'))) + "</h4> <p data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionCredibancoMsg')) + "\n          ") + "</p> <a href=\"https://www.credibanco.com/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-0806b916><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335270/Templates%20Modos%20de%20pago/Credibanco_lprsof.png\" alt=\"logo Credibanco\" class=\"logo-pasarela\" data-v-0806b916></a></li>" : "<!---->") + " " + (_vm.mediospago.daviplata == 1 ? "<li data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignaciondaviplata'))) + "</h4> <p data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignaciondaviplataMsg')) + "\n          ") + "</p> <img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333767/Templates%20Modos%20de%20pago/5c89c897e1917d9209a762af_davi_qn90y9.png\" alt=\"logo daviPlata\" class=\"logo-pasarela-daviplata\" data-v-0806b916></li>" : "<!---->") + " " + (_vm.mediospago.efecty == 1 ? "<li data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfecty'))) + "</h4> <p data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfectyMsg'))) + "</p> <a href=\"https://www.efecty.com.co/web/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-0806b916><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333023/Templates%20Modos%20de%20pago/Efecty-png_q3fvog.png\" alt=\"logo efecty\" class=\"logo-pasarela-efecty\" data-v-0806b916></a></li>" : "<!---->") + " " + (_vm.mediospago.mercado_pago == 1 ? "<li data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaMercado'))) + "</h4> <p data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaMercadoMsg')) + "\n          ") + "</p> <a href=\"https://www.mercadopago.com\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-0806b916><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606331948/Templates%20Modos%20de%20pago/mercadopago_jyalpa.png\" alt=\"logo mercadopago\" class=\"logo-pasarela-daviplata\" data-v-0806b916></a></li>" : "<!---->") + " " + (_vm.mediospago.nequi == 1 ? "<li data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionnequi'))) + "</h4> <p data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionnequiMsg')) + "\n          ") + "</p> <a href=\"https://www.nequi.com.co/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-0806b916><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333553/Templates%20Modos%20de%20pago/Nequi_by_Bancolombia_hxhkhb.png\" alt=\"logo nequi\" class=\"logo-pasarela-daviplata\" data-v-0806b916></a></li>" : "<!---->") + " " + (_vm.mediospago.payco == 1 ? "<li data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaEpayco'))) + "</h4> <p data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaEpaycoMsg')) + "\n          ") + "</p> <img src=\"https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png\" alt=\"Pasarela de pagos epayco\" class=\"logo-pasarela-payco\" data-v-0806b916></li>" : "<!---->") + " " + (_vm.mediospago.payu == 1 ? "<li data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaPayu'))) + "</h4> <p data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://www.payulatam.com/co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-0806b916><img src=\"https://ecommerce.payulatam.com/logos/PayU_CO.png\" alt=\"PayU\" border=\"0\" class=\"logo-pasarela-payu\" data-v-0806b916></a></li>" : "<!---->") + " " + (_vm.mediospago.wompi == 1 ? "<li data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionwompi'))) + "</h4> <p data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://wompi.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-0806b916><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335739/Templates%20Modos%20de%20pago/wompi_jxuitu.png\" alt=\"wompi\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-0806b916></a></li>" : "<!---->") + "</ul></div>" : "<!---->") + " " + (_vm.focusbtn3 ? "<div class=\"item-content opcenvio\" data-v-0806b916>" + (this.envios.envio_metodo ? "<div class=\"deliverys section\" data-v-0806b916><div class=\"content\" data-v-0806b916><h3 class=\"title-section\" data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_opinionesEnvio')) + "\n          ") + "</h3></div> " + (this.envios.envio_metodo === 'precio_ciudad' ? "<div class=\"wrapper-method\" data-v-0806b916><h4 class=\"capitalize\" data-v-0806b916>" + _vm._ssrEscape("\n            • " + _vm._s(this.envios.envio_metodo.replace('_', ' por ')) + "\n          ") + "</h4> <p class=\"description-method\" data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg1')) + "\n          ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'tarifa_plana' ? "<div class=\"wrapper-method\" data-v-0806b916><h4 class=\"capitalize\" data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(this.envios.envio_metodo.replace('_', ' ')) + "\n          ") + "</h4> <p class=\"description-method\" data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg2')) + "\n          ") + "</p> <p class=\"price\" data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('cart_precio')) + "\n            " + _vm._s(_vm._f("currency")(this.envios.valor, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'precio' ? "<div class=\"wrapper-method\" data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_precioTotalCompra'))) + "</h4> <p class=\"description-method\" data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_precioTotalCompraMsg')) + "\n          ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'gratis' ? "<div class=\"wrapper-method\" data-v-0806b916><h4 data-v-0806b916>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_gratis'))) + "</h4> <p class=\"description-method\" data-v-0806b916>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_gratisMsg')) + "\n          ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'sinEnvio' ? "<div class=\"wrapper-method\" data-v-0806b916><p class=\"description-method\" data-v-0806b916>Pasas a recoger tu compra</p></div>" : "<!---->") + "</div>" : "<!---->") + "</div>" : "<!---->") + "</div>")]);
};
var OptTabvue_type_template_id_0806b916_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/_productdetails/OptTab.vue?vue&type=template&id=0806b916&scoped=true&

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/OptTab.vue?vue&type=script&lang=js&

/* harmony default export */ var OptTabvue_type_script_lang_js_ = ({
  mixins: [formatCurrent["a" /* default */]],
  components: {},
  props: {
    dataStore: Object,
    data: {},
    envio: {},
    settingByTemplate10: Array
  },
  mounted() {},
  data() {
    return {
      medioEnvio: '',
      envioproducto: '',
      selecttag: 1,
      focusbtn1: true,
      focusbtn2: false,
      focusbtn3: false
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
  filters: {
    capitalize(value) {
      if (value) {
        value = value.toLowerCase();
        return value.replace(/^\w|\s\w/g, l => l.toUpperCase());
      }
    }
  },
  methods: {
    selectTag1() {
      this.selecttag = 1;
      this.focusbtn1 = true;
      this.focusbtn2 = false;
      this.focusbtn3 = false;
    },
    selectTag2() {
      this.selecttag = 2;
      this.focusbtn1 = false;
      this.focusbtn2 = true;
      this.focusbtn3 = false;
    },
    selectTag3() {
      this.selecttag = 3;
      this.focusbtn1 = false;
      this.focusbtn2 = false;
      this.focusbtn3 = true;
    }
  }
});
// CONCATENATED MODULE: ./components/template10/_productdetails/OptTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_OptTabvue_type_script_lang_js_ = (OptTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template10/_productdetails/OptTab.vue



function OptTab_injectStyles (context) {
  
  var style0 = __webpack_require__(841)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var OptTab_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_OptTabvue_type_script_lang_js_,
  OptTabvue_type_template_id_0806b916_scoped_true_render,
  OptTabvue_type_template_id_0806b916_scoped_true_staticRenderFns,
  false,
  OptTab_injectStyles,
  "0806b916",
  "0efbe4f7"
  
)

/* harmony default export */ var OptTab = (OptTab_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/suggestionsProducto.vue?vue&type=template&id=80da5564&scoped=true&
var suggestionsProductovue_type_template_id_80da5564_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.category.length ? _c('div', {
    staticClass: "wrapper-ProductFavoritos",
    style: [_vm.settingGeneral, _vm.cardProduct, {
      '--font-style-1': _vm.settingGeneral && _vm.settingGeneral.fount_1 ? _vm.settingGeneral.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"content-title-ProductFavoritos\" data-v-80da5564><p class=\"title-ProductFavoritos\" data-v-80da5564>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('home_destacadosMsg')) + "\n    ") + "</p></div> "), _c('KoSwipper', {
    attrs: {
      "products": _vm.category,
      "settingGeneral": _vm.settingGeneral,
      "cardProduct": _vm.cardProduct
    }
  })], 2) : _vm._e();
};
var suggestionsProductovue_type_template_id_80da5564_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/_productdetails/suggestionsProducto.vue?vue&type=template&id=80da5564&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productofavorito/productSlide.vue?vue&type=template&id=a3878c9e&scoped=true&
var productSlidevue_type_template_id_a3878c9e_scoped_true_render = function render() {
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
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-a3878c9e>", "</div>", _vm._l(this.products, function (product, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\" style=\"margin-right: 40px; height: auto\" data-v-a3878c9e>", "</div>", [_c('client-only', [_c('KoProductCard1', {
      attrs: {
        "product": product,
        "cardProduct": _vm.cardProduct,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1)], 1);
  }), 0)]);
};
var productSlidevue_type_template_id_a3878c9e_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/_productofavorito/productSlide.vue?vue&type=template&id=a3878c9e&scoped=true&

// EXTERNAL MODULE: ./components/template10/_productcard/ProductCard.vue + 4 modules
var ProductCard = __webpack_require__(169);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productofavorito/productSlide.vue?vue&type=script&lang=js&

/* harmony default export */ var productSlidevue_type_script_lang_js_ = ({
  name: 'productSlide-productFavorito',
  components: {
    KoProductCard1: ProductCard["a" /* default */]
  },
  props: {
    products: {},
    cardProduct: Object,
    settingGeneral: Object
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
// CONCATENATED MODULE: ./components/template10/_productofavorito/productSlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productofavorito_productSlidevue_type_script_lang_js_ = (productSlidevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template10/_productofavorito/productSlide.vue



function productSlide_injectStyles (context) {
  
  var style0 = __webpack_require__(843)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var productSlide_component = Object(componentNormalizer["a" /* default */])(
  _productofavorito_productSlidevue_type_script_lang_js_,
  productSlidevue_type_template_id_a3878c9e_scoped_true_render,
  productSlidevue_type_template_id_a3878c9e_scoped_true_staticRenderFns,
  false,
  productSlide_injectStyles,
  "a3878c9e",
  "15a02ff8"
  
)

/* harmony default export */ var productSlide = (productSlide_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/suggestionsProducto.vue?vue&type=script&lang=js&

/* harmony default export */ var suggestionsProductovue_type_script_lang_js_ = ({
  name: 'suggestionsProducto',
  props: {
    category: {},
    settingGeneral: Object,
    cardProduct: Object
  },
  components: {
    KoSwipper: productSlide
  }
});
// CONCATENATED MODULE: ./components/template10/_productdetails/suggestionsProducto.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_suggestionsProductovue_type_script_lang_js_ = (suggestionsProductovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template10/_productdetails/suggestionsProducto.vue



function suggestionsProducto_injectStyles (context) {
  
  var style0 = __webpack_require__(845)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var suggestionsProducto_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_suggestionsProductovue_type_script_lang_js_,
  suggestionsProductovue_type_template_id_80da5564_scoped_true_render,
  suggestionsProductovue_type_template_id_80da5564_scoped_true_staticRenderFns,
  false,
  suggestionsProducto_injectStyles,
  "80da5564",
  "db931f6c"
  
)

/* harmony default export */ var suggestionsProducto = (suggestionsProducto_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/productSlide.vue?vue&type=template&id=cc212430&scoped=true&
var productSlidevue_type_template_id_cc212430_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-carousel', {
    staticClass: "w-full h-full wrapper-carouse",
    attrs: {
      "indicator-position": "outside",
      "interval": "6000"
    }
  }, [_c('el-carousel-item', {
    staticClass: "w-full h-full"
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryQuality(_vm.photo, 850, 850),
      expression: "idCloudinaryQuality(photo, 850, 850)"
    }],
    staticClass: "photo",
    attrs: {
      "loading": "lazy",
      "alt": "Product img",
      "height": "550px",
      "width": "550px"
    }
  })]), _vm._v(" "), _vm._l(_vm.photos, function (photo) {
    return _c('el-carousel-item', {
      key: photo.id,
      staticClass: "w-full h-full"
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinaryQuality(photo.foto_cloudinary, 850, 850),
        expression: "idCloudinaryQuality(photo.foto_cloudinary, 850, 850)"
      }],
      staticClass: "photo",
      attrs: {
        "loading": "lazy",
        "alt": "Product img",
        "height": "550px",
        "width": "550px"
      }
    })]);
  }), _vm._v(" "), _vm.idYoutube && _vm.idYoutube !== '' ? _c('el-carousel-item', [_c('div', {
    staticClass: "youtube"
  }, [_c('button', {
    staticClass: "youtube__action_back",
    on: {
      "click": function ($event) {
        return _vm.changeSlide();
      }
    }
  }, [_c('i', {
    staticClass: "material-icons"
  })]), _vm._v(" "), _c('iframe', {
    attrs: {
      "height": "550px",
      "width": "550px",
      "src": `https://www.youtube.com/embed/${_vm.idYoutube}?rel=0&controls=0&showinfo=0`,
      "frameborder": "0",
      "allowfullscreen": ""
    }
  })])]) : _vm._e()], 2);
};
var productSlidevue_type_template_id_cc212430_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/_productdetails/productSlide.vue?vue&type=template&id=cc212430&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/productSlide.vue?vue&type=script&lang=js&

/* harmony default export */ var _productdetails_productSlidevue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'productSlide-details-10',
  props: ['photos', 'photo', 'idYoutube']
});
// CONCATENATED MODULE: ./components/template10/_productdetails/productSlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var template10_productdetails_productSlidevue_type_script_lang_js_ = (_productdetails_productSlidevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template10/_productdetails/productSlide.vue



function _productdetails_productSlide_injectStyles (context) {
  
  var style0 = __webpack_require__(847)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _productdetails_productSlide_component = Object(componentNormalizer["a" /* default */])(
  template10_productdetails_productSlidevue_type_script_lang_js_,
  productSlidevue_type_template_id_cc212430_scoped_true_render,
  productSlidevue_type_template_id_cc212430_scoped_true_staticRenderFns,
  false,
  _productdetails_productSlide_injectStyles,
  "cc212430",
  "d3077592"
  
)

/* harmony default export */ var _productdetails_productSlide = (_productdetails_productSlide_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko-ProductDetail.vue?vue&type=script&lang=js&







/* harmony default export */ var Ko_ProductDetailvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'Ko-ProductDetail-1',
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebookPixel: Object,
    settingByTemplate10: Array
  },
  components: {
    OptionTab: OptTab,
    SelectGroup: selectGroup,
    KoSuggesProduct: suggestionsProducto,
    productSlide: _productdetails_productSlide
  },
  mounted() {
    if (this.settingByTemplate10[0] && this.settingByTemplate10[0].detailsProduct && this.settingByTemplate10[0].detailsProduct.visible_bg == true) {
      this.setBg(1);
    } else {
      this.setBg(2);
    }
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
        title: '',
        description: '',
        quote: ''
      },
      sharingFacebook: '',
      userDropshipping: {
        userId: '',
        userName: ''
      },
      networks: [{
        network: 'facebook',
        icon: 'facebook-icon',
        color: '#1877f2'
      }, {
        network: 'whatsapp',
        icon: 'whatsapp-icon',
        color: '#25d366'
      }, {
        network: 'twitter',
        icon: 'twitter-icon',
        color: '#00acee'
      }]
    };
  },
  computed: {
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
    setBg(value) {
      if (this.settingByTemplate10) {
        if (!this.mobileCheck()) {
          var imagen = document.getElementById('BgProductlistF');
          if (imagen && imagen.style) {
            if (value == 1) {
              if (this.settingByTemplate10[0].detailsProduct.url_img_bg) {
                imagen.style.backgroundImage = `url(${this.settingByTemplate10[0].detailsProduct.url_img_bg})`;
              } else {
                imagen.style.backgroundImage = `url(https://res.cloudinary.com/brahyanr10/image/upload/v1614233821/Temp10/Productos/bg-beagrumb_gxvk1i.jpg)`;
              }
            } else if (value == 2) {
              imagen.style.backgroundImage = '';
            }
          }
        }
      }
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
          this.sharing.url = window.location.href;
          this.sharing.title = `Te recomiendo: ${response.data.detalle.nombre}`;
          this.sharing.description = `Te recomiendo: ${response.data.detalle.nombre} de la tienda ${this.dataStore.tienda.nombre}, Link del producto ${window.location.href}`;
          this.sharing.quote = `Te recomiendo: ${response.data.detalle.nombre} de la tienda ${this.dataStore.tienda.nombre}, Link del producto ${window.location.href}`;
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
    }
  },
  watch: {
    settingByTemplate10() {
      if (this.settingByTemplate10[0] && this.settingByTemplate10[0].detailsProduct && this.settingByTemplate10[0].detailsProduct.visible_bg == true) {
        this.setBg(1);
      } else {
        this.setBg(2);
      }
    },
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook;
      this.links[1].link = this.dataStore.tienda.red_twitter;
      this.links[2].link = this.dataStore.tienda.red_instagram;
      this.links[3].link = this.dataStore.tienda.red_youtube;
      this.links[4].link = this.dataStore.tienda.red_tiktok;
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
// CONCATENATED MODULE: ./components/template10/Ko-ProductDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var template10_Ko_ProductDetailvue_type_script_lang_js_ = (Ko_ProductDetailvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template10/Ko-ProductDetail.vue



function Ko_ProductDetail_injectStyles (context) {
  
  var style0 = __webpack_require__(849)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko_ProductDetail_component = Object(componentNormalizer["a" /* default */])(
  template10_Ko_ProductDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Ko_ProductDetail_injectStyles,
  "6ad88f37",
  "9d824ebc"
  
)

/* harmony default export */ var Ko_ProductDetail = __webpack_exports__["default"] = (Ko_ProductDetail_component.exports);

/***/ })

};;
//# sourceMappingURL=61.js.map