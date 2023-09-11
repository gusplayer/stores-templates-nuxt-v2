exports.ids = [101];
exports.modules = {

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/ko16-Categories.vue?vue&type=template&id=0b0c908c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex justify-center items-center py-25 lg:py-40 px-10",
    style: `background-color: ${_vm.categories['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full max-w-[1700px] h-auto flex flex-col items-center justify-center overflow-hidden\" data-v-0b0c908c>", "</div>", [_vm._ssrNode("<p class=\"w-full text-center mb-25 text-25 md:text-30 lg:text-40\"" + _vm._ssrStyle(null, `color: ${_vm.categories.color_title_1}; font-weight: ${_vm.categories.fontWeighTitle};`, null) + " data-v-0b0c908c>" + _vm._ssrEscape("\n      " + _vm._s(_vm.categories.title) + "\n    ") + "</p> "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "w-full"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper w-full\" data-v-0b0c908c>" + _vm._ssrList(_vm.categories.values, function (item, index) {
    var _vm$settingGeneral, _vm$settingGeneral2;
    return "<a" + _vm._ssrAttr("id", `slide${index + 1}`) + _vm._ssrAttr("href", item.url_redirect) + " rel=\"noreferrer noopener\" class=\"swiper-slide w-full\" data-v-0b0c908c><img" + _vm._ssrAttr("src", _vm.idCloudinary(item.img, 550, 550)) + " alt=\"banner template15\" width=\"405\" height=\"405\" class=\"w-full h-full object-cover relative\"" + _vm._ssrStyle(null, `border-radius: ${(_vm$settingGeneral = _vm.settingGeneral) === null || _vm$settingGeneral === void 0 ? void 0 : _vm$settingGeneral.radius};`, null) + " data-v-0b0c908c> <div class=\"absolute w-full h-full flex justify-center items-center top-0 z-10\" data-v-0b0c908c><p class=\"px-10 py-15 md:py-8 text-12 md:text-14 w-full max-w-[250px] text-center\"" + _vm._ssrStyle(null, `color: ${item.color_title}; background-color: ${item.color_bg};  border-radius: ${(_vm$settingGeneral2 = _vm.settingGeneral) === null || _vm$settingGeneral2 === void 0 ? void 0 : _vm$settingGeneral2.radius};`, null) + " data-v-0b0c908c>" + _vm._ssrEscape("\n              " + _vm._s(item.title) + "\n            ") + "</p></div></a>";
  }) + "</div> " + (_vm.categories.values.length > 1 ? "<div class=\"swiper-button-prev\" data-v-0b0c908c></div>" : "<!---->") + " " + (_vm.categories.values.length > 1 ? "<div class=\"swiper-button-next\" data-v-0b0c908c></div>" : "<!---->"))])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template16/ko16-Categories.vue?vue&type=template&id=0b0c908c&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/ko16-Categories.vue?vue&type=script&lang=js&

/* harmony default export */ var ko16_Categoriesvue_type_script_lang_js_ = ({
  name: 'Ko16-categories',
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
        slidesPerView: 4,
        spaceBetween: 26,
        grabCursor: true,
        breakpoints: {
          990: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          790: {
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
// CONCATENATED MODULE: ./components/template16/ko16-Categories.vue?vue&type=script&lang=js&
 /* harmony default export */ var template16_ko16_Categoriesvue_type_script_lang_js_ = (ko16_Categoriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template16/ko16-Categories.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(792)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template16_ko16_Categoriesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0b0c908c",
  "682472d0"
  
)

/* harmony default export */ var ko16_Categories = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(793);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("19b9e358", content, true, context)
};

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko16_Categories_vue_vue_type_style_index_0_id_0b0c908c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(400);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko16_Categories_vue_vue_type_style_index_0_id_0b0c908c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko16_Categories_vue_vue_type_style_index_0_id_0b0c908c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko16_Categories_vue_vue_type_style_index_0_id_0b0c908c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko16_Categories_vue_vue_type_style_index_0_id_0b0c908c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".giftLoad[data-v-0b0c908c],.swiper-slide[data-v-0b0c908c]{max-width:405px}.swiper-button-next[data-v-0b0c908c],.swiper-button-prev[data-v-0b0c908c]{color:#ed6436}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=ko16-categories.js.map