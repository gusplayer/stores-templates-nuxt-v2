exports.ids = [159];
exports.modules = {

/***/ 1230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/k09-Banner.vue?vue&type=template&id=77027dea&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "contein-carousel",
    style: [_vm.banner, _vm.settingGeneral]
  }, [_vm.banner ? _vm._ssrNode("<div class=\"carousel-content\"" + _vm._ssrStyle(null, [{
    '--font-style-1': _vm.settingGeneral && _vm.settingGeneral.fount_1 ? _vm.settingGeneral.fount_1 : 'Poppins'
  }, {
    '--font-style-2': _vm.settingGeneral && _vm.settingGeneral.fount_2 ? _vm.settingGeneral.fount_2 : 'Roboto'
  }], null) + " data-v-77027dea>", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm.banner.values ? _vm._ssrNode("<div class=\"swiper-wrapper\" data-v-77027dea>", "</div>", _vm._l(_vm.banner.values, function (elementBanner, index) {
    return _vm._ssrNode("<div class=\"swiper-slide swiper-slide w-full flex justify-center items-center\" data-v-77027dea>", "</div>", [_vm.dataStore.tienda.id_tienda === 889 ? _vm._ssrNode("<picture data-v-77027dea>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", __webpack_require__(875)) + " data-v-77027dea> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(elementBanner['url_img_background'], 'banner')) + " data-v-77027dea> "), _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinaryBanner(elementBanner['url_img_background'], 'banner'),
        expression: "\n                idCloudinaryBanner(\n                  elementBanner['url_img_background'],\n                  'banner'\n                )\n              "
      }],
      staticClass: "slide-bgWeb",
      attrs: {
        "alt": "banner template13"
      }
    }, [])], 2) : _vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.idCloudinaryBanner(elementBanner['url_img_background'], 'banner')) + _vm._ssrAttr("alt", `img_banner_${index}`) + " class=\"slide-bgWeb\" data-v-77027dea>"), _vm._ssrNode(" <div class=\"banner-content-items-1 absolute\" data-v-77027dea><div class=\"content-items-1\" data-v-77027dea><div class=\"text-top\" data-v-77027dea><p class=\"banner-text-top\"" + _vm._ssrStyle(null, `color: ${elementBanner['--color_pretitle']};`, null) + " data-v-77027dea>" + _vm._ssrEscape("\n                  " + _vm._s(elementBanner.pretitle) + "\n                ") + "</p></div> <div class=\"text-medium\" data-v-77027dea><p class=\"banner-text-medium\"" + _vm._ssrStyle(null, `color: ${elementBanner['--color_title']};`, null) + " data-v-77027dea>" + _vm._ssrEscape("\n                  " + _vm._s(elementBanner.title) + "\n                ") + "</p></div> <div class=\"text-bottom\" data-v-77027dea><p class=\"banner-text-bottom\"" + _vm._ssrStyle(null, `color: ${elementBanner['--color_description']};`, null) + " data-v-77027dea>" + _vm._ssrEscape("\n                  " + _vm._s(elementBanner.description) + "\n                ") + "</p></div> " + (elementBanner.url_redirect ? "<div class=\"banner-button\" data-v-77027dea><a" + _vm._ssrAttr("href", `${elementBanner.url_redirect}`) + " rel=\"noreferrer noopener\"" + _vm._ssrClass("btn-shop", elementBanner.url_redirect ? 'cursorPointer' : null) + " data-v-77027dea><span class=\"text-button\" data-v-77027dea>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('home_comprarAhora')) + "\n                  ") + "</span></a></div>" : "<!---->") + "</div></div>")], 2);
  }), 0) : _vm._e(), _vm._ssrNode(" <div class=\"swiper-pagination\" data-v-77027dea></div>")], 2)]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/k09-Banner.vue?vue&type=template&id=77027dea&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/k09-Banner.vue?vue&type=script&lang=js&

