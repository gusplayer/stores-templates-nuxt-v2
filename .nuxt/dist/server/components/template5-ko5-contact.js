exports.ids = [160];
exports.modules = {

/***/ 1193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko5-Contact.vue?vue&type=template&id=433a0407&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-contact",
    style: _vm.settingK05Contact
  }, [_vm._ssrNode("<div class=\"contact\"" + _vm._ssrStyle(null, {
    '--font-style': this.settingK05Contact && this.settingK05Contact.tipo_letra ? this.settingK05Contact.tipo_letra : 'Roboto'
  }, null) + " data-v-433a0407>", "</div>", [_vm._ssrNode("<div class=\"contact-content\" data-v-433a0407>", "</div>", [_vm._ssrNode("<div data-v-433a0407><p class=\"contact-text-title\" data-v-433a0407>" + _vm._ssrEscape(_vm._s(_vm.$t('contact_title'))) + "</p> <p class=\"contact-text-subtitle\" data-v-433a0407>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('contact_subtitle')) + "\n        ") + "</p></div> "), _vm._ssrNode("<div class=\"wrapper-icon\" data-v-433a0407>", "</div>", [_vm._ssrNode("<div class=\"contact-content-icon\" data-v-433a0407>", "</div>", _vm._l(_vm.dataContact, function (item2, index) {
    return _vm._ssrNode("<div class=\"text-icon\" data-v-433a0407>", "</div>", [item2.dato ? _c(item2.icon, {
      tag: "div",
      staticClass: "contact-icon"
    }) : _vm._e(), _vm._ssrNode(" " + (item2.dato ? "<a data-v-433a0407>" + _vm._ssrEscape(_vm._s(item2.dato)) + "</a>" : "<!---->"))], 2);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"contact-content-icon\" data-v-433a0407>", "</div>", _vm._l(_vm.links, function (item, index) {
    return _vm._ssrNode("<div class=\"text-icon\" data-v-433a0407>", "</div>", [item.link ? _c(item.icon, {
      tag: "div",
      staticClass: "icon"
    }) : _vm._e(), _vm._ssrNode(" " + (item.link ? "<a" + _vm._ssrAttr("href", item.link) + " target=\"_blank\" rel=\"noreferrer noopener\" data-v-433a0407>" + _vm._ssrEscape(_vm._s(item.nombre)) + "</a>" : "<!---->"))], 2);
  }), 0)], 2), _vm._ssrNode(" <div class=\"separator\" data-v-433a0407></div> "), _vm.dataStore.geolocalizacion.length ? _vm._ssrNode("<div data-v-433a0407>", "</div>", [_vm._ssrNode("<p class=\"contact-text-sub\" data-v-433a0407>" + _vm._ssrEscape(_vm._s(_vm.$t('contact_vistaTienda'))) + "</p> "), _c('el-carousel', {
    staticClass: "wrapperCarousel",
    attrs: {
      "interval": 5000,
      "arrow": "always",
      "height": "350px"
    }
  }, _vm._l(_vm.dataStore.geolocalizacion, function (item, inggeo) {
    return _c('el-carousel-item', {
      key: inggeo
    }, [_c('p', {
      staticClass: "contact-text-subtitle2"
    }, [_vm._v("\n              Sede " + _vm._s(inggeo + 1) + ": " + _vm._s(item.nombre_sede) + "\n            ")]), _vm._v(" "), _c('iframe', {
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
    }), _vm._v(" "), _c('div', {
      staticClass: "under-text"
    }, [_c('p', {
      staticClass: "contact-text-subtitle3"
    }, [_vm._v("\n                " + _vm._s(_vm.$t('contact_horarioAtencion')) + "\n                "), _c('br'), _vm._v("\n                " + _vm._s(item.horario) + "\n              ")]), _vm._v(" "), _c('a', {
      staticClass: "contact-text-subtitle4"
    }, [_vm._v("\n                " + _vm._s(_vm.$t('contact_comollegar')))])])]);
  }), 1)], 2) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"contact-content\" data-v-433a0407>", "</div>", [_vm._ssrNode("<div class=\"contact-item-text\" data-v-433a0407><p class=\"contact-text-title\" data-v-433a0407>" + _vm._ssrEscape(_vm._s(_vm.$t('contact_title2'))) + "</p> <p class=\"contact-text-subtitles\" data-v-433a0407>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('contact_subtitle2')) + "\n        ") + "</p></div> "), _c('ValidationObserver', {
    ref: "observer",
    staticClass: "contact-content-rigth",
    attrs: {
      "tag": "form"
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('contact_nombre')))]), _vm._v(" "), _c('validation-provider', {
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
  }), _vm._v(" "), _c('P', [_vm._v(" " + _vm._s(_vm.$t('contact_email')))]), _vm._v(" "), _c('validation-provider', {
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
  }), _vm._v(" "), _c('P', [_vm._v(" " + _vm._s(_vm.$t('contact_mensale')))]), _vm._v(" "), _c('validation-provider', {
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
  }), _vm._v(" "), _c('P', [_vm._v(" " + _vm._s(_vm.$t('contact_telefono')))]), _vm._v(" "), _c('div', {
    staticClass: "input-content"
  }, [_c('validation-provider', {
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
  }), _vm._v(" "), _c('button', {
    ref: "colorBtn",
    staticClass: "btn",
    class: !_vm.stateBtn ? ' cursor-not-allowed' : 'cursor-pointer',
    attrs: {
      "disabled": _vm.stateBtn ? false : true
    },
    on: {
      "click": _vm.submitContact
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('contact_enviar')) + "\n          ")])], 1)], 1)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/Ko5-Contact.vue?vue&type=template&id=433a0407&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko5-Contact.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko5_Contactvue_type_script_lang_js_ = ({
  name: 'Ko5Contact',
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingK05Contact: {
      type: Object,
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
        icon: 'tiktok2-icon',
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
      stateBtn: true
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
// CONCATENATED MODULE: ./components/template5/Ko5-Contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var template5_Ko5_Contactvue_type_script_lang_js_ = (Ko5_Contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/Ko5-Contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(784)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template5_Ko5_Contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "433a0407",
  "12100dbe"
  
)

/* harmony default export */ var Ko5_Contact = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(785);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7661eb09", content, true, context)
};

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko5_Contact_vue_vue_type_style_index_0_id_433a0407_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(441);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko5_Contact_vue_vue_type_style_index_0_id_433a0407_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko5_Contact_vue_vue_type_style_index_0_id_433a0407_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko5_Contact_vue_vue_type_style_index_0_id_433a0407_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko5_Contact_vue_vue_type_style_index_0_id_433a0407_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapperCarousel[data-v-433a0407] .el-carousel__arrow{background-color:var(--color_background_btn);color:var(--color_text_btn)}.wrapper-contact[data-v-433a0407]{background:#efefef;box-sizing:border-box;justify-content:center}.contact[data-v-433a0407],.wrapper-contact[data-v-433a0407]{align-items:center;display:flex;width:100%}.contact[data-v-433a0407]{flex-direction:row;justify-content:space-between;max-width:1300px;padding:30px}.contact>div[data-v-433a0407]{flex:1;max-width:500px;width:100%}.contact>div[data-v-433a0407]:nth-child(2){margin-left:20px}.contact-content[data-v-433a0407]{align-self:end;display:flex;flex-direction:column;justify-content:space-around}.contact-item-text[data-v-433a0407]{width:100%}.contact-text-title[data-v-433a0407]{color:#000;font-size:35px;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:-.4px;line-height:1.4}.contact-text-subtitle[data-v-433a0407],.contact-text-subtitles[data-v-433a0407]{font-size:16px}.contact-text-subtitle[data-v-433a0407],.contact-text-subtitle2[data-v-433a0407],.contact-text-subtitles[data-v-433a0407]{color:rgba(21,20,57,.541);font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:10px}.contact-text-subtitle2[data-v-433a0407]{font-size:15px;margin-bottom:10px}.contact-text-subtitle3[data-v-433a0407]{color:rgba(21,20,57,.541)}.contact-text-subtitle3[data-v-433a0407],.contact-text-subtitle4[data-v-433a0407]{font-size:12px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1;margin-top:10px}.contact-text-subtitle4[data-v-433a0407]{color:#000;text-align:right}.-text[data-v-433a0407]{display:flex;flex-direction:column}.contact-icon[data-v-433a0407]{color:#25dac5;font-size:18px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:2.11}.text-icon[data-v-433a0407]{align-items:center;color:#25dac5;justify-content:flex-start}.text-icon a[data-v-433a0407]:hover{color:var(--btnhover);cursor:pointer}.text-icon a[data-v-433a0407]{color:#000;font-size:16px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-left:7px;margin-top:5px}.icon[data-v-433a0407]{fill:#25dac5;font-size:17px;height:15px;width:15px}.contact-text-sub[data-v-433a0407],.contact-text-sub2[data-v-433a0407]{color:#000;font-size:22px;font-stretch:normal;font-style:normal;font-weight:600;letter-spacing:normal;line-height:1.4;margin-top:10px}.separator[data-v-433a0407]{border:1.5px solid #fff;margin-top:15px;width:100%}.text-icon[data-v-433a0407]{display:flex;flex-direction:row}.contact-content-icon[data-v-433a0407]{margin-top:10px}.contact-content-rigth[data-v-433a0407]{background-color:#dfdfdf;border-radius:10px;margin-top:20px;padding:30px 30px 50px}.contact-content-rigth p[data-v-433a0407]{color:#000;font-size:14px;font-stretch:normal;font-style:normal;font-weight:600;letter-spacing:2px;line-height:1.86;margin:10px 10px 10px 0}.under-text[data-v-433a0407]{display:flex;flex-direction:row;justify-content:space-between}.under-text p[data-v-433a0407]:first-child{flex:2}.under-text p[data-v-433a0407]:nth-child(2){flex:1}.input-content[data-v-433a0407]{display:flex;flex-direction:row}.input-text[data-v-433a0407]{background-color:transparent;border:2px solid #afafaf;border-radius:var(--radius_btn);color:rgba(21,20,57,.541);font-size:14px;padding:8px 14px;width:100%}.input-text[data-v-433a0407]::-moz-placeholder{color:rgba(21,20,57,.541);opacity:.7}.input-text[data-v-433a0407]::placeholder{color:rgba(21,20,57,.541);opacity:.7}.input-text[data-v-433a0407]:-internal-autofill-selected{background-color:transparent!important;background-image:none!important;color:-internal-light-dark-color(#000,#fff)!important}.input-text[data-v-433a0407]:-internal-autofill-selected{-webkit-appearance:menulist-button}.input-text[data-v-433a0407]:active,.input-text[data-v-433a0407]:focus{border:2px solid hsla(240,5%,52%,.342);outline:0}.input-text-rectangule[data-v-433a0407]{background-color:transparent;border:2px solid #afafaf;border-radius:var(--radius_btn);color:rgba(21,20,57,.541);font-size:14px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;max-height:80px;min-height:80px;overflow-y:auto;padding:4px 14px;resize:none;width:100%}.input-text-rectangule[data-v-433a0407]::-moz-placeholder{color:rgba(21,20,57,.541);opacity:.7}.input-text-rectangule[data-v-433a0407]::placeholder{color:rgba(21,20,57,.541);opacity:.7}.input-text-rectangule[data-v-433a0407]:active,.input-text-rectangule[data-v-433a0407]:focus{border:2px solid hsla(240,5%,52%,.342);outline:0}.input-text-rectangule[data-v-433a0407]::-webkit-scrollbar{background:transparent;width:5px}.input-text-rectangule[data-v-433a0407]::-webkit-scrollbar-track{border-radius:5px;box-shadow:inset 0 0 10px transparent}.input-text-rectangule[data-v-433a0407]::-webkit-scrollbar-thumb{background:#3b3b3b}.input-text-rectangule[data-v-433a0407]::-webkit-scrollbar-thumb:hover{background:#8a8a8a}.text-error[data-v-433a0407]{color:#cb2027;font-size:12px;margin-left:10px;width:100%}.btn[data-v-433a0407]{background-color:var(--color_background_btn);border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);cursor:pointer;font-size:16px;font-weight:700;height:41px;margin-left:20px;padding:8px 14px;transition:all .2s ease-in;width:50%}.btn[data-v-433a0407]:hover{background-color:var(--btnhover);border:2px solid var(--btnhover);color:#fff}.btn2[data-v-433a0407]{background-color:grey;border:2px solid grey;border-radius:var(--radius_btn);color:#000;font-size:16px;font-weight:700;height:41px;margin-left:20px;padding:8px 14px;width:50%}@media (max-width:700px){.contact[data-v-433a0407]{flex-direction:column}.contact>div[data-v-433a0407]:nth-child(2){margin-left:0}.contact-content[data-v-433a0407]{align-self:normal}.contact-text-subtitle[data-v-433a0407],.separator[data-v-433a0407]{display:none}.wrapper-icon[data-v-433a0407]{display:flex;flex-direction:column-reverse}.contact-text-sub[data-v-433a0407]{margin-top:20px}.input-content[data-v-433a0407]{flex-direction:column}.btn[data-v-433a0407]{margin-left:0;margin-top:10px;width:100%}.contact-content-rigth[data-v-433a0407]{padding:20px 15px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template5-ko5-contact.js.map