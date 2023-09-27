exports.ids = [37];
exports.modules = {

/***/ 1233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/header6/Ko-Header-6.vue?vue&type=template&id=0074bcee&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate10 ? _c('div', {
    staticClass: "header-container",
    style: [_vm.settingByTemplate10[0].setting10Header, _vm.settingByTemplate10[0].setting10General, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate10[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.setting10General) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.fount_1) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Roboto'
    }],
    attrs: {
      "id": "navbar"
    }
  }, [_vm._ssrNode("<div id=\"headbg\" class=\"wrapper-header\" data-v-0074bcee>", "</div>", [_vm._ssrNode("<div id=\"headerid\" class=\"header\" data-v-0074bcee>", "</div>", [_c('KoOrder', {
    attrs: {
      "data-store": _vm.dataStore
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-content-logo\" data-v-0074bcee>", "</div>", [_c('nuxt-link', {
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
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-contet\" data-v-0074bcee>", "</div>", [_vm._ssrNode("<button class=\"header-item-menu\" data-v-0074bcee>", "</button>", [_c('menu-icon', {
    staticClass: "header-icon-menu"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-row justify-between w-full\" data-v-0074bcee>", "</div>", [_vm._ssrNode("<div class=\"flex flex-row mr-20\" data-v-0074bcee>", "</div>", [_vm.settingByTemplate10[0].pages.values.length > 6 ? _vm._ssrNode("<div class=\"btn-scroll\" data-v-0074bcee>", "</div>", [_c('FlechaLeft-icon', {
    staticClass: "btn-scroll-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate10[0].pages.values ? _vm._ssrNode("<div id=\"swiper-slide-categories\" class=\"header-content-buttons\" data-v-0074bcee>", "</div>", _vm._l(_vm.settingByTemplate10[0].pages.values, function (item, index) {
    return _vm._ssrNode("<div data-v-0074bcee>", "</div>", [!item.isExternalLink ? _c('nuxt-link', {
      staticClass: "content-button",
      attrs: {
        "to": item.url
      }
    }, [_c('p', {
      staticClass: "btn",
      class: _vm.btnSelect == item.url ? 'btn-active' : '',
      on: {
        "click": function ($event) {
          return _vm.btnActivate(item.url);
        }
      }
    }, [_vm._v("\n                    " + _vm._s(item.displayName) + "\n                  ")])]) : _c('a', {
      staticClass: "content-button",
      attrs: {
        "href": item.url,
        "target": "_blank",
        "rel": "noreferrer noopener"
      }
    }, [_c('p', {
      staticClass: "btn"
    }, [_vm._v("\n                    " + _vm._s(item.displayName) + "\n                  ")])])], 1);
  }), 0) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate10[0].pages.values.length > 6 ? _vm._ssrNode("<div class=\"btn-scroll\" data-v-0074bcee>", "</div>", [_c('FlechaRight-icon', {
    staticClass: "btn-scroll-icon"
  })], 1) : _vm._e()], 2), _vm._ssrNode(" <div class=\"header-content-items\" data-v-0074bcee><div data-v-0074bcee>" + (_vm.searchSelect ? "<div class=\"search\" data-v-0074bcee><i class=\"header-search-icon\" data-v-0074bcee><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.com/svgjs\" version=\"1.1\" width=\"20\" height=\"20\" x=\"0\" y=\"0\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" class=\"search-header\" style=\"enable-background: new 0 0 512 512\" data-v-0074bcee><title data-v-0074bcee>Search</title> <g transform=\"matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,9.536744585147972e-7,511.99998569488525)\" data-v-0074bcee><path d=\"M447.615,64.386C406.095,22.866,350.892,0,292.175,0s-113.92,22.866-155.439,64.386    C95.217,105.905,72.35,161.108,72.35,219.824c0,53.683,19.124,104.421,54.132,144.458L4.399,486.366    c-5.864,5.864-5.864,15.371,0,21.236C7.331,510.533,11.174,512,15.016,512s7.686-1.466,10.617-4.399l122.084-122.083    c40.037,35.007,90.775,54.132,144.458,54.132c58.718,0,113.919-22.866,155.439-64.386c41.519-41.519,64.385-96.722,64.385-155.439    S489.134,105.905,447.615,64.386z M426.379,354.029c-74.001,74-194.406,74-268.407,0c-74-74-74-194.407,0-268.407    c37.004-37.004,85.596-55.5,134.204-55.5c48.596,0,97.208,18.505,134.204,55.5C500.378,159.621,500.378,280.028,426.379,354.029z\" data-v-0074bcee></path></g></svg></i></div>" : "<!---->") + "</div> " + (_vm.showSearch ? "<div class=\"empty\" data-v-0074bcee></div>" : "<!---->") + " <div class=\"header-content-icon\" data-v-0074bcee><i class=\"header-content-cart\" data-v-0074bcee><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23\" height=\"23\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"icon-shop\" data-v-0074bcee><title data-v-0074bcee>Cart</title> <path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-0074bcee></path></svg></i> <div class=\"border-num-items\" data-v-0074bcee><span class=\"num-items\" data-v-0074bcee>" + _vm._ssrEscape(_vm._s(_vm.productsCart)) + "</span></div></div></div>")], 2)], 2), _vm._ssrNode(" "), _c('KoMenu', {
    staticClass: "responsive",
    attrs: {
      "data-store": _vm.dataStore,
      "setting-by-template": _vm.settingByTemplate10
    }
  })], 2)])]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/headers/header6/Ko-Header-6.vue?vue&type=template&id=0074bcee&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/header6/Ko-Header-6.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Header_6vue_type_script_lang_js_ = ({
  name: 'KoHeader6',
  components: {
    KoOrder: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 61)),
    KoMenu: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 1321))
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate10: {
      type: Array,
      required: true
    }
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
    if (this.$route.path) {
      let item = this.settingByTemplate10[0].pages.values.find(item => item.url == this.$route.path);
      this.btnSelect = item && item.url ? item.url : '';
    }
    this.initHeader();
    window.addEventListener('scroll', function () {
      var navbar = document.getElementById('navbar');
      if (window.pageYOffset > 0 && screen.width > 725 && navbar) {
        navbar.style.position = 'fixed';
      } else {
        navbar.style.position = 'static';
      }
    });
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
      this.$router.push({
        path: '/productos'
      });
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
// CONCATENATED MODULE: ./components/headers/header6/Ko-Header-6.vue?vue&type=script&lang=js&
 /* harmony default export */ var header6_Ko_Header_6vue_type_script_lang_js_ = (Ko_Header_6vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/headers/header6/Ko-Header-6.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(865)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header6_Ko_Header_6vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0074bcee",
  "c57be45e"
  
)

/* harmony default export */ var Ko_Header_6 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(866);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("23c42ca2", content, true, context)
};

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_6_vue_vue_type_style_index_0_id_0074bcee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_6_vue_vue_type_style_index_0_id_0074bcee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_6_vue_vue_type_style_index_0_id_0074bcee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_6_vue_vue_type_style_index_0_id_0074bcee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_6_vue_vue_type_style_index_0_id_0074bcee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-scroll[data-v-0074bcee]{background:transparent;cursor:pointer;min-height:50px;padding:0 6px;top:50%}.btn-scroll[data-v-0074bcee],.btn-scroll-icon[data-v-0074bcee]{align-items:center;display:flex;justify-content:center}.btn-scroll-icon[data-v-0074bcee]{bottom:.125em;color:var(--color_tex);font-size:20px;width:100%}.btn-scroll-icon[data-v-0074bcee]:hover{color:var(--hover_text)}.item-btns[data-v-0074bcee]{max-width:850px}.header-container[data-v-0074bcee]{border-bottom:1px solid var(--background_color_1);justify-content:center;position:static;top:0;transition-duration:.15s;transition-duration:.5s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.header-container[data-v-0074bcee],.wrapper-header[data-v-0074bcee]{align-items:center;display:flex;flex-direction:column;width:100%;z-index:10}.wrapper-header[data-v-0074bcee]{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);padding-bottom:var(--padding_logo);padding-top:var(--padding_logo)}.header[data-v-0074bcee],.wrapper-header[data-v-0074bcee]{background-color:var(--background_color_1);justify-content:space-between}.header[data-v-0074bcee]{display:flex;width:100%}.header-item-menu[data-v-0074bcee]{display:none}.header-icon-menu[data-v-0074bcee]{fill:var(--color_icon);color:var(--color_icon);font-weight:400;height:30px;width:auto}.header-content-logo[data-v-0074bcee]{padding-bottom:1px;padding-top:1px}.header-content-logo[data-v-0074bcee],.wrapper-logo[data-v-0074bcee]{align-items:center;display:flex;justify-content:center}.wrapper-logo[data-v-0074bcee]{max-width:var(--with_logo);width:100%}.header-logo[data-v-0074bcee]{-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left;width:100%}.header-contet[data-v-0074bcee]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.header-content-buttons[data-v-0074bcee]{align-items:center;box-sizing:border-box;display:flex;flex-direction:row;justify-content:flex-start;max-width:850px!important;overflow-x:auto;overflow-y:hidden;z-index:1}.header-content-buttons[data-v-0074bcee]::-webkit-scrollbar{display:none;width:0!important}.btn-active[data-v-0074bcee]{box-shadow:inset 0 -50px 0 -44px var(--color_border)}.btn[data-v-0074bcee]{color:var(--color_text);font-family:var(--font-style-1)!important;font-size:16px;font-weight:600;line-height:22px;margin-right:20px;padding-left:8px;padding-right:8px}.btn[data-v-0074bcee],.btn[data-v-0074bcee]:hover{transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn[data-v-0074bcee]:hover{box-shadow:inset 0 -50px 0 -44px var(--color_border);color:var(--hover_text)}.header-content-items[data-v-0074bcee]{align-items:center;background-color:var(--background_color_1);display:flex;flex-direction:row;justify-content:space-between;z-index:3}.header-search-icon[data-v-0074bcee]{align-items:center;display:flex;height:auto;justify-content:center;width:36px}.search-header[data-v-0074bcee]{fill:var(--color_icon)!important;cursor:pointer}.search-header[data-v-0074bcee],.search-header[data-v-0074bcee]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.search-header[data-v-0074bcee]:hover{color:var(--color_border)}.empty[data-v-0074bcee]{margin-left:2px;margin-right:2px}.header-content-icon[data-v-0074bcee]{flex-direction:row}.header-content-cart[data-v-0074bcee],.header-content-icon[data-v-0074bcee]{align-items:center;cursor:pointer;display:flex;justify-content:center}.header-content-cart[data-v-0074bcee]{height:auto;position:relative;width:36px}.icon-shop[data-v-0074bcee]{fill:var(--color_icon)}.header-content-icon:hover .icon-shop[data-v-0074bcee],.icon-shop[data-v-0074bcee]{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.header-content-icon:hover .icon-shop[data-v-0074bcee]{fill:var(--color_border)}.border-num-items[data-v-0074bcee]{align-items:center;background:var(--color_border);border-radius:100px;display:flex;height:12px;justify-content:center;margin-left:-8px;margin-top:-20px;width:auto}.num-items[data-v-0074bcee]{color:var(--background_color_1);font-family:var(--font-style-1)!important;font-size:8px;font-weight:600;letter-spacing:0;line-height:12px;padding-left:5px;padding-right:5px;padding-top:1px}@media (min-width:300px){.header[data-v-0074bcee]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding-left:4px;padding-right:4px}.header[data-v-0074bcee],.header-container[data-v-0074bcee]{width:100%}.header-contet[data-v-0074bcee]{align-items:center;display:flex;flex-direction:row;height:74px;justify-content:space-between;width:90%}.btn-scroll[data-v-0074bcee],.header-content-buttons[data-v-0074bcee]{display:none}.header-content-cart[data-v-0074bcee]{margin-left:0;padding-bottom:0}.header-item-menu[data-v-0074bcee]{align-items:center;display:flex;flex-direction:column;justify-content:center}.header-item-menu[data-v-0074bcee]:focus{background-color:var(--color_border)}.header-item-menu:focus .header-icon-menu[data-v-0074bcee]{color:var(--color_icon)}.header-icon-menu[data-v-0074bcee]{font-size:35px}.search-header[data-v-0074bcee]{display:flex}}@media (min-width:1024px){.btn-scroll[data-v-0074bcee],.header-content-buttons[data-v-0074bcee]{display:flex}.header-item-menu[data-v-0074bcee]{display:none}}@media (min-width:1280px){.header[data-v-0074bcee]{display:flex;flex-direction:row;justify-content:space-between;padding-left:0;padding-right:0;width:95%}.header-contet[data-v-0074bcee]{align-items:center;display:flex;flex-direction:row;height:auto;justify-content:space-between;width:auto}}@media (max-width:768px){.header-logo[data-v-0074bcee]{max-width:230px}}@media (min-width:1400px){.header[data-v-0074bcee]{max-width:1400px;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=headers-header6-ko-header6.js.map