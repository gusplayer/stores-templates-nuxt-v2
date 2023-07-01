exports.ids = [71];
exports.modules = {

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(898);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e83e7e5c", content, true, context)
};

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(900);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("66cd8f80", content, true, context)
};

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(902);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e6d037a2", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  filters: {
    currency(value, codigo_pais, moneda) {
      let resultCurrent;
      if (codigo_pais && moneda) {
        if (value && codigo_pais == 'co' && moneda == 'COP') {
          // return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          return `$${new Intl.NumberFormat('de-DE').format(value)}`;
        } else if (value && codigo_pais == 'pe' && moneda == 'PEN') {
          // return `S/ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          return `S/ ${new Intl.NumberFormat('es-PE').format(value)}`;
        } else if (codigo_pais == 'internacional') {
          resultCurrent = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: moneda,
            minimumFractionDigits: 0
          }).format(value);
          return `${resultCurrent}`;
        } else {
          resultCurrent = new Intl.NumberFormat(codigo_pais, {
            style: 'currency',
            currency: moneda,
            minimumFractionDigits: 0
          }).format(value);
          return `${resultCurrent}`;
        }
      } else {
        if (value) {
          // return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          return `$${new Intl.NumberFormat('de-DE').format(value)}`;
        }
      }
    }
  }
});

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

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_hoko_vue_vue_type_style_index_0_id_642527bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(477);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_hoko_vue_vue_type_style_index_0_id_642527bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_hoko_vue_vue_type_style_index_0_id_642527bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_hoko_vue_vue_type_style_index_0_id_642527bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_hoko_vue_vue_type_style_index_0_id_642527bc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editor[data-v-642527bc]{width:100%}.editor[data-v-642527bc] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-642527bc] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-642527bc] .el-tiptap-editor__content h1{font-family:var(--font-style-2);font-size:2em}.editor[data-v-642527bc] .el-tiptap-editor__content h2{font-family:var(--font-style-2);font-size:1.5em}.editor[data-v-642527bc] .el-tiptap-editor__content h3{font-family:var(--font-style-2);font-size:1.17em}.editor[data-v-642527bc] .el-tiptap-editor__content h4{font-family:var(--font-style-2);font-size:1.12em}.editor[data-v-642527bc] .el-tiptap-editor__content h5{font-family:var(--font-style-2);font-size:.83em}.editor[data-v-642527bc] .el-tiptap-editor__content blockquote,.editor[data-v-642527bc] .el-tiptap-editor__content code,.editor[data-v-642527bc] .el-tiptap-editor__content em,.editor[data-v-642527bc] .el-tiptap-editor__content li,.editor[data-v-642527bc] .el-tiptap-editor__content ol,.editor[data-v-642527bc] .el-tiptap-editor__content p,.editor[data-v-642527bc] .el-tiptap-editor__content pre,.editor[data-v-642527bc] .el-tiptap-editor__content s,.editor[data-v-642527bc] .el-tiptap-editor__content span,.editor[data-v-642527bc] .el-tiptap-editor__content strong,.editor[data-v-642527bc] .el-tiptap-editor__content ul{font-family:var(--font-style-2)}.editor[data-v-642527bc] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-642527bc] .el-popper.el-tiptap-image-popper{display:none}.tab[data-v-642527bc]{align-items:center;cursor:pointer;justify-content:center;width:auto}.item-content[data-v-642527bc],.tab[data-v-642527bc]{display:flex;flex-direction:column}.item-content[data-v-642527bc]{align-items:flex-start;justify-content:flex-start;padding-bottom:4px;width:100%}.content_product_description[data-v-642527bc]{align-items:flex-start;color:var(--color_subtext);display:flex;flex-direction:column;font-size:14px;font-weight:400;justify-content:center;line-height:1.42857143;width:100%}.content_product_description[data-v-642527bc],h3[data-v-642527bc]{font-family:var(--font-style-1)!important}h3[data-v-642527bc]{align-self:flex-start;color:var(--color_text);font-size:15px;font-weight:600;text-transform:uppercase}h4[data-v-642527bc]{align-items:flex-start;color:var(--color_text);display:flex;flex-direction:column;font-size:15px;font-weight:600;justify-content:center;line-height:1.42857143;margin-bottom:5px;width:100%}h4[data-v-642527bc],li p[data-v-642527bc]{font-family:var(--font-style-1)!important}li p[data-v-642527bc]{color:var(--color_subtext);font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}.description-method[data-v-642527bc],.price[data-v-642527bc]{color:var(--color_subtext);font-family:var(--font-style-1)!important;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}img[data-v-642527bc]{margin-top:15px;max-width:300px;width:30%}@media (min-width:300px){.content-opt-tab[data-v-642527bc],.content-tab[data-v-642527bc]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-tab[data-v-642527bc]{border-color:var(--border);border-width:1px;margin-top:6px;padding:20px}.head-content[data-v-642527bc]{grid-gap:.5rem;align-items:center;display:grid;gap:.5rem;grid-template-columns:repeat(1,minmax(0,1fr));justify-content:center;width:100%}.tittle[data-v-642527bc]{align-items:center;background-color:transparent;color:var(--color_subtext);display:flex;font-family:var(--font-style-1)!important;font-size:14px;font-weight:400;height:40px;justify-content:center;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.show-select-active[data-v-642527bc]{background-color:var(--color_gb_tabs)}.show-select-active .tittle[data-v-642527bc]{color:var(--color_text_tabs)}}@media (min-width:425px){.head-content[data-v-642527bc]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-bottom:40px}.tittle[data-v-642527bc]{font-size:12px;text-align:center}}@media (min-width:768px){.content-opt-tab[data-v-642527bc]{flex-direction:column;margin-top:0}.content-opt-tab[data-v-642527bc],.head-content[data-v-642527bc]{align-items:flex-start;display:flex;justify-content:flex-start}.head-content[data-v-642527bc]{border-bottom:1px solid transparent;flex-direction:row;gap:0;margin-bottom:0;width:100%}.tab[data-v-642527bc]{align-items:center}.content-tab[data-v-642527bc],.tab[data-v-642527bc]{display:flex;justify-content:flex-start;width:100%}.content-tab[data-v-642527bc]{align-items:flex-start;border-color:var(--border);border-width:1px;flex-direction:row;margin-top:0;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.tittle[data-v-642527bc]{align-items:center;font-size:14px;height:50px;justify-content:center;text-align:center;width:100%}.show-select-active[data-v-642527bc]{background-color:var(--color_gb_tabs)}.show-select-active .tittle[data-v-642527bc]{color:var(--color_text_tabs)}.content-tab[data-v-642527bc]{padding:40px}}@media (min-width:1024px){.head-content[data-v-642527bc]{width:60%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_8f4791b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(478);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_8f4791b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_8f4791b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_8f4791b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_8f4791b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-8f4791b2]{align-items:center;box-sizing:border-box;display:flex;justify-content:center;max-width:375px;position:relative}.photo[data-v-8f4791b2],.swiper-slide[data-v-8f4791b2]{overflow:hidden;width:100%}.photo[data-v-8f4791b2]{-o-object-fit:cover;object-fit:cover}.photos .responsive .swiper-pagination-bullet[data-v-8f4791b2]{background-color:hsla(0,0%,100%,.5)}.photos .responsive .swiper-pagination-bullet-active[data-v-8f4791b2]{background-color:#fff}.youtube[data-v-8f4791b2]{grid-gap:5px;display:grid;justify-items:start;max-width:400px;width:99%}.youtube__action_back[data-v-8f4791b2]{background-color:var(--color_background_btn);border-style:none;color:var(--color_text_btn);outline:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetailHoko_vue_vue_type_style_index_0_id_25c98ebc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(479);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetailHoko_vue_vue_type_style_index_0_id_25c98ebc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetailHoko_vue_vue_type_style_index_0_id_25c98ebc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetailHoko_vue_vue_type_style_index_0_id_25c98ebc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetailHoko_vue_vue_type_style_index_0_id_25c98ebc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-facebook[data-v-25c98ebc]{background-color:transparent;border:0;border-radius:5px;color:#1877f2;cursor:pointer;display:flex;justify-content:center;margin-right:20px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-facebook[data-v-25c98ebc]:hover{color:#000}.btn-whatsapp[data-v-25c98ebc]{background-color:transparent;border:0;border-radius:5px;color:#25d366;cursor:pointer;display:flex;justify-content:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-whatsapp[data-v-25c98ebc]:hover{color:#000}.wp-icon[data-v-25c98ebc]{bottom:3px;font-size:27px}.wrapper-left[data-v-25c98ebc]{display:flex;flex:2;flex-direction:row;padding-bottom:30px;width:100%}.photos_responsive[data-v-25c98ebc]{display:none}.photos[data-v-25c98ebc]{display:flex;margin-right:30px;max-width:110px;position:relative}.swiper-wrapper[data-v-25c98ebc]{position:relative;width:100%}.swiper-prev[data-v-25c98ebc]{top:0}.swiper-next[data-v-25c98ebc],.swiper-prev[data-v-25c98ebc]{left:20px;position:absolute;z-index:2}.swiper-next[data-v-25c98ebc]{bottom:0;font-size:25px}.icon-swiper[data-v-25c98ebc]{color:var(--color_icon);cursor:pointer;font-size:60px}.icon-swiper[data-v-25c98ebc]:hover{color:var(--hover_text)}.photos_selected[data-v-25c98ebc]{display:flex;flex-direction:column;justify-content:stretch;max-height:100px;width:100%}.img-list[data-v-25c98ebc]{border-radius:6px;cursor:pointer;height:100px;margin-bottom:10px;-o-object-fit:contain;object-fit:contain;vertical-align:top;width:100px}.wrapper-photo_main[data-v-25c98ebc]{margin-right:25px;max-height:600px;max-width:650px;position:relative;width:100%}.photo_main[data-v-25c98ebc]{border-radius:10px;height:100%;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center;width:100%}.wrapper-productDetail[data-v-25c98ebc]{align-items:center;background:var(--background_color_1);display:flex;justify-content:center;width:100%}.container-productDetail-loading[data-v-25c98ebc]{height:calc(100vh - 420px);max-width:1200px;padding:50px 30px 30px}.container-productDetail[data-v-25c98ebc],.container-productDetail-loading[data-v-25c98ebc]{align-items:center;background:var(--background_color_1);display:flex;flex-direction:column;justify-content:center;width:100%}.container-productDetail[data-v-25c98ebc]{height:100%}.left[data-v-25c98ebc]{align-items:center;justify-content:center}.left[data-v-25c98ebc],.right[data-v-25c98ebc]{display:flex;flex-direction:column;width:100%}.right[data-v-25c98ebc]{align-items:flex-start;justify-content:flex-start}.content-addCart[data-v-25c98ebc],.content-name[data-v-25c98ebc],.content-price[data-v-25c98ebc]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.section-suggesProduct[data-v-25c98ebc]{margin-bottom:40px;margin-top:40px;width:100%}.content-quantity-boxes[data-v-25c98ebc]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:30px;margin-top:30px;width:100%}.box-quantity[data-v-25c98ebc]{background-color:transparent;border:1px solid var(--border);width:75px}.box-quantity[data-v-25c98ebc],.box-quantity-btns[data-v-25c98ebc]{align-items:center;display:flex;height:50px;justify-content:center;text-align:center}.box-quantity-btns[data-v-25c98ebc]{border:1px solid var(--color_background_btn);flex-direction:column}.box-quantity-btns[data-v-25c98ebc],.btn-quantity[data-v-25c98ebc]{background-color:var(--color_background_btn);width:25px}.btn-quantity[data-v-25c98ebc]{align-items:center;border-color:var(--color_background_btn);border-right-width:1px;border-top-width:1px;display:flex;height:25px;justify-content:center}.text-icon[data-v-25c98ebc]{align-items:center;color:var(--color_text_btn);cursor:pointer;display:flex;justify-content:center;width:34px}@media (min-width:300px){.wrapper-left[data-v-25c98ebc]{padding-bottom:15px}.product-content[data-v-25c98ebc]{align-items:center;flex-direction:column;justify-content:center;margin-top:40px;width:90%}.content-direction-btns[data-v-25c98ebc]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.content-name[data-v-25c98ebc],.content-price[data-v-25c98ebc]{margin-bottom:30px}.tab[data-v-25c98ebc]{display:flex;margin-top:40px;width:90%}.btn[data-v-25c98ebc],.btn-disabled[data-v-25c98ebc]{align-items:center;background-color:var(--color_background_btn);color:var(--color_text_btn);display:flex;flex-direction:row;height:54px;justify-content:center;transition:all .15s ease-in;width:100%}.btn:hover .text-addCart[data-v-25c98ebc]{background:var(--hover_Bg_btn);color:var(--hover_text_btn);transition:all .15s ease-in}.text-name[data-v-25c98ebc]{color:var(--color_text);line-height:1}.text-name[data-v-25c98ebc],.text-price[data-v-25c98ebc]{font-family:var(--font-style-1)!important}.text-price[data-v-25c98ebc]{color:var(--color_price);letter-spacing:.3px;line-height:26px}.text-addCart[data-v-25c98ebc]{color:var(--color_text_btn);font-family:var(--font-style-1)!important;font-size:12px;font-weight:600;text-transform:uppercase;white-space:nowrap}.minicart-icon[data-v-25c98ebc]{fill:var(--color_text_btn);color:var(--color_text_btn);margin-bottom:5px;margin-right:10px}.text-variant[data-v-25c98ebc]{color:var(--color_subtext);font-family:var(--font-style-1)!important;font-size:16px;font-weight:600;margin-right:10px;transition:all .6s ease-in-out}.banner-detail[data-v-25c98ebc]{display:none}.section-suggesProduct[data-v-25c98ebc]{width:90%}.content-items-right[data-v-25c98ebc]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:20px;width:100%}.empty[data-v-25c98ebc]{background-color:var(--border);height:1px;max-width:1200px}.content-stock[data-v-25c98ebc],.empty[data-v-25c98ebc]{width:100%}.content-stock[data-v-25c98ebc]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:26px;margin-top:26px}.stock-text-1[data-v-25c98ebc]{color:var(--color_subtext);font-size:15px;font-weight:400;margin-right:20px;text-align:left}.stock-text-1[data-v-25c98ebc],.stock-text-2[data-v-25c98ebc]{font-family:var(--font-style-1)!important}.stock-text-2[data-v-25c98ebc]{color:var(--color_subtext);font-size:15px;font-weight:400;text-align:left}}@media (min-width:425px){.content-direction-btns[data-v-25c98ebc]{display:flex;flex-direction:column}}@media (min-width:768px){.banner-detail[data-v-25c98ebc]{background-position:50%;background-repeat:no-repeat;background-size:cover;justify-items:center;padding-bottom:20px;padding-top:20px}.banner-detail[data-v-25c98ebc],.crumb[data-v-25c98ebc]{align-items:center;display:flex;width:100%}.crumb[data-v-25c98ebc]{flex-direction:row;justify-content:center}.separatorCrumb[data-v-25c98ebc]{color:var(--breadCrumbs);cursor:pointer;font-size:9px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.separatorCrumb[data-v-25c98ebc],.txt-crumb[data-v-25c98ebc]{font-family:var(--font-style-1)!important}.txt-crumb[data-v-25c98ebc]{color:var(--breadCrumbs);cursor:pointer;font-size:15px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.s1[data-v-25c98ebc]:hover,.s2[data-v-25c98ebc]:hover{color:var(--hover_text);transition:all .25s ease}.content-addCart[data-v-25c98ebc]{width:236px}.product-content[data-v-25c98ebc],.tab[data-v-25c98ebc]{width:95%}.product-content[data-v-25c98ebc]{grid-gap:1rem;align-items:flex-start;display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:flex-start}.section-suggesProduct[data-v-25c98ebc]{width:95%}}@media (min-width:1024px){.tab[data-v-25c98ebc]{display:flex}.content-direction-btns[data-v-25c98ebc]{display:flex;flex-direction:column}}@media (max-width:768px){.photos[data-v-25c98ebc],.wrapper-photo_main[data-v-25c98ebc]{display:none}.photos_responsive[data-v-25c98ebc]{box-sizing:border-box;display:flex;height:375px;margin-bottom:10px;max-width:400px;overflow:hidden;width:100%}}@media (min-width:1200px){.product-content[data-v-25c98ebc],.section-suggesProduct[data-v-25c98ebc],.tab[data-v-25c98ebc]{max-width:1200px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-ProductDetailHoko.vue?vue&type=template&id=25c98ebc&scoped=true&
var render = function render() {
  var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productDetail",
    style: [_vm.settingByTemplate11[0].detailsProduct, _vm.settingByTemplate11[0].settingGeneral, {
      '--font-style-1': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate11[0]) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.settingGeneral) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.fount_1) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Roboto'
    }]
  }, [_vm.loading ? _vm._ssrNode("<div class=\"container-productDetail-loading\" data-v-25c98ebc>", "</div>") : _vm._ssrNode("<div class=\"container-productDetail\" data-v-25c98ebc>", "</div>", [_vm._ssrNode("<div class=\"banner-detail\" data-v-25c98ebc>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-25c98ebc>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/productosHoko"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-25c98ebc>/</p> " + (_vm.data.name ? "<p class=\"txt-crumb s2\" data-v-25c98ebc>" + _vm._ssrEscape(_vm._s(_vm.data.name)) + "</p>" : "<!---->"))], 2)]), _vm._ssrNode(" <div class=\"empty\" data-v-25c98ebc></div> "), _vm._ssrNode("<div class=\"product-content\" data-v-25c98ebc>", "</div>", [_vm._ssrNode("<div class=\"left\" data-v-25c98ebc>", "</div>", [_vm._ssrNode("<div class=\"wrapper-left\" data-v-25c98ebc>", "</div>", [[_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "photos"
  }, [_vm.data.images ? _vm._ssrNode("<div class=\"swiper-wrapper\" data-v-25c98ebc>", "</div>", _vm._l(_vm.data.images, function (foto, itemsfoto) {
    return _vm._ssrNode("<div class=\"swiper-slide photos_selected\" data-v-25c98ebc>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: foto,
        expression: "foto"
      }],
      staticClass: "img-list",
      attrs: {
        "alt": "Product Img"
      }
    }, [])]);
  }), 0) : _vm._e()])], _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-photo_main\" data-v-25c98ebc>", "</div>", [_vm._ssrNode("<div class=\"photo_main\" data-v-25c98ebc>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: this.selectPhotoUrl,
      expression: "this.selectPhotoUrl"
    }],
    staticClass: "photo_main",
    attrs: {
      "alt": "Product Zoom"
    }
  }, [])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"photos_responsive\" data-v-25c98ebc>", "</div>", [_c('ProductSlide', {
    attrs: {
      "photos": _vm.data.images
    }
  })], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"right\"" + _vm._ssrStyle(null, `margin-top:${this.settingByTemplate11[0].detailsProduct['--marginTopTitle']};`, null) + " data-v-25c98ebc>", "</div>", [_vm._ssrNode("<div class=\"content-items-right\" data-v-25c98ebc>", "</div>", [_vm._ssrNode("<div class=\"content-name\" data-v-25c98ebc><p class=\"text-name\"" + _vm._ssrStyle(null, `font-size:${this.settingByTemplate11[0].detailsProduct['--fontSizeTitle']}; font-weight:${this.settingByTemplate11[0].detailsProduct['--fontWeighTitle']};`, null) + " data-v-25c98ebc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.name) + "\n            ") + "</p></div> <div class=\"content-price\" data-v-25c98ebc><p class=\"text-price\"" + _vm._ssrStyle(null, `font-size:${this.settingByTemplate11[0].detailsProduct['--fontSizePrice']}; font-weight:${this.settingByTemplate11[0].detailsProduct['--fontWeighPrice']};`, {
    display: _vm.data.price ? '' : 'none'
  }) + " data-v-25c98ebc>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.data.price)) + "\n            ") + "</p></div> <div class=\"empty\" data-v-25c98ebc></div> <div class=\"content-stock\" data-v-25c98ebc><p class=\"stock-text-1\" data-v-25c98ebc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_stock')) + ":") + "</p> " + (!_vm.spent ? "<p class=\"stock-text-2\" data-v-25c98ebc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.stock.amount) + " Unidades\n            ") + "</p>" : "<p class=\"stock-text-2\" data-v-25c98ebc>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p>") + "</div> <div class=\"empty\" data-v-25c98ebc></div> "), _vm._ssrNode("<div class=\"w-full flex flex-row items-center\" data-v-25c98ebc>", "</div>", [_vm._ssrNode("<p class=\"text-variant\" style=\"margin-right: 10px\" data-v-25c98ebc>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_compartir')) + "\n            ") + "</p> "), _vm._ssrNode("<a" + _vm._ssrAttr("href", this.sharingFacebook) + " target=\"_blank\" rel=\"noreferrer noopener\" class=\"btn-facebook\" data-v-25c98ebc>", "</a>", [_c('facebook-icon', {
    staticClass: "wp-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"btn-whatsapp\" data-v-25c98ebc>", "</button>", [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-direction-btns mt-10\" data-v-25c98ebc>", "</div>", [_vm._ssrNode("<div class=\"content-quantity-boxes\" data-v-25c98ebc>", "</div>", [_vm._ssrNode("<div class=\"box-quantity\" data-v-25c98ebc><p class=\"txt-quantity\" data-v-25c98ebc>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p></div> "), _vm._ssrNode("<div class=\"box-quantity-btns\" data-v-25c98ebc>", "</div>", [_vm._ssrNode("<div class=\"btn-quantity btn1\" data-v-25c98ebc>", "</div>", [_c('FlechaUp-icon', {
    staticClass: "text-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn-quantity btn2\" data-v-25c98ebc>", "</div>", [_c('Flechadown-icon', {
    staticClass: "text-icon"
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"content-addCart\" data-v-25c98ebc>" + (!_vm.spent ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-25c98ebc><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"minicart-icon\" data-v-25c98ebc><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-25c98ebc></path></svg> <p class=\"text-addCart\" data-v-25c98ebc>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_comprarAhora')) + "\n                ") + "</p></button>" : _vm.spent ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-25c98ebc><p class=\"text-addCart\" data-v-25c98ebc>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                ") + "</p></button>" : "<!---->") + "</div>")], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tab\" data-v-25c98ebc>", "</div>", [_c('OptionTab', {
    attrs: {
      "dataStore": _vm.dataStore,
      "data": _vm.data.stock.product
    }
  })], 1), _vm._ssrNode(" <div class=\"mb-20\" data-v-25c98ebc></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/ko-ProductDetailHoko.vue?vue&type=template&id=25c98ebc&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productdetails/OptTab-hoko.vue?vue&type=template&id=642527bc&scoped=true&
var OptTab_hokovue_type_template_id_642527bc_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-opt-tab"
  }, [_vm._ssrNode("<div class=\"head-content\" data-v-642527bc><div" + _vm._ssrClass("tab", _vm.selecttag == 1 ? 'show-select-active' : '') + " data-v-642527bc><p class=\"tittle\" data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_description'))) + "</p></div> <div" + _vm._ssrClass("tab", _vm.selecttag == 2 ? 'show-select-active' : '') + " data-v-642527bc><p class=\"tittle\" data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_opcionesPago'))) + "</p></div></div> "), _vm._ssrNode("<div class=\"content-tab\" data-v-642527bc>", "</div>", [_vm.focusbtn1 ? _vm._ssrNode("<div class=\"editor\" data-v-642527bc>", "</div>", [_vm.data.description ? _vm._ssrNode("<div data-v-642527bc>", "</div>", [_c('el-tiptap', {
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
      value: _vm.data.description,
      callback: function ($$v) {
        _vm.$set(_vm.data, "description", $$v);
      },
      expression: "data.description"
    }
  })], 1) : _vm._e()]) : _vm._e(), _vm._ssrNode(" " + (_vm.focusbtn2 ? "<div class=\"item-content opcpago\" data-v-642527bc><ul data-v-642527bc>" + (_vm.mediospago.consignacion == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancaria'))) + "</h4> <p data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancariaMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.contraentrega == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContra'))) + "</h4> <p data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContraMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.convenir == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenir'))) + "</h4> <p data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenirMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.credibanco == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionCredibanco'))) + "</h4> <p data-v-642527bc>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionCredibancoMsg')) + "\n          ") + "</p> <a href=\"https://www.credibanco.com/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-642527bc><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335270/Templates%20Modos%20de%20pago/Credibanco_lprsof.png\" alt=\"logo Credibanco\" class=\"logo-pasarela\" data-v-642527bc></a></li>" : "<!---->") + " " + (_vm.mediospago.daviplata == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignaciondaviplata'))) + "</h4> <p data-v-642527bc>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignaciondaviplataMsg')) + "\n          ") + "</p> <img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333767/Templates%20Modos%20de%20pago/5c89c897e1917d9209a762af_davi_qn90y9.png\" alt=\"logo daviPlata\" class=\"logo-pasarela-daviplata\" data-v-642527bc></li>" : "<!---->") + " " + (_vm.mediospago.efecty == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfecty'))) + "</h4> <p data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfectyMsg'))) + "</p> <a href=\"https://www.efecty.com.co/web/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-642527bc><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333023/Templates%20Modos%20de%20pago/Efecty-png_q3fvog.png\" alt=\"logo efecty\" class=\"logo-pasarela-efecty\" data-v-642527bc></a></li>" : "<!---->") + " " + (_vm.mediospago.mercado_pago == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaMercado'))) + "</h4> <p data-v-642527bc>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaMercadoMsg')) + "\n          ") + "</p> <a href=\"https://www.mercadopago.com\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-642527bc><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606331948/Templates%20Modos%20de%20pago/mercadopago_jyalpa.png\" alt=\"logo mercadopago\" class=\"logo-pasarela-daviplata\" data-v-642527bc></a></li>" : "<!---->") + " " + (_vm.mediospago.nequi == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionnequi'))) + "</h4> <p data-v-642527bc>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionnequiMsg')) + "\n          ") + "</p> <a href=\"https://www.nequi.com.co/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-642527bc><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333553/Templates%20Modos%20de%20pago/Nequi_by_Bancolombia_hxhkhb.png\" alt=\"logo nequi\" class=\"logo-pasarela-daviplata\" data-v-642527bc></a></li>" : "<!---->") + " " + (_vm.mediospago.payco == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaEpayco'))) + "</h4> <p data-v-642527bc>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaEpaycoMsg')) + "\n          ") + "</p> <img src=\"https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png\" alt=\"Pasarela de pagos epayco\" class=\"logo-pasarela-payco\" data-v-642527bc></li>" : "<!---->") + " " + (_vm.mediospago.payu == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaPayu'))) + "</h4> <p data-v-642527bc>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://www.payulatam.com/co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-642527bc><img src=\"https://ecommerce.payulatam.com/logos/PayU_CO.png\" alt=\"PayU\" border=\"0\" class=\"logo-pasarela-payu\" data-v-642527bc></a></li>" : "<!---->") + " " + (_vm.mediospago.wompi == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionwompi'))) + "</h4> <p data-v-642527bc>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://wompi.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-642527bc><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335739/Templates%20Modos%20de%20pago/wompi_jxuitu.png\" alt=\"wompi\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-642527bc></a></li>" : "<!---->") + " " + (_vm.mediospago.wepay4u == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>WePay4U</h4> <p data-v-642527bc>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('text_pago_WePay4U')) + "\n          ") + "</p> <a href=\"https://wepay4u.com/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-642527bc><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/v1639078440/wePay4u/powered_by_z7sgqp.png\" alt=\"wePay4u\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-642527bc></a></li>" : "<!---->") + " " + (_vm.mediospago.tu_compra == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>Tucompra</h4> <p data-v-642527bc>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('text_pago_Tucompra')) + "\n          ") + "</p> <a href=\"https://tucompra.com.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-642527bc><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/tucompra_ss0oys.png\" alt=\"tu_compra\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-642527bc></a></li>" : "<!---->") + " " + (_vm.mediospago.flow == 1 ? "<li data-v-642527bc><h4 data-v-642527bc>Tucompra</h4> <p data-v-642527bc>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('text_pago_flowInfo')) + "\n          ") + "</p> <a href=\"https://www.flow.cl/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-642527bc><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/flow_jevnwy.png\" alt=\"flow\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-642527bc></a></li>" : "<!---->") + "</ul></div>" : "<!---->"))], 2)], 2);
};
var OptTab_hokovue_type_template_id_642527bc_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/_productdetails/OptTab-hoko.vue?vue&type=template&id=642527bc&scoped=true&

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productdetails/OptTab-hoko.vue?vue&type=script&lang=js&


