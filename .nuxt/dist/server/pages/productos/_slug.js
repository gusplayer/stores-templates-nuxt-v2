exports.ids = [35];
exports.modules = {

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/productos/_slug.vue?vue&type=template&id=0218edca&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(_vm.indexTemplate, _vm._b({
    tag: "component"
  }, 'component', _vm.componentsProps, false))], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/productos/_slug.vue?vue&type=template&id=0218edca&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/productos/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    Ko5ProductDetail: () => __webpack_require__.e(/* import() */ 51).then(__webpack_require__.bind(null, 851)),
    Ko7ProductDetail: () => __webpack_require__.e(/* import() */ 54).then(__webpack_require__.bind(null, 848)),
    Ko9ProductDetail: () => __webpack_require__.e(/* import() */ 55).then(__webpack_require__.bind(null, 852)),
    Ko10ProductDetail: () => __webpack_require__.e(/* import() */ 56).then(__webpack_require__.bind(null, 853)),
    Ko11ProductDetail: () => __webpack_require__.e(/* import() */ 52).then(__webpack_require__.bind(null, 849)),
    Ko13ProductDetail: () => __webpack_require__.e(/* import() */ 53).then(__webpack_require__.bind(null, 850))
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'settingBase', 'settingByTemplate', 'settingByTemplate7', 'settingByTemplate9', 'settingByTemplate10', 'settingByTemplate11', 'settingByTemplate13', 'template']),
    fullProducts() {
      return this.$store.getters['products/allProduct'];
    },
    indexTemplate() {
      let productListComponent = '';
      switch (this.template) {
        case 3:
          productListComponent = 'Ko5ProductDetail';
          break;
        case 5:
          productListComponent = 'Ko5ProductDetail';
          break;
        case 6:
          productListComponent = 'Ko5ProductDetail';
          break;
        case 7:
          productListComponent = 'Ko7ProductDetail';
          break;
        case 9:
          productListComponent = 'Ko9ProductDetail';
          break;
        case 10:
          productListComponent = 'Ko10ProductDetail';
          break;
        case 11:
          productListComponent = 'Ko11ProductDetail';
          break;
        case 13:
          productListComponent = 'Ko13ProductDetail';
          break;
      }
      return productListComponent;
    },
    whatsapp() {
      return this.dataStore.tienda.whatsapp;
    },
    envios() {
      return this.dataStore.medios_envio;
    },
    integracioneStore() {
      return this.$store.state.analytics_tagmanager;
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        productsData: this.fullProducts,
        whatsapp: this.whatsapp,
        envios: this.envios,
        facebookPixel: this.integracioneStore,
        settingByTemplate: this.settingByTemplate && this.settingByTemplate.settings && this.settingByTemplate.settings.tipo_letra ? this.settingByTemplate.settings : this.settingBase,
        settingByTemplate7: this.settingByTemplate7 ? [{
          settingGeneral: this.settingByTemplate7 && this.settingByTemplate7.settingGeneral ? this.settingByTemplate7.settingGeneral : null,
          settingK07DetailsProduct: this.settingByTemplate7 && this.settingByTemplate7.detailsProduct ? this.settingByTemplate7.detailsProduct : null,
          settingKProdutCard: this.settingByTemplate7 && this.settingByTemplate7.card ? this.settingByTemplate7.card : null
        }] : null,
        settingByTemplate9: this.settingByTemplate9 ? [{
          cardProduct: this.settingByTemplate9 && this.settingByTemplate9.cardProduct ? this.settingByTemplate9.cardProduct : null,
          detailsProduct: this.settingByTemplate9 && this.settingByTemplate9.detailsProduct ? this.settingByTemplate9.detailsProduct : null,
          setting9General: this.settingByTemplate9 && this.settingByTemplate9.settingGeneral ? this.settingByTemplate9.settingGeneral : null
        }] : null,
        settingByTemplate10: this.settingByTemplate10 ? [{
          cardProduct: this.settingByTemplate10 && this.settingByTemplate10.cardProduct ? this.settingByTemplate10.cardProduct : null,
          detailsProduct: this.settingByTemplate10 && this.settingByTemplate10.detailsProduct ? this.settingByTemplate10.detailsProduct : null,
          setting10General: this.settingByTemplate10 && this.settingByTemplate10.settingGeneral ? this.settingByTemplate10.settingGeneral : null
        }] : null,
        settingByTemplate11: this.settingByTemplate11 ? [{
          detailsProduct: this.settingByTemplate11 && this.settingByTemplate11.detailsProduct ? this.settingByTemplate11.detailsProduct : null,
          cardProduct: this.settingByTemplate11 && this.settingByTemplate11.cardProduct ? this.settingByTemplate11.cardProduct : null,
          setting11General: this.settingByTemplate11 && this.settingByTemplate11.settingGeneral ? this.settingByTemplate11.settingGeneral : null
        }] : null,
        settingByTemplate13: this.settingByTemplate13 ? [{
          detailsProduct: this.settingByTemplate13 && this.settingByTemplate13.detailsProduct ? this.settingByTemplate13.detailsProduct : null,
          cardProduct: this.settingByTemplate13 && this.settingByTemplate13.cardProduct ? this.settingByTemplate13.cardProduct : null,
          setting13General: this.settingByTemplate13 && this.settingByTemplate13.settingGeneral ? this.settingByTemplate13.settingGeneral : null
        }] : null
      };
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate);
  },
  methods: {
    addEventListenerTemplate(e) {
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080') || e.origin.includes('https://panel.komercia.xyz')) {
        if (e && e.data && e.data.component) {
          if (e.data.template == 9) {
            this.$store.commit('SET_CURRENTSETTING09', e.data);
          } else if (e.data.template == 7) {
            this.$store.commit('SET_CURRENTSETTING07', e.data);
          } else if (e.data.template == 11) {
            this.$store.commit('SET_CURRENTSETTING11', e.data);
          } else if (e.data.template == 10) {
            this.$store.commit('SET_CURRENTSETTING10', e.data);
          } else if (e.data.template == 13) {
            this.$store.commit('SET_CURRENTSETTING13', e.data);
          }
        } else if (e && e.data && e.data.returnHome == true) {
          this.$router.push({
            path: '/'
          });
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/productos/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var productos_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/productos/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productos_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "550e306a"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map