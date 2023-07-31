exports.ids = [63];
exports.modules = {

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/mixins/ComponentProps.vue?vue&type=script&lang=js&
/* harmony default export */ var ComponentPropsvue_type_script_lang_js_ = ({
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate12: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/template12/mixins/ComponentProps.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_ComponentPropsvue_type_script_lang_js_ = (ComponentPropsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template12/mixins/ComponentProps.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_ComponentPropsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f6585df8"
  
)

/* harmony default export */ var ComponentProps = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(736);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("20465478", content, true, context)
};

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(738);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("49d5adb9", content, true, context)
};

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(740);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("74403f18", content, true, context)
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

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_03bf6222_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(383);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_03bf6222_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_03bf6222_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_03bf6222_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_03bf6222_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_card[data-v-03bf6222]{align-items:flex-start;background-color:transparent;cursor:pointer;display:flex;flex-wrap:nowrap;margin-bottom:25px;position:relative;width:100%}.wrapper_card>div[data-v-03bf6222]:first-child{max-width:100px}.wrapper_card>div[data-v-03bf6222]:nth-child(3){max-width:130px}.product_container .content-img-prodcut>img[data-v-03bf6222],.product_container .product_description[data-v-03bf6222],.product_container .product_header[data-v-03bf6222],.product_container .wrapper-price>span[data-v-03bf6222]{transition:all .22s ease-in-out}.product_container:hover .content-img-prodcut>img[data-v-03bf6222],.product_container:hover .product_description[data-v-03bf6222],.product_container:hover .product_header[data-v-03bf6222],.product_container:hover .wrapper-price>span[data-v-03bf6222]{transform:translateX(.4rem)}.content-img-prodcut[data-v-03bf6222]{align-items:center;display:flex;justify-content:center;width:100%}.product-image[data-v-03bf6222]{margin-right:10px;max-height:80px;max-width:80px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.img_rounded[data-v-03bf6222]{border-radius:100%}.img_normal[data-v-03bf6222]{border-radius:2px}.product-image-soldOut[data-v-03bf6222]{filter:grayscale(100%)}.wrapper-price[data-v-03bf6222]{display:flex;justify-content:flex-end;width:100%}.wrapper-text[data-v-03bf6222]{flex-direction:column;width:100%}.img_visileRes[data-v-03bf6222]{display:flex}@media (max-width:768px){.wrapper_card[data-v-03bf6222]{justify-content:flex-start}}@media (max-width:450px){.wrapper-text[data-v-03bf6222]{margin-right:3px;max-width:160px}.wrapper_card[data-v-03bf6222]{align-items:flex-start}.wrapper_card>div[data-v-03bf6222]:first-child{margin-right:10px;max-width:80px}.wrapper_card>div[data-v-03bf6222]:nth-child(3){max-width:100px}.product-image[data-v-03bf6222]{max-height:70px;max-width:70px}.img_visileRes[data-v-03bf6222]{display:none}.img_normal[data-v-03bf6222]{display:flex}}@media (max-width:320px){.wrapper-text[data-v-03bf6222]{max-width:120px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetail_vue_vue_type_style_index_0_id_599006e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetail_vue_vue_type_style_index_0_id_599006e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetail_vue_vue_type_style_index_0_id_599006e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetail_vue_vue_type_style_index_0_id_599006e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productDetail_vue_vue_type_style_index_0_id_599006e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-599006e4]{font-family:var(--font-style-1)!important}.container-productDetail[data-v-599006e4]{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:flex-start;padding:20px 30px 0;position:relative;width:100%}.section[data-v-599006e4]{display:flex;justify-content:space-between;width:100%}.wrapper-description[data-v-599006e4]{margin-top:20px;width:100%}.wrapper-left[data-v-599006e4]{flex:1;flex-direction:row;margin-right:15px}.wrapper-left[data-v-599006e4],.wrapper-right[data-v-599006e4]{display:flex;padding-bottom:10px;width:100%}.wrapper-right[data-v-599006e4]{flex:1;flex-direction:column}.content-right[data-v-599006e4]{margin-left:20px}.text-name[data-v-599006e4]{color:#445a64;color:#0f2930;font-size:17px;font-weight:600;line-height:20px}.text-marca[data-v-599006e4]{color:rgba(21,20,57,.541);font-size:16px;font-stretch:semi-condensed;font-style:normal}.text-promocion[data-v-599006e4]{color:rgba(55,4,4,.61);font-size:14px;font-weight:700;margin-top:10px;-webkit-text-decoration:line-through;text-decoration:line-through}.wrapper-price_space[data-v-599006e4]{margin-top:10px}.wrapper-price[data-v-599006e4]{align-items:flex-start;display:flex;flex-direction:row;justify-content:left;margin-bottom:12px}.wrapper-price>p[data-v-599006e4]:nth-child(2){margin-left:5px}.text-precio[data-v-599006e4]{color:#000;font-size:30px;font-weight:700;line-height:24px}.card-descuento[data-v-599006e4]{border-radius:3px;color:#00a650;font-size:12px}.text-variant[data-v-599006e4]{color:#0f2930;font-size:15px;font-weight:600}.content-text-desc[data-v-599006e4]{color:#0f2930;font-size:14px;margin-bottom:10px;margin-top:10px}.text-desc[data-v-599006e4]{color:rgba(21,20,57,.541);font-size:14px;font-weight:400;line-height:1.5;text-decoration-color:currentcolor;text-decoration-line:none;text-decoration-style:solid;-webkit-text-decoration:none;text-decoration:none}.content_buy_action[data-v-599006e4]{display:flex;flex-direction:row}.card-info-2[data-v-599006e4]{align-items:center;background:#35dd8d;border-radius:5px;color:#000;display:flex;font-size:12px;font-weight:700;justify-content:center;margin-bottom:10px;margin-right:10px;padding:1px 4px}.content_card-info[data-v-599006e4]{display:inline;display:initial}.card-info-1[data-v-599006e4]{align-items:center;background:#e71f77;border-radius:5px;color:#fff;display:flex;font-size:12px;justify-content:center;margin-bottom:10px;padding:1px 4px}.content-description[data-v-599006e4]{display:flex;margin-bottom:20px;width:100%}.responsive-purchase[data-v-599006e4]{bottom:0;justify-content:center;position:sticky;z-index:2}.ko-input[data-v-599006e4],.responsive-purchase[data-v-599006e4]{align-items:center;display:flex;width:100%}.ko-input[data-v-599006e4]{background-color:#fafaf8;justify-content:space-between;padding:12px 0}.quantity-resposive[data-v-599006e4]{display:flex;flex-direction:row}.quantity_remove[data-v-599006e4]{border:1px solid #000;border-bottom-left-radius:var(--radius_btn);border-right-style:none;border-top-left-radius:var(--radius_btn);cursor:pointer;width:3em}.quantity_remove[data-v-599006e4],.quantity_value[data-v-599006e4]{background:transparent;height:38px}.quantity_value[data-v-599006e4]{align-items:center;border-color:#000;border-style:solid none;border-width:1px;color:#000;display:flex;font-size:1em;justify-content:center;padding-left:10px;padding-right:10px;width:2.5em}.quantity_add[data-v-599006e4]{background:transparent;border:1px solid #000;border-bottom-right-radius:var(--radius_btn);border-left-style:none;border-top-right-radius:var(--radius_btn);cursor:pointer;height:38px;width:3em}.btn-responsive[data-v-599006e4]{background:#222;border:none;border-radius:var(--radius_btn);box-shadow:0 0 2px rgba(52,58,67,.1),0 2px 5px rgba(52,58,67,.08),0 5px 15px rgba(52,58,67,.08);color:#fff;cursor:pointer;font-size:14px;height:100%;margin-left:15px;padding:6px 10px;transition:all .2s ease-in;width:100%}.btn-responsive span[data-v-599006e4]{font-size:16px;font-weight:600}.icon[data-v-599006e4]{color:#000;font-size:16px;transition:all .2s ease-in}.icon[data-v-599006e4]:hover{color:#128c7e}.wrapper-btn[data-v-599006e4]{padding:5px 0}.card-info-1-res[data-v-599006e4],.wrapper-btn[data-v-599006e4]{align-items:center;display:flex;justify-content:center;width:100%}.card-info-1-res[data-v-599006e4]{background:#cfcfcf;border-radius:var(--radius_btn);color:#4c4c4c;font-size:14px;font-weight:600;height:36px;padding:6px 10px}.container-alert[data-v-599006e4]{align-items:center;background-color:#fae84b;border:1px solid #e6d542;border-radius:6px;color:#000;display:flex;font-size:14px;justify-content:center;left:5px;position:absolute;top:-33px;width:120px}.alert[data-v-599006e4]{padding:5px;text-align:center}.container-variants[data-v-599006e4]{margin-top:15px}.text-variant-type[data-v-599006e4]{color:#0f2930;font-size:14px}.editor[data-v-599006e4]{color:transparent;width:100%}.editor[data-v-599006e4] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-599006e4] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-599006e4] .el-tiptap-editor__content h1{font-family:var(--font-style-1);font-size:2em}.editor[data-v-599006e4] .el-tiptap-editor__content h2{font-family:var(--font-style-1);font-size:1.5em}.editor[data-v-599006e4] .el-tiptap-editor__content h3{font-family:var(--font-style-1);font-size:1.17em}.editor[data-v-599006e4] .el-tiptap-editor__content h4{font-family:var(--font-style-1);font-size:1.12em}.editor[data-v-599006e4] .el-tiptap-editor__content h5{font-family:var(--font-style-1);font-size:.83em}.editor[data-v-599006e4] .el-tiptap-editor__content blockquote,.editor[data-v-599006e4] .el-tiptap-editor__content code,.editor[data-v-599006e4] .el-tiptap-editor__content em,.editor[data-v-599006e4] .el-tiptap-editor__content li,.editor[data-v-599006e4] .el-tiptap-editor__content ol,.editor[data-v-599006e4] .el-tiptap-editor__content p,.editor[data-v-599006e4] .el-tiptap-editor__content pre,.editor[data-v-599006e4] .el-tiptap-editor__content s,.editor[data-v-599006e4] .el-tiptap-editor__content span,.editor[data-v-599006e4] .el-tiptap-editor__content strong,.editor[data-v-599006e4] .el-tiptap-editor__content ul{font-family:var(--font-style-1)}.editor[data-v-599006e4] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-599006e4] .el-popper.el-tiptap-image-popper{display:none}@media (max-width:685px){.container-productDetail[data-v-599006e4]{padding:0}.section[data-v-599006e4]{flex-direction:column;justify-content:center}.wrapper-right[data-v-599006e4]{align-items:center;justify-content:center;padding-bottom:0}.content-right[data-v-599006e4]{margin-left:0;padding:5px 15px;width:100%}.text-name[data-v-599006e4]{color:#445a64;font-size:18px;font-weight:500;margin-top:10px}.content-description[data-v-599006e4]{padding:0 15px 20px}}@media (max-width:500px){.ko-input[data-v-599006e4]{padding:12px 10px}}.modal-content[data-v-599006e4]{-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:animatetop-599006e4;animation-name:animatetop-599006e4;background-color:#fefefe;border:1px solid #888;border-radius:8px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);margin:auto;max-height:600px;overflow-y:auto;padding:0;position:relative}.modal-content[data-v-599006e4]::-webkit-scrollbar{width:10px}.modal-content[data-v-599006e4]::-webkit-scrollbar-thumb{background:#a3a3a3;border-radius:4px}.modal-content[data-v-599006e4]::-webkit-scrollbar-thumb:active{background-color:#777}.modal-content[data-v-599006e4]::-webkit-scrollbar-thumb:hover{background:#686868;box-shadow:0 0 2px 1px rgba(0,0,0,.401)}@keyframes animatetop-599006e4{0%{opacity:0;top:-300px}to{opacity:1;top:0}}.close[data-v-599006e4]{color:#fff;float:right;font-size:28px;font-weight:600}.close[data-v-599006e4]:focus,.close[data-v-599006e4]:hover{color:#ccc;cursor:pointer;-webkit-text-decoration:none;text-decoration:none}.modal-header[data-v-599006e4]{align-items:center;background-color:#222;color:#fff;display:flex;justify-content:space-between;padding:10px 20px;position:sticky;top:0;width:100%;z-index:2}.txt-Legal[data-v-599006e4]{color:#fff;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font-size:16px;font-weight:600}@media (min-width:300px){.modal-content[data-v-599006e4]{width:100%}}@media (min-width:768px){.modal-content[data-v-599006e4]{width:70%}}@media (min-width:1400px){.modal-content[data-v-599006e4]{width:50%}}.card[data-v-599006e4]{max-height:460px;min-height:460px}.spinner[data-v-599006e4]{animation:sk-rotate-599006e4 2s linear infinite;height:40px;margin:50px auto;position:relative;text-align:center;width:40px}.dot1[data-v-599006e4],.dot2[data-v-599006e4]{animation:sk-bounce-599006e4 2s ease-in-out infinite;background-color:#4429b4;border-radius:100%;display:inline-block;height:60%;position:absolute;top:0;width:60%}.dot2[data-v-599006e4]{animation-delay:-1s;bottom:0;top:auto}@keyframes sk-rotate-599006e4{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@keyframes sk-bounce-599006e4{0%,to{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSection_vue_vue_type_style_index_0_id_2f79592e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(385);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSection_vue_vue_type_style_index_0_id_2f79592e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSection_vue_vue_type_style_index_0_id_2f79592e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSection_vue_vue_type_style_index_0_id_2f79592e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSection_vue_vue_type_style_index_0_id_2f79592e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(33);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(741);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".divider[data-v-2f79592e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:50%;background-size:contain;height:3px;margin:0 auto;width:25%}.products-wrapper[data-v-2f79592e]{align-items:center;justify-content:center;width:100%}.subcategori-Content[data-v-2f79592e]{padding:30px 10px 20px}.products-content[data-v-2f79592e],.subcategori-Content[data-v-2f79592e]{margin:0 auto;max-width:940px;width:100%}.products-content[data-v-2f79592e]{grid-column-gap:20px;-moz-column-gap:20px;column-gap:20px;display:grid;grid-template-columns:repeat(2,minmax(420px,1fr));padding:10px 10px 20px}.modal[data-v-2f79592e]{background-color:#000;background-color:rgba(0,0,0,.4);height:100%;left:0;overflow:auto;padding-top:200px;position:fixed;top:0;width:100%;z-index:10}.text-title[data-v-2f79592e]{font-size:2.25rem}.text-subtitle[data-v-2f79592e],.text-title[data-v-2f79592e]{font-weight:600;text-transform:uppercase}.text-subtitle[data-v-2f79592e]{font-size:22px}@media (max-width:800px){.products-wrapper[data-v-2f79592e]{grid-template-columns:repeat(1,minmax(100%,1fr))}.text-title[data-v-2f79592e]{font-size:1.5rem}}@media (max-width:500px){.modal[data-v-2f79592e]{padding-top:80px}.products-wrapper[data-v-2f79592e]{padding:25px 10px 20px}.text-title[data-v-2f79592e]{font-size:1.5rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gradient-line.cf353c7.png";

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/MainSection.vue?vue&type=template&id=2f79592e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_vm._ssrNode("<div class=\"pt-20\"" + _vm._ssrStyle(null, `background:${_vm.settingByTemplate12.backgroundColor};`, null) + " data-v-2f79592e>", "</div>", [_vm.dataStore.categorias.length > 0 ? _vm._ssrNode("<div data-v-2f79592e>", "</div>", _vm._l(_vm.dataStore.categorias, function (category) {
    return _vm._ssrNode("<div class=\"pt-4 pb-4\" data-v-2f79592e>", "</div>", [_vm._ssrNode("<header class=\"text-center\" data-v-2f79592e><h2 class=\"text-title\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.titleColor};`, null) + " data-v-2f79592e>" + _vm._ssrEscape("\n            " + _vm._s(category.nombre_categoria_producto) + "\n          ") + "</h2></header> "), _vm.dataStore.subcategorias.length > 0 ? _vm._ssrNode("<div data-v-2f79592e>", "</div>", _vm._l(_vm.dataStore.subcategorias, function (subcategory, key) {
      return _vm._ssrNode("<div class=\"products-wrapper\"" + _vm._ssrStyle(null, null, {
        display: subcategory.categoria == category.id ? '' : 'none'
      }) + " data-v-2f79592e>", "</div>", [_vm._ssrNode("<div class=\"subcategori-Content\" data-v-2f79592e>" + (subcategory.categoria == category.id ? "<p class=\"text-subtitle\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.titleColor};`, null) + " data-v-2f79592e>" + _vm._ssrEscape("\n                " + _vm._s(subcategory.nombre_subcategoria) + "\n              ") + "</p>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"products-content\" data-v-2f79592e>", "</div>", _vm._l(_vm.fullProducts, function (product) {
        return _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
          display: product.categoria == category.nombre_categoria_producto && product.subcategoria == subcategory.id ? '' : 'none'
        }) + " data-v-2f79592e>", "</div>", [_c('ProductCard', {
          attrs: {
            "product": product.categoria == category.nombre_categoria_producto && product.subcategoria == subcategory.id ? product : {},
            "dataStore": _vm.dataStore,
            "settingByTemplate12": _vm.settingByTemplate12
          }
        })], 1);
      }), 0)], 2);
    }), 0) : _vm._ssrNode("<div class=\"products-content\" data-v-2f79592e>", "</div>", _vm._l(_vm.fullProducts, function (product) {
      return _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
        display: product.categoria == category.nombre_categoria_producto ? '' : 'none'
      }) + " data-v-2f79592e>", "</div>", [_c('ProductCard', {
        attrs: {
          "product": product.categoria == category.nombre_categoria_producto ? product : {},
          "dataStore": _vm.dataStore,
          "settingByTemplate12": _vm.settingByTemplate12
        }
      })], 1);
    }), 0)], 2);
  }), 0) : _vm._ssrNode("<div data-v-2f79592e>", "</div>", [_vm._ssrNode("<header class=\"text-center\" data-v-2f79592e><h2 class=\"text-title\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.titleColor};`, null) + " data-v-2f79592e>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('header_productos')) + "\n        ") + "</h2></header> "), _vm._ssrNode("<div class=\"products-content\" data-v-2f79592e>", "</div>", _vm._l(_vm.fullProducts, function (product) {
    return _vm._ssrNode("<div data-v-2f79592e>", "</div>", [_c('ProductCard', {
      attrs: {
        "product": product,
        "dataStore": _vm.dataStore,
        "settingByTemplate12": _vm.settingByTemplate12
      }
    })], 1);
  }), 0)], 2), _vm._ssrNode(" "), _vm.showModal ? _vm._ssrNode("<div class=\"modal\" data-v-2f79592e>", "</div>", [_c('ProductDetail', {
    attrs: {
      "dataStore": _vm.dataStore,
      "tempData": _vm.tempData,
      "settingByTemplate12": _vm.settingByTemplate12
    }
  })], 1) : _vm._e(), _vm._ssrNode(" <hr class=\"h-20 bg-transparent border-transparent\" data-v-2f79592e> <hr class=\"border-transparent divider border-0\" data-v-2f79592e>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template12/MainSection.vue?vue&type=template&id=2f79592e&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/ProductCard.vue?vue&type=template&id=03bf6222&scoped=true&
var ProductCardvue_type_template_id_03bf6222_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.product ? _c('div', {
    staticClass: "wrapper_card product_container",
    on: {
      "mouseenter": () => _vm.isHover = true,
      "mouseleave": () => _vm.isHover = false
    }
  }, [_vm._ssrNode("<div" + _vm._ssrClass("content-img-prodcut", _vm.settingByTemplate12.responsiveImages == true ? 'img_visileRes' : 'img_normal') + " data-v-03bf6222>", "</div>", [!_vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.product.foto_cloudinary, 150, 150),
      expression: "idCloudinary(product.foto_cloudinary, 150, 150)"
    }],
    staticClass: "product-image",
    class: _vm.settingByTemplate12.roundedImages == true ? 'img_rounded' : 'img_normal',
    attrs: {
      "role": "presentation",
      "alt": "Product Img"
    }
  }, []) : _vm._e(), _vm._ssrNode(" "), _vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.product.foto_cloudinary,
      expression: "product.foto_cloudinary"
    }],
    staticClass: "product-image product-image-soldOut",
    class: _vm.settingByTemplate12.roundedImages == true ? 'img_rounded' : 'img_normal',
    attrs: {
      "role": "presentation",
      "alt": "Product Img soldOut"
    }
  }, []) : _vm._e()], 2), _vm._ssrNode(" <div class=\"wrapper-text\" data-v-03bf6222><div class=\"product_header mb-1\" data-v-03bf6222>" + (_vm.product.nombre ? "<h3 class=\"product_name font-semibold text-md\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.textColor};`, null) + " data-v-03bf6222>" + _vm._ssrEscape("\n        " + _vm._s(_vm.product.nombre) + "\n      ") + "</h3>" : "<!---->") + "</div> <div class=\"product_description\" data-v-03bf6222>" + (_vm.product.categoria ? "<p class=\"font-normal text-sm\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.descriptionColor};`, null) + " data-v-03bf6222>" + _vm._ssrEscape("\n        " + _vm._s(_vm.product.categoria) + "\n      ") + "</p>" : "<!---->") + " " + (_vm.product.marca ? "<p class=\"font-normal text-xs\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.descriptionColor};`, null) + " data-v-03bf6222>" + _vm._ssrEscape("\n        " + _vm._s(_vm.product.marca) + "\n      ") + "</p>" : "<!---->") + "</div></div> <div class=\"wrapper-price\" data-v-03bf6222><span class=\"font-semibold\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.priceColor};`, null) + " data-v-03bf6222>" + _vm._ssrEscape("\n      " + _vm._s(_vm._f("currency")(_vm.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n    ") + "</span></div>")], 2) : _vm._e();
};
var ProductCardvue_type_template_id_03bf6222_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template12/ProductCard.vue?vue&type=template&id=03bf6222&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/ProductCard.vue?vue&type=script&lang=js&


