exports.ids = [28];
exports.modules = {

/***/ 1250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer8/Ko-Footer-8.vue?vue&type=template&id=1df5b7cd&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate13 ? _c('div', {
    ref: "background",
    staticClass: "wrapper-footer",
    style: [_vm.settingByTemplate13[0].setting13Footer, _vm.settingByTemplate13[0].setting13General, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate13[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.setting13General) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.fount_1) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"contenedor\" data-v-1df5b7cd>", "</div>", [_vm._ssrNode("<div class=\"content-items-iconos\" data-v-1df5b7cd>", "</div>", _vm._l(_vm.links, function (item, index) {
    return _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
      display: item.link ? '' : 'none'
    }) + " data-v-1df5b7cd>", "</div>", [item.link ? _vm._ssrNode("<a" + _vm._ssrAttr("href", item.link) + " target=\"_blank \" rel=\"noreferrer noopener\" data-v-1df5b7cd>", "</a>", [_c(item.icon, {
      tag: "div",
      staticClass: "icon"
    })], 1) : _vm._e()]);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"footer-item-secciones\" data-v-1df5b7cd>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-1df5b7cd>", "</div>", [item.path ? _c('nuxt-link', {
      staticClass: "text-secciones",
      attrs: {
        "to": item.path
      }
    }, [_vm._v("\n          " + _vm._s(_vm.$t(`${item.name}`)) + "\n        ")]) : _vm._e(), _vm._ssrNode(" "), item.href && _vm.listArticulos > 0 ? _c('nuxt-link', {
      staticClass: "text-secciones",
      attrs: {
        "to": item.href
      }
    }, [_vm._v("\n          " + _vm._s(_vm.$t(`${item.name}`)) + "\n        ")]) : _vm._e()], 2);
  }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"under-footer\" data-v-1df5b7cd>", "</div>", [_vm._ssrNode((_vm.dataStore.politicas ? "<button class=\"contenedor-term-con\" data-v-1df5b7cd><p data-v-1df5b7cd>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicasyterminos'))) + "</p></button>" : "<!---->") + " " + (_vm.settingByTemplate13 && _vm.settingByTemplate13[0].setting13Footer.watermark ? "<div class=\"separator\" data-v-1df5b7cd></div>" : "<!---->") + " " + (_vm.settingByTemplate13 && _vm.settingByTemplate13[0].setting13Footer.watermark ? "<p data-v-1df5b7cd>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_desarrollado')) + "\n    ") + "</p>" : "<!---->") + " "), _vm.settingByTemplate13 && _vm.settingByTemplate13[0].setting13Footer.watermark ? _vm._ssrNode("<a href=\"https://komercia.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-1df5b7cd>", "</a>", [_vm.logo ? _c('img', {
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
  }, [])]) : _vm._e()], 2), _vm._ssrNode(" "), _vm.showModal && _vm.dataStore.politicas ? _vm._ssrNode("<div class=\"modal\" data-v-1df5b7cd>", "</div>", [_c('KoTermsConditions', {
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 1) : _vm._e()], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/footer8/Ko-Footer-8.vue?vue&type=template&id=1df5b7cd&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer8/Ko-Footer-8.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Footer_8vue_type_script_lang_js_ = ({
  name: 'Ko8Footer',
  components: {
    KoTermsConditions: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 1107))
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate13: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      logo: true,
      secciones: [{
        name: 'footer_inicio',
        path: '/'
      }, {
        name: 'footer_carrito',
        path: '/cart'
      }, {
        name: 'footer_contacto',
        path: '/contacto'
      }, {
        name: 'footer_micompra',
        path: '/micompra'
      }, {
        name: 'header_blog',
        href: '/blog'
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
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos.length;
    },
    showModal() {
      return this.$store.state.modalpolitics05;
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
    settingByTemplate13() {
      if (this.settingByTemplate13 && this.settingByTemplate13[0].setting13Footer) {
        let color = this.settingByTemplate13[0].setting13Footer['--background_color_1'];
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
    if (this.settingByTemplate13 && this.settingByTemplate13[0].setting13Footer) {
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
// CONCATENATED MODULE: ./components/footers/footer8/Ko-Footer-8.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer8_Ko_Footer_8vue_type_script_lang_js_ = (Ko_Footer_8vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/footer8/Ko-Footer-8.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(899)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer8_Ko_Footer_8vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1df5b7cd",
  "b7946672"
  
)

/* harmony default export */ var Ko_Footer_8 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(900);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5fc7bd6f", content, true, context)
};

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_8_vue_vue_type_style_index_0_id_1df5b7cd_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(498);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_8_vue_vue_type_style_index_0_id_1df5b7cd_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_8_vue_vue_type_style_index_0_id_1df5b7cd_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_8_vue_vue_type_style_index_0_id_1df5b7cd_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_8_vue_vue_type_style_index_0_id_1df5b7cd_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-footer[data-v-1df5b7cd]{background:var(--background_color_1);box-sizing:border-box;padding-bottom:10px}.contenedor[data-v-1df5b7cd],.wrapper-footer[data-v-1df5b7cd]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.contenedor[data-v-1df5b7cd]{max-width:1300px;padding:40px 30px 10px}.footer-item-secciones[data-v-1df5b7cd]{align-items:center;display:flex;flex-direction:row;justify-content:center;margin-top:15px;width:100%}.text-secciones[data-v-1df5b7cd]{color:var(--color_text);font-size:16px;font-stretch:normal;font-style:normal;letter-spacing:normal;line-height:1.4;margin-right:10px}.text-secciones[data-v-1df5b7cd]:hover{color:var(--color_hover_text)}.content-items-iconos[data-v-1df5b7cd]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.icon[data-v-1df5b7cd]{fill:var(--color_icon);color:var(--color_icon);font-size:var(--with_logo);margin-right:10px}.icon[data-v-1df5b7cd]:hover{fill:var(--btnhover);color:var(--btnhover)}.text-top-bold[data-v-1df5b7cd]{color:var(--color_text);font-size:18px;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.4}.under-footer[data-v-1df5b7cd]{align-items:center;display:flex;flex-direction:column;justify-content:space-between;max-width:1300px;width:100%}.under-footer p[data-v-1df5b7cd]{color:var(--color_text);font-size:12px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4}.contenedor-term-con[data-v-1df5b7cd]{align-items:center;display:flex;justify-content:center;margin-bottom:5px;width:100%}.contenedor-term-con p[data-v-1df5b7cd]{color:var(--color_icon);cursor:pointer;font-size:15px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4}.separator[data-v-1df5b7cd]{background:var(--color_border);border:1px solid var(--color_border);height:1.1px;margin-bottom:10px;max-width:400px;opacity:.5;width:100%}.logo2[data-v-1df5b7cd]{opacity:.7;width:100px}.modal[data-v-1df5b7cd]{background-color:#000;background-color:rgba(0,0,0,.4);height:100%;left:0;overflow:auto;padding-top:200px;position:fixed;top:0;width:100%;z-index:10}.wrapper-logo-tablada[data-v-1df5b7cd]{align-items:center;display:flex;justify-content:center;width:100%}.logo-tablada[data-v-1df5b7cd]{max-height:74px;-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left}@media (max-width:768px){.contenedor[data-v-1df5b7cd]{padding:60px 20px 10px}}@media (max-width:600px){#modal-toggle:checked~.modal-backdrop[data-v-1df5b7cd]{opacity:0}.contenedor[data-v-1df5b7cd]{padding:20px 10px 10px}.modal-content[data-v-1df5b7cd]{height:100%;left:0;top:0;width:100vw}.separator[data-v-1df5b7cd]{max-width:300px}.under-footer[data-v-1df5b7cd]{margin-bottom:28px}.under-footer p[data-v-1df5b7cd]{font-size:16px;text-align:center}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=footers-footer8-ko-footer8.js.map