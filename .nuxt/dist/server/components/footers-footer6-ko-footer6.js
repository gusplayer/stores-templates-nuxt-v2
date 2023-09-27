exports.ids = [26];
exports.modules = {

/***/ 1248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer6/Ko-Footer-6.vue?vue&type=template&id=40545690&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3, _vm$dataStore, _vm$dataStore$geoloca;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "background",
    staticClass: "footer-container",
    style: [_vm.settingByTemplate10[0].setting10Footer, _vm.settingByTemplate10[0].setting10General, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate10[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.setting10General) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.fount_1) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"footer-content\" data-v-40545690>", "</div>", [_vm._ssrNode("<div class=\"footer-content-items\" data-v-40545690>", "</div>", [_vm._ssrNode("<div class=\"footer-content-tienda\" data-v-40545690><div class=\"content-image\" data-v-40545690><img" + _vm._ssrAttr("src", `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`) + " alt=\"Logo\" class=\"img-logo\" data-v-40545690></div> " + ((_vm$dataStore = _vm.dataStore) !== null && _vm$dataStore !== void 0 && (_vm$dataStore$geoloca = _vm$dataStore.geolocalizacion) !== null && _vm$dataStore$geoloca !== void 0 && _vm$dataStore$geoloca.length ? "<div class=\"content-direction\" data-v-40545690><p class=\"txt-direction\" data-v-40545690>" + _vm._ssrEscape("\n            " + _vm._s(_vm.dataStore.geolocalizacion[0].direccion) + "\n          ") + "</p></div>" : "<!---->") + " <div class=\"content-number\" data-v-40545690><p class=\"txt-number\" data-v-40545690>" + _vm._ssrEscape("\n            " + _vm._s(_vm.dataStore.tienda.telefono) + "\n          ") + "</p></div> <div class=\"content-email\" data-v-40545690><p class=\"txt-email\" data-v-40545690>" + _vm._ssrEscape("\n            " + _vm._s(_vm.dataStore.tienda.email_tienda) + "\n          ") + "</p></div> <div class=\"content-Pliticas-Terminos\" data-v-40545690>" + (_vm.dataStore.politicas ? "<button class=\"txt-pol-term\" data-v-40545690>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('footer_politicasyterminos')) + "\n          ") + "</button>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"footer-content-itemsBtns\" data-v-40545690>", "</div>", [_vm._ssrNode("<div class=\"content-buttons\" data-v-40545690>", "</div>", [_vm._ssrNode("<div class=\"container-txt\" data-v-40545690><div class=\"content-txt-redes\" data-v-40545690><p class=\"txt-redes\" data-v-40545690>Nuestras redes</p></div> <div class=\"content-txt-btns\" data-v-40545690><p class=\"txt-btn\" data-v-40545690>Enlaces</p></div></div> "), _vm._ssrNode("<div class=\"container-opt\" data-v-40545690>", "</div>", [_vm._ssrNode("<div class=\"footer-socialNetworks\" data-v-40545690>", "</div>", [_c('KoSocialNet', {
    attrs: {
      "data-store": _vm.dataStore,
      "setting10-footer": _vm.settingByTemplate10[0].setting10Footer,
      "setting10-general": _vm.settingByTemplate10[0].setting10General
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"footer-content-button\" data-v-40545690>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-40545690>", "</div>", [item.path ? _c('nuxt-link', {
      staticClass: "btn",
      attrs: {
        "to": item.path
      }
    }, [_c('p', {
      staticClass: "txt-btns"
    }, [_vm._v("\n                    " + _vm._s(_vm.$t(`${item.name}`)) + "\n                  ")])]) : item.href && _vm.listArticulos > 0 ? _c('nuxt-link', {
      staticClass: "btn",
      attrs: {
        "to": item.href
      }
    }, [_c('p', {
      staticClass: "txt-btns"
    }, [_vm._v("\n                    " + _vm._s(_vm.$t(`${item.name}`)) + "\n                  ")])]) : _vm._e()], 1);
  }), 0)], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"footer-acordion-bttns\" data-v-40545690>", "</div>", [_vm._ssrNode("<div class=\"tabs\" data-v-40545690>", "</div>", [_vm._ssrNode("<div class=\"tab\" data-v-40545690>", "</div>", [_vm._ssrNode("<input type=\"checkbox\" id=\"chck1\" data-v-40545690> <label for=\"chck1\" class=\"tab-label\" data-v-40545690>Nuestras redes</label> "), _vm._ssrNode("<div class=\"tab-content\" data-v-40545690>", "</div>", [_c('KoSocialNet', {
    attrs: {
      "data-store": _vm.dataStore,
      "setting10-footer": _vm.settingByTemplate10[0].setting10Footer,
      "setting10-general": _vm.settingByTemplate10[0].setting10General
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tab\" data-v-40545690>", "</div>", [_vm._ssrNode("<input type=\"checkbox\" id=\"chck2\" data-v-40545690> <label for=\"chck2\" class=\"tab-label\" data-v-40545690>Enlaces</label> "), _vm._ssrNode("<div class=\"tab-content\" data-v-40545690>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-40545690>", "</div>", [item.path ? _c('nuxt-link', {
      staticClass: "btn pb-5",
      attrs: {
        "to": item.path
      }
    }, [_c('p', {
      staticClass: "txt-btns"
    }, [_vm._v("\n                    " + _vm._s(_vm.$t(`${item.name}`)) + "\n                  ")])]) : item.href && _vm.listArticulos > 0 ? _c('nuxt-link', {
      staticClass: "btn pb-5",
      attrs: {
        "to": item.href
      }
    }, [_c('p', {
      staticClass: "txt-btns"
    }, [_vm._v("\n                    " + _vm._s(_vm.$t(`${item.name}`)) + "\n                  ")])]) : _vm._e()], 1);
  }), 0)], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"footer-content-newsLetters\" data-v-40545690>", "</div>", [_c('KoNewsLetter', {
    attrs: {
      "setting-by-template10": _vm.settingByTemplate10,
      "data-store": _vm.dataStore
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"footer-content-newsLetters-hid\" data-v-40545690>", "</div>", [_c('KoNewsLetter', {
    attrs: {
      "setting-by-template10": _vm.settingByTemplate10,
      "data-store": _vm.dataStore
    }
  })], 1), _vm._ssrNode(" "), _vm.settingByTemplate10[0].setting10Footer.watermark ? _vm._ssrNode("<div class=\"madebyKomercia\" data-v-40545690>", "</div>", [_vm._ssrNode("<p class=\"txt-devBy\" data-v-40545690>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_desarrollado'))) + "</p> "), _vm._ssrNode("<a href=\"https://komercia.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-40545690>", "</a>", [_vm.logo ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`,
      expression: "\n            `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`\n          "
    }],
    staticClass: "logo2",
    attrs: {
      "alt": "Logo Img"
    }
  }) : _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png`,
      expression: "\n            `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png`\n          "
    }],
    staticClass: "logo2",
    attrs: {
      "alt": "Logo Img"
    }
  }, [])])], 2) : _vm._e()], 2), _vm._ssrNode(" "), _vm.showModal && _vm.dataStore.politicas ? _vm._ssrNode("<div class=\"modal\" data-v-40545690>", "</div>", [_c('KoTermsConditions', {
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/footer6/Ko-Footer-6.vue?vue&type=template&id=40545690&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer6/Ko-Footer-6.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Footer_6vue_type_script_lang_js_ = ({
  name: 'Ko6Footer',
  components: {
    KoNewsLetter: () => __webpack_require__.e(/* import() */ 51).then(__webpack_require__.bind(null, 1109)),
    KoSocialNet: () => __webpack_require__.e(/* import() */ 54).then(__webpack_require__.bind(null, 1112)),
    KoTermsConditions: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 1107))
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate10: {
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
    settingByTemplate10() {
      if (this.settingByTemplate10 && this.settingByTemplate10[0].setting10Footer) {
        let color = this.settingByTemplate10[0].setting10Footer['--background_color_1'];
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
    if (this.settingByTemplate10 && this.settingByTemplate10[0].setting10Footer) {
      this.setLogo();
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
// CONCATENATED MODULE: ./components/footers/footer6/Ko-Footer-6.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer6_Ko_Footer_6vue_type_script_lang_js_ = (Ko_Footer_6vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/footer6/Ko-Footer-6.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(895)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer6_Ko_Footer_6vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "40545690",
  "02c5e1c3"
  
)

/* harmony default export */ var Ko_Footer_6 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(896);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("f5103230", content, true, context)
};

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_6_vue_vue_type_style_index_0_id_40545690_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(496);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_6_vue_vue_type_style_index_0_id_40545690_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_6_vue_vue_type_style_index_0_id_40545690_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_6_vue_vue_type_style_index_0_id_40545690_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_6_vue_vue_type_style_index_0_id_40545690_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer-container[data-v-40545690]{background:var(--background_color_1);border-color:var(--color_border);border-top-width:1px}.footer-container[data-v-40545690],.footer-content[data-v-40545690]{display:flex;flex-direction:column}.footer-container[data-v-40545690],.footer-content[data-v-40545690],.footer-content-items[data-v-40545690]{align-items:center;justify-content:center;width:100%}.footer-content-items[data-v-40545690]{grid-gap:.5rem;display:grid;gap:.5rem;grid-template-columns:repeat(3,minmax(0,1fr))}.footer-content-itemsBtns[data-v-40545690]{grid-gap:1rem;display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));width:100%}.madebyKomercia[data-v-40545690]{align-items:center;border-color:var(--color_border);border-top-width:2px;display:flex;flex-direction:column;justify-content:center;width:100%}.txt-devBy[data-v-40545690]{color:var(--color_text);font-size:14px}.logo2[data-v-40545690]{opacity:.5;width:100px}.btn[data-v-40545690],.txt-direction[data-v-40545690],.txt-email[data-v-40545690],.txt-number[data-v-40545690]{color:var(--color_text);font-family:var(--font-style-1)!important;padding-bottom:20px}.txt-btns[data-v-40545690]{font-family:var(--font-style-1)!important;font-size:15px;margin-bottom:5px;width:auto}.txt-btns[data-v-40545690],.txt-btns[data-v-40545690]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-btns[data-v-40545690]:hover{color:var(--hover_text)}.content-Pliticas-Terminos[data-v-40545690]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:auto}.txt-pol-term[data-v-40545690]{color:var(--color_text);font-family:var(--font-style-1)!important;font-size:15px;text-align:left}.txt-pol-term[data-v-40545690]:hover{color:var(--hover_text)}.modal[data-v-40545690]{background-color:#000;background-color:rgba(0,0,0,.4);height:100%;left:0;overflow:auto;padding-top:200px;position:fixed;top:0;width:100%;z-index:10}input[data-v-40545690]{opacity:0;position:absolute;z-index:-1}.tabs[data-v-40545690]{background:transparent}.tab[data-v-40545690],.tabs[data-v-40545690]{overflow:hidden;width:100%}.tab[data-v-40545690]{color:#000}.tab-label[data-v-40545690]{cursor:pointer;display:flex;font-weight:700;justify-content:space-between;padding:1em 0;width:100%}.tab-label[data-v-40545690]:after{color:var(--color_icon);content:\"\\02795\";text-align:center;transition:all .35s}.tab-content[data-v-40545690]{color:#000;max-height:0;transition:all .35s}.tab-close[data-v-40545690]{cursor:pointer;display:flex;font-size:.75em;justify-content:flex-end;padding:1em}input:checked+.tab-label[data-v-40545690]:after{color:var(--color_icon);content:\"\\2796\";transition:all .35s}input:checked~.tab-content[data-v-40545690]{max-height:100vh}@media (min-width:300px){.img-logo[data-v-40545690]{-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left;width:100%}.footer-content[data-v-40545690]{width:90%}.footer-content-items[data-v-40545690]{display:flex;flex-direction:column}.footer-content-itemsBtns[data-v-40545690],.footer-content-newsLetters-hid[data-v-40545690]{display:none}.footer-content-tienda[data-v-40545690]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;margin-bottom:30px;margin-top:20px;width:100%}.footer-acordion-bttns[data-v-40545690]{margin-bottom:20px}.footer-acordion-bttns[data-v-40545690],.footer-content-newsLetters[data-v-40545690]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.txt-direction[data-v-40545690],.txt-email[data-v-40545690],.txt-number[data-v-40545690]{font-size:15px;margin-bottom:10px}.content-image[data-v-40545690]{align-items:center;display:flex;justify-content:center;margin-bottom:20px;max-width:var(--with_logo);width:100%}.madebyKomercia[data-v-40545690]{height:91px;max-height:91px}}@media (min-width:425px){.content-image[data-v-40545690]{align-items:center;justify-content:flex-start}}@media (min-width:768px){.container-opt[data-v-40545690],.container-txt[data-v-40545690]{grid-gap:1rem;align-items:flex-start;display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:flex-start;width:100%}.container-txt[data-v-40545690]{margin-top:20px}.content-txt-btns[data-v-40545690],.content-txt-redes[data-v-40545690]{color:var(--color_title);font-family:var(--font-style-1)!important;margin-bottom:20px}.content-buttons[data-v-40545690]{display:flex;flex-direction:column}.content-buttons[data-v-40545690],.footer-content-items[data-v-40545690]{align-items:center;justify-content:center;width:100%}.footer-content-items[data-v-40545690]{grid-gap:1rem;display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr))}.footer-content-itemsBtns[data-v-40545690]{align-items:flex-start;display:flex;justify-content:center}.footer-content-newsLetters-hid[data-v-40545690]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.footer-acordion-bttns[data-v-40545690],.footer-content-newsLetters[data-v-40545690]{display:none}.footer-content-button[data-v-40545690]{width:auto}.txt-btn[data-v-40545690],.txt-redes[data-v-40545690]{font-family:var(--font-style-1)!important;font-size:15px;font-weight:600}.txt-direction[data-v-40545690],.txt-email[data-v-40545690],.txt-number[data-v-40545690]{margin-bottom:0}}@media (min-width:1280px){.footer-content-items[data-v-40545690]{grid-gap:1rem;display:grid;gap:1rem;grid-template-columns:repeat(3,minmax(0,1fr))}.footer-content-newsLetters[data-v-40545690]{display:flex;margin-top:40px}.footer-content-newsLetters-hid[data-v-40545690]{display:none}.footer-content-items[data-v-40545690]{height:433px;max-height:433px}}@media (min-width:1400px){.footer-content[data-v-40545690]{width:1400px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=footers-footer6-ko-footer6.js.map