exports.ids = [228];
exports.modules = {

/***/ 1231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/header2/Ko-Header-2.vue?vue&type=template&id=50a21f1d&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "header-container",
    style: _vm.settingByTemplate
  }, [_vm._ssrNode("<div" + _vm._ssrStyle(null, {
    '--font-style': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate) === null || _vm$settingByTemplate2 === void 0 ? void 0 : _vm$settingByTemplate2.tipo_letra) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Roboto'
  }, null) + " data-v-50a21f1d>", "</div>", [_vm._ssrNode("<div class=\"wrapper-header\" data-v-50a21f1d>", "</div>", [_vm._ssrNode("<div class=\"header\" data-v-50a21f1d>", "</div>", [_c('KoOrder', {
    attrs: {
      "dataStore": _vm.dataStore
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-content-logo\" data-v-50a21f1d>", "</div>", [_c('nuxt-link', {
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
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-content-items\" data-v-50a21f1d>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div class=\"header-buttons\" data-v-50a21f1d>", "</div>", [_vm._ssrNode("<div data-v-50a21f1d>", "</div>", [item.path ? _c('nuxt-link', {
      staticClass: "header-text-center",
      attrs: {
        "to": item.path
      }
    }, [_vm._v("\n                " + _vm._s(_vm.$t(`${item.name}`)) + "\n              ")]) : item.href && _vm.listArticulos > 0 ? _c('nuxt-link', {
      staticClass: "header-text-center",
      attrs: {
        "to": item.href
      }
    }, [_vm._v("\n                " + _vm._s(_vm.$t(`${item.name}`)) + "\n              ")]) : _c('div', [_vm.dataStore.categorias.length > 0 && item.ref ? _c('div', {
      staticStyle: {
        "margin-right": "20px",
        "display": "flex",
        "flex-direction": "row"
      }
    }, [_c('p', {
      staticClass: "header-text-center-icon"
    }, [_vm._v("\n                    " + _vm._s(_vm.$t(`${item.name}`)) + "\n                  ")]), _vm._v(" "), !_vm.showMenu ? _c(item.iconOpen, {
      tag: "div",
      staticClass: "header-text-center-icon"
    }) : _vm._e(), _vm._v(" "), _vm.showMenu ? _c(item.iconClose, {
      tag: "div",
      staticClass: "header-text-center-icon"
    }) : _vm._e()], 1) : _vm._e()])], 1)]);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-items-icons\" data-v-50a21f1d>", "</div>", _vm._l(_vm.links, function (item, index) {
    return _vm._ssrNode("<div data-v-50a21f1d>", "</div>", [item.link ? _vm._ssrNode("<a" + _vm._ssrAttr("href", item.link) + " target=\"_blank\" rel=\"noreferrer noopener\" data-v-50a21f1d>", "</a>", [_c(item.icon, {
      tag: "div",
      staticClass: "header-icon"
    })], 1) : _vm._e()]);
  }), 0), _vm._ssrNode(" "), _vm.showSearch ? _vm._ssrNode("<div class=\"search\" data-v-50a21f1d>", "</div>", [_vm._ssrNode("<form id=\"demo-2\" style=\"position: relative\" data-v-50a21f1d>", "</form>", [_c('search-icon', {
    staticClass: "icon-s",
    on: {
      "click": _vm.focusInput
    }
  }), _vm._ssrNode(" <input id=\"SearchHeader\" type=\"search\"" + _vm._ssrAttr("placeholder", _vm.$t('header_search')) + _vm._ssrAttr("value", _vm.search) + " data-v-50a21f1d>")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-content-icon\" data-v-50a21f1d>", "</div>", [_vm._ssrNode("<div class=\"header-content-cart\" data-v-50a21f1d>", "</div>", [_c('cart-icon', {
    staticClass: "header-icon-cart"
  }), _vm._ssrNode(" <span class=\"num-items\" data-v-50a21f1d>" + _vm._ssrEscape(_vm._s(_vm.productsCart)) + "</span>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-item-menu\" data-v-50a21f1d>", "</div>", [_c('menu-icon', {
    staticClass: "header-icon-menu nav-bar"
  })], 1), _vm._ssrNode(" "), _c('KoMenu', {
    staticClass: "responsive",
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 2)]), _vm._ssrNode(" <div" + _vm._ssrClass("menu-container", _vm.showMenu ? 'animated' : 'hidden') + " data-v-50a21f1d><div id=\"menu-collapse\" data-v-50a21f1d><div class=\"wrapper-meni-grid\" data-v-50a21f1d><li data-v-50a21f1d><p" + _vm._ssrClass("name-category-all", _vm.idCategory == '' && _vm.indexSelect == '' ? 'name-category-all-active' : '') + " data-v-50a21f1d>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('header_allProduct')) + "\n            ") + "</p></li> <div class=\"menu-grid\" data-v-50a21f1d>" + _vm._ssrList(_vm.categorias, function (categoria) {
    return "<div data-v-50a21f1d><ul" + _vm._ssrClass("name-category", categoria.id == _vm.idCategory ? 'name-category-active' : '') + " data-v-50a21f1d><li data-v-50a21f1d><p data-v-50a21f1d>" + _vm._ssrEscape("\n                    " + _vm._s(categoria.nombre_categoria_producto) + "\n                  ") + "</p></li> <ul class=\"subcategoria\" data-v-50a21f1d>" + _vm._ssrList(_vm.subcategories, function (subcategory, key) {
      return "<div data-v-50a21f1d>" + (subcategory.categoria == categoria.id ? "<li" + _vm._ssrClass("text-subcategoria", subcategory.id == _vm.indexSelect ? 'text-subcategoria-active' : '') + " data-v-50a21f1d>" + _vm._ssrEscape("\n                      " + _vm._s(subcategory.nombre_subcategoria) + "\n                    ") + "</li>" : "<!---->") + "</div>";
    }) + "</ul></ul></div>";
  }) + "</div></div> " + (_vm.product.length ? "<div class=\"product-img-container\" data-v-50a21f1d><div class=\"card-container\" data-v-50a21f1d>" + (_vm.product[0] ? "<div class=\"img-logo\" data-v-50a21f1d><img" + _vm._ssrAttr("src", _vm.product[0].foto_cloudinary) + " alt=\"Product img\" class=\"logo\" data-v-50a21f1d></div>" : "<!---->") + " <div class=\"btn-container\" data-v-50a21f1d><button class=\"btn\" data-v-50a21f1d>Comprar</button></div></div></div>" : "<!---->") + "</div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/headers/header2/Ko-Header-2.vue?vue&type=template&id=50a21f1d&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/header2/Ko-Header-2.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Header_2vue_type_script_lang_js_ = ({
  name: 'KoHeader2',
  components: {
    KoOrder: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 61)),
    KoMenu: () => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, 214))
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      search: '',
      toggle: false,
      drawer: false,
      direction: 'rtl',
      showMenu: false,
      showSearch: false,
      links: [{
        nombre: 'Facebook',
        icon: 'facebook-icon',
        link: this.dataStore.tienda.red_facebook
      }, {
        nombre: 'Twitter',
        icon: 'twitter-icon',
        link: this.dataStore.tienda.red_twitter
      }, {
        nombre: 'Instagram',
        icon: 'instagram-icon',
        link: this.dataStore.tienda.red_instagram
      }, {
        nombre: 'Youtube',
        icon: 'youtube-icon',
        link: this.dataStore.tienda.red_youtube
      }, {
        nombre: 'Tiktok',
        icon: 'tiktok-icon',
        link: this.dataStore.tienda.red_tiktok
      }],
      secciones: [{
        name: 'header_inicio',
        path: '/'
      }, {
        name: 'header_categorias',
        iconOpen: 'Flechadown-icon',
        iconClose: 'FlechaUp-icon',
        ref: 'categorias'
      }, {
        name: 'header_contacto',
        path: '/contacto'
      }, {
        name: 'header_blog',
        href: '/blog'
      }],
      cat: [],
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      idCategory: '',
      toggleCategories: true,
      indexSelect: ''
    };
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length;
    },
    categorias() {
      return this.dataStore.categorias;
    },
    subcategories() {
      return this.dataStore.subcategorias;
    },
    product() {
      return this.$store.getters['products/allProduct'];
    },
    facebookPixel() {
      return this.$store.state.analytics_tagmanager;
    },
    listArticulos() {
      return this.$store.state.listArticulos.length;
    }
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook;
      this.links[1].link = this.dataStore.tienda.red_twitter;
      this.links[2].link = this.dataStore.tienda.red_instagram;
      this.links[3].link = this.dataStore.tienda.red_youtube;
      this.links[4].link = this.dataStore.tienda.red_tiktok;
    },
    search(value) {
      this.SearchProduct(value);
    },
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.initHeader();
    }
  },
  mounted() {
    this.toggle = true;
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
    openOrder() {
      this.showMenu = false;
      this.$store.commit('SET_OPEN_ORDER', true);
    },
    openMenuLateral() {
      this.showMenu = false;
      this.$store.state.openMenuLateralRight = true;
    },
    openMenu(name) {
      var intro = document.getElementById('menu-collapse');
      if (name == 'header_categorias') {
        this.showMenu = !this.showMenu;
      }
      if (!this.showMenu) {
        intro.style.display = 'none';
      } else {
        intro.style.display = 'flex';
      }
      if (name == 'header_inicio') {
        this.clear();
      }
      if (name == 'header_contacto') {
        this.showMenu = false;
      }
    },
    closeMenuCategory() {
      var intro = document.getElementById('menu-collapse');
      const element = event.target.className;
      if (element === 'wrapper-header' || element === 'header' || element === 'header-content-items' || element === 'header-content-logo' || element === 'header-logo') {
        this.showMenu = false;
      }
      if (!this.showMenu) {
        intro.style.display = 'none';
      } else {
        intro.style.display = 'flex';
      }
    },
    closeMenu() {
      this.showMenu = false;
      this.$router.push({
        path: '/productos/' + this.product[0].slug
      });
    },
    SendSubCategory(value) {
      this.indexSelect = value;
      this.$store.commit('SET_PREVIOUS_PAGE', 1);
      this.$store.commit('SET_STATE_BANNER', false);
      this.showMenu = false;
      this.selectSubcategory = value;
      let filtradoSubCategory = this.subcategories.find(element => element.id == value);
      let filtradoCategories = this.categorias.find(element => element.id == filtradoSubCategory.categoria);
      this.$store.commit('SET_CATEGORY_PRODUCTO', filtradoCategories.nombre_categoria_producto);
      this.nameSubCategory = filtradoSubCategory.nombre_subcategoria;
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', this.nameSubCategory);
      this.$router.push({
        path: '/',
        query: {
          subcategory: `${this.nameSubCategory}^${filtradoCategories.id}`
        }
      });
      this.$store.commit('products/FILTER_BY', {
        type: ['subcategory'],
        data: value
      });
    },
    sendCategory(value, categoria, ref) {
      this.idCategory = categoria;
      this.$store.commit('SET_PREVIOUS_PAGE', 1);
      this.showMenu = false;
      this.$store.commit('SET_STATE_BANNER', false);
      this.nameCategory = value.nombre_categoria_producto;
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory);
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.selectedSubcategories = [];
      this.subcategories.find(subcategory => {
        if (subcategory.categoria === categoria) {
          this.toggleCategories = false;
          this.selectedSubcategories.push(subcategory);
        }
      });
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto
      });
    },
    clear() {
      this.idCategory = '';
      this.indexSelect = '';
      this.showMenu = false;
      this.$router.push({
        path: '/',
        query: {}
      });
      this.$store.commit('SET_STATE_BANNER', true);
      this.$store.commit('SET_OPEN_ORDER_MENU_RIGHT', false);
      this.$store.commit('SET_CATEGORY_PRODUCTO', '');
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
      this.$emit('clear');
      this.nameCategory = '';
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
      this.search = decodeURIComponent(value);
    },
    focusInput() {
      document.getElementById('SearchHeader').focus();
    }
  }
});
// CONCATENATED MODULE: ./components/headers/header2/Ko-Header-2.vue?vue&type=script&lang=js&
 /* harmony default export */ var header2_Ko_Header_2vue_type_script_lang_js_ = (Ko_Header_2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/headers/header2/Ko-Header-2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(861)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header2_Ko_Header_2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "50a21f1d",
  "5a6237c9"
  
)

/* harmony default export */ var Ko_Header_2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(862);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("b047993e", content, true, context)
};

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_2_vue_vue_type_style_index_0_id_50a21f1d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(479);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_2_vue_vue_type_style_index_0_id_50a21f1d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_2_vue_vue_type_style_index_0_id_50a21f1d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_2_vue_vue_type_style_index_0_id_50a21f1d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_2_vue_vue_type_style_index_0_id_50a21f1d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header-container[data-v-50a21f1d]{height:88px;overflow:hidden}.header-container[data-v-50a21f1d],.menu-container[data-v-50a21f1d]{background:var(--background_color_1);width:100%}.menu-container[data-v-50a21f1d]{display:flex;height:auto;position:fixed;top:88px;transition:all .6s ease;z-index:4}.hidden[data-v-50a21f1d]{display:none}.animated[data-v-50a21f1d]{opacity:1}.wrapper-header[data-v-50a21f1d]{align-items:center;background:var(--background_color_1);display:flex;flex-direction:column;justify-content:center;position:fixed;top:0;transition:all 1s ease;width:100%;z-index:4}.header[data-v-50a21f1d]{align-items:center;display:flex;padding:10px 30px 0}#menu-collapse[data-v-50a21f1d],.header[data-v-50a21f1d]{flex-direction:row;justify-content:space-between;max-width:1300px;width:100%}#menu-collapse[data-v-50a21f1d]{border-top:1px solid hsla(0,4%,66%,.4);display:none;list-style:none;margin:0 auto;padding:10px 30px 10px 20px}.wrapper-meni-grid[data-v-50a21f1d]{flex:2;max-height:560px;max-width:1000px;overflow-y:auto;width:100%}.menu-grid[data-v-50a21f1d]{align-content:stretch;align-items:stretch;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;width:100%}.wrapper-meni-grid[data-v-50a21f1d]::-webkit-scrollbar{background:transparent;border:1px solid hsla(0,0%,79%,.322);width:6px}.wrapper-meni-grid[data-v-50a21f1d]::-webkit-scrollbar-track{border-radius:10px}.wrapper-meni-grid[data-v-50a21f1d]::-webkit-scrollbar-thumb{background:#2c2c2c}.wrapper-meni-grid[data-v-50a21f1d]::-webkit-scrollbar-thumb:hover{background:#666;border-radius:10px}.name-category-all[data-v-50a21f1d]{color:var(--color_text)}.name-category-all[data-v-50a21f1d],.name-category-all-active[data-v-50a21f1d]{cursor:pointer;font-size:16px;font-weight:700;padding:10px 0}.name-category-all-active[data-v-50a21f1d]{color:red}.name-category-all[data-v-50a21f1d]:hover{color:var(--btnhover)}.name-category[data-v-50a21f1d]{color:var(--color_text);cursor:pointer;list-style:none;margin-right:32px}.name-category-active[data-v-50a21f1d]{color:red;cursor:pointer}.name-category li[data-v-50a21f1d]{font-size:16px;font-weight:700;padding:10px 0}.name-category li[data-v-50a21f1d]:hover{color:var(--color_hover_text)}.subcategoria li[data-v-50a21f1d]{font-size:14px;font-weight:300;list-style:none;margin-bottom:8px;margin-left:7px;padding:0}.text-subcategoria[data-v-50a21f1d]{color:var(--color_subtext)}.text-subcategoria-active[data-v-50a21f1d]{color:red}.text-subcategoria[data-v-50a21f1d]:hover{color:var(--color_hover_text)}.header-content-logo[data-v-50a21f1d]{align-items:center;display:flex;justify-content:center;padding:2px 0}.wrapper-logo[data-v-50a21f1d]{width:100%}.header-logo[data-v-50a21f1d]{max-height:74px;-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left}.header-content-items[data-v-50a21f1d]{align-self:center;display:flex;flex:1;justify-content:center;margin-left:100px;margin-top:3px}.header-buttons[data-v-50a21f1d]{display:flex;flex-direction:row;justify-content:space-around}.header-text-center[data-v-50a21f1d]{color:var(--color_text);cursor:pointer;font-size:16px;font-weight:400;margin-right:20px}.header-text-center[data-v-50a21f1d]:hover{color:var(--color_hover_text)}.header-text-center-icon[data-v-50a21f1d]{bottom:2px;color:var(--color_text);cursor:pointer;font-size:16px;font-weight:400}.header-text-center-icon[data-v-50a21f1d]:hover{color:var(--color_hover_text)}.header-content-icon[data-v-50a21f1d]{display:flex;flex-direction:row;justify-content:space-between}.wrapper-items-icons[data-v-50a21f1d]{align-self:center;display:flex;flex-direction:row;justify-content:space-around;margin-right:20px;margin-top:3px}.header-icon[data-v-50a21f1d]{fill:var(--color_icon);color:var(--color_icon);cursor:pointer;font-size:18px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:normal;margin-left:7px}.header-icon[data-v-50a21f1d]:hover{fill:var(--btnhover);color:var(--btnhover)}.header-content-cart[data-v-50a21f1d]{border:2px solid var(--color_icon);border-radius:50%;box-sizing:border-box;cursor:pointer;height:35px;margin-left:20px;padding-bottom:3px;position:relative;width:35px}.header-content-cart[data-v-50a21f1d],.num-items[data-v-50a21f1d]{align-items:center;display:flex;justify-content:center}.num-items[data-v-50a21f1d]{background-color:var(--color_icon);border:var(--color_icon) 1px;border-radius:10px;color:var(--background_color_1);font-size:11px;font-weight:700;line-height:1;padding:3px;position:absolute;right:-5px;top:-5px}.header-icon-cart[data-v-50a21f1d]{color:var(--color_icon);font-size:20px}.header-icon-cart[data-v-50a21f1d]:hover{color:var(--btnhover)}.header-item-menu[data-v-50a21f1d],.responsive[data-v-50a21f1d]{display:none}.container-category[data-v-50a21f1d]{display:inline-block;padding-bottom:10px;width:100%}.product-img-container[data-v-50a21f1d]{flex:1;max-width:250px}.card-container[data-v-50a21f1d]{border-radius:10px;box-shadow:0 0 22px 3px hsla(0,3%,94%,.702);margin:0 auto}.card-container[data-v-50a21f1d],.img-logo[data-v-50a21f1d]{height:265px;position:relative;width:100%}.img-logo[data-v-50a21f1d],.logo[data-v-50a21f1d]{max-width:250px}.logo[data-v-50a21f1d]{border-radius:10px;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.btn-container[data-v-50a21f1d]{bottom:12px;display:flex;justify-content:center;position:absolute;width:100%}.btn[data-v-50a21f1d]{background-color:var(--color_background_btn);border:1px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);color:#fff;cursor:pointer;font-size:14px;font-weight:700;height:40px;padding:8px 14px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:120px}.btn[data-v-50a21f1d]:hover{background-color:var(--btnhover);border:1px solid var(--btnhover);color:#fff}.card-container[data-v-50a21f1d]:hover,.content-products[data-v-50a21f1d]:focus{box-shadow:0 0 2px 1px var(--color_border)}.icon-s[data-v-50a21f1d]{color:var(--color_icon);cursor:pointer;font-size:25px;left:5px;position:absolute;top:3px}.icon-s[data-v-50a21f1d]:hover{color:var(--btnhover)}input[type=search][data-v-50a21f1d]:focus{background:transparent;border-color:var(--btnhover)}input[data-v-50a21f1d]:-moz-placeholder{color:var(--color_text)}input[data-v-50a21f1d]::-webkit-input-placeholder{color:var(--color_text)}#demo-2 input[type=search][data-v-50a21f1d]{background:transparent;border:2px solid var(--color_icon);border-radius:50px;box-sizing:border-box;color:transparent;cursor:pointer;height:35px;padding-left:10px;transition:all .2s ease-in;width:35px}#demo-2 input[type=search][data-v-50a21f1d]:hover{background:transparent}#demo-2 input[type=search][data-v-50a21f1d]:focus{background:transparent;color:var(--color_text);cursor:auto;padding-left:32px;width:160px}#demo-2 input[data-v-50a21f1d]:-moz-placeholder{color:transparent}#demo-2 input[data-v-50a21f1d]::-webkit-input-placeholder{color:transparent}@media (max-width:900px){.header[data-v-50a21f1d]{padding:10px 20px 0}.product-img-container[data-v-50a21f1d]{display:none}.header-content-items[data-v-50a21f1d]{margin-left:30px}}@media (max-width:700px){.header-buttons[data-v-50a21f1d]{display:none}.header-item-menu[data-v-50a21f1d]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;margin-left:20px}.header-icon-menu[data-v-50a21f1d]{color:var(--color_text);font-size:30px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:normal}.header-icon-menu>.material-design-icon__svg[data-v-50a21f1d]{bottom:0}.nav-bar[data-v-50a21f1d]{color:var(--color_text);font-stretch:normal;font-style:normal;font-weight:400;height:24px;letter-spacing:normal;line-height:normal;width:24px}.nav-bar>.material-design-icon__svg[data-v-50a21f1d]{bottom:0;height:24px;width:24px}.responsive[data-v-50a21f1d]{display:inline;display:initial}.menu-container[data-v-50a21f1d]{display:none}}@media (max-width:500px){.search[data-v-50a21f1d],.wrapper-items-icons[data-v-50a21f1d]{display:none}.header[data-v-50a21f1d]{padding:10px 15px 0}.header-logo[data-v-50a21f1d]{max-width:230px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=headers-header2-ko-header2.js.map