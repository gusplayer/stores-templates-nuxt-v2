exports.ids = [327,36,37];
exports.modules = {

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/wa.vue?vue&type=template&id=221c24b0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.dataStore ? _vm._ssrNode("<div class=\"w-full flex justify-center items-center bg-slate-100\" data-v-221c24b0>", "</div>", [_vm.stateModalPwd ? _vm._ssrNode("<div data-v-221c24b0>", "</div>", [_c('nuxt')], 1) : _c('koModalSecurity', {
    attrs: {
      "data-store": _vm.dataStore
    }
  }), _vm._ssrNode(" "), _vm.dataStore.tienda.whatsapp && _vm.dataStore.tienda.id_tienda != 16436 ? _vm._ssrNode("<div class=\"wrapper-whatsapp\" data-v-221c24b0>", "</div>", [_c('koWhatsApp', {
    staticClass: "button-whatsapp"
  }), _vm._ssrNode(" <span data-v-221c24b0>\n        WhatsApp\n        <br data-v-221c24b0> <small data-v-221c24b0>" + _vm._ssrEscape("\n          " + _vm._s(_vm.dataStore.tienda.whatsapp) + "\n        ") + "</small></span>")], 2) : _vm._e()], 2) : _vm._ssrNode("<div data-v-221c24b0>", "</div>", [_c('koTiendaError')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/wa.vue?vue&type=template&id=221c24b0&scoped=true&

// EXTERNAL MODULE: ./components/Ko-errorStore.vue + 4 modules
var Ko_errorStore = __webpack_require__(599);

// EXTERNAL MODULE: ./components/modal/Ko-modal-security.vue + 4 modules
var Ko_modal_security = __webpack_require__(600);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/wa.vue?vue&type=script&lang=js&



/* harmony default export */ var wavue_type_script_lang_js_ = ({
  name: 'LayoutsWhatsApp',
  components: {
    koTiendaError: Ko_errorStore["default"],
    koModalSecurity: Ko_modal_security["default"],
    koWhatsApp: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 1325))
  },
  head() {
    var _this$$store$state$da, _this$$store$state, _this$$store$state$da2, _tienda$descripcion$r, _tienda$descripcion, _this$analytics_tagma, _this$analytics_tagma2, _this$analytics_tagma3, _this$analytics_tagma4, _tienda$dominio, _tienda$nombre, _tienda$dominio2, _tienda$nombre2, _geolocation$latitud, _geolocation$longitud, _geolocation$direccio;
    let tienda = (_this$$store$state$da = (_this$$store$state = this.$store.state) === null || _this$$store$state === void 0 ? void 0 : (_this$$store$state$da2 = _this$$store$state.dataStore) === null || _this$$store$state$da2 === void 0 ? void 0 : _this$$store$state$da2.tienda) !== null && _this$$store$state$da !== void 0 ? _this$$store$state$da : '';
    let geolocation = this.$store.state.dataStore.geolocalizacion;
    let description = (_tienda$descripcion$r = tienda === null || tienda === void 0 ? void 0 : (_tienda$descripcion = tienda.descripcion) === null || _tienda$descripcion === void 0 ? void 0 : _tienda$descripcion.replace(/<[^>]*>?/g, '')) !== null && _tienda$descripcion$r !== void 0 ? _tienda$descripcion$r : '';
    let FacebookPixel1 = (_this$analytics_tagma = (_this$analytics_tagma2 = this.analytics_tagmanager) === null || _this$analytics_tagma2 === void 0 ? void 0 : _this$analytics_tagma2.facebook_pixel_metatag_1) !== null && _this$analytics_tagma !== void 0 ? _this$analytics_tagma : '';
    let googleMerchants = (_this$analytics_tagma3 = (_this$analytics_tagma4 = this.analytics_tagmanager) === null || _this$analytics_tagma4 === void 0 ? void 0 : _this$analytics_tagma4.google_merchant) !== null && _this$analytics_tagma3 !== void 0 ? _this$analytics_tagma3 : '';
    return {
      title: tienda.nombre ? tienda.nombre : 'Tienda',
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
        content: (_tienda$nombre = tienda === null || tienda === void 0 ? void 0 : tienda.nombre) !== null && _tienda$nombre !== void 0 ? _tienda$nombre : 'Tienda'
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
        content: (_tienda$nombre2 = tienda === null || tienda === void 0 ? void 0 : tienda.nombre) !== null && _tienda$nombre2 !== void 0 ? _tienda$nombre2 : 'Tienda'
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
      }],
      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: `${this.$store.state.urlKomercia}/logos/${tienda.logo}`
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap'
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
      }]
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'stateModalPwd', 'analytics_tagmanager'])
  },
  beforeMount() {
    if (this.dataStore.tienda.dominio) {
      caches.keys().then(function (names) {
        for (let name of names) caches.delete(name);
      });
    }
  },
  async mounted() {
    var _this$analytics_tagma5, _this$$route$query, _this$$route$query2;
    // Configura y habilita el seguimiento de Facebook Pixel si está disponible
    if (((_this$analytics_tagma5 = this.analytics_tagmanager) === null || _this$analytics_tagma5 === void 0 ? void 0 : _this$analytics_tagma5.pixel_facebook) != null) {
      this.$fb.setPixelId(this.analytics_tagmanager.pixel_facebook);
      this.$fb.track('PageView');
      this.$fb.enable();
    }

    // Ejecuta las acciones de forma concurrente usando Promise.all
    await Promise.all([this.$store.dispatch('GET_COOKIES_PWD'), this.$store.dispatch('GET_SHOPPING_CART')]);

    // Borra todos los elementos del carrito y actualiza el contenido si la query 'clearCart' es 'true'
    if (((_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.clearCart) === 'true') {
      this.$store.commit('DELETE_ALL_ITEMS_CART');
      this.$store.commit('UPDATE_CONTENT_CART');
    }

    // Establece 'SET_OPEN_ORDER' en true si la query 'openCart' es 'true'
    if (((_this$$route$query2 = this.$route.query) === null || _this$$route$query2 === void 0 ? void 0 : _this$$route$query2.openCart) === 'true') {
      this.$store.commit('SET_OPEN_ORDER', true);
    }
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
    }
  }
});
// CONCATENATED MODULE: ./layouts/wa.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_wavue_type_script_lang_js_ = (wavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/wa.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(647)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_wavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "221c24b0",
  "11a39c84"
  
)

