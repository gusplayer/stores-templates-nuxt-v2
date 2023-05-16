exports.ids = [30];
exports.modules = {

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=398d1cc4&
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

// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=398d1cc4&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js&

/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  layout: 'default',
  components: {
    K05Blog: () => __webpack_require__.e(/* import() */ 82).then(__webpack_require__.bind(null, 871)),
    K07Blog: () => __webpack_require__.e(/* import() */ 89).then(__webpack_require__.bind(null, 872)),
    K09Blog: () => __webpack_require__.e(/* import() */ 80).then(__webpack_require__.bind(null, 909)),
    K10Blog: () => __webpack_require__.e(/* import() */ 84).then(__webpack_require__.bind(null, 873)),
    K11Blog: () => __webpack_require__.e(/* import() */ 77).then(__webpack_require__.bind(null, 910)),
    K13Blog: () => __webpack_require__.e(/* import() */ 86).then(__webpack_require__.bind(null, 874))
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'settingBase', 'settingByTemplate', 'settingByTemplate7', 'settingByTemplate9', 'settingByTemplate10', 'settingByTemplate11', 'settingByTemplate13', 'template']),
    indexTemplate() {
      let productListComponent = '';
      switch (this.template) {
        case 3:
          productListComponent = 'K05Blog';
          break;
        case 5:
          productListComponent = 'K05Blog';
          break;
        case 6:
          productListComponent = 'K05Blog';
          break;
        case 7:
          productListComponent = 'K07Blog';
          break;
        case 9:
          productListComponent = 'K09Blog';
          break;
        case 10:
          productListComponent = 'K10Blog';
          break;
        case 11:
          productListComponent = 'K11Blog';
          break;
        case 13:
          productListComponent = 'K13Blog';
          break;
      }
      return productListComponent;
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingK05Blog: this.settingByTemplate && this.settingByTemplate.settings ? this.settingByTemplate.settings : this.settingBase,
        settingByTemplate7: this.settingByTemplate7 ? [{
          settingGeneral: this.settingByTemplate7 && this.settingByTemplate7.settingGeneral ? this.settingByTemplate7.settingGeneral : null,
          settingK07Blog: this.settingByTemplate7 && this.settingByTemplate7.blog1 ? this.settingByTemplate7.blog1 : null,
          settingK07Blog1: this.settingByTemplate7 && this.settingByTemplate7.blog ? this.settingByTemplate7.blog : null
        }] : null,
        settingByTemplate9: this.settingByTemplate9 ? [{
          blog: this.settingByTemplate9 && this.settingByTemplate9.blog ? this.settingByTemplate9.blog : null,
          settingGeneral: this.settingByTemplate9 && this.settingByTemplate9.settingGeneral ? this.settingByTemplate9.settingGeneral : null
        }] : null,
        settingByTemplate11: this.settingByTemplate11 ? [{
          blog: this.settingByTemplate11 && this.settingByTemplate11.blog ? this.settingByTemplate11.blog : null,
          setting11General: this.settingByTemplate11 && this.settingByTemplate11.settingGeneral ? this.settingByTemplate11.settingGeneral : null
        }] : null,
        settingByTemplate13: this.settingByTemplate13 ? [{
          setting13General: this.settingByTemplate13 && this.settingByTemplate13.settingGeneral ? this.settingByTemplate13.settingGeneral : null
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



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "91b13eae"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map