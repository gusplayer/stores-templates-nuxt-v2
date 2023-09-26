exports.ids = [147,8];
exports.modules = {

/***/ 1187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/Ko16-ProductListFilter.vue?vue&type=template&id=3e34c7d9&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate16 ? _c('div', {
    staticClass: "product-content",
    style: [_vm.settingByTemplate16[0].settingsGeneral, _vm.settingByTemplate16[0].listProductsFilter, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate16[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.settingsGeneral) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.fount) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"w-full flex flex-col items-center py-10\"" + _vm._ssrStyle(null, `background-color: ${_vm.settingByTemplate16[0].listProductsFilter['--background_color_2']}`, null) + " data-v-3e34c7d9>", "</div>", [_vm._ssrNode("<div class=\"w-full max-w-[1300px] flex flex-row items-center justify-start sm:px-10 md:px-20\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].listProductsFilter.color_breadCrumbs};`, null) + " data-v-3e34c7d9>", "</div>", [_c('nuxt-link', {
    staticClass: "text-14",
    style: `color: ${_vm.settingByTemplate16[0].listProductsFilter.color_breadCrumbs}`,
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('header_inicio')) + "\n      ")]), _vm._ssrNode(" <p class=\"px-10 text-14 font-bold\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].listProductsFilter.color_breadCrumbs}`, null) + " data-v-3e34c7d9>\n        &gt;\n      </p> <p class=\"text-14 font-bold\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].listProductsFilter.color_breadCrumbs2}`, null) + " data-v-3e34c7d9>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('header_productos')) + "\n      ") + "</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container-product-max-w\" data-v-3e34c7d9>", "</div>", [_vm._ssrNode("<div class=\"content-shop-items\" data-v-3e34c7d9>", "</div>", [_vm._ssrNode("<div class=\"content-left\"" + _vm._ssrStyle(null, `background-color: ${_vm.settingByTemplate16[0].listProductsFilter['--background_color_2']}`, null) + " data-v-3e34c7d9>", "</div>", [_c('nuxt-link', {
    staticClass: "content-home",
    attrs: {
      "to": "/productos"
    }
  }, [_c('p', {
    staticClass: "txt-content-home",
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('header_buscar_limpiar')) + "\n          ")])]), _vm._ssrNode(" "), _c('el-collapse', {
    model: {
      value: _vm.activeNames,
      callback: function ($$v) {
        _vm.activeNames = $$v;
      },
      expression: "activeNames"
    }
  }, [_c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('header_buscar_producto'),
      "name": "1"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "input-slide",
    attrs: {
      "type": "search",
      "placeholder": _vm.$t('header_search')
    },
    domProps: {
      "value": _vm.search
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })]), _vm._v(" "), _vm.categorias.length > 0 ? _c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('productdetail_categoria'),
      "name": "2"
    }
  }, [_c('div', {
    staticClass: "categorys-list"
  }, _vm._l(_vm.categorias, function (categorys, index) {
    return _c('div', {
      key: index,
      on: {
        "click": function ($event) {
          _vm.showSubCategory = true;
        }
      }
    }, [_c('div', {
      on: {
        "click": function ($event) {
          _vm.sendCategory(categorys, categorys.id, _vm.ref = false);
        }
      }
    }, [_c('p', {
      staticClass: "txt-categorys",
      class: categorys.id == _vm.indexSelect ? 'txt-categorys-active' : ''
    }, [_vm._v("\n                    " + _vm._s(categorys.nombre_categoria_producto) + "\n                  ")])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.showSubCategory && _vm.selectedSubcategories.length ? _c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('home_subcategory'),
      "name": "3"
    }
  }, [_vm.showSubCategory && _vm.selectedSubcategories.length ? _c('div', {
    staticClass: "subcategory-list"
  }, _vm._l(_vm.selectedSubcategories, function (subcategorys, index) {
    return _c('div', {
      key: index
    }, [_c('div', {
      on: {
        "click": function ($event) {
          return _vm.SendSubCategory(subcategorys.id);
        }
      }
    }, [_c('p', {
      staticClass: "txt-categorys",
      class: subcategorys.id == _vm.indexSelect2 ? 'txt-categorys-active' : ''
    }, [_vm._v("\n                    " + _vm._s(subcategorys.nombre_subcategoria) + "\n                  ")])])]);
  }), 0) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm._l(_vm.allTags, function (itemsTags, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.allTags && _vm.allTags.length > 0,
        expression: "allTags && allTags.length > 0"
      }],
      key: index
    }, [itemsTags && itemsTags.status === 1 && itemsTags.properties.length > 0 ? _c('el-collapse-item', {
      attrs: {
        "title": itemsTags.name,
        "name": 6 + index
      }
    }, [_c('div', {
      staticClass: "categorys-list"
    }, _vm._l(itemsTags.properties, function (itemsProperties) {
      return _c('button', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: itemsProperties.status === 1,
          expression: "itemsProperties.status === 1"
        }],
        key: itemsProperties.id,
        staticClass: "txt-Filter",
        class: itemsProperties.name == _vm.etiqueta1 ? 'txt-categorys-active' :  false || itemsProperties.name == _vm.etiqueta2 ? 'txt-categorys-active' : '',
        on: {
          "click": function ($event) {
            return _vm.getProductsFilter('tag', itemsProperties.id, itemsProperties.name, false);
          }
        }
      }, [_vm._v("\n                  " + _vm._s(itemsProperties.name) + "\n                ")]);
    }), 0)]) : _vm._e()], 1);
  }), _vm._v(" "), !_vm.stateShipping ? _c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('home_fenvio'),
      "name": "4"
    }
  }, [_c('div', {
    staticClass: "categorys-list"
  }, [_c('button', {
    staticClass: "txt-Filter",
    on: {
      "click": function ($event) {
        return _vm.getProductsFilter('ShippingFree');
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_gratis')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "txt-Filter",
    on: {
      "click": function ($event) {
        return _vm.getProductsFilter('NoShippingFree');
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_Singratis')) + "\n              ")])])]) : _vm._e(), _vm._v(" "), _c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('home_fprecio'),
      "name": "5"
    }
  }, [_c('div', {
    staticClass: "categorys-list"
  }, [_c('button', {
    staticClass: "txt-Filter",
    on: {
      "click": function ($event) {
        return _vm.getProductsFilter('higherNumber');
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_fpreciom')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "txt-Filter",
    on: {
      "click": function ($event) {
        return _vm.getProductsFilter('smallerNumber');
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_fprecioM')) + "\n              ")])])])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-right\" data-v-3e34c7d9>", "</div>", [_c('nuxt-link', {
    staticClass: "content-home hidd",
    attrs: {
      "to": "/productos"
    }
  }, [_c('p', {
    staticClass: "txt-content-home",
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('header_buscar_limpiar')) + "\n          ")])]), _vm._ssrNode(" <div class=\"empty hidd\" data-v-3e34c7d9></div> "), _vm._ssrNode("<div class=\"w-full flex flex-row justify-between items-center pb-25\" data-v-3e34c7d9>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-col justify-start items-start\" data-v-3e34c7d9>" + (!_vm.nameCategoryHeader ? "<p class=\"font-semibold uppercase justify-start items-start\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].listProductsFilter['--color_subCategories']};`, null) + " data-v-3e34c7d9>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('header_productos')) + "\n            ") + "</p>" : "<div class=\"flex flex-col justify-start\" data-v-3e34c7d9><p class=\"font-semibold uppercase justify-start items-start\" data-v-3e34c7d9>" + _vm._ssrEscape("\n                " + _vm._s(_vm.nameCategoryHeader) + "\n              ") + "</p> <div class=\"flex flex-row\" data-v-3e34c7d9>" + (_vm.nameSubCategoryHeader ? "<p class=\"text-12 mr-4\" data-v-3e34c7d9>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.nameSubCategoryHeader) + "\n                ") + "</p>" : "<!---->") + " " + (_vm.nameSubCategoryHeader && _vm.etiqueta1 ? "<p class=\"text-12 mr-4\" data-v-3e34c7d9>\n                  /\n                </p>" : "<!---->") + " " + (_vm.etiqueta1 ? "<p class=\"text-12\" data-v-3e34c7d9>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.etiqueta1) + "\n                ") + "</p>" : "<!---->") + " " + (_vm.etiqueta2 ? "<p class=\"ml-4 text-12\" data-v-3e34c7d9>" + _vm._ssrEscape("/ " + _vm._s(_vm.etiqueta2)) + "</p>" : "<!---->") + "</div></div>") + " " + (_vm.etiqueta1 && _vm.nameCategoryHeader == '' && _vm.nameSubCategoryHeader == '' ? "<div class=\"flex flex-col justify-start\" data-v-3e34c7d9><p class=\"text-12\" data-v-3e34c7d9>" + _vm._ssrEscape("\n                " + _vm._s(_vm.etiqueta1) + "\n              ") + "</p></div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"flex md:hidden\" data-v-3e34c7d9>", "</div>", [_c('filterOutLine-icon', {
    staticClass: "text-25",
    on: {
      "click": _vm.openMenuLateral
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"section\" class=\"producto-items-content\" data-v-3e34c7d9>", "</div>", [_vm._ssrNode("<div class=\"content-item\" data-v-3e34c7d9>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-3e34c7d9>", "</div>", [_vm._ssrNode("<div id=\"grid-selection\" class=\"product-content-items\" data-v-3e34c7d9>", "</div>", _vm._l(_vm.filterProduct, function (product) {
    return _vm._ssrNode("<div class=\"content-products h-full\" data-v-3e34c7d9>", "</div>", [_c('KoProductCardFilter', {
      staticClass: "product-list",
      attrs: {
        "product": product,
        "card-products": _vm.settingByTemplate16[0].cardProducts,
        "setting-general": _vm.settingByTemplate16[0].settingsGeneral
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm.fullProducts.length == 0 ? _vm._ssrNode("<div class=\"content-products-empty\" data-v-3e34c7d9>", "</div>", [_vm._ssrNode("<div class=\"header-content-logo\" data-v-3e34c7d9>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/productos"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${_vm.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n                        `${$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n                      "
    }],
    staticClass: "header-logo",
    attrs: {
      "alt": "Logo Img"
    },
    on: {
      "click": _vm.clear
    }
  })])], 1), _vm._ssrNode(" <p class=\"txt-products-empty\" data-v-3e34c7d9>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-3e34c7d9>", "</div>", [_vm.fullProducts.length > _vm.numVistas ? _vm._ssrNode("<div class=\"product_pagination\" data-v-3e34c7d9>", "</div>", [_c('el-pagination', {
    staticClass: "pagination",
    attrs: {
      "background": "",
      "layout": "prev, pager, next",
      "total": _vm.fullProducts.length,
      "page-size": _vm.numVistas,
      "current-page": _vm.currentPage
    },
    on: {
      "update:currentPage": function ($event) {
        _vm.currentPage = $event;
      },
      "update:current-page": function ($event) {
        _vm.currentPage = $event;
      }
    }
  })], 1) : _vm._e()])], 2)])])], 2)], 2)])], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template16/Ko16-ProductListFilter.vue?vue&type=template&id=3e34c7d9&scoped=true&

// EXTERNAL MODULE: ./components/template16/_cardProduct/ProductCard.vue + 4 modules
var ProductCard = __webpack_require__(580);

// EXTERNAL MODULE: ./mixins/filterProducts.js
var filterProducts = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/Ko16-ProductListFilter.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko16_ProductListFiltervue_type_script_lang_js_ = ({
  name: 'Ko16ProductListFilter',
  components: {
    KoProductCardFilter: ProductCard["default"]
  },
  mixins: [filterProducts["a" /* default */]],
  props: {
    settingByTemplate16: {
      type: Array,
      required: true
    },
    dataStore: {
      type: Object,
      required: true
    },
    fullProducts: {
      type: Array,
      required: true
    },
    allTags: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      search: '',
      currentPage: 1,
      showSubCategory: false,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      indexSelect: '',
      indexSelect2: '',
      numVistas: 15,
      activeNames: ['1', '2', '3', '4', '5'],
      stateShipping: false
    };
  },
  computed: {
    categorias() {
      return this.dataStore.categorias;
    },
    subcategories() {
      return this.dataStore.subcategorias;
    },
    getProductsCategories() {
      const initial = this.currentPage * 15 - 15;
      const final = initial + 15;
      return this.fullProducts.filter(product => product.categoria == this.select).slice(initial, final);
    },
    filterProduct() {
      const initial = this.currentPage * 15 - 15;
      const final = initial + 15;
      return this.fullProducts.slice(initial, final);
    },
    selectedCategory() {
      return this.$store.state.products.payload;
    },
    selectedType() {
      return this.$store.state.products.type;
    },
    nameCategoryHeader() {
      return this.$store.state.category_producto_header;
    },
    nameSubCategoryHeader() {
      return this.$store.state.subcategory_producto_header;
    },
    searchValue() {
      return this.$store.state.searchValue;
    },
    previousPage() {
      return this.$store.state.previousPage;
    },
    etiqueta1() {
      return this.$store.state.products.payloadTagName;
    },
    etiqueta2() {
      return this.$store.state.products.payloadTag2Name;
    }
  },
  watch: {
    search(value) {
      this.SearchProduct(value);
    },
    currentPage() {
      this.$store.commit('SET_PREVIOUS_PAGE', this.currentPage);
      let timerTimeout = null;
      // eslint-disable-next-line no-unused-vars
      timerTimeout = setTimeout(() => {
        timerTimeout = null;
        window.scrollBy(0, -1500);
      }, 250);
    },
    previousPage() {
      if (this.previousPage) {
        this.currentPage = this.previousPage;
      }
    },
    nameCategoryHeader(value) {
      return value;
    },
    nameSubCategoryHeader(value) {
      return value;
    },
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.getQuery();
    },
    searchValue(value) {
      this.SearchProduct(value);
    }
  },
  mounted() {
    this.getQuery();
    if (this.previousPage) {
      this.currentPage = this.previousPage;
    }
  },
  methods: {
    openMenuLateral() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', true);
    },
    getQuery() {
      if (this.$route.query && this.$route.query.category) {
        this.sendCategoryUrlMix(this.$route.query.category);
      } else if (this.$route.query && this.$route.query.subcategory) {
        this.SendSubCategoryUrlMix(this.$route.query.subcategory, this.categorias, this.subcategories);
      } else if (this.$route.query && this.$route.query.tagId && this.$route.query.tagName) {
        this.sendTagUrlMix(this.$route.query.tagId, this.$route.query.tagName);
      } else if (this.$route.query && this.$route.query.search) {
        this.SearchProduct(decodeURIComponent(this.$route.query.search));
      } else if (this.$route.fullPath == '/') {
        this.allCategories();
      }
    },
    setOptionShipping() {
      if (this.dataStore && this.dataStore.medios_envio) {
        let shipping = JSON.parse(this.dataStore.medios_envio.valores);
        switch (shipping.envio_metodo) {
          case 'sintarifa':
            this.stateShipping = false;
            break;
          case 'gratis':
            this.stateShipping = true;
            break;
          case 'tarifa_plana':
            this.stateShipping = false;
            break;
          case 'precio':
            this.stateShipping = false;
            break;
          case 'precio_ciudad':
            this.stateShipping = false;
            break;
          case 'peso':
            this.stateShipping = false;
            break;
          default:
        }
      }
    },
    SendSubCategory(value) {
      this.$store.commit('products/SET_PAYLOAD_TAG', '');
      this.$store.commit('products/SET_PAYLOAD_TAG2', '');
      this.indexSelect2 = value;
      this.selectSubcategory = value;
      let filtradoSubCategory = this.subcategories.find(element => element.id == value);
      let filtradoCategories = this.categorias.find(element => element.id == filtradoSubCategory.categoria);
      this.$store.commit('SET_CATEGORY_PRODUCTO', filtradoCategories.nombre_categoria_producto);
      this.nameSubCategory = filtradoSubCategory.nombre_subcategoria;
      this.$router.push({
        path: '',
        query: {
          subcategory: `${this.nameSubCategory}^${filtradoCategories.id}`
        }
      });
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', this.nameSubCategory);
      this.$store.commit('products/FILTER_BY', {
        type: ['subcategory'],
        data: value
      });
    },
    sendCategory(value, categoria, index, ref) {
      this.indexSelect = categoria;
      this.currentPage = 1;
      this.nameCategory = value.nombre_categoria_producto;
      this.nameSubCategory = '';
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory);
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$store.commit('products/SET_PAYLOAD_TAG', '');
      this.$store.commit('products/SET_PAYLOAD_TAG2', '');
      this.$router.push({
        path: '',
        query: {
          category: this.nameCategory
        }
      });
      this.selectedSubcategories = [];
      this.subcategories.find(subcategory => {
        if (subcategory.categoria === categoria) {
          this.selectedSubcategories.push(subcategory);
        }
      });
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto
      });
    },
    clear() {
      this.indexSelect = '';
      this.indexSelect2 = '';
      this.$router.push({
        path: '',
        query: {}
      });
      this.$store.commit('SET_CATEGORY_PRODUCTO', '');
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
      this.$emit('clear');
      this.nameCategory = '';
      this.showSubCategory = false;
      this.selectedSubcategories = [];
    }
  }
});
// CONCATENATED MODULE: ./components/template16/Ko16-ProductListFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template16_Ko16_ProductListFiltervue_type_script_lang_js_ = (Ko16_ProductListFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template16/Ko16-ProductListFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(774)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template16_Ko16_ProductListFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e34c7d9",
  "5d24a3d9"
  
)

/* harmony default export */ var Ko16_ProductListFilter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(243);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("27eb5362", content, true, context)
};

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_ddff311a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_ddff311a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_ddff311a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_ddff311a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_ddff311a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_container[data-v-ddff311a]{background-color:var(--background_color_1)}.card-title[data-v-ddff311a]{color:var(--color_title);font-size:16px;font-weight:var(--fontWeighTitle)}.card-title[data-v-ddff311a]:hover{color:var(--hover_text);transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.separator-price[data-v-ddff311a]{font-size:20px}.separator-price[data-v-ddff311a],.text-price[data-v-ddff311a]{color:var(--color_price)!important}.text-price[data-v-ddff311a]{font-size:20px;font-weight:var(--fontWeighPrice);text-align:left;white-space:nowrap}.text-free[data-v-ddff311a],.text-sould[data-v-ddff311a]{transform:translate(-50%,-50%)}.btn[data-v-ddff311a]:hover{background-color:var(--hover_Bg_btn);color:var(--hover_text_btn);transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.icon-shop[data-v-ddff311a]{fill:var(--color_text_btn);margin-bottom:5px;margin-right:5px}#product-card:hover .wrapper_blur[data-v-ddff311a],#product-card:hover .wrapper_btn[data-v-ddff311a]{opacity:1;transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}@media (min-width:300px){.overlay-top[data-v-ddff311a]{--tw-bg-opacity:1;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:40px;overflow:hidden;position:absolute;top:10%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:45px}.overlay-free[data-v-ddff311a],.overlay-top[data-v-ddff311a]{right:0}.overlay-free[data-v-ddff311a]{background-color:#222;border-radius:.25rem;height:10%;overflow:hidden;position:absolute;top:0;transition:.5s ease;width:110px}.text-free[data-v-ddff311a]{font-size:75%}.overlay-polygon[data-v-ddff311a]{background-color:transparent;height:5%;right:15px;top:10%;width:5%}.overlay-polygon[data-v-ddff311a],.overlay-sould[data-v-ddff311a]{overflow:hidden;position:absolute}.overlay-sould[data-v-ddff311a]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:60%;right:0;top:0;transition:.5s ease;width:35%}.svg-sould-out[data-v-ddff311a]{height:40px;width:40px}.content-price[data-v-ddff311a]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separator-price[data-v-ddff311a]{margin-left:1px;margin-right:1px}}@media (min-width:768px){.text-free[data-v-ddff311a]{font-size:100%}.svg-sould-out[data-v-ddff311a]{height:60px;width:60px}.separator-price[data-v-ddff311a]{margin-left:4px;margin-right:4px}}@media (min-width:1280px){.overlay-top[data-v-ddff311a]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-ddff311a]{left:85%;width:40px}.overlay-free[data-v-ddff311a]{height:35px;left:100%;right:0;top:0;transition:.5s ease;width:0}.container:hover .overlay-free[data-v-ddff311a]{left:68%;transition-delay:.7s;width:32%}.overlay-polygon[data-v-ddff311a]{height:5%;left:100%;right:0;top:35px;width:0}.container:hover .overlay-polygon[data-v-ddff311a]{left:90%;transition-delay:.95s;width:5%}.overlay-sould[data-v-ddff311a]{height:20%;left:100%;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-ddff311a]{left:65%;transition-delay:.7s;width:35%}.svg-sould-out[data-v-ddff311a]{height:60px;width:60px}}@media (min-width:1920px){.overlay-top[data-v-ddff311a]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-ddff311a]{left:86%;width:40px}}@media (min-width:2560px){.overlay-top[data-v-ddff311a]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-ddff311a]{left:88%;width:40px}.overlay-sould[data-v-ddff311a]{height:20%;left:100%;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-ddff311a]{left:75%;transition-delay:.7s;width:30%}}@media (min-width:3000px){.overlay-top[data-v-ddff311a]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-ddff311a]{left:89%;width:40px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(775);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2d8aebad", content, true, context)
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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  filters: {
    currency(value, codigo_pais, moneda) {
      let resultCurrent;
      if (codigo_pais && moneda) {
        if (value && codigo_pais == 'co' && moneda == 'COP') {
          // return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          return `$${new Intl.NumberFormat('de-DE').format(value)}`;
        } else if (value && codigo_pais == 'pe' && moneda == 'PEN') {
          // return `S/ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          return `S/ ${new Intl.NumberFormat('es-PE').format(value)}`;
        } else if (codigo_pais == 'internacional') {
          resultCurrent = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: moneda,
            minimumFractionDigits: 0
          }).format(value);
          return `${resultCurrent}`;
        } else {
          resultCurrent = new Intl.NumberFormat(codigo_pais, {
            style: 'currency',
            currency: moneda,
            minimumFractionDigits: 0
          }).format(value);
          return `${resultCurrent}`;
        }
      } else {
        if (value) {
          // return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          return `$${new Intl.NumberFormat('de-DE').format(value)}`;
        }
      }
    }
  }
});

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    // filtro etiqueta URL
    sendTagUrlMix(tag_id, tag_Name) {
      this.$store.commit('products/FILTER_BY', {
        type: ['tag'],
        data: ''
      });
      this.$store.state.products.payloadTag = parseInt(tag_id);
      this.$store.state.products.payloadTagName = tag_Name;
    },
    // filtro categoría URL
    sendCategoryUrlMix(value) {
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      let urlFiltrada = decodeURIComponent(value);
      console.log(urlFiltrada);
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: urlFiltrada
      });
      if (this.$store.getters['products/filterProducts'].length) {
        this.$store.commit('SET_CATEGORY_PRODUCTO', urlFiltrada);
      } else {
        this.$store.commit('SET_CATEGORY_PRODUCTO', '');
      }
    },
    // filtro subcategoría URL
    SendSubCategoryUrlMix(value, categories, subcategories) {
      let urlFiltradaTemp = decodeURIComponent(value);
      let resTemp = urlFiltradaTemp.split('^');
      let filtradoSubCategories = subcategories.find(element => {
        if (element.categoria == parseInt(resTemp[1]) && element.nombre_subcategoria == resTemp[0]) {
          return element;
        }
      });
      if (filtradoSubCategories) {
        let filtradoCategories = categories.find(element => element.id == parseInt(resTemp[1]));
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: filtradoSubCategories.id
        });
        if (this.$store.getters['products/filterProducts'].length) {
          this.$store.commit('SET_CATEGORY_PRODUCTO', filtradoCategories.nombre_categoria_producto);
          this.$store.commit('SET_SUBCATEGORY_PRODUCTO', filtradoSubCategories.nombre_subcategoria);
        } else {
          this.$store.commit('SET_CATEGORY_PRODUCTO', '');
          this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
        }
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: parseInt(resTemp[1])
        });
      }
    },
    // filtro categoría, subcategoría y etiqueta
    getProductsFilter(value, tag_id, tag_Name, Lateral) {
      this.$store.commit('SET_STATE_BANNER', false);
      let type = this.$store.state.products.type;
      let payload = this.$store.state.products.payload;
      if (type.length < 2) {
        this.$store.state.products.payloadTag = tag_id ? tag_id : this.$store.state.products.payloadTag ? this.$store.state.products.payloadTag : '';
        this.$store.state.products.payloadTagName = tag_Name ? tag_Name : this.$store.state.products.payloadTagName ? this.$store.state.products.payloadTagName : '';
      }
      if (type && type.length >= 1) {
        if (type[0] == 'category' || type[0] == 'subcategory' || type[0] == 'tag') {
          this.$store.commit('products/FILTER_BY', {
            type: [type[0], `${value}`],
            data: payload
          });
        }
        if (type[0] == 'category' || type[0] == 'subcategory') {
          if (type[1] == 'tag') {
            this.$store.commit('products/FILTER_BY', {
              type: [type[0], type[1], `${value}`],
              data: payload
            });
            this.$store.state.products.payloadTag2 = tag_id ? tag_id : this.$store.state.products.payloadTag2 ? this.$store.state.products.payloadTag2 : '';
            this.$store.state.products.payloadTag2Name = tag_Name ? tag_Name : this.$store.state.products.payloadTag2Name ? this.$store.state.products.payloadTag2Name : '';
          }
        } else {
          this.$store.state.products.type = [];
          this.$store.commit('products/FILTER_BY', {
            type: [`${value}`],
            data: ''
          });
          this.setURlTag(tag_id, tag_Name);
        }
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: [`${value}`],
          data: ''
        });
        this.setURlTag(tag_id, tag_Name);
      }
      this.currentPage = 1;
      if (Lateral) {
        this.$router.push({
          path: '/productos'
        });
        this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false);
      }
    },
    allCategories() {
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
      this.currentPage = 1;
    },
    SearchProduct(search) {
      if (search.length) {
        this.search = search;
        this.$router.push({
          path: '',
          query: {
            search: search
          }
        });
        this.$store.commit('products/FILTER_BY', {
          type: ['search'],
          data: search
        });
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['all'],
          data: ''
        });
      }
      this.currentPage = 1;
    },
    setURlTag(id, name) {
      if (this.$store.state.products.type[0] == 'tag') {
        this.$router.push({
          path: '',
          query: {}
        });
        this.$router.push({
          path: '',
          query: {
            tagId: id,
            tagName: name
          }
        });
      }
    }
  }
});

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/_cardProduct/ProductCard.vue?vue&type=template&id=ddff311a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "h-full w-full flex flex-col justify-start items-center cursor-pointer relative wrapper_container",
    style: [_vm.settingGeneral, _vm.cardProducts],
    attrs: {
      "id": "product-card"
    }
  }, [_vm._ssrNode("<div class=\"relative max-w-full h-full shadow-sm border rounded-5 container\" data-v-ddff311a>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.product.foto_cloudinary, 400, 400),
      expression: "idCloudinary(product.foto_cloudinary, 400, 400)"
    }],
    staticClass: "w-full object-cover overflow-hidden rounded-t-5 max-w-[300px] max-h-[350px]",
    class: !_vm.soldOut ? '' : 'grayscale',
    attrs: {
      "width": "294",
      "height": "294",
      "loading": "lazy",
      "alt": "Product Img"
    }
  })]), _vm._ssrNode(" " + (_vm.soldOut ? "<p class=\"absolute bottom-54 right-10 text-12 px-2 py-1 rounded-4 bg-red-500 text-white-white\" data-v-ddff311a>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('home_cardAgotado')) + "\n    ") + "</p>" : "<!---->") + " " + (!_vm.getFreeShipping ? "<p class=\"absolute bottom-30 right-10 text-12 px-2 py-1 rounded-4 bg-green-500 text-white-white\" data-v-ddff311a>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('home_cardGratis')) + "\n    ") + "</p>" : "<!---->") + " " + (_vm.product.tag_promocion == 1 && _vm.product.promocion_valor ? "<div class=\"absolute top-10 left-10 py-1 px-5 text-white-white uppercase text-12 bg-red-500 right-auto rounded-4\" data-v-ddff311a><p class=\"block\" data-v-ddff311a>" + _vm._ssrEscape(_vm._s(_vm.product.promocion_valor) + "% OFF") + "</p></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"w-full h-full flex flex-col justify-between items-center my-6 mx-10 cursor-default box-border\" data-v-ddff311a>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('div', {
    staticClass: "w-full flex justify-center items-center"
  }, [_c('p', {
    staticClass: "h-full pt-10 transition-all ease-out duration-0.2 text-center min-h-[58px] max-h-[58px] card-title"
  }, [_vm._v("\n          " + _vm._s(_vm.product.nombre.slice(0, 54)) + "\n          " + _vm._s(_vm.product.nombre.length >= 54 ? '...' : '') + "\n        ")])])]), _vm._ssrNode(" <div class=\"mt-10\" data-v-ddff311a>" + (_vm.estadoCart && _vm.equalsPrice ? "<div data-v-ddff311a>" + (_vm.minPrice ? "<p class=\"text-price\" data-v-ddff311a>" + _vm._ssrEscape("\n          " + _vm._s(_vm._f("currency")(_vm.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n        ") + "</p>" : "<!---->") + "</div>" : _vm.estadoCart && _vm.minPrice && _vm.maxPrice && !_vm.equalsPrice ? "<div class=\"content-price\" data-v-ddff311a><div class=\"text-price\" data-v-ddff311a>" + _vm._ssrEscape("\n          " + _vm._s(_vm._f("currency")(_vm.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n        ") + "</div> <p class=\"separator-price\" data-v-ddff311a>-</p> <div class=\"text-price\" data-v-ddff311a>" + _vm._ssrEscape("\n          " + _vm._s(_vm._f("currency")(_vm.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n        ") + "</div></div>" : "<div data-v-ddff311a>" + (_vm.product.precio > 0 || _vm.product.precio ? "<p class=\"text-price\" data-v-ddff311a>" + _vm._ssrEscape("\n          " + _vm._s(_vm._f("currency")(_vm.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n        ") + "</p>" : "<!---->") + "</div>") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"absolute right-20 top-15 opacity-0 flex flex-col justify-center items-center transition-all ease-in duration-0.3 z-10 wrapper_btn\" data-v-ddff311a>", "</div>", [_c('nuxt-link', {
    staticClass: "px-12 py-8 shadow-lg rounded-full btn",
    style: `background-color:${_vm.cardProducts.color_btn};color:${_vm.cardProducts.color_icon};`,
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('eye-outline-icon')], 1), _vm._ssrNode(" "), !_vm.estadoCart && !_vm.soldOut && !_vm.spent && (_vm.product.tipo_servicio == null || _vm.product.tipo_servicio == '0') ? _vm._ssrNode("<button class=\"mt-10 px-12 py-8 shadow-lg rounded-full btn\"" + _vm._ssrStyle(null, `background-color:${_vm.cardProducts.color_btn};color:${_vm.cardProducts.color_icon};`, null) + " data-v-ddff311a>", "</button>", [_c('cart-icon')], 1) : _vm._e()], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template16/_cardProduct/ProductCard.vue?vue&type=template&id=ddff311a&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/_cardProduct/ProductCard.vue?vue&type=script&lang=js&


/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  name: 'Ko16ProductCard',
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    product: {
      type: Object,
      required: true
    },
    cardProducts: {
      type: Object,
      required: true
    },
    settingGeneral: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false,
      estadoCart: false,
      minPrice: '',
      maxPrice: '',
      idSlug: '',
      maxQuantityValue: 0,
      productIndexCart: null,
      productCart: {},
      salesData: null,
      spent: false,
      active: true,
      equalsPrice: false
    };
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore;
    },
    productsCarts() {
      return this.$store.state.productsCart;
    },
    getFreeShipping() {
      let free = true;
      if (this.product.envio_gratis == 1) {
        free = false;
      } else if (this.rangosByCiudad.envio_metodo === 'gratis') {
        free = false;
      }
      return free;
    },
    rangosByCiudad() {
      this.rangosByCiudades = JSON.parse(this.$store.state.envios.valores);
      return this.rangosByCiudades;
    },
    soldOut() {
      if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
        // this.estadoCart = true
        const arrCombinations = this.product.variantes;
        let inventario = 0;
        if (arrCombinations.length && arrCombinations[0].variantes !== '[object Object]') {
          if (arrCombinations[0].combinaciones.length && arrCombinations[0].combinaciones.length) {
            if (JSON.parse(arrCombinations[0].combinaciones[0].combinaciones).length) {
              JSON.parse(arrCombinations[0].combinaciones[0].combinaciones).forEach(item => {
                if (item.unidades) {
                  inventario += parseInt(item.unidades);
                }
              });
            }
          }
        }
        return !inventario;
      } else {
        return !this.product.stock;
      }
    }
  },
  watch: {
    productsCarts() {
      this.getDataProduct();
    }
  },
  mounted() {
    this.idSlug = this.product.id;
    this.productPrice();
    if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
      this.estadoCart = true;
    }
    if (this.product) {
      this.getDataProduct();
    }
  },
  methods: {
    getDataProduct() {
      if (this.product) {
        this.salesData = {
          precio: this.product.precio,
          unidades: this.product.stock,
          sku: this.product.sku,
          estado: true
        };
        this.maxQuantityValue = this.product.stock;
        this.productsCarts.find((productCart, index) => {
          if (productCart.id == this.product.id) {
            this.productIndexCart = index;
            this.productCart = productCart;
            this.maxQuantityValue = this.product.stock - productCart.cantidad;
          }
        });
        if (this.salesData.unidades == 0 || this.maxQuantityValue <= 0 || this.maxQuantityValue == 0) {
          this.spent = true;
        }
      }
    },
    addShoppingCart() {
      if (this.product) {
        this.productIndexCart = null;
        this.getDataProduct();
        if (this.product.id == this.idSlug) {
          let product = {
            id: this.product.id,
            precio: this.product.precio,
            cantidad: 1,
            foto_cloudinary: this.product.foto_cloudinary,
            nombre: this.product.nombre,
            combinacion: undefined,
            envio_gratis: this.product.envio_gratis
          };
          if (this.salesData) {
            product.limitQuantity = this.product.stock;
          } else {
            product.limitQuantity = this.product.stock;
          }
          if (typeof this.productIndexCart === 'number') {
            const mutableProduct = this.$store.state.productsCart[this.productIndexCart];
            mutableProduct.cantidad += 1;
            this.$store.state.productsCart.splice(this.productIndexCart, 1, mutableProduct);
          } else {
            this.$store.state.productsCart.push(product);
          }
          this.$store.commit('UPDATE_CONTENT_CART');
          // this.$router.push('/')
          this.$store.commit('SET_OPEN_ORDER', true);
          // this.$store.state.orderComponent = true
          this.$store.dispatch('SEND_ADD_TO_CART', 1);
        }
      }
    },
    productPrice() {
      if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
        const arrCombinations = this.product.variantes;
        if (arrCombinations.length && arrCombinations[0].variantes !== '[object Object]') {
          this.productVariants = true;
          if (this.product && this.product.combinaciones && this.product.combinaciones.length && this.product.combinaciones.length > 1) {
            let arrPrice = [];
            this.product.combinaciones.find(products => {
              if (products.precio && products.estado) {
                arrPrice.push(products.precio);
              }
            });
            if (arrPrice) {
              let resultPrice = arrPrice.sort(function (prev, next) {
                return prev - next;
              });
              if (resultPrice[resultPrice.length - 1]) {
                this.minPrice = resultPrice[0];
                this.maxPrice = resultPrice[resultPrice.length - 1];
                if (this.minPrice === this.maxPrice) {
                  this.equalsPrice = true;
                } else {
                  this.equalsPrice = false;
                }
              }
            }
          }
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template16/_cardProduct/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _cardProduct_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template16/_cardProduct/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(242)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _cardProduct_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ddff311a",
  "766c91bb"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_ProductListFilter_vue_vue_type_style_index_0_id_3e34c7d9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(436);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_ProductListFilter_vue_vue_type_style_index_0_id_3e34c7d9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_ProductListFilter_vue_vue_type_style_index_0_id_3e34c7d9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_ProductListFilter_vue_vue_type_style_index_0_id_3e34c7d9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_ProductListFilter_vue_vue_type_style_index_0_id_3e34c7d9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container-product-max-w[data-v-3e34c7d9]{max-width:1300px}.container-product-max-w[data-v-3e34c7d9],.product-content[data-v-3e34c7d9]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.product-content[data-v-3e34c7d9]{background:var(--background_color_1);padding-bottom:80px}.content-banner-shop[data-v-3e34c7d9],.content-banner-shop-r[data-v-3e34c7d9]{display:flex;flex-direction:column;width:100%}.content-banner-shop-r[data-v-3e34c7d9]{align-items:flex-start;justify-content:flex-start}.content-left[data-v-3e34c7d9] .el-collapse{border-bottom:1px solid var(--color_border);border-top:1px solid var(--color_border);width:100%}.content-left[data-v-3e34c7d9] .el-collapse-item__wrap{background-color:transparent;border-bottom:1px solid var(--color_border);will-change:height}.content-left[data-v-3e34c7d9] .el-collapse-item__header{background-color:transparent;border-bottom:1px solid var(--color_border);color:var(--color_subCategories);font-family:var(--font-style-1)!important;font-size:15px;font-weight:600}.content-left[data-v-3e34c7d9] .el-collapse-item__header.is-active{border-bottom:none}.content-left[data-v-3e34c7d9] .el-collapse-item__arrow{color:var(--color_icon)}.input-slide[data-v-3e34c7d9]{background:transparent;border-style:none;color:var(--color_categories);cursor:pointer;font-family:var(--font-style-1)!important;font-size:15px;height:30px;width:100%}.value-range-slide[data-v-3e34c7d9]{width:100%}.value-range-slide[data-v-3e34c7d9],.values-prices[data-v-3e34c7d9]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.values-prices[data-v-3e34c7d9]{width:80%}.value-price[data-v-3e34c7d9]{color:#717171;cursor:default;font-family:var(--font-style-1)!important;font-size:14px;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:auto}.value-precio-change[data-v-3e34c7d9]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.price[data-v-3e34c7d9]{color:#2d2a2a;cursor:default;flex-direction:row;font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;justify-content:flex-start;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn-slider[data-v-3e34c7d9],.price[data-v-3e34c7d9]{align-items:center;display:flex}.btn-slider[data-v-3e34c7d9]{justify-content:center;width:30%}.btn-items-left[data-v-3e34c7d9]{align-items:center;background-color:#ededed;border-radius:35px;cursor:pointer;display:flex;font-family:var(--font-style-1)!important;font-size:12px;font-weight:600;justify-content:center;letter-spacing:.3px;padding:10px 14px;text-align:center;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn-items-left[data-v-3e34c7d9]:hover{background-color:#e5e5e5}.content-items-categorias[data-v-3e34c7d9]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.content-items-categorias-text[data-v-3e34c7d9]{display:flex;flex-direction:row;width:100%}.text-categorias[data-v-3e34c7d9]{color:#333;cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:600;margin-right:6px;width:auto}.separator-breadCrumbs[data-v-3e34c7d9],.text-categorias[data-v-3e34c7d9]{font-family:var(--font-style-1)!important}.separator-breadCrumbs[data-v-3e34c7d9]{color:#8e8e8e;cursor:pointer;font-size:14px;margin-left:6px;margin-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:auto}.product-stock-text[data-v-3e34c7d9]{color:#8e8e8e;font-size:14px;font-weight:600}.product-stock-active[data-v-3e34c7d9],.product-stock-text[data-v-3e34c7d9]{font-family:var(--font-style-1)!important}.product-stock-active[data-v-3e34c7d9]{color:#000;font-size:15px;font-weight:600}.text-categorias-select[data-v-3e34c7d9]{color:#8e8e8e;cursor:pointer;display:flex;flex-direction:row;font-family:var(--font-style-1)!important;font-size:14px;font-weight:400;margin-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.top-content[data-v-3e34c7d9]{align-items:center;display:flex;flex-wrap:wrap;font-size:100%;justify-content:space-between;margin-bottom:20px;max-width:100%;width:100%}.categorys-list[data-v-3e34c7d9],.subcategory-list[data-v-3e34c7d9]{grid-gap:1rem;align-items:center;display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr));justify-content:flex-start;width:100%}.subcategory-list[data-v-3e34c7d9]{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-category-left[data-v-3e34c7d9]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.txt-Filter[data-v-3e34c7d9]{align-items:center;color:var(--color_categories);cursor:pointer;display:flex;flex-direction:row;font-family:var(--font-style-1)!important;font-size:15px;font-weight:400;justify-content:flex-start;line-height:1.3;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-Filter[data-v-3e34c7d9]:hover{color:#eb7025}.txt-categorys[data-v-3e34c7d9]{align-items:center;color:var(--color_categories);cursor:pointer;display:flex;flex-direction:row;font-family:var(--font-style-1)!important;font-size:15px;font-weight:400;justify-content:flex-start;line-height:1.3;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-categorys[data-v-3e34c7d9]:hover{color:#eb7025}.txt-categorys-active[data-v-3e34c7d9]{align-items:center;color:#eb7025;cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:600;justify-content:flex-start;padding-right:1px;width:100%}.txt-categorys-active[data-v-3e34c7d9],.txt-categorys:hover .rounded-list[data-v-3e34c7d9]{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-categorys:hover .rounded-list[data-v-3e34c7d9]{background-color:#eb7025}.rounded-list[data-v-3e34c7d9]{background-color:#e5e5e5;border-radius:100px;height:10px;margin-right:10px;width:10px}.rounded-list[data-v-3e34c7d9],.txt-rounded-list-active[data-v-3e34c7d9]{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-rounded-list-active[data-v-3e34c7d9]{background-color:#eb7025}.product-stock[data-v-3e34c7d9]{color:#333;cursor:pointer;font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;margin-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.show-view-per-list[data-v-3e34c7d9]{align-items:center;justify-content:center;width:auto}.show[data-v-3e34c7d9]{cursor:pointer;margin-top:4px;width:100%}.show-icon[data-v-3e34c7d9]{fill:var(--color_icon);padding:3px}.show-icon-active[data-v-3e34c7d9]{fill:var(--color_icon);background-color:transparent}.show-icon[data-v-3e34c7d9]:hover{fill:#000;background-color:#f8f8f8}.show:focus .show-icon[data-v-3e34c7d9]{fill:#000}.items-end[data-v-3e34c7d9]{align-items:center;flex-direction:row}.items-end[data-v-3e34c7d9],.tittle-banner-shop[data-v-3e34c7d9]{display:flex;justify-content:flex-start;width:100%}.tittle-banner-shop[data-v-3e34c7d9]{align-items:flex-start;flex-direction:column}.btn-tittle-shop[data-v-3e34c7d9]{align-items:flex-start;color:var(--color_subCategories);font-family:var(--font-style-1)!important;font-weight:600;justify-content:flex-start;text-transform:uppercase}.product-text[data-v-3e34c7d9]{display:flex;flex-direction:column;width:100%}.product-content-items[data-v-3e34c7d9],.product-text[data-v-3e34c7d9]{align-items:center;justify-content:center}.product-content-items[data-v-3e34c7d9]{gap:1rem;text-align:center}.producto-items-content[data-v-3e34c7d9]{width:100%}.content-item[data-v-3e34c7d9]{flex-direction:row;margin-bottom:40px}.content-item[data-v-3e34c7d9],.content-item-productos[data-v-3e34c7d9]{align-items:center;display:flex;justify-content:center;width:100%}.content-item-productos[data-v-3e34c7d9]{flex-direction:column}.content-products[data-v-3e34c7d9],.content-products-empty[data-v-3e34c7d9]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-products-empty[data-v-3e34c7d9]{min-height:200px;text-align:center}.txt-products-empty[data-v-3e34c7d9]{color:#3f3f3f;font-family:var(--font-style-1)!important;font-size:20px;font-weight:600;margin-top:6px}.pagination-medium[data-v-3e34c7d9]{background:transparent;margin-top:50px}.pagination[data-v-3e34c7d9]{background:transparent;color:#222;font-size:18px}.product_pagination[data-v-3e34c7d9] .el-pagination.is-background .btn-next,.product_pagination[data-v-3e34c7d9] .el-pagination.is-background .btn-prev,.product_pagination[data-v-3e34c7d9] .el-pagination.is-background .el-pager li{background-color:transparent;color:#222}.product_pagination[data-v-3e34c7d9] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-3e34c7d9] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-3e34c7d9] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--color_pagination)}.product_pagination[data-v-3e34c7d9] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--color_pagination);color:#fff}.product-stock[data-v-3e34c7d9]{cursor:default}.product-list[data-v-3e34c7d9]{width:100%}@media (min-width:300px){.product-content-items[data-v-3e34c7d9]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));width:100%}.btn-tittle-shop[data-v-3e34c7d9]{font-size:16px;margin-bottom:10px}.content-shop-items[data-v-3e34c7d9]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;padding-left:10px;padding-right:10px;width:100%}.content-left[data-v-3e34c7d9]{display:none}.content-right[data-v-3e34c7d9]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.top-content[data-v-3e34c7d9]{display:none}.content-items-categorias-text[data-v-3e34c7d9]{align-items:center;justify-content:center}.text-categorias-select[data-v-3e34c7d9]{width:auto}.content-banner-shop[data-v-3e34c7d9]{align-items:flex-start;justify-content:flex-start;margin-bottom:8px;margin-top:8px;padding-left:20px}.bannerProduct[data-v-3e34c7d9]{display:none}.content-home[data-v-3e34c7d9]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.txt-content-home[data-v-3e34c7d9]{color:var(--color_subCategories);cursor:pointer;font-family:var(--font-style-1)!important;font-size:16px;font-weight:600;line-height:1.1;padding-bottom:20px;padding-top:20px;text-transform:uppercase;width:auto}.txt-content-home[data-v-3e34c7d9]:hover{color:#000}}@media (min-width:440px){.product-content-items[data-v-3e34c7d9]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:768px){.btn-tittle-shop[data-v-3e34c7d9]{font-size:36px;margin-bottom:0}.content-shop-items[data-v-3e34c7d9]{padding-left:20px;padding-right:20px;width:100%}.bannerProduct[data-v-3e34c7d9]{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:cover;border-bottom-width:1px;border-color:var(--color_border);display:flex;justify-items:center;padding-bottom:20px;padding-top:20px;width:100%}.product-content-items[data-v-3e34c7d9]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1024px){.product-text[data-v-3e34c7d9]{width:100%}.product-content-items[data-v-3e34c7d9]{grid-gap:2rem;display:grid;gap:2rem;grid-template-columns:repeat(2,minmax(0,1fr))}.content-items-categorias-text[data-v-3e34c7d9]{align-items:center;justify-content:flex-start}.items-end[data-v-3e34c7d9]{display:flex;padding-bottom:20px}.show-view-per-list[data-v-3e34c7d9]{grid-gap:0;align-items:center;display:grid;gap:0;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:center;width:auto}.btn-tittle-shop[data-v-3e34c7d9]{font-size:20px}.top-content[data-v-3e34c7d9]{border-bottom:1px solid var(--color_border);display:flex;padding-bottom:5px;padding-top:0}.content-left[data-v-3e34c7d9]{align-items:flex-start;border-color:var(--color_border);border-width:1px;display:flex;flex-direction:column;justify-content:space-between;margin-right:20px;padding-left:10px;padding-right:10px;position:sticky;top:163px;width:300px}.content-banner-shop[data-v-3e34c7d9]{display:none}.content-banner-shop-r[data-v-3e34c7d9]{display:flex;padding-bottom:40px}.content-shop-items[data-v-3e34c7d9]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;margin-top:40px;width:100%}.hidd[data-v-3e34c7d9]{display:none}}@media (min-width:1280px){.product-content[data-v-3e34c7d9]{margin-top:0}.content-left[data-v-3e34c7d9]{width:400px}.product-content-items[data-v-3e34c7d9]{grid-gap:.5rem;display:grid;gap:.5rem;grid-template-columns:repeat(3,minmax(0,1fr))}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template16-ko16-product-list-filter.js.map