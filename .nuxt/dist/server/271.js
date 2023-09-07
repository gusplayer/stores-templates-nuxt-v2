exports.ids = [271];
exports.modules = {

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp/categorys_img/ko-categorys-img.vue?vue&type=template&id=5092318e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-slide-categorys"
  }, [_vm._ssrNode("<div class=\"content-categories\" data-v-5092318e>", "</div>", [this.categorias.length > 5 ? _vm._ssrNode("<div class=\"btn-scroll mr-10\" data-v-5092318e>", "</div>", [_c('FlechaLeft-icon', {
    staticClass: "btn-scroll-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"swiper-slide-categories\" class=\"itens-slide-categories\" data-v-5092318e>", "</div>", [_vm._ssrNode("<div class=\"wrapper-img-text\" data-v-5092318e>" + (_vm.dataStore.tienda.id_tienda == 12664 ? "<img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_80,q_auto:best,f_auto/v1649430112/Xiaomi_logo__2021_ejxsbk.png\" alt=\"icon all\" class=\"product-image\" data-v-5092318e>" : "<img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_80,q_auto:best,f_auto/v1649430214/2549900_umsosz.png\" alt=\"icon all\" class=\"product-image\" data-v-5092318e>") + " <div class=\"tag\" data-v-5092318e><p" + _vm._ssrClass("txt-category", _vm.idCategory == '' ? 'active-tag ' : 'disable-tag') + _vm._ssrStyle(null, `border-color: ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario && _vm.idCategory == '' ? _vm.settingByTemplate.color_primario : '#25D366'};`, null) + " data-v-5092318e>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_todo')) + "\n          ") + "</p></div></div> "), _vm._l(_vm.categorias, function (categoria) {
    return _vm._ssrNode("<div class=\"wrapper-img-text\" data-v-5092318e>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: categoria.imagen_cloudinary == null ? 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_80,q_auto:best,f_auto/v1649367838/2659360_s1ap5f.png' : _vm.idCloudinary(categoria.imagen_cloudinary, 150, 150),
        expression: "\n            categoria.imagen_cloudinary == null\n              ? 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_80,q_auto:best,f_auto/v1649367838/2659360_s1ap5f.png'\n              : idCloudinary(categoria.imagen_cloudinary, 150, 150)\n          "
      }],
      staticClass: "product-image",
      class: categoria.imagen_cloudinary == 'sin_foto.jpeg' ? 'notproduct-image-res' : '',
      attrs: {
        "alt": "icon category"
      }
    }, []), _vm._ssrNode(" <div class=\"tag\" data-v-5092318e><p" + _vm._ssrClass("txt-category", categoria.id == _vm.idCategory ? 'active-tag' : 'disable-tag') + _vm._ssrStyle(null, `border-color: ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario && categoria.id == _vm.idCategory ? _vm.settingByTemplate.color_primario : '#25D366'};`, null) + " data-v-5092318e>" + _vm._ssrEscape("\n            " + _vm._s(categoria.nombre_categoria_producto) + "\n          ") + "</p></div>")], 2);
  })], 2), _vm._ssrNode(" "), this.categorias.length > 5 ? _vm._ssrNode("<div class=\"btn-scroll ml-10\" data-v-5092318e>", "</div>", [_c('FlechaRight-icon', {
    staticClass: "btn-scroll-icon"
  })], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm.settingByTemplate.state_subcategorias == 1 && _vm.selectedSubcategories.length > 0 ? _vm._ssrNode("<div class=\"content-categories\" data-v-5092318e>", "</div>", [_vm._ssrNode("<div class=\"itens-slide-categories\" data-v-5092318e>", "</div>", _vm._l(_vm.selectedSubcategories, function (subcategorys, index) {
    return _vm._ssrNode("<div class=\"wrapper-img-text\" data-v-5092318e>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: subcategorys.imagen_cloudinary == null ? 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_80,q_auto:best,f_auto/v1649367838/2659360_s1ap5f.png' : _vm.idCloudinary(subcategorys.imagen_cloudinary, 150, 150),
        expression: "\n            subcategorys.imagen_cloudinary == null\n              ? 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_80,q_auto:best,f_auto/v1649367838/2659360_s1ap5f.png'\n              : idCloudinary(subcategorys.imagen_cloudinary, 150, 150)\n          "
      }],
      staticClass: "product-image",
      class: subcategorys.imagen_cloudinary == 'sin_foto.jpeg' ? 'notproduct-image-res' : '',
      attrs: {
        "alt": "icon category"
      }
    }, []), _vm._ssrNode(" <div class=\"tag\" data-v-5092318e><p" + _vm._ssrClass("txt-category", subcategorys.id == _vm.idSubCategory ? 'active-tag' : 'disable-tag') + _vm._ssrStyle(null, `border-color: ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario && subcategorys.id == _vm.idSubCategory ? _vm.settingByTemplate.color_primario : '#25D366'};`, null) + " data-v-5092318e>" + _vm._ssrEscape("\n            " + _vm._s(subcategorys.nombre_subcategoria) + "\n          ") + "</p></div>")], 2);
  }), 0)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/whatsapp/categorys_img/ko-categorys-img.vue?vue&type=template&id=5092318e&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp/categorys_img/ko-categorys-img.vue?vue&type=script&lang=js&

