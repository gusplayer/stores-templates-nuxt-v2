exports.ids = [111];
exports.modules = {

/***/ 1172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-Categories.vue?vue&type=template&id=775448ce&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex justify-center items-center py-25 lg:py-40 px-10",
    style: `background-color: ${_vm.categories['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full max-w-9/5 md:max-w-9/0 h-auto flex flex-col items-center justify-center overflow-hidden\" data-v-775448ce>", "</div>", [_vm._ssrNode("<p class=\"w-full text-center mb-25 text-25 md:text-30 lg:text-40\"" + _vm._ssrStyle(null, `color: ${_vm.categories.color_title_1}; font-weight: ${_vm.categories.fontWeighTitle};`, null) + " data-v-775448ce>" + _vm._ssrEscape("\n      " + _vm._s(_vm.categories.title) + "\n    ") + "</p> "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "w-full"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper w-full\" data-v-775448ce>" + _vm._ssrList(_vm.categories.values, function (item, index) {
    var _vm$settingGeneral;
    return "<a" + _vm._ssrAttr("id", `slide${index + 1}`) + _vm._ssrAttr("href", item.url_redirect) + " rel=\"noreferrer noopener\" class=\"swiper-slide w-full\" data-v-775448ce><img" + _vm._ssrAttr("src", _vm.idCloudinary(item.img, 550, 550)) + " alt=\"banner template15\" class=\"w-full h-full object-cover\"" + _vm._ssrStyle(null, `border-radius: ${(_vm$settingGeneral = _vm.settingGeneral) === null || _vm$settingGeneral === void 0 ? void 0 : _vm$settingGeneral.radius};`, null) + " data-v-775448ce> <div class=\"mt-10 text-center text-16 md:text-20 lg:text-22\"" + _vm._ssrStyle(null, `color: ${item.color_title}; font-weight: ${item.fontWeighTitle};`, null) + " data-v-775448ce><p data-v-775448ce>" + _vm._ssrEscape(_vm._s(item.title)) + "</p></div></a>";
  }) + "</div> " + (_vm.categories.values.length > 1 ? "<div class=\"swiper-button-prev\" data-v-775448ce></div>" : "<!---->") + " " + (_vm.categories.values.length > 1 ? "<div class=\"swiper-button-next\" data-v-775448ce></div>" : "<!---->"))])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template15/ko15-Categories.vue?vue&type=template&id=775448ce&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-Categories.vue?vue&type=script&lang=js&

/* harmony default export */ var ko15_Categoriesvue_type_script_lang_js_ = ({
  name: 'Ko15-categories',
  mixins: [idCloudinary["a" /* default */]],
  props: {
    categories: {
      type: Object,
      required: true
    },
    settingGeneral: {
      type: Object,
      required: true
    },
    dataStore: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        setWrapperSize: true,
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 26,
        grabCursor: true,
        breakpoints: {
          1250: {
            slidesPerView: 5,
            spaceBetween: 35
          },
          1060: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          990: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          790: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          770: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
// CONCATENATED MODULE: ./components/template15/ko15-Categories.vue?vue&type=script&lang=js&
 /* harmony default export */ var template15_ko15_Categoriesvue_type_script_lang_js_ = (ko15_Categoriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template15/ko15-Categories.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(762)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template15_ko15_Categoriesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "775448ce",
  "447a1990"
  
)

/* harmony default export */ var ko15_Categories = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(763);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("87b1cad2", content, true, context)
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

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_Categories_vue_vue_type_style_index_0_id_775448ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(454);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_Categories_vue_vue_type_style_index_0_id_775448ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_Categories_vue_vue_type_style_index_0_id_775448ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_Categories_vue_vue_type_style_index_0_id_775448ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko15_Categories_vue_vue_type_style_index_0_id_775448ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".giftLoad[data-v-775448ce],.swiper-slide[data-v-775448ce]{max-width:324px}.swiper-button-next[data-v-775448ce],.swiper-button-prev[data-v-775448ce]{color:#ed6436}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template15-ko15-categories.js.map