exports.ids = [24];
exports.modules = {

/***/ 1244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer7/Ko-Footer-7.vue?vue&type=template&id=08232762&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate11 ? _c('div', {
    ref: "background",
    staticClass: "wrapper-footer",
    style: [_vm.settingByTemplate11[0].setting11Footer, _vm.settingByTemplate11[0].setting11General]
  }, [_vm._ssrNode("<div class=\"content-footer\"" + _vm._ssrStyle(null, [{
    '--font-style-1': (_vm$settingByTemplate = _vm.settingByTemplate11[0]) !== null && _vm$settingByTemplate !== void 0 && (_vm$settingByTemplate2 = _vm$settingByTemplate.setting11General) !== null && _vm$settingByTemplate2 !== void 0 && _vm$settingByTemplate2.fount_1 ? _vm.settingByTemplate11[0].setting11General.fount_1 : 'Roboto'
  }], null) + " data-v-08232762>", "</div>", [_vm.settingByTemplate11[0].newsletter.visible ? _c('KoNewsLetter', {
    attrs: {
      "newsletter": _vm.settingByTemplate11[0].newsletter,
      "setting11-general": _vm.settingByTemplate11[0].setting11General,
      "data-store": _vm.dataStore
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-footer-items\" data-v-08232762>", "</div>", [_vm._ssrNode("<div class=\"content-items-sm\" data-v-08232762>", "</div>", [_vm._ssrNode("<div class=\"content-store-sm\" data-v-08232762>", "</div>", [_vm._ssrNode("<div class=\"info-store-sm\" data-v-08232762><button class=\"accordion btn\" data-v-08232762>Información de la tienda</button> <div class=\"footer-content-tienda panel\" data-v-08232762><div class=\"content-direction\" data-v-08232762>" + (_vm.dataStore.geolocalizacion.length ? "<p class=\"txt-direction txt\" data-v-08232762>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.geolocalizacion[0].direccion) + "\n                ") + "</p>" : "<!---->") + "</div> <div class=\"content-number\" data-v-08232762>" + (_vm.dataStore.tienda.telefono ? "<p class=\"txt-number txt\" data-v-08232762>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.tienda.telefono) + "\n                ") + "</p>" : "<!---->") + "</div> <div class=\"content-email\" data-v-08232762>" + (_vm.dataStore.tienda.email_tienda ? "<p class=\"txt-email txt\" data-v-08232762>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.tienda.email_tienda) + "\n                ") + "</p>" : "<!---->") + "</div></div></div> "), _vm._ssrNode("<div class=\"info-networks\" data-v-08232762>", "</div>", [_vm._ssrNode("<button class=\"accordion btn\" data-v-08232762>Síguenos</button> "), _c('KoSocialNet', {
    staticClass: "panel",
    attrs: {
      "footer-icon": _vm.settingByTemplate11[0].setting11Footer,
      "data-store": _vm.dataStore
    }
  })], 2), _vm._ssrNode(" <div class=\"info-legal-sm\" data-v-08232762>" + (_vm.dataStore.politicas ? "<button class=\"btn-legal btn\" data-v-08232762>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('footer_politicasyterminos')) + "\n            ") + "</button>" : "<!---->") + "</div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-items-lg\" data-v-08232762>", "</div>", [_vm._ssrNode("<div class=\"info-btn-footer gap-2\" data-v-08232762>", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", `${_vm.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`) + " alt=\"Logo\" class=\"img-logo\" data-v-08232762> <div class=\"content-direction\" data-v-08232762>" + (_vm.dataStore.geolocalizacion.length ? "<p class=\"txt-direction txt\" data-v-08232762>" + _vm._ssrEscape("\n              " + _vm._s(_vm.dataStore.geolocalizacion[0].direccion) + "\n            ") + "</p>" : "<!---->") + "</div> <div class=\"content-number\" data-v-08232762>" + (_vm.dataStore.tienda.telefono ? "<p class=\"txt-number txt\" data-v-08232762>" + _vm._ssrEscape("\n              " + _vm._s(_vm.dataStore.tienda.telefono) + "\n            ") + "</p>" : "<!---->") + "</div> <div class=\"content-email\" data-v-08232762>" + (_vm.dataStore.tienda.email_tienda ? "<p class=\"txt-email txt\" data-v-08232762>" + _vm._ssrEscape("\n              " + _vm._s(_vm.dataStore.tienda.email_tienda) + "\n            ") + "</p>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"info-networkss\" data-v-08232762>", "</div>", [_c('KoSocialNet', {
    attrs: {
      "footer-icon": _vm.settingByTemplate11[0].setting11Footer,
      "data-store": _vm.dataStore
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"info-btn-footer\" data-v-08232762>", "</div>", [_vm._ssrNode("<p class=\"btn\" data-v-08232762>Enlaces</p> "), _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-08232762>", "</div>", [item.path ? _c('nuxt-link', {
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
  })], 2), _vm._ssrNode(" <div class=\"info-btn-footer\" data-v-08232762><p class=\"btn\" data-v-08232762>Nuestra empresa</p> " + (_vm.dataStore.politicas ? "<button class=\"btn-legal btns\" data-v-08232762>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('footer_politicasyterminos')) + "\n          ") + "</button>" : "<!---->") + "</div>")], 2)], 2), _vm._ssrNode(" " + (_vm.settingByTemplate11[0].setting11Footer.watermark ? "<div class=\"empty\" data-v-08232762></div>" : "<!---->") + " "), _vm.settingByTemplate11[0].setting11Footer.watermark ? _vm._ssrNode("<div class=\"madebyKomercia\" data-v-08232762>", "</div>", [_vm._ssrNode("<p class=\"txt-devBy\" data-v-08232762>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_desarrollado'))) + "</p> "), _vm._ssrNode("<a href=\"https://komercia.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-08232762>", "</a>", [_c('img', {
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
  }, [])])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.showModal && _vm.dataStore.politicas ? _vm._ssrNode("<div class=\"modal\" data-v-08232762>", "</div>", [_c('KoTermsConditions', {
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 1) : _vm._e()], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/footer7/Ko-Footer-7.vue?vue&type=template&id=08232762&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer7/Ko-Footer-7.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Footer_7vue_type_script_lang_js_ = ({
  name: 'Ko7Footer',
  components: {
    KoNewsLetter: () => __webpack_require__.e(/* import() */ 57).then(__webpack_require__.bind(null, 1131)),
    KoSocialNet: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 1136)),
    KoTermsConditions: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 1117))
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate11: {
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
    settingByTemplate11() {
      if (this.settingByTemplate11 && this.settingByTemplate11[0].setting11Footer) {
        let color = this.settingByTemplate11[0].setting11Footer['--background_color_1'];
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
    if (this.settingByTemplate11 && this.settingByTemplate11[0].setting11Footer) {
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
// CONCATENATED MODULE: ./components/footers/footer7/Ko-Footer-7.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer7_Ko_Footer_7vue_type_script_lang_js_ = (Ko_Footer_7vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/footer7/Ko-Footer-7.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(892)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer7_Ko_Footer_7vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "08232762",
  "537dd745"
  
)

/* harmony default export */ var Ko_Footer_7 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(893);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("1f8177c0", content, true, context)
};

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_7_vue_vue_type_style_index_0_id_08232762_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_7_vue_vue_type_style_index_0_id_08232762_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_7_vue_vue_type_style_index_0_id_08232762_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_7_vue_vue_type_style_index_0_id_08232762_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_7_vue_vue_type_style_index_0_id_08232762_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-footer[data-v-08232762],.wrapper-footer[data-v-08232762]{align-items:center;background:var(--background_color_1);display:flex;justify-content:center;width:100%}.content-footer[data-v-08232762]{flex-direction:column}.content-footer-items[data-v-08232762]{align-items:center;display:flex;flex-direction:column;justify-content:center;max-width:1200px;width:100%}.modal[data-v-08232762]{background-color:#000;background-color:rgba(0,0,0,.4);height:100%;left:0;overflow:auto;padding-top:200px;position:fixed;top:0;width:100%;z-index:10}.empty[data-v-08232762]{align-items:center;background-color:var(--color_border);display:flex;flex-direction:column;height:1px;justify-content:center;width:100%}@media (min-width:300px){.content-items-sm[data-v-08232762]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-store-sm[data-v-08232762]{width:90%}.content-direction[data-v-08232762],.content-email[data-v-08232762],.content-number[data-v-08232762],.content-store-sm[data-v-08232762]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center}.content-direction[data-v-08232762],.content-email[data-v-08232762],.content-number[data-v-08232762]{width:100%}.info-legal-sm[data-v-08232762],.info-networks[data-v-08232762],.info-store-sm[data-v-08232762]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;width:100%}.btn[data-v-08232762]{color:var(--color_title);font-size:18px;padding-bottom:10px}.btn[data-v-08232762],.txt[data-v-08232762]{font-family:var(--font-style-1)!important}.txt[data-v-08232762]{color:var(--color_text);font-size:14px}.btns[data-v-08232762]:hover{color:var(--hover_text)}.btn-legal[data-v-08232762]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center}.accordion[data-v-08232762],.btn-legal[data-v-08232762]{text-align:left;width:100%}.accordion[data-v-08232762]{border-style:none;cursor:pointer;margin-bottom:0;outline:2px solid transparent;outline-offset:2px;transition:.4s}.accordion[data-v-08232762]:after{color:#fff;content:\"\\276F\";float:right;font-weight:700}.accordion[data-v-08232762]:after,.active[data-v-08232762]:after{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.active[data-v-08232762]:after{transform:rotate(90deg)}.panel[data-v-08232762]{align-items:center;justify-content:flex-start;margin-bottom:10px;max-height:0;overflow:hidden;transition:.4s ease-out;width:100%}.content-items-lg[data-v-08232762]{display:none}.madebyKomercia[data-v-08232762]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding-bottom:20px;padding-top:20px;width:100%}.txt-devBy[data-v-08232762]{color:var(--color_text);font-size:14px}.logo2[data-v-08232762]{opacity:.5;width:100px}}@media (min-width:1024px){.content-items-sm[data-v-08232762]{display:none}.content-items-lg[data-v-08232762]{grid-gap:1rem;align-items:flex-start;display:grid;gap:1rem;grid-template-columns:repeat(3,minmax(0,1fr));justify-content:center;width:90%}.img-logo[data-v-08232762]{max-width:var(--with_logo);-o-object-fit:contain;object-fit:contain;width:100%}.content-image[data-v-08232762]{align-items:center;justify-content:flex-start;margin-bottom:20px}.content-image[data-v-08232762],.info-btn-footer[data-v-08232762]{display:flex;flex-direction:column;width:100%}.info-btn-footer[data-v-08232762]{align-items:flex-start;justify-content:center}.btns[data-v-08232762]{color:var(--color_text);font-family:var(--font-style-1)!important;font-size:14px}.btns[data-v-08232762]:hover{color:var(--hover_text)}}@media (min-width:1200px){.content-items-lg[data-v-08232762]{max-width:1200px;width:80%}.content-footer-items[data-v-08232762]{padding-bottom:60px;padding-top:40px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=footers-footer7-ko-footer7.js.map