exports.ids = [72];
exports.modules = {

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5bc31f32", content, true, context)
};

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_47d45862_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_47d45862_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_47d45862_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_47d45862_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_47d45862_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-image[data-v-47d45862],.product-image-soldOut[data-v-47d45862]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.product-image-soldOut[data-v-47d45862]{filter:grayscale(100%)}.producto[data-v-47d45862]{background:var(--background_color_1);cursor:pointer}.datos-producto[data-v-47d45862],.producto[data-v-47d45862]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.datos-producto[data-v-47d45862]{cursor:default;margin-bottom:24px;margin-top:24px}.container[data-v-47d45862]{max-width:100%;position:relative}.image[data-v-47d45862]{height:auto;width:100%}.icons-hover[data-v-47d45862]{grid-gap:0;display:grid;font:inherit;font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.icon-show-mobile[data-v-47d45862]{fill:#fff}.tittle[data-v-47d45862]{font-family:var(--font-style-1)!important;font:inherit;font-size:100%;max-height:49px;min-height:49px}.tittle-xml[data-v-47d45862]{display:inline;display:initial}.tittle-lg[data-v-47d45862],.tittle-sm[data-v-47d45862]{display:none}.categoria[data-v-47d45862]{color:var(--color_title);font-family:var(--font-style-1)!important;font:inherit;font-weight:var(--fontWeighTitle)}.card-title[data-v-47d45862]{color:var(--color_title);font-family:var(--font-style-1)!important;font:inherit;font-size:var(--fontSizeTitle);font-weight:var(--fontWeighTitle);text-align:left}.producto:hover .text-price[data-v-47d45862]{color:#333}.separator-price[data-v-47d45862]{color:var(--color_price);font-size:var(--fontSizePretitle)}.separator-price[data-v-47d45862],.text-price[data-v-47d45862]{font-family:var(--font-style-1)!important}.text-price[data-v-47d45862]{color:var(--color_price);font-size:var(--fontSizePretitle);font-weight:var(--fontWeighPretitle);line-height:1.1;text-align:left;white-space:nowrap}.text-price-promo[data-v-47d45862]{color:var(--color_price);font-family:var(--font-style-1)!important;font-size:13px;font-weight:400;-webkit-text-decoration:line-through;text-decoration:line-through}.text-free[data-v-47d45862]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.icon-overlay-free[data-v-47d45862]{color:#3d3d3d}.text-sould[data-v-47d45862]{color:#fff;position:absolute;white-space:nowrap}.cart-Shop[data-v-47d45862],.text-sould[data-v-47d45862]{left:50%;top:50%;transform:translate(-50%,-50%)}.cart-Shop[data-v-47d45862]{font:inherit;font-size:100%;position:absolute;text-align:center;text-align:center;transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.overlay-bottom[data-v-47d45862]{background-color:#000}.overlay-bottom[data-v-47d45862]:hover{background-color:#3d3d3d}.txt-add[data-v-47d45862]{font-size:15px;font-weight:800;letter-spacing:1px}.overlay-bottom:hover .txt-add[data-v-47d45862],.txt-add[data-v-47d45862]{color:#fff;transition:all .2s ease-in}.txt-free[data-v-47d45862]{font-size:15px;font-weight:600}.cart-Shop-pro[data-v-47d45862]{background:red;color:#fff;font-size:12px;left:5px;padding:1px 5px;position:absolute;right:auto;text-transform:uppercase;top:5px}@media (min-width:300px){.categoria[data-v-47d45862]{font-size:13px;margin-bottom:3px}.card-title[data-v-47d45862],.precio[data-v-47d45862]{font-size:16px}.overlay-bottom[data-v-47d45862],.overlay-bottom-promo[data-v-47d45862]{bottom:15px;height:0;overflow:hidden;position:absolute;transition-duration:.15s;transition-duration:.1s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.producto:hover .overlay-bottom[data-v-47d45862],.producto:hover .overlay-bottom-promo[data-v-47d45862]{height:30px}.overlay-top[data-v-47d45862]{--tw-bg-opacity:1;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);height:40px;overflow:hidden;position:absolute;right:0;top:10%;transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:45px}.overlay-free[data-v-47d45862]{background-color:#3d3d3d;border-radius:.25rem;height:10%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:110px}.text-free[data-v-47d45862]{font-size:75%}.overlay-polygon[data-v-47d45862]{background-color:transparent;height:5%;right:15px;top:10%;width:5%}.overlay-polygon[data-v-47d45862],.overlay-sould[data-v-47d45862]{overflow:hidden;position:absolute}.overlay-sould[data-v-47d45862]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:60%;right:0;top:0;transition:.5s ease;width:35%}.svg-sould-out[data-v-47d45862]{height:40px;width:40px}.wrapper-price[data-v-47d45862]{flex-direction:column}.content-price[data-v-47d45862],.wrapper-price[data-v-47d45862]{align-items:center;display:flex;justify-content:center;width:100%}.content-price[data-v-47d45862]{flex-direction:row}.separator-price[data-v-47d45862]{font-size:var(--fontSizePretitle);margin-left:1px;margin-right:1px}}@media (min-width:768px){.text-free[data-v-47d45862]{font-size:100%}.svg-sould-out[data-v-47d45862]{height:60px;width:60px}.separator-price[data-v-47d45862]{margin-left:4px;margin-right:4px}.overlay-bottom[data-v-47d45862],.overlay-bottom-promo[data-v-47d45862]{bottom:15px;height:0;overflow:hidden;position:absolute;transition-duration:.15s;transition-duration:.1s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.producto:hover .overlay-bottom[data-v-47d45862],.producto:hover .overlay-bottom-promo[data-v-47d45862]{height:40px}}@media (min-width:1280px){.text-cart[data-v-47d45862]{display:block}.overlay-top[data-v-47d45862]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-47d45862]{left:85%;width:40px}.overlay-free[data-v-47d45862]{height:35px;left:100%;right:0;top:0;transition:.5s ease;width:0}.container:hover .overlay-free[data-v-47d45862]{left:68%;transition-delay:.7s;width:32%}.overlay-polygon[data-v-47d45862]{height:5%;left:100%;right:0;top:35px;width:0}.container:hover .overlay-polygon[data-v-47d45862]{left:90%;transition-delay:.95s;width:5%}.overlay-sould[data-v-47d45862]{height:20%;left:100%;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-47d45862]{left:65%;transition-delay:.7s;width:35%}.svg-sould-out[data-v-47d45862]{height:60px;width:60px}}@media (min-width:1920px){.overlay-top[data-v-47d45862]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-47d45862]{left:86%;width:40px}}@media (min-width:2560px){.overlay-top[data-v-47d45862]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-47d45862]{left:88%;width:40px}.overlay-sould[data-v-47d45862]{height:20%;left:100%;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-47d45862]{left:75%;transition-delay:.7s;width:30%}}@media (min-width:3000px){.overlay-top[data-v-47d45862]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-47d45862]{left:89%;width:40px}}@media (max-width:1125px){.tittle-xml[data-v-47d45862]{display:none}.tittle-lg[data-v-47d45862]{display:inline;display:initial}.tittle-sm[data-v-47d45862]{display:none}}@media (max-width:400px){.tittle-lg[data-v-47d45862],.tittle-xml[data-v-47d45862]{display:none}.tittle-sm[data-v-47d45862]{display:inline;display:initial}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productcard/ProductCard.vue?vue&type=template&id=47d45862&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto",
    style: [_vm.settingKcardProduct, _vm.settingGeneral, {
      '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"container\" data-v-47d45862>", "</div>", [_c('nuxt-link', {
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
  })], 1), _vm._ssrNode(" " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-top\" data-v-47d45862><div class=\"icons-hover\" data-v-47d45862><div class=\"transport-icon\" data-v-47d45862>" + (!_vm.getFreeShipping && !_vm.soldOut ? "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" fill=\"#333\" class=\"transporte-icon\" data-v-47d45862><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-47d45862></path></svg>" : "<!---->") + "</div></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-free\" data-v-47d45862><div class=\"text-free\" data-v-47d45862><p class=\"txt-free\" data-v-47d45862>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardGratis'))) + "</p></div></div>" : "<!---->") + " " + (this.product.tag_promocion == 1 && this.product.promocion_valor ? "<div class=\"cart-Shop-pro\" data-v-47d45862><div class=\"text-cart\" data-v-47d45862><p class=\"w-full txt-add\" data-v-47d45862>" + _vm._ssrEscape(_vm._s(this.product.promocion_valor) + "% OFF") + "</p></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-polygon\" data-v-47d45862><svg width=\"12px\" height=\"12px\" viewBox=\"0 0 255 255\" class=\"icon-overlay-free\" data-v-47d45862><polygon points=\"0,0 127.5,127.5 255,0\" class=\"fill-current\" data-v-47d45862></polygon></svg></div>" : "<!---->") + " " + (_vm.soldOut ? "<div class=\"overlay-sould\" data-v-47d45862><div class=\"text-sould\" data-v-47d45862><svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" viewBox=\"0 0 512 512\" class=\"svg-sould-out\" data-v-47d45862><g data-v-47d45862><g data-v-47d45862><path d=\"m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z\" fill=\"#cd3232\" data-v-47d45862></path></g> <g data-v-47d45862><path d=\"m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#cd3232\" data-v-47d45862></path></g> <g data-v-47d45862><path d=\"m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#ff4646\" data-v-47d45862></path></g> <g data-v-47d45862><circle cx=\"96\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-47d45862></circle></g> <g data-v-47d45862><circle cx=\"384\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-47d45862></circle></g> <g data-v-47d45862><path d=\"m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z\" fill=\"#463c4b\" data-v-47d45862></path></g> <g data-v-47d45862><circle cx=\"240\" cy=\"92.457\" fill=\"#ff4646\" r=\"24\" data-v-47d45862></circle></g> <g data-v-47d45862><g data-v-47d45862><path d=\"m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z\" fill=\"#32283c\" data-v-47d45862></path></g> <g data-v-47d45862><path d=\"m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#32283c\" data-v-47d45862></path></g> <g data-v-47d45862><path d=\"m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#e6e6eb\" data-v-47d45862></path></g> <g data-v-47d45862><path d=\"m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z\" fill=\"#32283c\" data-v-47d45862></path></g> <g data-v-47d45862><path d=\"m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z\" fill=\"#32283c\" data-v-47d45862></path></g> <g data-v-47d45862><path d=\"m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z\" fill=\"#e6e6eb\" data-v-47d45862></path></g> <path d=\"m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" fill=\"#e6e6eb\" data-v-47d45862></path></g></g></svg></div></div>" : "<!---->") + " "), _c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
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
  }, [_vm._v("\n              " + _vm._s(_vm.$t('home_vistarapida')) + "\n            ")])])])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"datos-producto\" data-v-47d45862>", "</div>", [_c('nuxt-link', {
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
  }, [_vm._v("\n          " + _vm._s(`${this.product.nombre.slice(0, 30)}`) + "\n        ")])])]), _vm._ssrNode(" " + (this.product.tag_promocion == 1 && this.product.promocion_valor ? "<div class=\"precio\" data-v-47d45862>" + (this.product.precio ? "<div class=\"content-text-price\" data-v-47d45862>" + (this.estadoCart == true && this.minPrice != this.maxPrice ? "<div class=\"wrapper-price\" data-v-47d45862><div class=\"content-price\" data-v-47d45862>" + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price-promo\" data-v-47d45862>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(this.product.tag_promocion == 1 && this.product.promocion_valor ? Math.trunc(this.minPrice / (1 - this.product.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</div>" : "<!---->") + " <p class=\"separator-price\" data-v-47d45862>-</p> " + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price-promo\" data-v-47d45862>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(this.product.tag_promocion == 1 && this.product.promocion_valor ? Math.trunc(this.maxPrice / (1 - this.product.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</div>" : "<!---->") + "</div> <div class=\"content-price\" data-v-47d45862>" + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-47d45862>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</div>" : "<!---->") + " <p class=\"separator-price\" data-v-47d45862>-</p> " + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-47d45862>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</div>" : "<!---->") + "</div></div>" : "<div class=\"text-center\" data-v-47d45862>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price-promo\" data-v-47d45862>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.product.tag_promocion == 1 && this.product.promocion_valor ? Math.trunc(this.product.precio / (1 - this.product.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + " " + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-47d45862>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>") + "</div>" : "<div class=\"h-27\" data-v-47d45862></div>") + "</div>" : "<div class=\"precio\" data-v-47d45862>" + (this.product.precio ? "<div class=\"content-text-price\" data-v-47d45862>" + (this.estadoCart == true && this.minPrice != this.maxPrice ? "<div class=\"content-price\" data-v-47d45862>" + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-47d45862>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div>" : "<!---->") + " <p class=\"separator-price\" data-v-47d45862>-</p> " + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-47d45862>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div>" : "<!---->") + "</div>" : "<div data-v-47d45862>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-47d45862>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>") + "</div>" : "<div class=\"h-27\" data-v-47d45862></div>") + "</div>"))], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/_productcard/ProductCard.vue?vue&type=template&id=47d45862&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productcard/ProductCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Ko-ProductCard-11',
  props: {
    product: Object,
    settingGeneral: Object,
    settingKcardProduct: Object
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
      active: true
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
// CONCATENATED MODULE: ./components/template11/_productcard/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/_productcard/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(166)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "47d45862",
  "00c161a6"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(678);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0eb56406", content, true, context)
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

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_trendingProduct_vue_vue_type_style_index_0_id_e676f220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(371);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_trendingProduct_vue_vue_type_style_index_0_id_e676f220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_trendingProduct_vue_vue_type_style_index_0_id_e676f220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_trendingProduct_vue_vue_type_style_index_0_id_e676f220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_trendingProduct_vue_vue_type_style_index_0_id_e676f220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-products[data-v-e676f220]{align-items:center;display:flex;justify-content:center;width:100%}.btn[data-v-e676f220]{border:1px solid var(--color_title);color:var(--color_title);font-family:var(--font-style-1);font-size:16px;font-weight:600;line-height:20px;margin-bottom:10px;margin-right:20px;padding:8px 15px;padding-left:8px;padding-right:8px}.btn[data-v-e676f220],.btn[data-v-e676f220]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn[data-v-e676f220]:hover{transform:scale(1.1)}.product-content[data-v-e676f220]{background:var(--background_color_1);padding-bottom:40px}.product-content[data-v-e676f220],.product-text[data-v-e676f220]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.product-text[data-v-e676f220]{text-align:center}.product-tittle[data-v-e676f220],.tittle[data-v-e676f220]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center}.content-products-empty[data-v-e676f220]{align-items:center;display:flex;justify-content:center;text-align:center;width:100%}.content-products-empty p[data-v-e676f220]{color:var(--color_subtext);font-size:18px;font-weight:700;margin-bottom:20px;opacity:.6}@media (min-width:300px){.producto-items-content[data-v-e676f220]{width:90%}.tittle[data-v-e676f220]{color:var(--color_title);font-family:var(--font-style-1);font-size:20px;font-weight:var(--fontWeight);letter-spacing:0}.product-text[data-v-e676f220]{margin-bottom:var(--marginbottomTitle)}}@media (min-width:768px){.producto-items-content[data-v-e676f220]{width:95%}.tittle[data-v-e676f220]{font-size:var(--fontSize)}}@media (min-width:1024px){.product-text[data-v-e676f220]{width:100%}}@media (min-width:1200px){.producto-items-content[data-v-e676f220]{width:1200px}.tittle[data-v-e676f220]{font-size:var(--fontSize);line-height:50px;padding-bottom:10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-trendingProduct.vue?vue&type=template&id=e676f220&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product-content",
    style: [_vm.settingKtrending, _vm.settingGeneral, {
      '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"producto-items-content\" data-v-e676f220>", "</div>", [_vm._ssrNode("<div class=\"product-text\" data-v-e676f220><div class=\"product-tittle\" data-v-e676f220><p class=\"tittle\" data-v-e676f220>" + _vm._ssrEscape(_vm._s(_vm.settingKtrending.title)) + "</p></div></div> "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper pb-10\" data-v-e676f220>", "</div>", _vm._l(_vm.listProduct, function (product) {
    return _vm._ssrNode("<div class=\"swiper-slide\" style=\"margin-right: 40px; height: auto\" data-v-e676f220>", "</div>", [_c('KoproductCard', {
      staticClass: "gifyload",
      attrs: {
        "product": product,
        "settingKcardProduct": _vm.settingKcardProduct,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1);
  }), 0), _vm._ssrNode(" " + (this.fullProducts.length == 0 ? "<div class=\"content-products-empty\" data-v-e676f220><p data-v-e676f220>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"btn-products\" data-v-e676f220>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/productos"
    }
  }, [_c('button', {
    staticClass: "btn"
  }, [_vm._v("Ver todos los productos")])])], 1)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/ko-trendingProduct.vue?vue&type=template&id=e676f220&scoped=true&

// EXTERNAL MODULE: ./components/template11/_productcard/ProductCard.vue + 4 modules
var ProductCard = __webpack_require__(170);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-trendingProduct.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ko_trendingProductvue_type_script_lang_js_ = ({
  components: {
    KoproductCard: ProductCard["a" /* default */]
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    settingKtrending: Object,
    settingGeneral: Object,
    settingKcardProduct: Object
  },
  name: 'Ko-trending',
  data() {
    return {
      swiperOption: {
        slidesPerView: '',
        spaceBetween: '',
        autoplay: {
          delay: 400000000,
          disableOnInteraction: false
        },
        breakpoints: {
          10000: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    listProduct() {
      let tempfullProducts = this.fullProducts.slice(0, 12);
      return tempfullProducts.filter(product => {
        if (product.tag_promocion != '1') {
          return product;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/template11/ko-trendingProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var template11_ko_trendingProductvue_type_script_lang_js_ = (ko_trendingProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/ko-trendingProduct.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(677)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template11_ko_trendingProductvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e676f220",
  "985d342a"
  
)

/* harmony default export */ var ko_trendingProduct = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=72.js.map