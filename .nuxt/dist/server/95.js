exports.ids = [95];
exports.modules = {

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/mixins/ComponentProps.vue?vue&type=script&lang=js&
/* harmony default export */ var ComponentPropsvue_type_script_lang_js_ = ({
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate12: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/template12/mixins/ComponentProps.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_ComponentPropsvue_type_script_lang_js_ = (ComponentPropsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template12/mixins/ComponentProps.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_ComponentPropsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f6585df8"
  
)

/* harmony default export */ var ComponentProps = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(694);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7bee46c7", content, true, context)
};

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroImage_vue_vue_type_style_index_0_id_0d40fa81_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroImage_vue_vue_type_style_index_0_id_0d40fa81_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroImage_vue_vue_type_style_index_0_id_0d40fa81_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroImage_vue_vue_type_style_index_0_id_0d40fa81_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroImage_vue_vue_type_style_index_0_id_0d40fa81_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero-image_container[data-v-0d40fa81]{height:51.178vh;margin:0;overflow:hidden;padding:0}.hero_image_bg[data-v-0d40fa81]{animation:ZoominOut-0d40fa81 10s ease;animation-delay:.12s;animation-fill-mode:forwards;background-attachment:fixed;background-position:50%;background-repeat:no-repeat;background-size:cover;filter:brightness(.7);left:0;position:absolute;top:0;z-index:1}.content-text[data-v-0d40fa81]{height:51.178vh;z-index:3}@keyframes ZoominOut-0d40fa81{0%{transform:scale(1.4)}to{transform:scale(1)}}@media screen and (min-width:920px){.hero-image_container[data-v-0d40fa81]{height:51.178vh}}@media (max-width:800px){.content-text[data-v-0d40fa81],.hero-image_container[data-v-0d40fa81]{height:511px}}@media (max-width:650px){.content-text[data-v-0d40fa81],.hero-image_container[data-v-0d40fa81]{height:430px}}@media (max-width:550px){.content-text[data-v-0d40fa81]{height:480px}.hero-image_container[data-v-0d40fa81]{height:380px}}@media (max-width:500px){.content-text[data-v-0d40fa81],.hero-image_container[data-v-0d40fa81]{height:300px}}@media (max-width:450px){.content-text[data-v-0d40fa81],.hero-image_container[data-v-0d40fa81]{height:270px}}@media (max-width:400px){.content-text[data-v-0d40fa81],.hero-image_container[data-v-0d40fa81]{height:250px}}@media (max-width:350px){.content-text[data-v-0d40fa81],.hero-image_container[data-v-0d40fa81]{height:220px}.content-text[data-v-0d40fa81],.hero-image_container[data-v-0d40fa81]{height:211px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/HeroImage.vue?vue&type=template&id=0d40fa81&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full hero-image_container"
  }, [_vm._ssrNode("<div class=\"relative h-inherit flex items-center justify-center\" data-v-0d40fa81><img" + _vm._ssrAttr("src", _vm.idCloudinaryBanner(_vm.imageSrc)) + " alt=\"img banner\" class=\"hero_image_bg h-inherit w-full\" data-v-0d40fa81> <div" + _vm._ssrClass("hidden lg:flex justify-center h-inherit items-center flex-col text-gray-100 ease duration-300 content-text", {
    'opacity-40 ': _vm.shouldChangeOpacity
  }) + " data-v-0d40fa81><h2 class=\"uppercase text-5xl font-semibold m-0\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.bannerTitleColor} ;`, null) + " data-v-0d40fa81>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingByTemplate12.bannerTitle) + "\n      ") + "</h2> <p class=\"mt-2 italic text-md normal-case text-gray-200\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.bannerDescriptionColor} ;`, null) + " data-v-0d40fa81>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingByTemplate12.bannerDescription) + "\n      ") + "</p></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template12/HeroImage.vue?vue&type=template&id=0d40fa81&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./components/template12/mixins/ComponentProps.vue + 2 modules
var ComponentProps = __webpack_require__(171);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/HeroImage.vue?vue&type=script&lang=js&


/* harmony default export */ var HeroImagevue_type_script_lang_js_ = ({
  name: 'HeroImage',
  mixins: [ComponentProps["a" /* default */], idCloudinary["a" /* default */]],
  data: () => ({
    shouldChangeOpacity: false
  }),
  computed: {
    imageSrc() {
      return this.settingByTemplate12.desktopBanner;
    },
    imageSrcResponsive() {
      return this.settingByTemplate12.responsiveBanner;
    }
  },
  async mounted() {
    window.addEventListener('scroll', await this.handleTextOpacity);
  },
  async beforeDestroy() {
    window.removeEventListener('scroll', await this.handleTextOpacity);
  },
  methods: {
    async handleTextOpacity() {
      await (this.shouldChangeOpacity = !!(window.scrollY >= 110));
    }
  }
});
// CONCATENATED MODULE: ./components/template12/HeroImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var template12_HeroImagevue_type_script_lang_js_ = (HeroImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template12/HeroImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(693)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template12_HeroImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0d40fa81",
  "eeb7c170"
  
)

/* harmony default export */ var HeroImage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=95.js.map