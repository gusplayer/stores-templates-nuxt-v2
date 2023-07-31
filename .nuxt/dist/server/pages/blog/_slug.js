exports.ids = [38];
exports.modules = {

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=template&id=7082e82c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(_vm.indexTemplate, _vm._b({
    tag: "component"
  }, 'component', _vm.componentsProps, false));
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=template&id=7082e82c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=script&lang=js&

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  layout: 'default',
  components: {
    K05Article: () => __webpack_require__.e(/* import() */ 108).then(__webpack_require__.bind(null, 1098)),
    K07Article: () => __webpack_require__.e(/* import() */ 125).then(__webpack_require__.bind(null, 1099)),
    K09Article: () => __webpack_require__.e(/* import() */ 129).then(__webpack_require__.bind(null, 1100)),
    K10Article: () => __webpack_require__.e(/* import() */ 110).then(__webpack_require__.bind(null, 1101)),
    K11Article: () => __webpack_require__.e(/* import() */ 112).then(__webpack_require__.bind(null, 1102)),
    K13Article: () => __webpack_require__.e(/* import() */ 117).then(__webpack_require__.bind(null, 1103))
  },
  data() {
    return {
      componentMapping: {
        3: 'K05Article',
        5: 'K05Article',
        6: 'K05Article',
        7: 'K07Article',
        9: 'K09Article',
        10: 'K10Article',
        11: 'K11Article',
        13: 'K13Article',
        14: 'K13Article'
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'settingBase', 'settingByTemplate', 'settingByTemplate7', 'settingByTemplate9', 'settingByTemplate10', 'settingByTemplate11', 'settingByTemplate13', 'template']),
    indexTemplate() {
      let productListComponent = '';
      if (this.componentMapping.hasOwnProperty(this.template)) {
        productListComponent = this.componentMapping[parseInt(this.template)];
      }
      return productListComponent;
    },
    componentsProps() {
      var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3, _this$settingByTempla4, _this$settingByTempla5, _this$settingByTempla6;
      return {
        dataStore: this.dataStore,
        settingGeneral: ((_this$settingByTempla = this.settingByTemplate7) === null || _this$settingByTempla === void 0 ? void 0 : _this$settingByTempla.settingGeneral) || null,
        settingK07Blog: ((_this$settingByTempla2 = this.settingByTemplate7) === null || _this$settingByTempla2 === void 0 ? void 0 : _this$settingByTempla2.blog1) || null,
        settingK05Blog: ((_this$settingByTempla3 = this.settingByTemplate) === null || _this$settingByTempla3 === void 0 ? void 0 : (_this$settingByTempla4 = _this$settingByTempla3.settings) === null || _this$settingByTempla4 === void 0 ? void 0 : _this$settingByTempla4.tipo_letra) || this.settingBase,
        settingByTemplate11: this.settingByTemplate11 ? [{
          cardProduct: ((_this$settingByTempla5 = this.settingByTemplate11) === null || _this$settingByTempla5 === void 0 ? void 0 : _this$settingByTempla5.blog) || null,
          setting11General: ((_this$settingByTempla6 = this.settingByTemplate11) === null || _this$settingByTempla6 === void 0 ? void 0 : _this$settingByTempla6.settingGeneral) || null
        }] : null
      };
    }
  }
});
// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "34360414"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map