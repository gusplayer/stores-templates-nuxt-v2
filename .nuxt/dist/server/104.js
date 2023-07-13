exports.ids = [104];
exports.modules = {

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko-ProductDetail.vue?vue&type=template&id=ecf754a8&scoped=true&
var render = function render() {
  var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productDetail",
    style: [_vm.settingByTemplate10[0].detailsProduct, _vm.settingByTemplate10[0].settingGeneral, {
      '--font-style-1': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate10[0]) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.settingGeneral) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.fount_1) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Roboto'
    }]
  }, [_vm.loading ? _vm._ssrNode("<div class=\"container-productDetail-loading\" data-v-ecf754a8>", "</div>") : _vm._ssrNode("<div class=\"container-productDetail\" data-v-ecf754a8>", "</div>", [_vm._ssrNode("<div id=\"BgProductlistF\" class=\"banner-detail\" data-v-ecf754a8>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-ecf754a8>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/productos"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-ecf754a8>/</p> <p class=\"txt-crumb s2\" data-v-ecf754a8>" + _vm._ssrEscape("\n          " + _vm._s(_vm.data.detalle.nombre) + "\n        ") + "</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"product-content\" data-v-ecf754a8>", "</div>", [_vm._ssrNode("<div class=\"left\" data-v-ecf754a8>", "</div>", [_vm._ssrNode("<div class=\"main-images\" data-v-ecf754a8>", "</div>", [_c('productSlide', {
    staticClass: "w-auto h-auto object-cover overflow-hidden",
    attrs: {
      "photos": _vm.data.fotos,
      "photo": _vm.data.detalle.foto_cloudinary,
      "idYoutube": _vm.idYoutube
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"right\" data-v-ecf754a8>", "</div>", [_vm._ssrNode("<div class=\"content-items-right\" data-v-ecf754a8>", "</div>", [_vm._ssrNode("<div class=\"content-name\" data-v-ecf754a8><p class=\"text-name\" data-v-ecf754a8>" + _vm._ssrEscape(_vm._s(_vm.data.detalle.nombre)) + "</p></div> <div class=\"content-networks\" data-v-ecf754a8>" + (_vm.dataStore.tienda.red_facebook != null ? "<a target=\"_blank\" rel=\"noreferrer noopener\"" + _vm._ssrAttr("href", _vm.dataStore.tienda.red_facebook) + " class=\"social-networks\" data-v-ecf754a8><i data-v-ecf754a8><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"18px\" width=\"18px\" fill=\"currentColor\" viewBox=\"0 0 24 24\" class=\"facebook-icon\" data-v-ecf754a8><path d=\"m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z\" data-v-ecf754a8></path></svg></i></a>" : "<!---->") + " " + (_vm.dataStore.tienda.red_twitter != null ? "<a target=\"_blank\" rel=\"noreferrer noopener\"" + _vm._ssrAttr("href", _vm.dataStore.tienda.red_twitter) + " class=\"social-networks\" data-v-ecf754a8><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" fill=\"currentColor\" height=\"18px\" width=\"18px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" class=\"twitter-icon\" style=\"enable-background: new 0 0 512 512\" data-v-ecf754a8><g data-v-ecf754a8><g data-v-ecf754a8><path d=\"M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z\" data-v-ecf754a8></path></g></g></svg></a>" : "<!---->") + " " + (_vm.dataStore.tienda.red_instagram != null ? "<a target=\"_blank\" rel=\"noreferrer noopener\"" + _vm._ssrAttr("href", _vm.dataStore.tienda.red_instagram) + " class=\"social-networks\" data-v-ecf754a8><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"18px\" width=\"18px\" fill=\"currentColor\" viewBox=\"0 0 511 511.9\" class=\"instagram-icon\" data-v-ecf754a8><path d=\"m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0\" data-v-ecf754a8></path> <path d=\"m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0\" data-v-ecf754a8></path> <path d=\"m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0\" data-v-ecf754a8></path></svg></a>" : "<!---->") + " " + (_vm.dataStore.tienda.red_youtube != null ? "<a target=\"_blank\" rel=\"noreferrer noopener\"" + _vm._ssrAttr("href", _vm.dataStore.tienda.red_youtube) + " class=\"social-networks\" data-v-ecf754a8><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"19px\" width=\"19px\" fill=\"currentColor\" viewBox=\"-21 -117 682.66672 682\" class=\"youtube-icon\" data-v-ecf754a8><path d=\"m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0\" data-v-ecf754a8></path></svg></a>" : "<!---->") + "</div> <div class=\"content-price\" data-v-ecf754a8><p class=\"text-promo\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-ecf754a8>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor ? Math.trunc(_vm.salesData.precio / (1 - _vm.data.info.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p> <div class=\"flex flex-row justify-start items-center\" data-v-ecf754a8><p class=\"text-price\"" + _vm._ssrStyle(null, null, {
    display: _vm.salesData.precio ? '' : 'none'
  }) + " data-v-ecf754a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(_vm.salesData.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p> <p class=\"card-discont\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-ecf754a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.data.info.promocion_valor) + "% De Descuento\n              ") + "</p></div></div> "), this.data.detalle.con_variante > 0 ? _vm._ssrNode("<div class=\"content-variant\" data-v-ecf754a8>", "</div>", _vm._l(_vm.data.variantes, function (variant, index) {
    return _vm._ssrNode("<div data-v-ecf754a8>", "</div>", [_vm._ssrNode("<label for=\"variant name\" class=\"text-variant\" data-v-ecf754a8>" + _vm._ssrEscape("\n                " + _vm._s(variant.nombre) + ":\n              ") + "</label> "), _c('SelectGroup', {
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
      }, [_c('p', {
        staticClass: "text-option"
      }, [_vm._v("\n                    " + _vm._s(item.option) + "\n                  ")])]);
    }), 0)], 2);
  }), 0) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-direction-btns\" data-v-ecf754a8>", "</div>", [_vm._ssrNode((_vm.data.info.descripcion_corta ? "<div class=\"flex flex-col items-start\" data-v-ecf754a8><div class=\"txt-tittle-quantity\" data-v-ecf754a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('productdetail_informacion')) + "\n              ") + "</div> <p class=\"txt-quantity\" data-v-ecf754a8>" + _vm._ssrEscape(_vm._s(_vm.data.info.descripcion_corta)) + "</p></div>" : "<!---->") + " " + (_vm.userDropshipping.userName ? "<div class=\"w-full flex flex-row items-center my-8\" data-v-ecf754a8><p class=\"text-variant\" style=\"margin-right: 10px\" data-v-ecf754a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('productdetail_dropshipping')) + "\n              ") + "</p> <p class=\"txt-quantity\" data-v-ecf754a8>" + _vm._ssrEscape("\n                " + _vm._s(_vm.userDropshipping.userName) + "\n              ") + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div" + _vm._ssrClass("content-quantity-boxes", {
    disabled: !_vm.salesData.estado
  }) + " data-v-ecf754a8>", "</div>", [_vm._ssrNode("<div class=\"txt-tittle-quantity\" data-v-ecf754a8>Cantidad:</div> <div class=\"box-quantity\" data-v-ecf754a8><p class=\"txt-quantity\" data-v-ecf754a8>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p></div> "), _vm._ssrNode("<div class=\"box-quantity-btns\" data-v-ecf754a8>", "</div>", [_vm._ssrNode("<div class=\"btn-quantity btn1\" data-v-ecf754a8>", "</div>", [_c('FlechaUp-icon', {
    staticClass: "text-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn-quantity btn2\" data-v-ecf754a8>", "</div>", [_c('Flechadown-icon', {
    staticClass: "text-icon"
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"content-addCart\" data-v-ecf754a8>" + (!_vm.spent && this.salesData.estado == true && (_vm.data.info.tipo_servicio == null || _vm.data.info.tipo_servicio == '0') ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-ecf754a8><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"minicart-icon\" data-v-ecf754a8><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-ecf754a8></path></svg> <p class=\"text-addCart\" data-v-ecf754a8>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_añadiralcarrito')) + "\n                ") + "</p></button>" : !this.salesData.estado ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-ecf754a8><p class=\"text-addCart\" data-v-ecf754a8>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n                ") + "</p></button>" : !_vm.spent && _vm.data.info.tipo_servicio == '1' ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-ecf754a8><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"minicart-icon\" data-v-ecf754a8><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-ecf754a8></path></svg> <p class=\"text-addCart\" data-v-ecf754a8>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n                ") + "</p></button>" : _vm.spent ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-ecf754a8><p class=\"text-addCart\" data-v-ecf754a8>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                ") + "</p></button>" : "<!---->") + "</div>")], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tab\" data-v-ecf754a8>", "</div>", [_c('OptionTab', {
    attrs: {
      "dataStore": _vm.dataStore,
      "data": _vm.data,
      "envio": _vm.envio,
      "settingByTemplate10": _vm.settingByTemplate10
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-suggesProduct\" data-v-ecf754a8>", "</div>", [_c('KoSuggesProduct', {
    attrs: {
      "category": this.category.slice(0, 8),
      "cardProduct": _vm.settingByTemplate10[0].cardProduct,
      "settingGeneral": _vm.settingByTemplate10[0].settingGeneral
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/Ko-ProductDetail.vue?vue&type=template&id=ecf754a8&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko-ProductDetail.vue?vue&type=script&lang=js&



/* harmony default export */ var Ko_ProductDetailvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'Ko-ProductDetail-1',
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebookPixel: Object,
    settingByTemplate10: Array
  },
  components: {
    OptionTab: () => __webpack_require__.e(/* import() */ 129).then(__webpack_require__.bind(null, 1067)),
    SelectGroup: () => __webpack_require__.e(/* import() */ 131).then(__webpack_require__.bind(null, 1068)),
    KoSuggesProduct: () => __webpack_require__.e(/* import() */ 69).then(__webpack_require__.bind(null, 949)),
    productSlide: () => __webpack_require__.e(/* import() */ 130).then(__webpack_require__.bind(null, 1069))
  },
  mounted() {
    if (this.settingByTemplate10[0] && this.settingByTemplate10[0].detailsProduct && this.settingByTemplate10[0].detailsProduct.visible_bg == true) {
      this.setBg(1);
    } else {
      this.setBg(2);
    }
    this.$store.state.beforeCombination = [];
    if (this.productsData && this.productsData.length && this.productsData.length > 0) {
      this.getDataProduct();
    } else {
      this.getDataProductPrev();
    }
    if (Object.keys(this.dataStore.medios_envio).length) {
      this.setOptionEnvio();
    }
    if (this.$route.query && this.$route.query.userId && this.$route.query.userName) {
      this.userDropshipping.userId = this.$route.query.userId;
      this.userDropshipping.userName = this.$route.query.userName;
    }
  },
  data() {
    return {
      id: this.$route.params.slug,
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
      activeZoom: true,
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
        title: '',
        description: '',
        quote: ''
      },
      sharingFacebook: '',
      userDropshipping: {
        userId: '',
        userName: ''
      },
      networks: [{
        network: 'facebook',
        icon: 'facebook-icon',
        color: '#1877f2'
      }, {
        network: 'whatsapp',
        icon: 'whatsapp-icon',
        color: '#25d366'
      }, {
        network: 'twitter',
        icon: 'twitter-icon',
        color: '#00acee'
      }]
    };
  },
  computed: {
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
    // eslint-disable-next-line vue/return-in-computed-property
    precio() {
      if (this.data.detalle.precio) {
        return `$${this.data.detalle.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
      }
    },
    category() {
      return this.productsData.filter(product => product.categoria == this.data.detalle.categoria_producto.nombre_categoria_producto && product.id !== this.data.detalle.id);
    }
  },
  methods: {
    setBg(value) {
      if (this.settingByTemplate10) {
        if (!this.mobileCheck()) {
          var imagen = document.getElementById('BgProductlistF');
          if (imagen && imagen.style) {
            if (value == 1) {
              if (this.settingByTemplate10[0].detailsProduct.url_img_bg) {
                imagen.style.backgroundImage = `url(${this.settingByTemplate10[0].detailsProduct.url_img_bg})`;
              } else {
                imagen.style.backgroundImage = `url(https://res.cloudinary.com/brahyanr10/image/upload/v1614233821/Temp10/Productos/bg-beagrumb_gxvk1i.jpg)`;
              }
            } else if (value == 2) {
              imagen.style.backgroundImage = '';
            }
          }
        }
      }
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
    searchIdForSlug() {
      const product = this.productsData.filter(product => product.slug === this.id);
      if (product.length) {
        return product[0].id;
      }
      return this.productsData[0].id;
    },
    getDataProduct() {
      const idOfSlug = this.searchIdForSlug();
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
          this.sharing.url = window.location.href;
          this.sharing.title = `Te recomiendo: ${response.data.detalle.nombre}`;
          this.sharing.description = `Te recomiendo: ${response.data.detalle.nombre} de la tienda ${this.dataStore.tienda.nombre}, Link del producto ${window.location.href}`;
          this.sharing.quote = `Te recomiendo: ${response.data.detalle.nombre} de la tienda ${this.dataStore.tienda.nombre}, Link del producto ${window.location.href}`;
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
          if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
            window.fbq('track', 'ViewContent', {
              content_type: 'product',
              content_ids: [`${this.data.detalle.id}`],
              contents: [{
                id: `${this.data.detalle.id}`,
                quantity: this.quantityValue
              }],
              value: this.salesData.precio ? this.salesData.precio : 0,
              currency: this.dataStore.tienda.moneda,
              content_name: this.data.detalle.nombre,
              content_category: 'otro'
            });
          }
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
        envio_gratis: this.data.detalle.envio_gratis,
        promocion_valor: this.data.info.promocion_valor,
        tag_promocion: this.data.info.tag_promocion,
        dropshipping: this.userDropshipping.userId
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
      this.$router.push('/productos');
      this.$store.commit('SET_OPEN_ORDER', true);
      // this.$store.state.orderComponent = true
      this.$store.dispatch('SEND_ADD_TO_CART', 1);
    },
    GoPayments() {
      let objeto = {
        id: this.data.info.id,
        cantidad: this.quantityValue,
        combinacion: this.salesData && this.salesData.combinacion ? this.salesData.combinacion : undefined,
        dropshipping: this.userDropshipping.userId
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
    }
  },
  watch: {
    settingByTemplate10() {
      if (this.settingByTemplate10[0] && this.settingByTemplate10[0].detailsProduct && this.settingByTemplate10[0].detailsProduct.visible_bg == true) {
        this.setBg(1);
      } else {
        this.setBg(2);
      }
    },
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook;
      this.links[1].link = this.dataStore.tienda.red_twitter;
      this.links[2].link = this.dataStore.tienda.red_instagram;
      this.links[3].link = this.dataStore.tienda.red_youtube;
      this.links[4].link = this.dataStore.tienda.red_tiktok;
    },
    productsData() {
      this.getDataProduct();
    },
    envios() {
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
  },
  head() {
    return {
      title: `Vista del producto ${this.data && this.data.detalle ? this.data.detalle.nombre : ''}`,
      meta: [{
        hid: 'product:catalog_id',
        property: 'product:catalog_id',
        content: this.data && this.data.detalle ? this.data.detalle.id : ''
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: this.data && this.data.detalle ? this.data.detalle.nombre : ''
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: this.sharing && this.sharing.url ? this.sharing.url : ''
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: this.data && this.data.info ? this.data.info.descripcion_corta : ''
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: this.data && this.data.detalle ? this.data.detalle.foto_cloudinary : ''
      }, {
        hid: 'og:price:amount',
        property: 'og:price:amount',
        content: this.salesData && this.salesData.precio ? this.salesData.precio : ''
      }, {
        hid: 'og:price:currency',
        property: 'og:price:currency',
        content: this.dataStore.tienda.moneda ? this.dataStore.tienda.moneda : ''
      }, {
        hid: 'product:brand',
        property: 'product:brand',
        content: this.data && this.data.info && this.data.info.marca ? this.data.info.marca : ''
      }, {
        hid: 'product:availability',
        property: 'product:availability',
        content: this.salesData && this.salesData.unidades > 0 ? 'in stock' : 'out of stock'
      }, {
        hid: 'product:condition',
        property: 'product:condition',
        content: 'new'
      }, {
        hid: 'product:price:amount',
        property: 'product:price:amount',
        content: this.salesData && this.salesData.precio ? this.salesData.precio : ''
      }, {
        hid: 'product:price:currency',
        property: 'product:price:currency',
        content: this.dataStore.tienda.moneda ? this.dataStore.tienda.moneda : ''
      }, {
        hid: 'product:sale_price:amount',
        property: 'product:sale_price:amount',
        content: this.data && this.data.info && this.data.info.tag_promocion == 1 && this.data.info.promocion_valor ? Math.trunc(this.salesData.precio / (1 - this.data.info.promocion_valor / 100)) : ''
      }, {
        hid: 'product:sale_price:currency',
        property: 'product:sale_price:currency',
        content: this.dataStore.tienda.moneda ? this.dataStore.tienda.moneda : ''
      }]
    };
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      productID: this.data && this.data.detalle && this.data.detalle.id ? this.data.detalle.id : '',
      name: this.data && this.data.detalle && this.data.detalle.nombre ? this.data.detalle.nombre.slice(0, 149) : '',
      description: this.data && this.data.info && this.data.info.descripcion_corta ? this.data.info.descripcion_corta.slice(0, 9998) : `Producto de la tienda ${this.dataStore.tienda.nombre}`,
      url: this.sharing && this.sharing.url ? this.sharing.url : '',
      image: this.data && this.data.detalle && this.data.detalle.foto_cloudinary ? this.data.detalle.foto_cloudinary : '',
      brand: this.data && this.data.info && this.data.info.marca ? this.data.info.marca : '',
      sku: this.salesData && this.salesData.unidades ? this.salesData.unidades : '',
      offers: [{
        '@type': 'Offer',
        price: this.salesData && this.salesData.precio ? this.salesData.precio : '',
        priceCurrency: this.dataStore.tienda.moneda ? this.dataStore.tienda.moneda : '',
        itemCondition: 'https://schema.org/NewCondition',
        availability: this.salesData && this.salesData.unidades > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
      }],
      additionalProperty: [{
        '@type': 'PropertyValue',
        propertyID: 'item_group_id',
        value: this.data && this.data.detalle ? `FB${this.data.detalle.categoria_producto.id}_${this.data.detalle.categoria_producto.nombre_categoria_producto}` : '',
        status: 'active'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/template10/Ko-ProductDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var template10_Ko_ProductDetailvue_type_script_lang_js_ = (Ko_ProductDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/Ko-ProductDetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(815)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template10_Ko_ProductDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ecf754a8",
  "9d824ebc"
  
)

/* harmony default export */ var Ko_ProductDetail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(816);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("ba681be4", content, true, context)
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

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_ecf754a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(433);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_ecf754a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_ecf754a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_ecf754a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_ecf754a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-productDetail[data-v-ecf754a8]{padding-bottom:40px}.container-productDetail-loading[data-v-ecf754a8],.wrapper-productDetail[data-v-ecf754a8]{align-items:center;background:var(--background_color_1);display:flex;justify-content:center;width:100%}.container-productDetail-loading[data-v-ecf754a8]{flex-direction:column;height:calc(100vh - 420px);max-width:1400px;padding:50px 30px 30px}.container-productDetail[data-v-ecf754a8]{align-items:center;flex-direction:column;height:100%;justify-content:center}.container-productDetail[data-v-ecf754a8],.product-content[data-v-ecf754a8]{display:flex;width:100%}.left[data-v-ecf754a8]{align-items:center;width:100%}.content-variant[data-v-ecf754a8],.left[data-v-ecf754a8]{display:flex;flex-direction:column;justify-content:center}.content-variant[data-v-ecf754a8]{align-items:flex-start;margin-bottom:8px;width:auto}.aditional-images[data-v-ecf754a8],.main-images[data-v-ecf754a8],.youtuve-video[data-v-ecf754a8]{align-items:center;display:flex;justify-content:center;width:100%}.content-price[data-v-ecf754a8],.right[data-v-ecf754a8]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.content-addCart[data-v-ecf754a8],.content-category[data-v-ecf754a8],.content-name[data-v-ecf754a8]{justify-content:flex-start;width:100%}.content-addCart[data-v-ecf754a8],.content-category[data-v-ecf754a8],.content-name[data-v-ecf754a8],.quantity[data-v-ecf754a8]{align-items:center;display:flex;flex-direction:row}.quantity[data-v-ecf754a8]{justify-content:center}.section-suggesProduct[data-v-ecf754a8]{background:var(--background_color_1);margin-top:40px;width:100%}.content-quantity-boxes[data-v-ecf754a8]{align-items:center;display:flex;justify-content:flex-start;margin-bottom:30px;margin-top:30px;width:100%}.txt-tittle-quantity[data-v-ecf754a8]{color:var(--color_subtext);font-size:16px;font-weight:700;margin-right:10px;min-width:70px;width:auto}.box-quantity[data-v-ecf754a8]{width:75px}.box-quantity[data-v-ecf754a8],.box-quantity-btns[data-v-ecf754a8]{align-items:center;background-color:transparent;border:1px solid var(--border);color:var(--color_subtext);display:flex;height:50px;justify-content:center;text-align:center}.box-quantity-btns[data-v-ecf754a8]{flex-direction:column;width:25px}.btn-quantity[data-v-ecf754a8]{align-items:center;background-color:transparent;border-color:var(--border);border-right-width:1px;border-top-width:1px;color:var(--color_subtext);display:flex;height:25px;justify-content:center;width:25px}.material-design-icon>.material-design-icon__svg[data-v-ecf754a8]{fill:var(--color_icon);bottom:0;height:1em;position:absolute;width:1em}.content-networks[data-v-ecf754a8]{margin-bottom:30px}.content-networks[data-v-ecf754a8],.social-networks[data-v-ecf754a8]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;width:auto}.social-networks[data-v-ecf754a8]{margin-right:20px}.facebook-icon[data-v-ecf754a8],.instagram-icon[data-v-ecf754a8],.twitter-icon[data-v-ecf754a8],.youtube-icon[data-v-ecf754a8]{fill:var(--color_icon);cursor:pointer;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.facebook-icon[data-v-ecf754a8]:hover,.instagram-icon[data-v-ecf754a8]:hover,.twitter-icon[data-v-ecf754a8]:hover,.youtube-icon[data-v-ecf754a8]:hover{fill:#eb7025;color:#eb7025;transform:scale(1.5);transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.card-discont[data-v-ecf754a8]{background-color:var(--color_background_btn);color:var(--color_text_btn);font-size:16px;margin-left:5px;margin-right:5px;padding:2px 10px}@media (min-width:300px){.product-content[data-v-ecf754a8]{align-items:center;flex-direction:column;justify-content:center;width:90%}.content-direction-btns[data-v-ecf754a8]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.video[data-v-ecf754a8]{height:200px;width:100%}.content-name[data-v-ecf754a8],.content-price[data-v-ecf754a8]{margin-bottom:30px}.tab[data-v-ecf754a8]{display:flex;margin-top:40px;width:90%}.content-cart[data-v-ecf754a8]{flex-direction:column;padding-bottom:1px}.content-cart[data-v-ecf754a8],.content-free-shipping[data-v-ecf754a8]{align-items:center;background:#f4f4f4;display:flex;height:54px;justify-content:center;width:100%}.content-free-shipping[data-v-ecf754a8]{flex-direction:row;margin-top:20px}.content-options[data-v-ecf754a8]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.text-addCart[data-v-ecf754a8]{color:var(--color_text_btn)}.btn[data-v-ecf754a8],.btn-disabled[data-v-ecf754a8]{align-items:center;background-color:var(--color_background_btn);display:flex;flex-direction:row;height:54px;justify-content:center;transition:all .15s ease-in;width:100%}.btn[data-v-ecf754a8]:hover{background-color:#eb7025;color:#fff;transition:all .15s ease-in}.quantity[data-v-ecf754a8]{width:100%}.quantity_add[data-v-ecf754a8],.quantity_remove[data-v-ecf754a8]{align-items:center;background:#f4f4f4;display:flex;justify-content:center}.text-name[data-v-ecf754a8]{color:var(--color_text);font-size:var(--fontSizeTitle);font-weight:var(--fontWeighTitle);letter-spacing:0;line-height:1;margin-top:var(--marginTopTitle);text-transform:uppercase}.text-name[data-v-ecf754a8],.text-price[data-v-ecf754a8]{font-family:var(--font-style-1)!important}.text-price[data-v-ecf754a8]{color:var(--color_price);font-size:var(--fontSizePrice);font-weight:var(--fontWeighPrice);letter-spacing:-.03em;line-height:1}.text-promo[data-v-ecf754a8]{color:var(--color_subtext);font-size:15px;font-weight:700;-webkit-text-decoration:line-through;text-decoration:line-through}.text-promo[data-v-ecf754a8],.text-stock[data-v-ecf754a8]{font-family:var(--font-style-1)!important}.text-stock[data-v-ecf754a8]{color:#92bb35;font-size:14px;font-weight:600;letter-spacing:-.02em;line-height:1.42857143;margin-left:30px}.text-icon[data-v-ecf754a8]{align-items:center;cursor:pointer;display:flex;justify-content:center;width:34px}.text-quantity_value[data-v-ecf754a8]{align-items:center;border:none;display:flex;font-size:21px;font-weight:600;justify-content:center;padding:0 35px;text-align:center;width:100%}.text-addCart[data-v-ecf754a8]{font-family:var(--font-style-1)!important;font-size:12px;font-weight:600;text-transform:uppercase;white-space:nowrap}.minicart-icon[data-v-ecf754a8]{fill:var(--color_text_btn);color:var(--color_text_btn);margin-bottom:5px;margin-right:10px}.text-variant[data-v-ecf754a8]{color:var(--color_subtext);font-size:16px;font-weight:600;transition:all .6s ease-in-out}.text-option[data-v-ecf754a8],.text-variant[data-v-ecf754a8]{font-family:var(--font-style-1)!important}.text-option[data-v-ecf754a8]{color:var(--color_subtext);font-size:16px;font-weight:600;transition:all .6s ease-in-out}.banner-detail[data-v-ecf754a8]{display:none}.section-suggesProduct[data-v-ecf754a8]{width:90%}}@media (min-width:425px){.content-direction-btns[data-v-ecf754a8]{display:flex;flex-direction:column}}@media (min-width:480px){.content-cart[data-v-ecf754a8]{margin-right:2px;width:40%}.video[data-v-ecf754a8]{height:250px}}@media (min-width:768px){.banner-detail[data-v-ecf754a8]{background-color:var(--background_color_2);background-position:50%;background-repeat:no-repeat;background-size:cover;height:220px;justify-items:center}.banner-detail[data-v-ecf754a8],.crumb[data-v-ecf754a8]{align-items:center;display:flex;width:100%}.crumb[data-v-ecf754a8]{flex-direction:row;justify-content:center}.separatorCrumb[data-v-ecf754a8]{color:var(--breadCrumbs);cursor:pointer;font-size:9px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.separatorCrumb[data-v-ecf754a8],.txt-crumb[data-v-ecf754a8]{font-family:var(--font-style-1)!important}.txt-crumb[data-v-ecf754a8]{color:var(--breadCrumbs);cursor:pointer;font-size:15px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.s1[data-v-ecf754a8]:hover,.s2[data-v-ecf754a8]:hover{color:#eb7025;transition:all .25s ease}.content-cart[data-v-ecf754a8]{width:150px}.content-addCart[data-v-ecf754a8]{width:236px}.video[data-v-ecf754a8]{height:400px}.product-content[data-v-ecf754a8],.tab[data-v-ecf754a8]{width:95%}.product-content[data-v-ecf754a8]{grid-gap:1rem;align-items:flex-start;display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:flex-start;margin-top:20px}.right[data-v-ecf754a8]{margin-top:40px}.section-suggesProduct[data-v-ecf754a8]{width:95%}}@media (min-width:850px){.video[data-v-ecf754a8]{height:480px}}@media (min-width:1024px){.video[data-v-ecf754a8]{height:300px}.content-options[data-v-ecf754a8]{display:none}.tab[data-v-ecf754a8]{display:flex}.content-free-shipping[data-v-ecf754a8]{width:100%}.product-content[data-v-ecf754a8]{gap:4rem}.content-direction-btns[data-v-ecf754a8]{display:flex;flex-direction:column}}@media (min-width:1080px){.content-free-shipping[data-v-ecf754a8],.content-options[data-v-ecf754a8]{width:100%}.video[data-v-ecf754a8]{height:320px}}@media (min-width:1135px){.video[data-v-ecf754a8]{height:380px}}@media (min-width:1250px){.video[data-v-ecf754a8]{height:420px}}@media (min-width:1350px){.video[data-v-ecf754a8]{height:480px}}@media (min-width:1400px){.video[data-v-ecf754a8]{height:520px}.product-content[data-v-ecf754a8],.section-suggesProduct[data-v-ecf754a8],.tab[data-v-ecf754a8]{max-width:1400px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=104.js.map