exports.ids = [158];
exports.modules = {

/***/ 1158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productdetails/zoomImg.vue?vue&type=template&id=6d471beb&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('figure', {
    staticClass: "zoom",
    style: _vm.setBackground(_vm.idCloudinary(_vm.photo, 850, 850)),
    on: {
      "mousemove": _vm.zoom
    }
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.idCloudinary(_vm.photo, 850, 850)) + " alt=\"Product Img\" class=\"photo_main\" data-v-6d471beb>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template13/_productdetails/zoomImg.vue?vue&type=template&id=6d471beb&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template13/_productdetails/zoomImg.vue?vue&type=script&lang=js&

/* harmony default export */ var zoomImgvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'zoomImg-details',
  props: ['photo'],
  data() {
    return {
      activeZoom: true
    };
  },
  methods: {
    zoom(e) {
      const zoomer = e.currentTarget;
      let offsetX, offsetY;
      if (e.offsetY) {
        e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageY;
      }
      if (e.offsetX) {
        e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
      }
      const x = offsetX / zoomer.offsetWidth * 80;
      const y = offsetY / zoomer.offsetHeight * 80;
      zoomer.style.backgroundPosition = `${x}% ${y}%`;
    },
    setBackground(p) {
      return `background-image: url('${p}')`;
    }
  }
});
// CONCATENATED MODULE: ./components/template13/_productdetails/zoomImg.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_zoomImgvue_type_script_lang_js_ = (zoomImgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template13/_productdetails/zoomImg.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(953)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_zoomImgvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d471beb",
  "8b2b0964"
  
)

/* harmony default export */ var zoomImg = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(954);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6b8db930", content, true, context)
};

/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_6d471beb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(489);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_6d471beb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_6d471beb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_6d471beb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_6d471beb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "figure.zoom[data-v-6d471beb]{align-items:center;background-position:50% 50%;background-repeat:no-repeat;border-radius:10px;cursor:zoom-in;display:flex;justify-content:center;margin-bottom:10px;max-height:100%;max-width:100%;overflow:hidden;position:relative}figure.zoom img[data-v-6d471beb]{background-color:#fff;max-height:576px;max-width:100%;transition:opacity .3s}.photo_main[data-v-6d471beb]{-o-object-fit:contain;object-fit:contain}figure.zoom img[data-v-6d471beb]:hover{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=158.js.map