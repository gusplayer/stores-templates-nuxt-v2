exports.ids = [326];
exports.modules = {

/***/ 1104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=f7e98002&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.dataStore ? _vm._ssrNode("<div>", "</div>", [_vm.stateModalPwd ? _vm._ssrNode("<div>", "</div>", [_c(_vm.headerTemplate, _vm._b({
    tag: "component"
  }, 'component', _vm.componentsProps, false)), _vm._ssrNode(" "), _c('nuxt'), _vm._ssrNode(" "), _c(_vm.footerTemplate, _vm._b({
    tag: "component"
  }, 'component', _vm.componentsProps, false)), _vm._ssrNode(" "), _vm.dataStore.tienda.template != 99 ? _c('KoFooterCountry', {
    attrs: {
      "data-store": _vm.dataStore,
      "value-wa": false
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.dataStore.tienda.whatsapp ? _vm._ssrNode("<div class=\"wrapper-whatsapp\">", "</div>", [_c('koWhatsApp', {
    staticClass: "button-whatsapp"
  }), _vm._ssrNode(" <span>\n          WhatsApp\n          <br> <small>" + _vm._ssrEscape("\n            " + _vm._s(_vm.dataStore.tienda.whatsapp) + "\n          ") + "</small></span>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.dataStore.tienda.estado == 0 || !_vm.expiredDate(_vm.dataStore.tienda.fecha_expiracion) ? _vm._ssrNode("<div id=\"modalNotificacion\" class=\"w-full h-screen fixed top-0 flex justify-center items-center z-100\">", "</div>", [_vm._ssrNode("<div class=\"w-full h-screen top-0 absolute backdrop-blur\" style=\"background-color: rgba(0, 0, 0, 0.767)\"></div> "), _vm._ssrNode("<div class=\"w-full py-20 px-30 flex flex-col justify-center items-center bg-white-white rounded-10 shadow-md z-100\" style=\"max-width: 250px\">", "</div>", [_c('koTiendaCerrada'), _vm._ssrNode(" <p class=\"mt-15 text-base text-gray-500 text-center\" style=\"max-width: 220px\">\n            Disculpa, no podrá realizar compras por el momento,\n          </p> " + (_vm.expiredDate(_vm.dataStore.tienda.fecha_expiracion) ? "<p class=\"font-bold text-17 mt-15\" style=\"color: #ff314d\">\n            ¿Deseas continuar?\n          </p>" : "<!---->") + " " + (_vm.expiredDate(_vm.dataStore.tienda.fecha_expiracion) ? "<button class=\"w-full py-4 mt-15 text-base rounded-10 bg-black text-white-white hover:bg-slate-300 hover:text-black transition ease-in-out delay-75\">\n            Aceptar\n          </button>" : "<!---->"))], 2)], 2) : _vm._e()], 2) : _c('koModalSecurity', {
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 1) : _vm._ssrNode("<div>", "</div>", [_c('koTiendaError')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=f7e98002&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// EXTERNAL MODULE: ./mixins/expiredDate.js
var expiredDate = __webpack_require__(52);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&


/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  name: 'LayoutDefault',
  components: {
    // HEADER
    KoHeader1: () => __webpack_require__.e(/* import() */ 35).then(__webpack_require__.bind(null, 1228)),
    // KoHeader2: () => import('../components/headers/header2/Ko-Header-2.vue'),
    KoHeader3: () => __webpack_require__.e(/* import() */ 346).then(__webpack_require__.bind(null, 1045)),
    KoHeader4: () => __webpack_require__.e(/* import() */ 36).then(__webpack_require__.bind(null, 1232)),
    KoHeader5: () => __webpack_require__.e(/* import() */ 345).then(__webpack_require__.bind(null, 1046)),
    KoHeader6: () => __webpack_require__.e(/* import() */ 37).then(__webpack_require__.bind(null, 1233)),
    KoHeader7: () => __webpack_require__.e(/* import() */ 38).then(__webpack_require__.bind(null, 1234)),
    KoHeader8: () => __webpack_require__.e(/* import() */ 39).then(__webpack_require__.bind(null, 1235)),
    KoHeader9: () => __webpack_require__.e(/* import() */ 40).then(__webpack_require__.bind(null, 1237)),
    KoHeader10: () => __webpack_require__.e(/* import() */ 41).then(__webpack_require__.bind(null, 1241)),
    KoHeader11: () => __webpack_require__.e(/* import() */ 42).then(__webpack_require__.bind(null, 1242)),
    // FOOTER
    KoFooter1: () => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, 1243)),
    // KoFooter2: () => import('../components/footers/footer2/Ko-Footer-2.vue'),
    KoFooter4: () => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, 1246)),
    KoFooter5: () => __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, 1247)),
    KoFooter6: () => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, 1248)),
    KoFooter7: () => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, 1249)),
    KoFooter8: () => __webpack_require__.e(/* import() */ 28).then(__webpack_require__.bind(null, 1250)),
    KoFooter9: () => __webpack_require__.e(/* import() */ 29).then(__webpack_require__.bind(null, 1251)),
    KoFooter10: () => __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, 1252)),
    KoFooter11: () => __webpack_require__.e(/* import() */ 31).then(__webpack_require__.bind(null, 1253)),
    // OTROS
    KoFooterCountry: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 1244)),
    koTiendaCerrada: () => __webpack_require__.e(/* import() */ 221).then(__webpack_require__.bind(null, 1326)),
    koTiendaError: () => __webpack_require__.e(/* import() */ 46).then(__webpack_require__.bind(null, 573)),
    koModalSecurity: () => __webpack_require__.e(/* import() */ 47).then(__webpack_require__.bind(null, 574)),
    koWhatsApp: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 1325))
  },
  mixins: [expiredDate["a" /* default */]],
  data() {
    return {
      headerComponentMap: {
        3: 'KoHeader1',
        5: 'KoHeader1',
        // 6: 'KoHeader2',
        7: 'KoHeader4',
        8: 'KoHeader3',
        9: 'KoHeader5',
        10: 'KoHeader6',
        11: 'KoHeader7',
        13: 'KoHeader8',
        14: 'KoHeader9',
        15: 'KoHeader10',
        16: 'KoHeader11'
      },
      footerComponentMap: {
        3: 'KoFooter1',
        5: 'KoFooter1',
        // 6: 'KoFooter2',
        7: 'KoFooter4',
        8: 'KoFooter1',
        9: 'KoFooter5',
        10: 'KoFooter6',
        11: 'KoFooter7',
        13: 'KoFooter8',
        14: 'KoFooter9',
        15: 'KoFooter10',
        16: 'KoFooter11'
      }
    };
  },
  head() {
    var _this$$store$state$da, _this$$store$state, _this$$store$state$da2, _this$analytics_tagma, _this$analytics_tagma2, _this$analytics_tagma3, _this$analytics_tagma4, _this$analytics_tagma5, _this$analytics_tagma6, _tienda$descripcion$r, _tienda$descripcion, _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3, _this$settingByTempla4, _this$settingByTempla5, _this$settingByTempla6, _this$settingByTempla7, _this$settingByTempla8, _this$settingByTempla9, _this$settingByTempla10, _this$settingByTempla11, _this$settingByTempla12, _this$settingByTempla13, _this$settingByTempla14, _this$settingByTempla15, _this$settingByTempla16, _this$settingByTempla17, _this$settingByTempla18, _this$settingByTempla19, _this$settingByTempla20, _this$settingByTempla21, _this$settingByTempla22, _this$settingByTempla23, _this$settingByTempla24, _this$settingByTempla25, _this$settingByTempla26, _this$settingByTempla27, _this$settingByTempla28, _this$settingByTempla29, _this$settingByTempla30, _this$settingByTempla31, _this$settingByTempla32, _this$settingByTempla33, _this$settingByTempla34, _this$settingByTempla35, _this$settingByTempla36, _this$settingByTempla37, _this$settingByTempla38, _tienda$nombre, _tienda$dominio, _tienda$nombre2, _tienda$dominio2, _tienda$nombre3, _geolocation$latitud, _geolocation$longitud, _geolocation$direccio;
    let tienda = (_this$$store$state$da = (_this$$store$state = this.$store.state) === null || _this$$store$state === void 0 ? void 0 : (_this$$store$state$da2 = _this$$store$state.dataStore) === null || _this$$store$state$da2 === void 0 ? void 0 : _this$$store$state$da2.tienda) !== null && _this$$store$state$da !== void 0 ? _this$$store$state$da : '';
    let tidio = (_this$analytics_tagma = (_this$analytics_tagma2 = this.analytics_tagmanager) === null || _this$analytics_tagma2 === void 0 ? void 0 : _this$analytics_tagma2.tidio_user) !== null && _this$analytics_tagma !== void 0 ? _this$analytics_tagma : '';
    let FacebookPixel1 = (_this$analytics_tagma3 = (_this$analytics_tagma4 = this.analytics_tagmanager) === null || _this$analytics_tagma4 === void 0 ? void 0 : _this$analytics_tagma4.facebook_pixel_metatag_1) !== null && _this$analytics_tagma3 !== void 0 ? _this$analytics_tagma3 : '';
    let googleMerchants = (_this$analytics_tagma5 = (_this$analytics_tagma6 = this.analytics_tagmanager) === null || _this$analytics_tagma6 === void 0 ? void 0 : _this$analytics_tagma6.google_merchant) !== null && _this$analytics_tagma5 !== void 0 ? _this$analytics_tagma5 : '';
    let geolocation = this.$store.state.dataStore.geolocalizacion;
    let description = (_tienda$descripcion$r = tienda === null || tienda === void 0 ? void 0 : (_tienda$descripcion = tienda.descripcion) === null || _tienda$descripcion === void 0 ? void 0 : _tienda$descripcion.replace(/<[^>]*>?/g, '')) !== null && _tienda$descripcion$r !== void 0 ? _tienda$descripcion$r : '';
    let tipo_letra, tipo_letra2, tipo_letra3;

    // Mapeo de las opciones de tipo de letra para cada template
    const tipoLetraPorTemplate = {
      5: (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.settings) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.tipo_letra) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Roboto',
      7: {
        1: (_this$settingByTempla4 = (_this$settingByTempla5 = this.settingByTemplate7) === null || _this$settingByTempla5 === void 0 ? void 0 : (_this$settingByTempla6 = _this$settingByTempla5.settingGeneral) === null || _this$settingByTempla6 === void 0 ? void 0 : _this$settingByTempla6.fount_1) !== null && _this$settingByTempla4 !== void 0 ? _this$settingByTempla4 : 'David Libre',
        2: (_this$settingByTempla7 = (_this$settingByTempla8 = this.settingByTemplate7) === null || _this$settingByTempla8 === void 0 ? void 0 : (_this$settingByTempla9 = _this$settingByTempla8.settingGeneral) === null || _this$settingByTempla9 === void 0 ? void 0 : _this$settingByTempla9.fount_2) !== null && _this$settingByTempla7 !== void 0 ? _this$settingByTempla7 : 'Great Vibes',
        3: (_this$settingByTempla10 = (_this$settingByTempla11 = this.settingByTemplate7) === null || _this$settingByTempla11 === void 0 ? void 0 : (_this$settingByTempla12 = _this$settingByTempla11.settingGeneral) === null || _this$settingByTempla12 === void 0 ? void 0 : _this$settingByTempla12.fount_3) !== null && _this$settingByTempla10 !== void 0 ? _this$settingByTempla10 : 'Lora'
      },
      9: {
        1: (_this$settingByTempla13 = (_this$settingByTempla14 = this.settingByTemplate9) === null || _this$settingByTempla14 === void 0 ? void 0 : (_this$settingByTempla15 = _this$settingByTempla14.settingGeneral) === null || _this$settingByTempla15 === void 0 ? void 0 : _this$settingByTempla15.fount_1) !== null && _this$settingByTempla13 !== void 0 ? _this$settingByTempla13 : 'Poppins',
        2: (_this$settingByTempla16 = (_this$settingByTempla17 = this.settingByTemplate9) === null || _this$settingByTempla17 === void 0 ? void 0 : (_this$settingByTempla18 = _this$settingByTempla17.settingGeneral) === null || _this$settingByTempla18 === void 0 ? void 0 : _this$settingByTempla18.fount_2) !== null && _this$settingByTempla16 !== void 0 ? _this$settingByTempla16 : 'Roboto'
      },
      10: (_this$settingByTempla19 = (_this$settingByTempla20 = this.settingByTemplate10) === null || _this$settingByTempla20 === void 0 ? void 0 : (_this$settingByTempla21 = _this$settingByTempla20.settingGeneral) === null || _this$settingByTempla21 === void 0 ? void 0 : _this$settingByTempla21.fount_1) !== null && _this$settingByTempla19 !== void 0 ? _this$settingByTempla19 : 'Roboto',
      11: (_this$settingByTempla22 = (_this$settingByTempla23 = this.settingByTemplate11) === null || _this$settingByTempla23 === void 0 ? void 0 : (_this$settingByTempla24 = _this$settingByTempla23.settingGeneral) === null || _this$settingByTempla24 === void 0 ? void 0 : _this$settingByTempla24.fount_1) !== null && _this$settingByTempla22 !== void 0 ? _this$settingByTempla22 : 'Roboto',
      99: 'Poppins',
      12: (_this$settingByTempla25 = (_this$settingByTempla26 = this.settingByTemplate12) === null || _this$settingByTempla26 === void 0 ? void 0 : _this$settingByTempla26.fontFamily) !== null && _this$settingByTempla25 !== void 0 ? _this$settingByTempla25 : 'Poppins',
      13: (_this$settingByTempla27 = (_this$settingByTempla28 = this.settingByTemplate13) === null || _this$settingByTempla28 === void 0 ? void 0 : (_this$settingByTempla29 = _this$settingByTempla28.settingGeneral) === null || _this$settingByTempla29 === void 0 ? void 0 : _this$settingByTempla29.fount_1) !== null && _this$settingByTempla27 !== void 0 ? _this$settingByTempla27 : 'Roboto',
      14: (_this$settingByTempla30 = (_this$settingByTempla31 = this.settingByTemplate14) === null || _this$settingByTempla31 === void 0 ? void 0 : (_this$settingByTempla32 = _this$settingByTempla31.settingsGeneral) === null || _this$settingByTempla32 === void 0 ? void 0 : _this$settingByTempla32.fount_1) !== null && _this$settingByTempla30 !== void 0 ? _this$settingByTempla30 : 'Poppins',
      15: (_this$settingByTempla33 = (_this$settingByTempla34 = this.settingByTemplate15) === null || _this$settingByTempla34 === void 0 ? void 0 : (_this$settingByTempla35 = _this$settingByTempla34.settingGeneral) === null || _this$settingByTempla35 === void 0 ? void 0 : _this$settingByTempla35.font) !== null && _this$settingByTempla33 !== void 0 ? _this$settingByTempla33 : 'Poppins',
      16: (_this$settingByTempla36 = (_this$settingByTempla37 = this.settingByTemplate16) === null || _this$settingByTempla37 === void 0 ? void 0 : (_this$settingByTempla38 = _this$settingByTempla37.settingsGeneral) === null || _this$settingByTempla38 === void 0 ? void 0 : _this$settingByTempla38.fount_1) !== null && _this$settingByTempla36 !== void 0 ? _this$settingByTempla36 : 'Poppins'
    };

    // Verifica si el valor para el template actual es un objeto
    const valor = tipoLetraPorTemplate[this.template];
    if (typeof valor === 'object') {
      tipo_letra = valor[1];
      tipo_letra2 = valor[2];
      tipo_letra3 = valor[3];
    } else {
      tipo_letra = valor;
    }
    return {
      title: (_tienda$nombre = tienda === null || tienda === void 0 ? void 0 : tienda.nombre) !== null && _tienda$nombre !== void 0 ? _tienda$nombre : 'Tienda Online',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [{
        hid: 'utf-8',
        charset: 'utf-8'
      }, {
        hid: 'x-ua-compatible',
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge'
      }, {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0'
      }, {
        hid: 'description',
        name: 'description',
        content: description !== null && description !== void 0 ? description : 'Tienda Online'
      }, {
        hid: 'subject',
        name: 'subject',
        content: 'Tienda Online'
      }, {
        hid: 'summary',
        name: 'summary',
        content: description !== null && description !== void 0 ? description : 'Tienda Online'
      }, {
        hid: 'url',
        name: 'url',
        content: (_tienda$dominio = tienda === null || tienda === void 0 ? void 0 : tienda.dominio) !== null && _tienda$dominio !== void 0 ? _tienda$dominio : `https://${tienda.subdominio}.komercia.co`
      }, {
        hid: 'language',
        name: 'language',
        content: 'ES'
      }, {
        hid: 'author',
        name: 'author',
        content: 'Komercia'
      }, {
        hid: 'robots',
        name: 'robots',
        content: 'index,follow'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'tienda, store, shop, shopping, tienda online, online, Komercia, producto, articulo'
      }, {
        hid: 'distribution',
        name: 'distribution',
        content: 'global'
      }, {
        hid: 'Content-Language',
        'http-equiv': 'Content-Language',
        content: 'es'
      },
      //openGraph meta
      {
        hid: 'og:title',
        name: 'og:title',
        content: (_tienda$nombre2 = tienda === null || tienda === void 0 ? void 0 : tienda.nombre) !== null && _tienda$nombre2 !== void 0 ? _tienda$nombre2 : 'Tienda'
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: `Tienda online ${tienda.nombre}`
      }, {
        hid: 'og:url',
        name: 'og:url',
        content: (_tienda$dominio2 = tienda === null || tienda === void 0 ? void 0 : tienda.dominio) !== null && _tienda$dominio2 !== void 0 ? _tienda$dominio2 : `https://${tienda.subdominio}.komercia.co`
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: `${this.$store.state.urlKomercia}/logos/${tienda.logo}`
      }, {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: (_tienda$nombre3 = tienda === null || tienda === void 0 ? void 0 : tienda.nombre) !== null && _tienda$nombre3 !== void 0 ? _tienda$nombre3 : 'Tienda'
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: description ? description : 'Tienda Online'
      }, {
        hid: 'og:email',
        name: 'og:email',
        content: tienda.email_tienda
      }, {
        hid: 'og:phone_number',
        name: 'og:phone_number',
        content: `${tienda.telefono}`
      }, {
        hid: 'og:latitude',
        name: 'og:latitude',
        content: (_geolocation$latitud = geolocation === null || geolocation === void 0 ? void 0 : geolocation.latitud) !== null && _geolocation$latitud !== void 0 ? _geolocation$latitud : ''
      }, {
        hid: 'og:longitude',
        name: 'og:longitude',
        content: (_geolocation$longitud = geolocation === null || geolocation === void 0 ? void 0 : geolocation.longitud) !== null && _geolocation$longitud !== void 0 ? _geolocation$longitud : ''
      }, {
        hid: 'og:street-address',
        name: 'og:street-address',
        content: (_geolocation$direccio = geolocation === null || geolocation === void 0 ? void 0 : geolocation.direccion) !== null && _geolocation$direccio !== void 0 ? _geolocation$direccio : ''
      }, {
        name: 'facebook-domain-verification',
        content: FacebookPixel1 !== null && FacebookPixel1 !== void 0 ? FacebookPixel1 : ''
      }, {
        name: 'google-site-verification',
        content: googleMerchants !== null && googleMerchants !== void 0 ? googleMerchants : 'ce4pJPC3AEQoDU6jNkAEqV-Dwa1OUU8GxtRTR0d_MM8'
      }, {
        name: 'Content-Security-Policy',
        content: "script-src 'none'"
      }, {
        name: 'Cache-control',
        content: 'no-cache, no-store, must-revalidate'
      }, {
        name: 'Pragma',
        content: 'no-cache'
      }],
      script: [{
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyByh33xchBmphNi10U-eB3oCX9sVVT4fiY'
      }, {
        src: tidio ? `https://code.tidio.co/${tidio}.js` : ''
      }],
      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: `${this.$store.state.urlKomercia}/logos/${tienda.logo}`
      }, {
        href: this.template == 5 || this.template == 7 || this.template == 9 || this.template == 10 || this.template == 11 || this.template == 13 || this.template == 12 || this.template == 14 || this.template == 15 || this.template == 16 || this.template == 99 ? `https://fonts.googleapis.com/css2?family=${tipo_letra}&display=swap` : '',
        rel: 'stylesheet'
      }, {
        href: this.template == 7 || this.template == 9 ? `https://fonts.googleapis.com/css2?family=${tipo_letra2}&display=swap` : '',
        rel: 'stylesheet'
      }, {
        href: this.template == 7 ? `https://fonts.googleapis.com/css2?family=${tipo_letra3}&display=swap` : '',
        rel: 'stylesheet'
      }]
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['template', 'dataStore', 'dataCookies', 'settingBase', 'settingByTemplate', 'settingByTemplate7', 'settingByTemplate9', 'settingByTemplate10', 'settingByTemplate11', 'settingByTemplate12', 'settingByTemplate13', 'settingByTemplate14', 'settingByTemplate15', 'settingByTemplate16', 'analytics_tagmanager']),
    headerTemplate() {
      const headerComponent = this.headerComponentMap[parseInt(this.template)] || '';
      return headerComponent;
    },
    footerTemplate() {
      const footerComponent = this.footerComponentMap[parseInt(this.template)] || '';
      return footerComponent;
    },
    componentsProps() {
      var _this$settingByTempla39, _this$settingByTempla40, _this$settingByTempla41, _this$settingByTempla42, _this$settingByTempla43, _this$settingByTempla44, _this$settingByTempla45, _this$settingByTempla46, _this$settingByTempla47, _this$settingByTempla48, _this$settingByTempla49, _this$settingByTempla50, _this$settingByTempla51, _this$settingByTempla52, _this$settingByTempla53, _this$settingByTempla54, _this$settingByTempla55, _this$settingByTempla56, _this$settingByTempla57, _this$settingByTempla58, _this$settingByTempla59, _this$settingByTempla60, _this$settingByTempla61, _this$settingByTempla62, _this$settingByTempla63, _this$settingByTempla64, _this$settingByTempla65, _this$settingByTempla66, _this$settingByTempla67, _this$settingByTempla68, _this$settingByTempla69, _this$settingByTempla70, _this$settingByTempla71, _this$settingByTempla72, _this$settingByTempla73, _this$settingByTempla74, _this$settingByTempla75, _this$settingByTempla76, _this$settingByTempla77, _this$settingByTempla78, _this$settingByTempla79, _this$settingByTempla80, _this$settingByTempla81, _this$settingByTempla82, _this$settingByTempla83, _this$settingByTempla84, _this$settingByTempla85, _this$settingByTempla86, _this$settingByTempla87, _this$settingByTempla88, _this$settingByTempla89, _this$settingByTempla90, _this$settingByTempla91, _this$settingByTempla92, _this$settingByTempla93, _this$settingByTempla94, _this$settingByTempla95, _this$settingByTempla96, _this$settingByTempla97, _this$settingByTempla98, _this$settingByTempla99, _this$settingByTempla100, _this$settingByTempla101, _this$settingByTempla102, _this$settingByTempla103, _this$settingByTempla104, _this$settingByTempla105, _this$settingByTempla106, _this$settingByTempla107, _this$settingByTempla108;
      return {
        dataStore: this.dataStore,
        settingByTemplate: (_this$settingByTempla39 = (_this$settingByTempla40 = this.settingByTemplate) === null || _this$settingByTempla40 === void 0 ? void 0 : _this$settingByTempla40.settings) !== null && _this$settingByTempla39 !== void 0 ? _this$settingByTempla39 : this.settingBase,
        settingByTemplate7: this.settingByTemplate7 ? [{
          setting7Header: (_this$settingByTempla41 = (_this$settingByTempla42 = this.settingByTemplate7) === null || _this$settingByTempla42 === void 0 ? void 0 : _this$settingByTempla42.header) !== null && _this$settingByTempla41 !== void 0 ? _this$settingByTempla41 : null,
          setting7Footer: (_this$settingByTempla43 = (_this$settingByTempla44 = this.settingByTemplate7) === null || _this$settingByTempla44 === void 0 ? void 0 : _this$settingByTempla44.footer) !== null && _this$settingByTempla43 !== void 0 ? _this$settingByTempla43 : null,
          setting7General: (_this$settingByTempla45 = (_this$settingByTempla46 = this.settingByTemplate7) === null || _this$settingByTempla46 === void 0 ? void 0 : _this$settingByTempla46.settingGeneral) !== null && _this$settingByTempla45 !== void 0 ? _this$settingByTempla45 : null,
          settingKProdutCard: (_this$settingByTempla47 = (_this$settingByTempla48 = this.settingByTemplate7) === null || _this$settingByTempla48 === void 0 ? void 0 : _this$settingByTempla48.card) !== null && _this$settingByTempla47 !== void 0 ? _this$settingByTempla47 : null
        }] : null,
        settingByTemplate9: this.settingByTemplate9 ? [{
          setting9Header: (_this$settingByTempla49 = (_this$settingByTempla50 = this.settingByTemplate9) === null || _this$settingByTempla50 === void 0 ? void 0 : _this$settingByTempla50.header) !== null && _this$settingByTempla49 !== void 0 ? _this$settingByTempla49 : null,
          setting9Footer: (_this$settingByTempla51 = (_this$settingByTempla52 = this.settingByTemplate9) === null || _this$settingByTempla52 === void 0 ? void 0 : _this$settingByTempla52.footer) !== null && _this$settingByTempla51 !== void 0 ? _this$settingByTempla51 : null,
          setting9General: (_this$settingByTempla53 = (_this$settingByTempla54 = this.settingByTemplate9) === null || _this$settingByTempla54 === void 0 ? void 0 : _this$settingByTempla54.settingGeneral) !== null && _this$settingByTempla53 !== void 0 ? _this$settingByTempla53 : null
        }] : null,
        settingByTemplate10: this.settingByTemplate10 ? [{
          setting10Header: (_this$settingByTempla55 = (_this$settingByTempla56 = this.settingByTemplate10) === null || _this$settingByTempla56 === void 0 ? void 0 : _this$settingByTempla56.header) !== null && _this$settingByTempla55 !== void 0 ? _this$settingByTempla55 : null,
          setting10Footer: (_this$settingByTempla57 = (_this$settingByTempla58 = this.settingByTemplate10) === null || _this$settingByTempla58 === void 0 ? void 0 : _this$settingByTempla58.footer) !== null && _this$settingByTempla57 !== void 0 ? _this$settingByTempla57 : null,
          setting10General: (_this$settingByTempla59 = (_this$settingByTempla60 = this.settingByTemplate10) === null || _this$settingByTempla60 === void 0 ? void 0 : _this$settingByTempla60.settingGeneral) !== null && _this$settingByTempla59 !== void 0 ? _this$settingByTempla59 : null,
          pages: (_this$settingByTempla61 = (_this$settingByTempla62 = this.settingByTemplate10) === null || _this$settingByTempla62 === void 0 ? void 0 : _this$settingByTempla62.pages) !== null && _this$settingByTempla61 !== void 0 ? _this$settingByTempla61 : null
        }] : null,
        settingByTemplate11: this.settingByTemplate11 ? [{
          setting11Header: (_this$settingByTempla63 = (_this$settingByTempla64 = this.settingByTemplate11) === null || _this$settingByTempla64 === void 0 ? void 0 : _this$settingByTempla64.header) !== null && _this$settingByTempla63 !== void 0 ? _this$settingByTempla63 : null,
          setting11Footer: (_this$settingByTempla65 = (_this$settingByTempla66 = this.settingByTemplate11) === null || _this$settingByTempla66 === void 0 ? void 0 : _this$settingByTempla66.footer) !== null && _this$settingByTempla65 !== void 0 ? _this$settingByTempla65 : null,
          setting11General: (_this$settingByTempla67 = (_this$settingByTempla68 = this.settingByTemplate11) === null || _this$settingByTempla68 === void 0 ? void 0 : _this$settingByTempla68.settingGeneral) !== null && _this$settingByTempla67 !== void 0 ? _this$settingByTempla67 : null,
          newsletter: (_this$settingByTempla69 = (_this$settingByTempla70 = this.settingByTemplate11) === null || _this$settingByTempla70 === void 0 ? void 0 : _this$settingByTempla70.newsletter) !== null && _this$settingByTempla69 !== void 0 ? _this$settingByTempla69 : null,
          pages: (_this$settingByTempla71 = (_this$settingByTempla72 = this.settingByTemplate11) === null || _this$settingByTempla72 === void 0 ? void 0 : _this$settingByTempla72.pages) !== null && _this$settingByTempla71 !== void 0 ? _this$settingByTempla71 : null
        }] : null,
        settingByTemplate13: this.settingByTemplate13 ? [{
          setting13Header: (_this$settingByTempla73 = (_this$settingByTempla74 = this.settingByTemplate13) === null || _this$settingByTempla74 === void 0 ? void 0 : _this$settingByTempla74.header) !== null && _this$settingByTempla73 !== void 0 ? _this$settingByTempla73 : null,
          setting13Footer: (_this$settingByTempla75 = (_this$settingByTempla76 = this.settingByTemplate13) === null || _this$settingByTempla76 === void 0 ? void 0 : _this$settingByTempla76.footer) !== null && _this$settingByTempla75 !== void 0 ? _this$settingByTempla75 : null,
          setting13General: (_this$settingByTempla77 = (_this$settingByTempla78 = this.settingByTemplate13) === null || _this$settingByTempla78 === void 0 ? void 0 : _this$settingByTempla78.settingGeneral) !== null && _this$settingByTempla77 !== void 0 ? _this$settingByTempla77 : null,
          pages: (_this$settingByTempla79 = (_this$settingByTempla80 = this.settingByTemplate13) === null || _this$settingByTempla80 === void 0 ? void 0 : _this$settingByTempla80.pages) !== null && _this$settingByTempla79 !== void 0 ? _this$settingByTempla79 : null
        }] : null,
        settingByTemplate14: this.settingByTemplate14 ? [{
          setting14Header: (_this$settingByTempla81 = (_this$settingByTempla82 = this.settingByTemplate14) === null || _this$settingByTempla82 === void 0 ? void 0 : _this$settingByTempla82.header) !== null && _this$settingByTempla81 !== void 0 ? _this$settingByTempla81 : null,
          setting14Footer: (_this$settingByTempla83 = (_this$settingByTempla84 = this.settingByTemplate14) === null || _this$settingByTempla84 === void 0 ? void 0 : _this$settingByTempla84.footer) !== null && _this$settingByTempla83 !== void 0 ? _this$settingByTempla83 : null,
          setting14General: (_this$settingByTempla85 = (_this$settingByTempla86 = this.settingByTemplate14) === null || _this$settingByTempla86 === void 0 ? void 0 : _this$settingByTempla86.settingsGeneral) !== null && _this$settingByTempla85 !== void 0 ? _this$settingByTempla85 : null,
          pages: (_this$settingByTempla87 = (_this$settingByTempla88 = this.settingByTemplate14) === null || _this$settingByTempla88 === void 0 ? void 0 : _this$settingByTempla88.pages) !== null && _this$settingByTempla87 !== void 0 ? _this$settingByTempla87 : null
          // listProductsFilter:
          //   this.settingByTemplate14?.listProductsFilter ?? null,
        }] : null,
        settingByTemplate15: this.settingByTemplate15 ? [{
          header: (_this$settingByTempla89 = (_this$settingByTempla90 = this.settingByTemplate15) === null || _this$settingByTempla90 === void 0 ? void 0 : _this$settingByTempla90.header) !== null && _this$settingByTempla89 !== void 0 ? _this$settingByTempla89 : null,
          footer: (_this$settingByTempla91 = (_this$settingByTempla92 = this.settingByTemplate15) === null || _this$settingByTempla92 === void 0 ? void 0 : _this$settingByTempla92.footer) !== null && _this$settingByTempla91 !== void 0 ? _this$settingByTempla91 : null,
          newsletter: (_this$settingByTempla93 = (_this$settingByTempla94 = this.settingByTemplate15) === null || _this$settingByTempla94 === void 0 ? void 0 : _this$settingByTempla94.newsLetter) !== null && _this$settingByTempla93 !== void 0 ? _this$settingByTempla93 : null,
          settingGeneral: (_this$settingByTempla95 = (_this$settingByTempla96 = this.settingByTemplate15) === null || _this$settingByTempla96 === void 0 ? void 0 : _this$settingByTempla96.settingGeneral) !== null && _this$settingByTempla95 !== void 0 ? _this$settingByTempla95 : null,
          pages: (_this$settingByTempla97 = (_this$settingByTempla98 = this.settingByTemplate15) === null || _this$settingByTempla98 === void 0 ? void 0 : _this$settingByTempla98.pageHeader) !== null && _this$settingByTempla97 !== void 0 ? _this$settingByTempla97 : null
          // listProductsFilter:
          //   this.settingByTemplate15?.listProductsFilter ?? null,
        }] : null,
        settingByTemplate16: this.settingByTemplate16 ? [{
          header: (_this$settingByTempla99 = (_this$settingByTempla100 = this.settingByTemplate16) === null || _this$settingByTempla100 === void 0 ? void 0 : _this$settingByTempla100.header) !== null && _this$settingByTempla99 !== void 0 ? _this$settingByTempla99 : null,
          footer: (_this$settingByTempla101 = (_this$settingByTempla102 = this.settingByTemplate16) === null || _this$settingByTempla102 === void 0 ? void 0 : _this$settingByTempla102.footer) !== null && _this$settingByTempla101 !== void 0 ? _this$settingByTempla101 : null,
          newsletter: (_this$settingByTempla103 = (_this$settingByTempla104 = this.settingByTemplate16) === null || _this$settingByTempla104 === void 0 ? void 0 : _this$settingByTempla104.newsletter) !== null && _this$settingByTempla103 !== void 0 ? _this$settingByTempla103 : null,
          settingGeneral: (_this$settingByTempla105 = (_this$settingByTempla106 = this.settingByTemplate16) === null || _this$settingByTempla106 === void 0 ? void 0 : _this$settingByTempla106.settingsGeneral) !== null && _this$settingByTempla105 !== void 0 ? _this$settingByTempla105 : null,
          pages: (_this$settingByTempla107 = (_this$settingByTempla108 = this.settingByTemplate16) === null || _this$settingByTempla108 === void 0 ? void 0 : _this$settingByTempla108.pageHeader) !== null && _this$settingByTempla107 !== void 0 ? _this$settingByTempla107 : null
        }] : null
      };
    },
    stateModalPwd: {
      get() {
        return this.$store.state.stateModalPwd;
      },
      set(value) {
        this.$store.commit('SET_STATE_MODAL_PWD', value);
      }
    }
  },
  beforeMount() {
    if (this.dataStore.tienda.dominio) {
      caches.keys().then(function (names) {
        for (let name of names) caches.delete(name);
      });
    }
  },
  async mounted() {
    var _this$analytics_tagma7, _this$$route$query, _this$$route$query2;
    // Configura y habilita el seguimiento de Facebook Pixel si está disponible
    if (((_this$analytics_tagma7 = this.analytics_tagmanager) === null || _this$analytics_tagma7 === void 0 ? void 0 : _this$analytics_tagma7.pixel_facebook) != null) {
      this.$fb.setPixelId(this.analytics_tagmanager.pixel_facebook);
      this.$fb.track('PageView');
      this.$fb.enable();
    }

    // Ejecuta las tres dispatches de manera concurrente
    await Promise.all([this.$store.dispatch('GET_COOKIES'), this.$store.dispatch('GET_COOKIES_PWD'), this.$store.dispatch('GET_SHOPPING_CART')]);

    // Borra todos los elementos del carrito y actualiza el contenido si la query 'clearCart' es 'true'
    if (((_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.clearCart) === 'true') {
      this.$store.commit('DELETE_ALL_ITEMS_CART');
      this.$store.commit('UPDATE_CONTENT_CART');
    }

    // Establece 'SET_OPEN_ORDER' en true si la query 'openCart' es 'true'
    if (((_this$$route$query2 = this.$route.query) === null || _this$$route$query2 === void 0 ? void 0 : _this$$route$query2.openCart) === 'true') {
      this.$store.commit('SET_OPEN_ORDER', true);
    }

    // Agrega un listener de mensajes
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate);
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
    redirectWhatsApp() {
      let phone_number_whatsapp = this.dataStore.tienda.whatsapp;
      if (phone_number_whatsapp.charAt(0) === '+') {
        phone_number_whatsapp = phone_number_whatsapp.slice(1);
      } else {
        phone_number_whatsapp = `57${phone_number_whatsapp}`;
      }
      const baseUrl = 'https://wa.me/';
      const text = this.constructMessageText();
      const whatsappUrl = this.mobileCheck() ? `${baseUrl}${phone_number_whatsapp}/?text=${text}` : `https://web.whatsapp.com/send?phone=${phone_number_whatsapp}&text=${text}`;
      window.open(whatsappUrl, '_blank');
    },
    constructMessageText() {
      const tienda = this.dataStore.tienda;
      const nombre = encodeURIComponent(tienda.nombre);
      const url = encodeURIComponent(window.location);
      switch (tienda.lenguaje) {
        case 'en':
          return `Hi%2C%20I%20came%20from%20your%20online%20store%20${nombre}%20and%20I%20would%20like%20to%20receive%20more%20information.%20%0AURL%3A%20${url}`;
        case 'pt':
          return `Ol%C3%A1%2C%20vim%20de%20sua%20loja%20virtual%20${nombre}%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es.%20%0AURL%3A%20${url}`;
        default:
          return `Hola%20vengo%20de%20tu%20tienda%20online%20${nombre}%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n%20%0AURL%3A%20${url}`;
      }
    },
    acceptCookies() {
      document.getElementById('modalCookies').style.bottom = '-135px';
      document.cookie = 'authCookies = 1; path=/; expires=Thu, 01 Dec 2050 00:00:00 UTC;';
    },
    acceptClose() {
      document.getElementById('modalNotificacion').style.zIndex = '-2';
      document.getElementById('modalNotificacion').style.opacity = '0';
    },
    addEventListenerTemplate(e) {
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080')) {
        if (e && e.data) {
          if (e.data.type == 'settingModal') {
            this.$store.commit('SET_CURRENT_SETTING_MODAL', e.data);
            if (e.data.data && e.data.data.stateModal && e.data.data.stateModal == 1) {
              this.stateModalPwd = false;
            } else {
              this.stateModalPwd = true;
            }
          }
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/default.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(620)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "114ed706"
  
)

/* harmony default export */ var layouts_default = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(621);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4dddb41f", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    expiredDate(date) {
      Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
      if (date == null) {
        return true;
      } else {
        let x = date;
        let d1 = new Date();
        let d2 = new Date(x);
        //Vencido
        if (d1 > this.sumarDias(d2, 3)) {
          return false;
        }
        //Activo
        else {
          return true;
        }
      }
    },
    sumarDias(fecha, date) {
      fecha.setDate(fecha.getDate() + date);
      return fecha;
    }
  }
});

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_f7e98002_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(359);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_f7e98002_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_f7e98002_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_f7e98002_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_f7e98002_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--purple:#4429b4;--green:#00dd8d;--magenta:#c52675;--yellow:#f2b931;--color_hover_text:#e64956;--btnhover:#929292;--radius_btn:5px}html{scroll-behavior:smooth}*{box-sizing:border-box;margin:0;outline:none!important;padding:0;scroll-behavior:smooth;-webkit-text-decoration:none;text-decoration:none}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.layout-enter-active,.layout-leave-active{transition:opacity .5s}.layout-enter,.layout-leave-to{opacity:0}::-webkit-scrollbar{-webkit-appearance:none}::-webkit-scrollbar:vertical{width:11px}::-webkit-scrollbar-button,::-webkit-scrollbar-button:increment{display:none}::-webkit-scrollbar:horizontal{height:10px}::-webkit-scrollbar-thumb{background-color:#797979;border:2px solid #f1f2f3;border-radius:20px}.el-popover{display:none}.wrapper-whatsapp{background-color:#25d366;border-radius:10px 0 0 10px;color:#fff;cursor:pointer;display:flex;flex-direction:row;max-height:51px;overflow:hidden;position:fixed;right:0;top:50%;transform:translate(108px);transition:all .5s ease-in-out;vertical-align:middle;width:155px;z-index:50}.wrapper-whatsapp:hover{transform:translate(0)}.wrapper-whatsapp span{color:#fff;font-size:15px;font-weight:bolder;line-height:16px;margin-left:5px;padding-bottom:10px;padding-top:8px;position:relative}.button-whatsapp{fill:#fff;font-weight:700;line-height:30px;padding:8px;text-align:center;transform:rotate(0deg);transition:all .5s ease-in-out;width:50px}.button-whatsapp:hover{transform:rotate(1turn)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=default.js.map