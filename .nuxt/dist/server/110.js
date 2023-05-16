exports.ids = [110];
exports.modules = {

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(711);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0cd8a2f6", content, true, context)
};

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Newsletter_1_vue_vue_type_style_index_0_id_273b42dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Newsletter_1_vue_vue_type_style_index_0_id_273b42dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Newsletter_1_vue_vue_type_style_index_0_id_273b42dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Newsletter_1_vue_vue_type_style_index_0_id_273b42dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Newsletter_1_vue_vue_type_style_index_0_id_273b42dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_newsletter[data-v-273b42dc]{background-color:var(--background_color_1);box-sizing:border-box}.contenedor[data-v-273b42dc],.wrapper_newsletter[data-v-273b42dc]{align-items:center;display:flex;justify-content:center;width:100%}.contenedor[data-v-273b42dc]{flex-direction:column;max-width:1300px;padding-bottom:var(--padding);padding-top:var(--padding)}.subtext[data-v-273b42dc]{color:var(--color_pretitle);font-size:var(--fontSizepreTitle);font-weight:var(--fontWeighpreTitle)}.subtext[data-v-273b42dc],.title[data-v-273b42dc]{text-align:center}.title[data-v-273b42dc]{color:var(--color_title);font-size:var(--fontSizeTitle);font-stretch:normal;font-style:normal;font-weight:var(--fontWeighTitle);letter-spacing:-.4px;line-height:1.24;padding-bottom:50px;width:600px}.content-button[data-v-273b42dc]{display:flex;flex-direction:row;justify-content:center;padding-bottom:10px;width:100%}.input-text[data-v-273b42dc]{background-color:transparent;border:2px solid var(--color_border);border-radius:var(--radius_btn);color:var(--color_pretitle);font-size:14px;height:100%;padding:12px 14px;width:360px}.input-text[data-v-273b42dc]::-moz-placeholder{color:var(--color_pretitle);opacity:.7}.input-text[data-v-273b42dc]::placeholder{color:var(--color_pretitle);opacity:.7}.input-text[data-v-273b42dc]:active,.input-text[data-v-273b42dc]:focus{border:2px solid var(--color_border);outline:0}.content-input-error[data-v-273b42dc]{display:flex;flex-direction:column}.text-error[data-v-273b42dc]{color:#cb2027;font-size:12px;margin-left:10px;width:100%}.btn[data-v-273b42dc]{background-color:var(--color_background_btn);border:1px solid var(--color_border_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);cursor:pointer;font-size:14px;font-weight:700;margin-left:20px;max-height:50px;padding:8px 14px;transition:all .2s ease-in;width:220px}.btn[data-v-273b42dc]:hover{background-color:var(--hover_text_btn);border:1px solid var(--hover_Border_btn);color:var(--hover_text_btn)}.content-checkbox[data-v-273b42dc]{display:flex;flex-direction:row;justify-content:center;width:100%}.text-checkbox[data-v-273b42dc]{color:var(--color_pretitle);font-size:13px;margin-left:5px}@media (max-width:600px){.title[data-v-273b42dc]{max-width:550px;width:100%}}@media (max-width:500px){.contenedor[data-v-273b42dc]{padding:40px 10px 30px}.title[data-v-273b42dc]{font-size:30px}.subtext[data-v-273b42dc]{font-size:12px}.input-text[data-v-273b42dc]{width:230px}.btn[data-v-273b42dc]{margin-left:10px;width:100px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko-Newsletter-1.vue?vue&type=template&id=273b42dc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.newsletter ? _c('div', {
    staticClass: "wrapper_newsletter",
    style: [_vm.newsletter, _vm.settingGeneral]
  }, [_vm._ssrNode("<div class=\"contenedor px-20\" data-v-273b42dc>", "</div>", [_vm._ssrNode("<p class=\"subtext\" data-v-273b42dc>" + _vm._ssrEscape(_vm._s(_vm.$t('newsletter_subtitle'))) + "</p> <p class=\"title\" data-v-273b42dc>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('newsletter_title')) + "\n    ") + "</p> "), _vm._ssrNode("<div class=\"content-button\" data-v-273b42dc>", "</div>", [_c('ValidationProvider', {
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
        return [_c('input', {
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
            "placeholder": _vm.$t('newsletter_email'),
            "id": "CorreoElectronicoNewslletter"
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
        }, [_vm._v(_vm._s(_vm.errorsCheckbox || _vm.register))])];
      }
    }], null, false, 3350521305)
  }), _vm._ssrNode(" <button class=\"btn\" data-v-273b42dc>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('newsletter_btn')) + "\n      ") + "</button>")], 2), _vm._ssrNode(" <div class=\"content-checkbox\" data-v-273b42dc><input id=\"checkboxNewsletter\" type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : _vm.checked) + " data-v-273b42dc> <label for=\"checkboxNewsletter\" class=\"text-checkbox\" data-v-273b42dc>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('newsletter_msg')) + "\n      ") + "</label></div> <div class=\"content-checkbox\" data-v-273b42dc>" + (_vm.stateChecked ? "<p class=\"text-error\" style=\"max-width: 340px\" data-v-273b42dc>\n        Marcar checkbox para poder suscribirse al boletín informativo\n      </p>" : "<!---->") + "</div>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/Ko-Newsletter-1.vue?vue&type=template&id=273b42dc&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/Ko-Newsletter-1.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko_Newsletter_1vue_type_script_lang_js_ = ({
  name: 'Ko13-Newsletter-1',
  props: {
    dataStore: Object,
    newsletter: Object,
    settingGeneral: Object
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
      stateChecked: false
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
        this.stateChecked = true;
      }
    }
  },
  watch: {}
});
// CONCATENATED MODULE: ./components/template13/Ko-Newsletter-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var template13_Ko_Newsletter_1vue_type_script_lang_js_ = (Ko_Newsletter_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template13/Ko-Newsletter-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(710)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template13_Ko_Newsletter_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "273b42dc",
  "485bc38e"
  
)

/* harmony default export */ var Ko_Newsletter_1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=110.js.map