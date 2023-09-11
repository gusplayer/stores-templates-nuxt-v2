exports.ids = [206];
exports.modules = {

/***/ 1134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer8/Ko-Footer-8.vue?vue&type=template&id=601275e4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate13 ? _c('div', {
    ref: "background",
    staticClass: "wrapper-footer",
    style: [_vm.settingByTemplate13[0].setting13Footer, _vm.settingByTemplate13[0].setting13General, {
      '--font-style-1': this.settingByTemplate13 && this.settingByTemplate13[0].setting13General && this.settingByTemplate13[0].setting13General.fount_1 ? this.settingByTemplate13[0].setting13General.fount_1 : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"contenedor\" data-v-601275e4>", "</div>", [_vm._ssrNode("<div class=\"content-items-iconos\" data-v-601275e4>", "</div>", _vm._l(_vm.links, function (item, index) {
    return _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
      display: item.link ? '' : 'none'
    }) + " data-v-601275e4>", "</div>", [item.link ? _vm._ssrNode("<a" + _vm._ssrAttr("href", item.link) + " target=\"_blank \" rel=\"noreferrer noopener\" data-v-601275e4>", "</a>", [_c(item.icon, {
      tag: "div",
      staticClass: "icon"
    })], 1) : _vm._e()]);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"footer-item-secciones\" data-v-601275e4>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-601275e4>", "</div>", [item.path ? _c('nuxt-link', {
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
  }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"under-footer\" data-v-601275e4>", "</div>", [_vm._ssrNode((_vm.dataStore.politicas ? "<button class=\"contenedor-term-con\" data-v-601275e4><p data-v-601275e4>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicasyterminos'))) + "</p></button>" : "<!---->") + " " + (_vm.settingByTemplate13 && _vm.settingByTemplate13[0].setting13Footer.watermark ? "<div class=\"separator\" data-v-601275e4></div>" : "<!---->") + " " + (_vm.settingByTemplate13 && _vm.settingByTemplate13[0].setting13Footer.watermark ? "<p data-v-601275e4>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_desarrollado')) + "\n    ") + "</p>" : "<!---->") + " "), _vm.settingByTemplate13 && _vm.settingByTemplate13[0].setting13Footer.watermark ? _vm._ssrNode("<a href=\"https://komercia.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-601275e4>", "</a>", [_vm.logo ? _c('img', {
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
  }, [])]) : _vm._e()], 2), _vm._ssrNode(" "), _vm.showModal ? _vm._ssrNode("<div data-v-601275e4>", "</div>", [_vm.dataStore.politicas ? _vm._ssrNode("<div class=\"modal\" data-v-601275e4>", "</div>", [_c('KoTermsConditions', {
    attrs: {
      "dataStore": _vm.dataStore
    }
  })], 1) : _vm._e()]) : _vm._e()], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/footer8/Ko-Footer-8.vue?vue&type=template&id=601275e4&scoped=true&

// EXTERNAL MODULE: ./components/footers/ko-TermsAndConditions.vue + 4 modules
var ko_TermsAndConditions = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer8/Ko-Footer-8.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_Footer_8vue_type_script_lang_js_ = ({
  name: 'Ko-Footer-8',
  components: {
    KoTermsConditions: ko_TermsAndConditions["a" /* default */]
  },
  props: {
    dataStore: Object,
    settingByTemplate13: Array
  },
  mounted() {
    if (this.settingByTemplate13 && this.settingByTemplate13[0].setting13Footer) {
      this.setLogo();
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
  }
});
// CONCATENATED MODULE: ./components/footers/footer8/Ko-Footer-8.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer8_Ko_Footer_8vue_type_script_lang_js_ = (Ko_Footer_8vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/footer8/Ko-Footer-8.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(599)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer8_Ko_Footer_8vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "601275e4",
  "b7946672"
  
)

/* harmony default export */ var Ko_Footer_8 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(600);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2b8c69bf", content, true, context)
};

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_8_vue_vue_type_style_index_0_id_601275e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(304);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_8_vue_vue_type_style_index_0_id_601275e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_8_vue_vue_type_style_index_0_id_601275e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_8_vue_vue_type_style_index_0_id_601275e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_8_vue_vue_type_style_index_0_id_601275e4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-footer[data-v-601275e4]{background:var(--background_color_1);box-sizing:border-box;padding-bottom:10px}.contenedor[data-v-601275e4],.wrapper-footer[data-v-601275e4]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.contenedor[data-v-601275e4]{max-width:1300px;padding:40px 30px 10px}.footer-item-secciones[data-v-601275e4]{align-items:center;display:flex;flex-direction:row;justify-content:center;margin-top:15px;width:100%}.text-secciones[data-v-601275e4]{color:var(--color_text);font-size:16px;font-stretch:normal;font-style:normal;letter-spacing:normal;line-height:1.4;margin-right:10px}.text-secciones[data-v-601275e4]:hover{color:var(--color_hover_text)}.content-items-iconos[data-v-601275e4]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.icon[data-v-601275e4]{fill:var(--color_icon);color:var(--color_icon);font-size:var(--with_logo);margin-right:10px}.icon[data-v-601275e4]:hover{fill:var(--btnhover);color:var(--btnhover)}.text-top-bold[data-v-601275e4]{color:var(--color_text);font-size:18px;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.4}.under-footer[data-v-601275e4]{align-items:center;display:flex;flex-direction:column;justify-content:space-between;max-width:1300px;width:100%}.under-footer p[data-v-601275e4]{color:var(--color_text);font-size:12px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4}.contenedor-term-con[data-v-601275e4]{align-items:center;display:flex;justify-content:center;margin-bottom:5px;width:100%}.contenedor-term-con p[data-v-601275e4]{color:var(--color_icon);cursor:pointer;font-size:15px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4}.separator[data-v-601275e4]{background:var(--color_border);border:1px solid var(--color_border);height:1.1px;margin-bottom:10px;max-width:400px;opacity:.5;width:100%}.logo2[data-v-601275e4]{opacity:.7;width:100px}.modal[data-v-601275e4]{background-color:#000;background-color:rgba(0,0,0,.4);height:100%;left:0;overflow:auto;padding-top:200px;position:fixed;top:0;width:100%;z-index:10}.wrapper-logo-tablada[data-v-601275e4]{align-items:center;display:flex;justify-content:center;width:100%}.logo-tablada[data-v-601275e4]{max-height:74px;-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left}@media (max-width:768px){.contenedor[data-v-601275e4]{padding:60px 20px 10px}}@media (max-width:600px){#modal-toggle:checked~.modal-backdrop[data-v-601275e4]{opacity:0}.contenedor[data-v-601275e4]{padding:20px 10px 10px}.modal-content[data-v-601275e4]{height:100%;left:0;top:0;width:100vw}.separator[data-v-601275e4]{max-width:300px}.under-footer[data-v-601275e4]{margin-bottom:28px}.under-footer p[data-v-601275e4]{font-size:16px;text-align:center}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("13f7e7f2", content, true, context)
};

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_TermsAndConditions_vue_vue_type_style_index_0_id_760d0974_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_TermsAndConditions_vue_vue_type_style_index_0_id_760d0974_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_TermsAndConditions_vue_vue_type_style_index_0_id_760d0974_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_TermsAndConditions_vue_vue_type_style_index_0_id_760d0974_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_TermsAndConditions_vue_vue_type_style_index_0_id_760d0974_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".accordion[data-v-760d0974]{background-color:#eee;border-style:none;border-width:1px;color:#222;cursor:pointer;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;margin-bottom:0;outline:2px solid transparent;outline-offset:2px;text-align:left;transition:.4s;width:100%}.accordion[data-v-760d0974]:hover,.active[data-v-760d0974]{background-color:#ccc}.accordion[data-v-760d0974]:after{color:#222;content:\"\\276F\";float:right;font-weight:600}.accordion[data-v-760d0974]:after,.active[data-v-760d0974]:after{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.active[data-v-760d0974]:after{transform:rotate(90deg)}.panel[data-v-760d0974]{align-items:center;background-color:#fff;justify-content:flex-start;max-height:0;overflow:hidden;padding-left:40px;padding-right:40px;transition:.4s ease-out;width:100%}.modal-content[data-v-760d0974]{-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:animatetop-760d0974;animation-name:animatetop-760d0974;background-color:#fefefe;border:1px solid #888;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);margin:auto;max-height:600px;overflow-y:auto;padding:0;position:relative}.modal-content[data-v-760d0974]::-webkit-scrollbar{width:5px}.modal-content[data-v-760d0974]::-webkit-scrollbar-thumb{background:#a3a3a3;border-radius:4px}.modal-content[data-v-760d0974]::-webkit-scrollbar-thumb:active{background-color:#777}.modal-content[data-v-760d0974]::-webkit-scrollbar-thumb:hover{background:#686868;box-shadow:0 0 2px 1px rgba(0,0,0,.401)}@keyframes animatetop-760d0974{0%{opacity:0;top:-300px}to{opacity:1;top:0}}.close[data-v-760d0974]{color:#fff;float:right;font-size:28px;font-weight:600}.close[data-v-760d0974]:focus,.close[data-v-760d0974]:hover{color:#ccc;cursor:pointer;-webkit-text-decoration:none;text-decoration:none}.modal-header[data-v-760d0974]{background-color:#222;color:#fff;justify-content:space-between;padding:10px 20px;position:sticky;top:0}.content-items-modal[data-v-760d0974],.modal-header[data-v-760d0974]{align-items:center;display:flex;width:100%}.content-items-modal[data-v-760d0974]{flex-direction:column;justify-content:center}.txt-Legal[data-v-760d0974]{color:#fff;font-size:16px;font-weight:600}.content-modal[data-v-760d0974],.txt-Legal[data-v-760d0974]{font-family:\"Poppins\",Helvetica,Arial,sans-serif!important}.content-modal[data-v-760d0974]{border-bottom:1px solid #ccc;color:#222;font-size:16px;font-weight:600;padding-bottom:10px;padding-top:10px;position:sticky;top:62px}@media (min-width:300px){.modal-content[data-v-760d0974]{width:100%}.content-modal[data-v-760d0974]{font-size:14px;padding-left:20px;padding-right:20px}}@media (min-width:768px){.modal-content[data-v-760d0974]{width:70%}.content-modal[data-v-760d0974]{font-size:15px;padding-left:30px;padding-right:30px}}@media (min-width:1400px){.modal-content[data-v-760d0974]{width:50%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/ko-TermsAndConditions.vue?vue&type=template&id=760d0974&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-content"
  }, [_vm._ssrNode("<div class=\"modal-header\" data-v-760d0974>", "</div>", [_c('nuxt-link', {
    staticClass: "txt-Legal",
    attrs: {
      "to": "/termsandconditions"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('footer_condicionesLegales')) + "\n    ")]), _vm._ssrNode(" <span class=\"close\" data-v-760d0974>×</span>")], 2), _vm._ssrNode(" <div class=\"content-items-modal\" data-v-760d0974>" + (this.dataStore.politicas.datos ? "<button class=\"content-modal accordion\" data-v-760d0974>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_politicaTratamientos')) + "\n    ") + "</button>" : "<!---->") + " " + (this.dataStore.politicas.datos ? "<div class=\"panel\" data-v-760d0974>" + _vm._s(this.dataStore.politicas.datos) + "</div>" : "<!---->") + " " + (this.dataStore.politicas.garantia ? "<button class=\"content-modal accordion\" data-v-760d0974>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_politicaGarantia')) + "\n    ") + "</button>" : "<!---->") + " " + (this.dataStore.politicas.garantia ? "<div class=\"panel\" data-v-760d0974>" + _vm._s(this.dataStore.politicas.garantia) + "</div>" : "<!---->") + " " + (this.dataStore.politicas.devolucion ? "<button class=\"content-modal accordion\" data-v-760d0974>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_politicaDevoluciones')) + "\n    ") + "</button>" : "<!---->") + " " + (this.dataStore.politicas.devolucion ? "<div class=\"panel\" data-v-760d0974>" + _vm._s(this.dataStore.politicas.devolucion) + "</div>" : "<!---->") + " " + (this.dataStore.politicas.cambio ? "<button class=\"content-modal accordion\" data-v-760d0974>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_politicaCambio')) + "\n    ") + "</button>" : "<!---->") + " " + (this.dataStore.politicas.cambio ? "<div class=\"panel\" data-v-760d0974>" + _vm._s(this.dataStore.politicas.cambio) + "</div>" : "<!---->") + " " + (this.dataStore.politicas.envios ? "<button class=\"content-modal accordion\" data-v-760d0974>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_politicaEnvios')) + "\n    ") + "</button>" : "<!---->") + " " + (this.dataStore.politicas.envios ? "<div class=\"panel\" data-v-760d0974>" + _vm._s(this.dataStore.politicas.envios) + "</div>" : "<!---->") + " " + (this.dataStore.politicas.pagos ? "<button class=\"content-modal accordion\" data-v-760d0974>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_politicaPagos')) + "\n    ") + "</button>" : "<!---->") + " " + (this.dataStore.politicas.pagos ? "<div class=\"panel\" data-v-760d0974>" + _vm._s(this.dataStore.politicas.pagos) + "</div>" : "<!---->") + "</div> <div class=\"px-10 py-4\" style=\"background-color: #222\" data-v-760d0974><button class=\"txt-Legal\" data-v-760d0974>" + _vm._ssrEscape("\n      🔗 " + _vm._s(_vm.$t('footer_irPagina')) + "\n    ") + "</button></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/ko-TermsAndConditions.vue?vue&type=template&id=760d0974&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/ko-TermsAndConditions.vue?vue&type=script&lang=js&
/* harmony default export */ var ko_TermsAndConditionsvue_type_script_lang_js_ = ({
  name: 'Terms-and-Conditions',
  props: {
    dataStore: Object
  },
  mounted() {
    var acc = document.getElementsByClassName('accordion');
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.marginTop = '0px';
          panel.style.marginBottom = '0px';
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          panel.style.marginTop = '20px';
          panel.style.marginBottom = '20px';
        }
      });
    }
  },
  methods: {
    closeModalPolitics() {
      this.$store.state.modalpolitics05 = false;
    },
    goRouter() {
      this.$router.push({
        path: '/termsandconditions'
      });
      this.closeModalPolitics();
    }
  }
});
// CONCATENATED MODULE: ./components/footers/ko-TermsAndConditions.vue?vue&type=script&lang=js&
 /* harmony default export */ var footers_ko_TermsAndConditionsvue_type_script_lang_js_ = (ko_TermsAndConditionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/ko-TermsAndConditions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footers_ko_TermsAndConditionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "760d0974",
  "940e5430"
  
)

/* harmony default export */ var ko_TermsAndConditions = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=206.js.map