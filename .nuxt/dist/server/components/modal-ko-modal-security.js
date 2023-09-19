exports.ids = [37];
exports.modules = {

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("57ae8c80", content, true, context)
};

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_modal_security_vue_vue_type_style_index_0_id_6bb4d2c4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_modal_security_vue_vue_type_style_index_0_id_6bb4d2c4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_modal_security_vue_vue_type_style_index_0_id_6bb4d2c4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_modal_security_vue_vue_type_style_index_0_id_6bb4d2c4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_modal_security_vue_vue_type_style_index_0_id_6bb4d2c4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-security-modal[data-v-6bb4d2c4]{height:100vh;opacity:1;position:fixed;top:0;transition:all .2s ease-in;z-index:99999}.content-security-modal[data-v-6bb4d2c4],.wrapper-security-modal[data-v-6bb4d2c4]{align-items:center;display:flex;justify-content:center;width:100%}.content-security-modal[data-v-6bb4d2c4]{border-radius:5px;box-shadow:0 0 47px 11px rgba(87,87,87,.4);flex-direction:column;max-width:400px;padding:30px 20px}.btn-acceptModal[data-v-6bb4d2c4]{cursor:pointer;max-width:250px;transition:all .2s ease-in}.btn-acceptModal[data-v-6bb4d2c4],.input-text[data-v-6bb4d2c4]{border-radius:5px;font-size:14px;padding:8px 14px;width:100%}.input-text[data-v-6bb4d2c4]{background-color:transparent}.input-text[data-v-6bb4d2c4]::-moz-placeholder{opacity:.7}.input-text[data-v-6bb4d2c4]::placeholder{opacity:.7}.input-text[data-v-6bb4d2c4]:-internal-autofill-selected{background-color:transparent!important;background-image:none!important;color:-internal-light-dark-color(#000,#fff)!important}.input-text[data-v-6bb4d2c4]:-internal-autofill-selected{-webkit-appearance:menulist-button}.input-text[data-v-6bb4d2c4]:active,.input-text[data-v-6bb4d2c4]:focus{border:2px solid hsla(240,5%,52%,.342);outline:0}.inputBox[data-v-6bb4d2c4]{max-width:250px;position:relative;width:100%}#toggle[data-v-6bb4d2c4]{cursor:pointer;position:absolute;right:10px;top:20%}.alert-modal[data-v-6bb4d2c4]{color:red;font-size:14px}@media (max-width:500px){.content-security-modal[data-v-6bb4d2c4]{max-width:350px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal/Ko-modal-security.vue?vue&type=template&id=6bb4d2c4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.dataStore.modal && _vm.dataStore.modal.stateModal === 1 && !_vm.stateModalPwd ? _c('div', {
    staticClass: "wrapper-security-modal",
    style: `background: ${_vm.dataStore.modal && _vm.dataStore.modal.colorBg_1 ? _vm.dataStore.modal.colorBg_1 : 'rgba(5, 5, 5, 0.897)'};`
  }, [_vm._ssrNode("<div class=\"content-security-modal\"" + _vm._ssrStyle(null, `background: ${_vm.dataStore.modal && _vm.dataStore.modal.colorBg_2 ? _vm.dataStore.modal.colorBg_2 : 'White'};`, null) + " data-v-6bb4d2c4>", "</div>", [_vm.dataStore.modal && _vm.dataStore.modal.img ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.dataStore.modal.img, 550, 550),
      expression: "idCloudinary(dataStore.modal.img, 550, 550)"
    }],
    style: `width: ${_vm.dataStore.modal && _vm.dataStore.modal.width_img ? _vm.dataStore.modal.width_img : '120px'};
         margin-bottom: ${_vm.dataStore.modal && _vm.dataStore.modal.marginBottomImg ? _vm.dataStore.modal.marginBottomImg : '10px'};
        `,
    attrs: {
      "alt": "img-modal-block"
    }
  }, []) : _vm._e(), _vm._ssrNode(" <p" + _vm._ssrStyle(null, `color: ${_vm.dataStore.modal && _vm.dataStore.modal.colorTitle ? _vm.dataStore.modal.colorTitle : 'White'};
           font-size: ${_vm.dataStore.modal && _vm.dataStore.modal.fontSizeTitle ? _vm.dataStore.modal.fontSizeTitle : '20px'};
          font-weight: ${_vm.dataStore.modal && _vm.dataStore.modal.fontWeighTitle ? _vm.dataStore.modal.fontWeighTitle : 'Bold'};
          margin-bottom: ${_vm.dataStore.modal && _vm.dataStore.modal.marginBottomTitle ? _vm.dataStore.modal.marginBottomTitle : '15px'};            
          `, null) + " data-v-6bb4d2c4>" + _vm._ssrEscape("\n      " + _vm._s(_vm.dataStore.modal.title) + "\n    ") + "</p> <p" + _vm._ssrStyle(null, `color: ${_vm.dataStore.modal && _vm.dataStore.modal.colorDescription ? _vm.dataStore.modal.colorDescription : 'White'};
          font-size: ${_vm.dataStore.modal && _vm.dataStore.modal.fontSizeDescription ? _vm.dataStore.modal.fontSizeDescription : '16px'};
          font-weight: ${_vm.dataStore.modal && _vm.dataStore.modal.fontWeighDescription ? _vm.dataStore.modal.fontWeighDescription : '400'};
          margin-bottom: ${_vm.dataStore.modal && _vm.dataStore.modal.marginBottomDescription ? _vm.dataStore.modal.marginBottomDescription : '20px'};
          `, null) + " data-v-6bb4d2c4>" + _vm._ssrEscape("\n      " + _vm._s(_vm.dataStore.modal.description) + "\n    ") + "</p> <div class=\"inputBox\" data-v-6bb4d2c4><input id=\"password\" name=\"password\" type=\"password\" placeholder=\"Ingresar contraseña\"" + _vm._ssrAttr("value", _vm.pwd) + " class=\"input-text\"" + _vm._ssrStyle(null, `color: ${_vm.dataStore.modal && _vm.dataStore.modal.colorBorder ? _vm.dataStore.modal.colorBorder : 'Black'}; border: solid 2px ${_vm.dataStore.modal && _vm.dataStore.modal.colorBorder ? _vm.dataStore.modal.colorBorder : 'Black'};`, null) + " data-v-6bb4d2c4> <div id=\"toggle\" data-v-6bb4d2c4><i class=\"el-icon-view\" data-v-6bb4d2c4></i></div></div> " + (_vm.stateMgs ? "<p class=\"alert-modal\" data-v-6bb4d2c4>\n      Contraseña incorrecta, intente de nuevo\n    </p>" : "<!---->") + " <button class=\"btn-acceptModal mt-10\"" + _vm._ssrStyle(null, `color: ${_vm.dataStore.modal && _vm.dataStore.modal.colorTextBtn ? _vm.dataStore.modal.colorTextBtn : 'White'}; 
        background-color: ${_vm.dataStore.modal && _vm.dataStore.modal.colorBgBtn ? _vm.dataStore.modal.colorBgBtn : 'Black'};          
        `, null) + " data-v-6bb4d2c4>\n      Ingresar\n    </button>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/modal/Ko-modal-security.vue?vue&type=template&id=6bb4d2c4&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal/Ko-modal-security.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_modal_securityvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  props: {
    dataStore: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      pwd: null,
      stateMgs: false
    };
  },
  computed: {
    stateModalPwd() {
      return this.$store.state.stateModalPwd;
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate);
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  methods: {
    async closedModal() {
      if (this.dataStore.modal && this.dataStore.modal.password) {
        if (this.pwd) {
          const {
            success
          } = await this.$store.dispatch('GET_ACCESS_CODE', {
            id_tienda: this.dataStore.tienda.id_tienda,
            pwd: this.pwd
          });
          if (success) {
            this.setCookies(this.pwd);
          } else {
            this.passwordStore();
          }
        }
      }
    },
    passwordStore() {
      if (this.dataStore.modal.password == this.pwd) {
        this.$store.commit('SET_STATE_MODAL_PWD', true);
        this.setCookies(this.dataStore.modal.password);
      } else {
        this.stateMgs = true;
      }
    },
    addEventListenerTemplate(e) {
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080')) {
        if (e && e.data && e.data.modalSecurity === true) {
          this.$store.commit('SET_STATE_MODAL_PWD', true);
        }
      }
    },
    switchVisibility() {
      const password = document.getElementById('password');
      if (password.type === 'password') {
        password.setAttribute('type', 'text');
      } else {
        password.setAttribute('type', 'password');
      }
    },
    setCookies(value) {
      var date = new Date();
      date.setTime(date.getTime() + 12 * 60 * 60 * 1000);
      var expires = date.toUTCString();
      document.cookie = `authPwd = ${value}; path=/; expires=${expires};`;
    }
  }
});
// CONCATENATED MODULE: ./components/modal/Ko-modal-security.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_Ko_modal_securityvue_type_script_lang_js_ = (Ko_modal_securityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/modal/Ko-modal-security.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(257)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_Ko_modal_securityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6bb4d2c4",
  "ba0e7c56"
  
)

/* harmony default export */ var Ko_modal_security = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=modal-ko-modal-security.js.map