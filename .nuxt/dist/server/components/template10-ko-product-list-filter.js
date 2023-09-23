exports.ids = [43];
exports.modules = {

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko-ProductListFilter.vue?vue&type=template&id=1b1dd096&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product-content",
    style: [_vm.settingByTemplate10[0].settingGeneral, _vm.settingByTemplate10[0].productListFilter, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate10[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.settingGeneral) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.fount_1) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Roboto'
    }]
  }, [_vm._ssrNode("<div id=\"BgProductlistF10\" class=\"bannerProduct\" data-v-1b1dd096>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-1b1dd096>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-1b1dd096>/</p> <p class=\"txt-crumb s2\" data-v-1b1dd096>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('header_productos')) + "\n      ") + "</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container-product-max-w\" data-v-1b1dd096>", "</div>", [_vm._ssrNode("<div class=\"content-shop-items\" data-v-1b1dd096>", "</div>", [_vm._ssrNode("<div class=\"content-left\" data-v-1b1dd096>", "</div>", [_c('nuxt-link', {
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
    }, [_c('span', {
      staticClass: "rounded-list",
      class: categorys.id == _vm.indexSelect ? 'txt-rounded-list-active' : ''
    }), _vm._v("\n                    " + _vm._s(categorys.nombre_categoria_producto) + "\n                  ")])])]);
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
    }, [_c('span', {
      staticClass: "rounded-list",
      class: subcategorys.id == _vm.indexSelect2 ? 'txt-rounded-list-active' : ''
    }), _vm._v("\n                    " + _vm._s(subcategorys.nombre_subcategoria) + "\n                  ")])])]);
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
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_fprecioM')) + "\n              ")])])])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-right\" data-v-1b1dd096>", "</div>", [_c('nuxt-link', {
    staticClass: "content-home hidd",
    attrs: {
      "to": "/productos"
    }
  }, [_c('p', {
    staticClass: "txt-content-home",
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('header_inicio')) + "\n          ")])]), _vm._ssrNode(" <div class=\"empty hidd\" data-v-1b1dd096></div> <div class=\"content-banner-shop-r\" data-v-1b1dd096><div class=\"tittle-banner-shop\" data-v-1b1dd096>" + (!_vm.nameCategoryHeader ? "<p class=\"btn-tittle-shop\" data-v-1b1dd096>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('header_productos')) + "\n            ") + "</p>" : "<div class=\"flex flex-col justify-start\" data-v-1b1dd096><p class=\"btn-tittle-shop\" data-v-1b1dd096>" + _vm._ssrEscape("\n                " + _vm._s(_vm.nameCategoryHeader) + "\n              ") + "</p> <div class=\"flex flex-row\" data-v-1b1dd096>" + (_vm.nameSubCategoryHeader ? "<p class=\"text-12 mr-4\" data-v-1b1dd096>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.nameSubCategoryHeader) + "\n                ") + "</p>" : "<!---->") + " " + (_vm.nameSubCategoryHeader && _vm.etiqueta1 ? "<p class=\"text-12 mr-4\" data-v-1b1dd096>\n                  /\n                </p>" : "<!---->") + " " + (_vm.etiqueta1 ? "<p class=\"text-12\" data-v-1b1dd096>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.etiqueta1) + "\n                ") + "</p>" : "<!---->") + " " + (_vm.etiqueta2 ? "<p class=\"ml-4 text-12\" data-v-1b1dd096>" + _vm._ssrEscape("/ " + _vm._s(_vm.etiqueta2)) + "</p>" : "<!---->") + "</div></div>") + " " + (_vm.etiqueta1 && _vm.nameCategoryHeader == '' && _vm.nameSubCategoryHeader == '' ? "<div class=\"flex flex-col justify-start\" data-v-1b1dd096>" + (_vm.etiqueta1 ? "<p class=\"text-12\" data-v-1b1dd096>" + _vm._ssrEscape("\n                " + _vm._s(_vm.etiqueta1) + "\n              ") + "</p>" : "<!---->") + "</div>" : "<!---->") + "</div></div> <div class=\"top-content\" data-v-1b1dd096><div class=\"content-items-categorias\" data-v-1b1dd096><div class=\"items-end\" data-v-1b1dd096><div class=\"show-view-per-list\" data-v-1b1dd096><button class=\"show\" data-v-1b1dd096><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"30px\" height=\"30px\" viewBox=\"0 0 24 24\"" + _vm._ssrClass("show-icon", _vm.indexShowList == 3 ? 'show-icon-active' : '') + " data-v-1b1dd096><path d=\"M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z\" data-v-1b1dd096></path></svg></button> <button class=\"show\" data-v-1b1dd096><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"30px\" height=\"30px\" viewBox=\"0 0 24 24\"" + _vm._ssrClass("show-icon", _vm.indexShowList == 1 ? 'show-icon-active' : '') + " data-v-1b1dd096><path d=\"M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z\" data-v-1b1dd096></path></svg></button></div></div></div></div> "), _vm._ssrNode("<div id=\"section\" class=\"producto-items-content\" data-v-1b1dd096>", "</div>", [_vm._ssrNode("<div class=\"content-item\" data-v-1b1dd096>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-1b1dd096>", "</div>", [_vm._ssrNode("<div id=\"grid-selection10\" class=\"product-conten-items\" data-v-1b1dd096>", "</div>", _vm._l(_vm.filterProduct, function (product) {
    return _vm._ssrNode("<div class=\"content-products\" data-v-1b1dd096>", "</div>", [!_vm.showInList ? _c('KoProductCardFilter', {
      staticClass: "product-list",
      attrs: {
        "product": product,
        "card-product": _vm.settingByTemplate10[0].cardProduct,
        "setting-general": _vm.settingByTemplate10[0].settingGeneral
      }
    }) : _vm._e(), _vm._ssrNode(" "), _vm.showInList ? _c('KoProductCardFilerList', {
      staticClass: "product-list",
      attrs: {
        "product": product,
        "card-product": _vm.settingByTemplate10[0].cardProduct,
        "setting-general": _vm.settingByTemplate10[0].settingGeneral
      }
    }) : _vm._e()], 2);
  }), 0), _vm._ssrNode(" "), _vm.fullProducts.length == 0 ? _vm._ssrNode("<div class=\"content-products-empty\" data-v-1b1dd096>", "</div>", [_vm._ssrNode("<div class=\"header-content-logo\" data-v-1b1dd096>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/productos"
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
  })])], 1), _vm._ssrNode(" <p class=\"txt-products-empty\" data-v-1b1dd096>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-1b1dd096>", "</div>", [_vm.fullProducts.length > _vm.numVistas ? _vm._ssrNode("<div class=\"product_pagination\" data-v-1b1dd096>", "</div>", [_c('el-pagination', {
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
  })], 1) : _vm._e()])], 2)])])], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/Ko-ProductListFilter.vue?vue&type=template&id=1b1dd096&scoped=true&

