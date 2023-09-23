exports.ids = [166];
exports.modules = {

/***/ 1217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/K07-Wrapper.vue?vue&type=template&id=4af9d106&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-content",
    style: [_vm.settingKWrapper, _vm.settingGeneral, {
      '--font-style-2': _vm.settingGeneral && _vm.settingGeneral.fount_2 ? _vm.settingGeneral.fount_2 : 'Great Vibes'
    }, {
      '--font-style-3': _vm.settingGeneral && _vm.settingGeneral.fount_3 ? _vm.settingGeneral.fount_3 : 'Lora'
    }]
  }, [_vm._ssrNode("<div class=\"wrapper-items-content\" data-v-4af9d106>" + (!_vm.settingKCarousel.visible ? "<div class=\"separador-blog\" data-v-4af9d106></div>" : "<!---->") + " <div class=\"wrapper-content-items\" data-v-4af9d106><div class=\"wrapper-items-text\" data-v-4af9d106><div class=\"tittle\" data-v-4af9d106><span class=\"tittle-text\" data-v-4af9d106>" + _vm._ssrEscape(_vm._s(_vm.settingKWrapper.pre_title)) + "</span></div> <div class=\"subtittle\" data-v-4af9d106><span class=\"subtittle-text\" data-v-4af9d106>" + _vm._ssrEscape(_vm._s(_vm.settingKWrapper.title)) + "</span></div> <div class=\"description\" data-v-4af9d106><span class=\"description-text\" data-v-4af9d106>" + _vm._ssrEscape("\n            " + _vm._s(_vm.settingKWrapper.description) + "\n          ") + "</span></div></div></div></div> "), _vm._ssrNode("<div class=\"wrapper-items\" data-v-4af9d106>", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-4af9d106>", "</div>", _vm._l(_vm.settingKWrapper.values, function (imagen, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass(null, `swiper-slide wrapper-${index + 1}`) + " data-v-4af9d106>", "</div>", [_vm._ssrNode("<a" + _vm._ssrAttr("href", imagen.url_redirect) + " rel=\"noreferrer noopener\" class=\"wrapper-ints\" data-v-4af9d106>", "</a>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinary(imagen.url_img, 550, 550),
        expression: "idCloudinary(imagen.url_img, 550, 550)"
      }],
      staticClass: "img-wrapp",
      attrs: {
        "alt": "imágenes de Instagram"
      }
    }, [])])]);
  }), 0)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/K07-Wrapper.vue?vue&type=template&id=4af9d106&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/K07-Wrapper.vue?vue&type=script&lang=js&

/* harmony default export */ var K07_Wrappervue_type_script_lang_js_ = ({
  name: 'K07Wrapper',
  mixins: [idCloudinary["a" /* default */]],
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingGeneral: {
      type: Object,
      required: true
    },
    settingKWrapper: {
      type: Object,
      required: true
    },
    settingKCarousel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        breakpoints: {
          10000: {
            slidesPerView: 6,
            spaceBetween: 0
          },
          1920: {
            slidesPerView: 6,
            spaceBetween: 0
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 0
          }
        }

        // setWrapperSize: true,
        // paginationClickable: true,
        // grabCursor: true,
        // ...
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.mySwiper.slideTo(3, 1000, false);
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook;
      this.links[1].link = this.dataStore.tienda.red_twitter;
      this.links[2].link = this.dataStore.tienda.red_instagram;
      this.links[3].link = this.dataStore.tienda.red_youtube;
    }
  }
});
// CONCATENATED MODULE: ./components/template7/K07-Wrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var template7_K07_Wrappervue_type_script_lang_js_ = (K07_Wrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/K07-Wrapper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(837)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template7_K07_Wrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4af9d106",
  "6f5c2794"
  
)

