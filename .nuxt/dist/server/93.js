exports.ids = [93];
exports.modules = {

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/ko-blog.vue?vue&type=template&id=725aa6ae&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-content",
    style: [_vm.blog, _vm.settingGeneral]
  }, [_vm._ssrNode("<div" + _vm._ssrStyle(null, [{
    '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Poppins'
  }], null) + " data-v-725aa6ae>", "</div>", [_vm._ssrNode("<div class=\"wrapper-items-content\" data-v-725aa6ae><div class=\"product-text\" data-v-725aa6ae><div class=\"product-tittle\" data-v-725aa6ae><span class=\"tittle\" data-v-725aa6ae>" + _vm._ssrEscape(_vm._s(_vm.blog.title)) + "</span></div></div></div> "), _vm._ssrNode("<div class=\"wrapper-items\" data-v-725aa6ae>", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-725aa6ae>", "</div>", _vm._l(_vm.filteredList, function (article, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass(null, `swiper-slide wrapper-${index + 1}`) + " data-v-725aa6ae>", "</div>", [_c('Kblog', {
      staticStyle: {
        "max-height": "560px"
      },
      attrs: {
        "article": article,
        "blog": _vm.blog,
        "settingGeneral": _vm.settingGeneral
      }
    })], 1);
  }), 0)])])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/ko-blog.vue?vue&type=template&id=725aa6ae&scoped=true&

// EXTERNAL MODULE: ./components/template9/_blog/blogcard.vue + 4 modules
var blogcard = __webpack_require__(264);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/ko-blog.vue?vue&type=script&lang=js&

/* harmony default export */ var ko_blogvue_type_script_lang_js_ = ({
  name: 'ko-Blog',
  components: {
    Kblog: blogcard["a" /* default */]
  },
  props: {
    dataStore: Object,
    blog: Object,
    settingGeneral: Object
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: '',
        spaceBetween: 30,
        breakpoints: {
          10000: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          2560: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
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
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    listArticulos() {
      return this.$store.state.listArticulos;
    },
    filterArticles() {
      const initial = this.currentPage * 12 - 12;
      const final = initial + 12;
      return this.filteredList.slice(initial, final);
    },
    filteredList() {
      if (this.search) {
        return this.listArticulos.filter(element => {
          return element.titulo.toLowerCase().includes(this.search.toLowerCase());
        });
      } else {
        return this.listArticulos;
      }
    }
  },
  mounted() {
    this.mySwiper.slideTo(3, 1000, false);
  },
  watch: {}
});
// CONCATENATED MODULE: ./components/template9/ko-blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var template9_ko_blogvue_type_script_lang_js_ = (ko_blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/ko-blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(781)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template9_ko_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "725aa6ae",
  "784c3a56"
  
)

