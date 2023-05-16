exports.ids = [25];
exports.modules = {

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(580);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6343f992", content, true, context)
};

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_2_vue_vue_type_style_index_0_id_48ac4d54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(322);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_2_vue_vue_type_style_index_0_id_48ac4d54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_2_vue_vue_type_style_index_0_id_48ac4d54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_2_vue_vue_type_style_index_0_id_48ac4d54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_2_vue_vue_type_style_index_0_id_48ac4d54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-footer[data-v-48ac4d54]{align-items:center;background:var(--background_color_1);box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding-bottom:10px;width:100%}.contenedor[data-v-48ac4d54]{align-self:center;display:flex;max-width:1300px;padding:60px 30px 10px;width:100%}.top-footer[data-v-48ac4d54]{display:flex;flex-direction:row;width:100%}.top-footer>div[data-v-48ac4d54]{flex:1}.top-footer>div[data-v-48ac4d54]:first-child,.top-footer>div[data-v-48ac4d54]:nth-child(4){flex:2}.wrapper-logo[data-v-48ac4d54]{align-items:flex-start}.left-logo[data-v-48ac4d54],.wrapper-logo[data-v-48ac4d54]{display:flex;flex-direction:column}.text-light[data-v-48ac4d54]{color:var(--color_subtext);font-size:15px;font-stretch:normal;font-style:normal;font-weight:500;letter-spacing:normal;line-height:1.4;margin-top:10px}.content-logo[data-v-48ac4d54]{max-width:120px;width:100%}.logo[data-v-48ac4d54]{max-height:70px;-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left}.text-top[data-v-48ac4d54]{color:var(--color_text);cursor:pointer;font-size:18px;font-stretch:normal;font-style:normal;font-weight:500;letter-spacing:normal;line-height:1.4;margin-top:5px}.text-top[data-v-48ac4d54]:hover{color:var(--color_hover_text)}.text-top-bold[data-v-48ac4d54]{color:var(--color_text);font-size:18px;font-weight:700;line-height:1.4}.input-text[data-v-48ac4d54],.text-top-bold[data-v-48ac4d54]{font-stretch:normal;font-style:normal;letter-spacing:normal}.input-text[data-v-48ac4d54]{background-color:transparent;border:2px solid #afafaf;border-radius:var(--radius_btn);color:var(--color_subtext);font-size:14px;font-weight:300;line-height:1.57;min-height:41px;padding:4px 14px;width:100%}.input-text[data-v-48ac4d54]::-moz-placeholder{color:var(--color_subtext);opacity:.7}.input-text[data-v-48ac4d54]::placeholder{color:var(--color_subtext);opacity:.7}.input-text[data-v-48ac4d54]:active,.input-text[data-v-48ac4d54]:focus{border:2px solid var(--color_icon);outline:0}.text-error[data-v-48ac4d54]{color:#cb2027;font-size:12px;margin-left:10px;width:100%}.text-icon[data-v-48ac4d54]{display:flex;flex-direction:row}.text-icon a[data-v-48ac4d54]{color:var(--color_text);font-size:18px;font-stretch:normal;font-style:normal;font-weight:500;letter-spacing:normal;line-height:1.4;margin-left:7px;margin-top:5px}.text-icon a[data-v-48ac4d54]:hover{color:var(--color_hover_text)}.input-content[data-v-48ac4d54]{display:flex;flex-direction:row}.input-content[data-v-48ac4d54] :first-child{flex:2}.input-content[data-v-48ac4d54] :nth-child(2){flex:0.5}.icon[data-v-48ac4d54]{fill:var(--color_icon);color:var(--color_icon);font-size:19px}.btn[data-v-48ac4d54]{background-color:var(--color_background_btn);border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);cursor:pointer;font-size:16px;font-weight:700;margin-left:3%;max-height:41px;padding:4px 14px;transition:all .2s ease-in;width:100%}.btn[data-v-48ac4d54]:hover{background-color:var(--btnhover);border:2px solid var(--btnhover);color:#fff}.content-checkbox[data-v-48ac4d54]{align-items:center;display:flex;flex-direction:row;margin-top:3px;width:100%}.text-checkbox[data-v-48ac4d54]{color:var(--color_subtext);font-size:12px;margin-left:5px}.items-movil[data-v-48ac4d54]{display:none}.under-footer[data-v-48ac4d54]{align-items:center;display:flex;flex-direction:column;justify-content:space-between;margin-top:40px;max-width:1300px;width:100%}.separator[data-v-48ac4d54]{background:var(--color_icon);border:1px solid var(--color_icon);height:1.1px;margin-bottom:10px;max-width:400px;opacity:.5;width:100%}.under-footer p[data-v-48ac4d54]{color:var(--color_text);font-size:12px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;text-align:center}.contenedor-term-con[data-v-48ac4d54]{align-items:center;display:flex;justify-content:center;margin-bottom:5px;width:100%}.contenedor-term-con label[data-v-48ac4d54]{color:var(--color_icon);cursor:pointer;font-size:15px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4}.logo2[data-v-48ac4d54]{opacity:.7;width:100px}#modal-toggle[data-v-48ac4d54]{display:none}.modal-content[data-v-48ac4d54]::-webkit-scrollbar{background:#fff;border-bottom-right-radius:var(--radius_btn);border-top-right-radius:var(--radius_btn);width:10px}.modal-content[data-v-48ac4d54]::-webkit-scrollbar-track{border-radius:10px;box-shadow:inset 0 0 10px #fff}.modal-content[data-v-48ac4d54]::-webkit-scrollbar-thumb{background:#000;border-radius:10px}.modal-backdrop[data-v-48ac4d54],.modal-content[data-v-48ac4d54]{cursor:pointer;opacity:0;overflow:hidden;position:fixed;transition:all .3s ease-in-out;z-index:-1}.modal-backdrop[data-v-48ac4d54]{height:100vh;left:0;top:0;width:100vw}#modal-toggle:checked~.modal-backdrop[data-v-48ac4d54]{background-color:rgba(0,0,0,.5);opacity:1;z-index:15}#modal-toggle:checked~.modal-content[data-v-48ac4d54]{background-color:#fff;border-radius:var(--radius_btn);cursor:auto;opacity:1;overflow:auto;pointer-events:auto;z-index:15}.modal-content[data-v-48ac4d54]{bottom:0;left:0;margin:auto;max-height:450px;max-width:1000px;padding:10px;right:0;top:0;width:100%}.header-modal[data-v-48ac4d54]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:20px;width:100%}.modal-close-btn[data-v-48ac4d54]{cursor:pointer;display:inline-block;right:10px}.close-icon-modal[data-v-48ac4d54]{color:#000;font-size:30px}.close-icon-modal[data-v-48ac4d54]:hover{color:gray}.modal-close-btn svg[data-v-48ac4d54]{transition:.2s}.modal-close-btn:hover svg[data-v-48ac4d54]{transform:rotate(90deg)}.tabs[data-v-48ac4d54]{padding:10px 20px;width:100%}.tab[data-v-48ac4d54]{color:#000;margin-bottom:5px;overflow:hidden;position:relative;width:100%}.tab input[data-v-48ac4d54]{opacity:0;position:absolute;z-index:-1}.tab label[data-v-48ac4d54]{background:#e6e6e6;color:var(--color_text);cursor:pointer;display:block;font-weight:700;line-height:3;padding:0 0 0 1em;position:relative}.tab-content[data-v-48ac4d54]{background:#fff;border:1px solid #e6e6e6;color:#000;max-height:0;overflow:hidden;transition:max-height .35s}.tab-content div[data-v-48ac4d54]{color:#000;margin:1em}.tab input:checked~.tab-content[data-v-48ac4d54]{max-height:100%}.tab label[data-v-48ac4d54]:after{display:block;height:3em;line-height:3;position:absolute;right:0;text-align:center;top:0;transition:all .35s;width:3em}.tab input[type=checkbox]+label[data-v-48ac4d54]:after{color:var(--color_subtext);content:\"+\"}.tab input[type=radio]+label[data-v-48ac4d54]:after{content:\"\\25BC\"}.tab input[type=checkbox]:checked+label[data-v-48ac4d54]:after{transform:rotate(315deg)}.tab input[type=radio]:checked+label[data-v-48ac4d54]:after{transform:rotateX(180deg)}@media (max-width:768px){.contenedor[data-v-48ac4d54]{padding:60px 20px 10px}.top-footer>div[data-v-48ac4d54]{margin-right:30px}.top-footer>div[data-v-48ac4d54]:nth-child(4){margin-right:0}.top-footer[data-v-48ac4d54]{margin-top:23px}}@media (max-width:600px){#modal-toggle:checked~.modal-backdrop[data-v-48ac4d54]{opacity:0}.contenedor[data-v-48ac4d54]{padding:20px 15px 10px}.modal-content[data-v-48ac4d54]{height:100%;left:0;top:0;width:100vw}.left-logo[data-v-48ac4d54],.top-footer[data-v-48ac4d54]{display:none}.separator[data-v-48ac4d54]{max-width:300px}.logo[data-v-48ac4d54]{height:70px;width:141px}.logo2[data-v-48ac4d54]{opacity:.7;width:100px}.under-footer[data-v-48ac4d54]{margin-bottom:28px}.items-movil[data-v-48ac4d54]{align-items:center;display:flex;flex-direction:column;justify-content:space-between;width:100%}.item-movil-center[data-v-48ac4d54]{grid-column-gap:30px;grid-row-gap:15px;display:grid;grid-template-columns:repeat(2,1fr);margin-top:30px;width:100%}.item-movil-center>div[data-v-48ac4d54]:nth-child(2),.item-movil-center>div[data-v-48ac4d54]:nth-child(4),.item-movil-center>div[data-v-48ac4d54]:nth-child(6),.item-movil-center>div[data-v-48ac4d54]:nth-child(8){text-align:right}.footer-item-secciones[data-v-48ac4d54]{grid-row-gap:15px;display:grid;grid-template-columns:repeat(3,1fr);width:100%}.text-movil[data-v-48ac4d54]{color:var(--color_text);font-size:16px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:10px}.item-movil-top[data-v-48ac4d54]{flex-direction:column}.item-movil-top[data-v-48ac4d54],.left-logo-movil[data-v-48ac4d54]{align-items:center;display:flex;justify-content:space-between;width:100%}.left-logo-movil[data-v-48ac4d54]{flex-direction:row}.text-center p[data-v-48ac4d54]{color:var(--color_text);font-size:17px;font-stretch:normal;font-style:normal;letter-spacing:normal;line-height:1.4;margin-top:20px;text-align:center}.input-content[data-v-48ac4d54]{display:flex;flex-direction:column;margin-top:25px;width:100%}.items-icons[data-v-48ac4d54]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.icon[data-v-48ac4d54]{color:var(--color_icon);font-size:18px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:normal;margin-left:7px}.btn[data-v-48ac4d54]{margin-left:0;margin-top:10px;padding:8px 14px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer2/Ko-Footer-2.vue?vue&type=template&id=48ac4d54&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "background",
    staticClass: "wrapper-footer",
    style: _vm.settingByTemplate
  }, [_vm._ssrNode("<div class=\"contenedor\" data-v-48ac4d54>", "</div>", [_vm._ssrNode("<div class=\"top-footer\" data-v-48ac4d54>", "</div>", [_vm._ssrNode("<div class=\"wrapper-logo\" data-v-48ac4d54>", "</div>", [_vm._ssrNode("<div class=\"left-logo\" data-v-48ac4d54>", "</div>", [_c('nuxt-link', {
    staticClass: "content-logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n                `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n              "
    }],
    staticClass: "logo",
    attrs: {
      "alt": "Logo Img"
    }
  })])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div data-v-48ac4d54>", "</div>", [_vm._ssrNode("<p class=\"text-top-bold\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_secciones'))) + "</p> <br data-v-48ac4d54> "), _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-48ac4d54>", "</div>", [item.path ? _c('nuxt-link', {
      staticClass: "text-top",
      attrs: {
        "to": item.path
      }
    }, [_vm._v("\n            " + _vm._s(_vm.$t(`${item.name}`)) + "\n          ")]) : _vm._e(), _vm._ssrNode(" "), item.href && _vm.listArticulos > 0 ? _c('nuxt-link', {
      staticClass: "text-top",
      attrs: {
        "to": item.href
      }
    }, [_vm._v("\n            " + _vm._s(_vm.$t(`${item.name}`)) + "\n          ")]) : _vm._e()], 2);
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div data-v-48ac4d54>", "</div>", [_vm._ssrNode("<p class=\"text-top-bold\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_siguenos'))) + "</p> <br data-v-48ac4d54> "), _vm._l(_vm.links, function (item, index) {
    return _vm._ssrNode("<div class=\"text-icon\" data-v-48ac4d54>", "</div>", [item.link ? _c(item.icon, {
      tag: "div",
      staticClass: "icon"
    }) : _vm._e(), _vm._ssrNode(" " + (item.link ? "<a" + _vm._ssrAttr("href", item.link) + " target=\"_blank\" rel=\"noreferrer noopener\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(item.nombre)) + "</a>" : "<!---->"))], 2);
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div data-v-48ac4d54>", "</div>", [_vm._ssrNode("<p class=\"text-top-bold\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_suscribete'))) + "</p> <p class=\"text-light\" data-v-48ac4d54>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('footer_msg')) + "\n        ") + "</p> <br data-v-48ac4d54> "), _vm._ssrNode("<div class=\"input-content\" data-v-48ac4d54>", "</div>", [_c('ValidationProvider', {
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
            "placeholder": _vm.$t('footer_email'),
            "id": "InputEmailOne"
          },
          domProps: {
            "value": _vm.email
          },
          on: {
            "keyup": function ($event) {
              if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
              return _vm.toSubscribe.apply(null, arguments);
            },
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
  }), _vm._ssrNode(" <button class=\"btn\" data-v-48ac4d54>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('footer_enviar')) + "\n          ") + "</button>")], 2), _vm._ssrNode(" <div class=\"content-checkbox\" data-v-48ac4d54><input type=\"checkbox\" id=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : _vm.checked) + " data-v-48ac4d54> <p class=\"text-checkbox\" data-v-48ac4d54>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('footer_checkbox')) + "\n          ") + "</p></div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"items-movil\" data-v-48ac4d54>", "</div>", [_vm._ssrNode("<div class=\"item-movil-top\" data-v-48ac4d54>", "</div>", [_vm._ssrNode("<div class=\"left-logo-movil\" data-v-48ac4d54>", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`) + " alt=\"Logo Img\" class=\"logo\" data-v-48ac4d54> "), _vm._l(_vm.links, function (item, index) {
    return _vm._ssrNode("<div class=\"items-iconos\"" + _vm._ssrStyle(null, null, {
      display: item.link ? '' : 'none'
    }) + " data-v-48ac4d54>", "</div>", [item.link ? _vm._ssrNode("<a" + _vm._ssrAttr("href", item.link) + " target=\"_blank\" rel=\"noreferrer noopener\" data-v-48ac4d54>", "</a>", [_c(item.icon, {
      tag: "div",
      staticClass: "icon"
    })], 1) : _vm._e()]);
  })], 2), _vm._ssrNode(" <br data-v-48ac4d54> "), _vm._ssrNode("<div class=\"footer-item-secciones\" data-v-48ac4d54>", "</div>", _vm._l(_vm.secciones, function (item, index) {
    return _vm._ssrNode("<div data-v-48ac4d54>", "</div>", [item.path ? _c('nuxt-link', {
      staticClass: "text-top",
      attrs: {
        "to": item.path
      }
    }, [_vm._v("\n              " + _vm._s(_vm.$t(`${item.name}`)) + "\n            ")]) : _vm._e(), _vm._ssrNode(" "), item.href && _vm.listArticulos > 0 ? _c('nuxt-link', {
      staticClass: "text-top",
      attrs: {
        "to": item.href
      }
    }, [_vm._v("\n              " + _vm._s(_vm.$t(`${item.name}`)) + "\n            ")]) : _vm._e()], 2);
  }), 0), _vm._ssrNode(" <div class=\"text-center\" data-v-48ac4d54><p data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_suscribete2'))) + "</p></div> "), _vm._ssrNode("<div class=\"input-content\" data-v-48ac4d54>", "</div>", [_c('ValidationProvider', {
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
            "placeholder": _vm.$t('footer_email'),
            "id": "InputEmailTwo"
          },
          domProps: {
            "value": _vm.email
          },
          on: {
            "keyup": function ($event) {
              if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
              return _vm.toSubscribe.apply(null, arguments);
            },
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
        }, [_vm._v(_vm._s(errors[0] || _vm.register))])];
      }
    }])
  }), _vm._ssrNode(" <button class=\"btn\" data-v-48ac4d54>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('footer_enviar')) + "\n          ") + "</button>")], 2)], 2), _vm._ssrNode(" " + (_vm.currentViews.length ? "<div class=\"item-movil-center\" data-v-48ac4d54>" + _vm._ssrList(_vm.currentViews, function (item, index) {
    return "<div data-v-48ac4d54><p class=\"text-movil\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(item.name)) + "</p></div>";
  }) + "</div>" : "<!---->"))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"under-footer\" data-v-48ac4d54>", "</div>", [_vm._ssrNode((_vm.dataStore.politicas ? "<div class=\"contenedor-term-con\" data-v-48ac4d54><label for=\"modal-toggle\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicasyterminos'))) + "</label></div>" : "<!---->") + " <div class=\"separator\" data-v-48ac4d54></div> <p data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_desarrollado'))) + "</p> "), _vm._ssrNode("<a href=\"https://komercia.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-48ac4d54>", "</a>", [_vm.logo ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`,
      expression: "\n          `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`\n        "
    }],
    staticClass: "logo2",
    attrs: {
      "alt": "Logo Img"
    }
  }) : _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png`,
      expression: "\n          `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png`\n        "
    }],
    staticClass: "logo2",
    attrs: {
      "alt": "Logo Img"
    }
  }, [])])], 2), _vm._ssrNode(" "), _vm.dataStore.politicas ? _vm._ssrNode("<div class=\"modal-container\" data-v-48ac4d54>", "</div>", [_vm._ssrNode("<input type=\"checkbox\" id=\"modal-toggle\" data-v-48ac4d54> <label for=\"modal-toggle\" class=\"modal-backdrop\" data-v-48ac4d54></label> "), _vm._ssrNode("<div class=\"modal-content\" data-v-48ac4d54>", "</div>", [_vm._ssrNode("<div class=\"header-modal\" data-v-48ac4d54>", "</div>", [_vm._ssrNode("<p class=\"text-top-bold\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_condicionesLegales'))) + "</p> "), _vm._ssrNode("<label for=\"modal-toggle\" class=\"modal-close-btn\" data-v-48ac4d54>", "</label>", [_c('close-icon', {
    staticClass: "close-icon-modal"
  })], 1)], 2), _vm._ssrNode(" <div class=\"tabs\" data-v-48ac4d54>" + (this.dataStore.politicas.cambio ? "<div class=\"tab\" data-v-48ac4d54><input id=\"tab-one\" type=\"checkbox\" name=\"tabs\" data-v-48ac4d54> <label for=\"tab-one\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicaCambio'))) + "</label> <div class=\"tab-content\" data-v-48ac4d54><div data-v-48ac4d54>" + _vm._s(this.dataStore.politicas.cambio) + "</div></div></div>" : "<!---->") + " " + (this.dataStore.politicas.datos ? "<div class=\"tab\" data-v-48ac4d54><input id=\"tab-two\" type=\"checkbox\" name=\"tabs\" data-v-48ac4d54> <label for=\"tab-two\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicaTratamientos'))) + "</label> <div class=\"tab-content\" data-v-48ac4d54><div data-v-48ac4d54>" + _vm._s(this.dataStore.politicas.datos) + "</div></div></div>" : "<!---->") + " " + (this.dataStore.politicas.devolucion ? "<div class=\"tab\" data-v-48ac4d54><input id=\"tab-three\" type=\"checkbox\" name=\"tabs\" data-v-48ac4d54> <label for=\"tab-three\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicaDevoluciones'))) + "</label> <div class=\"tab-content\" data-v-48ac4d54><div data-v-48ac4d54>" + _vm._s(this.dataStore.politicas.devolucion) + "</div></div></div>" : "<!---->") + " " + (this.dataStore.politicas.garantia ? "<div class=\"tab\" data-v-48ac4d54><input id=\"tab-four\" type=\"checkbox\" name=\"tabs\" data-v-48ac4d54> <label for=\"tab-four\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicaGarantia'))) + "</label> <div class=\"tab-content\" data-v-48ac4d54><div data-v-48ac4d54>" + _vm._s(this.dataStore.politicas.garantia) + "</div></div></div>" : "<!---->") + " " + (this.dataStore.politicas.envios ? "<div class=\"tab\" data-v-48ac4d54><input id=\"tab-five\" type=\"checkbox\" name=\"tabs\" data-v-48ac4d54> <label for=\"tab-five\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicaEnvios'))) + "</label> <div class=\"tab-content\" data-v-48ac4d54><div data-v-48ac4d54>" + _vm._s(this.dataStore.politicas.envios) + "</div></div></div>" : "<!---->") + " " + (this.dataStore.politicas.pagos ? "<div class=\"tab\" data-v-48ac4d54><input id=\"tab-six\" type=\"checkbox\" name=\"tabs\" data-v-48ac4d54> <label for=\"tab-six\" data-v-48ac4d54>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_politicaPagos'))) + "</label> <div class=\"tab-content\" data-v-48ac4d54><div data-v-48ac4d54>" + _vm._s(this.dataStore.politicas.pagos) + "</div></div></div>" : "<!---->") + "</div>")], 2)], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/footer2/Ko-Footer-2.vue?vue&type=template&id=48ac4d54&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer2/Ko-Footer-2.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko_Footer_2vue_type_script_lang_js_ = ({
  name: 'Ko-Footer-2',
  props: {
    dataStore: Object,
    settingByTemplate: Object
  },
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },
  mounted() {
    if (this.settingByTemplate) {
      this.setLogo();
    }
  },
  data() {
    return {
      errorsCheckbox: 'El campo checkbox y email son obligatorios',
      checked: false,
      outerVisible: false,
      logo: null,
      email: '',
      toSubscribeResponse: false,
      register: '',
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
      secciones: [{
        name: 'footer_inicio',
        path: '/'
      }, {
        name: 'footer_carrito',
        path: '/cart'
      }, {
        name: 'footer_contacto',
        path: '/contacto'
      }, {
        name: 'footer_micompra',
        path: '/micompra'
      }, {
        name: 'header_blog',
        href: '/blog'
      }],
      currentViews: []
    };
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos.length;
    }
  },
  destroyed() {
    this.email = '';
  },
  methods: {
    setLogo() {
      let color = getComputedStyle(this.$refs.background).getPropertyValue('--background_color_1');
      let colorArray = color.split(',');
      let colorInt = parseInt(colorArray[2]);
      if (colorInt > 50) {
        this.logo = true;
      } else {
        this.logo = false;
      }
    },
    toSubscribe() {
      if (this.checked) {
        this.$refs.validate.validate().then(response => {
          if (response) {
            this.toSubscribeResponse = false;
            const params = {
              correo: this.email,
              tienda: this.dataStore.tienda.id_tienda
            };
            external_axios_default.a.post(`${this.$store.state.urlTemplate}/api/suscriptores`, params).then(result => {
              this.register = 'Tu correo ha sido registrado';
              this.$message.success('Tu suscripción esta activa');
              this.email = '';
              this.toSubscribeResponse = true;
            }).catch(result => (this.register = 'Tu correo ya esta registrado', this.$message.success('Tu correo ya esta registrado')));
          }
        }).catch(e => {
          console.log(e);
        });
      }
    }
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook;
      this.links[1].link = this.dataStore.tienda.red_twitter;
      this.links[2].link = this.dataStore.tienda.red_instagram;
      this.links[3].link = this.dataStore.tienda.red_youtube;
      this.links[4].link = this.dataStore.tienda.red_tiktok;
    },
    settingByTemplate(value) {
      let colorArray = value.split(',');
      let colorInt = parseInt(colorArray[2]);
      if (colorInt > 50) {
        this.logo = true;
      } else {
        this.logo = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/footers/footer2/Ko-Footer-2.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer2_Ko_Footer_2vue_type_script_lang_js_ = (Ko_Footer_2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/footer2/Ko-Footer-2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(579)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer2_Ko_Footer_2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "48ac4d54",
  "63e3df88"
  
)

/* harmony default export */ var Ko_Footer_2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=25.js.map