exports.ids = [64];
exports.modules = {

/***/ 1259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/blog_page/Ko-articulo.vue?vue&type=template&id=05e53f72&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-article"
  }, [_vm.dataArticle ? _vm._ssrNode("<div class=\"content-item-article\" data-v-05e53f72>", "</div>", [_vm._ssrNode("<p class=\"tittle-blog\" data-v-05e53f72>" + _vm._ssrEscape("\n      " + _vm._s(_vm.dataArticle.titulo) + "\n    ") + "</p> "), _vm._ssrNode("<div class=\"content-img\" data-v-05e53f72>", "</div>", [_vm.dataArticle && _vm.dataArticle.imagen_principal_url ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.dataArticle.imagen_principal_url, 400, 400),
      expression: "idCloudinary(dataArticle.imagen_principal_url, 400, 400)"
    }],
    staticClass: "img-article",
    attrs: {
      "alt": "Image-Article"
    }
  }, []) : _vm._e()]), _vm._ssrNode(" <div class=\"content-data-article\" data-v-05e53f72><svg fill=\"#3a3a3a\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-05e53f72><path d=\"M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z\" data-v-05e53f72></path></svg> <p class=\"txt-created\" data-v-05e53f72>" + _vm._ssrEscape("\n        " + _vm._s(_vm.shippingCreated) + "\n      ") + "</p></div> "), _vm.dataArticle.contenido ? _vm._ssrNode("<div class=\"editor\" data-v-05e53f72>", "</div>", [_c('el-tiptap', {
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
  })], 1) : _vm._e()], 2) : _vm._ssrNode("<div data-v-05e53f72>", "</div>", [_c('el-skeleton', {
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

// CONCATENATED MODULE: ./components/template11/blog_page/Ko-articulo.vue?vue&type=template&id=05e53f72&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/blog_page/Ko-articulo.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko_articulovue_type_script_lang_js_ = ({
  mixins: [elemenTiptap["a" /* default */], idCloudinary["a" /* default */]],
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
      shippingUpdated: ''
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
        if (this.dataArticle) {
          const dateCreated = this.dataArticle.created_at;
          this.shippingCreated = dateCreated.split(' ')[0];
          const dateUpdate = this.dataArticle.updated_at;
          this.shippingUpdated = dateUpdate.split(' ')[0];
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template11/blog_page/Ko-articulo.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_page_Ko_articulovue_type_script_lang_js_ = (Ko_articulovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/blog_page/Ko-articulo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(917)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_page_Ko_articulovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "05e53f72",
  "fd0795f2"
  
)

/* harmony default export */ var Ko_articulo = __webpack_exports__["default"] = (component.exports);

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

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(918);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7cb7b09d", content, true, context)
};

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_05e53f72_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(507);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_05e53f72_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_05e53f72_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_05e53f72_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_05e53f72_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-article[data-v-05e53f72]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}@media (min-width:300px){.content-item-article[data-v-05e53f72]{width:90%}.content-item-article[data-v-05e53f72],.tittle-blog[data-v-05e53f72]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;margin-bottom:20px}.tittle-blog[data-v-05e53f72]{color:#191919;font-size:16px;font-weight:500;letter-spacing:.3px;line-height:22px;margin-top:20px;width:100%}.content-img[data-v-05e53f72]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;margin-bottom:20px;width:100%}.img-article[data-v-05e53f72]{height:auto;width:100%}.content-data-article[data-v-05e53f72]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:20px;width:100%}.txt-created[data-v-05e53f72]{color:#000;font-size:13px;font-weight:400}.editor[data-v-05e53f72]{background:#fff;border-radius:5px;margin-top:5px;padding:15px;position:relative;width:100%}.editor__content[data-v-05e53f72]{word-wrap:break-word;outline:none;padding-top:10px;word-break:break-word}.editor__content[data-v-05e53f72] *{caret-color:#000;outline:none}.editor__content[data-v-05e53f72] pre{background:#000;border-radius:5px;color:green;font-size:.8rem;overflow-x:auto;padding:.7rem 1rem}.editor__content[data-v-05e53f72] pre code{display:block}.editor__content[data-v-05e53f72] p code{background:rgba(0,0,0,.1);border-radius:5px;color:rgba(0,0,0,.8);font-size:.8rem;font-weight:700;padding:.2rem .4rem}.editor__content[data-v-05e53f72] ol,.editor__content[data-v-05e53f72] ul{padding-left:1rem}.editor__content[data-v-05e53f72] li>ol,.editor__content[data-v-05e53f72] li>p,.editor__content[data-v-05e53f72] li>ul{margin:0}.editor__content[data-v-05e53f72] ul{color:#000;list-style-type:disc}.editor__content[data-v-05e53f72] ol{color:#000;list-style-type:decimal}.editor__content[data-v-05e53f72] a{color:#4444d3}.editor__content[data-v-05e53f72] h1{font-size:2em;font-weight:700}.editor__content[data-v-05e53f72] h2{font-size:1.5em;font-weight:700}.editor__content[data-v-05e53f72] h3{font-size:1.17em;font-weight:700}.editor__content[data-v-05e53f72] blockquote{border-left:3px solid rgba(0,0,0,.1);color:rgba(0,0,0,.8);font-style:italic;padding-left:.8rem}.editor__content[data-v-05e53f72] blockquote p{margin:0}.editor__content[data-v-05e53f72] img{border-radius:3px;max-width:100%}.editor__content[data-v-05e53f72] table{border-collapse:collapse;margin:0;overflow:hidden;table-layout:fixed;width:100%}.editor__content[data-v-05e53f72] table td,.editor__content[data-v-05e53f72] table th{border:2px solid grey;box-sizing:border-box;min-width:1em;padding:3px 5px;position:relative;vertical-align:top}.editor__content[data-v-05e53f72] table td>*,.editor__content[data-v-05e53f72] table th>*{margin-bottom:0}.editor__content[data-v-05e53f72] table th{font-weight:700;text-align:left}.editor__content[data-v-05e53f72] table .selectedCell:after{background:rgba(200,200,255,.4);bottom:0;content:\"\";left:0;pointer-events:none;position:absolute;right:0;top:0;z-index:2}.editor__content[data-v-05e53f72] table .column-resize-handle{background-color:#adf;bottom:0;pointer-events:none;position:absolute;right:-2px;top:0;width:4px;z-index:20}}@media (min-width:768px){.content-img[data-v-05e53f72]{max-width:400px;width:400px}}@media (min-width:1200px){.content-item-article[data-v-05e53f72]{max-width:1200px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template11-blog-page-ko-articulo.js.map