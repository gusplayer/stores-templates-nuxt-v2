exports.ids = [32];
exports.modules = {

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/contacto.vue?vue&type=template&id=25b64833&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "home"
  }, [_c(_vm.indexTemplate, _vm._b({
    tag: "component"
  }, 'component', _vm.componentsProps, false))], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contacto.vue?vue&type=template&id=25b64833&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/contacto.vue?vue&type=script&lang=js&

/* harmony default export */ var contactovue_type_script_lang_js_ = ({
  layout: 'default',
  components: {
    K05Contact: () => __webpack_require__.e(/* import() */ 113).then(__webpack_require__.bind(null, 911)),
    K07Contact: () => __webpack_require__.e(/* import() */ 118).then(__webpack_require__.bind(null, 912)),
    K09Contact: () => __webpack_require__.e(/* import() */ 124).then(__webpack_require__.bind(null, 913)),
    K10Contact: () => __webpack_require__.e(/* import() */ 100).then(__webpack_require__.bind(null, 914)),
    K11Contact: () => __webpack_require__.e(/* import() */ 105).then(__webpack_require__.bind(null, 915)),
    K13Contact: () => __webpack_require__.e(/* import() */ 108).then(__webpack_require__.bind(null, 916))
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'settingBase', 'settingByTemplate', 'settingByTemplate7', 'settingByTemplate9', 'settingByTemplate10', 'settingByTemplate11', 'settingByTemplate13', 'template']),
    indexTemplate() {
      let productListComponent = '';
      switch (this.template) {
        case 3:
          productListComponent = 'K05Contact';
          break;
        case 5:
          productListComponent = 'K05Contact';
          break;
        case 6:
          productListComponent = 'K05Contact';
          break;
        case 7:
          productListComponent = 'K07Contact';
          break;
        case 9:
          productListComponent = 'K09Contact';
          break;
        case 10:
          productListComponent = 'K10Contact';
          break;
        case 11:
          productListComponent = 'K11Contact';
          break;
        case 13:
          productListComponent = 'K13Contact';
          break;
      }
      return productListComponent;
    },
    componentsProps() {
      var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3, _this$settingByTempla4, _this$settingByTempla5, _this$settingByTempla6, _this$settingByTempla7, _this$settingByTempla8, _this$settingByTempla9, _this$settingByTempla10, _this$settingByTempla11, _this$settingByTempla12, _this$settingByTempla13, _this$settingByTempla14, _this$settingByTempla15, _this$settingByTempla16, _this$settingByTempla17, _this$settingByTempla18, _this$settingByTempla19, _this$settingByTempla20, _this$settingByTempla21, _this$settingByTempla22, _this$settingByTempla23;
      return {
        dataStore: this.dataStore,
        settingK05Contact: (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.settings) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.tipo_letra) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : this.settingBase,
        settingByTemplate7: this.settingByTemplate7 ? [{
          settingK07Contact: (_this$settingByTempla4 = (_this$settingByTempla5 = this.settingByTemplate7) === null || _this$settingByTempla5 === void 0 ? void 0 : _this$settingByTempla5.contact) !== null && _this$settingByTempla4 !== void 0 ? _this$settingByTempla4 : null,
          settingGeneral: (_this$settingByTempla6 = (_this$settingByTempla7 = this.settingByTemplate7) === null || _this$settingByTempla7 === void 0 ? void 0 : _this$settingByTempla7.settingGeneral) !== null && _this$settingByTempla6 !== void 0 ? _this$settingByTempla6 : null
        }] : null,
        settingByTemplate9: this.settingByTemplate9 ? [{
          cardProduct: (_this$settingByTempla8 = (_this$settingByTempla9 = this.settingByTemplate9) === null || _this$settingByTempla9 === void 0 ? void 0 : _this$settingByTempla9.contact) !== null && _this$settingByTempla8 !== void 0 ? _this$settingByTempla8 : null,
          setting9General: (_this$settingByTempla10 = (_this$settingByTempla11 = this.settingByTemplate9) === null || _this$settingByTempla11 === void 0 ? void 0 : _this$settingByTempla11.settingGeneral) !== null && _this$settingByTempla10 !== void 0 ? _this$settingByTempla10 : null
        }] : null,
        settingByTemplate10: this.settingByTemplate10 ? [{
          contact: (_this$settingByTempla12 = (_this$settingByTempla13 = this.settingByTemplate10) === null || _this$settingByTempla13 === void 0 ? void 0 : _this$settingByTempla13.contact) !== null && _this$settingByTempla12 !== void 0 ? _this$settingByTempla12 : null,
          setting10General: (_this$settingByTempla14 = (_this$settingByTempla15 = this.settingByTemplate10) === null || _this$settingByTempla15 === void 0 ? void 0 : _this$settingByTempla15.settingGeneral) !== null && _this$settingByTempla14 !== void 0 ? _this$settingByTempla14 : null
        }] : null,
        settingByTemplate11: this.settingByTemplate11 ? [{
          contact: (_this$settingByTempla16 = (_this$settingByTempla17 = this.settingByTemplate11) === null || _this$settingByTempla17 === void 0 ? void 0 : _this$settingByTempla17.contact) !== null && _this$settingByTempla16 !== void 0 ? _this$settingByTempla16 : null,
          setting11General: (_this$settingByTempla18 = (_this$settingByTempla19 = this.settingByTemplate11) === null || _this$settingByTempla19 === void 0 ? void 0 : _this$settingByTempla19.settingGeneral) !== null && _this$settingByTempla18 !== void 0 ? _this$settingByTempla18 : null
        }] : null,
        settingByTemplate13: this.settingByTemplate13 ? [{
          contact: (_this$settingByTempla20 = (_this$settingByTempla21 = this.settingByTemplate13) === null || _this$settingByTempla21 === void 0 ? void 0 : _this$settingByTempla21.contact) !== null && _this$settingByTempla20 !== void 0 ? _this$settingByTempla20 : null,
          settingGeneral: (_this$settingByTempla22 = (_this$settingByTempla23 = this.settingByTemplate13) === null || _this$settingByTempla23 === void 0 ? void 0 : _this$settingByTempla23.settingGeneral) !== null && _this$settingByTempla22 !== void 0 ? _this$settingByTempla22 : null
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
  "47536775"
  
)

/* harmony default export */ var contacto = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contacto.js.map