exports.ids = [72];
exports.modules = {

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(882);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3da7fe99", content, true, context)
};

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(884);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4cba95c6", content, true, context)
};

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(886);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("09106d1e", content, true, context)
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

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_b305e606_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(470);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_b305e606_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_b305e606_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_b305e606_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlideHoko_vue_vue_type_style_index_0_id_b305e606_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-b305e606]{align-items:center;box-sizing:border-box;display:flex;justify-content:center;max-width:375px;position:relative}.photo[data-v-b305e606],.swiper-slide[data-v-b305e606]{overflow:hidden;width:100%}.photo[data-v-b305e606]{-o-object-fit:cover;object-fit:cover}.photos .responsive .swiper-pagination-bullet[data-v-b305e606]{background-color:hsla(0,0%,100%,.5)}.photos .responsive .swiper-pagination-bullet-active[data-v-b305e606]{background-color:#fff}.youtube[data-v-b305e606]{grid-gap:5px;display:grid;justify-items:start;max-width:400px;width:99%}.youtube__action_back[data-v-b305e606]{background-color:var(--color_background_btn);border-style:none;color:var(--color_text_btn);outline:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_hoko_vue_vue_type_style_index_0_id_4011b9c6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(471);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_hoko_vue_vue_type_style_index_0_id_4011b9c6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_hoko_vue_vue_type_style_index_0_id_4011b9c6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_hoko_vue_vue_type_style_index_0_id_4011b9c6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_hoko_vue_vue_type_style_index_0_id_4011b9c6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".description[data-v-4011b9c6]{border-bottom:1px solid hsla(240,5%,52%,.342);display:flex;width:100%}.description div[data-v-4011b9c6]{color:rgba(21,20,57,.541);line-height:1.5}.left[data-v-4011b9c6]{flex:2;flex-direction:column}.left[data-v-4011b9c6],.left-empty[data-v-4011b9c6]{display:flex;padding-bottom:10px;width:100%}.left-empty[data-v-4011b9c6]{flex:2}.right[data-v-4011b9c6]{border-left:1px solid hsla(240,5%,52%,.342);display:flex;flex:1;flex-direction:column;padding-bottom:10px;width:100%}.title-section[data-v-4011b9c6]{align-self:flex-start;color:rgba(21,20,57,.541);font-size:16px;text-transform:uppercase}.right img[data-v-4011b9c6]{margin-top:15px;max-width:320px;width:100%}.section[data-v-4011b9c6]{box-sizing:border-box;margin-left:25px;margin-top:20px}.text-desc[data-v-4011b9c6]{align-self:flex-start;color:rgba(21,20,57,.541);font-size:15px;margin-top:20px;text-transform:uppercase}.wrapper-comments[data-v-4011b9c6]{border-top:1px solid hsla(240,5%,52%,.342);width:100%}h3[data-v-4011b9c6]{align-self:flex-start;font-size:15px;text-transform:uppercase}h3[data-v-4011b9c6],h4[data-v-4011b9c6]{color:rgba(21,20,57,.541)}h4[data-v-4011b9c6]{font-weight:700;margin-bottom:5px;margin-top:15px}li p[data-v-4011b9c6]{font-size:14px;line-height:1.4}.icon[data-v-4011b9c6]{align-self:flex-start;margin-bottom:10px;vertical-align:middle;width:50px}.content[data-v-4011b9c6]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start}.payments[data-v-4011b9c6]{margin-bottom:20px}.line[data-v-4011b9c6]{border-top:1px solid hsla(240,5%,52%,.342);width:100%}.deliverys[data-v-4011b9c6]{margin-bottom:20px;margin-top:20px}.stage[data-v-4011b9c6]{border-left:0;display:flex;flex:1}.logo-pasarela[data-v-4011b9c6]{width:160px!important}.logo-pasarela-daviplata[data-v-4011b9c6]{width:120px!important}.logo-pasarela-efecty[data-v-4011b9c6]{width:100px!important}.logo-pasarela-wompi[data-v-4011b9c6]{width:220px!important}.logo-pasarela-payu[data-v-4011b9c6]{width:300px!important}.logo-pasarela-payco[data-v-4011b9c6]{width:280px!important}.capitalize[data-v-4011b9c6]{font-weight:600!important}.description-method[data-v-4011b9c6]{font-size:14px;line-height:1.4}.price[data-v-4011b9c6]{font-size:14px;margin-top:10px}.medios-mercadopago[data-v-4011b9c6]{border-radius:4px;display:block;width:100%}.line-comments[data-v-4011b9c6],.wrapper-comments-responsive[data-v-4011b9c6]{display:none}.cursor_point[data-v-4011b9c6]{cursor:pointer}.editor[data-v-4011b9c6]{width:100%}.editor[data-v-4011b9c6] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-4011b9c6] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-4011b9c6] .el-tiptap-editor__content h1{font-family:var(--font-style-1);font-size:2em}.editor[data-v-4011b9c6] .el-tiptap-editor__content h2{font-family:var(--font-style-1);font-size:1.5em}.editor[data-v-4011b9c6] .el-tiptap-editor__content h3{font-family:var(--font-style-1);font-size:1.17em}.editor[data-v-4011b9c6] .el-tiptap-editor__content h4{font-family:var(--font-style-1);font-size:1.12em}.editor[data-v-4011b9c6] .el-tiptap-editor__content h5{font-family:var(--font-style-1);font-size:.83em}.editor[data-v-4011b9c6] .el-tiptap-editor__content blockquote,.editor[data-v-4011b9c6] .el-tiptap-editor__content code,.editor[data-v-4011b9c6] .el-tiptap-editor__content em,.editor[data-v-4011b9c6] .el-tiptap-editor__content li,.editor[data-v-4011b9c6] .el-tiptap-editor__content ol,.editor[data-v-4011b9c6] .el-tiptap-editor__content p,.editor[data-v-4011b9c6] .el-tiptap-editor__content pre,.editor[data-v-4011b9c6] .el-tiptap-editor__content s,.editor[data-v-4011b9c6] .el-tiptap-editor__content span,.editor[data-v-4011b9c6] .el-tiptap-editor__content strong,.editor[data-v-4011b9c6] .el-tiptap-editor__content ul{font-family:var(--font-style-1)}.editor[data-v-4011b9c6] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-4011b9c6] .el-popper.el-tiptap-image-popper{display:none}@media (max-width:810px){.left[data-v-4011b9c6]{margin-right:15px}}@media (max-width:768px){.description[data-v-4011b9c6]{display:flex;flex-direction:column;margin-bottom:20px;margin-right:0;width:100%}.description[data-v-4011b9c6],.section[data-v-4011b9c6]{margin-left:0}.left[data-v-4011b9c6]{flex:1;margin-right:0;padding-bottom:0}.left-empty[data-v-4011b9c6]{display:flex;flex:0;padding-bottom:10px;width:100%}.right[data-v-4011b9c6]{border-left:0}.wrapper-comments-responsive[data-v-4011b9c6]{display:inline;display:initial}.wrapper-comments[data-v-4011b9c6]{display:none}.line-comments[data-v-4011b9c6]{border-top:1px solid hsla(240,5%,52%,.342);display:inline;display:initial;width:100%}}@media (max-width:725px){.editor[data-v-4011b9c6] .el-tiptap-editor>.el-tiptap-editor__content{padding:0 15px}.description[data-v-4011b9c6]{margin-bottom:0}.left[data-v-4011b9c6]{flex:1;padding-bottom:10px}.right[data-v-4011b9c6]{border-left:0}.payments[data-v-4011b9c6],.text-desc[data-v-4011b9c6]{padding-left:15px;padding-right:15px}.payments[data-v-4011b9c6]{border-top:1px solid hsla(240,5%,52%,.342);margin-bottom:10px}.section[data-v-4011b9c6]{margin-left:0;margin-top:0;padding-top:10px}.deliverys[data-v-4011b9c6]{margin-bottom:10px;margin-top:10px;padding-left:15px;padding-right:15px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetailHoko_1_vue_vue_type_style_index_0_id_61b2a665_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(472);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetailHoko_1_vue_vue_type_style_index_0_id_61b2a665_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetailHoko_1_vue_vue_type_style_index_0_id_61b2a665_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetailHoko_1_vue_vue_type_style_index_0_id_61b2a665_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetailHoko_1_vue_vue_type_style_index_0_id_61b2a665_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-productDetail[data-v-61b2a665]{align-items:center;background:#efefef;display:flex;justify-content:center;width:100%}.container-productDetail-loading[data-v-61b2a665]{background:#efefef;height:calc(100vh - 420px)}.container-productDetail[data-v-61b2a665],.container-productDetail-loading[data-v-61b2a665]{align-items:center;display:flex;flex-direction:column;justify-content:space-between;max-width:1300px;padding:50px 30px 30px;width:100%}.container-productDetail[data-v-61b2a665]{position:relative}.section[data-v-61b2a665],.wrapper-left[data-v-61b2a665]{display:flex;width:100%}.wrapper-left[data-v-61b2a665]{flex:2;flex-direction:row;padding-bottom:10px}.photos_responsive[data-v-61b2a665]{display:none}.photos[data-v-61b2a665]{display:flex;margin-right:30px;max-height:430px;position:relative}.swiper-wrapper[data-v-61b2a665]{position:relative;width:100%}.photos_selected[data-v-61b2a665]{display:flex;flex-direction:column;justify-content:stretch;max-height:100px;width:100%}.img-list[data-v-61b2a665]{border-radius:6px;cursor:pointer;height:100px;margin-bottom:10px;-o-object-fit:cover;object-fit:cover;vertical-align:top;width:100px}.wrapper-photo_main[data-v-61b2a665]{height:450px;margin-right:25px;max-width:650px;min-height:450px;position:relative;width:100%}.photo_main[data-v-61b2a665]{border-radius:10px;height:430px;max-height:430px;max-width:645px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%}.wrapper-right[data-v-61b2a665]{border-left:1px solid hsla(240,5%,52%,.342);display:flex;flex:1;flex-direction:column;padding-bottom:10px;width:100%}.content-right[data-v-61b2a665]{margin-left:20px;position:sticky;top:88px}.text-name[data-v-61b2a665]{color:#000;font-size:25px;font-weight:700}.wrapper-price[data-v-61b2a665]{align-items:flex-start;display:flex;flex-direction:row;justify-content:left;margin-bottom:12px}.wrapper-price>p[data-v-61b2a665]:nth-child(2){margin-left:5px}.text-precio[data-v-61b2a665]{color:#000;font-size:30px;font-weight:700;line-height:24px}.text-unidades[data-v-61b2a665]{color:rgba(21,20,57,.541)}.text-garantia[data-v-61b2a665],.text-unidades[data-v-61b2a665]{font-size:14px;font-weight:700;margin-top:5px}.text-garantia[data-v-61b2a665]{color:#000;margin-left:5px}.item-info-product[data-v-61b2a665]{margin-top:10px}.content-button[data-v-61b2a665],.content-shared[data-v-61b2a665]{display:flex;flex-direction:row;margin-top:15px}.btn-facebook[data-v-61b2a665]{background-color:transparent;border:0;border-radius:5px;color:#1877f2;cursor:pointer;display:flex;justify-content:center;margin-right:20px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-facebook[data-v-61b2a665]:hover{color:#000}.btn-whatsapp[data-v-61b2a665]{background-color:transparent;border:0;border-radius:5px;color:#25d366;cursor:pointer;display:flex;justify-content:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-whatsapp[data-v-61b2a665]:hover{color:#000}.wp-icon[data-v-61b2a665]{bottom:2px;font-size:27px}.whatsapp[data-v-61b2a665]{fill:#27d367;cursor:pointer;margin-left:20px;width:30px}.btn[data-v-61b2a665]{background-color:#000;border:2px solid #000;border-radius:var(--radius_btn);color:#fff;cursor:pointer;font-size:16px;font-weight:700;padding:6px 14px;transition:all .2s ease-in;width:238px}.btn[data-v-61b2a665]:hover{background-color:var(--btnhover);border:2px solid var(--btnhover);color:#fff}.btn-disabled[data-v-61b2a665]{background-color:gray;border:2px solid gray;border-radius:var(--radius_btn);color:#fff;font-size:16px;font-weight:700;padding:6px 14px;width:238px}.quantity[data-v-61b2a665]{box-sizing:border-box;display:flex;flex-direction:row;margin-top:10px;max-width:240px;position:relative}.text-quantity[data-v-61b2a665]{align-self:center;color:rgba(21,20,57,.541);font-size:14px;font-weight:700;margin-right:15px}.quantity_remove[data-v-61b2a665]{border:2px solid hsla(240,5%,52%,.342);border-bottom-left-radius:var(--radius_btn);border-right-style:none;border-top-left-radius:var(--radius_btn)}.quantity_remove[data-v-61b2a665],.quantity_value[data-v-61b2a665]{background:transparent;height:41px;width:55px}.quantity_value[data-v-61b2a665]{align-items:center;border-color:hsla(240,5%,52%,.342);border-style:solid none;border-width:2px;color:#000;display:flex;font-size:1em;justify-content:center;padding-left:10px;padding-right:10px}.quantity_add[data-v-61b2a665]{background:transparent;border:2px solid hsla(240,5%,52%,.342);border-bottom-right-radius:var(--radius_btn);border-left-style:none;border-top-right-radius:var(--radius_btn);height:41px;width:55px}.icon[data-v-61b2a665]{color:hsla(240,5%,52%,.342);font-size:16px;transition:all .2s ease-in}.icon[data-v-61b2a665]:hover{color:#000}.features[data-v-61b2a665]{border-top:1px solid hsla(240,5%,52%,.342);display:flex;width:100%}.responsive-purchase[data-v-61b2a665]{display:none}.container-alerta[data-v-61b2a665]{align-items:center;background-color:#fae84b;border:1px solid #e6d542;border-radius:6px;bottom:-32px;color:#000;display:flex;font-size:14px;justify-content:center;left:95px;position:absolute;width:130px}.alerta[data-v-61b2a665]{padding:5px;text-align:center}.content_buy_action[data-v-61b2a665]{display:flex;flex-direction:row;margin-bottom:10px}@media (max-width:1250px){.photo_main[data-v-61b2a665]{width:600px}}@media (max-width:1185px){.photo_main[data-v-61b2a665]{width:500px}}@media (max-width:1035px){.photo_main[data-v-61b2a665]{width:450px}}@media (max-width:960px){.photo_main[data-v-61b2a665]{width:400px}}@media (max-width:890px){.photo_main[data-v-61b2a665]{width:350px}}@media (max-width:810px){.photos[data-v-61b2a665]{margin-right:10px}.wrapper-left[data-v-61b2a665]{margin-right:15px}}@media (max-width:768px){.wrapper-left[data-v-61b2a665]{flex:1}.photos[data-v-61b2a665]{margin-right:10px}.photos[data-v-61b2a665],.wrapper-photo_main[data-v-61b2a665]{display:none}.photos_responsive[data-v-61b2a665]{box-sizing:border-box;display:flex;height:375px;margin-bottom:10px;max-width:400px;overflow:hidden;width:100%}}@media (max-width:725px){.features[data-v-61b2a665]{border-top:none}.container-productDetail[data-v-61b2a665]{align-items:center;justify-content:center;padding:0}.section[data-v-61b2a665]{flex-direction:column}.wrapper-left[data-v-61b2a665]{align-items:center;justify-content:center}.wrapper-right[data-v-61b2a665]{border-left:0;padding-bottom:2px}i.close[data-v-61b2a665]{position:absolute;right:10px;top:10px}.content-button[data-v-61b2a665],.quantity[data-v-61b2a665]{display:none}.responsive-purchase[data-v-61b2a665]{background:var(--background_color_1);bottom:0;box-shadow:0 0 30px 50px rgba(96,125,139,.096);display:inline;display:initial;position:fixed;right:0;width:100%;z-index:2}.ko-input[data-v-61b2a665]{align-items:center;display:flex;justify-content:space-between;padding:8px 5px;width:100%}.quantity-resposive[data-v-61b2a665]{display:flex;flex-direction:row}.text-quantity[data-v-61b2a665]{align-self:center;color:rgba(21,20,57,.541);font-size:14px;font-weight:700;margin-right:5px}.quantity_remove[data-v-61b2a665]{border:1px solid hsla(240,5%,52%,.342);border-bottom-left-radius:var(--radius_btn);border-right-style:none;border-top-left-radius:var(--radius_btn);width:3em}.quantity_remove[data-v-61b2a665],.quantity_value[data-v-61b2a665]{background:transparent;height:38px}.quantity_value[data-v-61b2a665]{align-items:center;border-color:hsla(240,5%,52%,.342);border-style:solid none;border-width:1px;color:#000;display:flex;font-size:1em;justify-content:center;padding-left:10px;padding-right:10px;width:2.5em}.quantity_add[data-v-61b2a665]{background:transparent;border:1px solid hsla(240,5%,52%,.342);border-bottom-right-radius:var(--radius_btn);border-left-style:none;border-top-right-radius:var(--radius_btn);height:38px;width:3em}.icon[data-v-61b2a665]{font-size:16px}.content_buy_action-responsive[data-v-61b2a665]{display:flex;width:100%}.card-info-1-res[data-v-61b2a665]{align-items:center;background:gray;border:1px solid gray;color:#fff;display:flex;justify-content:center}.btn-responsive[data-v-61b2a665],.card-info-1-res[data-v-61b2a665]{border-radius:var(--radius_btn);font-size:16px;padding:8px 10px;width:100%}.btn-responsive[data-v-61b2a665]{background-color:var(--color_background_btn);border:1px solid var(--color_background_btn);color:var(--color_text_btn)}.card-icon-cart[data-v-61b2a665]{color:var(--color_text_btn);cursor:pointer;font-size:20px;margin-right:4px}.container-alert[data-v-61b2a665]{align-items:center;background-color:#fae84b;border:1px solid #e6d542;border-radius:6px;color:#000;display:flex;font-size:14px;justify-content:center;left:45px;position:absolute;top:-55px;width:80px}.alert[data-v-61b2a665]{padding:5px;text-align:center}}@media (max-width:600px){.container-productDetail[data-v-61b2a665]{padding:0}.wrapper-left[data-v-61b2a665]{padding-bottom:0}.wrapper-right[data-v-61b2a665]{margin-bottom:15px}.content-right[data-v-61b2a665]{margin-left:15px;margin-right:15px}.text-name[data-v-61b2a665]{font-size:20px;font-weight:500}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko-ProductDetailHoko-1.vue?vue&type=template&id=61b2a665&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productDetail",
    style: _vm.settingByTemplate
  }, [_vm.loading ? _vm._ssrNode("<div class=\"container-productDetail-loading\" data-v-61b2a665>", "</div>") : _vm._ssrNode("<div class=\"container-productDetail\"" + _vm._ssrStyle(null, {
    '--font-style': this.settingByTemplate && this.settingByTemplate.tipo_letra ? this.settingByTemplate.tipo_letra : 'Roboto'
  }, null) + " data-v-61b2a665>", "</div>", [_vm._ssrNode("<div class=\"section\" data-v-61b2a665>", "</div>", [_vm._ssrNode("<div class=\"wrapper-left\" data-v-61b2a665>", "</div>", [[_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "photos"
  }, [_vm.data.images ? _vm._ssrNode("<div class=\"swiper-wrapper\" data-v-61b2a665>", "</div>", _vm._l(_vm.data.images, function (foto, itemsfoto) {
    return _vm._ssrNode("<div class=\"swiper-slide photos_selected\" data-v-61b2a665>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: foto,
        expression: "foto"
      }],
      staticClass: "img-list",
      attrs: {
        "loading": "lazy",
        "alt": "Product Img"
      },
      on: {
        "click": function ($event) {
          return _vm.selectedPhoto(foto);
        }
      }
    }, [])]);
  }), 0) : _vm._e()])], _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-photo_main\" data-v-61b2a665>", "</div>", [_vm._ssrNode("<div v class=\"photo_main\" data-v-61b2a665>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: this.selectPhotoUrl,
      expression: "this.selectPhotoUrl"
    }],
    staticClass: "photo_main",
    attrs: {
      "loading": "lazy",
      "alt": "Product Zoom"
    }
  }, [])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"photos_responsive\" data-v-61b2a665>", "</div>", [_c('productSlide', {
    attrs: {
      "photos": _vm.data.images
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-right\" data-v-61b2a665>", "</div>", [_vm._ssrNode("<div class=\"content-right\" data-v-61b2a665>", "</div>", [_vm._ssrNode("<p class=\"text-name\" data-v-61b2a665>" + _vm._ssrEscape(_vm._s(_vm.data.name)) + "</p> <div class=\"wrapper-price\" data-v-61b2a665><p class=\"text-precio\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.price ? '' : 'none'
  }) + " data-v-61b2a665>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.data.price)) + "\n            ") + "</p></div> <div class=\"quantity\" data-v-61b2a665><p class=\"text-unidades\" style=\"margin-right: 10px\" data-v-61b2a665>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_stock')) + ":\n            ") + "</p> " + (!_vm.spent ? "<p class=\"text-unidades\" data-v-61b2a665>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.stock.amount) + " Unidades\n            ") + "</p>" : "<p class=\"text-unidades\" data-v-61b2a665>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p>") + "</div> "), _vm._ssrNode("<div data-v-61b2a665>", "</div>", [_vm._ssrNode("<div class=\"quantity\" data-v-61b2a665>", "</div>", [_vm._ssrNode("<p class=\"text-quantity\" data-v-61b2a665>" + _vm._ssrEscape(_vm._s(_vm.$t('cart_cantidad'))) + "</p> "), _vm._ssrNode("<button class=\"quantity_remove\" data-v-61b2a665>", "</button>", [_c('menos-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" <p class=\"quantity_value\" data-v-61b2a665>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p> "), _vm._ssrNode("<button class=\"quantity_add\" data-v-61b2a665>", "</button>", [_c('mas-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" " + (this.maxQuantityValue == this.quantityValue ? "<div class=\"container-alerta\" data-v-61b2a665><span class=\"alerta\" data-v-61b2a665>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('cart_ultimaUnidad'))) + "</span></div>" : "<!---->"))], 2), _vm._ssrNode(" " + (_vm.data.stock.product.warranty ? "<div class=\"content_buy_action\" data-v-61b2a665><p class=\"text-unidades\" data-v-61b2a665>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('productdetail_garantia')) + "\n              ") + "</p> <span class=\"text-garantia\" data-v-61b2a665>" + _vm._ssrEscape(_vm._s(_vm.data.stock.product.warranty)) + "</span></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"item-info-product\" data-v-61b2a665>", "</div>", [_vm._ssrNode("<div class=\"content-button\" data-v-61b2a665>" + (!_vm.spent ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-61b2a665>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_comprarAhora')) + "\n                ") + "</button>" : _vm.spent ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-61b2a665>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                ") + "</button>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"content-shared\" data-v-61b2a665>", "</div>", [_vm._ssrNode("<p class=\"text-unidades\" style=\"margin-right: 10px\" data-v-61b2a665>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_compartir')) + "\n                ") + "</p> "), _vm._ssrNode("<a" + _vm._ssrAttr("href", this.sharingFacebook) + " target=\"_blank\" rel=\"noreferrer noopener\" class=\"btn-facebook\" data-v-61b2a665>", "</a>", [_c('facebook-icon', {
    staticClass: "wp-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"btn-whatsapp\" data-v-61b2a665>", "</button>", [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  })], 1)], 2)], 2)], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section\" data-v-61b2a665>", "</div>", [_vm._ssrNode("<div class=\"features\" data-v-61b2a665>", "</div>", [_c('ko-description', {
    attrs: {
      "dataStore": _vm.dataStore,
      "data": _vm.data.stock.product
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"responsive-purchase\" data-v-61b2a665>", "</div>", [_vm._ssrNode("<div class=\"ko-input\" data-v-61b2a665>", "</div>", [_vm._ssrNode("<div class=\"quantity-resposive\" data-v-61b2a665>", "</div>", [_vm._ssrNode("<button class=\"quantity_remove\" data-v-61b2a665>", "</button>", [_c('menos-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" <p class=\"quantity_value\" data-v-61b2a665>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p> "), _vm._ssrNode("<button class=\"quantity_add\" data-v-61b2a665>", "</button>", [_c('mas-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "slide-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.quantityValue == _vm.maxQuantityValue,
      expression: "quantityValue == maxQuantityValue"
    }],
    staticClass: "container-alert"
  }, [_c('span', {
    staticClass: "alert"
  }, [_vm._v(_vm._s(_vm.$t('cart_ultimaUnidad')))])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div style=\"width: 100%; margin-left: 10px\" data-v-61b2a665>", "</div>", [!_vm.spent ? _vm._ssrNode("<button id=\"AddToCartTag\" class=\"btn-responsive\" data-v-61b2a665>", "</button>", [_c('cartArrowDown', {
    staticClass: "card-icon-cart"
  }), _vm._ssrNode(_vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_comprarAhora')) + "\n          "))], 2) : _vm.spent ? _vm._ssrNode("<div class=\"content_buy_action-responsive\" data-v-61b2a665><p class=\"card-info-1-res\" data-v-61b2a665>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p></div>") : _vm._e()])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/Ko-ProductDetailHoko-1.vue?vue&type=template&id=61b2a665&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/productSlideHoko.vue?vue&type=template&id=b305e606&scoped=true&
var productSlideHokovue_type_template_id_b305e606_scoped_true_render = function render() {
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
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-b305e606>" + _vm._ssrList(_vm.photos, function (photo, index) {
    return "<div class=\"swiper-slide\" data-v-b305e606><img loading=\"lazy\"" + _vm._ssrAttr("src", photo) + " alt=\"ProductHoko\" class=\"photo w-full flex justify-center\" data-v-b305e606></div>";
  }) + "</div> <div slot=\"pagination\" class=\"swiper-pagination\" data-v-b305e606></div>")]);
};
var productSlideHokovue_type_template_id_b305e606_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productdetails/productSlideHoko.vue?vue&type=template&id=b305e606&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/productSlideHoko.vue?vue&type=script&lang=js&
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
        slidesPerView: '1',
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination'
        },
        // setWrapperSize: true,
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
// CONCATENATED MODULE: ./components/template5/_productdetails/productSlideHoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_productSlideHokovue_type_script_lang_js_ = (productSlideHokovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/_productdetails/productSlideHoko.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(881)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_productSlideHokovue_type_script_lang_js_,
  productSlideHokovue_type_template_id_b305e606_scoped_true_render,
  productSlideHokovue_type_template_id_b305e606_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "b305e606",
  "7e492900"
  
)

/* harmony default export */ var productSlideHoko = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/descriptionProduct-hoko.vue?vue&type=template&id=4011b9c6&scoped=true&
var descriptionProduct_hokovue_type_template_id_4011b9c6_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "description"
  }, [!_vm.activeClass ? _vm._ssrNode("<div class=\"left\" data-v-4011b9c6>", "</div>", [_vm._ssrNode("<h3 class=\"text-desc\" data-v-4011b9c6>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('productdetail_description')) + "\n    ") + "</h3> "), _vm.data.description ? _vm._ssrNode("<div class=\"editor\" data-v-4011b9c6>", "</div>", [_c('el-tiptap', {
    attrs: {
      "readonly": true,
      "extensions": _vm.extensions,
      "spellcheck": false,
      "charCounterCount": false,
      "tooltip": true,
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
  })], 1) : _vm._e()], 2) : _vm._ssrNode("<div class=\"left-empty\" data-v-4011b9c6></div>"), _vm._ssrNode(" <div class=\"right\" data-v-4011b9c6><div class=\"payments section\" data-v-4011b9c6><div class=\"content\" data-v-4011b9c6><h3 class=\"title-section\" data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_opcionesPago'))) + "</h3></div> <p data-v-4011b9c6>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('productdetail_opcionesPagoMsg')) + "\n      ") + "</p> <ul style=\"list-style: none\" data-v-4011b9c6>" + (_vm.mediospago.consignacion == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancaria'))) + "</h4> <p data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancariaMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.contraentrega == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContra'))) + "</h4> <p data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContraMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.convenir == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenir'))) + "</h4> <p data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenirMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.credibanco == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionCredibanco'))) + "</h4> <p data-v-4011b9c6>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionCredibancoMsg')) + "\n          ") + "</p> <a href=\"https://www.credibanco.com/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-4011b9c6><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335270/Templates%20Modos%20de%20pago/Credibanco_lprsof.png\" alt=\"logo Credibanco\" class=\"logo-pasarela\" data-v-4011b9c6></a></li>" : "<!---->") + " " + (_vm.mediospago.daviplata == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignaciondaviplata'))) + "</h4> <p data-v-4011b9c6>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignaciondaviplataMsg')) + "\n          ") + "</p> <img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333767/Templates%20Modos%20de%20pago/5c89c897e1917d9209a762af_davi_qn90y9.png\" alt=\"logo daviPlata\" class=\"logo-pasarela-daviplata\" data-v-4011b9c6></li>" : "<!---->") + " " + (_vm.mediospago.efecty == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfecty'))) + "</h4> <p data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfectyMsg'))) + "</p> <a href=\"https://www.efecty.com.co/web/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-4011b9c6><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333023/Templates%20Modos%20de%20pago/Efecty-png_q3fvog.png\" alt=\"logo efecty\" class=\"logo-pasarela-efecty\" data-v-4011b9c6></a></li>" : "<!---->") + " " + (_vm.mediospago.mercado_pago == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaMercado'))) + "</h4> <p data-v-4011b9c6>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaMercadoMsg')) + "\n          ") + "</p> <a href=\"https://www.mercadopago.com\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-4011b9c6><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606331948/Templates%20Modos%20de%20pago/mercadopago_jyalpa.png\" alt=\"logo mercadopago\" class=\"logo-pasarela-daviplata\" data-v-4011b9c6></a></li>" : "<!---->") + " " + (_vm.mediospago.nequi == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionnequi'))) + "</h4> <p data-v-4011b9c6>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionnequiMsg')) + "\n          ") + "</p> <a href=\"https://www.nequi.com.co/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-4011b9c6><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333553/Templates%20Modos%20de%20pago/Nequi_by_Bancolombia_hxhkhb.png\" alt=\"logo nequi\" class=\"logo-pasarela-daviplata\" data-v-4011b9c6></a></li>" : "<!---->") + " " + (_vm.mediospago.payco == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaEpayco'))) + "</h4> <p data-v-4011b9c6>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaEpaycoMsg')) + "\n          ") + "</p> <img loading=\"lazy\" src=\"https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png\" alt=\"Pasarela de pagos epayco\" class=\"logo-pasarela-payco\" data-v-4011b9c6></li>" : "<!---->") + " " + (_vm.mediospago.payu == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaPayu'))) + "</h4> <p data-v-4011b9c6>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://www.payulatam.com/co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-4011b9c6><img loading=\"lazy\" src=\"https://ecommerce.payulatam.com/logos/PayU_CO.png\" alt=\"PayU\" border=\"0\" class=\"logo-pasarela-payu\" data-v-4011b9c6></a></li>" : "<!---->") + " " + (_vm.mediospago.wompi == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionwompi'))) + "</h4> <p data-v-4011b9c6>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://wompi.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-4011b9c6><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335739/Templates%20Modos%20de%20pago/wompi_jxuitu.png\" alt=\"wompi\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-4011b9c6></a></li>" : "<!---->") + " " + (_vm.mediospago.wepay4u == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>WePay4U</h4> <p data-v-4011b9c6>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('text_pago_WePay4U')) + "\n          ") + "</p> <a href=\"https://wepay4u.com/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-4011b9c6><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/v1639078440/wePay4u/powered_by_z7sgqp.png\" alt=\"wePay4u\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-4011b9c6></a></li>" : "<!---->") + " " + (_vm.mediospago.tu_compra == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>Tucompra</h4> <p data-v-4011b9c6>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('text_pago_Tucompra')) + "\n          ") + "</p> <a href=\"https://tucompra.com.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-4011b9c6><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/tucompra_ss0oys.png\" alt=\"tu_compra\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-4011b9c6></a></li>" : "<!---->") + " " + (_vm.mediospago.flow == 1 ? "<li data-v-4011b9c6><h4 data-v-4011b9c6>Tucompra</h4> <p data-v-4011b9c6>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('text_pago_flowInfo')) + "\n          ") + "</p> <a href=\"https://www.flow.cl/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-4011b9c6><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/flow_jevnwy.png\" alt=\"flow\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-4011b9c6></a></li>" : "<!---->") + "</ul></div></div>")], 2);
};
var descriptionProduct_hokovue_type_template_id_4011b9c6_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productdetails/descriptionProduct-hoko.vue?vue&type=template&id=4011b9c6&scoped=true&

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(67);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/descriptionProduct-hoko.vue?vue&type=script&lang=js&