/* harmony default export */ var OptTab_hokovue_type_script_lang_js_ = ({
  mixins: [formatCurrent["a" /* default */], elemenTiptap["a" /* default */]],
  props: {
    dataStore: Object,
    data: {},
    envio: {}
  },
  mounted() {},
  data() {
    return {
      medioEnvio: '',
      envioproducto: '',
      selecttag: 1,
      focusbtn1: true,
      focusbtn2: false,
      focusbtn3: false
    };
  },
  computed: {
    mediospago() {
      return this.dataStore.medios_pago;
    },
    activeClass() {
      if (this.data.description == '' || this.data.description == null) {
        return true;
      } else {
        return false;
      }
    },
    envios() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.data.medioEnvio = JSON.parse(this.dataStore.medios_envio.valores);
      return this.data.medioEnvio;
    }
  },
  filters: {
    capitalize(value) {
      if (value) {
        value = value.toLowerCase();
        return value.replace(/^\w|\s\w/g, l => l.toUpperCase());
      }
    }
  },
  methods: {
    selectTag1() {
      this.selecttag = 1;
      this.focusbtn1 = true;
      this.focusbtn2 = false;
      this.focusbtn3 = false;
    },
    selectTag2() {
      this.selecttag = 2;
      this.focusbtn1 = false;
      this.focusbtn2 = true;
      this.focusbtn3 = false;
    },
    selectTag3() {
      this.selecttag = 3;
      this.focusbtn1 = false;
      this.focusbtn2 = false;
      this.focusbtn3 = true;
    }
  }
});
// CONCATENATED MODULE: ./components/template11/_productdetails/OptTab-hoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_OptTab_hokovue_type_script_lang_js_ = (OptTab_hokovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/_productdetails/OptTab-hoko.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(897)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_OptTab_hokovue_type_script_lang_js_,
  OptTab_hokovue_type_template_id_642527bc_scoped_true_render,
  OptTab_hokovue_type_template_id_642527bc_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "642527bc",
  "4ac5ec1c"
  
)

