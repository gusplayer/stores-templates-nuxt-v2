exports.ids = [108];
exports.modules = {

/***/ 1190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-informationLogos.vue?vue&type=template&id=80003bfa&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex justify-center items-center py-35 lg:py-40 px-10",
    style: `background-color: ${_vm.informationLogos['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full max-w-9/0 h-auto flex flex-col items-center justify-center overflow-hidden\" data-v-80003bfa>", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.idCloudinaryBanner(_vm.informationLogos.img, 'bannerRes', 400)) + " alt=\"banner template15\" class=\"w-full object-cover max-w-[110px] lg:max-w-[130px]\" data-v-80003bfa> <p class=\"w-full text-center my-25 text-25 md:text-32 lg:text-35 xl:text-40\"" + _vm._ssrStyle(null, `color: ${_vm.informationLogos.color_title_1}; font-weight: ${_vm.informationLogos.fontWeighTitle};`, null) + " data-v-80003bfa>" + _vm._ssrEscape("\n      " + _vm._s(_vm.informationLogos.title) + "\n    ") + "</p> "), _vm._ssrNode("<div class=\"max-w-7xl mlg:w-full grid grid-cols-1 lg:grid-cols-2 mlg:grid-cols-4 gap-5 md:gap-4 items-center justify-center mt-30\" data-v-80003bfa>", "</div>", [_vm._l(_vm.informationLogos.values, function (items, index) {
    return _vm._ssrNode("<div class=\"hidden w-full lg:flex flex-col items-center justify-center\" data-v-80003bfa>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinary(items.icono, 150, 150),
        expression: "idCloudinary(items.icono, 150, 150)"
      }],
      staticClass: "object-contain object-center h-full w-full max-w-[70px] max-h-[70px]",
      class: `contentImg${index}`,
      attrs: {
        "width": "70",
        "height": "70",
        "alt": `imgInfo${index}`
      }
    }, []), _vm._ssrNode(" <p class=\"mt-20 mb-5 text-24\"" + _vm._ssrStyle(null, `color: ${items.color_title}; font-weight: ${items.fontWeighTitle};`, null) + " data-v-80003bfa>" + _vm._ssrEscape("\n          " + _vm._s(items.title) + "\n        ") + "</p> <p class=\"text-center text-15\"" + _vm._ssrStyle(null, `color: ${items.color_text}; font-weight: ${items.fontWeighText};`, null) + " data-v-80003bfa>" + _vm._ssrEscape("\n          " + _vm._s(items.text) + "\n        ") + "</p>")], 2);
  }), _vm._ssrNode(" "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "max-w-[350px] flex lg:hidden items-center justify-start"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-80003bfa>" + _vm._ssrList(_vm.informationLogos.values, function (items, index) {
    return "<div class=\"swiper-slide w-full flex flex-col items-center justify-center\" data-v-80003bfa><img" + _vm._ssrAttr("src", _vm.idCloudinary(items.icono, 150, 150)) + " width=\"70\" height=\"70\"" + _vm._ssrAttr("alt", `imgInfo${index}`) + _vm._ssrClass("object-contain object-center h-full w-full max-w-[70px] max-h-[70px]", `contentImg${index}`) + " data-v-80003bfa> <p class=\"text-center mt-20 mb-5 text-24\"" + _vm._ssrStyle(null, `color: ${items.color_title}; font-weight: ${items.fontWeightTitle};`, null) + " data-v-80003bfa>" + _vm._ssrEscape("\n              " + _vm._s(items.title) + "\n            ") + "</p> <p class=\"text-center text-15\"" + _vm._ssrStyle(null, `color: ${items.color_text}; font-weight: ${items.fontWeightText};`, null) + " data-v-80003bfa>" + _vm._ssrEscape("\n              " + _vm._s(items.text) + "\n            ") + "</p></div>";
  }) + "</div>")])], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template15/ko15-informationLogos.vue?vue&type=template&id=80003bfa&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-informationLogos.vue?vue&type=script&lang=js&

/* harmony default export */ var ko15_informationLogosvue_type_script_lang_js_ = ({
  name: 'Ko15InformationLogos',
  mixins: [idCloudinary["a" /* default */]],
  props: {
    informationLogos: Object,
    settingGeneral: Object,
    dataStore: Object
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        slidesPerView: '1',
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
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
// CONCATENATED MODULE: ./components/template15/ko15-informationLogos.vue?vue&type=script&lang=js&
 /* harmony default export */ var template15_ko15_informationLogosvue_type_script_lang_js_ = (ko15_informationLogosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template15/ko15-informationLogos.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(803)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template15_ko15_informationLogosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "80003bfa",
  "3d506750"
  
)

/* harmony default export */ var ko15_informationLogos = __webpack_exports__["default"] = (component.exports);

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

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(804);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("1f75a95a", content, true, context)
};

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_informationLogos_vue_vue_type_style_index_0_id_80003bfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(500);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_informationLogos_vue_vue_type_style_index_0_id_80003bfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_informationLogos_vue_vue_type_style_index_0_id_80003bfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_informationLogos_vue_vue_type_style_index_0_id_80003bfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_informationLogos_vue_vue_type_style_index_0_id_80003bfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-container-horizontal>.swiper-pagination-bullets[data-v-80003bfa],.swiper-pagination-custom[data-v-80003bfa],.swiper-pagination-fraction[data-v-80003bfa]{bottom:-14px;left:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template15-ko15-information-logos.js.map