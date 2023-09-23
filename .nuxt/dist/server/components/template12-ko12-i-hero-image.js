exports.ids = [77,259];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/mixins/ComponentProps.vue?vue&type=script&lang=js&
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
  "7357669e"
  
)

/* harmony default export */ var ComponentProps = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/Ko12-IHeroImage.vue?vue&type=template&id=dba13ab8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full hero-image_container"
  }, [_vm._ssrNode("<div class=\"relative h-inherit flex items-center justify-center\" data-v-dba13ab8><img" + _vm._ssrAttr("src", _vm.idCloudinaryBanner(_vm.imageSrc, 'banner')) + " alt=\"img banner\" class=\"hero_image_bg h-inherit w-full\" data-v-dba13ab8> <div" + _vm._ssrClass("hidden lg:flex justify-center h-inherit items-center flex-col text-gray-100 ease duration-300 content-text", {
    'opacity-40 ': _vm.shouldChangeOpacity
  }) + " data-v-dba13ab8><h2 class=\"uppercase text-5xl font-semibold m-0\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.bannerTitleColor} ;`, null) + " data-v-dba13ab8>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingByTemplate12.bannerTitle) + "\n      ") + "</h2> <p class=\"mt-2 italic text-md normal-case text-gray-200\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.bannerDescriptionColor} ;`, null) + " data-v-dba13ab8>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingByTemplate12.bannerDescription) + "\n      ") + "</p></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template12/Ko12-IHeroImage.vue?vue&type=template&id=dba13ab8&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// EXTERNAL MODULE: ./components/template12/mixins/ComponentProps.vue + 2 modules
var ComponentProps = __webpack_require__(101);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/Ko12-IHeroImage.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko12_IHeroImagevue_type_script_lang_js_ = ({
  name: 'Ko12IHeroImage',
  mixins: [ComponentProps["default"], idCloudinary["a" /* default */]],
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
// CONCATENATED MODULE: ./components/template12/Ko12-IHeroImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var template12_Ko12_IHeroImagevue_type_script_lang_js_ = (Ko12_IHeroImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template12/Ko12-IHeroImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(713)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template12_Ko12_IHeroImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "dba13ab8",
  "6ec177f4"
  
)

/* harmony default export */ var Ko12_IHeroImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(714);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("a146c1f6", content, true, context)
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

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IHeroImage_vue_vue_type_style_index_0_id_dba13ab8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(429);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IHeroImage_vue_vue_type_style_index_0_id_dba13ab8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IHeroImage_vue_vue_type_style_index_0_id_dba13ab8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IHeroImage_vue_vue_type_style_index_0_id_dba13ab8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IHeroImage_vue_vue_type_style_index_0_id_dba13ab8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero-image_container[data-v-dba13ab8]{height:51.178vh;margin:0;overflow:hidden;padding:0}.hero_image_bg[data-v-dba13ab8]{animation:ZoominOut-dba13ab8 10s ease;animation-delay:.12s;animation-fill-mode:forwards;background-attachment:fixed;background-position:50%;background-repeat:no-repeat;background-size:cover;filter:brightness(.7);left:0;position:absolute;top:0;z-index:1}.content-text[data-v-dba13ab8]{height:51.178vh;z-index:3}@keyframes ZoominOut-dba13ab8{0%{transform:scale(1.4)}to{transform:scale(1)}}@media screen and (min-width:920px){.hero-image_container[data-v-dba13ab8]{height:51.178vh}}@media (max-width:800px){.content-text[data-v-dba13ab8],.hero-image_container[data-v-dba13ab8]{height:511px}}@media (max-width:650px){.content-text[data-v-dba13ab8],.hero-image_container[data-v-dba13ab8]{height:430px}}@media (max-width:550px){.content-text[data-v-dba13ab8]{height:480px}.hero-image_container[data-v-dba13ab8]{height:380px}}@media (max-width:500px){.content-text[data-v-dba13ab8],.hero-image_container[data-v-dba13ab8]{height:300px}}@media (max-width:450px){.content-text[data-v-dba13ab8],.hero-image_container[data-v-dba13ab8]{height:270px}}@media (max-width:400px){.content-text[data-v-dba13ab8],.hero-image_container[data-v-dba13ab8]{height:250px}}@media (max-width:350px){.content-text[data-v-dba13ab8],.hero-image_container[data-v-dba13ab8]{height:220px}.content-text[data-v-dba13ab8],.hero-image_container[data-v-dba13ab8]{height:211px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template12-ko12-i-hero-image.js.map