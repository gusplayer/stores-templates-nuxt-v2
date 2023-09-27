exports.ids = [155];
exports.modules = {

/***/ 1291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/blog/Ko-Blog.vue?vue&type=template&id=7450111c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    style: _vm.settingK05Blog
  }, [_vm._ssrNode("<div class=\"relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8\"" + _vm._ssrStyle(null, {
    '--font-style': _vm.settingK05Blog && _vm.settingK05Blog.tipo_letra ? _vm.settingK05Blog.tipo_letra : 'Roboto'
  }, null) + " data-v-7450111c>", "</div>", [_vm._ssrNode("<div class=\"max-w-7xl mx-auto content-blog-list\" data-v-7450111c>", "</div>", [_vm._ssrNode("<div class=\"padding flex flex-row justify-between items-center\" data-v-7450111c>", "</div>", [_vm._ssrNode("<h2 class=\"text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl\" data-v-7450111c>\n          Blog\n        </h2> "), _vm._ssrNode("<div class=\"prueba\" data-v-7450111c>", "</div>", [_vm._ssrNode("<div class=\"search\" data-v-7450111c>", "</div>", [_vm._ssrNode("<form id=\"demo-2\" style=\"position: relative\" data-v-7450111c>", "</form>", [_c('search-icon', {
    staticClass: "icon-s",
    on: {
      "click": _vm.focusInput
    }
  }), _vm._ssrNode(" <input id=\"SearchHeader\" type=\"search\"" + _vm._ssrAttr("placeholder", _vm.$t('header_search')) + _vm._ssrAttr("value", _vm.search) + " data-v-7450111c>")], 2)])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none\" data-v-7450111c>", "</div>", _vm._l(_vm.filteredList, function (article) {
    return _vm._ssrNode("<div data-v-7450111c>", "</div>", [_c('KoProductCard1', {
      attrs: {
        "article": article
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm.filteredList.length == 0 ? _vm._ssrNode("<div class=\"content-products-empty\" data-v-7450111c>", "</div>", [_vm._ssrNode("<div class=\"wrapper_logo\" data-v-7450111c>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n                `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n              "
    }],
    attrs: {
      "alt": "Logo Img"
    }
  })])], 1), _vm._ssrNode(" <p data-v-7450111c>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"w-full flex items-center justify-center\" data-v-7450111c>", "</div>", [_vm._ssrNode("<div class=\"pagination-medium\" data-v-7450111c>", "</div>", [_vm.filteredList.length > 12 ? _vm._ssrNode("<div class=\"product_pagination\" data-v-7450111c>", "</div>", [_c('el-pagination', {
    staticClass: "pagination",
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
  })], 1) : _vm._e()])])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/blog/Ko-Blog.vue?vue&type=template&id=7450111c&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/blog/Ko-Blog.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Blogvue_type_script_lang_js_ = ({
  name: 'KoBlogIndex5',
  components: {
    KoProductCard1: () => __webpack_require__.e(/* import() */ 153).then(__webpack_require__.bind(null, 1324))
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingK05Blog: {
      type: Object,
      required: true
    }
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
  },
  methods: {
    focusInput() {
      document.getElementById('SearchHeader').focus();
    }
  }
});
// CONCATENATED MODULE: ./components/template5/blog/Ko-Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_Ko_Blogvue_type_script_lang_js_ = (Ko_Blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/blog/Ko-Blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(979)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_Ko_Blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7450111c",
  "f793c272"
  
)

/* harmony default export */ var Ko_Blog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(980);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2c0f01a3", content, true, context)
};

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_7450111c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(538);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_7450111c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_7450111c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_7450111c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_7450111c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".padding[data-v-7450111c]{padding:0 30px 10px}.pagination-medium[data-v-7450111c]{background:transparent;margin-top:20px}.pagination[data-v-7450111c]{background:transparent;color:var(--color_text);font-size:18px}.pagination-medium[data-v-7450111c] .el-pagination.is-background .btn-next,.pagination-medium[data-v-7450111c] .el-pagination.is-background .btn-prev,.pagination-medium[data-v-7450111c] .el-pagination.is-background .el-pager li{background-color:transparent;color:var(--color_text)}.pagination-medium[data-v-7450111c] .el-pagination.is-background .btn-next:hover,.pagination-medium[data-v-7450111c] .el-pagination.is-background .btn-prev:hover,.pagination-medium[data-v-7450111c] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--btnhover)}.pagination-medium[data-v-7450111c] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--color_icon);color:#fff}.content-products-empty[data-v-7450111c]{align-items:center;display:flex;flex-direction:column;justify-content:center;min-height:50vh;text-align:center;width:100%}.content-blog-list[data-v-7450111c]{min-height:59vh}.content-products-empty p[data-v-7450111c]{color:var(--color_subtext);font-size:18px;font-weight:700;opacity:.6}.wrapper_logo[data-v-7450111c]{max-width:200px}.icon-s[data-v-7450111c]{color:#000;cursor:pointer;font-size:25px;left:5px;position:absolute;top:3px}.icon-s[data-v-7450111c]:hover{color:var(--btnhover)}input[type=search][data-v-7450111c]{background:transparent;border:2px solid #000}input[type=search][data-v-7450111c]:focus{background-color:#fff;border-color:var(--btnhover)}input[data-v-7450111c]:-moz-placeholder{color:#000}input[data-v-7450111c]::-webkit-input-placeholder{color:#000}#demo-2 input[type=search][data-v-7450111c]{background:transparent;border:2px solid #000;border-radius:50px;box-sizing:border-box;color:transparent;cursor:pointer;height:35px;padding-left:10px;transition:all .2s ease-in;width:35px}#demo-2 input[type=search][data-v-7450111c]:hover{background:transparent}#demo-2 input[type=search][data-v-7450111c]:focus{background:transparent;color:#000;cursor:auto;padding-left:32px;width:200px}#demo-2 input[data-v-7450111c]:-moz-placeholder{color:transparent}#demo-2 input[data-v-7450111c]::-webkit-input-placeholder{color:transparent}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template5-blog-ko-blog.js.map