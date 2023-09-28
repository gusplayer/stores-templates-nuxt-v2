exports.ids = [149];
exports.modules = {

/***/ 1286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/_offers/countdown.vue?vue&type=template&id=7fefbc6e&
var render = function render() {
  var _vm$settingGeneral, _vm$settingGeneral2, _vm$settingGeneral3, _vm$settingGeneral4, _vm$settingGeneral5;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode((!_vm.isFinished ? "<div class=\"mt-30 grid grid-flow-col gap-x-4\"><div class=\"py-8 px-3 text-center w-[60px]\"" + _vm._ssrStyle(null, `color: ${_vm.information.color_text_discount}; background-color: ${_vm.information.color_bg}; border-color: ${_vm.information.color_bg_discount}; border-radius: ${(_vm$settingGeneral = _vm.settingGeneral) === null || _vm$settingGeneral === void 0 ? void 0 : _vm$settingGeneral.radius};`, null) + "><p class=\"text-18 font-bold\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.days) + "\n      ") + "</p> <span class=\"text-14\">días</span></div> <div class=\"py-8 px-3 text-center w-[60px]\"" + _vm._ssrStyle(null, `color: ${_vm.information.color_text_discount}; background-color: ${_vm.information.color_bg}; border-color: ${_vm.information.color_bg_discount}; border-radius: ${(_vm$settingGeneral2 = _vm.settingGeneral) === null || _vm$settingGeneral2 === void 0 ? void 0 : _vm$settingGeneral2.radius};`, null) + "><p class=\"text-18 font-bold\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.hours) + "\n      ") + "</p> <span class=\"text-14\">horas</span></div> <div class=\"py-8 px-3 text-center w-[60px]\"" + _vm._ssrStyle(null, `color: ${_vm.information.color_text_discount}; background-color: ${_vm.information.color_bg}; border-color: ${_vm.information.color_bg_discount}; border-radius: ${(_vm$settingGeneral3 = _vm.settingGeneral) === null || _vm$settingGeneral3 === void 0 ? void 0 : _vm$settingGeneral3.radius};`, null) + "><p class=\"text-18 font-bold\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.minutes) + "\n      ") + "</p> <span class=\"text-14\">min</span></div> <div class=\"py-8 px-3 text-center w-[60px]\"" + _vm._ssrStyle(null, `color: ${_vm.information.color_text_discount}; background-color: ${_vm.information.color_bg}; border-color: ${_vm.information.color_bg_discount}; border-radius: ${(_vm$settingGeneral4 = _vm.settingGeneral) === null || _vm$settingGeneral4 === void 0 ? void 0 : _vm$settingGeneral4.radius};`, null) + "><p class=\"text-18 font-bold\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.seconds) + "\n      ") + "</p> <span class=\"text-14\">seg</span></div></div>" : "<div class=\"mt-30 text-14 md:text-16 xl:text-20 font-semibold\"" + _vm._ssrStyle(null, `color: ${_vm.information.color_text_discount};`, null) + "><p>Oferta finalizada</p></div>") + " "), _vm.product && _vm.product[0] ? _vm._ssrNode("<div class=\"mt-40\">", "</div>", [_c('KoProductCard', {
    staticStyle: {
      "max-width": "300px"
    },
    style: `border-radius: ${(_vm$settingGeneral5 = _vm.settingGeneral) === null || _vm$settingGeneral5 === void 0 ? void 0 : _vm$settingGeneral5.radius};`,
    attrs: {
      "product": _vm.product[0],
      "card-products": _vm.cardProducts,
      "setting-general": _vm.settingGeneral
    }
  })], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template16/_offers/countdown.vue?vue&type=template&id=7fefbc6e&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/_offers/countdown.vue?vue&type=script&lang=js&
/* harmony default export */ var countdownvue_type_script_lang_js_ = ({
  name: 'K0CountDown',
  components: {
    KoProductCard: () => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 580))
  },
  props: {
    information: {
      type: Object,
      required: true
    },
    product: {
      type: Array,
      required: true
    },
    settingGeneral: {
      type: Object,
      required: true
    },
    cardProducts: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      isFinished: false,
      swiperOption: {
        effect: 'fade',
        slidesPerView: '1',
        grabCursor: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      },
      selectProduct: {}
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
  watch: {
    'information.values'() {
      this.updateCountdown();
      setInterval(this.updateCountdown, 1000);
    }
  },
  mounted() {
    if (this.information) {
      this.updateCountdown();
      setInterval(this.updateCountdown, 1000);
    }
  },
  methods: {
    updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = new Date(`${this.information.maximumTime}`) - now;
      if (timeLeft <= 0) {
        this.isFinished = true;
        return;
      }
      this.countdown.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      this.countdown.minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
      this.countdown.seconds = Math.floor(timeLeft % (1000 * 60) / 1000);
    }
  }
});
// CONCATENATED MODULE: ./components/template16/_offers/countdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var _offers_countdownvue_type_script_lang_js_ = (countdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template16/_offers/countdown.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _offers_countdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3fd3c5a3"
  
)

/* harmony default export */ var countdown = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=template16-offers-countdown.js.map