/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  name: 'ProductCard',
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    product: Object,
    dataStore: Object,
    settingByTemplate12: Object
  },
  mounted() {
    this.idSlug = this.product.id;
    this.productPrice();
    if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
      this.estadoCart = true;
    }
  },
  data() {
    return {
      estadoCart: false,
      minPrice: '',
      maxPrice: '',
      idSlug: '',
      maxQuantityValue: 0,
      productIndexCart: null,
      productCart: {},
      salesData: null,
      spent: false,
      active: true
    };
  },
  computed: {
    settingByTemplate() {
      if (this.$store.state.settingByTemplate) {
        return this.$store.state.settingByTemplate;
      } else {
        return this.$store.state.settingBaseWapir;
      }
    },
    productsCarts() {
      return this.$store.state.productsCart;
    },
    getFreeShipping() {
      let free = true;
      if (this.product.envio_gratis == 1) {
        free = false;
      } else if (this.rangosByCiudad.envio_metodo === 'gratis') {
        free = false;
      }
      return free;
    },
    rangosByCiudad() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.rangosByCiudades = JSON.parse(this.$store.state.envios.valores);
      return this.rangosByCiudades;
    },
    soldOut() {
      if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
        // this.estadoCart = true
        const arrCombinations = this.product.variantes;
        let inventario = 0;
        if (arrCombinations.length && arrCombinations[0].variantes !== '[object Object]') {
          if (arrCombinations[0].combinaciones.length && arrCombinations[0].combinaciones.length) {
            if (JSON.parse(arrCombinations[0].combinaciones[0].combinaciones).length) {
              JSON.parse(arrCombinations[0].combinaciones[0].combinaciones).forEach(item => {
                if (item.unidades) {
                  inventario += parseInt(item.unidades);
                }
              });
            }
          }
        }
        return !inventario;
      } else {
        return !this.product.stock;
      }
    }
  },
  methods: {
    getDataProduct() {
      this.salesData = {
        precio: this.product.precio,
        unidades: this.product.stock,
        sku: this.product.sku,
        estado: true
      };
      this.maxQuantityValue = this.product.stock;
      this.productsCarts.find((productCart, index) => {
        if (productCart.id == this.product.id) {
          this.productIndexCart = index;
          this.productCart = productCart;
          this.maxQuantityValue = this.product.stock - productCart.cantidad;
        }
      });
      if (this.salesData.unidades == 0 || this.maxQuantityValue <= 0 || this.maxQuantityValue == 0) {
        this.spent = true;
      }
    },
    addShoppingCart() {
      if (!this.soldOut) {
        if (this.product) {
          this.productIndexCart = null;
          this.getDataProduct();
          if (this.product.id == this.idSlug) {
            let product = {
              id: this.product.id,
              precio: this.product.precio,
              cantidad: 1,
              foto_cloudinary: this.product.foto_cloudinary,
              nombre: this.product.nombre,
              combinacion: undefined,
              envio_gratis: this.product.envio_gratis
            };
            if (this.salesData) {
              product.limitQuantity = this.product.stock;
            } else {
              product.limitQuantity = this.product.stock;
            }
            if (typeof this.productIndexCart === 'number') {
              const mutableProduct = this.$store.state.productsCart[this.productIndexCart];
              mutableProduct.cantidad += 1;
              this.$store.state.productsCart.splice(this.productIndexCart, 1, mutableProduct);
            } else {
              this.$store.state.productsCart.push(product);
            }
            this.$store.commit('UPDATE_CONTENT_CART');
            this.$message({
              showClose: true,
              message: 'Se agregó el producto correctamente',
              type: 'success'
            });
            this.$store.dispatch('SEND_ADD_TO_CART', 1);
          }
        }
      } else {
        this.$message({
          showClose: true,
          message: 'Este producto esta agotado',
          type: 'warning'
        });
      }
    },
    productPrice() {
      if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
        const arrCombinations = this.product.variantes;
        if (arrCombinations.length && arrCombinations[0].variantes !== '[object Object]') {
          this.productVariants = true;
          if (this.product && this.product.combinaciones && this.product.combinaciones.length && this.product.combinaciones.length > 1) {
            let arrPrice = [];
            this.product.combinaciones.find(products => {
              if (products.precio && products.estado == true) {
                arrPrice.push(products.precio);
              }
            });
            if (arrPrice) {
              let resultPrice = arrPrice.sort(function (prev, next) {
                return prev - next;
              });
              if (resultPrice[resultPrice.length - 1]) {
                this.minPrice = resultPrice[0];
                this.maxPrice = resultPrice[resultPrice.length - 1];
              }
            }
          }
        }
      }
    }
  },
  watch: {
    productsCarts() {
      this.getDataProduct();
    }
  }
});
// CONCATENATED MODULE: ./components/template12/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var template12_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template12/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(735)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template12_ProductCardvue_type_script_lang_js_,
  ProductCardvue_type_template_id_03bf6222_scoped_true_render,
  ProductCardvue_type_template_id_03bf6222_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "03bf6222",
  "283a07a6"
  
)

