exports.ids = [273];
exports.modules = {

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp/template2/ko-slide-categorys.vue?vue&type=template&id=23dba92b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-slide-categorys"
  }, [_vm._ssrNode("<div class=\"content-categories\" data-v-23dba92b><div class=\"itens-slide-categories\" data-v-23dba92b><div" + _vm._ssrClass("tag", _vm.idCategory == '' ? 'active-tag' : 'disable-tag') + " data-v-23dba92b><p class=\"txt-category\" data-v-23dba92b>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('home_todo')) + "\n        ") + "</p></div> " + _vm._ssrList(_vm.categorias, function (categoria) {
    return "<div" + _vm._ssrClass("tag", categoria.id == _vm.idCategory ? 'active-tag' : 'disable-tag') + " data-v-23dba92b><p class=\"txt-category\" data-v-23dba92b>" + _vm._ssrEscape("\n          " + _vm._s(categoria.nombre_categoria_producto) + "\n        ") + "</p></div>";
  }) + "</div></div> " + (_vm.settingByTemplate.state_subcategorias == 1 && _vm.selectedSubcategories.length > 0 ? "<div class=\"content-categories\" data-v-23dba92b><div class=\"itens-slide-categories\" data-v-23dba92b>" + _vm._ssrList(_vm.selectedSubcategories, function (subcategorys, index) {
    return "<div" + _vm._ssrClass("tag", subcategorys.id == _vm.idSubCategory ? 'active-tag' : 'disable-tag') + " data-v-23dba92b><p class=\"txt-category\" data-v-23dba92b>" + _vm._ssrEscape("\n          " + _vm._s(subcategorys.nombre_subcategoria) + "\n        ") + "</p></div>";
  }) + "</div></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/whatsapp/template2/ko-slide-categorys.vue?vue&type=template&id=23dba92b&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp/template2/ko-slide-categorys.vue?vue&type=script&lang=js&
/* harmony default export */ var ko_slide_categorysvue_type_script_lang_js_ = ({
  name: 'CategorySlideWa-2',
  props: {
    dataStore: Object,
    settingByTemplate: Object
  },
  data() {
    return {
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      idCategory: '',
      idSubCategory: ''
    };
  },
  computed: {
    categorias() {
      return this.dataStore.categorias;
    },
    subcategories() {
      return this.dataStore.subcategorias;
    },
    product() {
      return this.$store.getters['products/allProduct'];
    },
    stateWapiME() {
      return this.$store.state.stateWapiME;
    }
  },
  methods: {
    SendSubCategory(value) {
      this.idSubCategory = value;
      if (this.stateWapiME) {
        this.$router.push(`/wa/${this.dataStore.tienda.id_tienda}`);
      } else {
        this.$router.push(`/`);
      }
      this.$store.commit('SET_STATE_BANNER', false);
      let filtradoSubCategory = this.subcategories.find(element => element.id == value);
      if (filtradoSubCategory && filtradoSubCategory.categoria) {
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
        this.$store.commit('SET_PREVIOUS_PAGE', 1);
      }
    },
    sendCategory(value, categoria, ref) {
      this.idCategory = categoria;
      if (this.stateWapiME) {
        this.$router.push(`/wa/${this.dataStore.tienda.id_tienda}`);
      } else {
        this.$router.push(`/`);
      }
      this.$store.commit('SET_STATE_BANNER', false);
      this.nameCategory = value.nombre_categoria_producto;
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory);
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
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
      this.$store.commit('SET_PREVIOUS_PAGE', 1);
    },
    clear() {
      this.idCategory = '';
      this.idSubCategory = '';
      this.selectedSubcategories = '';
      this.$store.commit('SET_STATE_BANNER', true);
      this.$store.commit('SET_CATEGORY_PRODUCTO', '');
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$router.push({
        path: '',
        query: {}
      });
      if (this.stateWapiME) {
        this.$router.push(`/wa/${this.dataStore.tienda.id_tienda}`);
      } else {
        this.$router.push(`/`);
      }
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
      this.$emit('clear');
    }
  }
});
// CONCATENATED MODULE: ./components/whatsapp/template2/ko-slide-categorys.vue?vue&type=script&lang=js&
 /* harmony default export */ var template2_ko_slide_categorysvue_type_script_lang_js_ = (ko_slide_categorysvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/whatsapp/template2/ko-slide-categorys.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(850)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template2_ko_slide_categorysvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23dba92b",
  "bb16254e"
  
)

/* harmony default export */ var ko_slide_categorys = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(851);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("44f8b4be", content, true, context)
};

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_slide_categorys_vue_vue_type_style_index_0_id_23dba92b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(429);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_slide_categorys_vue_vue_type_style_index_0_id_23dba92b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_slide_categorys_vue_vue_type_style_index_0_id_23dba92b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_slide_categorys_vue_vue_type_style_index_0_id_23dba92b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_slide_categorys_vue_vue_type_style_index_0_id_23dba92b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-slide-categorys[data-v-23dba92b]{--tw-bg-opacity:1;align-items:center;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding-bottom:5px;padding-top:5px;position:sticky;top:0;width:100%;z-index:10}@media (min-width:300px){.content-categories[data-v-23dba92b]{border-bottom-width:1px;border-color:#d6d6d6;justify-content:center;margin-bottom:10px;padding-bottom:10px;width:90%}.content-categories[data-v-23dba92b],.itens-slide-categories[data-v-23dba92b]{align-items:center;display:flex;flex-direction:row}.itens-slide-categories[data-v-23dba92b]{overflow-x:auto;overflow-y:hidden;width:100%}.itens-slide-categories[data-v-23dba92b]::-webkit-scrollbar{background:transparent;display:none}.active-tag[data-v-23dba92b]{background-color:#eaeaea;border-radius:.375rem}.active-tag[data-v-23dba92b],.disable-tag[data-v-23dba92b]{align-items:center;cursor:pointer;display:flex;justify-content:center;margin-right:18px;padding-left:8px;padding-right:8px}.disable-tag[data-v-23dba92b]{border-radius:100px}.txt-category[data-v-23dba92b]{align-items:center;color:#3d3d3d;display:flex;flex-direction:column;font-family:\"Poppins\",sans-serif!important;font-size:14px;font-weight:500;justify-content:center;width:100%}.tag[data-v-23dba92b]{align-items:center;background-color:#fff;color:#000;cursor:pointer;display:flex;font-size:12px;font-weight:600;height:50px;margin-right:5px;padding:3px 12px;transition:all .6s ease-in;white-space:nowrap}}@media (min-width:768px){.txt-category[data-v-23dba92b]{font-size:16px}.active-tag[data-v-23dba92b]{background-color:#eaeaea;padding-bottom:4px;padding-top:4px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=273.js.map