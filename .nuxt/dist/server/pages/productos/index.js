exports.ids = [45];
exports.modules = {

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/productos/index.vue?vue&type=template&id=2a106e5a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(_vm.indexTemplate, _vm._b({
    tag: "component"
  }, 'component', _vm.componentsProps, false));
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/productos/index.vue?vue&type=template&id=2a106e5a&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/productos/index.vue?vue&type=script&lang=js&

/* harmony default export */ var productosvue_type_script_lang_js_ = ({
  components: {
    K05ProductList: () => __webpack_require__.e(/* import() */ 62).then(__webpack_require__.bind(null, 1063)),
    K07ProductList: () => __webpack_require__.e(/* import() */ 68).then(__webpack_require__.bind(null, 1003)),
    K09ProductList: () => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.bind(null, 1064)),
    K10ProductList: () => __webpack_require__.e(/* import() */ 65).then(__webpack_require__.bind(null, 1004)),
    K11ProductList: () => __webpack_require__.e(/* import() */ 66).then(__webpack_require__.bind(null, 1005)),
    K13ProductList: () => __webpack_require__.e(/* import() */ 81).then(__webpack_require__.bind(null, 1065)),
    K14ProductList: () => __webpack_require__.e(/* import() */ 120).then(__webpack_require__.bind(null, 1066)),
    K15ProductList: () => __webpack_require__.e(/* import() */ 123).then(__webpack_require__.bind(null, 1067))
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  data() {
    return {
      componentMapping: {
        3: 'K05ProductList',
        5: 'K05ProductList',
        6: 'K05ProductList',
        7: 'K07ProductList',
        9: 'K09ProductList',
        10: 'K10ProductList',
        11: 'K11ProductList',
        13: 'K13ProductList',
        14: 'K14ProductList',
        15: 'K15ProductList'
      },
      templateMapping: {
        9: 'SET_CURRENTSETTING09',
        7: 'SET_CURRENTSETTING07',
        11: 'SET_CURRENTSETTING11',
        10: 'SET_CURRENTSETTING10',
        13: 'SET_CURRENTSETTING13',
        14: 'SET_CURRENTSETTING14',
        15: 'SET_CURRENTSETTING15'
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'settingBase', 'settingByTemplate', 'settingByTemplate7', 'settingByTemplate9', 'settingByTemplate10', 'settingByTemplate11', 'settingByTemplate13', 'settingByTemplate14', 'settingByTemplate15', 'template']),
    fullProducts() {
      return this.$store.getters['products/filterProducts'];
    },
    allTags() {
      return this.$store.getters['products/filterTags'];
    },
    indexTemplate() {
      let productListComponent = '';
      if (this.componentMapping.hasOwnProperty(this.template)) {
        productListComponent = this.componentMapping[parseInt(this.template)];
      }
      return productListComponent;
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        allTags: this.allTags && this.allTags.length > 0 ? this.allTags : [],
        settingByTemplate: this.createSettingByTemplate(this.settingByTemplate, 'settings', 'tipo_letra', this.settingBase),
        settingByTemplate7: this.createNestedSetting(this.settingByTemplate7, ['settingGeneral', 'productListFilter', 'card'], null),
        settingByTemplate9: this.createNestedSetting(this.settingByTemplate9, ['cardProduct', 'productListFilter', 'settingGeneral'], null),
        settingByTemplate10: this.createNestedSetting(this.settingByTemplate10, ['cardProduct', 'productListFilter', 'settingGeneral'], null),
        settingByTemplate11: this.createNestedSetting(this.settingByTemplate11, ['productList', 'cardProduct', 'settingGeneral'], null),
        settingByTemplate13: this.createNestedSetting(this.settingByTemplate13, ['productListFilter', 'cardProduct', 'settingGeneral'], null),
        settingByTemplate14: this.createNestedSetting(this.settingByTemplate14, ['listProductsFilter', 'cardProducts', 'settingsGeneral'], null),
        settingByTemplate15: this.createNestedSetting(this.settingByTemplate15, ['listProductsFilter', 'cardProducts', 'settingGeneral'], null)
      };
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate);
  },
  methods: {
    createSettingByTemplate(settingByTemplate, property1, property2, defaultValue) {
      if (settingByTemplate && settingByTemplate[property1] && settingByTemplate[property1][property2]) {
        return settingByTemplate[property1];
      }
      return defaultValue;
    },
    createNestedSetting(setting, properties, defaultValue) {
      if (setting) {
        const nestedSetting = {};
        properties.forEach(property => {
          nestedSetting[property] = setting && setting[property] ? setting[property] : null;
        });
        return [nestedSetting];
      }
      return null;
    },
    addEventListenerTemplate(e) {
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080')) {
        if (e && e.data && e.data.component) {
          const template = e.data.template;
          if (this.templateMapping.hasOwnProperty(template)) {
            const commitAction = this.templateMapping[template];
            this.$store.commit(commitAction, e.data);
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