exports.ids = [56];
exports.modules = {

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko10-carousel.vue?vue&type=template&id=2248a6dc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm.banner.values ? _vm._ssrNode("<div class=\"swiper-wrapper\" data-v-2248a6dc>", "</div>", _vm._l(_vm.banner.values, function (item, index) {
    return _vm._ssrNode("<a" + _vm._ssrAttr("id", `slide${index + 1}`) + _vm._ssrAttr("href", `${item.visbleBtn ? '' : item.url_redirect}`) + " rel=\"noreferrer noopener\"" + _vm._ssrClass("swiper-slide w-full flex justify-center items-center", item.visbleBtn ? 'pointer-events-none' : 'cursor-pointer') + " data-v-2248a6dc>", "</a>", [_vm._ssrNode("<picture data-v-2248a6dc>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(item.url_img_background_res, 'bannerRes', 800)) + " data-v-2248a6dc> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(item.url_img_background, 'banner')) + " data-v-2248a6dc> "), _c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinaryBanner(item.url_img_background, 'banner'),
        expression: "idCloudinaryBanner(item.url_img_background, 'banner')"
      }],
      staticClass: "w-full h-full object-cover object-center",
      attrs: {
        "loading": "lazy",
        "alt": "Banner_tienda_template10"
      }
    }, [])], 2), _vm._ssrNode(" <div class=\"content absolute\" data-v-2248a6dc><div class=\"content-items-top\" data-v-2248a6dc><div class=\"empty-border-left fadeInLeft\"" + _vm._ssrStyle(null, `background-color: ${item.color_border};`, null) + " data-v-2248a6dc></div> <div class=\"content-text-top\" data-v-2248a6dc><div class=\"txt-banner-top\" data-v-2248a6dc><p class=\"txt-1 fadeInLeft\"" + _vm._ssrStyle(null, `color: ${item.colorPretitle};`, null) + " data-v-2248a6dc>" + _vm._ssrEscape("\n                " + _vm._s(item.pretitle.replace(/ /g, ' ')) + "\n              ") + "</p></div> <div class=\"txt-banner-top\" data-v-2248a6dc><p class=\"txt-2 fadeInLeft\"" + _vm._ssrStyle(null, `color: ${item.colorPretitle};`, null) + " data-v-2248a6dc>" + _vm._ssrEscape("\n                " + _vm._s(item.date) + "\n              ") + "</p></div></div></div> <div class=\"content-text-medium\" data-v-2248a6dc><p class=\"txt-3 fadeInRight\"" + _vm._ssrStyle(null, `color: ${item.colorTitle};`, null) + " data-v-2248a6dc>" + _vm._ssrEscape("\n            " + _vm._s(item.title.replace(/ /g, ' ')) + "\n          ") + "</p></div> <div class=\"content-text-bottom\" data-v-2248a6dc><div class=\"txt-banner-bottom\" data-v-2248a6dc><p class=\"txt-4 fadeInLeft\"" + _vm._ssrStyle(null, `color: ${item.colorPrice};`, null) + " data-v-2248a6dc>\n              Desde\n            </p></div> <div class=\"txt-banner-bottom\" data-v-2248a6dc><p class=\"txt-5 fadeInRight\"" + _vm._ssrStyle(null, `color: ${item.colorPrice};`, null) + " data-v-2248a6dc>" + _vm._ssrEscape("\n              " + _vm._s(item.price) + "\n            ") + "</p></div></div> " + (item.visbleBtn ? "<a" + _vm._ssrAttr("href", item.url_redirect ? item.url_redirect : '') + " rel=\"noreferrer noopener\" class=\"cursor-pointer\" data-v-2248a6dc><div class=\"btn\"" + _vm._ssrStyle(null, `border-color: ${item.color_border_btn}; color: ${item.color_text_btn};`, null) + " data-v-2248a6dc><p data-v-2248a6dc>" + _vm._ssrEscape(_vm._s(_vm.$t('home_comprarAhora'))) + "</p></div></a>" : "<!---->") + "</div>")], 2);
  }), 0) : _vm._e(), _vm._ssrNode(" " + (_vm.banner.visible_pagination ? "<div class=\"swiper-pagination\" data-v-2248a6dc></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/Ko10-carousel.vue?vue&type=template&id=2248a6dc&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko10-carousel.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko10_carouselvue_type_script_lang_js_ = ({
  name: 'Ko10-carousel',
  props: {
    banner: Object,
    settingGeneral: Object
  },
  mixins: [idCloudinary["a" /* default */]],
  mounted() {
    this.autoplayBanner();
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        slidesPerView: 'auto',
        effect: 'fade',
        loop: true,
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
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    autoplayBanner() {
      if (this.settingKCarousel && this.settingKCarousel.values.length == 1) {
        this.swiperOption.autoplay.delay = 900000000000000000;
      } else {
        this.swiperOption.autoplay.delay = 6000;
      }
    }
  },
  watch: {
    'settingKCarousel.values'() {
      this.autoplayBanner();
    }
  }
});
// CONCATENATED MODULE: ./components/template10/Ko10-carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var template10_Ko10_carouselvue_type_script_lang_js_ = (Ko10_carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/Ko10-carousel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(642)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template10_Ko10_carouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2248a6dc",
  "5039305c"
  
)

