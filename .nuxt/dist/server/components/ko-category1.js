exports.ids = [49];
exports.modules = {

/***/ 1040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/Ko-Category-1.vue?vue&type=template&id=dff0dde4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper_Category"
  }, [_vm._ssrNode("<div class=\"content_Category\" data-v-dff0dde4><div class=\"content-item-category\" data-v-dff0dde4><ul class=\"content-card\" data-v-dff0dde4><div class=\"wrapper-image\" data-v-dff0dde4><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdgeNil1eNY8XKW_XrVp9EUThSQghe12-sAA&usqp=CAU\" alt=\"Category Img\" class=\"product-image\" data-v-dff0dde4></div> <div class=\"content-text\" data-v-dff0dde4><p class=\"name-category\" data-v-dff0dde4>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('header_allProduct')) + "\n          ") + "</p></div></ul> " + _vm._ssrList(_vm.categorias, function (categoria) {
    return "<ul" + _vm._ssrClass("content-card", categoria.id == _vm.idCategory ? 'content-card-active ' : '') + " data-v-dff0dde4><div class=\"wrapper-image\" data-v-dff0dde4><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdgeNil1eNY8XKW_XrVp9EUThSQghe12-sAA&usqp=CAU\" alt=\"Category Img\" class=\"product-image\" data-v-dff0dde4></div> <div class=\"content-text\" data-v-dff0dde4><p class=\"name-category\" data-v-dff0dde4>" + _vm._ssrEscape("\n            " + _vm._s(categoria.nombre_categoria_producto) + "\n          ") + "</p></div></ul>";
  }) + "</div> " + (_vm.idCategory ? "<div class=\"content-item-category\" data-v-dff0dde4>" + _vm._ssrList(_vm.subcategories, function (subcategory, key) {
    return "<div style=\"margin-top: 10px; margin-bottom: 10px\" data-v-dff0dde4>" + (subcategory.categoria == _vm.idCategory ? "<div data-v-dff0dde4><button" + _vm._ssrClass("tags", subcategory.id == _vm.indexSelect ? 'tags-active' : '') + " data-v-dff0dde4>" + _vm._ssrEscape("\n            " + _vm._s(subcategory.nombre_subcategoria) + "\n          ") + "</button></div>" : "<!---->") + "</div>";
  }) + "</div>" : "<!---->") + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/Ko-Category-1.vue?vue&type=template&id=dff0dde4&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/Ko-Category-1.vue?vue&type=script&lang=js&
// import idCloudinary from '../../mixins/idCloudinary'
/* harmony default export */ var Ko_Category_1vue_type_script_lang_js_ = ({
  // mixins: [idCloudinary],
  name: 'Ko-Category-1',
  props: {
    dataStore: Object
  },
  data() {
    return {
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      idCategory: '',
      indexSelect: ''
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
    }
  },
  methods: {
    SendSubCategory(value) {
      this.indexSelect = value;
      this.$store.commit('SET_STATE_BANNER', false);
      this.selectSubcategory = value;
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
      this.idCategory = categoria;
      this.$store.commit('SET_STATE_BANNER', false);
      this.nameCategory = value.nombre_categoria_producto;
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory);
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.selectedSubcategories = [];
      this.$router.push({
        path: '/productos',
        query: {
          category: this.nameCategory
        }
      });
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
      this.showMenu = false;
      this.$router.push({
        path: '/productos',
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
    }
  },
  watch: {}
});
// CONCATENATED MODULE: ./components/template7/Ko-Category-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var template7_Ko_Category_1vue_type_script_lang_js_ = (Ko_Category_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/Ko-Category-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(639)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template7_Ko_Category_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "dff0dde4",
  "a2aff1f2"
  
)

/* harmony default export */ var Ko_Category_1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(640);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("42ca1f0e", content, true, context)
};

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Category_1_vue_vue_type_style_index_0_id_dff0dde4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Category_1_vue_vue_type_style_index_0_id_dff0dde4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Category_1_vue_vue_type_style_index_0_id_dff0dde4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Category_1_vue_vue_type_style_index_0_id_dff0dde4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Category_1_vue_vue_type_style_index_0_id_dff0dde4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_Category[data-v-dff0dde4]{align-items:center;background-color:var(--background_color_2);box-sizing:border-box;z-index:3}.content_Category[data-v-dff0dde4],.wrapper_Category[data-v-dff0dde4]{display:flex;justify-content:center;width:100%}.content_Category[data-v-dff0dde4]{align-items:flex-start;flex-direction:column;max-width:1300px;padding:5px 20px}.content-item-category[data-v-dff0dde4]{display:flex;flex-direction:row;overflow-x:auto;overflow-y:hidden;width:100%}.content-item-category[data-v-dff0dde4]::-webkit-scrollbar{background:transparent;border:1px solid hsla(0,0%,63%,.589);height:8px}.content-item-category[data-v-dff0dde4]::-webkit-scrollbar-track{border-radius:10px;box-shadow:inset 0 0 10px #fff}.content-item-category[data-v-dff0dde4]::-webkit-scrollbar-thumb{background:var(--color_border);border-radius:10px}.content-item-category[data-v-dff0dde4]::-webkit-scrollbar-thumb:hover{background:var(--btnhover)}.content-card[data-v-dff0dde4]{align-items:center;background-color:#fff;border:1px solid var(--color_border);border-radius:10px;display:flex;flex-direction:column;justify-content:flex-start;margin-bottom:5px;margin-right:10px;max-width:130px;min-height:120px;min-width:130px;width:100%}.content-card-active[data-v-dff0dde4],.content-card[data-v-dff0dde4]:hover{box-shadow:0 0 2px 1px var(--color_border)}.wrapper-image[data-v-dff0dde4]{align-items:center;border-radius:10px 10px 0 0;cursor:pointer;display:flex;justify-content:center;max-height:85px;max-width:130px;overflow:hidden;position:relative;width:100%}.product-image[data-v-dff0dde4]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.content-text[data-v-dff0dde4]{align-items:center;display:flex;height:100%;justify-content:center;max-height:40px;width:100%}.name-category[data-v-dff0dde4]{color:var(--color_text);cursor:pointer;font-size:14px;font-weight:700;margin-top:3px;text-align:center}.name-category[data-v-dff0dde4]:hover{color:var(--hover_text)}.tags[data-v-dff0dde4]{background-color:#fff;border:1px solid var(--color_background_btn);border-radius:10px;color:var(--color_background_btn);cursor:pointer;font-size:14px;font-weight:700;height:30px;margin-right:10px;padding:3px 12px;transition:all .2s ease-in;white-space:nowrap}.tags[data-v-dff0dde4]:hover{background:var(--hover_card)}.tags-active[data-v-dff0dde4],.tags[data-v-dff0dde4]:hover{border:1px solid var(--color_border)}.tags-active[data-v-dff0dde4]{color:var(--btnhover)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=ko-category1.js.map