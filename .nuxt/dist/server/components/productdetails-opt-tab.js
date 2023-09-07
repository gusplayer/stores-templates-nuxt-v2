exports.ids = [145,232];
exports.modules = {

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(228);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("90edbedc", content, true, context)
};

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_6fe9ff38_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_6fe9ff38_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_6fe9ff38_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_6fe9ff38_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_6fe9ff38_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-tab[data-v-6fe9ff38]{align-items:center;border-bottom:1px solid #ededed;justify-content:center;margin-top:24px}.content-tab[data-v-6fe9ff38],.item-content[data-v-6fe9ff38]{display:flex;flex-direction:column;width:100%}.item-content[data-v-6fe9ff38]{align-items:flex-start;justify-content:flex-start;padding-bottom:16px}.content-tab[data-v-6fe9ff38] .el-tabs__item{color:#303030;font-family:var(--font-style-2)}.content-tab[data-v-6fe9ff38] .el-tabs__item.is-active{color:var(--hover_text)}.content-tab[data-v-6fe9ff38] .el-tabs__item:hover{color:var(--hover_text);cursor:pointer}.content-tab[data-v-6fe9ff38] .el-tabs__active-bar{background-color:var(--hover_text)}h3[data-v-6fe9ff38]{align-self:flex-start;color:#2c2930;font-size:15px;font-weight:600;text-transform:uppercase}h3[data-v-6fe9ff38],h4[data-v-6fe9ff38]{font-family:\"Roboto\",Helvetica,Arial,sans-serif!important}h4[data-v-6fe9ff38]{align-items:flex-start;color:#2c2930;display:flex;flex-direction:column;font-size:15px;font-weight:600;justify-content:center;line-height:1.42857143;margin-bottom:5px;width:100%}li p[data-v-6fe9ff38]{color:#333;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}.description-method[data-v-6fe9ff38],li p[data-v-6fe9ff38]{font-family:\"Roboto\",Helvetica,Arial,sans-serif!important}.description-method[data-v-6fe9ff38]{color:#333;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}img[data-v-6fe9ff38]{margin-top:15px;max-width:300px;width:30%}.editor[data-v-6fe9ff38]{width:100%}.editor[data-v-6fe9ff38] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-6fe9ff38] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-6fe9ff38] .el-tiptap-editor__content h1{font-family:var(--font-style-2);font-size:2em}.editor[data-v-6fe9ff38] .el-tiptap-editor__content h2{font-family:var(--font-style-2);font-size:1.5em}.editor[data-v-6fe9ff38] .el-tiptap-editor__content h3{font-family:var(--font-style-2);font-size:1.17em}.editor[data-v-6fe9ff38] .el-tiptap-editor__content h4{font-family:var(--font-style-2);font-size:1.12em}.editor[data-v-6fe9ff38] .el-tiptap-editor__content h5{font-family:var(--font-style-2);font-size:.83em}.editor[data-v-6fe9ff38] .el-tiptap-editor__content blockquote,.editor[data-v-6fe9ff38] .el-tiptap-editor__content code,.editor[data-v-6fe9ff38] .el-tiptap-editor__content em,.editor[data-v-6fe9ff38] .el-tiptap-editor__content li,.editor[data-v-6fe9ff38] .el-tiptap-editor__content ol,.editor[data-v-6fe9ff38] .el-tiptap-editor__content p,.editor[data-v-6fe9ff38] .el-tiptap-editor__content pre,.editor[data-v-6fe9ff38] .el-tiptap-editor__content s,.editor[data-v-6fe9ff38] .el-tiptap-editor__content span,.editor[data-v-6fe9ff38] .el-tiptap-editor__content strong,.editor[data-v-6fe9ff38] .el-tiptap-editor__content ul{font-family:var(--font-style-2)}.editor[data-v-6fe9ff38] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-6fe9ff38] .el-popper.el-tiptap-image-popper{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 61:
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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "element-tiptap"
var external_element_tiptap_ = __webpack_require__(60);

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

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productdetails/OptTab.vue?vue&type=template&id=6fe9ff38&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-tab",
    style: _vm.settingByGeneral
  }, [_c('el-tabs', {
    staticClass: "w-full"
  }, [_c('el-tab-pane', {
    attrs: {
      "label": _vm.$t('productdetail_description')
    }
  }, [_c('div', {
    staticClass: "editor"
  }, [_vm.data.info.descripcion ? _c('div', [_c('el-tiptap', {
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
  })], 1) : _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('productdetail_notdescription')))])])])]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": _vm.$t('productdetail_opcionesPago')
    }
  }, [_c('div', {
    staticClass: "item-content"
  }, [_c('ul', [_vm.mediospago.consignacion == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_consignacionBancaria')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('productdetail_consignacionBancariaMsg')))])]) : _vm._e(), _vm._v(" "), _vm.mediospago.contraentrega == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_PagoContra')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('productdetail_PagoContraMsg')))])]) : _vm._e(), _vm._v(" "), _vm.mediospago.convenir == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_pagoConvenir')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('productdetail_pagoConvenirMsg')))])]) : _vm._e(), _vm._v(" "), _vm.mediospago.credibanco == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_ConsignacionCredibanco')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_ConsignacionCredibancoMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "cursor_point",
    attrs: {
      "href": "https://www.credibanco.com/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335270/Templates%20Modos%20de%20pago/Credibanco_lprsof.png",
      "alt": "logo Credibanco"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.daviplata == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_Consignaciondaviplata')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_ConsignaciondaviplataMsg')) + "\n            ")]), _vm._v(" "), _c('img', {
    staticClass: "logo-pasarela-daviplata",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333767/Templates%20Modos%20de%20pago/5c89c897e1917d9209a762af_davi_qn90y9.png",
      "alt": "logo daviPlata"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.mediospago.efecty == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_ConsignacionEfecty')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('productdetail_ConsignacionEfectyMsg')))]), _vm._v(" "), _c('a', {
    staticClass: "cursor_point",
    attrs: {
      "href": "https://www.efecty.com.co/web/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-efecty",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333023/Templates%20Modos%20de%20pago/Efecty-png_q3fvog.png",
      "alt": "logo efecty"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.mercado_pago == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_PasarelaMercado')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaMercadoMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "cursor_point",
    attrs: {
      "href": "https://www.mercadopago.com",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-daviplata",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606331948/Templates%20Modos%20de%20pago/mercadopago_jyalpa.png",
      "alt": "logo mercadopago"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.nequi == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_Consignacionnequi')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_ConsignacionnequiMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "cursor_point",
    attrs: {
      "href": "https://www.nequi.com.co/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-daviplata",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333553/Templates%20Modos%20de%20pago/Nequi_by_Bancolombia_hxhkhb.png",
      "alt": "logo nequi"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.payco == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_PasarelaEpayco')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaEpaycoMsg')) + "\n            ")]), _vm._v(" "), _c('img', {
    staticClass: "logo-pasarela-payco",
    attrs: {
      "src": "https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png",
      "alt": "Pasarela de pagos epayco"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.mediospago.payu == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_PasarelaPayu')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://www.payulatam.com/co/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-payu",
    attrs: {
      "src": "https://ecommerce.payulatam.com/logos/PayU_CO.png",
      "alt": "PayU",
      "border": "0"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.wompi == 1 ? _c('li', [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_Consignacionwompi')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://wompi.co/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-wompi",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335739/Templates%20Modos%20de%20pago/wompi_jxuitu.png",
      "alt": "wompi",
      "border": "0"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.wepay4u == 1 ? _c('li', [_c('h4', [_vm._v("WePay4U")]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('text_pago_WePay4U')) + "\n            ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://wepay4u.com/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-wompi",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/v1639078440/wePay4u/powered_by_z7sgqp.png",
      "alt": "wePay4u",
      "border": "0"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.tu_compra == 1 ? _c('li', [_c('h4', [_vm._v("Tucompra")]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('text_pago_Tucompra')) + "\n            ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://tucompra.com.co/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-wompi",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/tucompra_ss0oys.png",
      "alt": "tu_compra",
      "border": "0"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.flow == 1 ? _c('li', [_c('h4', [_vm._v("Flow")]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('text_pago_flowInfo')) + "\n            ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://www.flow.cl/",
      "target": "_blank",
      "rel": "noreferrer noopener"
    }
  }, [_c('img', {
    staticClass: "logo-pasarela-wompi",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/flow_jevnwy.png",
      "alt": "flow",
      "border": "0"
    }
  })])]) : _vm._e()])])]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": _vm.$t('productdetail_opinionesEnvio')
    }
  }, [_c('div', {
    staticClass: "item-content"
  }, [this.envios.envio_metodo ? _c('div', [_c('div', {
    staticClass: "content"
  }, [_c('h3', {
    staticClass: "title-section"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_opinionesEnvio')) + "\n            ")])]), _vm._v(" "), this.envio.titulo == 'Tarifa por ciudad' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', {
    staticClass: "capitalize"
  }, [_vm._v("\n              • " + _vm._s(this.envios.envio_metodo.replace('_', ' por ')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg1')) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envio.titulo == 'Tarifa plana' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', {
    staticClass: "capitalize"
  }, [_vm._v("\n              " + _vm._s(this.envios.envio_metodo.replace('_', ' ')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg2')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('cart_precio')) + "\n              " + _vm._s(_vm._f("currency")(this.envios.valor, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envio.titulo == 'Tarifa por precio' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_precioTotalCompra')))]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_precioTotalCompraMsg')) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envio.titulo == 'Envío gratis' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('productdetail_gratis')))]), _vm._v(" "), _c('p', {
    staticClass: "description-method"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_gratisMsg')) + "\n            ")])]) : _vm._e()]) : _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('productdetail_notShipping')))])])])])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/_productdetails/OptTab.vue?vue&type=template&id=6fe9ff38&scoped=true&

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(62);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_productdetails/OptTab.vue?vue&type=script&lang=js&


/* harmony default export */ var OptTabvue_type_script_lang_js_ = ({
  mixins: [elemenTiptap["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    dataStore: Object,
    data: {},
    envio: {},
    settingByGeneral: {
      type: Object,
      default: null
    }
  },
  computed: {
    mediospago() {
      return this.dataStore.medios_pago;
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
  }
});
// CONCATENATED MODULE: ./components/template9/_productdetails/OptTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_OptTabvue_type_script_lang_js_ = (OptTabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/_productdetails/OptTab.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(227)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_OptTabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6fe9ff38",
  "499d039e"
  
)

/* harmony default export */ var OptTab = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=productdetails-opt-tab.js.map