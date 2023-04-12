exports.ids = [46];
exports.modules = {

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(540);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("578302d6", content, true, context)
};

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(542);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("bd47cf02", content, true, context)
};

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_705b0e00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_705b0e00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_705b0e00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_705b0e00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_705b0e00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-article[data-v-705b0e00]{align-items:center;display:flex;flex-direction:column;height:100vh;justify-content:flex-start;max-width:900px;width:100%}.content-item-article[data-v-705b0e00]{background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);height:calc(100vh - 55px);overflow-y:auto;padding-left:20px;padding-right:20px;transition:all .3s cubic-bezier(.25,.8,.25,1)}.crumb[data-v-705b0e00]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separatorCrumb[data-v-705b0e00]{font-size:9px}.separatorCrumb[data-v-705b0e00],.txt-crumb[data-v-705b0e00]{color:#222;cursor:pointer;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-crumb[data-v-705b0e00]{font-size:15px}.s1[data-v-705b0e00]:hover,.s2[data-v-705b0e00]:hover{color:#222;transition:all .25s ease}.editor[data-v-705b0e00]{width:100%}.editor[data-v-705b0e00] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-705b0e00] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-705b0e00] .el-tiptap-editor__content h1{font-size:2em}.editor[data-v-705b0e00] .el-tiptap-editor__content h1,.editor[data-v-705b0e00] .el-tiptap-editor__content h2{font-family:\"Poppins\",sans-serif!important}.editor[data-v-705b0e00] .el-tiptap-editor__content h2{font-size:1.5em}.editor[data-v-705b0e00] .el-tiptap-editor__content h3{font-size:1.17em}.editor[data-v-705b0e00] .el-tiptap-editor__content h3,.editor[data-v-705b0e00] .el-tiptap-editor__content h4{font-family:\"Poppins\",sans-serif!important}.editor[data-v-705b0e00] .el-tiptap-editor__content h4{font-size:1.12em}.editor[data-v-705b0e00] .el-tiptap-editor__content h5{font-size:.83em}.editor[data-v-705b0e00] .el-tiptap-editor__content blockquote,.editor[data-v-705b0e00] .el-tiptap-editor__content code,.editor[data-v-705b0e00] .el-tiptap-editor__content em,.editor[data-v-705b0e00] .el-tiptap-editor__content h5,.editor[data-v-705b0e00] .el-tiptap-editor__content li,.editor[data-v-705b0e00] .el-tiptap-editor__content ol,.editor[data-v-705b0e00] .el-tiptap-editor__content p,.editor[data-v-705b0e00] .el-tiptap-editor__content pre,.editor[data-v-705b0e00] .el-tiptap-editor__content s,.editor[data-v-705b0e00] .el-tiptap-editor__content span,.editor[data-v-705b0e00] .el-tiptap-editor__content strong,.editor[data-v-705b0e00] .el-tiptap-editor__content ul{font-family:\"Poppins\",sans-serif!important}.editor[data-v-705b0e00] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-705b0e00] .el-popper.el-tiptap-image-popper{display:none}@media (min-width:300px){.bannerBlog[data-v-705b0e00]{background-color:#fff;border-bottom-width:1px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);display:flex;max-width:900px;padding-bottom:20px;padding-top:20px;transition:all .3s cubic-bezier(.25,.8,.25,1);width:100%}.bannerBlog[data-v-705b0e00],.crumb[data-v-705b0e00]{align-items:center;justify-content:center}.content-item-article[data-v-705b0e00]{align-items:center;justify-content:flex-start}.content-item-article[data-v-705b0e00],.tittle-blog[data-v-705b0e00]{display:flex;flex-direction:column;width:100%}.tittle-blog[data-v-705b0e00]{color:#191919;font-size:16px;font-weight:700;justify-content:center;letter-spacing:.3px;line-height:22px;margin-top:20px}.content-img[data-v-705b0e00],.tittle-blog[data-v-705b0e00]{align-items:flex-start;margin-bottom:20px}.content-img[data-v-705b0e00]{display:flex;flex-direction:column;justify-content:flex-start;width:100%}.img-article[data-v-705b0e00]{height:auto;width:100%}.content-data-article[data-v-705b0e00]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:20px;width:100%}.txt-created[data-v-705b0e00]{color:#000;font-size:13px;font-weight:400}}@media (min-width:768px){.content-img[data-v-705b0e00]{max-width:350px;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slugBlog_vue_vue_type_style_index_0_id_2dc0fd3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(303);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slugBlog_vue_vue_type_style_index_0_id_2dc0fd3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slugBlog_vue_vue_type_style_index_0_id_2dc0fd3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slugBlog_vue_vue_type_style_index_0_id_2dc0fd3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slugBlog_vue_vue_type_style_index_0_id_2dc0fd3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-wa[data-v-2dc0fd3c]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/wa/_slug/blog/_slugBlog.vue?vue&type=template&id=2dc0fd3c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-wa",
    attrs: {
      "id": "width"
    }
  }, [_c('KArticleWapi')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/wa/_slug/blog/_slugBlog.vue?vue&type=template&id=2dc0fd3c&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp/blog_page/Ko-articulo.vue?vue&type=template&id=705b0e00&scoped=true&
var Ko_articulovue_type_template_id_705b0e00_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-article"
  }, [_vm._ssrNode("<div class=\"bannerBlog\" data-v-705b0e00>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-705b0e00>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: this.stateWapiME ? `/wa/${_vm.dataStore.tienda.id_tienda}/blog` : `/`
      }
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-705b0e00>/</p> <p class=\"txt-crumb s2\" data-v-705b0e00>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('header_blog')) + "\n      ") + "</p>")], 2)]), _vm._ssrNode(" "), _vm.dataArticle ? _vm._ssrNode("<div class=\"content-item-article\" data-v-705b0e00>", "</div>", [_vm._ssrNode("<p class=\"tittle-blog\" data-v-705b0e00>" + _vm._ssrEscape(_vm._s(_vm.dataArticle.titulo)) + "</p> <br data-v-705b0e00> <div class=\"content-data-article\" data-v-705b0e00><svg fill=\"#3a3a3a\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-705b0e00><path d=\"M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z\" data-v-705b0e00></path></svg> <p class=\"txt-created\" data-v-705b0e00>" + _vm._ssrEscape(_vm._s(_vm.shippingCreated)) + "</p></div> "), _vm.dataArticle.contenido ? _vm._ssrNode("<div class=\"editor\" data-v-705b0e00>", "</div>", [_c('el-tiptap', {
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
  })], 1) : _vm._e()], 2) : _vm._ssrNode("<div data-v-705b0e00>", "</div>", [_c('el-skeleton', {
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
var Ko_articulovue_type_template_id_705b0e00_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/whatsapp/blog_page/Ko-articulo.vue?vue&type=template&id=705b0e00&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(67);

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp/blog_page/Ko-articulo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Ko_articulovue_type_script_lang_js_ = ({
  mixins: [elemenTiptap["a" /* default */], idCloudinary["a" /* default */]],
  name: 'Ko-articulo-wa',
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
    ...Object(external_vuex_["mapState"])(['dataStore', 'stateWapiME', 'listArticulos'])
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
    }
  },
  watch: {
    listArticulos() {
      this.searchIdForSlug();
    }
  }
});
// CONCATENATED MODULE: ./components/whatsapp/blog_page/Ko-articulo.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_page_Ko_articulovue_type_script_lang_js_ = (Ko_articulovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/whatsapp/blog_page/Ko-articulo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(539)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_page_Ko_articulovue_type_script_lang_js_,
  Ko_articulovue_type_template_id_705b0e00_scoped_true_render,
  Ko_articulovue_type_template_id_705b0e00_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "705b0e00",
  "b44f565c"
  
)

/* harmony default export */ var Ko_articulo = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/wa/_slug/blog/_slugBlog.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var _slugBlogvue_type_script_lang_js_ = ({
  layout: 'wa',
  components: {
    KArticleWapi: Ko_articulo
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      const widthOutput = document.querySelector('#width');
      if (window.innerWidth > 1300) {
        widthOutput.style.width = '900px';
      } else {
        widthOutput.style.width = window.innerWidth + 'px';
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/wa/_slug/blog/_slugBlog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_slugBlogvue_type_script_lang_js_ = (_slugBlogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/wa/_slug/blog/_slugBlog.vue



function _slugBlog_injectStyles (context) {
  
  var style0 = __webpack_require__(541)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _slugBlog_component = Object(componentNormalizer["a" /* default */])(
  blog_slugBlogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _slugBlog_injectStyles,
  "2dc0fd3c",
  "dba51e80"
  
)

/* harmony default export */ var _slugBlog = __webpack_exports__["default"] = (_slugBlog_component.exports);

/***/ })

};;
//# sourceMappingURL=_slugBlog.js.map