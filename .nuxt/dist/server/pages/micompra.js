exports.ids = [34];
exports.modules = {

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./mixins/states.vue?vue&type=script&lang=js&
/* harmony default export */ var statesvue_type_script_lang_js_ = ({
  computed: {
    shippingState() {
      return [{
        id: 1,
        state: this.$t('mcompra_pendiente'),
        color: '#FFA801'
      }, {
        id: 2,
        state: this.$t('mcompra_enEmpaque'),
        color: '#FFA801'
      }, {
        id: 3,
        state: this.$t('mcompra_enTransito'),
        color: '#4429AE'
      }, {
        id: 4,
        state: this.$t('mcompra_devuelto'),
        color: '#0000FF'
      }, {
        id: 5,
        state: this.$t('mcompra_entregado'),
        color: '#30C490'
      }, {
        id: 6,
        state: this.$t('mcompra_cancelada'),
        color: '#EB4D4B'
      }];
    },
    channelBuy() {
      return [{
        name: 'WhatsApp',
        color: '#128C7E'
      }, {
        name: 'Instagram',
        color: '#C13584'
      }, {
        name: 'Facebook',
        color: '#3b5998'
      }, {
        name: 'Punto físico',
        color: '#f14b5a'
      }, {
        name: 'Checkout',
        color: '#4429b4'
      }, {
        name: 'Shopify',
        color: '#95bf47'
      }, {
        name: 'Checkout - Hoko',
        color: '#0059f7'
      }, {
        name: 'Hoko',
        color: '#0059f7'
      }];
    },
    payments() {
      return [{
        id: '1',
        tag: 'payco',
        title: 'mcompra_pTarjetaCredito',
        description: 'Pago realizado por ePayco'
      }, {
        id: '2',
        tag: 'payco',
        title: 'mcompra_pPase1',
        description: 'Paga con tu cuenta bancaria o tarjeta débito'
      }, {
        id: '3',
        tag: 'payco',
        title: 'mcompra_pPagoEfectivo',
        description: 'Mas de 14.000 puntos en todo el país'
      }, {
        id: '4',
        tag: 'consignacion',
        title: 'mcompra_pConsigancionBancaria',
        description: 'Transferencia o consignación a nuestra cuenta bancaria'
      }, {
        id: '5',
        tag: 'efecty',
        title: 'mcompra_pGiroEfecty',
        description: 'Transferencia o consignación a nuestra cuenta'
      }, {
        id: '6',
        tag: 'tienda',
        title: 'mcompra_pRecogerTienda',
        description: 'Si estas cerca a nuestro negocio, acércate a realizar el pago y recoger tu producto. Escribe abajo en los comentarios cuando vendrías a nuestra tienda para tener tu compra lista.'
      }, {
        id: '7',
        tag: 'convenir',
        title: 'mcompra_pPagoConvenir',
        description: 'Al finalizar tu compra, te contactaremos o puedes comunicarte con nosotros por algunos de nuestros medios de comunicación para que organicemos la forma de pago de tu compra. '
      }, {
        id: '8',
        tag: 'payco',
        title: 'mcompra_pSafetyPat',
        description: 'Banca y efectivo internacional'
      }, {
        id: '9',
        tag: 'contraentrega',
        title: 'mcompra_pContraEntrega',
        description: 'Pagas en el momento que recibas tu compra'
      }, {
        id: '10',
        tag: 'mercadopago',
        title: 'mcompra_pmercadoPago',
        description: 'Tu cliente ha seleccionado mercadoPago para pagar'
      }, {
        id: '11',
        tag: 'payu',
        title: 'mcompra_pTarjetaCreditoM',
        description: 'Paga con tu tarjeta hasta en 24 cuotas'
      }, {
        id: '12',
        tag: 'payu',
        title: 'mcompra_pEfectivo',
        description: 'Tu cliente ha seleccionado PayU para pagar'
      }, {
        id: '13',
        tag: 'payu',
        title: 'mcompra_pPayuCuentaAhorros',
        description: 'Tu cliente ha seleccionado PayU para pagar'
      }, {
        id: '14',
        tag: 'mercadopago',
        title: 'mcompra_pPMercadoCuentaAhorros',
        description: 'Tu cliente ha seleccionado Mercado Pago para pagar'
      }, {
        id: '15',
        tag: 'Daviplata',
        title: 'mcompra_pDaviplata',
        description: 'Tu cliente ha seleccionado Daviplata para pagar'
      }, {
        id: '16',
        tag: 'Nequi',
        title: 'mcompra_pNequi',
        description: 'Tu cliente ha seleccionado Nequi para pagar'
      }];
    },
    statusUpdate() {
      return [{
        id: '0',
        color: '#FFA801',
        title: 'mcompra_sinPagar',
        ref: 'Sin pagar'
      }, {
        id: '1',
        color: '#30c490',
        title: 'mcompra_pagada',
        ref: 'Pagada'
      }, {
        id: '2',
        color: '',
        title: '',
        ref: ''
      }, {
        id: '3',
        color: '#EB4D4B',
        title: 'mcompra_cancelada',
        ref: 'Cancelada'
      }, {
        id: '4',
        color: '#0000FF',
        title: 'mcompra_despachada',
        ref: 'Despachada'
      }, {
        id: '5',
        color: '',
        title: '',
        ref: ''
      }, {
        id: '6',
        color: '#4429AE',
        title: 'mcompra_entregado',
        ref: 'Entregado'
      }, {
        id: '10',
        color: '#EB4D4B',
        title: 'mcompra_rechazado',
        ref: 'Rechazada'
      }];
    },
    saleStateHoko() {
      return [{
        id: 1,
        state: 'Creada',
        color: '#30C46F',
        type: 'success'
      }, {
        id: 2,
        state: 'En proceso',
        color: '#4B9DEB',
        type: 'info'
      }, {
        id: 3,
        state: 'Despachada',
        color: '#30C46F',
        type: 'success'
      }, {
        id: 4,
        state: 'Finalizada',
        color: '#30C46F',
        type: 'success'
      }, {
        id: 5,
        state: 'Cancelada',
        color: '#EB4D4B',
        type: 'danger'
      }, {
        id: 6,
        state: 'En Novedad',
        color: '#EBC44B',
        type: 'warning'
      }, {
        id: 7,
        state: 'Error',
        color: '#EB4D4B',
        type: 'danger'
      }];
    }
  }
});
// CONCATENATED MODULE: ./mixins/states.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_statesvue_type_script_lang_js_ = (statesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./mixins/states.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_statesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "513b63ee"
  
)

