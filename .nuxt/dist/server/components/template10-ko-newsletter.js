exports.ids = [41];
exports.modules = {

/***/ 1119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko-Newsletter.vue?vue&type=template&id=9e8d3ca6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper_newsletter",
    style: [_vm.settingByTemplate10[0].setting10Footer, _vm.settingByTemplate10[0].setting10General, {
      '--font-style-1': this.settingByTemplate10 && this.settingByTemplate10[0].setting10General && this.settingByTemplate10[0].setting10General.fount_1 ? this.settingByTemplate10[0].setting10General.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"wrapper-items-content\" data-v-9e8d3ca6><div class=\"product-tittle\" data-v-9e8d3ca6><span class=\"tittle txt-1\" data-v-9e8d3ca6>Inscríbase al boletín</span> <span class=\"tittle txt-2\" data-v-9e8d3ca6>Manténgase actualizado sobre todo lo que es nuevo agregar digno de\n        mención</span></div></div> "), _vm._ssrNode("<div class=\"wrapper-items\" data-v-9e8d3ca6>", "</div>", [_vm._ssrNode("<div class=\"conten-input-check\" data-v-9e8d3ca6>", "</div>", [_vm._ssrNode("<div class=\"content-input\" data-v-9e8d3ca6>", "</div>", [_c('ValidationProvider', {
    ref: "validate",
    staticClass: "content-input-error",
    attrs: {
      "name": "email",
      "rules": "required|email"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('div', {
          staticClass: "input-icon"
        }, [_c('div', [_c('svg', {
          staticClass: "icon-msg",
          attrs: {
            "xmlns": "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "version": "1.1",
            "width": "100%",
            "height": "100%",
            "viewBox": "0 0 24 24"
          }
        }, [_c('path', {
          attrs: {
            "d": "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
          }
        })])]), _vm._v(" "), _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.email,
            expression: "email"
          }],
          staticClass: "input-text",
          attrs: {
            "name": "email",
            "type": "email",
            "placeholder": _vm.$t('newsletter_email')
          },
          domProps: {
            "value": _vm.email
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.email = $event.target.value;
            }
          }
        })]), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: errors[0] || _vm.register,
            expression: "errors[0] || register"
          }],
          staticClass: "text-error",
          style: _vm.register ? 'color:green' : ''
        }, [_vm._v(_vm._s(_vm.errorsCheckbox || _vm.register))])];
      }
    }])
  })], 1), _vm._ssrNode(" <div class=\"content-checkbox\" data-v-9e8d3ca6><input type=\"checkbox\" id=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : _vm.checked) + " data-v-9e8d3ca6> <p class=\"text-checkbox\" data-v-9e8d3ca6>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('newsletter_msg')) + "\n        ") + "</p></div> " + (_vm.stateChehed ? "<p class=\"text-error mt-2\" data-v-9e8d3ca6>\n        Marcar checkbox para poder suscribirse al boletín informativo\n      </p>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"content-button\" data-v-9e8d3ca6><button class=\"content-bttns-shop\" data-v-9e8d3ca6><span class=\"content-textbutton-shop\" data-v-9e8d3ca6>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('newsletter_btn')) + "\n        ") + "</span></button></div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/Ko-Newsletter.vue?vue&type=template&id=9e8d3ca6&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/Ko-Newsletter.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko_Newslettervue_type_script_lang_js_ = ({
  name: 'Ko-Newsletter-1',
  props: {
    dataStore: Object,
    settingByTemplate10: Array
  },
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },
  mounted() {},
  data() {
    return {
      errorsCheckbox: 'El campo checkbox y email son obligatorios',
      email: null,
      register: '',
      checked: false,
      stateChehed: false
    };
  },
  destroyed() {
    this.email = '';
  },
  computed: {
    facebookPixel() {
      return this.$store.state.analytics_tagmanager;
    }
  },
  methods: {
    submitNewsletter() {
      if (this.checked) {
        this.$refs.validate.validate().then(response => {
          if (response.valid) {
            const json = {
              email: this.email,
              tienda: this.dataStore.tienda.id_tienda
            };
            external_axios_default.a.post(`${this.$store.state.urlKomercia}/api/tienda/suscriptor`, json).then(res => {
              if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
                window.fbq('track', 'Lead', {
                  value: this.email
                });
              }
              this.register = 'Tu correo ha sido registrado';
              this.$message.success('Comentario enviado!');
              this.email = '';
            }).catch(res => (this.register = 'Tu correo ya esta registrado', this.$message.error('Tu correo ya esta registrado')));
          }
        }).catch(e => {
          console.log(e);
        });
      } else {
        this.stateChehed = true;
      }
    }
  },
  watch: {}
});
// CONCATENATED MODULE: ./components/template10/Ko-Newsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template10_Ko_Newslettervue_type_script_lang_js_ = (Ko_Newslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/Ko-Newsletter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(655)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template10_Ko_Newslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9e8d3ca6",
  "2f46a058"
  
)

