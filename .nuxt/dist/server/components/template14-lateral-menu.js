exports.ids = [3];
exports.modules = {

/***/ 1281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/_lateral/_lateralMenu.vue?vue&type=template&id=aeae5ed4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-drawer', {
    attrs: {
      "visible": _vm.openMenuLeft,
      "direction": "rtl",
      "size": "100%",
      "withHeader": false,
      "modal-append-to-body": false
    },
    on: {
      "update:visible": function ($event) {
        _vm.openMenuLeft = $event;
      }
    }
  }, [_c('div', {
    staticClass: "my-20 px-15 flex flex-col justify-between items-start w-full content-left",
    style: [_vm.settingByTemplate]
  }, [_c('div', {
    staticClass: "w-full flex justify-between items-center pb-10"
  }, [_c('p', {
    staticClass: "w-auto uppercase font-semibold cursor-pointer text-16 text-gray-800",
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('header_buscar_limpiar')) + "\n      ")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.closed
    }
  }, [_c('close-icon', {
    staticClass: "text-25 text-gray-800"
  })], 1)]), _vm._v(" "), _c('el-collapse', {
    model: {
      value: _vm.activeNames,
      callback: function ($$v) {
        _vm.activeNames = $$v;
      },
      expression: "activeNames"
    }
  }, [_c('el-collapse-item', {
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
    staticClass: "w-full grid grid-cols-1 gap-4 justify-start items-center transition-all ease-in duration-0.2"
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
    }, [_vm._v("\n                " + _vm._s(categorys.nombre_categoria_producto) + "\n              ")])])]);
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
    staticClass: "w-full grid grid-cols-1 gap-4 justify-start items-center transition-all ease-in duration-0.2"
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
    }, [_vm._v("\n                " + _vm._s(subcategorys.nombre_subcategoria) + "\n              ")])])]);
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
      staticClass: "w-full grid grid-cols-1 gap-4 justify-start items-center"
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
      }, [_vm._v("\n              " + _vm._s(itemsProperties.name) + "\n            ")]);
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
    staticClass: "w-full grid grid-cols-1 gap-4 justify-start items-center"
  }, [_c('button', {
    staticClass: "txt-Filter",
    on: {
      "click": function ($event) {
        return _vm.getProductsFilter('ShippingFree');
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('home_gratis')) + "\n          ")]), _vm._v(" "), _c('button', {
    staticClass: "txt-Filter",
    on: {
      "click": function ($event) {
        return _vm.getProductsFilter('NoShippingFree');
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('home_Singratis')) + "\n          ")])])]), _vm._v(" "), _c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('home_fprecio'),
      "name": "5"
    }
  }, [_c('div', {
    staticClass: "w-full grid grid-cols-1 gap-4 justify-start items-center"
  }, [_c('button', {
    staticClass: "txt-Filter",
    on: {
      "click": function ($event) {
        return _vm.getProductsFilter('higherNumber');
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('home_fpreciom')) + "\n          ")]), _vm._v(" "), _c('button', {
    staticClass: "txt-Filter",
    on: {
      "click": function ($event) {
        return _vm.getProductsFilter('smallerNumber');
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('home_fprecioM')) + "\n          ")])])])], 2)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/_lateral/_lateralMenu.vue?vue&type=template&id=aeae5ed4&scoped=true&

// EXTERNAL MODULE: ./mixins/filterProducts.js
var filterProducts = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/_lateral/_lateralMenu.vue?vue&type=script&lang=js&

