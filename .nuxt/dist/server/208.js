exports.ids = [208];
exports.modules = {

/***/ 1098:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-listBlogHome.vue?vue&type=template&id=542d8c27&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.listArticulos.length > 0 ? _c('div', {
    staticClass: "w-full flex justify-center items-center py-20 lg:py-30 px-10",
    style: `background-color: ${_vm.listBlogHome['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full h-auto relative max-w-7xl flex flex-col items-center justify-center overflow-hidden\">", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-row justify-between items-start md:items-center mb-25\">", "</div>", [_vm._ssrNode("<p class=\"w-full text-start\"" + _vm._ssrStyle(null, `color: ${_vm.listBlogHome.color_title}; font-size: ${_vm.listBlogHome.fontSizeTitle}; font-weight: ${_vm.listBlogHome.fontWeighTitle};`, null) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.listBlogHome.title) + "\n      ") + "</p> "), _c('nuxt-link', {
    staticClass: "w-full text-end",
    style: `color: ${_vm.listBlogHome.color_text_btn}; font-size: ${_vm.listBlogHome.fontSizeTextBtn}; font-weight: ${_vm.listBlogHome.fontWeighTextBtn};`,
    attrs: {
      "to": {
        path: `/blog`
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.listBlogHome.text_btn) + "\n        "), _c('FlechaRight-icon', {
    style: `color: ${_vm.listBlogHome.color_text_btn}; font-size: ${_vm.listBlogHome.fontSizeTextBtn}; font-weight: ${_vm.listBlogHome.fontWeighTextBtn};`
  })], 1)], 2), _vm._ssrNode(" "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "w-full h-full"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper w-full h-full\">", "</div>", _vm._l(_vm.listArticulos, function (article) {
    return _vm._ssrNode("<div class=\"swiper-slide w-full h-full\">", "</div>", [_c('KoBlogCard', {
      staticClass: "giftLoad w-full h-full",
      attrs: {
        "article": article,
        "settingGeneral": _vm.settingGeneral,
        "cardBlog": _vm.cardBlog
      }
    })], 1);
  }), 0)])], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/ko14-listBlogHome.vue?vue&type=template&id=542d8c27&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-listBlogHome.vue?vue&type=script&lang=js&
/* harmony default export */ var ko14_listBlogHomevue_type_script_lang_js_ = ({
  name: 'Ko14-listBlogHome',
  props: {
    listBlogHome: Object,
    settingGeneral: Object,
    dataStore: Object,
    cardBlog: Object
  },
  components: {
    KoBlogCard: () => __webpack_require__.e(/* import() */ 33).then(__webpack_require__.bind(null, 1139))
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        // autoplay: {
        //   delay: 7000,
        //   disableOnInteraction: false,
        // },
        breakpoints: {
          10000: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1023: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          580: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos;
    },
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
});
// CONCATENATED MODULE: ./components/template14/ko14-listBlogHome.vue?vue&type=script&lang=js&
 /* harmony default export */ var template14_ko14_listBlogHomevue_type_script_lang_js_ = (ko14_listBlogHomevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/ko14-listBlogHome.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template14_ko14_listBlogHomevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3e6a374e"
  
)

/* harmony default export */ var ko14_listBlogHome = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=208.js.map