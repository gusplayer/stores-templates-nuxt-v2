exports.ids = [116];
exports.modules = {

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(584);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6e8974c8", content, true, context)
};

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_9_vue_vue_type_style_index_0_id_7a118c6d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(322);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_9_vue_vue_type_style_index_0_id_7a118c6d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_9_vue_vue_type_style_index_0_id_7a118c6d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_9_vue_vue_type_style_index_0_id_7a118c6d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_9_vue_vue_type_style_index_0_id_7a118c6d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-7a118c6d]{font-family:var(--font-style-1)!important}.wrapper-header[data-v-7a118c6d]{background-color:var(--background_color_1);z-index:99999999999!important}.btn-active[data-v-7a118c6d]{box-shadow:inset 0 -48px 0 -44px var(--color_border)}.btn[data-v-7a118c6d]{color:var(--color_text)}.btn[data-v-7a118c6d]:hover{box-shadow:inset 0 -48px 0 -44px var(--color_border);color:var(--hover_text)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/header9/Ko-Header-9.vue?vue&type=template&id=7a118c6d&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate14 ? _c('div', {
    staticClass: "w-full flex justify-center items-center sticky top-0 wrapper-header",
    style: [_vm.settingByTemplate14[0].setting14Header, _vm.settingByTemplate14[0].setting14General, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate14) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.setting14General) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.fount_1) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Poppins'
    }],
    attrs: {
      "id": "navbar"
    }
  }, [_vm._ssrNode("<div id=\"headbg\" class=\"w-full max-w-7xl flex justify-between items-center\" data-v-7a118c6d>", "</div>", [_c('KoOrder', {
    attrs: {
      "dataStore": _vm.dataStore
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex justify-center items-center py-1\" data-v-7a118c6d>", "</div>", [_c('nuxt-link', {
    staticClass: "w-full flex justify-center items-center",
    staticStyle: {
      "max-width": "var(--with_logo)"
    },
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "w-full object-contain object-left",
    attrs: {
      "src": `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      "alt": "LogoStore"
    },
    on: {
      "click": _vm.clear
    }
  })])], 1), _vm._ssrNode(" "), _vm.settingByTemplate14[0].pages.values ? _vm._ssrNode("<div id=\"swiper-slide-categories\" class=\"flex flex-row justify-start items-center box-border;\" data-v-7a118c6d>", "</div>", _vm._l(_vm.settingByTemplate14[0].pages.values, function (item, index) {
    return _vm._ssrNode("<div data-v-7a118c6d>", "</div>", [!item.isExternalLink ? _c('nuxt-link', {
      staticClass: "content-button",
      attrs: {
        "to": item.url
      }
    }, [_c('p', {
      staticClass: "mr-20 px-8 text-16 font-semibold leading-22 transition-all ease-in duration-0.3",
      class: _vm.btnSelect == item.url ? 'btn-active' : '',
      on: {
        "click": function ($event) {
          return _vm.btnActivate(item.url);
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.displayName) + "\n          ")])]) : _c('a', {
      staticClass: "content-button",
      attrs: {
        "href": item.url,
        "rel": "noreferrer noopener",
        "target": "_blank"
      }
    }, [_c('p', {
      staticClass: "btn"
    }, [_vm._v("\n            " + _vm._s(item.displayName) + "\n          ")])])], 1);
  }), 0) : _vm._e(), _vm._ssrNode(" <div class=\"flex flex-row justify-center items-center cursor-pointer transition-all ease-in duration-0.3\" data-v-7a118c6d><i class=\"w-36 h-auto flex justify-center items-center relative cursor-pointer\" data-v-7a118c6d><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23\" height=\"23\"" + _vm._ssrAttr("fill", _vm.settingByTemplate14[0].setting14Header['--color_icon']) + " viewBox=\"0 0 16 16\" class=\"transition-all ease-in duration-0.2 icon-shop\" data-v-7a118c6d><title data-v-7a118c6d>Cart</title> <path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-7a118c6d></path></svg></i> <div class=\"w-auto h-15 flex justify-center items-center rounded-full -mt-20 -ml-8\" style=\"background-color: var(--color_border)\" data-v-7a118c6d><span class=\"pt-1 px-4 text-white-white text-10 leading-12 tracking-0 font-semibold num-items\" data-v-7a118c6d>" + _vm._ssrEscape("\n          " + _vm._s(_vm.productsCart) + "\n        ") + "</span></div></div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/headers/header9/Ko-Header-9.vue?vue&type=template&id=7a118c6d&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/header9/Ko-Header-9.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Header_9vue_type_script_lang_js_ = ({
  components: {
    KoOrder: () => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, 68))
  },
  name: 'Ko-Header-9',
  props: {
    settingByTemplate14: Array,
    dataStore: Object
  },
  data() {
    return {
      searchSelect: true,
      btnSelect: '',
      search: '',
      showSearch: false
    };
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length;
    },
    FacebookPixel() {
      return this.$store.state.analytics_tagmanager;
    }
  },
  methods: {
    initHeader() {
      if (this.$route.fullPath == '/') {
        this.$store.commit('SET_STATE_BANNER', true);
        this.showSearch = true;
      } else if (this.$route.query && this.$route.query.category) {
        this.$store.commit('SET_STATE_BANNER', false);
        this.showSearch = true;
      } else if (this.$route.query && this.$route.query.subcategory) {
        this.$store.commit('SET_STATE_BANNER', false);
        this.showSearch = true;
      } else if (this.$route.query && this.$route.query.search) {
        this.$store.commit('SET_STATE_BANNER', false);
        this.setSearch(this.$route.query.search);
        this.showSearch = true;
      } else {
        this.showSearch = false;
      }
    },
    btnActivate(value) {
      this.btnSelect = value;
    },
    openSearch() {
      this.searchSelect = false;
      this.$store.commit('SET_OPEN_SEARCH', true);
    },
    closedSearch() {
      this.searchSelect = true;
      this.$store.commit('SET_OPEN_SEARCH', false);
    },
    openOrder() {
      this.$store.commit('SET_OPEN_ORDER', true);
    },
    openMenuLateral() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', true);
    },
    closed() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false);
    },
    clear() {
      this.$router.push({
        path: '/'
      });
      this.$store.commit('SET_STATE_BANNER', true);
    },
    SearchProduct(search) {
      this.$store.commit('SET_SEARCH_VALUE', search);
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value;
        if (this.FacebookPixel && this.FacebookPixel.pixel_facebook != null) {
          window.fbq('track', 'Search', {
            search_string: value
          });
        }
      } else {
        location.href = '?search=' + '';
      }
    },
    setSearch(value) {
      this.search = decodeURIComponent(value);
    },
    focusInput() {
      document.getElementById('SearchHeader').focus();
    },
    scrollLeft() {
      document.getElementById('swiper-slide-categories').scrollLeft -= 300;
    },
    scrollRight() {
      document.getElementById('swiper-slide-categories').scrollLeft += 300;
    }
  }
});
// CONCATENATED MODULE: ./components/headers/header9/Ko-Header-9.vue?vue&type=script&lang=js&
 /* harmony default export */ var header9_Ko_Header_9vue_type_script_lang_js_ = (Ko_Header_9vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/headers/header9/Ko-Header-9.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(583)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header9_Ko_Header_9vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a118c6d",
  "3367c224"
  
)

/* harmony default export */ var Ko_Header_9 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=116.js.map