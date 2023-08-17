exports.ids = [105];
exports.modules = {

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_carouselBanner/ko-carousel.vue?vue&type=template&id=10a8a675&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full justify-center items-center",
    style: _vm.settingKCarousel
  }, [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "w-full justify-center items-center wrapper-banner"
  }, [_vm._ssrNode("<div class=\"z-auto swiper-wrapper\" data-v-10a8a675>", "</div>", _vm._l(this.settingKCarousel.values, function (banner, index) {
    return _vm._ssrNode("<a" + _vm._ssrAttr("id", `slide${index + 1}`) + _vm._ssrAttr("href", `${banner && banner.url_redirect ? banner.url_redirect : ''}`) + " rel=\"noreferrer noopener\"" + _vm._ssrClass("swiper-slide w-full flex justify-center items-center z-10", banner && banner.url_redirect ? 'cursor-pointer' : '') + " data-v-10a8a675>", "</a>", [_vm._ssrNode("<picture data-v-10a8a675><source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.settingKCarousel.values[index].url_img_movil, 'bannerRes', 800)) + " data-v-10a8a675> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.settingKCarousel.values[index].url_img_background, 'banner')) + " data-v-10a8a675> <img" + _vm._ssrAttr("src", _vm.idCloudinaryBanner(_vm.settingKCarousel.values[index].url_img_background, 'banner')) + " alt=\"banner template7\" class=\"w-full object-cover\" data-v-10a8a675></picture> "), _c('KObanner', {
      staticClass: "absolute top-0",
      attrs: {
        "banner": banner,
        "settingKCarousel": _vm.settingKCarousel,
        "settingGeneral": _vm.settingGeneral
      }
    })], 2);
  }), 0), _vm._ssrNode(" <div class=\"swiper-pagination\" data-v-10a8a675></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/_carouselBanner/ko-carousel.vue?vue&type=template&id=10a8a675&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_carouselBanner/banner-carousel.vue?vue&type=template&id=6f7c07b2&scoped=true&
var banner_carouselvue_type_template_id_6f7c07b2_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-banner",
    style: [_vm.settingKCarousel, _vm.banner, _vm.settingGeneral]
  }, [_vm._ssrNode("<div class=\"banner\" data-v-6f7c07b2><div class=\"content-items-banner\" data-v-6f7c07b2><div class=\"banner-content-items\"" + _vm._ssrStyle(null, [{
    '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Great Vibes'
  }, {
    '--font-style-3': this.settingGeneral && this.settingGeneral.fount_3 ? this.settingGeneral.fount_3 : 'Lora'
  }], null) + " data-v-6f7c07b2><div class=\"text-tittle\" data-v-6f7c07b2><span class=\"banner-text-tittle\" data-v-6f7c07b2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.banner.tittle) + "\n          ") + "</span></div> <div class=\"text-subtittle\" data-v-6f7c07b2><span class=\"banner-text-subtittle\" data-v-6f7c07b2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.banner.description) + "\n          ") + "</span></div></div></div> <div class=\"content-items-banner\" data-v-6f7c07b2>" + (_vm.banner.url_img_right ? "<div class=\"banner-img\" data-v-6f7c07b2><img" + _vm._ssrAttr("src", _vm.idCloudinaryBanner(_vm.banner.url_img_right, 'banner')) + " alt=\"banner-carousel\" class=\"img-girl\" data-v-6f7c07b2></div>" : "<!---->") + "</div></div>")]);
};
var banner_carouselvue_type_template_id_6f7c07b2_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/_carouselBanner/banner-carousel.vue?vue&type=template&id=6f7c07b2&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_carouselBanner/banner-carousel.vue?vue&type=script&lang=js&

/* harmony default export */ var banner_carouselvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  props: {
    banner: Object,
    settingKCarousel: Object,
    settingGeneral: Object
  }
});
// CONCATENATED MODULE: ./components/template7/_carouselBanner/banner-carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var _carouselBanner_banner_carouselvue_type_script_lang_js_ = (banner_carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/_carouselBanner/banner-carousel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(796)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _carouselBanner_banner_carouselvue_type_script_lang_js_,
  banner_carouselvue_type_template_id_6f7c07b2_scoped_true_render,
  banner_carouselvue_type_template_id_6f7c07b2_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "6f7c07b2",
  "6c0dfd39"
  
)

