exports.ids = [121];
exports.modules = {

/***/ 1159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/_productdetails/OptTab.vue?vue&type=template&id=29e69db7&scoped=true&
var render = function render() {
  var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-opt-tab",
    style: [_vm.settingByTemplate14[0].settingsGeneral, _vm.settingByTemplate14[0].detailsProducts, {
      '--font-style-1': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate14[0]) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.settingsGeneral) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.fount_1) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Poppins'
    }]
  }, [_c('el-collapse', {
    on: {
      "change": _vm.handleChange
    },
    model: {
      value: _vm.activeNames,
      callback: function ($$v) {
        _vm.activeNames = $$v;
      },
      expression: "activeNames"
    }
  }, [_c('el-collapse-item', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text}; border-color:${_vm.settingByTemplate14[0].detailsProducts.color_border}`,
    attrs: {
      "title": _vm.$t('productdetail_description'),
      "name": "1"
    }
  }, [_vm.data.info.descripcion ? _c('div', {
    staticClass: "editor"
  }, [_c('el-tiptap', {
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
  })], 1) : _vm._e()]), _vm._v(" "), _c('el-collapse-item', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text}; border-color:${_vm.settingByTemplate14[0].detailsProducts.color_border}`,
    attrs: {
      "title": _vm.$t('productdetail_opcionesPago'),
      "name": "2"
    }
  }, [_c('div', {
    staticClass: "item-content opcpago"
  }, [_c('ul', [_vm.mediospago.consignacion == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_consignacionBancaria')) + "\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_consignacionBancariaMsg')) + "\n            ")])]) : _vm._e(), _vm._v(" "), _vm.mediospago.contraentrega == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PagoContra')) + "\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PagoContraMsg')) + "\n            ")])]) : _vm._e(), _vm._v(" "), _vm.mediospago.convenir == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_pagoConvenir')) + "\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_pagoConvenirMsg')) + "\n            ")])]) : _vm._e(), _vm._v(" "), _vm.mediospago.credibanco == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_ConsignacionCredibanco')) + "\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_ConsignacionCredibancoMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.daviplata == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_Consignaciondaviplata')) + "\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_ConsignaciondaviplataMsg')) + "\n            ")]), _vm._v(" "), _c('img', {
    staticClass: "logo-pasarela-daviplata",
    attrs: {
      "src": "https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333767/Templates%20Modos%20de%20pago/5c89c897e1917d9209a762af_davi_qn90y9.png",
      "alt": "logo daviPlata"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.mediospago.efecty == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_ConsignacionEfecty')) + "\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_ConsignacionEfectyMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.mercado_pago == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaMercado')) + "\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaMercadoMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.nequi == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_Consignacionnequi')) + "\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_ConsignacionnequiMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.payco == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaEpayco')) + "\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaEpaycoMsg')) + "\n            ")]), _vm._v(" "), _c('img', {
    staticClass: "logo-pasarela-payco",
    attrs: {
      "src": "https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png",
      "alt": "Pasarela de pagos epayco"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.mediospago.payu == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaPayu')) + "\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.wompi == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_Consignacionwompi')) + "\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n            ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.wepay4u == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              WePay4U\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('text_pago_WePay4U')) + "\n            ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.tu_compra == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              Tucompra\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('text_pago_Tucompra')) + "\n            ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e(), _vm._v(" "), _vm.mediospago.flow == 1 ? _c('li', [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              Tucompra\n            ")]), _vm._v(" "), _c('p', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('text_pago_flowInfo')) + "\n            ")]), _vm._v(" "), _c('a', {
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
  })])]) : _vm._e()])])]), _vm._v(" "), _c('el-collapse-item', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text}; border-color:${_vm.settingByTemplate14[0].detailsProducts.color_border}`,
    attrs: {
      "title": _vm.$t('productdetail_opinionesEnvio'),
      "name": "3"
    }
  }, [_c('div', {
    staticClass: "item-content opcenvio"
  }, [this.envios.envio_metodo ? _c('div', {
    staticClass: "deliverys section"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h3', {
    staticClass: "title-section",
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_opinionesEnvio')) + "\n            ")])]), _vm._v(" "), this.envios.envio_metodo === 'precio_ciudad' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', {
    staticClass: "capitalize",
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              • " + _vm._s(this.envios.envio_metodo.replace('_', ' por ')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "description-method",
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg1')) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envios.envio_metodo === 'tarifa_plana' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', {
    staticClass: "capitalize",
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(this.envios.envio_metodo.replace('_', ' ')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "description-method",
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg2')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "price",
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('cart_precio')) + "\n              " + _vm._s(_vm._f("currency")(this.envios.valor, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envios.envio_metodo === 'precio' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_precioTotalCompra')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "description-method",
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_precioTotalCompraMsg')) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envios.envio_metodo === 'gratis' ? _c('div', {
    staticClass: "wrapper-method"
  }, [_c('h4', {
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_gratis')) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "description-method",
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_subtext};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('productdetail_gratisMsg')) + "\n            ")])]) : _vm._e(), _vm._v(" "), this.envios.envio_metodo === 'sinEnvio' ? _c('div', {
    staticClass: "wrapper-method",
    style: `color: ${_vm.settingByTemplate14[0].detailsProducts.color_text};`
  }, [_c('p', {
    staticClass: "description-method"
  }, [_vm._v("Pasas a recoger tu compra")])]) : _vm._e()]) : _vm._e()])])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/_productdetails/OptTab.vue?vue&type=template&id=29e69db7&scoped=true&

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(67);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/_productdetails/OptTab.vue?vue&type=script&lang=js&


/* harmony default export */ var OptTabvue_type_script_lang_js_ = ({
  mixins: [formatCurrent["a" /* default */], elemenTiptap["a" /* default */]],
  props: {
    dataStore: Object,
    data: {},
    envio: {},
    settingByTemplate14: Array
  },
  data() {
    return {
      activeNames: ['1']
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
  methods: {
    handleChange(val) {
      // console.log(val);
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
// CONCATENATED MODULE: ./components/template14/_productdetails/OptTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_OptTabvue_type_script_lang_js_ = (OptTabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/_productdetails/OptTab.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(955)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_OptTabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "29e69db7",
  "5b7ffb1a"
  
)

/* harmony default export */ var OptTab = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(956);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7c9f91fc", content, true, context)
};

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

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_29e69db7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_29e69db7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_29e69db7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_29e69db7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptTab_vue_vue_type_style_index_0_id_29e69db7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editor[data-v-29e69db7]{color:transparent;width:100%}.editor[data-v-29e69db7] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-29e69db7] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-29e69db7] .el-tiptap-editor__content h1{font-family:var(--font-style-1);font-size:2em}.editor[data-v-29e69db7] .el-tiptap-editor__content h2{font-family:var(--font-style-1);font-size:1.5em}.editor[data-v-29e69db7] .el-tiptap-editor__content h3{font-family:var(--font-style-1);font-size:1.17em}.editor[data-v-29e69db7] .el-tiptap-editor__content h4{font-family:var(--font-style-1);font-size:1.12em}.editor[data-v-29e69db7] .el-tiptap-editor__content h5{font-family:var(--font-style-1);font-size:.83em}.editor[data-v-29e69db7] .el-tiptap-editor__content blockquote,.editor[data-v-29e69db7] .el-tiptap-editor__content code,.editor[data-v-29e69db7] .el-tiptap-editor__content em,.editor[data-v-29e69db7] .el-tiptap-editor__content li,.editor[data-v-29e69db7] .el-tiptap-editor__content ol,.editor[data-v-29e69db7] .el-tiptap-editor__content p,.editor[data-v-29e69db7] .el-tiptap-editor__content pre,.editor[data-v-29e69db7] .el-tiptap-editor__content s,.editor[data-v-29e69db7] .el-tiptap-editor__content span,.editor[data-v-29e69db7] .el-tiptap-editor__content strong,.editor[data-v-29e69db7] .el-tiptap-editor__content ul{font-family:var(--font-style-1)}.editor[data-v-29e69db7] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-29e69db7] .el-popper.el-tiptap-image-popper{display:none}.item-content[data-v-29e69db7]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;padding-bottom:4px;width:100%}.content-opt-tab[data-v-29e69db7] .el-collapse{border-bottom:transparent;border-top:transparent;width:100%}.content-opt-tab[data-v-29e69db7] .el-collapse-item__wrap{background-color:transparent;border-bottom:transparent;will-change:height}.content-opt-tab[data-v-29e69db7] .el-collapse-item__header{background-color:transparent;border-bottom:transparent;color:currentColor;font-family:var(--font-style-1)!important;font-size:16px;font-weight:600}.content-opt-tab[data-v-29e69db7] .el-collapse-item__header.is-active{border-bottom:none}.content-opt-tab[data-v-29e69db7] .el-collapse-item__arrow{color:currentColor}h3[data-v-29e69db7]{align-self:flex-start;color:currentColor;font-size:15px;font-weight:600;text-transform:uppercase}h3[data-v-29e69db7],h4[data-v-29e69db7]{font-family:var(--font-style-1)!important}h4[data-v-29e69db7]{align-items:flex-start;color:currentColor;display:flex;flex-direction:column;font-size:15px;font-weight:600;justify-content:center;line-height:1.42857143;margin-bottom:5px;width:100%}li p[data-v-29e69db7]{color:currentColor;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}.description-method[data-v-29e69db7],.price[data-v-29e69db7],li p[data-v-29e69db7]{font-family:var(--font-style-1)!important}.description-method[data-v-29e69db7],.price[data-v-29e69db7]{color:currentColor;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}img[data-v-29e69db7]{margin-top:15px;max-width:300px;width:30%}@media (min-width:300px){.content-opt-tab[data-v-29e69db7]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}}@media (min-width:425px){.head-content[data-v-29e69db7]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-bottom:40px}}@media (min-width:768px){.content-opt-tab[data-v-29e69db7]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;margin-top:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=121.js.map