/* harmony default export */ var ProductCard = (component.exports);
// EXTERNAL MODULE: ./components/template12/mixins/ComponentProps.vue + 2 modules
var ComponentProps = __webpack_require__(172);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/productDetail.vue?vue&type=template&id=599006e4&scoped=true&
var productDetailvue_type_template_id_599006e4_scoped_true_render = function render() {
  var _this$settingByTempla, _this$settingByTempla2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-content",
    style: [{
      '--font-style-1': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate12) === null || _this$settingByTempla2 === void 0 ? void 0 : _this$settingByTempla2.fontFamily) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"modal-header\" data-v-599006e4><p class=\"txt-Legal\" data-v-599006e4>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_name'))) + "</p> <span class=\"close\" data-v-599006e4>×</span></div> "), _vm.tempData ? _vm._ssrNode("<div data-v-599006e4>", "</div>", [!_vm.loading ? _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "container-productDetail"
  }, [_vm._ssrNode("<div class=\"section\" data-v-599006e4>", "</div>", [_vm._ssrNode("<div class=\"wrapper-left\" data-v-599006e4>", "</div>", [_c('productSlide', {
    attrs: {
      "photos": _vm.data.fotos,
      "photo": _vm.data.detalle.foto_cloudinary,
      "idYoutube": _vm.idYoutube
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-right\" data-v-599006e4>", "</div>", [_vm._ssrNode("<div class=\"content-right\" data-v-599006e4>", "</div>", [_vm._ssrNode("<p class=\"text-name\" data-v-599006e4>" + _vm._ssrEscape(_vm._s(_vm.data.detalle.nombre)) + "</p> <p class=\"text-marca\" data-v-599006e4><strong data-v-599006e4>" + _vm._ssrEscape(_vm._s(_vm.data.info.marca)) + "</strong></p> <p class=\"text-promocion\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-599006e4>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor ? Math.trunc(_vm.salesData.precio / (1 - _vm.data.info.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p> <div" + _vm._ssrClass("wrapper-price", _vm.data.info.tag_promocion == 1 ? '' : 'wrapper-price_space') + " data-v-599006e4><p class=\"text-precio\"" + _vm._ssrStyle(null, null, {
    display: _vm.salesData.precio ? '' : 'none'
  }) + " data-v-599006e4>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(_vm.salesData.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p> <p class=\"card-descuento\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-599006e4>" + _vm._ssrEscape("\n                " + _vm._s(_vm.data.info.promocion_valor) + "% OFF\n              ") + "</p></div> <div class=\"content_buy_action\" data-v-599006e4>" + (_vm.envio.titulo == 'Envío gratis' ? "<div data-v-599006e4><p class=\"card-info-2\" data-v-599006e4>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardGratis'))) + "</p></div>" : "<!---->") + " <div class=\"content_card-info\" data-v-599006e4>" + (_vm.spent ? "<p class=\"card-info-1\" data-v-599006e4>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                ") + "</p>" : "<!---->") + "</div></div> " + (_vm.data.info.descripcion_corta ? "<div style=\"margin-top: 10px; margin-bottom: 5px\" data-v-599006e4><p class=\"text-marca\" data-v-599006e4><strong data-v-599006e4>" + _vm._ssrEscape(_vm._s(_vm.data.info.descripcion_corta)) + "</strong></p></div>" : "<!---->") + " "), this.data.detalle.con_variante > 0 ? _vm._ssrNode("<div class=\"container-variants\" data-v-599006e4>", "</div>", _vm._l(_vm.data.variantes, function (variant, index) {
    return _vm._ssrNode("<div data-v-599006e4>", "</div>", [_vm._ssrNode("<label for=\"variant name\" class=\"text-variant-type\" data-v-599006e4>" + _vm._ssrEscape("\n                  " + _vm._s(variant.nombre) + ":\n                ") + "</label> "), _c('selectGroup', {
      attrs: {
        "index": index,
        "variantes": _vm.data.variantes
      }
    }, _vm._l(variant.valores, function (item) {
      return _c('option', {
        key: item.option,
        domProps: {
          "value": item.option
        }
      }, [_vm._v("\n                    " + _vm._s(item.option) + "\n                  ")]);
    }), 0)], 2);
  }), 0) : _vm._e()], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-description\" data-v-599006e4>", "</div>", [_vm.data.info.descripcion ? _vm._ssrNode("<div class=\"wrapper-description\" data-v-599006e4>", "</div>", [_vm._ssrNode("<h3 class=\"text-variant\" data-v-599006e4>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_description'))) + "</h3> "), _vm.data.info.descripcion ? _vm._ssrNode("<div class=\"editor content-text-desc\" data-v-599006e4>", "</div>", [_c('el-tiptap', {
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
      value: _vm.data.info.descripcion,
      callback: function ($$v) {
        _vm.$set(_vm.data.info, "descripcion", $$v);
      },
      expression: "data.info.descripcion"
    }
  })], 1) : _vm._e()], 2) : _vm._e()]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"responsive-purchase\" data-v-599006e4>", "</div>", [_vm._ssrNode("<div class=\"ko-input\" data-v-599006e4>", "</div>", [!_vm.spent && this.salesData.estado == true ? _vm._ssrNode("<div class=\"quantity-resposive\" data-v-599006e4>", "</div>", [_vm._ssrNode("<button class=\"quantity_remove\" data-v-599006e4>", "</button>", [_c('menos-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" <p class=\"quantity_value\" data-v-599006e4>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p> "), _vm._ssrNode("<button class=\"quantity_add\" data-v-599006e4>", "</button>", [_c('mas-icon', {
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
  }, [_vm._v(_vm._s(_vm.$t('cart_ultimaUnidad')))])])])], 2) : _vm._e(), _vm._ssrNode(" " + (!_vm.spent && _vm.salesData.precio > 0 && this.salesData.estado == true && (_vm.data.info.tipo_servicio == null || _vm.data.info.tipo_servicio == '0') ? "<button class=\"btn-responsive\" data-v-599006e4><span data-v-599006e4>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n            ") + "</span></button>" : _vm.salesData.precio == 0 && !_vm.spent ? "<button class=\"btn-responsive\" data-v-599006e4><span data-v-599006e4>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_cotizar')) + "\n            ") + "</span></button>" : !this.salesData.estado ? "<button disabled=\"disabled\" class=\"btn-responsive\" data-v-599006e4><span data-v-599006e4>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n            ") + "</span></button>" : !_vm.spent && _vm.data.info.tipo_servicio == '1' ? "<button id=\"AddToCartTag\" class=\"btn-responsive\" data-v-599006e4>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n          ") + "</button>" : _vm.spent ? "<div class=\"wrapper-btn\" data-v-599006e4><p class=\"card-info-1-res\" data-v-599006e4>" + _vm._ssrEscape("\n              😥 " + _vm._s(_vm.$t('productdetail_productoAgotado')) + "\n            ") + "</p></div>" : "<!---->"))], 2)])], 2) : _vm._ssrNode("<div class=\"flex flex-col justify-center w-full items-center\" data-v-599006e4><div class=\"spinner\" data-v-599006e4><div class=\"dot1\" data-v-599006e4></div> <div class=\"dot2\" data-v-599006e4></div></div> <p class=\"text-2xl font-semibold text-black\" data-v-599006e4>Cargando producto..</p></div>")]) : _vm._e()], 2);
};
var productDetailvue_type_template_id_599006e4_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template12/productDetail.vue?vue&type=template&id=599006e4&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/productDetail.vue?vue&type=script&lang=js&



