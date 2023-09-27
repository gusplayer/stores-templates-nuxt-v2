exports.ids = [86,259];
exports.modules = {

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/Ko12-IHeader.vue?vue&type=template&id=cb6a947a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<header" + _vm._ssrClass("wrapper-header", _vm.isVariantLogo ? 'bg-white-white shadow' : '') + " data-v-cb6a947a>", "</header>", [_vm._ssrNode("<div class=\"header-content-logo\" data-v-cb6a947a>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    style: `max-width:${_vm.settingByTemplate12.logoSize};`,
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "header-logo",
    attrs: {
      "src": `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      "alt": "Logo Img"
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content_car\" data-v-cb6a947a>", "</div>", [_vm._ssrNode("<button id=\"OpenCartTag\"" + _vm._ssrClass("btn-cart content_car", _vm.isVariantLogo ? 'text-1' : 'text-2') + " style=\"margin-right: 20px\" data-v-cb6a947a>", "</button>", [_c('search-icon', {
    staticClass: "icon"
  }), _vm._ssrNode(" <p style=\"font-size: 18px; margin-left: 2px\" data-v-cb6a947a>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('home_buscar')) + "\n        ") + "</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<button id=\"OpenCartTag\"" + _vm._ssrClass("btn-cart content_car", _vm.isVariantLogo ? 'text-1' : 'text-2') + " data-v-cb6a947a>", "</button>", [_c('cart-icon', {
    staticClass: "icon"
  }), _vm._ssrNode(" <p style=\"font-size: 18px; margin-left: 2px\" data-v-cb6a947a>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('footer_carrito')) + "\n        ") + "</p>")], 2)], 2)], 2), _vm._ssrNode(" "), _c('KoOrder', {
    attrs: {
      "dataStore": _vm.dataStore
    }
  }), _vm._ssrNode(" "), _c('KoSearch')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template12/Ko12-IHeader.vue?vue&type=template&id=cb6a947a&scoped=true&

// EXTERNAL MODULE: ./components/template12/mixins/ComponentProps.vue + 2 modules
var ComponentProps = __webpack_require__(92);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/Ko12-IHeader.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko12_IHeadervue_type_script_lang_js_ = ({
  name: 'Ko12IHeader',
  components: {
    KoOrder: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 61)),
    KoSearch: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 1230))
  },
  mixins: [ComponentProps["default"]],
  data() {
    return {
      isVariantLogo: false
    };
  },
  async mounted() {
    window.addEventListener('scroll', await this.handleToggleLogo);
  },
  async beforeDestroy() {
    window.removeEventListener('scroll', await this.handleToggleLogo);
  },
  methods: {
    async handleToggleLogo() {
      await (this.isVariantLogo = !!(window.scrollY >= 120));
    },
    openOrder() {
      this.$gtm.push({
        event: 'OpenCart',
        action: 'click'
      });
      this.showMenu = false;
      this.$store.commit('SET_OPEN_ORDER', true);
    },
    openSearch() {
      this.$store.commit('SET_OPEN_SEARCH', true);
    }
  }
});
// CONCATENATED MODULE: ./components/template12/Ko12-IHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var template12_Ko12_IHeadervue_type_script_lang_js_ = (Ko12_IHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template12/Ko12-IHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(686)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template12_Ko12_IHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cb6a947a",
  "19dd442a"
  
)

/* harmony default export */ var Ko12_IHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(687);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("fbcabff8", content, true, context)
};

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IHeader_vue_vue_type_style_index_0_id_cb6a947a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(392);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IHeader_vue_vue_type_style_index_0_id_cb6a947a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IHeader_vue_vue_type_style_index_0_id_cb6a947a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IHeader_vue_vue_type_style_index_0_id_cb6a947a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IHeader_vue_vue_type_style_index_0_id_cb6a947a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-header[data-v-cb6a947a]{align-items:center;display:flex;justify-content:space-between;left:0;padding:0 20px;position:fixed;top:0;transform:translate3d(var(--tw-translate-x),var(--tw-translate-y),0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition:all .2s ease-in-out;width:100%;z-index:10}.header-content-logo[data-v-cb6a947a]{align-items:center;display:flex;justify-content:center;padding:2px 0}.wrapper-logo[data-v-cb6a947a]{width:100%}.header-logo[data-v-cb6a947a]{-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left}.btn-cart[data-v-cb6a947a]{cursor:pointer;font-weight:400;margin-right:10px}.content_car[data-v-cb6a947a]{align-items:center;display:flex;flex-direction:row}.icon[data-v-cb6a947a]{bottom:.125em;font-size:19px}.text-1[data-v-cb6a947a]{color:#000}.text-2[data-v-cb6a947a]{color:#fff}.text-1[data-v-cb6a947a]:hover,.text-2[data-v-cb6a947a]:hover{color:gray}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
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

/***/ })

};;
//# sourceMappingURL=template12-ko12-i-header.js.map