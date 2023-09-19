exports.ids = [8,235];
exports.modules = {

/***/ 1236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer1/Ko-Footer-Country.vue?vue&type=template&id=09de097a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-footer-country",
    class: _vm.valueWa ? 'content-footer-country-wa' : ''
  }, [_vm.dataStore.tienda.pais ? _vm._ssrNode("<div class=\"content-footer-country\" data-v-09de097a>", "</div>", [_vm._ssrNode("<div class=\"content-item-flag\" data-v-09de097a>", "</div>", [_vm.selectOptionCountry ? _vm._ssrNode("<div class=\"content-flag\" data-v-09de097a>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.selectOptionCountry.img,
      expression: "selectOptionCountry.img"
    }],
    staticClass: "mr-2",
    attrs: {
      "width": "30px",
      "alt": "bandera país"
    }
  }, [])]) : _vm._e(), _vm._ssrNode(" <button class=\"text-country\" data-v-09de097a>" + _vm._ssrEscape("\n        " + _vm._s(_vm.dataStore.tienda.pais) + "\n      ") + "</button> <p class=\"text-country text-margin\" data-v-09de097a>|</p> <p class=\"text-country\" data-v-09de097a>" + (_vm.dataStore.tienda.moneda == 'PEN' ? "<strong style=\"margin-right: 1px\" data-v-09de097a>\n          S/\n        </strong>" : "<strong style=\"margin-right: 1px\" data-v-09de097a>$</strong>") + _vm._ssrEscape("\n        " + _vm._s(_vm.dataStore.tienda.moneda) + "\n      ") + "</p> " + (_vm.stateIdStore ? "<div class=\"flex flex-row justify-start\" data-v-09de097a><p class=\"textId\" data-v-09de097a><strong data-v-09de097a>ID</strong>" + _vm._ssrEscape(":\n          " + _vm._s(_vm.dataStore.tienda.id_tienda) + "\n        ") + "</p> <p class=\"textId ml-5\" data-v-09de097a><strong data-v-09de097a>Temp</strong>" + _vm._ssrEscape(": " + _vm._s(_vm.dataStore.tienda.template) + "\n        ") + "</p> <p class=\"textId ml-5\" data-v-09de097a><strong data-v-09de097a>Hoko</strong>" + _vm._ssrEscape(": " + _vm._s(_vm.dataHoko.statehoko == 0 ? 'NO' : 'SI') + "\n        ") + "</p> <p class=\"textId ml-5\" data-v-09de097a><strong data-v-09de097a>V</strong>: 09/18/2023</p></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _c('KoLanguage')], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/footers/footer1/Ko-Footer-Country.vue?vue&type=template&id=09de097a&scoped=true&

// EXTERNAL MODULE: ./components/k-select-language.vue + 4 modules
var k_select_language = __webpack_require__(600);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footers/footer1/Ko-Footer-Country.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_Footer_Countryvue_type_script_lang_js_ = ({
  name: 'KoFooterFlags',
  components: {
    KoLanguage: k_select_language["default"]
  },
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    valueWa: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      stateIdStore: false,
      optionsCountry: [{
        id: 1,
        name: 'co',
        title: 'Colombia',
        currencySign: '$',
        simbolo: 'COP',
        img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Colombia_kz1t6d.png'
      }, {
        id: 2,
        name: 'internacional',
        title: 'Internacional',
        currencySign: '$',
        simbolo: 'USD',
        img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Internacional_rzalry.png'
      }, {
        id: 3,
        name: 'mx',
        title: 'México',
        currencySign: '$',
        simbolo: 'MXN',
        img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Mexico_dibihf.png'
      }, {
        id: 6,
        name: 'ar',
        title: 'Argentina',
        currencySign: '$',
        simbolo: 'ARS',
        img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417092/komerica/Banderas/Argentina_twinoc.png'
      }, {
        id: 7,
        name: 'cl',
        title: 'Chile',
        currencySign: '$',
        simbolo: 'CLP',
        img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Chile_rzygtf.png'
      }, {
        id: 8,
        name: 'pr',
        title: 'Puerto Rico',
        currencySign: '$',
        simbolo: 'USD',
        img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Puerto_Rico_uorvfh.png'
      }, {
        id: 9,
        name: 'pe',
        title: 'Perú',
        currencySign: 'S/',
        simbolo: '',
        img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Peru_v36g5q.png'
      }, {
        id: 10,
        name: 'pan',
        title: 'Panamá',
        currencySign: '$',
        simbolo: 'USD',
        img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Panama_pdney2.png'
      }]
    };
  },
  computed: {
    dataHoko() {
      return this.$store.state.dataHoko;
    },
    selectOptionCountry() {
      return this.optionsCountry.find(country => country.id === this.dataStore.tienda.id_pais);
    }
  }
});
// CONCATENATED MODULE: ./components/footers/footer1/Ko-Footer-Country.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer1_Ko_Footer_Countryvue_type_script_lang_js_ = (Ko_Footer_Countryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footers/footer1/Ko-Footer-Country.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(879)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer1_Ko_Footer_Countryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "09de097a",
  "5b1c26fe"
  
)

