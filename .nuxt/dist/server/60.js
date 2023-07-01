exports.ids = [60];
exports.modules = {

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

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(832);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("ae2887cc", content, true, context)
};

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(834);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("14c9239f", content, true, context)
};

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(836);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("cf2c5cfa", content, true, context)
};

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(838);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7386b831", content, true, context)
};

/***/ }),

/***/ 448:
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
  add("f25eb8d2", content, true, context)
};

/***/ }),

/***/ 449:
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
  add("2492619c", content, true, context)
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

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_555d4a71_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_555d4a71_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_555d4a71_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_555d4a71_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_555d4a71_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "select[data-v-555d4a71]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;background-image:none;border:0!important;box-shadow:none;color:#303030;font-family:\"Roboto\",Helvetica,Arial,sans-serif!important;font-size:16px;font-weight:700;outline:0;transition:all .6s ease-in-out}select[data-v-555d4a71]::-ms-expand{display:none}.title-input[data-v-555d4a71]{color:#303030;font-family:\"Roboto\",Helvetica,Arial,sans-serif!important;font-size:16px;font-weight:700;transition:all .6s ease-in-out}.select[data-v-555d4a71]{background:#fff;border:2px solid #777;border-radius:var(--radius_btn);display:flex;height:40px;overflow:hidden;position:relative;width:15em}select[data-v-555d4a71]{background-color:#f8f8f8;cursor:pointer;flex:1;font-size:1em;padding:0 .5em 0 1em}.select[data-v-555d4a71]:after{color:#2c2930;content:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"Dark Gray\"><path d=\"M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z\"/></svg>');cursor:pointer;padding:.4em 1em;pointer-events:none;position:absolute;right:0;top:0;transition:all .25s ease}option[data-v-555d4a71]{color:#303030;font-size:16px;font-weight:400;transition:all .6s ease-in-out}option[data-v-555d4a71],option[data-v-555d4a71]:disabled{font-family:\"Roboto\",Helvetica,Arial,sans-serif!important}option[data-v-555d4a71]:disabled{background:#f8f8f8;color:#303030;font-size:16px;font-weight:700;transition:all .6s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptAcordion_vue_vue_type_style_index_0_id_5558beb7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(445);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptAcordion_vue_vue_type_style_index_0_id_5558beb7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptAcordion_vue_vue_type_style_index_0_id_5558beb7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptAcordion_vue_vue_type_style_index_0_id_5558beb7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptAcordion_vue_vue_type_style_index_0_id_5558beb7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-accordion[data-v-5558beb7]{align-items:flex-start;display:flex;flex-direction:column;justify-items:center;margin-top:40px;width:100%}.content-accordion[data-v-5558beb7] .el-collapse-item__header{color:#303030;font-family:var(--font-style-2);font-size:15px;font-weight:700}h3[data-v-5558beb7]{align-self:flex-start;color:#2c2930;font-size:15px;font-weight:600;text-transform:uppercase}h3[data-v-5558beb7],h4[data-v-5558beb7]{font-family:\"Roboto\",Helvetica,Arial,sans-serif!important}h4[data-v-5558beb7]{align-items:flex-start;color:#2c2930;display:flex;flex-direction:column;font-size:15px;font-weight:600;justify-content:center;line-height:1.42857143;margin-bottom:5px;width:100%}li p[data-v-5558beb7]{color:#333;font-family:\"Roboto\",Helvetica,Arial,sans-serif!important;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}img[data-v-5558beb7]{margin-top:15px;max-width:320px;width:50%}.editor[data-v-5558beb7]{width:100%}.editor[data-v-5558beb7] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-5558beb7] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-5558beb7] .el-tiptap-editor__content h1{font-family:var(--font-style-2);font-size:2em}.editor[data-v-5558beb7] .el-tiptap-editor__content h2{font-family:var(--font-style-2);font-size:1.5em}.editor[data-v-5558beb7] .el-tiptap-editor__content h3{font-family:var(--font-style-2);font-size:1.17em}.editor[data-v-5558beb7] .el-tiptap-editor__content h4{font-family:var(--font-style-2);font-size:1.12em}.editor[data-v-5558beb7] .el-tiptap-editor__content h5{font-family:var(--font-style-2);font-size:.83em}.editor[data-v-5558beb7] .el-tiptap-editor__content blockquote,.editor[data-v-5558beb7] .el-tiptap-editor__content code,.editor[data-v-5558beb7] .el-tiptap-editor__content em,.editor[data-v-5558beb7] .el-tiptap-editor__content li,.editor[data-v-5558beb7] .el-tiptap-editor__content ol,.editor[data-v-5558beb7] .el-tiptap-editor__content p,.editor[data-v-5558beb7] .el-tiptap-editor__content pre,.editor[data-v-5558beb7] .el-tiptap-editor__content s,.editor[data-v-5558beb7] .el-tiptap-editor__content span,.editor[data-v-5558beb7] .el-tiptap-editor__content strong,.editor[data-v-5558beb7] .el-tiptap-editor__content ul{font-family:var(--font-style-2)}.editor[data-v-5558beb7] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-5558beb7] .el-popper.el-tiptap-image-popper{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_6fe9ff38_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(446);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_6fe9ff38_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_6fe9ff38_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_6fe9ff38_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_6fe9ff38_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-tab[data-v-6fe9ff38]{align-items:center;border-bottom:1px solid #ededed;justify-content:center;margin-top:24px}.content-tab[data-v-6fe9ff38],.item-content[data-v-6fe9ff38]{display:flex;flex-direction:column;width:100%}.item-content[data-v-6fe9ff38]{align-items:flex-start;justify-content:flex-start;padding-bottom:16px}.content-tab[data-v-6fe9ff38] .el-tabs__item{color:#303030;font-family:var(--font-style-2)}.content-tab[data-v-6fe9ff38] .el-tabs__item.is-active{color:var(--hover_text)}.content-tab[data-v-6fe9ff38] .el-tabs__item:hover{color:var(--hover_text);cursor:pointer}.content-tab[data-v-6fe9ff38] .el-tabs__active-bar{background-color:var(--hover_text)}h3[data-v-6fe9ff38]{align-self:flex-start;color:#2c2930;font-size:15px;font-weight:600;text-transform:uppercase}h3[data-v-6fe9ff38],h4[data-v-6fe9ff38]{font-family:\"Roboto\",Helvetica,Arial,sans-serif!important}h4[data-v-6fe9ff38]{align-items:flex-start;color:#2c2930;display:flex;flex-direction:column;font-size:15px;font-weight:600;justify-content:center;line-height:1.42857143;margin-bottom:5px;width:100%}li p[data-v-6fe9ff38]{color:#333;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}.description-method[data-v-6fe9ff38],li p[data-v-6fe9ff38]{font-family:\"Roboto\",Helvetica,Arial,sans-serif!important}.description-method[data-v-6fe9ff38]{color:#333;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}img[data-v-6fe9ff38]{margin-top:15px;max-width:300px;width:30%}.editor[data-v-6fe9ff38]{width:100%}.editor[data-v-6fe9ff38] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-6fe9ff38] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-6fe9ff38] .el-tiptap-editor__content h1{font-family:var(--font-style-2);font-size:2em}.editor[data-v-6fe9ff38] .el-tiptap-editor__content h2{font-family:var(--font-style-2);font-size:1.5em}.editor[data-v-6fe9ff38] .el-tiptap-editor__content h3{font-family:var(--font-style-2);font-size:1.17em}.editor[data-v-6fe9ff38] .el-tiptap-editor__content h4{font-family:var(--font-style-2);font-size:1.12em}.editor[data-v-6fe9ff38] .el-tiptap-editor__content h5{font-family:var(--font-style-2);font-size:.83em}.editor[data-v-6fe9ff38] .el-tiptap-editor__content blockquote,.editor[data-v-6fe9ff38] .el-tiptap-editor__content code,.editor[data-v-6fe9ff38] .el-tiptap-editor__content em,.editor[data-v-6fe9ff38] .el-tiptap-editor__content li,.editor[data-v-6fe9ff38] .el-tiptap-editor__content ol,.editor[data-v-6fe9ff38] .el-tiptap-editor__content p,.editor[data-v-6fe9ff38] .el-tiptap-editor__content pre,.editor[data-v-6fe9ff38] .el-tiptap-editor__content s,.editor[data-v-6fe9ff38] .el-tiptap-editor__content span,.editor[data-v-6fe9ff38] .el-tiptap-editor__content strong,.editor[data-v-6fe9ff38] .el-tiptap-editor__content ul{font-family:var(--font-style-2)}.editor[data-v-6fe9ff38] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-6fe9ff38] .el-popper.el-tiptap-image-popper{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_4fe440e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(447);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_4fe440e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_4fe440e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_4fe440e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_4fe440e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-wrapper[data-v-4fe440e0]{position:relative;width:100%}.swiper-slide[data-v-4fe440e0]{width:100%}.swiper-pagination[data-v-4fe440e0] .swiper-pagination-bullet{background-color:grey}.swiper-pagination[data-v-4fe440e0] .swiper-pagination-bullet-active{background-color:var(--color_icon)}.btn[data-v-4fe440e0]{background:#000;border-radius:25px;cursor:pointer;padding:0 22px}.btn-icon[data-v-4fe440e0]{align-items:center;bottom:.125em;color:#fff;display:flex;font-size:45px;justify-content:center;width:100%}.btn-icon[data-v-4fe440e0]:hover{color:var(--color_icon)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_7404ef2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(448);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_7404ef2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_7404ef2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_7404ef2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_7404ef2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-ProductFavoritos[data-v-7404ef2c]{align-items:center;background:var(--background_color_1);box-sizing:border-box;padding:30px 0}.swiper-container[data-v-7404ef2c],.wrapper-ProductFavoritos[data-v-7404ef2c]{display:flex;flex-direction:column;justify-content:center;width:100%}.swiper-container[data-v-7404ef2c]{align-items:flex-start;max-width:1460px}.content-title-ProductFavoritos[data-v-7404ef2c]{align-items:center;display:flex;justify-content:flex-start;max-width:1460px;width:100%}.title-ProductFavoritos[data-v-7404ef2c]{color:var(--color_title);cursor:pointer;font-family:var(--font-style-2);font-size:18px;font-weight:700;line-height:1.4}@media (max-width:1300px){.swiper-container[data-v-7404ef2c]{padding:20px 8px}.content-title-ProductFavoritos[data-v-7404ef2c]{padding:10px}.wrapper-ProductFavoritos[data-v-7404ef2c]{padding:30px 10px}}@media (max-width:770px){.swiper-container[data-v-7404ef2c]{padding:20px 8px}.content-title-ProductFavoritos[data-v-7404ef2c]{padding:10px}}@media (max-width:380px){.swiper-container[data-v-7404ef2c]{padding:20px 5px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_61bd1b61_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(449);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_61bd1b61_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_61bd1b61_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_61bd1b61_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_61bd1b61_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-facebook[data-v-61bd1b61]{background-color:transparent;border:0;border-radius:5px;color:#1877f2;cursor:pointer;display:flex;justify-content:center;margin-right:20px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-facebook[data-v-61bd1b61]:hover{color:#000}.btn-whatsapp[data-v-61bd1b61]{background-color:transparent;border:0;border-radius:5px;color:#25d366;cursor:pointer;display:flex;justify-content:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-whatsapp[data-v-61bd1b61]:hover{color:#000}.wp-icon[data-v-61bd1b61]{bottom:3px;font-size:27px}.content-items-right[data-v-61bd1b61]{width:100%}.wrapper-productDetail[data-v-61bd1b61]{padding-top:20px}.container-productDetail-loading[data-v-61bd1b61],.wrapper-productDetail[data-v-61bd1b61]{align-items:center;background:var(--background_color_1);display:flex;justify-content:center;width:100%}.container-productDetail-loading[data-v-61bd1b61]{flex-direction:column;height:calc(100vh - 420px);max-width:1460px;padding:50px 30px 30px}.container-productDetail[data-v-61bd1b61]{align-items:center;display:flex;flex-direction:column;justify-content:center;max-width:1460px;padding:0 10px;width:100%}.crumb[data-v-61bd1b61]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:40px;margin-top:40px}.txt-crumb[data-v-61bd1b61]{color:var(--breadcrumbs);cursor:pointer;font-family:Arial,sans-serif;font-size:12px;line-height:14px;padding-right:6px;transition:all .25s ease}.s1[data-v-61bd1b61]:hover,.s2[data-v-61bd1b61]:hover{background-color:#2c2930;color:#fff;transition:all .25s ease}.product-content[data-v-61bd1b61]{display:flex;width:100%}.left[data-v-61bd1b61]{display:flex;flex-direction:column}.content-images[data-v-61bd1b61],.left[data-v-61bd1b61]{align-items:center;justify-content:center}.content-images[data-v-61bd1b61]{grid-gap:1rem;display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr));width:100%}.content-variant[data-v-61bd1b61]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;margin-bottom:20px;width:auto}.img-list[data-v-61bd1b61]{height:auto;-o-object-fit:contain;object-fit:contain;overflow:hidden;width:auto}.aditional-images[data-v-61bd1b61],.main-images[data-v-61bd1b61],.youtuve-video[data-v-61bd1b61]{align-items:center;display:flex;justify-content:center;width:100%}.right[data-v-61bd1b61]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start}.content-addCart[data-v-61bd1b61],.content-category[data-v-61bd1b61],.content-name[data-v-61bd1b61]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.content-price[data-v-61bd1b61]{grid-gap:0;align-items:center;display:grid;gap:0;grid-auto-flow:row;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr))}.quantity[data-v-61bd1b61]{align-items:center;display:flex;flex-direction:row;justify-content:center}.section-suggesProduct[data-v-61bd1b61]{margin-top:40px;width:100%}.responsive-purchase[data-v-61bd1b61]{display:none}@media (min-width:300px){.product-content[data-v-61bd1b61]{align-items:center;flex-direction:column;justify-content:center}.content-direction-btns[data-v-61bd1b61]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.left[data-v-61bd1b61]{width:90%}.video[data-v-61bd1b61]{height:200px;width:100%}.right[data-v-61bd1b61]{margin-top:4px;width:90%}.content-name[data-v-61bd1b61],.content-price[data-v-61bd1b61]{margin-bottom:25px}.tab[data-v-61bd1b61]{display:flex;display:none}.content-cart[data-v-61bd1b61]{background:var(--color_quantity_bg);flex-direction:column;padding-bottom:1px}.content-cart[data-v-61bd1b61],.content-free-shipping[data-v-61bd1b61]{align-items:center;display:flex;height:54px;justify-content:center;width:100%}.content-free-shipping[data-v-61bd1b61]{background:#f4f4f4;flex-direction:row;margin-top:20px}.content-options[data-v-61bd1b61]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.crumb[data-v-61bd1b61]{width:90%}.btn[data-v-61bd1b61],.btn-disabled[data-v-61bd1b61]{align-items:center;background-color:var(--color_background_btn);display:flex;flex-direction:row;height:54px;justify-content:center;transition:all .15s ease-in;width:100%}.btn[data-v-61bd1b61]:hover{background-color:var(--hover_bg)}.btn[data-v-61bd1b61]:hover,.btn:hover .text-addCart[data-v-61bd1b61]{color:var(--hover_text);transition:all .15s ease-in}.btn:hover .minicart-icon[data-v-61bd1b61]{fill:var(--hover_text);transition:all .15s ease-in}.quantity[data-v-61bd1b61]{width:100%}.quantity_add[data-v-61bd1b61],.quantity_remove[data-v-61bd1b61]{align-items:center;background:var(--color_quantity_bg);display:flex;justify-content:center}.text-category[data-v-61bd1b61]{color:var(--color_category);font-family:var(--font-style-2);font-size:16px;font-weight:700;margin-bottom:4px;transition:all .6s ease-in-out}.text-name[data-v-61bd1b61]{color:var(--color_title);font-weight:700;letter-spacing:0}.text-name[data-v-61bd1b61],.text-price[data-v-61bd1b61]{font-family:var(--font-style-2);font-size:36px;line-height:1}.text-price[data-v-61bd1b61]{color:var(--color_price);font-weight:600;letter-spacing:-.03em}.text-stock[data-v-61bd1b61]{color:#92bb35;font-size:14px}.text-price-promo[data-v-61bd1b61],.text-stock[data-v-61bd1b61]{font-family:var(--font-style-2);font-weight:600}.text-price-promo[data-v-61bd1b61]{color:var(--color_price);font-size:18px;letter-spacing:-.03em;line-height:1;-webkit-text-decoration:line-through;text-decoration:line-through}.text-numero-promo[data-v-61bd1b61]{color:#00a650;font-family:var(--font-style-2);font-size:14px;font-weight:600}.text-icon[data-v-61bd1b61]{cursor:pointer;width:34px}.text-icon[data-v-61bd1b61],.text-quantity_value[data-v-61bd1b61]{align-items:center;color:var(--color_quantity_num);display:flex;justify-content:center}.text-quantity_value[data-v-61bd1b61]{border:none;font-size:21px;font-weight:700;padding:0 35px;text-align:center;width:100%}.text-addCart[data-v-61bd1b61]{color:var(--color_text_btn);font-family:var(--font-style-2);font-size:15px;font-weight:900;letter-spacing:1px;line-height:54px;white-space:nowrap}.minicart-icon[data-v-61bd1b61]{fill:var(--color_text_btn);margin-right:20px}.text-shipping[data-v-61bd1b61]{color:var(--color_title);font-family:var(--font-style-2);font-size:14px;font-weight:700;line-height:1px;margin-left:10px}.text-variant[data-v-61bd1b61]{color:var(--color_title)}.text-option[data-v-61bd1b61],.text-variant[data-v-61bd1b61]{font-family:var(--font-style-2);font-size:16px;font-weight:700;transition:all .6s ease-in-out}.text-option[data-v-61bd1b61]{color:#303030}.text-option2[data-v-61bd1b61]{color:#303030;font-family:var(--font-style-2);font-size:15px;font-weight:500;transition:all .6s ease-in-out}}@media (min-width:450px){.content-direction-btns[data-v-61bd1b61]{flex-direction:row}.content-cart[data-v-61bd1b61]{margin-right:2px;width:40%}.video[data-v-61bd1b61]{height:250px}}@media (min-width:768px){.left[data-v-61bd1b61],.right[data-v-61bd1b61]{width:95%}.content-cart[data-v-61bd1b61]{width:150px}.content-addCart[data-v-61bd1b61]{width:236px}.video[data-v-61bd1b61]{height:400px}}@media (min-width:850px){.video[data-v-61bd1b61]{height:480px}}@media (min-width:1024px){.product-content[data-v-61bd1b61]{align-items:flex-start;flex-direction:row;justify-content:flex-start}.crumb[data-v-61bd1b61],.product-content[data-v-61bd1b61]{width:96%}.video[data-v-61bd1b61]{height:300px}.left[data-v-61bd1b61]{margin-right:50px;width:100%}.content-options[data-v-61bd1b61]{display:none}.tab[data-v-61bd1b61]{display:flex}.content-free-shipping[data-v-61bd1b61]{width:100%}.right[data-v-61bd1b61]{position:sticky;top:80px;width:55%}.content-direction-btns[data-v-61bd1b61]{display:flex;flex-direction:column}}@media (min-width:1080px){.content-free-shipping[data-v-61bd1b61],.content-options[data-v-61bd1b61]{width:100%}.video[data-v-61bd1b61]{height:320px}}@media (min-width:1135px){.video[data-v-61bd1b61]{height:380px}}@media (min-width:1250px){.video[data-v-61bd1b61]{height:420px}}@media (min-width:1280px){.content-direction-btns[data-v-61bd1b61]{display:flex;flex-direction:row}.right[data-v-61bd1b61]{width:50%}.product-content[data-v-61bd1b61]{width:100%}}@media (min-width:1350px){.video[data-v-61bd1b61]{height:480px}}@media (min-width:1460px){.video[data-v-61bd1b61]{height:520px}.right[data-v-61bd1b61]{width:55%}.crumb[data-v-61bd1b61],.product-content[data-v-61bd1b61]{width:100%}}@media (max-width:450px){.content-price[data-v-61bd1b61]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start}.content-direction-btns[data-v-61bd1b61]{display:none}.responsive-purchase[data-v-61bd1b61]{background:var(--background_color_1);bottom:0;box-shadow:0 0 30px 50px rgba(96,125,139,.096);display:inline;display:initial;position:fixed;right:0;width:100%;z-index:2}.ko-input[data-v-61bd1b61]{align-items:center;display:flex;justify-content:space-between;padding:8px 5px;width:100%}.quantity-resposive[data-v-61bd1b61]{display:flex;flex-direction:row}.text-quantity[data-v-61bd1b61]{align-self:center;color:rgba(21,20,57,.541);font-size:14px;font-weight:700;margin-right:5px}.quantity_remove_res[data-v-61bd1b61]{background:transparent;border:1px solid hsla(240,5%,52%,.342);border-bottom-left-radius:var(--radius_btn);border-right-style:none;border-top-left-radius:var(--radius_btn);height:44px;width:3em}.quantity_value_res[data-v-61bd1b61]{align-items:center;background:transparent;border-color:hsla(240,5%,52%,.342);border-style:solid none;border-width:1px;color:#000;display:flex;font-size:1em;height:44px;justify-content:center;padding-left:10px;padding-right:10px;width:2.5em}.quantity_add_res[data-v-61bd1b61]{background:transparent;border:1px solid hsla(240,5%,52%,.342);border-bottom-right-radius:var(--radius_btn);border-left-style:none;border-top-right-radius:var(--radius_btn);height:44px;width:3em}.icon_res[data-v-61bd1b61]{font-size:16px}.content_buy_action-responsive[data-v-61bd1b61]{display:flex;width:100%}.card-info-1-res[data-v-61bd1b61]{align-items:center;background:gray;border:1px solid gray;color:#fff;display:flex;justify-content:center}.btn-responsive[data-v-61bd1b61],.card-info-1-res[data-v-61bd1b61]{border-radius:var(--radius_btn);font-size:16px;padding:8px 10px;width:100%}.btn-responsive[data-v-61bd1b61]{background-color:var(--color_background_btn);border:1px solid var(--color_background_btn);color:var(--color_text_btn)}.card-icon-cart[data-v-61bd1b61]{color:var(--color_text_btn);cursor:pointer;font-size:20px;margin-right:4px}.container-alert[data-v-61bd1b61]{align-items:center;background-color:#fae84b;border:1px solid #e6d542;border-radius:6px;color:#000;display:flex;font-size:14px;justify-content:center;left:45px;position:absolute;top:-55px;width:80px}.alert[data-v-61bd1b61]{padding:5px;text-align:center}.features[data-v-61bd1b61]{border-top:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/Ko-ProductDetail.vue?vue&type=template&id=61bd1b61&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productDetail",
    style: [_vm.settingByTemplate9[0].detailsProduct, _vm.settingByTemplate9[0].setting9General]
  }, [_vm.loading ? _vm._ssrNode("<div class=\"container-productDetail-loading\" data-v-61bd1b61>", "</div>") : _vm._ssrNode("<div class=\"container-productDetail\"" + _vm._ssrStyle(null, [{
    '--font-style-2': this.settingByTemplate9 && this.settingByTemplate9[0].setting9General && this.settingByTemplate9[0].setting9General.fount_2 ? this.settingByTemplate9[0].setting9General.fount_2 : 'Roboto'
  }], null) + " data-v-61bd1b61>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-61bd1b61>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"txt-crumb\" data-v-61bd1b61>/</p> <p class=\"txt-crumb s2\" data-v-61bd1b61>" + _vm._ssrEscape(_vm._s(_vm.data.detalle.nombre)) + "</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"product-content\" data-v-61bd1b61>", "</div>", [_vm._ssrNode("<div class=\"left\" data-v-61bd1b61>", "</div>", [_vm._ssrNode("<div class=\"content-images\" data-v-61bd1b61>", "</div>", [_vm._ssrNode("<div class=\"main-images\" data-v-61bd1b61>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryQuality(_vm.data.detalle.foto_cloudinary, 850, 850),
      expression: "\n                idCloudinaryQuality(data.detalle.foto_cloudinary, 850, 850)\n              "
    }],
    staticClass: "img-list",
    attrs: {
      "alt": "Product Img"
    }
  }, [])]), _vm._ssrNode(" "), _vm._l(_vm.data.fotos, function (foto, itemsfoto) {
    return _vm._ssrNode("<div class=\"aditional-images\" data-v-61bd1b61>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinaryQuality(foto.foto_cloudinary, 850, 850),
        expression: "idCloudinaryQuality(foto.foto_cloudinary, 850, 850)"
      }],
      staticClass: "img-list",
      attrs: {
        "alt": "Product Img"
      }
    }, [])]);
  }), _vm._ssrNode(" <div class=\"youtuve-video\" data-v-61bd1b61><iframe" + _vm._ssrAttr("src", `https://www.youtube.com/embed/${_vm.idYoutube}?rel=0&controls=0&showinfo=0`) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\" class=\"video\"" + _vm._ssrStyle(null, null, {
    display: _vm.idYoutube ? '' : 'none'
  }) + " data-v-61bd1b61></iframe></div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"right\" data-v-61bd1b61>", "</div>", [_vm._ssrNode("<div class=\"content-items-right\" data-v-61bd1b61>", "</div>", [_vm._ssrNode("<div class=\"content-category\" data-v-61bd1b61><p class=\"text-category\" data-v-61bd1b61>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.detalle.categoria_producto.nombre_categoria_producto) + "\n            ") + "</p></div> <div class=\"content-name\" data-v-61bd1b61><p class=\"text-name\" data-v-61bd1b61>" + _vm._ssrEscape(_vm._s(_vm.data.detalle.nombre)) + "</p></div> <div class=\"content-price\" data-v-61bd1b61><p class=\"text-price-promo\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-61bd1b61>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor ? Math.trunc(_vm.salesData.precio / (1 - _vm.data.info.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p> <p class=\"text-numero-promo\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-61bd1b61>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.info.promocion_valor) + "% OFF\n            ") + "</p> <p class=\"text-price\"" + _vm._ssrStyle(null, null, {
    display: _vm.salesData.precio ? '' : 'none'
  }) + " data-v-61bd1b61>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.salesData.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p> " + (_vm.salesData.unidades > 0 ? "<p class=\"text-stock\" data-v-61bd1b61>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_stock')) + "\n            ") + "</p>" : "<!---->") + "</div> " + (_vm.data.info.descripcion_corta ? "<div class=\"flex flex-col mb-10 items-start\" data-v-61bd1b61><p class=\"text-variant\" data-v-61bd1b61>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_informacion'))) + "</p> <p class=\"text-option2\" data-v-61bd1b61>" + _vm._ssrEscape(_vm._s(_vm.data.info.descripcion_corta)) + "</p></div>" : "<!---->") + " "), this.data.detalle.con_variante > 0 ? _vm._ssrNode("<div class=\"content-variant\" data-v-61bd1b61>", "</div>", _vm._l(_vm.data.variantes, function (variant, index) {
    return _vm._ssrNode("<div data-v-61bd1b61>", "</div>", [_vm._ssrNode("<label for=\"variant name\" class=\"text-variant\" data-v-61bd1b61>" + _vm._ssrEscape("\n                " + _vm._s(variant.nombre) + ":\n              ") + "</label> "), _c('SelectGroup', {
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
  }), 0) : _vm._e(), _vm._ssrNode(" " + (_vm.userDropshipping.userName ? "<div class=\"w-full flex flex-row items-center my-8\" data-v-61bd1b61><p class=\"text-variant\" style=\"margin-right: 10px\" data-v-61bd1b61>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_dropshipping')) + "\n            ") + "</p> <p class=\"text-option2\" data-v-61bd1b61>" + _vm._ssrEscape("\n              " + _vm._s(_vm.userDropshipping.userName) + "\n            ") + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"flex flex-row mb-20 items-center\" data-v-61bd1b61>", "</div>", [_vm._ssrNode("<p class=\"text-variant\" style=\"margin-right: 10px\" data-v-61bd1b61>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_compartir')) + "\n            ") + "</p> "), _vm._ssrNode("<a" + _vm._ssrAttr("href", this.sharingFacebook) + " target=\"_blank\" rel=\"noreferrer noopener\" class=\"btn-facebook\" data-v-61bd1b61>", "</a>", [_c('facebook-icon', {
    staticClass: "wp-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"btn-whatsapp\" data-v-61bd1b61>", "</button>", [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-direction-btns\" data-v-61bd1b61>", "</div>", [_vm._ssrNode("<div class=\"content-cart\" data-v-61bd1b61>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("quantity", {
    disabled: !_vm.salesData.estado
  }) + " data-v-61bd1b61>", "</div>", [_vm._ssrNode("<button class=\"quantity_remove\" data-v-61bd1b61>", "</button>", [_c('menos-icon', {
    staticClass: "text-icon"
  })], 1), _vm._ssrNode(" <p class=\"text-quantity_value\" data-v-61bd1b61>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p> "), _vm._ssrNode("<button class=\"quantity_add\" data-v-61bd1b61>", "</button>", [_c('mas-icon', {
    staticClass: "text-icon"
  })], 1)], 2)]), _vm._ssrNode(" <div class=\"content-addCart\" data-v-61bd1b61>" + (!_vm.spent && this.salesData.estado == true && (_vm.data.info.tipo_servicio == null || _vm.data.info.tipo_servicio == '0') ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-61bd1b61><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"16\" viewBox=\"0 0 14 16\" class=\"minicart-icon\" data-v-61bd1b61><path d=\"M11,3V0H3V3H0V16H14V3H11ZM5,2H9V3H5V2Zm7,12H2V5H3V7H5V5H9V7h2V5h1v9Z\" data-v-61bd1b61></path></svg> <p class=\"text-addCart\" data-v-61bd1b61>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_añadiralcarrito')) + "\n                ") + "</p></button>" : !this.salesData.estado ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-61bd1b61><p class=\"text-addCart\" data-v-61bd1b61>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n                ") + "</p></button>" : !_vm.spent && _vm.data.info.tipo_servicio == '1' ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-61bd1b61><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"16\" viewBox=\"0 0 14 16\" class=\"minicart-icon\" data-v-61bd1b61><path d=\"M11,3V0H3V3H0V16H14V3H11ZM5,2H9V3H5V2Zm7,12H2V5H3V7H5V5H9V7h2V5h1v9Z\" data-v-61bd1b61></path></svg> <p class=\"text-addCart\" data-v-61bd1b61>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n                ") + "</p></button>" : _vm.spent ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-61bd1b61><p class=\"text-addCart\" data-v-61bd1b61>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                ") + "</p></button>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"responsive-purchase\" data-v-61bd1b61>", "</div>", [_vm._ssrNode("<div class=\"ko-input\" data-v-61bd1b61>", "</div>", [_vm._ssrNode("<div class=\"quantity-resposive\" data-v-61bd1b61>", "</div>", [_vm._ssrNode("<button class=\"quantity_remove_res\" data-v-61bd1b61>", "</button>", [_c('menos-icon', {
    staticClass: "icon_res"
  })], 1), _vm._ssrNode(" <p class=\"quantity_value_res\" data-v-61bd1b61>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p> "), _vm._ssrNode("<button class=\"quantity_add_res\" data-v-61bd1b61>", "</button>", [_c('mas-icon', {
    staticClass: "icon_res"
  })], 1), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "slide-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.quantityValue == _vm.maxQuantityValue,
      expression: "quantityValue == maxQuantityValue"
    }],
    staticClass: "container-alert"
  }, [_c('span', {
    staticClass: "alert"
  }, [_vm._v(_vm._s(_vm.$t('cart_ultimaUnidad')))])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div style=\"width: 100%; margin-left: 10px\" data-v-61bd1b61>", "</div>", [_vm._ssrNode((_vm.spent ? "<div class=\"content_buy_action-responsive\" data-v-61bd1b61><p class=\"card-info-1-res\" data-v-61bd1b61>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p></div>" : "<!---->") + " "), !_vm.spent && this.salesData.estado ? _vm._ssrNode("<button class=\"btn-responsive\" data-v-61bd1b61>", "</button>", [_c('cartArrowDown', {
    staticClass: "card-icon-cart"
  }), _vm._ssrNode(_vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgregar')) + "\n                "))], 2) : _vm._e(), _vm._ssrNode(" " + (!this.salesData.estado ? "<div class=\"content_buy_action-responsive\" data-v-61bd1b61><p class=\"card-info-1-res\" data-v-61bd1b61>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n                  ") + "</p></div>" : "<!---->"))], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-options\" data-v-61bd1b61>", "</div>", [_c('OptionAcordion', {
    attrs: {
      "dataStore": _vm.dataStore,
      "data": _vm.data,
      "envio": _vm.envio,
      "settingByGeneral": this.settingByTemplate9[0].setting9General
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tab\" data-v-61bd1b61>", "</div>", [_c('OptionTab', {
    attrs: {
      "dataStore": _vm.dataStore,
      "data": _vm.data,
      "envio": _vm.envio,
      "settingByGeneral": this.settingByTemplate9[0].setting9General
    }
  })], 1), _vm._ssrNode(" " + (_vm.envio && _vm.envio.titulo == 'Gratis' ? "<div class=\"content-free-shipping\" data-v-61bd1b61><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"28px\" height=\"28px\" viewBox=\"0 0 24 24\" fill=\"#2c2930\" class=\"transporte-icon mr-2\" data-v-61bd1b61><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-61bd1b61></path></svg> <p class=\"text-shipping\" data-v-61bd1b61>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_tarifaPrecio'))) + "</p></div>" : "<!---->"))], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-suggesProduct\" data-v-61bd1b61>", "</div>", [_c('KoSuggesProduct', {
    attrs: {
      "category": this.category.slice(0, 8),
      "cardProduct": this.settingByTemplate9[0].cardProduct
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/Ko-ProductDetail.vue?vue&type=template&id=61bd1b61&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productdetails/selectGroup.vue?vue&type=template&id=555d4a71&scoped=true&
var selectGroupvue_type_template_id_555d4a71_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-select"
  }, [_vm._ssrNode("<h4 class=\"title-input\" data-v-555d4a71>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</h4> "), _vm._ssrNode("<div class=\"select\" data-v-555d4a71>", "</div>", [_vm._ssrNode("<select name=\"format\"" + _vm._ssrStyle(null, _vm.value == -1 || !_vm.value ? 'color: #777' : '', null) + " data-v-555d4a71>", "</select>", [_vm._ssrNode("<option disabled=\"disabled\" data-v-555d4a71>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_seleccionarOpcion'))) + "</option> "), _vm._t("default")], 2)])], 2);
};
var selectGroupvue_type_template_id_555d4a71_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/_productdetails/selectGroup.vue?vue&type=template&id=555d4a71&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productdetails/selectGroup.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./components/template9/_productdetails/selectGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_selectGroupvue_type_script_lang_js_ = (selectGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/_productdetails/selectGroup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(831)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_selectGroupvue_type_script_lang_js_,
  selectGroupvue_type_template_id_555d4a71_scoped_true_render,
  selectGroupvue_type_template_id_555d4a71_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "555d4a71",
  "93a517f8"
  
)

/* harmony default export */ var selectGroup = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productdetails/OptAcordion.vue?vue&type=template&id=5558beb7&scoped=true&
var OptAcordionvue_type_template_id_5558beb7_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-accordion",
    style: _vm.settingByGeneral
  }, [_c('el-collapse', {
    staticClass: "w-full",
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
  }, [_vm.data.info.descripcion ? _c('div', {
    staticClass: "editor"
  }, [_c('el-tiptap', {
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
  })], 1) : _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('productdetail_notdescription')))])])]), _vm._v(" "), _c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('productdetail_opcionesPago'),
      "name": "2"
    }
  }, [_c('ul', [_vm.mediospago.consignacion == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_consignacionBancaria')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('productdetail_consignacionBancariaMsg')))])]) : _vm._e(), _vm._v(" "), _vm.mediospago.contraentrega == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_PagoContra')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('productdetail_PagoContraMsg')))])]) : _vm._e(), _vm._v(" "), _vm.mediospago.convenir == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_pagoConvenir')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('productdetail_pagoConvenirMsg')))])]) : _vm._e(), _vm._v(" "), _vm.mediospago.credibanco == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_ConsignacionCredibanco')))]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionCredibancoMsg')) + "\n          ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.daviplata == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_Consignaciondaviplata')))]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.$t('productdetail_ConsignaciondaviplataMsg')) + "\n          ")]), _vm._v(" "), _c('img', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.mercado_pago == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_PasarelaMercado')))]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.$t('productdetail_PasarelaMercadoMsg')) + "\n          ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.nequi == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_Consignacionnequi')))]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionnequiMsg')) + "\n          ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.payco == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_PasarelaEpayco')))]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.$t('productdetail_PasarelaEpaycoMsg')) + "\n          ")]), _vm._v(" "), _c('img', {
    staticClass: "logo-pasarela-payco",
    attrs: {
      "src": "https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png",
      "alt": "Pasarela de pagos epayco"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.mediospago.payu == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_PasarelaPayu')))]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.wompi == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_Consignacionwompi')))]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.wepay4u == 1 ? _c('li', [_c('h4', [_vm._v("WePay4U")]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.$t('text_pago_WePay4U')) + "\n          ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.tu_compra == 1 ? _c('li', [_c('h4', [_vm._v("Tucompra")]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.$t('text_pago_Tucompra')) + "\n          ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.flow == 1 ? _c('li', [_c('h4', [_vm._v("Flow")]), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.$t('text_pago_flowInfo')) + "\n          ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e()])]), _vm._v(" "), _c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('productdetail_opinionesEnvio'),
      "name": "3"
    }
  }, [this.envios.envio_metodo ? _c('div', [_c('div', {
    staticClass: "content"
  }, [_c('h3', {
    staticClass: "title-section"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('productdetail_opinionesEnvio')) + "\n          ")])]), _vm._v(" "), this.envios.envio_metodo === 'precio_ciudad' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', [_vm._v("• " + _vm._s(this.envios.envio_metodo.replace('_', ' por ')))]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg1')) + "\n          ")])]) : _vm._e(), _vm._v(" "), this.envios.envio_metodo === 'tarifa_plana' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', [_vm._v("\n            " + _vm._s(this.envios.envio_metodo.replace('_', ' ')) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg2')) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('cart_precio')) + "\n            " + _vm._s(_vm._f("currency")(this.envios.valor, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ")])]) : _vm._e(), _vm._v(" "), this.envios.envio_metodo === 'precio' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_precioTotalCompra')))]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('productdetail_precioTotalCompraMsg')) + "\n          ")])]) : _vm._e(), _vm._v(" "), this.envios.envio_metodo === 'gratis' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_gratis')))]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('productdetail_gratisMsg')) + "\n          ")])]) : _vm._e(), _vm._v(" "), this.envios.envio_metodo === 'SinEnvio' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('p', {
    staticClass: "description-method"
  }, [_vm._v("Pasas a recoger tu compra")])]) : _vm._e()]) : _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('productdetail_notShipping')))])])])], 1)], 1);
};
var OptAcordionvue_type_template_id_5558beb7_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/_productdetails/OptAcordion.vue?vue&type=template&id=5558beb7&scoped=true&

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(67);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productdetails/OptAcordion.vue?vue&type=script&lang=js&


