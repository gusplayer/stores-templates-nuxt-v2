exports.ids = [253];
exports.modules = {

/***/ 1263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productdetails/OptAcordion.vue?vue&type=template&id=2590d9a6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-acordion"
  }, [_vm._ssrNode((_vm.contentDescription ? "<button class=\"accordion\" data-v-2590d9a6>" + _vm._ssrEscape("\n    " + _vm._s(_vm.$t('productdetail_description')) + "\n  ") + "</button>" : "<!---->") + " "), _vm._ssrNode("<div class=\"panel\" data-v-2590d9a6>", "</div>", [_vm.contentDescription ? _vm._ssrNode("<div class=\"editor\" data-v-2590d9a6>", "</div>", [_c('el-tiptap', {
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
      value: _vm.contentDescription,
      callback: function ($$v) {
        _vm.contentDescription = $$v;
      },
      expression: "contentDescription"
    }
  })], 1) : _vm._e()]), _vm._ssrNode(" <button class=\"accordion\" data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_opcionesPago'))) + "</button> "), _vm._ssrNode("<div class=\"panel\" data-v-2590d9a6>", "</div>", [_vm._ssrNode("<ul data-v-2590d9a6>", "</ul>", [_vm._ssrNode((_vm.mediospago.consignacion == 1 ? "<li data-v-2590d9a6><h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancaria'))) + "</h4> <p data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancariaMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.contraentrega == 1 ? "<li data-v-2590d9a6><h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContra'))) + "</h4> <p data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContraMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.convenir == 1 ? "<li data-v-2590d9a6><h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenir'))) + "</h4> <p data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenirMsg'))) + "</p></li>" : "<!---->") + " "), _vm.mediospago.credibanco == 1 ? _vm._ssrNode("<li data-v-2590d9a6>", "</li>", [_vm._ssrNode("<h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionCredibanco'))) + "</h4> <p data-v-2590d9a6>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_ConsignacionCredibancoMsg')) + "\n        ") + "</p> "), _vm._ssrNode("<a href=\"https://www.credibanco.com/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-2590d9a6>", "</a>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.img1,
      expression: "img1"
    }],
    staticClass: "logo-pasarela",
    attrs: {
      "alt": "logo Credibanco"
    }
  }, [])])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.mediospago.daviplata == 1 ? _vm._ssrNode("<li data-v-2590d9a6>", "</li>", [_vm._ssrNode("<h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignaciondaviplata'))) + "</h4> <p data-v-2590d9a6>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_ConsignaciondaviplataMsg')) + "\n        ") + "</p> "), _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.img2,
      expression: "img2"
    }],
    staticClass: "logo-pasarela-daviplata",
    attrs: {
      "alt": "logo daviPlata"
    }
  }, [])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.mediospago.efecty == 1 ? _vm._ssrNode("<li data-v-2590d9a6>", "</li>", [_vm._ssrNode("<h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfecty'))) + "</h4> <p data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfectyMsg'))) + "</p> "), _vm._ssrNode("<a href=\"https://www.efecty.com.co/web/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-2590d9a6>", "</a>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.img3,
      expression: "img3"
    }],
    staticClass: "logo-pasarela-efecty",
    attrs: {
      "alt": "logo efecty"
    }
  }, [])])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.mediospago.mercado_pago == 1 ? _vm._ssrNode("<li data-v-2590d9a6>", "</li>", [_vm._ssrNode("<h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaMercado'))) + "</h4> <p data-v-2590d9a6>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_PasarelaMercadoMsg')) + "\n        ") + "</p> "), _vm._ssrNode("<a href=\"https://www.mercadopago.com\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-2590d9a6>", "</a>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.img4,
      expression: "img4"
    }],
    staticClass: "logo-pasarela-daviplata",
    attrs: {
      "alt": "logo mercadopago"
    }
  }, [])])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.mediospago.nequi == 1 ? _vm._ssrNode("<li data-v-2590d9a6>", "</li>", [_vm._ssrNode("<h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionnequi'))) + "</h4> <p data-v-2590d9a6>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_ConsignacionnequiMsg')) + "\n        ") + "</p> "), _vm._ssrNode("<a href=\"https://www.nequi.com.co/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-2590d9a6>", "</a>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.img5,
      expression: "img5"
    }],
    staticClass: "logo-pasarela-daviplata",
    attrs: {
      "alt": "logo nequi"
    }
  }, [])])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.mediospago.payco == 1 ? _vm._ssrNode("<li data-v-2590d9a6>", "</li>", [_vm._ssrNode("<h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaEpayco'))) + "</h4> <p data-v-2590d9a6>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_PasarelaEpaycoMsg')) + "\n        ") + "</p> "), _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.img6,
      expression: "img6"
    }],
    staticClass: "logo-pasarela-payco",
    attrs: {
      "alt": "Pasarela de pagos epayco"
    }
  }, [])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.mediospago.payu == 1 ? _vm._ssrNode("<li data-v-2590d9a6>", "</li>", [_vm._ssrNode("<h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaPayu'))) + "</h4> <p data-v-2590d9a6>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n        ") + "</p> "), _vm._ssrNode("<a href=\"https://www.payulatam.com/co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-2590d9a6>", "</a>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.img7,
      expression: "img7"
    }],
    staticClass: "logo-pasarela-payu",
    attrs: {
      "alt": "PayU",
      "border": "0"
    }
  }, [])])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.mediospago.wompi == 1 ? _vm._ssrNode("<li data-v-2590d9a6>", "</li>", [_vm._ssrNode("<h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionwompi'))) + "</h4> <p data-v-2590d9a6>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n        ") + "</p> "), _vm._ssrNode("<a href=\"https://wompi.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-2590d9a6>", "</a>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.img8,
      expression: "img8"
    }],
    staticClass: "logo-pasarela-wompi",
    attrs: {
      "alt": "wompi",
      "border": "0"
    }
  }, [])])], 2) : _vm._e()], 2)]), _vm._ssrNode(" " + (_vm.envios.envio_metodo ? "<button class=\"accordion\" data-v-2590d9a6>" + _vm._ssrEscape("\n    " + _vm._s(_vm.$t('productdetail_opinionesEnvio')) + "\n  ") + "</button>" : "<!---->") + " " + (_vm.envios.envio_metodo ? "<div class=\"deliverys section panel\" data-v-2590d9a6><div class=\"content\" data-v-2590d9a6><h3 class=\"title-section\" data-v-2590d9a6>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('productdetail_opinionesEnvio')) + "\n      ") + "</h3></div> " + (_vm.envios.envio_metodo === 'precio_ciudad' ? "<div class=\"wrapper-method\" data-v-2590d9a6><h4 class=\"capitalize\" data-v-2590d9a6>" + _vm._ssrEscape("\n        • " + _vm._s(_vm.envios.envio_metodo.replace('_', ' por ')) + "\n      ") + "</h4> <p class=\"description-method\" data-v-2590d9a6>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg1')) + "\n      ") + "</p></div>" : "<!---->") + " " + (_vm.envios.envio_metodo === 'tarifa_plana' ? "<div class=\"wrapper-method\" data-v-2590d9a6><h4 class=\"capitalize\" data-v-2590d9a6>" + _vm._ssrEscape("\n        " + _vm._s(_vm.envios.envio_metodo.replace('_', ' ')) + "\n      ") + "</h4> <p class=\"description-method\" data-v-2590d9a6>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg2')) + "\n      ") + "</p> <p class=\"price\" data-v-2590d9a6>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('cart_precio')) + "\n        " + _vm._s(_vm._f("currency")(_vm.envios.valor, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n      ") + "</p></div>" : "<!---->") + " " + (_vm.envios.envio_metodo === 'precio' ? "<div class=\"wrapper-method\" data-v-2590d9a6><h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_precioTotalCompra'))) + "</h4> <p class=\"description-method\" data-v-2590d9a6>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('productdetail_precioTotalCompraMsg')) + "\n      ") + "</p></div>" : "<!---->") + " " + (_vm.envios.envio_metodo === 'gratis' ? "<div class=\"wrapper-method\" data-v-2590d9a6><h4 data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_gratis'))) + "</h4> <p class=\"description-method\" data-v-2590d9a6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_gratisMsg'))) + "</p></div>" : "<!---->") + " " + (_vm.envios.envio_metodo === 'sinEnvio' ? "<div class=\"wrapper-method\" data-v-2590d9a6><p class=\"description-method\" data-v-2590d9a6>Pasas a recoger tu compra</p></div>" : "<!---->") + "</div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/_productdetails/OptAcordion.vue?vue&type=template&id=2590d9a6&scoped=true&

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(49);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productdetails/OptAcordion.vue?vue&type=script&lang=js&


