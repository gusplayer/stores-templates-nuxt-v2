exports.ids = [103];
exports.modules = {

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-Banner2.vue?vue&type=template&id=4fd6350f&
var render = function render() {
  var _vm$settingGeneral, _vm$settingGeneral2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex justify-center items-center",
    style: `background-color: ${_vm.banner2['--background_color_1']}`
  }, [_vm._ssrNode("<picture>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.banner2.imgBg, 'bannerRes', 800)) + "> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.banner2.imgBg, 'banner')) + "> "), _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.banner2.imgBg,
      expression: "banner2.imgBg"
    }],
    staticClass: "w-full object-cover",
    attrs: {
      "alt": "banner template14"
    }
  }, [])], 2), _vm._ssrNode(" <div class=\"w-full h-auto flex justify-center items-center overflow-hidden absolute\"><div class=\"w-full max-w-9/0 md:max-w-[600px] flex flex-col justify-center items-center text-center\"><p class=\"text-30 md:text-50 pb-10\"" + _vm._ssrStyle(null, `color: ${_vm.banner2.color_title}; font-weight: ${_vm.banner2.fontWeighTitle}; `, null) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.banner2.title) + "\n      ") + "</p> <p class=\"text-14 md:text-20 pb-30\"" + _vm._ssrStyle(null, `color: ${_vm.banner2.color_text}; font-weight: ${_vm.banner2.fontWeighText}; `, null) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.banner2.text) + "\n      ") + "</p> <div class=\"w-full grid grid-cols-2 gap-5\"><a" + _vm._ssrAttr("href", _vm.banner2.url_redirect_1) + " class=\"px-20 py-5 md:py-8 text-12 md:text-14 xl:text-16\"" + _vm._ssrStyle(null, `color: ${_vm.banner2.color_text_btn_1}; background-color: ${_vm.banner2.color_bg_btn_1}; border-radius: ${(_vm$settingGeneral = _vm.settingGeneral) === null || _vm$settingGeneral === void 0 ? void 0 : _vm$settingGeneral.radius};`, null) + ">" + _vm._ssrEscape("\n          " + _vm._s(_vm.banner2.text_btn_1) + "\n        ") + "</a> <a" + _vm._ssrAttr("href", _vm.banner2.url_redirect_2) + " class=\"px-20 py-5 md:py-8 text-12 md:text-14 xl:text-16\"" + _vm._ssrStyle(null, `color: ${_vm.banner2.color_text_btn_2}; background-color: ${_vm.banner2.color_bg_btn_2}; border-radius: ${(_vm$settingGeneral2 = _vm.settingGeneral) === null || _vm$settingGeneral2 === void 0 ? void 0 : _vm$settingGeneral2.radius};`, null) + ">" + _vm._ssrEscape("\n          " + _vm._s(_vm.banner2.text_btn_2) + "\n        ") + "</a></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template15/ko15-Banner2.vue?vue&type=template&id=4fd6350f&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-Banner2.vue?vue&type=script&lang=js&

/* harmony default export */ var ko15_Banner2vue_type_script_lang_js_ = ({
  name: 'Ko15-Banner2',
  mixins: [idCloudinary["a" /* default */]],
  props: {
    banner2: Object,
    settingGeneral: Object,
    dataStore: Object
  }
});
// CONCATENATED MODULE: ./components/template15/ko15-Banner2.vue?vue&type=script&lang=js&
 /* harmony default export */ var template15_ko15_Banner2vue_type_script_lang_js_ = (ko15_Banner2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template15/ko15-Banner2.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template15_ko15_Banner2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1aad27cc"
  
)

/* harmony default export */ var ko15_Banner2 = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=template15-ko15-banner2.js.map