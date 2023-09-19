exports.ids = [55,244];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("8789bc30", content, true, context)
};

/***/ }),

/***/ 1261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/blog_page/Ko-Blog.vue?vue&type=template&id=61299a18&scoped=true&
var render = function render() {
  var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-blog",
    style: [_vm.settingByTemplate11[0].blog, _vm.settingByTemplate11[0].setting11General, {
      '--font-style-1': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate11[0]) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.setting11General) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.fount_1) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Roboto'
    }]
  }, [_vm._ssrNode("<div class=\"bannerBlog\" data-v-61299a18>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-61299a18>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-61299a18>/</p> <p class=\"txt-crumb s2\" data-v-61299a18>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('header_blog')) + "\n      ") + "</p>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-art-blog\" data-v-61299a18>", "</div>", [_vm._ssrNode("<div class=\"banner-blog\" data-v-61299a18><div class=\"tittle-banner-blog\" data-v-61299a18><p class=\"txt-banner\" data-v-61299a18>Últimos blogs</p></div></div> "), _vm._ssrNode("<div class=\"contenedor\" data-v-61299a18>", "</div>", [_vm._ssrNode("<div class=\"content-item w-full\" data-v-61299a18>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-61299a18>", "</div>", [_vm._ssrNode("<div class=\"grid-products\" data-v-61299a18>", "</div>", _vm._l(_vm.filteredList, function (article) {
    return _vm._ssrNode("<div class=\"content-products\" data-v-61299a18>", "</div>", [_c('KoblogCard', {
      attrs: {
        "article": article,
        "settingKblog": _vm.settingByTemplate11[0].blog
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm.filteredList.length == 0 ? _vm._ssrNode("<div class=\"content-products-empty\" data-v-61299a18>", "</div>", [_vm._ssrNode("<div class=\"header-content-logo\" data-v-61299a18>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-logo",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${this.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
      expression: "\n                    `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`\n                  "
    }],
    staticClass: "header-logo",
    attrs: {
      "alt": "Logo Img"
    }
  })])], 1), _vm._ssrNode(" <p class=\"txt-products-empty\" data-v-61299a18>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-61299a18>", "</div>", [_vm.filteredList.length > 12 ? _vm._ssrNode("<div class=\"product_pagination\" data-v-61299a18>", "</div>", [_c('el-pagination', {
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
  })], 1) : _vm._e()])], 2)])])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/blog_page/Ko-Blog.vue?vue&type=template&id=61299a18&scoped=true&

// EXTERNAL MODULE: ./components/template11/_blog/blogcard.vue + 4 modules
var blogcard = __webpack_require__(235);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/blog_page/Ko-Blog.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_Blogvue_type_script_lang_js_ = ({
  name: 'Ko-Blog',
  components: {
    KoblogCard: blogcard["default"]
  },
  props: {
    dataStore: Object,
    settingByTemplate11: Array
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
// CONCATENATED MODULE: ./components/template11/blog_page/Ko-Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_page_Ko_Blogvue_type_script_lang_js_ = (Ko_Blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/blog_page/Ko-Blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(929)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_page_Ko_Blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "61299a18",
  "3147c26e"
  
)

/* harmony default export */ var Ko_Blog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_84eefc06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_84eefc06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_84eefc06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_84eefc06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blogcard_vue_vue_type_style_index_0_id_84eefc06_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".producto[data-v-84eefc06]{align-items:center;background-color:var(--CardBg);display:flex;flex-direction:column;justify-content:flex-start;width:100%}.container[data-v-84eefc06]{position:relative}.content-imge[data-v-84eefc06]{cursor:pointer;display:flex;height:auto;justify-content:flex-start;position:relative;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-imge[data-v-84eefc06],.images[data-v-84eefc06]{overflow:hidden;width:100%}.images[data-v-84eefc06]{-o-object-fit:cover;object-fit:cover;-webkit-transition:all .5s ease 0s}.container:hover .images[data-v-84eefc06]{overflow:hidden;position:relative;transform:scale(1.1);transition-duration:.15s;transition-duration:.5s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);-webkit-transition:all .5s ease 0s}.empty[data-v-84eefc06]{background:#ccc;height:100%;width:100%}.text-tittle[data-v-84eefc06]{grid-gap:0;display:grid;font:inherit;font-family:var(--font-style-1);font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-day[data-v-84eefc06],.txt-month[data-v-84eefc06]{color:var(--ColorText_Date);font-family:var(--font-style-1);font-weight:600}.txt-day[data-v-84eefc06],.txt-month[data-v-84eefc06]{font-weight:600}.txt-month[data-v-84eefc06]{letter-spacing:.3px;text-transform:uppercase}.content-abstract-article[data-v-84eefc06],.content-tittle-article[data-v-84eefc06],.content-txt-article[data-v-84eefc06]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;padding:0 5px;width:100%}.content-date-aticle[data-v-84eefc06]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.txt-article-abstract[data-v-84eefc06]{color:var(--CardDescription);font-family:var(--font-style-1)}@media (min-width:300px){.container[data-v-84eefc06]{max-width:100%}.empty[data-v-84eefc06],.images[data-v-84eefc06]{height:221px}.txt-day[data-v-84eefc06]{font-size:15px}.txt-month[data-v-84eefc06]{font-size:10px}.overlay-top[data-v-84eefc06]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:var(--ColorBg_Date);border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:45px;left:10px;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:10px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:40px}.txt-article-tittle[data-v-84eefc06]{align-items:flex-start;color:var(--CardTitle);cursor:pointer;display:flex;font-family:var(--font-style-1);font-size:14px;font-weight:500;justify-content:flex-start;letter-spacing:.3px;margin-bottom:15px;margin-top:20px;text-align:left;transition-duration:.15s;transition-duration:.5s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.container:hover .txt-article-tittle[data-v-84eefc06]{color:var(--CardTitle);transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-article-create[data-v-84eefc06],.txt-article-day[data-v-84eefc06],.txt-article-month[data-v-84eefc06]{font-size:12px;letter-spacing:.36px}.content-date-article[data-v-84eefc06]{margin-bottom:15px}.content-border-article[data-v-84eefc06]{background-color:#eee;height:1px;margin-bottom:15px;width:60px}.txt-article-abstract[data-v-84eefc06]{font-size:12px;margin-bottom:15px;text-align:left}.btn[data-v-84eefc06]{font-size:14px;line-height:24px}}@media (min-width:425px){.empty[data-v-84eefc06],.images[data-v-84eefc06]{height:272px}}@media (min-width:768px){.txt-day[data-v-84eefc06]{font-size:22px}.txt-month[data-v-84eefc06]{font-size:14px}.overlay-top[data-v-84eefc06]{height:65px;left:10px;right:0;top:10px;width:60px}.txt-article-tittle[data-v-84eefc06]{font-size:16px}.txt-article-abstract[data-v-84eefc06]{font-size:14px}.empty[data-v-84eefc06],.images[data-v-84eefc06]{height:250px}}@media (min-width:1024px){.overlay-top[data-v-84eefc06]{height:55px;left:10px;right:0;top:10px;width:50px}}@media (min-width:1280px){.txt-day[data-v-84eefc06]{font-size:20px}}@media (min-width:1400px){.empty[data-v-84eefc06],.images[data-v-84eefc06]{height:298px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_blog/blogcard.vue?vue&type=template&id=84eefc06&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto h-full",
    style: _vm.settingKblog
  }, [_vm._ssrNode("<div class=\"container\" data-v-84eefc06>", "</div>", [_c('nuxt-link', {
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
  }, [_vm._v("\n            " + _vm._s(this.nameMonth) + "\n          ")])])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-txt-article\" data-v-84eefc06>", "</div>", [_vm._ssrNode("<div class=\"content-tittle-article\" data-v-84eefc06>", "</div>", [_c('nuxt-link', {
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
  }, [_vm._v("\n            " + _vm._s(this.article.titulo) + "\n          ")])])], 1), _vm._ssrNode(" <div class=\"content-abstract-article\" data-v-84eefc06><p class=\"txt-article-abstract\" data-v-84eefc06>" + _vm._ssrEscape("\n          " + _vm._s(this.article.resumen) + "\n        ") + "</p></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/_blog/blogcard.vue?vue&type=template&id=84eefc06&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/_blog/blogcard.vue?vue&type=script&lang=js&

/* harmony default export */ var blogcardvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-Blogcard',
  props: {
    article: Object,
    settingKblog: Object
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
// CONCATENATED MODULE: ./components/template11/_blog/blogcard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _blog_blogcardvue_type_script_lang_js_ = (blogcardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/_blog/blogcard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _blog_blogcardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "84eefc06",
  "68c64a2c"
  
)

/* harmony default export */ var blogcard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    // Imágenes de producto
    idCloudinary(url, width, height) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,f_auto,fl_lossy,q_auto/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad/${fitImage[1]}`;
      } else {
        return url;
      }
    },
    idCloudinaryQuality(url, width, height) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,f_auto,fl_lossy,q_90/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad/${fitImage[1]}`;
      } else {
        return url;
      }
    },
    idCloudinarys(url, width, height) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/c_scale,h_${height},w_${width}/${fitImage[1]}`;
      } else {
        return url;
      }
    },
    idCloudinaryBanner(url, type, width) {
      let fitImage = url.split('/upload/');
      let fitImage2 = url.split('/');
      let fitImage3;
      if (fitImage && fitImage.length > 1) {
        fitImage3 = fitImage[1].split('.');
      }
      if (fitImage2[2] == 'res.cloudinary.com') {
        if (type == 'banner') {
          return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/${fitImage3[0]}.webp`;
        } else if (type == 'bannerRes') {
          return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/c_scale,w_${width}/${fitImage3[0]}.webp`;
        }
      } else {
        return url;
      }
    }
  }
});

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(930);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("71fe99dd", content, true, context)
};

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_61299a18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_61299a18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_61299a18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_61299a18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Blog_vue_vue_type_style_index_0_id_61299a18_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-blog[data-v-61299a18]{background:var(--background_color_1);width:100%}.content-art-blog[data-v-61299a18],.content-blog[data-v-61299a18]{align-items:center;display:flex;flex-direction:column;justify-content:center}.content-art-blog[data-v-61299a18]{z-index:0}.contenedor[data-v-61299a18]{margin-top:30px}.contenedor[data-v-61299a18],.content-item-productos[data-v-61299a18]{display:flex;flex-direction:column;width:100%}.contenedor[data-v-61299a18],.content-item-productos[data-v-61299a18],.grid-products[data-v-61299a18]{align-items:center;justify-content:center}.grid-products[data-v-61299a18]{grid-gap:1rem;box-sizing:border-box;display:grid;gap:1rem;margin-bottom:40px}.pagination-medium[data-v-61299a18]{background:transparent;margin-top:10px}.pagination[data-v-61299a18]{background:transparent;color:var(--color_text);font-size:18px}.product_pagination[data-v-61299a18] .el-pagination.is-background .btn-next,.product_pagination[data-v-61299a18] .el-pagination.is-background .btn-prev,.product_pagination[data-v-61299a18] .el-pagination.is-background .el-pager li{background-color:transparent;color:var(--color_text)}.product_pagination[data-v-61299a18] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-61299a18] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-61299a18] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--btnhover)}.product_pagination[data-v-61299a18] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--color_icon);color:#fff}.txt-banner[data-v-61299a18]{color:var(--color_title);font-family:var(--font-style-1)!important;font-weight:600}.tittle-banner-blog[data-v-61299a18]{align-items:center}.banner-blog[data-v-61299a18],.tittle-banner-blog[data-v-61299a18]{display:flex;flex-direction:column;justify-content:center;width:100%}.banner-blog[data-v-61299a18]{align-items:flex-start;padding-top:8px;z-index:10}.crumb[data-v-61299a18]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separatorCrumb[data-v-61299a18]{color:#222;cursor:pointer;font-size:9px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.separatorCrumb[data-v-61299a18],.txt-crumb[data-v-61299a18]{font-family:var(--font-style-1)!important}.txt-crumb[data-v-61299a18]{color:var(--color_title);cursor:pointer;font-size:15px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.s1[data-v-61299a18]:hover,.s2[data-v-61299a18]:hover{color:var(--color_title);transition:all .25s ease}@media (min-width:300px){.bannerBlog[data-v-61299a18]{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:cover;border-bottom-width:1px;display:flex;justify-items:center;max-width:1200px;padding-bottom:20px;padding-top:20px;width:100%}.content-art-blog[data-v-61299a18]{width:90%}.tittle-banner-blog[data-v-61299a18]{align-items:flex-start;justify-content:flex-start;margin-top:20px}.grid-products[data-v-61299a18]{gap:2rem;grid-template-columns:repeat(1,minmax(0,1fr));width:100%}.content-products[data-v-61299a18],.content-products[data-v-61299a18]:hover{transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-products[data-v-61299a18]:hover{box-shadow:0 6px 15px 6px #bfbfbf;width:100%}.txt-banner[data-v-61299a18]{font-size:30px}.crumb[data-v-61299a18]{align-items:center;justify-content:center}}@media (min-width:768px){.grid-products[data-v-61299a18]{align-items:flex-start;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:flex-start}}@media (min-width:1024px){.grid-products[data-v-61299a18]{gap:1rem;grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1025px){.tittle-banner-blog[data-v-61299a18]{align-items:flex-start;justify-content:flex-start}}@media (min-width:1280px){.grid-products[data-v-61299a18]{gap:2rem;width:100%}.tittle-banner-blog[data-v-61299a18]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:auto}}@media (min-width:1200px){.content-art-blog[data-v-61299a18]{max-width:1200px;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template11-blog-page-ko-blog.js.map