/* harmony default export */ var OptAcordionvue_type_script_lang_js_ = ({
  filters: {
    capitalize(value) {
      if (value) {
        value = value.toLowerCase();
        return value.replace(/^\w|\s\w/g, l => l.toUpperCase());
      }
    }
  },
  mixins: [elemenTiptap["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    envio: {
      type: Object,
      required: true
    }
  },
  data() {
    var _this$data, _this$data$info;
    return {
      contentDescription: (_this$data = this.data) === null || _this$data === void 0 ? void 0 : (_this$data$info = _this$data.info) === null || _this$data$info === void 0 ? void 0 : _this$data$info.descripcion,
      medioEnvio: '',
      envioproducto: '',
      img1: 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335270/Templates%20Modos%20de%20pago/Credibanco_lprsof.png',
      img2: 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333767/Templates%20Modos%20de%20pago/5c89c897e1917d9209a762af_davi_qn90y9.png',
      img3: 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333023/Templates%20Modos%20de%20pago/Efecty-png_q3fvog.png',
      img4: 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606331948/Templates%20Modos%20de%20pago/mercadopago_jyalpa.png',
      img5: 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333553/Templates%20Modos%20de%20pago/Nequi_by_Bancolombia_hxhkhb.png',
      img6: 'https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png',
      img7: 'https://ecommerce.payulatam.com/logos/PayU_CO.png',
      img8: 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335739/Templates%20Modos%20de%20pago/wompi_jxuitu.png'
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
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties, vue/no-mutating-props
      this.data.medioEnvio = JSON.parse(this.dataStore.medios_envio.valores);
      return this.data.medioEnvio;
    }
  },
  mounted() {
    var acc = document.getElementsByClassName('accordion');
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/template11/_productdetails/OptAcordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_OptAcordionvue_type_script_lang_js_ = (OptAcordionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/_productdetails/OptAcordion.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(925)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_OptAcordionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2590d9a6",
  "79cd4d25"
  
)

/* harmony default export */ var OptAcordion = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(926);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("851e4f1c", content, true, context)
};

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptAcordion_vue_vue_type_style_index_0_id_2590d9a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptAcordion_vue_vue_type_style_index_0_id_2590d9a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptAcordion_vue_vue_type_style_index_0_id_2590d9a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptAcordion_vue_vue_type_style_index_0_id_2590d9a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptAcordion_vue_vue_type_style_index_0_id_2590d9a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editor[data-v-2590d9a6]{width:100%}.editor[data-v-2590d9a6] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-2590d9a6] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-2590d9a6] .el-tiptap-editor__content h1{font-family:var(--font-style-1);font-size:2em}.editor[data-v-2590d9a6] .el-tiptap-editor__content h2{font-family:var(--font-style-1);font-size:1.5em}.editor[data-v-2590d9a6] .el-tiptap-editor__content h3{font-family:var(--font-style-1);font-size:1.17em}.editor[data-v-2590d9a6] .el-tiptap-editor__content h4{font-family:var(--font-style-1);font-size:1.12em}.editor[data-v-2590d9a6] .el-tiptap-editor__content h5{font-family:var(--font-style-1);font-size:.83em}.editor[data-v-2590d9a6] .el-tiptap-editor__content blockquote,.editor[data-v-2590d9a6] .el-tiptap-editor__content code,.editor[data-v-2590d9a6] .el-tiptap-editor__content em,.editor[data-v-2590d9a6] .el-tiptap-editor__content li,.editor[data-v-2590d9a6] .el-tiptap-editor__content ol,.editor[data-v-2590d9a6] .el-tiptap-editor__content p,.editor[data-v-2590d9a6] .el-tiptap-editor__content pre,.editor[data-v-2590d9a6] .el-tiptap-editor__content s,.editor[data-v-2590d9a6] .el-tiptap-editor__content span,.editor[data-v-2590d9a6] .el-tiptap-editor__content strong,.editor[data-v-2590d9a6] .el-tiptap-editor__content ul{font-family:var(--font-style-1)}.editor[data-v-2590d9a6] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-2590d9a6] .el-popper.el-tiptap-image-popper{display:none}.content-acordion[data-v-2590d9a6]{align-items:flex-start;display:flex;flex-direction:column;justify-items:center;margin-top:40px;width:100%}.accordion[data-v-2590d9a6]{background-color:#fff;border:none;border-top:1px solid rgba(0,0,0,.08);color:#000;cursor:pointer;font-family:var(--font-style-1)!important;font-size:16px;font-weight:800;height:62px;letter-spacing:1px;line-height:38px;text-align:left;transition:.4s;width:100%}.accordion[data-v-2590d9a6]:after{align-items:center;color:#000;content:\"\\002B\";display:flex;float:left;font-size:22px;font-weight:400;justify-content:center;margin-right:10px}.active[data-v-2590d9a6]:after{content:\"\\2212\"}.panel[data-v-2590d9a6]{background-color:#fff;max-height:0;overflow:hidden;transition:max-height .2s ease-out}.content_product_description[data-v-2590d9a6]{align-items:flex-start;color:#333;display:flex;flex-direction:column;font-size:14px;font-weight:400;justify-content:center;line-height:1.42857143;width:100%}.content_product_description[data-v-2590d9a6],h3[data-v-2590d9a6]{font-family:var(--font-style-1)!important}h3[data-v-2590d9a6]{align-self:flex-start;color:var(--color_text);font-size:15px;font-weight:600;text-transform:uppercase}h4[data-v-2590d9a6]{align-items:flex-start;color:var(--color_text);display:flex;flex-direction:column;font-size:15px;font-weight:600;justify-content:center;line-height:1.42857143;margin-bottom:5px;width:100%}h4[data-v-2590d9a6],li p[data-v-2590d9a6]{font-family:var(--font-style-1)!important}li p[data-v-2590d9a6]{color:var(--color_subtext);font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}.description-method[data-v-2590d9a6]{color:var(--color_subtext);font-family:var(--font-style-1)!important;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}img[data-v-2590d9a6]{margin-top:15px;max-width:320px;width:50%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template11-productdetails-opt-acordion.js.map