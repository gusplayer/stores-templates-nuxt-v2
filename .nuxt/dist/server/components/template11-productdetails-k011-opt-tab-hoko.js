exports.ids = [80];
exports.modules = {

/***/ 1262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productdetails/K011-OptTabHoko.vue?vue&type=template&id=5bf6faa2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-opt-tab"
  }, [_vm._ssrNode("<div class=\"head-content\" data-v-5bf6faa2>" + (_vm.contentDescription ? "<div" + _vm._ssrClass("tab", _vm.selecttag == 1 ? 'show-select-active' : '') + " data-v-5bf6faa2><p class=\"tittle\" data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_description'))) + "</p></div>" : "<!---->") + " <div" + _vm._ssrClass("tab", _vm.selecttag == 2 ? 'show-select-active' : '') + " data-v-5bf6faa2><p class=\"tittle\" data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_opcionesPago'))) + "</p></div></div> "), _vm._ssrNode("<div class=\"content-tab\" data-v-5bf6faa2>", "</div>", [_vm.focusbtn1 && _vm.contentDescription ? _vm._ssrNode("<div class=\"editor\" data-v-5bf6faa2>", "</div>", [_c('el-tiptap', {
    attrs: {
      "extensions": _vm.extensions,
      "spellcheck": false,
      "readonly": true,
      "tooltip": false,
      "bubble": false,
      "charCounterCount": false,
      "showMenubar": false
    },
    model: {
      value: _vm.contentDescription,
      callback: function ($$v) {
        _vm.contentDescription = $$v;
      },
      expression: "contentDescription"
    }
  })], 1) : _vm._e(), _vm._ssrNode(" " + (_vm.focusbtn2 ? "<div class=\"item-content opcpago\" data-v-5bf6faa2><ul data-v-5bf6faa2>" + (_vm.mediospago.consignacion == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancaria'))) + "</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancariaMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.contraentrega == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContra'))) + "</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContraMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.convenir == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenir'))) + "</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenirMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.credibanco == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionCredibanco'))) + "</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionCredibancoMsg')) + "\n          ") + "</p> <a href=\"https://www.credibanco.com/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-5bf6faa2><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335270/Templates%20Modos%20de%20pago/Credibanco_lprsof.png\" alt=\"logo Credibanco\" class=\"logo-pasarela\" data-v-5bf6faa2></a></li>" : "<!---->") + " " + (_vm.mediospago.daviplata == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignaciondaviplata'))) + "</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignaciondaviplataMsg')) + "\n          ") + "</p> <img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333767/Templates%20Modos%20de%20pago/5c89c897e1917d9209a762af_davi_qn90y9.png\" alt=\"logo daviPlata\" class=\"logo-pasarela-daviplata\" data-v-5bf6faa2></li>" : "<!---->") + " " + (_vm.mediospago.efecty == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfecty'))) + "</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfectyMsg'))) + "</p> <a href=\"https://www.efecty.com.co/web/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-5bf6faa2><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333023/Templates%20Modos%20de%20pago/Efecty-png_q3fvog.png\" alt=\"logo efecty\" class=\"logo-pasarela-efecty\" data-v-5bf6faa2></a></li>" : "<!---->") + " " + (_vm.mediospago.mercado_pago == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaMercado'))) + "</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaMercadoMsg')) + "\n          ") + "</p> <a href=\"https://www.mercadopago.com\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-5bf6faa2><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606331948/Templates%20Modos%20de%20pago/mercadopago_jyalpa.png\" alt=\"logo mercadopago\" class=\"logo-pasarela-daviplata\" data-v-5bf6faa2></a></li>" : "<!---->") + " " + (_vm.mediospago.nequi == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionnequi'))) + "</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionnequiMsg')) + "\n          ") + "</p> <a href=\"https://www.nequi.com.co/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-5bf6faa2><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333553/Templates%20Modos%20de%20pago/Nequi_by_Bancolombia_hxhkhb.png\" alt=\"logo nequi\" class=\"logo-pasarela-daviplata\" data-v-5bf6faa2></a></li>" : "<!---->") + " " + (_vm.mediospago.payco == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaEpayco'))) + "</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaEpaycoMsg')) + "\n          ") + "</p> <img src=\"https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png\" alt=\"Pasarela de pagos epayco\" class=\"logo-pasarela-payco\" data-v-5bf6faa2></li>" : "<!---->") + " " + (_vm.mediospago.payu == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaPayu'))) + "</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://www.payulatam.com/co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-5bf6faa2><img src=\"https://ecommerce.payulatam.com/logos/PayU_CO.png\" alt=\"PayU\" border=\"0\" class=\"logo-pasarela-payu\" data-v-5bf6faa2></a></li>" : "<!---->") + " " + (_vm.mediospago.wompi == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionwompi'))) + "</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://wompi.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-5bf6faa2><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335739/Templates%20Modos%20de%20pago/wompi_jxuitu.png\" alt=\"wompi\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-5bf6faa2></a></li>" : "<!---->") + " " + (_vm.mediospago.wepay4u == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>WePay4U</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('text_pago_WePay4U')) + "\n          ") + "</p> <a href=\"https://wepay4u.com/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-5bf6faa2><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/v1639078440/wePay4u/powered_by_z7sgqp.png\" alt=\"wePay4u\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-5bf6faa2></a></li>" : "<!---->") + " " + (_vm.mediospago.tu_compra == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>Tucompra</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('text_pago_Tucompra')) + "\n          ") + "</p> <a href=\"https://tucompra.com.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-5bf6faa2><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/tucompra_ss0oys.png\" alt=\"tu_compra\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-5bf6faa2></a></li>" : "<!---->") + " " + (_vm.mediospago.flow == 1 ? "<li data-v-5bf6faa2><h4 data-v-5bf6faa2>Tucompra</h4> <p data-v-5bf6faa2>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('text_pago_flowInfo')) + "\n          ") + "</p> <a href=\"https://www.flow.cl/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-5bf6faa2><img src=\"https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/flow_jevnwy.png\" alt=\"flow\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-5bf6faa2></a></li>" : "<!---->") + "</ul></div>" : "<!---->"))], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/_productdetails/K011-OptTabHoko.vue?vue&type=template&id=5bf6faa2&scoped=true&

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productdetails/K011-OptTabHoko.vue?vue&type=script&lang=js&


