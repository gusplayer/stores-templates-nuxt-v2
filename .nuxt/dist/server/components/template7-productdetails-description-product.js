exports.ids = [297,365];
exports.modules = {

/***/ 1092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_productdetails/descriptionProduct.vue?vue&type=template&id=51eff8c0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "description"
  }, [_vm._ssrNode("<div class=\"left\" data-v-51eff8c0>", "</div>", [_vm._ssrNode("<div class=\"content-tittle-description\" data-v-51eff8c0><span class=\"tittle-description\" data-v-51eff8c0>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('productdetail_description')) + "\n      ") + "</span></div> "), _vm.data.info.descripcion ? _vm._ssrNode("<div class=\"editor content_product_description\" data-v-51eff8c0>", "</div>", [_c('el-tiptap', {
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
  })], 1) : _vm._e()], 2), _vm._ssrNode(" <div class=\"right\" data-v-51eff8c0><div class=\"payments section\" data-v-51eff8c0><div class=\"content\" data-v-51eff8c0><h3 class=\"title-section\" data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_opcionesPago'))) + "</h3></div> <p class=\"text-method-payment\" data-v-51eff8c0>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('productdetail_opcionesPagoMsg')) + "\n      ") + "</p> <ul data-v-51eff8c0>" + (_vm.mediospago.consignacion == 1 ? "<li data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancaria'))) + "</h4> <p data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancariaMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.contraentrega == 1 ? "<li data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContra'))) + "</h4> <p data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContraMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.convenir == 1 ? "<li data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenir'))) + "</h4> <p data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenirMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.credibanco == 1 ? "<li data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionCredibanco'))) + "</h4> <p data-v-51eff8c0>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionCredibancoMsg')) + "\n          ") + "</p> <a href=\"https://www.credibanco.com/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-51eff8c0><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335270/Templates%20Modos%20de%20pago/Credibanco_lprsof.png\" alt=\"logo Credibanco\" class=\"logo-pasarela\" data-v-51eff8c0></a></li>" : "<!---->") + " " + (_vm.mediospago.daviplata == 1 ? "<li data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignaciondaviplata'))) + "</h4> <p data-v-51eff8c0>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignaciondaviplataMsg')) + "\n          ") + "</p> <img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333767/Templates%20Modos%20de%20pago/5c89c897e1917d9209a762af_davi_qn90y9.png\" alt=\"logo daviPlata\" class=\"logo-pasarela-daviplata\" data-v-51eff8c0></li>" : "<!---->") + " " + (_vm.mediospago.efecty == 1 ? "<li data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfecty'))) + "</h4> <p data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfectyMsg'))) + "</p> <a href=\"https://www.efecty.com.co/web/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-51eff8c0><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333023/Templates%20Modos%20de%20pago/Efecty-png_q3fvog.png\" alt=\"logo efecty\" class=\"logo-pasarela-efecty\" data-v-51eff8c0></a></li>" : "<!---->") + " " + (_vm.mediospago.mercado_pago == 1 ? "<li data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaMercado'))) + "</h4> <p data-v-51eff8c0>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaMercadoMsg')) + "\n          ") + "</p> <a href=\"https://www.mercadopago.com\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-51eff8c0><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606331948/Templates%20Modos%20de%20pago/mercadopago_jyalpa.png\" alt=\"logo mercadopago\" class=\"logo-pasarela-daviplata\" data-v-51eff8c0></a></li>" : "<!---->") + " " + (_vm.mediospago.nequi == 1 ? "<li data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionnequi'))) + "</h4> <p data-v-51eff8c0>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionnequiMsg')) + "\n          ") + "</p> <a href=\"https://www.nequi.com.co/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-51eff8c0><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333553/Templates%20Modos%20de%20pago/Nequi_by_Bancolombia_hxhkhb.png\" alt=\"logo nequi\" class=\"logo-pasarela-daviplata\" data-v-51eff8c0></a></li>" : "<!---->") + " " + (_vm.mediospago.payco == 1 ? "<li data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaEpayco'))) + "</h4> <p data-v-51eff8c0>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaEpaycoMsg')) + "\n          ") + "</p> <img src=\"https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png\" alt=\"Pasarela de pagos epayco\" class=\"logo-pasarela-payco\" data-v-51eff8c0></li>" : "<!---->") + " " + (_vm.mediospago.payu == 1 ? "<li data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaPayu'))) + "</h4> <p data-v-51eff8c0>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://www.payulatam.com/co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-51eff8c0><img src=\"https://ecommerce.payulatam.com/logos/PayU_CO.png\" alt=\"PayU\" border=\"0\" class=\"logo-pasarela-payu\" data-v-51eff8c0></a></li>" : "<!---->") + " " + (_vm.mediospago.wompi == 1 ? "<li data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionwompi'))) + "</h4> <p data-v-51eff8c0>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://wompi.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-51eff8c0><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335739/Templates%20Modos%20de%20pago/wompi_jxuitu.png\" alt=\"wompi\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-51eff8c0></a></li>" : "<!---->") + "</ul></div> " + (this.envios.envio_metodo ? "<div class=\"deliverys section\" data-v-51eff8c0><div class=\"content\" data-v-51eff8c0><h3 class=\"title-section\" data-v-51eff8c0>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_opinionesEnvio')) + "\n        ") + "</h3></div> " + (this.envios.envio_metodo === 'precio_ciudad' ? "<div class=\"wrapper-method\" data-v-51eff8c0><h4 class=\"capitalize\" data-v-51eff8c0>" + _vm._ssrEscape("\n          • " + _vm._s(this.envios.envio_metodo.replace('_', ' por ')) + "\n        ") + "</h4> <p class=\"description-method\" data-v-51eff8c0>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg1')) + "\n        ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'tarifa_plana' ? "<div class=\"wrapper-method\" data-v-51eff8c0><h4 class=\"capitalize\" data-v-51eff8c0>" + _vm._ssrEscape("\n          " + _vm._s(this.envios.envio_metodo.replace('_', ' ')) + "\n        ") + "</h4> <p class=\"description-method\" data-v-51eff8c0>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg2')) + "\n        ") + "</p> <p class=\"price\" data-v-51eff8c0>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('cart_precio')) + "\n          " + _vm._s(_vm._f("currency")(this.envios.valor, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n        ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'precio' ? "<div class=\"wrapper-method\" data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_precioTotalCompra'))) + "</h4> <p class=\"description-method\" data-v-51eff8c0>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_precioTotalCompraMsg')) + "\n        ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'gratis' ? "<div class=\"wrapper-method\" data-v-51eff8c0><h4 data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_gratis'))) + "</h4> <p class=\"description-method\" data-v-51eff8c0>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_gratisMsg'))) + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'sinEnvio' ? "<div class=\"wrapper-method\" data-v-51eff8c0><p class=\"description-method\" data-v-51eff8c0>Pasas a recoger tu compra</p></div>" : "<!---->") + "</div>" : "<!---->") + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/_productdetails/descriptionProduct.vue?vue&type=template&id=51eff8c0&scoped=true&

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(49);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/_productdetails/descriptionProduct.vue?vue&type=script&lang=js&


/* harmony default export */ var descriptionProductvue_type_script_lang_js_ = ({
  mixins: [elemenTiptap["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    dataStore: Object,
    data: {},
    envio: {}
  },
  data() {
    return {
      medioEnvio: '',
      envioproducto: ''
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
  }
});
// CONCATENATED MODULE: ./components/template7/_productdetails/descriptionProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_descriptionProductvue_type_script_lang_js_ = (descriptionProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/_productdetails/descriptionProduct.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(414)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_descriptionProductvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51eff8c0",
  "4349b4b1"
  
)

/* harmony default export */ var descriptionProduct = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(415);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2f98c863", content, true, context)
};

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_vue_vue_type_style_index_0_id_51eff8c0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_vue_vue_type_style_index_0_id_51eff8c0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_vue_vue_type_style_index_0_id_51eff8c0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_vue_vue_type_style_index_0_id_51eff8c0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_vue_vue_type_style_index_0_id_51eff8c0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".description[data-v-51eff8c0]{border-bottom:1px solid var(--color_border);display:flex;width:100%}.description div[data-v-51eff8c0]{color:var(--color_description);line-height:1.5}.left[data-v-51eff8c0]{align-items:center;flex:2;flex-direction:column;justify-content:flex-start;overflow:hidden}.left[data-v-51eff8c0],.left-empty[data-v-51eff8c0]{display:flex;padding-bottom:10px;width:100%}.left-empty[data-v-51eff8c0]{flex:2}.content-tittle-description[data-v-51eff8c0]{align-items:flex-start;justify-content:flex-start;margin-top:20px;width:100%}.tittle-description[data-v-51eff8c0]{align-self:flex-start;color:var(--color_description);font-family:var(--font-style-3);font-size:16px;font-weight:700;margin-bottom:20px;margin-top:20px;text-transform:uppercase}.content_product_description[data-v-51eff8c0],.right[data-v-51eff8c0]{width:100%}.right[data-v-51eff8c0]{border-left:1px solid var(--color_border);display:flex;flex:1;flex-direction:column;padding-bottom:10px}.title-section[data-v-51eff8c0]{align-self:flex-start;color:var(--color_description);font-family:var(--font-style-3);font-size:15px;font-weight:700;text-transform:uppercase}.right img[data-v-51eff8c0]{margin-top:15px;max-width:320px;width:100%}.section[data-v-51eff8c0]{box-sizing:border-box;margin-left:25px;margin-top:20px}.text-desc[data-v-51eff8c0]{align-self:flex-start;color:var(--color_description);font-family:var(--font-style-3);font-size:15px;margin-top:20px;text-transform:uppercase}.content-text-desc[data-v-51eff8c0]{margin-bottom:20px;margin-right:25px;min-height:300px}.wrapper-comments[data-v-51eff8c0]{border-top:1px solid var(--color_border);width:100%}.text-method-payment[data-v-51eff8c0]{font-family:var(--font-style-3);font-size:14px}h3[data-v-51eff8c0]{align-self:flex-start;font-size:15px;text-transform:uppercase}h3[data-v-51eff8c0],h4[data-v-51eff8c0]{color:var(--color_description);font-family:var(--font-style-3)}h4[data-v-51eff8c0]{font-weight:700;margin-bottom:5px;margin-top:15px}li p[data-v-51eff8c0]{font-family:var(--font-style-3);font-size:14px;line-height:1.4}.icon[data-v-51eff8c0]{align-self:flex-start;margin-bottom:10px;vertical-align:middle;width:50px}.content[data-v-51eff8c0]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start}.payments[data-v-51eff8c0]{margin-bottom:20px}.line[data-v-51eff8c0]{border-top:1px solid var(--color_border);width:100%}.deliverys[data-v-51eff8c0]{margin-bottom:20px;margin-top:20px}.stage[data-v-51eff8c0]{border-left:0;display:flex;flex:1}.logo-pasarela[data-v-51eff8c0]{width:160px!important}.logo-pasarela-daviplata[data-v-51eff8c0]{width:120px!important}.logo-pasarela-efecty[data-v-51eff8c0]{width:100px!important}.logo-pasarela-wompi[data-v-51eff8c0]{width:220px!important}.logo-pasarela-payu[data-v-51eff8c0]{width:300px!important}.logo-pasarela-payco[data-v-51eff8c0]{width:280px!important}.capitalize[data-v-51eff8c0]{font-family:var(--font-style-3);font-weight:600!important}.description-method[data-v-51eff8c0]{font-family:var(--font-style-3);font-size:14px;line-height:1.4}.price[data-v-51eff8c0]{font-size:14px;margin-top:10px}.medios-mercadopago[data-v-51eff8c0]{border-radius:4px;display:block;width:100%}.line-comments[data-v-51eff8c0],.wrapper-comments-responsive[data-v-51eff8c0]{display:none}.cursor_point[data-v-51eff8c0]{cursor:pointer}.editor[data-v-51eff8c0] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-51eff8c0] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-51eff8c0] .el-tiptap-editor__content h1{font-family:var(--font-style-3);font-size:2em}.editor[data-v-51eff8c0] .el-tiptap-editor__content h2{font-family:var(--font-style-3);font-size:1.5em}.editor[data-v-51eff8c0] .el-tiptap-editor__content h3{font-family:var(--font-style-3);font-size:1.17em}.editor[data-v-51eff8c0] .el-tiptap-editor__content h4{font-family:var(--font-style-3);font-size:1.12em}.editor[data-v-51eff8c0] .el-tiptap-editor__content h5{font-family:var(--font-style-3);font-size:.83em}.editor[data-v-51eff8c0] .el-tiptap-editor__content blockquote,.editor[data-v-51eff8c0] .el-tiptap-editor__content code,.editor[data-v-51eff8c0] .el-tiptap-editor__content em,.editor[data-v-51eff8c0] .el-tiptap-editor__content li,.editor[data-v-51eff8c0] .el-tiptap-editor__content ol,.editor[data-v-51eff8c0] .el-tiptap-editor__content p,.editor[data-v-51eff8c0] .el-tiptap-editor__content pre,.editor[data-v-51eff8c0] .el-tiptap-editor__content s,.editor[data-v-51eff8c0] .el-tiptap-editor__content span,.editor[data-v-51eff8c0] .el-tiptap-editor__content strong,.editor[data-v-51eff8c0] .el-tiptap-editor__content ul{font-family:var(--font-style-3)}.editor[data-v-51eff8c0] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-51eff8c0] .el-popper.el-tiptap-image-popper{display:none}@media (min-width:300px){.content-tittle-description[data-v-51eff8c0]{width:90%}}@media (min-width:768px){.left[data-v-51eff8c0]{align-items:flex-start}}@media (max-width:810px){.left[data-v-51eff8c0]{margin-right:15px}}@media (max-width:768px){.editor[data-v-51eff8c0] .el-tiptap-editor>.el-tiptap-editor__content{padding:0 15px}.description[data-v-51eff8c0]{display:flex;flex-direction:column;margin-bottom:20px;margin-right:0;width:100%}.description[data-v-51eff8c0],.section[data-v-51eff8c0]{margin-left:0}.left[data-v-51eff8c0]{flex:1;height:100%;margin-right:0;padding-bottom:0}.left-empty[data-v-51eff8c0]{display:flex;flex:0;padding-bottom:10px;width:100%}.right[data-v-51eff8c0]{border-left:0}.content-text-desc[data-v-51eff8c0]{border-bottom:1px solid var(--color_border);min-height:0;padding-bottom:20px}.wrapper-comments-responsive[data-v-51eff8c0]{display:inline;display:initial}.wrapper-comments[data-v-51eff8c0]{display:none}.line-comments[data-v-51eff8c0]{border-top:1px solid var(--color_border);display:inline;display:initial;width:100%}}@media (max-width:725px){.description[data-v-51eff8c0]{margin-bottom:0}.left[data-v-51eff8c0]{flex:1;padding-bottom:10px}.right[data-v-51eff8c0]{border-left:0}.payments[data-v-51eff8c0],.text-desc[data-v-51eff8c0]{padding-left:15px;padding-right:15px}.payments[data-v-51eff8c0]{border-top:1px solid var(--color_border);margin-bottom:10px}.section[data-v-51eff8c0]{margin-left:0;margin-top:0;padding-top:10px}.deliverys[data-v-51eff8c0]{margin-bottom:10px;margin-top:10px;padding-left:15px;padding-right:15px}.content_product_description[data-v-51eff8c0]{max-height:600px}}", ""]);
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

/***/ })

};;
//# sourceMappingURL=template7-productdetails-description-product.js.map