/* harmony default export */ var K07_Wrapper = __webpack_exports__["default"] = (component.exports);

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

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(838);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("309c2e86", content, true, context)
};

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K07_Wrapper_vue_vue_type_style_index_0_id_4af9d106_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(491);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K07_Wrapper_vue_vue_type_style_index_0_id_4af9d106_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K07_Wrapper_vue_vue_type_style_index_0_id_4af9d106_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K07_Wrapper_vue_vue_type_style_index_0_id_4af9d106_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K07_Wrapper_vue_vue_type_style_index_0_id_4af9d106_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-4af9d106]{align-items:center;background:#fff;display:flex;font-size:18px;justify-content:center;text-align:center}.separador-blog[data-v-4af9d106]{padding-top:100px}.swiper-wrapper[data-v-4af9d106]{height:300px;max-height:300px}.img-wrapp[data-v-4af9d106],.img-wrapp[data-v-4af9d106]:hover{transition:all .2s ease-in}.img-wrapp[data-v-4af9d106]:hover{position:relative;transform:scale(1.03)}.wrapper-content[data-v-4af9d106]{background:var(--background_color_1);padding-bottom:20px;padding-top:20px;width:100%}.wrapper-content[data-v-4af9d106],.wrapper-content-items[data-v-4af9d106],.wrapper-items-content[data-v-4af9d106]{align-items:center;display:flex;flex-direction:column;justify-content:center}.wrapper-content-items[data-v-4af9d106]{margin-bottom:64px;text-align:center;width:100%}.wrapper-items-text[data-v-4af9d106]{width:100%}.description[data-v-4af9d106],.subtittle[data-v-4af9d106],.tittle[data-v-4af9d106]{align-items:center;display:flex;flex-direction:column;justify-content:center}.tittle-text[data-v-4af9d106]{color:var(--color_pre_title);font-family:var(--font-style-2)!important}.subtittle-text[data-v-4af9d106]{color:var(--color_title)}.description-text[data-v-4af9d106],.subtittle-text[data-v-4af9d106]{font-family:var(--font-style-3)!important}.description-text[data-v-4af9d106]{color:var(--color_description)}.wrapper-items[data-v-4af9d106]{width:100%}.wrapper-1[data-v-4af9d106]:hover,.wrapper-2[data-v-4af9d106]:hover,.wrapper-3[data-v-4af9d106]:hover,.wrapper-4[data-v-4af9d106]:hover,.wrapper-5[data-v-4af9d106]:hover,.wrapper-6[data-v-4af9d106]:hover{--tw-bg-opacity:0.5;background-color:rgba(0,0,0,.5);background-color:rgba(0,0,0,var(--tw-bg-opacity));cursor:pointer}@media (min-width:300px){.wrapper-items-content[data-v-4af9d106]{width:95%}.tittle[data-v-4af9d106]{font-size:24px;line-height:34px}.subtittle[data-v-4af9d106]{font-size:32px;line-height:42px}.description[data-v-4af9d106]{font-size:14px;line-height:24px}}@media (min-width:768px){.subtittle[data-v-4af9d106]{font-size:36px;line-height:46px}}@media (min-width:1280px){.gify-text-content[data-v-4af9d106],.wrapper-items-content[data-v-4af9d106]{width:93%}.gify-slider-content[data-v-4af9d106]{width:63%}.tittle[data-v-4af9d106]{font-size:24px;line-height:34px}.subtittle[data-v-4af9d106]{font-size:35px;line-height:48px}.description[data-v-4af9d106]{font-size:14px;line-height:24px}}@media (min-width:1192px){.wrapper-items-content[data-v-4af9d106]{width:1192px}.img-wrapp[data-v-4af9d106]{width:100%}}@media (max-width:1300px){.swiper-wrapper[data-v-4af9d106]{height:100%;max-height:205px}}@media (max-width:1280px){.swiper-wrapper[data-v-4af9d106]{max-height:200px}}@media (max-width:600px){.swiper-wrapper[data-v-4af9d106]{max-height:170px}}@media (max-width:500px){.swiper-wrapper[data-v-4af9d106]{max-height:150px}}@media (max-width:430px){.swiper-wrapper[data-v-4af9d106]{max-height:125px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template7-k07-wrapper.js.map