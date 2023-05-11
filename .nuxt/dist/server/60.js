exports.ids = [60];
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
  add("714661a1", content, true, context)
};

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_601aeb3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_601aeb3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_601aeb3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_601aeb3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_601aeb3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-image[data-v-601aeb3e],.product-image-soldOut[data-v-601aeb3e]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.product-image-soldOut[data-v-601aeb3e]{filter:grayscale(100%)}.producto[data-v-601aeb3e]{background:var(--background_color_1);cursor:pointer;justify-content:flex-start}.datos-producto[data-v-601aeb3e],.producto[data-v-601aeb3e]{align-items:center;display:flex;flex-direction:column;height:100%;width:100%}.datos-producto[data-v-601aeb3e]{cursor:default;justify-content:space-between;margin:6px 10px}.container[data-v-601aeb3e]{height:100%;max-width:100%;position:relative}.image[data-v-601aeb3e]{height:auto;width:100%}.icon[data-v-601aeb3e]{color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.icon[data-v-601aeb3e],.icons-hover[data-v-601aeb3e]{--tw-text-opacity:1}.icons-hover[data-v-601aeb3e]{grid-gap:0;color:#3f3f3f;color:rgba(63,63,63,var(--tw-text-opacity));display:grid;font:inherit;font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.icon-show-mobile[data-v-601aeb3e]{fill:#fff}.tittle[data-v-601aeb3e]{align-items:center;display:flex;justify-content:center;width:100%}.card-title[data-v-601aeb3e],.tittle[data-v-601aeb3e]{font-family:var(--font-style-1)!important}.card-title[data-v-601aeb3e]{color:var(--color_title);font-size:var(--fontSizeTitle);font-weight:var(--fontWeighTitle);height:100%;max-height:58px;min-height:58px;padding-top:10px;text-align:center}.card-title[data-v-601aeb3e],.card-title[data-v-601aeb3e]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.card-title[data-v-601aeb3e]:hover{color:var(--hover_text)}.separator-price[data-v-601aeb3e]{color:var(--color_price);font-size:var(--fontSizePretitle);margin-top:10px}.separator-price[data-v-601aeb3e],.text-price[data-v-601aeb3e]{font-family:var(--font-style-1)!important}.text-price[data-v-601aeb3e]{color:var(--color_price);font-size:var(--fontSizePretitle);font-weight:var(--fontWeighPretitle);margin-top:10px;text-align:left;white-space:nowrap}.text-free[data-v-601aeb3e]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.icon-overlay-free[data-v-601aeb3e]{color:#222}.text-sould[data-v-601aeb3e]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.txt-free[data-v-601aeb3e]{font-size:15px;font-weight:600}.btn-content[data-v-601aeb3e]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.btn[data-v-601aeb3e]{background-color:var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);height:40px;margin-bottom:20px;margin-top:20px;padding-left:20px;padding-right:20px;width:auto}.btn[data-v-601aeb3e],.btn[data-v-601aeb3e]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn[data-v-601aeb3e]:hover{background-color:var(--hover_Bg_btn)}.txt-btn[data-v-601aeb3e]{color:var(--color_text_btn);font-size:12px;text-transform:uppercase}.icon-shop[data-v-601aeb3e]{fill:var(--color_text_btn);margin-bottom:5px;margin-right:5px}.cart-Shop-pro[data-v-601aeb3e]{background:red;color:#fff;font-size:12px;left:5px;padding:1px 5px;position:absolute;right:auto;text-transform:uppercase;top:5px}.text-cart[data-v-601aeb3e]{display:block}.txt-add[data-v-601aeb3e]{color:#fff;font-size:15px;font-weight:600;letter-spacing:1px}@media (min-width:300px){.overlay-top[data-v-601aeb3e]{--tw-bg-opacity:1;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);height:40px;overflow:hidden;position:absolute;right:0;top:10%;transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:45px}.overlay-free[data-v-601aeb3e]{background-color:#222;border-radius:.25rem;height:10%;overflow:hidden;position:absolute;position:absolute;right:0;top:0;transition:.5s ease;width:110px}.text-free[data-v-601aeb3e]{font-size:75%}.overlay-polygon[data-v-601aeb3e]{background-color:transparent;height:5%;right:15px;top:10%;width:5%}.overlay-polygon[data-v-601aeb3e],.overlay-sould[data-v-601aeb3e]{overflow:hidden;position:absolute}.overlay-sould[data-v-601aeb3e]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:60%;right:0;top:0;transition:.5s ease;width:35%}.svg-sould-out[data-v-601aeb3e]{height:40px;width:40px}.content-price[data-v-601aeb3e]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separator-price[data-v-601aeb3e]{margin-left:1px;margin-right:1px}}@media (min-width:768px){.text-free[data-v-601aeb3e]{font-size:100%}.svg-sould-out[data-v-601aeb3e]{height:60px;width:60px}.separator-price[data-v-601aeb3e]{margin-left:4px;margin-right:4px}}@media (min-width:1280px){.icon[data-v-601aeb3e]{margin-top:0}.overlay-top[data-v-601aeb3e]{height:40px;left:100%;right:0;top:35px;width:0}.product-image[data-v-601aeb3e],.product-image-soldOut[data-v-601aeb3e]{height:360px}.container:hover .overlay-top[data-v-601aeb3e]{left:85%;width:40px}.overlay-free[data-v-601aeb3e]{height:35px;left:100%;right:0;top:0;transition:.5s ease;width:0}.container:hover .overlay-free[data-v-601aeb3e]{left:68%;transition-delay:.7s;width:32%}.overlay-polygon[data-v-601aeb3e]{height:5%;left:100%;right:0;top:35px;width:0}.container:hover .overlay-polygon[data-v-601aeb3e]{left:90%;transition-delay:.95s;width:5%}.overlay-sould[data-v-601aeb3e]{height:20%;left:100%;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-601aeb3e]{left:65%;transition-delay:.7s;width:35%}.svg-sould-out[data-v-601aeb3e]{height:60px;width:60px}}@media (min-width:1920px){.overlay-top[data-v-601aeb3e]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-601aeb3e]{left:86%;width:40px}}@media (min-width:2560px){.overlay-top[data-v-601aeb3e]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-601aeb3e]{left:88%;width:40px}.overlay-sould[data-v-601aeb3e]{height:20%;left:100%;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-601aeb3e]{left:75%;transition-delay:.7s;width:30%}}@media (min-width:3000px){.overlay-top[data-v-601aeb3e]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-601aeb3e]{left:89%;width:40px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productcard/ProductCard.vue?vue&type=template&id=601aeb3e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto",
    style: [_vm.cardProduct, _vm.settingGeneral, {
      '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"container\" data-v-601aeb3e>", "</div>", [_c('nuxt-link', {
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
  })], 1), _vm._ssrNode(" " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-top\" data-v-601aeb3e><div class=\"icons-hover\" data-v-601aeb3e><div class=\"transport-icon\" data-v-601aeb3e>" + (!_vm.getFreeShipping && !_vm.soldOut ? "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" fill=\"#333\" class=\"transporte-icon\" data-v-601aeb3e><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-601aeb3e></path></svg>" : "<!---->") + "</div></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-free\" data-v-601aeb3e><div class=\"text-free\" data-v-601aeb3e><p class=\"txt-free\" data-v-601aeb3e>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardGratis'))) + "</p></div></div>" : "<!---->") + " " + (this.product.tag_promocion == 1 && this.product.promocion_valor ? "<div class=\"cart-Shop-pro\" data-v-601aeb3e><div class=\"text-cart\" data-v-601aeb3e><p data-v-601aeb3e>" + _vm._ssrEscape(_vm._s(this.product.promocion_valor) + "% OFF") + "</p></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-polygon\" data-v-601aeb3e><svg width=\"12px\" height=\"12px\" viewBox=\"0 0 255 255\" class=\"icon-overlay-free\" data-v-601aeb3e><polygon points=\"0,0 127.5,127.5 255,0\" class=\"fill-current\" data-v-601aeb3e></polygon></svg></div>" : "<!---->") + " " + (_vm.soldOut ? "<div class=\"overlay-sould\" data-v-601aeb3e><div class=\"text-sould\" data-v-601aeb3e><svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" viewBox=\"0 0 512 512\" class=\"svg-sould-out\" data-v-601aeb3e><g data-v-601aeb3e><g data-v-601aeb3e><path d=\"m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z\" fill=\"#cd3232\" data-v-601aeb3e></path></g> <g data-v-601aeb3e><path d=\"m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#cd3232\" data-v-601aeb3e></path></g> <g data-v-601aeb3e><path d=\"m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#ff4646\" data-v-601aeb3e></path></g> <g data-v-601aeb3e><circle cx=\"96\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-601aeb3e></circle></g> <g data-v-601aeb3e><circle cx=\"384\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-601aeb3e></circle></g> <g data-v-601aeb3e><path d=\"m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z\" fill=\"#463c4b\" data-v-601aeb3e></path></g> <g data-v-601aeb3e><circle cx=\"240\" cy=\"92.457\" fill=\"#ff4646\" r=\"24\" data-v-601aeb3e></circle></g> <g data-v-601aeb3e><g data-v-601aeb3e><path d=\"m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z\" fill=\"#32283c\" data-v-601aeb3e></path></g> <g data-v-601aeb3e><path d=\"m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#32283c\" data-v-601aeb3e></path></g> <g data-v-601aeb3e><path d=\"m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#e6e6eb\" data-v-601aeb3e></path></g> <g data-v-601aeb3e><path d=\"m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z\" fill=\"#32283c\" data-v-601aeb3e></path></g> <g data-v-601aeb3e><path d=\"m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z\" fill=\"#32283c\" data-v-601aeb3e></path></g> <g data-v-601aeb3e><path d=\"m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z\" fill=\"#e6e6eb\" data-v-601aeb3e></path></g> <path d=\"m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" fill=\"#e6e6eb\" data-v-601aeb3e></path></g></g></svg></div></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"datos-producto\" data-v-601aeb3e>", "</div>", [_c('nuxt-link', {
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
  }, [_vm._v("\n          " + _vm._s(`${this.product.nombre.slice(0, 54)}`) + "\n        ")])])]), _vm._ssrNode(" <div class=\"precio\" data-v-601aeb3e><div class=\"content-text-price\" data-v-601aeb3e>" + (this.estadoCart == true && this.equalsPrice ? "<div data-v-601aeb3e>" + (this.minPrice ? "<p class=\"text-price\" data-v-601aeb3e>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>" : this.estadoCart == true && this.minPrice && this.maxPrice && !this.equalsPrice ? "<div class=\"content-price\" data-v-601aeb3e><div class=\"text-price\" data-v-601aeb3e>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div> <p class=\"separator-price\" data-v-601aeb3e>-</p> <div class=\"text-price\" data-v-601aeb3e>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div></div>" : "<div data-v-601aeb3e>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-601aeb3e>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>") + "</div></div> "), _vm._ssrNode("<div class=\"content-btn\" data-v-601aeb3e>", "</div>", [!this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<button class=\"btn\" data-v-601aeb3e>", "</button>", [_vm._ssrNode("<div class=\"btn-content\" data-v-601aeb3e><i class=\"header-content-cart\" data-v-601aeb3e><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"icon-shop\" data-v-601aeb3e><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-601aeb3e></path></svg></i> <p class=\"txt-btn\" data-v-601aeb3e>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_añadiralcarrito')) + "\n          ") + "</p></div>")], 2) : _c('nuxt-link', {
    attrs: {
      "nuxt-link": "",
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

// CONCATENATED MODULE: ./components/template10/_productcard/ProductCard.vue?vue&type=template&id=601aeb3e&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productcard/ProductCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



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
  "601aeb3e",
  "021ab8e4"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(646);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("66a1ca6c", content, true, context)
};

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(648);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7a2f54de", content, true, context)
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

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardFilterList_vue_vue_type_style_index_0_id_b40cc888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(355);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardFilterList_vue_vue_type_style_index_0_id_b40cc888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardFilterList_vue_vue_type_style_index_0_id_b40cc888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardFilterList_vue_vue_type_style_index_0_id_b40cc888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardFilterList_vue_vue_type_style_index_0_id_b40cc888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-b40cc888]{max-width:100%;position:relative}.image[data-v-b40cc888]{height:auto;width:100%}.icon[data-v-b40cc888]{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity));font-size:1.5rem}.cart-Shop[data-v-b40cc888],.cart-Shop-mobile[data-v-b40cc888]{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity));font:inherit;font-size:100%;left:50%;position:absolute;text-align:center;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.cart-Shop-mobile[data-v-b40cc888]{justify-column:center}.icons-hover[data-v-b40cc888]{grid-gap:0;--tw-text-opacity:1;color:#3f3f3f;color:rgba(63,63,63,var(--tw-text-opacity));display:grid;font:inherit;font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.icon-show-mobile[data-v-b40cc888]{fill:#fff}.card-title[data-v-b40cc888]{color:#333;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font:inherit;font-weight:600;text-align:left}.categoria[data-v-b40cc888]{color:#bbb;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font:inherit;font-weight:600}.text-price[data-v-b40cc888]{color:#333;font-weight:600;padding-left:5px;white-space:nowrap}.separator-price[data-v-b40cc888],.text-price[data-v-b40cc888]{font-family:\"Poppins\",Helvetica,Arial,sans-serif!important}.separator-price[data-v-b40cc888]{color:#333;font-weight:600;margin-bottom:10px}.text-free[data-v-b40cc888]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.icon-overlay-free[data-v-b40cc888]{color:#25db37}.text-sould[data-v-b40cc888]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.content_buy_action[data-v-b40cc888]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.transport-icon[data-v-b40cc888]{align-items:center;color:#00a650;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font-weight:600;justify-content:center}.content_card-info[data-v-b40cc888],.transport-icon[data-v-b40cc888]{display:flex;margin-bottom:10px;width:100%}.content_card-info[data-v-b40cc888]{align-items:flex-end;flex-direction:row;justify-content:flex-start}.text-card-info-sould[data-v-b40cc888]{color:#ed2353;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font-size:16px;font-weight:600;margin-left:18px}.content-button[data-v-b40cc888]{display:flex;flex-direction:row;padding-bottom:20px}.btn[data-v-b40cc888]{fill:var(--color_text_btn);align-items:center;background-color:var(--color_background_btn);color:var(--color_text_btn);cursor:pointer;display:flex;flex-direction:row;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font-size:15px;height:40px;justify-content:center;letter-spacing:1px;margin-top:2px;padding-left:15px;padding-right:15px;transition:color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease;width:auto}.btn[data-v-b40cc888]:hover{fill:#fff;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);background-color:#eb7025;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#fff}.txt-btn-product[data-v-b40cc888]{font-size:12px;font-weight:600;letter-spacing:1px;line-height:1px;margin-left:10px;text-transform:uppercase;white-space:nowrap}.btn-disabled[data-v-b40cc888],.txt-btn-product[data-v-b40cc888]{font-family:\"Poppins\",Helvetica,Arial,sans-serif!important}.btn-disabled[data-v-b40cc888]{fill:var(--color_text_btn);align-items:center;background-color:var(--color_background_btn);color:var(--color_text_btn);cursor:pointer;flex-direction:row;font-weight:600;height:40px;letter-spacing:1px;line-height:1px;margin-left:10px;margin-top:2px;padding-left:15px;padding-right:15px;transition:color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease;white-space:nowrap}.btn-disabled[data-v-b40cc888],.datos-producto[data-v-b40cc888]{display:flex;justify-content:center}.datos-producto[data-v-b40cc888]{align-items:flex-start;cursor:default;flex-direction:column;margin-bottom:6px;margin-left:2px;margin-top:6px;width:100%}.tittle[data-v-b40cc888]{color:#3f3f3f;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font-size:100%;font:inherit}@media (min-width:300px){.overlay-bottom[data-v-b40cc888],.text-cart[data-v-b40cc888]{display:none}.overlay-top[data-v-b40cc888]{--tw-bg-opacity:1;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);height:20%;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:8%;transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.container:hover .overlay-top[data-v-b40cc888],.overlay-top[data-v-b40cc888]{left:80%;width:20%}.overlay-free[data-v-b40cc888]{background-color:#25db37;border-radius:.25rem;height:10%;left:45%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:50%}.container:hover .overlay-free[data-v-b40cc888]{left:45%;transition-delay:.7s;width:50%}.text-free[data-v-b40cc888]{font-size:75%}.overlay-polygon[data-v-b40cc888]{background-color:transparent;height:5%;overflow:hidden;position:absolute;right:0;top:10%}.container:hover .overlay-polygon[data-v-b40cc888],.overlay-polygon[data-v-b40cc888]{left:85%;width:5%}.overlay-sould[data-v-b40cc888]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:60%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:35%}.container:hover .overlay-sould[data-v-b40cc888]{left:60%;transition-delay:.7s;width:35%}.svg-sould-out[data-v-b40cc888]{height:40px;width:40px}.cart-shop[data-v-b40cc888]{clip:rect(0,0,0,0);border-width:0;display:none;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.cart-shop-mobile[data-v-b40cc888]{clip:auto;display:block;height:auto;margin:0;overflow:visible;padding:0;position:static;white-space:normal;width:auto}.icon-show-mobile[data-v-b40cc888]{margin-left:auto;margin-right:auto;margin-top:2.5px}.producto[data-v-b40cc888]{align-items:center;cursor:pointer;display:flex;flex-direction:row;justify-content:center;width:100%}.product-image[data-v-b40cc888],.product-image-soldOut[data-v-b40cc888]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.product-image-soldOut[data-v-b40cc888]{filter:grayscale(100%)}.card-title[data-v-b40cc888]{font-size:18px}.categoria[data-v-b40cc888]{font-size:13px;margin-bottom:2px}.precio[data-v-b40cc888]{font-size:16px}.text-price[data-v-b40cc888]{font-size:24px;margin-top:10px}.separator-price[data-v-b40cc888]{font-size:20px}.content_card-info[data-v-b40cc888],.transport-icon[data-v-b40cc888]{display:none}.content-price[data-v-b40cc888]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}}@media (min-width:640px){.producto[data-v-b40cc888]{align-items:flex-start;cursor:pointer;justify-content:flex-start;padding-bottom:8px;padding-top:4px}.product-image[data-v-b40cc888]{height:auto;width:auto}.text-price[data-v-b40cc888]{margin:0;padding-left:0}.datos-producto[data-v-b40cc888]{margin:0}}@media (min-width:768px){.text-free[data-v-b40cc888]{font-size:100%}.svg-sould-out[data-v-b40cc888]{height:60px;width:60px}.icon[data-v-b40cc888]{margin-top:2px}}@media (min-width:780px){.content_card-info[data-v-b40cc888],.transport-icon[data-v-b40cc888]{display:flex}}@media (min-width:1024px){.product-image[data-v-b40cc888],.product-image-soldOut[data-v-b40cc888]{height:420px;width:90%}.datos-producto[data-v-b40cc888]{margin-top:40px}}@media (min-width:1280px){.icon[data-v-b40cc888]{margin-top:0}.text-cart[data-v-b40cc888]{display:block}.overlay-top[data-v-b40cc888]{--tw-bg-opacity:1;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);height:20%;left:80%;overflow:hidden;position:absolute;right:0;top:6%;transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:0}.container:hover .overlay-top[data-v-b40cc888]{left:65%;width:15%}.overlay-free[data-v-b40cc888]{background-color:#25db37;border-radius:.25rem;height:10%;left:80%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:0}.container:hover .overlay-free[data-v-b40cc888]{left:35%;transition-delay:.7s;width:44%}.text-free[data-v-b40cc888]{font-size:100%}.overlay-polygon[data-v-b40cc888]{background-color:transparent;height:5%;left:100%;overflow:hidden;position:absolute;right:0;top:10%;width:0}.container:hover .overlay-polygon[data-v-b40cc888]{left:70%;transition-delay:.95s;width:5%}.overlay-sould[data-v-b40cc888]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:75%;overflow:hidden;position:absolute;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-b40cc888]{left:50%;transition-delay:.7s;width:35%}.svg-sould-out[data-v-b40cc888]{height:60px;width:60px}.cart-shop[data-v-b40cc888]{clip:auto;display:block;height:auto;margin:0;overflow:visible;padding:0;position:static;white-space:normal;width:auto}.cart-shop-mobile[data-v-b40cc888]{clip:rect(0,0,0,0);border-width:0;display:none;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.text-price[data-v-b40cc888]{margin-bottom:10px}.separator-price[data-v-b40cc888]{font-size:20px}.transport-icon[data-v-b40cc888]{margin-bottom:20px}.content-button[data-v-b40cc888]{width:100%}.tittle[data-v-b40cc888]{padding-bottom:2px}.btn[data-v-b40cc888],.btn-disabled[data-v-b40cc888]{width:auto}}@media (min-width:3000px){.container[data-v-b40cc888]{background-color:#f4f2f0}.container[data-v-b40cc888],.wrapper-image[data-v-b40cc888]{align-items:center;justify-content:center}.wrapper-image[data-v-b40cc888]{display:flex}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_49fcb977_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(356);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_49fcb977_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_49fcb977_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_49fcb977_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_49fcb977_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container-product-max-w[data-v-49fcb977]{max-width:1400px}.container-product-max-w[data-v-49fcb977],.product-content[data-v-49fcb977]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.product-content[data-v-49fcb977]{background:var(--background_color_1);padding-bottom:80px}.content-banner-shop-r[data-v-49fcb977]{align-items:flex-start;justify-content:flex-start}.content-banner-shop-r[data-v-49fcb977],.content-input-slide[data-v-49fcb977]{display:flex;flex-direction:column;width:100%}.content-input-slide[data-v-49fcb977]{align-items:center;justify-content:center}.content-left[data-v-49fcb977] .el-collapse{border-bottom:1px solid var(--border);border-top:1px solid var(--border);width:100%}.content-left[data-v-49fcb977] .el-collapse-item__wrap{background-color:transparent;border-bottom:1px solid var(--border);margin-left:10px;will-change:height}.content-left[data-v-49fcb977] .el-collapse-item__header{background-color:transparent;border-bottom:1px solid var(--border);color:var(--color_text);font-family:var(--font-style-1)!important;font-size:16px;font-weight:600;text-transform:uppercase}.content-left[data-v-49fcb977] .el-collapse-item__header.is-active{border-bottom:none}.content-left[data-v-49fcb977] .el-collapse-item__arrow{color:var(--color_icon)}.input-slide[data-v-49fcb977]{background:transparent;border-style:none;cursor:pointer;height:30px;width:100%}.input-slide[data-v-49fcb977],.txt-tittles[data-v-49fcb977]{font-family:var(--font-style-1)!important}.txt-tittles[data-v-49fcb977]{color:var(--color_text);cursor:pointer;font-size:15px;font-weight:600;letter-spacing:0;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-tittles[data-v-49fcb977],.value-range-slide[data-v-49fcb977]{align-items:center;display:flex;justify-content:flex-start;width:100%}.value-range-slide[data-v-49fcb977],.values-prices[data-v-49fcb977]{flex-direction:row}.values-prices[data-v-49fcb977]{align-items:center;display:flex;justify-content:flex-start;width:80%}.value-price[data-v-49fcb977]{color:#717171;cursor:default;font-family:var(--font-style-1)!important;font-size:14px;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:auto}.value-precio-change[data-v-49fcb977]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.price[data-v-49fcb977]{color:#2d2a2a;cursor:default;flex-direction:row;font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;justify-content:flex-start;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn-slider[data-v-49fcb977],.price[data-v-49fcb977]{align-items:center;display:flex}.btn-slider[data-v-49fcb977]{justify-content:center;width:30%}.btn-items-left[data-v-49fcb977]{align-items:center;background-color:#ededed;border-radius:35px;cursor:pointer;display:flex;font-family:var(--font-style-1)!important;font-size:12px;font-weight:600;justify-content:center;letter-spacing:.3px;padding:10px 14px;text-align:center;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn-items-left[data-v-49fcb977]:hover{background-color:#e5e5e5}.content-items-categorias[data-v-49fcb977]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.content-items-categorias-text[data-v-49fcb977]{display:flex;flex-direction:row;width:100%}.text-categorias[data-v-49fcb977]{color:#333;cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:600;margin-right:6px;width:auto}.text-categorias[data-v-49fcb977],.txt-Filter[data-v-49fcb977]{font-family:var(--font-style-1)!important}.txt-Filter[data-v-49fcb977]{align-items:center;color:var(--color_subtext);cursor:pointer;display:flex;flex-direction:row;font-size:15px;font-weight:400;justify-content:flex-start;line-height:1.3;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-Filter[data-v-49fcb977]:hover{color:#eb7025}.separator-breadCrumbs[data-v-49fcb977]{color:#8e8e8e;cursor:pointer;font-size:14px;margin-left:6px;margin-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:auto}.product-stock-text[data-v-49fcb977],.separator-breadCrumbs[data-v-49fcb977]{font-family:var(--font-style-1)!important}.product-stock-text[data-v-49fcb977]{color:#8e8e8e;font-size:14px;font-weight:600}.product-stock-active[data-v-49fcb977]{color:#000;font-size:15px;font-weight:600}.product-stock-active[data-v-49fcb977],.text-categorias-select[data-v-49fcb977]{font-family:var(--font-style-1)!important}.text-categorias-select[data-v-49fcb977]{color:#8e8e8e;cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:400;margin-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}#statecate[data-v-49fcb977]{color:#333;cursor:pointer;font-size:14px;font-weight:600;width:100%}#statecate[data-v-49fcb977],#statesubcate[data-v-49fcb977]{font-family:var(--font-style-1)!important}#statesubcate[data-v-49fcb977]{color:#333;cursor:pointer;font-size:14px;font-weight:600;margin-left:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.top-content[data-v-49fcb977]{display:flex;flex-wrap:wrap;font-size:100%;justify-content:space-between;margin-bottom:20px;max-width:100%}.categorys-list[data-v-49fcb977],.top-content[data-v-49fcb977]{align-items:center;width:100%}.categorys-list[data-v-49fcb977],.subcategory-list[data-v-49fcb977]{grid-gap:1rem;display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr));justify-content:flex-start;max-height:300px;overflow:auto}.subcategory-list[data-v-49fcb977]{align-items:center;width:100%}.categorys-list[data-v-49fcb977]::-webkit-scrollbar{width:3px}.categorys-list[data-v-49fcb977]::-webkit-scrollbar-thumb{background:#a3a3a3;border-radius:4px}.categorys-list[data-v-49fcb977]::-webkit-scrollbar-thumb:active{background-color:#777}.categorys-list[data-v-49fcb977]::-webkit-scrollbar-thumb:hover{background:#686868;box-shadow:0 0 2px 1px rgba(0,0,0,.401)}.subcategory-list[data-v-49fcb977]::-webkit-scrollbar{width:3px}.subcategory-list[data-v-49fcb977]::-webkit-scrollbar-thumb{background:#a3a3a3;border-radius:4px}.subcategory-list[data-v-49fcb977]::-webkit-scrollbar-thumb:active{background-color:#777}.subcategory-list[data-v-49fcb977]::-webkit-scrollbar-thumb:hover{background:#686868;box-shadow:0 0 2px 1px rgba(0,0,0,.401)}.container[data-v-49fcb977]::-webkit-scrollbar-track{background:#323232;border-radius:4px}.container[data-v-49fcb977]::-webkit-scrollbar-track:active,.container[data-v-49fcb977]::-webkit-scrollbar-track:hover{background:#b52727}.txt-categorys[data-v-49fcb977]{align-items:center;color:var(--color_subtext);cursor:pointer;display:flex;flex-direction:row;font-family:var(--font-style-1)!important;font-size:15px;font-weight:400;justify-content:flex-start;line-height:1.3;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-categorys[data-v-49fcb977]:hover{color:#eb7025}.txt-categorys-active[data-v-49fcb977]{align-items:center;color:var(--color_icon);cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:600;justify-content:flex-start;padding-right:1px;width:100%}.txt-categorys-active[data-v-49fcb977],.txt-categorys:hover .rounded-list[data-v-49fcb977]{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-categorys:hover .rounded-list[data-v-49fcb977]{background-color:var(--color_icon)}.rounded-list[data-v-49fcb977]{background-color:#e5e5e5;border-radius:100px;height:10px;margin-right:10px;width:10px}.rounded-list[data-v-49fcb977],.txt-rounded-list-active[data-v-49fcb977]{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-rounded-list-active[data-v-49fcb977]{background-color:var(--color_icon)}.product-stock[data-v-49fcb977]{color:#333;cursor:pointer;font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;margin-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.show-view-per-list[data-v-49fcb977]{align-items:center;justify-content:center;width:auto}.show[data-v-49fcb977]{cursor:pointer;margin-top:4px;width:100%}.show-icon[data-v-49fcb977]{fill:var(--color_icon);padding:3px}.show-icon-active[data-v-49fcb977]{fill:var(--breadCrumbs)}.show-icon-active[data-v-49fcb977],.show-icon[data-v-49fcb977]:hover{background-color:var(--background_color_1)}.show-icon[data-v-49fcb977]:hover{fill:#eb7025}.show:focus .show-icon[data-v-49fcb977]{fill:#000}.items-end[data-v-49fcb977]{align-items:center;flex-direction:row}.items-end[data-v-49fcb977],.tittle-banner-shop[data-v-49fcb977]{display:flex;justify-content:flex-start;width:100%}.tittle-banner-shop[data-v-49fcb977]{align-items:flex-start}.btn-tittle-shop[data-v-49fcb977]{align-items:flex-start;color:var(--color_text);font-family:var(--font-style-1)!important;font-weight:600;justify-content:flex-start;text-transform:uppercase}.product-text[data-v-49fcb977]{display:flex;flex-direction:column;width:100%}.product-conten-items[data-v-49fcb977],.product-text[data-v-49fcb977]{align-items:center;justify-content:center}.product-conten-items[data-v-49fcb977]{gap:1rem;text-align:center}.producto-items-content[data-v-49fcb977]{width:100%}.content-item[data-v-49fcb977]{flex-direction:row;margin-bottom:40px}.content-item[data-v-49fcb977],.content-item-productos[data-v-49fcb977]{align-items:center;display:flex;justify-content:center;width:100%}.content-item-productos[data-v-49fcb977]{flex-direction:column}.content-products[data-v-49fcb977]{height:100%}.content-products[data-v-49fcb977],.content-products-empty[data-v-49fcb977]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-products-empty[data-v-49fcb977]{min-height:200px;text-align:center}.txt-products-empty[data-v-49fcb977]{color:#3f3f3f;font-family:var(--font-style-1)!important;font-size:20px;font-weight:600;margin-top:6px}.pagination-medium[data-v-49fcb977]{background:transparent;margin-top:50px}.pagination[data-v-49fcb977]{background:transparent;color:var(--pagination_Color);font-size:18px}.product_pagination[data-v-49fcb977] .el-pagination.is-background .btn-next,.product_pagination[data-v-49fcb977] .el-pagination.is-background .btn-prev,.product_pagination[data-v-49fcb977] .el-pagination.is-background .el-pager li{background-color:transparent;color:var(--pagination_Color)}.product_pagination[data-v-49fcb977] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-49fcb977] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-49fcb977] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--pagination_Color)}.product_pagination[data-v-49fcb977] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--pagination_Color);color:#fff}.product-stock[data-v-49fcb977],.separator-breadCrumbs[data-v-49fcb977],.show-number-items[data-v-49fcb977]{cursor:default}.crumb[data-v-49fcb977]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separatorCrumb[data-v-49fcb977]{color:var(--breadCrumbs);cursor:pointer;font-size:9px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.separatorCrumb[data-v-49fcb977],.txt-crumb[data-v-49fcb977]{font-family:var(--font-style-1)!important}.txt-crumb[data-v-49fcb977]{color:var(--breadCrumbs);cursor:pointer;font-size:15px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.s1[data-v-49fcb977]:hover,.s2[data-v-49fcb977]:hover{color:#eb7025;transition:all .25s ease}.product-list[data-v-49fcb977]{height:100%;width:100%}.product-list[data-v-49fcb977]:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:300px){.product-conten-items[data-v-49fcb977]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));width:100%}.btn-tittle-shop[data-v-49fcb977]{font-size:36px}.content-shop-items[data-v-49fcb977]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;width:90%}.content-left[data-v-49fcb977]{display:none}.content-right[data-v-49fcb977]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.top-content[data-v-49fcb977]{display:none}.content-items-categorias-text[data-v-49fcb977]{align-items:center;justify-content:center}.text-categorias-select[data-v-49fcb977]{width:auto}.content-banner-shop[data-v-49fcb977]{align-items:flex-start;justify-content:flex-start;margin-bottom:8px;margin-top:8px;padding-left:20px}.content-banner-shop-r[data-v-49fcb977]{margin-bottom:10px}.bannerProduct[data-v-49fcb977]{display:none}.product-content[data-v-49fcb977]{margin-top:20px}.content-home[data-v-49fcb977]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.txt-content-home[data-v-49fcb977]{color:var(--color_text);cursor:pointer;font-family:var(--font-style-1)!important;font-size:16px;font-weight:600;line-height:1.1;padding-bottom:20px;padding-top:20px;text-transform:uppercase;width:auto}.txt-content-home[data-v-49fcb977]:hover{color:#eb7025}}@media (min-width:440px){.product-conten-items[data-v-49fcb977]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:768px){.content-shop-items[data-v-49fcb977]{width:93%}.bannerProduct[data-v-49fcb977]{align-items:center;background-color:var(--background_color_2);background-position:50%;background-repeat:no-repeat;background-size:cover;display:flex;height:220px;justify-items:center;width:100%}}@media (min-width:1024px){.product-text[data-v-49fcb977]{width:100%}.product-conten-items[data-v-49fcb977]{grid-gap:2.5rem;display:grid;gap:2.5rem;grid-template-columns:repeat(3,minmax(0,1fr))}.content-items-categorias-text[data-v-49fcb977]{align-items:center;justify-content:flex-start}.items-end[data-v-49fcb977]{display:flex;padding-bottom:20px}.show-number-items[data-v-49fcb977]{align-items:center;display:flex;justify-content:flex-end;width:100%}.show-view-per-list[data-v-49fcb977]{grid-gap:0;align-items:center;display:grid;gap:0;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:center;width:auto}.btn-tittle-shop[data-v-49fcb977]{font-size:20px}.top-content[data-v-49fcb977]{border-bottom:1px solid var(--border);display:flex;padding-bottom:5px;padding-top:0}.content-left[data-v-49fcb977]{align-items:flex-start;display:flex;flex-direction:column;justify-content:space-between;margin-right:10px;width:400px}.content-banner-shop[data-v-49fcb977]{display:none}.content-banner-shop-r[data-v-49fcb977]{display:flex;padding-bottom:40px}.content-shop-items[data-v-49fcb977]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;margin-top:40px;width:95%}.hidd[data-v-49fcb977]{display:none}}@media (min-width:1280px){.product-content[data-v-49fcb977]{margin-top:0}.content-left[data-v-49fcb977]{width:400px}}@media (max-width:440px){.btn-tittle-shop[data-v-49fcb977]{font-size:22px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko-ProductListFilter.vue?vue&type=template&id=49fcb977&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product-content",
    style: [_vm.settingByTemplate10[0].setting10General, _vm.settingByTemplate10[0].productListFilter, {
      '--font-style-1': this.settingByTemplate10[0].setting10General && this.settingByTemplate10[0].setting10General.fount_1 ? this.settingByTemplate10[0].setting10General.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div id=\"BgProductlistF10\" class=\"bannerProduct\" data-v-49fcb977>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-49fcb977>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-49fcb977>/</p> <p class=\"txt-crumb s2\" data-v-49fcb977>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('header_productos')) + "\n      ") + "</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container-product-max-w\" data-v-49fcb977>", "</div>", [_vm._ssrNode("<div class=\"content-shop-items\" data-v-49fcb977>", "</div>", [_vm._ssrNode("<div class=\"content-left\" data-v-49fcb977>", "</div>", [_c('nuxt-link', {
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
    }, [_c('span', {
      staticClass: "rounded-list",
      class: categorys.id == _vm.indexSelect ? 'txt-rounded-list-active' : ''
    }), _vm._v("\n                    " + _vm._s(categorys.nombre_categoria_producto) + "\n                  ")])])]);
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
    }, [_c('span', {
      staticClass: "rounded-list",
      class: subcategorys.id == _vm.indexSelect2 ? 'txt-rounded-list-active' : ''
    }), _vm._v("\n                    " + _vm._s(subcategorys.nombre_subcategoria) + "\n                  ")])])]);
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
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_fprecioM')) + "\n              ")])])])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-right\" data-v-49fcb977>", "</div>", [_c('nuxt-link', {
    staticClass: "content-home hidd",
    attrs: {
      "to": "/productos"
    }
  }, [_c('p', {
    staticClass: "txt-content-home",
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('header_inicio')) + "\n          ")])]), _vm._ssrNode(" <div class=\"empty hidd\" data-v-49fcb977></div> <div class=\"content-banner-shop-r\" data-v-49fcb977><div class=\"tittle-banner-shop\" data-v-49fcb977>" + (!this.nameCategoryHeader ? "<p class=\"btn-tittle-shop\" data-v-49fcb977>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('header_productos')) + "\n            ") + "</p>" : "<div class=\"flex flex-col justify-start\" data-v-49fcb977><p class=\"btn-tittle-shop\" data-v-49fcb977>" + _vm._ssrEscape("\n                " + _vm._s(this.nameCategoryHeader) + "\n              ") + "</p> <div class=\"flex flex-row\" data-v-49fcb977>" + (this.nameSubCategoryHeader ? "<p class=\"text-12 mr-4\" data-v-49fcb977>" + _vm._ssrEscape("\n                  " + _vm._s(this.nameSubCategoryHeader) + "\n                ") + "</p>" : "<!---->") + " " + (this.nameSubCategoryHeader && this.etiqueta1 ? "<p class=\"text-12 mr-4\" data-v-49fcb977>\n                  /\n                </p>" : "<!---->") + " " + (this.etiqueta1 ? "<p class=\"text-12\" data-v-49fcb977>" + _vm._ssrEscape("\n                  " + _vm._s(this.etiqueta1) + "\n                ") + "</p>" : "<!---->") + " " + (this.etiqueta2 ? "<p class=\"ml-4 text-12\" data-v-49fcb977>" + _vm._ssrEscape("\n                  / " + _vm._s(this.etiqueta2) + "\n                ") + "</p>" : "<!---->") + "</div></div>") + " " + (this.etiqueta1 && this.nameCategoryHeader == '' && this.nameSubCategoryHeader == '' ? "<div class=\"flex flex-col justify-start\" data-v-49fcb977>" + (this.etiqueta1 ? "<p class=\"text-12\" data-v-49fcb977>" + _vm._ssrEscape("\n                " + _vm._s(this.etiqueta1) + "\n              ") + "</p>" : "<!---->") + "</div>" : "<!---->") + "</div></div> <div class=\"top-content\" data-v-49fcb977><div class=\"content-items-categorias\" data-v-49fcb977><div class=\"items-end\" data-v-49fcb977><div class=\"show-view-per-list\" data-v-49fcb977><button class=\"show\" data-v-49fcb977><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"30px\" height=\"30px\" viewBox=\"0 0 24 24\"" + _vm._ssrClass("show-icon", _vm.indexShowList == 3 ? 'show-icon-active' : '') + " data-v-49fcb977><path d=\"M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z\" data-v-49fcb977></path></svg></button> <button class=\"show\" data-v-49fcb977><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"30px\" height=\"30px\" viewBox=\"0 0 24 24\"" + _vm._ssrClass("show-icon", _vm.indexShowList == 1 ? 'show-icon-active' : '') + " data-v-49fcb977><path d=\"M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z\" data-v-49fcb977></path></svg></button></div></div></div></div> "), _vm._ssrNode("<div id=\"section\" class=\"producto-items-content\" data-v-49fcb977>", "</div>", [_vm._ssrNode("<div class=\"content-item\" data-v-49fcb977>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-49fcb977>", "</div>", [_vm._ssrNode("<div id=\"grid-selection10\" class=\"product-conten-items\" data-v-49fcb977>", "</div>", _vm._l(_vm.filterProduct, function (product) {
    return _vm._ssrNode("<div class=\"content-products\" data-v-49fcb977>", "</div>", [!_vm.showInList ? _c('KoProdcutCardFilter', {
      staticClass: "product-list",
      attrs: {
        "product": product,
        "cardProduct": _vm.settingByTemplate10[0].cardProduct,
        "settingGeneral": _vm.settingByTemplate10[0].setting10General
      }
    }) : _vm._e(), _vm._ssrNode(" "), _vm.showInList ? _c('KoProdcutCardFilerList', {
      staticClass: "product-list",
      attrs: {
        "product": product,
        "cardProduct": _vm.settingByTemplate10[0].cardProduct,
        "settingGeneral": _vm.settingByTemplate10[0].setting10General
      }
    }) : _vm._e()], 2);
  }), 0), _vm._ssrNode(" "), this.fullProducts.length == 0 ? _vm._ssrNode("<div class=\"content-products-empty\" data-v-49fcb977>", "</div>", [_vm._ssrNode("<div class=\"header-content-logo\" data-v-49fcb977>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/productos"
    }
  }, [_c('img', {
    staticClass: "header-logo",
    attrs: {
      "src": `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      "alt": "Logo Img"
    },
    on: {
      "click": _vm.clear
    }
  })])], 1), _vm._ssrNode(" <p class=\"txt-products-empty\" data-v-49fcb977>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-49fcb977>", "</div>", [_vm.fullProducts.length > this.numVistas ? _vm._ssrNode("<div class=\"product_pagination\" data-v-49fcb977>", "</div>", [_c('el-pagination', {
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
  })], 1) : _vm._e()])], 2)])])], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/Ko-ProductListFilter.vue?vue&type=template&id=49fcb977&scoped=true&

// EXTERNAL MODULE: ./components/template10/_productcard/ProductCard.vue + 4 modules
var ProductCard = __webpack_require__(169);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productcard/ProductCardFilterList.vue?vue&type=template&id=b40cc888&scoped=true&
var ProductCardFilterListvue_type_template_id_b40cc888_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto"
  }, [_vm._ssrNode("<div class=\"container\" data-v-b40cc888>", "</div>", [_c('nuxt-link', {
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
  })], 1), _vm._ssrNode(" " + (_vm.soldOut ? "<div class=\"overlay-sould\" data-v-b40cc888><div class=\"text-sould\" data-v-b40cc888><svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" viewBox=\"0 0 512 512\" class=\"svg-sould-out\" data-v-b40cc888><g data-v-b40cc888><g data-v-b40cc888><path d=\"m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z\" fill=\"#cd3232\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#cd3232\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#ff4646\" data-v-b40cc888></path></g> <g data-v-b40cc888><circle cx=\"96\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-b40cc888></circle></g> <g data-v-b40cc888><circle cx=\"384\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-b40cc888></circle></g> <g data-v-b40cc888><path d=\"m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z\" fill=\"#463c4b\" data-v-b40cc888></path></g> <g data-v-b40cc888><circle cx=\"240\" cy=\"92.457\" fill=\"#ff4646\" r=\"24\" data-v-b40cc888></circle></g> <g data-v-b40cc888><g data-v-b40cc888><path d=\"m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z\" fill=\"#32283c\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#32283c\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#e6e6eb\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z\" fill=\"#32283c\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z\" fill=\"#32283c\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z\" fill=\"#e6e6eb\" data-v-b40cc888></path></g> <path d=\"m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" fill=\"#e6e6eb\" data-v-b40cc888></path></g></g></svg></div></div>" : "<!---->") + " "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div class=\"overlay-bottom\" data-v-b40cc888>", "</div>", [_vm._ssrNode("<div class=\"cart-shop-mobile\" data-v-b40cc888>", "</div>", [_vm._ssrNode("<div class=\"icon-cart\" data-v-b40cc888>", "</div>", [_c('cart-icon', {
    staticClass: "icon"
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cart-Shop\" data-v-b40cc888>", "</div>", [_vm._ssrNode((!_vm.hover ? "<div class=\"text-cart\" data-v-b40cc888><p class=\"w-full\" data-v-b40cc888>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_añadiralcarrito'))) + "</p></div>" : "<!---->") + " "), _vm.hover ? _vm._ssrNode("<div class=\"icon-cart\" data-v-b40cc888>", "</div>", [_c('cart-icon', {
    staticClass: "icon"
  })], 1) : _vm._e()], 2)], 2) : _vm._ssrNode("<div class=\"overlay-bottom\" data-v-b40cc888>", "</div>", [_vm._ssrNode("<div class=\"cart-shop-mobile\" data-v-b40cc888><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"60%\" height=\"60%\" viewBox=\"0 0 24 24\" class=\"icon-show-mobile\" data-v-b40cc888><path d=\"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7.14,4.5 2.78,7.5 1,12C3.39,18.08 10.25,21.06 16.33,18.67C19.38,17.47 21.8,15.06 23,12C21.22,7.5 16.86,4.5 12,4.5M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z\" data-v-b40cc888></path></svg></div> "), _vm._ssrNode("<div class=\"cart-Shop\" data-v-b40cc888>", "</div>", [_vm._ssrNode("<div class=\"text-cart\" data-v-b40cc888>", "</div>", [_c('nuxt-link', {
    attrs: {
      "nuxt-link": "",
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('home_cardvermas')))])])], 1)])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"datos-producto\" data-v-b40cc888>", "</div>", [_vm._ssrNode("<div class=\"tittle\" data-v-b40cc888>" + (this.product.nombre.length >= 54 ? "<p class=\"card-title\" data-v-b40cc888>" + _vm._ssrEscape("\n        " + _vm._s(`${this.product.nombre.slice(0, 54)}...`) + "\n      ") + "</p>" : "<p class=\"card-title\" data-v-b40cc888>" + _vm._ssrEscape("\n        " + _vm._s(`${this.product.nombre.slice(0, 54)}`) + "\n      ") + "</p>") + "</div> <div class=\"precio\" data-v-b40cc888><div class=\"content-text-price\" data-v-b40cc888>" + (this.estadoCart == true && this.equalsPrice ? "<div data-v-b40cc888>" + (this.minPrice ? "<p class=\"text-price\" data-v-b40cc888>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>" : this.estadoCart == true && this.minPrice && this.maxPrice && !this.equalsPrice ? "<div class=\"content-price\" data-v-b40cc888><div class=\"text-price\" data-v-b40cc888>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div> <p class=\"separator-price mx-4\" data-v-b40cc888>-</p> <div class=\"text-price\" data-v-b40cc888>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div></div>" : "<div data-v-b40cc888>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-b40cc888>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>") + "</div></div> <div class=\"content_buy_action\" data-v-b40cc888>" + (_vm.product.envio_gratis == 1 && _vm.product.stock > 0 ? "<div data-v-b40cc888><div class=\"transport-icon\" data-v-b40cc888><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" fill=\"#00a650\" class=\"transporte-icon mr-2\" data-v-b40cc888><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-b40cc888></path></svg> <p data-v-b40cc888>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_tarifaPrecio'))) + "</p></div></div>" : "<!---->") + " " + (_vm.soldOut ? "<div class=\"content_card-info\" data-v-b40cc888><div class=\"icon-card-info-sould\" data-v-b40cc888><svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" height=\"50px\" viewBox=\"0 0 512 512\" width=\"50px\" data-v-b40cc888><g data-v-b40cc888><g data-v-b40cc888><path d=\"m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z\" fill=\"#cd3232\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#cd3232\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#ff4646\" data-v-b40cc888></path></g> <g data-v-b40cc888><circle cx=\"96\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-b40cc888></circle></g> <g data-v-b40cc888><circle cx=\"384\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-b40cc888></circle></g> <g data-v-b40cc888><path d=\"m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z\" fill=\"#463c4b\" data-v-b40cc888></path></g> <g data-v-b40cc888><circle cx=\"240\" cy=\"92.457\" fill=\"#ff4646\" r=\"24\" data-v-b40cc888></circle></g> <g data-v-b40cc888><g data-v-b40cc888><path d=\"m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z\" fill=\"#32283c\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#32283c\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#e6e6eb\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z\" fill=\"#32283c\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z\" fill=\"#32283c\" data-v-b40cc888></path></g> <g data-v-b40cc888><path d=\"m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z\" fill=\"#e6e6eb\" data-v-b40cc888></path></g> <path d=\"m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" fill=\"#e6e6eb\" data-v-b40cc888></path></g></g></svg></div> <div class=\"text-card-info-sould\" data-v-b40cc888>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_productoAgotado')) + "\n        ") + "</div></div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"content-button\" data-v-b40cc888>", "</div>", [!this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<button id=\"AddToCartTag\" class=\"btn\" data-v-b40cc888>", "</button>", [_vm._ssrNode("<i class=\"header-content-cart\" data-v-b40cc888><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"minicart-icon-1\" data-v-b40cc888><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-b40cc888></path></svg></i> <p class=\"txt-btn-product\" data-v-b40cc888>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_añadiralcarrito')) + "\n        ") + "</p>")], 2) : _vm.soldOut ? _vm._ssrNode("<button disabled=\"disabled\" class=\"btn-disabled\" data-v-b40cc888><p class=\"txt-btn-product\" data-v-b40cc888>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p></button>") : _c('nuxt-link', {
    ref: "colorBtn",
    staticClass: "btn",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('p', {
    staticClass: "txt-btn-product"
  }, [_vm._v(_vm._s(_vm.$t('home_cardvermas')))])])], 1)], 2)], 2);
};
var ProductCardFilterListvue_type_template_id_b40cc888_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/_productcard/ProductCardFilterList.vue?vue&type=template&id=b40cc888&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productcard/ProductCardFilterList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ProductCardFilterListvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'Ko-ProductCardFilterList',
  props: {
    product: Object
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
// CONCATENATED MODULE: ./components/template10/_productcard/ProductCardFilterList.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_ProductCardFilterListvue_type_script_lang_js_ = (ProductCardFilterListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/_productcard/ProductCardFilterList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(645)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_ProductCardFilterListvue_type_script_lang_js_,
  ProductCardFilterListvue_type_template_id_b40cc888_scoped_true_render,
  ProductCardFilterListvue_type_template_id_b40cc888_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "b40cc888",
  "264ac538"
  
)

/* harmony default export */ var ProductCardFilterList = (component.exports);
// EXTERNAL MODULE: ./mixins/filterProducts.js
var filterProducts = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko-ProductListFilter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Ko_ProductListFiltervue_type_script_lang_js_ = ({
  components: {
    // KoSocialNet,
    KoProdcutCardFilter: ProductCard["a" /* default */],
    KoProdcutCardFilerList: ProductCardFilterList
  },
  props: {
    settingByTemplate10: Array,
    dataStore: Object,
    fullProducts: {},
    allTags: Array
  },
  mixins: [filterProducts["a" /* default */]],
  name: 'Ko-ProductList-Filter',
  mounted() {
    this.setOptionShipping();
    this.setBg();
    this.getQuery();
    if (this.previousPage) {
      this.currentPage = this.previousPage;
    }
  },
  data() {
    return {
      showInList: false,
      showSubCategory: false,
      stateSub: false,
      search: '',
      currentPage: 1,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexSelect: '',
      indexSelect2: '',
      indexShowList: 3,
      indexShowView: 3,
      numVistas: 15,
      stateShipping: false,
      activeNames: ['1', '2', '3', '4', '5']
    };
  },
  computed: {
    categorias() {
      return this.dataStore.categorias;
    },
    subcategories() {
      return this.dataStore.subcategorias;
    },
    getProductsCategorie() {
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
    setBg() {
      if (this.settingByTemplate10) {
        if (!this.mobileCheck()) {
          var imagen = document.getElementById('BgProductlistF10');
          if (this.settingByTemplate10 && this.settingByTemplate10[0] && this.settingByTemplate10[0].productListFilter && this.settingByTemplate10[0].productListFilter.visible_bg == true) {
            if (this.settingByTemplate10[0].productListFilter.url_img_bg) {
              imagen.style.backgroundImage = `url(${this.settingByTemplate10[0].productListFilter.url_img_bg})`;
            } else {
              imagen.style.backgroundImage = `url(https://res.cloudinary.com/brahyanr10/image/upload/v1614233821/Temp10/Productos/bg-beagrumb_gxvk1i.jpg)`;
            }
          } else {
            imagen.style.backgroundImage = '';
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
    showList() {
      this.indexShowList = 1;
      this.showInList = true;
      var gridSelector = document.getElementById('grid-selection10');
      if (gridSelector) {
        gridSelector.setAttribute('style', 'grid-template-columns: repeat(1, minmax(0, 1fr))');
      }
    },
    showGrid3() {
      this.indexShowList = 3;
      this.showInList = false;
      var gridSelector = document.getElementById('grid-selection10');
      if (gridSelector) {
        gridSelector.setAttribute('style', 'grid-template-columns: repeat(3, minmax(0, 1fr))');
      }
    },
    SendSubCategory(value) {
      this.$store.commit('products/SET_PAYLOAD_TAG', '');
      this.$store.commit('products/SET_PAYLOAD_TAG2', '');
      this.stateSub = false;
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
      this.stateSub = true;
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
          this.toggleCategories = false;
          this.selectedSubcategories.push(subcategory);
        }
      });
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto
      });
    },
    breadcrumbsSendCategory(value) {
      this.stateSub = true;
      let filtradoCategories = this.categorias.find(element => {
        if (element.nombre_categoria_producto == value) {
          return element;
        }
      });
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: filtradoCategories.nombre_categoria_producto
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
      this.showSubCategory = false;
      this.selectedSubcategories = [];
      this.nameCategory = '';
    },
    handleChange(val) {
      // console.log(val);
    }
  },
  watch: {
    settingByTemplate10() {
      this.setBg();
    },
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
// CONCATENATED MODULE: ./components/template10/Ko-ProductListFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template10_Ko_ProductListFiltervue_type_script_lang_js_ = (Ko_ProductListFiltervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template10/Ko-ProductListFilter.vue



function Ko_ProductListFilter_injectStyles (context) {
  
  var style0 = __webpack_require__(647)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko_ProductListFilter_component = Object(componentNormalizer["a" /* default */])(
  template10_Ko_ProductListFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Ko_ProductListFilter_injectStyles,
  "49fcb977",
  "1ea4bb07"
  
)

/* harmony default export */ var Ko_ProductListFilter = __webpack_exports__["default"] = (Ko_ProductListFilter_component.exports);

/***/ })

};;
//# sourceMappingURL=60.js.map