exports.ids = [23];
exports.modules = {

/***/ 1243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer1/Ko-Footer-1.vue?vue&type=template&id=44cf85b0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "background",
    staticClass: "wrapper-footer",
    style: [_vm.settingByTemplate, {
      '--font-style': _vm.settingByTemplate && _vm.settingByTemplate.tipo_letra ? _vm.settingByTemplate.tipo_letra : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"contenedor\" data-v-44cf85b0>", "</div>", [_vm._ssrNode("<div class=\"content-items-iconos\" data-v-44cf85b0>", "</div>", _vm._l(_vm.links, function (item, index) {
    return _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
      display: item.link ? '' : 'none'
    }) + " data-v-44cf85b0>", "</div>", [item.link ? _vm._ssrNode("<a" + _vm._ssrAttr("href", item.link) + " target=\"_blank \" rel=\"noreferrer noopener\" data-v-44cf85b0>", "</a>", [_c(item.icon, {
      tag: "div",
      staticClass: "icon"
    })], 1) : _vm._e()]);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"footer-item-secciones\" data-v-44cf85b0>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-44cf85b0>", "</div>", [item.path ? _c('nuxt-link', {
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
  }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"under-footer\" data-v-44cf85b0>", "</div>", [_vm._ssrNode((_vm.dataStore.politicas ? "<button class=\"contenedor-term-con\" data-v-44cf85b0><p data-v-44cf85b0>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicasyterminos'))) + "</p></button>" : "<!---->") + " <div class=\"separator\" data-v-44cf85b0></div> " + (_vm.showLogo ? "<p data-v-44cf85b0>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_desarrollado')) + "\n    ") + "</p>" : "<!---->") + " "), _vm.showLogo ? _vm._ssrNode("<a href=\"https://komercia.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-44cf85b0>", "</a>", [_vm.logo ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`,
      expression: "\n          `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`\n        "
    }],
    staticClass: "logo2",
    attrs: {
      "width": "120",
      "loading": "lazy",
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
      "width": "120",
      "loading": "lazy",
      "alt": "Logo Img"
    }
  }, [])]) : _vm._e(), _vm._ssrNode(" "), !_vm.showLogo ? _c('nuxt-link', {
    staticClass: "wrapper-logo-tablada",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n          `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n        "
    }],
    staticClass: "logo-tablada",
    attrs: {
      "width": "120",
      "loading": "lazy",
      "alt": "Logo Img"
    }
  })]) : _vm._e()], 2), _vm._ssrNode(" "), _vm.showModal && _vm.dataStore.politicas ? _vm._ssrNode("<div class=\"modal\" data-v-44cf85b0>", "</div>", [_c('KoTermsConditions', {
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/footer1/Ko-Footer-1.vue?vue&type=template&id=44cf85b0&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer1/Ko-Footer-1.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Footer_1vue_type_script_lang_js_ = ({
  name: 'Ko5Footer',
  components: {
    KoTermsConditions: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 1107))
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showLogo: true,
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
    settingByTemplate(value) {
      if (value['--background_color_1']) {
        let color = value['--background_color_1'];
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
    if (this.settingByTemplate && this.settingByTemplate['--background_color_1']) {
      this.setLogo();
    }
    if (this.dataStore.tienda.id_tienda == 5574 || this.dataStore.tienda.id_tienda == 5347 || this.dataStore.tienda.id_tienda == 6369) {
      this.showLogo = false;
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
// CONCATENATED MODULE: ./components/footers/footer1/Ko-Footer-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer1_Ko_Footer_1vue_type_script_lang_js_ = (Ko_Footer_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/footer1/Ko-Footer-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(885)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer1_Ko_Footer_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "44cf85b0",
  "6f2e1639"
  
)

/* harmony default export */ var Ko_Footer_1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(886);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("10dc161e", content, true, context)
};

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_1_vue_vue_type_style_index_0_id_44cf85b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(491);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_1_vue_vue_type_style_index_0_id_44cf85b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_1_vue_vue_type_style_index_0_id_44cf85b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_1_vue_vue_type_style_index_0_id_44cf85b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_1_vue_vue_type_style_index_0_id_44cf85b0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-footer[data-v-44cf85b0]{background:var(--background_color_1);box-sizing:border-box;padding-bottom:10px}.contenedor[data-v-44cf85b0],.wrapper-footer[data-v-44cf85b0]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.contenedor[data-v-44cf85b0]{max-width:1300px;padding:40px 30px 10px}.footer-item-secciones[data-v-44cf85b0]{align-items:center;display:flex;flex-direction:row;justify-content:center;margin-top:15px;width:100%}.text-secciones[data-v-44cf85b0]{color:var(--color_text);font-size:16px;font-stretch:normal;font-style:normal;letter-spacing:normal;line-height:1.4;margin-right:10px}.text-secciones[data-v-44cf85b0]:hover{color:var(--color_hover_text)}.content-items-iconos[data-v-44cf85b0]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.icon[data-v-44cf85b0]{fill:var(--color_icon);color:var(--color_icon);font-size:30px;margin-right:10px}.icon[data-v-44cf85b0]:hover{fill:var(--btnhover);color:var(--btnhover)}.text-top-bold[data-v-44cf85b0]{color:var(--color_text);font-size:18px;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.4}.under-footer[data-v-44cf85b0]{align-items:center;display:flex;flex-direction:column;justify-content:space-between;max-width:1300px;width:100%}.under-footer p[data-v-44cf85b0]{color:var(--color_text);font-size:12px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4}.contenedor-term-con[data-v-44cf85b0]{align-items:center;display:flex;justify-content:center;margin-bottom:5px;width:100%}.contenedor-term-con p[data-v-44cf85b0]{color:var(--color_icon);cursor:pointer;font-size:15px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4}.separator[data-v-44cf85b0]{background:var(--color_icon);border:1px solid var(--color_icon);height:1.1px;margin-bottom:10px;max-width:400px;opacity:.5;width:100%}.logo2[data-v-44cf85b0]{opacity:.7;width:100px}.modal[data-v-44cf85b0]{background-color:#000;background-color:rgba(0,0,0,.4);height:100%;left:0;overflow:auto;padding-top:200px;position:fixed;top:0;width:100%;z-index:10}.wrapper-logo-tablada[data-v-44cf85b0]{align-items:center;display:flex;justify-content:center;width:100%}.logo-tablada[data-v-44cf85b0]{max-height:74px;-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left}@media (max-width:768px){.contenedor[data-v-44cf85b0]{padding:60px 20px 10px}}@media (max-width:600px){#modal-toggle:checked~.modal-backdrop[data-v-44cf85b0]{opacity:0}.contenedor[data-v-44cf85b0]{padding:20px 10px 10px}.modal-content[data-v-44cf85b0]{height:100%;left:0;top:0;width:100vw}.separator[data-v-44cf85b0]{max-width:300px}.under-footer[data-v-44cf85b0]{margin-bottom:28px}.under-footer p[data-v-44cf85b0]{font-size:16px;text-align:center}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=footers-footer1-ko-footer1.js.map