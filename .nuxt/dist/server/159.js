exports.ids = [159];
exports.modules = {

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-information.vue?vue&type=template&id=f1acc1a4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.information ? _c('div', {
    staticClass: "w-full flex justify-center items-center py-15 lg:py-20 px-10 md:px-0",
    staticStyle: {
      "background-color": "var(--background_color_1)"
    },
    style: [_vm.information, _vm.settingGeneral]
  }, [_vm._ssrNode("<div class=\"max-w-7xl grid grid-cols-1 md:grid-cols-2 mlg:grid-cols-4 gap-5 md:gap-4 items-center justify-center\">", "</div>", _vm._l(_vm.information.values, function (items, index) {
    return _vm._ssrNode("<div class=\"flex flex-row items-center justify-start\">", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinary(items.img, 150, 150),
        expression: "idCloudinary(items.img, 150, 150)"
      }],
      staticClass: "object-contain object-center max-w-[40px] max-h-[40px]",
      class: `contentImg${index}`,
      attrs: {
        "width": "40",
        "height": "40",
        "alt": `imgInfo${index}`
      }
    }, []), _vm._ssrNode(" <div class=\"h-35 border-l-2 border-l-black ml-20 pr-20 leading-25\"" + _vm._ssrStyle(null, `border-color: ${items.color_border};`, null) + "></div> <div><p" + _vm._ssrStyle(null, `color: ${items.color_title}; font-size: ${items.fontSizeTitle}; font-weight: ${items.fontWeighTitle};`, null) + ">" + _vm._ssrEscape("\n          " + _vm._s(items.title) + "\n        ") + "</p> <p" + _vm._ssrStyle(null, `color: ${items.color_text}; font-size: ${items.fontSizeText}; font-weight: ${items.fontWeighText};`, null) + ">" + _vm._ssrEscape("\n          " + _vm._s(items.text) + "\n        ") + "</p></div>")], 2);
  }), 0)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template14/ko14-information.vue?vue&type=template&id=f1acc1a4&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template14/ko14-information.vue?vue&type=script&lang=js&

/* harmony default export */ var ko14_informationvue_type_script_lang_js_ = ({
  name: 'Ko14-information',
  mixins: [idCloudinary["a" /* default */]],
  props: {
    information: Object,
    settingGeneral: Object,
    dataStore: Object
  }
});
// CONCATENATED MODULE: ./components/template14/ko14-information.vue?vue&type=script&lang=js&
 /* harmony default export */ var template14_ko14_informationvue_type_script_lang_js_ = (ko14_informationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template14/ko14-information.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template14_ko14_informationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b8dc45e6"
  
)

/* harmony default export */ var ko14_information = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=159.js.map