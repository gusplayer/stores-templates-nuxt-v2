exports.ids = [105];
exports.modules = {

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/Ko-ProductListFilter.vue?vue&type=template&id=62e523e0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate14 ? _c('div', {
    staticClass: "w-full pb-80 flex flex-col justify-center items-center product-content",
    style: [_vm.settingByTemplate14[0].settingsGeneral, _vm.settingByTemplate14[0].listProductsFilter]
  }, [_vm._ssrNode("<div class=\"w-full flex flex-col items-center justify-center\" data-v-62e523e0>", "</div>", [_vm._ssrNode("<div class=\"w-full relative box-content hidden md:flex\" data-v-62e523e0>", "</div>", [_vm.settingByTemplate14[0].listProductsFilter.visible_img ? _vm._ssrNode("<div data-v-62e523e0>", "</div>", [_vm._ssrNode("<picture data-v-62e523e0>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.settingByTemplate14[0].listProductsFilter.img, 'bannerRes', 400)) + " data-v-62e523e0> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.settingByTemplate14[0].listProductsFilter.img, 'banner')) + " data-v-62e523e0> "), _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.settingByTemplate14[0].listProductsFilter.img,
      expression: "settingByTemplate14[0].listProductsFilter.img"
    }],
    staticClass: "object-cover h-full",
    attrs: {
      "alt": "banner template14"
    }
  }, [])], 2)]) : _vm._ssrNode("<div class=\"w-full h-[240px]\" data-v-62e523e0></div>"), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"absolute top-2/5 lg:top-3/0 mlg:top-4/0 left-4/7 flex flex-col items-center\" data-v-62e523e0>", "</div>", [_vm._ssrNode("<p class=\"font-bold text-30 mb-10\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate14[0].listProductsFilter.color_title};`, null) + " data-v-62e523e0>" + _vm._ssrEscape("\n          " + _vm._s(_vm.settingByTemplate14[0].listProductsFilter.title) + "\n        ") + "</p> "), _vm._ssrNode("<div class=\"flex flex-row items-center justify-center\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate14[0].listProductsFilter.color_breadCrumbs};`, null) + " data-v-62e523e0>", "</div>", [_c('nuxt-link', {
    staticClass: "text-14",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('header_inicio')) + "\n          ")]), _vm._ssrNode(" <p class=\"px-10 text-14 font-bold\" data-v-62e523e0>&gt;</p> <p class=\"text-14 font-bold\" data-v-62e523e0>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('header_productos')) + "\n          ") + "</p>")], 2)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"w-full h-full flex flex-row justify-start items-start px-10 md:px-5 mt-40 max-w-7xl\" data-v-62e523e0>", "</div>", [_vm._ssrNode("<div class=\"w-full h-full flex flex-col justify-center items-center mr-0 md:mr-20\" data-v-62e523e0>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-row justify-between items-center pb-25\" data-v-62e523e0>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-col justify-start items-start\" data-v-62e523e0>" + (!_vm.nameCategoryHeader ? "<p class=\"font-semibold uppercase justify-start items-start\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate14[0].listProductsFilter['--color_subCategories']};`, null) + " data-v-62e523e0>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('header_productos')) + "\n            ") + "</p>" : "<div class=\"flex flex-col justify-start\" data-v-62e523e0><p class=\"font-semibold uppercase justify-start items-start\" data-v-62e523e0>" + _vm._ssrEscape("\n                " + _vm._s(_vm.nameCategoryHeader) + "\n              ") + "</p> <div class=\"flex flex-row\" data-v-62e523e0>" + (_vm.nameSubCategoryHeader ? "<p class=\"text-12 mr-4\" data-v-62e523e0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.nameSubCategoryHeader) + "\n                ") + "</p>" : "<!---->") + " " + (_vm.nameSubCategoryHeader && _vm.etiqueta1 ? "<p class=\"text-12 mr-4\" data-v-62e523e0>\n                  /\n                </p>" : "<!---->") + " " + (_vm.etiqueta1 ? "<p class=\"text-12\" data-v-62e523e0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.etiqueta1) + "\n                ") + "</p>" : "<!---->") + " " + (_vm.etiqueta2 ? "<p class=\"ml-4 text-12\" data-v-62e523e0>" + _vm._ssrEscape("/ " + _vm._s(_vm.etiqueta2)) + "</p>" : "<!---->") + "</div></div>") + " " + (_vm.etiqueta1 && _vm.nameCategoryHeader == '' && _vm.nameSubCategoryHeader == '' ? "<div class=\"flex flex-col justify-start\" data-v-62e523e0><p class=\"text-12\" data-v-62e523e0>" + _vm._ssrEscape("\n                " + _vm._s(_vm.etiqueta1) + "\n              ") + "</p></div>" : "<!---->") + "</div> "), _c('filterOutLine-icon', {
    staticClass: "flex md:hidden text-25",
    on: {
      "click": _vm.openMenuLateral
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"w-full h-full flex flex-col justify-center items-center\" data-v-62e523e0>", "</div>", [_vm._ssrNode("<div class=\"w-full grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center text-center\" data-v-62e523e0>", "</div>", _vm._l(_vm.filterProduct, function (product) {
    return _vm._ssrNode("<div class=\"w-full h-full flex flex-col justify-center items-center\" data-v-62e523e0>", "</div>", [_c('Ko14ProductCard', {
      staticClass: "w-full",
      attrs: {
        "product": product,
        "card-products": _vm.settingByTemplate14[0].cardProducts,
        "setting-general": _vm.settingByTemplate14[0].settingsGeneral
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm.fullProducts.length == 0 ? _vm._ssrNode("<div class=\"w-full h-full flex flex-col justify-center items-center text-center\" data-v-62e523e0>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/productos"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${_vm.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n                  `${$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n                "
    }],
    staticClass: "max-w-[150px] max-h-[150px]",
    attrs: {
      "width": "150",
      "alt": "LogoStore img"
    },
    on: {
      "click": _vm.clear
    }
  })]), _vm._ssrNode(" <p class=\"my-15 font-semibold text-20 text-gray-600\" data-v-62e523e0>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('home_msgCatalogo')) + "\n            ") + "</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.fullProducts.length > _vm.numVistas ? _vm._ssrNode("<div class=\"w-full flex justify-center items-center wrapper_pagination mt-20\" data-v-62e523e0>", "</div>", [_c('el-pagination', {
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
  })], 1) : _vm._e()], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"hidden mr-30 md:flex flex-col justify-between items-start sticky w-full max-w-[250px] lg:max-w-[300px] transition-all ease-in duration-0.3 content-left\" style=\"top: 140px\" data-v-62e523e0>", "</div>", [_vm._ssrNode("<button class=\"w-full flex justify-between items-center pb-10 uppercase font-semibold cursor-pointer text-16 my-5\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate14[0].listProductsFilter['--color_subCategories']};`, null) + " data-v-62e523e0>", "</button>", [_vm._ssrNode(_vm._ssrEscape("\n          " + _vm._s(_vm.$t('header_buscar_limpiar')) + "\n          ")), _c('close-icon', {
    staticClass: "color_icon"
  })], 2), _vm._ssrNode(" "), _c('el-collapse', {
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
  })]), _vm._v(" "), _c('el-collapse-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.categorias.length > 0,
      expression: "categorias.length > 0"
    }],
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
  }), 0)]), _vm._v(" "), _c('el-collapse-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showSubCategory && _vm.selectedSubcategories.length,
      expression: "showSubCategory && selectedSubcategories.length"
    }],
    attrs: {
      "title": _vm.$t('home_subcategory'),
      "name": "3"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showSubCategory && _vm.selectedSubcategories.length,
      expression: "showSubCategory && selectedSubcategories.length"
    }],
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
  }), 0)]), _vm._v(" "), _vm._l(_vm.allTags, function (itemsTags, index) {
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
  }), _vm._v(" "), _c('el-collapse-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.stateShipping,
      expression: "!stateShipping"
    }],
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
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_Singratis')) + "\n              ")])])]), _vm._v(" "), _c('el-collapse-item', {
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
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_fprecioM')) + "\n              ")])])])], 2)], 2)], 2)], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/Ko-ProductListFilter.vue?vue&type=template&id=62e523e0&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// EXTERNAL MODULE: ./mixins/filterProducts.js
var filterProducts = __webpack_require__(50);

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/Ko-ProductListFilter.vue?vue&type=script&lang=js&