/* harmony default export */ var _lateralMenuvue_type_script_lang_js_ = ({
  name: 'Ko-MenuLeft-15',
  mixins: [filterProducts["a" /* default */]],
  props: {
    dataStore: Object,
    settingByTemplate: Object
  },
  components: {
    BaseAccordion: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 63))
  },
  data() {
    return {
      // search: '',
      currentPage: 1,
      showSubCategory: false,
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
    allTags() {
      return this.$store.getters['products/filterTags'];
    },
    openMenuLeft() {
      return this.$store.state.openMenuLateralLeft;
    },
    categorias() {
      return this.dataStore.categorias;
    },
    subcategories() {
      return this.dataStore.subcategorias;
    },
    etiqueta1() {
      return this.$store.state.products.payloadTagName;
    },
    etiqueta2() {
      return this.$store.state.products.payloadTag2Name;
    }
  },
  methods: {
    closed() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false);
    },
    SendSubCategory(value) {
      this.indexSelect2 = value;
      this.$store.commit('SET_PREVIOUS_PAGE', 1);
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false);
      let filtradoSubCategory = this.subcategories.find(element => element.id == value);
      let filtradoCategories = this.categorias.find(element => element.id == filtradoSubCategory.categoria);
      this.$store.commit('SET_CATEGORY_PRODUCTO', filtradoCategories.nombre_categoria_producto);
      this.nameSubCategory = filtradoSubCategory.nombre_subcategoria;
      this.$router.push({
        path: '/productos',
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
    sendCategory(value, categoria, ref) {
      this.indexSelect = categoria;
      this.$store.commit('SET_PREVIOUS_PAGE', 1);
      this.nameCategory = value.nombre_categoria_producto;
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory);
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$router.push({
        path: '/productos',
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
      if (this.selectedSubcategories.length === 0) {
        this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false);
      }
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto
      });
    },
    clear() {
      this.$router.push({
        path: '/productos'
      });
      this.showMenu = false;
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false);
      this.$store.commit('SET_CATEGORY_PRODUCTO', '');
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
      this.$emit('clear');
      this.nameCategory = '';
    }
  }
});
// CONCATENATED MODULE: ./components/template14/_lateral/_lateralMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var _lateral_lateralMenuvue_type_script_lang_js_ = (_lateralMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/_lateral/_lateralMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(978)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _lateral_lateralMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "aeae5ed4",
  "0b01e271"
  
)

/* harmony default export */ var _lateralMenu = __webpack_exports__["default"] = (component.exports);

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

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(979);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2e7c0456", content, true, context)
};

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lateralMenu_vue_vue_type_style_index_0_id_aeae5ed4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(587);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lateralMenu_vue_vue_type_style_index_0_id_aeae5ed4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lateralMenu_vue_vue_type_style_index_0_id_aeae5ed4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lateralMenu_vue_vue_type_style_index_0_id_aeae5ed4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lateralMenu_vue_vue_type_style_index_0_id_aeae5ed4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-left[data-v-aeae5ed4] .el-collapse{background:var(--background_color_1);border-bottom:1px solid var(--color_icon);border-top:1px solid var(--color_icon);width:100%}.content-left[data-v-aeae5ed4] .el-collapse-item__wrap{background-color:transparent;border-bottom:1px solid var(--color_icon);will-change:height}.content-left[data-v-aeae5ed4] .el-collapse-item__header{background-color:transparent;border-bottom:1px solid var(--color_icon);color:var(--color_subCategories);font-size:15px;font-weight:600}.content-left[data-v-aeae5ed4] .el-collapse-item__header.is-active{border-bottom:none}.content-left[data-v-aeae5ed4] .el-collapse-item__arrow{color:var(--color_icon)}.txt-Filter[data-v-aeae5ed4]{align-items:center;color:var(--color_categories);cursor:pointer;display:flex;flex-direction:row;font-size:15px;font-weight:400;justify-content:flex-start;line-height:1.3;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-Filter[data-v-aeae5ed4]:hover{color:#eb7025}.txt-categorys[data-v-aeae5ed4]{align-items:center;color:var(--color_categories);cursor:pointer;display:flex;flex-direction:row;font-size:15px;font-weight:400;justify-content:flex-start;line-height:1.3;padding-right:1px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-categorys[data-v-aeae5ed4]:hover{color:#eb7025}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template14-lateral-menu.js.map