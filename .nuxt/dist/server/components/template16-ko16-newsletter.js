exports.ids = [273];
exports.modules = {

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(313);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("8cfe9908", content, true, context)
};

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_Newsletter_vue_vue_type_style_index_0_id_33718568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_Newsletter_vue_vue_type_style_index_0_id_33718568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_Newsletter_vue_vue_type_style_index_0_id_33718568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_Newsletter_vue_vue_type_style_index_0_id_33718568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_Newsletter_vue_vue_type_style_index_0_id_33718568_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".txt[data-v-33718568]{color:var(--color_text);font-size:14px}.btn[data-v-33718568]{color:var(--color_title);font-size:18px;padding-bottom:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/Ko16-Newsletter.vue?vue&type=template&id=33718568&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex justify-start items-center"
  }, [_vm._ssrNode("<div class=\"w-full flex flex-col justify-center items-start\" data-v-33718568>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-row justify-start items-center\" data-v-33718568>", "</div>", [_c('ValidationProvider', {
    ref: "validate",
    staticClass: "w-full",
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
          staticClass: "px-20 py-8 w-full bg-transparent",
          style: `background-color: ${_vm.settingByTemplate16[0].newsletter.color_input}; color: ${_vm.settingByTemplate16[0].newsletter.color_text_input};border-radius: ${_vm.settingByTemplate16[0].settingGeneral.radius};`,
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
          style: _vm.register ? 'color:green' : ''
        }, [_vm._v("\n            " + _vm._s(_vm.errorsCheckbox || _vm.register) + "\n          ")])];
      }
    }])
  }), _vm._ssrNode(" <button class=\"px-20 py-8 ml-10 border\"" + _vm._ssrStyle(null, `background-color: ${_vm.settingByTemplate16[0].newsletter.color_bg_btn}; border-color: ${_vm.settingByTemplate16[0].newsletter.color_border_Btn};  border-radius: ${_vm.settingByTemplate16[0].settingGeneral.radius}`, null) + " data-v-33718568><div data-v-33718568><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"" + _vm._ssrAttr("fill", _vm.settingByTemplate16[0].newsletter.color_icon) + " width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" data-v-33718568><path d=\"M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z\" data-v-33718568></path></svg></div></button>")], 2), _vm._ssrNode(" <div class=\"flex justify-center mt-6\" data-v-33718568><input id=\"checkbox\" type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : _vm.checked) + " data-v-33718568> <p class=\"ml-6 text-12\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].newsletter.color_text};`, null) + " data-v-33718568>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('newsletter_msg')) + "\n      ") + "</p></div> " + (_vm.stateChehed ? "<p data-v-33718568>\n      Marcar checkbox para poder suscribirse al boletín informativo\n    </p>" : "<!---->"))], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template16/Ko16-Newsletter.vue?vue&type=template&id=33718568&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/Ko16-Newsletter.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko16_Newslettervue_type_script_lang_js_ = ({
  name: 'Ko16Newsletter',
  components: {
    ValidationProvider: external_vee_validate_["ValidationProvider"],
    // eslint-disable-next-line vue/no-unused-components
    ValidationObserver: external_vee_validate_["ValidationObserver"]
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate16: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      errorsCheckbox: 'El campo checkbox y email son obligatorios',
      email: null,
      register: '',
      checked: false,
      stateChehed: false
    };
  },
  computed: {
    facebookPixel() {
      return this.$store.state.analytics_tagmanager;
    }
  },
  destroyed() {
    this.email = '';
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
        this.stateChehed = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template16/Ko16-Newsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template16_Ko16_Newslettervue_type_script_lang_js_ = (Ko16_Newslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template16/Ko16-Newsletter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(312)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template16_Ko16_Newslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "33718568",
  "5db092d6"
  
)

/* harmony default export */ var Ko16_Newsletter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=template16-ko16-newsletter.js.map