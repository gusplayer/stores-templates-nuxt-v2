exports.ids = [16];
exports.modules = {

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4886c8bd", content, true, context)
};

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_532e63ae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_532e63ae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_532e63ae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_532e63ae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_532e63ae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-productDetail[data-v-532e63ae]{align-items:center;background:var(--background_color_1);display:flex;justify-content:center;padding-top:120px;width:100%}.container-productDetail-loading[data-v-532e63ae]{background:var(--background_color_1);height:calc(100vh - 420px)}.container-productDetail[data-v-532e63ae],.container-productDetail-loading[data-v-532e63ae]{align-items:center;display:flex;flex-direction:column;justify-content:space-between;max-width:1300px;padding:50px 30px 30px;width:100%}.container-productDetail[data-v-532e63ae]{position:relative}.section[data-v-532e63ae]{display:flex;width:100%}.section-suggesProduct[data-v-532e63ae]{width:100%;z-index:1!important}.wrapper-left[data-v-532e63ae]{display:flex;flex:2;flex-direction:row;padding-bottom:10px;width:100%}.photos_responsive[data-v-532e63ae]{display:none}.photos[data-v-532e63ae]{display:flex;margin-right:30px;max-height:430px;position:relative}.swiper-wrapper[data-v-532e63ae]{position:relative;width:100%}.swiper-prev[data-v-532e63ae]{top:0}.swiper-next[data-v-532e63ae],.swiper-prev[data-v-532e63ae]{left:20px;position:absolute;z-index:2}.swiper-next[data-v-532e63ae]{bottom:0;font-size:25px}.icon-swiper[data-v-532e63ae]{color:var(--color_icon);cursor:pointer;font-size:60px}.icon-swiper[data-v-532e63ae]:hover{color:var(--hover_card)}.photos_selected[data-v-532e63ae]{display:flex;flex-direction:column;justify-content:stretch;max-height:100px;width:100%}.img-list[data-v-532e63ae]{border-radius:6px;cursor:pointer;-o-object-fit:contain;object-fit:contain;vertical-align:top}.img-list[data-v-532e63ae],.video[data-v-532e63ae]{height:100px;margin-bottom:10px;width:100px}.video[data-v-532e63ae]{border-radius:5px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.wrapper-photo_main[data-v-532e63ae]{height:450px;margin-right:25px;max-width:650px;min-height:450px;position:relative;width:100%}.photo_main[data-v-532e63ae]{border-radius:10px;height:430px;max-height:430px;max-width:645px;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center;width:100%}.wrapper-right[data-v-532e63ae]{border-left:1px solid var(--color_border);display:flex;flex:1;flex-direction:column;padding-bottom:10px;width:100%}.content-right[data-v-532e63ae]{margin-left:20px}.text-name[data-v-532e63ae]{color:var(--color_title);font-family:var(--font-style-1);font-size:34px;font-weight:400;line-height:1.2;margin-bottom:20px}.text-marca[data-v-532e63ae]{color:var(--color_description);font-size:16px;font-stretch:semi-condensed;font-style:normal}.text-promocion[data-v-532e63ae]{color:rgba(55,4,4,.61);font-size:14px;font-weight:700;margin-top:5px;-webkit-text-decoration:line-through;text-decoration:line-through}.wrapper-price[data-v-532e63ae]{align-items:flex-start;display:flex;flex-direction:row;justify-content:left}.wrapper-price>p[data-v-532e63ae]:nth-child(2){margin-left:5px}.text-precio[data-v-532e63ae]{color:var(--color_price);font-family:var(--font-style-3);font-size:22px;font-weight:600;line-height:1.2;margin-bottom:20px}.content_stock[data-v-532e63ae]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.icon-stock[data-v-532e63ae]{fill:var(--color_title);margin-right:5px}.content-quanti-btnShop[data-v-532e63ae]{align-items:center;border-bottom:1px solid var(--color_border);display:flex;flex-direction:row;justify-content:flex-start;margin-top:15px;padding-bottom:30px;width:100%}.stock-text[data-v-532e63ae]{color:var(--color_title);font-family:var(--font-style-3);font-size:14px;font-weight:600;line-height:1.2}.card-descuento[data-v-532e63ae]{background:#35dd8d;border-radius:3px;color:#fff;font-size:12px;margin-top:5px;padding:0 5px}.content-text-desc[data-v-532e63ae]{margin-bottom:10px;margin-top:10px}.text-desc[data-v-532e63ae]{color:var(--color_title);font-size:14px;font-weight:400;line-height:1.5;text-decoration-color:currentcolor;text-decoration-line:none;text-decoration-style:solid;-webkit-text-decoration:none;text-decoration:none}.content-variant[data-v-532e63ae]{margin-bottom:30px;margin-top:15px}.text-variant[data-v-532e63ae]{font-weight:700}.text-unidades[data-v-532e63ae],.text-variant[data-v-532e63ae]{color:var(--color_title);font-size:14px}.text-unidades[data-v-532e63ae]{font-weight:600}.text-garantia[data-v-532e63ae],.text-unidades[data-v-532e63ae]{font-family:var(--font-style-3)}.text-garantia[data-v-532e63ae]{color:var(--color_description);font-size:14px;font-weight:700;margin-left:5px}.content_buy_action[data-v-532e63ae]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start}.transport-icon[data-v-532e63ae]{align-items:center;color:#00a650;display:flex;font-family:var(--font-style-3);font-weight:700;justify-content:center;margin-bottom:10px;width:100%}.content_card-info[data-v-532e63ae]{align-items:flex-end;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:10px;width:100%}.text-card-info-sould[data-v-532e63ae]{color:#ed2353;font-family:var(--font-style-3);font-size:16px;font-weight:700;margin-left:8px}.card-info-1[data-v-532e63ae]{background:#e71f77;color:#fff}.card-info-1[data-v-532e63ae],.card-info-2[data-v-532e63ae]{align-items:center;border-radius:5px;display:flex;font-size:12px;justify-content:center;margin-bottom:10px;padding:1px 4px}.card-info-2[data-v-532e63ae]{background:#35dd8d;color:#333;font-weight:700;margin-right:10px}.item-info-product[data-v-532e63ae]{margin-top:10px}.content-button[data-v-532e63ae]{display:flex;flex-direction:row;margin-left:15px}.category_product[data-v-532e63ae]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-top:15px;width:100%}.category-beffore[data-v-532e63ae]{color:var(--color_title);font-weight:600}.category-beffore[data-v-532e63ae],.category-text[data-v-532e63ae]{font-family:var(--font-style-3);font-size:14px;line-height:1.2}.category-text[data-v-532e63ae]{color:var(--color_description);font-weight:400;margin-left:5px}.content-shared[data-v-532e63ae]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-top:10px}.btn-facebook[data-v-532e63ae]{background-color:transparent;border:0;border-radius:5px;color:#1877f2;cursor:pointer;display:flex;justify-content:center;margin-right:20px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-facebook[data-v-532e63ae]:hover{color:#000}.btn-whatsapp[data-v-532e63ae]{background-color:transparent;border:0;border-radius:5px;color:#25d366;cursor:pointer;display:flex;justify-content:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-whatsapp[data-v-532e63ae]:hover{color:#000}.wp-icon[data-v-532e63ae]{bottom:2px;font-size:27px}.content-float-info[data-v-532e63ae]{background:#efefef!important;border-radius:5px;display:none;flex-direction:column;max-width:385px;padding-top:10px;transition:all 2s ease-out;width:100%;z-index:3}.whatsapp[data-v-532e63ae]{fill:#27d367;cursor:pointer;margin-left:20px;width:30px}.btn[data-v-532e63ae]{align-items:center;background-color:var(--color_background_btn);border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);cursor:pointer;font-family:var(--font-style-3);font-size:13px;font-weight:600;justify-content:center;letter-spacing:.3px;line-height:18px;padding:12px 20px;text-transform:uppercase;transition:color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease}.btn[data-v-532e63ae]:hover{background-color:var(--hover_card);border:2px solid var(--hover_card);color:var(--hover_text)}.btn-disabled[data-v-532e63ae]{align-items:center;background-color:gray;border:2px solid gray;border-radius:var(--radius_btn);color:#fff;cursor:pointer;font-size:13px;font-weight:600;justify-content:center;letter-spacing:.3px;line-height:18px;padding:12px 20px;text-transform:uppercase;transition:color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease}.quantity[data-v-532e63ae]{box-sizing:border-box;display:flex;flex-direction:row;max-width:240px;position:relative}.text-quantity[data-v-532e63ae]{align-self:center;color:var(--color_description);font-size:14px;font-weight:700;margin-right:15px}.quantity_remove[data-v-532e63ae]{border:1px solid var(--color_border);border-bottom-left-radius:var(--radius_btn);border-top-left-radius:var(--radius_btn)}.quantity_remove[data-v-532e63ae],.quantity_value[data-v-532e63ae]{background:transparent;height:42px;width:30px}.quantity_value[data-v-532e63ae]{align-items:center;border-style:solid;border-bottom:1px solid var(--color_border);border-left:1px var(--color_border);border-right:1px var(--color_border);border-top:1px solid var(--color_border);color:var(--color_title);display:flex;font-size:14px;justify-content:center}.quantity_add[data-v-532e63ae]{background:transparent;border:1px solid var(--color_border);border-bottom-right-radius:var(--radius_btn);border-top-right-radius:var(--radius_btn);height:42px;width:30px}.quantity_add[data-v-532e63ae]:hover,.quantity_remove[data-v-532e63ae]:hover{background:var(--hover_card)}.icon[data-v-532e63ae]{color:var(--color_price);font-size:16px}.quantity_add:hover .icon[data-v-532e63ae],.quantity_remove:hover .icon[data-v-532e63ae]{color:var(--hover_text)}.features[data-v-532e63ae]{border-top:1px solid var(--color_border);display:flex;width:100%}.container-alerta[data-v-532e63ae]{align-items:center;background-color:#fae84b;border:1px solid #e6d542;border-radius:6px;bottom:-32px;color:#000;display:flex;font-size:14px;justify-content:center;left:95px;position:absolute;width:130px}.alerta[data-v-532e63ae]{padding:5px;text-align:center}@media (max-width:1250px){.photo_main[data-v-532e63ae]{width:600px}}@media (max-width:1185px){.photo_main[data-v-532e63ae]{width:500px}}@media (max-width:1035px){.photo_main[data-v-532e63ae]{width:450px}}@media (max-width:960px){.photo_main[data-v-532e63ae]{width:400px}}@media (max-width:890px){.photo_main[data-v-532e63ae]{width:350px}}@media (max-width:810px){.photos[data-v-532e63ae]{margin-right:10px}.wrapper-left[data-v-532e63ae]{margin-right:15px}}@media (max-width:768px){.wrapper-left[data-v-532e63ae]{flex:1}.photos[data-v-532e63ae]{margin-right:10px}.photos[data-v-532e63ae],.wrapper-photo_main[data-v-532e63ae]{display:none}.photos_responsive[data-v-532e63ae]{box-sizing:border-box;display:flex;height:375px;margin-bottom:10px;max-width:400px;overflow:hidden;width:100%}}@media (max-width:725px){.container-productDetail[data-v-532e63ae]{align-items:center;justify-content:center;padding:0}.section[data-v-532e63ae]{flex-direction:column}.wrapper-left[data-v-532e63ae]{align-items:center;justify-content:center}.wrapper-right[data-v-532e63ae]{border-left:0;padding-bottom:2px}.product[data-v-532e63ae]{align-items:center;display:flex;flex-direction:column;margin-bottom:70px;min-height:97vh;position:relative;width:100%}.wrapper[data-v-532e63ae]{padding:15px}.features[data-v-532e63ae]{border-top:none}}@media (max-width:600px){.container-productDetail[data-v-532e63ae]{padding:0}.wrapper-left[data-v-532e63ae]{padding-bottom:0}.wrapper-right[data-v-532e63ae]{margin-bottom:15px}.content-right[data-v-532e63ae]{margin-left:15px;margin-right:15px}.text-name[data-v-532e63ae]{font-size:20px;font-weight:500}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/Ko-ProductDetail.vue?vue&type=template&id=532e63ae&scoped=true&
var render = function render() {
  var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3, _this$settingByTempla4, _this$settingByTempla5, _this$settingByTempla6;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productDetail",
    style: [_vm.settingByTemplate7[0].detailsProduct, _vm.settingByTemplate7[0].settingGeneral, _vm.settingByTemplate7[0].card]
  }, [_vm.loading ? _vm._ssrNode("<div class=\"container-productDetail-loading\" data-v-532e63ae>", "</div>") : _vm._ssrNode("<div class=\"container-productDetail\"" + _vm._ssrStyle(null, [{
    '--font-style-1': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate7) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.settingGeneral) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.fount_1) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'David libre'
  }, {
    '--font-style-3': (_this$settingByTempla4 = (_this$settingByTempla5 = this.settingByTemplate7) === null || _this$settingByTempla5 === void 0 ? void 0 : (_this$settingByTempla6 = _this$settingByTempla5.settingGeneral) === null || _this$settingByTempla6 === void 0 ? void 0 : _this$settingByTempla6.fount_3) !== null && _this$settingByTempla4 !== void 0 ? _this$settingByTempla4 : 'Lora'
  }], null) + " data-v-532e63ae>", "</div>", [_vm._ssrNode("<div class=\"section\" data-v-532e63ae>", "</div>", [_vm._ssrNode("<div class=\"wrapper-left\" data-v-532e63ae>", "</div>", [[_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "photos"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-532e63ae><div class=\"swiper-slide photos_selected\" data-v-532e63ae><img" + _vm._ssrAttr("src", _vm.idCloudinary(_vm.data.detalle.foto_cloudinary, 150, 150)) + " alt=\"Product Img\" class=\"img-list\" data-v-532e63ae></div> " + _vm._ssrList(_vm.data.fotos, function (foto, itemsfoto) {
    return "<div class=\"swiper-slide photos_selected\" data-v-532e63ae><img" + _vm._ssrAttr("src", _vm.idCloudinary(foto.foto_cloudinary, 150, 150)) + " alt=\"Product Img\" class=\"img-list\" data-v-532e63ae></div>";
  }) + " <div class=\"swiper-slide photos_selected\" data-v-532e63ae>" + (_vm.idYoutube ? "<img" + _vm._ssrAttr("src", `https://img.youtube.com/vi/${_vm.idYoutube}/0.jpg`) + " alt=\"Product Img\" class=\"video\"" + _vm._ssrStyle(null, null, {
    display: _vm.idYoutube ? '' : 'none'
  }) + " data-v-532e63ae>" : "<!---->") + "</div></div> "), _vm.data.fotos.length > 3 ? _vm._ssrNode("<div class=\"swiper-prev\" data-v-532e63ae>", "</div>", [_c('FlechaUp-icon', {
    staticClass: "icon-swiper"
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.data.fotos.length > 3 ? _vm._ssrNode("<div class=\"swiper-next\" data-v-532e63ae>", "</div>", [_c('Flechadown-icon', {
    staticClass: "icon-swiper"
  })], 1) : _vm._e()], 2)], _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-photo_main\" data-v-532e63ae>", "</div>", [this.activeZoom ? _vm._ssrNode("<div class=\"photo_main\"" + _vm._ssrStyle(null, null, {
    display: !_vm.existYoutube ? '' : 'none'
  }) + " data-v-532e63ae>", "</div>", [_c('img', {
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
  }) + " data-v-532e63ae>", "</div>", [_c('zoom', {
    attrs: {
      "photo": _vm.selectPhotoUrl
    }
  })], 1) : _vm._e(), _vm._ssrNode(" <iframe" + _vm._ssrAttr("src", `https://www.youtube.com/embed/${_vm.idYoutube}?rel=0&controls=0&showinfo=0`) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\" class=\"photo_main\"" + _vm._ssrStyle(null, null, {
    display: _vm.existYoutube ? '' : 'none'
  }) + " data-v-532e63ae></iframe>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"photos_responsive\" data-v-532e63ae>", "</div>", [_c('ProductSlide', {
    attrs: {
      "photos": _vm.data.fotos,
      "photo": _vm.data.detalle.foto_cloudinary,
      "idYoutube": _vm.idYoutube
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-right\" data-v-532e63ae>", "</div>", [_vm._ssrNode("<div class=\"content-right\" data-v-532e63ae>", "</div>", [_vm._ssrNode("<p class=\"text-name\" data-v-532e63ae>" + _vm._ssrEscape(_vm._s(_vm.data.detalle.nombre)) + "</p> <p class=\"text-promocion\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-532e63ae>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(_vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor ? Math.trunc(_vm.salesData.precio / (1 - _vm.data.info.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p> <div" + _vm._ssrClass("wrapper-price", _vm.data.info.tag_promocion == 1 ? '' : 'wrapper-price_space') + " data-v-532e63ae><p class=\"text-precio\"" + _vm._ssrStyle(null, null, {
    display: _vm.salesData.precio ? '' : 'none'
  }) + " data-v-532e63ae>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.salesData.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p> <p class=\"card-descuento\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-532e63ae>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.info.promocion_valor) + "% OFF\n            ") + "</p></div> <div class=\"content_buy_action\" data-v-532e63ae>" + (_vm.data.detalle.envio_gratis == 1 && _vm.salesData.unidades > 0 ? "<div data-v-532e63ae><div class=\"transport-icon\" data-v-532e63ae><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" fill=\"#00a650\" class=\"transporte-icon mr-2\" data-v-532e63ae><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-532e63ae></path></svg> <p data-v-532e63ae>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_tarifaPrecio'))) + "</p></div></div>" : "<!---->") + " " + (_vm.spent && _vm.salesData.unidades == 0 ? "<div class=\"content_card-info\" data-v-532e63ae><div class=\"icon-card-info-sould\" data-v-532e63ae><svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" height=\"50px\" viewBox=\"0 0 512 512\" width=\"50px\" data-v-532e63ae><g data-v-532e63ae><g data-v-532e63ae><path d=\"m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z\" fill=\"#cd3232\" data-v-532e63ae></path></g> <g data-v-532e63ae><path d=\"m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#cd3232\" data-v-532e63ae></path></g> <g data-v-532e63ae><path d=\"m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#ff4646\" data-v-532e63ae></path></g> <g data-v-532e63ae><circle cx=\"96\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-532e63ae></circle></g> <g data-v-532e63ae><circle cx=\"384\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-532e63ae></circle></g> <g data-v-532e63ae><path d=\"m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z\" fill=\"#463c4b\" data-v-532e63ae></path></g> <g data-v-532e63ae><circle cx=\"240\" cy=\"92.457\" fill=\"#ff4646\" r=\"24\" data-v-532e63ae></circle></g> <g data-v-532e63ae><g data-v-532e63ae><path d=\"m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z\" fill=\"#32283c\" data-v-532e63ae></path></g> <g data-v-532e63ae><path d=\"m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#32283c\" data-v-532e63ae></path></g> <g data-v-532e63ae><path d=\"m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#e6e6eb\" data-v-532e63ae></path></g> <g data-v-532e63ae><path d=\"m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z\" fill=\"#32283c\" data-v-532e63ae></path></g> <g data-v-532e63ae><path d=\"m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z\" fill=\"#32283c\" data-v-532e63ae></path></g> <g data-v-532e63ae><path d=\"m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z\" fill=\"#e6e6eb\" data-v-532e63ae></path></g> <path d=\"m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" fill=\"#e6e6eb\" data-v-532e63ae></path></g></g></svg></div> <div class=\"text-card-info-sould\" data-v-532e63ae>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('productdetail_productoAgotado')) + "\n              ") + "</div></div>" : "<!---->") + "</div> <div class=\"content_stock\" data-v-532e63ae>" + (_vm.salesData.unidades > 0 ? "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" class=\"icon-stock\" data-v-532e63ae><path d=\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\" data-v-532e63ae></path></svg>" : "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" class=\"icon-stock\" data-v-532e63ae><path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\" data-v-532e63ae></path></svg>") + " <p class=\"stock-text\" data-v-532e63ae>" + _vm._ssrEscape("\n              " + _vm._s(_vm.salesData.unidades) + " " + _vm._s(_vm.$t('productdetail_stock')) + "\n            ") + "</p></div> "), this.data.detalle.con_variante > 0 ? _vm._ssrNode("<div class=\"content-variant\" data-v-532e63ae>", "</div>", _vm._l(_vm.data.variantes, function (variant, index) {
    return _vm._ssrNode("<div data-v-532e63ae>", "</div>", [_vm._ssrNode("<label for=\"variant name\" class=\"text-variant\" data-v-532e63ae>" + _vm._ssrEscape(_vm._s(variant.nombre) + ":") + "</label> "), _c('SelectGroup', {
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
      }, [_vm._v("\n                  " + _vm._s(item.option) + "\n                ")]);
    }), 0)], 2);
  }), 0) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass(null, {
    disabled: !_vm.salesData.estado
  }) + " data-v-532e63ae>", "</div>", [_vm._ssrNode("<div class=\"content-quanti-btnShop\" data-v-532e63ae>", "</div>", [_vm._ssrNode("<div class=\"quantity\" data-v-532e63ae>", "</div>", [_vm._ssrNode("<button class=\"quantity_remove\" data-v-532e63ae>", "</button>", [_c('menos-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" <p class=\"quantity_value\" data-v-532e63ae>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p> "), _vm._ssrNode("<button class=\"quantity_add\" data-v-532e63ae>", "</button>", [_c('mas-icon', {
    staticClass: "icon"
  })], 1)], 2), _vm._ssrNode(" <div class=\"content-button\" data-v-532e63ae>" + (!_vm.spent && this.salesData.estado && (_vm.data.info.tipo_servicio == null || _vm.data.info.tipo_servicio == '0') ? "<button class=\"btn\" data-v-532e63ae>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_añadiralcarrito')) + "\n                ") + "</button>" : !this.salesData.estado ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-532e63ae>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n                ") + "</button>" : !_vm.spent && _vm.data.info.tipo_servicio == '1' ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-532e63ae>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n                ") + "</button>" : _vm.spent ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-532e63ae>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                ") + "</button>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"item-info-product\" data-v-532e63ae>", "</div>", [_vm._ssrNode((_vm.data.info.descripcion_corta ? "<div class=\"content_buy_action\" data-v-532e63ae><p class=\"text-unidades\" data-v-532e63ae>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_informacion')) + "\n                ") + "</p> <span class=\"text-garantia\" data-v-532e63ae>" + _vm._ssrEscape(_vm._s(_vm.data.info.descripcion_corta)) + "</span></div>" : "<!---->") + " " + (_vm.data.info.garantia ? "<div class=\"content_buy_action\" data-v-532e63ae><p class=\"text-unidades\" data-v-532e63ae>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_garantia')) + "\n                ") + "</p> <span class=\"text-garantia\" data-v-532e63ae>" + _vm._ssrEscape(_vm._s(_vm.data.info.garantia)) + "</span></div>" : "<!---->") + " <div class=\"category_product\" data-v-532e63ae><p class=\"category-beffore\" data-v-532e63ae>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_categoria')) + ":\n                ") + "</p> <p class=\"category-text\" data-v-532e63ae>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.data.detalle.categoria_producto.nombre_categoria_producto) + "\n                ") + "</p></div> " + (_vm.userDropshipping.userName ? "<div class=\"category_product\" data-v-532e63ae><p class=\"category-beffore\" style=\"margin-right: 10px\" data-v-532e63ae>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_dropshipping')) + "\n                ") + "</p> <p class=\"category-text\" data-v-532e63ae>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.userDropshipping.userName) + "\n                ") + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"content-shared\" data-v-532e63ae>", "</div>", [_vm._ssrNode("<p class=\"text-unidades\" style=\"margin-right: 10px\" data-v-532e63ae>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_compartir')) + "\n                ") + "</p> "), _vm._ssrNode("<a" + _vm._ssrAttr("href", this.sharingFacebook) + " target=\"_blank\" rel=\"noreferrer noopener\" class=\"btn-facebook\" data-v-532e63ae>", "</a>", [_c('facebook-icon', {
    staticClass: "wp-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"btn-whatsapp\" data-v-532e63ae>", "</button>", [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  })], 1)], 2)], 2)], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section\" data-v-532e63ae>", "</div>", [_vm._ssrNode("<div class=\"features\" data-v-532e63ae>", "</div>", [_c('KoDescription', {
    attrs: {
      "dataStore": _vm.dataStore,
      "data": _vm.data,
      "envio": _vm.envio
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-suggesProduct\" data-v-532e63ae>", "</div>", [_c('KoSuggesProduct', {
    attrs: {
      "category": this.category.slice(0, 8)
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/Ko-ProductDetail.vue?vue&type=template&id=532e63ae&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(14);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/Ko-ProductDetail.vue?vue&type=script&lang=js&



/* harmony default export */ var Ko_ProductDetailvue_type_script_lang_js_ = ({
  name: 'Ko7-ProductDetail-1',
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  components: {
    SelectGroup: () => __webpack_require__.e(/* import() */ 266).then(__webpack_require__.bind(null, 1170)),
    KoDescription: () => __webpack_require__.e(/* import() */ 229).then(__webpack_require__.bind(null, 1171)),
    KoSuggesProduct: () => __webpack_require__.e(/* import() */ 197).then(__webpack_require__.bind(null, 999)),
    ProductSlide: () => __webpack_require__.e(/* import() */ 265).then(__webpack_require__.bind(null, 1172)),
    Zoom: () => __webpack_require__.e(/* import() */ 267).then(__webpack_require__.bind(null, 1173))
  },
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebookPixel: Object,
    settingByTemplate7: Array
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
    changeSlide() {
      this.swiper.slidePrev(700, false);
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
// CONCATENATED MODULE: ./components/template7/Ko-ProductDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var template7_Ko_ProductDetailvue_type_script_lang_js_ = (Ko_ProductDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/Ko-ProductDetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(177)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template7_Ko_ProductDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "532e63ae",
  "89c3696a"
  
)

/* harmony default export */ var Ko_ProductDetail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
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

/***/ })

};;
//# sourceMappingURL=ko-product-detail.js.map