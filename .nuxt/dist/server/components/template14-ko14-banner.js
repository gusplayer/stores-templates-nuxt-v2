exports.ids = [88];
exports.modules = {

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-Banner.vue?vue&type=template&id=2ccf4a13&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full justify-center items-center",
    style: `background-color: ${_vm.banner['--background_color_1']}`
  }, [_vm.banner ? _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "w-full max-w-7xl justify-center items-center wrapper-banner",
    style: _vm.banner
  }, [_vm._ssrNode("<div class=\"z-auto swiper-wrapper\" data-v-2ccf4a13>", "</div>", _vm._l(_vm.banner.values, function (item, index) {
    return _vm._ssrNode("<a" + _vm._ssrAttr("id", `slide${index + 1}`) + _vm._ssrAttr("href", item.url_redirect) + " rel=\"noreferrer noopener\" class=\"swiper-slide w-full flex justify-center items-center z-10\" data-v-2ccf4a13>", "</a>", [_vm._ssrNode("<picture data-v-2ccf4a13>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(item.img_res, 'bannerRes', 800)) + " data-v-2ccf4a13> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(item.img, 'banner')) + " data-v-2ccf4a13> "), _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: item.img,
        expression: "item.img"
      }],
      staticClass: "w-full object-cover max-w-[1280px]",
      attrs: {
        "alt": "banner template14"
      }
    }, [])], 2), _vm._ssrNode(" <div class=\"w-8/5 flex flex-col justify-center items-start absolute\" style=\"z-index: 20\" data-v-2ccf4a13>" + (item !== null && item !== void 0 && item.title ? "<p class=\"mb-5 md:mb-10\"" + _vm._ssrStyle(null, `color: ${item.color_title}; font-size: ${item.fontSizeTitle}; font-weight: ${item.fontWeighTitle};`, null) + " data-v-2ccf4a13>" + _vm._ssrEscape("\n            " + _vm._s(item.title) + "\n          ") + "</p>" : "<!---->") + " " + (item !== null && item !== void 0 && item.subTitle ? "<p" + _vm._ssrStyle(null, `color: ${item.color_subTitle}; font-size: ${item.fontSizeSubTitle}; font-weight: ${item.fontWeighSubTitle};`, null) + " data-v-2ccf4a13>" + _vm._ssrEscape("\n            " + _vm._s(item.subTitle) + "\n          ") + "</p>" : "<!---->") + " <div class=\"border h-2 w-50 my-18 md:my-25\"" + _vm._ssrStyle(null, `border-color: ${item.color_border};`, null) + " data-v-2ccf4a13></div> " + (item !== null && item !== void 0 && item.text ? "<p class=\"mb-15 md:mb-20 max-w-xs md:max-w-md\"" + _vm._ssrStyle(null, `color: ${item.color_text}; font-size: ${item.fontSizeText}; font-weight: ${item.fontWeighText};`, null) + " data-v-2ccf4a13>" + _vm._ssrEscape("\n            " + _vm._s(item.text) + "\n          ") + "</p>" : "<!---->") + " " + (item !== null && item !== void 0 && item.price ? "<p" + _vm._ssrStyle(null, `color: ${item.color_price}; font-size: ${item.fontSizePrice}; font-weight: ${item.fontWeighPrice};`, null) + " data-v-2ccf4a13>" + _vm._ssrEscape("\n            " + _vm._s(item.price) + "\n          ") + "</p>" : "<!---->") + "</div>")], 2);
  }), 0), _vm._ssrNode(" <div class=\"swiper-pagination\" data-v-2ccf4a13></div>")], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/ko14-Banner.vue?vue&type=template&id=2ccf4a13&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-Banner.vue?vue&type=script&lang=js&

/* harmony default export */ var ko14_Bannervue_type_script_lang_js_ = ({
  name: 'Ko15-Banner',
  props: {
    banner: Object,
    settingGeneral: Object
  },
  mixins: [idCloudinary["a" /* default */]],
  data() {
    return {
      checkMobile: false,
      swiperOption: {
        autoHeight: true,
        effect: 'fade',
        slidesPerView: 'auto',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
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
// CONCATENATED MODULE: ./components/template14/ko14-Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var template14_ko14_Bannervue_type_script_lang_js_ = (ko14_Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/ko14-Banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(779)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template14_ko14_Bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2ccf4a13",
  "c218fa30"
  
)

/* harmony default export */ var ko14_Banner = __webpack_exports__["default"] = (component.exports);

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

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(780);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6cd6d1ba", content, true, context)
};

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_Banner_vue_vue_type_style_index_0_id_2ccf4a13_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_Banner_vue_vue_type_style_index_0_id_2ccf4a13_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_Banner_vue_vue_type_style_index_0_id_2ccf4a13_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_Banner_vue_vue_type_style_index_0_id_2ccf4a13_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_Banner_vue_vue_type_style_index_0_id_2ccf4a13_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "picture[data-v-2ccf4a13]{width:100%}.wrapper-banner[data-v-2ccf4a13] .swiper-pagination-bullet-active{background:#000;opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template14-ko14-banner.js.map