// EXTERNAL MODULE: ./mixins/filterProducts.js
var filterProducts = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko-ProductListFilter.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_ProductListFiltervue_type_script_lang_js_ = ({
  name: 'Ko10ProductListFilter',
  components: {
    KoProductCardFilter: () => __webpack_require__.e(/* import() */ 51).then(__webpack_require__.bind(null, 97)),
    KoProductCardFilerList: () => __webpack_require__.e(/* import() */ 52).then(__webpack_require__.bind(null, 1260))
  },
  mixins: [filterProducts["a" /* default */]],
  props: {
    settingByTemplate10: {
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
      showInList: false,
      showSubCategory: false,
      stateSub: false,
      search: '',
      currentPage: 1,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexSelect: '',
      indexSelect2: '',
      indexShowList: 3,
      indexShowView: 3,
      numVistas: 15,
      stateShipping: false,
      activeNames: ['1', '2', '3', '4', '5']
    };
  },
  computed: {
    categorias() {
      return this.dataStore.categorias;
    },
    subcategories() {
      return this.dataStore.subcategorias;
    },
    getProductsCategorie() {
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
    settingByTemplate10() {
      this.setBg();
    },
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
    this.setOptionShipping();
    this.setBg();
    this.getQuery();
    if (this.previousPage) {
      this.currentPage = this.previousPage;
    }
  },
  methods: {
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
    setBg() {
      if (this.settingByTemplate10) {
        if (!this.mobileCheck()) {
          var imagen = document.getElementById('BgProductlistF10');
          if (this.settingByTemplate10 && this.settingByTemplate10[0] && this.settingByTemplate10[0].productListFilter && this.settingByTemplate10[0].productListFilter.visible_bg) {
            if (this.settingByTemplate10[0].productListFilter.url_img_bg) {
              imagen.style.backgroundImage = `url(${this.settingByTemplate10[0].productListFilter.url_img_bg})`;
            } else {
              imagen.style.backgroundImage = `url(https://res.cloudinary.com/brahyanr10/image/upload/v1614233821/Temp10/Productos/bg-beagrumb_gxvk1i.jpg)`;
            }
          } else {
            imagen.style.backgroundImage = '';
          }
        }
      }
    },
    mobileCheck() {
      window.mobilecheck = function () {
        var check = false;
        (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
      };
      return window.mobilecheck();
    },
    showList() {
      this.indexShowList = 1;
      this.showInList = true;
      var gridSelector = document.getElementById('grid-selection10');
      if (gridSelector) {
        gridSelector.setAttribute('style', 'grid-template-columns: repeat(1, minmax(0, 1fr))');
      }
    },
    showGrid3() {
      this.indexShowList = 3;
      this.showInList = false;
      var gridSelector = document.getElementById('grid-selection10');
      if (gridSelector) {
        gridSelector.setAttribute('style', 'grid-template-columns: repeat(3, minmax(0, 1fr))');
      }
    },
    SendSubCategory(value) {
      this.$store.commit('products/SET_PAYLOAD_TAG', '');
      this.$store.commit('products/SET_PAYLOAD_TAG2', '');
      this.stateSub = false;
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
      this.stateSub = true;
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
          this.toggleCategories = false;
          this.selectedSubcategories.push(subcategory);
        }
      });
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto
      });
    },
    breadcrumbsSendCategory(value) {
      this.stateSub = true;
      let filtradoCategories = this.categorias.find(element => {
        if (element.nombre_categoria_producto == value) {
          return element;
        }
      });
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: filtradoCategories.nombre_categoria_producto
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
      this.showSubCategory = false;
      this.selectedSubcategories = [];
      this.nameCategory = '';
    }
  }
});
// CONCATENATED MODULE: ./components/template10/Ko-ProductListFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template10_Ko_ProductListFiltervue_type_script_lang_js_ = (Ko_ProductListFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/Ko-ProductListFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(659)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template10_Ko_ProductListFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1b1dd096",
  "187f95ba"
  
)

