exports.ids = [139];
exports.modules = {

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-listBlogHome.vue?vue&type=template&id=1eebe6f6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return this.listArticulos.length > 0 ? _c('div', {
    staticClass: "w-full flex justify-center items-center py-15 lg:py-20 px-10 md:px-0",
    style: `background-color: ${_vm.listBlogHome['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full h-auto relative max-w-7xl flex flex-col items-center justify-center overflow-hidden\" data-v-1eebe6f6>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-row justify-between items-center mb-20\" data-v-1eebe6f6>", "</div>", [_vm._ssrNode("<p" + _vm._ssrStyle(null, `color: ${_vm.listBlogHome.color_title}; font-size: ${_vm.listBlogHome.fontSizeTitle}; font-weight: ${_vm.listBlogHome.fontWeighTitle};`, null) + " data-v-1eebe6f6>" + _vm._ssrEscape("\n        " + _vm._s(_vm.listBlogHome.title) + "\n      ") + "</p> "), _c('nuxt-link', {
    style: `color: ${_vm.listBlogHome.color_text_btn}; font-size: ${_vm.listBlogHome.fontSizeTextBtn}; font-weight: ${_vm.listBlogHome.fontWeighTextBtn};`,
    attrs: {
      "to": {
        path: `/blog`
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.listBlogHome.text_btn) + "\n        "), _c('FlechaRight-icon', {
    style: `color: ${_vm.listBlogHome.color_text_btn}; font-size: ${_vm.listBlogHome.fontSizeTextBtn}; font-weight: ${_vm.listBlogHome.fontWeighTextBtn};`
  })], 1)], 2), _vm._ssrNode(" "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "w-full h-full"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper w-full h-full\" data-v-1eebe6f6>", "</div>", _vm._l(_vm.listArticulos, function (article) {
    return _vm._ssrNode("<div class=\"swiper-slide w-full h-full\" data-v-1eebe6f6>", "</div>", [_c('KoBlogCard', {
      staticClass: "giftLoad w-full h-full",
      attrs: {
        "article": article,
        "settingGeneral": _vm.settingGeneral,
        "cardBlog": _vm.cardBlog
      }
    })], 1);
  }), 0)])], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/ko14-listBlogHome.vue?vue&type=template&id=1eebe6f6&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-listBlogHome.vue?vue&type=script&lang=js&
/* harmony default export */ var ko14_listBlogHomevue_type_script_lang_js_ = ({
  name: 'Ko14-listBlogHome',
  props: {
    listBlogHome: Object,
    settingGeneral: Object,
    dataStore: Object,
    cardBlog: Object
  },
  components: {
    KoBlogCard: () => __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, 1050))
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: '',
        autoplay: {
          delay: 7000,
          disableOnInteraction: false
        },
        breakpoints: {
          10000: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1023: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          580: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos;
    },
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
});
// CONCATENATED MODULE: ./components/template14/ko14-listBlogHome.vue?vue&type=script&lang=js&
 /* harmony default export */ var template14_ko14_listBlogHomevue_type_script_lang_js_ = (ko14_listBlogHomevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/ko14-listBlogHome.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(740)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template14_ko14_listBlogHomevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1eebe6f6",
  "3e6a374e"
  
)

/* harmony default export */ var ko14_listBlogHome = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(741);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7b677d83", content, true, context)
};

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_listBlogHome_vue_vue_type_style_index_0_id_1eebe6f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(400);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_listBlogHome_vue_vue_type_style_index_0_id_1eebe6f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_listBlogHome_vue_vue_type_style_index_0_id_1eebe6f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_listBlogHome_vue_vue_type_style_index_0_id_1eebe6f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_listBlogHome_vue_vue_type_style_index_0_id_1eebe6f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".giftLoad[data-v-1eebe6f6],.swiper-slide[data-v-1eebe6f6]{max-width:300px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=139.js.map