/* harmony default export */ var productDetailvue_type_script_lang_js_ = ({
  name: 'Ko12-ProductDetail',
  mixins: [elemenTiptap["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    dataStore: Object,
    tempData: Object,
    settingByTemplate12: Object
  },
  components: {
    selectGroup: () => __webpack_require__.e(/* import() */ 198).then(__webpack_require__.bind(null, 494)),
    ProductSlide: () => __webpack_require__.e(/* import() */ 149).then(__webpack_require__.bind(null, 1136))
  },
  mounted() {
    this.$store.state.beforeCombination = [];
    if (this.productsData.length) {
      this.getDataProduct();
    } else {
      this.getDataProductPrev();
    }
    if (Object.keys(this.dataStore.medios_envio).length) {
      this.setOptionEnvio();
    }
  },
  data() {
    return {
      loading: true,
      data: {},
      selectPhotoUrl: '',
      idYoutube: '',
      existYoutube: false,
      maxQuantityValue: 1,
      quantityValue: 1,
      productIndexCart: null,
      warranty: '',
      productCart: {},
      salesData: null,
      spent: false,
      envioproducto: '',
      envio: {
        titulo: '',
        desc: ''
      },
      activeZoom: true
    };
  },
  computed: {
    productsData() {
      return this.$store.getters['products/allProduct'];
    },
    existPayments() {
      const mediospago = this.dataStore.medios_pago;
      if (mediospago.consignacion || mediospago.convenir || mediospago.payco || mediospago.tienda || mediospago.efecty) {
        return true;
      }
      return false;
    },
    beforeCombination() {
      return this.$store.state.beforeCombination;
    },
    envios() {
      return this.dataStore.medios_envio;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    precio() {
      if (this.data.detalle.precio) {
        return `$${this.data.detalle.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
      }
    },
    whatsapp() {
      return this.dataStore.tienda.whatsapp;
    },
    category() {
      return this.productsData.filter(product => product.categoria == this.data.detalle.categoria_producto.nombre_categoria_producto && product.id !== this.data.detalle.id);
    }
  },
  methods: {
    closeModalpolitics() {
      this.$store.state.modalproductDetails = false;
    },
    getDataProduct() {
      const idOfSlug = this.tempData.id;
      if (idOfSlug) {
        external_axios_default.a.get(`${this.$store.state.urlTemplate}/api/producto/${idOfSlug}`).then(response => {
          this.selectedPhoto(response.data.detalle.foto_cloudinary);
          this.videoYoutube(response.data.info.video);
          this.data = response.data;
          this.salesData = {
            precio: this.data.detalle.precio,
            unidades: this.data.info.inventario,
            sku: this.data.info.sku,
            estado: true
          };
          this.maxQuantityValue = this.data.info.inventario;
          this.setOptionEnvio();
          for (const [index, productCart] of this.$store.state.productsCart.entries()) {
            if (this.data.detalle.id == productCart.id) {
              this.productIndexCart = index;
              this.productCart = productCart;
              this.maxQuantityValue = this.data.info.inventario - productCart.cantidad;
            }
          }
          if (this.salesData.unidades == 0 || this.maxQuantityValue <= 0) {
            this.spent = true;
          }
          this.loading = false;
        });
      } else {
        this.selectedPhoto(this.productsData[0].foto_cloudinary);
        this.data.detalle = {
          foto_cloudinary: this.productsData[0].foto_cloudinary,
          nombre: this.productsData[0].nombre,
          precio: this.productsData[0].precio
        };
        this.data.info = {
          marca: '',
          descripcion: ''
        };
        this.maxQuantityValue = 0;
        this.salesData = {
          precio: 29998,
          unidades: 0,
          sku: '4a00'
        };
        this.spent = true;
      }
    },
    getDataProductPrev() {
      this.data.detalle = {
        foto_cloudinary: 'https://vignette.wikia.nocookie.net/la-bitacora-del-capitan/images/6/67/Not_found.png/revision/latest?cb=20190509042801&path-prefix=es',
        nombre: 'Producto de prueba',
        precio: 29999
      };
      this.data.info = {
        marca: 'Marca de prueba',
        descripcion: 'Descripción de prueba'
      };
      this.maxQuantityValue = 0;
      this.salesData = {
        precio: 29999,
        unidades: 0,
        sku: '4a00'
      };
      this.spent = true;
    },
    setOptionEnvio() {
      if (this.data.detalle) {
        if (this.data.detalle.envio_gratis == 1) {
          this.envio = {
            titulo: 'Envío gratis',
            desc: 'Disfruta de este obsequio por parte de la tienda.'
          };
        } else {
          this.data.envioproducto = JSON.parse(this.envios.valores);
          switch (this.data.envioproducto.envio_metodo) {
            case 'gratis':
              this.envio = {
                titulo: 'Envío gratis',
                desc: 'Disfruta de este obsequio por parte de la tienda.'
              };
              break;
            case 'sinEnvio':
              this.envio = {
                titulo: 'Sin envio',
                desc: 'Tienes que acercarte a la tienda a recoger tu pedido.'
              };
              break;
            case 'tarifa_plana':
              this.envio = {
                titulo: 'Tarifa plana',
                desc: `Compra todo lo que quieras en nuestra tienda, el valor del envio siempre sera el mismo: Valor envio $${this.data.envioproducto.valor}`
              };
              break;
            case 'precio':
              this.envio = {
                titulo: 'Tarifa por precio',
                desc: 'Según la suma del costo de tus productos te cobraran el envio'
              };
              break;
            case 'precio_ciudad':
              this.envio = {
                titulo: 'Tarifa por ciudad',
                desc: 'Según la ciudad te cobraran el envio'
              };
              break;
            case 'peso':
              this.envio = {
                titulo: 'Tarifa por peso',
                desc: ''
              };
              break;
            default:
          }
        }
      }
    },
    quantity(productCart) {
      this.quantityValue = productCart.cantidad;
    },
    addQuantity() {
      if (this.maxQuantityValue > this.quantityValue) {
        this.quantityValue++;
        this.data.cantidad = this.quantityValue;
      } else {
        // Alerta de limite de sku
      }
    },
    removeQuantity() {
      if (this.data.cantidad >= 2) {
        this.quantityValue--;
        this.data.cantidad = this.quantityValue;
      }
    },
    setMiniPhoto(photo) {
      return photo;
    },
    selectedPhoto(photo) {
      this.selectPhotoUrl = photo;
      this.existYoutube = false;
    },
    videoYoutube(url) {
      let myregexp = /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/;
      let id = '';
      if (url && url !== '' && url !== 'null') {
        this.validVideo = true;
        id = url.match(myregexp);
        if (id) {
          this.idYoutube = id[1];
        }
      }
    },
    addShoppingCart() {
      if (!this.data.cantidad) {
        this.data.cantidad = this.quantityValue;
      }
      const product = {
        id: this.data.detalle.id,
        precio: this.salesData.precio,
        cantidad: this.data.cantidad,
        foto_cloudinary: this.data.detalle.foto_cloudinary,
        nombre: this.data.detalle.nombre,
        combinacion: this.salesData.combinacion,
        envio_gratis: this.data.detalle.envio_gratis
      };
      if (this.salesData) {
        product.limitQuantity = this.salesData.unidades;
      } else {
        product.limitQuantity = this.data.info.inventario;
      }
      if (typeof this.productIndexCart === 'number') {
        const mutableProduct = this.$store.state.productsCart[this.productIndexCart];
        mutableProduct.cantidad += this.data.cantidad;
        this.$store.state.productsCart.splice(this.productIndexCart, 1, mutableProduct);
      } else {
        this.$store.state.productsCart.push(product);
      }
      this.$store.commit('UPDATE_CONTENT_CART');
      this.$store.state.modalproductDetails = false;
      this.$store.commit('SET_OPEN_ORDER', true);
      // this.$store.state.orderComponent = true
      this.$store.dispatch('SEND_ADD_TO_CART', 1);
    },
    GoPayments() {
      let objeto = {
        id: this.data.info.id,
        cantidad: this.quantityValue,
        combinacion: this.salesData && this.salesData.combinacion ? this.salesData.combinacion : undefined
      };
      let json = {
        products: [objeto],
        tienda: {
          id: this.$store.state.tienda.id_tienda
        },
        canal: 'KOMERCIA'
      };
      json = JSON.stringify(json);
      if (json) {
        this.$store.dispatch('SEND_ADD_TO_CART', 2);
        if (this.layourUnicentro == true) {
          window.open(`https://checkout.komercia.co/?params=${json}`);
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`;
        }
      }
    },
    evalStock(mq, qv) {
      return !(mq - qv < 0);
    },
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
      let baseUrlMovil = 'https://api.whatsapp.com/send?phone=';
      let baseUrlPc = 'https://web.whatsapp.com/send?phone=';
      let urlProduct = window.location.href;
      let text = `Hola 😀, %0AEstoy en tu tienda ${this.dataStore.tienda.nombre} y me interesa el producto: ${this.data.detalle.nombre}%0A%0ALink de compra: ${urlProduct}%0A`;
      if (this.dataStore.tienda.whatsapp.charAt(0) == '+') {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp.slice(1);
        if (this.mobileCheck()) {
          window.open(`${baseUrlMovil}${phone_number_whatsapp}&text=${text}`, '_blank');
        } else {
          window.open(`${baseUrlPc}${phone_number_whatsapp}&text=${text}`, '_blank');
        }
      } else {
        if (this.mobileCheck()) {
          window.open(`${baseUrlMovil}57${this.dataStore.tienda.whatsapp}&text=${text}`, '_blank');
        } else {
          window.open(`${baseUrlPc}57${this.dataStore.tienda.whatsapp}&text=${text}`, '_blank');
        }
      }
    },
    WPQuotation() {
      let baseUrlMovil = 'https://api.whatsapp.com/send?phone=';
      let baseUrlPc = 'https://web.whatsapp.com/send?phone=';
      let urlProduct = window.location.href;
      let text = `Hola%20%F0%9F%98%80%2C%0AEstoy%20en%20tu%20tienda%20%2A${this.dataStore.tienda.nombre}%2A%20y%20quiero%20cotizar%20este%20producto%3A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.data.detalle.nombre}%2A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0ALink%3A%20${urlProduct}`;
      if (this.dataStore.tienda.whatsapp.charAt(0) == '+') {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp.slice(1);
        if (this.mobileCheck()) {
          window.open(`${baseUrlMovil}${phone_number_whatsapp}&text=${text}`, '_blank');
        } else {
          window.open(`${baseUrlPc}${phone_number_whatsapp}&text=${text}`, '_blank');
        }
      } else {
        if (this.mobileCheck()) {
          window.open(`${baseUrlMovil}57${this.dataStore.tienda.whatsapp}&text=${text}`, '_blank');
        } else {
          window.open(`${baseUrlPc}57${this.dataStore.tienda.whatsapp}&text=${text}`, '_blank');
        }
      }
    }
  },
  watch: {
    productsData(value) {
      this.getDataProduct();
    },
    envios(value) {
      this.setOptionEnvio();
    },
    quantityValue(value) {
      if (value > this.maxQuantityValue) {
        this.quantityValue = this.maxQuantityValue;
      }
    },
    beforeCombination(value) {
      const combinationSelected = JSON.stringify(value);
      if (this.data.combinaciones) {
        if (this.data.combinaciones.combinaciones !== '[object Object]' && this.data.detalle.con_variante > 0) {
          const combinaciones = JSON.parse(this.data.combinaciones.combinaciones);
          const result = combinaciones.find(combinacion => JSON.stringify(combinacion.combinacion) == combinationSelected);
          this.productCart = [];
          this.productIndexCart = null;
          for (const [index, productCart] of this.$store.state.productsCart.entries()) {
            if (this.data.detalle.id == productCart.id && JSON.stringify(productCart.combinacion) == JSON.stringify(result.combinacion)) {
              this.productIndexCart = index;
              this.productCart = productCart;
            }
          }
          if (result) {
            this.spent = false;
            this.maxQuantityValue = result.unidades;
            if (result.unidades == 0) {
              this.spent = true;
            }
            if (this.productCart.cantidad) {
              this.maxQuantityValue = parseInt(result.unidades) - this.productCart.cantidad;
              if (this.maxQuantityValue <= 0) {
                this.spent = true;
              }
            }
            this.salesData = result;
            this.quantityValue = 1;
          }
        }
      }
    }
  },
  filters: {
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase();
      }
      return '';
    }
  }
});
// CONCATENATED MODULE: ./components/template12/productDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var template12_productDetailvue_type_script_lang_js_ = (productDetailvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template12/productDetail.vue



function productDetail_injectStyles (context) {
  
  var style0 = __webpack_require__(737)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var productDetail_component = Object(componentNormalizer["a" /* default */])(
  template12_productDetailvue_type_script_lang_js_,
  productDetailvue_type_template_id_599006e4_scoped_true_render,
  productDetailvue_type_template_id_599006e4_scoped_true_staticRenderFns,
  false,
  productDetail_injectStyles,
  "599006e4",
  "1d0355f2"
  
)

/* harmony default export */ var productDetail = (productDetail_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/MainSection.vue?vue&type=script&lang=js&



/* harmony default export */ var MainSectionvue_type_script_lang_js_ = ({
  name: 'ISection',
  mixins: [ComponentProps["a" /* default */]],
  components: {
    ProductCard: ProductCard,
    ProductDetail: productDetail
  },
  data() {
    return {
      section: {
        title: 'MEAT & FIRST DISHES',
        subtitle: 'Slow cook meals and fresh fishes'
      },
      tempData: {}
    };
  },
  computed: {
    fullProducts() {
      return this.$store.getters['products/allProduct'];
    },
    searchValue() {
      return this.$store.state.searchValue;
    },
    showModal() {
      return this.$store.state.modalproductDetails;
    }
  },
  methods: {
    OpenModalProductDetails(value) {
      this.tempData = value;
      this.$store.state.modalproductDetails = true;
    },
    SearchProduct(search) {
      if (search.length) {
        this.$store.commit('products/FILTER_BY', {
          type: ['search'],
          data: search
        });
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['all'],
          data: ''
        });
      }
    }
  },
  watch: {
    searchValue(value) {
      this.SearchProduct(value);
    }
  }
});
// CONCATENATED MODULE: ./components/template12/MainSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var template12_MainSectionvue_type_script_lang_js_ = (MainSectionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template12/MainSection.vue



function MainSection_injectStyles (context) {
  
  var style0 = __webpack_require__(739)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var MainSection_component = Object(componentNormalizer["a" /* default */])(
  template12_MainSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  MainSection_injectStyles,
  "2f79592e",
  "c1a5691a"
  
)

/* harmony default export */ var MainSection = __webpack_exports__["default"] = (MainSection_component.exports);

/***/ })

};;
//# sourceMappingURL=63.js.map