/* harmony default export */ var OptTab_hoko = (component.exports);
// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productdetails/productSlideHoko.vue?vue&type=template&id=8f4791b2&scoped=true&
var productSlideHokovue_type_template_id_8f4791b2_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "w-full flex"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-8f4791b2>" + _vm._ssrList(_vm.photos, function (photo, index) {
    return "<div class=\"swiper-slide\" data-v-8f4791b2><img" + _vm._ssrAttr("src", photo) + " alt=\"ProductHoko\" class=\"photo w-full flex justify-center\" data-v-8f4791b2></div>";
  }) + "</div> <div slot=\"pagination\" class=\"swiper-pagination\" data-v-8f4791b2></div>")]);
};
var productSlideHokovue_type_template_id_8f4791b2_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/_productdetails/productSlideHoko.vue?vue&type=template&id=8f4791b2&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productdetails/productSlideHoko.vue?vue&type=script&lang=js&
/* harmony default export */ var productSlideHokovue_type_script_lang_js_ = ({
  name: 'productSlide-details',
  props: ['photos'],
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination'
        },
        setWrapperSize: true,
        paginationClickable: true,
        grabCursor: true
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
});
// CONCATENATED MODULE: ./components/template11/_productdetails/productSlideHoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_productSlideHokovue_type_script_lang_js_ = (productSlideHokovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template11/_productdetails/productSlideHoko.vue