/* harmony default export */ var OptAcordionvue_type_script_lang_js_ = ({
  mixins: [elemenTiptap["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    dataStore: Object,
    data: {},
    envio: {},
    settingByGeneral: {
      type: Object,
      default: null
    }
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
    envios() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.data.medioEnvio = JSON.parse(this.dataStore.medios_envio.valores);
      return this.data.medioEnvio;
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
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
// CONCATENATED MODULE: ./components/template9/_productdetails/OptAcordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_OptAcordionvue_type_script_lang_js_ = (OptAcordionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template9/_productdetails/OptAcordion.vue



function OptAcordion_injectStyles (context) {
  
  var style0 = __webpack_require__(833)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var OptAcordion_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_OptAcordionvue_type_script_lang_js_,
  OptAcordionvue_type_template_id_5558beb7_scoped_true_render,
  OptAcordionvue_type_template_id_5558beb7_scoped_true_staticRenderFns,
  false,
  OptAcordion_injectStyles,
  "5558beb7",
  "52f7747d"
  
)

/* harmony default export */ var OptAcordion = (OptAcordion_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productdetails/OptTab.vue?vue&type=template&id=6fe9ff38&scoped=true&
var OptTabvue_type_template_id_6fe9ff38_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-tab",
    style: _vm.settingByGeneral
  }, [_c('el-tabs', {
    staticClass: "w-full"
  }, [_c('el-tab-pane', {
    attrs: {
      "label": _vm.$t('productdetail_description')
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
  })], 1) : _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('productdetail_notdescription')))])])])]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": _vm.$t('productdetail_opcionesPago')
    }
  }, [_c('div', {
    staticClass: "item-content"
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.flow == 1 ? _c('li', [_c('h4', [_vm._v("Flow")]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('text_pago_flowInfo')) + "\n            ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e()])])]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": _vm.$t('productdetail_opinionesEnvio')
    }
  }, [_c('div', {
    staticClass: "item-content"
  }, [this.envios.envio_metodo ? _c('div', [_c('div', {
    staticClass: "content"
  }, [_c('h3', {
    staticClass: "title-section"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_opinionesEnvio')) + "\n            ")])]), _vm._v(" "), this.envio.titulo == 'Tarifa por ciudad' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', {
    staticClass: "capitalize"
  }, [_vm._v("\n              • " + _vm._s(this.envios.envio_metodo.replace('_', ' por ')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg1')) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envio.titulo == 'Tarifa plana' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', {
    staticClass: "capitalize"
  }, [_vm._v("\n              " + _vm._s(this.envios.envio_metodo.replace('_', ' ')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg2')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('cart_precio')) + "\n              " + _vm._s(_vm._f("currency")(this.envios.valor, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envio.titulo == 'Tarifa por precio' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_precioTotalCompra')))]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_precioTotalCompraMsg')) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envio.titulo == 'Envío gratis' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_gratis')))]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_gratisMsg')) + "\n            ")])]) : _vm._e()]) : _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('productdetail_notShipping')))])])])])], 1)], 1);
};
var OptTabvue_type_template_id_6fe9ff38_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/_productdetails/OptTab.vue?vue&type=template&id=6fe9ff38&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productdetails/OptTab.vue?vue&type=script&lang=js&


/* harmony default export */ var OptTabvue_type_script_lang_js_ = ({
  mixins: [elemenTiptap["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    dataStore: Object,
    data: {},
    envio: {},
    settingByGeneral: {
      type: Object,
      default: null
    }
  },
  computed: {
    mediospago() {
      return this.dataStore.medios_pago;
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
  }
});
// CONCATENATED MODULE: ./components/template9/_productdetails/OptTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_OptTabvue_type_script_lang_js_ = (OptTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template9/_productdetails/OptTab.vue



function OptTab_injectStyles (context) {
  
  var style0 = __webpack_require__(835)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var OptTab_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_OptTabvue_type_script_lang_js_,
  OptTabvue_type_template_id_6fe9ff38_scoped_true_render,
  OptTabvue_type_template_id_6fe9ff38_scoped_true_staticRenderFns,
  false,
  OptTab_injectStyles,
  "6fe9ff38",
  "081c87f1"
  
)

/* harmony default export */ var OptTab = (OptTab_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productdetails/suggestionsProducto.vue?vue&type=template&id=7404ef2c&scoped=true&
var suggestionsProductovue_type_template_id_7404ef2c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.category.length ? _c('div', {
    staticClass: "wrapper-ProductFavoritos",
    style: _vm.cardProduct
  }, [_vm._ssrNode("<div class=\"content-title-ProductFavoritos\" data-v-7404ef2c><p class=\"title-ProductFavoritos\" data-v-7404ef2c>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('home_destacadosMsg')) + "\n    ") + "</p></div> "), _c('KoSwipper', {
    attrs: {
      "products": _vm.category
    }
  })], 2) : _vm._e();
};
var suggestionsProductovue_type_template_id_7404ef2c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/_productdetails/suggestionsProducto.vue?vue&type=template&id=7404ef2c&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productofavorito/productSlide.vue?vue&type=template&id=4fe440e0&scoped=true&
var productSlidevue_type_template_id_4fe440e0_scoped_true_render = function render() {
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
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-4fe440e0>", "</div>", _vm._l(this.products, function (product, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\" data-v-4fe440e0>", "</div>", [_c('client-only', [_c('KoProductCard1', {
      attrs: {
        "product": product
      }
    })], 1)], 1);
  }), 0)]);
};
var productSlidevue_type_template_id_4fe440e0_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/_productofavorito/productSlide.vue?vue&type=template&id=4fe440e0&scoped=true&

// EXTERNAL MODULE: ./components/template9/_productcard/ProductCard.vue + 4 modules
var ProductCard = __webpack_require__(221);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productofavorito/productSlide.vue?vue&type=script&lang=js&

/* harmony default export */ var productSlidevue_type_script_lang_js_ = ({
  name: 'productSlide-productFavorito',
  components: {
    KoProductCard1: ProductCard["a" /* default */]
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
          2000: {
            slidesPerView: 3,
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
// CONCATENATED MODULE: ./components/template9/_productofavorito/productSlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productofavorito_productSlidevue_type_script_lang_js_ = (productSlidevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template9/_productofavorito/productSlide.vue



function productSlide_injectStyles (context) {
  
  var style0 = __webpack_require__(837)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var productSlide_component = Object(componentNormalizer["a" /* default */])(
  _productofavorito_productSlidevue_type_script_lang_js_,
  productSlidevue_type_template_id_4fe440e0_scoped_true_render,
  productSlidevue_type_template_id_4fe440e0_scoped_true_staticRenderFns,
  false,
  productSlide_injectStyles,
  "4fe440e0",
  "313a1e04"
  
)

/* harmony default export */ var productSlide = (productSlide_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productdetails/suggestionsProducto.vue?vue&type=script&lang=js&

/* harmony default export */ var suggestionsProductovue_type_script_lang_js_ = ({
  name: 'suggestionsProducto',
  props: {
    category: {},
    cardProduct: {}
  },
  components: {
    KoSwipper: productSlide
  }
});
// CONCATENATED MODULE: ./components/template9/_productdetails/suggestionsProducto.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_suggestionsProductovue_type_script_lang_js_ = (suggestionsProductovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template9/_productdetails/suggestionsProducto.vue



function suggestionsProducto_injectStyles (context) {
  
  var style0 = __webpack_require__(839)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var suggestionsProducto_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_suggestionsProductovue_type_script_lang_js_,
  suggestionsProductovue_type_template_id_7404ef2c_scoped_true_render,
  suggestionsProductovue_type_template_id_7404ef2c_scoped_true_staticRenderFns,
  false,
  suggestionsProducto_injectStyles,
  "7404ef2c",
  "5943f390"
  
)

/* harmony default export */ var suggestionsProducto = (suggestionsProducto_component.exports);
// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/Ko-ProductDetail.vue?vue&type=script&lang=js&







/* harmony default export */ var Ko_ProductDetailvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'Ko-ProductDetail-1',
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebookPixel: Object,
    settingByTemplate9: Array
  },
  components: {
    OptionAcordion: OptAcordion,
    OptionTab: OptTab,
    SelectGroup: selectGroup,
    KoSuggesProduct: suggestionsProducto
    // ProductSlide,
    // Zoom,
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
    productsData(value) {
      this.getDataProduct();
    },
    envios(value) {
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
// CONCATENATED MODULE: ./components/template9/Ko-ProductDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var template9_Ko_ProductDetailvue_type_script_lang_js_ = (Ko_ProductDetailvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template9/Ko-ProductDetail.vue



function Ko_ProductDetail_injectStyles (context) {
  
  var style0 = __webpack_require__(841)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko_ProductDetail_component = Object(componentNormalizer["a" /* default */])(
  template9_Ko_ProductDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Ko_ProductDetail_injectStyles,
  "61bd1b61",
  "a72881c8"
  
)

/* harmony default export */ var Ko_ProductDetail = __webpack_exports__["default"] = (Ko_ProductDetail_component.exports);

/***/ })

};;
//# sourceMappingURL=60.js.map