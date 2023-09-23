exports.ids = [117];
exports.modules = {

/***/ 1179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-information2.vue?vue&type=template&id=cd762d9c&
var render = function render() {
  var _vm$settingGeneral;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full h-full flex justify-center items-center bg-no-repeat bg-bottom box-content bg-cover",
    style: `background-color: ${_vm.information2['--background_color_1']}; background-image: url(${_vm.idCloudinaryBanner(_vm.information2.imgBg, 'banner')});`
  }, [_vm._ssrNode("<div class=\"w-full max-w-9/0 xl:max-w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-hidden\"><img" + _vm._ssrAttr("src", _vm.idCloudinaryBanner(_vm.information2.imgLeft, 'banner')) + " alt=\"information2 template15\" class=\"w-full h-full object-cover hidden lg:flex\"> <div class=\"w-full flex flex-col justify-center items-start\"><img" + _vm._ssrAttr("src", _vm.idCloudinaryBanner(_vm.information2.icon, 'bannerRes', 400)) + " alt=\"banner template15\" class=\"w-full object-cover max-w-[150px] md:max-w-[200px] lg:max-w-[200px] xl:max-w-[250px]\"> <p class=\"w-full lg:max-w-[750px] text-22 md:text-25 lg:text-30 xl:text-40 leading-tight pt-30\"" + _vm._ssrStyle(null, `color: ${_vm.information2.color_title}; font-weight: ${_vm.information2.fontWeighTitle};`, null) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.information2.title) + "\n      ") + "</p> <p class=\"max-w-[750px] text-14 md:text-18 leading-tight pt-30\"" + _vm._ssrStyle(null, `color: ${_vm.information2.color_price}; font-weight: ${_vm.information2.fontWeighPrice};`, null) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.information2.text) + "\n      ") + "</p> <a" + _vm._ssrAttr("href", _vm.information2.url_redirect) + " class=\"px-20 py-5 md:py-8 mt-25 md:mt-40 mb-20 xl:mb-0 text-12 md:text-14 xl:text-16\"" + _vm._ssrStyle(null, `color: ${_vm.information2.color_text_btn}; background-color: ${_vm.information2.color_bg_btn}; border-radius: ${(_vm$settingGeneral = _vm.settingGeneral) === null || _vm$settingGeneral === void 0 ? void 0 : _vm$settingGeneral.radius};`, null) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.information2.text_btn) + "\n      ") + "</a></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template15/ko15-information2.vue?vue&type=template&id=cd762d9c&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/ko15-information2.vue?vue&type=script&lang=js&

/* harmony default export */ var ko15_information2vue_type_script_lang_js_ = ({
  name: 'Ko15-information2',
  mixins: [idCloudinary["a" /* default */]],
  props: {
    information2: Object,
    settingGeneral: Object,
    dataStore: Object
  }
});
// CONCATENATED MODULE: ./components/template15/ko15-information2.vue?vue&type=script&lang=js&
 /* harmony default export */ var template15_ko15_information2vue_type_script_lang_js_ = (ko15_information2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template15/ko15-information2.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template15_ko15_information2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "01c84382"
  
)

/* harmony default export */ var ko15_information2 = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=template15-ko15-information2.js.map