exports.ids = [6];
exports.modules = {

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/template5/index.vue?vue&type=template&id=b69d1400&
var render = function render() {
  var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3, _this$settingByTempla4, _this$settingByTempla5;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    style: [{
      '--font-style': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.settings) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.tipo_letra) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Roboto'
    }, (_this$settingByTempla4 = (_this$settingByTempla5 = this.settingByTemplate) === null || _this$settingByTempla5 === void 0 ? void 0 : _this$settingByTempla5.settings) !== null && _this$settingByTempla4 !== void 0 ? _this$settingByTempla4 : this.settingBase]
  }, [this.stateBanner ? _c('kBanner', {
    attrs: {
      "id": "KHeaderX"
    }
  }) : _vm._e(), _vm._ssrNode(" "), this.stateBanner ? _c('KComponent360') : _vm._e(), _vm._ssrNode(" "), this.stateBanner ? _c('KProductFavoritos') : _vm._e(), _vm._ssrNode(" "), _vm.dataHoko && _vm.dataHoko.statehoko == 1 && this.stateBanner ? _c('KProductListHoko', {
    attrs: {
      "dataStore": _vm.dataStore,
      "id": "KProductX"
    }
  }) : _vm._e(), _vm._ssrNode(" "), _c('KProductList', {
    attrs: {
      "dataStore": _vm.dataStore,
      "fullProducts": _vm.fullProducts,
      "id": "KProductX"
    }
  }), _vm._ssrNode(" "), _c('kBannerFooter', {
    attrs: {
      "id": "KFooterX"
    }
  }), _vm._ssrNode(" "), _c('KNewsletter', {
    attrs: {
      "dataStore": _vm.dataStore
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/template5/index.vue?vue&type=template&id=b69d1400&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/template5/index.vue?vue&type=script&lang=js&

/* harmony default export */ var template5vue_type_script_lang_js_ = ({
  layout: 'default',
  name: 'Ko-template5',
  components: {
    kBanner: () => __webpack_require__.e(/* import() */ 169).then(__webpack_require__.bind(null, 484)),
    kBannerFooter: () => __webpack_require__.e(/* import() */ 170).then(__webpack_require__.bind(null, 485)),
    KProductFavoritos: () => __webpack_require__.e(/* import() */ 63).then(__webpack_require__.bind(null, 226)),
    KProductList: () => __webpack_require__.e(/* import() */ 77).then(__webpack_require__.bind(null, 482)),
    KProductListHoko: () => __webpack_require__.e(/* import() */ 72).then(__webpack_require__.bind(null, 943)),
    KNewsletter: () => __webpack_require__.e(/* import() */ 168).then(__webpack_require__.bind(null, 483)),
    KComponent360: () => __webpack_require__.e(/* import() */ 167).then(__webpack_require__.bind(null, 1031))
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['template', 'dataStore', 'settingBase', 'stateBanner', 'settingByTemplate', 'dataHoko']),
    fullProducts() {
      return this.$store.getters['products/filterProducts'];
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate);
  },
  methods: {
    addEventListenerTemplate(e) {
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080')) {
        if (e && e.data && e.data.componentToEdit) {
          // console.log(e.data)
          this.$store.commit('SET_CURRENTSETTING5', e.data);
          switch (e.data.componentToEdit) {
            case 'header':
              this.moverseA('KHeaderX');
              break;
            case 'productList':
              this.moverseA('KProductX');
              break;
            case 'footer':
              this.moverseA('KFooterX');
              break;
          }
        }
      }
    },
    moverseA(idDelElemento) {
      location.hash = '#' + idDelElemento;
    }
  }
});
// CONCATENATED MODULE: ./pages/template5/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_template5vue_type_script_lang_js_ = (template5vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/template5/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_template5vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "89a5a20a"
  
)

/* harmony default export */ var template5 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map