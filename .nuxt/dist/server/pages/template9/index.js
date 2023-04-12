exports.ids = [8];
exports.modules = {

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/template9/index.vue?vue&type=template&id=0ad4cff6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.settingByTemplate9 ? _c('div', {
    style: [{
      '--font-style-1': this.settingByTemplate9.settingGeneral && this.settingByTemplate9.settingGeneral.fount_1 ? this.settingByTemplate9.settingGeneral.fount_1 : 'David Libre'
    }, {
      '--font-style-2': this.settingByTemplate9.settingGeneral && this.settingByTemplate9.settingGeneral.fount_2 ? this.settingByTemplate9.settingGeneral.fount_2 : 'Great Vibes'
    }, {
      '--font-style-3': this.settingByTemplate9.settingGeneral && this.settingByTemplate9.settingGeneral.fount_3 ? this.settingByTemplate9.settingGeneral.fount_3 : 'Lora'
    }]
  }, [_vm.settingByTemplate9 && _vm.settingByTemplate9.banner && _vm.settingByTemplate9.banner.visible ? _c('KBanner', _vm._b({
    key: _vm.bannerRendering,
    attrs: {
      "id": "kBannerX"
    }
  }, 'KBanner', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate9 && _vm.settingByTemplate9.koffers && _vm.settingByTemplate9.koffers.visible ? _c('KOffers', _vm._b({
    attrs: {
      "id": "KOffersX"
    }
  }, 'KOffers', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate9 && _vm.settingByTemplate9.productList && _vm.settingByTemplate9.productList.visible == true && _vm.dataHoko && _vm.dataHoko.statehoko == 1 ? _c('KProductListHoko', _vm._b({
    attrs: {
      "id": "KProductListHokoX"
    }
  }, 'KProductListHoko', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate9 && _vm.settingByTemplate9.productList && _vm.settingByTemplate9.productList.visible == true && this.fullProducts.length > 0 ? _c('KProductList', _vm._b({
    attrs: {
      "id": "KProductListX"
    }
  }, 'KProductList', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _c('KBlog', _vm._b({
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.listArticulos.length > 0 && _vm.settingByTemplate9 && _vm.settingByTemplate9.blog && _vm.settingByTemplate9.blog.visible,
      expression: "\n      listArticulos.length > 0 &&\n      settingByTemplate9 &&\n      settingByTemplate9.blog &&\n      settingByTemplate9.blog.visible\n    "
    }],
    attrs: {
      "id": "KBlogX"
    }
  }, 'KBlog', _vm.componentsProps, false)), _vm._ssrNode(" "), _vm.settingByTemplate9 && _vm.settingByTemplate9.wrapper && _vm.settingByTemplate9.wrapper.visible ? _c('KWrapper', _vm._b({
    attrs: {
      "id": "KWrapperX"
    }
  }, 'KWrapper', _vm.componentsProps, false)) : _vm._e(), _vm._ssrNode(" "), _vm.settingByTemplate9 && _vm.settingByTemplate9.newsletter && _vm.settingByTemplate9.newsletter.visible ? _c('KNews', _vm._b({
    attrs: {
      "id": "KNewsX"
    }
  }, 'KNews', _vm.componentsProps, false)) : _vm._e()], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/template9/index.vue?vue&type=template&id=0ad4cff6&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/template9/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var template9vue_type_script_lang_js_ = ({
  layout: 'default',
  name: 'Ko-template9',
  components: {
    KBanner: () => __webpack_require__.e(/* import() */ 127).then(__webpack_require__.bind(null, 949)),
    KOffers: () => __webpack_require__.e(/* import() */ 128).then(__webpack_require__.bind(null, 950)),
    KProductList: () => __webpack_require__.e(/* import() */ 76).then(__webpack_require__.bind(null, 951)),
    KProductListHoko: () => __webpack_require__.e(/* import() */ 65).then(__webpack_require__.bind(null, 883)),
    KBlog: () => __webpack_require__.e(/* import() */ 81).then(__webpack_require__.bind(null, 952)),
    KWrapper: () => __webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(null, 953)),
    KNews: () => __webpack_require__.e(/* import() */ 125).then(__webpack_require__.bind(null, 954))
  },
  mounted() {
    window.parent.postMessage('message', '*');
    window.addEventListener('message', this.addEventListenerTemplate09);
  },
  data() {
    return {
      bannerRendering: 0
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore', 'listArticulos', 'settingByTemplate9', 'dataHoko']),
    fullProducts() {
      return this.$store.getters['products/allProduct'];
    },
    componentsProps() {
      var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3, _this$settingByTempla4, _this$settingByTempla5, _this$settingByTempla6, _this$settingByTempla7, _this$settingByTempla8, _this$settingByTempla9, _this$settingByTempla10, _this$settingByTempla11, _this$settingByTempla12, _this$settingByTempla13, _this$settingByTempla14, _this$settingByTempla15, _this$settingByTempla16;
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral: (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate9) === null || _this$settingByTempla2 === void 0 ? void 0 : _this$settingByTempla2.settingGeneral) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : null,
        banner: (_this$settingByTempla3 = (_this$settingByTempla4 = this.settingByTemplate9) === null || _this$settingByTempla4 === void 0 ? void 0 : _this$settingByTempla4.banner) !== null && _this$settingByTempla3 !== void 0 ? _this$settingByTempla3 : null,
        koffers: (_this$settingByTempla5 = (_this$settingByTempla6 = this.settingByTemplate9) === null || _this$settingByTempla6 === void 0 ? void 0 : _this$settingByTempla6.koffers) !== null && _this$settingByTempla5 !== void 0 ? _this$settingByTempla5 : null,
        productList: (_this$settingByTempla7 = (_this$settingByTempla8 = this.settingByTemplate9) === null || _this$settingByTempla8 === void 0 ? void 0 : _this$settingByTempla8.productList) !== null && _this$settingByTempla7 !== void 0 ? _this$settingByTempla7 : null,
        productListCard: (_this$settingByTempla9 = (_this$settingByTempla10 = this.settingByTemplate9) === null || _this$settingByTempla10 === void 0 ? void 0 : _this$settingByTempla10.cardProduct) !== null && _this$settingByTempla9 !== void 0 ? _this$settingByTempla9 : null,
        blog: (_this$settingByTempla11 = (_this$settingByTempla12 = this.settingByTemplate9) === null || _this$settingByTempla12 === void 0 ? void 0 : _this$settingByTempla12.blog) !== null && _this$settingByTempla11 !== void 0 ? _this$settingByTempla11 : null,
        newsletter: (_this$settingByTempla13 = (_this$settingByTempla14 = this.settingByTemplate9) === null || _this$settingByTempla14 === void 0 ? void 0 : _this$settingByTempla14.newsletter) !== null && _this$settingByTempla13 !== void 0 ? _this$settingByTempla13 : null,
        wrapper: (_this$settingByTempla15 = (_this$settingByTempla16 = this.settingByTemplate9) === null || _this$settingByTempla16 === void 0 ? void 0 : _this$settingByTempla16.wrapper) !== null && _this$settingByTempla15 !== void 0 ? _this$settingByTempla15 : null
      };
    }
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate09);
  },
  methods: {
    addEventListenerTemplate09(e) {
      if (e.origin.includes('https://panel.komercia.co') || e.origin.includes('http://localhost:8080') || e.origin.includes('https://panel.komercia.xyz')) {
        if (e && e.data && e.data.component && e.data.template == 9) {
          this.$store.commit('SET_CURRENTSETTING09', e.data);
          if (e.data.component == 'banner') {
            this.bannerRendering += 1;
          }
        } else if (e && e.data && e.data.componentToEdit && e.data.template == 9) {
          switch (e.data.componentToEdit) {
            case 'settingGeneral':
              this.moverseA('kBannerX');
              break;
            case 'footer':
              this.moverseA('KNewsX');
              break;
            case 'banner':
              this.moverseA('kBannerX');
              break;
            case 'koffers':
              this.moverseA('KOffersX');
              break;
            case 'productList':
              this.moverseA('KProductListX');
              break;
            case 'blog':
              this.moverseA('KBlogX');
              break;
            case 'wrapper':
              this.moverseA('KWrapperX');
              break;
            case 'newsletter':
              this.moverseA('KNewsX');
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
// CONCATENATED MODULE: ./pages/template9/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_template9vue_type_script_lang_js_ = (template9vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/template9/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_template9vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0ebff9ff"
  
)

/* harmony default export */ var template9 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map