exports.ids = [1];
exports.modules = {

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/template10/index.vue?vue&type=template&id=6c551205&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate10 ? _c('div', {
    style: [{
      '--font-style-1': this.settingByTemplate10.settingGeneral && this.settingByTemplate10.settingGeneral.fount_1 ? this.settingByTemplate10.settingGeneral.fount_1 : 'Roboto'
    }]
  }, [_c('KbuttonCar'), _vm._ssrNode(" "), _vm.settingByTemplate10 && _vm.settingByTemplate10.banner && _vm.settingByTemplate10.banner.visible ? _c('Kcarousel', _vm._b({
    key: _vm.bannerRendering,
    attrs: {
      "id": "kbannerX"
    }
  }, 'Kcarousel', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate10 && _vm.settingByTemplate10.section && _vm.settingByTemplate10.section.visible ? _c('Ksection', _vm._b({
    attrs: {
      "id": "kSectionX"
    }
  }, 'Ksection', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate10 && _vm.settingByTemplate10.trending && _vm.settingByTemplate10.trending.visible ? _c('Ktrending', _vm._b({
    attrs: {
      "id": "kTrendingX"
    }
  }, 'Ktrending', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate10 && _vm.settingByTemplate10.offers && _vm.settingByTemplate10.offers.visible ? _c('Kdeal', _vm._b({
    attrs: {
      "id": "kOffersX"
    }
  }, 'Kdeal', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate10 && _vm.settingByTemplate10.productList && _vm.settingByTemplate10.productList.visible ? _c('Kfeatured', _vm._b({
    attrs: {
      "id": "KproductDestacadosX"
    }
  }, 'Kfeatured', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _c('Kblog', _vm._b({
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.listArticulos.length > 0 && _vm.settingByTemplate10 && _vm.settingByTemplate10.blog && _vm.settingByTemplate10.blog.visible,
      expression: "\n      listArticulos.length > 0 &&\n      settingByTemplate10 &&\n      settingByTemplate10.blog &&\n      settingByTemplate10.blog.visible\n    "
    }],
    attrs: {
      "id": "KblogX"
    }
  }, 'Kblog', _vm.componentsProps, false))], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/template10/index.vue?vue&type=template&id=6c551205&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/template10/index.vue?vue&type=script&lang=js&

/* harmony default export */ var template10vue_type_script_lang_js_ = ({
  layout: 'default',
  name: 'Ko-template10',
  components: {
    KbuttonCar: () => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, 940)),
    Kcarousel: () => __webpack_require__.e(/* import() */ 104).then(__webpack_require__.bind(null, 941)),
    Ksection: () => __webpack_require__.e(/* import() */ 106).then(__webpack_require__.bind(null, 942)),
    Ktrending: () => __webpack_require__.e(/* import() */ 72).then(__webpack_require__.bind(null, 943)),
    Kdeal: () => __webpack_require__.e(/* import() */ 105).then(__webpack_require__.bind(null, 944)),
    Kfeatured: () => __webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(null, 945)),
    Kblog: () => __webpack_require__.e(/* import() */ 85).then(__webpack_require__.bind(null, 895))
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenertemplate);
  },
  data() {
    return {
      bannerRendering: 0
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'listArticulos', 'settingByTemplate10', 'dataHoko']),
    fullProducts() {
      return this.$store.getters['products/allProduct'];
    },
    componentsProps() {
      var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3, _this$settingByTempla4, _this$settingByTempla5, _this$settingByTempla6, _this$settingByTempla7, _this$settingByTempla8, _this$settingByTempla9, _this$settingByTempla10, _this$settingByTempla11, _this$settingByTempla12, _this$settingByTempla13, _this$settingByTempla14, _this$settingByTempla15, _this$settingByTempla16;
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral: (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate10) === null || _this$settingByTempla2 === void 0 ? void 0 : _this$settingByTempla2.settingGeneral) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : null,
        banner: (_this$settingByTempla3 = (_this$settingByTempla4 = this.settingByTemplate10) === null || _this$settingByTempla4 === void 0 ? void 0 : _this$settingByTempla4.banner) !== null && _this$settingByTempla3 !== void 0 ? _this$settingByTempla3 : null,
        section: (_this$settingByTempla5 = (_this$settingByTempla6 = this.settingByTemplate10) === null || _this$settingByTempla6 === void 0 ? void 0 : _this$settingByTempla6.section) !== null && _this$settingByTempla5 !== void 0 ? _this$settingByTempla5 : null,
        trending: (_this$settingByTempla7 = (_this$settingByTempla8 = this.settingByTemplate10) === null || _this$settingByTempla8 === void 0 ? void 0 : _this$settingByTempla8.trending) !== null && _this$settingByTempla7 !== void 0 ? _this$settingByTempla7 : null,
        offers: (_this$settingByTempla9 = (_this$settingByTempla10 = this.settingByTemplate10) === null || _this$settingByTempla10 === void 0 ? void 0 : _this$settingByTempla10.offers) !== null && _this$settingByTempla9 !== void 0 ? _this$settingByTempla9 : null,
        productList: (_this$settingByTempla11 = (_this$settingByTempla12 = this.settingByTemplate10) === null || _this$settingByTempla12 === void 0 ? void 0 : _this$settingByTempla12.productList) !== null && _this$settingByTempla11 !== void 0 ? _this$settingByTempla11 : null,
        cardProduct: (_this$settingByTempla13 = (_this$settingByTempla14 = this.settingByTemplate10) === null || _this$settingByTempla14 === void 0 ? void 0 : _this$settingByTempla14.cardProduct) !== null && _this$settingByTempla13 !== void 0 ? _this$settingByTempla13 : null,
        blog: (_this$settingByTempla15 = (_this$settingByTempla16 = this.settingByTemplate10) === null || _this$settingByTempla16 === void 0 ? void 0 : _this$settingByTempla16.blog) !== null && _this$settingByTempla15 !== void 0 ? _this$settingByTempla15 : null
      };
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenertemplate);
  },
  methods: {
    addEventListenertemplate(e) {
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080') || e.origin.includes('https://panel.komercia.xyz')) {
        if (e && e.data && e.data.component && e.data.template == 10) {
          this.$store.commit('SET_CURRENTSETTING10', e.data);
          if (e.data.component == 'banner') {
            this.bannerRendering += 1;
          }
        } else if (e && e.data && e.data.componentToEdit && e.data.template == 10) {
          switch (e.data.componentToEdit) {
            case 'settingGeneral':
              this.moverseA('kbannerX');
              break;
            case 'header':
              this.moverseA('kbannerX');
              break;
            case 'footer':
              this.moverseA('KblogX');
              break;
            case 'banner':
              this.moverseA('kbannerX');
              break;
            case 'section':
              this.moverseA('kSectionX');
              break;
            case 'treding':
              this.moverseA('kTrendingX');
              break;
            case 'card':
              this.moverseA('kTrendingX');
              break;
            case 'offers':
              this.moverseA('kOffersX');
              break;
            case 'productDestacados':
              this.moverseA('KproductDestacadosX');
              break;
            case 'blog':
              this.moverseA('KblogX');
              break;
            case 'detailsProduct':
              if (this.fullProducts) {
                this.$router.push({
                  path: '/productos/' + this.fullProducts[0].slug
                });
              }
              break;
            case 'productListFilter':
              this.$router.push({
                path: '/productos'
              });
              break;
            case 'contact':
              this.$router.push({
                path: '/contacto'
              });
              break;
          }
        } else {
          if (e && e.data && e.data.returnHome == true) {
            this.$router.push({
              path: '/'
            });
          }
        }
      }
    },
    moverseA(idDelElemento) {
      location.hash = '#' + idDelElemento;
    }
  }
});
// CONCATENATED MODULE: ./pages/template10/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_template10vue_type_script_lang_js_ = (template10vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/template10/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_template10vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "64be0075"
  
)

/* harmony default export */ var template10 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map