function productSlideHoko_injectStyles (context) {
  
  var style0 = __webpack_require__(899)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var productSlideHoko_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_productSlideHokovue_type_script_lang_js_,
  productSlideHokovue_type_template_id_8f4791b2_scoped_true_render,
  productSlideHokovue_type_template_id_8f4791b2_scoped_true_staticRenderFns,
  false,
  productSlideHoko_injectStyles,
  "8f4791b2",
  "335185a1"
  
)

/* harmony default export */ var productSlideHoko = (productSlideHoko_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-ProductDetailHoko.vue?vue&type=script&lang=js&




/* harmony default export */ var ko_ProductDetailHokovue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-ProductDetail',
  props: {
    dataStore: Object,
    // productsData: Array,
    whatsapp: String,
    // envios: Object,
    facebookPixel: Object,
    settingByTemplate11: Array
  },
  components: {
    OptionTab: OptTab_hoko,
    ProductSlide: productSlideHoko
  },
  mounted() {
    this.asyncauthToken();
  },
  data() {
    return {
      data: {},
      maxQuantityValue: 1,
      quantityValue: 1,
      loading: true,
      spent: false,
      selectPhotoUrl: '',
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 10,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        }
      },
      sharing: {
        url: '',
        quote: ''
      },
      sharingFacebook: ''
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    dataHoko() {
      return this.$store.state.dataHoko;
    }
  },
  methods: {
    mobileCheck() {
      window.mobilecheck = function () {
        var check = false;
        (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
      };
      return window.mobilecheck();
    },
    redirectWP() {
      let baseUrlMovil = 'https://api.whatsapp.com/send?';
      let baseUrlPc = 'https://web.whatsapp.com/send?';
      let urlProduct = window.location.href;
      let text = `Hola 😀, %0AQuiero compartir contigo éste  producto, seguro te va a encantar: ${this.data.name}%0A%0ALink de compra: ${urlProduct}%0A`;
      if (this.mobileCheck()) {
        window.open(`${baseUrlMovil}text=${text}`, '_blank');
      } else {
        window.open(`${baseUrlPc}text=${text}`, '_blank');
      }
    },
    async asyncauthToken() {
      if (this.dataHoko.token) {
        this.getProductsHoko(this.$route.params.slug, this.dataHoko.token);
      }
    },
    async getProductsHoko(id, token) {
      let config = {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*'
        }
      };
      await external_axios_default.a.get(`https://hoko.com.co/api/member/myproducts/${id}`, config).then(response => {
        this.loading = false;
        this.data = response.data.product;
        if (this.data) {
          this.selectedPhoto(this.data.images[0]);
          this.maxQuantityValue = this.data.stock.amount;
          if (this.data.stock.amount == 0 || this.maxQuantityValue <= 0) {
            this.spent = true;
          }
          this.sharing.url = window.location.href;
          this.sharing.quote = `Explora%20el%20producto%20${this.data.name}%2C%20te%20van%20a%20encantar.%0ALink%20del%20producto%3A%20${this.sharing.url}`;
          this.sharingFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.sharing.url}&quote=${this.sharing.quote}`;
        }
      });
    },
    changeSlide() {
      this.swiper.slidePrev(700, false);
    },
    GoPayments() {
      let objeto = {
        id: this.data.id,
        cantidad: this.quantityValue,
        combinacion: undefined
      };
      let json = {
        products: [objeto],
        tienda: {
          id: this.$store.state.tienda.id_tienda
        },
        canal: 'HOKO'
      };
      json = JSON.stringify(json);
      if (json) {
        if (this.layourUnicentro == true) {
          window.open(`https://checkout.komercia.co/?params=${json}`);
          // if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
          //   window.fbq('track', 'InitiateCheckout')
          // }
          // this.$gtm.push({ event: 'InitiateCheckout' })
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`;
          // if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
          //   window.fbq('track', 'InitiateCheckout')
          // }
          // this.$gtm.push({ event: 'InitiateCheckout' })
        }
      }
    },

    addQuantity() {
      if (this.maxQuantityValue > this.quantityValue) {
        this.quantityValue++;
      } else {
        console.log('Alerta de limite de sku');
      }
    },
    removeQuantity() {
      if (this.quantityValue >= 2) {
        this.quantityValue--;
      }
    },
    selectedPhoto(photo) {
      this.selectPhotoUrl = photo;
    }
  },
  watch: {
    quantityValue(value) {
      if (value > this.maxQuantityValue) {
        this.quantityValue = this.maxQuantityValue;
      }
    }
  },
  filters: {
    currency(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
      }
      return '';
    },
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase();
      }
      return '';
    }
  }
});
// CONCATENATED MODULE: ./components/template11/ko-ProductDetailHoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var template11_ko_ProductDetailHokovue_type_script_lang_js_ = (ko_ProductDetailHokovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template11/ko-ProductDetailHoko.vue



function ko_ProductDetailHoko_injectStyles (context) {
  
  var style0 = __webpack_require__(901)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ko_ProductDetailHoko_component = Object(componentNormalizer["a" /* default */])(
  template11_ko_ProductDetailHokovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  ko_ProductDetailHoko_injectStyles,
  "25c98ebc",
  "5b2efdec"
  
)

/* harmony default export */ var ko_ProductDetailHoko = __webpack_exports__["default"] = (ko_ProductDetailHoko_component.exports);

/***/ })

};;
//# sourceMappingURL=71.js.map