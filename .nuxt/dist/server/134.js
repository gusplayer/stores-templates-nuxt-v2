exports.ids = [134];
exports.modules = {

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-Newsletter.vue?vue&type=template&id=3a54f836&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex justify-center items-center py-15 lg:py-20 px-10 md:px-0",
    style: `background-color: ${_vm.newsletter['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full max-w-7xl flex items-center justify-center border\"" + _vm._ssrStyle(null, `border-color: ${_vm.newsletter.color_border_component};`, null) + ">", "</div>", [_vm._ssrNode("<div class=\"w-full grid grid-cols-2 gap-5 justify-between items-center\">", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-col justify-center items-start py-40 pl-80\">", "</div>", [_vm._ssrNode("<p class=\"font-bold text-30 mb-10\"" + _vm._ssrStyle(null, `color: ${_vm.newsletter.color_title};`, null) + ">" + _vm._ssrEscape("\n          " + _vm._s(_vm.newsletter.title) + "\n        ") + "</p> <p class=\"text-15\"" + _vm._ssrStyle(null, `color: ${_vm.newsletter.color_text};`, null) + ">" + _vm._ssrEscape("\n          " + _vm._s(_vm.newsletter.subTitle) + "\n        ") + "</p> <div class=\"border h-2 my-8 md:my-10 w-50\"" + _vm._ssrStyle(null, `border-color: ${_vm.newsletter.color_border};`, null) + "></div> "), _vm._ssrNode("<div class=\"w-full flex flex-col justify-center\">", "</div>", [_vm._ssrNode("<div class=\"conten-input-check\">", "</div>", [_vm._ssrNode("<div class=\"content-input\"" + _vm._ssrStyle(null, `background-color: ${_vm.newsletter.color_input};`, null) + ">", "</div>", [_c('ValidationProvider', {
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
            "viewBox": "0 0 24 24",
            "color": _vm.newsletter.color_icon
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
        })]), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: errors[0] || _vm.register,
            expression: "errors[0] || register"
          }],
          staticClass: "text-error",
          style: _vm.register ? 'color:green' : ''
        }, [_vm._v("\n                    " + _vm._s(_vm.errorsCheckbox || _vm.register) + "\n                  ")])];
      }
    }])
  })], 1), _vm._ssrNode(" <div class=\"content-checkbox\"><input type=\"checkbox\" id=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : _vm.checked) + "> <p class=\"text-checkbox\">" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('newsletter_msg')) + "\n              ") + "</p></div> " + (_vm.stateChehed ? "<p class=\"text-error\">\n              Marcar checkbox para poder suscribirse al boletín informativo\n            </p>" : "<!---->"))], 2), _vm._ssrNode(" <button" + _vm._ssrStyle(null, `color: ${_vm.newsletter.color_text_input}; background-color: ${_vm.newsletter.color_input};`, null) + ">" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('newsletter_btn')) + "\n          ") + "</button>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<picture>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.newsletter.img_res, 'bannerRes', 800)) + "> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.newsletter.img, 'banner')) + "> "), _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.newsletter.img,
      expression: "newsletter.img"
    }],
    staticClass: "w-full",
    attrs: {
      "alt": "newsletter template14"
    }
  }, [])], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/ko14-Newsletter.vue?vue&type=template&id=3a54f836&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(9);

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-Newsletter.vue?vue&type=script&lang=js&



/* harmony default export */ var ko14_Newslettervue_type_script_lang_js_ = ({
  name: 'Ko14-Newsletter',
  props: {
    newsletter: Object,
    settingGeneral: Object,
    dataStore: Object
  },
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },
  mixins: [idCloudinary["a" /* default */]],
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
// CONCATENATED MODULE: ./components/template14/ko14-Newsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template14_ko14_Newslettervue_type_script_lang_js_ = (ko14_Newslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/ko14-Newsletter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template14_ko14_Newslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e33f72f0"
  
)

/* harmony default export */ var ko14_Newsletter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=134.js.map