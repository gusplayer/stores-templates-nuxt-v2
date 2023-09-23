exports.ids = [18];
exports.modules = {

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cart/Ko-Cart.vue?vue&type=template&id=47e43799&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-cart",
    class: _vm.template == 7 ? 'margintopbytemplate07' : 'margintopbytemplategeneral'
  }, [_vm.productsCart.length ? _vm._ssrNode("<div class=\"conten-items-cart\" data-v-47e43799>", "</div>", [_vm._ssrNode("<div class=\"cart-tittle\" data-v-47e43799>", "</div>", [_c('cart-icon', {
    staticClass: "header-icon-cart"
  }), _vm._ssrNode(" <p class=\"txt-cart\" data-v-47e43799>" + _vm._ssrEscape(_vm._s(_vm.$t('home_tuCarrito'))) + "</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-product-total\" data-v-47e43799>", "</div>", [_vm._ssrNode("<div class=\"content-left\" data-v-47e43799>", "</div>", _vm._l(_vm.productsCart, function (product, index) {
    return _vm._ssrNode("<div class=\"content-product-bag\" data-v-47e43799>", "</div>", [_vm._ssrNode("<div class=\"product\" data-v-47e43799>", "</div>", [_vm._ssrNode("<div class=\"content-items-product content-items-product-resposive-img\" data-v-47e43799>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinary(product.foto_cloudinary, 400, 400),
        expression: "idCloudinary(product.foto_cloudinary, 400, 400)"
      }],
      staticClass: "product-photo",
      attrs: {
        "alt": product.nombre
      }
    }, [])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-items-product margin-items-product\" data-v-47e43799>", "</div>", [_vm._ssrNode("<div class=\"product-items\" data-v-47e43799>", "</div>", [_vm._ssrNode("<div class=\"product-name\" data-v-47e43799><p class=\"text-name\" data-v-47e43799>" + _vm._ssrEscape(_vm._s(_vm._f("capitalize")(product.nombre))) + "</p> <div class=\"content_icon-sm\" data-v-47e43799><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" fill=\"#222\" class=\"icon-trash\" data-v-47e43799><title data-v-47e43799>Eliminar de carrito</title> <path d=\"M0 0h24v24H0z\" fill=\"none\" data-v-47e43799></path> <path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-47e43799></path> <path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z\" data-v-47e43799></path></svg></div></div> "), product.combinacion ? _vm._ssrNode("<div class=\"product-variant\" data-v-47e43799>", "</div>", [_vm._ssrNode("<p class=\"text-tittle\" data-v-47e43799>" + _vm._ssrEscape(_vm._s(_vm.$t('cart_variante'))) + "</p> "), _vm._l(product.combinacion, function (item, items) {
      return _c('el-tag', {
        key: items,
        staticClass: "text-variant",
        staticStyle: {
          "margin-top": "3px"
        }
      }, [_vm._v("\n                    " + _vm._s(item) + "\n                  ")]);
    })], 2) : _vm._e(), _vm._ssrNode(" <div class=\"content-price\" data-v-47e43799><div data-v-47e43799><p class=\"text-tittle\" data-v-47e43799>" + _vm._ssrEscape(_vm._s(_vm.$t('cart_precio'))) + "</p> <p class=\"text-result\" data-v-47e43799>" + _vm._ssrEscape("\n                      " + _vm._s(_vm._f("currency")(product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                    ") + "</p></div></div> "), _vm._ssrNode("<div class=\"wrapper-tag\" data-v-47e43799>", "</div>", [product.activo == 0 ? _c('el-tag', {
      attrs: {
        "type": "danger"
      }
    }, [_vm._v("\n                    Producto agotado!\n                  ")]) : _vm._e(), _vm._ssrNode(" "), product.stock_disponible == 0 ? _c('el-tag', {
      attrs: {
        "type": "danger"
      }
    }, [_vm._v("\n                    ¡No tiene las unidades disponibles!\n                  ")]) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"product-quiantity\" data-v-47e43799>", "</div>", [_vm._ssrNode("<div class=\"txt-tittle-quantity\" data-v-47e43799>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('cart_cantidad')) + "\n                  ") + "</div> "), _vm._ssrNode("<div class=\"quantity\" data-v-47e43799>", "</div>", [_vm._ssrNode("<button class=\"quantity_remove\" data-v-47e43799>", "</button>", [_c('menos-icon', {
      staticClass: "icon-quantity"
    })], 1), _vm._ssrNode(" <input id=\"InputQuantityValue\" name=\"quantityValue\" type=\"text\" placeholder onkeypress=\"return (event.charCode>47 && event.charCode<58)\"" + _vm._ssrAttr("value", product.cantidad) + " class=\"quantity_value\" data-v-47e43799> "), _vm._ssrNode("<button class=\"quantity_add\" data-v-47e43799>", "</button>", [_c('mas-icon', {
      staticClass: "icon-quantity"
    })], 1), _vm._ssrNode(" " + (product.limitQuantity == product.cantidad ? "<div class=\"container-alerta\" data-v-47e43799><span class=\"alerta\" data-v-47e43799>" + _vm._ssrEscape("\n                        " + _vm._s(_vm.$t('cart_ultimaUnidad')) + "\n                      ") + "</span></div>" : "<!---->"))], 2)], 2)], 2), _vm._ssrNode(" <div class=\"producto-price-total\" data-v-47e43799><p class=\"txt-total-product\" data-v-47e43799>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_totalPagar'))) + "</p> <p class=\"txt-price-product\" data-v-47e43799>" + _vm._ssrEscape("\n                  " + _vm._s(_vm._f("currency")(product.precio * product.cantidad, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                ") + "</p></div>")], 2), _vm._ssrNode(" <div class=\"content-product-priceIcon\" data-v-47e43799><div class=\"producto-price-total-md\" data-v-47e43799><p class=\"txt-price-product\" data-v-47e43799>" + _vm._ssrEscape("\n                  " + _vm._s(_vm._f("currency")(product.precio * product.cantidad, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                ") + "</p></div> <div class=\"content_icon-md\" data-v-47e43799><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\" fill=\"#222\" class=\"icon-trash\" data-v-47e43799><title data-v-47e43799>Eliminar de carrito</title> <path d=\"M0 0h24v24H0z\" fill=\"none\" data-v-47e43799></path> <path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-47e43799></path> <path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z\" data-v-47e43799></path></svg></div></div>")], 2)]);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-right\" data-v-47e43799>", "</div>", [_vm._ssrNode("<div class=\"content-txt-summary\" data-v-47e43799><p class=\"txt-summary\" data-v-47e43799>" + _vm._ssrEscape(_vm._s(_vm.$t('cart_resumen'))) + "</p></div> "), _vm._ssrNode("<div class=\"content-cart-product\" data-v-47e43799>", "</div>", [_vm._ssrNode("<div class=\"cart-summary-items\" data-v-47e43799><p class=\"txt-cart-summary\" style=\"font-weight: bold\" data-v-47e43799>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('cart_items')) + "\n            ") + "</p> <p class=\"txt_summary_price\" data-v-47e43799>" + _vm._ssrEscape("\n              " + _vm._s(_vm.cantidadProductos) + "\n            ") + "</p></div> " + (_vm.discountDescuentos ? "<span class=\"cart-summary-items\" data-v-47e43799><p class=\"txt-cart-summary\" style=\"font-weight: bold\" data-v-47e43799>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('footer_descuento')) + "\n            ") + "</p> <p class=\"txt_summary_price\" data-v-47e43799>" + _vm._ssrEscape("\n              -\n              " + _vm._s(_vm._f("currency")(_vm.discountDescuentos, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p></span>" : "<!---->") + " <div class=\"order_total\" data-v-47e43799><div class=\"order_total_domicile\" data-v-47e43799><p class=\"txt_summary_tittle\" style=\"font-weight: bold\" data-v-47e43799>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('footer_costoDomicilio')) + "\n              ") + "</p> " + (_vm.rangosByCiudad.envio_metodo === 'precio_ciudad' && _vm.shippingCities.length > 0 && !_vm.getFreeShipping && !_vm.FreeShippingCart ? "<details data-v-47e43799><summary class=\"txt-cart-summary\" data-v-47e43799>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('footer_valorCiudad')) + "\n                ") + "</summary> <section data-v-47e43799><ol class=\"scroll_cart_summary_items_cities\" data-v-47e43799>" + _vm._ssrList(_vm.rangosByCiudad.rangos, function (ciudad, index) {
    return "<li data-v-47e43799>" + (ciudad.price > 0 ? "<div data-v-47e43799><b data-v-47e43799>" + _vm._ssrEscape("\n                          " + _vm._s(_vm.shippingCities[index].nombre_ciu === 'Sin especificar' ? 'Resto del país' : _vm.shippingCities[index].nombre_ciu) + ":\n                        ") + "</b> <p data-v-47e43799>" + _vm._ssrEscape("\n                          " + _vm._s(_vm._f("currency")(ciudad.price, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                        ") + "</p></div>" : "<!---->") + "</li>";
  }) + "</ol></section></details>" : _vm.rangosByCiudad.envio_metodo === 'tarifa_plana' && _vm.shipping > 0 && _vm.getFreeShipping && !_vm.FreeShippingCart ? "<div class=\"content-Plana\" data-v-47e43799><div class=\"content-list\" data-v-47e43799><p class=\"txt_summary_tittle\" data-v-47e43799>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('footer_tarifaPlana')) + "\n                  ") + "</p></div> <div class=\"content-list\" data-v-47e43799><p class=\"txt_summary_price\" data-v-47e43799>" + _vm._ssrEscape("\n                    " + _vm._s(_vm._f("currency")(_vm.rangosByCiudades.valor, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                  ") + "</p></div></div>" : _vm.rangosByCiudad.envio_metodo === 'precio' && _vm.getFreeShipping && !_vm.FreeShippingCart ? "<div style=\"width: 100%\" data-v-47e43799>" + (_vm.shippingTarifaPrecio > 0 ? "<div class=\"content-Plana\" data-v-47e43799><div class=\"content-list\" data-v-47e43799><p class=\"txt_summary_tittle\" data-v-47e43799>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.$t('footer_Porprecio')) + "\n                    ") + "</p></div> <p class=\"txt_summary_price\" data-v-47e43799>" + _vm._ssrEscape("\n                    " + _vm._s(_vm._f("currency")(_vm.shippingTarifaPrecio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                  ") + "</p></div>" : _vm.shippingTarifaPrecio >= 0 ? "<p class=\"txt_summary_price\" data-v-47e43799>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('footer_tarifaPrecio')) + "\n                ") + "</p>" : "<p class=\"txt_summary_tittle\" data-v-47e43799>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('footer_encioNoconfig')) + "\n                ") + "</p>") + "</div>" : _vm.shipping && !_vm.getFreeShipping ? "<p class=\"txt_summary_price\" data-v-47e43799>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(_vm.shipping, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p>" : _vm.rangosByCiudad.envio_metodo === 'gratis' && _vm.shippingCities.length <= 0 && !_vm.getFreeShipping && !_vm.FreeShippingCart ? "<div class=\"contet-free-delivery\" data-v-47e43799><p class=\"txt_summary_tittle\" data-v-47e43799>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('footer_encioGratis')) + "\n                ") + "</p></div>" : _vm.rangosByCiudad.envio_metodo === 'sintarifa' && _vm.shippingCities.length <= 0 && !_vm.getFreeShipping && !_vm.FreeShippingCart ? "<div class=\"contet-free-delivery\" data-v-47e43799><p class=\"txt_summary_tittle\" data-v-47e43799>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('footer_enviosPorPagar')) + "\n                ") + "</p> <p class=\"txt_summary_price\" data-v-47e43799>-</p></div>" : _vm.rangosByCiudad.envio_metodo === 'sinEnvio' && _vm.shippingCities.length <= 0 && !_vm.getFreeShipping ? "<div class=\"contet-free-delivery\" data-v-47e43799><p class=\"txt_summary_tittle\" data-v-47e43799>Pasas a recoger tu compra</p></div>" : _vm.FreeShippingCart ? "<div class=\"contet-free-delivery\" data-v-47e43799><p class=\"txt_summary_tittle\" data-v-47e43799>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('footer_tarifaPrecio')) + "\n                ") + "</p> <p class=\"txt_summary_price\" data-v-47e43799>$0</p></div>" : "<!---->") + "</div></div> <div class=\"cart-summary-items\" data-v-47e43799><p class=\"txt-cart-summary\" style=\"font-weight: bold\" data-v-47e43799>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('cart_subtotal')) + "\n            ") + "</p> <p class=\"txt_summary_price\" data-v-47e43799>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.totalCart, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p></div> <div class=\"line\" data-v-47e43799></div> "), _vm._ssrNode("<div class=\"content-btn\" data-v-47e43799>", "</div>", [_vm._ssrNode("<div class=\"content-totalPay\" data-v-47e43799><p class=\"txt_summary_tittle txt-total\" data-v-47e43799>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('cart_totalpagar')) + "\n              ") + "</p> <p class=\"txt_summary_price\" data-v-47e43799>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(_vm.totalCart + (_vm.shipping ? _vm.shipping : 0) + (_vm.shippingTarifaPrecio && _vm.shippingTarifaPrecio != 'empty' && !_vm.FreeShippingCart ? _vm.shippingTarifaPrecio : 0) - _vm.discountDescuentos, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p></div> " + (_vm.isQuotation() || !_vm.countryStore && _vm.productsCart.length ? "<p class=\"Quotation-message\" data-v-47e43799>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('footer_contactoMgs')) + "\n            ") + "</p>" : "<!---->") + " " + (_vm.dataStore.tienda.estado == 0 ? "<p class=\"Quotation-message\" data-v-47e43799>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('footer_tiendaCerrada')) + "\n            ") + "</p>" : "<!---->") + " " + (!_vm.IsMinValorTotal() && _vm.productsCart.length ? "<p class=\"Quotation-message\" data-v-47e43799>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('cart_minimovalorProductos1')) + "\n              " + _vm._s(_vm._f("currency")(_vm.dataStore.tienda.minimo_compra, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              " + _vm._s(_vm.$t('cart_minimovalorProductos2')) + "\n            ") + "</p>" : "<!---->") + " " + (_vm.productsCart.length && !_vm.isQuotation() && _vm.dataStore.tienda.estado == 1 && !_vm.estadoShippingTarifaPrecio && _vm.countryStore && _vm.IsMinValorTotal() && _vm.expiredDate(_vm.dataStore.tienda.fecha_expiracion) ? "<button class=\"btn-buy-1\" data-v-47e43799>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('footer_finalizarCompra')) + "\n            ") + "</button>" : "<!---->") + " "), _c('nuxt-link', {
    staticClass: "btn-buy-2",
    attrs: {
      "to": `${_vm.redirectCart}`
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('footer_seguirCompra')) + "\n            ")])], 2)], 2)], 2)], 2)], 2) : _vm._ssrNode("<div class=\"contenedor-vacio\" data-v-47e43799>", "</div>", [_vm._ssrNode("<div class=\"wrapper_photo\" data-v-47e43799><img" + _vm._ssrAttr("src", __webpack_require__(53)) + " alt=\"Product img\" class=\"photo\" data-v-47e43799></div> <p class=\"text-empty\" data-v-47e43799>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_carritoVacio2'))) + "</p> <p class=\"text-empty2\" data-v-47e43799>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('footer_carritoVacio3')) + "\n    ") + "</p> "), _c('nuxt-link', {
    attrs: {
      "to": `${_vm.redirectCart}`
    }
  }, [_c('button', {
    ref: "colorBtn",
    staticClass: "btn3"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('cart_agregarProductos')) + "\n      ")])])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/cart/Ko-Cart.vue?vue&type=template&id=47e43799&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// EXTERNAL MODULE: ./mixins/expiredDate.js
var expiredDate = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cart/Ko-Cart.vue?vue&type=script&lang=js&



// import { Empty } from 'element-ui'
/* harmony default export */ var Ko_Cartvue_type_script_lang_js_ = ({
  name: 'KoCartG',
  filters: {
    capitalize(value) {
      if (value) {
        value = value.toLowerCase();
        return value.replace(/^\w|\s\w/g, l => l.toUpperCase());
      }
    }
  },
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */], expiredDate["a" /* default */]],
  props: {
    dataStore: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // img: 'https://res.cloudinary.com/komerciaacademico/image/upload/v1583535445/komerciaAcademico/CARRITO_y2lbh6.png',
      envioProducto: '',
      layoutLogin: true,
      shippingCities: [],
      rangosByCiudades: [],
      shippingTarifaPrecio: '',
      estadoShippingTarifaPrecio: false,
      FreeShippingCart: false,
      discountDescuentos: 0
    };
  },
  computed: {
    // stateModalPwd() {
    //   return this.$store.state.stateModalPwd
    // },
    cities() {
      return this.$store.state.cities;
    },
    verifyProducts() {
      return this.$store.getters.verifyProducts;
    },
    cantidadProductos() {
      return this.$store.getters.cantidadProductos;
    },
    template() {
      return this.$store.state.template;
    },
    totalCart() {
      return this.$store.state.totalCart;
    },
    redirectCart() {
      let resultURl;
      if (this.template == 5 || this.template == 6 || this.template == 99 || this.template == 12) {
        resultURl = '/';
      } else {
        resultURl = '/productos';
      }
      return resultURl;
    },
    getFreeShipping() {
      let free = true;
      if (this.rangosByCiudad.envio_metodo === 'gratis') {
        free = false;
      }
      if (this.rangosByCiudad.envio_metodo === 'precio_ciudad') {
        free = false;
      }
      if (this.rangosByCiudad.envio_metodo === 'tarifa_plana') {
        free = true;
      }
      if (this.rangosByCiudad.envio_metodo === 'precio') {
        free = true;
      }
      if (this.rangosByCiudad.envio_metodo === 'sintarifa') {
        free = false;
      }
      if (this.rangosByCiudad.envio_metodo === 'sinEnvio') {
        free = false;
      }
      return free;
    },
    rangosByCiudad() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.rangosByCiudades = JSON.parse(this.$store.state.envios.valores);
      return this.rangosByCiudades;
    },
    shipping() {
      if (this.FreeShippingCart) {
        return 0;
      } else {
        if (this.$store.state.envios.estado) {
          let shipping = JSON.parse(this.$store.state.envios.valores);
          switch (shipping.envio_metodo) {
            case 'sinEnvio':
              return 0;
              // eslint-disable-next-line no-unreachable
              break;
            case 'sintarifa':
              return 0;
              // eslint-disable-next-line no-unreachable
              break;
            case 'gratis':
              return 0;
              // eslint-disable-next-line no-unreachable
              break;
            case 'tarifa_plana':
              return shipping.valor;
              // eslint-disable-next-line no-unreachable
              break;
            case 'precio_ciudad':
              // eslint-disable-next-line no-case-declarations
              let result = shipping.rangos.find(rango => {
                if (this.totalCart >= rango.inicial && this.totalCart <= rango.final) {
                  return rango;
                }
              });
              if (result) {
                return result.precio;
              } else {
                return 0;
              }
              // eslint-disable-next-line no-unreachable
              break;
            default:
              return 0;
          }
        } else {
          return 0;
        }
      }
    },
    countryStore() {
      if (this.dataStore && this.dataStore.tienda.pais) {
        switch (this.dataStore.tienda.pais) {
          case 'Colombia':
            return true;
            // eslint-disable-next-line no-unreachable
            break;
          case 'Chile':
            return true;
            // eslint-disable-next-line no-unreachable
            break;
          case 'Perú':
            return true;
            // eslint-disable-next-line no-unreachable
            break;
          case 'Panamá':
            return true;
            // eslint-disable-next-line no-unreachable
            break;
          default:
            return false;
        }
      } else {
        return false;
      }
    },
    productsCart() {
      return this.$store.state.productsCart;
    },
    shippingDescuento() {
      return this.$store.getters.listaDescuentosProductos;
    },
    shippingDescuento2() {
      return this.$store.getters.listaDescuentosPrecio;
    },
    facebookPixel() {
      return this.$store.state.analytics_tagmanager;
    }
  },
  watch: {
    rangosByCiudad() {
      this.filterCities();
    },
    // cities() {
    //   this.filterCities()
    // },
    productsCart() {
      if (this.productsCart) {
        this.productsFreeShippingCart();
      }
    },
    totalCart() {
      this.shippingPrecio();
      this.IsMinValorTotal();
      this.obtainDiscountValue();
    },
    shippingDescuento() {
      this.obtainDiscountValue();
    },
    shippingDescuento2() {
      this.obtainDiscountValue();
    }
  },
  async mounted() {
    this.getCities();
    this.$store.dispatch('GET_DESCUENTOS');
    this.$store.dispatch('GET_SHOPPING_CART');
    this.$store.commit('CALCULATE_TOTAL_CART');
    if (this.rangosByCiudades.envio_metodo == 'precio') {
      this.shippingPrecio();
    }
    this.productsFreeShippingCart();
    this.IsMinValorTotal();
    this.obtainDiscountValue();
  },
  methods: {
    obtainDiscountValue() {
      let value1 = this.calculateDiscount(this.shippingDescuento);
      let value2 = this.calculateDiscount(this.shippingDescuento2);
      this.discountDescuentos = value1 + value2;
    },
    calculateDiscount(discount) {
      if (!discount) {
        return 0;
      }
      if (discount.tipo === 1) {
        return discount.valor || 0;
      } else if (discount.tipo === 0) {
        return discount.valor ? Math.trunc(this.totalCart * discount.valor / 100) : 0;
      }
      return 0;
    },
    shippingPrecio() {
      if (this.rangosByCiudades.envio_metodo === 'precio') {
        const result = this.rangosByCiudades.rangos.find(rango => this.totalCart >= rango.inicial && this.totalCart <= rango.final);
        if (result) {
          this.shippingTarifaPrecio = result.precio;
          this.estadoShippingTarifaPrecio = false;
        } else {
          this.shippingTarifaPrecio = 'empty';
          this.estadoShippingTarifaPrecio = true;
        }
      }
    },
    isQuotation() {
      return this.productsCart.some(product => product.precio === 0);
    },
    limitQuantity(product) {
      product.cantidad = parseInt(product.cantidad);
      if (isNaN(product.cantidad) || product.cantidad <= 0) {
        product.cantidad = 1;
      } else if (product.limitQuantity !== null && product.cantidad > product.limitQuantity) {
        product.cantidad = product.limitQuantity;
      }
    },
    removeQuantity(product) {
      if (product.cantidad >= 2) {
        product.cantidad--;
        this.updateCartAndVerify();
      }
    },
    deleteItemCart(i) {
      this.$store.state.productsCart.splice(i, 1);
      this.updateCartAndVerify();
    },
    canChangeQuantity(product) {
      return product.limitQuantity > product.cantidad;
    },
    updateCartAndVerify() {
      this.$store.commit('UPDATE_CONTENT_CART');
      this.$store.commit('CALCULATE_TOTAL_CART');
      this.$store.dispatch('VERIFY_PRODUCTS');
    },
    GoPayments() {
      if (this.$store.state.productsCart.length === 0) {
        return;
      }
      const productsToPay = this.$store.state.productsCart.map(element => {
        // DATOS IMPORTANTES A ENVIAR = ID - CANTIDAD - COMBINACION
        if (element.id) {
          const {
            id,
            cantidad,
            combinacion
          } = element;
          return {
            id,
            cantidad,
            combinacion
          };
        }
        return null;
      }).filter(product => product !== null);
      if (productsToPay.length === 0) {
        return;
      }
      const json = JSON.stringify({
        products: productsToPay,
        tienda: {
          id: this.$store.state.tienda.id_tienda
        },
        canal: 'KOMERCIA'
      });
      this.$store.dispatch('SEND_ADD_TO_CART', 2);
      if (this.layourUnicentro) {
        window.open(`https://checkout.komercia.co/?params=${json}`);
      } else {
        location.href = `https://checkout.komercia.co/?params=${json}`;
      }
    },
    async getCities() {
      if (this.rangosByCiudad.envio_metodo === 'precio_ciudad') {
        try {
          const storeCities = JSON.parse(localStorage.getItem('storeCities'));
          if (storeCities) {
            this.$store.commit('SET_CITIES', storeCities);
            this.filterCities();
          } else {
            const {
              success
            } = await this.$store.dispatch('GET_CITIES');
            if (success) {
              this.filterCities();
            }
          }
        } catch (err) {
          const {
            success
          } = await this.$store.dispatch('GET_CITIES');
          if (success) {
            this.filterCities();
          }
        }
      }
    },
    filterCities() {
      if (this.rangosByCiudad.envio_metodo === 'precio_ciudad' && this.cities.length > 0) {
        this.rangosByCiudad.rangos.forEach((rango, index) => {
          this.cities.filter(city => {
            if (city.id === this.rangosByCiudad.rangos[index].id) {
              this.shippingCities.push(city);
            }
          });
        });
      }
    },
    IsMinValorTotal() {
      if (!this.dataStore.tienda.minimo_compra || this.dataStore.tienda.minimo_compra === 0) {
        return true;
      }
      const totalWithShipping = this.totalCart + (this.shipping ? this.shipping : 0) + (this.shippingTarifaPrecio && this.shippingTarifaPrecio !== 'empty' ? this.shippingTarifaPrecio : 0) - ((this.shippingDescuento && this.shippingDescuento.valor && this.shippingDescuento.tipo === 1 ? this.shippingDescuento.valor : this.shippingDescuento && this.shippingDescuento.valor && this.shippingDescuento.tipo === 0 ? Math.trunc(this.totalCart * this.shippingDescuento.valor / 100) : 0) + (this.shippingDescuento2 && this.shippingDescuento2.precio ? this.shippingDescuento2.precio : 0));
      return totalWithShipping >= this.dataStore.tienda.minimo_compra;
    },
    productsFreeShippingCart() {
      if (this.productsCart) {
        let result = this.productsCart.filter(rango => {
          if (rango.envio_gratis === 1) {
            return rango;
          }
        });
        if (this.productsCart.length == result.length) {
          this.FreeShippingCart = true;
          // this.rangosByCiudad.envio_metodo = 'gratis'
        } else {
          this.FreeShippingCart = false;
          // this.rangosByCiudad.envio_metodo = this.rangosByCiudad.envio_metodo
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/cart/Ko-Cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var cart_Ko_Cartvue_type_script_lang_js_ = (Ko_Cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/cart/Ko-Cart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(649)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cart_Ko_Cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "47e43799",
  "619b1742"
  
)

/* harmony default export */ var Ko_Cart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(650);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5be15f90", content, true, context)
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

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icono_cesta.60de836.png";

/***/ }),

/***/ 54:
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

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Cart_vue_vue_type_style_index_0_id_47e43799_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(397);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Cart_vue_vue_type_style_index_0_id_47e43799_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Cart_vue_vue_type_style_index_0_id_47e43799_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Cart_vue_vue_type_style_index_0_id_47e43799_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Cart_vue_vue_type_style_index_0_id_47e43799_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-cart[data-v-47e43799]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding-bottom:48px;width:100%}.margintopbytemplate07[data-v-47e43799]{padding-top:100px}.margintopbytemplategeneral[data-v-47e43799]{padding-top:30px}.conten-items-cart[data-v-47e43799]{flex-direction:column}.cart-tittle[data-v-47e43799],.conten-items-cart[data-v-47e43799]{align-items:center;display:flex;justify-content:center}.cart-tittle[data-v-47e43799]{flex-direction:row;margin-bottom:15px;margin-top:40px;width:100%}.header-icon-cart[data-v-47e43799]{bottom:.125em;color:#222;font-size:30px;margin-right:5px}.txt-cart[data-v-47e43799]{color:#222;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font-size:30px;font-weight:600;text-align:left;width:100%}.content-right[data-v-47e43799]{align-items:center;border-color:#efefef;border-width:1px;justify-content:flex-start;padding:20px}.content-left[data-v-47e43799],.content-right[data-v-47e43799]{display:flex;flex-direction:column;width:100%}.content-left[data-v-47e43799]{align-items:flex-start;justify-content:center}.quantity[data-v-47e43799]{background:#f4f4f4;box-sizing:border-box;display:flex;flex-direction:row;margin-top:10px;max-width:240px;position:relative}.text-quantity[data-v-47e43799]{align-self:center;color:#2c2930;font-size:14px;font-weight:700;margin-right:15px}.quantity_remove[data-v-47e43799]{border:1px solid #f4f4f4;border-bottom-left-radius:5px;border-right-style:none;border-top-left-radius:5px}.quantity_remove[data-v-47e43799],.quantity_value[data-v-47e43799]{background:transparent;height:41px;width:55px}.quantity_value[data-v-47e43799]{border-color:#f4f4f4;border-style:solid none;border-width:1px;color:#2c2930;font-size:1em;padding-left:10px;padding-right:10px;text-align:center}.quantity_add[data-v-47e43799]{background:transparent;border:1px solid #f4f4f4;border-bottom-right-radius:5px;border-left-style:none;border-top-right-radius:5px;height:41px;width:55px}.container-alerta[data-v-47e43799]{align-items:center;background-color:#fae84b;border:1px solid #e6d542;border-radius:6px;bottom:4px;color:#000;display:flex;font-size:14px;justify-content:center;position:absolute;right:-133px;width:130px}.icon-quantity[data-v-47e43799]{color:#2c2930;cursor:pointer}.icon-quantity[data-v-47e43799]:hover{color:#eb7025;cursor:pointer}.alerta[data-v-47e43799]{padding:5px;text-align:center}.product-variant[data-v-47e43799] .el-tag{background-color:#2c2930;border:1px solid #2c2930;border-radius:5px}.product-variant[data-v-47e43799] .el-tag,.wrapper-tag[data-v-47e43799] .el-tag{box-sizing:border-box;color:#fff;display:inline-block;font-size:12px;height:28px;margin-left:2px;padding:0 2px;text-align:center;white-space:nowrap}.wrapper-tag[data-v-47e43799] .el-tag{background-color:#df3e3e;border:1px solid #df3e3e;border-radius:5px}.text-name[data-v-47e43799],.text-result[data-v-47e43799],.text-tittle[data-v-47e43799],.text-variant[data-v-47e43799],.txt-cart-summary[data-v-47e43799],.txt-price-product[data-v-47e43799],.txt-summary[data-v-47e43799],.txt-total-product[data-v-47e43799],.txt_summary_price[data-v-47e43799],.txt_summary_tittle[data-v-47e43799]{color:#222;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important}.product-photo[data-v-47e43799]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);border-radius:6px;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%}.content-cart-product[data-v-47e43799]{align-items:center;flex-direction:column;justify-content:center;width:100%}.cart-summary-items[data-v-47e43799]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;width:100%}.content-txt-summary[data-v-47e43799]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;margin-bottom:30px;width:100%}.txt-summary[data-v-47e43799]{font-size:20px;font-weight:600}.order_total[data-v-47e43799]{align-items:center}.order_total[data-v-47e43799],.order_total_domicile[data-v-47e43799]{display:flex;flex-direction:column;justify-content:flex-start;width:100%}.order_total_domicile[data-v-47e43799]{align-items:flex-start}details[data-v-47e43799]{align-self:flex-end;color:#333;flex:1;font-size:13px;width:100%}details summary[data-v-47e43799]{cursor:pointer;font-size:14px;font-weight:700;outline:none;text-align:right}details ol[data-v-47e43799]{display:flex;flex-direction:column;padding:5px 0}details ol li div[data-v-47e43799]{display:flex;justify-content:space-between;padding:2px 4px}details ol li[data-v-47e43799]:nth-child(2n){background-color:hsla(0,0%,40%,.1)}details[open] summary~*[data-v-47e43799]{animation:sweep .5s ease-in-out}.scroll_cart_summary_items_cities[data-v-47e43799]{color:#2c2930;display:flex;flex-direction:column;max-height:150px;overflow-y:auto;width:100%}.scroll_cart_summary_items_cities li[data-v-47e43799]{margin-right:5px}.scroll_cart_summary_items_cities[data-v-47e43799]::-webkit-scrollbar{background:transparent;width:4px}.scroll_cart_summary_items_cities[data-v-47e43799]::-webkit-scrollbar-track{border-radius:10px;box-shadow:inset 0 0 10px transparent}.scroll_cart_summary_items_cities[data-v-47e43799]::-webkit-scrollbar-thumb{background:#000;border-radius:10px}.content-Plana[data-v-47e43799]{align-items:center;margin-bottom:20px;width:100%}.content-Plana[data-v-47e43799],.content-list[data-v-47e43799]{display:flex;flex-direction:row;justify-content:space-between}.content-list[data-v-47e43799]{align-items:flex-end}.content-totalPay[data-v-47e43799],.contet-free-delivery[data-v-47e43799]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:20px;width:100%}.content-totalPay[data-v-47e43799]{margin-top:20px}.txt-total[data-v-47e43799]{font-weight:600}.content-btn[data-v-47e43799]{flex-direction:column;justify-content:center}.content-btn[data-v-47e43799],.txt_summary_tittle[data-v-47e43799]{align-items:center;display:flex;width:100%}.txt_summary_tittle[data-v-47e43799]{justify-content:flex-start}.txt_summary_price[data-v-47e43799]{align-items:flex-end;display:flex;font-weight:600;justify-content:flex-end;width:auto}.line[data-v-47e43799]{border-color:#666;border-top-width:1px;margin-bottom:3px;margin-top:3px;width:100%}.icon-trash[data-v-47e43799]:hover{fill:#eb7025;cursor:pointer}.contenedor-vacio[data-v-47e43799]{align-items:center;display:flex;flex-direction:column;height:100%;height:calc(100vh - 416px);justify-content:center;max-width:1300px;padding:40px 20px;width:100%}.wrapper_photo[data-v-47e43799]{max-height:600px;max-width:600px;position:relative}.photo[data-v-47e43799]{border-radius:10px;height:120px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.btn3[data-v-47e43799]{background-color:transparent;border:2px solid #000;border-radius:5px;color:#000;cursor:pointer;font-size:14px;font-weight:700;margin-top:10px;padding:8px 12px;transition:all .2s ease-in}.btn3[data-v-47e43799]:hover{border:2px solid grey;color:grey}.Quotation-message[data-v-47e43799]{color:#222;cursor:pointer;font-size:14px;font-weight:700;margin-top:10px;padding:8px 12px;text-align:center;width:100%}.text-empty[data-v-47e43799]{color:#222;font-size:18px;font-weight:700;margin-top:15px}.text-empty2[data-v-47e43799]{color:#222;font-size:16px;font-weight:400;margin-bottom:15px;max-width:400px;text-align:center}@media (min-width:300px){.conten-items-cart[data-v-47e43799]{width:90%}.content-product-bag[data-v-47e43799],.content-product-total[data-v-47e43799]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.content-items-product[data-v-47e43799]{padding-bottom:20px;padding-top:20px}.product[data-v-47e43799]{border-color:#efefef;border-width:1px;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:20px}.product[data-v-47e43799],.product-items[data-v-47e43799]{align-items:flex-start;display:grid;justify-content:center;width:100%}.product-items[data-v-47e43799]{grid-gap:1rem;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr))}.product-quiantity[data-v-47e43799]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;width:100%}.product-name[data-v-47e43799]{justify-content:space-between;padding-right:10px}.content-box-items[data-v-47e43799],.product-name[data-v-47e43799]{align-items:center;display:flex;flex-direction:row;width:100%}.content-box-items[data-v-47e43799]{justify-content:flex-start;margin-top:10px}.producto-price-total[data-v-47e43799]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;margin-top:30px;width:100%}.text-name[data-v-47e43799]{font-weight:600}.text-name[data-v-47e43799],.txt-total-product[data-v-47e43799]{font-size:16px}.text-result[data-v-47e43799],.txt-price-product[data-v-47e43799]{font-size:16px;font-weight:600}.content-product-priceIcon[data-v-47e43799],.content_icon-md[data-v-47e43799]{display:none}.btn-buy-1[data-v-47e43799]{align-items:center;background-color:#222;border-color:#222;border-radius:.375rem;border-width:2px;color:#fff;display:flex;font-weight:600;height:40px;justify-content:center;margin-bottom:10px;margin-top:30px;width:100%}.btn-buy-1[data-v-47e43799]:hover{background-color:#eb7025;border-color:#eb7025}.btn-buy-2[data-v-47e43799]{align-items:center;border-color:#222;border-radius:.375rem;border-width:2px;color:#222;display:flex;font-weight:600;height:40px;justify-content:center;width:100%}.btn-buy-2[data-v-47e43799]:hover{border-color:#eb7025;color:#eb7025}}@media (min-width:768px){.product[data-v-47e43799]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}.content-items-product[data-v-47e43799]{padding:25px}.producto-price-total[data-v-47e43799]{display:none}.content-product-priceIcon[data-v-47e43799]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:25px;width:100%}.content_icon-sm[data-v-47e43799]{display:none}.content_icon-md[data-v-47e43799]{display:flex;width:auto}.text-name[data-v-47e43799],.txt-price-product[data-v-47e43799]{font-size:20px;font-weight:600}}@media (min-width:1024px){.content-left[data-v-47e43799]{margin-right:40px}.content-right[data-v-47e43799]{margin-bottom:40px;position:sticky;top:160px;width:60%}.content-product-total[data-v-47e43799]{align-items:flex-start;display:flex;flex-direction:row;justify-content:center;width:100%}}@media (min-width:1280px){.content-right[data-v-47e43799]{top:120px;width:50%}}@media (min-width:1400px){.conten-items-cart[data-v-47e43799]{max-width:1400px;width:100%}}@media (max-width:500px){.product[data-v-47e43799]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr))}.content-items-product-resposive-img[data-v-47e43799]{align-items:center;display:flex;justify-content:center}.margin-items-product[data-v-47e43799]{margin-left:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=cart-ko-cart.js.map