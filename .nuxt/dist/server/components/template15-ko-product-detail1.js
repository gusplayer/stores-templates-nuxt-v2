exports.ids = [101];
exports.modules = {

/***/ 1182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/Ko-ProductDetail-1.vue?vue&type=template&id=bacfa556&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3, _vm$data, _vm$data$detalle, _vm$data$detalle2, _vm$data$detalle2$cat, _vm$data$detalle3, _vm$data$detalle3$sub, _vm$data$detalle4, _vm$data$detalle4$sub;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "w-full flex flex-col justify-center items-center mb-30",
    staticStyle: {
      "background-color": "var(--background_color_1)"
    },
    style: [_vm.settingByTemplate15[0].detailsProducts, _vm.settingByTemplate15[0].settingGeneral, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate15[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.settingGeneral) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.font) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Poppins'
    }]
  }, [_vm._ssrNode((_vm.loading ? "<div data-v-bacfa556></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"w-full box-content flex items-center justify-center\" style=\"background-color: var(--background_color_2)\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<div class=\"w-full max-w-7xl flex flex-row items-center justify-start py-10 px-10 md:px-5\"" + _vm._ssrStyle(null, `color: ${_vm.settingByTemplate15[0].detailsProducts.color_breadCrumbs};`, null) + " data-v-bacfa556>", "</div>", [_c('nuxt-link', {
    staticClass: "text-14",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('header_inicio')) + "\n      ")]), _vm._ssrNode(" <p class=\"px-10 text-14 font-bold\" data-v-bacfa556>&gt;</p> "), _c('nuxt-link', {
    staticClass: "text-14 font-bold",
    attrs: {
      "to": "/productos"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('header_productos')) + "\n      ")]), _vm._ssrNode(" <p class=\"px-10 text-14 font-bold\" data-v-bacfa556>&gt;</p> " + (!_vm.loading ? "<p class=\"text-14 font-bold\" data-v-bacfa556>" + _vm._ssrEscape("\n        " + _vm._s((_vm$data = _vm.data) === null || _vm$data === void 0 ? void 0 : (_vm$data$detalle = _vm$data.detalle) === null || _vm$data$detalle === void 0 ? void 0 : _vm$data$detalle.nombre) + "\n      ") + "</p>" : "<!---->"))], 2)]), _vm._ssrNode(" "), !_vm.loading ? _vm._ssrNode("<div class=\"w-full h-full flex justify-center items-center px-10 md:px-5 mt-40 max-w-7xl\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<div class=\"w-full h-full flex flex-col justify-center items-center\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<div class=\"w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-start\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-col justify-center items-center\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<div class=\"w-full flex flex-row items-start pb-10\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<div class=\"hidden md:flex w-full h-full relative overflow-hidden mr-30 max-w-[110px] max-h-[442px] min-h-[442px]\" data-v-bacfa556>", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper w-full h-full\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<div class=\"swiper-slide w-full h-full\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<div class=\"w-full h-full flex flex-col justify-stretch max-h-[100px] max-w-[100px]\" data-v-bacfa556>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.data.detalle.foto_cloudinary, 150, 150),
      expression: "\n                          idCloudinary(data.detalle.foto_cloudinary, 150, 150)\n                        "
    }],
    staticClass: "w-full h-full cursor-pointer object-cover rounded-6 mb-10 align-top",
    attrs: {
      "width": "100",
      "height": "100",
      "alt": "Product Img"
    },
    on: {
      "click": function ($event) {
        return _vm.selectedPhoto(_vm.data.detalle.foto_cloudinary);
      }
    }
  }, [])])]), _vm._ssrNode(" "), _vm._l(_vm.data.fotos, function (foto, itemsFoto) {
    return _vm._ssrNode("<div class=\"swiper-slide w-full h-full\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<div class=\"w-full h-full flex flex-col justify-stretch max-h-[100px] max-w-[100px]\" data-v-bacfa556>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinaryQuality(foto.foto_cloudinary, 850, 850),
        expression: "\n                          idCloudinaryQuality(foto.foto_cloudinary, 850, 850)\n                        "
      }],
      staticClass: "w-full h-full cursor-pointer object-cover rounded-6 mb-10 align-top",
      attrs: {
        "alt": "Product Img"
      },
      on: {
        "click": function ($event) {
          return _vm.selectedPhoto(foto.foto_cloudinary);
        }
      }
    }, [])])]);
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide w-full h-full\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<div class=\"w-full h-full flex flex-col justify-stretch max-h-[100px] max-w-[100px]\" data-v-bacfa556>", "</div>", [_vm.idYoutube ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `https://img.youtube.com/vi/${_vm.idYoutube}/0.jpg`,
      expression: "\n                          `https://img.youtube.com/vi/${idYoutube}/0.jpg`\n                        "
    }],
    staticClass: "w-full h-full cursor-pointer object-cover rounded-6 mb-10 align-top",
    attrs: {
      "alt": "Product video"
    },
    on: {
      "mouseover": function ($event) {
        _vm.existYoutube = true;
      }
    }
  }, []) : _vm._e()])])], 2), _vm._ssrNode(" "), _vm.data.fotos.length > 3 ? _vm._ssrNode("<div class=\"swiper-prev\" data-v-bacfa556>", "</div>", [_c('FlechaUp-icon', {
    staticClass: "icon-swiper"
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.data.fotos.length > 3 ? _vm._ssrNode("<div class=\"swiper-next\" data-v-bacfa556>", "</div>", [_c('Flechadown-icon', {
    staticClass: "icon-swiper"
  })], 1) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"relative hidden md:flex w-full h-full max-w-[375px] max-h-[375px] mr-10\" data-v-bacfa556>", "</div>", [_vm.activeZoom && !_vm.existYoutube ? _vm._ssrNode("<div class=\"w-full h-full max-w-[375px] max-h-[375px] object-contain rounded-10 object-top\" data-v-bacfa556>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryQuality(_vm.selectPhotoUrl, 850, 850),
      expression: "idCloudinaryQuality(selectPhotoUrl, 850, 850)"
    }],
    staticClass: "w-full h-full max-w-[375px] max-h-[375px] object-contain rounded-10 object-top",
    attrs: {
      "alt": "ProductImg grande"
    }
  }, [])]) : _vm._e(), _vm._ssrNode(" <iframe" + _vm._ssrAttr("src", `https://www.youtube.com/embed/${_vm.idYoutube}?rel=0&controls=0&showinfo=0`) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\" class=\"w-full h-full max-w-[375px] max-h-[375px] object-contain rounded-10 object-top\"" + _vm._ssrStyle(null, null, {
    display: _vm.existYoutube ? '' : 'none'
  }) + " data-v-bacfa556></iframe>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"w-full h-full box-border flex md:hidden justify-start items-center\" data-v-bacfa556>", "</div>", [_c('ProductSlide', {
    staticClass: "w-full h-full max-w-[375px]",
    attrs: {
      "photos": _vm.data.fotos,
      "photo": _vm.data.detalle.foto_cloudinary,
      "id-youtube": _vm.idYoutube
    }
  })], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"w-full flex flex-col justify-start items-start\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<p class=\"mb-20\"" + _vm._ssrStyle(null, `font-size:${_vm.settingByTemplate15[0].detailsProducts.color_title} !important; font-weight:${_vm.settingByTemplate15[0].detailsProducts.fontWeightTitle}; color:${_vm.settingByTemplate15[0].detailsProducts.color_title};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n            " + _vm._s(_vm.data.detalle.nombre) + "\n          ") + "</p> <div class=\"w-full flex flex-row justify-start items-center mb-20\" data-v-bacfa556>" + (_vm.salesData.precio ? "<p" + _vm._ssrStyle(null, `font-size:${_vm.settingByTemplate15[0].detailsProducts.fontSizePrice}; font-weight:${_vm.settingByTemplate15[0].detailsProducts.fontWeightPrice}; color:${_vm.settingByTemplate15[0].detailsProducts.color_price};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.salesData.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p>" : "<!---->") + " " + (_vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? "<div class=\"w-full flex flex-row justify-start items-center\" data-v-bacfa556><p class=\"text-12 mx-5 bg-red-500 text-white-white px-3 py-5 rounded-4\" data-v-bacfa556>" + _vm._ssrEscape("\n                " + _vm._s(_vm.data.info.promocion_valor) + "% De Descuento\n              ") + "</p> <p class=\"line-through\"" + _vm._ssrStyle(null, `font-size:${_vm.settingByTemplate15[0].detailsProducts.fontSizePriceDescount}; font-weight:${_vm.settingByTemplate15[0].detailsProducts.fontWeightPriceDescount}; color:${_vm.settingByTemplate15[0].detailsProducts.color_priceDescount};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(_vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor ? Math.trunc(_vm.salesData.precio / (1 - _vm.data.info.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p></div>" : "<!---->") + "</div> " + (_vm.data.info.descripcion_corta ? "<div class=\"w-full mb-25 pt-10\" data-v-bacfa556><p class=\"text-14\"" + _vm._ssrStyle(null, ` color:${_vm.settingByTemplate15[0].detailsProducts.color_subtext};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.info.descripcion_corta) + "\n            ") + "</p></div>" : "<!---->") + " "), _vm.data.detalle.con_variante > 0 ? _vm._ssrNode("<div class=\"w-full mb-15\" data-v-bacfa556>", "</div>", _vm._l(_vm.data.variantes, function (variant, index) {
    return _vm._ssrNode("<div class=\"flex flex-col justify-center items-start\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<label for=\"variant name\" class=\"text-16 font-bold\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate15[0].detailsProducts.color_text};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n                " + _vm._s(variant.nombre) + ":\n              ") + "</label> "), _c('SelectGroup', {
      attrs: {
        "index": index,
        "variantes": _vm.data.variantes,
        "details-products": _vm.settingByTemplate15[0].detailsProducts,
        "setting-general": _vm.settingByTemplate15[0].settingGeneral
      }
    }, _vm._l(variant.valores, function (item) {
      return _c('option', {
        key: item.option,
        domProps: {
          "value": item.option
        }
      }, [_c('p', {
        staticClass: "text-14",
        style: `color:${_vm.settingByTemplate15[0].detailsProducts.color_subtext};`
      }, [_vm._v("\n                    " + _vm._s(item.option) + "\n                  ")])]);
    }), 0)], 2);
  }), 0) : _vm._e(), _vm._ssrNode(" " + (_vm.userDropshipping.userName ? "<div class=\"w-full flex flex-row items-center mb-30\" data-v-bacfa556><p class=\"text-16 font-bold mr-10\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate15[0].detailsProducts.color_text};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_dropshipping')) + "\n            ") + "</p> <p class=\"text-14\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate15[0].detailsProducts.color_subtext};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n              " + _vm._s(_vm.userDropshipping.userName) + "\n            ") + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"w-full flex flex-row justify-start items-center mb-20\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("flex flex-row justify-center items-center mr-20 border-2", {
    disabled: !_vm.salesData.estado
  }) + _vm._ssrStyle(null, `border-color:${_vm.settingByTemplate15[0].detailsProducts.color_border}; border-radius: ${_vm.settingByTemplate15[0].settingGeneral.radius};`, null) + " data-v-bacfa556>", "</div>", [_vm._ssrNode("<button class=\"bg-transparent text-center text-14 px-15\" data-v-bacfa556>", "</button>", [_c('menos-icon', {
    staticClass: "icon",
    style: `color:${_vm.settingByTemplate15[0].detailsProducts.color_icon};`
  })], 1), _vm._ssrNode(" <input name=\"quantityValue\" type=\"text\" onkeypress=\"return (event.charCode>47 && event.charCode<58)\"" + _vm._ssrAttr("value", _vm.quantityValue) + " class=\"bg-transparent text-center text-14 py-11 px-10 max-w-[68px] font-bold\" data-v-bacfa556> "), _vm._ssrNode("<button class=\"bg-transparent text-center text-14 px-15\" data-v-bacfa556>", "</button>", [_c('mas-icon', {
    staticClass: "icon",
    style: `color:${_vm.settingByTemplate15[0].detailsProducts.color_icon};`
  })], 1), _vm._ssrNode(" " + (_vm.maxQuantityValue == _vm.quantityValue ? "<div class=\"absolute py-3 px-5 bg-yellow-300 rounded-4 -bottom-35 w-full max-w-[300px] text-center\" data-v-bacfa556><span class=\"text-14 text-black\" data-v-bacfa556>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('cart_ultimaUnidad')) + "\n                ") + "</span></div>" : "<!---->"))], 2), _vm._ssrNode(" " + (!_vm.spent && _vm.salesData.estado == true && (_vm.data.info.tipo_servicio == null || _vm.data.info.tipo_servicio == '0') ? "<button id=\"AddToCartTag\" class=\"w-full flex justify-center items-center max-w-[300px] py-11 px-10 rounded-5\"" + _vm._ssrStyle(null, `background-color: ${_vm.settingByTemplate15[0].detailsProducts.color_btn}; color: ${_vm.settingByTemplate15[0].detailsProducts.color_text_btn}; border-radius: ${_vm.settingByTemplate15[0].settingGeneral.radius};`, null) + " data-v-bacfa556><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\"" + _vm._ssrAttr("fill", _vm.settingByTemplate15[0].detailsProducts.color_icon) + " viewBox=\"0 0 16 16\" class=\"mx-5\" data-v-bacfa556><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-bacfa556></path></svg>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_añadiralcarrito')) + "\n            ") + "</button>" : !_vm.salesData.estado ? "<button disabled=\"disabled\" class=\"w-full flex justify-center items-center max-w-[300px] py-11 px-10 rounded-5\"" + _vm._ssrStyle(null, `background-color: ${_vm.settingByTemplate15[0].detailsProducts.color_btn}; color: ${_vm.settingByTemplate15[0].detailsProducts.color_text_btn}; border-radius: ${_vm.settingByTemplate15[0].settingGeneral.radius};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n            ") + "</button>" : !_vm.spent && _vm.data.info.tipo_servicio == '1' ? "<button id=\"AddToCartTag\" class=\"w-full flex justify-center items-center max-w-[300px] py-11 px-10 rounded-5\"" + _vm._ssrStyle(null, `background-color: ${_vm.settingByTemplate15[0].detailsProducts.color_btn}; color: ${_vm.settingByTemplate15[0].detailsProducts.color_text_btn}; border-radius: ${_vm.settingByTemplate15[0].settingGeneral.radius};`, null) + " data-v-bacfa556><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\"" + _vm._ssrAttr("fill", _vm.settingByTemplate15[0].detailsProducts.color_icon) + " viewBox=\"0 0 16 16\" data-v-bacfa556><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-bacfa556></path></svg>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n            ") + "</button>" : _vm.spent ? "<button disabled=\"disabled\" class=\"w-full flex justify-center items-center max-w-[300px] py-11 px-10 rounded-5\"" + _vm._ssrStyle(null, `background-color: ${_vm.settingByTemplate15[0].detailsProducts.color_btn}; color: ${_vm.settingByTemplate15[0].detailsProducts.color_text_btn}; border-radius: ${_vm.settingByTemplate15[0].settingGeneral.radius};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('home_cardAgotado')) + "\n            ") + "</button>" : "<!---->"))], 2), _vm._ssrNode(" <div class=\"w-full flex flex-col mb-10\" data-v-bacfa556>" + (_vm.salesData.unidades > 0 ? "<div class=\"flex flex-row justify-start items-center mb-10\" data-v-bacfa556><p class=\"text-16 font-bold mr-10\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate15[0].detailsProducts.color_text};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('productdetail_stock')) + ":\n              ") + "</p> <p" + _vm._ssrClass("text-14", `${_vm.salesData.unidades > 0 ? 'text-green-500' : 'text-red-500'}`) + " data-v-bacfa556>" + _vm._ssrEscape("\n                " + _vm._s(_vm.salesData.unidades > 0 ? 'In stock' : 'Out of stock') + "\n              ") + "</p></div>" : "<!---->") + " " + ((_vm$data$detalle2 = _vm.data.detalle) !== null && _vm$data$detalle2 !== void 0 && (_vm$data$detalle2$cat = _vm$data$detalle2.categoria_producto) !== null && _vm$data$detalle2$cat !== void 0 && _vm$data$detalle2$cat.nombre_categoria_producto ? "<div class=\"flex flex-row justify-start items-center mb-10\" data-v-bacfa556><p class=\"text-16 font-bold mr-10\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate15[0].detailsProducts.color_text};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('productdetail_categoria')) + ":\n              ") + "</p> <p class=\"text-14\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate15[0].detailsProducts.color_subtext};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n                " + _vm._s(_vm.data.detalle.categoria_producto.nombre_categoria_producto) + "\n              ") + "</p></div>" : "<!---->") + " " + ((_vm$data$detalle3 = _vm.data.detalle) !== null && _vm$data$detalle3 !== void 0 && (_vm$data$detalle3$sub = _vm$data$detalle3.subcategoria_producto) !== null && _vm$data$detalle3$sub !== void 0 && _vm$data$detalle3$sub.nombre_subcategoria ? "<div class=\"flex flex-row justify-start items-center mb-10\" data-v-bacfa556><p class=\"text-16 font-bold mr-10\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate15[0].detailsProducts.color_text};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('home_subcategory')) + ":\n              ") + "</p> <p class=\"text-14\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate15[0].detailsProducts.color_subtext};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n                " + _vm._s(_vm.data.detalle.subcategoria_producto.nombre_subcategoria) + "\n              ") + "</p></div>" : "<!---->") + " " + ((_vm$data$detalle4 = _vm.data.detalle) !== null && _vm$data$detalle4 !== void 0 && (_vm$data$detalle4$sub = _vm$data$detalle4.subcategoria_producto) !== null && _vm$data$detalle4$sub !== void 0 && _vm$data$detalle4$sub.nombre_subcategoria ? "<div class=\"flex flex-row justify-start items-center mb-10\" data-v-bacfa556><p class=\"text-16 font-bold mr-10\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate15[0].detailsProducts.color_text};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('home_cardGratis')) + "\n              ") + "</p></div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"w-full flex flex-row items-center mb-10\" data-v-bacfa556>", "</div>", [_vm._ssrNode("<p class=\"text-16 font-bold mr-10\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate15[0].detailsProducts.color_text};`, null) + " data-v-bacfa556>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_compartir')) + "\n            ") + "</p> "), _vm._ssrNode("<a" + _vm._ssrAttr("href", _vm.sharingFacebook) + " target=\"_blank\" rel=\"noreferrer noopener\" class=\"btn-facebook\" data-v-bacfa556>", "</a>", [_c('facebook-icon', {
    staticClass: "wp-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"btn-whatsapp\" data-v-bacfa556>", "</button>", [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  })], 1)], 2)], 2)], 2), _vm._ssrNode(" "), _c('OptionTab', {
    staticClass: "w-full",
    attrs: {
      "data-store": _vm.dataStore,
      "data": _vm.data,
      "envio": _vm.envio,
      "setting-by-template15": _vm.settingByTemplate15
    }
  }), _vm._ssrNode(" "), _c('KoSuggestProduct', {
    staticClass: "w-full py-40",
    attrs: {
      "category": _vm.category.slice(0, 12),
      "card-products": _vm.settingByTemplate15[0].cardProducts,
      "details-products": _vm.settingByTemplate15[0].detailsProducts,
      "setting-general": _vm.settingByTemplate15[0].settingGeneral
    }
  })], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template15/Ko-ProductDetail-1.vue?vue&type=template&id=bacfa556&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template15/Ko-ProductDetail-1.vue?vue&type=script&lang=js&



