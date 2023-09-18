exports.ids = [155,294,295];
exports.modules = {

/***/ 1229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/Ko-ProductListFilter.vue?vue&type=template&id=00e3e620&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3, _vm$settingByTemplate4, _vm$settingByTemplate5, _vm$settingByTemplate6, _vm$settingByTemplate7, _vm$settingByTemplate8, _vm$settingByTemplate9;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product-content",
    style: [_vm.settingByTemplate7[0].productListFilter, _vm.settingByTemplate7[0].settingGeneral]
  }, [_vm._ssrNode("<div id=\"BgProductlistF\" class=\"content-banner-shop\"" + _vm._ssrStyle(null, [{
    '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate7[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.settingGeneral) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.fount_1) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'David Libre'
  }, {
    '--font-style-2': (_vm$settingByTemplate4 = (_vm$settingByTemplate5 = _vm.settingByTemplate7[0]) === null || _vm$settingByTemplate5 === void 0 ? void 0 : (_vm$settingByTemplate6 = _vm$settingByTemplate5.settingGeneral) === null || _vm$settingByTemplate6 === void 0 ? void 0 : _vm$settingByTemplate6.fount_2) !== null && _vm$settingByTemplate4 !== void 0 ? _vm$settingByTemplate4 : 'Great Vibes'
  }, {
    '--font-style-3': (_vm$settingByTemplate7 = (_vm$settingByTemplate8 = _vm.settingByTemplate7[0]) === null || _vm$settingByTemplate8 === void 0 ? void 0 : (_vm$settingByTemplate9 = _vm$settingByTemplate8.settingGeneral) === null || _vm$settingByTemplate9 === void 0 ? void 0 : _vm$settingByTemplate9.fount_3) !== null && _vm$settingByTemplate7 !== void 0 ? _vm$settingByTemplate7 : 'Lora'
  }], null) + " data-v-00e3e620><div class=\"tittle-banner-shop\" data-v-00e3e620><p class=\"btn-tittle-shop\" data-v-00e3e620>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingByTemplate7[0].productListFilter.title) + "\n      ") + "</p></div></div> "), _vm._ssrNode("<div class=\"content-shop-items\" data-v-00e3e620>", "</div>", [_vm.categorias && _vm.categorias.length > 0 ? _vm._ssrNode("<div class=\"content-left\" data-v-00e3e620>", "</div>", [_vm._ssrNode("<div class=\"content-category-left\" data-v-00e3e620><button class=\"item-tittle\" data-v-00e3e620><p class=\"txt-tittles\" data-v-00e3e620>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('header_buscar_producto')) + "\n          ") + "</p></button> <div class=\"itemLeft-range-slide\" data-v-00e3e620><input type=\"search\"" + _vm._ssrAttr("placeholder", _vm.$t('header_search')) + _vm._ssrAttr("value", _vm.search) + " class=\"input-slide\" data-v-00e3e620></div></div> "), _vm._ssrNode("<div class=\"content-category-left\" data-v-00e3e620>", "</div>", [_vm._ssrNode("<div class=\"item-tittle\" data-v-00e3e620><p class=\"txt-tittles\" data-v-00e3e620>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_categoria')) + "\n          ") + "</p></div> "), _vm.categorias.length > 7 ? _vm._ssrNode("<div class=\"btn-scroll\" data-v-00e3e620>", "</div>", [_c('FlechaUp-icon', {
    staticClass: "btn-scroll-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" <div id=\"swiper-slide-categories\" class=\"categorys-list\" data-v-00e3e620><p class=\"txt-categorys\" data-v-00e3e620>Todos los productos</p> " + _vm._ssrList(_vm.categorias, function (categorys, index) {
    return "<div data-v-00e3e620><div data-v-00e3e620><p" + _vm._ssrClass("txt-categorys", categorys.id == _vm.indexSelect ? 'txt-categorys-active' : '') + " data-v-00e3e620>" + _vm._ssrEscape("\n                " + _vm._s(categorys.nombre_categoria_producto) + "\n              ") + "</p></div></div>";
  }) + "</div> "), _vm.categorias.length > 7 ? _vm._ssrNode("<div class=\"btn-scroll\" data-v-00e3e620>", "</div>", [_c('Flechadown-icon', {
    staticClass: "btn-scroll-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" " + (_vm.showSubCategory && _vm.selectedSubcategories.length ? "<div class=\"item-tittle\" data-v-00e3e620><p class=\"txt-tittles\" data-v-00e3e620>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_subcategory')) + "\n          ") + "</p></div>" : "<!---->") + " "), _vm.selectedSubcategories.length > 7 ? _vm._ssrNode("<div class=\"btn-scroll\" data-v-00e3e620>", "</div>", [_c('FlechaUp-icon', {
    staticClass: "btn-scroll-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" " + (_vm.showSubCategory && _vm.selectedSubcategories.length ? "<div id=\"swiper-slide-Subcategories\" class=\"subcategory-list\" data-v-00e3e620>" + _vm._ssrList(_vm.selectedSubcategories, function (subcategorys, index) {
    return "<div data-v-00e3e620><div data-v-00e3e620><p" + _vm._ssrClass("txt-categorys", subcategorys.id == _vm.indexSelect2 ? 'txt-categorys-active' : '') + " data-v-00e3e620>" + _vm._ssrEscape("\n                " + _vm._s(subcategorys.nombre_subcategoria) + "\n              ") + "</p></div></div>";
  }) + "</div>" : "<!---->") + " "), _vm.selectedSubcategories.length > 7 ? _vm._ssrNode("<div class=\"btn-scroll\" data-v-00e3e620>", "</div>", [_c('Flechadown-icon', {
    staticClass: "btn-scroll-icon"
  })], 1) : _vm._e()], 2), _vm._ssrNode(" " + _vm._ssrList(_vm.allTags, function (itemsTags, index) {
    return "<div" + _vm._ssrStyle(null, null, {
      display: _vm.allTags && _vm.allTags.length > 0 ? '' : 'none'
    }) + " data-v-00e3e620>" + (itemsTags && itemsTags.status === 1 && itemsTags.properties.length > 0 ? "<div data-v-00e3e620><div class=\"txt-tittles\" data-v-00e3e620>" + _vm._ssrEscape("\n            " + _vm._s(itemsTags.name) + "\n          ") + "</div> <div class=\"categorys-list\" data-v-00e3e620>" + _vm._ssrList(itemsTags.properties, function (itemsProperties) {
      return "<button" + _vm._ssrClass("txt-categorys", itemsProperties.name == _vm.etiqueta1 ? 'txt-categorys-active' :  false || itemsProperties.name == _vm.etiqueta2 ? 'txt-categorys-active' : '') + _vm._ssrStyle(null, null, {
        display: itemsProperties.status === 1 ? '' : 'none'
      }) + " data-v-00e3e620>" + _vm._ssrEscape("\n              " + _vm._s(itemsProperties.name) + "\n            ") + "</button>";
    }) + "</div></div>" : "<!---->") + "</div>";
  }) + " " + (!_vm.stateShipping ? "<div class=\"content-category-left\" data-v-00e3e620><button class=\"item-tittle\" data-v-00e3e620><p class=\"txt-tittles\" data-v-00e3e620>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_fenvio')) + "\n          ") + "</p></button> <div class=\"categorys-list\" data-v-00e3e620><button class=\"txt-categorys\" data-v-00e3e620>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_gratis')) + "\n          ") + "</button> <button class=\"txt-categorys\" data-v-00e3e620>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_Singratis')) + "\n          ") + "</button></div></div>" : "<!---->") + " <div class=\"content-category-left\" data-v-00e3e620><button class=\"item-tittle\" data-v-00e3e620><p class=\"txt-tittles\" data-v-00e3e620>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_fprecio')) + "\n          ") + "</p></button> <div class=\"categorys-list\" data-v-00e3e620><button class=\"txt-categorys\" data-v-00e3e620>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_fpreciom')) + "\n          ") + "</button> <button class=\"txt-categorys\" data-v-00e3e620>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_fprecioM')) + "\n          ") + "</button></div></div>")], 2) : _vm._e(), _vm._ssrNode(" "), _c('client-only', [_c('div', {
    staticClass: "content-right"
  }, [_c('div', {
    staticClass: "top-content"
  }, [_c('div', {
    staticClass: "content-items-categorias"
  }, [_c('div', {
    staticClass: "content-items-categorias-text"
  }, [_c('p', {
    staticClass: "text-categorias",
    attrs: {
      "id": "homeCate07"
    },
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('home_catalogo')) + "\n              ")]), _vm._v(" "), _vm.etiqueta1 && _vm.nameCategoryHeader == '' && _vm.nameSubCategoryHeader == '' ? _c('div', {
    staticClass: "flex flex-row justify-center"
  }, [_vm.etiqueta1 ? _c('span', {
    staticClass: "separator-breadCrumbs"
  }, [_vm._v("/ ")]) : _vm._e(), _vm._v(" "), _vm.etiqueta1 ? _c('p', {
    staticClass: "text-categorias-select",
    attrs: {
      "id": "stateCate07"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.etiqueta1) + "\n                ")]) : _vm._e()]) : _c('div', {
    staticClass: "flex flex-row justify-center"
  }, [_vm.nameCategoryHeader ? _c('span', {
    staticClass: "separator-breadCrumbs"
  }, [_vm._v("/\n                ")]) : _vm._e(), _vm._v(" "), _vm.nameCategoryHeader ? _c('p', {
    staticClass: "text-categorias-select",
    attrs: {
      "id": "stateCate07"
    },
    on: {
      "click": function ($event) {
        return _vm.breadcrumbsSendCategory(_vm.nameCategoryHeader);
      }
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.nameCategoryHeader) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.nameSubCategoryHeader ? _c('span', {
    staticClass: "separator-breadCrumbs"
  }, [_vm._v("/\n                ")]) : _vm._e(), _vm._v(" "), _vm.nameSubCategoryHeader ? _c('p', {
    staticClass: "text-categorias-select",
    attrs: {
      "id": "stateSubCate"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.nameSubCategoryHeader) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.etiqueta1 ? _c('span', {
    staticClass: "separator-breadCrumbs"
  }, [_vm._v("/ ")]) : _vm._e(), _vm._v(" "), _vm.etiqueta1 ? _c('p', {
    staticClass: "text-categorias-select",
    attrs: {
      "id": "stateSubCate"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.etiqueta1) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.etiqueta2 ? _c('span', {
    staticClass: "separator-breadCrumbs"
  }, [_vm._v("/ ")]) : _vm._e(), _vm._v(" "), _vm.etiqueta2 ? _c('p', {
    staticClass: "text-categorias-select",
    attrs: {
      "id": "stateSubCate"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.etiqueta2) + "\n                ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "items-end"
  }, [_c('div', {
    staticClass: "show-view-per-list"
  }, [_c('button', {
    staticClass: "show"
  }, [_c('svg', {
    staticClass: "show-icon",
    class: _vm.indexShowList == 1 ? 'show-icon-active' : '',
    attrs: {
      "version": "1.1",
      "id": "list-view",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px",
      "width": "18",
      "height": "18",
      "viewBox": "0 0 18 18",
      "enable-background": "new 0 0 18 18",
      "xml:space": "preserve"
    },
    on: {
      "click": _vm.showList
    }
  }, [_c('rect', {
    attrs: {
      "width": "18",
      "height": "2"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "y": "16",
      "width": "18",
      "height": "2"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "y": "8",
      "width": "18",
      "height": "2"
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "show"
  }, [_c('svg', {
    staticClass: "show-icon",
    class: _vm.indexShowList == 2 ? 'show-icon-active' : '',
    attrs: {
      "version": "1.1",
      "id": "Layer_1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px",
      "width": "19px",
      "height": "19px",
      "viewBox": "0 0 19 19",
      "enable-background": "new 0 0 19 19",
      "xml:space": "preserve"
    },
    on: {
      "click": _vm.showGrid2
    }
  }, [_c('path', {
    attrs: {
      "d": "M7,2v5H2V2H7 M9,0H0v9h9V0L9,0z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M17,2v5h-5V2H17 M19,0h-9v9h9V0L19,0z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M7,12v5H2v-5H7 M9,10H0v9h9V10L9,10z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M17,12v5h-5v-5H17 M19,10h-9v9h9V10L19,10z"
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "show"
  }, [_c('svg', {
    staticClass: "show-icon",
    class: _vm.indexShowList == 3 ? 'show-icon-active' : '',
    attrs: {
      "version": "1.1",
      "id": "Layer_2",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px",
      "width": "19px",
      "height": "19px",
      "viewBox": "0 0 19 19",
      "enable-background": "new 0 0 19 19",
      "xml:space": "preserve"
    },
    on: {
      "click": _vm.showGrid3
    }
  }, [_c('rect', {
    attrs: {
      "width": "5",
      "height": "5"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "7",
      "width": "5",
      "height": "5"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "14",
      "width": "5",
      "height": "5"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "y": "7",
      "width": "5",
      "height": "5"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "7",
      "y": "7",
      "width": "5",
      "height": "5"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "14",
      "y": "7",
      "width": "5",
      "height": "5"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "y": "14",
      "width": "5",
      "height": "5"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "7",
      "y": "14",
      "width": "5",
      "height": "5"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "14",
      "y": "14",
      "width": "5",
      "height": "5"
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "show"
  }, [_c('svg', {
    staticClass: "show-icon",
    class: _vm.indexShowList == 4 ? 'show-icon-active' : '',
    attrs: {
      "version": "1.1",
      "id": "Layer_3",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px",
      "width": "19px",
      "height": "19px",
      "viewBox": "0 0 19 19",
      "enable-background": "new 0 0 19 19",
      "xml:space": "preserve"
    },
    on: {
      "click": _vm.showGrid4
    }
  }, [_c('rect', {
    attrs: {
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "5",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "10",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "15",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "y": "5",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "5",
      "y": "5",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "10",
      "y": "5",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "15",
      "y": "5",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "y": "15",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "5",
      "y": "15",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "10",
      "y": "15",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "15",
      "y": "15",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "y": "10",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "5",
      "y": "10",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "10",
      "y": "10",
      "width": "4",
      "height": "4"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "15",
      "y": "10",
      "width": "4",
      "height": "4"
    }
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "producto-items-content",
    attrs: {
      "id": "section"
    }
  }, [_c('div', {
    staticClass: "content-item"
  }, [_c('div', {
    staticClass: "content-item-productos"
  }, [_c('div', {
    staticClass: "product-content-items",
    attrs: {
      "id": "grid-selection"
    }
  }, _vm._l(_vm.filterProduct, function (product) {
    return _c('div', {
      key: product.id,
      staticClass: "content-products"
    }, [!_vm.showInList ? _c('KoProductCardFilter', {
      staticClass: "product-nolist",
      attrs: {
        "product": product,
        "settingGeneral": _vm.settingByTemplate7[0].settingGeneral,
        "settingKProdutCard": _vm.settingByTemplate7[0].settingKProdutCard
      }
    }) : _vm._e(), _vm._v(" "), _vm.showInList ? _c('KoProductCardFilerList', {
      attrs: {
        "product": product
      }
    }) : _vm._e()], 1);
  }), 0), _vm._v(" "), _vm.fullProducts.length == 0 ? _c('div', {
    staticClass: "content-products-empty"
  }, [_c('div', {
    staticClass: "header-content-logo"
  }, [_c('nuxt-link', {
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
  })])], 1), _vm._v(" "), _c('p', {
    staticClass: "txt-products-empty"
  }, [_vm._v(_vm._s(_vm.$t('home_msgCatalogo')))])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "pagination-medium"
  }, [_vm.fullProducts.length > this.numVistas ? _c('div', {
    staticClass: "product_pagination"
  }, [_c('el-pagination', {
    staticClass: "pagination",
    attrs: {
      "background": "",
      "layout": "prev, pager, next",
      "total": _vm.fullProducts.length,
      "page-size": this.numVistas,
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
  })], 1) : _vm._e()])])])])])])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/Ko-ProductListFilter.vue?vue&type=template&id=00e3e620&scoped=true&

// EXTERNAL MODULE: ./components/template7/_productcard/ProductCard.vue + 4 modules
var ProductCard = __webpack_require__(78);

// EXTERNAL MODULE: ./components/template7/_productcard/ProductCardFilterList.vue + 4 modules
var ProductCardFilterList = __webpack_require__(660);

// EXTERNAL MODULE: ./mixins/filterProducts.js
var filterProducts = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/Ko-ProductListFilter.vue?vue&type=script&lang=js&



/* harmony default export */ var Ko_ProductListFiltervue_type_script_lang_js_ = ({
  name: 'K07ProductListFilter',
  components: {
    KoProductCardFilter: ProductCard["default"],
    KoProductCardFilerList: ProductCardFilterList["default"]
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    settingByTemplate7: Array,
    allTags: Array
  },
  mixins: [filterProducts["a" /* default */]],
  mounted() {
    this.setOptionShipping();
    if (this.settingByTemplate7[0] && this.settingByTemplate7[0].productListFilter && this.settingByTemplate7[0].productListFilter.img_background == true) {
      this.setBg(1);
    } else {
      this.setBg(2);
    }
    this.getQuery();
    if (this.previousPage) {
      this.currentPage = this.previousPage;
    }
  },
  data() {
    return {
      showInList: false,
      showSubCategory: false,
      stateSub: false,
      search: '',
      currentPage: 1,
      show: false,
      value: '',
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      indexSelect: '',
      indexSelect2: '',
      indexShowList: 4,
      numVistas: 16,
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
    getProductsCategorie() {
      const initial = this.currentPage * 16 - 16;
      const final = initial + 16;
      return this.fullProducts.filter(product => product.categoria == this.select).slice(initial, final);
    },
    filterProduct() {
      const initial = this.currentPage * 16 - 16;
      const final = initial + 16;
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
    showList() {
      this.indexShowList = 1;
      this.showInList = true;
      var gridSelector = document.getElementById('grid-selection');
      if (gridSelector) {
        gridSelector.setAttribute('style', 'grid-template-columns: repeat(1, minmax(0, 1fr))');
      }
    },
    showGrid2() {
      this.indexShowList = 2;
      this.showInList = false;
      var gridSelector = document.getElementById('grid-selection');
      if (gridSelector) {
        gridSelector.setAttribute('style', 'grid-template-columns: repeat(2, minmax(0, 1fr))');
      }
    },
    showGrid3() {
      this.indexShowList = 3;
      this.showInList = false;
      var gridSelector = document.getElementById('grid-selection');
      if (gridSelector) {
        gridSelector.setAttribute('style', 'grid-template-columns: repeat(3, minmax(0, 1fr))');
      }
    },
    showGrid4() {
      this.indexShowList = 4;
      this.showInList = false;
      var dimension = screen.width;
      var gridSelector = document.getElementById('grid-selection');
      if (gridSelector) {
        gridSelector.setAttribute('style', 'grid-template-columns: repeat(4, minmax(0, 1fr))');
        if (gridSelector && dimension < 768) {
          gridSelector.setAttribute('style', 'grid-template-columns: repeat(2, minmax(0, 1fr))');
        }
      }
    },
    SearchProduct2(search) {
      if (search.length) {
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
    SendSubCategory(value) {
      this.$store.commit('products/SET_PAYLOAD_TAG', '');
      this.$store.commit('products/SET_PAYLOAD_TAG2', '');
      this.stateSub = false;
      var stateCategory = document.getElementById('stateCate07');
      if (!this.stateSub && stateCategory) {
        stateCategory.style.color = '#8e8e8e';
        stateCategory.style.fontWeight = '100';
      }
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
      this.stateSub = true;
      var stateCategory = document.getElementById('stateCate07');
      var catalogo = document.getElementById('homeCate07');
      if (catalogo) {
        catalogo.style.color = '#8e8e8e';
        catalogo.style.fontWeight = '100';
      }
      if (this.stateSub == true && stateCategory) {
        stateCategory.style.color = '#333333';
        stateCategory.style.fontWeight = '600';
      }
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
    breadcrumbsSendCategory(value) {
      this.stateSub = true;
      var stateCategory = document.getElementById('stateCate07');
      var catalogo = document.getElementById('homeCate07');
      if (this.stateSub == true && stateCategory) {
        catalogo.style.color = '#8e8e8e';
        catalogo.style.fontWeight = '100';
        stateCategory.style.color = '#333333';
        stateCategory.style.fontWeight = '600';
      }
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
      var catalogo = document.getElementById('homeCate07');
      if (catalogo) {
        catalogo.style.color = '#333333';
        catalogo.style.fontWeight = '600';
      }
      this.showSubCategory = false;
      this.selectedSubcategories = [];
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
    },
    setBg(value) {
      if (this.settingByTemplate7) {
        if (!this.mobileCheck()) {
          var imagen = document.getElementById('BgProductlistF');
          if (value == 1) {
            if (this.settingByTemplate7[0].productListFilter.url_img) {
              imagen.style.backgroundImage = `url(${this.settingByTemplate7[0].productListFilter.url_img})`;
            } else {
              imagen.style.backgroundImage = `url(https://res.cloudinary.com/brahyanr10/image/upload/v1611623008/Komercia/Shop/flowers-shoppage_jwuds4.jpg)`;
            }
          } else if (value == 2) {
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
    scrollCategories(value) {
      if (value == 1) {
        document.getElementById('swiper-slide-categories').scrollTop -= 300;
      } else if (value == 2) {
        document.getElementById('swiper-slide-categories').scrollTop += 300;
      }
    },
    scrollSubCategories(value) {
      if (value == 1) {
        document.getElementById('swiper-slide-Subcategories').scrollTop -= 300;
      } else if (value == 2) {
        document.getElementById('swiper-slide-Subcategories').scrollTop += 300;
      }
    }
  },
  watch: {
    settingByTemplate7() {
      if (this.settingByTemplate7[0] && this.settingByTemplate7[0].productListFilter && this.settingByTemplate7[0].productListFilter.img_background == true) {
        this.setBg(1);
      } else {
        this.setBg(2);
      }
    },
    search(value) {
      this.SearchProduct2(value);
    },
    currentPage() {
      this.$store.commit('SET_PREVIOUS_PAGE', this.currentPage);
      let timerTimeout = null;
      timerTimeout = setTimeout(() => {
        timerTimeout = null;
        window.scrollBy(0, -2500);
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
      this.SearchProduct2(value);
    }
  }
});
// CONCATENATED MODULE: ./components/template7/Ko-ProductListFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template7_Ko_ProductListFiltervue_type_script_lang_js_ = (Ko_ProductListFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/Ko-ProductListFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(873)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template7_Ko_ProductListFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "00e3e620",
  "70c8b130"
  
)

/* harmony default export */ var Ko_ProductListFilter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(337);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3d79021e", content, true, context)
};

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardFilterList_vue_vue_type_style_index_0_id_6701d8c9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(177);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardFilterList_vue_vue_type_style_index_0_id_6701d8c9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardFilterList_vue_vue_type_style_index_0_id_6701d8c9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardFilterList_vue_vue_type_style_index_0_id_6701d8c9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCardFilterList_vue_vue_type_style_index_0_id_6701d8c9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".block-icon[data-v-6701d8c9]:hover,.transporte-icon[data-v-6701d8c9]:hover{fill:var(--hover_card)}.hearts-icon[data-v-6701d8c9]:hover{color:var(--hover_text)}.hearts-icon[data-v-6701d8c9]{color:#333;height:100%;width:100%}.container[data-v-6701d8c9]{position:relative}.container[data-v-6701d8c9],.image[data-v-6701d8c9]{width:100%}.image[data-v-6701d8c9]{display:block;height:auto;max-width:90%}.icon[data-v-6701d8c9]{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity));font-size:1.5rem}.cart-Shop[data-v-6701d8c9],.cart-Shop-mobile[data-v-6701d8c9]{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity));font:inherit;font-size:100%;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.cart-Shop-mobile[data-v-6701d8c9]{justify-column:center}.icons-hover[data-v-6701d8c9]{grid-gap:0;--tw-text-opacity:1;color:#3f3f3f;color:rgba(63,63,63,var(--tw-text-opacity));display:grid;font:inherit;font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.icon-show-mobile[data-v-6701d8c9]{fill:#fff}.card-title[data-v-6701d8c9]{color:#333;font-family:\"David Libre\"!important;font:inherit}.categoria[data-v-6701d8c9]{color:#9e9e9e;font-family:\"Lora\"!important;font:inherit}.text-price[data-v-6701d8c9]{color:#ed2353;font-weight:600}.separator-price[data-v-6701d8c9],.text-price[data-v-6701d8c9]{font-family:\"Lora\"!important}.separator-price[data-v-6701d8c9]{color:#ed2353;font-weight:600}.text-free[data-v-6701d8c9]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.icon-overlay-free[data-v-6701d8c9]{color:#25db37}.text-sould[data-v-6701d8c9]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.content_buy_action[data-v-6701d8c9]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.transport-icon[data-v-6701d8c9]{align-items:center;color:#00a650;display:flex;font-family:\"Lora\"!important;font-weight:700;justify-content:center;margin-bottom:10px;width:100%}.content_card-info[data-v-6701d8c9]{align-items:flex-end;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:10px;width:100%}.text-card-info-sould[data-v-6701d8c9]{color:#ed2353;font-family:\"Lora\"!important;font-size:16px;font-weight:700;margin-left:8px}.content-button[data-v-6701d8c9]{display:flex;flex-direction:row;padding-bottom:20px}.btn[data-v-6701d8c9]{align-items:center;background-color:#ed2353;border:2px solid #ed2353;border-radius:35px;color:#fff;cursor:pointer;font-family:\"Lora\"!important;font-size:12px;font-weight:600;justify-content:center;letter-spacing:.3px;line-height:16px;padding:3px 6px;text-transform:uppercase;transition:color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease}.btn[data-v-6701d8c9]:hover{background-color:#d7204b;border:2px solid #d7204b;color:#fff}.txt-btn-product[data-v-6701d8c9]{font-size:12px;line-height:16px;padding:10px 14px}.btn-disabled[data-v-6701d8c9]{align-items:center;background-color:gray;border:2px solid gray;border-radius:35px;color:#fff;cursor:pointer;font-size:13px;font-weight:600;justify-content:center;letter-spacing:.3px;line-height:18px;padding:3px 6px;text-transform:uppercase;transition:color .25s ease,background-color .25s ease,border-color .25s ease,box-shadow .25s ease,opacity .25s ease}@media (min-width:300px){.overlay-bottom[data-v-6701d8c9],.text-cart[data-v-6701d8c9]{display:none}.overlay-top[data-v-6701d8c9]{--tw-bg-opacity:1;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:20%;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:8%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.container:hover .overlay-top[data-v-6701d8c9],.overlay-top[data-v-6701d8c9]{left:80%;width:20%}.overlay-free[data-v-6701d8c9]{background-color:#25db37;border-radius:.25rem;height:10%;left:45%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:50%}.container:hover .overlay-free[data-v-6701d8c9]{left:45%;transition-delay:.7s;width:50%}.text-free[data-v-6701d8c9]{font-size:75%}.overlay-polygon[data-v-6701d8c9]{background-color:transparent;height:5%;overflow:hidden;position:absolute;right:0;top:10%}.container:hover .overlay-polygon[data-v-6701d8c9],.overlay-polygon[data-v-6701d8c9]{left:85%;width:5%}.overlay-sould[data-v-6701d8c9]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease}.container:hover .overlay-sould[data-v-6701d8c9],.overlay-sould[data-v-6701d8c9]{left:60%;width:35%}.container:hover .overlay-sould[data-v-6701d8c9]{transition-delay:.7s}.svg-sould-out[data-v-6701d8c9]{height:40px;width:40px}.cart-shop[data-v-6701d8c9]{clip:rect(0,0,0,0);border-width:0;display:none;height:1px;margin:-1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.cart-shop[data-v-6701d8c9],.cart-shop-mobile[data-v-6701d8c9]{padding:0}.cart-shop-mobile[data-v-6701d8c9]{clip:auto;display:block;height:auto;margin:0;overflow:visible;position:static;white-space:normal;width:auto}.icon-show-mobile[data-v-6701d8c9]{margin-left:auto;margin-right:auto;margin-top:2.5px}.producto[data-v-6701d8c9]{grid-gap:1rem;align-items:center;cursor:pointer;display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr));justify-content:center}.product-image[data-v-6701d8c9],.product-image-soldOut[data-v-6701d8c9]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.product-image-soldOut[data-v-6701d8c9]{filter:grayscale(100%)}.datos-producto[data-v-6701d8c9]{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;padding-top:16px;width:100%}.card-title[data-v-6701d8c9],.categoria[data-v-6701d8c9]{font-size:14px;margin-bottom:10px}.text-price[data-v-6701d8c9]{font-size:15px;margin-bottom:10px}.separator-price[data-v-6701d8c9]{font-size:20px}.content_card-info[data-v-6701d8c9],.transport-icon[data-v-6701d8c9]{display:none}}@media (min-width:768px){.text-free[data-v-6701d8c9]{font-size:100%}.svg-sould-out[data-v-6701d8c9]{height:60px;width:60px}.icon[data-v-6701d8c9]{margin-top:2px}}@media (min-width:780px){.producto[data-v-6701d8c9]{grid-gap:1rem;align-items:flex-start;cursor:pointer;display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:flex-start}.product-image[data-v-6701d8c9],.product-image-soldOut[data-v-6701d8c9]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:80%}.product-image-soldOut[data-v-6701d8c9]{filter:grayscale(100%)}.datos-producto[data-v-6701d8c9]{align-items:flex-start;flex-direction:column;height:100%;justify-content:center;width:100%}.content_card-info[data-v-6701d8c9],.datos-producto[data-v-6701d8c9],.transport-icon[data-v-6701d8c9]{display:flex}}@media (min-width:1280px){.icon[data-v-6701d8c9]{margin-top:0}.text-cart[data-v-6701d8c9]{display:block}.overlay-top[data-v-6701d8c9]{--tw-bg-opacity:1;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:20%;left:80%;overflow:hidden;position:absolute;right:0;top:6%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:0}.container:hover .overlay-top[data-v-6701d8c9]{left:65%;width:15%}.overlay-free[data-v-6701d8c9]{background-color:#25db37;border-radius:.25rem;height:10%;left:80%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:0}.container:hover .overlay-free[data-v-6701d8c9]{left:35%;transition-delay:.7s;width:44%}.text-free[data-v-6701d8c9]{font-size:100%}.overlay-polygon[data-v-6701d8c9]{background-color:transparent;height:5%;left:100%;overflow:hidden;position:absolute;right:0;top:10%;width:0}.container:hover .overlay-polygon[data-v-6701d8c9]{left:70%;transition-delay:.95s;width:5%}.overlay-sould[data-v-6701d8c9]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:75%;overflow:hidden;position:absolute;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-6701d8c9]{left:50%;transition-delay:.7s;width:35%}.svg-sould-out[data-v-6701d8c9]{height:60px;width:60px}.cart-shop[data-v-6701d8c9]{clip:auto;display:block;height:auto;margin:0;overflow:visible;position:static;white-space:normal;width:auto}.cart-shop[data-v-6701d8c9],.cart-shop-mobile[data-v-6701d8c9]{padding:0}.cart-shop-mobile[data-v-6701d8c9]{clip:rect(0,0,0,0);border-width:0;display:none;height:1px;margin:-1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.card-title[data-v-6701d8c9]{font-size:18px;margin-bottom:10px}.categoria[data-v-6701d8c9]{font-size:14px;margin-bottom:10px}.text-price[data-v-6701d8c9]{margin-bottom:10px}.separator-price[data-v-6701d8c9],.text-price[data-v-6701d8c9]{font-size:20px}.transport-icon[data-v-6701d8c9]{margin-bottom:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 51:
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
      let urlFiltrada = decodeURIComponent(resTemp[0]);
      let filtradoSubCategories = subcategories.find(element => {
        if (element.categoria == parseInt(resTemp[1]) && element.nombre_subcategoria == urlFiltrada) {
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
          data: ''
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
      if (Lateral === true) {
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

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(874);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5dc89e88", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("77d75ff2", content, true, context)
};

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_productcard/ProductCardFilterList.vue?vue&type=template&id=6701d8c9&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto"
  }, [_vm._ssrNode("<div class=\"container\" data-v-6701d8c9>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-image",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('client-only', [!_vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(this.product.foto_cloudinary, 550, 550),
      expression: "idCloudinary(this.product.foto_cloudinary, 550, 550)"
    }],
    staticClass: "product-image",
    attrs: {
      "alt": "Product Img"
    }
  }) : _vm._e(), _vm._v(" "), _vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(this.product.foto_cloudinary, 550, 550),
      expression: "idCloudinary(this.product.foto_cloudinary, 550, 550)"
    }],
    staticClass: "product-image-soldOut",
    attrs: {
      "alt": "Product Img"
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "image_overlay"
  })], 1), _vm._ssrNode(" " + (_vm.soldOut ? "<div class=\"overlay-sould\" data-v-6701d8c9><div class=\"text-sould\" data-v-6701d8c9><svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" viewBox=\"0 0 512 512\" class=\"svg-sould-out\" data-v-6701d8c9><g data-v-6701d8c9><g data-v-6701d8c9><path d=\"m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z\" fill=\"#cd3232\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#cd3232\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#ff4646\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><circle cx=\"96\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-6701d8c9></circle></g> <g data-v-6701d8c9><circle cx=\"384\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-6701d8c9></circle></g> <g data-v-6701d8c9><path d=\"m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z\" fill=\"#463c4b\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><circle cx=\"240\" cy=\"92.457\" fill=\"#ff4646\" r=\"24\" data-v-6701d8c9></circle></g> <g data-v-6701d8c9><g data-v-6701d8c9><path d=\"m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z\" fill=\"#32283c\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#32283c\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#e6e6eb\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z\" fill=\"#32283c\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z\" fill=\"#32283c\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z\" fill=\"#e6e6eb\" data-v-6701d8c9></path></g> <path d=\"m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" fill=\"#e6e6eb\" data-v-6701d8c9></path></g></g></svg></div></div>" : "<!---->") + " "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div class=\"overlay-bottom\" data-v-6701d8c9>", "</div>", [_vm._ssrNode("<div class=\"cart-shop-mobile\" data-v-6701d8c9>", "</div>", [_vm._ssrNode("<div class=\"icon-cart\" data-v-6701d8c9>", "</div>", [_c('cart-icon', {
    staticClass: "icon"
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cart-Shop\" data-v-6701d8c9>", "</div>", [_vm._ssrNode((!_vm.hover ? "<div class=\"text-cart\" data-v-6701d8c9><p class=\"w-full\" data-v-6701d8c9>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_añadiralcarrito'))) + "</p></div>" : "<!---->") + " "), _vm.hover ? _vm._ssrNode("<div class=\"icon-cart\" data-v-6701d8c9>", "</div>", [_c('cart-icon', {
    staticClass: "icon"
  })], 1) : _vm._e()], 2)], 2) : _vm._ssrNode("<div class=\"overlay-bottom\" data-v-6701d8c9>", "</div>", [_vm._ssrNode("<div class=\"cart-shop-mobile\" data-v-6701d8c9><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"60%\" height=\"60%\" viewBox=\"0 0 24 24\" class=\"icon-show-mobile\" data-v-6701d8c9><path d=\"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7.14,4.5 2.78,7.5 1,12C3.39,18.08 10.25,21.06 16.33,18.67C19.38,17.47 21.8,15.06 23,12C21.22,7.5 16.86,4.5 12,4.5M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z\" data-v-6701d8c9></path></svg></div> "), _vm._ssrNode("<div class=\"cart-Shop\" data-v-6701d8c9>", "</div>", [_vm._ssrNode("<div class=\"text-cart\" data-v-6701d8c9>", "</div>", [_c('nuxt-link', {
    attrs: {
      "nuxt-link": "",
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('home_cardvermas')))])])], 1)])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"datos-producto\" data-v-6701d8c9>", "</div>", [_vm._ssrNode("<div class=\"tittle\" data-v-6701d8c9>" + (this.product.nombre.length >= 54 ? "<p class=\"card-title\" data-v-6701d8c9>" + _vm._ssrEscape("\n        " + _vm._s(`${this.product.nombre.slice(0, 54)}...`) + "\n      ") + "</p>" : "<p class=\"card-title\" data-v-6701d8c9>" + _vm._ssrEscape("\n        " + _vm._s(`${this.product.nombre.slice(0, 54)}`) + "\n      ") + "</p>") + "</div> " + (this.product.categoria ? "<div class=\"categoria\" data-v-6701d8c9>" + _vm._ssrEscape("\n      " + _vm._s(this.product.categoria) + "\n    ") + "</div>" : "<!---->") + " <div class=\"precio\" data-v-6701d8c9>" + (this.product.precio ? "<div class=\"content-text-price\" data-v-6701d8c9>" + (this.estadoCart == true && this.equalsPrice ? "<div data-v-6701d8c9>" + (this.minPrice ? "<p class=\"text-price\" data-v-6701d8c9>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>" : this.estadoCart == true && this.minPrice != this.maxPrice && !this.equalsPrice ? "<div class=\"content-price flex flex-row\" data-v-6701d8c9>" + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-6701d8c9>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div>" : "<!---->") + " <p class=\"separator-price mx-4\" data-v-6701d8c9>-</p> " + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-6701d8c9>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div>" : "<!---->") + "</div>" : "<div data-v-6701d8c9>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-6701d8c9>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>") + "</div>" : "<div class=\"h-20\" data-v-6701d8c9></div>") + "</div> <div class=\"content_buy_action\" data-v-6701d8c9>" + (_vm.product.envio_gratis == 1 && !_vm.soldOut && !_vm.spent ? "<div data-v-6701d8c9><div class=\"transport-icon\" data-v-6701d8c9><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" fill=\"#00a650\" class=\"transporte-icon mr-2\" data-v-6701d8c9><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-6701d8c9></path></svg> <p data-v-6701d8c9>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_tarifaPrecio'))) + "</p></div></div>" : "<!---->") + " " + (_vm.soldOut ? "<div class=\"content_card-info\" data-v-6701d8c9><div class=\"icon-card-info-sould\" data-v-6701d8c9><svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" height=\"50px\" viewBox=\"0 0 512 512\" width=\"50px\" data-v-6701d8c9><g data-v-6701d8c9><g data-v-6701d8c9><path d=\"m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z\" fill=\"#cd3232\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#cd3232\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#ff4646\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><circle cx=\"96\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-6701d8c9></circle></g> <g data-v-6701d8c9><circle cx=\"384\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-6701d8c9></circle></g> <g data-v-6701d8c9><path d=\"m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z\" fill=\"#463c4b\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><circle cx=\"240\" cy=\"92.457\" fill=\"#ff4646\" r=\"24\" data-v-6701d8c9></circle></g> <g data-v-6701d8c9><g data-v-6701d8c9><path d=\"m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z\" fill=\"#32283c\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#32283c\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#e6e6eb\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z\" fill=\"#32283c\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z\" fill=\"#32283c\" data-v-6701d8c9></path></g> <g data-v-6701d8c9><path d=\"m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z\" fill=\"#e6e6eb\" data-v-6701d8c9></path></g> <path d=\"m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" fill=\"#e6e6eb\" data-v-6701d8c9></path></g></g></svg></div> <div class=\"text-card-info-sould\" data-v-6701d8c9>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_productoAgotado')) + "\n        ") + "</div></div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"content-button\" data-v-6701d8c9>", "</div>", [!this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<button id=\"AddToCartTag\" class=\"btn\" data-v-6701d8c9>", "</button>", [_vm._ssrNode("<p class=\"txt-btn-product\" data-v-6701d8c9>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_añadiralcarrito')) + "\n        ") + "</p>")], 2) : _vm.soldOut ? _vm._ssrNode("<button disabled=\"disabled\" class=\"btn-disabled\" data-v-6701d8c9><p class=\"txt-btn-product\" data-v-6701d8c9>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p></button>") : _c('nuxt-link', {
    ref: "colorBtn",
    staticClass: "btn",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('p', {
    staticClass: "txt-btn-product"
  }, [_vm._v(_vm._s(_vm.$t('home_cardvermas')))])])], 1)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/_productcard/ProductCardFilterList.vue?vue&type=template&id=6701d8c9&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_productcard/ProductCardFilterList.vue?vue&type=script&lang=js&


/* harmony default export */ var ProductCardFilterListvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'K07-ProductCard-1',
  props: {
    product: Object
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
              if (products.precio && products.estado == true) {
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
  },
  watch: {
    productsCarts(value) {
      this.getDataProduct();
    }
  }
});
// CONCATENATED MODULE: ./components/template7/_productcard/ProductCardFilterList.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_ProductCardFilterListvue_type_script_lang_js_ = (ProductCardFilterListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/_productcard/ProductCardFilterList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(336)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_ProductCardFilterListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6701d8c9",
  "fc07d066"
  
)

/* harmony default export */ var ProductCardFilterList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_7e29da4a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_7e29da4a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_7e29da4a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_7e29da4a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_7e29da4a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-image[data-v-7e29da4a],.product-image-soldOut[data-v-7e29da4a]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.product-image-soldOut[data-v-7e29da4a]{filter:grayscale(100%)}.block-icon[data-v-7e29da4a]:hover,.transporte-icon[data-v-7e29da4a]:hover{fill:var(--hover_card)}.hearts-icon[data-v-7e29da4a]:hover{color:var(--hover_text)}.hearts-icon[data-v-7e29da4a]{color:#333;height:100%;width:100%}.producto-productCard[data-v-7e29da4a]{cursor:pointer;height:100%;justify-content:flex-start;margin-top:20px}.datos-producto[data-v-7e29da4a],.producto-productCard[data-v-7e29da4a]{align-items:center;display:flex;flex-direction:column}.datos-producto[data-v-7e29da4a]{justify-content:center;padding-top:16px;width:100%}.container-productCard[data-v-7e29da4a]{position:relative;width:100%}.image[data-v-7e29da4a]{display:block;height:auto;width:100%}.icon[data-v-7e29da4a]{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.cart-Shop[data-v-7e29da4a],.cart-Shop-mobile[data-v-7e29da4a]{font:inherit;font-size:100%;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.cart-Shop-mobile[data-v-7e29da4a]{justify-column:center}.color_tex_btn[data-v-7e29da4a]{color:var(--color_text_btn_card)}.icons-hover[data-v-7e29da4a]{grid-gap:0;--tw-text-opacity:1;color:#3f3f3f;color:rgba(63,63,63,var(--tw-text-opacity));display:grid;font:inherit;font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.icon-show-mobile[data-v-7e29da4a]{fill:#fff}.tittle[data-v-7e29da4a]{color:var(--color_text_card);font-family:var(--font-style-1)!important;font:inherit;font-size:100%}.categoria[data-v-7e29da4a]{color:var(--color_subtext_card);font-family:var(--font-style-3)!important;font:inherit;font-size:100%}.precio[data-v-7e29da4a]{color:var(--color_price_card);font-family:var(--font-style-3)!important;font-weight:600}.text-free[data-v-7e29da4a]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.icon-overlay-free[data-v-7e29da4a]{color:#25db37}.text-sould[data-v-7e29da4a]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}@media (min-width:300px){.text-cart[data-v-7e29da4a]{display:none}.txt-cart[data-v-7e29da4a]{color:var(--color_text_btn_card);width:100%}.overlay-bottom[data-v-7e29da4a]{background:var(--color_background_btn_card);bottom:0;height:20%;left:10px;overflow:hidden;position:absolute;right:0;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:20%}.overlay-bottom[data-v-7e29da4a]:hover{background:var(--hover_card)}.overlay-top[data-v-7e29da4a]{--tw-bg-opacity:1;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:20%;left:80%;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:8%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:20%}.overlay-free[data-v-7e29da4a]{background-color:#25db37;border-radius:.25rem;height:10%;left:45%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:50%}.text-free[data-v-7e29da4a]{font-size:75%}.overlay-polygon[data-v-7e29da4a]{background-color:transparent;height:5%;left:85%;top:10%;width:5%}.overlay-polygon[data-v-7e29da4a],.overlay-sould[data-v-7e29da4a]{overflow:hidden;position:absolute;right:0}.overlay-sould[data-v-7e29da4a]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:60%;top:0;transition:.5s ease;width:35%}.svg-sould-out[data-v-7e29da4a]{height:40px;width:40px}.cart-shop[data-v-7e29da4a]{display:none}.content-price[data-v-7e29da4a]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.text-price[data-v-7e29da4a]{font-size:12px}.separator-price[data-v-7e29da4a]{margin-left:1px;margin-right:1px}}@media (max-width:425px){.icon[data-v-7e29da4a]{font-size:20px}.icon-show-mobile[data-v-7e29da4a]{width:20px}}@media (min-width:426px){.icon[data-v-7e29da4a]{font-size:25px}.icon-show-mobile[data-v-7e29da4a]{width:25px}}@media (min-width:530px){.icon[data-v-7e29da4a]{font-size:30px}.icon-show-mobile[data-v-7e29da4a]{width:30px}}@media (min-width:768px){.text-free[data-v-7e29da4a]{font-size:100%}.svg-sould-out[data-v-7e29da4a]{height:60px;width:60px}.text-price[data-v-7e29da4a]{font-size:15px}.separator-price[data-v-7e29da4a]{margin-left:4px;margin-right:4px}}@media (max-width:1279px){.overlay-bottom[data-v-7e29da4a]{align-items:center;bottom:10px;display:flex;height:18%;justify-content:center;left:10px;overflow:hidden;right:0;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:18%}.overlay-bottom[data-v-7e29da4a]:hover{background:var(--hover_card)}.cart-shop-mobile[data-v-7e29da4a]{display:flex}}@media (min-width:1280px){.icon[data-v-7e29da4a]{margin-top:0}.text-cart[data-v-7e29da4a]{display:block}.overlay-bottom[data-v-7e29da4a]{bottom:0;height:0;left:0;overflow:hidden;position:absolute;right:0;width:100%}.overlay-bottom[data-v-7e29da4a],.overlay-bottom[data-v-7e29da4a]:hover{transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.overlay-bottom[data-v-7e29da4a]:hover{background:var(--hover_card)}.container-productCard:hover .overlay-bottom[data-v-7e29da4a]{height:12%}.overlay-top[data-v-7e29da4a]{--tw-bg-opacity:1;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:20%;left:100%;overflow:hidden;position:absolute;right:0;top:6%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:0}.container-productCard:hover .overlay-top[data-v-7e29da4a]{left:85%;width:15%}.overlay-free[data-v-7e29da4a]{background-color:#25db37;border-radius:.25rem;height:10%;left:80%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:0}.container-productCard:hover .overlay-free[data-v-7e29da4a]{left:55%;transition-delay:.7s;width:44%}.text-free[data-v-7e29da4a]{font-size:100%}.overlay-polygon[data-v-7e29da4a]{background-color:transparent;height:5%;left:100%;overflow:hidden;position:absolute;right:0;top:10%;width:0}.container-productCard:hover .overlay-polygon[data-v-7e29da4a]{left:89%;transition-delay:.95s;width:5%}.overlay-sould[data-v-7e29da4a]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:100%;overflow:hidden;position:absolute;right:0;top:5%;transition:.5s ease;width:0}.container-productCard:hover .overlay-sould[data-v-7e29da4a]{left:65%;transition-delay:.7s;width:35%}.svg-sould-out[data-v-7e29da4a]{height:60px;width:60px}.cart-shop[data-v-7e29da4a]{display:flex}.cart-shop-mobile[data-v-7e29da4a]{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_productcard/ProductCard.vue?vue&type=template&id=7e29da4a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto-productCard",
    style: [_vm.settingKProdutCard, _vm.settingGeneral]
  }, [_vm._ssrNode("<div class=\"container-productCard\"" + _vm._ssrStyle(null, [{
    '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'David Libre'
  }, {
    '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Great Vibes'
  }, {
    '--font-style-3': this.settingGeneral && this.settingGeneral.fount_3 ? this.settingGeneral.fount_3 : 'Lora'
  }], null) + " data-v-7e29da4a>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-image",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('client-only', [!_vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(this.product.foto_cloudinary, 550, 550),
      expression: "idCloudinary(this.product.foto_cloudinary, 550, 550)"
    }],
    staticClass: "product-image",
    attrs: {
      "alt": "Product Img"
    }
  }) : _vm._e(), _vm._v(" "), _vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(this.product.foto_cloudinary, 550, 550),
      expression: "idCloudinary(this.product.foto_cloudinary, 550, 550)"
    }],
    staticClass: "product-image-soldOut",
    attrs: {
      "alt": "Product Img"
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "image_overlay"
  })], 1), _vm._ssrNode(" " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-top\" data-v-7e29da4a><div class=\"icons-hover\" data-v-7e29da4a><div class=\"transport-icon\" data-v-7e29da4a>" + (!_vm.getFreeShipping && !_vm.soldOut ? "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"#333\" class=\"transporte-icon\" data-v-7e29da4a><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-7e29da4a></path></svg>" : "<!---->") + "</div></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-free\" data-v-7e29da4a><div class=\"text-free\" data-v-7e29da4a><p data-v-7e29da4a>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardGratis'))) + "</p></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-polygon\" data-v-7e29da4a><svg width=\"12px\" height=\"12px\" viewBox=\"0 0 255 255\" class=\"icon-overlay-free\" data-v-7e29da4a><polygon points=\"0,0 127.5,127.5 255,0\" class=\"fill-current\" data-v-7e29da4a></polygon></svg></div>" : "<!---->") + " " + (_vm.soldOut ? "<div class=\"overlay-sould\" data-v-7e29da4a><div class=\"text-sould\" data-v-7e29da4a><svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" viewBox=\"0 0 512 512\" class=\"svg-sould-out\" data-v-7e29da4a><g data-v-7e29da4a><g data-v-7e29da4a><path d=\"m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z\" fill=\"#cd3232\" data-v-7e29da4a></path></g> <g data-v-7e29da4a><path d=\"m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#cd3232\" data-v-7e29da4a></path></g> <g data-v-7e29da4a><path d=\"m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#ff4646\" data-v-7e29da4a></path></g> <g data-v-7e29da4a><circle cx=\"96\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-7e29da4a></circle></g> <g data-v-7e29da4a><circle cx=\"384\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-7e29da4a></circle></g> <g data-v-7e29da4a><path d=\"m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z\" fill=\"#463c4b\" data-v-7e29da4a></path></g> <g data-v-7e29da4a><circle cx=\"240\" cy=\"92.457\" fill=\"#ff4646\" r=\"24\" data-v-7e29da4a></circle></g> <g data-v-7e29da4a><g data-v-7e29da4a><path d=\"m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z\" fill=\"#32283c\" data-v-7e29da4a></path></g> <g data-v-7e29da4a><path d=\"m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#32283c\" data-v-7e29da4a></path></g> <g data-v-7e29da4a><path d=\"m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#e6e6eb\" data-v-7e29da4a></path></g> <g data-v-7e29da4a><path d=\"m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z\" fill=\"#32283c\" data-v-7e29da4a></path></g> <g data-v-7e29da4a><path d=\"m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z\" fill=\"#32283c\" data-v-7e29da4a></path></g> <g data-v-7e29da4a><path d=\"m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z\" fill=\"#e6e6eb\" data-v-7e29da4a></path></g> <path d=\"m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" fill=\"#e6e6eb\" data-v-7e29da4a></path></g></g></svg></div></div>" : "<!---->") + " "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div class=\"overlay-bottom\" data-v-7e29da4a>", "</div>", [_vm._ssrNode("<div class=\"cart-shop-mobile\" data-v-7e29da4a>", "</div>", [_vm._ssrNode("<div class=\"icon-cart\" data-v-7e29da4a>", "</div>", [_c('cart-icon', {
    staticClass: "icon"
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cart-Shop\" data-v-7e29da4a>", "</div>", [_vm._ssrNode((!_vm.hover ? "<div class=\"text-cart\" data-v-7e29da4a><p class=\"txt-cart\" data-v-7e29da4a>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_añadiralcarrito'))) + "</p></div>" : "<!---->") + " "), _vm.hover ? _vm._ssrNode("<div class=\"icon-cart\" data-v-7e29da4a>", "</div>", [_c('cart-icon', {
    staticClass: "icon"
  })], 1) : _vm._e()], 2)], 2) : _vm._ssrNode("<div class=\"overlay-bottom\" data-v-7e29da4a>", "</div>", [_vm._ssrNode("<div class=\"cart-shop-mobile\" data-v-7e29da4a><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\" class=\"icon-show-mobile\" data-v-7e29da4a><path d=\"M19 6H17A5 5 0 0 0 7 6H5A2 2 0 0 0 3 8V20A2 2 0 0 0 5 22H12.05A6.5 6.5 0 0 1 9 16.5A6.4 6.4 0 0 1 10.25 12.68A5 5 0 0 1 7 8H9A3 3 0 0 0 12 11H12.06A6.22 6.22 0 0 1 14.06 10.16A3 3 0 0 0 15 8H17A4.88 4.88 0 0 1 16.54 10.09A6.5 6.5 0 0 1 21 13.09V8A2 2 0 0 0 19 6M9 6A3 3 0 0 1 15 6M19.31 18.9A4.5 4.5 0 1 0 17.88 20.32L21 23.39L22.39 22M15.5 19A2.5 2.5 0 1 1 18 16.5A2.5 2.5 0 0 1 15.5 19Z\" data-v-7e29da4a></path></svg></div> "), _vm._ssrNode("<div class=\"cart-Shop\" data-v-7e29da4a>", "</div>", [_vm._ssrNode("<div class=\"text-cart\" data-v-7e29da4a>", "</div>", [_c('nuxt-link', {
    attrs: {
      "nuxt-link": "",
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('p', {
    staticClass: "color_tex_btn"
  }, [_vm._v(_vm._s(_vm.$t('home_cardvermas')))])])], 1)])], 2)], 2), _vm._ssrNode(" <div class=\"datos-producto\"" + _vm._ssrStyle(null, [{
    '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'David Libre'
  }, {
    '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Great Vibes'
  }, {
    '--font-style-3': this.settingGeneral && this.settingGeneral.fount_3 ? this.settingGeneral.fount_3 : 'Lora'
  }], null) + " data-v-7e29da4a><div class=\"tittle\" data-v-7e29da4a>" + (this.product.nombre.length >= 54 ? "<p class=\"card-title\" data-v-7e29da4a>" + _vm._ssrEscape("\n        " + _vm._s(`${this.product.nombre.slice(0, 54)}...`) + "\n      ") + "</p>" : "<p class=\"card-title\" data-v-7e29da4a>" + _vm._ssrEscape("\n        " + _vm._s(`${this.product.nombre.slice(0, 54)}`) + "\n      ") + "</p>") + "</div> " + (this.product.categoria ? "<div class=\"categoria\" data-v-7e29da4a>" + _vm._ssrEscape("\n      " + _vm._s(this.product.categoria) + "\n    ") + "</div>" : "<!---->") + " <div class=\"precio\" data-v-7e29da4a>" + (this.product.precio ? "<div class=\"content-text-price\" data-v-7e29da4a>" + (this.estadoCart == true && this.equalsPrice ? "<div data-v-7e29da4a>" + (this.minPrice ? "<p class=\"text-price\" data-v-7e29da4a>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>" : this.estadoCart == true && this.minPrice != this.maxPrice && !this.equalsPrice ? "<div class=\"content-price\" data-v-7e29da4a>" + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-7e29da4a>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div>" : "<!---->") + " <p class=\"separator-price\" data-v-7e29da4a>-</p> " + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-7e29da4a>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div>" : "<!---->") + "</div>" : "<div data-v-7e29da4a>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-7e29da4a>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>") + "</div>" : "<div class=\"h-20\" data-v-7e29da4a></div>") + "</div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/_productcard/ProductCard.vue?vue&type=template&id=7e29da4a&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_productcard/ProductCard.vue?vue&type=script&lang=js&


/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'K07-ProductCard-2',
  props: {
    product: Object,
    settingKProdutCard: Object,
    settingGeneral: Object
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
              if (products.precio && products.estado == true) {
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
  },
  watch: {
    productsCarts(value) {
      this.getDataProduct();
    }
  }
});
// CONCATENATED MODULE: ./components/template7/_productcard/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/_productcard/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7e29da4a",
  "146d5d37"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_00e3e620_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(535);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_00e3e620_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_00e3e620_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_00e3e620_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListFilter_vue_vue_type_style_index_0_id_00e3e620_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-scroll[data-v-00e3e620]{cursor:pointer}.btn-scroll[data-v-00e3e620],.btn-scroll-icon[data-v-00e3e620]{align-items:center;display:flex;justify-content:center;width:100%}.btn-scroll-icon[data-v-00e3e620]{bottom:.125em;color:var(--color_text);font-size:20px}.btn-scroll-icon[data-v-00e3e620]:hover{color:var(--hover_text)}.product-content[data-v-00e3e620]{background:var(--background_color_2);flex-direction:column;padding-bottom:80px}.content-banner-shop[data-v-00e3e620],.product-content[data-v-00e3e620]{align-items:center;display:flex;justify-content:center;width:100%}.content-banner-shop[data-v-00e3e620]{background:var(--background_color_1);background-repeat:no-repeat;background-size:cover}.itemLeft-range-slide[data-v-00e3e620]{margin-bottom:20px}.content-input-slide[data-v-00e3e620],.itemLeft-range-slide[data-v-00e3e620]{align-items:center;display:flex;justify-content:center;width:100%}.content-input-slide[data-v-00e3e620]{flex-direction:column}.input-slide[data-v-00e3e620]{cursor:pointer;width:100%}.txt-tittles[data-v-00e3e620]{color:var(--color_text);cursor:default;font-family:var(--font-style-1)!important;font-size:16px;font-weight:600;padding-bottom:20px;padding-top:20px;text-transform:uppercase;transition:all .25s ease}.txt-tittles[data-v-00e3e620],.value-range-slide[data-v-00e3e620]{align-items:center;display:flex;justify-content:flex-start;width:100%}.value-range-slide[data-v-00e3e620],.values-prices[data-v-00e3e620]{flex-direction:row}.values-prices[data-v-00e3e620]{align-items:center;display:flex;justify-content:flex-start;width:80%}.value-price[data-v-00e3e620]{color:var(--color_subtext);cursor:default;font-family:var(--font-style-3)!important;font-size:14px;padding-right:1px;transition:all .25s ease;width:auto}.value-precio-change[data-v-00e3e620]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.price[data-v-00e3e620]{align-items:center;color:var(--color_text);cursor:default;display:flex;flex-direction:row;font-family:var(--font-style-3)!important;font-size:14px;font-weight:600;justify-content:flex-start;transition:all .25s ease}.item-tittle[data-v-00e3e620]{justify-content:flex-start;width:100%}.btn-slider[data-v-00e3e620],.item-tittle[data-v-00e3e620]{align-items:center;display:flex}.btn-slider[data-v-00e3e620]{justify-content:center;width:30%}.btn-items-left[data-v-00e3e620]{align-items:center;background-color:#ededed;border-radius:35px;cursor:pointer;display:flex;font-family:var(--font-style-3)!important;font-size:12px;font-weight:600;justify-content:center;letter-spacing:.3px;padding:10px 14px;text-align:center;text-transform:uppercase;transition:all .25s ease}.btn-items-left[data-v-00e3e620]:hover{background-color:#e5e5e5}.content-items-categorias[data-v-00e3e620]{align-items:center;justify-content:space-between}.content-items-categorias[data-v-00e3e620],.content-items-categorias-text[data-v-00e3e620]{display:flex;flex-direction:row;width:100%}.text-categorias[data-v-00e3e620]{color:var(--color_text);cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:600;margin-right:6px;width:auto}.separator-breadCrumbs[data-v-00e3e620],.text-categorias[data-v-00e3e620]{font-family:var(--font-style-3)!important}.separator-breadCrumbs[data-v-00e3e620]{color:#8e8e8e;cursor:pointer;font-size:14px;margin-left:6px;margin-right:6px;transition:all .25s ease;width:auto}.product-stock-text[data-v-00e3e620]{color:#8e8e8e;font-size:14px;font-weight:700}.product-stock-active[data-v-00e3e620],.product-stock-text[data-v-00e3e620]{font-family:var(--font-style-3)!important}.product-stock-active[data-v-00e3e620]{color:#000;font-size:15px;font-weight:700}.text-categorias-select[data-v-00e3e620]{color:#8e8e8e;cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:100;margin-right:6px;transition:all .25s ease;width:100%}#stateCate07[data-v-00e3e620],.text-categorias-select[data-v-00e3e620]{font-family:var(--font-style-3)!important}#stateCate07[data-v-00e3e620]{color:#333;cursor:pointer;font-size:14px;font-weight:600}.top-content[data-v-00e3e620]{align-items:center;display:flex;flex-wrap:wrap;font-size:100%;justify-content:space-between;margin-bottom:20px;max-width:100%;width:100%}.categorys-list[data-v-00e3e620]{overflow-y:auto}.categorys-list[data-v-00e3e620],.subcategory-list[data-v-00e3e620]{grid-gap:1rem;align-items:center;display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr));justify-content:flex-start;max-height:300px;width:100%}.subcategory-list[data-v-00e3e620]{overflow:auto}.categorys-list[data-v-00e3e620]::-webkit-scrollbar{width:3px}.categorys-list[data-v-00e3e620]::-webkit-scrollbar-thumb{background:#a3a3a3;border-radius:4px}.categorys-list[data-v-00e3e620]::-webkit-scrollbar-thumb:active{background-color:#777}.categorys-list[data-v-00e3e620]::-webkit-scrollbar-thumb:hover{background:#686868;box-shadow:0 0 2px 1px rgba(0,0,0,.401)}.subcategory-list[data-v-00e3e620]::-webkit-scrollbar{width:3px}.subcategory-list[data-v-00e3e620]::-webkit-scrollbar-thumb{background:#a3a3a3;border-radius:4px}.subcategory-list[data-v-00e3e620]::-webkit-scrollbar-thumb:active{background-color:#777}.subcategory-list[data-v-00e3e620]::-webkit-scrollbar-thumb:hover{background:#686868;box-shadow:0 0 2px 1px rgba(0,0,0,.401)}.container[data-v-00e3e620]::-webkit-scrollbar-track{background:#323232;border-radius:4px}.container[data-v-00e3e620]::-webkit-scrollbar-track:active,.container[data-v-00e3e620]::-webkit-scrollbar-track:hover{background:#b52727}.content-category-left[data-v-00e3e620]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.txt-categorys[data-v-00e3e620]{align-items:center;color:var(--color_subtext);cursor:pointer;display:flex;flex-direction:row;font-size:14px;justify-content:flex-start;padding-right:4px;transition:all .25s ease;width:100%}.txt-categorys[data-v-00e3e620],.txt-categorys-active[data-v-00e3e620]{font-family:var(--font-style-3)!important}.txt-categorys-active[data-v-00e3e620]{align-items:center;color:#0c0c0c;cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:700;justify-content:flex-start;padding-right:4px;transition:all .25s ease;width:100%}.product-stock[data-v-00e3e620]{color:#333;cursor:pointer;font-family:var(--font-style-3)!important;font-size:14px;font-weight:600;margin-right:6px;transition:all .25s ease}.show-view-per-list[data-v-00e3e620]{grid-gap:1rem;align-items:center;display:grid;gap:1rem;grid-template-columns:repeat(4,minmax(0,1fr));justify-content:center;width:auto}.show[data-v-00e3e620]{cursor:pointer;width:100%}.show-icon[data-v-00e3e620]{fill:#8e8e8e}.show-icon-active[data-v-00e3e620]{fill:#0c0c0c}.show-icon[data-v-00e3e620]:hover,.show:focus .show-icon[data-v-00e3e620]{fill:var(--color_text)}.items-end[data-v-00e3e620]{flex-direction:row;justify-content:flex-end}.items-end[data-v-00e3e620],.tittle-banner-shop[data-v-00e3e620]{align-items:center;display:flex;width:100%}.tittle-banner-shop[data-v-00e3e620]{flex-wrap:wrap;justify-content:center}.btn-tittle-shop[data-v-00e3e620]{color:var(--color_title);font-family:var(--font-style-1)!important;font-weight:400}.txt-categorys[data-v-00e3e620]:hover{color:#050505}.product-text[data-v-00e3e620]{align-items:center;justify-content:center}.product-content-items[data-v-00e3e620],.product-text[data-v-00e3e620]{display:flex;flex-direction:column;width:100%}.product-content-items[data-v-00e3e620]{align-items:flex-start;justify-content:flex-start;text-align:center}.description[data-v-00e3e620],.product-description[data-v-00e3e620],.product-subtittle[data-v-00e3e620],.product-tittle[data-v-00e3e620],.subtittle[data-v-00e3e620],.tittle[data-v-00e3e620]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center}.producto-items-content[data-v-00e3e620]{width:100%}.tittle[data-v-00e3e620]{color:#ed2353;font-family:var(--font-style-2)!important}.subtittle[data-v-00e3e620]{color:var(--color_text);font-family:var(--font-style-1)!important}.description[data-v-00e3e620]{color:#777;font-family:var(--font-style-3)!important}.product-content-items[data-v-00e3e620]{gap:1rem}.content-item[data-v-00e3e620]{flex-direction:row;justify-content:space-between;margin-bottom:40px}.content-item[data-v-00e3e620],.content-item-productos[data-v-00e3e620]{align-items:center;display:flex;width:100%}.content-item-productos[data-v-00e3e620]{flex-direction:column;justify-content:center}.grid-products[data-v-00e3e620]{grid-column-gap:25px;grid-row-gap:30px;box-sizing:border-box;display:grid;grid-template-columns:repeat(4,minmax(250px,2fr));margin:0 auto;width:100%}.content-products[data-v-00e3e620]{border-bottom:.5px solid #f2f2f2;height:100%}.content-products-empty[data-v-00e3e620]{align-items:center;display:flex;flex-direction:column;justify-content:center;min-height:200px;text-align:center;width:100%}.txt-products-empty[data-v-00e3e620]{color:#3f3f3f;font-family:var(--font-style-1)!important;font-size:20px;font-weight:600;margin-top:6px}.pagination-medium[data-v-00e3e620]{background:transparent;margin-top:50px}.pagination[data-v-00e3e620]{background:transparent;color:#3f3f3f;font-size:18px}.product_pagination[data-v-00e3e620] .el-pagination.is-background .btn-next,.product_pagination[data-v-00e3e620] .el-pagination.is-background .btn-prev,.product_pagination[data-v-00e3e620] .el-pagination.is-background .el-pager li{background-color:transparent;color:#3f3f3f}.product_pagination[data-v-00e3e620] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-00e3e620] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-00e3e620] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--hover_card)}.product_pagination[data-v-00e3e620] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--hover_card);color:#fff}.product-stock[data-v-00e3e620],.separator-breadCrumbs[data-v-00e3e620],.show-number-items[data-v-00e3e620]{cursor:default}@media (min-width:300px){#grid-selection[data-v-00e3e620]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.btn-tittle-shop[data-v-00e3e620]{font-size:36px}.content-banner-shop[data-v-00e3e620]{padding-top:80px}.tittle-banner-shop[data-v-00e3e620]{margin-bottom:6px;margin-top:6px}.content-shop-items[data-v-00e3e620]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:95%}.content-left[data-v-00e3e620]{display:none}.content-right[data-v-00e3e620]{width:100%}.top-content[data-v-00e3e620]{border-bottom:1px solid #e8e8e8;padding-bottom:12px;padding-top:12px}.items-end[data-v-00e3e620]{display:none}.content-items-categorias-text[data-v-00e3e620]{align-items:center;justify-content:center}.text-categorias-select[data-v-00e3e620]{width:auto}}@media (min-width:768px){.product-content-items[data-v-00e3e620]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}#grid-selection[data-v-00e3e620]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width:1024px){.product-text[data-v-00e3e620]{width:100%}.product-content-items[data-v-00e3e620]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}.content-items-categorias-text[data-v-00e3e620]{align-items:center;justify-content:flex-start}.items-end[data-v-00e3e620],.show-number-items[data-v-00e3e620]{display:flex}.show-number-items[data-v-00e3e620]{align-items:center;justify-content:flex-end;width:100%}.show-view-per-list[data-v-00e3e620]{display:none}}@media (min-width:1280px){.btn-tittle-shop[data-v-00e3e620]{font-size:78px}.content-banner-shop[data-v-00e3e620]{margin-bottom:40px;padding-bottom:70px;padding-top:150px}.tittle-banner-shop[data-v-00e3e620]{margin-bottom:6px;margin-top:6px}.content-shop-items[data-v-00e3e620]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;width:93%}.top-content[data-v-00e3e620]{border-bottom:1px solid #e8e8e8;padding-bottom:5px;padding-top:0}.content-left[data-v-00e3e620]{align-items:flex-start;display:flex;flex-direction:column;justify-content:space-between;margin-right:24px;width:30%}.show-view-per-list[data-v-00e3e620]{grid-gap:1rem;display:grid;gap:1rem;grid-template-columns:repeat(4,minmax(0,1fr));width:auto}.show-number-items[data-v-00e3e620],.show-view-per-list[data-v-00e3e620]{align-items:center;justify-content:center}.show-number-items[data-v-00e3e620]{display:flex;width:100%}#stateCate07[data-v-00e3e620],..text-categorias-select[data-v-00e3e620],.separator-breadCrumbs[data-v-00e3e620],.text-categorias[data-v-00e3e620]{margin-bottom:20px}}@media (min-width:1192px){.content-shop-items[data-v-00e3e620]{width:1192px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template7-ko-product-list-filter.js.map