exports.ids = [36];
exports.modules = {

/***/ 1243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/header4/Ko-Header-4.vue?vue&type=template&id=9f5058ea&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3, _vm$settingByTemplate4, _vm$settingByTemplate5, _vm$settingByTemplate6;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate7 && _vm.settingByTemplate7[0].setting7Header ? _c('div', {
    staticClass: "header-container",
    style: [_vm.settingByTemplate7[0].setting7Header, _vm.settingByTemplate7[0].setting7General, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate7[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.setting7General) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.fount_1) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'David libre'
    }, {
      '--font-style-3': (_vm$settingByTemplate4 = (_vm$settingByTemplate5 = _vm.settingByTemplate7[0]) === null || _vm$settingByTemplate5 === void 0 ? void 0 : (_vm$settingByTemplate6 = _vm$settingByTemplate5.setting7General) === null || _vm$settingByTemplate6 === void 0 ? void 0 : _vm$settingByTemplate6.fount_3) !== null && _vm$settingByTemplate4 !== void 0 ? _vm$settingByTemplate4 : 'Lora'
    }],
    attrs: {
      "id": "navbar"
    }
  }, [_vm._ssrNode("<div id=\"headbg\" class=\"wrapper-header\" data-v-9f5058ea>", "</div>", [_vm._ssrNode("<div id=\"headerid\" class=\"header\" data-v-9f5058ea>", "</div>", [_c('KoOrder', {
    attrs: {
      "data-store": _vm.dataStore
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-item-menu\" data-v-9f5058ea>", "</div>", [_c('menu-icon', {
    staticClass: "header-icon-menu nav-bar"
  }), _vm._ssrNode(" <span class=\"header-text-menu\" data-v-9f5058ea>" + _vm._ssrEscape(_vm._s(_vm.$t('header_menu'))) + "</span>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-content-logo\" data-v-9f5058ea>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "header-logo",
    attrs: {
      "src": `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      "alt": "Logo Img"
    },
    on: {
      "click": _vm.clear
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-content-buttons\" data-v-9f5058ea>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-9f5058ea>", "</div>", [item.path ? _c('nuxt-link', {
      staticClass: "btn",
      attrs: {
        "to": item.path
      }
    }, [_vm._v("\n            " + _vm._s(_vm.$t(`${item.name}`)) + "\n          ")]) : item.href && _vm.listArticulos > 0 ? _c('nuxt-link', {
      staticClass: "btn",
      attrs: {
        "to": item.href
      }
    }, [_vm._v("\n            " + _vm._s(_vm.$t(`${item.name}`)) + "\n          ")]) : _vm._e()], 1);
  }), 0), _vm._ssrNode(" <div class=\"header-content-items\" data-v-9f5058ea>" + (_vm.showSearch ? "<div data-v-9f5058ea><div class=\"search\" data-v-9f5058ea><form class=\"header-search-icon\" data-v-9f5058ea><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"search-header\" data-v-9f5058ea><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\" data-v-9f5058ea></path></svg></form></div></div>" : "<!---->") + " " + (_vm.showSearch ? "<div class=\"empty\" data-v-9f5058ea></div>" : "<!---->") + " <div class=\"header-content-icon\" data-v-9f5058ea><div class=\"header-content-cart\" data-v-9f5058ea><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"icon-shop\" data-v-9f5058ea><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z\" data-v-9f5058ea></path></svg></div> <div class=\"border-num-items\" data-v-9f5058ea><span an class=\"num-items\" data-v-9f5058ea>" + _vm._ssrEscape(_vm._s(_vm.productsCart)) + "</span></div></div></div> "), _c('KoSearch', {
    attrs: {
      "data-store": _vm.dataStore,
      "settingKProdutCard": _vm.settingByTemplate7[0].settingKProdutCard,
      "setting-general": _vm.settingByTemplate7[0].setting7General
    }
  }), _vm._ssrNode(" "), _c('KoMenu', {
    staticClass: "responsive",
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 2)])]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/headers/header4/Ko-Header-4.vue?vue&type=template&id=9f5058ea&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/header4/Ko-Header-4.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Header_4vue_type_script_lang_js_ = ({
  name: 'KoHeader4',
  components: {
    KoOrder: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 61)),
    KoMenu: () => __webpack_require__.e(/* import() */ 43).then(__webpack_require__.bind(null, 1320)),
    KoSearch: () => __webpack_require__.e(/* import() */ 44).then(__webpack_require__.bind(null, 1321))
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate7: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      resizehead: false,
      search: '',
      showSearch: false,
      secciones: [{
        name: 'header_inicio',
        path: '/'
      }, {
        name: 'header_productos',
        path: '/productos'
      }, {
        name: 'header_contacto',
        path: '/contacto'
      }, {
        name: 'header_blog',
        href: '/blog'
      }]
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
      if (this.$route.fullPath == '/') {
        this.showSearch = true;
      } else if (this.$route.query && this.$route.query.search) {
        this.showSearch = true;
        this.setSearch(this.$route.query.search);
      } else {
        this.showSearch = false;
      }
    }
  },
  mounted() {
    let colorBg = '';
    if (this.settingByTemplate7 && this.settingByTemplate7[0].setting7Header) {
      colorBg = this.settingByTemplate7[0].setting7Header['--background_color_1'];
    } else {
      colorBg = '#ffffff';
    }
    if (this.$route.fullPath == '/') {
      this.showSearch = true;
    } else if (this.$route.query && this.$route.query.search) {
      this.showSearch = true;
      this.setSearch(this.$route.query.search);
    } else {
      this.showSearch = false;
    }
    // var prevScrollpos = window.pageYOffset
    var navbar = document.getElementById('navbar');
    var header = document.getElementById('headerid');
    var bghead = document.getElementById('headbg');
    if (this.settingByTemplate7 && this.settingByTemplate7[0].setting7Header && this.settingByTemplate7[0].setting7Header.transparente) {
      header.style.backgroundColor = 'transparent';
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos == 0) {
          if (screen.width >= 300) {
            header.style.width = '100%';
            bghead.style.backgroundColor = 'transparent';
            header.style.backgroundColor = 'transparent';
            bghead.style.boxShadow = 'transparent';
            header.style.boxShadow = 'transparent';
          }
          if (screen.width >= 1280) {
            header.style.width = '93%';
            navbar.style.zIndex = '20';
            navbar.style.top = '30px';
          }
        } else {
          navbar.style.top = '0px';
          navbar.style.zIndex = '20';
          bghead.style.backgroundColor = 'transparent';
          header.style.backgroundColor = 'transparent';
          header.style.boxShadow = 'transparent';
          bghead.style.boxShadow = 'transparent';
          if (screen.width >= 300) {
            header.style.width = '100%';
          }
          if (screen.width >= 1280) {
            header.style.width = '93%';
          }
        }
        // prevScrollpos = currentScrollPos
      };
    } else {
      header.style.backgroundColor = colorBg;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos == 0) {
          if (screen.width >= 300) {
            header.style.width = '100%';
            bghead.style.backgroundColor = 'transparent';
            bghead.style.boxShadow = '0px 0px 0px 0px';
            header.style.boxShadow = '0px 0px 22px 2px rgba(145, 145, 145, 0.57)';
          }
          if (screen.width >= 1280) {
            header.style.width = '93%';
            navbar.style.zIndex = '20';
            navbar.style.top = '30px';
          }
        } else {
          navbar.style.top = '0px';
          navbar.style.zIndex = '20';
          bghead.style.backgroundColor = colorBg;
          header.style.boxShadow = '0px 0px 0px 0px';
          bghead.style.boxShadow = '0px 0px 10px 4px rgba(145,145,145,0.10)';
          if (screen.width >= 300) {
            header.style.width = '100%';
          }
          if (screen.width >= 1280) {
            header.style.width = '93%';
          }
        }
        // prevScrollpos = currentScrollPos
      };
    }
  },

  methods: {
    openSearch() {
      this.$store.commit('SET_OPEN_SEARCH', true);
    },
    closedSearch() {
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
        if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
          window.fbq('track', 'Search', {
            search_string: value
          });
        }
      } else {
        location.href = '?search=' + '';
      }
    },
    setSearch(value) {
      this.openSearch();
      this.search = decodeURIComponent(value);
    },
    focusInput() {
      document.getElementById('SearchHeader').focus();
    }
  }
});
// CONCATENATED MODULE: ./components/headers/header4/Ko-Header-4.vue?vue&type=script&lang=js&
 /* harmony default export */ var header4_Ko_Header_4vue_type_script_lang_js_ = (Ko_Header_4vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/headers/header4/Ko-Header-4.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(885)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header4_Ko_Header_4vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9f5058ea",
  "085bba66"
  
)

/* harmony default export */ var Ko_Header_4 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(886);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2272ea96", content, true, context)
};

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_4_vue_vue_type_style_index_0_id_9f5058ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(491);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_4_vue_vue_type_style_index_0_id_9f5058ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_4_vue_vue_type_style_index_0_id_9f5058ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_4_vue_vue_type_style_index_0_id_9f5058ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_4_vue_vue_type_style_index_0_id_9f5058ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header-container[data-v-9f5058ea]{justify-content:center;position:fixed;top:30px;transition:all .5s ease-in-out;z-index:10}.header-container[data-v-9f5058ea],.wrapper-header[data-v-9f5058ea]{align-items:center;display:flex;flex-direction:column;width:100%}.header[data-v-9f5058ea],.wrapper-header[data-v-9f5058ea]{justify-content:space-between}.header[data-v-9f5058ea]{background:var(--background_color_1);display:flex;width:100%}.header-item-menu[data-v-9f5058ea]{display:none}.header-icon-menu[data-v-9f5058ea]{color:var(--color_icon);font-size:30px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:normal}.header-icon-menu>.material-design-icon__svg[data-v-9f5058ea]{bottom:0}.nav-bar[data-v-9f5058ea]{color:var(--color_icon);font-stretch:normal;font-style:normal;font-weight:400;height:24px;letter-spacing:normal;line-height:normal;width:24px}.nav-bar>.material-design-icon__svg[data-v-9f5058ea]{bottom:0;height:24px;width:24px}.header-text-menu[data-v-9f5058ea]{color:var(--color_text);font-family:var(--font-style-3)!important}.header-content-logo[data-v-9f5058ea]{align-items:center;display:flex;justify-content:center;padding-bottom:4px;padding-top:4px}.wrapper-logo[data-v-9f5058ea]{width:100%}.header-logo[data-v-9f5058ea]{max-width:var(--with_logo);-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left;width:100%}.header-content-buttons[data-v-9f5058ea]{align-items:center;display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;width:auto}.btn[data-v-9f5058ea]{color:var(--color_text);font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;letter-spacing:.05em;margin-left:16px;margin-right:16px;text-transform:uppercase}.btn[data-v-9f5058ea],.btn[data-v-9f5058ea]:hover{transition:all .25s ease}.btn[data-v-9f5058ea]:hover{color:var(--hover_text)}.header-content-items[data-v-9f5058ea]{align-items:center;display:flex;flex-direction:row;justify-content:space-between}.header-search-icon[data-v-9f5058ea]{height:24px;width:24px}.search-header[data-v-9f5058ea]{color:var(--color_icon);cursor:pointer;transition:all .25s ease}.search-header[data-v-9f5058ea]:hover{color:var(--hover_text);transition:all .25s ease}.empty[data-v-9f5058ea]{margin-left:8px;margin-right:8px}.header-content-icon[data-v-9f5058ea]{display:flex;flex-direction:row;justify-content:space-between}.header-content-cart[data-v-9f5058ea]{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;height:9px;justify-content:center;margin-left:5px;padding-bottom:1px;position:relative;width:2.25rem}.icon-shop[data-v-9f5058ea]{color:var(--color_icon);height:24px;width:24px}.icon-shop[data-v-9f5058ea],.icon-shop[data-v-9f5058ea]:hover{transition:all .25s ease}.icon-shop[data-v-9f5058ea]:hover{color:var(--hover_text)}.border-num-items[data-v-9f5058ea]{align-items:center;background:var(--color_badge_cart);border-radius:100px;display:flex;height:16px;justify-content:center;margin-left:-12px;margin-top:-12px;text-align:center;width:auto}.num-items[data-v-9f5058ea]{color:#fff;font-size:.75rem;padding:5px}@media (min-width:300px){.header[data-v-9f5058ea]{padding-bottom:var(--padding);padding-left:16px;padding-right:16px;padding-top:var(--padding)}.header[data-v-9f5058ea],.header-container[data-v-9f5058ea]{width:100%}.header-content-buttons[data-v-9f5058ea]{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.header-content-cart[data-v-9f5058ea]{margin-left:0;padding-bottom:0}.header-text-menu[data-v-9f5058ea],.search-header[data-v-9f5058ea]{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.header-item-menu[data-v-9f5058ea]{align-items:center;display:flex;flex-direction:row;justify-content:space-between}}@media (min-width:768px){.header-text-menu[data-v-9f5058ea]{clip:auto;font-size:.75rem;font-weight:600;height:auto;letter-spacing:.1em;margin:0;overflow:visible;padding:0 0 0 8px;position:static;text-transform:uppercase;white-space:normal;width:auto}}@media (max-width:768px){.search[data-v-9f5058ea]{display:none}}@media (min-width:1024px){.header[data-v-9f5058ea]{width:100%}}@media (min-width:1280px){.header[data-v-9f5058ea]{width:93%}.header-content-buttons[data-v-9f5058ea]{clip:auto;height:auto;margin:0;overflow:visible;padding:0;position:static;white-space:normal;width:auto}.header-text-menu[data-v-9f5058ea]{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.search-header[data-v-9f5058ea]{clip:auto;height:auto;margin:0;overflow:visible;padding:0;position:static;white-space:normal;width:auto}.header-item-menu[data-v-9f5058ea]{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}}@media (min-width:1192px){.header[data-v-9f5058ea]{max-width:1192px;width:100%}.header-content-page[data-v-9f5058ea]{width:1192px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=headers-header4-ko-header4.js.map