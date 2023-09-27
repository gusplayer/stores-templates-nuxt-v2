exports.ids = [31];
exports.modules = {

/***/ 1238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/K16_footer11/Ko-Footer-11.vue?vue&type=template&id=10423840&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3, _vm$settingByTemplate4;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    style: [_vm.settingByTemplate16[0].footer, _vm.settingByTemplate16[0].settingGeneral, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate16[0].settingGeneral) === null || _vm$settingByTemplate2 === void 0 ? void 0 : _vm$settingByTemplate2.font) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"w-full h-full flex justify-center items-center bg-no-repeat bg-cover bg-bottom box-content\"" + _vm._ssrStyle(null, `background-color: ${_vm.settingByTemplate16[0].footer['--background_color_1']}`, null) + " data-v-10423840>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-col justify-center items-center\" data-v-10423840>", "</div>", [_vm._ssrNode("<div class=\"w-full max-w-9/5 md:max-w-8/5 flex flex-col justify-center items-center pt-40 pb-10 md:pb-49\" data-v-10423840>", "</div>", [_vm._ssrNode("<div class=\"content-items-sm\" data-v-10423840>", "</div>", [_vm._ssrNode("<div class=\"content-store-sm\" data-v-10423840>", "</div>", [_vm._ssrNode("<div class=\"w-full flex justify-center mb-20\" data-v-10423840>", "</div>", [_c('KoSocialNet', {
    attrs: {
      "footer-icon": _vm.settingByTemplate16[0].footer,
      "data-store": _vm.dataStore
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"info-store-sm mb-20\" data-v-10423840>", "</div>", [_vm._ssrNode("<p class=\"btn\" data-v-10423840>Enlaces</p> "), _vm._ssrNode("<div class=\"w-full flex flex-wrap gap-x-4 gap-y-3\" data-v-10423840>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-10423840>", "</div>", [item.path ? _c('nuxt-link', {
      staticClass: "txt-number txt",
      attrs: {
        "to": item.path
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.$t(`${item.name}`)) + "\n                  ")]) : item.href && _vm.listArticulos > 0 ? _c('nuxt-link', {
      staticClass: "txt-number txt",
      attrs: {
        "to": item.href
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.$t(`${item.name}`)) + "\n                  ")]) : _vm._e()], 1);
  }), 0)], 2), _vm._ssrNode(" <div class=\"info-store-sm mb-20\" data-v-10423840><p class=\"btn\" data-v-10423840>Información de la tienda</p> <div class=\"content-direction\" data-v-10423840>" + (_vm.dataStore.geolocalizacion.length ? "<p class=\"txt\" data-v-10423840>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.geolocalizacion[0].direccion) + "\n                ") + "</p>" : "<!---->") + "</div> <div class=\"content-number\" data-v-10423840>" + (_vm.dataStore.tienda.telefono ? "<p class=\"txt-number txt\" data-v-10423840>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.tienda.telefono) + "\n                ") + "</p>" : "<!---->") + "</div> <div class=\"content-email\" data-v-10423840>" + (_vm.dataStore.tienda.email_tienda ? "<p class=\"txt-email txt\" data-v-10423840>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.tienda.email_tienda) + "\n                ") + "</p>" : "<!---->") + "</div></div> "), _c('KoNewsLetter', {
    staticClass: "mb-20",
    attrs: {
      "setting-by-template16": _vm.settingByTemplate16,
      "data-store": _vm.dataStore
    }
  }), _vm._ssrNode(" " + (_vm.dataStore.politicas ? "<button class=\"txt-number txt text-center w-full\" data-v-10423840>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('footer_politicasyterminos')) + "\n            ") + "</button>" : "<!---->"))], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-items-lg\" data-v-10423840>", "</div>", [_vm._ssrNode("<div class=\"info-btn-footer gap-2\" data-v-10423840>", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", `${_vm.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`) + " alt=\"Logo\" class=\"img-logo\" data-v-10423840> <p class=\"txt mb-20\" data-v-10423840>\n              Si tiene alguna pregunta, contáctenos en\n              " + (_vm.dataStore.tienda.email_tienda ? "<span class=\"ml-3\" data-v-10423840>" + _vm._ssrEscape("\n                " + _vm._s(_vm.dataStore.tienda.email_tienda) + "\n              ") + "</span>" : "<!---->") + "</p> " + (_vm.dataStore.geolocalizacion.length ? "<div class=\"w-full mb-5 flex flex-row gap-2 items-center\" data-v-10423840><div class=\"w-full max-w-[20px]\" data-v-10423840><svg" + _vm._ssrAttr("fill", (_vm$settingByTemplate3 = _vm.settingByTemplate16[0]) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.footer['--color_icon']) + " xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" data-v-10423840><path d=\"M0 0h24v24H0z\" fill=\"none\" data-v-10423840></path> <path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\" data-v-10423840></path></svg></div> <p class=\"w-full txt\" data-v-10423840>" + _vm._ssrEscape("\n                " + _vm._s(_vm.dataStore.geolocalizacion[0].direccion) + "\n              ") + "</p></div>" : "<!---->") + " " + (_vm.dataStore.tienda.whatsapp ? "<div class=\"mb-20 flex flex-row gap-2 items-center\" data-v-10423840><div class=\"w-full max-w-[20px]\" data-v-10423840><svg width=\"16px\" height=\"16px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"ml-5\" data-v-10423840><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" data-v-10423840><g id=\"Dribbble-Light-Preview\" transform=\"translate(-300.000000, -7599.000000)\"" + _vm._ssrAttr("fill", (_vm$settingByTemplate4 = _vm.settingByTemplate16[0]) === null || _vm$settingByTemplate4 === void 0 ? void 0 : _vm$settingByTemplate4.footer['--color_icon']) + " data-v-10423840><g id=\"icons\" transform=\"translate(56.000000, 160.000000)\" data-v-10423840><path d=\"M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439\" id=\"whatsapp-[#128]\" data-v-10423840></path></g></g></g></svg></div> <p class=\"w-full txt\" data-v-10423840>" + _vm._ssrEscape("\n                " + _vm._s(_vm.dataStore.tienda.whatsapp) + "\n              ") + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"info-networkss\" data-v-10423840>", "</div>", [_c('KoSocialNet', {
    attrs: {
      "footer-icon": _vm.settingByTemplate16[0].footer,
      "data-store": _vm.dataStore
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"info-btn-footer\" data-v-10423840>", "</div>", [_vm._ssrNode("<p class=\"btn\" data-v-10423840>Enlaces</p> "), _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div class=\"mb-8\" data-v-10423840>", "</div>", [item.path ? _c('nuxt-link', {
      staticClass: "btns",
      attrs: {
        "to": item.path
      }
    }, [_vm._v("\n                " + _vm._s(_vm.$t(`${item.name}`)) + "\n              ")]) : item.href && _vm.listArticulos > 0 ? _c('nuxt-link', {
      staticClass: "btns",
      attrs: {
        "to": item.href
      }
    }, [_vm._v("\n                " + _vm._s(_vm.$t(`${item.name}`)) + "\n              ")]) : _vm._e()], 1);
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"info-btn-footer\" data-v-10423840>", "</div>", [_vm._ssrNode("<p class=\"btn mb-10\" data-v-10423840>" + _vm._ssrEscape("\n              " + _vm._s(_vm.settingByTemplate16[0].newsletter.title) + "\n            ") + "</p> "), _c('KoNewsLetter', {
    attrs: {
      "setting-by-template16": _vm.settingByTemplate16,
      "data-store": _vm.dataStore
    }
  }), _vm._ssrNode(" <p class=\"btn mt-25\" data-v-10423840>Nuestra empresa</p> " + (_vm.dataStore.politicas ? "<button class=\"btn-legal btns\" data-v-10423840>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('footer_politicasyterminos')) + "\n            ") + "</button>" : "<!---->"))], 2)], 2)], 2), _vm._ssrNode(" " + (_vm.settingByTemplate16[0].footer.watermark ? "<div class=\"empty\" data-v-10423840></div>" : "<!---->") + " "), _vm.settingByTemplate16[0].footer.watermark ? _vm._ssrNode("<div class=\"madebyKomercia\" data-v-10423840>", "</div>", [_vm._ssrNode("<p class=\"txt-devBy\" data-v-10423840>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_desarrollado'))) + "</p> "), _vm._ssrNode("<a href=\"https://komercia.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-10423840>", "</a>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png`,
      expression: "\n              `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png`\n            "
    }],
    staticClass: "logo2",
    attrs: {
      "alt": "Logo Img"
    }
  }, [])])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.showModal ? _vm._ssrNode("<div data-v-10423840>", "</div>", [_vm.dataStore.politicas ? _vm._ssrNode("<div class=\"modal\" data-v-10423840>", "</div>", [_c('KoTermsConditions', {
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 1) : _vm._e()]) : _vm._e()], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/K16_footer11/Ko-Footer-11.vue?vue&type=template&id=10423840&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/K16_footer11/Ko-Footer-11.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Footer_11vue_type_script_lang_js_ = ({
  name: 'KoFooter11',
  components: {
    KoNewsLetter: () => __webpack_require__.e(/* import() */ 144).then(__webpack_require__.bind(null, 1184)),
    KoSocialNet: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 1126)),
    KoTermsConditions: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 1107))
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate16: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      secciones: [{
        name: 'header_inicio',
        path: '/'
      }, {
        name: 'header_productos',
        path: '/productos'
      }, {
        name: 'header_contacto',
        path: '/contacto'
      }, {
        name: 'footer_micompra',
        path: '/micompra'
      }, {
        name: 'header_blog',
        href: '/blog'
      }],
      logo: null
    };
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos.length;
    },
    showModal() {
      return this.$store.state.modalpolitics05;
    }
  },
  watch: {
    settingByTemplate16() {
      if (this.settingByTemplate16 && this.settingByTemplate16[0].footer) {
        let color = this.settingByTemplate16[0].footer['--background_color_1'];
        let colorArray = color.split(',');
        let colorInt = parseInt(colorArray[2]);
        if (colorInt > 50) {
          this.logo = true;
        } else {
          this.logo = false;
        }
      }
    }
  },
  mounted() {
    if (this.settingByTemplate16 && this.settingByTemplate16[0].footer) {
      this.setLogo();
    }
    var acc = document.getElementsByClassName('accordion');
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 10 + 'px';
        }
      });
    }
  },
  methods: {
    OpenModalPolitics() {
      this.$store.state.modalpolitics05 = true;
    },
    setLogo() {
      let color = getComputedStyle(this.$refs.background).getPropertyValue('--background_color_1');
      let colorArray = color.split(',');
      let colorInt = parseInt(colorArray[2]);
      if (colorInt > 50) {
        this.logo = true;
      } else {
        this.logo = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/footers/K16_footer11/Ko-Footer-11.vue?vue&type=script&lang=js&
 /* harmony default export */ var K16_footer11_Ko_Footer_11vue_type_script_lang_js_ = (Ko_Footer_11vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/K16_footer11/Ko-Footer-11.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(875)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  K16_footer11_Ko_Footer_11vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "10423840",
  "96ba9e1c"
  
)

/* harmony default export */ var Ko_Footer_11 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(876);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2d683632", content, true, context)
};

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_11_vue_vue_type_style_index_0_id_10423840_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(486);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_11_vue_vue_type_style_index_0_id_10423840_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_11_vue_vue_type_style_index_0_id_10423840_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_11_vue_vue_type_style_index_0_id_10423840_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_11_vue_vue_type_style_index_0_id_10423840_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-10423840]{font-family:var(--font-style-1)!important}.modal[data-v-10423840]{background-color:#000;background-color:rgba(0,0,0,.4);height:100%;left:0;overflow:auto;padding-top:200px;position:fixed;top:0;width:100%;z-index:10}.empty[data-v-10423840]{align-items:center;background-color:var(--color_border);display:flex;flex-direction:column;height:1px;justify-content:center;width:100%}@media (min-width:300px){.content-items-sm[data-v-10423840]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-store-sm[data-v-10423840]{width:90%}.content-direction[data-v-10423840],.content-email[data-v-10423840],.content-number[data-v-10423840],.content-store-sm[data-v-10423840]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center}.content-direction[data-v-10423840],.content-email[data-v-10423840],.content-number[data-v-10423840]{width:100%}.info-legal-sm[data-v-10423840],.info-networks[data-v-10423840],.info-store-sm[data-v-10423840]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;width:100%}.btn[data-v-10423840]{color:var(--color_title);font-size:18px;padding-bottom:10px}.txt[data-v-10423840]{color:var(--color_text);font-size:14px}.btns[data-v-10423840]:hover{color:var(--hover_text)}.btn-legal[data-v-10423840]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;text-align:left;width:100%}.content-items-lg[data-v-10423840]{display:none}.madebyKomercia[data-v-10423840]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding-bottom:20px;padding-top:20px;width:100%}.txt-devBy[data-v-10423840]{color:var(--color_text);font-size:14px}.logo2[data-v-10423840]{opacity:.5;width:100px}}@media (min-width:1024px){.content-items-sm[data-v-10423840]{display:none}.content-items-lg[data-v-10423840]{grid-gap:1rem;align-items:flex-start;display:grid;gap:1rem;grid-template-columns:repeat(3,minmax(0,1fr));justify-content:center;width:90%}.img-logo[data-v-10423840]{max-width:var(--with_logo);-o-object-fit:contain;object-fit:contain;width:100%}.info-btn-footer[data-v-10423840]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;width:100%}.btns[data-v-10423840]{color:var(--color_text);font-size:14px}.btns[data-v-10423840]:hover{color:var(--hover_text)}}@media (min-width:1200px){.content-items-lg[data-v-10423840]{max-width:80rem;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=footers-k16-footer11-ko-footer11.js.map