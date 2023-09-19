exports.ids = [246];
exports.modules = {

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(264);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0154d15f", content, true, context)
};

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newsletter_vue_vue_type_style_index_0_id_6f3bdb4d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newsletter_vue_vue_type_style_index_0_id_6f3bdb4d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newsletter_vue_vue_type_style_index_0_id_6f3bdb4d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newsletter_vue_vue_type_style_index_0_id_6f3bdb4d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newsletter_vue_vue_type_style_index_0_id_6f3bdb4d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-newsletter[data-v-6f3bdb4d]{flex-direction:column;max-width:660px;width:100%}.content-button[data-v-6f3bdb4d],.wrapper-newsletter[data-v-6f3bdb4d]{align-items:center;display:flex;justify-content:center}.content-button[data-v-6f3bdb4d]{width:auto}.btn[data-v-6f3bdb4d]{background:#fff;color:#222;font-family:var(--font-style-1);font-size:14px;justify-content:center;letter-spacing:1px;padding:12px 22px;text-transform:uppercase;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);white-space:nowrap}.btn[data-v-6f3bdb4d],.content-checkbox[data-v-6f3bdb4d]{align-items:center;display:flex;width:100%}.content-checkbox[data-v-6f3bdb4d]{background-color:transparent;justify-content:flex-start;margin-left:8px}.text-checkbox[data-v-6f3bdb4d]{background-color:transparent;color:var(--color_terms);font-family:var(--font-style-1);margin-left:8px}#checkbox[data-v-6f3bdb4d]:focus{background-color:#2c2930}.content-input-submit[data-v-6f3bdb4d]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-input[data-v-6f3bdb4d]{flex-direction:row}.content-input[data-v-6f3bdb4d],.content-input-error[data-v-6f3bdb4d]{align-items:center;display:flex;justify-content:flex-start;width:100%}.content-subError[data-v-6f3bdb4d],.input-text[data-v-6f3bdb4d]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.input-text[data-v-6f3bdb4d]{background-color:#fff;font-family:var(--font-style-1);font-size:14px;height:45px;padding:12px 10px}.input-text[data-v-6f3bdb4d]::-moz-placeholder{color:#777}.input-text[data-v-6f3bdb4d]::placeholder{color:#777}.text-error[data-v-6f3bdb4d]{color:#ed2353;font-family:var(--font-style-1);font-size:12px;margin-top:10px;width:100%}@media (min-width:300px){.wrapper-items[data-v-6f3bdb4d]{align-items:flex-start;display:flex;flex-direction:row;justify-content:center;width:100%}.content-checkbox[data-v-6f3bdb4d]{margin-left:0;margin-top:10px}.content-input-submit[data-v-6f3bdb4d]{margin-bottom:4px}.content-button[data-v-6f3bdb4d]{justify-content:center}.btn-md[data-v-6f3bdb4d]{display:none}.text-checkbox[data-v-6f3bdb4d]{font-size:12px}}@media (min-width:768px){.btn-sm[data-v-6f3bdb4d]{display:none}.btn-md[data-v-6f3bdb4d]{display:flex;width:100%}.text-checkbox[data-v-6f3bdb4d]{font-size:14px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_newsletter/newsletter.vue?vue&type=template&id=6f3bdb4d&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-newsletter"
  }, [_vm._ssrNode("<div class=\"wrapper-items\" data-v-6f3bdb4d>", "</div>", [_vm._ssrNode("<div class=\"content-input-submit\" data-v-6f3bdb4d>", "</div>", [_vm._ssrNode("<div class=\"content-input\" data-v-6f3bdb4d>", "</div>", [_c('ValidationProvider', {
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
          staticClass: "content-subError"
        }, [_c('input', {
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
        }), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: errors[0] || _vm.register,
            expression: "errors[0] || register"
          }],
          staticClass: "text-error",
          style: _vm.register ? 'color:green' : ''
        }, [_vm._v(_vm._s(_vm.errorsCheckbox || _vm.register) + "\n              ")])])];
      }
    }])
  })], 1)]), _vm._ssrNode(" <div class=\"content-button\" data-v-6f3bdb4d><button class=\"btn btn-sm\" data-v-6f3bdb4d>\n        OK\n      </button> <button class=\"btn btn-md\" data-v-6f3bdb4d>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('newsletter_btn')) + "\n      ") + "</button></div>")], 2), _vm._ssrNode(" <div class=\"content-checkbox\" data-v-6f3bdb4d><input type=\"checkbox\" id=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : _vm.checked) + " data-v-6f3bdb4d> <p class=\"text-checkbox\" data-v-6f3bdb4d>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('newsletter_msg')) + "\n    ") + "</p></div> " + (_vm.stateChehed ? "<p class=\"text-error\" data-v-6f3bdb4d>\n    Marcar checkbox para poder suscribirse al boletín informativo\n  </p>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/_newsletter/newsletter.vue?vue&type=template&id=6f3bdb4d&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_newsletter/newsletter.vue?vue&type=script&lang=js&


/* harmony default export */ var newslettervue_type_script_lang_js_ = ({
  name: 'Ko-Newsletter-1',
  props: {
    dataStore: Object
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
      if (this.checked == true) {
        this.stateChehed = false;
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
  }
});
// CONCATENATED MODULE: ./components/template11/_newsletter/newsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var _newsletter_newslettervue_type_script_lang_js_ = (newslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/_newsletter/newsletter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(263)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _newsletter_newslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f3bdb4d",
  "7664500c"
  
)

/* harmony default export */ var newsletter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=template11-newsletter.js.map