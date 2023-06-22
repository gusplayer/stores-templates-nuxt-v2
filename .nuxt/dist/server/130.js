exports.ids = [130];
exports.modules = {

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(762);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("8a33e0f0", content, true, context)
};

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_advertising_vue_vue_type_style_index_0_id_74be1d7a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(414);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_advertising_vue_vue_type_style_index_0_id_74be1d7a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_advertising_vue_vue_type_style_index_0_id_74be1d7a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_advertising_vue_vue_type_style_index_0_id_74be1d7a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_advertising_vue_vue_type_style_index_0_id_74be1d7a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-item-advertising[data-v-74be1d7a]{align-items:center;background:var(--background_color_1);display:flex;flex-direction:column;justify-content:center;padding:40px 0;width:100%}.separador-blog[data-v-74be1d7a]{padding-top:100px}.advertising-content-background[data-v-74be1d7a]{align-items:center;background-size:cover;display:flex;justify-content:center;padding-bottom:66px;padding-top:66px;z-index:auto}.wrapper-img[data-v-74be1d7a]{max-height:80px;max-width:160px}.advertising-items[data-v-74be1d7a]{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);background:var(--background_color_1_card);box-shadow:0 0 transparent,0 0 transparent,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);height:449px;padding:20px;width:596px}.advertising-border[data-v-74be1d7a],.advertising-items[data-v-74be1d7a]{align-items:center;display:flex;justify-content:center;z-index:auto}.advertising-border[data-v-74be1d7a]{--tw-border-opacity:0.5;border-color:var(--color_border);border-width:1px;flex-direction:column;height:100%;width:100%}.content-bttns-shop[data-v-74be1d7a]{background:var(--color_background_btn_card);border-radius:var(--radius_btn);margin-top:20px;padding:10px 20px}.content-bttns-shop[data-v-74be1d7a]:hover{background:var(--hover_card);transition:all .2s ease-out}.content-textbutton-shop[data-v-74be1d7a]{color:var(--color_text_btn_card);font-family:var(--font-style-3)!important;font-size:13px;font-weight:600;line-height:18px;text-transform:uppercase}.advertising-text[data-v-74be1d7a]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-top:15px;padding:2px;text-align:center;width:100%}.tittle[data-v-74be1d7a]{color:var(--color_text_card);font-family:var(--font-style-2)!important;padding-bottom:4px;padding-top:4px}.subtittle[data-v-74be1d7a]{color:var(--color_subtext_card);font-family:var(--font-style-3)!important;text-align:center}.subtittles-items[data-v-74be1d7a]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding-bottom:4px;width:100%}@media (min-width:300px){.advertising-content-background[data-v-74be1d7a]{height:100%;width:90%}.advertising-items[data-v-74be1d7a]{width:85%}.tittle[data-v-74be1d7a]{font-size:34px;line-height:44px}.subtittle[data-v-74be1d7a]{font-size:14px;line-height:24px}}@media (min-width:768px){.advertising-content-background[data-v-74be1d7a]{height:100%;width:95%}.advertising-items[data-v-74be1d7a]{width:85%}.tittle[data-v-74be1d7a]{font-size:40px;line-height:50px}.subtittle[data-v-74be1d7a]{font-size:18px;line-height:24px}}@media (min-width:1024px){.advertising-content-background[data-v-74be1d7a]{height:100%;width:97%}.advertising-items[data-v-74be1d7a]{width:65%}.tittle[data-v-74be1d7a]{font-size:50px;line-height:60px}.subtittle[data-v-74be1d7a]{font-size:26px;line-height:36px}}@media (min-width:1280px){.advertising-content-background[data-v-74be1d7a]{height:100%;width:93%}.advertising-items[data-v-74be1d7a]{width:50%}}@media (min-width:1192px){.advertising-content-background[data-v-74be1d7a]{width:1192px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/Ko-advertising.vue?vue&type=template&id=74be1d7a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-item-advertising",
    style: [_vm.settingKAdvertising, _vm.settingGeneral]
  }, [_vm._ssrNode((!_vm.settingKAdvertising.visible ? "<div class=\"separador-blog\" data-v-74be1d7a></div>" : "<!---->") + " "), _vm._ssrNode("<div id=\"BgAdvertising\" class=\"advertising-content-background\"" + _vm._ssrStyle(null, [{
    '--font-style-2': this.settingGeneral && this.settingGeneral.fount_2 ? this.settingGeneral.fount_2 : 'Great Vibes'
  }, {
    '--font-style-3': this.settingGeneral && this.settingGeneral.fount_3 ? this.settingGeneral.fount_3 : 'Lora'
  }], null) + " data-v-74be1d7a>", "</div>", [_vm._ssrNode("<div class=\"advertising-items\" data-v-74be1d7a>", "</div>", [_vm._ssrNode("<div class=\"advertising-border\" data-v-74be1d7a>", "</div>", [_vm._ssrNode("<div class=\"wrapper-img\" data-v-74be1d7a>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryBanner(_vm.settingKAdvertising.ur_img_card, 'banner'),
      expression: "\n              idCloudinaryBanner(settingKAdvertising.ur_img_card, 'banner')\n            "
    }],
    staticClass: "max-w-auto",
    attrs: {
      "alt": "icon"
    }
  }, [])]), _vm._ssrNode(" <div class=\"advertising-text\" data-v-74be1d7a><span class=\"tittle\" data-v-74be1d7a>" + _vm._ssrEscape(_vm._s(_vm.settingKAdvertising.title)) + "</span> <div class=\"subtittles-items\" data-v-74be1d7a><span class=\"subtittle\" data-v-74be1d7a>" + _vm._ssrEscape("\n              " + _vm._s(_vm.settingKAdvertising.description) + "\n            ") + "</span></div></div> <button class=\"content-bttns-shop\" data-v-74be1d7a><a" + _vm._ssrAttr("href", `${_vm.settingKAdvertising.url_redirect}`) + " rel=\"noreferrer noopener\" target=\"_blank\" data-v-74be1d7a><span class=\"content-textbutton-shop\" data-v-74be1d7a>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n            ") + "</span></a></button>")], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/Ko-advertising.vue?vue&type=template&id=74be1d7a&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/Ko-advertising.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_advertisingvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-advertising',
  props: {
    settingGeneral: Object,
    settingKAdvertising: Object
  },
  mounted() {
    if (this.settingKAdvertising && this.settingKAdvertising['--url_img_background']) {
      this.setBg();
    }
  },
  methods: {
    setBg() {
      if (this.settingKAdvertising) {
        if (!this.mobileCheck()) {
          if (this.settingKAdvertising['--url_img_background']) {
            var imagen = document.getElementById('BgAdvertising');
            imagen.style.backgroundImage = `url(${this.idCloudinaryBanner(this.settingKAdvertising['--url_img_background'], 'banner')})`;
          }
        }
      }
    },
    mobileCheck() {
      window.mobilecheck = function () {
        var check = false;
        (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
      };
      return window.mobilecheck();
    }
  },
  watch: {
    settingKAdvertising() {
      if (this.settingKAdvertising && this.settingKAdvertising['--url_img_background']) {
        this.setBg();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template7/Ko-advertising.vue?vue&type=script&lang=js&
 /* harmony default export */ var template7_Ko_advertisingvue_type_script_lang_js_ = (Ko_advertisingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/Ko-advertising.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(761)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template7_Ko_advertisingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "74be1d7a",
  "43193682"
  
)

/* harmony default export */ var Ko_advertising = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=130.js.map