/* harmony default export */ var k09_Bannervue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  props: {
    dataStore: Object,
    banner: Object,
    settingGeneral: Object
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        slidesPerView: 'auto',
        loop: true,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        }
      }
    };
  },
  watch: {
    'banner.values'() {
      this.autoplayBanner();
    }
  },
  mounted() {
    this.autoplayBanner();
  },
  methods: {
    autoplayBanner() {
      if (this.banner && this.banner.values.length == 1) {
        this.swiperOption.autoplay.delay = 900000000000000000;
      } else {
        this.swiperOption.autoplay.delay = 6000;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template9/k09-Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var template9_k09_Bannervue_type_script_lang_js_ = (k09_Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/k09-Banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(876)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template9_k09_Bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "77027dea",
  "f3bfb9d2"
  
)

/* harmony default export */ var k09_Banner = __webpack_exports__["default"] = (component.exports);

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

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(877);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("97f53ec4", content, true, context)
};

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner1.971627e.webp";

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_k09_Banner_vue_vue_type_style_index_0_id_77027dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(536);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_k09_Banner_vue_vue_type_style_index_0_id_77027dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_k09_Banner_vue_vue_type_style_index_0_id_77027dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_k09_Banner_vue_vue_type_style_index_0_id_77027dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_k09_Banner_vue_vue_type_style_index_0_id_77027dea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "picture[data-v-77027dea]{width:100%}.contein-carousel[data-v-77027dea]{flex-direction:column}.carousel-content[data-v-77027dea],.contein-carousel[data-v-77027dea]{align-items:center;display:flex;justify-content:center;width:100%}.carousel-content[data-v-77027dea]{z-index:auto}.cursorPointer[data-v-77027dea]{cursor:pointer}.swiper-wrapper[data-v-77027dea]{z-index:auto}.text-button[data-v-77027dea]{color:var(--color_text_btn)}.banner-text-medium[data-v-77027dea],.banner-text-top[data-v-77027dea]{font-family:var(--font-style-1)}.banner-text-bottom[data-v-77027dea],.text-button[data-v-77027dea]{font-family:var(--font-style-2)}.carousel-content[data-v-77027dea] .swiper-pagination-bullet-active{background:#2c2930;opacity:1}.swiper-pagination-bullet[data-v-77027dea]{background:#fff;border-radius:100%;display:inline-block;height:2px;opacity:.2;width:12px}.banner-content-items-1[data-v-77027dea]{padding:20px}.slide-bgWeb[data-v-77027dea]{display:inline;display:initial;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%}@media (min-width:300px){.banner-content-items-1[data-v-77027dea]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:90%}.content-items-1[data-v-77027dea],.text-top[data-v-77027dea]{width:100%}.text-top[data-v-77027dea]{align-items:center;display:flex;justify-content:center;margin-bottom:10px;text-align:center}.banner-text-top[data-v-77027dea]{display:flex;font-size:10px;font-weight:600;text-transform:uppercase}.text-medium[data-v-77027dea]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:10px;text-align:center;width:100%}.banner-text-medium[data-v-77027dea]{font-size:18px;font-weight:700;line-height:.9}.text-bottom[data-v-77027dea]{display:none}.banner-button[data-v-77027dea]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center;width:100%}.text-button[data-v-77027dea]{font-size:13px;font-weight:800;letter-spacing:1px;padding-left:14px;padding-right:14px;text-align:center;white-space:nowrap}.btn-shop[data-v-77027dea],.text-button[data-v-77027dea]{transition:all .25s ease}.btn-shop[data-v-77027dea]{align-items:center;background-color:var(--color_background_btn);border-radius:var(--radius_btn);display:flex;height:34px;justify-content:center}.btn-shop[data-v-77027dea]:hover{background-color:#fff;transition:all .25s ease}.btn-shop:hover .text-button[data-v-77027dea]{color:#2c2930;transition:all .25s ease}}@media (min-width:768px){.banner-content-items-1[data-v-77027dea]{display:inline;display:initial;width:70%}.text-top[data-v-77027dea]{margin-bottom:24px}.banner-text-top[data-v-77027dea]{font-size:14px}.banner-text-medium[data-v-77027dea]{font-size:40px}.text-bottom[data-v-77027dea]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center;width:100%}.text-bottom[data-v-77027dea],.text-medium[data-v-77027dea]{margin-bottom:24px}.banner-text-bottom[data-v-77027dea]{font-size:16px;font-weight:600}.banner-button[data-v-77027dea],.banner-text-bottom[data-v-77027dea]{display:flex}.banner-button[data-v-77027dea]{align-items:center;flex-direction:column;justify-content:center;margin-top:30px;text-align:center;width:100%}}@media (min-width:1024px){.banner-content-items-1[data-v-77027dea]{align-items:flex-start;justify-content:flex-start;width:98%}.content-items-1[data-v-77027dea]{width:50%}.text-top[data-v-77027dea]{margin-bottom:10px}.text-bottom[data-v-77027dea],.text-medium[data-v-77027dea],.text-top[data-v-77027dea]{align-items:flex-start;justify-content:flex-start;text-align:left}.text-bottom[data-v-77027dea]{margin-bottom:0}.banner-button[data-v-77027dea]{align-items:flex-start;justify-content:flex-start;text-align:center}.banner-text-medium[data-v-77027dea]{font-size:72px}}@media (min-width:1300px){.banner-content-items-1[data-v-77027dea]{align-items:flex-start;justify-content:flex-start;width:1300px}.content-items-1[data-v-77027dea]{width:47%}.text-top[data-v-77027dea]{margin-bottom:20px}.text-bottom[data-v-77027dea]{margin-bottom:40px}.banner-text-medium[data-v-77027dea]{font-size:90px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template9-k09-banner.js.map