/* harmony default export */ var Ko_ProductDetail_1vue_type_script_lang_js_ = ({
  name: 'Ko15ProductDetail',
  components: {
    SelectGroup: () => __webpack_require__.e(/* import() */ 114).then(__webpack_require__.bind(null, 1287)),
    ProductSlide: () => __webpack_require__.e(/* import() */ 375).then(__webpack_require__.bind(null, 1088)),
    OptionTab: () => __webpack_require__.e(/* import() */ 363).then(__webpack_require__.bind(null, 1087)),
    KoSuggestProduct: () => __webpack_require__.e(/* import() */ 115).then(__webpack_require__.bind(null, 1288))
  },
  filters: {
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase();
      }
      return '';
    }
  },
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    productsData: {
      type: Array,
      required: true
    },
    whatsapp: {
      type: String,
      required: true
    },
    envios: {
      type: Object,
      required: true
    },
    facebookPixel: {
      type: Object,
      default: null
    },
    settingByTemplate15: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      id: this.$route.params.slug,
      loading: true,
      data: {},
      selectPhotoUrl: '',
      idYoutube: '',
      existYoutube: false,
      maxQuantityValue: 1,
      quantityValue: 1,
      productIndexCart: null,
      warranty: '',
      productCart: {},
      salesData: null,
      spent: false,
      envioproducto: '',
      envio: {
        titulo: '',
        desc: ''
      },
      activeZoom: true,
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 10,
        mousewheel: true,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        }
      },
      sharing: {
        url: '',
        quote: ''
      },
      sharingFacebook: '',
      userDropshipping: {
        userId: '',
        userName: ''
      }
    };
  },
  head() {
    return {
      title: `Vista del producto ${this.data && this.data.detalle ? this.data.detalle.nombre : ''}`,
      meta: [{
        hid: 'product:catalog_id',
        property: 'product:catalog_id',
        content: this.data && this.data.detalle ? this.data.detalle.id : ''
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: this.data && this.data.detalle ? this.data.detalle.nombre : ''
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: this.sharing && this.sharing.url ? this.sharing.url : ''
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: this.data && this.data.info ? this.data.info.descripcion_corta : ''
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: this.data && this.data.detalle ? this.data.detalle.foto_cloudinary : ''
      }, {
        hid: 'og:price:amount',
        property: 'og:price:amount',
        content: this.salesData && this.salesData.precio ? this.salesData.precio : ''
      }, {
        hid: 'og:price:currency',
        property: 'og:price:currency',
        content: this.dataStore.tienda.moneda ? this.dataStore.tienda.moneda : ''
      }, {
        hid: 'product:brand',
        property: 'product:brand',
        content: this.data && this.data.info && this.data.info.marca ? this.data.info.marca : ''
      }, {
        hid: 'product:availability',
        property: 'product:availability',
        content: this.salesData && this.salesData.unidades > 0 ? 'in stock' : 'out of stock'
      }, {
        hid: 'product:condition',
        property: 'product:condition',
        content: 'new'
      }, {
        hid: 'product:price:amount',
        property: 'product:price:amount',
        content: this.salesData && this.salesData.precio ? this.salesData.precio : ''
      }, {
        hid: 'product:price:currency',
        property: 'product:price:currency',
        content: this.dataStore.tienda.moneda ? this.dataStore.tienda.moneda : ''
      }, {
        hid: 'product:sale_price:amount',
        property: 'product:sale_price:amount',
        content: this.data && this.data.info && this.data.info.tag_promocion == 1 && this.data.info.promocion_valor ? Math.trunc(this.salesData.precio / (1 - this.data.info.promocion_valor / 100)) : ''
      }, {
        hid: 'product:sale_price:currency',
        property: 'product:sale_price:currency',
        content: this.dataStore.tienda.moneda ? this.dataStore.tienda.moneda : ''
      }]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    existPayments() {
      const mediospago = this.dataStore.medios_pago;
      if (mediospago.consignacion || mediospago.convenir || mediospago.payco || mediospago.tienda || mediospago.efecty) {
        return true;
      }
      return false;
    },
    beforeCombination() {
      return this.$store.state.beforeCombination;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    precio() {
      if (this.data.detalle.precio) {
        return `$${this.data.detalle.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
      }
    },
    category() {
      return this.productsData.filter(product => product.categoria == this.data.detalle.categoria_producto.nombre_categoria_producto && product.id !== this.data.detalle.id);
    }
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook;
      this.links[1].link = this.dataStore.tienda.red_twitter;
      this.links[2].link = this.dataStore.tienda.red_instagram;
      this.links[3].link = this.dataStore.tienda.red_youtube;
    },
    productsData() {
      this.getDataProduct();
    },
    envios() {
      this.setOptionShipping();
    },
    quantityValue(value) {
      if (value > this.maxQuantityValue) {
        this.quantityValue = this.maxQuantityValue;
      }
    },
    beforeCombination(value) {
      const combinationSelected = JSON.stringify(value);
      if (this.data.combinaciones) {
        if (this.data.combinaciones.combinaciones !== '[object Object]' && this.data.detalle.con_variante > 0) {
          const combinaciones = JSON.parse(this.data.combinaciones.combinaciones);
          const result = combinaciones.find(combinacion => JSON.stringify(combinacion.combinacion) == combinationSelected);
          this.productCart = [];
          this.productIndexCart = null;
          for (const [index, productCart] of this.$store.state.productsCart.entries()) {
            if (this.data.detalle.id == productCart.id && JSON.stringify(productCart.combinacion) == JSON.stringify(result.combinacion)) {
              this.productIndexCart = index;
              this.productCart = productCart;
            }
          }
          if (result) {
            this.spent = false;
            this.maxQuantityValue = result.unidades;
            if (result.unidades == 0) {
              this.spent = true;
            }
            if (this.productCart.cantidad) {
              this.maxQuantityValue = parseInt(result.unidades) - this.productCart.cantidad;
              if (this.maxQuantityValue <= 0) {
                this.spent = true;
              }
            }
            this.salesData = result;
            this.quantityValue = 1;
          }
        }
      }
    }
  },
  mounted() {
    this.$store.state.beforeCombination = [];
    if (this.productsData && this.productsData.length && this.productsData.length > 0) {
      this.getDataProduct();
    } else {
      this.getDataProductPrev();
    }
    if (Object.keys(this.dataStore.medios_envio).length) {
      this.setOptionShipping();
    }
    if (this.$route.query.userId && this.$route.query.userName) {
      this.userDropshipping.userId = this.$route.query.userId;
      this.userDropshipping.userName = this.$route.query.userName;
    }
  },
  methods: {
    searchIdForSlug() {
      const product = this.productsData.filter(product => product.slug === this.id);
      if (product.length) {
        return product[0].id;
      }
      return this.productsData[0].id;
    },
    getDataProduct() {
      const idOfSlug = this.searchIdForSlug();
      if (idOfSlug) {
        external_axios_default.a.get(`${this.$store.state.urlTemplate}/api/producto/${idOfSlug}`).then(response => {
          this.selectedPhoto(response.data.detalle.foto_cloudinary);
          this.videoYoutube(response.data.info.video);
          this.data = response.data;
          this.salesData = {
            precio: this.data.detalle.precio,
            unidades: this.data.info.inventario,
            sku: this.data.info.sku,
            estado: true
          };
          if (response && response.data) {
            this.sharing.url = window.location.href;
            this.sharing.quote = `Explora%20el%20producto%20${response.data.detalle.nombre}%2C%20te%20van%20a%20encantar.%0ALink%20del%20producto%3A%20${this.sharing.url}`;
            this.sharingFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.sharing.url}&quote=${this.sharing.quote}`;
          }
          this.maxQuantityValue = this.data.info.inventario;
          this.setOptionShipping();
          for (const [index, productCart] of this.$store.state.productsCart.entries()) {
            if (this.data.detalle.id == productCart.id) {
              this.productIndexCart = index;
              this.productCart = productCart;
              this.maxQuantityValue = this.data.info.inventario - productCart.cantidad;
            }
          }
          if (this.salesData.unidades == 0 || this.maxQuantityValue <= 0) {
            this.spent = true;
          }
          this.loading = false;
          if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
            window.fbq('track', 'ViewContent', {
              content_type: 'product',
              content_ids: [`${this.data.detalle.id}`],
              contents: [{
                id: `${this.data.detalle.id}`,
                quantity: this.quantityValue
              }],
              value: this.salesData.precio ? this.salesData.precio : 0,
              currency: this.dataStore.tienda.moneda,
              content_name: this.data.detalle.nombre,
              content_category: 'otro'
            });
          }
        });
      } else {
        this.selectedPhoto(this.productsData[0].foto_cloudinary);
        this.data.detalle = {
          foto_cloudinary: this.productsData[0].foto_cloudinary,
          nombre: this.productsData[0].nombre,
          precio: this.productsData[0].precio
        };
        this.data.info = {
          marca: '',
          descripcion: ''
        };
        this.maxQuantityValue = 0;
        this.salesData = {
          precio: 29998,
          unidades: 0,
          sku: '4a00'
        };
        this.spent = true;
      }
    },
    getDataProductPrev() {
      this.data.detalle = {
        foto_cloudinary: 'https://vignette.wikia.nocookie.net/la-bitacora-del-capitan/images/6/67/Not_found.png/revision/latest?cb=20190509042801&path-prefix=es',
        nombre: 'Producto de prueba',
        precio: 29999
      };
      this.data.info = {
        marca: 'Marca de prueba',
        descripcion: 'Descripción de prueba'
      };
      this.maxQuantityValue = 0;
      this.salesData = {
        precio: 29999,
        unidades: 0,
        sku: '4a00'
      };
      this.spent = true;
    },
    setOptionShipping() {
      if (this.data.detalle) {
        if (this.data.detalle.envio_gratis == 1) {
          this.envio = {
            titulo: 'Envío gratis',
            desc: 'Disfruta de este obsequio por parte de la tienda.'
          };
        } else {
          this.data.envioproducto = JSON.parse(this.envios.valores);
          switch (this.data.envioproducto.envio_metodo) {
            case 'gratis':
              this.envio = {
                titulo: 'Envío gratis',
                desc: 'Disfruta de este obsequio por parte de la tienda.'
              };
              break;
            case 'sinEnvio':
              this.envio = {
                titulo: 'Sin envio',
                desc: 'Tienes que acercarte a la tienda a recoger tu pedido.'
              };
              break;
            case 'tarifa_plana':
              this.envio = {
                titulo: 'Tarifa plana',
                desc: `Compra todo lo que quieras en nuestra tienda, el valor del envio siempre sera el mismo: Valor envio $${this.data.envioproducto.valor}`
              };
              break;
            case 'precio':
              this.envio = {
                titulo: 'Tarifa por precio',
                desc: 'Según la suma del costo de tus productos te cobraran el envio'
              };
              break;
            case 'precio_ciudad':
              this.envio = {
                titulo: 'Tarifa por ciudad',
                desc: 'Según la ciudad te cobraran el envio'
              };
              break;
            case 'peso':
              this.envio = {
                titulo: 'Tarifa por peso',
                desc: ''
              };
              break;
            default:
          }
        }
      }
    },
    quantity(productCart) {
      this.quantityValue = productCart.cantidad;
    },
    addQuantity() {
      if (this.maxQuantityValue > this.quantityValue) {
        this.quantityValue++;
        this.data.cantidad = this.quantityValue;
      } else {
        // Alerta de limite de sku
      }
    },
    removeQuantity() {
      if (this.data.cantidad >= 2) {
        this.quantityValue--;
        this.data.cantidad = this.quantityValue;
      }
    },
    setMiniPhoto(photo) {
      return photo;
    },
    selectedPhoto(photo) {
      this.selectPhotoUrl = photo;
      this.existYoutube = false;
    },
    videoYoutube(url) {
      let myregexp = /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/;
      let id = '';
      if (url && url !== '' && url !== 'null') {
        this.validVideo = true;
        id = url.match(myregexp);
        if (id) {
          this.idYoutube = id[1];
        }
      }
    },
    addShoppingCart() {
      if (!this.data.cantidad) {
        this.data.cantidad = this.quantityValue;
      }
      const product = {
        id: this.data.detalle.id,
        precio: this.salesData.precio,
        cantidad: this.data.cantidad,
        foto_cloudinary: this.data.detalle.foto_cloudinary,
        nombre: this.data.detalle.nombre,
        combinacion: this.salesData.combinacion,
        envio_gratis: this.data.detalle.envio_gratis,
        promocion_valor: this.data.info.promocion_valor,
        tag_promocion: this.data.info.tag_promocion,
        dropshipping: this.userDropshipping.userId
      };
      if (this.salesData) {
        product.limitQuantity = this.salesData.unidades;
      } else {
        product.limitQuantity = this.data.info.inventario;
      }
      if (typeof this.productIndexCart === 'number') {
        const mutableProduct = this.$store.state.productsCart[this.productIndexCart];
        mutableProduct.cantidad += this.data.cantidad;
        this.$store.state.productsCart.splice(this.productIndexCart, 1, mutableProduct);
      } else {
        this.$store.state.productsCart.push(product);
      }
      this.$store.commit('UPDATE_CONTENT_CART');
      this.$router.push('/productos');
      this.$store.commit('SET_OPEN_ORDER', true);
      // this.$store.state.orderComponent = true
      this.$store.dispatch('SEND_ADD_TO_CART', 1);
    },
    GoPayments() {
      let objeto = {
        id: this.data.info.id,
        cantidad: this.quantityValue,
        combinacion: this.salesData && this.salesData.combinacion ? this.salesData.combinacion : undefined,
        dropshipping: this.userDropshipping.userId
      };
      let json = {
        products: [objeto],
        tienda: {
          id: this.$store.state.tienda.id_tienda
        },
        canal: 'KOMERCIA'
      };
      json = JSON.stringify(json);
      if (json) {
        this.$store.dispatch('SEND_ADD_TO_CART', 2);
        if (this.layourUnicentro == true) {
          window.open(`https://checkout.komercia.co/?params=${json}`);
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`;
        }
      }
    },
    evalStock(mq, qv) {
      return !(mq - qv < 0);
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
    },
    redirectWP() {
      let baseUrlMovil = 'https://api.whatsapp.com/send?';
      let baseUrlPc = 'https://web.whatsapp.com/send?';
      let urlProduct = window.location.href;
      let text = `Hola 😀, %0AQuiero compartir contigo éste  producto, seguro te va a encantar: ${this.data.detalle.nombre}%0A%0ALink de compra: ${urlProduct}%0A`;
      if (this.mobileCheck()) {
        window.open(`${baseUrlMovil}text=${text}`, '_blank');
      } else {
        window.open(`${baseUrlPc}text=${text}`, '_blank');
      }
    }
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      productID: this.data && this.data.detalle && this.data.detalle.id ? this.data.detalle.id : '',
      name: this.data && this.data.detalle && this.data.detalle.nombre ? this.data.detalle.nombre.slice(0, 149) : '',
      description: this.data && this.data.info && this.data.info.descripcion_corta ? this.data.info.descripcion_corta.slice(0, 9998) : `Producto de la tienda ${this.dataStore.tienda.nombre}`,
      url: this.sharing && this.sharing.url ? this.sharing.url : '',
      image: this.data && this.data.detalle && this.data.detalle.foto_cloudinary ? this.data.detalle.foto_cloudinary : '',
      brand: this.data && this.data.info && this.data.info.marca ? this.data.info.marca : '',
      sku: this.salesData && this.salesData.unidades ? this.salesData.unidades : '',
      offers: [{
        '@type': 'Offer',
        price: this.salesData && this.salesData.precio ? this.salesData.precio : '',
        priceCurrency: this.dataStore.tienda.moneda ? this.dataStore.tienda.moneda : '',
        itemCondition: 'https://schema.org/NewCondition',
        availability: this.salesData && this.salesData.unidades > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
      }],
      additionalProperty: [{
        '@type': 'PropertyValue',
        propertyID: 'item_group_id',
        value: this.data && this.data.detalle ? `FB${this.data.detalle.categoria_producto.id}_${this.data.detalle.categoria_producto.nombre_categoria_producto}` : '',
        status: 'active'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/template15/Ko-ProductDetail-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var template15_Ko_ProductDetail_1vue_type_script_lang_js_ = (Ko_ProductDetail_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template15/Ko-ProductDetail-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(793)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template15_Ko_ProductDetail_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bacfa556",
  "b10c70d8"
  
)

/* harmony default export */ var Ko_ProductDetail_1 = __webpack_exports__["default"] = (component.exports);

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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  filters: {
    currency(value, codigo_pais, moneda) {
      let resultCurrent;
      if (codigo_pais && moneda) {
        if (value && codigo_pais == 'co' && moneda == 'COP') {
          // return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          return `$${new Intl.NumberFormat('de-DE').format(value)}`;
        } else if (value && codigo_pais == 'pe' && moneda == 'PEN') {
          // return `S/ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          return `S/ ${new Intl.NumberFormat('es-PE').format(value)}`;
        } else if (codigo_pais == 'internacional') {
          resultCurrent = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: moneda,
            minimumFractionDigits: 0
          }).format(value);
          return `${resultCurrent}`;
        } else {
          resultCurrent = new Intl.NumberFormat(codigo_pais, {
            style: 'currency',
            currency: moneda,
            minimumFractionDigits: 0
          }).format(value);
          return `${resultCurrent}`;
        }
      } else {
        if (value) {
          // return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          return `$${new Intl.NumberFormat('de-DE').format(value)}`;
        }
      }
    }
  }
});

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(794);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2ae200c9", content, true, context)
};

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_bacfa556_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(495);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_bacfa556_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_bacfa556_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_bacfa556_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_bacfa556_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-bacfa556]{font-family:var(--font-style-1)!important}.btn-facebook[data-v-bacfa556]{background-color:transparent;border-radius:5px;color:#1877f2;cursor:pointer;display:flex;justify-content:center;margin-right:20px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-facebook[data-v-bacfa556]:hover{color:#000}.btn-whatsapp[data-v-bacfa556]{background-color:transparent;border-radius:5px;color:#25d366;cursor:pointer;display:flex;justify-content:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-whatsapp[data-v-bacfa556]:hover{color:#000}.wp-icon[data-v-bacfa556]{bottom:3px;font-size:27px}.swiper-prev[data-v-bacfa556]{top:0}.swiper-next[data-v-bacfa556],.swiper-prev[data-v-bacfa556]{left:20px;position:absolute;z-index:2}.swiper-next[data-v-bacfa556]{bottom:0;font-size:25px}.icon-swiper[data-v-bacfa556]{color:var(--color_icon);cursor:pointer;font-size:60px}.icon-swiper[data-v-bacfa556]:hover{color:var(--hover_text)}.video[data-v-bacfa556]{border-radius:10px;height:100px;margin-bottom:10px;min-height:100px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100px}.icon[data-v-bacfa556]:hover{color:var(--hover_text)}@media (min-width:300px){.video[data-v-bacfa556]{height:200px;width:100%}}@media (min-width:480px){.video[data-v-bacfa556]{height:250px}}@media (min-width:768px){.video[data-v-bacfa556]{height:400px}}@media (min-width:850px){.video[data-v-bacfa556]{height:480px}}@media (min-width:1024px){.video[data-v-bacfa556]{height:300px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template15-ko-product-detail1.js.map