/* harmony default export */ var banner_carousel = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_carouselBanner/ko-carousel.vue?vue&type=script&lang=js&


/* harmony default export */ var ko_carouselvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  components: {
    KObanner: banner_carousel
  },
  props: {
    dataStore: Object,
    settingKCarousel: Object,
    settingGeneral: Object
  },
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
  }
});
// CONCATENATED MODULE: ./components/template7/_carouselBanner/ko-carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var _carouselBanner_ko_carouselvue_type_script_lang_js_ = (ko_carouselvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template7/_carouselBanner/ko-carousel.vue



function ko_carousel_injectStyles (context) {
  
  var style0 = __webpack_require__(798)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ko_carousel_component = Object(componentNormalizer["a" /* default */])(
  _carouselBanner_ko_carouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  ko_carousel_injectStyles,
  "10a8a675",
  "1a4e6a01"
  
)

/* harmony default export */ var ko_carousel = __webpack_exports__["default"] = (ko_carousel_component.exports);

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(797);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5d75c4ee", content, true, context)
};

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(799);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("aeb150f8", content, true, context)
};

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_carousel_vue_vue_type_style_index_0_id_6f7c07b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_carousel_vue_vue_type_style_index_0_id_6f7c07b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_carousel_vue_vue_type_style_index_0_id_6f7c07b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_carousel_vue_vue_type_style_index_0_id_6f7c07b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_carousel_vue_vue_type_style_index_0_id_6f7c07b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-banner[data-v-6f7c07b2]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.banner[data-v-6f7c07b2]{grid-gap:1.5rem;display:grid;flex-direction:column;gap:1.5rem;grid-template-columns:repeat(2,minmax(0,1fr));max-width:1300px;padding-top:100px;width:100%}.content-items-banner[data-v-6f7c07b2]{align-items:center;display:flex;justify-content:center}.banner-content-items[data-v-6f7c07b2]{flex-direction:column;max-width:420px}.banner-content-items[data-v-6f7c07b2],.banner-img[data-v-6f7c07b2]{align-items:center;display:flex;justify-content:center;width:100%}.banner-img[data-v-6f7c07b2]{max-width:570px}.img-girl[data-v-6f7c07b2]{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%}.text-tittle[data-v-6f7c07b2]{align-items:center;display:flex;justify-content:center;line-height:1.25;text-align:center}.banner-text-tittle[data-v-6f7c07b2]{color:var(--color_text);font-family:var(--font-style-2)!important;font-size:64px}.text-subtittle[data-v-6f7c07b2]{align-items:center;display:flex;justify-content:center;text-align:center;word-break:break-all}.banner-text-subtittle[data-v-6f7c07b2]{color:var(--color_subtext);font-family:var(--font-style-3)!important;font-size:18px;font-style:italic}@media (max-width:1500px){.banner-img[data-v-6f7c07b2]{max-width:520px}}@media (max-width:1400px){.banner-img[data-v-6f7c07b2]{max-width:420px}}@media (max-width:1300px){.banner-text-tittle[data-v-6f7c07b2]{font-size:54px}.banner-text-subtittle[data-v-6f7c07b2]{font-size:15px}}@media (max-width:1200px){.banner[data-v-6f7c07b2]{padding-top:60px}}@media (max-width:1120px){.banner[data-v-6f7c07b2]{padding-top:40px}.banner-img[data-v-6f7c07b2]{max-width:380px}}@media (max-width:1024px){.banner[data-v-6f7c07b2]{padding-top:40px}.banner-text-tittle[data-v-6f7c07b2]{font-size:45px}.banner-text-subtittle[data-v-6f7c07b2]{font-size:14px}.banner-img[data-v-6f7c07b2]{max-width:350px}}@media (max-width:950px){.wrapper-banner[data-v-6f7c07b2]{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_carousel_vue_vue_type_style_index_0_id_10a8a675_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_carousel_vue_vue_type_style_index_0_id_10a8a675_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_carousel_vue_vue_type_style_index_0_id_10a8a675_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_carousel_vue_vue_type_style_index_0_id_10a8a675_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_carousel_vue_vue_type_style_index_0_id_10a8a675_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "picture[data-v-10a8a675]{width:100%}.wrapper-banner[data-v-10a8a675] .swiper-pagination-bullet-active{background:#000;opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=105.js.map