/* harmony default export */ var descriptionProduct_hokovue_type_script_lang_js_ = ({
  mixins: [elemenTiptap["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    dataStore: Object,
    data: {}
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
    }
  },
  filters: {
    capitalize(value) {
      if (value) {
        value = value.toLowerCase();
        return value.replace(/^\w|\s\w/g, l => l.toUpperCase());
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template5/_productdetails/descriptionProduct-hoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_descriptionProduct_hokovue_type_script_lang_js_ = (descriptionProduct_hokovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template5/_productdetails/descriptionProduct-hoko.vue



function descriptionProduct_hoko_injectStyles (context) {
  
  var style0 = __webpack_require__(883)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var descriptionProduct_hoko_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_descriptionProduct_hokovue_type_script_lang_js_,
  descriptionProduct_hokovue_type_template_id_4011b9c6_scoped_true_render,
  descriptionProduct_hokovue_type_template_id_4011b9c6_scoped_true_staticRenderFns,
  false,
  descriptionProduct_hoko_injectStyles,
  "4011b9c6",
  "372a0982"
  
)

/* harmony default export */ var descriptionProduct_hoko = (descriptionProduct_hoko_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko-ProductDetailHoko-1.vue?vue&type=script&lang=js&



/* harmony default export */ var Ko_ProductDetailHoko_1vue_type_script_lang_js_ = ({
  name: 'Ko-ProductDetail-1',
  props: {
    dataStore: Object,
    // productsData: Array,
    whatsapp: String,
    // envios: Object,
    facebookPixel: Object,
    settingByTemplate: Object
  },
  components: {
    productSlide: productSlideHoko,
    koDescription: descriptionProduct_hoko
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
// CONCATENATED MODULE: ./components/template5/Ko-ProductDetailHoko-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var template5_Ko_ProductDetailHoko_1vue_type_script_lang_js_ = (Ko_ProductDetailHoko_1vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template5/Ko-ProductDetailHoko-1.vue



function Ko_ProductDetailHoko_1_injectStyles (context) {
  
  var style0 = __webpack_require__(885)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko_ProductDetailHoko_1_component = Object(componentNormalizer["a" /* default */])(
  template5_Ko_ProductDetailHoko_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Ko_ProductDetailHoko_1_injectStyles,
  "61b2a665",
  "4fa726cf"
  
)

/* harmony default export */ var Ko_ProductDetailHoko_1 = __webpack_exports__["default"] = (Ko_ProductDetailHoko_1_component.exports);

/***/ })

};;
//# sourceMappingURL=72.js.map