/* harmony default export */ var wa = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0d748ca6", content, true, context)
};

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0ed98420", content, true, context)
};

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_errorStore_vue_vue_type_style_index_0_id_07981f2d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_errorStore_vue_vue_type_style_index_0_id_07981f2d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_errorStore_vue_vue_type_style_index_0_id_07981f2d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_errorStore_vue_vue_type_style_index_0_id_07981f2d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_errorStore_vue_vue_type_style_index_0_id_07981f2d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_error[data-v-07981f2d]{--tw-bg-opacity:1;align-items:center;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));box-sizing:border-box;display:flex;justify-content:center;width:100%}.contenedor[data-v-07981f2d]{align-items:center;display:grid;grid-auto-flow:column;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:center;max-width:1300px;min-height:100vh;padding:10px 20px;width:100%}.content-left[data-v-07981f2d]{align-items:center}.content-left[data-v-07981f2d],.content-right[data-v-07981f2d]{display:flex;justify-content:center;width:100%}.content-right[data-v-07981f2d]{align-items:flex-start;flex-direction:column}.logokomercia[data-v-07981f2d]{width:200px}.logokomerciaBtn[data-v-07981f2d]{width:120px}.title-error[data-v-07981f2d]{color:#000;font-size:100px;font-weight:700}.subtitle-error[data-v-07981f2d]{color:#000;font-size:22px;font-weight:700;padding:10px 0}.description-error[data-v-07981f2d]{color:#000;font-size:16px}.content-btn[data-v-07981f2d]{display:flex;flex-direction:row;justify-content:space-between;margin-top:20px;max-width:460px;width:100%}.content-btn>div[data-v-07981f2d]{flex:1;max-width:225px;width:100%}.btn-komercia[data-v-07981f2d]{--tw-text-opacity:1;align-items:center;background:#4429b4;border:2px solid #4429b4;border-radius:5px;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity));display:flex;font-size:16px;font-weight:700;justify-content:center;max-height:47px;min-height:47px;padding:8px 12px;transition:all .2s ease-in;width:100%}.btn-komercia[data-v-07981f2d]:hover{background:#623bfc;border:2px solid #623bfc}.btn-error[data-v-07981f2d]{fill:#25d366;align-items:center;background-color:#fff;border:2px solid #25d366;border-radius:5px;color:#25d366;display:flex;flex-direction:row;font-size:16px;font-weight:700;justify-content:center;max-height:47px;min-height:47px;padding:8px 0;transition:all .2s ease-in;width:100%}.btn-error[data-v-07981f2d]:hover{fill:#4429b4;border:2px solid #4429b4;color:#4429b4}.icon-whatsapp[data-v-07981f2d]{margin-right:10px;width:20px}.content-logo[data-v-07981f2d]{background:#3e3e3e;bottom:0;display:flex;justify-content:center;padding:5px 0;position:absolute;width:100%}@media (max-width:1024px){.content-btn[data-v-07981f2d]{justify-content:space-between}.content-btn>div[data-v-07981f2d]{max-width:225px}}@media (max-width:950px){.content-btn[data-v-07981f2d]{flex-direction:column}.content-btn>div[data-v-07981f2d]{max-width:100%}.btn-komercia[data-v-07981f2d]{margin-top:10px}}@media (max-width:770px){.content-right[data-v-07981f2d]{max-width:320px;padding:10px 15px 50px}}@media (max-width:650px){.contenedor[data-v-07981f2d]{display:flex;flex-direction:column}.content-right[data-v-07981f2d]{max-width:80%}}@media (max-width:400px){.content-right[data-v-07981f2d]{max-width:90%}}@media (max-width:330px){.contenedor[data-v-07981f2d]{padding:5px 10px 50px}.content-right[data-v-07981f2d]{max-width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_modal_security_vue_vue_type_style_index_0_id_2fd45905_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_modal_security_vue_vue_type_style_index_0_id_2fd45905_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_modal_security_vue_vue_type_style_index_0_id_2fd45905_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_modal_security_vue_vue_type_style_index_0_id_2fd45905_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_modal_security_vue_vue_type_style_index_0_id_2fd45905_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-security-modal[data-v-2fd45905]{height:100vh;opacity:1;position:fixed;top:0;transition:all .2s ease-in;z-index:99999}.content-security-modal[data-v-2fd45905],.wrapper-security-modal[data-v-2fd45905]{align-items:center;display:flex;justify-content:center;width:100%}.content-security-modal[data-v-2fd45905]{border-radius:5px;box-shadow:0 0 47px 11px rgba(87,87,87,.4);flex-direction:column;max-width:400px;padding:30px 20px}.btn-acceptModal[data-v-2fd45905]{cursor:pointer;max-width:250px;transition:all .2s ease-in}.btn-acceptModal[data-v-2fd45905],.input-text[data-v-2fd45905]{border-radius:5px;font-size:14px;padding:8px 14px;width:100%}.input-text[data-v-2fd45905]{background-color:transparent}.input-text[data-v-2fd45905]::-moz-placeholder{opacity:.7}.input-text[data-v-2fd45905]::placeholder{opacity:.7}.input-text[data-v-2fd45905]:-internal-autofill-selected{background-color:transparent!important;background-image:none!important;color:-internal-light-dark-color(#000,#fff)!important}.input-text[data-v-2fd45905]:-internal-autofill-selected{-webkit-appearance:menulist-button}.input-text[data-v-2fd45905]:active,.input-text[data-v-2fd45905]:focus{border:2px solid hsla(240,5%,52%,.342);outline:0}.inputBox[data-v-2fd45905]{max-width:250px;position:relative;width:100%}#toggle[data-v-2fd45905]{cursor:pointer;position:absolute;right:10px;top:20%}.alert-modal[data-v-2fd45905]{color:red;font-size:14px}@media (max-width:500px){.content-security-modal[data-v-2fd45905]{max-width:350px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(648);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("4e06e732", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    // Imágenes de producto
    idCloudinary(url, width, height) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,f_auto,fl_lossy,q_auto/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad/${fitImage[1]}`;
      } else {
        return url;
      }
    },
    idCloudinaryQuality(url, width, height) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,f_auto,fl_lossy,q_90/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad/${fitImage[1]}`;
      } else {
        return url;
      }
    },
    idCloudinarys(url, width, height) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/c_scale,h_${height},w_${width}/${fitImage[1]}`;
      } else {
        return url;
      }
    },
    idCloudinaryBanner(url, type, width) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      let fitImage3;
      if (fitImage && fitImage.length > 1) {
        fitImage3 = fitImage[1].split('.');
      }
      if (fitImage2[2] == 'res.cloudinary.com') {
        if (type == 'banner') {
          return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/${fitImage3[0]}.webp`;
        } else if (type == 'bannerRes') {
          return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/c_scale,w_${width}/${fitImage3[0]}.webp`;
        }
      } else {
        return url;
      }
    }
  }
});

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Ko-errorStore.vue?vue&type=template&id=07981f2d&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "position": "relative"
    }
  }, [_vm._ssrNode("<div class=\"wrapper_error\" data-v-07981f2d>", "</div>", [_vm._ssrNode("<div class=\"contenedor\" data-v-07981f2d>", "</div>", [_vm._ssrNode("<div class=\"content-left\" data-v-07981f2d><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 800 600\" data-v-07981f2d><g data-v-07981f2d><defs data-v-07981f2d><clipPath id=\"GlassClip\" data-v-07981f2d><path d=\"M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5\n                s-28.485-16.599-34.877-24.192c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13\n                c6.755-0.61,20.546-0.608,41.785,5.087s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z\" data-v-07981f2d></path></clipPath> <clipPath id=\"cordClip\" data-v-07981f2d><rect width=\"800\" height=\"600\" data-v-07981f2d></rect></clipPath></defs> <g id=\"planet\" data-v-07981f2d><circle fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-miterlimit=\"10\" cx=\"572.859\" cy=\"108.803\" r=\"90.788\" data-v-07981f2d></circle> <circle id=\"craterBig\" fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-miterlimit=\"10\" cx=\"548.891\" cy=\"62.319\" r=\"13.074\" data-v-07981f2d></circle> <circle id=\"craterSmall\" fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-miterlimit=\"10\" cx=\"591.743\" cy=\"158.918\" r=\"7.989\" data-v-07981f2d></circle> <path id=\"ring\" fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\tM476.562,101.461c-30.404,2.164-49.691,4.221-49.691,8.007c0,6.853,63.166,12.408,141.085,12.408s141.085-5.555,141.085-12.408\n\t\t\tc0-3.378-15.347-4.988-40.243-7.225\" data-v-07981f2d></path> <path id=\"ringShadow\" opacity=\"0.5\" fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\tM483.985,127.43c23.462,1.531,52.515,2.436,83.972,2.436c36.069,0,68.978-1.19,93.922-3.149\" data-v-07981f2d></path></g> <g id=\"stars\" data-v-07981f2d><g id=\"starsBig\" data-v-07981f2d><g data-v-07981f2d><line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"518.07\" y1=\"245.375\" x2=\"518.07\" y2=\"266.581\" data-v-07981f2d></line> <line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"508.129\" y1=\"255.978\" x2=\"528.01\" y2=\"255.978\" data-v-07981f2d></line></g> <g data-v-07981f2d><line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"154.55\" y1=\"231.391\" x2=\"154.55\" y2=\"252.598\" data-v-07981f2d></line> <line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"144.609\" y1=\"241.995\" x2=\"164.49\" y2=\"241.995\" data-v-07981f2d></line></g> <g data-v-07981f2d><line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"320.135\" y1=\"132.746\" x2=\"320.135\" y2=\"153.952\" data-v-07981f2d></line> <line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"310.194\" y1=\"143.349\" x2=\"330.075\" y2=\"143.349\" data-v-07981f2d></line></g> <g data-v-07981f2d><line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"200.67\" y1=\"483.11\" x2=\"200.67\" y2=\"504.316\" data-v-07981f2d></line> <line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"210.611\" y1=\"493.713\" x2=\"190.73\" y2=\"493.713\" data-v-07981f2d></line></g></g> <g id=\"starsSmall\" data-v-07981f2d><g data-v-07981f2d><line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"432.173\" y1=\"380.52\" x2=\"432.173\" y2=\"391.83\" data-v-07981f2d></line> <line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"426.871\" y1=\"386.175\" x2=\"437.474\" y2=\"386.175\" data-v-07981f2d></line></g> <g data-v-07981f2d><line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"489.555\" y1=\"299.765\" x2=\"489.555\" y2=\"308.124\" data-v-07981f2d></line> <line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"485.636\" y1=\"303.945\" x2=\"493.473\" y2=\"303.945\" data-v-07981f2d></line></g> <g data-v-07981f2d><line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"231.468\" y1=\"291.009\" x2=\"231.468\" y2=\"299.369\" data-v-07981f2d></line> <line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"227.55\" y1=\"295.189\" x2=\"235.387\" y2=\"295.189\" data-v-07981f2d></line></g> <g data-v-07981f2d><line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"244.032\" y1=\"547.539\" x2=\"244.032\" y2=\"555.898\" data-v-07981f2d></line> <line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"247.95\" y1=\"551.719\" x2=\"240.113\" y2=\"551.719\" data-v-07981f2d></line></g> <g data-v-07981f2d><line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"186.359\" y1=\"406.967\" x2=\"186.359\" y2=\"415.326\" data-v-07981f2d></line> <line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"190.277\" y1=\"411.146\" x2=\"182.44\" y2=\"411.146\" data-v-07981f2d></line></g> <g data-v-07981f2d><line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"480.296\" y1=\"406.967\" x2=\"480.296\" y2=\"415.326\" data-v-07981f2d></line> <line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"484.215\" y1=\"411.146\" x2=\"476.378\" y2=\"411.146\" data-v-07981f2d></line></g></g> <g id=\"circlesBig\" data-v-07981f2d><circle fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" cx=\"588.977\" cy=\"255.978\" r=\"7.952\" data-v-07981f2d></circle> <circle fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" cx=\"450.066\" cy=\"320.259\" r=\"7.952\" data-v-07981f2d></circle> <circle fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" cx=\"168.303\" cy=\"353.753\" r=\"7.952\" data-v-07981f2d></circle> <circle fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" cx=\"429.522\" cy=\"201.185\" r=\"7.952\" data-v-07981f2d></circle> <circle fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" cx=\"200.67\" cy=\"176.313\" r=\"7.952\" data-v-07981f2d></circle> <circle fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" cx=\"133.343\" cy=\"477.014\" r=\"7.952\" data-v-07981f2d></circle> <circle fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" cx=\"283.521\" cy=\"568.033\" r=\"7.952\" data-v-07981f2d></circle> <circle fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" cx=\"413.618\" cy=\"482.387\" r=\"7.952\" data-v-07981f2d></circle></g> <g id=\"circlesSmall\" data-v-07981f2d><circle fill=\"#0E0620\" cx=\"549.879\" cy=\"296.402\" r=\"2.651\" data-v-07981f2d></circle> <circle fill=\"#0E0620\" cx=\"253.29\" cy=\"229.24\" r=\"2.651\" data-v-07981f2d></circle> <circle fill=\"#0E0620\" cx=\"434.824\" cy=\"263.931\" r=\"2.651\" data-v-07981f2d></circle> <circle fill=\"#0E0620\" cx=\"183.708\" cy=\"544.176\" r=\"2.651\" data-v-07981f2d></circle> <circle fill=\"#0E0620\" cx=\"382.515\" cy=\"530.923\" r=\"2.651\" data-v-07981f2d></circle> <circle fill=\"#0E0620\" cx=\"130.693\" cy=\"305.608\" r=\"2.651\" data-v-07981f2d></circle> <circle fill=\"#0E0620\" cx=\"480.296\" cy=\"477.014\" r=\"2.651\" data-v-07981f2d></circle></g></g> <g id=\"spaceman\" clip-path=\"url(cordClip)\" data-v-07981f2d><path id=\"cord\" fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\tM273.813,410.969c0,0-54.527,39.501-115.34,38.218c-2.28-0.048-4.926-0.241-7.841-0.548\n\t\t\tc-68.038-7.178-134.288-43.963-167.33-103.87c-0.908-1.646-1.793-3.3-2.654-4.964c-18.395-35.511-37.259-83.385-32.075-118.817\" data-v-07981f2d></path> <path id=\"backpack\" fill=\"#FFFFFF\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\tM338.164,454.689l-64.726-17.353c-11.086-2.972-17.664-14.369-14.692-25.455l15.694-58.537\n\t\t\tc3.889-14.504,18.799-23.11,33.303-19.221l52.349,14.035c14.504,3.889,23.11,18.799,19.221,33.303l-15.694,58.537\n\t\t\tC360.647,451.083,349.251,457.661,338.164,454.689z\" data-v-07981f2d></path> <g id=\"antenna\" data-v-07981f2d><line fill=\"#FFFFFF\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" x1=\"323.396\" y1=\"236.625\" x2=\"295.285\" y2=\"353.753\" data-v-07981f2d></line> <circle fill=\"#FFFFFF\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" cx=\"323.666\" cy=\"235.617\" r=\"6.375\" data-v-07981f2d></circle></g> <g id=\"armR\" data-v-07981f2d><path fill=\"#FFFFFF\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\t\tM360.633,363.039c1.352,1.061,4.91,5.056,5.824,6.634l27.874,47.634c3.855,6.649,1.59,15.164-5.059,19.02l0,0\n\t\t\t\tc-6.649,3.855-15.164,1.59-19.02-5.059l-5.603-9.663\" data-v-07981f2d></path> <path fill=\"#FFFFFF\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\t\tM388.762,434.677c5.234-3.039,7.731-8.966,6.678-14.594c2.344,1.343,4.383,3.289,5.837,5.793\n\t\t\t\tc4.411,7.596,1.829,17.33-5.767,21.741c-7.596,4.411-17.33,1.829-21.741-5.767c-1.754-3.021-2.817-5.818-2.484-9.046\n\t\t\t\tC375.625,437.355,383.087,437.973,388.762,434.677z\" data-v-07981f2d></path></g> <g id=\"armL\" data-v-07981f2d><path fill=\"#FFFFFF\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\t\tM301.301,347.66c-1.702,0.242-5.91,1.627-7.492,2.536l-47.965,27.301c-6.664,3.829-8.963,12.335-5.134,18.999h0\n\t\t\t\tc3.829,6.664,12.335,8.963,18.999,5.134l9.685-5.564\" data-v-07981f2d></path> <path fill=\"#FFFFFF\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\t\tM241.978,395.324c-3.012-5.25-2.209-11.631,1.518-15.977c-2.701-0.009-5.44,0.656-7.952,2.096\n\t\t\t\tc-7.619,4.371-10.253,14.09-5.883,21.71c4.371,7.619,14.09,10.253,21.709,5.883c3.03-1.738,5.35-3.628,6.676-6.59\n\t\t\t\tC252.013,404.214,245.243,401.017,241.978,395.324z\" data-v-07981f2d></path></g> <g id=\"body\" data-v-07981f2d><path fill=\"#FFFFFF\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\t\tM353.351,365.387c-7.948,1.263-16.249,0.929-24.48-1.278c-8.232-2.207-15.586-6.07-21.836-11.14\n\t\t\t\tc-17.004,4.207-31.269,17.289-36.128,35.411l-1.374,5.123c-7.112,26.525,8.617,53.791,35.13,60.899l0,0\n\t\t\t\tc26.513,7.108,53.771-8.632,60.883-35.158l1.374-5.123C371.778,395.999,365.971,377.536,353.351,365.387z\" data-v-07981f2d></path> <path fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\t\tM269.678,394.912L269.678,394.912c26.3,20.643,59.654,29.585,93.106,25.724l2.419-0.114\" data-v-07981f2d></path></g> <g id=\"legs\" data-v-07981f2d><g id=\"legR\" data-v-07981f2d><path fill=\"#FFFFFF\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\t\t\tM312.957,456.734l-14.315,53.395c-1.896,7.07,2.299,14.338,9.37,16.234l0,0c7.07,1.896,14.338-2.299,16.234-9.37l17.838-66.534\n\t\t\t\t\tC333.451,455.886,323.526,457.387,312.957,456.734z\" data-v-07981f2d></path> <line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" x1=\"304.883\" y1=\"486.849\" x2=\"330.487\" y2=\"493.713\" data-v-07981f2d></line></g> <g id=\"legL\" data-v-07981f2d><path fill=\"#FFFFFF\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\t\t\tM296.315,452.273L282,505.667c-1.896,7.07-9.164,11.265-16.234,9.37l0,0c-7.07-1.896-11.265-9.164-9.37-16.234l17.838-66.534\n\t\t\t\t\tC278.993,441.286,286.836,447.55,296.315,452.273z\" data-v-07981f2d></path> <line fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" x1=\"262.638\" y1=\"475.522\" x2=\"288.241\" y2=\"482.387\" data-v-07981f2d></line></g></g> <g id=\"head\" data-v-07981f2d><ellipse transform=\"matrix(0.259 -0.9659 0.9659 0.259 -51.5445 563.2371)\" fill=\"#FFFFFF\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" cx=\"341.295\" cy=\"315.211\" rx=\"61.961\" ry=\"60.305\" data-v-07981f2d></ellipse> <path id=\"headStripe\" fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\t\tM330.868,261.338c-7.929,1.72-15.381,5.246-21.799,10.246\" data-v-07981f2d></path> <path fill=\"#FFFFFF\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"\n\t\t\t\tM380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5s-28.485-16.599-34.877-24.192\n\t\t\t\tc-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13c6.755-0.61,20.546-0.608,41.785,5.087\n\t\t\t\ts33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z\" data-v-07981f2d></path> <g clip-path=\"url(#GlassClip)\" data-v-07981f2d><polygon id=\"glassShine\" fill=\"none\" stroke=\"#0E0620\" stroke-width=\"3\" stroke-miterlimit=\"10\" points=\"\n\t\t\t\t\t278.436,375.599 383.003,264.076 364.393,251.618 264.807,364.928 \t\t\t\t\" data-v-07981f2d></polygon></g></g></g></g></svg></div> "), _vm._ssrNode("<div class=\"content-right\" data-v-07981f2d>", "</div>", [_vm._ssrNode("<div data-v-07981f2d><p class=\"title-error\" data-v-07981f2d>404</p> <p class=\"subtitle-error\" data-v-07981f2d>¡OH! Se ha perdido.</p> <p class=\"description-error\" data-v-07981f2d>\n              La tienda que busca no existe. Cómo has llegado aquí es un\n              misterio. Pero puedes hacer clic en el botón para ir a la página\n              de Komercia o hablar con un asesor.\n            </p> " + (_vm.stateIdStore ? "<div data-v-07981f2d>" + (this.tempInfo ? "<p data-v-07981f2d>" + _vm._ssrEscape(_vm._s(this.tempInfo)) + "</p>" : "<!---->") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"content-btn\" data-v-07981f2d>", "</div>", [_vm._ssrNode("<div data-v-07981f2d>", "</div>", [_vm._ssrNode("<button class=\"btn-error\" data-v-07981f2d>", "</button>", [_c('koWhatsApp', {
    staticClass: "icon-whatsapp"
  }), _vm._ssrNode("Contactar soporte\n              ")], 2)]), _vm._ssrNode(" <div data-v-07981f2d><a href=\"https://www.komercia.co\" rel=\"noreferrer noopener\" class=\"btn-komercia\" data-v-07981f2d>Ir a Komercia</a></div>")], 2)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Ko-errorStore.vue?vue&type=template&id=07981f2d&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Ko-errorStore.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_errorStorevue_type_script_lang_js_ = ({
  name: 'NoStoreFound',
  components: {
    koWhatsApp: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 1325))
  },
  data() {
    return {
      stateIdStore: false
    };
  },
  computed: {
    tempInfo() {
      return this.$store.state.tempInfo;
    }
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
    redirectWhatsapp() {
      if (this.mobileCheck()) {
        window.open(`https://wa.me/573107884893/?text=Hola.%0A%0ATengo%20un%20problema%20con%20mi%20tienda%20${window.location}%2C%20dice%20que%20no%20existe.`, '_blank');
      } else {
        window.open(`https://web.whatsapp.com/send?phone=573107884893&text=Hola.%0A%0ATengo%20un%20problema%20con%20mi%20tienda%20${window.location}%2C%20dice%20que%20no%20existe.`, '_blank');
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Ko-errorStore.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Ko_errorStorevue_type_script_lang_js_ = (Ko_errorStorevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Ko-errorStore.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(255)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Ko_errorStorevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "07981f2d",
  "019826dd"
  
)

/* harmony default export */ var Ko_errorStore = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal/Ko-modal-security.vue?vue&type=template&id=2fd45905&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.dataStore.modal && _vm.dataStore.modal.stateModal === 1 && !_vm.stateModalPwd ? _c('div', {
    staticClass: "wrapper-security-modal",
    style: `background: ${_vm.dataStore.modal && _vm.dataStore.modal.colorBg_1 ? _vm.dataStore.modal.colorBg_1 : 'rgba(5, 5, 5, 0.897)'};`
  }, [_vm._ssrNode("<div class=\"content-security-modal\"" + _vm._ssrStyle(null, `background: ${_vm.dataStore.modal && _vm.dataStore.modal.colorBg_2 ? _vm.dataStore.modal.colorBg_2 : 'White'};`, null) + " data-v-2fd45905>", "</div>", [_vm.dataStore.modal && _vm.dataStore.modal.img ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.dataStore.modal.img, 550, 550),
      expression: "idCloudinary(dataStore.modal.img, 550, 550)"
    }],
    style: `width: ${_vm.dataStore.modal && _vm.dataStore.modal.width_img ? _vm.dataStore.modal.width_img : '120px'};
         margin-bottom: ${_vm.dataStore.modal && _vm.dataStore.modal.marginBottomImg ? _vm.dataStore.modal.marginBottomImg : '10px'};
        `,
    attrs: {
      "alt": "img-modal-block"
    }
  }, []) : _vm._e(), _vm._ssrNode(" <p" + _vm._ssrStyle(null, `color: ${_vm.dataStore.modal && _vm.dataStore.modal.colorTitle ? _vm.dataStore.modal.colorTitle : 'White'};
           font-size: ${_vm.dataStore.modal && _vm.dataStore.modal.fontSizeTitle ? _vm.dataStore.modal.fontSizeTitle : '20px'};
          font-weight: ${_vm.dataStore.modal && _vm.dataStore.modal.fontWeighTitle ? _vm.dataStore.modal.fontWeighTitle : 'Bold'};
          margin-bottom: ${_vm.dataStore.modal && _vm.dataStore.modal.marginBottomTitle ? _vm.dataStore.modal.marginBottomTitle : '15px'};            
          `, null) + " data-v-2fd45905>" + _vm._ssrEscape("\n      " + _vm._s(_vm.dataStore.modal.title) + "\n    ") + "</p> <p" + _vm._ssrStyle(null, `color: ${_vm.dataStore.modal && _vm.dataStore.modal.colorDescription ? _vm.dataStore.modal.colorDescription : 'White'};
          font-size: ${_vm.dataStore.modal && _vm.dataStore.modal.fontSizeDescription ? _vm.dataStore.modal.fontSizeDescription : '16px'};
          font-weight: ${_vm.dataStore.modal && _vm.dataStore.modal.fontWeighDescription ? _vm.dataStore.modal.fontWeighDescription : '400'};
          margin-bottom: ${_vm.dataStore.modal && _vm.dataStore.modal.marginBottomDescription ? _vm.dataStore.modal.marginBottomDescription : '20px'};
          `, null) + " data-v-2fd45905>" + _vm._ssrEscape("\n      " + _vm._s(_vm.dataStore.modal.description) + "\n    ") + "</p> <div class=\"inputBox\" data-v-2fd45905><input id=\"password\" name=\"password\" type=\"password\" placeholder=\"Ingresar contraseña\"" + _vm._ssrAttr("value", _vm.pwd) + " class=\"input-text\"" + _vm._ssrStyle(null, `color: ${_vm.dataStore.modal && _vm.dataStore.modal.colorBorder ? _vm.dataStore.modal.colorBorder : 'Black'}; border: solid 2px ${_vm.dataStore.modal && _vm.dataStore.modal.colorBorder ? _vm.dataStore.modal.colorBorder : 'Black'};`, null) + " data-v-2fd45905> <div id=\"toggle\" data-v-2fd45905><i class=\"el-icon-view\" data-v-2fd45905></i></div></div> " + (_vm.stateMgs ? "<p class=\"alert-modal\" data-v-2fd45905>\n      Contraseña incorrecta, intente de nuevo\n    </p>" : "<!---->") + " <button class=\"btn-acceptModal mt-10\"" + _vm._ssrStyle(null, `color: ${_vm.dataStore.modal && _vm.dataStore.modal.colorTextBtn ? _vm.dataStore.modal.colorTextBtn : 'White'}; 
        background-color: ${_vm.dataStore.modal && _vm.dataStore.modal.colorBgBtn ? _vm.dataStore.modal.colorBgBtn : 'Black'};          
        `, null) + " data-v-2fd45905>\n      Ingresar\n    </button>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/modal/Ko-modal-security.vue?vue&type=template&id=2fd45905&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal/Ko-modal-security.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_modal_securityvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  props: {
    dataStore: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      pwd: null,
      stateMgs: false
    };
  },
  computed: {
    stateModalPwd() {
      return this.$store.state.stateModalPwd;
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate);
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  methods: {
    async closedModal() {
      if (this.dataStore.modal && this.dataStore.modal.password) {
        if (this.pwd) {
          const {
            success
          } = await this.$store.dispatch('GET_ACCESS_CODE', {
            id_tienda: this.dataStore.tienda.id_tienda,
            pwd: this.pwd
          });
          if (success) {
            this.setCookies(this.pwd);
          } else {
            this.passwordStore();
          }
        }
      }
    },
    passwordStore() {
      if (this.dataStore.modal.password == this.pwd) {
        this.$store.commit('SET_STATE_MODAL_PWD', true);
        this.setCookies(this.dataStore.modal.password);
      } else {
        this.stateMgs = true;
      }
    },
    addEventListenerTemplate(e) {
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080')) {
        if (e && e.data && e.data.modalSecurity) {
          this.$store.commit('SET_STATE_MODAL_PWD', true);
        }
      }
    },
    switchVisibility() {
      const password = document.getElementById('password');
      if (password.type === 'password') {
        password.setAttribute('type', 'text');
      } else {
        password.setAttribute('type', 'password');
      }
    },
    setCookies(value) {
      var date = new Date();
      date.setTime(date.getTime() + 12 * 60 * 60 * 1000);
      var expires = date.toUTCString();
      document.cookie = `authPwd = ${value}; path=/; expires=${expires};`;
    }
  }
});
// CONCATENATED MODULE: ./components/modal/Ko-modal-security.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_Ko_modal_securityvue_type_script_lang_js_ = (Ko_modal_securityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/modal/Ko-modal-security.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(257)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_Ko_modal_securityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2fd45905",
  "ba0e7c56"
  
)

