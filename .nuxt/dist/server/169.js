exports.ids = [169];
exports.modules = {

/***/ 1092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-information.vue?vue&type=template&id=4ac1e2d0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.information ? _c('div', {
    staticClass: "w-full flex justify-center items-center py-30 lg:py-40 px-10",
    staticStyle: {
      "background-color": "var(--background_color_1)"
    },
    style: [_vm.information, _vm.settingGeneral]
  }, [_vm._ssrNode("<div class=\"max-w-7xl mlg:w-full grid grid-cols-1 lg:grid-cols-2 mlg:grid-cols-4 gap-5 md:gap-4 items-center justify-center\" data-v-4ac1e2d0>", "</div>", [_vm._l(_vm.information.values, function (items, index) {
    return _vm._ssrNode("<div class=\"hidden w-full lg:flex flex-row items-center justify-start\" data-v-4ac1e2d0>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinary(items.img, 150, 150),
        expression: "idCloudinary(items.img, 150, 150)"
      }],
      staticClass: "object-contain object-center max-w-[40px] max-h-[40px]",
      class: `contentImg${index}`,
      attrs: {
        "width": "40",
        "height": "40",
        "alt": `imgInfo${index}`
      }
    }, []), _vm._ssrNode(" <div class=\"h-35 border-l-2 border-l-black ml-20 pr-20 leading-25\"" + _vm._ssrStyle(null, `border-color: ${items.color_border};`, null) + " data-v-4ac1e2d0></div> <div class=\"w-full\" data-v-4ac1e2d0><p class=\"mb-5\"" + _vm._ssrStyle(null, `color: ${items.color_title}; font-size: ${items.fontSizeTitle}; font-weight: ${items.fontWeighTitle};`, null) + " data-v-4ac1e2d0>" + _vm._ssrEscape("\n          " + _vm._s(items.title) + "\n        ") + "</p> <p" + _vm._ssrStyle(null, `color: ${items.color_text}; font-size: ${items.fontSizeText}; font-weight: ${items.fontWeighText};`, null) + " data-v-4ac1e2d0>" + _vm._ssrEscape("\n          " + _vm._s(items.text) + "\n        ") + "</p></div>")], 2);
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
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-4ac1e2d0>", "</div>", _vm._l(_vm.information.values, function (items, index) {
    return _vm._ssrNode("<div class=\"swiper-slide w-full flex flex-row items-center justify-start\" data-v-4ac1e2d0>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinary(items.img, 150, 150),
        expression: "idCloudinary(items.img, 150, 150)"
      }],
      staticClass: "object-contain object-center max-w-[40px] max-h-[40px]",
      class: `contentImg${index}`,
      attrs: {
        "width": "40",
        "height": "40",
        "alt": `imgInfo${index}`
      }
    }, []), _vm._ssrNode(" <div class=\"h-35 border-l-2 border-l-black ml-20 pr-20 leading-25\"" + _vm._ssrStyle(null, `border-color: ${items.color_border};`, null) + " data-v-4ac1e2d0></div> <div class=\"w-full\" data-v-4ac1e2d0><p class=\"mb-5\"" + _vm._ssrStyle(null, `color: ${items.color_title}; font-size: ${items.fontSizeTitle}; font-weight: ${items.fontWeighTitle};`, null) + " data-v-4ac1e2d0>" + _vm._ssrEscape("\n              " + _vm._s(items.title) + "\n            ") + "</p> <p" + _vm._ssrStyle(null, `color: ${items.color_text}; font-size: ${items.fontSizeText}; font-weight: ${items.fontWeighText};`, null) + " data-v-4ac1e2d0>" + _vm._ssrEscape("\n              " + _vm._s(items.text) + "\n            ") + "</p></div>")], 2);
  }), 0)])], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/ko14-information.vue?vue&type=template&id=4ac1e2d0&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-information.vue?vue&type=script&lang=js&

/* harmony default export */ var ko14_informationvue_type_script_lang_js_ = ({
  name: 'Ko14-information',
  mixins: [idCloudinary["a" /* default */]],
  props: {
    information: Object,
    settingGeneral: Object,
    dataStore: Object
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        slidesPerView: '1',
        // loop: true,
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
// CONCATENATED MODULE: ./components/template14/ko14-information.vue?vue&type=script&lang=js&
 /* harmony default export */ var template14_ko14_informationvue_type_script_lang_js_ = (ko14_informationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/ko14-information.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(764)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template14_ko14_informationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4ac1e2d0",
  "b8dc45e6"
  
)

/* harmony default export */ var ko14_information = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(765);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6e1db68e", content, true, context)
};

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_information_vue_vue_type_style_index_0_id_4ac1e2d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_information_vue_vue_type_style_index_0_id_4ac1e2d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_information_vue_vue_type_style_index_0_id_4ac1e2d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_information_vue_vue_type_style_index_0_id_4ac1e2d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_information_vue_vue_type_style_index_0_id_4ac1e2d0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-container-horizontal>.swiper-pagination-bullets[data-v-4ac1e2d0],.swiper-pagination-custom[data-v-4ac1e2d0],.swiper-pagination-fraction[data-v-4ac1e2d0]{bottom:-14px;left:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=169.js.map