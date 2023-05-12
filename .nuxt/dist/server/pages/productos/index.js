exports.ids = [36];
exports.modules = {

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/productos/index.vue?vue&type=template&id=78ec9a2c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(_vm.indexTemplate, _vm._b({
    tag: "component"
  }, 'component', _vm.componentsProps, false))], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/productos/index.vue?vue&type=template&id=78ec9a2c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/productos/index.vue?vue&type=script&lang=js&

/* harmony default export */ var productosvue_type_script_lang_js_ = ({
  components: {
    K05ProductList: () => __webpack_require__.e(/* import() */ 58).then(__webpack_require__.bind(null, 917)),
    K07ProductList: () => __webpack_require__.e(/* import() */ 63).then(__webpack_require__.bind(null, 875)),
    K09ProductList: () => __webpack_require__.e(/* import() */ 59).then(__webpack_require__.bind(null, 918)),
    K10ProductList: () => __webpack_require__.e(/* import() */ 60).then(__webpack_require__.bind(null, 876)),
    K11ProductList: () => __webpack_require__.e(/* import() */ 61).then(__webpack_require__.bind(null, 877)),
    K13ProductList: () => __webpack_require__.e(/* import() */ 66).then(__webpack_require__.bind(null, 919))
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'settingBase', 'settingByTemplate', 'settingByTemplate7', 'settingByTemplate9', 'settingByTemplate10', 'settingByTemplate11', 'settingByTemplate13', 'template']),
    fullProducts() {
      return this.$store.getters['products/filterProducts'];
    },
    allTags() {
      return this.$store.getters['products/filterTags'];
    },
    indexTemplate() {
      let productListComponent = '';
      switch (this.template) {
        case 3:
          productListComponent = 'K05ProductList';
          break;
        case 5:
          productListComponent = 'K05ProductList';
          break;
        case 6:
          productListComponent = 'K05ProductList';
          break;
        case 7:
          productListComponent = 'K07ProductList';
          break;
        case 9:
          productListComponent = 'K09ProductList';
          break;
        case 10:
          productListComponent = 'K10ProductList';
          break;
        case 11:
          productListComponent = 'K11ProductList';
          break;
        case 13:
          productListComponent = 'K13ProductList';
          break;
      }
      return productListComponent;
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        allTags: this.allTags && this.allTags.length > 0 ? this.allTags : [],
        settingByTemplate: this.settingByTemplate && this.settingByTemplate.settings && this.settingByTemplate.settings.tipo_letra ? this.settingByTemplate.settings : this.settingBase,
        settingByTemplate7: this.settingByTemplate7 ? [{
          settingGeneral: this.settingByTemplate7 && this.settingByTemplate7.settingGeneral ? this.settingByTemplate7.settingGeneral : null,
          settingK07ProductList: this.settingByTemplate7 && this.settingByTemplate7.productListFilter ? this.settingByTemplate7.productListFilter : null,
          settingKProdutCard: this.settingByTemplate7 && this.settingByTemplate7.card ? this.settingByTemplate7.card : null
        }] : null,
        settingByTemplate9: this.settingByTemplate9 ? [{
          cardProduct: this.settingByTemplate9 && this.settingByTemplate9.cardProduct ? this.settingByTemplate9.cardProduct : null,
          productListFilter: this.settingByTemplate9 && this.settingByTemplate9.productListFilter ? this.settingByTemplate9.productListFilter : null,
          setting9General: this.settingByTemplate9 && this.settingByTemplate9.settingGeneral ? this.settingByTemplate9.settingGeneral : null
        }] : null,
        settingByTemplate10: this.settingByTemplate10 ? [{
          cardProduct: this.settingByTemplate10 && this.settingByTemplate10.cardProduct ? this.settingByTemplate10.cardProduct : null,
          productListFilter: this.settingByTemplate10 && this.settingByTemplate10.productListFilter ? this.settingByTemplate10.productListFilter : null,
          setting10General: this.settingByTemplate10 && this.settingByTemplate10.settingGeneral ? this.settingByTemplate10.settingGeneral : null
        }] : null,
        settingByTemplate11: this.settingByTemplate11 ? [{
          productList: this.settingByTemplate11 && this.settingByTemplate11.productList ? this.settingByTemplate11.productList : null,
          cardProduct: this.settingByTemplate11 && this.settingByTemplate11.cardProduct ? this.settingByTemplate11.cardProduct : null,
          setting11General: this.settingByTemplate11 && this.settingByTemplate11.settingGeneral ? this.settingByTemplate11.settingGeneral : null
        }] : null,
        settingByTemplate13: this.settingByTemplate13 ? [{
          productListFilter: this.settingByTemplate13 && this.settingByTemplate13.productListFilter ? this.settingByTemplate13.productListFilter : null,
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
// CONCATENATED MODULE: ./pages/productos/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_productosvue_type_script_lang_js_ = (productosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/productos/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_productosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "51a0edda"
  
)

/* harmony default export */ var productos = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map