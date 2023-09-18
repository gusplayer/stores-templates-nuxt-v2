exports.ids = [100];
exports.modules = {

/***/ 1286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/_cardBlog/Ko-index.vue?vue&type=template&id=28d3e916&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex justify-center items-center py-15 lg:py-20 px-10 md:px-0",
    staticStyle: {
      "background-color": "var(--background_color_1)"
    },
    style: [_vm.settingByTemplate15[0].listBlogHome, _vm.settingByTemplate15[0].settingGeneral, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate15[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.settingGeneral) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.font) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"max-w-7xl w-full flex flex-col items-center justify-center\" data-v-28d3e916>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-row justify-between items-center\" data-v-28d3e916><p class=\"text-left font-semibold text-30\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate15[0].listBlogHome.color_title_1}; font-weight: ${_vm.settingByTemplate15[0].listBlogHome.fontWeighTitle};`, null) + " data-v-28d3e916>" + _vm._ssrEscape("\n        " + _vm._s(_vm.settingByTemplate15[0].listBlogHome.title) + "\n      ") + "</p> <input type=\"text\" placeholder=\"Buscar artículos...\"" + _vm._ssrAttr("value", _vm.search) + " class=\"input-search\" data-v-28d3e916></div> "), _vm._ssrNode("<div class=\"w-full flex flex-col justify-center items-center mt-30\" data-v-28d3e916>", "</div>", [_vm._ssrNode("<div class=\"w-full h-full mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mlg:gap-8 justify-center items-center box-border\" data-v-28d3e916>", "</div>", _vm._l(_vm.filteredList, function (article) {
    return _vm._ssrNode("<div class=\"w-full h-full\" data-v-28d3e916>", "</div>", [_c('KoBlogCard', {
      staticClass: "giftLoad w-full h-full",
      attrs: {
        "article": article,
        "card-blog": _vm.settingByTemplate15[0].cardBlog,
        "setting-general": _vm.settingByTemplate15[0].settingGeneral
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm.filteredList.length == 0 ? _vm._ssrNode("<div class=\"w-full h-full flex flex-col justify-center items-center text-center\" data-v-28d3e916>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${_vm.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n              `${$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n            "
    }],
    staticClass: "max-w-[150px] max-h-[150px]",
    attrs: {
      "width": "150",
      "alt": "Logo Img"
    }
  })]), _vm._ssrNode(" <p class=\"my-15 font-semibold text-20 text-gray-600\" data-v-28d3e916>\n          No se encontraron artículos relacionados\n        </p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.filteredList.length > 12 ? _vm._ssrNode("<div class=\"mt-10 product_pagination\" data-v-28d3e916>", "</div>", [_c('el-pagination', {
    staticClass: "text-18 text-black bg-transparent",
    attrs: {
      "background": "",
      "layout": "prev, pager, next",
      "total": _vm.filteredList.length,
      "page-size": 12,
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
  })], 1) : _vm._e()], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template15/_cardBlog/Ko-index.vue?vue&type=template&id=28d3e916&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/_cardBlog/Ko-index.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_indexvue_type_script_lang_js_ = ({
  name: 'Ko15Blog',
  components: {
    KoBlogCard: () => __webpack_require__.e(/* import() */ 99).then(__webpack_require__.bind(null, 1285))
  },
  props: {
    dataStore: Object,
    settingByTemplate15: Array
  },
  data() {
    return {
      currentPage: 1,
      search: ''
    };
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos;
    },
    filterArticles() {
      const initial = this.currentPage * 12 - 12;
      const final = initial + 12;
      return this.filteredList.slice(initial, final);
    },
    filteredList() {
      if (this.search) {
        return this.listArticulos.filter(element => {
          return element.titulo.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        return this.listArticulos;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template15/_cardBlog/Ko-index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _cardBlog_Ko_indexvue_type_script_lang_js_ = (Ko_indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template15/_cardBlog/Ko-index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(988)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _cardBlog_Ko_indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "28d3e916",
  "6980ff66"
  
)

/* harmony default export */ var Ko_index = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(989);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("05a59863", content, true, context)
};

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_index_vue_vue_type_style_index_0_id_28d3e916_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(592);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_index_vue_vue_type_style_index_0_id_28d3e916_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_index_vue_vue_type_style_index_0_id_28d3e916_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_index_vue_vue_type_style_index_0_id_28d3e916_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_index_vue_vue_type_style_index_0_id_28d3e916_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-28d3e916]{font-family:var(--font-style-1)!important}.giftLoad[data-v-28d3e916]{max-width:300px}.input-search[data-v-28d3e916]{box-shadow:inset 0 -48px 0 -43px #000}.product_pagination[data-v-28d3e916] .el-pagination.is-background .btn-next,.product_pagination[data-v-28d3e916] .el-pagination.is-background .btn-prev,.product_pagination[data-v-28d3e916] .el-pagination.is-background .el-pager li{background-color:transparent;color:#000}.product_pagination[data-v-28d3e916] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-28d3e916] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-28d3e916] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--btnhover)}.product_pagination[data-v-28d3e916] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:#000;color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template15-card-blog-ko-index.js.map