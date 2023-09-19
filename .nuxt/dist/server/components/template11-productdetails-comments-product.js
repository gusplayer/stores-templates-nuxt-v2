exports.ids = [250];
exports.modules = {

/***/ 1262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productdetails/commentsProduct.vue?vue&type=template&id=4fd4d013&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-commentsProduct"
  }, [_vm._ssrNode("<div class=\"content-commentsProduct\" data-v-4fd4d013>", "</div>", [_vm._ssrNode("<div class=\"wrapper-form\" data-v-4fd4d013>", "</div>", [_vm._ssrNode("<p class=\"title-comments\" data-v-4fd4d013>Preguntas y respuestas</p> "), _c('ValidationObserver', {
    ref: "observer",
    staticClass: "content-items-form",
    attrs: {
      "tag": "form"
    }
  }, [_c('P', [_vm._v("Escribe una pregunta")]), _vm._v(" "), _c('validation-provider', {
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
            "placeholder": "Escribe aquí tu mensaje"
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
  }), _vm._v(" "), _c('div', {
    staticClass: "content-input-form"
  }, [_c('div', [_c('p', [_vm._v("Cédula")]), _vm._v(" "), _c('validation-provider', {
    attrs: {
      "name": "cedula",
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
            value: _vm.cedula,
            expression: "cedula"
          }],
          staticClass: "input-text",
          attrs: {
            "name": "cedula",
            "type": "text",
            "placeholder": "Escribe tu cédula",
            "id": "ContactName"
          },
          domProps: {
            "value": _vm.cedula
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.cedula = $event.target.value;
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
  })], 1), _vm._v(" "), _c('div', [_c('P', [_vm._v("E-Mail")]), _vm._v(" "), _c('validation-provider', {
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
            "placeholder": "Escribe tu correo",
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
    staticClass: "content-btn"
  }, [_c('button', {
    staticClass: "btn",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.submitComments.apply(null, arguments);
      }
    }
  }, [_vm._v("\n              Preguntar\n            ")])])])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-answers\" data-v-4fd4d013>", "</div>", [!_vm.estado ? _vm._ssrNode("<div class=\"content-answers\" data-v-4fd4d013>", "</div>", [_vm._ssrNode("<p class=\"title-answers\" style=\"font-weight: bold; margin-bottom: 10px\" data-v-4fd4d013>\n          Últimas preguntas\n        </p> "), _vm._ssrNode("<div data-v-4fd4d013>", "</div>", [_vm._ssrNode("<p class=\"text-question\" data-v-4fd4d013>", "</p>", [_c('Message-question-icon', {
    staticClass: "icon"
  }), _vm._ssrNode("Pregunta\n          ")], 2), _vm._ssrNode(" "), _vm._ssrNode("<p class=\"text-answer\" data-v-4fd4d013>", "</p>", [_c('Message-answer-icon', {
    staticClass: "icon"
  }), _vm._ssrNode("Respuesta\n            <em class=\"text-answer-date\" data-v-4fd4d013>22/8/2020 15:27</em>")], 2)], 2)], 2) : _vm._ssrNode("<div class=\"answers-empty\" data-v-4fd4d013><p class=\"title-answers\" data-v-4fd4d013>\n          Nadie hizo preguntas todavía. <strong data-v-4fd4d013>¡Sé el primero!</strong></p></div>")])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/_productdetails/commentsProduct.vue?vue&type=template&id=4fd4d013&scoped=true&

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_productdetails/commentsProduct.vue?vue&type=script&lang=js&
// import axios from 'axios'

/* harmony default export */ var commentsProductvue_type_script_lang_js_ = ({
  name: 'Ko-commentsProduct-11',
  props: {
    dataStore: Object
  },
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },
  data() {
    return {
      cedula: '',
      email: '',
      comment: '',
      estado: false
    };
  },
  methods: {
    submitComments() {
      this.$refs.observer.validate().then(response => {
        if (response) {
          this.$message.success('Comentario enviado!');
        }
      }).catch(e => {
        this.$message.error('error');
      });
    }
  }
});
// CONCATENATED MODULE: ./components/template11/_productdetails/commentsProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_commentsProductvue_type_script_lang_js_ = (commentsProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/_productdetails/commentsProduct.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(931)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_commentsProductvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4fd4d013",
  "f11ba4b8"
  
)

/* harmony default export */ var commentsProduct = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(932);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7ebc5838", content, true, context)
};

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commentsProduct_vue_vue_type_style_index_0_id_4fd4d013_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(538);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commentsProduct_vue_vue_type_style_index_0_id_4fd4d013_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commentsProduct_vue_vue_type_style_index_0_id_4fd4d013_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commentsProduct_vue_vue_type_style_index_0_id_4fd4d013_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commentsProduct_vue_vue_type_style_index_0_id_4fd4d013_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-commentsProduct[data-v-4fd4d013]{background:#efefef;padding-top:10px;width:100%}.content-commentsProduct[data-v-4fd4d013]{display:flex;flex-direction:column;justify-content:center;padding:10px 25px 20px 0;width:100%}.wrapper-form[data-v-4fd4d013]{width:100%}.title-comments[data-v-4fd4d013]{color:rgba(21,20,57,.541);font-size:18px;font-weight:700;line-height:1.4;margin-bottom:10px}.content-items-form[data-v-4fd4d013]{border-radius:10px;padding:10px}.content-items-form p[data-v-4fd4d013]{color:rgba(21,20,57,.541);font-size:15px;font-stretch:normal;font-style:normal;font-weight:600;height:19px;line-height:1.2;margin:10px 10px 10px 0}.content-input-form[data-v-4fd4d013]{display:flex;flex-direction:row;height:104px;width:100%}.content-input-form>div[data-v-4fd4d013]{flex:1;width:100%}.content-input-form>div[data-v-4fd4d013]:first-child{margin-right:30px}.input-text[data-v-4fd4d013]{background-color:transparent;border:2px solid #afafaf;border-radius:var(--radius_btn);color:rgba(21,20,57,.541);font-size:14px;height:41px;padding:8px 14px;width:100%}.input-text[data-v-4fd4d013]::-moz-placeholder{color:rgba(21,20,57,.541);opacity:.7}.input-text[data-v-4fd4d013]::placeholder{color:rgba(21,20,57,.541);opacity:.7}.input-text[data-v-4fd4d013]:-internal-autofill-selected{background-color:transparent!important;background-image:none!important;color:-internal-light-dark-color(#000,#fff)!important}.input-text[data-v-4fd4d013]:-internal-autofill-selected{-webkit-appearance:menulist-button}.input-text[data-v-4fd4d013]:active,.input-text[data-v-4fd4d013]:focus{border:2px solid hsla(240,5%,52%,.342);outline:0}.input-text-rectangule[data-v-4fd4d013]{background-color:transparent;border:2px solid #afafaf;border-radius:var(--radius_btn);color:rgba(21,20,57,.541);font-size:14px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;max-height:80px;min-height:80px;overflow-y:auto;padding:4px 14px;resize:none;width:100%}.input-text-rectangule[data-v-4fd4d013]::-moz-placeholder{color:rgba(21,20,57,.541);opacity:.7}.input-text-rectangule[data-v-4fd4d013]::placeholder{color:rgba(21,20,57,.541);opacity:.7}.input-text-rectangule[data-v-4fd4d013]:active,.input-text-rectangule[data-v-4fd4d013]:focus{border:2px solid hsla(0,0%,7%,.342);outline:0}.input-text-rectangule[data-v-4fd4d013]::-webkit-scrollbar{background:transparent;width:5px}.input-text-rectangule[data-v-4fd4d013]::-webkit-scrollbar-track{border-radius:5px;box-shadow:inset 0 0 10px transparent}.input-text-rectangule[data-v-4fd4d013]::-webkit-scrollbar-thumb{background:#3b3b3b}.input-text-rectangule[data-v-4fd4d013]::-webkit-scrollbar-thumb:hover{background:#8a8a8a}.text-error[data-v-4fd4d013]{color:#cb2027;font-size:12px;margin-left:10px;width:100%}.content-btn[data-v-4fd4d013]{flex:1;margin-left:20px}.btn[data-v-4fd4d013]{background-color:#000;border:2px solid #000;border-radius:var(--radius_btn);color:#fff;cursor:pointer;font-size:16px;font-weight:700;height:41px;margin-top:15px;padding:8px 14px;transition:all .2s ease-in;width:100%}.btn[data-v-4fd4d013]:hover{background-color:var(--btnhover);border:2px solid var(--btnhover);color:#fff}.content-answers[data-v-4fd4d013],.wrapper-answers[data-v-4fd4d013]{display:flex;flex-direction:column;justify-content:center;width:100%}.content-answers[data-v-4fd4d013]{margin-top:10px}.title-answers[data-v-4fd4d013]{color:rgba(21,20,57,.541);font-size:16px;line-height:1.2}.answers-empty[data-v-4fd4d013]{margin-top:10px}.text-question[data-v-4fd4d013]{color:rgba(9,8,22,.692);font-size:16px}.text-answer[data-v-4fd4d013]{color:rgba(61,60,77,.541);font-size:16px}.text-answer-date[data-v-4fd4d013]{color:rgba(61,60,77,.541);font-size:14px;margin-left:5px}.icon[data-v-4fd4d013]{color:rgba(9,8,22,.692);margin-right:10px}@media (max-width:725px){.wrapper-commentsProduct[data-v-4fd4d013]{margin-left:15px;margin-right:15px;padding-top:10px}}@media (max-width:630px){.content-input-form[data-v-4fd4d013]{flex-direction:column;height:100%}.content-btn[data-v-4fd4d013]{flex:1;margin-left:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template11-productdetails-comments-product.js.map