/* harmony default export */ var Ko_ProductListFiltervue_type_script_lang_js_ = ({
  name: 'Ko14ProductListFilter',
  components: {
    Ko14ProductCard: () => __webpack_require__.e(/* import() */ 356).then(__webpack_require__.bind(null, 1058))
  },
  mixins: [filterProducts["a" /* default */], idCloudinary["a" /* default */]],
  props: {
    dataStore: Object,
    settingByTemplate14: Array,
    fullProducts: Array,
    allTags: Array
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
    ...Object(external_vuex_["mapState"])(['searchValue', 'previousPage']),
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
      } else if (this.$route.fullPath === '/') {
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
// CONCATENATED MODULE: ./components/template14/Ko-ProductListFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template14_Ko_ProductListFiltervue_type_script_lang_js_ = (Ko_ProductListFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/Ko-ProductListFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(718)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template14_Ko_ProductListFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "62e523e0",
  "1fe4e236"
  
)

/* harmony default export */ var Ko_ProductListFilter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(719);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7ab6382b", content, true, context)
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

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_62e523e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(408);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_62e523e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_62e523e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_62e523e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_62e523e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-content[data-v-62e523e0]{background:var(--background_color_1)}.content-left[data-v-62e523e0] .el-collapse{border-bottom:1px solid var(--color_border);border-top:1px solid var(--color_border);width:100%}.content-left[data-v-62e523e0] .el-collapse-item__wrap{background-color:transparent;border-bottom:1px solid var(--color_border);will-change:height}.content-left[data-v-62e523e0] .el-collapse-item__header{background-color:transparent;border-bottom:1px solid var(--color_border);color:var(--color_subCategories);font-size:15px;font-weight:600}.content-left[data-v-62e523e0] .el-collapse-item__header.is-active{border-bottom:none}.content-left[data-v-62e523e0] .el-collapse-item__arrow{color:var(--color_icon)}.input-slide[data-v-62e523e0]{background:transparent;border-style:none;color:var(--color_categories);cursor:pointer;font-size:15px;height:30px;width:100%}.categorys-list[data-v-62e523e0],.subcategory-list[data-v-62e523e0]{grid-gap:1rem;align-items:center;display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr));justify-content:flex-start;width:100%}.subcategory-list[data-v-62e523e0],.txt-Filter[data-v-62e523e0]{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-Filter[data-v-62e523e0]{align-items:center;color:var(--color_categories);cursor:pointer;display:flex;flex-direction:row;font-size:15px;font-weight:400;justify-content:flex-start;line-height:1.3;padding-right:1px;width:100%}.txt-Filter[data-v-62e523e0]:hover{color:#eb7025}.txt-categorys[data-v-62e523e0]{align-items:center;color:var(--color_categories);cursor:pointer;display:flex;flex-direction:row;font-size:15px;font-weight:400;justify-content:flex-start;line-height:1.3;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.color_icon[data-v-62e523e0]{color:var(--color_icon)}.txt-categorys[data-v-62e523e0]:hover{color:#eb7025}.pagination[data-v-62e523e0]{background:transparent;color:var(--color_pagination);font-size:18px}.wrapper_pagination[data-v-62e523e0] .el-pagination.is-background .btn-next,.wrapper_pagination[data-v-62e523e0] .el-pagination.is-background .btn-prev,.wrapper_pagination[data-v-62e523e0] .el-pagination.is-background .el-pager li{background-color:transparent;color:var(--color_pagination)}.wrapper_pagination[data-v-62e523e0] .el-pagination.is-background .btn-next:hover,.wrapper_pagination[data-v-62e523e0] .el-pagination.is-background .btn-prev:hover,.wrapper_pagination[data-v-62e523e0] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--color_pagination)}.wrapper_pagination[data-v-62e523e0] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--color_pagination);color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template14-ko-product-list-filter.js.map