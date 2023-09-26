exports.ids = [154];
exports.modules = {

/***/ 1290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/blog/Ko-articulo.vue?vue&type=template&id=306d447d&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-blog"
  }, [_vm.dataArticle ? _vm._ssrNode("<div class=\"container-article\" data-v-306d447d>", "</div>", [_vm._ssrNode("<div class=\"content-blog\" data-v-306d447d>", "</div>", [_vm._ssrNode("<nav aria-label=\"Breadcrumb\" class=\"flex mt-20 mb-5 sm:mb-10\" data-v-306d447d>", "</nav>", [_vm._ssrNode("<ol class=\"flex items-start space-x-4\" data-v-306d447d>", "</ol>", [_vm._ssrNode("<li data-v-306d447d>", "</li>", [_c('nuxt-link', {
    staticClass: "text-gray-400 hover:text-gray-500",
    attrs: {
      "to": "/"
    }
  }, [_c('svg', {
    staticClass: "flex-shrink-0 h-20 w-20",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20",
      "fill": "currentColor",
      "aria-hidden": "true"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Home")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-306d447d>", "</li>", [_c('nuxt-link', {
    staticClass: "flex items-center",
    attrs: {
      "to": "/blog"
    }
  }, [_c('svg', {
    staticClass: "flex-shrink-0 h-20 w-20 text-gray-400",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20",
      "fill": "currentColor",
      "aria-hidden": "true"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
      "clip-rule": "evenodd"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
  }, [_vm._v("\n                listado de artículos\n              ")])])], 1)], 2)]), _vm._ssrNode(" <div data-v-306d447d><p class=\"size_title mt-10 text-start\" data-v-306d447d>" + _vm._ssrEscape("\n          " + _vm._s(_vm.dataArticle.titulo) + "\n        ") + "</p></div> "), _vm._ssrNode("<div class=\"flex justify-between items-center\" data-v-306d447d>", "</div>", [_vm._ssrNode("<div class=\"content-date\" data-v-306d447d>", "</div>", [_vm._ssrNode("<div class=\"flex-shrink-0\" data-v-306d447d>", "</div>", [_vm._ssrNode("<a href=\"#\" data-v-306d447d>", "</a>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${this.$store.state.urlKomercia}/users/user.jpg`,
      expression: "`${this.$store.state.urlKomercia}/users/user.jpg`"
    }],
    staticClass: "h-40 w-40 rounded-full",
    attrs: {
      "alt": ""
    }
  }, [])])]), _vm._ssrNode(" <div class=\"content-date-items\" data-v-306d447d><p data-v-306d447d>" + _vm._ssrEscape(_vm._s(_vm.dataArticle.autor)) + "</p> <p data-v-306d447d>" + _vm._ssrEscape(_vm._s(_vm.shippingCreated)) + "</p></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex icons\" data-v-306d447d>", "</div>", [_vm._ssrNode("<a" + _vm._ssrAttr("href", _vm.sharingFacebook) + " target=\"_blank\" rel=\"noreferrer noopener\" style=\"max-height: 25px\" data-v-306d447d>", "</a>", [_c('facebook-icon', {
    staticClass: "wp-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<a" + _vm._ssrAttr("href", _vm.sharingTwitter) + " target=\"_blank\" rel=\"noreferrer noopener\" style=\"max-height: 25px\" data-v-306d447d>", "</a>", [_c('twitter-icon', {
    staticClass: "wp-icon marginIcon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<a" + _vm._ssrAttr("href", _vm.sharingLinkedin) + " target=\"_blank\" rel=\"noreferrer noopener\" style=\"max-height: 25px\" data-v-306d447d>", "</a>", [_c('linkedin-icon', {
    staticClass: "wp-icon marginIcon"
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm.dataArticle.contenido ? _vm._ssrNode("<div class=\"editor\" data-v-306d447d>", "</div>", [_c('el-tiptap', {
    attrs: {
      "extensions": _vm.extensions,
      "spellcheck": false,
      "readonly": true,
      "tooltip": false,
      "bubble": false,
      "showMenubar": false,
      "charCounterCount": false
    },
    model: {
      value: _vm.dataArticle.contenido,
      callback: function ($$v) {
        _vm.$set(_vm.dataArticle, "contenido", $$v);
      },
      expression: "dataArticle.contenido"
    }
  })], 1) : _vm._e()], 2)]) : _vm._ssrNode("<div data-v-306d447d>", "</div>", [_c('el-skeleton', {
    attrs: {
      "rows": 6,
      "animated": ""
    }
  }), _vm._ssrNode(" "), _c('el-skeleton', {
    attrs: {
      "rows": 6,
      "animated": ""
    }
  })], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/blog/Ko-articulo.vue?vue&type=template&id=306d447d&scoped=true&

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/blog/Ko-articulo.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_articulovue_type_script_lang_js_ = ({
  name: 'KoBlogArticle5',
  mixins: [elemenTiptap["a" /* default */]],
  props: {
    dataStore: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dataArticle: {},
      shippingCreated: '',
      shippingUpdated: '',
      sharing: {
        url: '',
        quote: '',
        quoteTwitter: ''
      },
      sharingFacebook: '',
      sharingTwitter: '',
      sharingLinkedin: ''
    };
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos;
    }
  },
  watch: {
    listArticulos() {
      this.searchIdForSlug();
    }
  },
  mounted() {
    if (this.listArticulos.length) {
      this.searchIdForSlug();
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
        this.getDataArticle();
        if (this.dataArticle && this.dataArticle.created_at) {
          let dateCreated = this.dataArticle.created_at;
          let resultCreated = dateCreated.split(' ');
          this.shippingCreated = resultCreated[0];
          let dateUpdate = this.dataArticle.updated_at;
          let resultUpdate = dateUpdate.split(' ');
          this.shippingUpdated = resultUpdate[0];
        }
      }
    },
    getDataArticle() {
      this.sharing.url = window.location.href;
      this.sharing.quote = `${this.dataArticle.titulo}%0A%0A${this.dataArticle.resumen}`;
      this.sharing.quoteTwitter = `${this.dataArticle.titulo}%20by%20${this.dataArticle.autor}%0A`;
      this.sharingFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.sharing.url}&quote=${this.sharing.quote}`;
      this.sharingTwitter = `https://twitter.com/intent/tweet?text=${this.sharing.quoteTwitter}%0A${this.sharing.url}`;
      this.sharingLinkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${this.sharing.url}`;
    }
  }
});
// CONCATENATED MODULE: ./components/template5/blog/Ko-articulo.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_Ko_articulovue_type_script_lang_js_ = (Ko_articulovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/blog/Ko-articulo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(977)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_Ko_articulovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "306d447d",
  "7a7a8640"
  
)

/* harmony default export */ var Ko_articulo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "element-tiptap"
var external_element_tiptap_ = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mixins/elemenTiptap.vue?vue&type=script&lang=js&

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
  "5e638259"
  
)

/* harmony default export */ var elemenTiptap = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(978);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2f77bc67", content, true, context)
};

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_306d447d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_306d447d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_306d447d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_306d447d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_306d447d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".size_title[data-v-306d447d]{color:#000;font-size:48px;font-weight:700;line-height:48px}.wrapper-blog[data-v-306d447d]{background:#fff;flex-direction:column;justify-content:flex-start;min-height:72vh;width:100%}.container-article[data-v-306d447d],.wrapper-blog[data-v-306d447d]{align-items:center;display:flex}.container-article[data-v-306d447d]{justify-content:center}.content-blog[data-v-306d447d]{align-self:flex-start;box-sizing:content-box;display:flex;flex-direction:column;justify-content:center;padding:4px;width:100%}.content-date[data-v-306d447d]{display:flex;flex-direction:row;margin-bottom:20px;margin-top:10px;width:100%}.content-date-items[data-v-306d447d]{display:flex;flex-direction:column;margin-left:10px;width:100%}.content-date-items p[data-v-306d447d]{color:rgba(58,69,87,.733);font-size:14px}.content-date-items p[data-v-306d447d]:first-child{font-weight:700}.editor[data-v-306d447d] .el-tiptap-editor>.el-tiptap-editor__content{border:none;padding:10px 5px}.editor[data-v-306d447d] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-306d447d] .el-tiptap-editor__content h1{font-size:2em}.editor[data-v-306d447d] .el-tiptap-editor__content h2{font-size:1.5em}.editor[data-v-306d447d] .el-tiptap-editor__content h3{font-size:1.17em}.editor[data-v-306d447d] .el-tiptap-editor__content h4{font-size:1.12em}.editor[data-v-306d447d] .el-tiptap-editor__content h5{font-size:.83em}.wp-icon[data-v-306d447d]{bottom:2px;color:#757575;cursor:pointer;font-size:25px}.wp-icon[data-v-306d447d]:hover{color:#494949}.marginIcon[data-v-306d447d]{margin-left:8px}@media (min-width:300px){.container-article[data-v-306d447d]{width:95%}.icon-blog[data-v-306d447d]{margin-bottom:40px;width:10%}}@media (max-width:425px){.icon-blog[data-v-306d447d]{margin-bottom:40px;width:8%}.size_title[data-v-306d447d]{font-size:25px}}@media (max-width:490px){.icon-blog[data-v-306d447d]{margin-bottom:40px;width:7%}}@media (max-width:576px){.grid-products[data-v-306d447d]{grid-template-columns:repeat(2,minmax(0,1fr));width:95%}}@media (max-width:600px){.icon-blog[data-v-306d447d]{margin-bottom:40px;width:6%}.size_title[data-v-306d447d]{font-size:28px;line-height:35px}}@media (min-width:768px){.container-article[data-v-306d447d]{width:95%}.icon-blog[data-v-306d447d]{margin-bottom:40px;width:5%}}@media (max-width:900px){.icon-blog[data-v-306d447d]{margin-bottom:40px;width:4%}}@media (min-width:1024px){.icon-blog[data-v-306d447d]{margin-bottom:40px;width:4%}}@media (max-width:1100px){.icon-blog[data-v-306d447d]{margin-bottom:40px;width:3%}}@media (min-width:1280px){.container-article[data-v-306d447d]{width:78%}.icon-blog[data-v-306d447d]{margin-bottom:80px;width:5%}}@media (min-width:1440px){.container-article[data-v-306d447d]{width:48%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template5-blog-ko-articulo.js.map