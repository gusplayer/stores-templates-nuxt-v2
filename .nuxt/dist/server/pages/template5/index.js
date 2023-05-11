exports.ids = [5];
exports.modules = {

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/template5/index.vue?vue&type=template&id=2c3821b0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "home",
    style: [{
      '--font-style': this.settingByTemplate && this.settingByTemplate.settings && this.settingByTemplate.settings.tipo_letra ? this.settingByTemplate.settings.tipo_letra : 'Roboto'
    }, this.settingByTemplate && this.settingByTemplate.settings ? this.settingByTemplate.settings : this.settingBase]
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

// CONCATENATED MODULE: ./pages/template5/index.vue?vue&type=template&id=2c3821b0&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/template5/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var template5vue_type_script_lang_js_ = ({
  layout: 'default',
  name: 'Ko-template5',
  components: {
    kBanner: () => __webpack_require__.e(/* import() */ 116).then(__webpack_require__.bind(null, 457)),
    kBannerFooter: () => __webpack_require__.e(/* import() */ 117).then(__webpack_require__.bind(null, 458)),
    KProductFavoritos: () => __webpack_require__.e(/* import() */ 62).then(__webpack_require__.bind(null, 223)),
    KProductList: () => __webpack_require__.e(/* import() */ 67).then(__webpack_require__.bind(null, 455)),
    KProductListHoko: () => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.bind(null, 880)),
    KNewsletter: () => __webpack_require__.e(/* import() */ 115).then(__webpack_require__.bind(null, 456)),
    KComponent360: () => __webpack_require__.e(/* import() */ 114).then(__webpack_require__.bind(null, 941))
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
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080') || e.origin.includes('https://panel.komercia.xyz')) {
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