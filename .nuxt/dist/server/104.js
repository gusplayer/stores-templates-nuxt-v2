exports.ids = [104];
exports.modules = {

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/blog_page/Ko-articulo.vue?vue&type=template&id=7f3f5cd8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-blog"
  }, [_vm._ssrNode("<div class=\"bannerBlog\" data-v-7f3f5cd8>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-7f3f5cd8>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-7f3f5cd8>/</p> "), _c('nuxt-link', {
    attrs: {
      "to": "/blog"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s2"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('header_blog')) + "\n        ")])])], 2)]), _vm._ssrNode(" "), _vm.dataArticle ? _vm._ssrNode("<div class=\"container-article\" data-v-7f3f5cd8>", "</div>", [_vm._ssrNode("<div class=\"content-blog\" data-v-7f3f5cd8>", "</div>", [_c('nuxt-link', {
    staticClass: "content-back",
    attrs: {
      "to": "/blog"
    }
  }, [_c('arrow-left-icon', {
    staticClass: "arrow-left"
  }), _vm._v(" "), _c('p', [_vm._v("Regresar")])], 1), _vm._ssrNode(" <p class=\"title-blog\" data-v-7f3f5cd8>" + _vm._ssrEscape(_vm._s(_vm.dataArticle.titulo)) + "</p> <div class=\"content-date\" data-v-7f3f5cd8><div class=\"flex-shrink-0\" data-v-7f3f5cd8><img" + _vm._ssrAttr("src", `${this.$store.state.urlKomercia}/users/user.jpg`) + " alt class=\"h-30 w-30 rounded-full\" data-v-7f3f5cd8></div> <div class=\"content-date-items\" data-v-7f3f5cd8><p data-v-7f3f5cd8>" + _vm._ssrEscape(_vm._s(_vm.dataArticle.autor)) + "</p> <p data-v-7f3f5cd8>" + _vm._ssrEscape(_vm._s(this.shippingCreated)) + "</p></div></div> "), _vm.dataArticle.contenido ? _vm._ssrNode("<div class=\"editor\" data-v-7f3f5cd8>", "</div>", [_c('el-tiptap', {
    attrs: {
      "extensions": _vm.extensions,
      "spellcheck": false,
      "readonly": true,
      "charCounterCount": false,
      "tooltip": false,
      "showMenubar": false,
      "bubble": false
    },
    model: {
      value: _vm.dataArticle.contenido,
      callback: function ($$v) {
        _vm.$set(_vm.dataArticle, "contenido", $$v);
      },
      expression: "dataArticle.contenido"
    }
  })], 1) : _vm._e()], 2)]) : _vm._ssrNode("<div data-v-7f3f5cd8>", "</div>", [_c('el-skeleton', {
    attrs: {
      "rows": 6,
      "animated": ""
    }
  }), _vm._ssrNode(" "), _c('el-skeleton', {
    attrs: {
      "rows": 6,
      "animated": ""
    }
  })], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/blog_page/Ko-articulo.vue?vue&type=template&id=7f3f5cd8&scoped=true&

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/blog_page/Ko-articulo.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_articulovue_type_script_lang_js_ = ({
  mixins: [elemenTiptap["a" /* default */]],
  name: 'Ko-Blog',
  props: {
    dataStore: Object
  },
  mounted() {
    if (this.listArticulos.length) {
      this.searchIdForSlug();
    }
  },
  data() {
    return {
      dataArticle: {},
      shippingCreated: '',
      shippingUpdated: ''
    };
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos;
    }
  },
  methods: {
    async searchIdForSlug() {
      let idBlog = this.$route.query.idBlog;
      const {
        data
      } = await this.$store.dispatch('GET_DATA_ARTICLE', {
        idBlog: idBlog,
        idStore: this.dataStore.tienda.id_tienda
      });
      if (data) {
        this.dataArticle = data.data;
        if (this.dataArticle) {
          const dateCreated = this.dataArticle.created_at;
          this.shippingCreated = dateCreated.split(' ')[0];
          const dateUpdate = this.dataArticle.updated_at;
          this.shippingUpdated = dateUpdate.split(' ')[0];
        }
      }
    }
  },
  watch: {
    listArticulos() {
      this.searchIdForSlug();
    }
  }
});
// CONCATENATED MODULE: ./components/template10/blog_page/Ko-articulo.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_page_Ko_articulovue_type_script_lang_js_ = (Ko_articulovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/blog_page/Ko-articulo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(793)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_page_Ko_articulovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7f3f5cd8",
  "06aaa899"
  
)

/* harmony default export */ var Ko_articulo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(794);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("20c2f2ec", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "element-tiptap"
var external_element_tiptap_ = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./mixins/elemenTiptap.vue?vue&type=script&lang=js&

/* harmony default export */ var elemenTiptapvue_type_script_lang_js_ = ({
  computed: {
    extensions() {
      return [new external_element_tiptap_["Doc"](), new external_element_tiptap_["Paragraph"](), new external_element_tiptap_["Text"](), new external_element_tiptap_["Heading"]({
        level: 5,
        bubble: true
      }), new external_element_tiptap_["Bold"]({
        bubble: true
      }), new external_element_tiptap_["Italic"]({
        bubble: true
      }), new external_element_tiptap_["Underline"]({
        bubble: true
      }), new external_element_tiptap_["Strike"]({
        bubble: true
      }), new external_element_tiptap_["Code"]({
        bubble: true
      }), new external_element_tiptap_["CodeBlock"]({
        bubble: true
      }), new external_element_tiptap_["Blockquote"]({
        bubble: true
      }), new external_element_tiptap_["Link"]({
        bubble: true
      }), new external_element_tiptap_["BulletList"]({
        bubble: true
      }), new external_element_tiptap_["OrderedList"]({
        bubble: true
      }), new external_element_tiptap_["ListItem"]({
        bubble: true
      }), new external_element_tiptap_["TodoList"]({
        bubble: true
      }), new external_element_tiptap_["TodoItem"]({
        bubble: true
      }), new external_element_tiptap_["Iframe"]({
        bubble: true
      }), new external_element_tiptap_["Table"]({
        resizable: true,
        bubble: true
      }), new external_element_tiptap_["TableHeader"](), new external_element_tiptap_["TableRow"](), new external_element_tiptap_["TableCell"](), new external_element_tiptap_["Image"]({
        urlPattern: '',
        uploadRequest: '',
        bubble: true
      }), new external_element_tiptap_["TextAlign"]({
        alignments: ['left', 'center', 'right', 'justify'],
        bubble: true
      }), new external_element_tiptap_["LineHeight"]({
        lineHeights: ['100%', '200%', '300%']
      }), new external_element_tiptap_["Indent"]({
        minIndent: 0,
        maxIndent: 7
      }), new external_element_tiptap_["HorizontalRule"]({
        bubble: true
      }), new external_element_tiptap_["HardBreak"](), new external_element_tiptap_["TrailingNode"](), new external_element_tiptap_["History"](), new external_element_tiptap_["TextColor"]({
        colors: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#000000'],
        bubble: true
      }), new external_element_tiptap_["TextHighlight"]({
        colors: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#000000'],
        bubble: true
      }), new external_element_tiptap_["FormatClear"](), new external_element_tiptap_["FontSize"]({
        fontSizes: ['8', '10', '12', '14', '16', '18', '20', '24', '30', '36', '48', '60', '72'],
        bubble: true
      }), new external_element_tiptap_["Preview"](), new external_element_tiptap_["Print"](), new external_element_tiptap_["SelectAll"]()];
    }
  }
});
// CONCATENATED MODULE: ./mixins/elemenTiptap.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_elemenTiptapvue_type_script_lang_js_ = (elemenTiptapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./mixins/elemenTiptap.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_elemenTiptapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "445de0a8"
  
)

/* harmony default export */ var elemenTiptap = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_7f3f5cd8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(426);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_7f3f5cd8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_7f3f5cd8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_7f3f5cd8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_7f3f5cd8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editor[data-v-7f3f5cd8] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-7f3f5cd8] .el-tiptap-editor__content h1{font-size:2em}.editor[data-v-7f3f5cd8] .el-tiptap-editor__content h2{font-size:1.5em}.editor[data-v-7f3f5cd8] .el-tiptap-editor__content h3{font-size:1.17em}.editor[data-v-7f3f5cd8] .el-tiptap-editor__content h4{font-size:1.12em}.editor[data-v-7f3f5cd8] .el-tiptap-editor__content h5{font-size:.83em}.wrapper-blog[data-v-7f3f5cd8]{align-items:center;background:#fff;justify-content:flex-start;min-height:64vh;padding-bottom:30px;padding-top:30px}.content-blog[data-v-7f3f5cd8],.wrapper-blog[data-v-7f3f5cd8]{display:flex;flex-direction:column;width:100%}.content-blog[data-v-7f3f5cd8]{align-self:flex-start;box-sizing:content-box;justify-content:center;padding:15px 20px}.content-back[data-v-7f3f5cd8]{display:flex;flex-direction:row;width:100%}.arrow-left[data-v-7f3f5cd8]{bottom:2px;margin-right:5px}.arrow-left[data-v-7f3f5cd8],.content-back p[data-v-7f3f5cd8]{color:#000;cursor:pointer}.title-blog[data-v-7f3f5cd8]{color:#000;font-size:30px;font-weight:700;margin-top:20px}.content-date[data-v-7f3f5cd8]{display:flex;flex-direction:row;margin-bottom:20px;width:100%}.content-date-items[data-v-7f3f5cd8]{display:flex;flex-direction:column;margin-left:10px;width:100%}.content-date-items p[data-v-7f3f5cd8]{color:rgba(58,69,87,.733);font-size:14px}.content-date-items p[data-v-7f3f5cd8]:first-child{font-weight:700}.editor[data-v-7f3f5cd8]{background:#fff;border-radius:5px;margin-top:5px;padding:15px;position:relative;width:100%}.editor[data-v-7f3f5cd8] .el-tiptap-editor>.el-tiptap-editor__content{border:1px solid transparent;padding:0}.editor__content[data-v-7f3f5cd8]{word-wrap:break-word;outline:none;padding-top:10px;word-break:break-word}.editor__content[data-v-7f3f5cd8] *{caret-color:#000;outline:none}.editor__content[data-v-7f3f5cd8] pre{background:#000;border-radius:5px;color:green;font-size:.8rem;overflow-x:auto;padding:.7rem 1rem}.editor__content[data-v-7f3f5cd8] pre code{display:block}.editor__content[data-v-7f3f5cd8] p code{background:rgba(0,0,0,.1);border-radius:5px;color:rgba(0,0,0,.8);font-size:.8rem;font-weight:700;padding:.2rem .4rem}.editor__content[data-v-7f3f5cd8] ol,.editor__content[data-v-7f3f5cd8] ul{padding-left:1rem}.editor__content[data-v-7f3f5cd8] li>ol,.editor__content[data-v-7f3f5cd8] li>p,.editor__content[data-v-7f3f5cd8] li>ul{margin:0}.editor__content[data-v-7f3f5cd8] ul{color:#000;list-style-type:disc}.editor__content[data-v-7f3f5cd8] ol{color:#000;list-style-type:decimal}.editor__content[data-v-7f3f5cd8] a{color:#4444d3}.editor__content[data-v-7f3f5cd8] h1{font-size:2em;font-weight:700}.editor__content[data-v-7f3f5cd8] h2{font-size:1.5em;font-weight:700}.editor__content[data-v-7f3f5cd8] h3{font-size:1.17em;font-weight:700}.editor__content[data-v-7f3f5cd8] blockquote{border-left:3px solid rgba(0,0,0,.1);color:rgba(0,0,0,.8);font-style:italic;padding-left:.8rem}.editor__content[data-v-7f3f5cd8] blockquote p{margin:0}.editor__content[data-v-7f3f5cd8] img{border-radius:3px;max-width:100%}.editor__content[data-v-7f3f5cd8] table{border-collapse:collapse;margin:0;overflow:hidden;table-layout:fixed;width:100%}.editor__content[data-v-7f3f5cd8] table td,.editor__content[data-v-7f3f5cd8] table th{border:2px solid grey;box-sizing:border-box;min-width:1em;padding:3px 5px;position:relative;vertical-align:top}.editor__content[data-v-7f3f5cd8] table td>*,.editor__content[data-v-7f3f5cd8] table th>*{margin-bottom:0}.editor__content[data-v-7f3f5cd8] table th{font-weight:700;text-align:left}.editor__content[data-v-7f3f5cd8] table .selectedCell:after{background:rgba(200,200,255,.4);bottom:0;content:\"\";left:0;pointer-events:none;position:absolute;right:0;top:0;z-index:2}.editor__content[data-v-7f3f5cd8] table .column-resize-handle{background-color:#adf;bottom:0;pointer-events:none;position:absolute;right:-2px;top:0;width:4px;z-index:20}.txt-banner[data-v-7f3f5cd8]{color:#fff;font-family:\"David libre\"!important}#separator[data-v-7f3f5cd8]{margin-left:20px}.container-article[data-v-7f3f5cd8]{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);align-items:center;border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);display:flex;justify-content:center;margin-top:12px}.txt-banner[data-v-7f3f5cd8]{color:#2c2930;font-family:\"Poppins\"!important;font-weight:400}.banner-blog[data-v-7f3f5cd8],.tittle-banner-blog[data-v-7f3f5cd8]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.banner-blog[data-v-7f3f5cd8]{padding-top:8px;z-index:10}.crumb[data-v-7f3f5cd8]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separatorCrumb[data-v-7f3f5cd8]{color:#222;cursor:pointer;font-size:9px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.separatorCrumb[data-v-7f3f5cd8],.txt-crumb[data-v-7f3f5cd8]{font-family:\"Roboto\",sans-serif!important}.txt-crumb[data-v-7f3f5cd8]{color:#222;cursor:pointer;font-size:15px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.s1[data-v-7f3f5cd8]:hover,.s2[data-v-7f3f5cd8]:hover{color:#000;transition:all .25s ease}@media (min-width:300px){.bannerBlog[data-v-7f3f5cd8]{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:cover;display:flex;justify-items:center;padding-bottom:20px;padding-top:20px;width:100%}.container-article[data-v-7f3f5cd8]{width:90%}.txt-banner[data-v-7f3f5cd8]{font-size:36px}.icon-blog[data-v-7f3f5cd8]{margin-bottom:40px;width:10%}#separator[data-v-7f3f5cd8]{margin-left:10px}.wrapper-blog[data-v-7f3f5cd8]{margin-top:140px}}@media (min-width:768px){.container-article[data-v-7f3f5cd8]{width:95%}.txt-banner[data-v-7f3f5cd8]{font-size:36px}}@media (min-width:1024px){.icon-blog[data-v-7f3f5cd8]{margin-bottom:40px;width:4%}}@media (min-width:1280px){.container-article[data-v-7f3f5cd8]{width:93%}.txt-banner[data-v-7f3f5cd8]{font-size:78px}.icon-blog[data-v-7f3f5cd8]{margin-bottom:80px;width:5%}#separator[data-v-7f3f5cd8]{margin-left:20px}.wrapper-blog[data-v-7f3f5cd8]{margin-top:0}}@media (min-width:1440px){.container-article[data-v-7f3f5cd8]{width:83%}}@media (min-width:1920px){.container-article[data-v-7f3f5cd8]{width:63%}}@media (min-width:2560px){.container-article[data-v-7f3f5cd8]{width:46%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=104.js.map