/* harmony default export */ var ko_categorys_imgvue_type_script_lang_js_ = ({
  name: 'CategorySlideWa-4',
  mixins: [idCloudinary["a" /* default */]],
  props: {
    dataStore: Object,
    settingByTemplate: Object
  },
  data() {
    return {
      selectSubcategory: '',
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
      this.$store.commit('SET_PREVIOUS_PAGE', 1);
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
    },
    scrollLeft(value) {
      if (value == 1) {
        document.getElementById('swiper-slide-categories').scrollLeft -= 300;
      } else if (value == 2) {
        document.getElementById('swiper-slide-subcategories').scrollLeft -= 300;
      }
    },
    scrollRight(value) {
      if (value == 1) {
        document.getElementById('swiper-slide-categories').scrollLeft += 300;
      } else if (value == 2) {
        document.getElementById('swiper-slide-subcategories').scrollLeft += 300;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/whatsapp/categorys_img/ko-categorys-img.vue?vue&type=script&lang=js&
 /* harmony default export */ var categorys_img_ko_categorys_imgvue_type_script_lang_js_ = (ko_categorys_imgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/whatsapp/categorys_img/ko-categorys-img.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(854)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  categorys_img_ko_categorys_imgvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5092318e",
  "36a03e6c"
  
)

/* harmony default export */ var ko_categorys_img = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(855);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4cbfedd8", content, true, context)
};

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_categorys_img_vue_vue_type_style_index_0_id_5092318e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_categorys_img_vue_vue_type_style_index_0_id_5092318e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_categorys_img_vue_vue_type_style_index_0_id_5092318e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_categorys_img_vue_vue_type_style_index_0_id_5092318e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_categorys_img_vue_vue_type_style_index_0_id_5092318e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-slide-categorys[data-v-5092318e]{--tw-bg-opacity:1;align-items:center;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;position:sticky;top:0;width:100%;z-index:10}.notproduct-image-res[data-v-5092318e]{height:100%}.notproduct-image-res[data-v-5092318e],.product-image[data-v-5092318e]{max-height:70px;max-width:70px;width:100%}.product-image[data-v-5092318e]{height:70px;min-height:70px;min-width:70px;-o-object-fit:cover;object-fit:cover;overflow:hidden}.wrapper-img-text[data-v-5092318e]{flex-direction:column;height:105px;justify-content:flex-start;margin-right:15px;max-height:105px;transition:all .6s ease-in;white-space:nowrap}.btn-scroll[data-v-5092318e],.wrapper-img-text[data-v-5092318e]{align-items:center;cursor:pointer;display:flex}.btn-scroll[data-v-5092318e]{justify-content:center;top:50%}.btn-scroll-icon[data-v-5092318e]{align-items:center;bottom:.125em;color:#000;display:flex;font-size:20px;justify-content:center;width:100%}.btn-scroll-icon[data-v-5092318e]:hover{color:#25d366}@media (min-width:300px){.content-categories[data-v-5092318e]{border-bottom-width:1px;border-color:#d6d6d6;justify-content:center;margin-bottom:10px;padding-bottom:10px;width:95%}.content-categories[data-v-5092318e],.itens-slide-categories[data-v-5092318e]{align-items:center;display:flex;flex-direction:row}.itens-slide-categories[data-v-5092318e]{overflow-x:auto;overflow-y:hidden;width:100%}.itens-slide-categories[data-v-5092318e]::-webkit-scrollbar{background:transparent;display:none}.active-tag[data-v-5092318e]{border-bottom-width:4px}.active-tag[data-v-5092318e],.disable-tag[data-v-5092318e]{align-items:center;cursor:pointer;display:flex;justify-content:center;padding-left:5px;padding-right:5px;width:100%}.disable-tag[data-v-5092318e]{border-radius:100px}.txt-category[data-v-5092318e]{align-items:center;color:#3d3d3d;display:flex;flex-direction:column;font-family:\"Poppins\",sans-serif!important;font-size:14px;font-weight:500;justify-content:center;width:100%}.tag[data-v-5092318e]{color:#000;font-size:12px;font-weight:600;margin-top:5px}}@media (min-width:768px){.txt-category[data-v-5092318e]{font-size:16px}}@media (max-width:420px){.notproduct-image-res[data-v-5092318e],.product-image[data-v-5092318e]{max-height:50px;max-width:50px}.product-image[data-v-5092318e]{height:50px;min-height:50px;min-width:50px}.wrapper-img-text[data-v-5092318e]{height:85px;max-height:85px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=271.js.map