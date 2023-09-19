exports.ids = [99];
exports.modules = {

/***/ 1165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-Newsletter.vue?vue&type=template&id=49113e5e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex justify-center items-center py-15 lg:py-20 px-10",
    style: `background-color: ${_vm.newsletter['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full max-w-7xl flex items-center justify-center border wrapper_border\"" + _vm._ssrStyle(null, `border-color: ${_vm.newsletter.color_border_component};`, null) + " data-v-49113e5e>", "</div>", [_vm._ssrNode("<div class=\"w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center\" data-v-49113e5e>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-col justify-center items-start py-30 md:py-40 pl-20 md:pl-80 pr-20 md:pr-0\" data-v-49113e5e>", "</div>", [_vm._ssrNode("<p class=\"font-bold text-30 mb-10\"" + _vm._ssrStyle(null, `color: ${_vm.newsletter.color_title};`, null) + " data-v-49113e5e>" + _vm._ssrEscape("\n          " + _vm._s(_vm.newsletter.title) + "\n        ") + "</p> <p class=\"text-15\"" + _vm._ssrStyle(null, `color: ${_vm.newsletter.color_text};`, null) + " data-v-49113e5e>" + _vm._ssrEscape("\n          " + _vm._s(_vm.newsletter.subTitle) + "\n        ") + "</p> <div class=\"border h-2 my-10 md:my-15 border-hover\"" + _vm._ssrStyle(null, `border-color: ${_vm.newsletter.color_border};`, null) + " data-v-49113e5e></div> "), _vm._ssrNode("<div class=\"w-full flex flex-col justify-center\" data-v-49113e5e>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-col justify-between md:flex-row py-10 px-10 rounded-2\"" + _vm._ssrStyle(null, `background-color: ${_vm.newsletter.color_input};`, null) + " data-v-49113e5e>", "</div>", [_c('ValidationProvider', {
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
        return [_c('div', {
          staticClass: "flex flex-row items-center"
        }, [_c('div', [_c('svg', {
          attrs: {
            "xmlns": "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "version": "1.1",
            "width": "20px",
            "height": "20px",
            "viewBox": "0 0 24 24",
            "fill": _vm.newsletter.color_icon,
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
          staticClass: "ml-10 bg-transparent",
          style: `color: ${_vm.newsletter.color_text_input};`,
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
          staticClass: "text-xs",
          style: [`color: ${_vm.newsletter.color_text_input};`, _vm.register ? 'color:green' : '']
        }, [_vm._v("\n                  " + _vm._s(_vm.errorsCheckbox || _vm.register) + "\n                ")])];
      }
    }])
  }), _vm._ssrNode(" <button class=\"w-full max-w-full md:max-w-[130px] font-bold px-15 mt-5 md:mt-0\"" + _vm._ssrStyle(null, `color: ${_vm.newsletter.color_text_input};background-color: ${_vm.newsletter.color_input};`, null) + " data-v-49113e5e>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('newsletter_btn')) + "\n            ") + "</button>")], 2), _vm._ssrNode(" <div class=\"mt-3\" data-v-49113e5e>" + (_vm.stateChecked ? "<p class=\"text-xs text-red-500 py-2\" data-v-49113e5e>\n              Marcar checkbox para poder suscribirse al boletín informativo\n            </p>" : "<!---->") + " <div class=\"flex flex-row items-center\" data-v-49113e5e><input type=\"checkbox\" id=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : _vm.checked) + " data-v-49113e5e> <p class=\"ml-5 text-xs\" data-v-49113e5e>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('newsletter_msg')) + "\n              ") + "</p></div></div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-img\" data-v-49113e5e>", "</div>", [_vm._ssrNode("<picture data-v-49113e5e>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.newsletter.img_res, 'bannerRes', 800)) + " data-v-49113e5e> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.newsletter.img, 'banner')) + " data-v-49113e5e> "), _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.newsletter.img,
      expression: "newsletter.img"
    }],
    staticClass: "w-full effect-img",
    attrs: {
      "alt": "newsletter template14"
    }
  }, [])], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/ko14-Newsletter.vue?vue&type=template&id=49113e5e&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(8);

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-Newsletter.vue?vue&type=script&lang=js&



/* harmony default export */ var ko14_Newslettervue_type_script_lang_js_ = ({
  name: 'Ko15-Newsletter',
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
  }
});
// CONCATENATED MODULE: ./components/template14/ko14-Newsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var template14_ko14_Newslettervue_type_script_lang_js_ = (ko14_Newslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/ko14-Newsletter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(750)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template14_ko14_Newslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "49113e5e",
  "abc37016"
  
)

/* harmony default export */ var ko14_Newsletter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(751);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6b15f420", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    // Imágenes de producto
    idCloudinary(url, width, height) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,f_auto,fl_lossy,q_auto/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad/${fitImage[1]}`;
      } else {
        return url;
      }
    },
    idCloudinaryQuality(url, width, height) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,f_auto,fl_lossy,q_90/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad/${fitImage[1]}`;
      } else {
        return url;
      }
    },
    idCloudinarys(url, width, height) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/c_scale,h_${height},w_${width}/${fitImage[1]}`;
      } else {
        return url;
      }
    },
    idCloudinaryBanner(url, type, width) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      let fitImage3;
      if (fitImage && fitImage.length > 1) {
        fitImage3 = fitImage[1].split('.');
      }
      if (fitImage2[2] == 'res.cloudinary.com') {
        if (type == 'banner') {
          return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/${fitImage3[0]}.webp`;
        } else if (type == 'bannerRes') {
          return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/c_scale,w_${width}/${fitImage3[0]}.webp`;
        }
      } else {
        return url;
      }
    }
  }
});

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_Newsletter_vue_vue_type_style_index_0_id_49113e5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(448);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_Newsletter_vue_vue_type_style_index_0_id_49113e5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_Newsletter_vue_vue_type_style_index_0_id_49113e5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_Newsletter_vue_vue_type_style_index_0_id_49113e5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko14_Newsletter_vue_vue_type_style_index_0_id_49113e5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_border:hover .border-hover[data-v-49113e5e]{-webkit-transition:all .6s ease 0s;width:120px}.wrapper-img[data-v-49113e5e]{cursor:pointer;display:flex;height:auto;justify-content:flex-start;width:100%}.wrapper-img[data-v-49113e5e],.wrapper_border:hover .effect-img[data-v-49113e5e]{overflow:hidden;position:relative;-webkit-transition:all .6s ease 0s}.wrapper_border:hover .effect-img[data-v-49113e5e]{transform:scale(1.1)}.border-hover[data-v-49113e5e],.effect-img[data-v-49113e5e]{-webkit-transition:all .6s ease 0s}.border-hover[data-v-49113e5e]{width:80px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template14-ko14-newsletter.js.map