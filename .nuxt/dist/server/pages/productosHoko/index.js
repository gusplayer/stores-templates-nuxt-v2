exports.ids = [43];
exports.modules = {

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/productosHoko/index.vue?vue&type=template&id=d7918620&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(_vm.indexTemplate, _vm._b({
    tag: "component"
  }, 'component', _vm.componentsProps, false));
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/productosHoko/index.vue?vue&type=template&id=d7918620&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/productosHoko/index.vue?vue&type=script&lang=js&

/* harmony default export */ var productosHokovue_type_script_lang_js_ = ({
  components: {
    K05ProductListHoko: () => __webpack_require__.e(/* import() */ 91).then(__webpack_require__.bind(null, 1000)),
    K09ProductListHoko: () => __webpack_require__.e(/* import() */ 70).then(__webpack_require__.bind(null, 1001)),
    K11ProductListHoko: () => __webpack_require__.e(/* import() */ 89).then(__webpack_require__.bind(null, 1002)),
    KoNoDisponibleHoko: () => __webpack_require__.e(/* import() */ 32).then(__webpack_require__.bind(null, 915))
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  data() {
    return {
      componentMapping: {
        3: 'K05ProductListHoko',
        5: 'K05ProductListHoko',
        6: 'KoNoDisponibleHoko',
        7: 'KoNoDisponibleHoko',
        9: 'K09ProductListHoko',
        10: 'KoNoDisponibleHoko',
        11: 'K11ProductListHoko',
        13: 'KoNoDisponibleHoko',
        14: 'KoNoDisponibleHoko'
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'settingBase', 'settingByTemplate', 'settingByTemplate7', 'settingByTemplate9', 'settingByTemplate10', 'settingByTemplate11', 'template', 'dataHoko']),
    fullProducts() {
      return this.$store.getters['products/filterProducts'];
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
        settingByTemplate: this.createSettingByTemplate(this.settingByTemplate, 'settings', 'tipo_letra', this.settingBase),
        settingByTemplate7: this.createNestedSetting(this.settingByTemplate7, ['settingGeneral', 'productListFilter', 'card'], null),
        settingByTemplate9: this.createNestedSetting(this.settingByTemplate9, ['cardProduct', 'productListFilter', 'settingGeneral'], null),
        settingByTemplate10: this.createNestedSetting(this.settingByTemplate10, ['cardProduct', 'productListFilter', 'settingGeneral'], null),
        settingByTemplate11: this.createNestedSetting(this.settingByTemplate11, ['productList', 'cardProduct', 'settingGeneral'], null)
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
// CONCATENATED MODULE: ./pages/productosHoko/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_productosHokovue_type_script_lang_js_ = (productosHokovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/productosHoko/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_productosHokovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5324659e"
  
)

/* harmony default export */ var productosHoko = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map