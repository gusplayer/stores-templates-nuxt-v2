exports.ids = [35];
exports.modules = {

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=114e3124&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(_vm.indexTemplate, _vm._b({
    tag: "component"
  }, 'component', _vm.componentsProps, false));
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=114e3124&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js&

/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  layout: 'default',
  components: {
    K05Blog: () => __webpack_require__.e(/* import() */ 94).then(__webpack_require__.bind(null, 937)),
    K07Blog: () => __webpack_require__.e(/* import() */ 101).then(__webpack_require__.bind(null, 938)),
    K09Blog: () => __webpack_require__.e(/* import() */ 92).then(__webpack_require__.bind(null, 982)),
    K10Blog: () => __webpack_require__.e(/* import() */ 96).then(__webpack_require__.bind(null, 939)),
    K11Blog: () => __webpack_require__.e(/* import() */ 87).then(__webpack_require__.bind(null, 983)),
    K13Blog: () => __webpack_require__.e(/* import() */ 98).then(__webpack_require__.bind(null, 940)),
    K14Blog: () => __webpack_require__.e(/* import() */ 133).then(__webpack_require__.bind(null, 984))
  },
  data() {
    return {
      componentMapping: {
        3: 'K05Blog',
        5: 'K05Blog',
        6: 'K05Blog',
        7: 'K07Blog',
        9: 'K09Blog',
        10: 'K10Blog',
        11: 'K11Blog',
        13: 'K13Blog',
        14: 'K14Blog'
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'settingBase', 'settingByTemplate', 'settingByTemplate7', 'settingByTemplate9', 'settingByTemplate10', 'settingByTemplate11', 'settingByTemplate13', 'settingByTemplate14', 'template']),
    indexTemplate() {
      let productListComponent = '';
      if (this.componentMapping.hasOwnProperty(this.template)) {
        productListComponent = this.componentMapping[parseInt(this.template)];
      }
      return productListComponent;
    },
    componentsProps() {
      var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3, _this$settingByTempla4, _this$settingByTempla5, _this$settingByTempla6, _this$settingByTempla7, _this$settingByTempla8, _this$settingByTempla9, _this$settingByTempla10, _this$settingByTempla11, _this$settingByTempla12, _this$settingByTempla13, _this$settingByTempla14, _this$settingByTempla15, _this$settingByTempla16, _this$settingByTempla17, _this$settingByTempla18, _this$settingByTempla19, _this$settingByTempla20, _this$settingByTempla21, _this$settingByTempla22;
      return {
        dataStore: this.dataStore,
        settingK05Blog: (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate) === null || _this$settingByTempla2 === void 0 ? void 0 : _this$settingByTempla2.settings) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : this.settingBase,
        settingByTemplate7: this.settingByTemplate7 ? [{
          settingGeneral: (_this$settingByTempla3 = (_this$settingByTempla4 = this.settingByTemplate7) === null || _this$settingByTempla4 === void 0 ? void 0 : _this$settingByTempla4.settingGeneral) !== null && _this$settingByTempla3 !== void 0 ? _this$settingByTempla3 : null,
          settingK07Blog: (_this$settingByTempla5 = (_this$settingByTempla6 = this.settingByTemplate7) === null || _this$settingByTempla6 === void 0 ? void 0 : _this$settingByTempla6.blog1) !== null && _this$settingByTempla5 !== void 0 ? _this$settingByTempla5 : null,
          settingK07Blog1: (_this$settingByTempla7 = (_this$settingByTempla8 = this.settingByTemplate7) === null || _this$settingByTempla8 === void 0 ? void 0 : _this$settingByTempla8.blog) !== null && _this$settingByTempla7 !== void 0 ? _this$settingByTempla7 : null
        }] : null,
        settingByTemplate9: this.settingByTemplate9 ? [{
          blog: (_this$settingByTempla9 = (_this$settingByTempla10 = this.settingByTemplate9) === null || _this$settingByTempla10 === void 0 ? void 0 : _this$settingByTempla10.blog) !== null && _this$settingByTempla9 !== void 0 ? _this$settingByTempla9 : null,
          settingGeneral: (_this$settingByTempla11 = (_this$settingByTempla12 = this.settingByTemplate9) === null || _this$settingByTempla12 === void 0 ? void 0 : _this$settingByTempla12.settingGeneral) !== null && _this$settingByTempla11 !== void 0 ? _this$settingByTempla11 : null
        }] : null,
        settingByTemplate11: this.settingByTemplate11 ? [{
          blog: (_this$settingByTempla13 = (_this$settingByTempla14 = this.settingByTemplate11) === null || _this$settingByTempla14 === void 0 ? void 0 : _this$settingByTempla14.blog) !== null && _this$settingByTempla13 !== void 0 ? _this$settingByTempla13 : null,
          setting11General: (_this$settingByTempla15 = (_this$settingByTempla16 = this.settingByTemplate11) === null || _this$settingByTempla16 === void 0 ? void 0 : _this$settingByTempla16.settingGeneral) !== null && _this$settingByTempla15 !== void 0 ? _this$settingByTempla15 : null
        }] : null,
        settingByTemplate13: this.settingByTemplate13 ? [{
          setting13General: (_this$settingByTempla17 = (_this$settingByTempla18 = this.settingByTemplate13) === null || _this$settingByTempla18 === void 0 ? void 0 : _this$settingByTempla18.settingGeneral) !== null && _this$settingByTempla17 !== void 0 ? _this$settingByTempla17 : null
        }] : null,
        settingByTemplate14: this.settingByTemplate14 ? [{
          settingGeneral: (_this$settingByTempla19 = (_this$settingByTempla20 = this.settingByTemplate14) === null || _this$settingByTempla20 === void 0 ? void 0 : _this$settingByTempla20.settingGeneral) !== null && _this$settingByTempla19 !== void 0 ? _this$settingByTempla19 : null,
          cardBlog: (_this$settingByTempla21 = (_this$settingByTempla22 = this.settingByTemplate14) === null || _this$settingByTempla22 === void 0 ? void 0 : _this$settingByTempla22.cardBlog) !== null && _this$settingByTempla21 !== void 0 ? _this$settingByTempla21 : null
        }] : null
      };
    }
  }
});
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30c8c184"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map