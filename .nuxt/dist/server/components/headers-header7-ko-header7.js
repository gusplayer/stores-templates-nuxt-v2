exports.ids = [38];
exports.modules = {

/***/ 1245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/header7/Ko-Header-7.vue?vue&type=template&id=a6973274&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate11 ? _c('div', {
    staticClass: "content-header",
    style: [_vm.settingByTemplate11[0].setting11Header, _vm.settingByTemplate11[0].setting11General, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate11[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.setting11General) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.fount_1) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"content-header\" data-v-a6973274>", "</div>", [_vm._ssrNode("<div class=\"content-items-header\" data-v-a6973274>", "</div>", [_vm._ssrNode("<div class=\"item-logo\" data-v-a6973274>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "header-logo",
    attrs: {
      "src": `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      "alt": "Logo-tienda"
    },
    on: {
      "click": _vm.clear
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-items-btns\" data-v-a6973274>", "</div>", [_vm._ssrNode("<div class=\"wrapper-content-btns\" data-v-a6973274>", "</div>", [_vm._ssrNode("<div class=\"item-menu\" data-v-a6973274><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" width=\"25px\" height=\"25px\" class=\"icon-menu\" data-v-a6973274><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\" data-v-a6973274></path></svg></div> "), _vm.settingByTemplate11[0].pages.values.length > 6 ? _vm._ssrNode("<div class=\"btn-scroll\" data-v-a6973274>", "</div>", [_c('FlechaLeft-icon', {
    staticClass: "btn-scroll-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate11[0].pages.values ? _vm._ssrNode("<div id=\"swiper-slide-categories\" class=\"item-btns\" data-v-a6973274>", "</div>", _vm._l(_vm.settingByTemplate11[0].pages.values, function (item, index) {
    return _vm._ssrNode("<div class=\"content-btns\" data-v-a6973274>", "</div>", [!item.isExternalLink ? _c('nuxt-link', {
      attrs: {
        "to": item.url
      }
    }, [_c('button', {
      staticClass: "btn"
    }, [_vm._v("\n                  " + _vm._s(item.displayName) + "\n                ")])]) : _c('a', {
      attrs: {
        "href": item.url,
        "target": "_blank",
        "rel": "noreferrer noopener"
      }
    }, [_c('p', {
      staticClass: "btn"
    }, [_vm._v("\n                  " + _vm._s(item.displayName) + "\n                ")])]), _vm._ssrNode(" <div class=\"separator\" data-v-a6973274></div>")], 2);
  }), 0) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate11[0].pages.values.length > 6 ? _vm._ssrNode("<div class=\"btn-scroll\" data-v-a6973274>", "</div>", [_c('FlechaRight-icon', {
    staticClass: "btn-scroll-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"item-logo-md\" data-v-a6973274>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "header-logo-md",
    attrs: {
      "src": `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      "alt": "Logo-tienda"
    },
    on: {
      "click": _vm.clear
    }
  })])], 1), _vm._ssrNode(" <div class=\"item-header\" data-v-a6973274><div class=\"input-animated\" data-v-a6973274><input type=\"text\" placeholder=\"¿Que deseas buscar?\"" + _vm._ssrAttr("value", _vm.search) + " class=\"input-text\" data-v-a6973274> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"25px\" height=\"25px\" class=\"svg-search\" data-v-a6973274><path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-a6973274></path> <path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\" data-v-a6973274></path></svg></div> <div class=\"icon-shop\" data-v-a6973274><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"25px\" height=\"25px\" class=\"svg-shop\" data-v-a6973274><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32\" data-v-a6973274></path></svg> <div class=\"item-numCart\" data-v-a6973274><span class=\"txt-numCart\" data-v-a6973274>" + _vm._ssrEscape(_vm._s(_vm.productsCart)) + "</span></div></div></div>")], 2)])], 2), _vm._ssrNode(" "), _c('KoOrder', {
    attrs: {
      "data-store": _vm.dataStore
    }
  }), _vm._ssrNode(" "), _c('KoMenu', {
    staticClass: "responsive",
    attrs: {
      "data-store": _vm.dataStore,
      "setting-by-template": _vm.settingByTemplate11
    }
  })], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/headers/header7/Ko-Header-7.vue?vue&type=template&id=a6973274&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/header7/Ko-Header-7.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Header_7vue_type_script_lang_js_ = ({
  name: 'KoHeader7',
  components: {
    KoOrder: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 61)),
    KoMenu: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 1323))
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate11: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchSelect: true,
      search: '',
      showSearch: false
    };
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length;
    },
    facebookPixel() {
      return this.$store.state.analytics_tagmanager;
    },
    listArticulos() {
      return this.$store.state.listArticulos.length;
    }
  },
  watch: {
    search(value) {
      this.SearchProduct(value);
    },
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.initHeader();
    }
  },
  mounted() {
    this.initHeader();
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
      if (value == 1) {
        this.btnSelect = 1;
      }
      if (value == 2) {
        this.btnSelect = 2;
      }
      if (value == 3) {
        this.btnSelect = 3;
      }
      if (value == 4) {
        this.btnSelect = 4;
      }
    },
    openOrder() {
      this.$store.commit('SET_OPEN_ORDER', true);
    },
    openMenuLateral() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', true);
    },
    clear() {
      this.$router.push({
        path: '/'
      });
      this.$store.commit('SET_STATE_BANNER', true);
    },
    setSearch(value) {
      this.search = decodeURIComponent(value);
    },
    SearchProduct(search) {
      this.$store.commit('SET_SEARCH_VALUE', search);
      if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
        window.fbq('track', 'Search', {
          search_string: search
        });
      }
      this.$router.push({
        path: '/productos',
        query: {
          search: search
        }
      });
    },
    scrollLeft() {
      document.getElementById('swiper-slide-categories').scrollLeft -= 300;
    },
    scrollRight() {
      document.getElementById('swiper-slide-categories').scrollLeft += 300;
    }
  }
});
// CONCATENATED MODULE: ./components/headers/header7/Ko-Header-7.vue?vue&type=script&lang=js&
 /* harmony default export */ var header7_Ko_Header_7vue_type_script_lang_js_ = (Ko_Header_7vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/headers/header7/Ko-Header-7.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(889)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header7_Ko_Header_7vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a6973274",
  "240bf95a"
  
)

