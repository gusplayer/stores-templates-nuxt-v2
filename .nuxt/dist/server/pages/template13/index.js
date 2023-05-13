exports.ids = [4];
exports.modules = {

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(474);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("35e2d840", content, true, context)
};

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d59cfcae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(269);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d59cfcae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d59cfcae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d59cfcae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d59cfcae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-d59cfcae]{font-family:var(--font-style-1)!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/template13/index.vue?vue&type=template&id=d59cfcae&scoped=true&
=======
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/template13/index.vue?vue&type=template&id=d59cfcae&scoped=true&
>>>>>>> 8fc64a3b0afecc12b7dc65aa7021e406232a9a48
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate13 ? _c('div', {
    style: [{
      '--font-style-1': this.settingByTemplate13.settingGeneral && this.settingByTemplate13.settingGeneral.fount_1 ? this.settingByTemplate13.settingGeneral.fount_1 : 'Poppins'
    }]
  }, [_vm.settingByTemplate13 && _vm.settingByTemplate13.banner && _vm.settingByTemplate13.banner.visible ? _c('ko-Banner', _vm._b({
    key: _vm.bannerRendering,
    attrs: {
      "id": "kBannerX"
    }
  }, 'ko-Banner', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate13 && _vm.settingByTemplate13.productList && _vm.settingByTemplate13.productList.visible ? _c('ko-ProductList', _vm._b({
    attrs: {
      "id": "kListX"
    }
  }, 'ko-ProductList', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate13 && _vm.settingByTemplate13.infoText && _vm.settingByTemplate13.infoText.visible ? _c('ko-InfoText', _vm._b({
    attrs: {
      "id": "kInfoTextX"
    }
  }, 'ko-InfoText', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate13 && _vm.settingByTemplate13.information && _vm.settingByTemplate13.information.visible ? _c('ko-Information', _vm._b({
    attrs: {
      "id": "kInformationX"
    }
  }, 'ko-Information', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate13 && _vm.settingByTemplate13.newsletter && _vm.settingByTemplate13.newsletter.visible ? _c('ko-Newsletter', _vm._b({
    attrs: {
      "id": "kNewsLetterX"
    }
  }, 'ko-Newsletter', _vm.componentsProps, false)) : _vm._e()], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/template13/index.vue?vue&type=template&id=d59cfcae&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/template13/index.vue?vue&type=script&lang=js&

/* harmony default export */ var template13vue_type_script_lang_js_ = ({
  layout: 'default',
  name: 'Ko-template13',
  components: {
    koBanner: () => __webpack_require__.e(/* import() */ 112).then(__webpack_require__.bind(null, 936)),
    // KoProductFavoritos: () =>
    //   import('../../components/template13/ko-BannerFooter-1'),
    KoProductList: () => __webpack_require__.e(/* import() */ 73).then(__webpack_require__.bind(null, 937)),
    // KoProductListHoko: () =>
    //   import('../../components/template13/Ko-ProductFavoritosHoko.vue'),
    KoInformation: () => __webpack_require__.e(/* import() */ 111).then(__webpack_require__.bind(null, 938)),
    KoInfoText: () => __webpack_require__.e(/* import() */ 110).then(__webpack_require__.bind(null, 939)),
    KoNewsletter: () => __webpack_require__.e(/* import() */ 109).then(__webpack_require__.bind(null, 940))
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  data() {
    return {
      bannerRendering: 0
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'listArticulos', 'settingByTemplate13', 'dataHoko']),
    fullProducts() {
      return this.$store.getters['products/allProduct'];
    },
    componentsProps() {
      var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3, _this$settingByTempla4, _this$settingByTempla5, _this$settingByTempla6, _this$settingByTempla7, _this$settingByTempla8, _this$settingByTempla9, _this$settingByTempla10, _this$settingByTempla11, _this$settingByTempla12, _this$settingByTempla13, _this$settingByTempla14;
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral: (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate13) === null || _this$settingByTempla2 === void 0 ? void 0 : _this$settingByTempla2.settingGeneral) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : null,
        banner: (_this$settingByTempla3 = (_this$settingByTempla4 = this.settingByTemplate13) === null || _this$settingByTempla4 === void 0 ? void 0 : _this$settingByTempla4.banner) !== null && _this$settingByTempla3 !== void 0 ? _this$settingByTempla3 : null,
        productList: (_this$settingByTempla5 = (_this$settingByTempla6 = this.settingByTemplate13) === null || _this$settingByTempla6 === void 0 ? void 0 : _this$settingByTempla6.productList) !== null && _this$settingByTempla5 !== void 0 ? _this$settingByTempla5 : null,
        information: (_this$settingByTempla7 = (_this$settingByTempla8 = this.settingByTemplate13) === null || _this$settingByTempla8 === void 0 ? void 0 : _this$settingByTempla8.information) !== null && _this$settingByTempla7 !== void 0 ? _this$settingByTempla7 : null,
        infoText: (_this$settingByTempla9 = (_this$settingByTempla10 = this.settingByTemplate13) === null || _this$settingByTempla10 === void 0 ? void 0 : _this$settingByTempla10.infoText) !== null && _this$settingByTempla9 !== void 0 ? _this$settingByTempla9 : null,
        cardProduct: (_this$settingByTempla11 = (_this$settingByTempla12 = this.settingByTemplate13) === null || _this$settingByTempla12 === void 0 ? void 0 : _this$settingByTempla12.cardProduct) !== null && _this$settingByTempla11 !== void 0 ? _this$settingByTempla11 : null,
        newsletter: (_this$settingByTempla13 = (_this$settingByTempla14 = this.settingByTemplate13) === null || _this$settingByTempla14 === void 0 ? void 0 : _this$settingByTempla14.newsletter) !== null && _this$settingByTempla13 !== void 0 ? _this$settingByTempla13 : null
      };
    },
    dataHoko() {
      return this.$store.state.dataHoko;
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate);
  },
  methods: {
    addEventListenerTemplate(e) {
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080') || e.origin.includes('https://panel.komercia.xyz')) {
        if (e && e.data && e.data.component && e.data.template == 13) {
          this.$store.commit('SET_CURRENTSETTING13', e.data);
          if (e.data.component == 'banner') {
            this.bannerRendering += 1;
            // console.log(this.bannerRendering)
          }
        } else if (e && e.data && e.data.componentToEdit && e.data.template == 13) {
          switch (e.data.componentToEdit) {
            case 'settingGeneral':
              this.moverseA('kBannerX');
              break;
            case 'header':
              this.moverseA('kBannerX');
              break;
            case 'footer':
              this.moverseA('kNewsLetterX');
              break;
            case 'banner':
              this.moverseA('kBannerX');
              break;
            case 'cardProduct':
              this.moverseA('kListX');
              break;
            case 'newsLetter':
              this.moverseA('kNewsLetterX');
              break;
            case 'information':
              this.moverseA('kInformationX');
              break;
            case 'infoText':
              this.moverseA('kInfoTextX');
              break;
            case 'productList':
              this.moverseA('kListX');
              break;
            case 'banner':
              this.moverseA('kBannerX');
              break;
            case 'detailsProduct':
              if (this.fullProducts) {
                this.$router.push({
                  path: '/productos/' + this.fullProducts[0].slug
                });
              }
              break;
            case 'productListFilter':
              this.$router.push({
                path: '/productos'
              });
              break;
            case 'contact':
              this.$router.push({
                path: '/contacto'
              });
              break;
          }
        } else {
          if (e && e.data && e.data.returnHome == true) {
            this.$router.push({
              path: '/'
            });
          }
        }
      }
    },
    moverseA(idDelElemento) {
      location.hash = '#' + idDelElemento;
    }
  }
});
// CONCATENATED MODULE: ./pages/template13/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_template13vue_type_script_lang_js_ = (template13vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/template13/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(473)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_template13vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d59cfcae",
  "4358fba3"
  
)

/* harmony default export */ var template13 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map