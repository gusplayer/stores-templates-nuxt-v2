exports.ids = [293,294];
exports.modules = {

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(267);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("22bc99ba", content, true, context)
};

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListSearchUp_vue_vue_type_style_index_0_id_7276f16f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListSearchUp_vue_vue_type_style_index_0_id_7276f16f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListSearchUp_vue_vue_type_style_index_0_id_7276f16f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListSearchUp_vue_vue_type_style_index_0_id_7276f16f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductListSearchUp_vue_vue_type_style_index_0_id_7276f16f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-content[data-v-7276f16f]{align-items:center;justify-content:center;margin-bottom:150px;margin-top:80px}.product-conten-items[data-v-7276f16f],.product-content[data-v-7276f16f]{display:flex;flex-direction:column;width:100%}.product-conten-items[data-v-7276f16f]{align-items:flex-start;justify-content:flex-start;text-align:center}.product-text[data-v-7276f16f]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.description[data-v-7276f16f],.product-description[data-v-7276f16f],.product-subtittle[data-v-7276f16f],.product-tittle[data-v-7276f16f],.producto-items-content[data-v-7276f16f],.subtittle[data-v-7276f16f],.tittle[data-v-7276f16f]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center}.tittle[data-v-7276f16f]{color:#ed2353;font-family:\"Great Vibes\"!important}.subtittle[data-v-7276f16f]{color:#2d2a2a;font-family:\"David Libre\"!important}.description[data-v-7276f16f]{color:#777;font-family:\"Lora\"!important}.product-conten-items[data-v-7276f16f]{gap:1rem}.content-item[data-v-7276f16f]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:40px}.content-item-productos[data-v-7276f16f]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.grid-products[data-v-7276f16f]{grid-column-gap:25px;grid-row-gap:30px;box-sizing:border-box;display:grid;grid-template-columns:repeat(4,minmax(250px,2fr));margin:0 auto;width:100%}.content-products-empty[data-v-7276f16f]{align-items:center;display:flex;flex-direction:column;justify-content:center;min-height:200px;text-align:center;width:100%}.txt-products-empty[data-v-7276f16f]{color:#3f3f3f;font-family:\"David Libre\"!important;font-size:20px;font-weight:600;margin-top:6px}.pagination-medium[data-v-7276f16f]{background:transparent;margin-top:40px}.pagination[data-v-7276f16f]{background:transparent;color:#3f3f3f;font-size:18px}.product_pagination[data-v-7276f16f] .el-pagination.is-background .btn-next,.product_pagination[data-v-7276f16f] .el-pagination.is-background .btn-prev,.product_pagination[data-v-7276f16f] .el-pagination.is-background .el-pager li{background-color:transparent;color:#3f3f3f}.product_pagination[data-v-7276f16f] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-7276f16f] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-7276f16f] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--hover_card)}.product_pagination[data-v-7276f16f] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--hover_card);color:#fff}@media (min-width:300px){.producto-items-content[data-v-7276f16f]{width:95%}.product-conten-items[data-v-7276f16f]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tittle[data-v-7276f16f]{font-size:24px;line-height:34px}.subtittle[data-v-7276f16f]{font-size:32px;line-height:42px}.description[data-v-7276f16f]{font-size:14px;line-height:24px}}@media (min-width:768px){.product-conten-items[data-v-7276f16f]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}.subtittle[data-v-7276f16f]{font-size:36px;line-height:46px}}@media (min-width:1024px){.product-text[data-v-7276f16f]{width:100%}.product-conten-items[data-v-7276f16f]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width:1280px){.producto-items-content[data-v-7276f16f]{width:93%}}@media (min-width:1192px){.producto-items-content[data-v-7276f16f]{width:1192px}}@media (min-width:1920px){.tittle[data-v-7276f16f]{font-size:24px;line-height:34px}.subtittle[data-v-7276f16f]{font-size:36px;line-height:46px}.description[data-v-7276f16f]{font-size:14px;line-height:24px}}", ""]);
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

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("e4356d46", content, true, context)
};

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/Ko-ProductListSearchUp.vue?vue&type=template&id=7276f16f&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "product-content"
  }, [_vm._ssrNode("<div id=\"section\" class=\"producto-items-content\" data-v-7276f16f>", "</div>", [_vm._ssrNode("<div class=\"content-item\" data-v-7276f16f>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-7276f16f>", "</div>", [_vm._ssrNode("<div class=\"product-conten-items\" data-v-7276f16f>", "</div>", _vm._l(_vm.filterProduct, function (product) {
    return _vm._ssrNode("<div class=\"content-products\" data-v-7276f16f>", "</div>", [_c('KoProductCard', {
      attrs: {
        "product": product,
        "settingKProdutCard": _vm.settingKProdutCard,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm.fullProducts.length == 0 ? _vm._ssrNode("<div class=\"content-products-empty\" data-v-7276f16f>", "</div>", [_vm._ssrNode("<div class=\"header-content-logo\" data-v-7276f16f>", "</div>", [_c('nuxt-link', {
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
  })])], 1), _vm._ssrNode(" <p class=\"txt-products-empty\" data-v-7276f16f>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-7276f16f>", "</div>", [_vm.fullProducts.length > 16 ? _vm._ssrNode("<div class=\"product_pagination\" data-v-7276f16f>", "</div>", [_c('el-pagination', {
    staticClass: "pagination",
    attrs: {
      "background": "",
      "layout": "prev, pager, next",
      "total": _vm.fullProducts.length,
      "page-size": 16,
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
  })], 1) : _vm._e()])], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/Ko-ProductListSearchUp.vue?vue&type=template&id=7276f16f&scoped=true&

// EXTERNAL MODULE: ./components/template7/_productcard/ProductCard.vue + 4 modules
var ProductCard = __webpack_require__(67);

// EXTERNAL MODULE: ./mixins/filterProducts.js
var filterProducts = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/Ko-ProductListSearchUp.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko_ProductListSearchUpvue_type_script_lang_js_ = ({
  name: 'Ko7ProductList',
  components: {
    KoProductCard: ProductCard["default"]
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    settingGeneral: Object,
    settingKProdutCard: Object
  },
  mixins: [filterProducts["a" /* default */]],
  data() {
    return {
      search: '',
      currentPage: 1,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexCategory: 0,
      indexSelect: '',
      indexSelect2: ''
    };
  },
  mounted() {
    if (this.$route.query && this.$route.query.category) {
      this.sendCategoryUrlMix(this.$route.query.category);
    } else if (this.$route.query && this.$route.query.subcategory) {
      this.SendSubCategoryUrlMix(this.$route.query.subcategory, this.categorias, this.subcategories);
    } else if (this.$route.query && this.$route.query.tagId && this.$route.query.tagName) {
      this.sendTagUrlMix(this.$route.query.tagId, this.$route.query.tagName);
    } else if (this.$route.fullPath == '/') {
      this.allCategories();
    }
    if (this.previousPage) {
      this.currentPage = this.previousPage;
    }
    if (this.nameCategoryHeader && this.nameSubCategoryHeader == '') {
      this.$store.commit('SET_STATE_BANNER', false);
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: this.nameCategoryHeader
      });
    } else if (this.nameCategoryHeader && this.nameSubCategoryHeader) {
      this.$store.commit('SET_STATE_BANNER', false);
      let filtradoSubCategory = this.subcategories.find(element => element.nombre_subcategoria == this.nameSubCategoryHeader);
      if (filtradoSubCategory) {
        this.categorias.find(element => element.id == filtradoSubCategory.categoria);
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: filtradoSubCategory.id
        });
      }
    }
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
    heightHeader() {
      return this.$refs.header.offsetHeight;
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
    }
  },
  methods: {
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
      this.indexSelect2 = value;
      this.selectSubcategory = value;
      let filtradoCategory = this.subcategories.find(element => element.id == value);
      this.nameSubCategory = filtradoCategory.nombre_subcategoria;
      this.$store.commit('products/FILTER_BY', {
        type: ['subcategory'],
        data: value
      });
    },
    sendCategory(value, categoria, index, ref) {
      this.indexSelect = index;
      this.currentPage = 1;
      this.nameCategory = value.nombre_categoria_producto;
      this.indexCategory = index;
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
      this.$store.commit('SET_STATE_BANNER', true);
      this.$store.commit('SET_CATEGORY_PRODUCTO', '');
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
      this.$emit('clear');
      this.nameCategory = '';
    }
  },
  watch: {
    search(value) {
      this.SearchProduct2(value);
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
      if (this.$route.query && this.$route.query.category) {
        this.sendCategoryUrlMix(this.$route.query.category);
      } else if (this.$route.query && this.$route.query.subcategory) {
        this.SendSubCategoryUrlMix(this.$route.query.subcategory, this.categorias, this.subcategories);
      } else if (this.$route.query && this.$route.query.tagId && this.$route.query.tagName) {
        this.sendTagUrlMix(this.$route.query.tagId, this.$route.query.tagName);
      } else if (this.$route.fullPath == '/') {
        this.allCategories();
      }
    },
    searchValue(value) {
      this.SearchProduct2(value);
    }
  }
});
// CONCATENATED MODULE: ./components/template7/Ko-ProductListSearchUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var template7_Ko_ProductListSearchUpvue_type_script_lang_js_ = (Ko_ProductListSearchUpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/Ko-ProductListSearchUp.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(266)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template7_Ko_ProductListSearchUpvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7276f16f",
  "2b7ad69b"
  
)

/* harmony default export */ var Ko_ProductListSearchUp = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_b35add90_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_b35add90_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_b35add90_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_b35add90_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_b35add90_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-image[data-v-b35add90],.product-image-soldOut[data-v-b35add90]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.product-image-soldOut[data-v-b35add90]{filter:grayscale(100%)}.block-icon[data-v-b35add90]:hover,.transporte-icon[data-v-b35add90]:hover{fill:var(--hover_card)}.hearts-icon[data-v-b35add90]:hover{color:var(--hover_text)}.hearts-icon[data-v-b35add90]{color:#333;height:100%;width:100%}.producto-productCard[data-v-b35add90]{cursor:pointer;height:100%;justify-content:flex-start;margin-top:20px}.datos-producto[data-v-b35add90],.producto-productCard[data-v-b35add90]{align-items:center;display:flex;flex-direction:column}.datos-producto[data-v-b35add90]{justify-content:center;padding-top:16px;width:100%}.container-productCard[data-v-b35add90]{position:relative;width:100%}.image[data-v-b35add90]{display:block;height:auto;width:100%}.icon[data-v-b35add90]{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.cart-Shop[data-v-b35add90],.cart-Shop-mobile[data-v-b35add90]{font:inherit;font-size:100%;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.cart-Shop-mobile[data-v-b35add90]{justify-column:center}.color_tex_btn[data-v-b35add90]{color:var(--color_text_btn_card)}.icons-hover[data-v-b35add90]{grid-gap:0;--tw-text-opacity:1;color:#3f3f3f;color:rgba(63,63,63,var(--tw-text-opacity));display:grid;font:inherit;font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.icon-show-mobile[data-v-b35add90]{fill:#fff}.tittle[data-v-b35add90]{color:var(--color_text_card);font-family:var(--font-style-1)!important;font:inherit;font-size:100%}.categoria[data-v-b35add90]{color:var(--color_subtext_card);font-family:var(--font-style-3)!important;font:inherit;font-size:100%}.precio[data-v-b35add90]{color:var(--color_price_card);font-family:var(--font-style-3)!important;font-weight:600}.text-free[data-v-b35add90]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}.icon-overlay-free[data-v-b35add90]{color:#25db37}.text-sould[data-v-b35add90]{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);white-space:nowrap}@media (min-width:300px){.text-cart[data-v-b35add90]{display:none}.txt-cart[data-v-b35add90]{color:var(--color_text_btn_card);width:100%}.overlay-bottom[data-v-b35add90]{background:var(--color_background_btn_card);bottom:0;height:20%;left:10px;overflow:hidden;position:absolute;right:0;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:20%}.overlay-bottom[data-v-b35add90]:hover{background:var(--hover_card)}.overlay-top[data-v-b35add90]{--tw-bg-opacity:1;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:20%;left:80%;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:8%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:20%}.overlay-free[data-v-b35add90]{background-color:#25db37;border-radius:.25rem;height:10%;left:45%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:50%}.text-free[data-v-b35add90]{font-size:75%}.overlay-polygon[data-v-b35add90]{background-color:transparent;height:5%;left:85%;top:10%;width:5%}.overlay-polygon[data-v-b35add90],.overlay-sould[data-v-b35add90]{overflow:hidden;position:absolute;right:0}.overlay-sould[data-v-b35add90]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:60%;top:0;transition:.5s ease;width:35%}.svg-sould-out[data-v-b35add90]{height:40px;width:40px}.cart-shop[data-v-b35add90]{display:none}.content-price[data-v-b35add90]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.text-price[data-v-b35add90]{font-size:12px}.separator-price[data-v-b35add90]{margin-left:1px;margin-right:1px}}@media (max-width:425px){.icon[data-v-b35add90]{font-size:20px}.icon-show-mobile[data-v-b35add90]{width:20px}}@media (min-width:426px){.icon[data-v-b35add90]{font-size:25px}.icon-show-mobile[data-v-b35add90]{width:25px}}@media (min-width:530px){.icon[data-v-b35add90]{font-size:30px}.icon-show-mobile[data-v-b35add90]{width:30px}}@media (min-width:768px){.text-free[data-v-b35add90]{font-size:100%}.svg-sould-out[data-v-b35add90]{height:60px;width:60px}.text-price[data-v-b35add90]{font-size:15px}.separator-price[data-v-b35add90]{margin-left:4px;margin-right:4px}}@media (max-width:1279px){.overlay-bottom[data-v-b35add90]{align-items:center;bottom:10px;display:flex;height:18%;justify-content:center;left:10px;overflow:hidden;right:0;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:18%}.overlay-bottom[data-v-b35add90]:hover{background:var(--hover_card)}.cart-shop-mobile[data-v-b35add90]{display:flex}}@media (min-width:1280px){.icon[data-v-b35add90]{margin-top:0}.text-cart[data-v-b35add90]{display:block}.overlay-bottom[data-v-b35add90]{bottom:0;height:0;left:0;overflow:hidden;position:absolute;right:0;width:100%}.overlay-bottom[data-v-b35add90],.overlay-bottom[data-v-b35add90]:hover{transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.overlay-bottom[data-v-b35add90]:hover{background:var(--hover_card)}.container-productCard:hover .overlay-bottom[data-v-b35add90]{height:12%}.overlay-top[data-v-b35add90]{--tw-bg-opacity:1;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:20%;left:100%;overflow:hidden;position:absolute;right:0;top:6%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:0}.container-productCard:hover .overlay-top[data-v-b35add90]{left:85%;width:15%}.overlay-free[data-v-b35add90]{background-color:#25db37;border-radius:.25rem;height:10%;left:80%;overflow:hidden;position:absolute;right:0;top:0;transition:.5s ease;width:0}.container-productCard:hover .overlay-free[data-v-b35add90]{left:55%;transition-delay:.7s;width:44%}.text-free[data-v-b35add90]{font-size:100%}.overlay-polygon[data-v-b35add90]{background-color:transparent;height:5%;left:100%;overflow:hidden;position:absolute;right:0;top:10%;width:0}.container-productCard:hover .overlay-polygon[data-v-b35add90]{left:89%;transition-delay:.95s;width:5%}.overlay-sould[data-v-b35add90]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:100%;overflow:hidden;position:absolute;right:0;top:5%;transition:.5s ease;width:0}.container-productCard:hover .overlay-sould[data-v-b35add90]{left:65%;transition-delay:.7s;width:35%}.svg-sould-out[data-v-b35add90]{height:60px;width:60px}.cart-shop[data-v-b35add90]{display:flex}.cart-shop-mobile[data-v-b35add90]{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_productcard/ProductCard.vue?vue&type=template&id=b35add90&scoped=true&
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
  }], null) + " data-v-b35add90>", "</div>", [_c('nuxt-link', {
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
  })], 1), _vm._ssrNode(" " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-top\" data-v-b35add90><div class=\"icons-hover\" data-v-b35add90><div class=\"transport-icon\" data-v-b35add90>" + (!_vm.getFreeShipping && !_vm.soldOut ? "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"#333\" class=\"transporte-icon\" data-v-b35add90><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-b35add90></path></svg>" : "<!---->") + "</div></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-free\" data-v-b35add90><div class=\"text-free\" data-v-b35add90><p data-v-b35add90>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardGratis'))) + "</p></div></div>" : "<!---->") + " " + (!_vm.getFreeShipping && !_vm.soldOut ? "<div class=\"overlay-polygon\" data-v-b35add90><svg width=\"12px\" height=\"12px\" viewBox=\"0 0 255 255\" class=\"icon-overlay-free\" data-v-b35add90><polygon points=\"0,0 127.5,127.5 255,0\" class=\"fill-current\" data-v-b35add90></polygon></svg></div>" : "<!---->") + " " + (_vm.soldOut ? "<div class=\"overlay-sould\" data-v-b35add90><div class=\"text-sould\" data-v-b35add90><svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" enable-background=\"new 0 0 512 512\" viewBox=\"0 0 512 512\" class=\"svg-sould-out\" data-v-b35add90><g data-v-b35add90><g data-v-b35add90><path d=\"m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z\" fill=\"#cd3232\" data-v-b35add90></path></g> <g data-v-b35add90><path d=\"m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#cd3232\" data-v-b35add90></path></g> <g data-v-b35add90><path d=\"m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z\" fill=\"#ff4646\" data-v-b35add90></path></g> <g data-v-b35add90><circle cx=\"96\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-b35add90></circle></g> <g data-v-b35add90><circle cx=\"384\" cy=\"268.457\" fill=\"#cd3232\" r=\"16\" data-v-b35add90></circle></g> <g data-v-b35add90><path d=\"m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z\" fill=\"#463c4b\" data-v-b35add90></path></g> <g data-v-b35add90><circle cx=\"240\" cy=\"92.457\" fill=\"#ff4646\" r=\"24\" data-v-b35add90></circle></g> <g data-v-b35add90><g data-v-b35add90><path d=\"m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z\" fill=\"#32283c\" data-v-b35add90></path></g> <g data-v-b35add90><path d=\"m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#32283c\" data-v-b35add90></path></g> <g data-v-b35add90><path d=\"m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z\" fill=\"#e6e6eb\" data-v-b35add90></path></g> <g data-v-b35add90><path d=\"m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z\" fill=\"#32283c\" data-v-b35add90></path></g> <g data-v-b35add90><path d=\"m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z\" fill=\"#32283c\" data-v-b35add90></path></g> <g data-v-b35add90><path d=\"m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z\" fill=\"#e6e6eb\" data-v-b35add90></path></g> <path d=\"m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z\" fill=\"#e6e6eb\" data-v-b35add90></path></g></g></svg></div></div>" : "<!---->") + " "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div class=\"overlay-bottom\" data-v-b35add90>", "</div>", [_vm._ssrNode("<div class=\"cart-shop-mobile\" data-v-b35add90>", "</div>", [_vm._ssrNode("<div class=\"icon-cart\" data-v-b35add90>", "</div>", [_c('cart-icon', {
    staticClass: "icon"
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cart-Shop\" data-v-b35add90>", "</div>", [_vm._ssrNode((!_vm.hover ? "<div class=\"text-cart\" data-v-b35add90><p class=\"txt-cart\" data-v-b35add90>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_añadiralcarrito'))) + "</p></div>" : "<!---->") + " "), _vm.hover ? _vm._ssrNode("<div class=\"icon-cart\" data-v-b35add90>", "</div>", [_c('cart-icon', {
    staticClass: "icon"
  })], 1) : _vm._e()], 2)], 2) : _vm._ssrNode("<div class=\"overlay-bottom\" data-v-b35add90>", "</div>", [_vm._ssrNode("<div class=\"cart-shop-mobile\" data-v-b35add90><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 24 24\" class=\"icon-show-mobile\" data-v-b35add90><path d=\"M19 6H17A5 5 0 0 0 7 6H5A2 2 0 0 0 3 8V20A2 2 0 0 0 5 22H12.05A6.5 6.5 0 0 1 9 16.5A6.4 6.4 0 0 1 10.25 12.68A5 5 0 0 1 7 8H9A3 3 0 0 0 12 11H12.06A6.22 6.22 0 0 1 14.06 10.16A3 3 0 0 0 15 8H17A4.88 4.88 0 0 1 16.54 10.09A6.5 6.5 0 0 1 21 13.09V8A2 2 0 0 0 19 6M9 6A3 3 0 0 1 15 6M19.31 18.9A4.5 4.5 0 1 0 17.88 20.32L21 23.39L22.39 22M15.5 19A2.5 2.5 0 1 1 18 16.5A2.5 2.5 0 0 1 15.5 19Z\" data-v-b35add90></path></svg></div> "), _vm._ssrNode("<div class=\"cart-Shop\" data-v-b35add90>", "</div>", [_vm._ssrNode("<div class=\"text-cart\" data-v-b35add90>", "</div>", [_c('nuxt-link', {
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
  }], null) + " data-v-b35add90><div class=\"tittle\" data-v-b35add90>" + (this.product.nombre.length >= 54 ? "<p class=\"card-title\" data-v-b35add90>" + _vm._ssrEscape("\n        " + _vm._s(`${this.product.nombre.slice(0, 54)}...`) + "\n      ") + "</p>" : "<p class=\"card-title\" data-v-b35add90>" + _vm._ssrEscape("\n        " + _vm._s(`${this.product.nombre.slice(0, 54)}`) + "\n      ") + "</p>") + "</div> " + (this.product.categoria ? "<div class=\"categoria\" data-v-b35add90>" + _vm._ssrEscape("\n      " + _vm._s(this.product.categoria) + "\n    ") + "</div>" : "<!---->") + " <div class=\"precio\" data-v-b35add90>" + (this.product.precio ? "<div class=\"content-text-price\" data-v-b35add90>" + (this.estadoCart && this.equalsPrice ? "<div data-v-b35add90>" + (this.minPrice ? "<p class=\"text-price\" data-v-b35add90>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>" : this.estadoCart && this.minPrice != this.maxPrice && !this.equalsPrice ? "<div class=\"content-price\" data-v-b35add90>" + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-b35add90>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div>" : "<!---->") + " <p class=\"separator-price\" data-v-b35add90>-</p> " + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-b35add90>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</div>" : "<!---->") + "</div>" : "<div data-v-b35add90>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-b35add90>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p>" : "<!---->") + "</div>") + "</div>" : "<div class=\"h-20\" data-v-b35add90></div>") + "</div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/_productcard/ProductCard.vue?vue&type=template&id=b35add90&scoped=true&

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
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b35add90",
  "146d5d37"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=template7-ko-product-list-search-up.js.map