/* harmony default export */ var Ko_Header_7 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(890);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("b785c23e", content, true, context)
};

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_7_vue_vue_type_style_index_0_id_a6973274_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(493);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_7_vue_vue_type_style_index_0_id_a6973274_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_7_vue_vue_type_style_index_0_id_a6973274_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_7_vue_vue_type_style_index_0_id_a6973274_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_7_vue_vue_type_style_index_0_id_a6973274_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-scroll[data-v-a6973274]{background:transparent;cursor:pointer;min-height:50px;padding:0 6px;top:50%}.btn-scroll[data-v-a6973274],.btn-scroll-icon[data-v-a6973274]{align-items:center;display:flex;justify-content:center}.btn-scroll-icon[data-v-a6973274]{bottom:.125em;color:var(--color_tex);font-size:20px;width:100%}.btn-scroll-icon[data-v-a6973274]:hover{color:var(--hover_text)}.item-btns[data-v-a6973274]{max-width:850px}.content-header[data-v-a6973274]{background:var(--background_color_1);flex-direction:column;width:100%}.content-btns[data-v-a6973274],.content-header[data-v-a6973274]{align-items:center;display:flex;justify-content:center}.content-btns[data-v-a6973274]{flex-direction:row;width:auto}.btn[data-v-a6973274]{color:var(--color_tex);font-family:var(--font-style-1)!important;font-size:14px;font-weight:400;letter-spacing:.8px;padding:20px 30px;text-transform:uppercase;white-space:nowrap;width:auto}.btn[data-v-a6973274]:hover{color:var(--hover_text)}.item-header[data-v-a6973274]{flex:1 1 0%;justify-content:flex-end;width:100%}.input-animated[data-v-a6973274],.item-header[data-v-a6973274]{align-items:center;display:flex;flex-direction:row}.input-animated[data-v-a6973274]{background:transparent;height:45px;justify-content:center}.input-animated:hover>.input-text[data-v-a6973274]{color:var(--color_tex);font-size:16px;padding-left:10px;width:180px}.input-text[data-v-a6973274]{background:transparent;color:var(--color_tex);font-family:var(--font-style-1)!important;font-size:0;outline:2px solid transparent;outline-offset:2px;transition:.4s;width:0}.input-text[data-v-a6973274]:focus{color:var(--color_tex);font-size:16px;padding-left:10px;width:180px}.input-text:focus .input-animated[data-v-a6973274]{border-color:var(--color_tex);border-width:1px}[data-v-a6973274]::-webkit-input-placeholder{align-items:center;color:var(--color_tex);font-family:var(--font-style-1)!important;text-align:left}.svg-search[data-v-a6973274]{fill:var(--color_icon);cursor:pointer}.svg-search[data-v-a6973274]:hover{fill:var(--hover_text)}.icon-menu[data-v-a6973274],.svg-shop[data-v-a6973274]{color:var(--color_icon);cursor:pointer}.icon-menu[data-v-a6973274]:hover,.svg-shop[data-v-a6973274]:hover{color:var(--hover_text)}.icon-shop[data-v-a6973274]{align-items:center;display:flex;flex-direction:row;justify-content:center;margin-left:20px;width:auto}@media (min-width:300px){.content-items-header[data-v-a6973274]{flex-direction:column;padding-bottom:10px;padding-top:10px}.content-items-btns[data-v-a6973274],.content-items-header[data-v-a6973274]{align-items:center;display:flex;justify-content:center;width:100%}.content-items-btns[data-v-a6973274]{flex-direction:row}.wrapper-content-btns[data-v-a6973274]{flex-direction:row;justify-content:space-between;padding-left:20px;padding-right:20px}.item-logo[data-v-a6973274],.wrapper-content-btns[data-v-a6973274]{align-items:center;display:flex;width:100%}.item-logo[data-v-a6973274]{flex-direction:column;justify-content:center;max-width:var(--with_logo);padding-bottom:var(--padding_logo);padding-top:var(--padding_logo)}.header-logo[data-v-a6973274]{-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left;width:100%}.btn-scroll[data-v-a6973274],.item-btns[data-v-a6973274]{display:none}.item-menu[data-v-a6973274]{align-items:flex-start;flex:1 1 0%;flex-direction:column}.item-menu[data-v-a6973274],.item-numCart[data-v-a6973274]{display:flex;justify-content:center;width:auto}.item-numCart[data-v-a6973274]{align-items:center;height:25px}.txt-numCart[data-v-a6973274]{color:var(--color_icon);font-family:var(--font-style-1)!important;font-size:13px;margin-left:5px}.item-logo-md[data-v-a6973274]{display:none}}@media (min-width:768px){.header-logo-md[data-v-a6973274]{max-width:var(--with_logo)}.item-logo[data-v-a6973274]{display:none}.item-logo-md[data-v-a6973274]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:var(--padding_logo);margin-top:var(--padding_logo);max-width:var(--with_logo);width:100%}}@media (min-width:1024px){.content-items-header[data-v-a6973274]{padding-bottom:0}.content-items-btns[data-v-a6973274]{border-color:var(--color_border);border-top-width:1px}.item-logo[data-v-a6973274]{display:flex}.item-logo-md[data-v-a6973274],.item-menu[data-v-a6973274]{display:none}.btn-scroll[data-v-a6973274],.item-btns[data-v-a6973274]{display:flex}.item-btns[data-v-a6973274]{align-items:center;flex-direction:row;justify-content:space-between;overflow-x:auto;overflow-y:hidden;width:auto}.item-btns[data-v-a6973274]::-webkit-scrollbar{background:transparent;border:1px solid hsla(0,0%,63%,.589);display:none;height:5px;width:0!important}.item-btns[data-v-a6973274]::-webkit-scrollbar-track{border-radius:10px;box-shadow:inset 0 0 10px #fff}.item-btns[data-v-a6973274]::-webkit-scrollbar-thumb{background:#25d366;border-radius:10px}.item-btns[data-v-a6973274]::-webkit-scrollbar-thumb:hover{background:grey}.separator[data-v-a6973274]{align-items:center;background-color:var(--color_border);display:flex;height:16px;justify-content:center;width:1px}}@media (min-width:1200px){.wrapper-content-btns[data-v-a6973274]{max-width:1200px}}@media (max-width:1024px){.item-btns[data-v-a6973274]{max-width:700px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=headers-header7-ko-header7.js.map