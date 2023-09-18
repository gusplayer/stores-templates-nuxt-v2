exports.ids = [42];
exports.modules = {

/***/ 1134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/ko-Contact.vue?vue&type=template&id=c4ee3b76&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    style: [_vm.settingByTemplate10[0].contact, _vm.settingByTemplate10[0].setting10General, {
      '--font-style-1': _vm.settingByTemplate10[0].setting10General && _vm.settingByTemplate10[0].setting10General.fount_1 ? _vm.settingByTemplate10[0].setting10General.fount_1 : 'Roboto'
    }],
    attrs: {
      "calss": "content-contact"
    }
  }, [_vm._ssrNode("<div class=\"content-form-contact\" data-v-c4ee3b76>", "</div>", [_vm._ssrNode("<div class=\"banner-mapa\" data-v-c4ee3b76>", "</div>", [_vm.dataStore && _vm.dataStore.geolocalizacion && _vm.dataStore.geolocalizacion.length ? _c('el-carousel', {
    staticClass: "wrapperCarousel",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "interval": 5000,
      "arrow": "always",
      "height": "250px",
      "setActiveItem": _vm.positionLocation
    },
    on: {
      "change": _vm.changeLocation
    }
  }, _vm._l(_vm.dataStore.geolocalizacion, function (item, inggeo) {
    return _c('el-carousel-item', {
      key: inggeo
    }, [_c('iframe', {
      staticStyle: {
        "border": "0"
      },
      attrs: {
        "src": `https://maps.google.com/maps?q=${item.latitud},${item.longitud}&hl=es;z=14&output=embed`,
        "width": "100%",
        "height": "250",
        "frameborder": "0",
        "allowfullscreen": ""
      }
    })]);
  }), 1) : _vm._e()], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container-contact\" data-v-c4ee3b76>", "</div>", [_vm._ssrNode("<div class=\"content-grid\" data-v-c4ee3b76>", "</div>", [_vm._ssrNode("<div class=\"left\" data-v-c4ee3b76><div class=\"content-info\" data-v-c4ee3b76><p class=\"txt-info\" data-v-c4ee3b76>Información</p></div> " + (_vm.dataStore.geolocalizacion.length ? "<div class=\"content-locatioin\" data-v-c4ee3b76><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40px\" height=\"40px\" viewBox=\"0 0 24 24\" class=\"icon-left\" data-v-c4ee3b76><path d=\"M0 0h24v24H0z\" fill=\"none\" data-v-c4ee3b76></path> <path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\" data-v-c4ee3b76></path></svg> <p class=\"txt-left\" data-v-c4ee3b76>" + _vm._ssrEscape("\n              Sede " + _vm._s(_vm.positionLocation + 1) + ":\n              " + _vm._s(_vm.dataStore.geolocalizacion[_vm.positionLocation].direccion) + "\n            ") + "</p></div>" : "<!---->") + " <div class=\"empty\" data-v-c4ee3b76></div> <div class=\"content-email\" data-v-c4ee3b76><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40px\" height=\"40px\" viewBox=\"0 0 24 24\" class=\"icon-left\" data-v-c4ee3b76><path d=\"M0 0h24v24H0z\" fill=\"none\" data-v-c4ee3b76></path> <path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\" data-v-c4ee3b76></path></svg> <div class=\"email\" data-v-c4ee3b76><p class=\"txt-left\" data-v-c4ee3b76>Envíenos un correo electrónico</p> <p class=\"txt-left\" data-v-c4ee3b76>" + _vm._ssrEscape("\n                " + _vm._s(_vm.dataStore.tienda.email_tienda) + "\n              ") + "</p></div></div></div> "), _vm._ssrNode("<div class=\"right\" data-v-c4ee3b76>", "</div>", [_vm._ssrNode("<div class=\"contact-content\" data-v-c4ee3b76>", "</div>", [_c('ValidationObserver', {
    ref: "observer",
    staticClass: "contact-content-rigth",
    attrs: {
      "tag": "form"
    }
  }, [_c('div', {
    staticClass: "content-form"
  }, [_c('div', {
    staticClass: "content-contacus"
  }, [_c('p', {
    staticClass: "txt-contactus"
  }, [_vm._v(_vm._s(_vm.$t('home_contactenos')))])]), _vm._v(" "), _c('div', {
    staticClass: "form-cont"
  }, [_c('p', {
    staticClass: "txt-input"
  }, [_vm._v(_vm._s(_vm.$t('home_nombre')))]), _vm._v(" "), _c('validation-provider', {
    staticClass: "validator",
    attrs: {
      "name": "nombre",
      "rules": "required"
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
            value: _vm.nombre,
            expression: "nombre"
          }],
          staticClass: "input-text",
          attrs: {
            "name": "nombre",
            "type": "text",
            "placeholder": _vm.$t('contact_nombrePlacer'),
            "id": "ContactName"
          },
          domProps: {
            "value": _vm.nombre
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.nombre = $event.target.value;
            }
          }
        }), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: errors[0],
            expression: "errors[0]"
          }],
          staticClass: "text-error"
        }, [_vm._v(_vm._s(errors[0]))])];
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-cont"
  }, [_c('p', {
    staticClass: "txt-input"
  }, [_vm._v(_vm._s(_vm.$t('home_email')))]), _vm._v(" "), _c('validation-provider', {
    staticClass: "validator",
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
            "placeholder": _vm.$t('contact_emailPlacer'),
            "id": "ContactEmail"
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
            value: errors[0],
            expression: "errors[0]"
          }],
          staticClass: "text-error"
        }, [_vm._v(_vm._s(errors[0]))])];
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-cont"
  }, [_c('p', {
    staticClass: "txt-input"
  }, [_vm._v(_vm._s(_vm.$t('home_mensaje')))]), _vm._v(" "), _c('validation-provider', {
    staticClass: "validator",
    attrs: {
      "name": "comentario",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('textarea', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.comment,
            expression: "comment"
          }],
          staticClass: "input-text-rectangule",
          attrs: {
            "name": "comentario",
            "placeholder": _vm.$t('contact_mensalePlacer')
          },
          domProps: {
            "value": _vm.comment
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.comment = $event.target.value;
            }
          }
        }), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: errors[0],
            expression: "errors[0]"
          }],
          staticClass: "text-error"
        }, [_vm._v(_vm._s(errors[0]))])];
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-cont"
  }, [_c('p', {
    staticClass: "txt-input"
  }, [_vm._v(_vm._s(_vm.$t('home_telefono')))]), _vm._v(" "), _c('div', {
    staticClass: "input-content"
  }, [_c('validation-provider', {
    staticClass: "validator",
    attrs: {
      "name": "celular",
      "rules": "required|numeric"
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
            value: _vm.numberphone,
            expression: "numberphone"
          }],
          staticClass: "input-text",
          attrs: {
            "name": "celular",
            "type": "number",
            "placeholder": _vm.$t('contact_telefonoPlacer'),
            "id": "ContactPhone"
          },
          domProps: {
            "value": _vm.numberphone
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.numberphone = $event.target.value;
            }
          }
        }), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: errors[0],
            expression: "errors[0]"
          }],
          staticClass: "text-error"
        }, [_vm._v(_vm._s(errors[0]))])];
      }
    }])
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "content-bn"
  }, [_c('button', {
    ref: "colorBtn",
    staticClass: "btn",
    class: !_vm.stateBtn ? ' cursor-not-allowed' : 'cursor-pointer',
    attrs: {
      "disabled": _vm.stateBtn ? false : true
    },
    on: {
      "click": _vm.submitContact
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('contact_enviar')) + "\n                  ")])])])])], 1)])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/ko-Contact.vue?vue&type=template&id=c4ee3b76&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/ko-Contact.vue?vue&type=script&lang=js&


