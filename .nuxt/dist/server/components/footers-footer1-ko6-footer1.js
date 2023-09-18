exports.ids = [199];
exports.modules = {

/***/ 1255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer1/Ko6-Footer-1.vue?vue&type=template&id=0ed73b06&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "background",
    staticClass: "wrapper-footer",
    style: _vm.settingByTemplate
  }, [_vm._ssrNode("<div class=\"contenedor\" data-v-0ed73b06>", "</div>", [_vm._ssrNode("<div class=\"content-items-iconos\" data-v-0ed73b06>", "</div>", _vm._l(_vm.links, function (item, index) {
    return _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
      display: item.link ? '' : 'none'
    }) + " data-v-0ed73b06>", "</div>", [item.link ? _vm._ssrNode("<a" + _vm._ssrAttr("href", item.link) + " target=\"_blank \" rel=\"noreferrer noopener\" data-v-0ed73b06>", "</a>", [_c(item.icon, {
      tag: "div",
      staticClass: "icon"
    })], 1) : _vm._e()]);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"footer-item-secciones\" data-v-0ed73b06>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-0ed73b06>", "</div>", [_c('nuxt-link', {
      staticClass: "text-secciones",
      attrs: {
        "to": item.path
      }
    }, [_vm._v("\n          " + _vm._s(_vm.$t(`${item.name}`)) + "\n        ")])], 1);
  }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"under-footer\" data-v-0ed73b06>", "</div>", [_vm._ssrNode((_vm.dataStore.politicas ? "<div class=\"contenedor-term-con\" data-v-0ed73b06><label for=\"modal-toggle\" data-v-0ed73b06>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('footer_politicasyterminos'))) + "</label></div>" : "<!---->") + " <div class=\"separator\" data-v-0ed73b06></div> <p data-v-0ed73b06>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_desarrollado'))) + "</p> "), _vm._ssrNode("<a href=\"https://komercia.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-0ed73b06>", "</a>", [_vm.logo ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`,
      expression: "\n          `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`\n        "
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
      expression: "\n          `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png`\n        "
    }],
    staticClass: "logo2",
    attrs: {
      "alt": "Logo Img"
    }
  }, [])])], 2), _vm._ssrNode(" "), _vm.dataStore.politicas ? _vm._ssrNode("<div class=\"modal-container\" data-v-0ed73b06>", "</div>", [_vm._ssrNode("<input id=\"modal-toggle\" type=\"checkbox\" data-v-0ed73b06> <label for=\"modal-toggle\" class=\"modal-backdrop\" data-v-0ed73b06></label> "), _vm._ssrNode("<div class=\"modal-content\" data-v-0ed73b06>", "</div>", [_vm._ssrNode("<div class=\"header-modal\" data-v-0ed73b06>", "</div>", [_vm._ssrNode("<p class=\"text-top-bold\" data-v-0ed73b06>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_condicionesLegales'))) + "</p> "), _vm._ssrNode("<label for=\"modal-toggle\" class=\"modal-close-btn\" data-v-0ed73b06>", "</label>", [_c('close-icon', {
    staticClass: "close-icon-modal"
  })], 1)], 2), _vm._ssrNode(" <div class=\"tabs\" data-v-0ed73b06>" + (_vm.dataStore.politicas.cambio ? "<div class=\"tab\" data-v-0ed73b06><input id=\"tab-one\" type=\"checkbox\" name=\"tabs\" data-v-0ed73b06> <label for=\"tab-one\" data-v-0ed73b06>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicaCambio'))) + "</label> <div class=\"tab-content\" data-v-0ed73b06><div data-v-0ed73b06>" + _vm._s(_vm.dataStore.politicas.cambio) + "</div></div></div>" : "<!---->") + " " + (_vm.dataStore.politicas.datos ? "<div class=\"tab\" data-v-0ed73b06><input id=\"tab-two\" type=\"checkbox\" name=\"tabs\" data-v-0ed73b06> <label for=\"tab-two\" data-v-0ed73b06>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicaTratamientos'))) + "</label> <div class=\"tab-content\" data-v-0ed73b06><div data-v-0ed73b06>" + _vm._s(_vm.dataStore.politicas.datos) + "</div></div></div>" : "<!---->") + " " + (_vm.dataStore.politicas.devolucion ? "<div class=\"tab\" data-v-0ed73b06><input id=\"tab-three\" type=\"checkbox\" name=\"tabs\" data-v-0ed73b06> <label for=\"tab-three\" data-v-0ed73b06>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicaDevoluciones'))) + "</label> <div class=\"tab-content\" data-v-0ed73b06><div data-v-0ed73b06>" + _vm._s(_vm.dataStore.politicas.devolucion) + "</div></div></div>" : "<!---->") + " " + (_vm.dataStore.politicas.garantia ? "<div class=\"tab\" data-v-0ed73b06><input id=\"tab-four\" type=\"checkbox\" name=\"tabs\" data-v-0ed73b06> <label for=\"tab-four\" data-v-0ed73b06>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicaGarantia'))) + "</label> <div class=\"tab-content\" data-v-0ed73b06><div data-v-0ed73b06>" + _vm._s(_vm.dataStore.politicas.garantia) + "</div></div></div>" : "<!---->") + " " + (_vm.dataStore.politicas.envios ? "<div class=\"tab\" data-v-0ed73b06><input id=\"tab-five\" type=\"checkbox\" name=\"tabs\" data-v-0ed73b06> <label for=\"tab-five\" data-v-0ed73b06>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicaEnvios'))) + "</label> <div class=\"tab-content\" data-v-0ed73b06><div data-v-0ed73b06>" + _vm._s(_vm.dataStore.politicas.envios) + "</div></div></div>" : "<!---->") + " " + (_vm.dataStore.politicas.pagos ? "<div class=\"tab\" data-v-0ed73b06><input id=\"tab-six\" type=\"checkbox\" name=\"tabs\" data-v-0ed73b06> <label for=\"tab-six\" data-v-0ed73b06>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicaPagos'))) + "</label> <div class=\"tab-content\" data-v-0ed73b06><div data-v-0ed73b06>" + _vm._s(_vm.dataStore.politicas.pagos) + "</div></div></div>" : "<!---->") + "</div>")], 2)], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/footer1/Ko6-Footer-1.vue?vue&type=template&id=0ed73b06&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer1/Ko6-Footer-1.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko6_Footer_1vue_type_script_lang_js_ = ({
  name: 'Ko6-Footer-1',
  props: {
    dataStore: Object,
    settingByTemplate: Object
  },
  mounted() {
    if (this.settingByTemplate) {
      this.setLogo();
    }
  },
  data() {
    return {
      logo: null,
      secciones: [{
        name: 'footer_inicio',
        path: '/'
      }, {
        name: 'header_productos',
        path: '/productos'
      }, {
        name: 'footer_carrito',
        path: '/cart'
      }, {
        name: 'footer_contacto',
        path: '/contacto'
      }, {
        name: 'footer_micompra',
        path: '/micompra'
      }],
      links: [{
        nombre: 'Facebook',
        icon: 'facebook-icon',
        link: this.dataStore.tienda.red_facebook
      }, {
        nombre: 'Twitter',
        icon: 'twitter-icon',
        link: this.dataStore.tienda.red_twitter
      }, {
        nombre: 'Instagram',
        icon: 'instagram-icon',
        link: this.dataStore.tienda.red_instagram
      }, {
        nombre: 'Youtube',
        icon: 'youtube-icon',
        link: this.dataStore.tienda.red_youtube
      }, {
        nombre: 'Tiktok',
        icon: 'tiktok-icon',
        link: this.dataStore.tienda.red_tiktok
      }]
    };
  },
  methods: {
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
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook;
      this.links[1].link = this.dataStore.tienda.red_twitter;
      this.links[2].link = this.dataStore.tienda.red_instagram;
      this.links[3].link = this.dataStore.tienda.red_youtube;
      this.links[4].link = this.dataStore.tienda.red_tiktok;
    },
    settingByTemplate(value) {
      let colorArray = value.split(',');
      let colorInt = parseInt(colorArray[2]);
      if (colorInt > 50) {
        this.logo = true;
      } else {
        this.logo = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/footers/footer1/Ko6-Footer-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer1_Ko6_Footer_1vue_type_script_lang_js_ = (Ko6_Footer_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/footer1/Ko6-Footer-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(926)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer1_Ko6_Footer_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0ed73b06",
  "7eec568e"
  
)

/* harmony default export */ var Ko6_Footer_1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(927);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("54be9d9e", content, true, context)
};

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko6_Footer_1_vue_vue_type_style_index_0_id_0ed73b06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(561);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko6_Footer_1_vue_vue_type_style_index_0_id_0ed73b06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko6_Footer_1_vue_vue_type_style_index_0_id_0ed73b06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko6_Footer_1_vue_vue_type_style_index_0_id_0ed73b06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko6_Footer_1_vue_vue_type_style_index_0_id_0ed73b06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-footer[data-v-0ed73b06]{background:var(--background_color_1);box-sizing:border-box;padding-bottom:10px}.contenedor[data-v-0ed73b06],.wrapper-footer[data-v-0ed73b06]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.contenedor[data-v-0ed73b06]{max-width:1300px;padding:40px 30px 10px}.footer-item-secciones[data-v-0ed73b06]{align-items:center;display:flex;flex-direction:row;justify-content:center;margin-top:15px;width:100%}.text-secciones[data-v-0ed73b06]{color:var(--color_text);font-size:16px;font-stretch:normal;font-style:normal;letter-spacing:normal;line-height:1.4;margin-right:10px}.text-secciones[data-v-0ed73b06]:hover{color:var(--color_hover_text)}.content-items-iconos[data-v-0ed73b06]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.icon[data-v-0ed73b06]{color:var(--color_icon);font-size:30px;margin-right:10px}.icon[data-v-0ed73b06]:hover{color:var(--btnhover)}.text-top-bold[data-v-0ed73b06]{color:var(--color_text);font-size:18px;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.4}.under-footer[data-v-0ed73b06]{align-items:center;display:flex;flex-direction:column;justify-content:space-between;max-width:1300px;width:100%}.under-footer p[data-v-0ed73b06]{color:var(--color_text);font-size:12px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4}.contenedor-term-con[data-v-0ed73b06]{align-items:center;display:flex;justify-content:center;margin-bottom:5px;width:100%}.contenedor-term-con label[data-v-0ed73b06]{color:var(--color_icon);cursor:pointer;font-size:15px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4}.separator[data-v-0ed73b06]{background:var(--color_icon);border:1px solid var(--color_icon);height:1.1px;margin-bottom:10px;max-width:400px;opacity:.5;width:100%}.logo2[data-v-0ed73b06]{opacity:.7;width:100px}#modal-toggle[data-v-0ed73b06]{display:none}.modal-content[data-v-0ed73b06]::-webkit-scrollbar{background:#fff;border-bottom-right-radius:var(--radius_btn);border-top-right-radius:var(--radius_btn);width:10px}.modal-content[data-v-0ed73b06]::-webkit-scrollbar-track{border-radius:10px;box-shadow:inset 0 0 10px #fff}.modal-content[data-v-0ed73b06]::-webkit-scrollbar-thumb{background:#000;border-radius:10px}.modal-backdrop[data-v-0ed73b06],.modal-content[data-v-0ed73b06]{cursor:pointer;opacity:0;overflow:hidden;position:fixed;transition:all .3s ease-in-out;z-index:-1}.modal-backdrop[data-v-0ed73b06]{height:100vh;left:0;top:0;width:100vw}#modal-toggle:checked~.modal-backdrop[data-v-0ed73b06]{background-color:rgba(0,0,0,.5);opacity:1;z-index:15}#modal-toggle:checked~.modal-content[data-v-0ed73b06]{background-color:#fff;border-radius:var(--radius_btn);cursor:auto;opacity:1;overflow:auto;pointer-events:auto;z-index:15}.modal-content[data-v-0ed73b06]{bottom:0;left:0;margin:auto;max-height:450px;max-width:1000px;padding:10px;right:0;top:0;width:100%}.header-modal[data-v-0ed73b06]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:20px;width:100%}.modal-close-btn[data-v-0ed73b06]{cursor:pointer;display:inline-block;right:10px}.close-icon-modal[data-v-0ed73b06]{color:#000;font-size:30px}.close-icon-modal[data-v-0ed73b06]:hover{color:gray}.modal-close-btn svg[data-v-0ed73b06]{transition:.2s}.modal-close-btn:hover svg[data-v-0ed73b06]{transform:rotate(90deg)}.tabs[data-v-0ed73b06]{padding:10px 20px;width:100%}.tab[data-v-0ed73b06]{color:#000;margin-bottom:5px;overflow:hidden;position:relative;width:100%}.tab input[data-v-0ed73b06]{opacity:0;position:absolute;z-index:-1}.tab label[data-v-0ed73b06]{background:#e6e6e6;color:var(--color_text);cursor:pointer;display:block;font-weight:700;line-height:3;padding:0 0 0 1em;position:relative}.tab-content[data-v-0ed73b06]{background:#fff;border:1px solid #e6e6e6;color:#000;max-height:0;overflow:hidden;transition:max-height .35s}.tab-content div[data-v-0ed73b06]{color:#000;margin:1em}.tab input:checked~.tab-content[data-v-0ed73b06]{max-height:100%}.tab label[data-v-0ed73b06]:after{display:block;height:3em;line-height:3;position:absolute;right:0;text-align:center;top:0;transition:all .35s;width:3em}.tab input[type=checkbox]+label[data-v-0ed73b06]:after{color:var(--color_subtext);content:\"+\"}.tab input[type=radio]+label[data-v-0ed73b06]:after{content:\"\\25BC\"}.tab input[type=checkbox]:checked+label[data-v-0ed73b06]:after{transform:rotate(315deg)}.tab input[type=radio]:checked+label[data-v-0ed73b06]:after{transform:rotateX(180deg)}@media (max-width:768px){.contenedor[data-v-0ed73b06]{padding:60px 20px 10px}}@media (max-width:600px){#modal-toggle:checked~.modal-backdrop[data-v-0ed73b06]{opacity:0}.contenedor[data-v-0ed73b06]{padding:20px 15px 10px}.modal-content[data-v-0ed73b06]{height:100%;left:0;top:0;width:100vw}.separator[data-v-0ed73b06]{max-width:300px}.under-footer[data-v-0ed73b06]{margin-bottom:28px}.under-footer p[data-v-0ed73b06]{font-size:16px;text-align:center}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=footers-footer1-ko6-footer1.js.map