/* harmony default export */ var K011_OptTabHokovue_type_script_lang_js_ = ({
  filters: {
    capitalize(value) {
      if (value) {
        value = value.toLowerCase();
        return value.replace(/^\w|\s\w/g, l => l.toUpperCase());
      }
    }
  },
  mixins: [formatCurrent["a" /* default */], elemenTiptap["a" /* default */]],
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
    var _this$data;
    return {
      medioEnvio: '',
      envioproducto: '',
      selecttag: 1,
      focusbtn1: true,
      focusbtn2: false,
      focusbtn3: false,
      contentDescription: (_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.description
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
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties, vue/no-mutating-props
      this.data.medioEnvio = JSON.parse(this.dataStore.medios_envio.valores);
      return this.data.medioEnvio;
    }
  },
  mounted() {
    this.contentDescription ? this.selectTag1() : this.selectTag2();
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
// CONCATENATED MODULE: ./components/template11/_productdetails/K011-OptTabHoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_K011_OptTabHokovue_type_script_lang_js_ = (K011_OptTabHokovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/_productdetails/K011-OptTabHoko.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(923)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_K011_OptTabHokovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5bf6faa2",
  "6befe0be"
  
)

/* harmony default export */ var K011_OptTabHoko = __webpack_exports__["default"] = (component.exports);

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

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(924);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7f607b42", content, true, context)
};

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K011_OptTabHoko_vue_vue_type_style_index_0_id_5bf6faa2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(510);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K011_OptTabHoko_vue_vue_type_style_index_0_id_5bf6faa2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K011_OptTabHoko_vue_vue_type_style_index_0_id_5bf6faa2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K011_OptTabHoko_vue_vue_type_style_index_0_id_5bf6faa2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K011_OptTabHoko_vue_vue_type_style_index_0_id_5bf6faa2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editor[data-v-5bf6faa2]{width:100%}.editor[data-v-5bf6faa2] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-5bf6faa2] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-5bf6faa2] .el-tiptap-editor__content h1{font-family:var(--font-style-2);font-size:2em}.editor[data-v-5bf6faa2] .el-tiptap-editor__content h2{font-family:var(--font-style-2);font-size:1.5em}.editor[data-v-5bf6faa2] .el-tiptap-editor__content h3{font-family:var(--font-style-2);font-size:1.17em}.editor[data-v-5bf6faa2] .el-tiptap-editor__content h4{font-family:var(--font-style-2);font-size:1.12em}.editor[data-v-5bf6faa2] .el-tiptap-editor__content h5{font-family:var(--font-style-2);font-size:.83em}.editor[data-v-5bf6faa2] .el-tiptap-editor__content blockquote,.editor[data-v-5bf6faa2] .el-tiptap-editor__content code,.editor[data-v-5bf6faa2] .el-tiptap-editor__content em,.editor[data-v-5bf6faa2] .el-tiptap-editor__content li,.editor[data-v-5bf6faa2] .el-tiptap-editor__content ol,.editor[data-v-5bf6faa2] .el-tiptap-editor__content p,.editor[data-v-5bf6faa2] .el-tiptap-editor__content pre,.editor[data-v-5bf6faa2] .el-tiptap-editor__content s,.editor[data-v-5bf6faa2] .el-tiptap-editor__content span,.editor[data-v-5bf6faa2] .el-tiptap-editor__content strong,.editor[data-v-5bf6faa2] .el-tiptap-editor__content ul{font-family:var(--font-style-2)}.editor[data-v-5bf6faa2] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-5bf6faa2] .el-popper.el-tiptap-image-popper{display:none}.tab[data-v-5bf6faa2]{align-items:center;cursor:pointer;justify-content:center;width:auto}.item-content[data-v-5bf6faa2],.tab[data-v-5bf6faa2]{display:flex;flex-direction:column}.item-content[data-v-5bf6faa2]{align-items:flex-start;justify-content:flex-start;padding-bottom:4px;width:100%}.content_product_description[data-v-5bf6faa2]{align-items:flex-start;color:var(--color_subtext);display:flex;flex-direction:column;font-size:14px;font-weight:400;justify-content:center;line-height:1.42857143;width:100%}.content_product_description[data-v-5bf6faa2],h3[data-v-5bf6faa2]{font-family:var(--font-style-1)!important}h3[data-v-5bf6faa2]{align-self:flex-start;color:var(--color_text);font-size:15px;font-weight:600;text-transform:uppercase}h4[data-v-5bf6faa2]{align-items:flex-start;color:var(--color_text);display:flex;flex-direction:column;font-size:15px;font-weight:600;justify-content:center;line-height:1.42857143;margin-bottom:5px;width:100%}h4[data-v-5bf6faa2],li p[data-v-5bf6faa2]{font-family:var(--font-style-1)!important}li p[data-v-5bf6faa2]{color:var(--color_subtext);font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}.description-method[data-v-5bf6faa2],.price[data-v-5bf6faa2]{color:var(--color_subtext);font-family:var(--font-style-1)!important;font-size:14px;font-weight:400;line-height:1.4;margin-bottom:15px}img[data-v-5bf6faa2]{margin-top:15px;max-width:300px;width:30%}@media (min-width:300px){.content-opt-tab[data-v-5bf6faa2],.content-tab[data-v-5bf6faa2]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-tab[data-v-5bf6faa2]{border-color:var(--border);border-width:1px;margin-top:6px;padding:20px}.head-content[data-v-5bf6faa2]{grid-gap:.5rem;align-items:center;display:grid;gap:.5rem;grid-template-columns:repeat(1,minmax(0,1fr));justify-content:center;width:100%}.tittle[data-v-5bf6faa2]{align-items:center;background-color:transparent;color:var(--color_subtext);display:flex;font-family:var(--font-style-1)!important;font-size:14px;font-weight:400;height:40px;justify-content:center;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.show-select-active[data-v-5bf6faa2]{background-color:var(--color_gb_tabs)}.show-select-active .tittle[data-v-5bf6faa2]{color:var(--color_text_tabs)}}@media (min-width:425px){.head-content[data-v-5bf6faa2]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-bottom:40px}.tittle[data-v-5bf6faa2]{font-size:12px;text-align:center}}@media (min-width:768px){.content-opt-tab[data-v-5bf6faa2]{flex-direction:column;margin-top:0}.content-opt-tab[data-v-5bf6faa2],.head-content[data-v-5bf6faa2]{align-items:flex-start;display:flex;justify-content:flex-start}.head-content[data-v-5bf6faa2]{border-bottom:1px solid transparent;flex-direction:row;gap:0;margin-bottom:0;width:100%}.tab[data-v-5bf6faa2]{align-items:center}.content-tab[data-v-5bf6faa2],.tab[data-v-5bf6faa2]{display:flex;justify-content:flex-start;width:100%}.content-tab[data-v-5bf6faa2]{align-items:flex-start;border-color:var(--border);border-width:1px;flex-direction:row;margin-top:0;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.tittle[data-v-5bf6faa2]{align-items:center;font-size:14px;height:50px;justify-content:center;text-align:center;width:100%}.show-select-active[data-v-5bf6faa2]{background-color:var(--color_gb_tabs)}.show-select-active .tittle[data-v-5bf6faa2]{color:var(--color_text_tabs)}.content-tab[data-v-5bf6faa2]{padding:40px}}@media (min-width:1024px){.head-content[data-v-5bf6faa2]{width:60%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template11-productdetails-k011-opt-tab-hoko.js.map