/* harmony default export */ var Ko_modal_security = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wa_vue_vue_type_style_index_0_id_221c24b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(396);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wa_vue_vue_type_style_index_0_id_221c24b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wa_vue_vue_type_style_index_0_id_221c24b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wa_vue_vue_type_style_index_0_id_221c24b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wa_vue_vue_type_style_index_0_id_221c24b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-221c24b0]{font-family:\"Poppins\",sans-serif!important}.wrapper-whatsapp[data-v-221c24b0]{background-color:#25d366;border-radius:10px 0 0 10px;color:#fff;cursor:pointer;display:flex;flex-direction:row;max-height:51px;overflow:hidden;position:fixed;right:0;top:50%;transform:translate(108px);transition:all .5s ease-in-out;vertical-align:middle;width:155px;z-index:50}.wrapper-whatsapp[data-v-221c24b0]:hover{transform:translate(0)}.wrapper-whatsapp span[data-v-221c24b0]{color:#fff;font-size:15px;font-weight:bolder;line-height:16px;margin-left:5px;padding-bottom:10px;padding-top:8px;position:relative}.button-whatsapp[data-v-221c24b0]{fill:#fff;font-weight:700;line-height:30px;padding:8px;text-align:center;transform:rotate(0deg);transition:all .5s ease-in-out;width:50px}.button-whatsapp[data-v-221c24b0]:hover{transform:rotate(1turn)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=wa.js.map