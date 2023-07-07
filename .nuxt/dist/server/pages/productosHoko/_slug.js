exports.ids = [42];
exports.modules = {

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/productosHoko/_slug.vue?vue&type=template&id=458ada3c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(_vm.indexTemplate, _vm._b({
    tag: "component"
  }, 'component', _vm.componentsProps, false));
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/productosHoko/_slug.vue?vue&type=template&id=458ada3c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/productosHoko/_slug.vue?vue&type=script&lang=js&

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    Ko5ProductDetailHoko: () => __webpack_require__.e(/* import() */ 72).then(__webpack_require__.bind(null, 926)),
    Ko9ProductDetailHoko: () => __webpack_require__.e(/* import() */ 73).then(__webpack_require__.bind(null, 927)),
    Ko11ProductDetailHoko: () => __webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(null, 928)),
    KoNoDisponibleHoko: () => __webpack_require__.e(/* import() */ 32).then(__webpack_require__.bind(null, 912))
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  data() {
    return {
      componentMapping: {
        3: 'Ko5ProductDetailHoko',
        5: 'Ko5ProductDetailHoko',
        6: 'KoNoDisponibleHoko',
        7: 'KoNoDisponibleHoko',
        9: 'Ko9ProductDetailHoko',
        10: 'KoNoDisponibleHoko',
        11: 'Ko11ProductDetailHoko',
        13: 'KoNoDisponibleHoko',
        14: 'KoNoDisponibleHoko'
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'settingBase', 'settingByTemplate', 'settingByTemplate7', 'settingByTemplate9', 'settingByTemplate10', 'settingByTemplate11', 'template', 'dataHoko']),
    indexTemplate() {
      let productListComponent = '';
      if (this.componentMapping.hasOwnProperty(this.template)) {
        productListComponent = this.componentMapping[parseInt(this.template)];
      }
      return productListComponent;
    },
    dataStore() {
      return this.$store.state.dataStore;
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts'];
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
        settingByTemplate: this.createSettingByTemplate(this.settingByTemplate, 'settings', 'tipo_letra', this.settingBase),
        settingByTemplate7: this.createNestedSetting(this.settingByTemplate7, ['settingGeneral', 'detailsProduct', 'card'], null),
        settingByTemplate9: this.createNestedSetting(this.settingByTemplate9, ['cardProduct', 'detailsProduct', 'settingGeneral'], null),
        settingByTemplate10: this.createNestedSetting(this.settingByTemplate10, ['cardProduct', 'detailsProduct', 'settingGeneral'], null),
        settingByTemplate11: this.createNestedSetting(this.settingByTemplate11, ['detailsProduct', 'cardProduct', 'settingGeneral'], null)
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
          if (e.data.template == 9) {
            this.$store.commit('SET_CURRENTSETTING09', e.data);
          } else if (e.data.template == 7) {
            this.$store.commit('SET_CURRENTSETTING07', e.data);
          } else if (e.data.template == 11) {
            this.$store.commit('SET_CURRENTSETTING11', e.data);
          } else if (e.data.template == 10) {
            this.$store.commit('SET_CURRENTSETTING10', e.data);
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
// CONCATENATED MODULE: ./pages/productosHoko/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var productosHoko_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/productosHoko/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productosHoko_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "516dc456"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map