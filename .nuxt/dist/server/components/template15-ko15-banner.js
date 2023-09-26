exports.ids = [120];
exports.modules = {

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-Banner.vue?vue&type=template&id=b05f7d12&scoped=true&
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
    staticClass: "w-full justify-center items-center wrapper-banner",
    style: _vm.banner
  }, [_vm._ssrNode("<div class=\"z-auto swiper-wrapper\" data-v-b05f7d12>", "</div>", _vm._l(_vm.banner.values, function (item, index) {
    var _vm$settingGeneral;
    return _vm._ssrNode("<a" + _vm._ssrAttr("id", `slide${index + 1}`) + _vm._ssrAttr("href", item.url_redirect) + " rel=\"noreferrer noopener\" class=\"swiper-slide w-full flex justify-center items-center z-10\" data-v-b05f7d12>", "</a>", [_vm._ssrNode("<picture data-v-b05f7d12>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(item.img_res, 'bannerRes', 800)) + " data-v-b05f7d12> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(item.img, 'banner')) + " data-v-b05f7d12> "), _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: item.img,
        expression: "item.img"
      }],
      staticClass: "w-full object-cover",
      attrs: {
        "alt": "banner template14"
      }
    }, [])], 2), _vm._ssrNode(" <div class=\"w-full max-w-8/5 lg:max-w-9/0 xl:max-w-7xl flex flex-col justify-center items-start absolute\" style=\"z-index: 20\" data-v-b05f7d12><div class=\"flex-1 flex flex-col justify-center items-center\" data-v-b05f7d12>" + (item !== null && item !== void 0 && item.title ? "<p class=\"mb-5 md:mb-10 text-15 md:text-25 lg:text-40 xl:text-45\"" + _vm._ssrStyle(null, `color: ${item.color_title}; font-weight: ${item.fontWeighTitle};`, null) + " data-v-b05f7d12>" + _vm._ssrEscape("\n              " + _vm._s(item.title) + "\n            ") + "</p>" : "<!---->") + " " + (item !== null && item !== void 0 && item.subTitle ? "<p class=\"leading-none text-30 md:text-50 lg:text-80 xl:text-100\"" + _vm._ssrStyle(null, `color: ${item.color_subTitle}; font-weight: ${item.fontWeighSubTitle};`, null) + " data-v-b05f7d12>" + _vm._ssrEscape("\n              " + _vm._s(item.subTitle) + "\n            ") + "</p>" : "<!---->") + " " + (item !== null && item !== void 0 && item.text ? "<p class=\"mt-10 md:mt-25 max-w-xs md:max-w-md text-12 md:text-14 xl:text-18\"" + _vm._ssrStyle(null, `color: ${item.color_text}; font-weight: ${item.fontWeighText};`, null) + " data-v-b05f7d12>" + _vm._ssrEscape("\n              " + _vm._s(item.text) + "\n            ") + "</p>" : "<!---->") + " " + (item.visible_btn ? "<p class=\"px-20 py-5 md:py-8 mt-16 md:mt-40 text-12 md:text-14 xl:text-16\"" + _vm._ssrStyle(null, `color: ${item.color_text_btn}; background-color: ${item.color_bg_btn}; border-radius: ${(_vm$settingGeneral = _vm.settingGeneral) === null || _vm$settingGeneral === void 0 ? void 0 : _vm$settingGeneral.radius};`, null) + " data-v-b05f7d12>" + _vm._ssrEscape("\n              " + _vm._s(item.textBtn) + "\n            ") + "</p>" : "<!---->") + "</div></div>")], 2);
  }), 0), _vm._ssrNode(" <div class=\"swiper-pagination\" data-v-b05f7d12></div>")], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template15/ko15-Banner.vue?vue&type=template&id=b05f7d12&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-Banner.vue?vue&type=script&lang=js&

/* harmony default export */ var ko15_Bannervue_type_script_lang_js_ = ({
  name: 'Ko15Banner',
  props: {
    banner: Object,
    settingGeneral: Object
  },
  mixins: [idCloudinary["a" /* default */]],
  data() {
    return {
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
// CONCATENATED MODULE: ./components/template15/ko15-Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var template15_ko15_Bannervue_type_script_lang_js_ = (ko15_Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template15/ko15-Banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(736)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template15_ko15_Bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b05f7d12",
  "1161f370"
  
)

/* harmony default export */ var ko15_Banner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(737);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("a4aefe62", content, true, context)
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

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_Banner_vue_vue_type_style_index_0_id_b05f7d12_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_Banner_vue_vue_type_style_index_0_id_b05f7d12_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_Banner_vue_vue_type_style_index_0_id_b05f7d12_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_Banner_vue_vue_type_style_index_0_id_b05f7d12_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_Banner_vue_vue_type_style_index_0_id_b05f7d12_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "picture[data-v-b05f7d12]{width:100%}.wrapper-banner[data-v-b05f7d12] .swiper-pagination-bullet-active{background:#000;opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template15-ko15-banner.js.map