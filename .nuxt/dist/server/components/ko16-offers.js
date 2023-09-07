exports.ids = [107];
exports.modules = {

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/ko16-Offers.vue?vue&type=template&id=0bc50ba2&
var render = function render() {
  var _vm$offers, _vm$offers2, _vm$settingGeneral, _vm$settingGeneral2, _vm$settingGeneral3, _vm$settingGeneral4;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full justify-center items-center relative mt-20 md:mt-50",
    style: `background-color: ${_vm.offers['--background_color_1']}`
  }, [_vm._ssrNode("<picture>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.offers.img, 'bannerRes', 800)) + "> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.offers.img, 'banner')) + "> "), _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.offers.img,
      expression: "offers.img"
    }],
    staticClass: "w-full object-cover",
    attrs: {
      "alt": "banner template16"
    }
  }, [])], 2), _vm._ssrNode(" <div class=\"w-full h-full max-w-9/0 flex flex-col justify-center items-end absolute top-0\" style=\"z-index: 20\"><div class=\"flex-1 flex flex-col justify-center items-start\">" + ((_vm$offers = _vm.offers) !== null && _vm$offers !== void 0 && _vm$offers.title ? "<p class=\"mb-10 max-w-lg md:max-w-xl text-15 md:text-25 lg:text-40 xl:text-45 leading-tight\"" + _vm._ssrStyle(null, `color: ${_vm.offers.color_title}; font-weight: ${_vm.offers.fontWeighTitle};`, null) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.offers.title) + "\n      ") + "</p>" : "<!---->") + " " + ((_vm$offers2 = _vm.offers) !== null && _vm$offers2 !== void 0 && _vm$offers2.text ? "<p class=\"max-w-md md:max-w-lg text-14 md:text-18 xl:text-28\"" + _vm._ssrStyle(null, `color: ${_vm.offers.color_text}; font-weight: ${_vm.offers.fontWeighText};`, null) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.offers.text) + "\n      ") + "</p>" : "<!---->") + " " + (!_vm.isFinished ? "<div class=\"mt-30 grid grid-flow-col gap-x-4\"><div class=\"py-8 px-3 text-center w-[60px]\"" + _vm._ssrStyle(null, `color: ${_vm.offers.values[0].color_bg_discount}; background-color: ${_vm.offers.values[0].color_bg}; border-color: ${_vm.offers.values[0].color_border_btn}; border-radius: ${(_vm$settingGeneral = _vm.settingGeneral) === null || _vm$settingGeneral === void 0 ? void 0 : _vm$settingGeneral.radius};`, null) + "><p class=\"text-18 font-bold\">" + _vm._ssrEscape(_vm._s(_vm.days)) + "</p> <span class=\"text-14\">días</span></div> <div class=\"py-8 px-3 text-center w-[60px]\"" + _vm._ssrStyle(null, `color: ${_vm.offers.values[0].color_bg_discount}; background-color: ${_vm.offers.values[0].color_bg}; border-color: ${_vm.offers.values[0].color_border_btn}; border-radius: ${(_vm$settingGeneral2 = _vm.settingGeneral) === null || _vm$settingGeneral2 === void 0 ? void 0 : _vm$settingGeneral2.radius};`, null) + "><p class=\"text-18 font-bold\">" + _vm._ssrEscape(_vm._s(_vm.hours)) + "</p> <span class=\"text-14\">horas</span></div> <div class=\"py-8 px-3 text-center w-[60px]\"" + _vm._ssrStyle(null, `color: ${_vm.offers.values[0].color_bg_discount}; background-color: ${_vm.offers.values[0].color_bg}; border-color: ${_vm.offers.values[0].color_border_btn}; border-radius: ${(_vm$settingGeneral3 = _vm.settingGeneral) === null || _vm$settingGeneral3 === void 0 ? void 0 : _vm$settingGeneral3.radius};`, null) + "><p class=\"text-18 font-bold\">" + _vm._ssrEscape(_vm._s(_vm.minutes)) + "</p> <span class=\"text-14\">min</span></div> <div class=\"py-8 px-3 text-center w-[60px]\"" + _vm._ssrStyle(null, `color: ${_vm.offers.values[0].color_bg_discount}; background-color: ${_vm.offers.values[0].color_bg}; border-color: ${_vm.offers.values[0].color_border_btn}; border-radius: ${(_vm$settingGeneral4 = _vm.settingGeneral) === null || _vm$settingGeneral4 === void 0 ? void 0 : _vm$settingGeneral4.radius};`, null) + "><p class=\"text-18 font-bold\">" + _vm._ssrEscape(_vm._s(_vm.seconds)) + "</p> <span class=\"text-14\">seg</span></div></div>" : "<div class=\"mt-30 text-14 md:text-16 xl:text-20\"" + _vm._ssrStyle(null, `color: ${_vm.offers.color_text}; font-weight: ${_vm.offers.fontWeighText};`, null) + "><p>Finalizado</p></div>") + " <div class=\"mt-40\"><p>Falta agregar producto</p></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template16/ko16-Offers.vue?vue&type=template&id=0bc50ba2&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/ko16-Offers.vue?vue&type=script&lang=js&

/* harmony default export */ var ko16_Offersvue_type_script_lang_js_ = ({
  name: 'Ko16-Offers',
  props: {
    offers: Object,
    settingGeneral: Object,
    dataStore: Object
  },
  mixins: [idCloudinary["a" /* default */]],
  data() {
    return {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      isFinished: false
    };
  },
  computed: {
    days() {
      return this.countdown.days;
    },
    hours() {
      return this.countdown.hours;
    },
    minutes() {
      return this.countdown.minutes;
    },
    seconds() {
      return this.countdown.seconds;
    }
  },
  mounted() {
    if (this.offers) {
      this.calculateCountdown();
      setInterval(this.calculateCountdown, 1000);
    }
  },
  methods: {
    calculateCountdown() {
      const now = new Date().getTime();
      const timeRemaining = new Date(this.offers.values[0].maximumTime) - now;
      if (timeRemaining <= 0) {
        this.isFinished = true;
      } else {
        this.countdown.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        this.countdown.hours = Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        this.countdown.minutes = Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60));
        this.countdown.seconds = Math.floor(timeRemaining % (1000 * 60) / 1000);
      }
    }
  },
  watch: {
    'offers.values'() {
      this.calculateCountdown();
      setInterval(this.calculateCountdown, 1000);
    }
  }
});
// CONCATENATED MODULE: ./components/template16/ko16-Offers.vue?vue&type=script&lang=js&
 /* harmony default export */ var template16_ko16_Offersvue_type_script_lang_js_ = (ko16_Offersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template16/ko16-Offers.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template16_ko16_Offersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d051e2da"
  
)

/* harmony default export */ var ko16_Offers = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ko16-offers.js.map