/* harmony default export */ var Ko_Newsletter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(656);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("226b277c", content, true, context)
};

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Newsletter_vue_vue_type_style_index_0_id_9e8d3ca6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(400);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Newsletter_vue_vue_type_style_index_0_id_9e8d3ca6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Newsletter_vue_vue_type_style_index_0_id_9e8d3ca6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Newsletter_vue_vue_type_style_index_0_id_9e8d3ca6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Newsletter_vue_vue_type_style_index_0_id_9e8d3ca6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_newsletter[data-v-9e8d3ca6]{align-items:flex-start;background-color:var(--background_color_1);width:100%}.wrapper-items-content[data-v-9e8d3ca6],.wrapper_newsletter[data-v-9e8d3ca6]{display:flex;flex-direction:column;justify-content:center}.wrapper-items-content[data-v-9e8d3ca6]{align-items:center}.content-bttns-shop[data-v-9e8d3ca6]{align-items:center;background-color:transparent;border-bottom:2px solid var(--color_border);display:flex;justify-content:center;padding:12px 20px;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.content-bttns-shop[data-v-9e8d3ca6]:hover{border-bottom:2px solid #eb7025;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-textbutton-shop[data-v-9e8d3ca6]{color:var(--colorTextBTn);font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;letter-spacing:1px;line-height:16px;white-space:nowrap}.content-bttns-shop:hover .content-textbutton-shop[data-v-9e8d3ca6]{color:var(--hover_text);transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.conten-input-check[data-v-9e8d3ca6]{flex-direction:column;justify-content:center}.conten-input-check[data-v-9e8d3ca6],.content-input[data-v-9e8d3ca6]{align-items:center;display:flex;width:100%}.content-input[data-v-9e8d3ca6]{flex-direction:row;justify-content:flex-start}.input-text[data-v-9e8d3ca6]{align-items:center;background-color:transparent;border-bottom:2px solid var(--color_border);color:var(--color_text);display:flex;font-family:var(--font-style-1)!important;font-size:14px;height:42px;justify-content:flex-start;padding:0 25px;width:95%}.input-text[data-v-9e8d3ca6],.input-text[data-v-9e8d3ca6]:hover{transition:border-color .2s ease}.input-text[data-v-9e8d3ca6]:focus,.input-text[data-v-9e8d3ca6]:hover{border-bottom:2px solid var(--hover_text)}.input-text[data-v-9e8d3ca6]:focus{transition:border-color .6s ease}.input-text[data-v-9e8d3ca6]::-moz-placeholder{color:var(--color_subtext);opacity:.7}.input-text[data-v-9e8d3ca6]::placeholder{color:var(--color_subtext);opacity:.7}.text-error[data-v-9e8d3ca6]{color:#ed2353;font-family:var(--font-style-1)!important;font-size:12px;width:auto}.content-button[data-v-9e8d3ca6]{align-items:flex-start;display:flex;width:auto}.content-input-error[data-v-9e8d3ca6]{flex-direction:column}.content-checkbox[data-v-9e8d3ca6],.content-input-error[data-v-9e8d3ca6]{align-items:center;display:flex;justify-content:flex-start;width:100%}.content-checkbox[data-v-9e8d3ca6]{margin-left:8px;margin-top:2px}.text-checkbox[data-v-9e8d3ca6]{color:var(--color_text);font-family:var(--font-style-1)!important;font-size:13px;margin-left:5px}#checkbox[data-v-9e8d3ca6]:focus{background-color:#2c2930}.product-tittle[data-v-9e8d3ca6]{align-items:flex-start}.product-tittle[data-v-9e8d3ca6],.tittle[data-v-9e8d3ca6]{display:flex;flex-direction:column;justify-content:center}.tittle[data-v-9e8d3ca6]{align-items:center}.txt-1[data-v-9e8d3ca6]{color:var(--color_title);font-size:16px;font-weight:600;margin-bottom:50px}.txt-2[data-v-9e8d3ca6]{color:var(--color_text);font-size:15px}.icon-msg[data-v-9e8d3ca6]{fill:var(--color_icon);margin-right:-20px;margin-top:-2px;position:relative;width:20px}.input-icon[data-v-9e8d3ca6]{display:flex;flex-direction:row;width:100%}@media (min-width:300px){.wrapper-items-content[data-v-9e8d3ca6]{margin-bottom:20px;width:95%}.wrapper-items[data-v-9e8d3ca6]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;margin-bottom:12px;width:95%}.content-checkbox[data-v-9e8d3ca6]{margin-left:0}.conten-input-check[data-v-9e8d3ca6]{margin-bottom:4px}.content-bttns-shop[data-v-9e8d3ca6]{width:100%}.content-button[data-v-9e8d3ca6]{justify-content:center}.product-tittle[data-v-9e8d3ca6]{width:100%}.tittle[data-v-9e8d3ca6]{letter-spacing:0;line-height:1.1}.txt-1[data-v-9e8d3ca6]{font-size:16px;margin-bottom:30px}.txt-1[data-v-9e8d3ca6],.txt-2[data-v-9e8d3ca6]{font-family:var(--font-style-1)!important}.txt-2[data-v-9e8d3ca6]{font-size:15px;font-weight:300;line-height:1.55;margin-bottom:10px}.wrapper_newsletter[data-v-9e8d3ca6]{margin-bottom:40px}}@media (min-width:425px){.wrapper-items[data-v-9e8d3ca6]{display:flex;flex-direction:row}}@media (min-width:1280px){.wrapper-items-content[data-v-9e8d3ca6]{width:95%}.wrapper-items[data-v-9e8d3ca6]{width:auto}.wrapper_newsletter[data-v-9e8d3ca6]{margin-bottom:0}.txt-1[data-v-9e8d3ca6]{font-size:16px;margin-bottom:20px}.txt-2[data-v-9e8d3ca6]{font-size:15px;margin-bottom:10px}}@media (min-width:1400px){.txt-1[data-v-9e8d3ca6]{margin-bottom:30px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template10-ko-newsletter.js.map