/* harmony default export */ var Ko10_carousel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(643);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("682512f1", content, true, context)
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

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_carousel_vue_vue_type_style_index_0_id_2248a6dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_carousel_vue_vue_type_style_index_0_id_2248a6dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_carousel_vue_vue_type_style_index_0_id_2248a6dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_carousel_vue_vue_type_style_index_0_id_2248a6dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko10_carousel_vue_vue_type_style_index_0_id_2248a6dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".carousel-content[data-v-2248a6dc] .swiper-pagination-bullet-active{background:#2c2930;opacity:1}.swiper-pagination-bullet[data-v-2248a6dc]{background:#fff;border-radius:100%;display:inline-block;height:2px;opacity:.2;width:12px}picture[data-v-2248a6dc]{width:100%}.content[data-v-2248a6dc]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;z-index:20!important}.txt-1[data-v-2248a6dc],.txt-2[data-v-2248a6dc],.txt-3[data-v-2248a6dc],.txt-4[data-v-2248a6dc],.txt-5[data-v-2248a6dc]{font-family:var(--font-style-1)!important;text-transform:uppercase;z-index:20}.empty-border-left[data-v-2248a6dc],.txt-1[data-v-2248a6dc],.txt-2[data-v-2248a6dc]{animation-duration:3s}.txt-3[data-v-2248a6dc],.txt-4[data-v-2248a6dc],.txt-5[data-v-2248a6dc]{animation-duration:4s}@keyframes fadeInLeft-2248a6dc{0%{opacity:0;transform:translateX(-50px)}to{opacity:1;transform:translateX(0)}}@keyframes fadeInRight-2248a6dc{0%{opacity:0;transform:translateX(80px)}to{opacity:1;transform:translateX(0)}}.fadeInLeft[data-v-2248a6dc]{animation-name:fadeInLeft-2248a6dc}.fadeInRight[data-v-2248a6dc]{animation-name:fadeInRight-2248a6dc}@media (min-width:300px){.content[data-v-2248a6dc]{width:85%}.empty-border-left[data-v-2248a6dc]{height:22px;width:1px}.content-items-top[data-v-2248a6dc]{flex-direction:row;margin-left:8px}.content-items-top[data-v-2248a6dc],.content-text-top[data-v-2248a6dc]{align-items:flex-start;display:flex;justify-content:flex-start;width:70%}.content-text-top[data-v-2248a6dc]{flex-direction:column;padding-left:10px}.content-text-medium[data-v-2248a6dc]{align-items:flex-start;display:flex;justify-content:flex-start;width:70%}.content-text-bottom[data-v-2248a6dc]{display:none}.btn[data-v-2248a6dc]{border-radius:var(--radius_btn);border-width:1px;font-family:var(--font-style-1)!important;font-size:10px;font-weight:600;overflow:hidden;padding:2px 10px;text-overflow:ellipsis;white-space:nowrap}.btn[data-v-2248a6dc]:hover{border-color:var(--hover_Bg_btn);border-width:1px;color:var(--hover_text_btn)}.txt-1[data-v-2248a6dc],.txt-2[data-v-2248a6dc]{font-size:8px;letter-spacing:1px}.txt-1[data-v-2248a6dc],.txt-2[data-v-2248a6dc],.txt-3[data-v-2248a6dc]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.txt-3[data-v-2248a6dc]{font-size:20px;font-weight:600;letter-spacing:3px;margin-bottom:10px;margin-top:5px}}@media (min-width:425px){.empty-border-left[data-v-2248a6dc]{height:26px}.content-items-top[data-v-2248a6dc]{margin-left:10px}.txt-1[data-v-2248a6dc],.txt-2[data-v-2248a6dc]{font-size:10px}.txt-3[data-v-2248a6dc]{font-size:30px}.btn[data-v-2248a6dc]{border-width:1px;font-size:12px;font-weight:600;overflow:hidden;padding:2px 12px;text-overflow:ellipsis;white-space:nowrap}}@media (min-width:768px){.empty-border-left[data-v-2248a6dc]{height:33px}.content-items-top[data-v-2248a6dc]{margin-left:15px}.content-text-top[data-v-2248a6dc]{padding-left:15px}.txt-1[data-v-2248a6dc],.txt-2[data-v-2248a6dc]{font-size:13px;letter-spacing:0}.txt-3[data-v-2248a6dc]{font-size:50px;letter-spacing:6px;padding-bottom:20px}.btn[data-v-2248a6dc]{font-size:12px;font-weight:600;margin-left:5px;overflow:hidden;padding:7px 12px;text-overflow:ellipsis;white-space:nowrap}.btn[data-v-2248a6dc],.btn[data-v-2248a6dc]:hover{border-width:2px}}@media (min-width:1024px){.content[data-v-2248a6dc]{width:75%}.content-items-top[data-v-2248a6dc]{margin-left:0}.content-text-bottom[data-v-2248a6dc]{align-items:flex-end;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:20px;width:70%}.txt-3[data-v-2248a6dc]{font-size:50px;height:auto;margin-bottom:0;margin-top:20px}.txt-4[data-v-2248a6dc]{font-size:10px;padding-bottom:2px;padding-right:5px}.txt-5[data-v-2248a6dc]{font-size:15px}.btn[data-v-2248a6dc]{font-size:12px;margin-left:0;padding:8px 35px}}@media (min-width:1280px){.empty-border-left[data-v-2248a6dc]{height:35px}.txt-3[data-v-2248a6dc]{font-size:70px}}@media (min-width:1400px){.empty-border-left[data-v-2248a6dc]{height:50px}.txt-1[data-v-2248a6dc],.txt-2[data-v-2248a6dc]{font-size:15px}.txt-3[data-v-2248a6dc]{font-size:90px}.txt-4[data-v-2248a6dc]{font-size:12px;padding-bottom:5px;padding-right:8px}.txt-5[data-v-2248a6dc]{font-size:24px}.btn[data-v-2248a6dc]{font-size:16px;padding:12px 51px}.btn[data-v-2248a6dc],.btn[data-v-2248a6dc]:hover{border-width:2px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template10-ko10-carousel.js.map