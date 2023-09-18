exports.ids = [289];
exports.modules = {

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(411);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("19dedc08", content, true, context)
};

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_cardblog_vue_vue_type_style_index_0_id_5e91565b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(238);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_cardblog_vue_vue_type_style_index_0_id_5e91565b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_cardblog_vue_vue_type_style_index_0_id_5e91565b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_cardblog_vue_vue_type_style_index_0_id_5e91565b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_cardblog_vue_vue_type_style_index_0_id_5e91565b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".producto[data-v-5e91565b]{align-items:center;cursor:pointer;justify-content:flex-start;position:relative}.content-product[data-v-5e91565b],.producto[data-v-5e91565b]{height:100%;width:100%}.container[data-v-5e91565b]{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);max-width:100%;position:relative}.content-card-blog[data-v-5e91565b]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.wrapper-card[data-v-5e91565b]{align-items:center;background:var(--color_background_card);border-radius:5px;box-shadow:0 10px 19px 7px hsla(0,0%,42%,.4);box-sizing:border-box;height:100%;justify-content:space-between;position:relative;width:100%}.wrapper-card[data-v-5e91565b]:hover{box-shadow:0 16px 26px 7px #6b6b6b;position:relative;top:-3px;transition:all .2s ease-in}.images[data-v-5e91565b]{-o-object-fit:cover;object-fit:cover;overflow:hidden}.figure-img[data-v-5e91565b],.wrapper-image[data-v-5e91565b]{width:100%}.text-tittle[data-v-5e91565b]{grid-gap:0;display:grid;font:inherit;font-size:100%;gap:0;grid-template-columns:repeat(1,minmax(0,1fr));left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.figure-img figure img[data-v-5e91565b]{opacity:1;transform:scale(1);transition:transform .7s ease,opacity .7s ease}.content-product:hover img[data-v-5e91565b]{transform:scale(1.03)}.content-product:hover img[data-v-5e91565b],figure[data-v-5e91565b]{background:linear-gradient(180deg,rgba(0,0,0,.217) 30%,rgba(0,0,0,.374) 50%,#000)}figure[data-v-5e91565b]{margin:0;overflow:hidden;padding:0}.figure-img figure:hover img[data-v-5e91565b]{opacity:.5}.content-imge[data-v-5e91565b]{align-items:center;display:flex;justify-content:center;width:100%}.txt-day[data-v-5e91565b],.txt-month[data-v-5e91565b]{color:var(--color_text_date);font-family:var(--font-style-3)!important}.txt-day[data-v-5e91565b]{font-size:24px;font-weight:600}.txt-month[data-v-5e91565b]{font-size:12px;font-weight:600;letter-spacing:.3px;padding-bottom:8px;text-transform:uppercase}.content-tittle-article[data-v-5e91565b]{align-items:center;cursor:default;display:flex;justify-content:center;padding-bottom:10px;padding-top:10px;width:100%}.txt-tituloart[data-v-5e91565b]{color:var(--color_text);cursor:pointer;font-family:var(--font-style-1)!important;transition:all .25s ease}.txt-tituloart[data-v-5e91565b]:hover{color:var(--hover_text);transition:all .25s ease}.text-autor[data-v-5e91565b]{align-items:center;color:var(--color_autor);display:flex;flex-direction:row;font-family:var(--font-style-3)!important;font-size:14px;justify-content:center}.summary-article[data-v-5e91565b]{display:flex;padding-bottom:10px;text-align:center}.container-properitys[data-v-5e91565b],.summary-article[data-v-5e91565b]{align-items:center;justify-content:center;width:100%}.container-properitys[data-v-5e91565b]{cursor:default;padding:6px;position:relative}.subtext[data-v-5e91565b]{color:var(--color_description);cursor:text;font-family:var(--font-style-3)!important;font-size:14px}.read-more[data-v-5e91565b]{align-items:center;cursor:default;display:flex;flex-direction:row;justify-content:center;text-align:center;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:100%}.txt-read-more[data-v-5e91565b]{align-items:center;color:var(--color_text_btn);cursor:pointer;display:flex;flex-direction:row;font-family:var(--font-style-3)!important;font-size:13px;font-weight:600;justify-content:center;text-transform:uppercase}.txt-read-more[data-v-5e91565b],.txt-read-more[data-v-5e91565b]:hover{transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.txt-read-more[data-v-5e91565b]:hover{transform:translateX(-2px)}.points-text-read[data-v-5e91565b]{color:#ed2353;display:none;font-family:var(--font-style-3)!important;margin-bottom:-5px;margin-left:10px;position:relative;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.svg-points[data-v-5e91565b]{fill:var(--color_text_btn);animation:bounce-5e91565b 1s infinite}@keyframes bounce-5e91565b{0%,to{animationtimingfunction:cubic-bezier(.8,0,1,1);transform:translateX(-25%)}50%{animationtimingfunction:cubic-bezier(0,0,.2,1);transform:translateX(0)}}.txt-read-more:hover .points-text-read[data-v-5e91565b]{display:flex;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-bottom-titulo[data-v-5e91565b]{font:inherit;font-size:100%;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.content-bottom-titulo[data-v-5e91565b],.text-cart[data-v-5e91565b]{width:100%}.txt-tituloart-bottom[data-v-5e91565b]{color:var(--color_bg_text);font-family:var(--font-style-3)!important;font-size:16px;text-transform:uppercase}.overlay-top[data-v-5e91565b]{background:var(--color_bg_date)}.overlay-bottom[data-v-5e91565b]{background:var(--color_bg_card)}@media (min-width:300px){.overlay-top[data-v-5e91565b]{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:26%;left:5%;max-height:100%;max-width:100%;top:5%;width:15%}.overlay-bottom[data-v-5e91565b],.overlay-top[data-v-5e91565b]{overflow:hidden;position:absolute;right:0;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.overlay-bottom[data-v-5e91565b]{bottom:-5%;height:25px;left:10%;width:80%}.content-autor[data-v-5e91565b]{align-items:center;display:flex;justify-content:center;padding-bottom:10px;width:100%}.txt-tituloart[data-v-5e91565b]{font-size:20px}.txt-by[data-v-5e91565b]{display:none}}@media (min-width:425px){.overlay-top[data-v-5e91565b]{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:22%;left:5%;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:5%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:15%}}@media (min-width:500px){.overlay-top[data-v-5e91565b]{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:18%;left:5%;max-height:100%;max-width:100%;top:5%;width:12%}.overlay-bottom[data-v-5e91565b],.overlay-top[data-v-5e91565b]{overflow:hidden;position:absolute;right:0;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.overlay-bottom[data-v-5e91565b]{bottom:-3%;height:25px;left:10%;width:80%}}@media (min-width:576px){.overlay-top[data-v-5e91565b]{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:30%;left:5%;max-height:100%;max-width:100%;top:5%;width:18%}.overlay-bottom[data-v-5e91565b],.overlay-top[data-v-5e91565b]{overflow:hidden;position:absolute;right:0;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.overlay-bottom[data-v-5e91565b]{bottom:-6%;height:25px;left:10%;width:80%}}@media (min-width:768px){.overlay-top[data-v-5e91565b]{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:35%;left:5%;max-height:100%;max-width:100%;overflow:hidden;position:absolute;right:0;top:5%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:20%}}@media (min-width:1024px){.overlay-top[data-v-5e91565b]{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:25%;left:5%;max-height:100%;max-width:100%;right:0;top:5%;width:15%}.overlay-bottom[data-v-5e91565b],.overlay-top[data-v-5e91565b]{overflow:hidden;position:absolute;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.overlay-bottom[data-v-5e91565b]{bottom:0;bottom:-5%;height:25px;left:10%;right:0;width:80%}}@media (min-width:1280px){.overlay-top[data-v-5e91565b]{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);border-radius:2px;box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:22%;left:5%;max-height:100%;max-width:100%;right:0;top:5%;width:15%}.overlay-bottom[data-v-5e91565b],.overlay-top[data-v-5e91565b]{overflow:hidden;position:absolute;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.overlay-bottom[data-v-5e91565b]{bottom:0;bottom:-5%;height:25px;left:10%;right:0;width:80%}.txt-tituloart[data-v-5e91565b]{font-size:24px}.images[data-v-5e91565b]{-o-object-fit:cover;object-fit:cover;overflow:hidden}.empty[data-v-5e91565b],.images[data-v-5e91565b]{height:270px;max-height:270px;width:100%}.empty[data-v-5e91565b]{background:#ccc}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/blog_page/_blogcard/Ko-cardblog.vue?vue&type=template&id=5e91565b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "producto",
    style: [_vm.settingK07Blog, _vm.settingGeneral]
  }, [_vm._ssrNode("<div class=\"content-product\"" + _vm._ssrStyle(null, [{
    '--font-style-1': this.settingGeneral && this.settingGeneral.fount_1 ? this.settingGeneral.fount_1 : 'David libre'
  }, {
    '--font-style-3': this.settingGeneral && this.settingGeneral.fount_3 ? this.settingGeneral.fount_3 : 'Lora'
  }], null) + " data-v-5e91565b>", "</div>", [_vm._ssrNode("<div class=\"wrapper-card\" data-v-5e91565b>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-5e91565b>", "</div>", [_c('nuxt-link', {
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
    staticClass: "images",
    attrs: {
      "src": _vm.idCloudinary(this.article.imagen_principal_url, 550, 550),
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
  }, [_vm._v("\n                " + _vm._s(this.dayCreate) + "\n              ")]), _vm._v(" "), _c('p', {
    staticClass: "txt-month"
  }, [_vm._v("\n                " + _vm._s(this.nameMonth) + "\n              ")])])])]), _vm._ssrNode(" <div class=\"overlay-bottom\" data-v-5e91565b><div class=\"content-bottom-titulo\" data-v-5e91565b><div class=\"text-cart\" data-v-5e91565b><p class=\"txt-tituloart-bottom\" data-v-5e91565b>" + _vm._ssrEscape(_vm._s(_vm.$t('header_blog'))) + "</p></div></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container-properitys\" data-v-5e91565b>", "</div>", [_vm._ssrNode("<div class=\"content-tittle-article\" data-v-5e91565b>", "</div>", [_c('nuxt-link', {
    staticClass: "txt-tituloart",
    attrs: {
      "to": {
        path: `/blog/` + _vm.article.slug,
        query: {
          idBlog: _vm.article.id
        }
      }
    }
  }, [_vm._v("\n            " + _vm._s(this.article.titulo) + "\n          ")])], 1), _vm._ssrNode(" <div class=\"content-autor\" data-v-5e91565b><p class=\"text-autor\" data-v-5e91565b><span clas=\"txt-by\" data-v-5e91565b>" + _vm._ssrEscape(_vm._s(_vm.$t('home_by'))) + "</span> <span class=\"flex-shrink-0 mx-1\" data-v-5e91565b><img" + _vm._ssrAttr("src", `${this.$store.state.urlKomercia}/users/user.jpg`) + " alt class=\"h-20 w-20 rounded-full\" data-v-5e91565b></span>" + _vm._ssrEscape("\n            " + _vm._s(this.article.autor) + "\n          ") + "</p></div> <div class=\"summary-article\" data-v-5e91565b>" + (this.article.resumen ? "<p class=\"subtext\" data-v-5e91565b>" + _vm._ssrEscape("\n            " + _vm._s(`${this.article.resumen.slice(0, 200)}...`) + "\n          ") + "</p>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"read-more\" data-v-5e91565b>", "</div>", [_c('nuxt-link', {
    staticClass: "txt-read-more",
    attrs: {
      "to": {
        path: `/blog/` + _vm.article.slug,
        query: {
          idBlog: _vm.article.id
        }
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('home_continuar_leyendo')) + "\n            "), _c('span', {
    staticClass: "points-text-read"
  }, [_c('svg', {
    staticClass: "svg-points",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "version": "1.1",
      "width": "20",
      "height": "20",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
    }
  })])])])], 1)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/blog_page/_blogcard/Ko-cardblog.vue?vue&type=template&id=5e91565b&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/blog_page/_blogcard/Ko-cardblog.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_cardblogvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-BlogCard-7',
  props: {
    article: Object,
    settingGeneral: Object,
    settingK07Blog: Object
  },
  mounted() {
    if (this.article.created_at) {
      let domain = this.article.created_at;
      let result = domain.split(' ');
      this.shippingCreated = result[0];
      let data = this.shippingCreated.split('-');
      this.dayCreate = data[2];
      this.monthCreate = data[1];
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
      nameMonth: '',
      showPoint: false
    };
  }
});
// CONCATENATED MODULE: ./components/template7/blog_page/_blogcard/Ko-cardblog.vue?vue&type=script&lang=js&
 /* harmony default export */ var _blogcard_Ko_cardblogvue_type_script_lang_js_ = (Ko_cardblogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/blog_page/_blogcard/Ko-cardblog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(410)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _blogcard_Ko_cardblogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5e91565b",
  "f99c93c8"
  
)

/* harmony default export */ var Ko_cardblog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=template7-blog-page-blogcard-ko-cardblog.js.map