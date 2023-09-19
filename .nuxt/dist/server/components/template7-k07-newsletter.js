exports.ids = [162];
exports.modules = {

/***/ 1212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/K07-Newsletter.vue?vue&type=template&id=28e153df&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper_newsletter",
    style: [_vm.settingKNews, _vm.settingGeneral, {
      '--font-style-2': _vm.settingGeneral && _vm.settingGeneral.fount_2 ? _vm.settingGeneral.fount_2 : 'Great Vibes'
    }, {
      '--font-style-3': _vm.settingGeneral && _vm.settingGeneral.fount_3 ? _vm.settingGeneral.fount_3 : 'Lora'
    }]
  }, [_vm._ssrNode((!_vm.settingKCarousel.visible ? "<div class=\"separador-blog\" data-v-28e153df></div>" : "<!---->") + " <div class=\"wrapper-items-content\"" + _vm._ssrStyle(null, [], null) + " data-v-28e153df><div class=\"wrapper-content-items\" data-v-28e153df><div class=\"wrapper-items-text\" data-v-28e153df><div class=\"tittle\" data-v-28e153df><span class=\"tittle-text\" data-v-28e153df>" + _vm._ssrEscape(_vm._s(_vm.$t('nesletter_tittle'))) + "</span></div> <div class=\"subtittle\" data-v-28e153df><span class=\"subtittle-text\" data-v-28e153df>" + _vm._ssrEscape(_vm._s(_vm.$t('newsletter_subtittle'))) + "</span></div> <div class=\"description\" data-v-28e153df><span class=\"description-text\" data-v-28e153df>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('newsletter_description')) + "\n          ") + "</span></div></div></div></div> "), _vm._ssrNode("<div class=\"wrapper-items\" data-v-28e153df>", "</div>", [_vm._ssrNode("<div class=\"conten-input-check\" data-v-28e153df>", "</div>", [_vm._ssrNode("<div class=\"content-input\" data-v-28e153df>", "</div>", [_c('ValidationProvider', {
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
            "id": "CorreoElectronicoNewslletter",
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
        }, [_vm._v(_vm._s(_vm.errorsCheckbox || _vm.register))])];
      }
    }])
  })], 1), _vm._ssrNode(" <div class=\"content-checkbox\" data-v-28e153df><input id=\"checkbox\" type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : _vm.checked) + " style=\"margin-top: 4px\" data-v-28e153df> <p class=\"text-checkbox\" data-v-28e153df>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('newsletter_msg')) + "\n        ") + "</p></div> " + (_vm.stateChehed ? "<p class=\"text-error\" data-v-28e153df>\n        Marcar checkbox para poder suscribirse al boletín informativo\n      </p>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"content-button\" data-v-28e153df><button class=\"content-bttns-shop\" data-v-28e153df><span class=\"content-textbutton-shop\" data-v-28e153df>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('newsletter_btn')) + "\n        ") + "</span></button></div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/K07-Newsletter.vue?vue&type=template&id=28e153df&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/K07-Newsletter.vue?vue&type=script&lang=js&


/* harmony default export */ var K07_Newslettervue_type_script_lang_js_ = ({
  name: 'K07Newsletter',
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },
  props: {
    dataStore: Object,
    settingGeneral: Object,
    settingKNews: Object,
    settingKCarousel: Object
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
// CONCATENATED MODULE: ./components/template7/K07-Newsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template7_K07_Newslettervue_type_script_lang_js_ = (K07_Newslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/K07-Newsletter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(830)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template7_K07_Newslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "28e153df",
  "7024e770"
  
)

/* harmony default export */ var K07_Newsletter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(831);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2d25ebd2", content, true, context)
};

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K07_Newsletter_vue_vue_type_style_index_0_id_28e153df_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K07_Newsletter_vue_vue_type_style_index_0_id_28e153df_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K07_Newsletter_vue_vue_type_style_index_0_id_28e153df_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K07_Newsletter_vue_vue_type_style_index_0_id_28e153df_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K07_Newsletter_vue_vue_type_style_index_0_id_28e153df_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_newsletter[data-v-28e153df]{align-items:center;background:var(--background_color_1);display:flex;flex-direction:column;justify-content:center;padding-bottom:30px;padding-top:30px;width:100%}.separador-blog[data-v-28e153df]{padding-top:100px}.wrapper-content-items[data-v-28e153df],.wrapper-items-content[data-v-28e153df]{align-items:center;display:flex;flex-direction:column;justify-content:center}.wrapper-content-items[data-v-28e153df]{margin-bottom:32px;text-align:center;width:100%}.wrapper-items-text[data-v-28e153df]{width:100%}.description[data-v-28e153df],.subtittle[data-v-28e153df],.tittle[data-v-28e153df]{align-items:center;display:flex;flex-direction:column;justify-content:center}.tittle-text[data-v-28e153df]{color:var(--color_pre_title);font-family:var(--font-style-2)!important}.subtittle-text[data-v-28e153df]{color:var(--color_title)}.description-text[data-v-28e153df],.subtittle-text[data-v-28e153df]{font-family:var(--font-style-3)!important}.description-text[data-v-28e153df]{color:var(--color_description)}.content-bttns-shop[data-v-28e153df]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);align-items:center;background:var(--color_background_btn);border-radius:var(--radius_btn);box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);display:flex;font-weight:600;justify-content:center;letter-spacing:.05em;margin-left:20px;margin-right:8px;padding:12px 20px;text-transform:uppercase}.content-bttns-shop[data-v-28e153df]:hover{background:var(--hover_card);transition:all .2s ease-out}.content-textbutton-shop[data-v-28e153df]{color:var(--color_text_btn);font-family:var(--font-style-3)!important;font-size:13px;line-height:18px}.wrapper-items[data-v-28e153df]{display:flex;justify-content:center;width:auto}.conten-input-check[data-v-28e153df]{align-items:flex-start;justify-content:center}.conten-input-check[data-v-28e153df],.content-input[data-v-28e153df]{display:flex;flex-direction:column;width:100%}.content-input[data-v-28e153df]{align-items:center;justify-content:flex-start}.input-text[data-v-28e153df]{align-items:center;border-radius:30px;border-width:1px;border:2px solid hsla(0,0%,51%,.2);display:flex;font-family:var(--font-style-3)!important;font-size:14px;height:42px;justify-content:flex-start;max-width:100%;padding:0 15px;transition:border-color .5s ease;width:100%}.input-text[data-v-28e153df]::-moz-placeholder{color:var(--color_subtext);opacity:.7}.input-text[data-v-28e153df]::placeholder{color:var(--color_subtext);opacity:.7}.text-error[data-v-28e153df]{color:#ed2353;font-family:var(--font-style-3)!important;font-size:12px;width:auto}.content-button[data-v-28e153df]{align-items:flex-start;display:flex;width:auto}.content-input-error[data-v-28e153df]{align-items:center;flex-direction:column}.content-checkbox[data-v-28e153df],.content-input-error[data-v-28e153df]{display:flex;justify-content:flex-start;width:100%}.content-checkbox[data-v-28e153df]{align-items:flex-start;margin-left:32px;margin-top:8px}.text-checkbox[data-v-28e153df]{color:var(--color_subtext);font-size:12px;margin-left:5px}@media (min-width:300px){.wrapper-items-content[data-v-28e153df]{width:95%}.tittle[data-v-28e153df]{font-size:24px;line-height:34px}.subtittle[data-v-28e153df]{font-size:32px;line-height:42px}.description[data-v-28e153df]{font-size:14px;line-height:24px}.wrapper-items[data-v-28e153df]{align-items:center;flex-direction:column;margin-bottom:48px;width:90%}.content-checkbox[data-v-28e153df]{margin-left:0}.conten-input-check[data-v-28e153df]{margin-bottom:16px}.content-button[data-v-28e153df]{justify-content:center}}@media (min-width:768px){.subtittle[data-v-28e153df]{font-size:36px;line-height:46px}.wrapper-items[data-v-28e153df]{flex-direction:row}.content-button[data-v-28e153df]{justify-content:flex-start}.wrapper-items[data-v-28e153df]{align-items:flex-start;width:60%}}@media (min-width:1280px){.gify-text-content[data-v-28e153df],.wrapper-items-content[data-v-28e153df]{width:93%}.gify-slider-content[data-v-28e153df]{width:63%}.tittle[data-v-28e153df]{font-size:24px;line-height:34px}.subtittle[data-v-28e153df]{font-size:35px;line-height:48px}.description[data-v-28e153df]{font-size:14px;line-height:24px}.wrapper-items[data-v-28e153df]{width:40%}}@media (min-width:1192px){.wrapper-items-content[data-v-28e153df]{width:1192px}.wrapper-items[data-v-28e153df]{width:600px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template7-k07-newsletter.js.map