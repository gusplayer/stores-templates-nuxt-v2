exports.ids = [97];
exports.modules = {

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(759);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7da27940", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "element-tiptap"
var external_element_tiptap_ = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./mixins/elemenTiptap.vue?vue&type=script&lang=js&

/* harmony default export */ var elemenTiptapvue_type_script_lang_js_ = ({
  computed: {
    extensions() {
      return [new external_element_tiptap_["Doc"](), new external_element_tiptap_["Paragraph"](), new external_element_tiptap_["Text"](), new external_element_tiptap_["Heading"]({
        level: 5,
        bubble: true
      }), new external_element_tiptap_["Bold"]({
        bubble: true
      }), new external_element_tiptap_["Italic"]({
        bubble: true
      }), new external_element_tiptap_["Underline"]({
        bubble: true
      }), new external_element_tiptap_["Strike"]({
        bubble: true
      }), new external_element_tiptap_["Code"]({
        bubble: true
      }), new external_element_tiptap_["CodeBlock"]({
        bubble: true
      }), new external_element_tiptap_["Blockquote"]({
        bubble: true
      }), new external_element_tiptap_["Link"]({
        bubble: true
      }), new external_element_tiptap_["BulletList"]({
        bubble: true
      }), new external_element_tiptap_["OrderedList"]({
        bubble: true
      }), new external_element_tiptap_["ListItem"]({
        bubble: true
      }), new external_element_tiptap_["TodoList"]({
        bubble: true
      }), new external_element_tiptap_["TodoItem"]({
        bubble: true
      }), new external_element_tiptap_["Iframe"]({
        bubble: true
      }), new external_element_tiptap_["Table"]({
        resizable: true,
        bubble: true
      }), new external_element_tiptap_["TableHeader"](), new external_element_tiptap_["TableRow"](), new external_element_tiptap_["TableCell"](), new external_element_tiptap_["Image"]({
        urlPattern: '',
        uploadRequest: '',
        bubble: true
      }), new external_element_tiptap_["TextAlign"]({
        alignments: ['left', 'center', 'right', 'justify'],
        bubble: true
      }), new external_element_tiptap_["LineHeight"]({
        lineHeights: ['100%', '200%', '300%']
      }), new external_element_tiptap_["Indent"]({
        minIndent: 0,
        maxIndent: 7
      }), new external_element_tiptap_["HorizontalRule"]({
        bubble: true
      }), new external_element_tiptap_["HardBreak"](), new external_element_tiptap_["TrailingNode"](), new external_element_tiptap_["History"](), new external_element_tiptap_["TextColor"]({
        colors: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#000000'],
        bubble: true
      }), new external_element_tiptap_["TextHighlight"]({
        colors: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#000000'],
        bubble: true
      }), new external_element_tiptap_["FormatClear"](), new external_element_tiptap_["FontSize"]({
        fontSizes: ['8', '10', '12', '14', '16', '18', '20', '24', '30', '36', '48', '60', '72'],
        bubble: true
      }), new external_element_tiptap_["Preview"](), new external_element_tiptap_["Print"](), new external_element_tiptap_["SelectAll"]()];
    }
  }
});
// CONCATENATED MODULE: ./mixins/elemenTiptap.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_elemenTiptapvue_type_script_lang_js_ = (elemenTiptapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./mixins/elemenTiptap.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_elemenTiptapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "445de0a8"
  
)