/* harmony default export */ var Ko_Footer_Country = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("55e6ecb9", content, true, context)
};

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_k_select_language_vue_vue_type_style_index_0_id_2e92fe7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_k_select_language_vue_vue_type_style_index_0_id_2e92fe7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_k_select_language_vue_vue_type_style_index_0_id_2e92fe7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_k_select_language_vue_vue_type_style_index_0_id_2e92fe7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_k_select_language_vue_vue_type_style_index_0_id_2e92fe7e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-dropdown[data-v-2e92fe7e]{align-items:center;display:flex;flex-direction:row;justify-content:flex-end;max-width:200px;width:100%}.el-dropdown-link[data-v-2e92fe7e]{align-items:center;color:#fff;cursor:pointer;display:grid;font-size:12px;grid-auto-flow:column}.el-dropdown[data-v-2e92fe7e]{margin:8px}.icon-dropdown[data-v-2e92fe7e]{bottom:1px}.el-dropdown-menu[data-v-2e92fe7e]{background-color:#fff;border:1px solid #bebebe;border-radius:5px;margin:2px 0;padding:5px 0}.el-dropdown-menu__item[data-v-2e92fe7e]{color:#000;padding:0 10px}.el-dropdown-menu__item[data-v-2e92fe7e]:hover{color:#e64956}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(880);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("c464cba6", content, true, context)
};

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/k-select-language.vue?vue&type=template&id=2e92fe7e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-dropdown"
  }, [_c('el-dropdown', [_c('span', {
    staticClass: "el-dropdown-link",
    attrs: {
      "aria-haspopup": "list"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.select.label) + "\n      "), _c('Flechadown-icon', {
    staticClass: "icon-dropdown"
  })], 1), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, _vm._l(_vm.options, function (option, index) {
    return _c('el-dropdown-item', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.select.lng != option.lng,
        expression: "select.lng != option.lng"
      }],
      key: index,
      nativeOn: {
        "click": function ($event) {
          return _vm.chooseLanguage(option);
        }
      }
    }, [_vm._v("\n        " + _vm._s(option.label) + "\n      ")]);
  }), 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/k-select-language.vue?vue&type=template&id=2e92fe7e&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/k-select-language.vue?vue&type=script&lang=js&

/* harmony default export */ var k_select_languagevue_type_script_lang_js_ = ({
  name: 'KoSelectLanguage',
  data() {
    return {
      select: {
        label: 'Spanish (es)',
        lng: 'es'
      },
      showDropdown: false,
      options: [{
        label: 'Spanish (es)',
        lng: 'es'
      }, {
        label: 'English (en)',
        lng: 'en'
      }, {
        label: 'Portuguese (pt)',
        lng: 'pt'
      }, {
        label: 'Francés (fr)',
        lng: 'fr'
      }]
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore'])
  },
  mounted() {
    if (this.dataStore && this.dataStore.tienda) {
      switch (this.dataStore.tienda.lenguaje.toLowerCase()) {
        case 'es':
          this.select.label = 'Spanish (es)';
          this.select.lng = 'es';
          break;
        case 'en':
          this.select.label = 'English (en)';
          this.select.lng = 'en';
          break;
        case 'pt':
          this.select.label = 'Portuguese (pt)';
          this.select.lng = 'pt';
          break;
        case 'fr':
          this.select.label = 'Francés (fr)';
          this.select.lng = 'fr';
          break;
      }
    }
  },
  methods: {
    chooseLanguage(option) {
      this.select = option;
      this.$i18n.locale = option.lng;
      this.handleDropdown();
    },
    handleDropdown() {
      this.showDropdown = !this.showDropdown;
    }
  }
});
// CONCATENATED MODULE: ./components/k-select-language.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_k_select_languagevue_type_script_lang_js_ = (k_select_languagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/k-select-language.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(259)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_k_select_languagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2e92fe7e",
  "5621523c"
  
)

/* harmony default export */ var k_select_language = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_Country_vue_vue_type_style_index_0_id_09de097a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(512);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_Country_vue_vue_type_style_index_0_id_09de097a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_Country_vue_vue_type_style_index_0_id_09de097a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_Country_vue_vue_type_style_index_0_id_09de097a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Footer_Country_vue_vue_type_style_index_0_id_09de097a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-footer-country[data-v-09de097a]{align-items:center;background:#181818;display:flex;justify-content:center;width:100%}.content-footer-country[data-v-09de097a]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;max-width:1300px;padding:1px 20px;width:100%}.content-footer-country-wa[data-v-09de097a]{max-width:900px}.content-item-flag[data-v-09de097a]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;position:relative;width:100%}.content-flag[data-v-09de097a]{align-items:center;display:flex;margin-right:5px}.text-country[data-v-09de097a]{color:#fff;font-size:12px;height:100%}.text-margin[data-v-09de097a]{margin-left:5px;margin-right:5px}.textId[data-v-09de097a]{color:#fff;font-size:12px;margin-left:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=footers-footer1-ko-footer-country.js.map