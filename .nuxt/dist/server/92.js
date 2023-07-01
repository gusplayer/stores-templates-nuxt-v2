exports.ids = [92];
exports.modules = {

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2c7888f6", content, true, context)
};

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_a133779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(208);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_a133779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_a133779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_a133779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_a133779a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 251:
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

/***/ 269:
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
  
  var style0 = __webpack_require__(250)
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

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(620);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1b181152", content, true, context)
};

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_1c701b63_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(339);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_1c701b63_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_1c701b63_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_1c701b63_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_1c701b63_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_blog[data-v-1c701b63]{background:var(--background_color_1);box-sizing:border-box;margin-bottom:40px;padding-top:20px}.contenedor[data-v-1c701b63],.wrapper_blog[data-v-1c701b63]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.contenedor[data-v-1c701b63]{margin-top:40px}.content-item-productos[data-v-1c701b63]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.grid-products[data-v-1c701b63]{grid-gap:1rem;align-items:center;box-sizing:border-box;display:grid;gap:1rem;justify-content:center}.pagination-medium[data-v-1c701b63]{background:transparent;margin-top:10px}.pagination[data-v-1c701b63]{background:transparent;color:var(--color_text);font-size:18px}.product_pagination[data-v-1c701b63] .el-pagination.is-background .btn-next,.product_pagination[data-v-1c701b63] .el-pagination.is-background .btn-prev,.product_pagination[data-v-1c701b63] .el-pagination.is-background .el-pager li{background-color:transparent;color:var(--color_text)}.product_pagination[data-v-1c701b63] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-1c701b63] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-1c701b63] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--btnhover)}.product_pagination[data-v-1c701b63] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--color_icon);color:#fff}.txt-banner[data-v-1c701b63]{color:var(--color_title);font-family:var(--font-style-1)!important;font-weight:700}.tittle-banner-blog[data-v-1c701b63]{align-items:center}.banner-blog[data-v-1c701b63],.tittle-banner-blog[data-v-1c701b63]{display:flex;flex-direction:column;justify-content:center;width:100%}.banner-blog[data-v-1c701b63]{align-items:flex-start;padding-top:8px}#separator[data-v-1c701b63]{margin-left:20px}.content-tittle[data-v-1c701b63]{align-items:flex-end;background:#fff;border-radius:5px;display:flex;justify-content:flex-end;width:auto}.title[data-v-1c701b63]{color:#2c2930;font-family:var(--font-style-1)!important;font-size:25px;font-weight:700;margin-bottom:20px}.content-search-blog[data-v-1c701b63]{align-items:center;border-bottom:1px solid gray;display:flex;flex-direction:row;height:30px;margin-bottom:30px}.input-animated[data-v-1c701b63]{align-items:center;background:#fff;border:2px solid #303030;border-radius:50px;display:flex;flex-direction:row;justify-content:center;margin-bottom:-20px;transform:translateY(-50%)}.input-animated:hover>.input-text[data-v-1c701b63],.input-text[data-v-1c701b63]:focus{color:#303030;font-size:16px;padding:0 15px;width:240px}.input-animated:hover>.search-icon[data-v-1c701b63]{background:#fff;color:#000;cursor:pointer}.search-icon[data-v-1c701b63]{align-items:center;border-radius:50%;color:#303030;display:flex;height:40px;justify-content:center;transition:.4s;width:40px}.input-text[data-v-1c701b63]{background:none;border:none;color:#303030;font-family:var(--font-style-1)!important;font-size:0;outline:none;transition:.4s;width:0}.input-text[data-v-1c701b63]:focus{border:none}.empty-space[data-v-1c701b63]{margin-left:2px;margin-right:2px}.crumb[data-v-1c701b63]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;margin-top:4px;width:100%}.txt-crumb[data-v-1c701b63]{cursor:pointer;font-family:var(--font-style-1)!important;font-family:Arial,sans-serif;font-size:12px;line-height:14px;padding:2px 4px;transition:all .25s ease}.s1[data-v-1c701b63]:hover,.s2[data-v-1c701b63]:hover{background-color:#2c2930;color:#fff;transition:all .25s ease}@media (min-width:300px){.content-products[data-v-1c701b63]{box-shadow:0 6px 15px 6px #bfbfbf;width:100%}.txt-banner[data-v-1c701b63]{font-size:36px}#separator[data-v-1c701b63]{margin-left:10px}.content-search-blog[data-v-1c701b63]{display:flex;justify-content:center;width:90%}.input-text[data-v-1c701b63]{color:#303030;font-size:16px;padding:0 15px;width:240px}.empty-space[data-v-1c701b63],.title[data-v-1c701b63]{display:none}.crumb[data-v-1c701b63]{align-items:center;justify-content:center}}@media (min-width:768px){.grid-products[data-v-1c701b63]{grid-template-columns:repeat(2,minmax(0,1fr));width:95%}.txt-banner[data-v-1c701b63]{font-size:36px}#separator[data-v-1c701b63]{margin-left:10px}.content-search-blog[data-v-1c701b63]{justify-content:center;width:70%}.input-text[data-v-1c701b63]{padding:0;width:0}.empty-space[data-v-1c701b63],.title[data-v-1c701b63]{display:flex}}@media (min-width:1024px){.grid-products[data-v-1c701b63]{grid-template-columns:repeat(3,minmax(0,1fr));width:95%}}@media (max-width:768px){.grid-products[data-v-1c701b63]{grid-template-columns:repeat(2,minmax(0,1fr));width:90%}}@media (max-width:600px){.grid-products[data-v-1c701b63]{grid-template-columns:repeat(1,minmax(0,1fr));width:90%}}@media (min-width:1025px){.content-search-blog[data-v-1c701b63]{display:none}.crumb[data-v-1c701b63],.tittle-banner-blog[data-v-1c701b63]{align-items:flex-start;justify-content:flex-start;padding-left:40px}}@media (min-width:1280px){.grid-products[data-v-1c701b63]{gap:2rem;width:96%}.tittle-banner-blog[data-v-1c701b63]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:auto}.txt-banner[data-v-1c701b63]{font-size:48px}#separator[data-v-1c701b63]{margin-left:20px}.content-search-blog[data-v-1c701b63]{width:60%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/blog_page/Ko-Blog.vue?vue&type=template&id=1c701b63&scoped=true&
var render = function render() {
  var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3, _this$settingByTempla4, _this$settingByTempla5, _this$settingByTempla6;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper_blog",
    style: [_vm.settingByTemplate9[0].blog, _vm.settingByTemplate9[0].settingGeneral]
  }, [_vm._ssrNode("<div class=\"banner-blog\"" + _vm._ssrStyle(null, [{
    '--font-style-1': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate9[0]) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.settingGeneral) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.fount_1) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Poppins'
  }], null) + " data-v-1c701b63>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-1c701b63>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1",
    style: `color: ${_vm.settingByTemplate9[0].blog.breadcrumbs};`
  }, [_vm._v("\n          Home\n        ")])]), _vm._ssrNode(" <p class=\"txt-crumb\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate9[0].blog.breadcrumbs};`, null) + " data-v-1c701b63>\n        /\n      </p> <p class=\"txt-crumb s2\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate9[0].blog.breadcrumbs};`, null) + " data-v-1c701b63>\n        Blog\n      </p>")], 2), _vm._ssrNode(" <div class=\"tittle-banner-blog\" data-v-1c701b63><p class=\"txt-banner\" data-v-1c701b63>" + _vm._ssrEscape(_vm._s(_vm.$t('header_blog'))) + "</p></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"contenedor\"" + _vm._ssrStyle(null, [{
    '--font-style-1': (_this$settingByTempla4 = (_this$settingByTempla5 = this.settingByTemplate9[0]) === null || _this$settingByTempla5 === void 0 ? void 0 : (_this$settingByTempla6 = _this$settingByTempla5.settingGeneral) === null || _this$settingByTempla6 === void 0 ? void 0 : _this$settingByTempla6.fount_1) !== null && _this$settingByTempla4 !== void 0 ? _this$settingByTempla4 : 'Poppins'
  }], null) + " data-v-1c701b63>", "</div>", [_vm._ssrNode("<div class=\"content-search-blog\" data-v-1c701b63><div class=\"text-search\" data-v-1c701b63><p class=\"title\" data-v-1c701b63>Buscar Articulo</p></div> <div class=\"empty-space\" data-v-1c701b63></div> <div class=\"content-tittle\" data-v-1c701b63><div class=\"input-animated\" data-v-1c701b63><input type=\"text\" placeholder=\"¿Que deseas buscar?\"" + _vm._ssrAttr("value", _vm.search) + " class=\"input-text\" data-v-1c701b63> <span class=\"search-icon\" data-v-1c701b63><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" width=\"20px\" height=\"20px\" class=\"search-header\" data-v-1c701b63><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\" data-v-1c701b63></path></svg></span></div></div></div> "), _vm._ssrNode("<div class=\"content-item w-full\" data-v-1c701b63>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-1c701b63>", "</div>", [_vm._ssrNode("<div class=\"grid-products\" data-v-1c701b63>", "</div>", _vm._l(_vm.filteredList, function (article) {
    return _vm._ssrNode("<div class=\"content-products\" data-v-1c701b63>", "</div>", [_c('KoblogCard', {
      staticStyle: {
        "max-height": "560px"
      },
      attrs: {
        "article": article,
        "blog": _vm.settingByTemplate9[0].blog,
        "settingGeneral": _vm.settingByTemplate9[0].settingGeneral
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm.filteredList.length == 0 ? _vm._ssrNode("<div class=\"content-products-empty\" data-v-1c701b63>", "</div>", [_vm._ssrNode("<div class=\"header-content-logo\" data-v-1c701b63>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n                  `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n                "
    }],
    staticClass: "header-logo",
    attrs: {
      "alt": "Logo Img"
    }
  })])], 1), _vm._ssrNode(" <p class=\"txt-products-empty\" data-v-1c701b63>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-1c701b63>", "</div>", [_vm.filteredList.length > 12 ? _vm._ssrNode("<div class=\"product_pagination\" data-v-1c701b63>", "</div>", [_c('el-pagination', {
    staticClass: "pagination",
    attrs: {
      "background": "",
      "layout": "prev, pager, next",
      "total": _vm.filteredList.length,
      "page-size": 12,
      "current-page": _vm.currentPage
    },
    on: {
      "update:currentPage": function ($event) {
        _vm.currentPage = $event;
      },
      "update:current-page": function ($event) {
        _vm.currentPage = $event;
      }
    }
  })], 1) : _vm._e()])], 2)])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/blog_page/Ko-Blog.vue?vue&type=template&id=1c701b63&scoped=true&

// EXTERNAL MODULE: ./components/template9/_blog/blogcard.vue + 4 modules
var blogcard = __webpack_require__(269);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/blog_page/Ko-Blog.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_Blogvue_type_script_lang_js_ = ({
  name: 'Ko-Blog',
  components: {
    KoblogCard: blogcard["a" /* default */]
  },
  props: {
    dataStore: Object,
    settingByTemplate9: Array
  },
  data() {
    return {
      currentPage: 1,
      search: ''
    };
  },
  computed: {
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
  }
});
// CONCATENATED MODULE: ./components/template9/blog_page/Ko-Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_page_Ko_Blogvue_type_script_lang_js_ = (Ko_Blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/blog_page/Ko-Blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(619)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_page_Ko_Blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1c701b63",
  "2d42b7c6"
  
)

/* harmony default export */ var Ko_Blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=92.js.map