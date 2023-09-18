exports.ids = [331];
exports.modules = {

/***/ 1102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contacto.vue?vue&type=template&id=685770a6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(_vm.indexTemplate, _vm._b({
    tag: "component"
  }, 'component', _vm.componentsProps, false));
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contacto.vue?vue&type=template&id=685770a6&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contacto.vue?vue&type=script&lang=js&

/* harmony default export */ var contactovue_type_script_lang_js_ = ({
  name: 'KoContact',
  components: {
    K05Contact: () => __webpack_require__.e(/* import() */ 136).then(__webpack_require__.bind(null, 1211)),
    K07Contact: () => __webpack_require__.e(/* import() */ 153).then(__webpack_require__.bind(null, 1227)),
    K09Contact: () => __webpack_require__.e(/* import() */ 161).then(__webpack_require__.bind(null, 1232)),
    K10Contact: () => __webpack_require__.e(/* import() */ 42).then(__webpack_require__.bind(null, 1134)),
    K11Contact: () => __webpack_require__.e(/* import() */ 54).then(__webpack_require__.bind(null, 1144)),
    K13Contact: () => __webpack_require__.e(/* import() */ 75).then(__webpack_require__.bind(null, 1162)),
    K14Contact: () => __webpack_require__.e(/* import() */ 85).then(__webpack_require__.bind(null, 1171)),
    K15Contact: () => __webpack_require__.e(/* import() */ 105).then(__webpack_require__.bind(null, 1186)),
    K16Contact: () => __webpack_require__.e(/* import() */ 119).then(__webpack_require__.bind(null, 1197))
  },
  layout: 'default',
  data() {
    return {
      componentMapping: {
        3: 'K05Contact',
        5: 'K05Contact',
        6: 'K05Contact',
        7: 'K07Contact',
        9: 'K09Contact',
        10: 'K10Contact',
        11: 'K11Contact',
        13: 'K13Contact',
        14: 'K14Contact',
        15: 'K15Contact',
        16: 'K16Contact'
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
    indexTemplate() {
      let productListComponent = '';
      // eslint-disable-next-line no-prototype-builtins
      if (this.componentMapping.hasOwnProperty(this.template)) {
        productListComponent = this.componentMapping[parseInt(this.template)];
      }
      return productListComponent;
    },
    componentsProps() {
      var _this$settingByTempla, _this$settingByTempla2;
      return {
        dataStore: this.dataStore,
        settingK05Contact: (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate) === null || _this$settingByTempla2 === void 0 ? void 0 : _this$settingByTempla2.settings) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : this.settingBase,
        settingByTemplate7: this.createSettingByTemplate(this.settingByTemplate7, 'contact', 'settingGeneral'),
        settingByTemplate9: this.createSettingByTemplate(this.settingByTemplate9, 'contact', 'settingGeneral'),
        settingByTemplate10: this.createSettingByTemplate(this.settingByTemplate10, 'contact', 'settingGeneral'),
        settingByTemplate11: this.createSettingByTemplate(this.settingByTemplate11, 'contact', 'settingGeneral'),
        settingByTemplate13: this.createSettingByTemplate(this.settingByTemplate13, 'contact', 'settingGeneral'),
        settingByTemplate14: this.createSettingByTemplate(this.settingByTemplate14, 'contact', 'settingsGeneral'),
        settingByTemplate15: this.createSettingByTemplate(this.settingByTemplate15, 'contact', 'settingGeneral'),
        settingByTemplate16: this.createSettingByTemplate(this.settingByTemplate16, 'contact', 'settingsGeneral')
      };
    }
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate);
  },
  methods: {
    createSettingByTemplate(settingByTemplate, contactKey, settingGeneralKey) {
      if (settingByTemplate) {
        var _settingByTemplate$co, _settingByTemplate$se;
        return [{
          [contactKey]: (_settingByTemplate$co = settingByTemplate[contactKey]) !== null && _settingByTemplate$co !== void 0 ? _settingByTemplate$co : null,
          [settingGeneralKey]: (_settingByTemplate$se = settingByTemplate[settingGeneralKey]) !== null && _settingByTemplate$se !== void 0 ? _settingByTemplate$se : null
        }];
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
// CONCATENATED MODULE: ./pages/contacto.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactovue_type_script_lang_js_ = (contactovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contacto.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7eb586b0"
  
)

/* harmony default export */ var contacto = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contacto.js.map