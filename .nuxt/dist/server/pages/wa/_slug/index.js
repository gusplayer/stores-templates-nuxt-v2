exports.ids = [342];
exports.modules = {

/***/ 1099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wa/_slug/index.vue?vue&type=template&id=acf85f86&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex flex-col justify-center items-center bg-transparent",
    attrs: {
      "id": "width"
    }
  }, [_c('waTemplate'), _vm._ssrNode(" "), _vm.dataStore.tienda.estado == 0 || !_vm.expiredDate(_vm.dataStore.tienda.fecha_expiracion) ? _vm._ssrNode("<div id=\"modalNotification\" class=\"w-full h-screen fixed top-0 flex justify-center items-center\" style=\"z-index: 9998\">", "</div>", [_vm._ssrNode("<div class=\"w-full h-screen top-0 absolute backdrop-blur\" style=\"background-color: rgba(0, 0, 0, 0.767)\"></div> "), _vm._ssrNode("<div class=\"w-full py-20 px-30 flex flex-col justify-center items-center bg-white-white rounded-10 shadow-md z-100\" style=\"max-width: 250px\">", "</div>", [_c('koTiendaCerrada'), _vm._ssrNode(" <p class=\"mt-15 text-base text-gray-500 text-center\" style=\"max-width: 220px\">\n        Disculpa, no podrá realizar compras por el momento,\n      </p> " + (_vm.expiredDate(_vm.dataStore.tienda.fecha_expiracion) ? "<p class=\"font-bold text-17 mt-15\" style=\"color: #ff314d\">\n        ¿Deseas continuar?\n      </p>" : "<!---->") + " " + (_vm.expiredDate(_vm.dataStore.tienda.fecha_expiracion) ? "<button class=\"w-full py-4 mt-15 text-base rounded-10 bg-black text-white-white hover:bg-slate-300 hover:text-black transition ease-in-out delay-75\">\n        Aceptar\n      </button>" : "<!---->"))], 2)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.dataStore.tienda.whatsapp == '' ? _vm._ssrNode("<div class=\"wrapper-notificacion\" style=\"z-index: 9999\">", "</div>", [_vm._ssrNode("<div class=\"content-notificacion\">", "</div>", [_c('koTiendaCerrada'), _vm._ssrNode(" <p class=\"text-noti\">\n        Disculpa, no podrá realizar compras por el momento,\n      </p> <p class=\"subtitle-noti\">\n        La tienda no tiene configurado un número de WhatsApp\n      </p>")], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/wa/_slug/index.vue?vue&type=template&id=acf85f86&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// EXTERNAL MODULE: ./mixins/expiredDate.js
var expiredDate = __webpack_require__(52);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wa/_slug/index.vue?vue&type=script&lang=js&


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: 'WapiME',
  components: {
    waTemplate: () => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, 1093)),
    koTiendaCerrada: () => __webpack_require__.e(/* import() */ 221).then(__webpack_require__.bind(null, 1326))
  },
  mixins: [expiredDate["a" /* default */]],
  layout: 'wa',
  computed: {
    ...Object(external_vuex_["mapState"])(['dataStore'])
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      const widthOutput = document.querySelector('#width');
      if (window.innerWidth > 1300) {
        widthOutput.style.width = '900px';
      } else {
        widthOutput.style.width = window.innerWidth + 'px';
      }
    },
    acceptClose() {
      document.getElementById('modalNotification').style.zIndex = '-2';
      document.getElementById('modalNotification').style.opacity = '0';
    }
  }
});
// CONCATENATED MODULE: ./pages/wa/_slug/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var wa_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/wa/_slug/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wa_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "03a397f2"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    expiredDate(date) {
      Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
      if (date == null) {
        return true;
      } else {
        let x = date;
        let d1 = new Date();
        let d2 = new Date(x);
        //Vencido
        if (d1 > this.sumarDias(d2, 3)) {
          return false;
        }
        //Activo
        else {
          return true;
        }
      }
    },
    sumarDias(fecha, date) {
      fecha.setDate(fecha.getDate() + date);
      return fecha;
    }
  }
});

/***/ })

};;
//# sourceMappingURL=index.js.map