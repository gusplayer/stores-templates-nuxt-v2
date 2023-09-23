exports.ids = [26];
exports.modules = {

/***/ 1246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/K14_footer9/Ko-Footer-9.vue?vue&type=template&id=3ef77284&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "background",
    staticClass: "wrapper-footer w-full flex justify-center items-center",
    style: [_vm.settingByTemplate14[0].setting14Footer, _vm.settingByTemplate14[0].setting14General, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate14[0].setting14General) === null || _vm$settingByTemplate2 === void 0 ? void 0 : _vm$settingByTemplate2.fount_1) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"content-footer\" data-v-3ef77284>", "</div>", [_vm._ssrNode("<div class=\"w-full max-w-7xl flex flex-col justify-center items-center pt-50 pb-10 md:pb-50\" data-v-3ef77284>", "</div>", [_vm._ssrNode("<div class=\"content-items-sm\" data-v-3ef77284>", "</div>", [_vm._ssrNode("<div class=\"content-store-sm\" data-v-3ef77284>", "</div>", [_vm._ssrNode("<div class=\"info-store-sm mb-20\" data-v-3ef77284>", "</div>", [_vm._ssrNode("<p class=\"btn\" data-v-3ef77284>Enlaces</p> "), _vm._ssrNode("<div class=\"w-full flex flex-wrap gap-x-4 gap-y-3\" data-v-3ef77284>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-3ef77284>", "</div>", [item.path ? _c('nuxt-link', {
      staticClass: "txt-number txt",
      attrs: {
        "to": item.path
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t(`${item.name}`)) + "\n                ")]) : item.href && _vm.listArticulos > 0 ? _c('nuxt-link', {
      staticClass: "txt-number txt",
      attrs: {
        "to": item.href
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t(`${item.name}`)) + "\n                ")]) : _vm._e()], 1);
  }), 0)], 2), _vm._ssrNode(" <div class=\"info-store-sm mb-20\" data-v-3ef77284><p class=\"btn\" data-v-3ef77284>Información de la tienda</p> <div class=\"footer-content-tienda\" data-v-3ef77284><div class=\"content-direction\" data-v-3ef77284>" + (_vm.dataStore.geolocalizacion.length ? "<p class=\"txt-direction txt\" data-v-3ef77284>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.geolocalizacion[0].direccion) + "\n                ") + "</p>" : "<!---->") + "</div> <div class=\"content-number\" data-v-3ef77284>" + (_vm.dataStore.tienda.telefono ? "<p class=\"txt-number txt\" data-v-3ef77284>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.tienda.telefono) + "\n                ") + "</p>" : "<!---->") + "</div> <div class=\"content-email\" data-v-3ef77284>" + (_vm.dataStore.tienda.email_tienda ? "<p class=\"txt-email txt\" data-v-3ef77284>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.tienda.email_tienda) + "\n                ") + "</p>" : "<!---->") + "</div></div></div> "), _vm._ssrNode("<div class=\"info-networks mb-20\" data-v-3ef77284>", "</div>", [_vm._ssrNode("<p class=\"btn\" data-v-3ef77284>Síguenos</p> "), _c('KoSocialNet', {
    attrs: {
      "footer-icon": _vm.settingByTemplate14[0].setting14Footer,
      "data-store": _vm.dataStore
    }
  })], 2), _vm._ssrNode(" <div class=\"info-legal-sm\" data-v-3ef77284>" + (_vm.dataStore.politicas ? "<button class=\"btn-legal btn\" data-v-3ef77284>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('footer_politicasyterminos')) + "\n            ") + "</button>" : "<!---->") + "</div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-items-lg\" data-v-3ef77284>", "</div>", [_vm._ssrNode("<div class=\"info-btn-footer gap-2\" data-v-3ef77284>", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", `${_vm.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`) + " alt=\"Logo\" class=\"img-logo\" data-v-3ef77284> <div class=\"content-direction\" data-v-3ef77284>" + (_vm.dataStore.geolocalizacion.length ? "<p class=\"txt-direction txt\" data-v-3ef77284>" + _vm._ssrEscape("\n              " + _vm._s(_vm.dataStore.geolocalizacion[0].direccion) + "\n            ") + "</p>" : "<!---->") + "</div> <div class=\"content-number\" data-v-3ef77284>" + (_vm.dataStore.tienda.telefono ? "<p class=\"txt-number txt\" data-v-3ef77284>" + _vm._ssrEscape("\n              " + _vm._s(_vm.dataStore.tienda.telefono) + "\n            ") + "</p>" : "<!---->") + "</div> <div class=\"content-email\" data-v-3ef77284>" + (_vm.dataStore.tienda.email_tienda ? "<p class=\"txt-email txt\" data-v-3ef77284>" + _vm._ssrEscape("\n              " + _vm._s(_vm.dataStore.tienda.email_tienda) + "\n            ") + "</p>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"info-networkss\" data-v-3ef77284>", "</div>", [_c('KoSocialNet', {
    attrs: {
      "footer-icon": _vm.settingByTemplate14[0].setting14Footer,
      "data-store": _vm.dataStore
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"info-btn-footer\" data-v-3ef77284>", "</div>", [_vm._ssrNode("<p class=\"btn\" data-v-3ef77284>Enlaces</p> "), _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-3ef77284>", "</div>", [item.path ? _c('nuxt-link', {
      staticClass: "btns",
      attrs: {
        "to": item.path
      }
    }, [_vm._v("\n              " + _vm._s(_vm.$t(`${item.name}`)) + "\n            ")]) : item.href && _vm.listArticulos > 0 ? _c('nuxt-link', {
      staticClass: "btns",
      attrs: {
        "to": item.href
      }
    }, [_vm._v("\n              " + _vm._s(_vm.$t(`${item.name}`)) + "\n            ")]) : _vm._e()], 1);
  })], 2), _vm._ssrNode(" <div class=\"info-btn-footer\" data-v-3ef77284><p class=\"btn\" data-v-3ef77284>Nuestra empresa</p> " + (_vm.dataStore.politicas ? "<button class=\"btn-legal btns\" data-v-3ef77284>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('footer_politicasyterminos')) + "\n          ") + "</button>" : "<!---->") + "</div>")], 2)], 2), _vm._ssrNode(" " + (_vm.settingByTemplate14[0].setting14Footer.watermark ? "<div class=\"empty\" data-v-3ef77284></div>" : "<!---->") + " "), _vm.settingByTemplate14[0].setting14Footer.watermark ? _vm._ssrNode("<div class=\"madebyKomercia\" data-v-3ef77284>", "</div>", [_vm._ssrNode("<p class=\"txt-devBy\" data-v-3ef77284>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_desarrollado'))) + "</p> "), _vm._ssrNode("<a href=\"https://komercia.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-3ef77284>", "</a>", [_c('img', {
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
  }, [])])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.showModal ? _vm._ssrNode("<div data-v-3ef77284>", "</div>", [_vm.dataStore.politicas ? _vm._ssrNode("<div class=\"modal\" data-v-3ef77284>", "</div>", [_c('KoTermsConditions', {
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 1) : _vm._e()]) : _vm._e()], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/K14_footer9/Ko-Footer-9.vue?vue&type=template&id=3ef77284&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/K14_footer9/Ko-Footer-9.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Footer_9vue_type_script_lang_js_ = ({
  name: 'KoFooter9',
  components: {
    KoSocialNet: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 1136)),
    KoTermsConditions: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 1117))
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate14: {
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
    settingByTemplate14() {
      if (this.settingByTemplate14 && this.settingByTemplate14[0].setting14Footer) {
        let color = this.settingByTemplate14[0].setting14Footer['--background_color_1'];
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
    if (this.settingByTemplate14 && this.settingByTemplate14[0].setting14Footer) {
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
// CONCATENATED MODULE: ./components/footers/K14_footer9/Ko-Footer-9.vue?vue&type=script&lang=js&
 /* harmony default export */ var K14_footer9_Ko_Footer_9vue_type_script_lang_js_ = (Ko_Footer_9vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/K14_footer9/Ko-Footer-9.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(896)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  K14_footer9_Ko_Footer_9vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3ef77284",
  "2d6a7590"
  
)

/* harmony default export */ var Ko_Footer_9 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(897);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7b1bb721", content, true, context)
};

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_9_vue_vue_type_style_index_0_id_3ef77284_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(520);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_9_vue_vue_type_style_index_0_id_3ef77284_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_9_vue_vue_type_style_index_0_id_3ef77284_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_9_vue_vue_type_style_index_0_id_3ef77284_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_9_vue_vue_type_style_index_0_id_3ef77284_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-footer[data-v-3ef77284],.wrapper-footer[data-v-3ef77284]{background:var(--background_color_1)}.content-footer[data-v-3ef77284]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.modal[data-v-3ef77284]{background-color:#000;background-color:rgba(0,0,0,.4);height:100%;left:0;overflow:auto;padding-top:200px;position:fixed;top:0;width:100%;z-index:10}.empty[data-v-3ef77284]{align-items:center;background-color:var(--color_border);display:flex;flex-direction:column;height:1px;justify-content:center;width:100%}@media (min-width:300px){.content-items-sm[data-v-3ef77284]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-store-sm[data-v-3ef77284]{width:90%}.content-direction[data-v-3ef77284],.content-email[data-v-3ef77284],.content-number[data-v-3ef77284],.content-store-sm[data-v-3ef77284]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center}.content-direction[data-v-3ef77284],.content-email[data-v-3ef77284],.content-number[data-v-3ef77284]{width:100%}.info-legal-sm[data-v-3ef77284],.info-networks[data-v-3ef77284],.info-store-sm[data-v-3ef77284]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;width:100%}.btn[data-v-3ef77284]{color:var(--color_title);font-size:18px;padding-bottom:10px}.btn[data-v-3ef77284],.txt[data-v-3ef77284]{font-family:var(--font-style-1)!important}.txt[data-v-3ef77284]{color:var(--color_text);font-size:14px}.btns[data-v-3ef77284]:hover{color:var(--hover_text)}.btn-legal[data-v-3ef77284]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;text-align:left;width:100%}.content-items-lg[data-v-3ef77284]{display:none}.madebyKomercia[data-v-3ef77284]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding-bottom:20px;padding-top:20px;width:100%}.txt-devBy[data-v-3ef77284]{color:var(--color_text);font-size:14px}.logo2[data-v-3ef77284]{opacity:.5;width:100px}}@media (min-width:1024px){.content-items-sm[data-v-3ef77284]{display:none}.content-items-lg[data-v-3ef77284]{grid-gap:1rem;align-items:flex-start;display:grid;gap:1rem;grid-template-columns:repeat(3,minmax(0,1fr));justify-content:center;width:90%}.img-logo[data-v-3ef77284]{max-width:var(--with_logo);-o-object-fit:contain;object-fit:contain;width:100%}.info-btn-footer[data-v-3ef77284]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;width:100%}.btns[data-v-3ef77284]{color:var(--color_text);font-family:var(--font-style-1)!important;font-size:14px}.btns[data-v-3ef77284]:hover{color:var(--hover_text)}}@media (min-width:1200px){.content-items-lg[data-v-3ef77284]{max-width:80rem;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=footers-k14-footer9-ko-footer9.js.map