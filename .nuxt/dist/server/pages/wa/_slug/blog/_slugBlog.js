exports.ids = [339];
exports.modules = {

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wa/_slug/blog/_slugBlog.vue?vue&type=template&id=63af6b8e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex flex-col justify-center items-center",
    attrs: {
      "id": "width"
    }
  }, [_c('KArticleWapi')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/wa/_slug/blog/_slugBlog.vue?vue&type=template&id=63af6b8e&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wa/_slug/blog/_slugBlog.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugBlogvue_type_script_lang_js_ = ({
  components: {
    KArticleWapi: () => __webpack_require__.e(/* import() */ 186).then(__webpack_require__.bind(null, 1305))
  },
  layout: 'wa',
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
      if (window.innerWidth > 1300) {
        widthOutput.style.width = '900px';
      } else {
        widthOutput.style.width = window.innerWidth + 'px';
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/wa/_slug/blog/_slugBlog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_slugBlogvue_type_script_lang_js_ = (_slugBlogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/wa/_slug/blog/_slugBlog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_slugBlogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7a662f2d"
  
)

/* harmony default export */ var _slugBlog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slugBlog.js.map