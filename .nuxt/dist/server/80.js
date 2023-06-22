exports.ids = [80];
exports.modules = {

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(261);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("63c174c8", content, true, context)
};

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_0bd106ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(213);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_0bd106ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_0bd106ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_0bd106ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_0bd106ed_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".producto[data-v-0bd106ed]{align-items:center;background-color:var(--CardBg);display:flex;flex-direction:column;justify-content:flex-start;width:100%}.container[data-v-0bd106ed]{position:relative}.content-imge[data-v-0bd106ed]{cursor:pointer;display:flex;height:auto;justify-content:flex-start;position:relative;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-imge[data-v-0bd106ed],.images[data-v-0bd106ed]{overflow:hidden;width:100%}.images[data-v-0bd106ed]{-o-object-fit:cover;object-fit:cover;-webkit-transition:all .5s ease 0s}.container:hover .images[data-v-0bd106ed]{overflow:hidden;position:relative;transform:scale(1.1);transition-duration:.15s;transition-duration:.5s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition:all .5s ease 0s}.empty[data-v-0bd106ed]{background:#ccc;height:100%;width:100%}.text-tittle[data-v-0bd106ed]{grid-gap:0;display:grid;font:inherit;font-family:var(--font-style-1);font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-day[data-v-0bd106ed],.txt-month[data-v-0bd106ed]{color:var(--ColorText_Date);font-family:var(--font-style-1);font-weight:600}.txt-day[data-v-0bd106ed],.txt-month[data-v-0bd106ed]{font-weight:600}.txt-month[data-v-0bd106ed]{letter-spacing:.3px;text-transform:uppercase}.content-abstract-article[data-v-0bd106ed],.content-tittle-article[data-v-0bd106ed],.content-txt-article[data-v-0bd106ed]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;padding:0 5px;width:100%}.content-date-aticle[data-v-0bd106ed]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.txt-article-abstract[data-v-0bd106ed]{color:var(--CardDescription);font-family:var(--font-style-1)}@media (min-width:300px){.container[data-v-0bd106ed]{max-width:100%}.empty[data-v-0bd106ed],.images[data-v-0bd106ed]{height:221px}.txt-day[data-v-0bd106ed]{font-size:15px}.txt-month[data-v-0bd106ed]{font-size:10px}.overlay-top[data-v-0bd106ed]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:var(--ColorBg_Date);border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);height:45px;left:10px;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:10px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:40px}.txt-article-tittle[data-v-0bd106ed]{align-items:flex-start;color:var(--CardTitle);cursor:pointer;display:flex;font-family:var(--font-style-1);font-size:14px;font-weight:500;justify-content:flex-start;letter-spacing:.3px;margin-bottom:15px;margin-top:20px;text-align:left;transition-duration:.15s;transition-duration:.5s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.container:hover .txt-article-tittle[data-v-0bd106ed]{color:var(--CardTitle);transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-article-create[data-v-0bd106ed],.txt-article-day[data-v-0bd106ed],.txt-article-month[data-v-0bd106ed]{font-size:12px;letter-spacing:.36px}.content-date-article[data-v-0bd106ed]{margin-bottom:15px}.content-border-article[data-v-0bd106ed]{background-color:#eee;height:1px;margin-bottom:15px;width:60px}.txt-article-abstract[data-v-0bd106ed]{font-size:12px;margin-bottom:15px;text-align:left}.btn[data-v-0bd106ed]{font-size:14px;line-height:24px}}@media (min-width:425px){.empty[data-v-0bd106ed],.images[data-v-0bd106ed]{height:272px}}@media (min-width:768px){.txt-day[data-v-0bd106ed]{font-size:22px}.txt-month[data-v-0bd106ed]{font-size:14px}.overlay-top[data-v-0bd106ed]{height:65px;left:10px;right:0;top:10px;width:60px}.txt-article-tittle[data-v-0bd106ed]{font-size:16px}.txt-article-abstract[data-v-0bd106ed]{font-size:14px}.empty[data-v-0bd106ed],.images[data-v-0bd106ed]{height:250px}}@media (min-width:1024px){.overlay-top[data-v-0bd106ed]{height:55px;left:10px;right:0;top:10px;width:50px}}@media (min-width:1280px){.txt-day[data-v-0bd106ed]{font-size:20px}}@media (min-width:1400px){.empty[data-v-0bd106ed],.images[data-v-0bd106ed]{height:298px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_blog/blogcard.vue?vue&type=template&id=0bd106ed&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto h-full",
    style: _vm.settingKblog
  }, [_vm._ssrNode("<div class=\"container\" data-v-0bd106ed>", "</div>", [_c('nuxt-link', {
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
  }, [_c('div', {
    staticClass: "content-imge"
  }, [_vm.article.imagen_principal_url ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(this.article.imagen_principal_url, 400, 400),
      expression: "idCloudinary(this.article.imagen_principal_url, 400, 400)"
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
  }, [_vm._v("\n            " + _vm._s(this.nameMonth) + "\n          ")])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-txt-article\" data-v-0bd106ed>", "</div>", [_vm._ssrNode("<div class=\"content-tittle-article\" data-v-0bd106ed>", "</div>", [_c('nuxt-link', {
    staticClass: "contet",
    attrs: {
      "to": {
        path: `/blog/` + _vm.article.slug,
        query: {
          idBlog: _vm.article.id
        }
      }
    }
  }, [_c('p', {
    staticClass: "txt-article-tittle"
  }, [_vm._v("\n            " + _vm._s(this.article.titulo) + "\n          ")])])], 1), _vm._ssrNode(" <div class=\"content-abstract-article\" data-v-0bd106ed><p class=\"txt-article-abstract\" data-v-0bd106ed>" + _vm._ssrEscape("\n          " + _vm._s(this.article.resumen) + "\n        ") + "</p></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/_blog/blogcard.vue?vue&type=template&id=0bd106ed&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_blog/blogcard.vue?vue&type=script&lang=js&

/* harmony default export */ var blogcardvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-Blogcard',
  props: {
    article: Object,
    settingKblog: Object
  },
  mounted() {
    if (this.article.created_at) {
      let domain = this.article.created_at;
      let result = domain.split(' ');
      this.shippingCreated = result[0];
      let data = this.shippingCreated.split('-');
      this.dayCreate = data[2];
      this.monthCreate = data[1];
      this.yearCreate = data[0];
    }
    if (this.monthCreate == 1) {
      this.nameMonth = 'Ene';
    }
    if (this.monthCreate == 2) {
      this.nameMonth = 'Feb';
    }
    if (this.monthCreate == 3) {
      this.nameMonth = 'Mar';
    }
    if (this.monthCreate == 4) {
      this.nameMonth = 'Abr';
    }
    if (this.monthCreate == 5) {
      this.nameMonth = 'May';
    }
    if (this.monthCreate == 6) {
      this.nameMonth = 'Jun';
    }
    if (this.monthCreate == 7) {
      this.nameMonth = 'Jul';
    }
    if (this.monthCreate == 8) {
      this.nameMonth = 'Ago';
    }
    if (this.monthCreate == 9) {
      this.nameMonth = 'Sep';
    }
    if (this.monthCreate == 10) {
      this.nameMonth = 'Oct';
    }
    if (this.monthCreate == 11) {
      this.nameMonth = 'Nov';
    }
    if (this.monthCreate == 12) {
      this.nameMonth = 'Dic';
    }
  },
  data() {
    return {
      hover: false,
      shippingCreated: '',
      dayCreate: '',
      monthCreate: '',
      yearCreate: '',
      nameMonth: ''
    };
  }
});
// CONCATENATED MODULE: ./components/template11/_blog/blogcard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _blog_blogcardvue_type_script_lang_js_ = (blogcardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/_blog/blogcard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(260)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _blog_blogcardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0bd106ed",
  "eeb18412"
  
)

/* harmony default export */ var blogcard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(699);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("b66d9802", content, true, context)
};

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blog_vue_vue_type_style_index_0_id_11909aaa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blog_vue_vue_type_style_index_0_id_11909aaa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blog_vue_vue_type_style_index_0_id_11909aaa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blog_vue_vue_type_style_index_0_id_11909aaa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_blog_vue_vue_type_style_index_0_id_11909aaa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-11909aaa]{align-items:center;background:#fff;display:flex;font-size:18px;justify-content:center;text-align:center}.wrapper-content[data-v-11909aaa]{background-color:var(--background_color_1);padding-bottom:64px;padding-top:40px;width:100%}.product-text[data-v-11909aaa],.wrapper-content[data-v-11909aaa],.wrapper-items-content[data-v-11909aaa]{align-items:center;display:flex;flex-direction:column;justify-content:center}.product-text[data-v-11909aaa]{margin-bottom:var(--marginbottomTitle);text-align:center;width:100%}.product-tittle[data-v-11909aaa],.tittle[data-v-11909aaa]{align-items:center;display:flex;flex-direction:column;justify-content:center}.tittle[data-v-11909aaa]{color:var(--color_title);font-family:var(--font-style-1);font-weight:var(--fontWeight);text-align:center}@media (min-width:300px){.wrapper-items[data-v-11909aaa],.wrapper-items-content[data-v-11909aaa]{width:90%}.tittle[data-v-11909aaa]{font-size:20px}}@media (min-width:768px){.wrapper-items[data-v-11909aaa],.wrapper-items-content[data-v-11909aaa]{width:95%}.tittle[data-v-11909aaa]{font-size:var(--fontSize)}}@media (min-width:1200px){.wrapper-items[data-v-11909aaa]{height:auto;max-width:1200px;width:100%}}@media (min-width:1920px){.product-tittle[data-v-11909aaa]{width:100%}.tittle[data-v-11909aaa]{font-size:var(--fontSize);line-height:34px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-blog.vue?vue&type=template&id=11909aaa&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-content",
    style: [_vm.settingKblog, _vm.settingGeneral, {
      '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"wrapper-items-content\" data-v-11909aaa><div class=\"product-text\" data-v-11909aaa><div class=\"product-tittle\" data-v-11909aaa><p class=\"tittle\" data-v-11909aaa>" + _vm._ssrEscape(_vm._s(_vm.settingKblog.title)) + "</p></div></div></div> "), _vm._ssrNode("<div class=\"wrapper-items\" data-v-11909aaa>", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-11909aaa>", "</div>", _vm._l(_vm.filteredList, function (article, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass(null, `swiper-slide wrapper-${index + 1}`) + " style=\"height: auto\" data-v-11909aaa>", "</div>", [_c('Kblog', {
      attrs: {
        "article": article,
        "settingKblog": _vm.settingKblog
      }
    })], 1);
  }), 0)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/ko-blog.vue?vue&type=template&id=11909aaa&scoped=true&

// EXTERNAL MODULE: ./components/template11/_blog/blogcard.vue + 4 modules
var blogcard = __webpack_require__(272);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-blog.vue?vue&type=script&lang=js&

/* harmony default export */ var ko_blogvue_type_script_lang_js_ = ({
  name: 'ko-Blog',
  components: {
    Kblog: blogcard["a" /* default */]
  },
  props: {
    dataStore: Object,
    settingKblog: Object,
    settingGeneral: Object
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: '',
        spaceBetween: '',
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
// CONCATENATED MODULE: ./components/template11/ko-blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var template11_ko_blogvue_type_script_lang_js_ = (ko_blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/ko-blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(698)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template11_ko_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "11909aaa",
  "573e3891"
  
)

/* harmony default export */ var ko_blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=80.js.map