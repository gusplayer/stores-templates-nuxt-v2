exports.ids = [138];
exports.modules = {

/***/ 1178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/Ko16-Contact.vue?vue&type=template&id=4e2835d9&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3, _vm$dataStore;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex justify-center items-center mb-30 md:mb-50",
    style: [{
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate16[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.settingsGeneral) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.fount_1) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"w-full h-auto relative flex flex-col items-center justify-center overflow-hidden px-10 md:px-15 lg:px-20\"" + _vm._ssrStyle(null, `background-color: ${_vm.settingByTemplate16[0].contact['--background_color_1']}`, null) + " data-v-4e2835d9>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-col items-center py-10\"" + _vm._ssrStyle(null, `background-color: ${_vm.settingByTemplate16[0].contact['--background_color_2']}`, null) + " data-v-4e2835d9>", "</div>", [_vm._ssrNode("<div class=\"w-full max-w-6xl flex flex-row items-center justify-start\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].contact.color_breadCrumbs};`, null) + " data-v-4e2835d9>", "</div>", [_c('nuxt-link', {
    staticClass: "text-14",
    style: `color: ${_vm.settingByTemplate16[0].contact.color_breadCrumbs}`,
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('header_inicio')) + "\n        ")]), _vm._ssrNode(" <p class=\"px-10 text-14 font-bold\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].contact.color_breadCrumbs}`, null) + " data-v-4e2835d9>\n          &gt;\n        </p> <p class=\"text-14 font-bold\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].contact.color_breadCrumbs2}`, null) + " data-v-4e2835d9>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('header_contacto')) + "\n        ") + "</p>")], 2)]), _vm._ssrNode(" <p class=\"w-full max-w-6xl text-25 font-semibold md:mt-30 mt-40 mb-25 text-start\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].contact.color_title};`, null) + " data-v-4e2835d9>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('home_contactenos')) + "\n    ") + "</p> "), (_vm$dataStore = _vm.dataStore) !== null && _vm$dataStore !== void 0 && _vm$dataStore.geolocalizacion.length ? _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "w-full max-w-6xl flex flex-col justify-center"
  }, [_vm._ssrNode("<div class=\"z-auto swiper-wrapper\" data-v-4e2835d9>", "</div>", _vm._l(_vm.dataStore.geolocalizacion, function (item, index) {
    return _vm._ssrNode("<div class=\"swiper-slide w-full h-full grid grid-cols-1 lg:grid-cols-4 gap-y-5 gap-x-5 lg:gap-x-10 border py-10 md:px-10 lg:px-15 items-center\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].contact.color_title}; border-color: ${_vm.settingByTemplate16[0].contact.color_border}; border-radius: ${_vm.settingByTemplate16[0].settingsGeneral.radius};`, null) + " data-v-4e2835d9>", "</div>", [_c('nuxt-link', {
      staticClass: "w-[120px] flex justify-center items-start",
      attrs: {
        "to": "/"
      }
    }, [_c('img', {
      staticClass: "w-full object-contain object-left",
      attrs: {
        "src": `${_vm.$store.state.urlKomercia}/logos/${_vm.dataStore.tienda.logo}`,
        "alt": "LogoStore"
      }
    })]), _vm._ssrNode(" " + (_vm.dataStore.geolocalizacion.length ? "<div class=\"h-full flex flex-row justify-start items-start\" data-v-4e2835d9><div class=\"w-[50px]\" data-v-4e2835d9><svg" + _vm._ssrAttr("fill", _vm.settingByTemplate16[0].contact.color_title) + " xmlns=\"http://www.w3.org/2000/svg\" width=\"40px\" height=\"40px\" viewBox=\"0 0 24 24\" data-v-4e2835d9><path d=\"M0 0h24v24H0z\" fill=\"none\" data-v-4e2835d9></path> <path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\" data-v-4e2835d9></path></svg></div> <div class=\"w-full h-full flex flex-col\" data-v-4e2835d9><p class=\"text-14 font-bold\" data-v-4e2835d9>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('footer_formDireccion')) + "\n              ") + "</p> <p class=\"text-14\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].contact.color_text};`, null) + " data-v-4e2835d9><span class=\"font-bold\" data-v-4e2835d9>" + _vm._ssrEscape(" Sede " + _vm._s(index + 1) + ": ") + "</span>" + _vm._ssrEscape("\n                " + _vm._s(_vm.dataStore.geolocalizacion[index].direccion) + "\n              ") + "</p> <a" + _vm._ssrAttr("href", `https://www.google.com/maps?q=${item.latitud},${item.longitud}&hl=en-gb&t=m&z=15`) + " target=\"_blank\" rel=\"noreferrer noopener\" class=\"px-20 py-10 mt-10 w-[170px]\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].contact.color_text_btn_form}; background-color: ${_vm.settingByTemplate16[0].contact.color_btn_form}; border-radius: ${_vm.settingByTemplate16[0].settingsGeneral.radius}`, null) + " data-v-4e2835d9>\n                Ver Google Map\n              </a></div></div>" : "<!---->") + " <div class=\"h-full flex flex-col justify-start items-start\" data-v-4e2835d9>" + (_vm.dataStore.tienda.telefono ? "<div class=\"mb-20 flex flex-row gap-2 items-center\" data-v-4e2835d9><div class=\"min-w-[50px] max-w-[50px]\" data-v-4e2835d9><svg" + _vm._ssrAttr("fill", _vm.settingByTemplate16[0].contact.color_title) + " width=\"40px\" height=\"40px\" viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" class=\"ml-5\" data-v-4e2835d9><path d=\"M0 10.375c0 0.938 0.344 1.969 0.781 3.063s1 2.125 1.438 2.906c1.188 2.063 2.719 4.094 4.469 5.781s3.813 3.094 6.125 3.938c1.344 0.531 2.688 1.125 4.188 1.125 0.75 0 1.813-0.281 2.781-0.688 0.938-0.406 1.781-1.031 2.094-1.781 0.125-0.281 0.281-0.656 0.375-1.094 0.094-0.406 0.156-0.813 0.156-1.094 0-0.156 0-0.313-0.031-0.344-0.094-0.188-0.313-0.344-0.563-0.5-0.563-0.281-0.656-0.375-1.5-0.875-0.875-0.5-1.781-1.063-2.563-1.469-0.375-0.219-0.625-0.313-0.719-0.313-0.5 0-1.125 0.688-1.656 1.438-0.563 0.75-1.188 1.438-1.625 1.438-0.219 0-0.438-0.094-0.688-0.25s-0.5-0.281-0.656-0.375c-2.75-1.563-4.594-3.406-6.156-6.125-0.188-0.313-0.625-0.969-0.625-1.313 0-0.406 0.563-0.875 1.125-1.375 0.531-0.469 1.094-1.031 1.094-1.719 0-0.094-0.063-0.375-0.188-0.781-0.281-0.813-0.656-1.75-0.969-2.656-0.156-0.438-0.281-0.75-0.313-0.906-0.063-0.094-0.094-0.219-0.125-0.375s-0.094-0.281-0.125-0.406c-0.094-0.281-0.25-0.5-0.406-0.625-0.156-0.063-0.531-0.156-0.906-0.188-0.375 0-0.813-0.031-1-0.031-0.094 0-0.219 0-0.344 0.031h-0.406c-1 0.438-1.719 1.313-2.25 2.344-0.5 1.031-0.813 2.188-0.813 3.219z\" data-v-4e2835d9></path></svg></div> <div class=\"w-full\" data-v-4e2835d9><p class=\"text-14 font-bold\" data-v-4e2835d9>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('mcompra_telefono')) + "\n                ") + "</p> <p class=\"text-14\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].contact.color_text};`, null) + " data-v-4e2835d9>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.tienda.telefono) + "\n                ") + "</p></div></div>" : "<!---->") + " " + (_vm.dataStore.tienda.whatsapp ? "<div class=\"flex flex-row gap-2 items-center\" data-v-4e2835d9><div class=\"min-w-[50px] max-w-[50px]\" data-v-4e2835d9><svg width=\"30px\" height=\"30px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"ml-5\" data-v-4e2835d9><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" data-v-4e2835d9><g id=\"Dribbble-Light-Preview\" transform=\"translate(-300.000000, -7599.000000)\"" + _vm._ssrAttr("fill", _vm.settingByTemplate16[0].contact.color_title) + " data-v-4e2835d9><g id=\"icons\" transform=\"translate(56.000000, 160.000000)\" data-v-4e2835d9><path d=\"M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439\" id=\"whatsapp-[#128]\" data-v-4e2835d9></path></g></g></g></svg></div> <div class=\"w-full\" data-v-4e2835d9><p class=\"text-14 font-bold\" data-v-4e2835d9>WhatsApp</p> <p class=\"text-14\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].contact.color_text};`, null) + " data-v-4e2835d9>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.tienda.whatsapp) + "\n                ") + "</p></div></div>" : "<!---->") + "</div> <div class=\"h-full flex flex-col justify-start items-start\" data-v-4e2835d9>" + (_vm.dataStore.tienda.email_tienda ? "<div class=\"mb-20 flex flex-row gap-2 items-center\" data-v-4e2835d9><div class=\"min-w-[50px] max-w-[50px]\" data-v-4e2835d9><svg" + _vm._ssrAttr("fill", _vm.settingByTemplate16[0].contact.color_title) + " xmlns=\"http://www.w3.org/2000/svg\" width=\"40px\" height=\"40px\" viewBox=\"0 0 24 24\" data-v-4e2835d9><path d=\"M0 0h24v24H0z\" fill=\"none\" data-v-4e2835d9></path> <path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\" data-v-4e2835d9></path></svg></div> <div class=\"w-full\" data-v-4e2835d9><p class=\"text-14 font-bold\" data-v-4e2835d9>Email</p> <p class=\"text-14\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].contact.color_text};`, null) + " data-v-4e2835d9>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.tienda.email_tienda) + "\n                ") + "</p></div></div>" : "<!---->") + " " + (_vm.dataStore.geolocalizacion.length ? "<div class=\"flex flex-row gap-2 items-center\" data-v-4e2835d9><div class=\"min-w-[50px] max-w-[50px]\" data-v-4e2835d9><svg width=\"40px\" height=\"40px\" viewBox=\"0 0 24 24\" fill=\"none\" data-v-4e2835d9><path d=\"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z\"" + _vm._ssrAttr("stroke", _vm.settingByTemplate16[0].contact.color_title) + " xmlns=\"http://www.w3.org/2000/svg\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-4e2835d9></path> <path d=\"M12 6V12\"" + _vm._ssrAttr("stroke", _vm.settingByTemplate16[0].contact.color_title) + " xmlns=\"http://www.w3.org/2000/svg\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-4e2835d9></path> <path d=\"M16.24 16.24L12 12\"" + _vm._ssrAttr("stroke", _vm.settingByTemplate16[0].contact.color_title) + " xmlns=\"http://www.w3.org/2000/svg\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-4e2835d9></path></svg></div> <div class=\"w-full\" data-v-4e2835d9><p class=\"text-14 font-bold\" data-v-4e2835d9>Horario</p> <p class=\"w-full text-14\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].contact.color_text};`, null) + " data-v-4e2835d9>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.dataStore.geolocalizacion[index].horario) + "\n                ") + "</p></div></div>" : "<!---->") + "</div>")], 2);
  }), 0)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"w-full flex items-center justify-center\" data-v-4e2835d9>", "</div>", [_vm._ssrNode("<div class=\"w-full max-w-6xl flex flex-col my-30 py-35 mx-20 md:mx-0 justify-center\"" + _vm._ssrStyle(null, `border-radius: ${_vm.settingByTemplate16[0].settingsGeneral.radius};`, null) + " data-v-4e2835d9>", "</div>", [_vm._ssrNode("<p class=\"text-18 font-semibold mb-25 text-start border-b pb-5\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate16[0].contact.color_title}; border-color: ${_vm.settingByTemplate16[0].contact.color_border};`, null) + " data-v-4e2835d9>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('home_contactenos')) + "\n        ") + "</p> "), _c('ValidationObserver', {
    ref: "observer",
    staticClass: "w-full flex flex-col",
    attrs: {
      "tag": "form"
    }
  }, [_c('div', {
    staticClass: "w-full grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
  }, [_c('div', {
    staticClass: "w-full flex flex-col"
  }, [_c('p', {
    staticClass: "text-14",
    style: `color: ${_vm.settingByTemplate16[0].contact.color_text};`
  }, [_vm._v("\n                " + _vm._s(_vm.$t('contact_nombre')) + "\n              ")]), _vm._v(" "), _c('validation-provider', {
    attrs: {
      "name": "nombre",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.nombre,
            expression: "nombre"
          }],
          staticClass: "input-text",
          style: `color: ${_vm.settingByTemplate16[0].contact.color_text_input}; background-color:${_vm.settingByTemplate16[0].contact.color_input}; border-color:${_vm.settingByTemplate16[0].contact.color_text};`,
          attrs: {
            "id": "ContactName",
            "name": "nombre",
            "type": "text",
            "placeholder": _vm.$t('contact_nombrePlacer')
          },
          domProps: {
            "value": _vm.nombre
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.nombre = $event.target.value;
            }
          }
        }), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: errors[0],
            expression: "errors[0]"
          }],
          staticClass: "text-12 text-red-500 ml-5"
        }, [_vm._v("\n                    " + _vm._s(errors[0]) + "\n                  ")])];
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "w-full flex flex-col"
  }, [_c('P', {
    staticClass: "text-14",
    style: `color: ${_vm.settingByTemplate16[0].contact.color_text};`
  }, [_vm._v("\n                " + _vm._s(_vm.$t('contact_email')) + "\n              ")]), _vm._v(" "), _c('validation-provider', {
    attrs: {
      "name": "email",
      "rules": "required|email"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.email,
            expression: "email"
          }],
          staticClass: "input-text",
          style: `color: ${_vm.settingByTemplate16[0].contact.color_text_input}; background-color:${_vm.settingByTemplate16[0].contact.color_input}; border-color:${_vm.settingByTemplate16[0].contact.color_text};`,
          attrs: {
            "id": "ContactEmail",
            "name": "email",
            "type": "email",
            "placeholder": _vm.$t('contact_emailPlacer')
          },
          domProps: {
            "value": _vm.email
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.email = $event.target.value;
            }
          }
        }), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: errors[0],
            expression: "errors[0]"
          }],
          staticClass: "text-12 text-red-500 ml-5"
        }, [_vm._v("\n                    " + _vm._s(errors[0]) + "\n                  ")])];
      }
    }])
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "w-full flex flex-col mb-10"
  }, [_c('P', {
    staticClass: "text-14",
    style: `color: ${_vm.settingByTemplate16[0].contact.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('contact_mensale')) + "\n            ")]), _vm._v(" "), _c('validation-provider', {
    attrs: {
      "name": "comentario",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('textarea', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.comment,
            expression: "comment"
          }],
          staticClass: "input-text-rectangule",
          style: `color: ${_vm.settingByTemplate16[0].contact.color_text_input}; background-color:${_vm.settingByTemplate16[0].contact.color_input}; border-color:${_vm.settingByTemplate16[0].contact.color_text};`,
          attrs: {
            "name": "comentario",
            "placeholder": _vm.$t('contact_mensalePlacer')
          },
          domProps: {
            "value": _vm.comment
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.comment = $event.target.value;
            }
          }
        }), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: errors[0],
            expression: "errors[0]"
          }],
          staticClass: "text-12 text-red-500 ml-5"
        }, [_vm._v("\n                  " + _vm._s(errors[0]) + "\n                ")])];
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "w-full flex flex-col mb-10"
  }, [_c('P', {
    staticClass: "text-14",
    style: `color: ${_vm.settingByTemplate16[0].contact.color_text};`
  }, [_vm._v("\n              " + _vm._s(_vm.$t('contact_telefono')) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "input-content"
  }, [_c('validation-provider', {
    attrs: {
      "name": "celular",
      "rules": "required|numeric"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.numberphone,
            expression: "numberphone"
          }],
          staticClass: "input-text",
          style: `color: ${_vm.settingByTemplate16[0].contact.color_text_input}; background-color:${_vm.settingByTemplate16[0].contact.color_input}; border-color:${_vm.settingByTemplate16[0].contact.color_text};`,
          attrs: {
            "id": "ContactPhone",
            "name": "celular",
            "type": "number",
            "placeholder": _vm.$t('contact_telefonoPlacer')
          },
          domProps: {
            "value": _vm.numberphone
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.numberphone = $event.target.value;
            }
          }
        }), _vm._v(" "), _c('span', {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: errors[0],
            expression: "errors[0]"
          }],
          staticClass: "text-12 text-red-500 ml-5"
        }, [_vm._v("\n                    " + _vm._s(errors[0]) + "\n                  ")])];
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "w-full flex items-center justify-end mt-20"
  }, [_c('button', {
    staticClass: "px-20 py-10",
    class: !_vm.stateBtn ? ' cursor-not-allowed' : 'cursor-pointer',
    style: `color: ${_vm.settingByTemplate16[0].contact.color_text_btn_form}; background-color: ${_vm.settingByTemplate16[0].contact.color_btn_form}; border-radius: ${_vm.settingByTemplate16[0].settingsGeneral.radius}`,
    attrs: {
      "disabled": _vm.stateBtn ? false : true
    },
    on: {
      "click": _vm.submitContact
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('contact_enviar')) + "\n              ")])])], 1)])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template16/Ko16-Contact.vue?vue&type=template&id=4e2835d9&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/Ko16-Contact.vue?vue&type=script&lang=js&



/* harmony default export */ var Ko16_Contactvue_type_script_lang_js_ = ({
  name: 'Ko16Contact',
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },
  mixins: [idCloudinary["a" /* default */]],
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    settingByTemplate16: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      nombre: '',
      email: '',
      numberphone: '',
      comment: '',
      messageFull: '',
      message: {
        text: '',
        open: false
      },
      links: [{
        nombre: 'Facebook',
        icon: 'facebook-icon',
        link: this.dataStore.tienda.red_facebook
      }, {
        nombre: 'Twitter',
        icon: 'twitter-icon',
        link: this.dataStore.tienda.red_twitter
      }, {
        nombre: 'Instagram',
        icon: 'instagram-icon',
        link: this.dataStore.tienda.red_instagram
      }, {
        nombre: 'Youtube',
        icon: 'youtube-icon',
        link: this.dataStore.tienda.red_youtube
      }, {
        nombre: 'Tiktok',
        icon: 'tiktok-icon',
        link: this.dataStore.tienda.red_tiktok
      }],
      dataContact: [{
        dato: this.dataStore.tienda.telefono,
        icon: 'phone-icon'
      }, {
        dato: this.dataStore.tienda.whatsapp,
        icon: 'whatsapp-icon'
      }, {
        dato: this.dataStore.tienda.email_tienda,
        icon: 'email-icon'
      }],
      stateBtn: true,
      swiperOption: {
        autoHeight: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        }
      }
    };
  },
  computed: {
    facebookPixel() {
      return this.$store.state.analytics_tagmanager;
    },
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  watch: {
    'dataStore.tienda'() {
      var _this$dataStore, _this$dataStore2, _this$dataStore3, _this$dataStore4, _this$dataStore5, _this$dataStore6, _this$dataStore7, _this$dataStore8;
      this.links[0].link = (_this$dataStore = this.dataStore) === null || _this$dataStore === void 0 ? void 0 : _this$dataStore.tienda.red_facebook;
      this.links[1].link = (_this$dataStore2 = this.dataStore) === null || _this$dataStore2 === void 0 ? void 0 : _this$dataStore2.tienda.red_twitter;
      this.links[2].link = (_this$dataStore3 = this.dataStore) === null || _this$dataStore3 === void 0 ? void 0 : _this$dataStore3.tienda.red_instagram;
      this.links[3].link = (_this$dataStore4 = this.dataStore) === null || _this$dataStore4 === void 0 ? void 0 : _this$dataStore4.tienda.red_youtube;
      this.links[4].link = (_this$dataStore5 = this.dataStore) === null || _this$dataStore5 === void 0 ? void 0 : _this$dataStore5.tienda.red_tiktok;
      this.dataContact[0].dato = (_this$dataStore6 = this.dataStore) === null || _this$dataStore6 === void 0 ? void 0 : _this$dataStore6.tienda.telefono;
      this.dataContact[1].dato = (_this$dataStore7 = this.dataStore) === null || _this$dataStore7 === void 0 ? void 0 : _this$dataStore7.tienda.whatsapp;
      this.dataContact[2].dato = (_this$dataStore8 = this.dataStore) === null || _this$dataStore8 === void 0 ? void 0 : _this$dataStore8.tienda.email_tienda;
    }
  },
  destroyed() {
    this.nombre = '';
    this.email = '';
    this.numberphone = '';
    this.comment = '';
  },
  methods: {
    submitContact() {
      this.$refs.observer.validate().then(async response => {
        this.stateBtn = false;
        if (response) {
          try {
            var _this$dataStore9;
            const {
              data
            } = await external_axios_default()({
              method: 'POST',
              url: `  ${this.$store.state.urlKomerciaV3}/api/contact/message`,
              data: {
                nombre: this.nombre,
                correo: this.email,
                celular: this.numberphone,
                comentario: this.comment,
                tienda: (_this$dataStore9 = this.dataStore) === null || _this$dataStore9 === void 0 ? void 0 : _this$dataStore9.tienda.id_tienda
              }
            });
            if (data.status == 200) {
              this.$message.success({
                offset: 150,
                message: 'Comentario enviado!'
              });
              this.stateBtn = true;
              if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
                window.fbq('track', 'Contact', {
                  name: this.nombre,
                  description: this.email
                });
              }
              this.deleteInputs();
            }
          } catch (err) {
            this.stateBtn = true;
            this.$message.success({
              offset: 150,
              message: err.response
            });
          }
        }
      }).catch(e => {
        this.stateBtn = true;
        this.$message.success({
          offset: 150,
          message: 'error'
        });
      });
    },
    deleteInputs() {
      this.nombre = '';
      this.email = '';
      this.numberphone = '';
      this.comment = '';
    }
  }
});
// CONCATENATED MODULE: ./components/template16/Ko16-Contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var template16_Ko16_Contactvue_type_script_lang_js_ = (Ko16_Contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template16/Ko16-Contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(758)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template16_Ko16_Contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4e2835d9",
  "2bba0d18"
  
)

/* harmony default export */ var Ko16_Contact = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(759);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("39251a3f", content, true, context)
};

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

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_Contact_vue_vue_type_style_index_0_id_4e2835d9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_Contact_vue_vue_type_style_index_0_id_4e2835d9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_Contact_vue_vue_type_style_index_0_id_4e2835d9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_Contact_vue_vue_type_style_index_0_id_4e2835d9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko16_Contact_vue_vue_type_style_index_0_id_4e2835d9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-4e2835d9],.input-text[data-v-4e2835d9]{font-family:var(--font-style-1)!important}.input-text[data-v-4e2835d9]{background-color:transparent;border:1px solid;border-radius:var(--radius_btn);font-size:14px;padding:8px 14px;width:100%}.input-text[data-v-4e2835d9]::-moz-placeholder{font-family:var(--font-style-1)!important}.input-text[data-v-4e2835d9]::placeholder{font-family:var(--font-style-1)!important}.input-text[data-v-4e2835d9]::-moz-placeholder{color:var(--color_text);opacity:.7}.input-text[data-v-4e2835d9]::placeholder{color:var(--color_text);opacity:.7}.input-text[data-v-4e2835d9]:-internal-autofill-selected{background-color:transparent!important;background-image:none!important;color:-internal-light-dark-color(#000,#fff)!important}.input-text[data-v-4e2835d9]:-internal-autofill-selected{-webkit-appearance:menulist-button}.input-text[data-v-4e2835d9]:active,.input-text[data-v-4e2835d9]:focus{outline:0}.input-text-rectangule[data-v-4e2835d9]{background-color:transparent;border:1px solid;border-radius:var(--radius_btn);font-family:var(--font-style-1)!important;font-size:14px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;max-height:80px;min-height:80px;overflow-y:auto;padding:4px 14px;resize:none;width:100%}.input-text-rectangule[data-v-4e2835d9]::-moz-placeholder{font-family:var(--font-style-1)!important}.input-text-rectangule[data-v-4e2835d9]::placeholder{font-family:var(--font-style-1)!important}.input-text-rectangule[data-v-4e2835d9]::-moz-placeholder{opacity:.7}.input-text-rectangule[data-v-4e2835d9]::placeholder{opacity:.7}.input-text-rectangule[data-v-4e2835d9]:active,.input-text-rectangule[data-v-4e2835d9]:focus{border:2px solid hsla(240,5%,52%,.342);outline:0}.input-text-rectangule[data-v-4e2835d9]::-webkit-scrollbar{background:transparent;width:5px}.input-text-rectangule[data-v-4e2835d9]::-webkit-scrollbar-track{border-radius:5px;box-shadow:inset 0 0 10px transparent}.input-text-rectangule[data-v-4e2835d9]::-webkit-scrollbar-thumb{background:#3b3b3b}.input-text-rectangule[data-v-4e2835d9]::-webkit-scrollbar-thumb:hover{background:#8a8a8a}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template16-ko16-contact.js.map