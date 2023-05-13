exports.ids = [2];
exports.modules = {

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/template11/index.vue?vue&type=template&id=aa2b9190&
=======
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/template11/index.vue?vue&type=template&id=aa2b9190&
>>>>>>> 8fc64a3b0afecc12b7dc65aa7021e406232a9a48
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate11 ? _c('div', [_vm.settingByTemplate11 && _vm.settingByTemplate11.banner && _vm.settingByTemplate11.banner.visible ? _c('KCarousel', _vm._b({
    key: _vm.bannerRendering,
    attrs: {
      "id": "kCarouselX"
    }
  }, 'KCarousel', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate11 && _vm.settingByTemplate11.section && _vm.settingByTemplate11.section.visible ? _c('KSection', _vm._b({
    attrs: {
      "id": "kSectionX"
    }
  }, 'KSection', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate11 && _vm.settingByTemplate11.trending && _vm.settingByTemplate11.trending.visible == true && _vm.dataHoko && _vm.dataHoko.statehoko == 1 ? _c('KTrendingHoko', _vm._b({
    attrs: {
      "id": "kTredingX"
    }
  }, 'KTrendingHoko', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate11 && _vm.settingByTemplate11.trending && _vm.settingByTemplate11.trending.visible == true && this.fullProducts.length > 0 ? _c('KTrending', _vm._b({
    attrs: {
      "id": "kTredingX"
    }
  }, 'KTrending', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _c('client-only', [_vm.settingByTemplate11 && _vm.settingByTemplate11.parallax && _vm.settingByTemplate11.parallax.visible ? _c('KParallax', _vm._b({
    attrs: {
      "id": "kParallaxX"
    }
  }, 'KParallax', _vm.componentsProps, false)) : _vm._e()], 1), _vm._ssrNode(" "), _vm.dataHoko.length == 0 || _vm.dataHoko.statehoko == 0 ? _c('KListTrending', _vm._b({}, 'KListTrending', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate11 && _vm.settingByTemplate11.information && _vm.settingByTemplate11.information.visible ? _c('KInformacion', _vm._b({
    attrs: {
      "id": "kInformationX"
    }
  }, 'KInformacion', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate11 && _vm.settingByTemplate11.blog && _vm.settingByTemplate11.blog.visible ? _c('KBlog', _vm._b({
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.listArticulos.length > 0,
      expression: "listArticulos.length > 0"
    }],
    attrs: {
      "id": "kBlogX"
    }
  }, 'KBlog', _vm.componentsProps, false)) : _vm._e()], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/template11/index.vue?vue&type=template&id=aa2b9190&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/template11/index.vue?vue&type=script&lang=js&

/* harmony default export */ var template11vue_type_script_lang_js_ = ({
  layout: 'default',
  name: 'Ko-template11',
  components: {
    KCarousel: () => __webpack_require__.e(/* import() */ 85).then(__webpack_require__.bind(null, 879)),
    KSection: () => __webpack_require__.e(/* import() */ 107).then(__webpack_require__.bind(null, 926)),
    KTrending: () => __webpack_require__.e(/* import() */ 72).then(__webpack_require__.bind(null, 927)),
    KTrendingHoko: () => __webpack_require__.e(/* import() */ 79).then(__webpack_require__.bind(null, 928)),
    KParallax: () => __webpack_require__.e(/* import() */ 106).then(__webpack_require__.bind(null, 929)),
    KListTrending: () => __webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(null, 930)),
    KInformacion: () => __webpack_require__.e(/* import() */ 104).then(__webpack_require__.bind(null, 931)),
    KBlog: () => __webpack_require__.e(/* import() */ 78).then(__webpack_require__.bind(null, 932))
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate);
  },
  data() {
    return {
      bannerRendering: 0
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'listArticulos', 'settingByTemplate11', 'dataHoko']),
    fullProducts() {
      return this.$store.getters['products/allProduct'];
    },
    componentsProps() {
      var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3, _this$settingByTempla4, _this$settingByTempla5, _this$settingByTempla6, _this$settingByTempla7, _this$settingByTempla8, _this$settingByTempla9, _this$settingByTempla10, _this$settingByTempla11, _this$settingByTempla12, _this$settingByTempla13, _this$settingByTempla14, _this$settingByTempla15, _this$settingByTempla16, _this$settingByTempla17, _this$settingByTempla18, _this$settingByTempla19, _this$settingByTempla20;
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral: (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate11) === null || _this$settingByTempla2 === void 0 ? void 0 : _this$settingByTempla2.settingGeneral) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : null,
        settingKbanner: (_this$settingByTempla3 = (_this$settingByTempla4 = this.settingByTemplate11) === null || _this$settingByTempla4 === void 0 ? void 0 : _this$settingByTempla4.banner) !== null && _this$settingByTempla3 !== void 0 ? _this$settingByTempla3 : null,
        settingKblog: (_this$settingByTempla5 = (_this$settingByTempla6 = this.settingByTemplate11) === null || _this$settingByTempla6 === void 0 ? void 0 : _this$settingByTempla6.blog) !== null && _this$settingByTempla5 !== void 0 ? _this$settingByTempla5 : null,
        settingKcardProduct: (_this$settingByTempla7 = (_this$settingByTempla8 = this.settingByTemplate11) === null || _this$settingByTempla8 === void 0 ? void 0 : _this$settingByTempla8.cardProduct) !== null && _this$settingByTempla7 !== void 0 ? _this$settingByTempla7 : null,
        settingKcontact: (_this$settingByTempla9 = (_this$settingByTempla10 = this.settingByTemplate11) === null || _this$settingByTempla10 === void 0 ? void 0 : _this$settingByTempla10.contact) !== null && _this$settingByTempla9 !== void 0 ? _this$settingByTempla9 : null,
        settingKinformation: (_this$settingByTempla11 = (_this$settingByTempla12 = this.settingByTemplate11) === null || _this$settingByTempla12 === void 0 ? void 0 : _this$settingByTempla12.information) !== null && _this$settingByTempla11 !== void 0 ? _this$settingByTempla11 : null,
        settingKparallax: (_this$settingByTempla13 = (_this$settingByTempla14 = this.settingByTemplate11) === null || _this$settingByTempla14 === void 0 ? void 0 : _this$settingByTempla14.parallax) !== null && _this$settingByTempla13 !== void 0 ? _this$settingByTempla13 : null,
        settingKproductList: (_this$settingByTempla15 = (_this$settingByTempla16 = this.settingByTemplate11) === null || _this$settingByTempla16 === void 0 ? void 0 : _this$settingByTempla16.productList) !== null && _this$settingByTempla15 !== void 0 ? _this$settingByTempla15 : null,
        settingKsection: (_this$settingByTempla17 = (_this$settingByTempla18 = this.settingByTemplate11) === null || _this$settingByTempla18 === void 0 ? void 0 : _this$settingByTempla18.section) !== null && _this$settingByTempla17 !== void 0 ? _this$settingByTempla17 : null,
        settingKtrending: (_this$settingByTempla19 = (_this$settingByTempla20 = this.settingByTemplate11) === null || _this$settingByTempla20 === void 0 ? void 0 : _this$settingByTempla20.trending) !== null && _this$settingByTempla19 !== void 0 ? _this$settingByTempla19 : null
      };
    },
    dataHoko() {
      return this.$store.state.dataHoko;
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate);
  },
  methods: {
    addEventListenerTemplate(e) {
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080') || e.origin.includes('https://panel.komercia.xyz')) {
        if (e && e.data && e.data.component && e.data.template == 11) {
          console.log(e.data);
          this.$store.commit('SET_CURRENTSETTING11', e.data);
          if (e.data.component == 'banner') {
            this.bannerRendering += 1;
          }
        } else if (e && e.data && e.data.componentToEdit && e.data.template == 11) {
          switch (e.data.componentToEdit) {
            case 'settingGeneral':
              this.moverseA('kbannerX');
              break;
            case 'header':
              this.moverseA('kbannerX');
              break;
            case 'footer':
              this.moverseA('kBlogX');
              break;
            case 'newsLetter':
              this.moverseA('kBlogX');
              break;
            case 'banner':
              this.moverseA('kCarouselX');
              break;
            case 'section':
              this.moverseA('kSectionX');
              break;
            case 'treding':
              this.moverseA('kTredingX');
              break;
            case 'card':
              this.moverseA('kTredingX');
              break;
            case 'parallax':
              this.moverseA('kParallaxX');
              break;
            case 'information':
              this.moverseA('kInformationX');
              break;
            case 'blog':
              this.moverseA('kBlogX');
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
// CONCATENATED MODULE: ./pages/template11/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_template11vue_type_script_lang_js_ = (template11vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/template11/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_template11vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "198f9621"
  
)

/* harmony default export */ var template11 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map