/* harmony default export */ var ko_Contactvue_type_script_lang_js_ = ({
  name: 'Ko10Contact',
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate10: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      nombre: '',
      email: '',
      numberphone: '',
      comment: '',
      messageFull: '',
      message: {
        text: '',
        open: false
      },
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
      dataContact: [{
        dato: this.dataStore.tienda.telefono,
        icon: 'phone-icon'
      }, {
        dato: this.dataStore.tienda.whatsapp,
        icon: 'whatsapp-icon'
      }, {
        dato: this.dataStore.tienda.email_tienda,
        icon: 'email-icon'
      }],
      positionLocation: 0,
      stateBtn: false
    };
  },
  computed: {
    facebookPixel() {
      return this.$store.state.analytics_tagmanager;
    }
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook;
      this.links[1].link = this.dataStore.tienda.red_twitter;
      this.links[2].link = this.dataStore.tienda.red_instagram;
      this.links[3].link = this.dataStore.tienda.red_youtube;
      this.links[4].link = this.dataStore.tienda.red_tiktok;
      this.dataContact[0].dato = this.dataStore.tienda.telefono;
      this.dataContact[1].dato = this.dataStore.tienda.whatsapp;
      this.dataContact[2].dato = this.dataStore.tienda.email_tienda;
    }
  },
  destroyed() {
    this.nombre = '';
    this.email = '';
    this.numberphone = '';
    this.comment = '';
  },
  methods: {
    changeLocation(value) {
      this.positionLocation = value;
    },
    submitContact() {
      this.$refs.observer.validate().then(async response => {
        this.stateBtn = false;
        if (response) {
          try {
            const {
              data
            } = await external_axios_default()({
              method: 'POST',
              url: `  ${this.$store.state.urlKomerciaV3}/api/contact/message`,
              data: {
                nombre: this.nombre,
                correo: this.email,
                celular: this.numberphone,
                comentario: this.comment,
                tienda: this.dataStore.tienda.id_tienda
              }
            });
            if (data.status == 200) {
              this.$message.success({
                offset: 150,
                message: 'Comentario enviado!'
              });
              this.stateBtn = true;
              if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
                window.fbq('track', 'Contact', {
                  name: this.nombre,
                  description: this.email
                });
              }
              this.deleteInputs();
            }
          } catch (err) {
            this.stateBtn = true;
            this.$message.success({
              offset: 150,
              message: err.response
            });
          }
        }
      }).catch(e => {
        this.stateBtn = true;
        this.$message.success({
          offset: 150,
          message: 'error'
        });
      });
    },
    deleteInputs() {
      this.nombre = '';
      this.email = '';
      this.numberphone = '';
      this.comment = '';
    }
  }
});
// CONCATENATED MODULE: ./components/template10/ko-Contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var template10_ko_Contactvue_type_script_lang_js_ = (ko_Contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/ko-Contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(699)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template10_ko_Contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c4ee3b76",
  "f7be5716"
  
)

