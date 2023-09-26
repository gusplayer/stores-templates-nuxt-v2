exports.ids = [57];
exports.modules = {

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko10-deals.vue?vue&type=template&id=0736c3b8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-deal",
    style: [_vm.offers, _vm.settingGeneral, {
      '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"content-grid\" data-v-0736c3b8>", "</div>", [_vm._ssrNode("<div class=\"grid-left\" data-v-0736c3b8>", "</div>", [_vm._ssrNode("<div class=\"bg-left\" data-v-0736c3b8></div> "), _vm._ssrNode("<div class=\"content-image-left\" data-v-0736c3b8>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryBanner(_vm.offers.url_img_right, 'banner'),
      expression: "idCloudinaryBanner(offers.url_img_right, 'banner')"
    }],
    staticClass: "img-left",
    attrs: {
      "alt": "img-left"
    }
  }, [])])], 2), _vm._ssrNode(" <div class=\"grid-right\"" + _vm._ssrStyle(null, `background-image: url(${_vm.idCloudinaryBanner(_vm.offers.url_img_left, 'banner')});`, null) + " data-v-0736c3b8><div class=\"grid-item-tittle\" data-v-0736c3b8><p class=\"txt-tittle\" data-v-0736c3b8>" + _vm._ssrEscape(_vm._s(_vm.offers.title)) + "</p></div> <div class=\"grid-item-border\" data-v-0736c3b8></div> <div class=\"grid-item-subtittle\" data-v-0736c3b8><p class=\"txt-subtittle\" data-v-0736c3b8>" + _vm._ssrEscape(_vm._s(_vm.offers.subtitle)) + "</p></div> <div class=\"grid-item-price\" data-v-0736c3b8><p class=\"txt-price-1\" data-v-0736c3b8>" + _vm._ssrEscape("\n          " + _vm._s(_vm.offers.Price) + "\n          ") + "<span class=\"txt-price-2\" data-v-0736c3b8>" + _vm._ssrEscape(_vm._s(_vm.offers.Offerts)) + "</span></p></div> " + (_vm.offers.visibleBtn ? "<div class=\"grid-item-button\" data-v-0736c3b8><a" + _vm._ssrAttr("href", _vm.offers.url_redirect ? _vm.offers.url_redirect : '') + " rel=\"noreferrer noopener\" class=\"btn\" data-v-0736c3b8>" + _vm._ssrEscape("\n          " + _vm._s(_vm.offers.displayName) + "\n        ") + "</a></div>" : "<!---->") + "</div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/Ko10-deals.vue?vue&type=template&id=0736c3b8&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko10-deals.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko10_dealsvue_type_script_lang_js_ = ({
  name: 'Ko10-deals',
  props: {
    offers: Object,
    settingGeneral: Object
  },
  mixins: [idCloudinary["a" /* default */]]
});
// CONCATENATED MODULE: ./components/template10/Ko10-deals.vue?vue&type=script&lang=js&
 /* harmony default export */ var template10_Ko10_dealsvue_type_script_lang_js_ = (Ko10_dealsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/Ko10-deals.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(644)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template10_Ko10_dealsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0736c3b8",
  "e495528a"
  
)

/* harmony default export */ var Ko10_deals = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(645);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("05b8d767", content, true, context)
};

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

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_deals_vue_vue_type_style_index_0_id_0736c3b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(371);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_deals_vue_vue_type_style_index_0_id_0736c3b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_deals_vue_vue_type_style_index_0_id_0736c3b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_deals_vue_vue_type_style_index_0_id_0736c3b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_deals_vue_vue_type_style_index_0_id_0736c3b8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-deal[data-v-0736c3b8]{align-items:center;background:var(--background_color_1);display:flex;flex-direction:column;justify-items:center;width:100%}.content-grid[data-v-0736c3b8],.grid-left[data-v-0736c3b8],.grid-right[data-v-0736c3b8]{align-items:center;justify-content:center}.grid-left[data-v-0736c3b8],.grid-right[data-v-0736c3b8]{display:flex;flex-direction:column;height:100%;width:100%}.content-image-left[data-v-0736c3b8]{cursor:pointer;display:flex;justify-content:flex-start;position:relative;transition-duration:.15s;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-image-left[data-v-0736c3b8],.img-left[data-v-0736c3b8]{height:auto;overflow:hidden;transition-property:all;width:100%}.img-left[data-v-0736c3b8]{-o-object-fit:cover;object-fit:cover;transition-duration:.15s;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.img-left[data-v-0736c3b8]:hover{overflow:hidden;position:relative;transform:scale(1.1);transition-duration:.15s;transition-duration:.5s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.grid-right[data-v-0736c3b8]{background-position:50%;background-repeat:no-repeat}.grid-item-button[data-v-0736c3b8],.grid-item-price[data-v-0736c3b8],.grid-item-tittle[data-v-0736c3b8]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center;width:100%}.txt-price-1[data-v-0736c3b8],.txt-price-2[data-v-0736c3b8],.txt-subtittle[data-v-0736c3b8],.txt-tittle[data-v-0736c3b8]{font-family:var(--font-style-1)!important;text-align:center}@media (min-width:300px){.content-grid[data-v-0736c3b8]{grid-gap:1rem;display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr));width:90%}.txt-tittle[data-v-0736c3b8]{color:var(--color_title);font-size:var(--fontSizeTitle);font-weight:var(--fontWeightTitle);margin-bottom:30px;margin-top:30px}.grid-item-border[data-v-0736c3b8]{background-color:var(--color_border);height:2px;margin-bottom:30px;width:60px}.txt-subtittle[data-v-0736c3b8]{color:var(--color_subtitle);font-size:15px;margin-bottom:30px}.txt-price-1[data-v-0736c3b8]{color:var(--color_price);font-size:28px;font-weight:600;line-height:1px}.txt-price-2[data-v-0736c3b8]{color:var(--color_offerts);font-size:18px;font-weight:500;line-height:1px;text-decoration-line:line-through}.grid-item-price[data-v-0736c3b8]{margin-bottom:60px}.btn[data-v-0736c3b8]{align-items:center;border-color:var(--colorBorderBTn);border-radius:var(--radius_btn);border-width:1px;color:var(--colorTextBTn);display:flex;font-size:16px;font-weight:600;height:58px;justify-content:center;padding-left:60px;padding-right:60px;width:auto}.btn[data-v-0736c3b8]:hover{background-color:var(--hover_Bg_btn);border-color:var(--hover_Bg_btn);color:var(--hover_text_btn)}.grid-right[data-v-0736c3b8]{padding-left:10px;padding-right:10px}.content-deal[data-v-0736c3b8],.grid-right[data-v-0736c3b8]{padding-bottom:20px}.content-deal[data-v-0736c3b8]{padding-top:20px}}@media (min-width:768px){.content-grid[data-v-0736c3b8]{width:95%}.txt-subtittle[data-v-0736c3b8]{margin-bottom:60px}.grid-item-price[data-v-0736c3b8]{margin-bottom:80px}.grid-right[data-v-0736c3b8]{padding-bottom:0;padding-left:20px;padding-right:20px}.content-deal[data-v-0736c3b8]{padding-bottom:40px;padding-top:40px}}@media (min-width:1024px){.content-grid[data-v-0736c3b8]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.btn[data-v-0736c3b8]{border-width:1px;padding-left:40px;padding-right:40px;width:auto}}@media (min-width:1400px){.content-grid[data-v-0736c3b8]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));max-width:1400px;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template10-ko10-deals.js.map