/* harmony default export */ var states = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(464);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5d0d2cbe", content, true, context)
};

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_miCompra_1_vue_vue_type_style_index_0_id_0c1af965_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_miCompra_1_vue_vue_type_style_index_0_id_0c1af965_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_miCompra_1_vue_vue_type_style_index_0_id_0c1af965_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_miCompra_1_vue_vue_type_style_index_0_id_0c1af965_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_miCompra_1_vue_vue_type_style_index_0_id_0c1af965_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tag-state[data-v-0c1af965]{color:#fff;margin-left:10px}.table-striped[data-v-0c1af965]{display:grid;width:100%}.table-striped .thead[data-v-0c1af965]{width:100%}.table-striped .thead ul[data-v-0c1af965]{width:100%}.table-striped .tbody ul[data-v-0c1af965],.table-striped .thead ul[data-v-0c1af965]{display:grid;grid-auto-flow:column;grid-template-columns:repeat(7,1fr);list-style:none;padding:10px 0}.table-striped .tbody ul[data-v-0c1af965]:nth-of-type(odd){background-color:#f9f9f9;border-bottom:1px solid #ddd;border-top:1px solid #ddd}.photo img[data-v-0c1af965]{height:70px;-o-object-fit:cover;object-fit:cover;width:70px}td[data-v-0c1af965]{vertical-align:middle!important}td.variants[data-v-0c1af965]{display:flex}td.variants p~p[data-v-0c1af965]{margin-left:10px}table[data-v-0c1af965]{border-collapse:collapse;border-spacing:0}.thead ul li[data-v-0c1af965]{color:gray}.text-table[data-v-0c1af965]{color:var(--purple);font-size:14px}.text-bold-table[data-v-0c1af965],.text-normal-table[data-v-0c1af965],.text-variant[data-v-0c1af965]{color:#000;font-size:14px}.text-bold-table[data-v-0c1af965]{font-weight:700;padding-right:15px;text-align:right}.wrapper_micompra[data-v-0c1af965]{background-color:#efefef;box-sizing:border-box;height:100%;justify-content:center;min-height:calc(100vh - 282px)}.contenedor[data-v-0c1af965],.wrapper_micompra[data-v-0c1af965]{align-items:center;display:flex;width:100%}.contenedor[data-v-0c1af965]{flex-direction:column;justify-content:flex-start;max-width:1300px;padding:20px}.wrapper-form[data-v-0c1af965]{background:#fff;border-radius:30px;margin-bottom:10px;padding:20px 54px 10px;width:100%}.content-form[data-v-0c1af965]{display:flex;flex-direction:row;width:100%}.title-form[data-v-0c1af965]{color:#000;font-size:24px;font-stretch:normal;font-style:normal;font-weight:600;letter-spacing:-.24px;line-height:1.2;margin-bottom:25px;text-align:center}.form[data-v-0c1af965]{align-items:center;flex:2;flex-direction:row;justify-content:center}.content-input[data-v-0c1af965],.form[data-v-0c1af965]{display:flex;width:100%}.content-input[data-v-0c1af965]{align-items:flex-start;flex-direction:column;height:90px;justify-content:flex-start;margin-right:30px}.content-btn[data-v-0c1af965]{flex:1}.btn-submitOrden[data-v-0c1af965],.content-btn[data-v-0c1af965]{align-items:center;display:flex;justify-content:center}.btn-submitOrden[data-v-0c1af965]{background-color:#000;border:2px solid #000;border-radius:5px;color:#fff;cursor:pointer;flex-direction:row;font-size:16px;font-weight:700;max-height:40px;min-height:40px;padding:8px 14px;transition:all .2s ease-in;width:100%}.btn-submitOrden[data-v-0c1af965]:hover{background-color:var(--btnhover);border:2px solid var(--btnhover);color:#fff}.icon-seach[data-v-0c1af965]{bottom:2px;font-size:18px;margin-right:5px}.input-text[data-v-0c1af965]{background-color:transparent;border:2px solid #ccc9c9;border-radius:5px;color:rgba(21,20,57,.541);font-size:14px;height:40px;padding:8px 14px;width:100%}.input-text[data-v-0c1af965]::-moz-placeholder{color:rgba(21,20,57,.541);opacity:.7}.input-text[data-v-0c1af965]::placeholder{color:rgba(21,20,57,.541);opacity:.7}.input-text[data-v-0c1af965]:-internal-autofill-selected{background-color:transparent!important;background-image:none!important;color:-internal-light-dark-color(#000,#fff)!important}.input-text[data-v-0c1af965]:-internal-autofill-selected{-webkit-appearance:menulist-button}.input-text[data-v-0c1af965]:active,.input-text[data-v-0c1af965]:focus{border:2px solid rgba(60,60,63,.774);outline:0}.input-label[data-v-0c1af965]{height:25px}.content-btn .el-button--primary[data-v-0c1af965]{background-color:#000;border-color:#000;border-radius:5px;color:#fff;height:40px;max-height:40px;width:100%}.content-btn .el-button--primary[data-v-0c1af965]:hover{background-color:var(--btnhover);border-color:var(--btnhover)}.text-error[data-v-0c1af965]{color:#cb2027;font-size:12px;margin-left:10px;width:100%}.bar-body[data-v-0c1af965]{align-items:center;background-color:#fff;border-radius:30px;padding:40px 54px 15px}.bar-body[data-v-0c1af965],.content-title[data-v-0c1af965]{display:flex;flex-direction:column;justify-content:center;width:100%}.content-title[data-v-0c1af965]{align-items:flex-start;border-bottom:1px solid #eee;margin-bottom:10px}.content-title>p[data-v-0c1af965]:first-child{color:#383838;font-size:18px;font-weight:700;line-height:1.3}.content-title>p[data-v-0c1af965]:nth-child(2){color:#383838;font-size:14px;font-weight:400;line-height:1.3;margin-bottom:10px}.content-card[data-v-0c1af965]{grid-column-gap:60px;flex-wrap:wrap;margin-bottom:20px;width:100%}.card[data-v-0c1af965],.content-card[data-v-0c1af965]{align-items:center;display:flex}.img-product[data-v-0c1af965]{height:83px;-o-object-fit:cover;object-fit:cover;vertical-align:top;width:83px}.info[data-v-0c1af965]{padding-left:15px}.name-product[data-v-0c1af965]{font-size:16px;font-weight:700;line-height:1.63}.name-product[data-v-0c1af965],.quantity-product[data-v-0c1af965]{color:#383838;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:left}.quantity-product[data-v-0c1af965]{font-size:13px;font-weight:400;line-height:1.3}.price-product[data-v-0c1af965]{color:#000;font-size:17px;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.3;text-align:left}.info[data-v-0c1af965] .el-tag{background-color:#e8e8f3;border:1px solid #777780;border-radius:5px;box-sizing:border-box;color:#000;display:inline-block;font-size:13px;height:28px;margin-left:2px;padding:0 6px;text-align:center;white-space:nowrap}.content-info-orden[data-v-0c1af965]{justify-content:space-between;margin-bottom:10px}.content-info-orden[data-v-0c1af965],.info-left[data-v-0c1af965]{display:flex;flex-direction:column;width:100%}.title-info-orden[data-v-0c1af965]{font-size:16px;font-weight:700;line-height:1.73}.title-info-orden[data-v-0c1af965],.value-info-orden[data-v-0c1af965]{color:#000;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:left}.value-info-orden[data-v-0c1af965]{font-size:15px;font-weight:400;line-height:1.63}.content-state-top[data-v-0c1af965]{justify-content:space-between;margin-top:15px;width:100%}.content-item-state[data-v-0c1af965],.content-state-top[data-v-0c1af965]{align-items:center;display:flex;flex-direction:row}.content-sections[data-v-0c1af965]{display:flex;flex-direction:column;width:100%}.content-sections[data-v-0c1af965] .el-collapse-item__header{color:#000;font-size:16px;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal}.content-sections[data-v-0c1af965] .el-icon-arrow-right{color:#000}.content-info-buyer[data-v-0c1af965]{grid-column-gap:40px;grid-row-gap:5px;display:flex;flex-wrap:wrap;justify-content:space-between;width:100%}.address[data-v-0c1af965],.city[data-v-0c1af965],.email-address[data-v-0c1af965],.messege[data-v-0c1af965],.name[data-v-0c1af965],.owner[data-v-0c1af965],.telephone[data-v-0c1af965]{color:#000;font-size:15px;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;text-align:left}.messege[data-v-0c1af965]{width:100%}.value-data[data-v-0c1af965]{font-weight:400}.btn_url[data-v-0c1af965]{background:var(--purple);border:1px solid var(--purple);border-radius:3px;color:#fff;padding:4px 10px}.btn_url[data-v-0c1af965]:hover{background:var(--green);border:1px solid var(--green);color:var(--purple)}.wrapper-hoko[data-v-0c1af965]{align-items:flex-start;display:flex;justify-content:space-between;width:100%}@media (max-width:863px){.form[data-v-0c1af965]{align-items:center;flex:1;justify-content:center}.content-form[data-v-0c1af965],.form[data-v-0c1af965]{flex-direction:column}.content-input[data-v-0c1af965]{margin-right:0}}@media (max-width:768px){.bar-top[data-v-0c1af965]{padding:15px 27px}.bar-body[data-v-0c1af965]{padding:17px 17px 25px}.contenedor[data-v-0c1af965]{padding:60px 0}.wrapper-form[data-v-0c1af965]{padding:20px 17px 10px}}@media (max-width:600px){.content-input[data-v-0c1af965],.content-state-top[data-v-0c1af965]{align-items:flex-start;flex-direction:column}.title-info-orden[data-v-0c1af965]{margin-top:10px}}@media (max-width:500px){.form .el-input[data-v-0c1af965]{max-width:none}.contenedor[data-v-0c1af965]{padding:8px 5px 10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/micompra.vue?vue&type=template&id=78ced8a5&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.orden ? _c('KoMicompra', {
    attrs: {
      "dataStore": _vm.dataStore,
      "orden": _vm.orden
    },
    on: {
      "update": _vm.setDataOrder
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/micompra.vue?vue&type=template&id=78ced8a5&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/miCompra/Ko-miCompra-1.vue?vue&type=template&id=0c1af965&scoped=true&
var Ko_miCompra_1vue_type_template_id_0c1af965_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper_micompra"
  }, [_vm._ssrNode("<div class=\"contenedor\" data-v-0c1af965>", "</div>", [_vm._ssrNode("<div class=\"wrapper-form\" data-v-0c1af965>", "</div>", [_vm._ssrNode("<h1 class=\"title-form\" data-v-0c1af965>" + _vm._ssrEscape(_vm._s(_vm.$t('mcompra_title'))) + "</h1> "), _vm._ssrNode("<div class=\"content-form\" data-v-0c1af965>", "</div>", [_c('ValidationObserver', {
    ref: "observer",
    staticClass: "form",
    attrs: {
      "tag": "form"
    }
  }, [_c('div', {
    staticClass: "content-input"
  }, [_c('label', {
    staticClass: "input-label",
    attrs: {
      "for": "numOrden"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('mcompra_inputtitle')) + "\n            ")]), _vm._v(" "), _c('validation-provider', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "name": "número de orden",
      "rules": "required|numeric"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.numOrden,
            expression: "numOrden"
          }],
          staticClass: "input-text",
          attrs: {
            "id": "numOrden",
            "placeholder": _vm.$t('mcompra_inputtitleMsg')
          },
          domProps: {
            "value": _vm.numOrden
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.numOrden = $event.target.value;
            }
          }
        }), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: errors[0],
            expression: "errors[0]"
          }],
          staticClass: "text-error"
        }, [_vm._v("\n                  " + _vm._s(errors[0]) + "\n                ")])];
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "content-input"
  }, [_c('label', {
    staticClass: "input-label",
    attrs: {
      "for": "numId"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('mcompra_inputId')) + "\n            ")]), _vm._v(" "), _c('validation-provider', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "name": "cédula del comprador",
      "rules": "required|numeric"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.cedula,
            expression: "cedula"
          }],
          staticClass: "input-text",
          attrs: {
            "id": "numId",
            "placeholder": _vm.$t('mcompra_inputIdMsg')
          },
          domProps: {
            "value": _vm.cedula
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.cedula = $event.target.value;
            }
          }
        }), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: errors[0],
            expression: "errors[0]"
          }],
          staticClass: "text-error"
        }, [_vm._v("\n                  " + _vm._s(errors[0]) + "\n                ")])];
      }
    }])
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-btn\" data-v-0c1af965>", "</div>", [_vm._ssrNode("<button class=\"btn-submitOrden\" data-v-0c1af965>", "</button>", [_c('search-icon', {
    staticClass: "icon-seach"
  }), _vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.$t('mcompra_inputBtn')) + "\n          "))], 2)])], 2)], 2), _vm._ssrNode(" "), _vm.orden && _vm.orden.venta ? _vm._ssrNode("<div class=\"bar-body\" data-v-0c1af965>", "</div>", [_vm._ssrNode("<div class=\"content-title\" data-v-0c1af965><p data-v-0c1af965>" + _vm._ssrEscape(_vm._s(_vm.$t('mcompra_title2'))) + "</p> " + (_vm.orden.venta.id ? "<p data-v-0c1af965>" + _vm._ssrEscape("No. " + _vm._s(_vm.orden.venta.id)) + "</p>" : "<!---->") + "</div> "), _vm.orden.productos && _vm.orden.productos.length > 0 ? _vm._ssrNode("<div class=\"content-card\" data-v-0c1af965>", "</div>", [_c('client-only', [_c('table', {
    staticClass: "table table-striped"
  }, [_c('div', {
    staticClass: "thead"
  }, [_c('ul', [_c('li'), _vm._v(" "), _c('li', [_vm._v("Producto")]), _vm._v(" "), _c('li', [_vm._v("Variante")]), _vm._v(" "), _c('li', [_vm._v("Cantidad")]), _vm._v(" "), _c('li', [_vm._v("Valor Unidad")])])]), _vm._v(" "), _c('div', {
    staticClass: "tbody"
  }, _vm._l(_vm.orden.productos, function (item, index) {
    return _c('ul', {
      key: index.item
    }, [_c('li', {
      staticClass: "photo"
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinary(item.producto.foto_cloudinary, 400, 400),
        expression: "\n                      idCloudinary(item.producto.foto_cloudinary, 400, 400)\n                    "
      }],
      staticClass: "img-product",
      attrs: {
        "alt": "Imagen del producto"
      }
    })]), _vm._v(" "), _c('li', [_c('p', {
      staticClass: "text-table"
    }, [_vm._v("\n                    " + _vm._s(item.producto.nombre) + "\n                  ")])]), _vm._v(" "), item.variantes ? _c('li', {
      staticClass: "variants"
    }, _vm._l(JSON.parse(item.variantes), function (productCombinacion, index2) {
      return _c('el-tag', {
        key: index2
      }, [_vm._v("\n                    " + _vm._s(_vm._f("capitalize")(productCombinacion)) + "\n                  ")]);
    }), 1) : _vm._e(), _vm._v(" "), _c('li', [_c('p', {
      staticClass: "text-table"
    }, [_vm._v("\n                    " + _vm._s(item.unidades) + "\n                  ")])]), _vm._v(" "), _c('li', [_c('p', {
      staticClass: "text-table"
    }, [_vm._v("\n                    " + _vm._s(_vm._f("currency")(item.precio_producto)) + "\n                  ")])]), _vm._v(" "), _c('li', [_c('p', {
      staticClass: "text-table"
    }, [_vm._v("\n                    " + _vm._s(_vm._f("currency")(item.unidades * item.precio_producto)) + "\n                  ")])])]);
  }), 0)])]), _vm._ssrNode(" <div class=\"w-full flex h-1 bg-gray-900\" data-v-0c1af965></div>")], 2) : _vm._ssrNode("<div class=\"content-info-orden\" data-v-0c1af965>", "</div>", [_vm._ssrNode("<div class=\"info-left\" data-v-0c1af965>", "</div>", [_vm._ssrNode("<p class=\"title-info-orden\" data-v-0c1af965>\n            Compra dropshipping (Hoko)\n            <i class=\"el-icon-refresh\" data-v-0c1af965></i></p> "), _vm.productDataHoko ? _vm._ssrNode("<div class=\"wrapper-hoko\" data-v-0c1af965>", "</div>", [_vm._ssrNode("<div data-v-0c1af965>", "</div>", [_vm.productDataHoko.delivery_state ? _vm._ssrNode("<div class=\"mt-4 flex flex-row items-center\" data-v-0c1af965>", "</div>", [_vm._ssrNode((_vm.productDataHoko.delivery_state ? "<p class=\"title-info-orden\" data-v-0c1af965>\n                  Estado del proceso con Hoko:\n                </p>" : "<!---->") + " "), _c('el-tag', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "size": "medium",
      "color": _vm.saleStateHoko[_vm.productDataHoko.delivery_state.valueOf(_vm.str) - 1].color,
      "effect": "dark"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t(_vm.saleStateHoko[_vm.productDataHoko.delivery_state.valueOf(_vm.str) - 1].state)) + "\n                ")])], 2) : _vm._e(), _vm._ssrNode(" <div class=\"mt-4 flex flex-row items-center\" data-v-0c1af965><p class=\"title-info-orden\" data-v-0c1af965>Estado del proceso con Hoko:</p> <div class=\"ml-2\" data-v-0c1af965>" + (_vm.productDataHoko.courier_id == 21 ? "<span class=\"value-info-orden\" data-v-0c1af965>\n                    Mensajería MEDELLIN RR\n                  </span>" : _vm.productDataHoko.courier_id == 44 ? "<span class=\"value-info-orden\" data-v-0c1af965>\n                    Envía E-commerce CR\n                  </span>" : _vm.productDataHoko.courier_id == 45 ? "<span class=\"value-info-orden\" data-v-0c1af965>\n                    Envía E-commerce CR\n                  </span>" : "<!---->") + "</div></div>")], 2), _vm._ssrNode(" " + (this.orden && this.orden.mensajes ? "<div class=\"mt-4\" data-v-0c1af965><a" + _vm._ssrAttr("href", `https://hoko.com.co/admin/resources/orders/${parseInt(this.orden.mensajes[0].mensaje)}`) + " target=\"_blank\" class=\"btn_url\" data-v-0c1af965>\n                Ver detalle de la orden Hoko\n              </a></div>" : "<!---->"))], 2) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm.orden.venta ? _vm._ssrNode("<div class=\"content-info-orden\" data-v-0c1af965>", "</div>", [_vm._ssrNode("<div class=\"info-left\" data-v-0c1af965>", "</div>", [_vm._ssrNode((_vm.orden.venta.cupon && _vm.orden.venta.cupon !== 'null' ? "<p class=\"title-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('mcompra_cupon')) + "\n            ") + "<span class=\"value-info-orden\" data-v-0c1af965>" + _vm._ssrEscape(_vm._s(_vm.orden.venta.cupon)) + "</span></p>" : "<!---->") + " " + (_vm.orden.venta.descuento && _vm.orden.venta.descuento !== 'null' ? "<p class=\"title-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('footer_descuento')) + "\n            ") + "<span class=\"value-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n              - " + _vm._s(_vm._f("currency")(_vm.orden.venta.descuento)) + "\n            ") + "</span></p>" : "<!---->") + " " + (_vm.orden.venta.costo_envio && !_vm.stateHoko ? "<p class=\"title-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('mcompra_valorEnvio')) + "\n            ") + "<span class=\"value-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.orden.venta.costo_envio)) + "\n            ") + "</span></p>" : "<p class=\"title-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('mcompra_valorEnvio')) + "\n            ") + "<span class=\"value-info-orden\" data-v-0c1af965>\n              Envío por Hoko (Pago contraentrega)\n            </span></p>") + " " + (_vm.orden.venta.total ? "<p class=\"title-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('mcompra_totalOrden')) + "\n            ") + "<span class=\"value-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.orden.venta.total)) + "\n            ") + "</span></p>" : "<!---->") + " " + (_vm.choicePayment ? "<p class=\"title-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('mcompra_metodoPago')) + "\n            ") + "<span class=\"value-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t(`${_vm.choicePayment.title}`)) + "\n            ") + "</span></p>" : "<!---->") + " " + (_vm.fechaState ? "<p class=\"title-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('mcompra_fechaCompra')) + "\n            ") + "<span class=\"value-info-orden\" data-v-0c1af965>" + _vm._ssrEscape(_vm._s(this.fechaState)) + "</span></p>" : "<!---->") + " " + (_vm.horaState ? "<p class=\"title-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('mcompra_horaCompra')) + "\n            ") + "<span class=\"value-info-orden\" data-v-0c1af965>" + _vm._ssrEscape(_vm._s(this.horaState)) + "</span></p>" : "<!---->") + " <p class=\"title-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('mcompra_pcanaldeVenta')) + "\n            ") + "<span" + _vm._ssrStyle(null, `color: ${_vm.channelBuy[parseInt(_vm.orden.venta.canal) - 1].color};`, null) + " data-v-0c1af965>" + _vm._ssrEscape("\n              " + _vm._s(_vm.channelBuy[parseInt(_vm.orden.venta.canal) - 1].name) + "\n            ") + "</span></p> "), _vm.orden.venta.delivery_status_id !== null ? _vm._ssrNode("<div class=\"mt-4 flex flex-row items-center\" data-v-0c1af965>", "</div>", [_vm._ssrNode("<p class=\"title-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('mcompra_pcCanalEnvio')) + "\n            ") + "</p> "), _c('el-tag', {
    staticClass: "tag-state",
    attrs: {
      "size": "medium",
      "effect": "dark",
      "color": _vm.shippingState[_vm.orden.venta.delivery_status_id - 1].color
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t(_vm.shippingState[_vm.orden.venta.delivery_status_id - 1].state)) + "\n            ")])], 2) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-state-top\" data-v-0c1af965>", "</div>", [_vm._ssrNode("<div class=\"content-item-state\" data-v-0c1af965>", "</div>", [_vm._ssrNode("<p class=\"title-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('mcompra_estadoCompra')) + "\n            ") + "</p> "), _c('el-tag', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "color": _vm.choiceState.color,
      "effect": "dark"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t(`${_vm.choiceState.title}`)) + "\n            ")])], 2), _vm._ssrNode(" <p class=\"title-info-orden\" data-v-0c1af965>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('mcompra_ultimaActualizacion')) + "\n            ") + "<span class=\"value-info-orden\" data-v-0c1af965>" + _vm._ssrEscape(_vm._s(_vm.orden.venta.fecha)) + "</span></p>")], 2)], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-sections\" data-v-0c1af965>", "</div>", [_c('client-only', [_c('el-collapse', [_c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('mcompra_infoComprador'),
      "name": "1"
    }
  }, [_vm.orden.usuario == 30866 ? _c('div', {
    staticClass: "content-info-buyer"
  }, [_vm.tempData && _vm.tempData.state ? _c('div', {
    staticClass: "content-info-buyer"
  }, [_vm.tempData && _vm.tempData.dataCustomer.nombre ? _c('p', {
    staticClass: "name"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('mcompra_nombre')) + "\n                    "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                      " + _vm._s(_vm.tempData.dataCustomer.nombre) + "\n                    ")])]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")]), _vm._v(" "), _vm.tempData && _vm.tempData.dataCustomer.phone ? _c('p', {
    staticClass: "name"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('footer_formIdenti')) + "\n                    "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                      " + _vm._s(_vm.tempData.dataCustomer.phone) + "\n                    ")])]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")]), _vm._v(" "), _vm.tempData && _vm.tempData.dataCustomer.correo ? _c('p', {
    staticClass: "name"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('footer_formCorreo')) + "\n                    "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                      " + _vm._s(_vm.tempData.dataCustomer.correo) + "\n                    ")])]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")]), _vm._v(" "), _vm.tempData && _vm.tempData.dataCustomer.identificacion ? _c('p', {
    staticClass: "name"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('footer_formPhone')) + "\n                    "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                      " + _vm._s(_vm.tempData.dataCustomer.identificacion) + "\n                    ")])]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")]), _vm._v(" "), _vm.tempData && _vm.tempData.dataCustomer.ciudad ? _c('p', {
    staticClass: "name"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('footer_formDepartamento')) + "\n                    "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                      " + _vm._s(_vm.tempData.dataCustomer.ciudad) + "\n                    ")])]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")]), _vm._v(" "), _vm.tempData && _vm.tempData.dataCustomer.barrio ? _c('p', {
    staticClass: "name"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('footer_formBarrio')) + "\n                    "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                      " + _vm._s(_vm.tempData.dataCustomer.barrio) + "\n                    ")])]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")]), _vm._v(" "), _c('p', {
    staticClass: "address"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('mcompra_direccion')) + "\n                    "), _vm.tempData && _vm.tempData.dataCustomer.direccion ? _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                      " + _vm._s(_vm.tempData.dataCustomer.direccion) + "\n                    ")]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")])])]) : _vm._l(_vm.tempData.dataCustomer, function (items, index) {
    return _c('div', {
      key: index
    }, [items.textInput && items.value ? _c('p', {
      staticClass: "name"
    }, [_vm._v("\n                    " + _vm._s(items.textInput) + "\n                    "), _c('span', {
      staticClass: "value-data"
    }, [_vm._v(_vm._s(items.value))])]) : _vm._e()]);
  })], 2) : _vm.orden.venta.usuario && _vm.orden.usuario != 30866 ? _c('div', {
    staticClass: "content-info-buyer"
  }, [_c('p', {
    staticClass: "name"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_nombre')) + "\n                  "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(_vm.orden.venta.usuario.nombre) + "\n                  ")])]), _vm._v(" "), this.cityComprador && this.cityComprador.departamento ? _c('p', {
    staticClass: "name"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_departamento')) + "\n                  "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(this.cityComprador.departamento.nombre_dep) + "\n                  ")])]) : _vm._e(), _vm._v(" "), this.cityComprador && this.cityComprador.nombre_ciu ? _c('p', {
    staticClass: "name"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_ciudad')) + "\n                  "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(this.cityComprador.nombre_ciu) + "\n                  ")])]) : _vm._e(), _vm._v(" "), this.direccion_entrega && this.direccion_entrega.value && this.direccion_entrega.value.barrio ? _c('p', {
    staticClass: "name"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_barrio')) + "\n                  "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(this.direccion_entrega.value.barrio) + "\n                  ")])]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "address"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_direccion')) + "\n                  "), this.direccion_entrega && this.direccion_entrega.value && this.direccion_entrega.value.direccion ? _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(this.direccion_entrega.value.direccion) + "\n                  ")]) : _vm.orden && _vm.orden.venta.usuario.user_info[0].direccion ? _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(_vm.orden.venta.usuario.user_info[0].direccion) + "\n                  ")]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")])]), _vm._v(" "), _c('p', {
    staticClass: "telephone"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_telefono')) + "\n                  "), _vm.orden.venta.usuario.user_info[0].telefono != null && _vm.orden.venta.usuario.user_info[0].telefono != 'null' && _vm.orden.venta.usuario.user_info[0].telefono != '' ? _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(_vm.orden.venta.usuario.user_info[0].telefono) + "\n                  ")]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")])]), _vm._v(" "), _c('p', {
    staticClass: "email-address"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_correo')) + "\n                  "), _vm.orden.venta.usuario.email ? _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(_vm.orden.venta.usuario.email) + "\n                  ")]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")])]), _vm._v(" "), _c('p', {
    staticClass: "messege"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_mensaje')) + "\n                  "), _vm.orden.mensajes.length ? _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(_vm.orden.mensajes[0].mensaje) + "\n                  ")]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")])])]) : _vm._e()]), _vm._v(" "), _c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('mcompra_infoVendedor'),
      "name": "2"
    }
  }, [_c('div', {
    staticClass: "content-info-buyer"
  }, [_vm.city && _vm.city.departamento && _vm.city.departamento.nombre_dep ? _c('p', {
    staticClass: "city"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_departamento')) + "\n                  "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(_vm.city.departamento.nombre_dep) + "\n                  ")])]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "city"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_ciudad')) + "\n                  "), _vm.city && _vm.city.nombre_ciu ? _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(_vm.city.nombre_ciu) + "\n                  ")]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")])]), _vm._v(" "), _c('p', {
    staticClass: "address"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_direccion')) + "\n                  "), _vm.dataStore.geolocalizacion.length ? _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(_vm.dataStore.geolocalizacion[0].direccion) + "\n                  ")]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")])]), _vm._v(" "), _c('p', {
    staticClass: "telephone"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_telefono')) + "\n                  "), _vm.dataStore.tienda.telefono ? _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(_vm.dataStore.tienda.telefono) + "\n                  ")]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")])]), _vm._v(" "), _c('p', {
    staticClass: "owner"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_nombreTienda')) + "\n                  "), _vm.dataStore.tienda.nombre ? _c('span', {
    staticClass: "value-data"
  }, [_vm._v("\n                    " + _vm._s(_vm.dataStore.tienda.nombre) + "\n                  ")]) : _c('span', {
    staticClass: "value-data"
  }, [_vm._v("N/A")])])])]), _vm._v(" "), _vm.dataTransporter ? _c('el-collapse-item', {
    attrs: {
      "title": _vm.$t('mcompra_infoTransporter'),
      "name": "3"
    }
  }, [_c('div', {
    staticClass: "content-info-buyer"
  }, [_vm.dataTransporter && _vm.dataTransporter.name ? _c('p', {
    staticClass: "city"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_nombre')) + "\n                  "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v(_vm._s(_vm.dataTransporter.name))])]) : _vm._e(), _vm._v(" "), _vm.dataTransporter && _vm.dataTransporter.guide ? _c('p', {
    staticClass: "city"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_numeroGuia')) + "\n                  "), _c('span', {
    staticClass: "value-data"
  }, [_vm._v(_vm._s(_vm.dataTransporter.guide))])]) : _vm._e(), _vm._v(" "), _vm.dataTransporter && _vm.dataTransporter.link ? _c('p', {
    staticClass: "city"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('mcompra_linkGuia')) + "\n                  "), _c('a', {
    staticClass: "value-data",
    attrs: {
      "href": _vm.dataTransporter.link,
      "target": "_blank"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.dataTransporter.link) + "\n                  ")])]) : _vm._e()])]) : _vm._e()], 1)], 1)], 1)], 2) : _vm._e()], 2)]);
};
var Ko_miCompra_1vue_type_template_id_0c1af965_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/miCompra/Ko-miCompra-1.vue?vue&type=template&id=0c1af965&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// EXTERNAL MODULE: ./mixins/states.vue + 2 modules
var states = __webpack_require__(262);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/miCompra/Ko-miCompra-1.vue?vue&type=script&lang=js&





