exports.ids = [136];
exports.modules = {

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/productSlide.vue?vue&type=template&id=cc212430&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-carousel', {
    staticClass: "w-full h-full wrapper-carouse",
    attrs: {
      "indicator-position": "outside",
      "interval": "6000"
    }
  }, [_c('el-carousel-item', {
    staticClass: "w-full h-full"
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryQuality(_vm.photo, 850, 850),
      expression: "idCloudinaryQuality(photo, 850, 850)"
    }],
    staticClass: "photo",
    attrs: {
      "loading": "lazy",
      "alt": "Product img",
      "height": "550px",
      "width": "550px"
    }
  })]), _vm._v(" "), _vm._l(_vm.photos, function (photo) {
    return _c('el-carousel-item', {
      key: photo.id,
      staticClass: "w-full h-full"
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinaryQuality(photo.foto_cloudinary, 850, 850),
        expression: "idCloudinaryQuality(photo.foto_cloudinary, 850, 850)"
      }],
      staticClass: "photo",
      attrs: {
        "loading": "lazy",
        "alt": "Product img",
        "height": "550px",
        "width": "550px"
      }
    })]);
  }), _vm._v(" "), _vm.idYoutube && _vm.idYoutube !== '' ? _c('el-carousel-item', [_c('div', {
    staticClass: "youtube"
  }, [_c('button', {
    staticClass: "youtube__action_back",
    on: {
      "click": function ($event) {
        return _vm.changeSlide();
      }
    }
  }, [_c('i', {
    staticClass: "material-icons"
  })]), _vm._v(" "), _c('iframe', {
    attrs: {
      "height": "550px",
      "width": "550px",
      "src": `https://www.youtube.com/embed/${_vm.idYoutube}?rel=0&controls=0&showinfo=0`,
      "frameborder": "0",
      "allowfullscreen": ""
    }
  })])]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template10/_productdetails/productSlide.vue?vue&type=template&id=cc212430&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template10/_productdetails/productSlide.vue?vue&type=script&lang=js&

/* harmony default export */ var productSlidevue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'productSlide-details-10',
  props: ['photos', 'photo', 'idYoutube']
});
// CONCATENATED MODULE: ./components/template10/_productdetails/productSlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_productSlidevue_type_script_lang_js_ = (productSlidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template10/_productdetails/productSlide.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(915)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_productSlidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cc212430",
  "d3077592"
  
)

/* harmony default export */ var productSlide = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(916);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6a717e26", content, true, context)
};

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_cc212430_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(472);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_cc212430_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_cc212430_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_cc212430_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_cc212430_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".photo[data-v-cc212430]{height:550px;-o-object-fit:cover;object-fit:contain;overflow:hidden;width:550px}.wrapper-carouse[data-v-cc212430],.wrapper-carouse[data-v-cc212430] .el-carousel__container{height:550px;max-height:550px;max-width:550px}.youtube[data-v-cc212430]{grid-gap:5px;display:grid;justify-items:start;max-width:550px;width:99%}.youtube__action_back[data-v-cc212430]{background-color:var(--color_background_btn);border-style:none;color:var(--color_text_btn);outline:none}@media (max-width:850px){.photo[data-v-cc212430],.wrapper-carouse[data-v-cc212430],.wrapper-carouse[data-v-cc212430] .el-carousel__container{height:400px;max-height:400px;max-width:400px}}@media (max-width:500px){.wrapper-carouse[data-v-cc212430]{margin-top:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=136.js.map