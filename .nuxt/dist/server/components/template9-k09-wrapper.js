exports.ids = [184];
exports.modules = {

/***/ 1233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/K09-Wrapper.vue?vue&type=template&id=9e39e53e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-content",
    style: [_vm.wrapper, _vm.settingGeneral]
  }, [_vm._ssrNode("<div" + _vm._ssrStyle(null, [{
    '--font-style-1': _vm.settingGeneral && _vm.settingGeneral.fount_1 ? _vm.settingGeneral.fount_1 : 'Poppins'
  }], null) + " data-v-9e39e53e>", "</div>", [_vm._ssrNode("<div class=\"wrapper-items-content\" data-v-9e39e53e><div class=\"product-text\" data-v-9e39e53e><div class=\"product-tittle\" data-v-9e39e53e><span class=\"tittle\" data-v-9e39e53e>" + _vm._ssrEscape(_vm._s(_vm.wrapper.title)) + "</span></div></div></div> "), _vm._ssrNode("<div class=\"wrapper-items\" data-v-9e39e53e>", "</div>", _vm._l(_vm.wrapper.values, function (imagen, index) {
    return _vm._ssrNode("<div class=\"grid-imgs\" data-v-9e39e53e>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, imagen.url_redirect ? 'cursorPointer' : null) + " data-v-9e39e53e>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinary(imagen.url_img, 850, 850),
        expression: "idCloudinary(imagen.url_img, 850, 850)"
      }],
      staticClass: "img-wrapp",
      attrs: {
        "alt": "wrapper-images"
      }
    }, [])])]);
  }), 0)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/K09-Wrapper.vue?vue&type=template&id=9e39e53e&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/K09-Wrapper.vue?vue&type=script&lang=js&

/* harmony default export */ var K09_Wrappervue_type_script_lang_js_ = ({
  name: 'K09Wrapper',
  mixins: [idCloudinary["a" /* default */]],
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    wrapper: {
      type: Object,
      required: true
    },
    settingGeneral: {
      type: Object,
      required: true
    }
  },
  methods: {
    openURL(index) {
      if (this.wrapper.values[index].url_redirect) {
        window.open(`${this.wrapper.values[index].url_redirect}`, '_blank', 'noreferrer noopener');
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template9/K09-Wrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var template9_K09_Wrappervue_type_script_lang_js_ = (K09_Wrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/K09-Wrapper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(873)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template9_K09_Wrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9e39e53e",
  "24941ed0"
  
)

/* harmony default export */ var K09_Wrapper = __webpack_exports__["default"] = (component.exports);

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

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(874);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("094d29a9", content, true, context)
};

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K09_Wrapper_vue_vue_type_style_index_0_id_9e39e53e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(509);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K09_Wrapper_vue_vue_type_style_index_0_id_9e39e53e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K09_Wrapper_vue_vue_type_style_index_0_id_9e39e53e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K09_Wrapper_vue_vue_type_style_index_0_id_9e39e53e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K09_Wrapper_vue_vue_type_style_index_0_id_9e39e53e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".img-wrapp[data-v-9e39e53e]{transition:all .15s ease-in}.cursorPointer[data-v-9e39e53e]{cursor:pointer}.img-wrapp[data-v-9e39e53e]:hover{position:relative;transform:scale(.95);transition:all .15s ease-in}.wrapper-content[data-v-9e39e53e]{background:var(--background_color_1);padding-bottom:20px;width:100%}.wrapper-content[data-v-9e39e53e],.wrapper-items-content[data-v-9e39e53e]{align-items:center;display:flex;flex-direction:column;justify-content:center}.wrapper-items-content[data-v-9e39e53e]{width:100%}.wrapper-items[data-v-9e39e53e]{align-items:center;justify-content:center}.product-text[data-v-9e39e53e]{margin-bottom:60px;margin-top:60px;width:100%}.product-text[data-v-9e39e53e],.product-tittle[data-v-9e39e53e]{align-items:center;display:flex;flex-direction:column;justify-content:center}.product-tittle[data-v-9e39e53e]{text-align:center}.tittle[data-v-9e39e53e]{align-items:center;color:var(--color_title);display:flex;flex-direction:column;font-family:var(--font-style-1);font-weight:700;justify-content:center}@media (min-width:300px){.product-tittle[data-v-9e39e53e]{width:100%}.tittle[data-v-9e39e53e]{font-size:30px;letter-spacing:0;line-height:1.1}.wrapper-items[data-v-9e39e53e]{grid-gap:.5rem;display:grid;gap:.5rem;grid-template-columns:repeat(2,minmax(0,1fr))}.img-wrapp[data-v-9e39e53e]{width:100%}.wrapper-items[data-v-9e39e53e]{width:96vw}}@media (min-width:640px){.wrapper-items[data-v-9e39e53e]{grid-gap:.5rem;display:grid;gap:.5rem;grid-template-columns:repeat(3,minmax(0,1fr));width:98vw}.tittle[data-v-9e39e53e]{font-size:36px;line-height:34px}.product-text[data-v-9e39e53e]{margin-bottom:0;margin-top:0;padding-bottom:50px;padding-top:30px}}@media (min-width:1024px){.wrapper-items[data-v-9e39e53e]{grid-gap:.5rem;display:grid;gap:.5rem;grid-template-columns:repeat(5,minmax(0,1fr))}.img-wrapp[data-v-9e39e53e]{transition:all .15s ease-in;width:90vw}.wrapper-items[data-v-9e39e53e]{width:99vw}}@media (min-width:1920px){.product-tittle[data-v-9e39e53e]{width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template9-k09-wrapper.js.map