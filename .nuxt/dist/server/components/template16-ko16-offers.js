exports.ids = [145];
exports.modules = {

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/ko16-Offers.vue?vue&type=template&id=66d01200&scoped=true&
var render = function render() {
  var _vm$offers, _vm$offers2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full justify-center items-center relative mt-20 md:mt-50",
    style: [_vm.offers, `background-color: ${_vm.offers['--background_color_1']}`]
  }, [_vm._ssrNode("<picture data-v-66d01200>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.offers.img, 'bannerRes', 800)) + " data-v-66d01200> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.offers.img, 'banner')) + " data-v-66d01200> "), _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.offers.img,
      expression: "offers.img"
    }],
    staticClass: "w-full object-cover",
    attrs: {
      "alt": "banner template16"
    }
  }, [])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"w-full h-full max-w-9/0 flex flex-col justify-center items-end absolute top-0\" style=\"z-index: 20\" data-v-66d01200>", "</div>", [_vm._ssrNode("<div class=\"w-full h-full max-w-lg flex flex-col justify-center items-end\" data-v-66d01200>", "</div>", [_vm._ssrNode("<div class=\"flex-1 flex flex-col justify-center items-start\" data-v-66d01200>", "</div>", [_vm._ssrNode(((_vm$offers = _vm.offers) !== null && _vm$offers !== void 0 && _vm$offers.title ? "<p class=\"mb-10 max-w-lg md:max-w-xl text-15 md:text-25 lg:text-40 xl:text-45 leading-tight\"" + _vm._ssrStyle(null, `color: ${_vm.offers.color_title}; font-weight: ${_vm.offers.fontWeighTitle};`, null) + " data-v-66d01200>" + _vm._ssrEscape("\n          " + _vm._s(_vm.offers.title) + "\n        ") + "</p>" : "<!---->") + " " + ((_vm$offers2 = _vm.offers) !== null && _vm$offers2 !== void 0 && _vm$offers2.text ? "<p class=\"max-w-md md:max-w-lg text-14 md:text-18 xl:text-28\"" + _vm._ssrStyle(null, `color: ${_vm.offers.color_text}; font-weight: ${_vm.offers.fontWeighText};`, null) + " data-v-66d01200>" + _vm._ssrEscape("\n          " + _vm._s(_vm.offers.text) + "\n        ") + "</p>" : "<!---->") + " "), _vm._ssrNode("<div class=\"w-full max-w-[300px] flex justify-start items-start\" data-v-66d01200>", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-66d01200>", "</div>", _vm._l(_vm.offers.values, function (item, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\" data-v-66d01200>", "</div>", [_c('K0CountDown', {
      attrs: {
        "information": item,
        "product": _vm.setProduct(item.item),
        "card-products": _vm.cardProducts,
        "setting-general": _vm.settingGeneral
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div slot=\"pagination\" class=\"swiper-pagination\" data-v-66d01200></div>")], 2)])], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template16/ko16-Offers.vue?vue&type=template&id=66d01200&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/ko16-Offers.vue?vue&type=script&lang=js&

/* harmony default export */ var ko16_Offersvue_type_script_lang_js_ = ({
  name: 'Ko16Offers',
  components: {
    K0CountDown: () => __webpack_require__.e(/* import() */ 149).then(__webpack_require__.bind(null, 1286))
  },
  mixins: [idCloudinary["a" /* default */]],
  props: {
    cardProducts: {
      type: Object,
      required: true
    },
    offers: {
      type: Object,
      required: true
    },
    settingGeneral: {
      type: Object,
      required: true
    },
    fullProducts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination'
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
    setProduct(value) {
      const product = this.fullProducts.filter(product => product.slug === value);
      return product;
    }
  }
});
// CONCATENATED MODULE: ./components/template16/ko16-Offers.vue?vue&type=script&lang=js&
 /* harmony default export */ var template16_ko16_Offersvue_type_script_lang_js_ = (ko16_Offersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template16/ko16-Offers.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(770)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template16_ko16_Offersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "66d01200",
  "d051e2da"
  
)

/* harmony default export */ var ko16_Offers = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(771);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("19dec878", content, true, context)
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

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko16_Offers_vue_vue_type_style_index_0_id_66d01200_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(434);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko16_Offers_vue_vue_type_style_index_0_id_66d01200_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko16_Offers_vue_vue_type_style_index_0_id_66d01200_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko16_Offers_vue_vue_type_style_index_0_id_66d01200_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko16_Offers_vue_vue_type_style_index_0_id_66d01200_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-66d01200],.swiper-wrapper[data-v-66d01200]{max-width:300px}.pagination[data-v-66d01200]{background:transparent;color:#222;font-size:18px}.product_pagination[data-v-66d01200] .el-pagination.is-background .btn-next,.product_pagination[data-v-66d01200] .el-pagination.is-background .btn-prev,.product_pagination[data-v-66d01200] .el-pagination.is-background .el-pager li{background-color:transparent;color:#222}.product_pagination[data-v-66d01200] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-66d01200] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-66d01200] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--color_pagination)}.product_pagination[data-v-66d01200] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--color_pagination);color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template16-ko16-offers.js.map