/* harmony default export */ var ko_blog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2c7888f6", content, true, context)
};

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_a133779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(207);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_a133779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_a133779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_a133779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_a133779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".producto[data-v-a133779a]{align-items:center;background-color:#f8f8f8;cursor:pointer;display:flex;flex-direction:column;justify-content:center;max-height:560px;width:100%}.container[data-v-a133779a]{position:relative}.images[data-v-a133779a]{-o-object-fit:cover;object-fit:cover;overflow:hidden}.empty[data-v-a133779a],.images[data-v-a133779a]{height:100%;max-height:560px;width:100%}.empty[data-v-a133779a]{background:#ccc}.text-tittle[data-v-a133779a]{grid-gap:0;display:grid;font:inherit;font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-bottom-autor[data-v-a133779a],.content-bottom-titulo[data-v-a133779a]{font:inherit;font-size:100%;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.content-imge[data-v-a133779a]{align-items:center;display:flex;justify-content:center}.txt-day[data-v-a133779a],.txt-month[data-v-a133779a]{color:var(--color_text_date);font-family:var(--font-style-1);font-weight:600}.txt-autorart[data-v-a133779a],.txt-tituloart[data-v-a133779a]{color:var(--color_title_card);font-family:var(--font-style-1);font-weight:600}.text-cart-read[data-v-a133779a]{text-align:left;width:90px}.txt-read[data-v-a133779a]{color:var(--color_title_card);font-family:var(--font-style-1);font-weight:600}.txt-read[data-v-a133779a]:hover{border-bottom:2px solid #2c2930;width:auto;z-index:20}.txt-day[data-v-a133779a],.txt-month[data-v-a133779a]{font-weight:600}.txt-month[data-v-a133779a]{letter-spacing:.3px;text-transform:uppercase}.overlay-bottom-shadow[data-v-a133779a]{background:linear-gradient(180deg,transparent 30%,transparent 50%,#000);bottom:0;height:100%;left:0;max-height:100%;max-width:100%;opacity:.5;overflow:hidden;position:absolute;right:0;width:100%;z-index:10}.container:hover .overlay-bottom-shadow[data-v-a133779a]{background:linear-gradient(180deg,transparent 30%,rgba(0,0,0,.904) 90%,#000)}@media (min-width:300px){.container[data-v-a133779a]{max-width:100%}.txt-day[data-v-a133779a]{font-size:15px}.txt-month[data-v-a133779a]{font-size:10px}.overlay-top[data-v-a133779a]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:var(--color_bg_date);border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:45px;left:10px;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:10px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:40px}.text-cart[data-v-a133779a]{text-align:left;width:85%}.text-cart[data-v-a133779a],.text-cart-read[data-v-a133779a]{margin-left:20px}.txt-tituloart[data-v-a133779a]{font-size:22px;margin-bottom:20px}.txt-read[data-v-a133779a]{font-size:13px}.overlay-bottom[data-v-a133779a]{bottom:45px;height:180px}.overlay-bottom[data-v-a133779a],.overlay-bottom-autor[data-v-a133779a]{left:0;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.overlay-bottom-autor[data-v-a133779a]{align-items:flex-start;bottom:40px;height:40px;justify-content:flex-start}}@media (max-width:580px){.empty[data-v-a133779a],.images[data-v-a133779a]{height:100%;max-height:300px}}@media (min-width:581px){.text-cart[data-v-a133779a]{width:85%}.txt-tituloart[data-v-a133779a]{font-size:18px}}@media (min-width:768px){.txt-day[data-v-a133779a]{font-size:22px}.txt-month[data-v-a133779a]{font-size:14px}.overlay-top[data-v-a133779a]{height:65px;left:10px;right:0;top:10px;width:60px}.text-cart[data-v-a133779a]{width:85%}.text-cart[data-v-a133779a],.text-cart-read[data-v-a133779a]{margin-left:30px}.txt-tituloart[data-v-a133779a]{font-size:30px}.txt-read[data-v-a133779a]{font-size:16px}.overlay-bottom[data-v-a133779a]{bottom:60px;height:300px;left:0;right:0;width:100%}.overlay-bottom-autor[data-v-a133779a]{bottom:60px;height:40px;left:0;right:0;width:100%}.images[data-v-a133779a]{height:560px}.empty[data-v-a133779a]{height:3560px}}@media (min-width:1024px){.overlay-top[data-v-a133779a]{height:65px;left:10px;right:0;top:10px;width:60px}.overlay-bottom[data-v-a133779a]{bottom:20px;height:200px;left:0;right:0;width:100%}.container:hover .overlay-bottom[data-v-a133779a]{bottom:90px}.overlay-bottom-autor[data-v-a133779a]{bottom:0;height:0;left:0;right:0;width:100%}.container:hover .overlay-bottom-autor[data-v-a133779a]{bottom:65px;height:40px}}@media (min-width:1025px){.txt-tituloart[data-v-a133779a]{font-size:25px}}@media (min-width:1280px){.txt-day[data-v-a133779a]{font-size:25px}.txt-tituloart[data-v-a133779a]{font-size:36px;letter-spacing:-1px;line-height:1}.overlay-top[data-v-a133779a]{height:75px;left:10px;right:0;top:10px;width:70px}.overlay-bottom[data-v-a133779a]{bottom:10px;height:250px;left:0;right:0;width:100%}.container:hover .overlay-bottom[data-v-a133779a]{bottom:50px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_blog/blogcard.vue?vue&type=template&id=a133779a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto",
    style: [_vm.blog, _vm.settingGeneral, _vm.currentblog, _vm.currentsettingGeneral]
  }, [_vm._ssrNode("<div class=\"container\"" + _vm._ssrStyle(null, [{
    '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Poppins'
  }, {
    '--font-style-1': this.currentsettingGeneral && this.currentsettingGeneral.fount_1 ? this.currentsettingGeneral.fount_1 : 'Poppins'
  }], null) + " data-v-a133779a>", "</div>", [_c('nuxt-link', {
    staticClass: "contet",
    attrs: {
      "to": {
        path: `/blog/` + _vm.article.slug,
        query: {
          idBlog: _vm.article.id
        }
      }
    }
  }, [_c('div', {
    staticClass: "figure-img"
  }, [_c('figure', {
    staticClass: "content-imge"
  }, [_vm.article.imagen_principal_url ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(this.article.imagen_principal_url, 550, 550),
      expression: "idCloudinary(this.article.imagen_principal_url, 550, 550)"
    }],
    staticClass: "images",
    attrs: {
      "alt": "right-banner"
    }
  }) : _c('div', {
    staticClass: "empty"
  })])])]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "contet",
    attrs: {
      "to": {
        path: `/blog/` + _vm.article.slug,
        query: {
          idBlog: _vm.article.id
        }
      }
    }
  }, [_c('div', {
    staticClass: "overlay-top"
  }, [_c('div', {
    staticClass: "text-tittle"
  }, [_c('p', {
    staticClass: "txt-day"
  }, [_vm._v("\n            " + _vm._s(this.dayCreate) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "txt-month"
  }, [_vm._v("\n            " + _vm._s(this.nameMonth) + "\n          ")])])])]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "contet-bottom",
    attrs: {
      "to": {
        path: `/blog/` + _vm.article.slug,
        query: {
          idBlog: _vm.article.id
        }
      }
    }
  }, [_c('div', {
    staticClass: "overlay-bottom z-20"
  }, [_c('div', {
    staticClass: "content-bottom-titulo"
  }, [_c('div', {
    staticClass: "text-cart"
  }, [_c('p', {
    staticClass: "w-full txt-tituloart"
  }, [_vm._v("\n              " + _vm._s(this.article.titulo) + "\n            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "overlay-bottom-autor z-20"
  }, [_c('div', {
    staticClass: "content-bottom-autor"
  }, [_c('div', {
    staticClass: "text-cart-read"
  }, [_c('p', {
    staticClass: "txt-read"
  }, [_vm._v(_vm._s(_vm.$t('home_leerMas')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "overlay-bottom-shadow"
  })])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/_blog/blogcard.vue?vue&type=template&id=a133779a&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/_blog/blogcard.vue?vue&type=script&lang=js&

/* harmony default export */ var blogcardvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-Blogcard',
  props: {
    article: Object,
    blog: Object,
    settingGeneral: Object,
    currentblog: Object,
    currentsettingGeneral: Object
  },
  mounted() {
    if (this.article.created_at) {
      const [shippingCreated] = this.article.created_at.split(' ');
      const [yearCreate, monthCreate, dayCreate] = shippingCreated.split('-');
      this.dayCreate = dayCreate;
      this.monthCreate = monthCreate;
      this.yearCreate = yearCreate;
    }
    this.nameMonth = this.monthNames[parseInt(this.monthCreate)];
  },
  data() {
    return {
      shippingCreated: '',
      dayCreate: '',
      monthCreate: '',
      yearCreate: '',
      nameMonth: '',
      monthNames: {
        1: 'Ene',
        2: 'Feb',
        3: 'Mar',
        4: 'Abr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Ago',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dic'
      }
    };
  }
});
// CONCATENATED MODULE: ./components/template9/_blog/blogcard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _blog_blogcardvue_type_script_lang_js_ = (blogcardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/_blog/blogcard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(247)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _blog_blogcardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a133779a",
  "e564b6dc"
  
)

/* harmony default export */ var blogcard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(782);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("301c9a43", content, true, context)
};

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blog_vue_vue_type_style_index_0_id_725aa6ae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(416);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blog_vue_vue_type_style_index_0_id_725aa6ae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blog_vue_vue_type_style_index_0_id_725aa6ae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blog_vue_vue_type_style_index_0_id_725aa6ae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blog_vue_vue_type_style_index_0_id_725aa6ae_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-725aa6ae]{align-items:center;background-color:var(--background_color_1);display:flex;font-size:18px;justify-content:center;text-align:center}.wrapper-content[data-v-725aa6ae]{background-color:var(--background_color_1);padding-bottom:64px;width:100%}.wrapper-content[data-v-725aa6ae],.wrapper-items-content[data-v-725aa6ae]{align-items:center;display:flex;flex-direction:column;justify-content:center}.wrapper-items[data-v-725aa6ae],.wrapper-items-content[data-v-725aa6ae]{width:93vw}.product-text[data-v-725aa6ae]{margin-bottom:60px;margin-top:60px;width:100%}.product-text[data-v-725aa6ae],.product-tittle[data-v-725aa6ae]{align-items:center;display:flex;flex-direction:column;justify-content:center}.tittle[data-v-725aa6ae]{align-items:center;color:var(--color_title);display:flex;flex-direction:column;font-family:var(--font-style-1)!important;font-weight:700;justify-content:center}@media (min-width:300px){.product-tittle[data-v-725aa6ae]{width:75%}.tittle[data-v-725aa6ae]{font-size:30px;line-height:34px}}@media (min-width:1920px){.product-tittle[data-v-725aa6ae]{width:100%}.tittle[data-v-725aa6ae]{font-size:36px;line-height:34px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=93.js.map