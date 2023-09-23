exports.ids = [21];
exports.modules = {

/***/ 1241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer4/Ko-Footer-4.vue?vue&type=template&id=7933317f&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate7 && _vm.settingByTemplate7[0].setting7Footer ? _c('div', {
    style: [_vm.settingByTemplate7[0].setting7Footer, _vm.settingByTemplate7[0].setting7General, {
      '--font-style-1': _vm.settingByTemplate7 && _vm.settingByTemplate7[0].setting7General && _vm.settingByTemplate7[0].setting7General.fount_1 ? _vm.settingByTemplate7[0].setting7General.fount_1 : 'David libre'
    }]
  }, [_vm._ssrNode("<div class=\"footer-container\"" + _vm._ssrStyle(null, _vm.settingByTemplate7[0].setting7Footer.img_background ? `background-image: url(${_vm.settingByTemplate7[0].setting7Footer['--url_img']})` : 'background-image: none;', null) + " data-v-7933317f>", "</div>", [_vm._ssrNode("<div class=\"footer-content\" data-v-7933317f>", "</div>", [_vm._ssrNode("<div class=\"footer-content-items\" data-v-7933317f>", "</div>", [_vm._ssrNode("<div class=\"footer-content-logo\" data-v-7933317f>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n              `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n            "
    }],
    staticClass: "footer-logo",
    attrs: {
      "alt": "logo_tienda"
    }
  }, [])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"footer-content-button\" data-v-7933317f>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-7933317f>", "</div>", [item.path ? _c('nuxt-link', {
      staticClass: "btn",
      attrs: {
        "to": item.path
      }
    }, [_vm._v("\n              " + _vm._s(_vm.$t(`${item.name}`)) + "\n            ")]) : item.href && _vm.listArticulos > 0 ? _c('nuxt-link', {
      staticClass: "btn",
      attrs: {
        "to": item.href
      }
    }, [_vm._v("\n              " + _vm._s(_vm.$t(`${item.name}`)) + "\n            ")]) : _vm._e()], 1);
  }), 0), _vm._ssrNode(" "), _c('KoSocialNet', {
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 2), _vm._ssrNode(" <div class=\"content-Pliticas-Terminos\" data-v-7933317f>" + (_vm.dataStore.politicas ? "<button class=\"btn\" data-v-7933317f>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('footer_politicasyterminos')) + "\n        ") + "</button>" : "<!---->") + "</div> <div class=\"separator\" data-v-7933317f></div> "), _vm._ssrNode("<div class=\"madebyKomercia\" data-v-7933317f>", "</div>", [_vm._ssrNode("<p class=\"txt-devBy\" data-v-7933317f>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_desarrollado'))) + "</p> "), _vm._ssrNode("<a href=\"https://komercia.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-7933317f>", "</a>", [_vm.logo ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`,
      expression: "\n              `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`\n            "
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
      expression: "\n              `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png`\n            "
    }],
    staticClass: "logo2",
    attrs: {
      "alt": "Logo Img"
    }
  }, [])])], 2)], 2), _vm._ssrNode(" "), _vm.showModal && _vm.dataStore.politicas ? _vm._ssrNode("<div class=\"modal\" data-v-7933317f>", "</div>", [_c('KoTermsConditions', {
    attrs: {
      "data-store": _vm.dataStore
    }
  })], 1) : _vm._e()], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/footer4/Ko-Footer-4.vue?vue&type=template&id=7933317f&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer4/Ko-Footer-4.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Footer_4vue_type_script_lang_js_ = ({
  name: 'Ko4Footer',
  components: {
    KoSocialNet: () => __webpack_require__.e(/* import() */ 170).then(__webpack_require__.bind(null, 1222)),
    KoTermsConditions: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 1117))
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate7: {
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
      logo: true
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
    settingByTemplate7f() {
      if (this.settingByTemplate7 && this.settingByTemplate7[0].setting7Footer && !this.settingByTemplate7[0].setting7Footer.img_background) {
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
  },
  mounted() {
    if (this.settingByTemplate7 && this.settingByTemplate7[0].setting7Footer && !this.settingByTemplate7[0].setting7Footer.img_background) {
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
// CONCATENATED MODULE: ./components/footers/footer4/Ko-Footer-4.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer4_Ko_Footer_4vue_type_script_lang_js_ = (Ko_Footer_4vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/footer4/Ko-Footer-4.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(886)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer4_Ko_Footer_4vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7933317f",
  "6155f6bf"
  
)

/* harmony default export */ var Ko_Footer_4 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(887);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("e19db67c", content, true, context)
};

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_4_vue_vue_type_style_index_0_id_7933317f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(515);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_4_vue_vue_type_style_index_0_id_7933317f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_4_vue_vue_type_style_index_0_id_7933317f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_4_vue_vue_type_style_index_0_id_7933317f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_4_vue_vue_type_style_index_0_id_7933317f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer-container[data-v-7933317f]{background:var(--background_color_1);background-position:bottom;background-repeat:no-repeat;background-size:auto;min-height:322px}.footer-container[data-v-7933317f],.footer-content[data-v-7933317f]{align-items:center;display:flex;flex-direction:column;justify-content:center}.footer-content[data-v-7933317f]{margin-bottom:10px}.footer-content-items[data-v-7933317f]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:10px;margin-top:10px;width:100%}.footer-logo[data-v-7933317f]{max-width:var(--with_logo);-o-object-fit:contain;object-fit:contain;width:100%}.footer-content-button[data-v-7933317f]{align-items:center;display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;margin-top:32px;width:100%}.btn[data-v-7933317f]{color:var(--color_text);font-weight:600;letter-spacing:.05em;margin-left:8px;margin-right:8px;text-transform:uppercase}.btn[data-v-7933317f],.btn[data-v-7933317f]:hover{transition:all .25s ease}.btn[data-v-7933317f]:hover{--tw-text-opacity:1;color:#ed2353;color:rgba(237,35,83,var(--tw-text-opacity))}.btn[data-v-7933317f]{font-family:var(--font-style-1)!important}.logo2[data-v-7933317f]{opacity:.5;width:100px}.separator[data-v-7933317f]{background:#666;border:1px solid #666;height:2px;margin-bottom:5px;margin-top:5px;max-width:400px;opacity:.5;width:100%}.madebyKomercia[data-v-7933317f]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.txt-devBy[data-v-7933317f]{color:#666;font-size:14px}.modal[data-v-7933317f]{background-color:#000;background-color:rgba(0,0,0,.4);height:100%;left:0;overflow:auto;padding-top:200px;position:fixed;top:0;width:100%;z-index:10}@media (min-width:300px){.footer-content[data-v-7933317f]{display:flex;width:100%}.btn[data-v-7933317f]{font-size:.875rem}}@media (max-width:600px){.separator[data-v-7933317f]{max-width:300px}}@media (min-width:768px){.btn[data-v-7933317f]{font-size:16px}}@media (min-width:1192px){.footer-content[data-v-7933317f]{width:1192px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=footers-footer4-ko-footer4.js.map