exports.ids = [20];
exports.modules = {

/***/ 1093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/template99/index.vue?vue&type=template&id=5db5bd76&scoped=true&
var render = function render() {
  var _vm$categorias;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex flex-col justify-center bg-slate-100 items-center"
  }, [_c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "w-full max-w-[900px] shadow-md bg-white-white container-home"
  }, [_c(_vm.indexTema, _vm._b({
    tag: "component",
    attrs: {
      "id": "KHeaderX"
    }
  }, 'component', _vm.componentsProps, false)), _vm._ssrNode(" "), ((_vm$categorias = _vm.categorias) === null || _vm$categorias === void 0 ? void 0 : _vm$categorias.length) > 0 ? _c(_vm.indexCategory, _vm._b({
    tag: "component",
    attrs: {
      "id": "KHeaderX"
    }
  }, 'component', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.stateBanner ? _c('KProductFavoritos', _vm._b({
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, 'KProductFavoritos', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _c(_vm.indexList, _vm._b({
    tag: "component",
    attrs: {
      "id": "KListX"
    }
  }, 'component', _vm.componentsProps, false)), _vm._ssrNode(" "), _c('KFooterWaLogo', _vm._b({
    attrs: {
      "id": "KfooterX"
    }
  }, 'KFooterWaLogo', _vm.componentsProps, false)), _vm._ssrNode(" "), _c('KFooterWa', _vm._b({
    attrs: {
      "id": "KfooterX"
    }
  }, 'KFooterWa', _vm.componentsProps, false)), _vm._ssrNode(" "), _c('WCountry', {
    attrs: {
      "data-store": _vm.dataStore,
      "value-wa": true
    }
  })], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/template99/index.vue?vue&type=template&id=5db5bd76&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/template99/index.vue?vue&type=script&lang=js&

/* harmony default export */ var template99vue_type_script_lang_js_ = ({
  name: 'TemplateWhatsApp',
  components: {
    KoHeaderWp1: () => __webpack_require__.e(/* import() */ 32).then(__webpack_require__.bind(null, 1249)),
    KoHeaderWp2: () => __webpack_require__.e(/* import() */ 33).then(__webpack_require__.bind(null, 1250)),
    KoHeaderWp3: () => __webpack_require__.e(/* import() */ 34).then(__webpack_require__.bind(null, 1251)),
    KCategory01: () => __webpack_require__.e(/* import() */ 203).then(__webpack_require__.bind(null, 1308)),
    KCategory02: () => __webpack_require__.e(/* import() */ 207).then(__webpack_require__.bind(null, 1312)),
    KCategory03: () => __webpack_require__.e(/* import() */ 209).then(__webpack_require__.bind(null, 1314)),
    KCategory04: () => __webpack_require__.e(/* import() */ 200).then(__webpack_require__.bind(null, 1307)),
    KProductFavoritos: () => __webpack_require__.e(/* import() */ 204).then(__webpack_require__.bind(null, 1309)),
    KProductList: () => __webpack_require__.e(/* import() */ 205).then(__webpack_require__.bind(null, 1310)),
    KProductList2: () => __webpack_require__.e(/* import() */ 206).then(__webpack_require__.bind(null, 1311)),
    KProductList3: () => __webpack_require__.e(/* import() */ 208).then(__webpack_require__.bind(null, 1313)),
    KFooterWaLogo: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 1316)),
    KFooterWa: () => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, 1317)),
    WCountry: () => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 1229))
  },
  layout: 'wa',
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'stateBanner', 'settingByTemplate', 'settingBaseWapi']),
    dataStore() {
      return this.$store.state.dataStore;
    },
    indexTema() {
      var _this$settingByTempla;
      let componentTemplate = '';
      if ((_this$settingByTempla = this.settingByTemplate) !== null && _this$settingByTempla !== void 0 && _this$settingByTempla.tema) {
        switch (this.settingByTemplate.tema) {
          case 1:
            componentTemplate = 'KoHeaderWp1';
            break;
          case 2:
            componentTemplate = 'KoHeaderWp2';
            break;
          case 3:
            componentTemplate = 'KoHeaderWp3';
            break;
        }
      } else {
        return componentTemplate = 'KoHeaderWp1';
      }
      return componentTemplate;
    },
    indexCategory() {
      let componentTemplate = '';
      if (this.settingByTemplate && this.settingByTemplate.estilo_categorias) {
        switch (this.settingByTemplate.estilo_categorias) {
          case 1:
            componentTemplate = 'KCategory01';
            break;
          case 2:
            componentTemplate = 'KCategory02';
            break;
          case 3:
            componentTemplate = 'KCategory03';
            break;
          case 4:
            componentTemplate = 'KCategory04';
            break;
        }
      } else {
        return componentTemplate = 'KCategory01';
      }
      return componentTemplate;
    },
    indexList() {
      let componentTemplate = '';
      if (this.settingByTemplate && this.settingByTemplate.estilo_productos) {
        switch (this.settingByTemplate.estilo_productos) {
          case 3:
            componentTemplate = 'KProductList';
            break;
          case 2:
            componentTemplate = 'KProductList2';
            break;
          case 1:
            componentTemplate = 'KProductList3';
            break;
        }
      } else {
        return componentTemplate = 'KProductList3';
      }
      return componentTemplate;
    },
    loading() {
      if (this.dataStore.length) {
        return true;
      } else {
        return false;
      }
    },
    categorias() {
      return this.dataStore.categorias;
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts'];
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingByTemplate: this.settingByTemplate && this.settingByTemplate.tema && this.settingByTemplate.estilo_categorias ? this.settingByTemplate : this.settingBaseWapi
      };
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
    addEventListenerTemplate(e) {
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080')) {
        if (e && e.data && e.data.component) {
          this.$store.commit('SET_CURRENTSETTING99', e.data);
          switch (e.data.component) {
            case 'Banner':
              this.moverseA('KHeaderX');
              this.$store.commit('SET_OPEN_ORDER', false);
              break;
            case 'Logo':
              this.moverseA('KHeaderX');
              this.$store.commit('SET_OPEN_ORDER', false);
              break;
            case 'mensaje_principal':
              this.moverseA('KHeaderX');
              this.$store.commit('SET_OPEN_ORDER', false);
              break;
            case 'descripcion':
              this.moverseA('KHeaderX');
              this.$store.commit('SET_OPEN_ORDER', false);
              break;
            case 'tema':
              this.moverseA('KHeaderX');
              this.$store.commit('SET_OPEN_ORDER', false);
              break;
            case 'estilo_categorias':
              this.moverseA('KHeaderX');
              this.$store.commit('SET_OPEN_ORDER', false);
              break;
            case 'estilo_productos':
              this.moverseA('KListX');
              this.$store.commit('SET_OPEN_ORDER', false);
              break;
            case 'pago_online':
              this.moverseA('KHeaderX');
              if (e.data.setting.pago_online == 1) {
                this.$store.commit('SET_OPEN_ORDER', true);
              } else {
                this.$store.commit('SET_OPEN_ORDER', false);
              }
              break;
            case 'color_primario':
              this.moverseA('KListX');
              this.$store.commit('SET_OPEN_ORDER', false);
              break;
            case 'color_secundario':
              this.moverseA('KListX');
              this.$store.commit('SET_OPEN_ORDER', false);
              break;
            case 'color_icon':
              this.moverseA('KListX');
              this.$store.commit('SET_OPEN_ORDER', false);
              break;
            case 'footer':
              this.moverseA('KfooterX');
              this.$store.commit('SET_OPEN_ORDER', false);
              break;
          }
        }
        if (e && e.data && e.data.checkout) {
          if (e.data.setting) {
            this.$store.state.dataStore.whatsapp_checkout.configuration = e.data.setting;
          }
          this.$store.commit('SET_OPEN_ORDER', true);
          this.$store.commit('SET_STATE_FORM_MODAL_WHATS_APP', true);
        }
      }
    },
    moverseA(idDelElemento) {
      location.hash = '#' + idDelElemento;
    }
  }
});
// CONCATENATED MODULE: ./pages/template99/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_template99vue_type_script_lang_js_ = (template99vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/template99/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(618)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_template99vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5db5bd76",
  "1eb7332e"
  
)

/* harmony default export */ var template99 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(619);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6205d192", content, true, context)
};

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5db5bd76_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5db5bd76_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5db5bd76_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5db5bd76_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5db5bd76_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-5db5bd76]{font-family:\"Poppins\",sans-serif!important}.container-home[data-v-5db5bd76]{transition:all .3s cubic-bezier(.25,.8,.25,1)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map