/* harmony default export */ var elemenTiptap = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_7186421c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_7186421c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_7186421c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_7186421c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_articulo_vue_vue_type_style_index_0_id_7186421c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".txt-banner[data-v-7186421c]{color:var(--color_title);font-family:\"David libre\"!important;font-weight:400}.tittle-banner-blog[data-v-7186421c]{flex-direction:row;margin-bottom:12px;margin-top:12px}.banner-blog[data-v-7186421c],.tittle-banner-blog[data-v-7186421c]{align-items:center;display:flex;justify-content:center;width:100%}.banner-blog[data-v-7186421c]{background-repeat:no-repeat;background-size:cover;flex-direction:column}#separator[data-v-7186421c]{margin-left:20px}.size_title[data-v-7186421c]{color:#000;font-size:48px;font-weight:700;line-height:48px}.wrapper-blog[data-v-7186421c]{align-items:center;background:#fff;display:flex;flex-direction:column;justify-content:center;min-height:72vh;width:100%}.container-article[data-v-7186421c]{align-items:center;display:flex;justify-content:center}.content-blog[data-v-7186421c]{align-self:flex-start;box-sizing:content-box;display:flex;flex-direction:column;justify-content:center;padding:4px;width:100%}.content-date[data-v-7186421c]{display:flex;flex-direction:row;margin-bottom:20px;margin-top:10px;width:100%}.content-date-items[data-v-7186421c]{display:flex;flex-direction:column;margin-left:10px;width:100%}.content-date-items p[data-v-7186421c]{color:rgba(58,69,87,.733);font-size:14px}.content-date-items p[data-v-7186421c]:first-child{font-weight:700}.editor[data-v-7186421c] .el-tiptap-editor>.el-tiptap-editor__content{border:none;padding:10px 5px}.editor[data-v-7186421c] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-7186421c] .el-tiptap-editor__content h1{font-size:2em}.editor[data-v-7186421c] .el-tiptap-editor__content h2{font-size:1.5em}.editor[data-v-7186421c] .el-tiptap-editor__content h3{font-size:1.17em}.editor[data-v-7186421c] .el-tiptap-editor__content h4{font-size:1.12em}.editor[data-v-7186421c] .el-tiptap-editor__content h5{font-size:.83em}.wp-icon[data-v-7186421c]{bottom:2px;color:#757575;cursor:pointer;font-size:25px}.wp-icon[data-v-7186421c]:hover{color:#494949}.marginIcon[data-v-7186421c]{margin-left:8px}@media (min-width:300px){.container-article[data-v-7186421c]{width:95%}.icon-blog[data-v-7186421c]{margin-bottom:40px;width:10%}#separator[data-v-7186421c]{margin-left:10px}.banner-blog[data-v-7186421c]{padding-top:80px}.txt-banner[data-v-7186421c]{font-size:36px}}@media (max-width:425px){.icon-blog[data-v-7186421c]{margin-bottom:40px;width:8%}.size_title[data-v-7186421c]{font-size:25px}}@media (max-width:490px){.icon-blog[data-v-7186421c]{margin-bottom:40px;width:7%}}@media (max-width:576px){.grid-products[data-v-7186421c]{grid-template-columns:repeat(2,minmax(0,1fr));width:95%}.tittle-banner-blog[data-v-7186421c]{width:95%}}@media (max-width:600px){.icon-blog[data-v-7186421c]{margin-bottom:40px;width:6%}.size_title[data-v-7186421c]{font-size:28px;line-height:35px}}@media (min-width:768px){.container-article[data-v-7186421c]{width:95%}.icon-blog[data-v-7186421c]{margin-bottom:40px;width:5%}.banner-blog[data-v-7186421c]{padding-top:90px}.txt-banner[data-v-7186421c]{font-size:36px}#separator[data-v-7186421c]{margin-left:10px}}@media (max-width:900px){.icon-blog[data-v-7186421c]{margin-bottom:40px;width:4%}}@media (min-width:1024px){.icon-blog[data-v-7186421c]{margin-bottom:40px;width:4%}}@media (max-width:1100px){.icon-blog[data-v-7186421c]{margin-bottom:40px;width:3%}}@media (min-width:1280px){.container-article[data-v-7186421c]{width:78%}.icon-blog[data-v-7186421c]{margin-bottom:80px;width:5%}.banner-blog[data-v-7186421c]{padding-top:120px}.tittle-banner-blog[data-v-7186421c]{align-items:center;display:flex;flex-direction:row;justify-content:center;margin-bottom:48px;margin-top:48px;width:93%}.txt-banner[data-v-7186421c]{font-size:78px}#separator[data-v-7186421c]{margin-left:20px}}@media (min-width:1440px){.container-article[data-v-7186421c]{width:48%}.tittle-banner-blog[data-v-7186421c]{width:83%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/blog_page/Ko-articulo.vue?vue&type=template&id=7186421c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-blog",
    style: [_vm.settingK07Blog, _vm.settingGeneral]
  }, [_vm._ssrNode("<div id=\"BgBannerBlogAr\" class=\"banner-blog\" data-v-7186421c><div class=\"tittle-banner-blog\" data-v-7186421c><p class=\"txt-banner\" data-v-7186421c>" + _vm._ssrEscape(_vm._s(_vm.dataStore.tienda.nombre)) + "</p> <p id=\"separator\" class=\"txt-banner\" data-v-7186421c>" + _vm._ssrEscape(_vm._s(_vm.$t('header_blog'))) + "</p> <div class=\"icon-blog\" data-v-7186421c><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-3 0 511 511.99901\" class=\"svg-icon-blog\" data-v-7186421c><path d=\"m291.367188 73.578125h-98.34375c-102.238282 0-185.117188 82.878906-185.117188 185.117187 0 81.332032 52.453125 150.402344 125.375 175.253907 9.402344 3.203125 14.46875 13.5 11.050781 22.824219-4.800781 13.09375-13.28125 26.269531-20.058593 35.613281-3.914063 5.390625.425781 12.921875 7.042968 12.164062 51.769532-5.921875 78.121094-37.503906 87.933594-52.640625 3.277344-5.058594 8.902344-8.097656 14.933594-8.097656h57.183594c102.238281 0 185.117187-82.878906 185.117187-185.117188 0-102.238281-82.878906-185.117187-185.117187-185.117187zm0 0\" fill=\"#e5e8ec\" data-v-7186421c></path> <path d=\"m292.324219 73.589844-141.546875 141.546875c-3.878906 3.878906-6.535156 8.648437-7.84375 13.753906l-21.824219 81.5c-5.605469 20.9375.433594 43.464844 15.761719 58.792969 11.5 11.5 26.785156 17.832031 43.050781 17.832031 5.3125 0 10.605469-.695313 15.742187-2.070313l81.425782-21.804687c5.132812-1.304687 9.929687-3.964844 13.828125-7.863281l145.464843-145.464844c11.207032-.050781 21.734376-4.441406 29.664063-12.371094l.035156-.035156c-25.195312-71.828125-93.417969-123.410156-173.757812-123.816406zm0 0\" fill=\"#dadadc\" data-v-7186421c></path> <path d=\"m486.457031 58.375-38.777343-38.78125c-16.269532-16.265625-42.648438-16.265625-58.914063 0l-42.332031 42.332031 97.695312 97.691407 42.328125-42.328126c16.269531-16.269531 16.269531-42.644531 0-58.914062zm0 0\" fill=\"#ff8892\" data-v-7186421c></path> <path d=\"m466.449219 38.367188c16.269531 16.269531 16.269531 42.644531 0 58.914062l-42.328125 42.328125 20.007812 20.007813 42.328125-42.328126c16.269531-16.269531 16.269531-42.644531 0-58.914062zm0 0\" fill=\"#ff5754\" data-v-7186421c></path> <path d=\"m208.621094 297.433594-49.875-11.570313-8.644532 32.289063c-2.851562 10.648437.195313 22.011718 7.988282 29.808594 7.796875 7.796874 19.160156 10.84375 29.8125 7.992187l32.289062-8.648437zm0 0\" fill=\"#43596b\" data-v-7186421c></path> <path d=\"m220.191406 347.304688 49.5-13.253907 16.839844-48.238281-67.453125-67.453125-47.078125 18.003906-13.253906 49.5zm0 0\" fill=\"#ffd2b0\" data-v-7186421c></path> <path d=\"m269.695312 334.054688-3.398437-39.617188-45.449219-9.230469-9.234375-45.453125-39.613281-3.394531 174.433594-174.433594 97.695312 97.691407zm0 0\" fill=\"#ffb44f\" data-v-7186421c></path> <path d=\"m460.730469 143.019531-97.695313-97.695312c-4.777344-4.773438-12.519531-4.773438-17.296875 0l-15.902343 15.902343c-4.773438 4.777344-4.773438 12.519532 0 17.296876l97.695312 97.695312c4.777344 4.773438 12.519531 4.773438 17.296875 0l15.902344-15.902344c4.773437-4.777344 4.773437-12.519531 0-17.296875zm0 0\" fill=\"#e5e8ec\" data-v-7186421c></path> <path d=\"m130.957031 440.945312c5.320313 1.8125 8.386719 7.800782 6.425781 13.140626-4.582031 12.503906-12.910156 25.277343-19.089843 33.792968-3.589844 4.953125-3.902344 11.316406-.8125 16.609375 3 5.140625 8.867187 8.09375 14.78125 7.414063 55.632812-6.359375 83.835937-41.289063 93.378906-56.011719 1.898437-2.929687 5.128906-4.675781 8.640625-4.675781h57.183594c106.210937 0 192.621094-86.410156 192.621094-192.621094 0-31.082031-7.546876-61.78125-21.863282-89.167969l3.910156-3.90625c5.816407-5.816406 7.226563-14.386719 4.25-21.546875 0 0 21.46875-21.46875 21.480469-21.480468 18.949219-18.949219 18.929688-50.59375 0-69.523438 0 0-38.78125-38.78125-38.78125-38.78125-18.867187-18.867188-50.558593-18.964844-69.527343 0l-21.464844 21.464844c-2.378906-.992188-4.953125-1.515625-7.605469-1.515625-5.273437 0-10.226563 2.054687-13.953125 5.78125l-15.902344 15.902343c-3.292968 3.289063-5.269531 7.539063-5.691406 12.117188-9.074219-1.296875-18.273438-1.964844-27.472656-1.964844h-98.34375c-44.179688 0-87.347656 15.339844-121.550782 43.199219-3.214843 2.617187-3.695312 7.34375-1.082031 10.558594 2.617188 3.210937 7.34375 3.695312 10.558594 1.078125 31.535156-25.683594 71.339844-39.828125 112.074219-39.828125h98.34375c7.941406 0 15.882812.527343 23.726562 1.574219 0 0-148.378906 148.375-148.402344 148.398437-.921874.921875-1.601562 2.105469-1.9375 3.367187l-21.902343 81.789063c-3.53125 13.195313.273437 27.394531 9.933593 37.054687 9.59375 9.59375 23.957032 13.441407 37.058594 9.933594 0 0 81.761719-21.890625 81.789063-21.898437 1.242187-.335938 2.457031-1.035157 3.367187-1.941407l42.476563-42.476562c2.929687-2.929688 2.929687-7.679688 0-10.609375-2.929688-2.933594-7.679688-2.933594-10.609375 0l-31.074219 31.074219-2.019531-23.550782c-.28125-3.28125-2.757813-6.054687-5.984375-6.710937l-40.578125-8.242187-8.242188-40.582032c-.65625-3.222656-3.433594-5.699218-6.714844-5.980468l-23.546874-2.019532 141.128906-141.128906 87.082031 87.082031s-88.828125 88.828125-88.832031 88.832031c-2.859375 2.859376-2.902344 7.710938 0 10.613282 2.886718 2.886718 7.730468 2.882812 10.609375 0l89.875-89.875c7.207031 3.007812 16.042969 1.25 21.558593-4.265625l.832032-.832031c11.816406 24.164062 18.019531 50.925781 18.019531 78.003906 0 97.9375-79.679687 177.617187-177.613281 177.617187h-57.183594c-8.621094 0-16.558594 4.304688-21.234375 11.519531-8.382813 12.9375-33.207031 43.628907-82.53125 49.285157-.058594-.039063-.132813-.175781-.128906-.226563 0-.011718.015625-.042968.054687-.09375 6.734375-9.285156 15.851563-23.316406 21.03125-37.4375 4.820313-13.148437-2.515625-28.027344-15.675781-32.511718-71.949219-24.519532-120.292969-92.09375-120.292969-168.152344 0-43.488282 15.890625-85.339844 44.742188-117.84375 2.75-3.101563 2.46875-7.84375-.628906-10.59375-3.101563-2.75-7.84375-2.46875-10.59375.632812-31.289063 35.253906-48.523438 80.644532-48.523438 127.808594 0 82.480469 52.425781 155.761719 130.457031 182.351562zm263.207031-416.148437c13.171876-13.167969 35.148438-13.15625 48.304688 0 0 0 38.761719 38.761719 38.78125 38.78125 13.164062 13.164063 13.148438 35.152344 0 48.304687l-20.425781 20.421876-87.082031-87.082032s20.414062-20.417968 20.421874-20.425781zm-58.925781 41.632813s15.882813-15.882813 15.902344-15.902344c1.824219-1.824219 4.863281-1.824219 6.683594 0l97.695312 97.695312c1.84375 1.839844 1.84375 4.839844 0 6.683594l-15.902343 15.902344c-1.800782 1.800781-4.890626 1.796875-6.691407-.003906-.003906-.003907-97.589843-97.59375-97.6875-97.691407-1.824219-1.824219-1.824219-4.859375 0-6.683593zm-150.691406 282.519531c-7.523437 1.464843-15.609375-.953125-21.054687-6.394531-5.882813-5.882813-8.199219-14.53125-6.046876-22.566407l5.28125-19.730469 43.0625 43.058594c.003907 0-20.734374 5.535156-21.242187 5.632813zm29.042969-62.351563c.601562 2.953125 2.910156 5.257813 5.859375 5.859375l39.949219 8.113281 2.378906 27.753907-39.246094 10.511719-55.316406-55.320313 10.507812-39.246094 27.753906 2.378907zm0 0\" data-v-7186421c></path> <path d=\"m261.253906 223.222656c-2.929687 2.929688-2.929687 7.683594 0 10.609375 0 0 7.136719 7.140625 7.144532 7.148438 2.898437 2.898437 7.71875 2.894531 10.609374 0 2.933594-2.929688 2.933594-7.683594 0-10.609375l-7.144531-7.148438c-2.929687-2.929687-7.679687-2.929687-10.609375 0zm0 0\" data-v-7186421c></path> <path d=\"m352.667969 164.175781c1.921875.003907 3.851562-.707031 5.304687-2.160156 2.929688-2.929687 2.929688-7.679687 0-10.613281l-7.144531-7.144532c-2.929687-2.929687-7.679687-2.929687-10.613281 0-2.929688 2.929688-2.929688 7.679688 0 10.609376 0 0 7.144531 7.144531 7.148437 7.148437 1.429688 1.429687 3.363281 2.160156 5.304688 2.160156zm0 0\" data-v-7186421c></path> <path d=\"m303.445312 197.953125c-4.132812-.277344-7.710937 2.847656-7.988281 6.984375-.277343 4.132812 2.851563 7.710938 6.984375 7.988281 7.363282.496094 14.664063-2.414062 19.863282-7.613281 5.328124-5.328125 8.105468-12.570312 7.613281-19.863281-.277344-4.136719-3.859375-7.261719-7.988281-6.984375-4.132813.277344-7.261719 3.855468-6.984376 7.988281.203126 2.976563-.984374 5.980469-3.25 8.25-2.265624 2.265625-5.273437 3.453125-8.25 3.25zm0 0\" data-v-7186421c></path></svg></div></div></div> "), _vm.dataArticle ? _vm._ssrNode("<div class=\"container-article\" data-v-7186421c>", "</div>", [_vm._ssrNode("<div class=\"content-blog\" data-v-7186421c>", "</div>", [_vm._ssrNode("<nav aria-label=\"Breadcrumb\" class=\"flex mt-20 mb-5 sm:mb-10\" data-v-7186421c>", "</nav>", [_vm._ssrNode("<ol class=\"flex items-start space-x-4\" data-v-7186421c>", "</ol>", [_vm._ssrNode("<li data-v-7186421c>", "</li>", [_c('nuxt-link', {
    staticClass: "text-gray-400 hover:text-gray-500",
    attrs: {
      "to": "/"
    }
  }, [_c('svg', {
    staticClass: "flex-shrink-0 h-20 w-20",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20",
      "fill": "currentColor",
      "aria-hidden": "true"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Home")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-7186421c>", "</li>", [_c('nuxt-link', {
    staticClass: "flex items-center",
    attrs: {
      "to": "/blog"
    }
  }, [_c('svg', {
    staticClass: "flex-shrink-0 h-20 w-20 text-gray-400",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 20 20",
      "fill": "currentColor",
      "aria-hidden": "true"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
      "clip-rule": "evenodd"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
  }, [_vm._v("\n                listado de artículos\n              ")])])], 1)], 2)]), _vm._ssrNode(" <div data-v-7186421c><p class=\"size_title mt-10 text-start\" data-v-7186421c>" + _vm._ssrEscape("\n          " + _vm._s(_vm.dataArticle.titulo) + "\n        ") + "</p></div> "), _vm._ssrNode("<div class=\"flex justify-between items-center\" data-v-7186421c>", "</div>", [_vm._ssrNode("<div class=\"content-date\" data-v-7186421c>", "</div>", [_vm._ssrNode("<div class=\"flex-shrink-0\" data-v-7186421c>", "</div>", [_vm._ssrNode("<a href=\"#\" data-v-7186421c>", "</a>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `${this.$store.state.urlKomercia}/users/user.jpg`,
      expression: "`${this.$store.state.urlKomercia}/users/user.jpg`"
    }],
    staticClass: "h-40 w-40 rounded-full",
    attrs: {
      "alt": ""
    }
  }, [])])]), _vm._ssrNode(" <div class=\"content-date-items\" data-v-7186421c><p data-v-7186421c>" + _vm._ssrEscape(_vm._s(_vm.dataArticle.autor)) + "</p> <p data-v-7186421c>" + _vm._ssrEscape(_vm._s(this.shippingCreated)) + "</p></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex icons\" data-v-7186421c>", "</div>", [_vm._ssrNode("<a" + _vm._ssrAttr("href", this.sharingFacebook) + " target=\"_blank\" rel=\"noreferrer noopener\" style=\"max-height: 25px\" data-v-7186421c>", "</a>", [_c('facebook-icon', {
    staticClass: "wp-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<a" + _vm._ssrAttr("href", this.sharingTwitter) + " target=\"_blank\" rel=\"noreferrer noopener\" style=\"max-height: 25px\" data-v-7186421c>", "</a>", [_c('twitter-icon', {
    staticClass: "wp-icon marginIcon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<a" + _vm._ssrAttr("href", this.sharingLinkedin) + " target=\"_blank\" rel=\"noreferrer noopener\" style=\"max-height: 25px\" data-v-7186421c>", "</a>", [_c('linkedin-icon', {
    staticClass: "wp-icon marginIcon"
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm.dataArticle.contenido ? _vm._ssrNode("<div class=\"editor\" data-v-7186421c>", "</div>", [_c('el-tiptap', {
    attrs: {
      "extensions": _vm.extensions,
      "spellcheck": false,
      "readonly": true,
      "charCounterCount": false,
      "tooltip": false,
      "showMenubar": false,
      "bubble": false
    },
    model: {
      value: _vm.dataArticle.contenido,
      callback: function ($$v) {
        _vm.$set(_vm.dataArticle, "contenido", $$v);
      },
      expression: "dataArticle.contenido"
    }
  })], 1) : _vm._e()], 2)]) : _vm._ssrNode("<div data-v-7186421c>", "</div>", [_c('el-skeleton', {
    attrs: {
      "rows": 6,
      "animated": ""
    }
  }), _vm._ssrNode(" "), _c('el-skeleton', {
    attrs: {
      "rows": 6,
      "animated": ""
    }
  })], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template7/blog_page/Ko-articulo.vue?vue&type=template&id=7186421c&scoped=true&

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template7/blog_page/Ko-articulo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Ko_articulovue_type_script_lang_js_ = ({
  mixins: [elemenTiptap["a" /* default */]],
  name: 'Ko-Blog',
  props: {
    dataStore: Object,
    settingGeneral: Object,
    settingK07Blog: Object
  },
  mounted() {
    if (this.listArticulos.length) {
      this.searchIdForSlug();
    }
    if (this.settingK07Blog && this.settingK07Blog.img_background == true) {
      this.setBg();
    }
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  },
  data() {
    return {
      dataArticle: {},
      shippingCreated: '',
      shippingUpdated: '',
      sharing: {
        url: '',
        quote: '',
        quoteTwitter: ''
      },
      sharingFacebook: '',
      sharingTwitter: '',
      sharingLinkedin: ''
    };
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos;
    }
  },
  methods: {
    async searchIdForSlug() {
      let idBlog = this.$route.query.idBlog;
      const {
        data
      } = await this.$store.dispatch('GET_DATA_ARTICLE', {
        idBlog: idBlog,
        idStore: this.dataStore.tienda.id_tienda
      });
      if (data) {
        this.dataArticle = data.data;
        this.getDataArticle();
        if (this.dataArticle && this.dataArticle.created_at) {
          let dateCreated = this.dataArticle.created_at;
          let resultCreated = dateCreated.split(' ');
          this.shippingCreated = resultCreated[0];
          let dateUpdate = this.dataArticle.updated_at;
          let resultUpdate = dateUpdate.split(' ');
          this.shippingUpdated = resultUpdate[0];
        }
      }
    },
    getDataArticle() {
      this.sharing.url = window.location.href;
      this.sharing.quote = `${this.dataArticle.titulo}%0A%0A${this.dataArticle.resumen}`;
      this.sharing.quoteTwitter = `${this.dataArticle.titulo}%20by%20${this.dataArticle.autor}%0A`;
      this.sharingFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.sharing.url}&quote=${this.sharing.quote}`;
      this.sharingTwitter = `https://twitter.com/intent/tweet?text=${this.sharing.quoteTwitter}%0A${this.sharing.url}`;
      this.sharingLinkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${this.sharing.url}`;
    },
    setBg() {
      if (!this.mobileCheck()) {
        if (this.settingK07Blog.url_img) {
          var imagen = document.getElementById('BgBannerBlogAr');
          imagen.style.backgroundImage = `url(${this.settingK07Blog.url_img})`;
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
    listArticulos() {
      this.searchIdForSlug();
    },
    settingK07Blog() {
      if (this.settingK07Blog && this.settingK07Blog.img_background == true) {
        this.setBg();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template7/blog_page/Ko-articulo.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_page_Ko_articulovue_type_script_lang_js_ = (Ko_articulovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template7/blog_page/Ko-articulo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(758)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_page_Ko_articulovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7186421c",
  "01aac646"
  
)

/* harmony default export */ var Ko_articulo = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=97.js.map