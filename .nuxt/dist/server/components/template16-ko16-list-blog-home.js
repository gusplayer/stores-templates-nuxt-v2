exports.ids = [142];
exports.modules = {

/***/ 1182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/ko16-listBlogHome.vue?vue&type=template&id=88d22428&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.listArticulos.length > 0 ? _c('div', {
    staticClass: "w-full flex justify-center items-center py-25 lg:py-40 px-10",
    style: `background-color: ${_vm.listBlogHome['--background_color_1']}`
  }, [_vm._ssrNode("<div class=\"w-full max-w-[1200px] h-auto relative flex flex-col items-center justify-center overflow-hidden mt-20\">", "</div>", [_vm._ssrNode("<p class=\"w-full text-center mb-15 text-25 md:text-28 lg:text-32\"" + _vm._ssrStyle(null, `color: ${_vm.listBlogHome.color_title}; font-weight: ${_vm.listBlogHome.fontWeighTitle}; font-size: ${_vm.listBlogHome.fontSizeTitle};`, null) + ">" + _vm._ssrEscape("\n      " + _vm._s(_vm.listBlogHome.title) + "\n    ") + "</p> <p class=\"w-full text-center mb-50 text-14\"" + _vm._ssrStyle(null, `color: ${_vm.listBlogHome.color_text}; font-weight: ${_vm.listBlogHome.fontWeighText}; font-size: ${_vm.listBlogHome.fontSizeText};`, null) + ">" + _vm._ssrEscape("\n      " + _vm._s(_vm.listBlogHome.text) + "\n    ") + "</p> "), _c('div', {
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
        "setting-general": _vm.settingGeneral,
        "card-blog": _vm.cardBlog
      }
    })], 1);
  }), 0)])], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template16/ko16-listBlogHome.vue?vue&type=template&id=88d22428&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/ko16-listBlogHome.vue?vue&type=script&lang=js&
/* harmony default export */ var ko16_listBlogHomevue_type_script_lang_js_ = ({
  name: 'Ko16ListBlogHome',
  components: {
    KoBlogCard: () => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, 1282))
  },
  props: {
    listBlogHome: {
      type: Object,
      required: true
    },
    settingGeneral: {
      type: Object,
      required: true
    },
    dataStore: {
      type: Object,
      required: true
    },
    cardBlog: {
      type: Object,
      required: true
    }
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
// CONCATENATED MODULE: ./components/template16/ko16-listBlogHome.vue?vue&type=script&lang=js&
 /* harmony default export */ var template16_ko16_listBlogHomevue_type_script_lang_js_ = (ko16_listBlogHomevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template16/ko16-listBlogHome.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template16_ko16_listBlogHomevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ff96ef8a"
  
)

/* harmony default export */ var ko16_listBlogHome = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=template16-ko16-list-blog-home.js.map