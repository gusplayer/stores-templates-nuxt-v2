exports.ids = [129];
exports.modules = {

/***/ 1172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-logos.vue?vue&type=template&id=a5bb7d10&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex justify-center items-center py-35 lg:py-50 px-10",
    style: `background-color: ${_vm.logos['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full max-w-7xl h-auto flex flex-col items-center justify-center overflow-hidden\" data-v-a5bb7d10>", "</div>", [_vm._ssrNode("<p class=\"w-full text-center mb-25 text-25 md:text-30 lg:text-40\"" + _vm._ssrStyle(null, `color: ${_vm.logos.color_title_1}; font-weight: ${_vm.logos.fontWeightTitle};`, null) + " data-v-a5bb7d10>" + _vm._ssrEscape("\n      " + _vm._s(_vm.logos.title) + "\n    ") + "</p> "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "w-full"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper w-full\" data-v-a5bb7d10>" + _vm._ssrList(_vm.logos.values, function (item, index) {
    return "<a" + _vm._ssrAttr("id", `slide${index + 1}`) + _vm._ssrAttr("href", item.url_redirect) + " rel=\"noreferrer noopener\" class=\"swiper-slide w-full\" data-v-a5bb7d10><img" + _vm._ssrAttr("src", _vm.idCloudinary(item.img, 550, 550)) + " width=\"150\" height=\"150\"" + _vm._ssrAttr("alt", `imágenes logos${index}`) + " class=\"h-full w-full remove_bg max-w-[150px] max-h-[150px]\" data-v-a5bb7d10></a>";
  }) + "</div>")])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template15/ko15-logos.vue?vue&type=template&id=a5bb7d10&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-logos.vue?vue&type=script&lang=js&

/* harmony default export */ var ko15_logosvue_type_script_lang_js_ = ({
  name: 'Ko15Logos',
  mixins: [idCloudinary["a" /* default */]],
  props: {
    logos: Object,
    dataStore: Object
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        },
        spaceBetween: 0,
        breakpoints: {
          1920: {
            slidesPerView: 5,
            spaceBetween: 80
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 80
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 60
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 40
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
// CONCATENATED MODULE: ./components/template15/ko15-logos.vue?vue&type=script&lang=js&
 /* harmony default export */ var template15_ko15_logosvue_type_script_lang_js_ = (ko15_logosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template15/ko15-logos.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(748)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template15_ko15_logosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a5bb7d10",
  "0d3283dc"
  
)

/* harmony default export */ var ko15_logos = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(749);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("042e5e9c", content, true, context)
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

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_logos_vue_vue_type_style_index_0_id_a5bb7d10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(423);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_logos_vue_vue_type_style_index_0_id_a5bb7d10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_logos_vue_vue_type_style_index_0_id_a5bb7d10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_logos_vue_vue_type_style_index_0_id_a5bb7d10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_logos_vue_vue_type_style_index_0_id_a5bb7d10_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-a5bb7d10]{align-items:center;background:#fff;display:flex;font-size:18px;justify-content:center;text-align:center}.remove_bg[data-v-a5bb7d10]{filter:brightness(1.1);mix-blend-mode:multiply}.swiper-wrapper[data-v-a5bb7d10]{height:100%;max-height:200px}@media (max-width:600px){.swiper-wrapper[data-v-a5bb7d10]{max-height:170px}}@media (max-width:500px){.swiper-wrapper[data-v-a5bb7d10]{max-height:150px}}@media (max-width:430px){.swiper-wrapper[data-v-a5bb7d10]{max-height:125px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template15-ko15-logos.js.map