/* harmony default export */ var ko_Contact = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(700);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("922f6d94", content, true, context)
};

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Contact_vue_vue_type_style_index_0_id_c4ee3b76_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(448);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Contact_vue_vue_type_style_index_0_id_c4ee3b76_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Contact_vue_vue_type_style_index_0_id_c4ee3b76_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Contact_vue_vue_type_style_index_0_id_c4ee3b76_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Contact_vue_vue_type_style_index_0_id_c4ee3b76_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapperCarousel[data-v-c4ee3b76] .el-carousel__arrow{background-color:var(--color_background_btn);color:var(--color_text_btn)}.content-contact[data-v-c4ee3b76],.content-form-contact[data-v-c4ee3b76]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-form-contact[data-v-c4ee3b76]{background:var(--background_color_1)}.container-contact[data-v-c4ee3b76]{align-items:center;justify-content:center;width:100%}.empty[data-v-c4ee3b76]{background-color:var(--border);height:1px;margin-bottom:20px;margin-top:20px;width:100%}@media (min-width:300px){.banner-mapa[data-v-c4ee3b76]{display:flex;width:100%}.container-contact[data-v-c4ee3b76]{margin-top:140px}.container-contact[data-v-c4ee3b76],.content-grid[data-v-c4ee3b76]{display:flex;flex-direction:column}.content-grid[data-v-c4ee3b76]{align-items:flex-start;justify-content:flex-start;margin-top:20px;width:90%}.left[data-v-c4ee3b76]{align-items:flex-start;flex-direction:column}.content-info[data-v-c4ee3b76],.left[data-v-c4ee3b76]{display:flex;justify-content:flex-start;width:100%}.content-info[data-v-c4ee3b76]{align-items:center;margin-bottom:30px}.txt-info[data-v-c4ee3b76]{color:var(--color_text);font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;letter-spacing:1px;text-transform:uppercase}.content-email[data-v-c4ee3b76],.content-locatioin[data-v-c4ee3b76]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.icon-left[data-v-c4ee3b76]{fill:var(--color_subtext)}.txt-left[data-v-c4ee3b76]{color:var(--color_subtext);font-size:14px;padding-left:20px}.email[data-v-c4ee3b76],.txt-left[data-v-c4ee3b76]{align-items:center;display:flex;justify-content:flex-start;width:100%}.email[data-v-c4ee3b76]{flex-direction:column}.right[data-v-c4ee3b76]{justify-content:center}.contact-content[data-v-c4ee3b76],.right[data-v-c4ee3b76]{align-items:center;display:flex;flex-direction:column;width:100%}.contact-content[data-v-c4ee3b76]{justify-content:flex-start;margin-bottom:40px;margin-top:40px}.contact-content-rigth[data-v-c4ee3b76]{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);background-color:var(--background_color_2);border:1px solid var(--border);box-shadow:0 0 transparent,0 0 transparent,0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);justify-content:flex-start}.contact-content-rigth[data-v-c4ee3b76],.content-form[data-v-c4ee3b76]{align-items:flex-start;display:flex;flex-direction:column;width:100%}.content-form[data-v-c4ee3b76]{justify-content:center;padding:40px}.content-contacus[data-v-c4ee3b76]{align-items:center;display:flex;justify-content:flex-start;margin-bottom:40px;width:100%}.txt-contactus[data-v-c4ee3b76]{align-items:center;color:var(--color_title_form);font-size:18px;font-weight:600;justify-content:center;text-transform:uppercase}.txt-contactus[data-v-c4ee3b76],.validator[data-v-c4ee3b76]{width:100%}.text-error[data-v-c4ee3b76]{color:red;font-size:13px;width:100%}.input-text[data-v-c4ee3b76],input[data-v-c4ee3b76]{height:40px}.input-text[data-v-c4ee3b76],.input-text-rectangule[data-v-c4ee3b76],input[data-v-c4ee3b76],textarea[data-v-c4ee3b76]{background-color:#fff;border:1px solid #e5e5e5;color:#acaaa6;font-size:13px;padding-left:10px;width:100%}.input-text-rectangule[data-v-c4ee3b76],textarea[data-v-c4ee3b76]{height:100px;padding-top:10px}.txt-input[data-v-c4ee3b76]{color:var(--color_text_form);font-size:13px;justify-content:center}.content-bn[data-v-c4ee3b76],.txt-input[data-v-c4ee3b76]{align-items:center;width:100%}.content-bn[data-v-c4ee3b76]{display:flex;justify-content:flex-start}.btn[data-v-c4ee3b76]{background-color:var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);font-size:14px;height:35px;margin-top:20px;padding-left:20px;padding-right:20px;width:auto}.btn[data-v-c4ee3b76]:hover{background-color:var(--hover_Bg_btn);color:var(--hover_text_btn)}.form-cont[data-v-c4ee3b76]{align-items:center;justify-content:flex-start}.form-cont[data-v-c4ee3b76],.input-content[data-v-c4ee3b76]{display:flex;flex-direction:column;width:100%}.input-content[data-v-c4ee3b76]{align-items:flex-start;justify-content:center}}@media (min-width:768px){.banner-mapa[data-v-c4ee3b76]{display:flex;width:100%}.container-contact[data-v-c4ee3b76]{align-items:center;justify-content:center;margin-top:20px}.container-contact[data-v-c4ee3b76],.content-grid[data-v-c4ee3b76]{display:flex;flex-direction:row}.content-grid[data-v-c4ee3b76]{width:95%}.left[data-v-c4ee3b76]{margin-right:20px;width:50%}.contact-content[data-v-c4ee3b76]{margin-bottom:40px;margin-top:0}.form-cont[data-v-c4ee3b76]{flex-direction:row;margin-bottom:20px}.txt-input[data-v-c4ee3b76]{width:100px}.content-bn[data-v-c4ee3b76]{align-items:center;justify-content:flex-end}}@media (min-width:1280px){.banner-mapa[data-v-c4ee3b76]{margin-top:0}}@media (min-width:1024px){.left[data-v-c4ee3b76]{width:320px}}@media (min-width:1400px){.container-contact[data-v-c4ee3b76]{max-width:1400px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template10-ko-contact.js.map