/* harmony default export */ var Ko_ProductListFilter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(660);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3649efe4", content, true, context)
};

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

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_1b1dd096_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_1b1dd096_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_1b1dd096_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_1b1dd096_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_1b1dd096_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container-product-max-w[data-v-1b1dd096]{max-width:1400px}.container-product-max-w[data-v-1b1dd096],.product-content[data-v-1b1dd096]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.product-content[data-v-1b1dd096]{background:var(--background_color_1);padding-bottom:80px}.content-banner-shop-r[data-v-1b1dd096]{align-items:flex-start;justify-content:flex-start}.content-banner-shop-r[data-v-1b1dd096],.content-input-slide[data-v-1b1dd096]{display:flex;flex-direction:column;width:100%}.content-input-slide[data-v-1b1dd096]{align-items:center;justify-content:center}.content-left[data-v-1b1dd096] .el-collapse{border-bottom:1px solid var(--border);border-top:1px solid var(--border);width:100%}.content-left[data-v-1b1dd096] .el-collapse-item__wrap{background-color:transparent;border-bottom:1px solid var(--border);margin-left:10px;will-change:height}.content-left[data-v-1b1dd096] .el-collapse-item__header{background-color:transparent;border-bottom:1px solid var(--border);color:var(--color_text);font-family:var(--font-style-1)!important;font-size:16px;font-weight:600;text-transform:uppercase}.content-left[data-v-1b1dd096] .el-collapse-item__header.is-active{border-bottom:none}.content-left[data-v-1b1dd096] .el-collapse-item__arrow{color:var(--color_icon)}.input-slide[data-v-1b1dd096]{background:transparent;border-style:none;cursor:pointer;height:30px;width:100%}.input-slide[data-v-1b1dd096],.txt-tittles[data-v-1b1dd096]{font-family:var(--font-style-1)!important}.txt-tittles[data-v-1b1dd096]{color:var(--color_text);cursor:pointer;font-size:15px;font-weight:600;letter-spacing:0;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-tittles[data-v-1b1dd096],.value-range-slide[data-v-1b1dd096]{align-items:center;display:flex;justify-content:flex-start;width:100%}.value-range-slide[data-v-1b1dd096],.values-prices[data-v-1b1dd096]{flex-direction:row}.values-prices[data-v-1b1dd096]{align-items:center;display:flex;justify-content:flex-start;width:80%}.value-price[data-v-1b1dd096]{color:#717171;cursor:default;font-family:var(--font-style-1)!important;font-size:14px;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:auto}.value-precio-change[data-v-1b1dd096]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.price[data-v-1b1dd096]{color:#2d2a2a;cursor:default;flex-direction:row;font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;justify-content:flex-start;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn-slider[data-v-1b1dd096],.price[data-v-1b1dd096]{align-items:center;display:flex}.btn-slider[data-v-1b1dd096]{justify-content:center;width:30%}.btn-items-left[data-v-1b1dd096]{align-items:center;background-color:#ededed;border-radius:35px;cursor:pointer;display:flex;font-family:var(--font-style-1)!important;font-size:12px;font-weight:600;justify-content:center;letter-spacing:.3px;padding:10px 14px;text-align:center;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.btn-items-left[data-v-1b1dd096]:hover{background-color:#e5e5e5}.content-items-categorias[data-v-1b1dd096]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.content-items-categorias-text[data-v-1b1dd096]{display:flex;flex-direction:row;width:100%}.text-categorias[data-v-1b1dd096]{color:#333;cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:600;margin-right:6px;width:auto}.text-categorias[data-v-1b1dd096],.txt-Filter[data-v-1b1dd096]{font-family:var(--font-style-1)!important}.txt-Filter[data-v-1b1dd096]{align-items:center;color:var(--color_subtext);cursor:pointer;display:flex;flex-direction:row;font-size:15px;font-weight:400;justify-content:flex-start;line-height:1.3;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-Filter[data-v-1b1dd096]:hover{color:#eb7025}.separator-breadCrumbs[data-v-1b1dd096]{color:#8e8e8e;cursor:pointer;font-size:14px;margin-left:6px;margin-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:auto}.product-stock-text[data-v-1b1dd096],.separator-breadCrumbs[data-v-1b1dd096]{font-family:var(--font-style-1)!important}.product-stock-text[data-v-1b1dd096]{color:#8e8e8e;font-size:14px;font-weight:600}.product-stock-active[data-v-1b1dd096]{color:#000;font-size:15px;font-weight:600}.product-stock-active[data-v-1b1dd096],.text-categorias-select[data-v-1b1dd096]{font-family:var(--font-style-1)!important}.text-categorias-select[data-v-1b1dd096]{color:#8e8e8e;cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:400;margin-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}#statecate[data-v-1b1dd096]{color:#333;cursor:pointer;font-size:14px;font-weight:600;width:100%}#statecate[data-v-1b1dd096],#statesubcate[data-v-1b1dd096]{font-family:var(--font-style-1)!important}#statesubcate[data-v-1b1dd096]{color:#333;cursor:pointer;font-size:14px;font-weight:600;margin-left:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.top-content[data-v-1b1dd096]{display:flex;flex-wrap:wrap;font-size:100%;justify-content:space-between;margin-bottom:20px;max-width:100%}.categorys-list[data-v-1b1dd096],.top-content[data-v-1b1dd096]{align-items:center;width:100%}.categorys-list[data-v-1b1dd096],.subcategory-list[data-v-1b1dd096]{grid-gap:1rem;display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr));justify-content:flex-start;max-height:300px;overflow:auto}.subcategory-list[data-v-1b1dd096]{align-items:center;width:100%}.categorys-list[data-v-1b1dd096]::-webkit-scrollbar{width:3px}.categorys-list[data-v-1b1dd096]::-webkit-scrollbar-thumb{background:#a3a3a3;border-radius:4px}.categorys-list[data-v-1b1dd096]::-webkit-scrollbar-thumb:active{background-color:#777}.categorys-list[data-v-1b1dd096]::-webkit-scrollbar-thumb:hover{background:#686868;box-shadow:0 0 2px 1px rgba(0,0,0,.401)}.subcategory-list[data-v-1b1dd096]::-webkit-scrollbar{width:3px}.subcategory-list[data-v-1b1dd096]::-webkit-scrollbar-thumb{background:#a3a3a3;border-radius:4px}.subcategory-list[data-v-1b1dd096]::-webkit-scrollbar-thumb:active{background-color:#777}.subcategory-list[data-v-1b1dd096]::-webkit-scrollbar-thumb:hover{background:#686868;box-shadow:0 0 2px 1px rgba(0,0,0,.401)}.container[data-v-1b1dd096]::-webkit-scrollbar-track{background:#323232;border-radius:4px}.container[data-v-1b1dd096]::-webkit-scrollbar-track:active,.container[data-v-1b1dd096]::-webkit-scrollbar-track:hover{background:#b52727}.txt-categorys[data-v-1b1dd096]{align-items:center;color:var(--color_subtext);cursor:pointer;display:flex;flex-direction:row;font-family:var(--font-style-1)!important;font-size:15px;font-weight:400;justify-content:flex-start;line-height:1.3;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-categorys[data-v-1b1dd096]:hover{color:#eb7025}.txt-categorys-active[data-v-1b1dd096]{align-items:center;color:var(--color_icon);cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:600;justify-content:flex-start;padding-right:1px;width:100%}.txt-categorys-active[data-v-1b1dd096],.txt-categorys:hover .rounded-list[data-v-1b1dd096]{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-categorys:hover .rounded-list[data-v-1b1dd096]{background-color:var(--color_icon)}.rounded-list[data-v-1b1dd096]{background-color:#e5e5e5;border-radius:100px;height:10px;margin-right:10px;width:10px}.rounded-list[data-v-1b1dd096],.txt-rounded-list-active[data-v-1b1dd096]{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-rounded-list-active[data-v-1b1dd096]{background-color:var(--color_icon)}.product-stock[data-v-1b1dd096]{color:#333;cursor:pointer;font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;margin-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.show-view-per-list[data-v-1b1dd096]{align-items:center;justify-content:center;width:auto}.show[data-v-1b1dd096]{cursor:pointer;margin-top:4px;width:100%}.show-icon[data-v-1b1dd096]{fill:var(--color_icon);padding:3px}.show-icon-active[data-v-1b1dd096]{fill:var(--breadCrumbs)}.show-icon-active[data-v-1b1dd096],.show-icon[data-v-1b1dd096]:hover{background-color:var(--background_color_1)}.show-icon[data-v-1b1dd096]:hover{fill:#eb7025}.show:focus .show-icon[data-v-1b1dd096]{fill:#000}.items-end[data-v-1b1dd096]{align-items:center;flex-direction:row}.items-end[data-v-1b1dd096],.tittle-banner-shop[data-v-1b1dd096]{display:flex;justify-content:flex-start;width:100%}.tittle-banner-shop[data-v-1b1dd096]{align-items:flex-start}.btn-tittle-shop[data-v-1b1dd096]{align-items:flex-start;color:var(--color_text);font-family:var(--font-style-1)!important;font-weight:600;justify-content:flex-start;text-transform:uppercase}.product-text[data-v-1b1dd096]{display:flex;flex-direction:column;width:100%}.product-conten-items[data-v-1b1dd096],.product-text[data-v-1b1dd096]{align-items:center;justify-content:center}.product-conten-items[data-v-1b1dd096]{gap:1rem;text-align:center}.producto-items-content[data-v-1b1dd096]{width:100%}.content-item[data-v-1b1dd096]{flex-direction:row;margin-bottom:40px}.content-item[data-v-1b1dd096],.content-item-productos[data-v-1b1dd096]{align-items:center;display:flex;justify-content:center;width:100%}.content-item-productos[data-v-1b1dd096]{flex-direction:column}.content-products[data-v-1b1dd096]{height:100%}.content-products[data-v-1b1dd096],.content-products-empty[data-v-1b1dd096]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-products-empty[data-v-1b1dd096]{min-height:200px;text-align:center}.txt-products-empty[data-v-1b1dd096]{color:#3f3f3f;font-family:var(--font-style-1)!important;font-size:20px;font-weight:600;margin-top:6px}.pagination-medium[data-v-1b1dd096]{background:transparent;margin-top:50px}.pagination[data-v-1b1dd096]{background:transparent;color:var(--pagination_Color);font-size:18px}.product_pagination[data-v-1b1dd096] .el-pagination.is-background .btn-next,.product_pagination[data-v-1b1dd096] .el-pagination.is-background .btn-prev,.product_pagination[data-v-1b1dd096] .el-pagination.is-background .el-pager li{background-color:transparent;color:var(--pagination_Color)}.product_pagination[data-v-1b1dd096] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-1b1dd096] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-1b1dd096] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--pagination_Color)}.product_pagination[data-v-1b1dd096] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--pagination_Color);color:#fff}.product-stock[data-v-1b1dd096],.separator-breadCrumbs[data-v-1b1dd096],.show-number-items[data-v-1b1dd096]{cursor:default}.crumb[data-v-1b1dd096]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separatorCrumb[data-v-1b1dd096]{color:var(--breadCrumbs);cursor:pointer;font-size:9px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.separatorCrumb[data-v-1b1dd096],.txt-crumb[data-v-1b1dd096]{font-family:var(--font-style-1)!important}.txt-crumb[data-v-1b1dd096]{color:var(--breadCrumbs);cursor:pointer;font-size:15px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.s1[data-v-1b1dd096]:hover,.s2[data-v-1b1dd096]:hover{color:#eb7025;transition:all .25s ease}.product-list[data-v-1b1dd096]{height:100%;width:100%}.product-list[data-v-1b1dd096]:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}@media (min-width:300px){.product-conten-items[data-v-1b1dd096]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));width:100%}.btn-tittle-shop[data-v-1b1dd096]{font-size:36px}.content-shop-items[data-v-1b1dd096]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;width:90%}.content-left[data-v-1b1dd096]{display:none}.content-right[data-v-1b1dd096]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.top-content[data-v-1b1dd096]{display:none}.content-items-categorias-text[data-v-1b1dd096]{align-items:center;justify-content:center}.text-categorias-select[data-v-1b1dd096]{width:auto}.content-banner-shop[data-v-1b1dd096]{align-items:flex-start;justify-content:flex-start;margin-bottom:8px;margin-top:8px;padding-left:20px}.content-banner-shop-r[data-v-1b1dd096]{margin-bottom:10px}.bannerProduct[data-v-1b1dd096]{display:none}.product-content[data-v-1b1dd096]{margin-top:20px}.content-home[data-v-1b1dd096]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.txt-content-home[data-v-1b1dd096]{color:var(--color_text);cursor:pointer;font-family:var(--font-style-1)!important;font-size:16px;font-weight:600;line-height:1.1;padding-bottom:20px;padding-top:20px;text-transform:uppercase;width:auto}.txt-content-home[data-v-1b1dd096]:hover{color:#eb7025}}@media (min-width:440px){.product-conten-items[data-v-1b1dd096]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:768px){.content-shop-items[data-v-1b1dd096]{width:93%}.bannerProduct[data-v-1b1dd096]{align-items:center;background-color:var(--background_color_2);background-position:50%;background-repeat:no-repeat;background-size:cover;display:flex;height:220px;justify-items:center;width:100%}}@media (min-width:1024px){.product-text[data-v-1b1dd096]{width:100%}.product-conten-items[data-v-1b1dd096]{grid-gap:2.5rem;display:grid;gap:2.5rem;grid-template-columns:repeat(3,minmax(0,1fr))}.content-items-categorias-text[data-v-1b1dd096]{align-items:center;justify-content:flex-start}.items-end[data-v-1b1dd096]{display:flex;padding-bottom:20px}.show-number-items[data-v-1b1dd096]{align-items:center;display:flex;justify-content:flex-end;width:100%}.show-view-per-list[data-v-1b1dd096]{grid-gap:0;align-items:center;display:grid;gap:0;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:center;width:auto}.btn-tittle-shop[data-v-1b1dd096]{font-size:20px}.top-content[data-v-1b1dd096]{border-bottom:1px solid var(--border);display:flex;padding-bottom:5px;padding-top:0}.content-left[data-v-1b1dd096]{align-items:flex-start;display:flex;flex-direction:column;justify-content:space-between;margin-right:10px;width:400px}.content-banner-shop[data-v-1b1dd096]{display:none}.content-banner-shop-r[data-v-1b1dd096]{display:flex;padding-bottom:40px}.content-shop-items[data-v-1b1dd096]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;margin-top:40px;width:95%}.hidd[data-v-1b1dd096]{display:none}}@media (min-width:1280px){.product-content[data-v-1b1dd096]{margin-top:0}.content-left[data-v-1b1dd096]{width:400px}}@media (max-width:440px){.btn-tittle-shop[data-v-1b1dd096]{font-size:22px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template10-ko-product-list-filter.js.map