/* harmony default export */ var Ko_miCompra_1vue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */], states["a" /* default */]],
  name: 'Ko-miCompra-G',
  props: {
    dataStore: Object,
    orden: Object
  },
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },
  mounted() {
    if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
      this.$fb.setPixelId(this.facebookPixel.pixel_facebook);
      this.$fb.track('PageView');
      this.$fb.enable();
    }
    this.routePrev();
    this.setCity();
    this.clearCart();
    if (this.orden && this.orden.message) {
      this.errorMessage();
    }
    if (this.orden && this.orden.venta && this.orden.venta.usuario) {
      this.numOrden = this.orden.venta.id;
      this.cedula = this.orden.venta.usuario.identificacion;
      if (this.dataHoko && this.orden.productos.length == 0) {
        this.getproductHoko();
        this.stateHoko = true;
      }
    } else {
      this.numOrden = '';
      this.cedula = '';
    }
    if (this.orden && this.orden.venta) {
      this.eventFacebookPixel();
      if (this.orden.venta.created_at) {
        this.shippingAddress();
        let result = this.orden.venta.created_at.split(' ');
        this.fechaState = result[0];
        this.horaState = result[1];
      }
      this.setUser();
      this.setTransportadora();
      this.$store.dispatch('GET_CITIES');
    }
  },
  destroyed() {
    this.city = {};
  },
  data() {
    return {
      dataTransporter: '',
      mensajeWa: '',
      fechaState: '',
      horaState: '',
      toggleArrow: false,
      numOrden: '',
      cedula: '',
      city: {},
      cityComprador: {},
      productDataHoko: {},
      stateHoko: false,
      direccion_entrega: {},
      tempData: {
        state: false,
        dataCustomer: {}
      }
    };
  },
  computed: {
    dataHoko() {
      return this.$store.state.dataHoko;
    },
    choicePayment() {
      return this.payments.find(payment => payment.id === this.orden.venta.metodo_pago);
    },
    choiceState() {
      return this.statusUpdate.find(payment => payment.id === this.orden.venta.estado);
    },
    cities() {
      return this.$store.state.cities;
    },
    facebookPixel() {
      return this.$store.state.analytics_tagmanager;
    }
  },
  methods: {
    setUser() {
      if (this.orden.usuario == 30866) {
        if (this.orden.mensajes && this.orden.mensajes.length > 0) {
          this.tempData.dataCustomer = JSON.parse(this.orden.venta.comentario);
          if (this.tempData.dataCustomer.nombre && this.tempData.dataCustomer.phone && this.tempData.dataCustomer.identificacion && this.tempData.dataCustomer.direccion && this.tempData.dataCustomer.barrio && this.tempData.dataCustomer.ciudad) {
            this.tempData.state = true;
          } else {
            this.tempData.state = false;
          }
        } else {
          this.tempData.dataCustomer = null;
          this.tempData.state = false;
        }
      }
    },
    setTransportadora() {
      if (this.orden.venta.transportadora !== null) {
        this.dataTransporter = JSON.parse(this.orden.venta.transportadora);
      }
    },
    getproductHoko() {
      let id = parseInt(this.orden.mensajes[0].mensaje);
      let config = {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${this.dataHoko.token}`,
          'Access-Control-Allow-Origin': '*'
        }
      };
      let url = 'https://hoko.com.co/api/member/order/';
      external_axios_default.a.get(`${url}${id}`, config).then(response => {
        this.productDataHoko = response.data;
      });
    },
    shippingAddress() {
      this.direccion_entrega = JSON.parse(this.orden && this.orden.venta && this.orden.venta.direccion_entrega ? this.orden.venta.direccion_entrega : null);
      if (this.cities && this.direccion_entrega) {
        if (this.direccion_entrega.value) {
          this.cityComprador = this.cities.find(city => {
            city.id === this.direccion_entrega.value.ciudad_id;
          });
        }
      }
    },
    clearCart() {
      let domain = this.$route.fullPath;
      let result = domain.split('&');
      if (result[result.length - 1] == 'clearCart=true') {
        this.$store.commit('DELETE_ALL_ITEMS_CART');
        this.$store.commit('UPDATE_CONTENT_CART');
      }
    },
    routePrev() {
      if (this.$route.path == '/') {
        this.toggleArrow = false;
      } else {
        this.toggleArrow = true;
      }
    },
    submitOrden() {
      this.$refs.observer.validate().then(response => {
        if (response) {
          this.$router.replace({
            query: {}
          });
          return external_axios_default.a.get(`${this.$store.state.urlKomercia}/api/orden/${this.dataStore.tienda.id_tienda}/${this.numOrden}`, {
            headers: {
              'content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }).then(response => {
            if (this.numOrden == response.data.data.venta.id && this.cedula == response.data.data.venta.usuario.identificacion) {
              this.$emit('update', response.data.data);
              this.setCity();
              this.$emit('update', response.data.data);
            } else {
              this.$emit('update', {});
              this.errorMessageTwo();
            }
          }).catch(() => {
            this.$emit('update', {});
            this.errorMessageTwo();
          });
        }
      }).catch(() => {
        this.errorMessageTwo();
      });
    },
    eventFacebookPixel() {
      let array = [];
      let content = [];
      this.orden.productos.map(element => {
        if (element) {
          array.push(`${element.producto.id}`);
          let temp = {
            id: `${element.producto.id}`,
            quantity: element.unidades
          };
          content.push(temp);
        }
      });
      if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
        window.fbq('track', 'Purchase', {
          content_type: 'product',
          content_ids: array,
          contents: content,
          value: this.orden.venta.total,
          currency: this.dataStore.tienda.moneda,
          description: `Orden: ${this.numOrden}, Estado de la venta: ${this.choiceState.ref}`
        });
      }
    },
    setCity() {
      if (this.cities) {
        this.city = this.cities.find(city => city.id === this.dataStore.tienda.ciudad);
      }
    },
    errorMessage() {
      this.$message.error({
        dangerouslyUseHTMLString: true,
        message: '<strong>Esta orden no existe</strong><p>El número de la orden o el usuario son incorrectos</p>',
        duration: 4000
      });
    },
    errorMessageTwo() {
      this.$message.error({
        dangerouslyUseHTMLString: true,
        message: '<strong>Esta orden no existe</strong><p>El número de la orden o la cédula son incorrectos</p>',
        duration: 4000
      });
    }
  },
  watch: {
    '$route.path'(value) {
      if (value == '/') {
        this.toggleArrow = false;
      } else {
        this.toggleArrow = true;
      }
    },
    cities() {
      this.setCity();
      this.shippingAddress();
    },
    orden() {
      if (this.orden.venta) {
        if (this.orden.venta.created_at) {
          this.eventFacebookPixel();
          this.shippingAddress();
          this.setTransportadora();
          this.setUser();
          let result = this.orden.venta.created_at.split(' ');
          this.fechaState = result[0];
          this.horaState = result[1];
        }
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
// CONCATENATED MODULE: ./components/miCompra/Ko-miCompra-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var miCompra_Ko_miCompra_1vue_type_script_lang_js_ = (Ko_miCompra_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/miCompra/Ko-miCompra-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(463)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  miCompra_Ko_miCompra_1vue_type_script_lang_js_,
  Ko_miCompra_1vue_type_template_id_0c1af965_scoped_true_render,
  Ko_miCompra_1vue_type_template_id_0c1af965_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "0c1af965",
  "78feb10d"
  
)

/* harmony default export */ var Ko_miCompra_1 = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/micompra.vue?vue&type=script&lang=js&



/* harmony default export */ var micompravue_type_script_lang_js_ = ({
  name: 'K0-indexMiCompraG',
  components: {
    KoMicompra: Ko_miCompra_1
  },
  asyncData({
    route,
    store
  }) {
    if (route.query.orden) {
      return external_axios_default.a.get(`${store.state.urlKomercia}/api/orden/${store.state.tienda.id_tienda}/${route.query.orden}`, {
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(response => {
        if (route.query.orden == response.data.data.venta.id && route.query.usuario == response.data.data.venta.usuario.identificacion) {
          const orden = response.data.data;
          return {
            orden
          };
        } else {
          const orden = {};
          orden.message = 'No existe esta orden';
          return {
            orden
          };
        }
      }).catch(() => {
        const orden = {};
        orden.message = 'No existe esta orden';
        return {
          orden
        };
      });
    } else {
      const orden = {};
      return {
        orden
      };
    }
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['template', 'dataStore'])
  },
  methods: {
    setDataOrder(value) {
      this.orden = value;
    }
  }
});
// CONCATENATED MODULE: ./pages/micompra.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_micompravue_type_script_lang_js_ = (micompravue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/micompra.vue





/* normalize component */

var micompra_component = Object(componentNormalizer["a" /* default */])(
  pages_micompravue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3c79c7c0"
  
)

/* harmony default export */ var micompra = __webpack_exports__["default"] = (micompra_component.exports);

/***/ })

};;
//# sourceMappingURL=micompra.js.map