exports.ids = [344];
exports.modules = {

/***/ 1128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wa/_slug/productos/_slugProduct.vue?vue&type=template&id=1d458fa7&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full",
    attrs: {
      "id": "width"
    }
  }, [_c('KoProductDetail'), _vm._ssrNode(" "), _c('KFooterWaLogo', _vm._b({}, 'KFooterWaLogo', _vm.componentsProps, false))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/wa/_slug/productos/_slugProduct.vue?vue&type=template&id=1d458fa7&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wa/_slug/productos/_slugProduct.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugProductvue_type_script_lang_js_ = ({
  name: 'WapiMEDetail',
  components: {
    KoProductDetail: () => __webpack_require__.e(/* import() */ 176).then(__webpack_require__.bind(null, 1244)),
    KFooterWaLogo: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 1323))
  },
  layout: 'wa',
  computed: {
    dataStore() {
      return this.$store.state.dataStore;
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate;
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        settingByTemplate: this.settingByTemplate && this.settingByTemplate.tema && this.settingByTemplate.estilo_categorias ? this.settingByTemplate : this.settingBaseWapi
      };
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      const widthOutput = document.querySelector('#width');
      widthOutput.style.width = window.innerWidth + 'px';
      widthOutput.style.maxWidth = window.innerWidth + 'px';
    }
  }
});
// CONCATENATED MODULE: ./pages/wa/_slug/productos/_slugProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var productos_slugProductvue_type_script_lang_js_ = (_slugProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/wa/_slug/productos/_slugProduct.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productos_slugProductvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9c07e86e"
  
)

/* harmony default export */ var _slugProduct = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slugProduct.js.map