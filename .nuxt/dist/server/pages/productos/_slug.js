exports.ids = [334];
exports.modules = {

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/productos/_slug.vue?vue&type=template&id=06433713&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(_vm.indexTemplate, _vm._b({
    tag: "component"
  }, 'component', _vm.componentsProps, false));
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/productos/_slug.vue?vue&type=template&id=06433713&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/productos/_slug.vue?vue&type=script&lang=js&

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    Ko5ProductDetail: () => __webpack_require__.e(/* import() */ 138).then(__webpack_require__.bind(null, 1213)),
    Ko7ProductDetail: () => __webpack_require__.e(/* import() */ 154).then(__webpack_require__.bind(null, 1228)),
    Ko9ProductDetail: () => __webpack_require__.e(/* import() */ 164).then(__webpack_require__.bind(null, 1235)),
    Ko10ProductDetail: () => __webpack_require__.e(/* import() */ 43).then(__webpack_require__.bind(null, 1135)),
    Ko11ProductDetail: () => __webpack_require__.e(/* import() */ 55).then(__webpack_require__.bind(null, 1145)),
    Ko13ProductDetail: () => __webpack_require__.e(/* import() */ 76).then(__webpack_require__.bind(null, 1163)),
    Ko14ProductDetail: () => __webpack_require__.e(/* import() */ 86).then(__webpack_require__.bind(null, 1172)),
    Ko15ProductDetail: () => __webpack_require__.e(/* import() */ 101).then(__webpack_require__.bind(null, 1182)),
    Ko16ProductDetail: () => __webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(null, 1204))
  },
  data() {
    return {
      componentMapping: {
        3: 'Ko5ProductDetail',
        5: 'Ko5ProductDetail',
        6: 'Ko5ProductDetail',
        7: 'Ko7ProductDetail',
        9: 'Ko9ProductDetail',
        10: 'Ko10ProductDetail',
        11: 'Ko11ProductDetail',
        13: 'Ko13ProductDetail',
        14: 'Ko14ProductDetail',
        15: 'Ko15ProductDetail',
        16: 'Ko16ProductDetail'
      },
      templateMapping: {
        9: 'SET_CURRENTSETTING09',
        7: 'SET_CURRENTSETTING07',
        11: 'SET_CURRENTSETTING11',
        10: 'SET_CURRENTSETTING10',
        13: 'SET_CURRENTSETTING13',
        14: 'SET_CURRENTSETTING14',
        15: 'SET_CURRENTSETTING15',
        16: 'SET_CURRENTSETTING16'
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'settingBase', 'settingByTemplate', 'settingByTemplate7', 'settingByTemplate9', 'settingByTemplate10', 'settingByTemplate11', 'settingByTemplate13', 'settingByTemplate14', 'settingByTemplate15', 'settingByTemplate16', 'template']),
    fullProducts() {
      return this.$store.getters['products/allProduct'];
    },
    indexTemplate() {
      let productListComponent = '';
      // eslint-disable-next-line no-prototype-builtins
      if (this.componentMapping.hasOwnProperty(this.template)) {
        productListComponent = this.componentMapping[parseInt(this.template)];
      }
      return productListComponent;
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        productsData: this.fullProducts,
        whatsapp: this.dataStore.tienda.whatsapp,
        envios: this.dataStore.medios_envio,
        facebookPixel: this.$store.state.analytics_tagmanager,
        settingByTemplate: this.createSettingByTemplate(this.settingByTemplate, 'settings', 'tipo_letra', this.settingBase),
        settingByTemplate7: this.createNestedSetting(this.settingByTemplate7, ['settingGeneral', 'detailsProduct', 'card'], null),
        settingByTemplate9: this.createNestedSetting(this.settingByTemplate9, ['cardProduct', 'detailsProduct', 'settingGeneral'], null),
        settingByTemplate10: this.createNestedSetting(this.settingByTemplate10, ['cardProduct', 'detailsProduct', 'settingGeneral'], null),
        settingByTemplate11: this.createNestedSetting(this.settingByTemplate11, ['detailsProduct', 'cardProduct', 'settingGeneral'], null),
        settingByTemplate13: this.createNestedSetting(this.settingByTemplate13, ['detailsProduct', 'cardProduct', 'settingGeneral'], null),
        settingByTemplate14: this.createNestedSetting(this.settingByTemplate14, ['detailsProducts', 'cardProducts', 'settingsGeneral'], null),
        settingByTemplate15: this.createNestedSetting(this.settingByTemplate15, ['detailsProducts', 'cardProducts', 'settingGeneral'], null),
        settingByTemplate16: this.createNestedSetting(this.settingByTemplate16, ['detailsProducts', 'cardProducts', 'settingsGeneral'], null)
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
    createSettingByTemplate(settingByTemplate, property1, property2, defaultValue) {
      if (settingByTemplate && settingByTemplate[property1] && settingByTemplate[property1][property2]) {
        return settingByTemplate[property1];
      }
      return defaultValue;
    },
    // eslint-disable-next-line no-unused-vars
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
          // eslint-disable-next-line no-prototype-builtins
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
// CONCATENATED MODULE: ./pages/productos/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var productos_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/productos/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productos_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b396338"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map