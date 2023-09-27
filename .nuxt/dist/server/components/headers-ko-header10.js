exports.ids = [41];
exports.modules = {

/***/ 1252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/Ko15_header/Ko-Header-10.vue?vue&type=template&id=e87afadc&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3, _vm$settingByTemplate4, _vm$settingByTemplate5, _vm$settingByTemplate6, _vm$settingByTemplate7;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate15 ? _c('div', {
    staticClass: "w-full max-h-[120px] md:max-h-10/0 flex justify-center items-center sticky top-0 px-10 wrapper-header",
    style: [_vm.settingByTemplate15[0].header, _vm.settingByTemplate15[0].settingGeneral, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate15[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.settingGeneral) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.font) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"w-full max-w-9/5 md:max-w-9/0 flex justify-between items-center\" data-v-e87afadc>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-row justify-start items-center\" data-v-e87afadc>", "</div>", [_vm._ssrNode("<div class=\"flex justify-center items-center max-h-[120px] md:max-h-10/0\" data-v-e87afadc>", "</div>", [_c('nuxt-link', {
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
      "src": `${_vm.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      "alt": "LogoStore"
    },
    on: {
      "click": _vm.clear
    }
  })])], 1), _vm._ssrNode(" "), (_vm$settingByTemplate4 = _vm.settingByTemplate15[0]) !== null && _vm$settingByTemplate4 !== void 0 && (_vm$settingByTemplate5 = _vm$settingByTemplate4.pages) !== null && _vm$settingByTemplate5 !== void 0 && _vm$settingByTemplate5.values ? _vm._ssrNode("<div id=\"swiper-slide-categories\" class=\"hidden md:flex flex-row justify-start items-center box-border ml-20\" data-v-e87afadc>", "</div>", _vm._l(_vm.settingByTemplate15[0].pages.values, function (item, index) {
    return _vm._ssrNode("<div data-v-e87afadc>", "</div>", [!item.isExternalLink ? _c('nuxt-link', {
      attrs: {
        "to": item.url
      }
    }, [_c('p', {
      staticClass: "mr-20 px-8 text-16 font-semibold leading-22 transition-all ease-in duration-0.3 btn",
      class: _vm.btnSelect == item.url ? 'btn-active' : '',
      on: {
        "click": function ($event) {
          return _vm.btnActivate(item.url);
        }
      }
    }, [_vm._v("\n              " + _vm._s(item.displayName) + "\n            ")])]) : _c('a', {
      staticClass: "mr-20 px-8 text-16 font-semibold leading-22 transition-all ease-in duration-0.3 btn",
      class: _vm.btnSelect == item.url ? 'btn-active' : '',
      attrs: {
        "href": item.url,
        "rel": "noreferrer noopener",
        "target": "_blank"
      }
    }, [_vm._v("\n            " + _vm._s(item.displayName) + "\n          ")])], 1);
  }), 0) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex items-center\" data-v-e87afadc>", "</div>", [_vm._ssrNode("<div class=\"mr-10\" data-v-e87afadc>", "</div>", [_c('search-icon', {
    staticClass: "text-25",
    style: `color: ${_vm.settingByTemplate15[0].header['--color-icon']} ;`
  })], 1), _vm._ssrNode(" <div class=\"flex flex-row justify-center items-center cursor-pointer transition-all ease-in duration-0.3\" data-v-e87afadc><i class=\"w-36 h-auto flex justify-center items-center relative cursor-pointer\" data-v-e87afadc><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23\" height=\"23\"" + _vm._ssrAttr("fill", _vm.settingByTemplate15[0].header['--color-icon']) + " viewBox=\"0 0 16 16\" class=\"transition-all ease-in duration-0.2 icon-shop\" data-v-e87afadc><title data-v-e87afadc>Cart</title> <path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-e87afadc></path></svg></i> <div class=\"w-auto h-15 flex justify-center items-center rounded-full -mt-20 -ml-8\" style=\"background-color: var(--color_border)\" data-v-e87afadc><span class=\"pt-1 px-4 text-white-white text-10 leading-12 tracking-0 font-semibold num-items\" data-v-e87afadc>" + _vm._ssrEscape("\n            " + _vm._s(_vm.productsCart) + "\n          ") + "</span></div></div> "), _vm._ssrNode("<button class=\"flex md:hidden ml-10\" data-v-e87afadc>", "</button>", [_c('menu-icon', {
    staticClass: "text-25",
    style: `color: ${_vm.settingByTemplate15[0].header['--color-icon']} ;`
  })], 1)], 2), _vm._ssrNode(" "), _c('KoOrder', {
    attrs: {
      "data-store": _vm.dataStore
    }
  }), _vm._ssrNode(" "), _c('KoSearch'), _vm._ssrNode(" "), _c('Ko14MenuLateral', {
    attrs: {
      "data-store": _vm.dataStore,
      "setting-by-template": _vm.settingByTemplate15[0].listProductsFilter
    }
  }), _vm._ssrNode(" "), _c('el-drawer', {
    attrs: {
      "visible": _vm.stateMenu,
      "direction": "ttb",
      "with-header": false,
      "modal-append-to-body": false,
      "size": "25%"
    },
    on: {
      "update:visible": function ($event) {
        _vm.stateMenu = $event;
      }
    }
  }, [_c('div', {
    staticClass: "w-full flex flex-col justify-center items-center h-full py-5"
  }, [(_vm$settingByTemplate6 = _vm.settingByTemplate15[0]) !== null && _vm$settingByTemplate6 !== void 0 && (_vm$settingByTemplate7 = _vm$settingByTemplate6.pages) !== null && _vm$settingByTemplate7 !== void 0 && _vm$settingByTemplate7.values ? _c('div', {
    staticClass: "w-full h-full max-h-[150px] max-w-[300px] flex flex-col justify-center items-center overflow-y-auto py-10"
  }, _vm._l(_vm.settingByTemplate15[0].pages.values, function (item, index) {
    return _c('div', {
      key: `${index}${item.displayName}`
    }, [!item.isExternalLink ? _c('nuxt-link', {
      staticClass: "my-5 block",
      attrs: {
        "to": item.url
      }
    }, [_c('p', {
      staticClass: "px-8 text-16 font-semibold leading-22 transition-all ease-in duration-0.3",
      class: _vm.btnSelect == item.url ? 'btn-active' : '',
      on: {
        "click": function ($event) {
          return _vm.btnActivate(item.url);
        }
      }
    }, [_vm._v("\n                " + _vm._s(item.displayName) + "\n              ")])]) : _c('a', {
      staticClass: "my-5 block",
      attrs: {
        "href": item.url,
        "rel": "noreferrer noopener",
        "target": "_blank"
      }
    }, [_c('p', {
      staticClass: "btn"
    }, [_vm._v("\n                " + _vm._s(item.displayName) + "\n              ")])])], 1);
  }), 0) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "w-full max-w-[300px] text-center bg-red-500 text-white-white rounded-8 px-5 py-3 mt-15",
    on: {
      "click": function ($event) {
        _vm.stateMenu = !_vm.stateMenu;
      }
    }
  }, [_vm._v("\n          Cerrar\n        ")])])])], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/headers/Ko15_header/Ko-Header-10.vue?vue&type=template&id=e87afadc&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/Ko15_header/Ko-Header-10.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Header_10vue_type_script_lang_js_ = ({
  name: 'KoHeader10',
  components: {
    KoOrder: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 61)),
    KoSearch: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 1319)),
    Ko14MenuLateral: () => __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, 1273))
  },
  props: {
    settingByTemplate15: {
      type: Array,
      required: true
    },
    dataStore: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      searchSelect: true,
      btnSelect: '',
      stateMenu: false
    };
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length;
    }
  },
  methods: {
    btnActivate(value) {
      this.btnSelect = value;
    },
    openSearch() {
      this.searchSelect = false;
      this.$store.commit('SET_OPEN_SEARCH', true);
    },
    openOrder() {
      this.$store.commit('SET_OPEN_ORDER', true);
    },
    clear() {
      this.$router.push({
        path: '/'
      });
      this.$store.commit('SET_STATE_BANNER', true);
    },
    scrollLeft() {
      document.getElementById('swiper-slide-categories').scrollLeft -= 300;
    },
    scrollRight() {
      document.getElementById('swiper-slide-categories').scrollLeft += 300;
    }
  }
});
// CONCATENATED MODULE: ./components/headers/Ko15_header/Ko-Header-10.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ko15_header_Ko_Header_10vue_type_script_lang_js_ = (Ko_Header_10vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/headers/Ko15_header/Ko-Header-10.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(903)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Ko15_header_Ko_Header_10vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e87afadc",
  "f8df9a8e"
  
)

/* harmony default export */ var Ko_Header_10 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(904);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f6829a9a", content, true, context)
};

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_10_vue_vue_type_style_index_0_id_e87afadc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(500);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_10_vue_vue_type_style_index_0_id_e87afadc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_10_vue_vue_type_style_index_0_id_e87afadc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_10_vue_vue_type_style_index_0_id_e87afadc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_10_vue_vue_type_style_index_0_id_e87afadc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-e87afadc]{font-family:var(--font-style-1)!important}.wrapper-header[data-v-e87afadc]{background-color:var(--background_color_1);padding-bottom:var(--padding_logo);padding-top:var(--padding_logo);z-index:99999999999!important}.btn-active[data-v-e87afadc]{box-shadow:inset 0 -48px 0 -44px var(--color_border)}.btn[data-v-e87afadc]{color:var(--color_text)}.btn[data-v-e87afadc]:hover{box-shadow:inset 0 -48px 0 -44px var(--color_border);color:var(--hover_text)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=headers-ko-header10.js.map