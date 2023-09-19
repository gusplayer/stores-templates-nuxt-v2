exports.ids = [233,213];
exports.modules = {

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("27f64ba6", content, true, context)
};

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_openMenuLeft_vue_vue_type_style_index_0_id_4d2cf448_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_openMenuLeft_vue_vue_type_style_index_0_id_4d2cf448_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_openMenuLeft_vue_vue_type_style_index_0_id_4d2cf448_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_openMenuLeft_vue_vue_type_style_index_0_id_4d2cf448_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_openMenuLeft_vue_vue_type_style_index_0_id_4d2cf448_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".order[data-v-4d2cf448]{background-color:rgba(0,0,0,.5);justify-content:flex-end;position:fixed;top:0;z-index:6}.order[data-v-4d2cf448],.order_content[data-v-4d2cf448]{display:flex;height:100vh;left:0;width:100%}.order_content[data-v-4d2cf448]{align-items:center;animation:dispatch-4d2cf448 .2s linear 1;background-color:var(--background_color_1);box-sizing:border-box;flex:none;flex-direction:column;max-width:400px;overflow:auto;overflow:hidden;padding-bottom:10px;position:absolute}@keyframes dispatch-4d2cf448{0%{left:-400px}to{left:0}}.order_content>div[data-v-4d2cf448]{box-sizing:border-box;width:100%}.order_header[data-v-4d2cf448]{align-items:center;border-bottom:1px solid var(--color_border);display:flex;flex:none;justify-content:space-between;padding:5px 30px}.header-content-logo[data-v-4d2cf448]{align-items:center;display:flex;justify-content:center}.wrapper-logo[data-v-4d2cf448]{width:100%}.header-logo[data-v-4d2cf448]{max-height:60px;-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left}.order_header_close[data-v-4d2cf448]{color:var(--color_icon);cursor:pointer;font-size:30px;transition:.3s}.order_header_close[data-v-4d2cf448]:hover{color:gray}.wrapper-category-all[data-v-4d2cf448]{display:flex;flex-direction:column;margin-top:10px;overflow-x:auto;padding:10px 30px;width:100%}.name-category-all[data-v-4d2cf448]{color:var(--color_text);font-size:16px;margin-bottom:5px}.name-category-all[data-v-4d2cf448]:hover{color:var(--color_hover_text)}.text-categoria[data-v-4d2cf448]{color:var(--color_text);font-size:16px;width:100%}.text-categoria[data-v-4d2cf448]:hover{color:var(--color_hover_text)}.text-subcategoria[data-v-4d2cf448]{color:var(--color_subtext);font-size:16px;width:100%}.text-categoria-active[data-v-4d2cf448],.text-subcategoria-active[data-v-4d2cf448],.text-subcategoria[data-v-4d2cf448]:hover{color:var(--color_hover_text)}.wrapper-secciones[data-v-4d2cf448]{align-items:flex-start;display:flex;flex-direction:column;margin-left:20px;margin-top:15px;width:100%}.text-secciones[data-v-4d2cf448]{color:var(--color_text);font-size:16px}.text-secciones[data-v-4d2cf448]:hover{color:var(--color_hover_text)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/_order1/openMenuLeft.vue?vue&type=template&id=4d2cf448&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.openMenuLeft,
      expression: "openMenuLeft"
    }],
    staticClass: "order",
    on: {
      "click": _vm.closeOrder
    }
  }, [_c('div', {
    staticClass: "order_content"
  }, [_c('div', {
    staticClass: "order_header"
  }, [_c('div', {
    staticClass: "header-content-logo"
  }, [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/",
      "id": "tamaño-img"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n                `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n              "
    }],
    staticClass: "header-logo",
    attrs: {
      "alt": "Logo Img"
    }
  })])], 1), _vm._v(" "), _c('label', {
    staticClass: "order_header_close",
    attrs: {
      "for": "order_close"
    },
    on: {
      "click": _vm.closed
    }
  }, [_c('close-icon')], 1)]), _vm._v(" "), [_vm.showMenu ? _c('div', {
    staticClass: "wrapper-category-all"
  }, [_c('li', {
    on: {
      "click": _vm.clear
    }
  }, [_c('p', {
    staticClass: "name-category-all"
  }, [_vm._v(_vm._s(_vm.$t('header_allProduct')))])]), _vm._v(" "), _vm._l(_vm.categorias, function (categoria) {
    return _c('div', {
      key: categoria.id,
      staticClass: "contenedor-modulos"
    }, [_c('BaseAccordian', {
      scopedSlots: _vm._u([{
        key: "categorias",
        fn: function () {
          return [_c('li', {
            staticClass: "close text-categoria",
            class: categoria.id == _vm.indexSelect ? 'text-categoria-active' : '',
            on: {
              "click": function ($event) {
                _vm.sendCategory(categoria, categoria.id, _vm.index, _vm.ref = false);
              }
            }
          }, [_vm._v("\n                  " + _vm._s(categoria.nombre_categoria_producto) + "\n                ")])];
        },
        proxy: true
      }, {
        key: "subcategorias",
        fn: function () {
          return [_vm._l(_vm.subcategories, function (subcategory, key) {
            return _c('div', {
              key: key
            }, [subcategory.categoria == categoria.id ? _c('li', {
              staticClass: "close text-subcategoria",
              class: subcategory.id == _vm.indexSelect2 ? 'text-subcategoria-active' : '',
              on: {
                "click": function ($event) {
                  return _vm.SendSubCategory(subcategory.id);
                }
              }
            }, [_vm._v("\n                      " + _vm._s(subcategory.nombre_subcategoria) + "\n                    ")]) : _vm._e()]);
          })];
        },
        proxy: true
      }], null, true)
    })], 1);
  })], 2) : _c('div', {
    staticClass: "wrapper-secciones"
  }, _vm._l(_vm.secciones, function (item, index) {
    return _c('div', {
      key: `${index}${item.name}`,
      staticStyle: {
        "margin-bottom": "20px"
      },
      on: {
        "click": _vm.closed
      }
    }, [_c('nuxt-link', {
      staticClass: "text-secciones",
      attrs: {
        "to": item.path
      }
    }, [item.path ? _c(item.icon, {
      tag: "div",
      staticClass: "icon"
    }) : _vm._e(), _vm._v("\n              " + _vm._s(_vm.$t(`${item.name}`)) + "\n            ")], 1)], 1);
  }), 0)]], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/headers/_order1/openMenuLeft.vue?vue&type=template&id=4d2cf448&scoped=true&

// EXTERNAL MODULE: ./components/headers/_order1/_BaseAccordion1.vue + 4 modules
var _BaseAccordion1 = __webpack_require__(70);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/_order1/openMenuLeft.vue?vue&type=script&lang=js&

/* harmony default export */ var openMenuLeftvue_type_script_lang_js_ = ({
  name: 'Ko-MenuLeft-2',
  props: {
    dataStore: Object,
    showMenu: Boolean
  },
  components: {
    BaseAccordian: _BaseAccordion1["default"]
  },
  mounted() {},
  data() {
    return {
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexSelect: '',
      indexSelect2: '',
      secciones: [{
        name: 'header_inicio',
        path: '/',
        icon: 'menu-icon'
      }, {
        name: 'header_carrito',
        path: '/cart',
        icon: 'cart-icon'
      }, {
        name: 'header_contacto',
        path: '/contacto',
        icon: 'account-icon'
      }]
    };
  },
  computed: {
    logoImg() {
      return this.$store.state.dataStore.tienda.logo;
    },
    openMenuLeft() {
      return this.$store.state.openMenuLateralLeft;
    },
    categorias() {
      return this.dataStore.categorias;
    },
    subcategories() {
      return this.dataStore.subcategorias;
    }
  },
  methods: {
    closed() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false);
    },
    closeOrder(event) {
      const element = event.target.className;
      if (element === 'order' || element === 'order_header_close' || element === 'continue_shopping' || element === 'continue_shopping2') {
        this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false);
      }
    },
    SendSubCategory(value) {
      this.indexSelect2 = value;
      this.$store.commit('SET_PREVIOUS_PAGE', 1);
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false);
      this.selectSubcategory = value;
      let filtradoSubCategory = this.subcategories.find(element => element.id == value);
      let filtradoCategories = this.categorias.find(element => element.id == filtradoSubCategory.categoria);
      this.$store.commit('SET_CATEGORY_PRODUCTO', filtradoCategories.nombre_categoria_producto);
      this.nameSubCategory = filtradoSubCategory.nombre_subcategoria;
      this.$router.push({
        path: '/',
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
      this.selectedSubcategories = [];
      this.$router.push({
        path: '/',
        query: {
          category: this.nameCategory
        }
      });
      this.subcategories.find(subcategoria => {
        if (subcategoria.categoria === categoria) {
          this.toggleCategories = false;
          this.selectedSubcategories.push(subcategoria);
        }
      });
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto
      });
    },
    clear() {
      this.$router.push({
        path: '/',
        query: {}
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
// CONCATENATED MODULE: ./components/headers/_order1/openMenuLeft.vue?vue&type=script&lang=js&
 /* harmony default export */ var _order1_openMenuLeftvue_type_script_lang_js_ = (openMenuLeftvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/headers/_order1/openMenuLeft.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _order1_openMenuLeftvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4d2cf448",
  "143ad516"
  
)

/* harmony default export */ var openMenuLeft = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f72380f0", content, true, context)
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/_order1/_BaseAccordion1.vue?vue&type=template&id=36e8f284&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper"
  }, [_vm._ssrNode("<div class=\"accordion\" data-v-36e8f284>", "</div>", [_vm._ssrNode("<div class=\"accordion-items\" data-v-36e8f284>", "</div>", [_vm._t("categorias"), _vm._ssrNode(" "), !_vm.show ? _c('Flechadown-icon', {
    staticClass: "icon"
  }) : _vm._e(), _vm._ssrNode(" "), _vm.show ? _c('FlechaUp-icon', {
    staticClass: "icon"
  }) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\"" + _vm._ssrStyle(null, null, {
    display: _vm.show ? '' : 'none'
  }) + " data-v-36e8f284>", "</div>", [_vm._t("subcategorias")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/headers/_order1/_BaseAccordion1.vue?vue&type=template&id=36e8f284&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/_order1/_BaseAccordion1.vue?vue&type=script&lang=js&
/* harmony default export */ var _BaseAccordion1vue_type_script_lang_js_ = ({
  name: 'Ko-aseAccordion-header-2',
  data: function () {
    return {
      show: false
    };
  },
  methods: {
    toggleItem: function () {
      this.show = !this.show;
    }
  }
});
// CONCATENATED MODULE: ./components/headers/_order1/_BaseAccordion1.vue?vue&type=script&lang=js&
 /* harmony default export */ var _order1_BaseAccordion1vue_type_script_lang_js_ = (_BaseAccordion1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/headers/_order1/_BaseAccordion1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _order1_BaseAccordion1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "36e8f284",
  "43288264"
  
)

/* harmony default export */ var _BaseAccordion1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseAccordion1_vue_vue_type_style_index_0_id_36e8f284_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseAccordion1_vue_vue_type_style_index_0_id_36e8f284_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseAccordion1_vue_vue_type_style_index_0_id_36e8f284_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseAccordion1_vue_vue_type_style_index_0_id_36e8f284_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseAccordion1_vue_vue_type_style_index_0_id_36e8f284_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-36e8f284]{background:transparent;padding:5px 0;width:100%}.accordion[data-v-36e8f284]{cursor:pointer;margin:0}.accordion[data-v-36e8f284],.accordion-items[data-v-36e8f284]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;width:100%}.accordion-items[data-v-36e8f284]{border-top:1px solid var(--color_border);padding-top:3px}.content[data-v-36e8f284]{align-items:flex-start;display:flex;flex-direction:column;margin-top:10px;padding-left:2px;width:100%}.icon[data-v-36e8f284]{color:var(--color_icon);font-size:22px}.icon[data-v-36e8f284]:hover{color:var(--color_hover_text)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=headers-order1-open-menu-left.js.map