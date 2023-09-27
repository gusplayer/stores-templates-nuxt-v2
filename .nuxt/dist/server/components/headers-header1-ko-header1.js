exports.ids = [35];
exports.modules = {

/***/ 1228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/header1/Ko-Header-1.vue?vue&type=template&id=5605cd69&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "header-container",
    style: [_vm.settingByTemplate, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate) === null || _vm$settingByTemplate2 === void 0 ? void 0 : _vm$settingByTemplate2.tipo_letra) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"wrapper-header\" data-v-5605cd69>", "</div>", [_vm._ssrNode("<div class=\"header\" data-v-5605cd69>", "</div>", [_c('KoOrder', {
    attrs: {
      "data-store": _vm.dataStore
    }
  }), _vm._ssrNode(" "), _c('KoSearch'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-content-logo\" data-v-5605cd69>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "header-logo",
    attrs: {
      "loading": "lazy",
      "width": "120",
      "src": `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      "alt": "Logo Img"
    },
    on: {
      "click": _vm.clear
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-content-items\" data-v-5605cd69>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div class=\"header-buttons\" data-v-5605cd69>", "</div>", [_vm._ssrNode("<div data-v-5605cd69>", "</div>", [item.path && item.state ? _c('nuxt-link', {
      staticClass: "header-text-center",
      attrs: {
        "to": item.path
      }
    }, [_vm._v("\n              " + _vm._s(_vm.$t(`${item.name}`)) + "\n            ")]) : item.href && _vm.listArticulos > 0 && item.state ? _c('nuxt-link', {
      staticClass: "header-text-center",
      attrs: {
        "to": item.href
      }
    }, [_vm._v("\n              " + _vm._s(_vm.$t(`${item.name}`)) + "\n            ")]) : _c('div', [_vm.dataStore.categorias.length > 0 && item.ref ? _c('div', {
      staticStyle: {
        "margin-right": "20px",
        "display": "flex",
        "flex-direction": "row"
      }
    }, [_c('p', {
      staticClass: "header-text-center-icon"
    }, [_vm._v("\n                  " + _vm._s(_vm.$t(`${item.name}`)) + "\n                ")]), _vm._v(" "), !_vm.showMenu ? _c(item.iconOpen, {
      tag: "div",
      staticClass: "header-text-center-icon"
    }) : _vm._e(), _vm._v(" "), _vm.showMenu ? _c(item.iconClose, {
      tag: "div",
      staticClass: "header-text-center-icon"
    }) : _vm._e()], 1) : _vm._e()])], 1)]);
  }), 0), _vm._ssrNode(" "), _vm.showSearch && _vm.product.length > 0 ? _vm._ssrNode("<div class=\"search\" data-v-5605cd69>", "</div>", [_vm._ssrNode("<form id=\"demo-2\" style=\"position: relative\" data-v-5605cd69>", "</form>", [_c('search-icon', {
    staticClass: "icon-s",
    on: {
      "click": _vm.focusInput
    }
  }), _vm._ssrNode(" <input id=\"SearchHeader\" type=\"search\"" + _vm._ssrAttr("placeholder", _vm.$t('header_search')) + _vm._ssrAttr("value", _vm.search) + " data-v-5605cd69>")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm.product.length > 0 ? _vm._ssrNode("<div class=\"search_res\" data-v-5605cd69>", "</div>", [_vm._ssrNode("<div id=\"OpenCartTag\" class=\"header-content-cart\" data-v-5605cd69>", "</div>", [_c('search-icon', {
    staticClass: "header-icon-cart"
  })], 1)]) : _vm._e(), _vm._ssrNode(" "), _vm.product.length > 0 ? _vm._ssrNode("<div class=\"header-content-icon\" data-v-5605cd69>", "</div>", [_vm._ssrNode("<div id=\"OpenCartTag\" class=\"header-content-cart\" data-v-5605cd69>", "</div>", [_c('cart-icon', {
    staticClass: "header-icon-cart"
  }), _vm._ssrNode(" <span class=\"num-items\" data-v-5605cd69>" + _vm._ssrEscape(_vm._s(_vm.productsCart)) + "</span>")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-item-menu\" data-v-5605cd69>", "</div>", [_c('menu-icon', {
    staticClass: "header-icon-menu nav-bar"
  })], 1), _vm._ssrNode(" "), _c('KoMenu', {
    staticClass: "responsive",
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("menu-container", _vm.showMenu ? 'animated' : 'hidden') + " data-v-5605cd69>", "</div>", [_vm._ssrNode("<div id=\"menu-collapse\" data-v-5605cd69>", "</div>", [_vm._ssrNode("<div class=\"wrapper-meni-grid\" data-v-5605cd69><li data-v-5605cd69><p" + _vm._ssrClass("name-category-all", _vm.idCategory == '' && _vm.indexSelect == '' ? 'name-category-all-active' : '') + " data-v-5605cd69>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('header_allProduct')) + "\n          ") + "</p></li> <div class=\"menu-grid\" data-v-5605cd69>" + _vm._ssrList(_vm.categorias, function (categoria) {
    return "<div data-v-5605cd69><ul" + _vm._ssrClass("name-category", categoria.id == _vm.idCategory ? 'name-category-active' : '') + " data-v-5605cd69><li data-v-5605cd69><p data-v-5605cd69>" + _vm._ssrEscape("\n                  " + _vm._s(categoria.nombre_categoria_producto) + "\n                ") + "</p></li> <ul class=\"subcategoria\" data-v-5605cd69>" + _vm._ssrList(_vm.subcategories, function (subcategory, key) {
      return "<div data-v-5605cd69>" + (subcategory.categoria == categoria.id ? "<li" + _vm._ssrClass("text-subcategoria", subcategory.id == _vm.indexSelect ? 'text-subcategoria-active' : '') + " data-v-5605cd69>" + _vm._ssrEscape("\n                    " + _vm._s(subcategory.nombre_subcategoria) + "\n                  ") + "</li>" : "<!---->") + "</div>";
    }) + "</ul></ul></div>";
  }) + "</div></div> "), _vm.product.length ? _vm._ssrNode("<div class=\"product-img-container\" data-v-5605cd69>", "</div>", [_vm._ssrNode("<div class=\"card-container\" data-v-5605cd69>", "</div>", [_vm.product[0] ? _vm._ssrNode("<div class=\"img-logo\" data-v-5605cd69>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.product[0].foto_cloudinary, 400, 400),
      expression: "idCloudinary(product[0].foto_cloudinary, 400, 400)"
    }],
    staticClass: "logo",
    attrs: {
      "alt": "Product img"
    }
  }, [])]) : _vm._e(), _vm._ssrNode(" <div class=\"btn-container\" data-v-5605cd69><button class=\"btn\" data-v-5605cd69>Comprar</button></div>")], 2)]) : _vm._e()], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/headers/header1/Ko-Header-1.vue?vue&type=template&id=5605cd69&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/header1/Ko-Header-1.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_Header_1vue_type_script_lang_js_ = ({
  name: 'KoHeader1',
  components: {
    KoOrder: () => __webpack_require__.e(/* import() */ 352).then(__webpack_require__.bind(null, 61)),
    KoMenu: () => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, 214)),
    KoSearch: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 1230))
  },
  mixins: [idCloudinary["a" /* default */]],
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
        path: '/',
        state: true
      }, {
        name: 'header_categorias',
        iconOpen: 'Flechadown-icon',
        iconClose: 'FlechaUp-icon',
        ref: 'categorias',
        state: true
      }, {
        name: 'header_productos_hoko',
        path: '/productosHoko',
        state: false
      }, {
        name: 'header_contacto',
        path: '/contacto',
        state: true
      }, {
        name: 'header_blog',
        href: '/blog',
        state: true
      }],
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
    },
    dataHoko() {
      return this.$store.state.dataHoko;
    }
  },
  watch: {
    dataHoko() {
      this.setHoko();
    },
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
    this.setHoko();
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
    setHoko() {
      if (this.dataHoko && this.dataHoko.statehoko == 1) {
        this.secciones[2].state = true;
      } else {
        this.secciones[2].state = false;
      }
    },
    openSearch() {
      this.$store.commit('SET_OPEN_SEARCH', true);
    },
    openOrder() {
      this.$gtm.push({
        event: 'OpenCart',
        action: 'click'
      });
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
      this.$store.commit('SET_PREVIOUS_PAGE', 1);
    },
    sendCategory(value, categoria, ref) {
      this.idCategory = categoria;
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
      this.$router.push({
        path: '/',
        query: {
          category: value.nombre_categoria_producto
        }
      });
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto
      });
      this.$store.commit('SET_PREVIOUS_PAGE', 1);
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
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
      this.$emit('clear');
      this.nameCategory = '';
    },
    SearchProduct(search) {
      if (search) {
        this.$store.commit('SET_STATE_BANNER', false);
        this.$store.commit('SET_SEARCH_VALUE', search);
      } else {
        this.$store.commit('SET_STATE_BANNER', true);
        this.$store.commit('SET_SEARCH_VALUE', '');
      }
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
// CONCATENATED MODULE: ./components/headers/header1/Ko-Header-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var header1_Ko_Header_1vue_type_script_lang_js_ = (Ko_Header_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/headers/header1/Ko-Header-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(855)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header1_Ko_Header_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5605cd69",
  "09aa4247"
  
)

/* harmony default export */ var Ko_Header_1 = __webpack_exports__["default"] = (component.exports);

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

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(856);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("24fb6196", content, true, context)
};

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_1_vue_vue_type_style_index_0_id_5605cd69_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_1_vue_vue_type_style_index_0_id_5605cd69_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_1_vue_vue_type_style_index_0_id_5605cd69_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_1_vue_vue_type_style_index_0_id_5605cd69_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Header_1_vue_vue_type_style_index_0_id_5605cd69_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-5605cd69]{font-family:var(--font-style-1)!important}.header-container[data-v-5605cd69]{background:var(--background_color_1);height:88px;overflow:hidden;width:100%}.menu-container[data-v-5605cd69]{background:var(--background_color_2);display:flex;height:auto;position:fixed;top:88px;transition:all .6s ease;width:100%;z-index:4}.hidden[data-v-5605cd69]{display:none}.animated[data-v-5605cd69]{opacity:1}.wrapper-header[data-v-5605cd69]{align-items:center;background:var(--background_color_1);display:flex;flex-direction:column;justify-content:center;position:fixed;top:0;transition:all 1s ease;width:100%;z-index:4}.header[data-v-5605cd69]{align-items:center;display:flex;padding:10px 30px 0}#menu-collapse[data-v-5605cd69],.header[data-v-5605cd69]{flex-direction:row;justify-content:space-between;max-width:1300px;width:100%}#menu-collapse[data-v-5605cd69]{border-top:1px solid hsla(0,4%,66%,.4);display:none;list-style:none;margin:0 auto;padding:10px 30px 10px 20px}.wrapper-meni-grid[data-v-5605cd69]{flex:2;max-height:560px;max-width:1000px;overflow-y:auto;width:100%}.wrapper-meni-grid[data-v-5605cd69]::-webkit-scrollbar{background:transparent;border:1px solid hsla(0,0%,79%,.322);width:6px}.wrapper-meni-grid[data-v-5605cd69]::-webkit-scrollbar-track{border-radius:10px}.wrapper-meni-grid[data-v-5605cd69]::-webkit-scrollbar-thumb{background:#2c2c2c}.wrapper-meni-grid[data-v-5605cd69]::-webkit-scrollbar-thumb:hover{background:#666;border-radius:10px}.menu-grid[data-v-5605cd69]{align-content:stretch;align-items:stretch;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;width:100%}.name-category-all[data-v-5605cd69]{color:var(--color_text)}.name-category-all[data-v-5605cd69],.name-category-all-active[data-v-5605cd69]{cursor:pointer;font-size:16px;font-weight:700;padding:10px 0}.name-category-all-active[data-v-5605cd69]{color:red}.name-category-all[data-v-5605cd69]:hover{color:var(--btnhover)}.name-category[data-v-5605cd69]{color:var(--color_text);cursor:pointer;list-style:none;margin-right:32px}.name-category-active[data-v-5605cd69]{color:red;cursor:pointer}.name-category li[data-v-5605cd69]{font-size:16px;font-weight:700;padding:10px 0}.name-category li[data-v-5605cd69]:hover{color:var(--color_hover_text)}.subcategoria li[data-v-5605cd69]{font-size:14px;font-weight:300;list-style:none;margin-bottom:8px;margin-left:7px;padding:0}.text-subcategoria[data-v-5605cd69]{color:var(--color_subtext)}.text-subcategoria-active[data-v-5605cd69]{color:red}.text-subcategoria[data-v-5605cd69]:hover{color:var(--color_hover_text)}.header-content-logo[data-v-5605cd69]{align-items:center;display:flex;justify-content:center;padding:2px 0}.wrapper-logo[data-v-5605cd69]{width:100%}.header-logo[data-v-5605cd69]{max-height:74px;-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left}.header-content-items[data-v-5605cd69]{align-self:center;display:flex;flex:1;justify-content:flex-end;margin-left:10px;position:relative;top:3px}.header-buttons[data-v-5605cd69]{display:flex;flex-direction:row;justify-content:space-around}.header-text-center[data-v-5605cd69]{color:var(--color_text);cursor:pointer;font-size:16px;font-weight:400;margin-right:20px}.header-text-center[data-v-5605cd69]:hover{color:var(--color_hover_text)}.header-text-center-icon[data-v-5605cd69]{bottom:2px;color:var(--color_text);cursor:pointer;font-size:16px;font-weight:400}.header-text-center-icon[data-v-5605cd69]:hover{color:var(--color_hover_text)}.header-content-icon[data-v-5605cd69]{display:flex;flex-direction:row;justify-content:space-between}.header-items-icons[data-v-5605cd69]{align-self:center;display:flex;flex-direction:row;justify-content:space-around}.header-icon[data-v-5605cd69]{color:var(--color_icon);cursor:pointer;font-size:18px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:normal;margin-left:7px}.header-icon[data-v-5605cd69]:hover{color:var(--color_hover_text)}.header-content-cart[data-v-5605cd69]{border:2px solid var(--color_icon);border-radius:50%;box-sizing:border-box;cursor:pointer;height:35px;margin-left:20px;padding-bottom:3px;position:relative;width:35px}.header-content-cart[data-v-5605cd69],.num-items[data-v-5605cd69]{align-items:center;display:flex;justify-content:center}.num-items[data-v-5605cd69]{background-color:var(--color_icon);border:var(--color_icon) 1px;border-radius:10px;color:var(--background_color_1);font-size:11px;font-weight:700;line-height:1;padding:3px;position:absolute;right:-5px;top:-5px}.header-icon-cart[data-v-5605cd69]{color:var(--color_icon);font-size:20px}.header-icon-cart[data-v-5605cd69]:hover{color:var(--btnhover)}.header-item-menu[data-v-5605cd69],.responsive[data-v-5605cd69]{display:none}.product-img-container[data-v-5605cd69]{flex:1;max-width:250px}.card-container[data-v-5605cd69]{border-radius:10px;box-shadow:0 0 22px 3px hsla(0,3%,94%,.702);margin:0 auto}.card-container[data-v-5605cd69],.img-logo[data-v-5605cd69]{height:265px;position:relative;width:100%}.img-logo[data-v-5605cd69],.logo[data-v-5605cd69]{max-width:250px}.logo[data-v-5605cd69]{border-radius:10px;height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.btn-container[data-v-5605cd69]{bottom:12px;display:flex;justify-content:center;position:absolute;width:100%}.btn[data-v-5605cd69]{background-color:var(--color_background_btn);border:1px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);color:#fff;cursor:pointer;font-size:14px;font-weight:700;height:40px;padding:8px 14px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:120px}.btn[data-v-5605cd69]:hover{background-color:var(--btnhover);border:1px solid var(--btnhover);color:#fff}.card-container[data-v-5605cd69]:hover,.content-products[data-v-5605cd69]:focus{box-shadow:0 0 2px 1px var(--color_border)}.icon-s[data-v-5605cd69]{color:var(--color_icon);cursor:pointer;font-size:25px;left:5px;position:absolute;top:3px}.icon-s[data-v-5605cd69]:hover{color:var(--btnhover)}input[type=search][data-v-5605cd69]:focus{background:transparent;border:2px solid var(--color_icon)}input[data-v-5605cd69]:-moz-placeholder{color:var(--color_text)}input[data-v-5605cd69]::-webkit-input-placeholder{color:var(--color_text)}#demo-2 input[type=search][data-v-5605cd69]{background:transparent;border:2px solid var(--color_icon);border-radius:50px;box-sizing:border-box;color:transparent;cursor:pointer;height:35px;padding-left:10px;transition:all .2s ease-in;width:35px}#demo-2 input[type=search][data-v-5605cd69]:hover{background:transparent}#demo-2 input[type=search][data-v-5605cd69]:focus{background:transparent;color:var(--color_text);cursor:auto;padding-left:32px;width:160px}#demo-2 input[data-v-5605cd69]:-moz-placeholder{color:transparent}#demo-2 input[data-v-5605cd69]::-webkit-input-placeholder{color:transparent}.search_res[data-v-5605cd69]{display:none}@media (max-width:1024px){.wrapper-meni-grid[data-v-5605cd69]{max-height:540px}}@media (max-height:700px){.wrapper-meni-grid[data-v-5605cd69]{max-height:500px}}@media (max-height:580px){.wrapper-meni-grid[data-v-5605cd69]{max-height:480px}}@media (max-width:900px){.header[data-v-5605cd69]{padding:10px 20px 0}.product-img-container[data-v-5605cd69]{display:none}}@media (max-width:700px){.header-buttons[data-v-5605cd69],.header-items-icons[data-v-5605cd69]{display:none}.header-item-menu[data-v-5605cd69]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;margin-left:20px}.header-icon-menu[data-v-5605cd69]{color:var(--color_text);font-size:30px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:normal}.header-icon-menu>.material-design-icon__svg[data-v-5605cd69]{bottom:0}.nav-bar[data-v-5605cd69]{color:var(--color_text);font-stretch:normal;font-style:normal;font-weight:400;height:24px;letter-spacing:normal;line-height:normal;width:24px}.nav-bar>.material-design-icon__svg[data-v-5605cd69]{bottom:0;height:24px;width:24px}.responsive[data-v-5605cd69]{display:inline;display:initial}.menu-container[data-v-5605cd69]{display:none}}@media (max-width:500px){.search[data-v-5605cd69]{display:none}.search_res[data-v-5605cd69]{display:flex}.header[data-v-5605cd69]{padding:10px 15px 0}.header-logo[data-v-5605cd69]{max-width:180px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=headers-header1-ko-header1.js.map