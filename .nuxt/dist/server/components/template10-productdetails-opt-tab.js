exports.ids = [232,368];
exports.modules = {

/***/ 1072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/OptTab.vue?vue&type=template&id=0229bb16&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-opt-tab",
    style: [_vm.settingByTemplate10[0].detailsProduct, _vm.settingByTemplate10[0].setting10General]
  }, [_vm._ssrNode("<div class=\"head-content\" data-v-0229bb16><div" + _vm._ssrClass("tab", _vm.selecttag == 1 ? 'show-select-active' : '') + " data-v-0229bb16><p class=\"tittle\" data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_description'))) + "</p></div> <div" + _vm._ssrClass("tab", _vm.selecttag == 2 ? 'show-select-active' : '') + " data-v-0229bb16><p class=\"tittle\" data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_opcionesPago'))) + "</p></div> <div" + _vm._ssrClass("tab", _vm.selecttag == 3 ? 'show-select-active' : '') + " data-v-0229bb16><p class=\"tittle\" data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_opinionesEnvio'))) + "</p></div></div> <div class=\"content-tab\" data-v-0229bb16>" + (_vm.focusbtn1 ? "<div class=\"item-content descripcion\" style=\"color: #777\" data-v-0229bb16>" + _vm._s(_vm.data.info.descripcion) + "</div>" : "<!---->") + " " + (_vm.focusbtn2 ? "<div class=\"item-content opcpago\" data-v-0229bb16><ul data-v-0229bb16>" + (_vm.mediospago.consignacion == 1 ? "<li data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancaria'))) + "</h4> <p data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancariaMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.contraentrega == 1 ? "<li data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContra'))) + "</h4> <p data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContraMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.convenir == 1 ? "<li data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenir'))) + "</h4> <p data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenirMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.credibanco == 1 ? "<li data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionCredibanco'))) + "</h4> <p data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionCredibancoMsg')) + "\n          ") + "</p> <a href=\"https://www.credibanco.com/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-0229bb16><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335270/Templates%20Modos%20de%20pago/Credibanco_lprsof.png\" alt=\"logo Credibanco\" class=\"logo-pasarela\" data-v-0229bb16></a></li>" : "<!---->") + " " + (_vm.mediospago.daviplata == 1 ? "<li data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignaciondaviplata'))) + "</h4> <p data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignaciondaviplataMsg')) + "\n          ") + "</p> <img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333767/Templates%20Modos%20de%20pago/5c89c897e1917d9209a762af_davi_qn90y9.png\" alt=\"logo daviPlata\" class=\"logo-pasarela-daviplata\" data-v-0229bb16></li>" : "<!---->") + " " + (_vm.mediospago.efecty == 1 ? "<li data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfecty'))) + "</h4> <p data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfectyMsg'))) + "</p> <a href=\"https://www.efecty.com.co/web/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-0229bb16><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333023/Templates%20Modos%20de%20pago/Efecty-png_q3fvog.png\" alt=\"logo efecty\" class=\"logo-pasarela-efecty\" data-v-0229bb16></a></li>" : "<!---->") + " " + (_vm.mediospago.mercado_pago == 1 ? "<li data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaMercado'))) + "</h4> <p data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaMercadoMsg')) + "\n          ") + "</p> <a href=\"https://www.mercadopago.com\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-0229bb16><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606331948/Templates%20Modos%20de%20pago/mercadopago_jyalpa.png\" alt=\"logo mercadopago\" class=\"logo-pasarela-daviplata\" data-v-0229bb16></a></li>" : "<!---->") + " " + (_vm.mediospago.nequi == 1 ? "<li data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionnequi'))) + "</h4> <p data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionnequiMsg')) + "\n          ") + "</p> <a href=\"https://www.nequi.com.co/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-0229bb16><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333553/Templates%20Modos%20de%20pago/Nequi_by_Bancolombia_hxhkhb.png\" alt=\"logo nequi\" class=\"logo-pasarela-daviplata\" data-v-0229bb16></a></li>" : "<!---->") + " " + (_vm.mediospago.payco == 1 ? "<li data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaEpayco'))) + "</h4> <p data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaEpaycoMsg')) + "\n          ") + "</p> <img src=\"https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png\" alt=\"Pasarela de pagos epayco\" class=\"logo-pasarela-payco\" data-v-0229bb16></li>" : "<!---->") + " " + (_vm.mediospago.payu == 1 ? "<li data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaPayu'))) + "</h4> <p data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://www.payulatam.com/co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-0229bb16><img src=\"https://ecommerce.payulatam.com/logos/PayU_CO.png\" alt=\"PayU\" border=\"0\" class=\"logo-pasarela-payu\" data-v-0229bb16></a></li>" : "<!---->") + " " + (_vm.mediospago.wompi == 1 ? "<li data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionwompi'))) + "</h4> <p data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://wompi.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-0229bb16><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335739/Templates%20Modos%20de%20pago/wompi_jxuitu.png\" alt=\"wompi\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-0229bb16></a></li>" : "<!---->") + "</ul></div>" : "<!---->") + " " + (_vm.focusbtn3 ? "<div class=\"item-content opcenvio\" data-v-0229bb16>" + (this.envios.envio_metodo ? "<div class=\"deliverys section\" data-v-0229bb16><div class=\"content\" data-v-0229bb16><h3 class=\"title-section\" data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_opinionesEnvio')) + "\n          ") + "</h3></div> " + (this.envios.envio_metodo === 'precio_ciudad' ? "<div class=\"wrapper-method\" data-v-0229bb16><h4 class=\"capitalize\" data-v-0229bb16>" + _vm._ssrEscape("\n            • " + _vm._s(this.envios.envio_metodo.replace('_', ' por ')) + "\n          ") + "</h4> <p class=\"description-method\" data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg1')) + "\n          ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'tarifa_plana' ? "<div class=\"wrapper-method\" data-v-0229bb16><h4 class=\"capitalize\" data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(this.envios.envio_metodo.replace('_', ' ')) + "\n          ") + "</h4> <p class=\"description-method\" data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg2')) + "\n          ") + "</p> <p class=\"price\" data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('cart_precio')) + "\n            " + _vm._s(_vm._f("currency")(this.envios.valor, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'precio' ? "<div class=\"wrapper-method\" data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_precioTotalCompra'))) + "</h4> <p class=\"description-method\" data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_precioTotalCompraMsg')) + "\n          ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'gratis' ? "<div class=\"wrapper-method\" data-v-0229bb16><h4 data-v-0229bb16>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_gratis'))) + "</h4> <p class=\"description-method\" data-v-0229bb16>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_gratisMsg')) + "\n          ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'sinEnvio' ? "<div class=\"wrapper-method\" data-v-0229bb16><p class=\"description-method\" data-v-0229bb16>Pasas a recoger tu compra</p></div>" : "<!---->") + "</div>" : "<!---->") + "</div>" : "<!---->") + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/_productdetails/OptTab.vue?vue&type=template&id=0229bb16&scoped=true&

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/OptTab.vue?vue&type=script&lang=js&

/* harmony default export */ var OptTabvue_type_script_lang_js_ = ({
  mixins: [formatCurrent["a" /* default */]],
  components: {},
  props: {
    dataStore: Object,
    data: {},
    envio: {},
    settingByTemplate10: Array
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
      if (this.data.info.descripcion == '' || this.data.info.descripcion == null) {
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
// CONCATENATED MODULE: ./components/template10/_productdetails/OptTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_OptTabvue_type_script_lang_js_ = (OptTabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/_productdetails/OptTab.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(370)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_OptTabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0229bb16",
  "04ea422c"
  
)

/* harmony default export */ var OptTab = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(371);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("abc90c32", content, true, context)
};

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_0229bb16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_0229bb16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_0229bb16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_0229bb16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_0229bb16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editor[data-v-0229bb16]{width:100%}.editor[data-v-0229bb16] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-0229bb16] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-0229bb16] .el-tiptap-editor__content h1{font-family:var(--font-style-1);font-size:2em}.editor[data-v-0229bb16] .el-tiptap-editor__content h2{font-family:var(--font-style-1);font-size:1.5em}.editor[data-v-0229bb16] .el-tiptap-editor__content h3{font-family:var(--font-style-1);font-size:1.17em}.editor[data-v-0229bb16] .el-tiptap-editor__content h4{font-family:var(--font-style-1);font-size:1.12em}.editor[data-v-0229bb16] .el-tiptap-editor__content h5{font-family:var(--font-style-1);font-size:.83em}.editor[data-v-0229bb16] .el-tiptap-editor__content blockquote,.editor[data-v-0229bb16] .el-tiptap-editor__content code,.editor[data-v-0229bb16] .el-tiptap-editor__content em,.editor[data-v-0229bb16] .el-tiptap-editor__content li,.editor[data-v-0229bb16] .el-tiptap-editor__content ol,.editor[data-v-0229bb16] .el-tiptap-editor__content p,.editor[data-v-0229bb16] .el-tiptap-editor__content pre,.editor[data-v-0229bb16] .el-tiptap-editor__content s,.editor[data-v-0229bb16] .el-tiptap-editor__content span,.editor[data-v-0229bb16] .el-tiptap-editor__content strong,.editor[data-v-0229bb16] .el-tiptap-editor__content ul{font-family:var(--font-style-1)}.editor[data-v-0229bb16] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-0229bb16] .el-popper.el-tiptap-image-popper{display:none}.tab[data-v-0229bb16]{align-items:center;cursor:pointer;justify-content:center;padding-left:4px;padding-right:4px;width:auto}.item-content[data-v-0229bb16],.tab[data-v-0229bb16]{display:flex;flex-direction:column}.item-content[data-v-0229bb16]{align-items:flex-start;justify-content:flex-start;padding-bottom:4px;width:100%}.content_product_description[data-v-0229bb16]{align-items:flex-start;color:var(--color_subtext);display:flex;flex-direction:column;font-size:14px;font-weight:400;justify-content:center;line-height:1.42857143;width:100%}.content_product_description[data-v-0229bb16],h3[data-v-0229bb16]{font-family:var(--font-style-1)!important}h3[data-v-0229bb16]{align-self:flex-start;color:var(--color_subtext);font-size:15px;font-weight:600;text-transform:uppercase}h4[data-v-0229bb16]{align-items:flex-start;color:var(--color_subtext);display:flex;flex-direction:column;font-size:15px;font-weight:600;justify-content:center;line-height:1.42857143;margin-bottom:5px;width:100%}h4[data-v-0229bb16],li p[data-v-0229bb16]{font-family:var(--font-style-1)!important}li p[data-v-0229bb16]{color:var(--color_subtext);font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}.description-method[data-v-0229bb16],.price[data-v-0229bb16]{color:var(--color_subtext);font-family:var(--font-style-1)!important;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}img[data-v-0229bb16]{margin-top:15px;max-width:300px;width:30%}@media (min-width:300px){.content-opt-tab[data-v-0229bb16],.content-tab[data-v-0229bb16]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-tab[data-v-0229bb16]{border-color:var(--border);margin-top:6px}.head-content[data-v-0229bb16]{grid-gap:.5rem;align-items:center;display:grid;gap:.5rem;grid-template-columns:repeat(1,minmax(0,1fr));justify-content:center;margin-bottom:40px;width:100%}.tittle[data-v-0229bb16]{align-items:center;background-color:transparent;color:var(--color_subtext);display:flex;font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;height:40px;justify-content:center;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.show-select-active[data-v-0229bb16]{background-color:var(--color_gb_tabs)}.show-select-active .tittle[data-v-0229bb16]{color:var(--color_text_tabs)}}@media (min-width:425px){.head-content[data-v-0229bb16]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-bottom:40px}.tittle[data-v-0229bb16]{font-size:12px;text-align:center}}@media (min-width:768px){.content-opt-tab[data-v-0229bb16]{border-width:1px;margin-top:0}.content-opt-tab[data-v-0229bb16],.head-content[data-v-0229bb16]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start}.head-content[data-v-0229bb16]{border-bottom:1px solid transparent;flex-direction:column;gap:0;margin-bottom:0;width:60%}.tab[data-v-0229bb16]{display:flex}.tab[data-v-0229bb16],.tittle[data-v-0229bb16]{align-items:center;justify-content:flex-start;width:100%}.tittle[data-v-0229bb16]{font-size:14px;height:50px;padding-left:20px;text-align:center}.content-tab[data-v-0229bb16]{align-items:flex-start;border-color:var(--border);border-width:1px;display:flex;flex-direction:row;justify-content:flex-start;margin-top:0;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.show-select-active[data-v-0229bb16]{background-color:var(--color_gb_tabs);border-left-width:4px;width:100%}.show-select-active .tittle[data-v-0229bb16]{color:var(--color_text_tabs)}.content-tab[data-v-0229bb16]{padding:40px}}@media (min-width:1024px){.head-content[data-v-0229bb16]{width:400px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
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

/***/ })

};;
//# sourceMappingURL=template10-productdetails-opt-tab.js.map