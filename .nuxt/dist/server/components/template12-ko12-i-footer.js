exports.ids = [85,259];
exports.modules = {

/***/ 1136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/Ko12-IFooter.vue?vue&type=template&id=badbaee6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "wrapper_footer",
    style: `background:${_vm.settingByTemplate12.backgroundFooter};`
  }, [_vm._ssrNode("<div class=\"header-content-logo\" data-v-badbaee6>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    style: `max-width:${_vm.settingByTemplate12.logoSize};`,
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "header-logo",
    attrs: {
      "src": `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      "alt": "Logo Img"
    }
  })])], 1), _vm._ssrNode(" <p class=\"text-title\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.footerText};`, null) + " data-v-badbaee6>" + _vm._ssrEscape("\n    " + _vm._s(_vm.settingByTemplate12.footerTitle) + "\n  ") + "</p> "), _vm._ssrNode("<div class=\"content-items-iconos\" data-v-badbaee6>", "</div>", _vm._l(_vm.links, function (item, index) {
    return _vm._ssrNode("<div" + _vm._ssrStyle(null, null, {
      display: item.link ? '' : 'none'
    }) + " data-v-badbaee6>", "</div>", [item.link ? _vm._ssrNode("<a" + _vm._ssrAttr("href", item.link) + " target=\"_blank \"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.footerText}; fill:${_vm.settingByTemplate12.footerText};`, null) + " data-v-badbaee6>", "</a>", [_c(item.icon, {
      tag: "div",
      staticClass: "icon"
    })], 1) : _vm._e()]);
  }), 0), _vm._ssrNode(" " + (_vm.dataStore.politicas ? "<button class=\"text-politics\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.footerText} ;`, null) + " data-v-badbaee6><p data-v-badbaee6>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicasyterminos'))) + "</p></button>" : "<!---->") + " "), _vm.showModal && _vm.dataStore.politicas ? _vm._ssrNode("<div class=\"modal\" data-v-badbaee6>", "</div>", [_c('KoTermsConditions', {
    attrs: {
      "dataStore": _vm.dataStore
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"footer_resources w-full text-gray-400 text-center text-sm font-normal\" data-v-badbaee6>", "</div>", [_vm._ssrNode("<hr class=\"border-t border-gray-200 w-full\" data-v-badbaee6> "), _vm._ssrNode("<div class=\"madebyKomercia\" data-v-badbaee6>", "</div>", [_vm._ssrNode("<p class=\"txt-devBy\" data-v-badbaee6>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_desarrollado'))) + "</p> "), _vm._ssrNode("<a href=\"https://komercia.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-badbaee6>", "</a>", [_vm.logo ? _c('img', {
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
  }, [])])], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template12/Ko12-IFooter.vue?vue&type=template&id=badbaee6&scoped=true&

// EXTERNAL MODULE: ./components/template12/mixins/ComponentProps.vue + 2 modules
var ComponentProps = __webpack_require__(92);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/Ko12-IFooter.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko12_IFootervue_type_script_lang_js_ = ({
  name: 'Ko12IFooter',
  components: {
    KoTermsConditions: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 1107))
  },
  mixins: [ComponentProps["default"]],
  data() {
    return {
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
      }],
      logo: true
    };
  },
  computed: {
    showModal() {
      return this.$store.state.modalpolitics05;
    }
  },
  watch: {
    settingByTemplate12() {
      if (this.settingByTemplate12 && this.settingByTemplate12.backgroundFooter) {
        let color = this.settingByTemplate12.backgroundFooter;
        let colorArray = color.split(',');
        let colorInt = parseInt(colorArray[2]);
        if (colorInt > 50) {
          this.logo = true;
        } else {
          this.logo = false;
        }
      }
    },
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook;
      this.links[1].link = this.dataStore.tienda.red_twitter;
      this.links[2].link = this.dataStore.tienda.red_instagram;
      this.links[3].link = this.dataStore.tienda.red_youtube;
      this.links[4].link = this.dataStore.tienda.red_tiktok;
    }
  },
  mounted() {
    if (this.settingByTemplate12 && this.settingByTemplate12.backgroundFooter) {
      this.setLogo();
    }
  },
  methods: {
    OpenModalPolitics() {
      this.$store.state.modalpolitics05 = true;
    },
    setLogo() {
      if (this.settingByTemplate12 && this.settingByTemplate12.backgroundFooter) {
        let color = this.settingByTemplate12.backgroundFooter;
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
// CONCATENATED MODULE: ./components/template12/Ko12-IFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template12_Ko12_IFootervue_type_script_lang_js_ = (Ko12_IFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template12/Ko12-IFooter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(684)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template12_Ko12_IFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "badbaee6",
  "0eaa3f90"
  
)

/* harmony default export */ var Ko12_IFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(685);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("66fd7067", content, true, context)
};

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IFooter_vue_vue_type_style_index_0_id_badbaee6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(391);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IFooter_vue_vue_type_style_index_0_id_badbaee6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IFooter_vue_vue_type_style_index_0_id_badbaee6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IFooter_vue_vue_type_style_index_0_id_badbaee6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko12_IFooter_vue_vue_type_style_index_0_id_badbaee6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_footer[data-v-badbaee6]{align-items:center;display:flex;flex-direction:column;padding:40px 0 10px;position:relative;width:100%}.header-content-logo[data-v-badbaee6]{align-items:center;display:flex;justify-content:center;padding:2px 0}.wrapper-logo[data-v-badbaee6]{width:100%}.header-logo[data-v-badbaee6]{-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left}.text-title[data-v-badbaee6]{max-width:380px;padding:15px 0 20px}.text-politics[data-v-badbaee6],.text-title[data-v-badbaee6]{font-weight:400;text-align:center}.modal[data-v-badbaee6]{background-color:rgba(0,0,0,.4);height:100%;left:0;overflow:auto;padding-top:200px;position:fixed;top:0;width:100%;z-index:10}.content-items-iconos[data-v-badbaee6]{align-items:center;display:flex;flex-direction:row;justify-content:center;padding:15px 0 40px;width:100%}.icon[data-v-badbaee6]{font-size:28px;margin-right:10px}.icon[data-v-badbaee6]:hover{fill:grey;color:grey}.madebyKomercia[data-v-badbaee6]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:10px;margin-top:20px;width:100%}.txt-devBy[data-v-badbaee6]{color:var(--color_text);font-size:14px}.logo2[data-v-badbaee6]{opacity:.5;width:100px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/mixins/ComponentProps.vue?vue&type=script&lang=js&
/* harmony default export */ var ComponentPropsvue_type_script_lang_js_ = ({
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate12: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/template12/mixins/ComponentProps.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_ComponentPropsvue_type_script_lang_js_ = (ComponentPropsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template12/mixins/ComponentProps.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_ComponentPropsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7357669e"
  
)

/* harmony default export */ var ComponentProps = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=template12-ko12-i-footer.js.map