exports.ids = [51];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productcard/Ko-ProductCard-1.vue?vue&type=template&id=1617f7c9&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-card"
  }, [_vm._ssrNode("<div id=\"product-card\" class=\"container-card\" data-v-1617f7c9>", "</div>", [_vm._ssrNode("<div class=\"wrapper\" data-v-1617f7c9>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-image",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('client-only', [!_vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png' : _vm.idCloudinary(this.product.foto_cloudinary, 550, 550),
      expression: "\n              this.product.foto_cloudinary == 'sin_foto.jpeg'\n                ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'\n                : idCloudinary(this.product.foto_cloudinary, 550, 550)\n            "
    }],
    staticClass: "product-image",
    class: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'notproduct-image' : '',
    attrs: {
      "width": "294",
      "height": "294",
      "loading": "lazy",
      "alt": "Product Img"
    }
  }) : _vm._e(), _vm._v(" "), _vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png' : _vm.idCloudinary(this.product.foto_cloudinary, 550, 550),
      expression: "\n              this.product.foto_cloudinary == 'sin_foto.jpeg'\n                ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'\n                : idCloudinary(this.product.foto_cloudinary, 550, 550)\n            "
    }],
    staticClass: "product-image-soldOut",
    class: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'notproduct-image' : '',
    attrs: {
      "width": "294",
      "height": "294",
      "loading": "lazy",
      "alt": "Product Img"
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "image_overlay"
  })], 1), _vm._ssrNode(" " + (this.product.tag_promocion == 1 && this.product.promocion_valor ? "<div data-v-1617f7c9><div class=\"overlay-top\" data-v-1617f7c9><div data-v-1617f7c9><p data-v-1617f7c9>" + _vm._ssrEscape(_vm._s(this.product.promocion_valor) + "% OFF") + "</p></div></div> <div class=\"overlay-free\" data-v-1617f7c9><p class=\"txt-free\" data-v-1617f7c9>" + _vm._ssrEscape(_vm._s(_vm.$t('home_pdescuento'))) + "</p></div> <div class=\"overlay-polygon\" data-v-1617f7c9><svg width=\"12px\" height=\"12px\" viewBox=\"0 0 255 255\" class=\"icon-overlay-free\" data-v-1617f7c9><polygon points=\"0,0 127.5,127.5 255,0\" data-v-1617f7c9></polygon></svg></div></div>" : "<!---->") + " <div class=\"separador-stats\" data-v-1617f7c9></div> "), _vm._ssrNode("<div class=\"stats\" data-v-1617f7c9>", "</div>", [_vm._ssrNode("<div class=\"stats-container\" data-v-1617f7c9>", "</div>", [_vm._ssrNode((_vm.soldOut ? "<p class=\"card-info-1\" data-v-1617f7c9>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_cardAgotado')) + "\n          ") + "</p>" : "<!---->") + " " + (!_vm.getFreeShipping ? "<p class=\"card-info-2\" data-v-1617f7c9>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_cardGratis')) + "\n          ") + "</p>" : "<!---->") + " <div class=\"content-name-product\" data-v-1617f7c9>" + (this.product.nombre.length >= 54 ? "<p class=\"card-title\" data-v-1617f7c9>" + _vm._ssrEscape("\n              " + _vm._s(`${this.product.nombre.slice(0, 54)}...`) + "\n            ") + "</p>" : "<p class=\"card-title\" data-v-1617f7c9>" + _vm._ssrEscape("\n              " + _vm._s(`${this.product.nombre.slice(0, 54)}`) + "\n            ") + "</p>") + "</div> " + (this.product.precio ? "<div class=\"content-text-price\" data-v-1617f7c9>" + (this.estadoCart == true && this.equalsPrice ? "<div data-v-1617f7c9>" + (this.minPrice ? "<p class=\"text-price\" data-v-1617f7c9>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p>" : "<!---->") + "</div>" : this.estadoCart == true && this.minPrice != this.maxPrice && !this.equalsPrice ? "<div class=\"content-price\" data-v-1617f7c9>" + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-1617f7c9>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</div>" : "<!---->") + " <p class=\"separator-price\" data-v-1617f7c9>-</p> " + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-1617f7c9>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</div>" : "<!---->") + "</div>" : "<div data-v-1617f7c9>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-1617f7c9>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p>" : "<!---->") + "</div>") + "</div>" : "<div class=\"content-price-empty\" data-v-1617f7c9></div>") + " "), _vm._ssrNode("<div class=\"wrapper-btn-icon\" data-v-1617f7c9>", "</div>", [_c('nuxt-link', {
    staticClass: "view_details",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('home_cardvermas')))])]), _vm._ssrNode(" <div class=\"separador-btn\" data-v-1617f7c9></div> "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div id=\"add_cart\" data-v-1617f7c9>", "</div>", [_vm._ssrNode("<p style=\"height: 23px\" data-v-1617f7c9>", "</p>", [_c('cartArrowDown'), _vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.$t('home_cardAgregar')) + "\n              "))], 2)]) : _vm._e()], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-movil\" data-v-1617f7c9>", "</div>", [_c('nuxt-link', {
    staticClass: "wrapper-image",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('client-only', [!_vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png' : _vm.idCloudinary(this.product.foto_cloudinary, 400, 400),
      expression: "\n              this.product.foto_cloudinary == 'sin_foto.jpeg'\n                ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'\n                : idCloudinary(this.product.foto_cloudinary, 400, 400)\n            "
    }],
    staticClass: "product-image",
    class: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'notproduct-image-res' : '',
    attrs: {
      "width": "294",
      "height": "294",
      "loading": "lazy",
      "alt": "Product Img"
    }
  }) : _vm._e(), _vm._v(" "), _vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png' : _vm.idCloudinary(this.product.foto_cloudinary, 400, 400),
      expression: "\n              this.product.foto_cloudinary == 'sin_foto.jpeg'\n                ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'\n                : idCloudinary(this.product.foto_cloudinary, 400, 400)\n            "
    }],
    staticClass: "product-image-soldOut",
    class: this.product.foto_cloudinary == 'sin_foto.jpeg' ? 'notproduct-image-res' : '',
    attrs: {
      "width": "294",
      "height": "294",
      "loading": "lazy",
      "alt": "Product Img"
    }
  }) : _vm._e()])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-card-items\" data-v-1617f7c9>", "</div>", [_vm._ssrNode((_vm.soldOut ? "<p class=\"card-info-1\" data-v-1617f7c9>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p>" : "<!---->") + " " + (!_vm.getFreeShipping ? "<p class=\"card-info-2\" data-v-1617f7c9>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('home_cardGratis')) + "\n        ") + "</p>" : "<!---->") + " "), _c('nuxt-link', {
    staticClass: "content-name-product",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [this.product.nombre.length >= 25 ? _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(`${this.product.nombre.slice(0, 25)}..`) + "\n          ")]) : _c('p', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(`${this.product.nombre.slice(0, 30)}`) + "\n          ")])]), _vm._ssrNode(" "), this.product.precio ? _vm._ssrNode("<div class=\"content-text-price\" data-v-1617f7c9>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [this.estadoCart == true && this.equalsPrice ? _c('div', [this.minPrice ? _c('p', {
    staticClass: "text-price"
  }, [_vm._v("\n                " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ")]) : _vm._e()]) : _vm.estadoCart && this.minPrice != this.maxPrice && !this.equalsPrice ? _c('div', {
    staticClass: "content-price"
  }, [this.product.precio > 0 || this.product.precio ? _c('div', {
    staticClass: "text-price"
  }, [_vm._v("\n                " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ")]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "separator-price"
  }, [_vm._v("-")]), _vm._v(" "), this.product.precio > 0 || this.product.precio ? _c('div', {
    staticClass: "text-price"
  }, [_vm._v("\n                " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ")]) : _vm._e()]) : _c('div', [this.product.precio > 0 || this.product.precio ? _c('p', {
    staticClass: "text-price"
  }, [_vm._v("\n                " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ")]) : _vm._e()])]), _vm._ssrNode(" "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div data-v-1617f7c9>", "</div>", [_c('cartArrowDown', {
    staticClass: "icon-cart",
    on: {
      "click": _vm.addShoppingCart
    }
  })], 1) : _vm._e()], 2) : _vm._ssrNode("<div class=\"separator-movil\" data-v-1617f7c9>", "</div>", [!this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div data-v-1617f7c9>", "</div>", [_c('cartArrowDown', {
    on: {
      "click": _vm.addShoppingCart
    }
  })], 1) : _vm._e()])], 2)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productcard/Ko-ProductCard-1.vue?vue&type=template&id=1617f7c9&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productcard/Ko-ProductCard-1.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Ko_ProductCard_1vue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'Ko-ProductCard-5',
  props: {
    product: Object
  },
  mounted() {
    this.idSlug = this.product.id;
    this.productPrice();
    if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
      this.estadoCart = true;
    }
    if (this.product) {
      this.getDataProduct();
    }
  },
  data() {
    return {
      estadoCart: false,
      minPrice: '',
      maxPrice: '',
      idSlug: '',
      maxQuantityValue: 0,
      productIndexCart: null,
      productCart: {},
      salesData: null,
      spent: false,
      active: true,
      equalsPrice: false
    };
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore;
    },
    productsCarts() {
      return this.$store.state.productsCart;
    },
    getFreeShipping() {
      let free = true;
      if (this.product.envio_gratis == 1) {
        free = false;
      } else if (this.rangosByCiudad.envio_metodo === 'gratis') {
        free = false;
      }
      return free;
    },
    rangosByCiudad() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.rangosByCiudades = JSON.parse(this.$store.state.envios.valores);
      return this.rangosByCiudades;
    },
    soldOut() {
      if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
        // this.estadoCart = true
        const arrCombinations = this.product.variantes;
        let inventario = 0;
        if (arrCombinations.length && arrCombinations[0].variantes !== '[object Object]') {
          if (arrCombinations[0].combinaciones.length && arrCombinations[0].combinaciones.length) {
            if (JSON.parse(arrCombinations[0].combinaciones[0].combinaciones).length) {
              JSON.parse(arrCombinations[0].combinaciones[0].combinaciones).forEach(item => {
                inventario += parseInt(item.unidades);
              });
            }
          }
        }
        return !inventario;
      } else {
        return !this.product.stock;
      }
    }
  },
  methods: {
    getDataProduct() {
      if (this.product) {
        this.salesData = {
          precio: this.product.precio,
          unidades: this.product.stock,
          sku: this.product.sku,
          estado: true
        };
        this.maxQuantityValue = this.product.stock;
        this.productsCarts.find((productCart, index) => {
          if (productCart.id == this.product.id) {
            this.productIndexCart = index;
            this.productCart = productCart;
            this.maxQuantityValue = this.product.stock - productCart.cantidad;
          }
        });
        if (this.salesData.unidades == 0 || this.maxQuantityValue <= 0 || this.maxQuantityValue == 0) {
          this.spent = true;
        }
      }
    },
    addShoppingCart() {
      if (this.product) {
        this.productIndexCart = null;
        this.getDataProduct();
        if (this.product.id == this.idSlug) {
          let product = {
            id: this.product.id,
            precio: this.salesData.precio,
            cantidad: 1,
            foto_cloudinary: this.product.foto_cloudinary,
            nombre: this.product.nombre,
            combinacion: undefined,
            envio_gratis: this.product.envio_gratis
          };
          if (this.salesData) {
            product.limitQuantity = this.product.stock;
          } else {
            product.limitQuantity = this.product.stock;
          }
          if (typeof this.productIndexCart === 'number') {
            const mutableProduct = this.$store.state.productsCart[this.productIndexCart];
            mutableProduct.cantidad += 1;
            this.$store.state.productsCart.splice(this.productIndexCart, 1, mutableProduct);
          } else {
            this.$store.state.productsCart.push(product);
          }
          this.$store.commit('UPDATE_CONTENT_CART');
          // this.$router.push('/')
          this.$store.commit('SET_OPEN_ORDER', true);
          // this.$store.state.orderComponent = true
          this.$store.dispatch('SEND_ADD_TO_CART', 1);
        }
      }
    },
    productPrice() {
      if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
        const arrCombinations = this.product.variantes;
        if (arrCombinations.length && arrCombinations[0].variantes !== '[object Object]') {
          this.productVariants = true;
          if (this.product && this.product.combinaciones && this.product.combinaciones.length && this.product.combinaciones.length > 1) {
            let arrPrice = [];
            this.product.combinaciones.find(products => {
              if (products.precio && products.estado == true) {
                arrPrice.push(products.precio);
              }
            });
            if (arrPrice) {
              let resultPrice = arrPrice.sort(function (prev, next) {
                return prev - next;
              });
              if (resultPrice[resultPrice.length - 1]) {
                this.minPrice = resultPrice[0];
                this.maxPrice = resultPrice[resultPrice.length - 1];
                if (this.minPrice === this.maxPrice) {
                  this.equalsPrice = true;
                } else {
                  this.equalsPrice = false;
                }
              }
            }
          }
        }
      }
    }
  },
  watch: {
    productsCarts(value) {
      this.getDataProduct();
    }
  }
});
// CONCATENATED MODULE: ./components/template5/_productcard/Ko-ProductCard-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_Ko_ProductCard_1vue_type_script_lang_js_ = (Ko_ProductCard_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/_productcard/Ko-ProductCard-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(112)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_Ko_ProductCard_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1617f7c9",
  "35f63356"
  
)

/* harmony default export */ var Ko_ProductCard_1 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_1617f7c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_1617f7c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_1617f7c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_1617f7c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_1617f7c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-card[data-v-1617f7c9]{align-items:center;background:#fff;border:1px solid hsla(0,0%,95%,.637);border-radius:5px;box-shadow:0 1px 1px #e2e2e2;box-sizing:border-box;display:flex;justify-content:center;width:100%}.container-card[data-v-1617f7c9]{align-items:flex-start;border-radius:5px;flex-direction:column}.container-card[data-v-1617f7c9],.wrapper-image[data-v-1617f7c9]{display:flex;overflow:hidden;position:relative;width:100%}.wrapper-image[data-v-1617f7c9]{align-items:center;justify-content:center;max-height:300px;min-height:250px}.product-image[data-v-1617f7c9]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.notproduct-image[data-v-1617f7c9]{height:294px;max-height:294px;width:300px}.product-image-soldOut[data-v-1617f7c9]{filter:grayscale(100%);-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.image_overlay[data-v-1617f7c9]{background:hsla(0,0%,41%,.165);height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}#product-card:hover .image_overlay[data-v-1617f7c9]{opacity:.7;transition:all .2s ease-out}.separador-stats[data-v-1617f7c9]{height:95px;width:100%}.stats-container[data-v-1617f7c9]{background:#fff;display:flex;flex-direction:column;height:120px;justify-content:space-between;left:0;padding:20px 12px 0;position:absolute;top:288px;transition:all .2s ease-out;width:100%}#product-card:hover .stats-container[data-v-1617f7c9]{top:241px;transition:all .2s ease-out}.card-info-1[data-v-1617f7c9]{background:#e71f77;color:#fff;top:-44px}.card-info-1[data-v-1617f7c9],.card-info-2[data-v-1617f7c9]{align-items:center;border-radius:var(--radius_btn);display:flex;font-size:12px;justify-content:center;padding:1px 4px;position:absolute;right:0;z-index:2}.card-info-2[data-v-1617f7c9]{background:#35dd8d;color:#000;font-weight:700;top:-22px}.content-name-product[data-v-1617f7c9]{align-items:flex-start;display:flex;justify-content:center;min-height:36px;text-align:center;width:100%}.card-title[data-v-1617f7c9]{color:#3f3f3f;font-size:15px;font-weight:500}.content-text-price[data-v-1617f7c9]{margin-top:5px;width:100%}.content-price[data-v-1617f7c9],.content-text-price[data-v-1617f7c9]{align-items:center;display:flex;justify-content:center}.content-price[data-v-1617f7c9]{flex-direction:row;max-height:29px;min-height:29px}.content-price-empty[data-v-1617f7c9]{margin-top:5px;max-height:29px;min-height:29px;width:100%}.text-price[data-v-1617f7c9]{color:#464646;font-size:20px;font-weight:500;line-height:1.4;text-align:center}.separator-price[data-v-1617f7c9]{color:#464646;margin-left:5px;margin-right:5px}.wrapper-btn-icon[data-v-1617f7c9]{flex-direction:row;width:100%}#add_cart[data-v-1617f7c9],.wrapper-btn-icon[data-v-1617f7c9]{align-items:center;display:flex;justify-content:center}#add_cart[data-v-1617f7c9]{background-color:var(--color_background_btn);border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);font-size:19px;font-weight:700;height:41px;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}#add_cart[data-v-1617f7c9]:hover{background-color:var(--btnhover);border:2px solid var(--btnhover);cursor:pointer}#product-card:hover #add_cart[data-v-1617f7c9]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.view_details[data-v-1617f7c9]{align-items:center;background-color:transparent;border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_background_btn);display:flex;font-size:19px;font-weight:700;height:41px;justify-content:center;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}.view_details[data-v-1617f7c9]:hover{border:2px solid var(--btnhover);color:var(--btnhover);cursor:pointer}#product-card:hover .view_details[data-v-1617f7c9]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.separador-btn[data-v-1617f7c9]{width:5px}.wrapper[data-v-1617f7c9]{display:inline;display:initial;width:100%}.wrapper-movil[data-v-1617f7c9]{display:none}.card-icon-cart-movil[data-v-1617f7c9]:hover{color:var(--btnhover)}.overlay-top[data-v-1617f7c9]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);background:#fff;border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#35dd8d;font-size:13px;height:29px;left:100%;overflow:hidden;padding:5px;position:absolute;right:0;top:43px;transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:0}#product-card:hover .overlay-top[data-v-1617f7c9]{left:75%;width:67px}.overlay-free[data-v-1617f7c9]{background-color:#35dd8d;border-radius:.25rem;color:#fff;height:35px;left:100%;overflow:hidden;position:absolute;right:0;text-align:center;top:0;transition:.5s ease;width:0}.txt-free[data-v-1617f7c9]{font-size:13px;line-height:12px;margin-top:5px}#product-card:hover .overlay-free[data-v-1617f7c9]{left:55%;transition-delay:.7s;width:125px}.overlay-polygon[data-v-1617f7c9]{fill:#35dd8d;background-color:transparent;height:5%;left:100%;overflow:hidden;position:absolute;right:0;top:35px;width:0}#product-card:hover .overlay-polygon[data-v-1617f7c9]{left:90%;transition-delay:.95s;width:5%}@media (max-width:1270px){.separador-stats[data-v-1617f7c9]{height:105px}}@media (max-width:1249px){.separador-stats[data-v-1617f7c9]{height:98px}}@media (max-width:768px){.wrapper[data-v-1617f7c9]{display:none}.wrapper-movil[data-v-1617f7c9]{display:inline;display:initial;width:100%}.content-card-items[data-v-1617f7c9]{align-items:center;display:flex;flex-direction:column;height:75px;justify-content:space-between;padding:5px 10px;position:relative;width:100%}.card-title[data-v-1617f7c9]{font-size:13px}.content-text-price[data-v-1617f7c9]{margin-top:0}.text-price[data-v-1617f7c9]{font-size:15px}.icon-cart[data-v-1617f7c9]{margin-left:20px}.card-info-1[data-v-1617f7c9]{font-size:10px;top:-43px}.card-info-2[data-v-1617f7c9]{font-size:10px;top:-22px}.notproduct-image-res[data-v-1617f7c9]{height:357px;max-height:357px;width:100%}}@media (max-width:450px){.notproduct-image-res[data-v-1617f7c9]{height:170px;max-height:170px}.container-card[data-v-1617f7c9]{max-width:200px;width:100%}.wrapper-image[data-v-1617f7c9]{min-height:170px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0bd03a33", content, true, context)
};

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1d5997fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1d5997fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1d5997fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1d5997fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1d5997fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-1d5997fa],.swiper-wrapper[data-v-1d5997fa]{width:100%}.btnPrev[data-v-1d5997fa]{left:0}.btnNext[data-v-1d5997fa],.btnPrev[data-v-1d5997fa]{background:#000;border-radius:25px;cursor:pointer;padding:0 22px;position:absolute;z-index:10}.btnNext[data-v-1d5997fa]{right:0}.btn-icon[data-v-1d5997fa]{align-items:center;bottom:.125em;color:#fff;display:flex;font-size:45px;justify-content:center;width:100%}.btn-icon[data-v-1d5997fa]:hover{color:grey}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productofavorito/productSlide.vue?vue&type=template&id=1d5997fa&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticStyle: {
      "position": "relative"
    }
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-1d5997fa>", "</div>", _vm._l(this.products, function (product, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\" data-v-1d5997fa>", "</div>", [_c('client-only', [_c('KoProductCard1', {
      attrs: {
        "product": product
      }
    })], 1)], 1);
  }), 0), _vm._ssrNode(" "), this.products.length > 1 ? _vm._ssrNode("<div class=\"prev btnPrev\" data-v-1d5997fa>", "</div>", [_c('FlechaLeft-icon', {
    staticClass: "btn-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" "), this.products.length > 1 ? _vm._ssrNode("<div class=\"next btnNext\" data-v-1d5997fa>", "</div>", [_c('FlechaRight-icon', {
    staticClass: "btn-icon"
  })], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productofavorito/productSlide.vue?vue&type=template&id=1d5997fa&scoped=true&

// EXTERNAL MODULE: ./components/template5/_productcard/Ko-ProductCard-1.vue + 4 modules
var Ko_ProductCard_1 = __webpack_require__(109);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productofavorito/productSlide.vue?vue&type=script&lang=js&
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


/* harmony default export */ var productSlidevue_type_script_lang_js_ = ({
  name: 'productSlide-productFavorito',
  components: {
    KoProductCard1: Ko_ProductCard_1["a" /* default */]
  },
  props: {
    products: {}
  },
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination'
        },
        setWrapperSize: true,
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 22,
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        breakpoints: {
          1250: {
            slidesPerView: 3,
            spaceBetween: 35
          },
          1060: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          990: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          790: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    changeSlide() {
      this.swiper.slidePrev(700, false);
    }
  }
});
// CONCATENATED MODULE: ./components/template5/_productofavorito/productSlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productofavorito_productSlidevue_type_script_lang_js_ = (productSlidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/_productofavorito/productSlide.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productofavorito_productSlidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1d5997fa",
  "087892e0"
  
)

/* harmony default export */ var productSlide = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(769);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("57e69729", content, true, context)
};

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(771);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("b76c1800", content, true, context)
};

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(773);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6f2b113a", content, true, context)
};

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(775);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("65891076", content, true, context)
};

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(777);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("17cabcea", content, true, context)
};

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(779);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c227a9a2", content, true, context)
};

/***/ }),

/***/ 63:
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
  "f9b99f58"
  
)

/* harmony default export */ var elemenTiptap = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_3b7a9f8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(416);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_3b7a9f8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_3b7a9f8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_3b7a9f8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_3b7a9f8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-slide[data-v-3b7a9f8e]{align-items:center;box-sizing:border-box;display:flex;justify-content:center;max-width:375px;position:relative}.photo[data-v-3b7a9f8e],.swiper-slide[data-v-3b7a9f8e]{overflow:hidden;width:100%}.photo[data-v-3b7a9f8e]{-o-object-fit:cover;object-fit:cover}.photos .responsive .swiper-pagination-bullet[data-v-3b7a9f8e]{background-color:hsla(0,0%,100%,.5)}.photos .responsive .swiper-pagination-bullet-active[data-v-3b7a9f8e]{background-color:#fff}.youtube[data-v-3b7a9f8e]{grid-gap:5px;display:grid;justify-items:start;max-width:400px;width:99%}.youtube__action_back[data-v-3b7a9f8e]{background-color:var(--color_background_btn);border-style:none;color:var(--color_text_btn);outline:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_eedf2ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_eedf2ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_eedf2ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_eedf2ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectGroup_vue_vue_type_style_index_0_id_eedf2ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "select[data-v-eedf2ea6]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;background-image:none;border:0!important;box-shadow:none;color:rgba(21,20,57,.541);font-weight:600;outline:0}select[data-v-eedf2ea6]::-ms-expand{display:none}.select[data-v-eedf2ea6]{background:transparent;border:2px solid hsla(240,5%,52%,.342);border-radius:var(--radius_btn);display:flex;height:40px;overflow:hidden;position:relative;width:15em}select[data-v-eedf2ea6]{cursor:pointer;flex:1;font-size:1em;padding:0 .5em 0 1em}.select[data-v-eedf2ea6]:after{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"indigo\"><path d=\"M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z\"/></svg>');cursor:pointer;padding:.4em 1em;pointer-events:none;position:absolute;right:0;top:0;transition:all .25s ease}.select[data-v-eedf2ea6]:hover:after{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"%238a2be2\"><path d=\"M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z\"/></svg>')}option[data-v-eedf2ea6]{color:rgba(21,20,57,.541)}option[data-v-eedf2ea6]:disabled{background:#fff;color:#000;font-weight:700}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_vue_vue_type_style_index_0_id_28c68c33_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(418);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_vue_vue_type_style_index_0_id_28c68c33_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_vue_vue_type_style_index_0_id_28c68c33_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_vue_vue_type_style_index_0_id_28c68c33_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_descriptionProduct_vue_vue_type_style_index_0_id_28c68c33_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".description[data-v-28c68c33]{border-bottom:1px solid hsla(240,5%,52%,.342);display:flex;width:100%}.description div[data-v-28c68c33]{color:rgba(21,20,57,.541);line-height:1.5}.left[data-v-28c68c33]{flex:2;flex-direction:column}.left[data-v-28c68c33],.left-empty[data-v-28c68c33]{display:flex;padding-bottom:10px;width:100%}.left-empty[data-v-28c68c33]{flex:2}.right[data-v-28c68c33]{border-left:1px solid hsla(240,5%,52%,.342);display:flex;flex:1;flex-direction:column;padding-bottom:10px;width:100%}.title-section[data-v-28c68c33]{align-self:flex-start;color:rgba(21,20,57,.541);font-size:16px;text-transform:uppercase}.right img[data-v-28c68c33]{margin-top:15px;max-width:320px;width:100%}.section[data-v-28c68c33]{box-sizing:border-box;margin-left:25px;margin-top:20px}.text-desc[data-v-28c68c33]{align-self:flex-start;color:rgba(21,20,57,.541);font-size:15px;margin-top:20px;text-transform:uppercase}.wrapper-comments[data-v-28c68c33]{border-top:1px solid hsla(240,5%,52%,.342);width:100%}h3[data-v-28c68c33]{align-self:flex-start;font-size:15px;text-transform:uppercase}h3[data-v-28c68c33],h4[data-v-28c68c33]{color:rgba(21,20,57,.541)}h4[data-v-28c68c33]{font-weight:700;margin-bottom:5px;margin-top:15px}li p[data-v-28c68c33]{font-size:14px;line-height:1.4}.icon[data-v-28c68c33]{align-self:flex-start;margin-bottom:10px;vertical-align:middle;width:50px}.content[data-v-28c68c33]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start}.payments[data-v-28c68c33]{margin-bottom:20px}.line[data-v-28c68c33]{border-top:1px solid hsla(240,5%,52%,.342);width:100%}.deliverys[data-v-28c68c33]{margin-bottom:20px;margin-top:20px}.stage[data-v-28c68c33]{border-left:0;display:flex;flex:1}.logo-pasarela[data-v-28c68c33]{width:160px!important}.logo-pasarela-daviplata[data-v-28c68c33]{width:120px!important}.logo-pasarela-efecty[data-v-28c68c33]{width:100px!important}.logo-pasarela-wompi[data-v-28c68c33]{width:220px!important}.logo-pasarela-payu[data-v-28c68c33]{width:300px!important}.logo-pasarela-payco[data-v-28c68c33]{width:280px!important}.capitalize[data-v-28c68c33]{font-weight:600!important}.description-method[data-v-28c68c33]{font-size:14px;line-height:1.4}.price[data-v-28c68c33]{font-size:14px;margin-top:10px}.medios-mercadopago[data-v-28c68c33]{border-radius:4px;display:block;width:100%}.line-comments[data-v-28c68c33],.wrapper-comments-responsive[data-v-28c68c33]{display:none}.cursor_point[data-v-28c68c33]{cursor:pointer}.editor[data-v-28c68c33]{width:100%}.editor[data-v-28c68c33] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-28c68c33] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-28c68c33] .el-tiptap-editor__content h1{font-family:var(--font-style-1);font-size:2em}.editor[data-v-28c68c33] .el-tiptap-editor__content h2{font-family:var(--font-style-1);font-size:1.5em}.editor[data-v-28c68c33] .el-tiptap-editor__content h3{font-family:var(--font-style-1);font-size:1.17em}.editor[data-v-28c68c33] .el-tiptap-editor__content h4{font-family:var(--font-style-1);font-size:1.12em}.editor[data-v-28c68c33] .el-tiptap-editor__content h5{font-family:var(--font-style-1);font-size:.83em}.editor[data-v-28c68c33] .el-tiptap-editor__content blockquote,.editor[data-v-28c68c33] .el-tiptap-editor__content code,.editor[data-v-28c68c33] .el-tiptap-editor__content em,.editor[data-v-28c68c33] .el-tiptap-editor__content li,.editor[data-v-28c68c33] .el-tiptap-editor__content ol,.editor[data-v-28c68c33] .el-tiptap-editor__content p,.editor[data-v-28c68c33] .el-tiptap-editor__content pre,.editor[data-v-28c68c33] .el-tiptap-editor__content s,.editor[data-v-28c68c33] .el-tiptap-editor__content span,.editor[data-v-28c68c33] .el-tiptap-editor__content strong,.editor[data-v-28c68c33] .el-tiptap-editor__content ul{font-family:var(--font-style-1)}.editor[data-v-28c68c33] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-28c68c33] .el-popper.el-tiptap-image-popper{display:none}@media (max-width:810px){.left[data-v-28c68c33]{margin-right:15px}}@media (max-width:768px){.description[data-v-28c68c33]{display:flex;flex-direction:column;margin-bottom:20px;margin-right:0;width:100%}.description[data-v-28c68c33],.section[data-v-28c68c33]{margin-left:0}.left[data-v-28c68c33]{flex:1;margin-right:0;padding-bottom:0}.left-empty[data-v-28c68c33]{display:flex;flex:0;padding-bottom:10px;width:100%}.right[data-v-28c68c33]{border-left:0}.wrapper-comments-responsive[data-v-28c68c33]{display:inline;display:initial}.wrapper-comments[data-v-28c68c33]{display:none}.line-comments[data-v-28c68c33]{border-top:1px solid hsla(240,5%,52%,.342);display:inline;display:initial;width:100%}}@media (max-width:725px){.editor[data-v-28c68c33] .el-tiptap-editor>.el-tiptap-editor__content{padding:0 15px}.description[data-v-28c68c33]{margin-bottom:0}.left[data-v-28c68c33]{flex:1;padding-bottom:10px}.right[data-v-28c68c33]{border-left:0}.payments[data-v-28c68c33],.text-desc[data-v-28c68c33]{padding-left:15px;padding-right:15px}.payments[data-v-28c68c33]{border-top:1px solid hsla(240,5%,52%,.342);margin-bottom:10px}.section[data-v-28c68c33]{margin-left:0;margin-top:0;padding-top:10px}.deliverys[data-v-28c68c33]{margin-bottom:10px;margin-top:10px;padding-left:15px;padding-right:15px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_2cf310cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_2cf310cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_2cf310cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_2cf310cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_suggestionsProducto_vue_vue_type_style_index_0_id_2cf310cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-ProductFavoritos[data-v-2cf310cc]{align-items:center;background:#efefef;box-sizing:border-box;padding-top:30px}.swiper-container[data-v-2cf310cc],.wrapper-ProductFavoritos[data-v-2cf310cc]{display:flex;flex-direction:column;justify-content:center;width:100%}.swiper-container[data-v-2cf310cc]{align-items:flex-start;max-width:1300px;padding:10px}.content-title-ProductFavoritos[data-v-2cf310cc]{align-items:center;display:flex;justify-content:flex-start;max-width:1300px;padding:10px 20px;width:100%}.title-ProductFavoritos[data-v-2cf310cc]{color:rgba(21,20,57,.541);cursor:pointer;font-size:18px;font-weight:700;line-height:1.4}@media (max-width:770px){.swiper-container[data-v-2cf310cc]{padding:20px 8px}.content-title-ProductFavoritos[data-v-2cf310cc]{padding:10px}}@media (max-width:380px){.swiper-container[data-v-2cf310cc]{padding:20px 5px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_45ffdea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_45ffdea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_45ffdea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_45ffdea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_zoomImg_vue_vue_type_style_index_0_id_45ffdea8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "figure.zoom[data-v-45ffdea8]{align-items:center;background-position:50% 50%;background-repeat:no-repeat;cursor:zoom-in;display:flex;justify-content:center;margin-bottom:10px;max-height:100%;max-width:100%;overflow:hidden;position:relative}figure.zoom img[data-v-45ffdea8]{background-color:#fff;max-height:576px;max-width:100%;transition:opacity .3s}.photo_main[data-v-45ffdea8]{-o-object-fit:contain;object-fit:contain}figure.zoom img[data-v-45ffdea8]:hover{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_659f50f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(421);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_659f50f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_659f50f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_659f50f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_1_vue_vue_type_style_index_0_id_659f50f3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-productDetail[data-v-659f50f3]{align-items:center;background:#efefef;display:flex;justify-content:center;width:100%}.container-productDetail-loading[data-v-659f50f3]{background:#efefef;height:calc(100vh - 420px)}.container-productDetail[data-v-659f50f3],.container-productDetail-loading[data-v-659f50f3]{align-items:center;display:flex;flex-direction:column;justify-content:space-between;max-width:1300px;padding:50px 30px 30px;width:100%}.container-productDetail[data-v-659f50f3]{position:relative}.section[data-v-659f50f3]{box-shadow:10px 14px 28px #ededed,-10px -14px 28px #f1f1f1;display:flex;width:100%}.section-suggesProduct[data-v-659f50f3]{width:100%;z-index:1!important}.wrapper-left[data-v-659f50f3]{display:flex;flex:2;flex-direction:row;padding-bottom:10px;width:100%}.photos_responsive[data-v-659f50f3]{display:none}.photos[data-v-659f50f3]{display:flex;margin-right:30px;max-height:550px;position:relative}.swiper-wrapper[data-v-659f50f3]{position:relative;width:100%}.swiper-prev[data-v-659f50f3]{top:0}.swiper-next[data-v-659f50f3],.swiper-prev[data-v-659f50f3]{left:20px;position:absolute;z-index:2}.swiper-next[data-v-659f50f3]{bottom:0;font-size:25px}.icon-swiper[data-v-659f50f3]{color:var(--color_icon);cursor:pointer;font-size:60px}.icon-swiper[data-v-659f50f3]:hover{color:var(--btnhover)}.photos_selected[data-v-659f50f3]{display:flex;flex-direction:column;justify-items:stretch;max-height:100px;width:100%}.img-list[data-v-659f50f3]{border-radius:6px;cursor:pointer;-o-object-fit:contain;object-fit:contain;vertical-align:top}.img-list[data-v-659f50f3],.video[data-v-659f50f3]{height:100px;margin-bottom:10px;width:100px}.video[data-v-659f50f3]{border-radius:5px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.wrapper-photo_main[data-v-659f50f3]{margin-right:25px;min-height:550px;position:relative}.photo_main[data-v-659f50f3],.wrapper-photo_main[data-v-659f50f3]{height:550px;max-width:550px;width:100%}.photo_main[data-v-659f50f3]{border-radius:10px;max-height:550px;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center}.wrapper-right[data-v-659f50f3]{border-left:1px solid hsla(240,5%,52%,.342);display:flex;flex:1;flex-direction:column;padding-bottom:10px;width:100%}.content-right[data-v-659f50f3]{margin-left:20px;position:sticky;top:88px}i.close[data-v-659f50f3]{align-self:flex-end;color:#000;cursor:pointer}.text-name[data-v-659f50f3]{color:#000;font-size:25px;font-weight:700;line-height:24px}.text-marca[data-v-659f50f3]{color:rgba(21,20,57,.541);font-size:16px;font-stretch:semi-condensed;font-style:normal}.text-promocion[data-v-659f50f3]{color:rgba(55,4,4,.61);font-size:14px;font-weight:700;margin-top:10px;-webkit-text-decoration:line-through;text-decoration:line-through}.wrapper-price_space[data-v-659f50f3]{margin-top:10px}.wrapper-price[data-v-659f50f3]{align-items:flex-start;display:flex;flex-direction:row;justify-content:left;margin-bottom:12px}.wrapper-price>p[data-v-659f50f3]:nth-child(2){margin-left:5px}.text-precio[data-v-659f50f3]{color:#000;font-size:30px;font-weight:700;line-height:24px}.card-descuento[data-v-659f50f3]{border-radius:3px;color:#00a650;font-size:12px}.text-unidades[data-v-659f50f3],.text-variant[data-v-659f50f3]{color:rgba(21,20,57,.541);font-size:14px;font-weight:700}.text-unidades[data-v-659f50f3]{margin-top:5px}.text-garantia[data-v-659f50f3]{color:#000;font-size:14px;font-weight:700;margin-left:5px;margin-top:5px}.content_buy_action[data-v-659f50f3]{display:flex;flex-direction:row;margin-bottom:10px}.content_card-info[data-v-659f50f3]{display:inline;display:initial}.card-info-1[data-v-659f50f3]{background:#e71f77;color:#fff}.card-info-1[data-v-659f50f3],.card-info-2[data-v-659f50f3]{align-items:center;border-radius:5px;display:flex;font-size:12px;font-weight:700;justify-content:center;max-height:24px;min-height:24px;padding:1px 4px}.card-info-2[data-v-659f50f3]{background:#35dd8d;color:#000;margin-right:10px}.transporte-icon[data-v-659f50f3]{fill:#000;height:22px;margin-right:5px;width:22px}.item-info-product[data-v-659f50f3]{margin-top:10px}.content-button[data-v-659f50f3],.content-shared[data-v-659f50f3]{display:flex;flex-direction:row;margin-top:15px}.btn-facebook[data-v-659f50f3]{background-color:transparent;border:0;border-radius:5px;color:#1877f2;cursor:pointer;display:flex;justify-content:center;margin-right:20px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-facebook[data-v-659f50f3]:hover{color:#000}.btn-whatsapp[data-v-659f50f3]{background-color:transparent;border:0;border-radius:5px;color:#25d366;cursor:pointer;display:flex;justify-content:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-whatsapp[data-v-659f50f3]:hover{color:#000}.wp-icon[data-v-659f50f3]{bottom:2px;font-size:27px}.btn[data-v-659f50f3]{background-color:#000;border:2px solid #000;border-radius:var(--radius_btn);color:#fff;cursor:pointer;font-size:16px;font-weight:700;padding:6px 14px;transition:all .2s ease-in;width:238px}.btn[data-v-659f50f3]:hover{background-color:var(--btnhover);border:2px solid var(--btnhover);color:#fff}.btn-disabled[data-v-659f50f3]{background-color:gray;border:2px solid gray;border-radius:var(--radius_btn);color:#fff;font-size:16px;font-weight:700;padding:6px 14px;width:238px}.quantity[data-v-659f50f3]{box-sizing:border-box;display:flex;flex-direction:row;margin-top:10px;max-width:240px;position:relative}.text-quantity[data-v-659f50f3]{align-self:center;color:rgba(21,20,57,.541);font-size:14px;font-weight:700;margin-right:15px}.quantity_remove[data-v-659f50f3]{border:2px solid hsla(240,5%,52%,.342);border-bottom-left-radius:var(--radius_btn);border-right-style:none;border-top-left-radius:var(--radius_btn)}.quantity_remove[data-v-659f50f3],.quantity_value[data-v-659f50f3]{background:transparent;height:41px;width:55px}.quantity_value[data-v-659f50f3]{align-items:center;border-color:hsla(240,5%,52%,.342);border-style:solid none;border-width:2px;color:#000;display:flex;font-size:1em;justify-content:center;padding-left:10px;padding-right:10px}.quantity_add[data-v-659f50f3]{background:transparent;border:2px solid hsla(240,5%,52%,.342);border-bottom-right-radius:var(--radius_btn);border-left-style:none;border-top-right-radius:var(--radius_btn);height:41px;width:55px}.icon[data-v-659f50f3]{color:hsla(240,5%,52%,.342);font-size:16px;transition:all .2s ease-in}.icon[data-v-659f50f3]:hover{color:#000}.features[data-v-659f50f3]{border-top:1px solid hsla(240,5%,52%,.342);display:flex;width:100%}.responsive-purchase[data-v-659f50f3]{display:none}.container-alerta[data-v-659f50f3]{align-items:center;background-color:#fae84b;border:1px solid #e6d542;border-radius:6px;bottom:-32px;color:#000;display:flex;font-size:14px;justify-content:center;left:95px;position:absolute;width:130px}.alerta[data-v-659f50f3]{padding:5px;text-align:center}@media (max-width:1100px){.photos[data-v-659f50f3]{margin-right:20px;max-height:450px}.wrapper-photo_main[data-v-659f50f3]{height:450px;max-width:450px;min-height:450px}.photo_main[data-v-659f50f3]{height:450px;max-height:450px;max-width:450px}}@media (max-width:810px){.photos[data-v-659f50f3]{margin-right:10px}.wrapper-left[data-v-659f50f3]{margin-right:15px}}@media (max-width:768px){.wrapper-left[data-v-659f50f3]{flex:1}.photos[data-v-659f50f3]{margin-right:10px}.photos[data-v-659f50f3],.wrapper-photo_main[data-v-659f50f3]{display:none}.photos_responsive[data-v-659f50f3]{box-sizing:border-box;display:flex;height:375px;margin-bottom:10px;max-width:400px;overflow:hidden;width:100%}}@media (max-width:725px){.container-productDetail[data-v-659f50f3]{align-items:center;justify-content:center;padding:0}.section[data-v-659f50f3]{flex-direction:column}.wrapper-left[data-v-659f50f3]{align-items:center;justify-content:center}.wrapper-right[data-v-659f50f3]{border-left:0;padding-bottom:2px}.product[data-v-659f50f3]{align-items:center;display:flex;flex-direction:column;margin-bottom:70px;min-height:97vh;position:relative;width:100%}i.close[data-v-659f50f3]{position:absolute;right:10px;top:10px}.content-button[data-v-659f50f3],.content_card-info[data-v-659f50f3],.quantity[data-v-659f50f3]{display:none}.responsive-purchase[data-v-659f50f3]{background:var(--background_color_1);bottom:0;box-shadow:0 0 30px 50px rgba(96,125,139,.096);display:inline;display:initial;position:fixed;right:0;width:100%;z-index:2}.ko-input[data-v-659f50f3]{align-items:center;display:flex;justify-content:space-between;padding:8px 5px;width:100%}.quantity-resposive[data-v-659f50f3]{display:flex;flex-direction:row}.text-quantity[data-v-659f50f3]{align-self:center;color:rgba(21,20,57,.541);font-size:14px;font-weight:700;margin-right:5px}.quantity_remove[data-v-659f50f3]{border:1px solid hsla(240,5%,52%,.342);border-bottom-left-radius:var(--radius_btn);border-right-style:none;border-top-left-radius:var(--radius_btn);width:3em}.quantity_remove[data-v-659f50f3],.quantity_value[data-v-659f50f3]{background:transparent;height:38px}.quantity_value[data-v-659f50f3]{align-items:center;border-color:hsla(240,5%,52%,.342);border-style:solid none;border-width:1px;color:#000;display:flex;font-size:1em;justify-content:center;padding-left:10px;padding-right:10px;width:2.5em}.quantity_add[data-v-659f50f3]{background:transparent;border:1px solid hsla(240,5%,52%,.342);border-bottom-right-radius:var(--radius_btn);border-left-style:none;border-top-right-radius:var(--radius_btn);height:38px;width:3em}.icon[data-v-659f50f3]{font-size:16px}.content_buy_action-responsive[data-v-659f50f3]{display:flex;width:100%}.card-info-1-res[data-v-659f50f3]{align-items:center;background:gray;border:1px solid gray;color:#fff;display:flex;justify-content:center}.btn-responsive[data-v-659f50f3],.card-info-1-res[data-v-659f50f3]{border-radius:var(--radius_btn);font-size:16px;padding:8px 10px;width:100%}.btn-responsive[data-v-659f50f3]{background-color:var(--color_background_btn);border:1px solid var(--color_background_btn);color:var(--color_text_btn)}.card-icon-cart[data-v-659f50f3]{color:var(--color_text_btn);cursor:pointer;font-size:20px;margin-right:4px}.container-alert[data-v-659f50f3]{align-items:center;background-color:#fae84b;border:1px solid #e6d542;border-radius:6px;color:#000;display:flex;font-size:14px;justify-content:center;left:45px;position:absolute;top:-55px;width:80px}.alert[data-v-659f50f3]{padding:5px;text-align:center}.features[data-v-659f50f3]{border-top:none}}@media (max-width:600px){.container-productDetail[data-v-659f50f3]{padding:0}.wrapper-left[data-v-659f50f3]{padding-bottom:0}.wrapper-right[data-v-659f50f3]{margin-bottom:15px}.content-right[data-v-659f50f3]{margin-left:15px;margin-right:15px}.text-name[data-v-659f50f3]{font-size:20px;font-weight:500}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("121dba68", content, true, context)
};

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko-ProductDetail-1.vue?vue&type=template&id=659f50f3&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productDetail",
    style: _vm.settingByTemplate
  }, [_vm.loading ? _vm._ssrNode("<div class=\"container-productDetail-loading\" data-v-659f50f3>", "</div>") : _vm._ssrNode("<div class=\"container-productDetail\"" + _vm._ssrStyle(null, {
    '--font-style': this.settingByTemplate && this.settingByTemplate.tipo_letra ? this.settingByTemplate.tipo_letra : 'Roboto'
  }, null) + " data-v-659f50f3>", "</div>", [_vm._ssrNode("<div class=\"section\" data-v-659f50f3>", "</div>", [_vm._ssrNode("<div class=\"wrapper-left\" data-v-659f50f3>", "</div>", [[_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "photos"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-659f50f3><div class=\"swiper-slide photos_selected\" data-v-659f50f3><img loading=\"lazy\"" + _vm._ssrAttr("src", _vm.idCloudinary(_vm.data.detalle.foto_cloudinary, 150, 150)) + " alt=\"Product Img\" class=\"img-list\" data-v-659f50f3></div> " + _vm._ssrList(_vm.data.fotos, function (foto, itemsfoto) {
    return "<div class=\"swiper-slide photos_selected\" data-v-659f50f3><img loading=\"lazy\"" + _vm._ssrAttr("src", _vm.idCloudinary(foto.foto_cloudinary, 150, 150)) + " alt=\"Product Img\" class=\"img-list\" data-v-659f50f3></div>";
  }) + " <div class=\"swiper-slide photos_selected\" data-v-659f50f3>" + (_vm.idYoutube ? "<img loading=\"lazy\"" + _vm._ssrAttr("src", `https://img.youtube.com/vi/${_vm.idYoutube}/0.jpg`) + " alt=\"Product Img\" class=\"video\"" + _vm._ssrStyle(null, null, {
    display: _vm.idYoutube ? '' : 'none'
  }) + " data-v-659f50f3>" : "<!---->") + "</div></div> "), _vm.data.fotos.length > 3 ? _vm._ssrNode("<div class=\"swiper-prev\" data-v-659f50f3>", "</div>", [_c('FlechaUp-icon', {
    staticClass: "icon-swiper"
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.data.fotos.length > 3 ? _vm._ssrNode("<div class=\"swiper-next\" data-v-659f50f3>", "</div>", [_c('Flechadown-icon', {
    staticClass: "icon-swiper"
  })], 1) : _vm._e()], 2)], _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-photo_main\" data-v-659f50f3>", "</div>", [this.activeZoom ? _vm._ssrNode("<div class=\"photo_main\"" + _vm._ssrStyle(null, null, {
    display: !_vm.existYoutube ? '' : 'none'
  }) + " data-v-659f50f3>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryQuality(_vm.selectPhotoUrl, 850, 850),
      expression: "idCloudinaryQuality(selectPhotoUrl, 850, 850)"
    }],
    staticClass: "photo_main",
    attrs: {
      "loading": "lazy",
      "alt": "Product Zoom"
    }
  }, [])]) : _vm._e(), _vm._ssrNode(" "), !this.activeZoom ? _vm._ssrNode("<div class=\"photo_main\"" + _vm._ssrStyle(null, null, {
    display: !_vm.existYoutube ? '' : 'none'
  }) + " data-v-659f50f3>", "</div>", [_c('zoom', {
    attrs: {
      "photo": _vm.selectPhotoUrl
    }
  })], 1) : _vm._e(), _vm._ssrNode(" <iframe" + _vm._ssrAttr("src", `https://www.youtube.com/embed/${_vm.idYoutube}?rel=0&controls=0&showinfo=0`) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\" class=\"photo_main\"" + _vm._ssrStyle(null, null, {
    display: _vm.existYoutube ? '' : 'none'
  }) + " data-v-659f50f3></iframe>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"photos_responsive\" data-v-659f50f3>", "</div>", [_c('productSlide', {
    attrs: {
      "photos": _vm.data.fotos,
      "photo": _vm.data.detalle.foto_cloudinary,
      "idYoutube": _vm.idYoutube
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-right\" data-v-659f50f3>", "</div>", [_vm._ssrNode("<div class=\"content-right\" data-v-659f50f3>", "</div>", [_vm._ssrNode("<p class=\"text-name\" data-v-659f50f3>" + _vm._ssrEscape(_vm._s(_vm.data.detalle.nombre)) + "</p> <p class=\"text-marca\" data-v-659f50f3><strong data-v-659f50f3>" + _vm._ssrEscape(_vm._s(_vm.data.info.marca)) + "</strong></p> <p class=\"text-promocion\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-659f50f3>" + _vm._ssrEscape("\n            " + _vm._s(_vm._f("currency")(_vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor ? Math.trunc(_vm.salesData.precio / (1 - _vm.data.info.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n          ") + "</p> <div" + _vm._ssrClass("wrapper-price", _vm.data.info.tag_promocion == 1 ? '' : 'wrapper-price_space') + " data-v-659f50f3><p class=\"text-precio\"" + _vm._ssrStyle(null, null, {
    display: _vm.salesData.precio ? '' : 'none'
  }) + " data-v-659f50f3>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.salesData.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p> <p class=\"card-descuento\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-659f50f3>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.info.promocion_valor) + "% OFF\n            ") + "</p></div> <div class=\"content_buy_action\" data-v-659f50f3>" + (_vm.envio.titulo == 'Envío gratis' ? "<div class=\"content_buy_action\" data-v-659f50f3><p class=\"card-info-2\" data-v-659f50f3><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"25px\" height=\"25px\" viewBox=\"0 0 24 24\" fill=\"#333\" class=\"transporte-icon\" data-v-659f50f3><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-659f50f3></path></svg>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('home_cardGratis')) + "\n              ") + "</p></div>" : "<!---->") + " <div class=\"content_card-info\" data-v-659f50f3>" + (_vm.spent ? "<p class=\"card-info-1\" data-v-659f50f3>" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('home_cardAgotado')) + "\n              ") + "</p>" : "<!---->") + "</div></div> " + (_vm.data.info.descripcion_corta ? "<div style=\"margin-bottom: 5px\" data-v-659f50f3><p class=\"text-marca\" data-v-659f50f3><strong data-v-659f50f3>" + _vm._ssrEscape(_vm._s(_vm.data.info.descripcion_corta)) + "</strong></p></div>" : "<!---->") + " "), this.data.detalle.con_variante > 0 ? _vm._ssrNode("<div data-v-659f50f3>", "</div>", _vm._l(_vm.data.variantes, function (variant, index) {
    return _vm._ssrNode("<div data-v-659f50f3>", "</div>", [_vm._ssrNode("<label lang=\"es\" for=\"variant name\" class=\"text-variant\" data-v-659f50f3>" + _vm._ssrEscape("\n                " + _vm._s(variant.nombre) + ":\n              ") + "</label> "), _c('selectGroup', {
      attrs: {
        "index": index,
        "variantes": _vm.data.variantes
      }
    }, _vm._l(variant.valores, function (item) {
      return _c('option', {
        key: item.option,
        domProps: {
          "value": item.option
        }
      }, [_vm._v("\n                  " + _vm._s(item.option) + "\n                ")]);
    }), 0)], 2);
  }), 0) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass(null, {
    disabled: !_vm.salesData.estado
  }) + " data-v-659f50f3>", "</div>", [_vm._ssrNode("<div data-v-659f50f3>", "</div>", [_vm._ssrNode("<div class=\"quantity\" data-v-659f50f3>", "</div>", [_vm._ssrNode("<p class=\"text-quantity\" data-v-659f50f3>" + _vm._ssrEscape(_vm._s(_vm.$t('cart_cantidad'))) + "</p> "), _vm._ssrNode("<button class=\"quantity_remove\" data-v-659f50f3>", "</button>", [_c('menos-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" <p class=\"quantity_value\" data-v-659f50f3>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p> "), _vm._ssrNode("<button class=\"quantity_add\" data-v-659f50f3>", "</button>", [_c('mas-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" " + (this.maxQuantityValue == this.quantityValue ? "<div class=\"container-alerta\" data-v-659f50f3><span class=\"alerta\" data-v-659f50f3>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('cart_ultimaUnidad'))) + "</span></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"item-info-product\" data-v-659f50f3>", "</div>", [_vm._ssrNode((_vm.data.info.garantia ? "<div class=\"content_buy_action\" data-v-659f50f3><p class=\"text-unidades\" data-v-659f50f3>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('productdetail_garantia')) + "\n                  ") + "</p> <span class=\"text-garantia\" data-v-659f50f3>" + _vm._ssrEscape(_vm._s(_vm.data.info.garantia)) + "</span></div>" : "<!---->") + " <div class=\"content-button\" data-v-659f50f3>" + (!_vm.spent && this.salesData.estado && (_vm.data.info.tipo_servicio == null || _vm.data.info.tipo_servicio == '0') ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-659f50f3>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('productdetail_btnAgregar')) + "\n                  ") + "</button>" : !this.salesData.estado ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-659f50f3>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n                  ") + "</button>" : !_vm.spent && _vm.data.info.tipo_servicio == '1' ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-659f50f3>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n                  ") + "</button>" : _vm.spent ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-659f50f3>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                  ") + "</button>" : "<!---->") + "</div> " + (_vm.userDropshipping.userName ? "<div class=\"w-full flex flex-row items-center my-10\" data-v-659f50f3><p class=\"text-variant\" style=\"margin-right: 10px\" data-v-659f50f3>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('productdetail_dropshipping')) + "\n                  ") + "</p> <p class=\"text-marca\" data-v-659f50f3>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.userDropshipping.userName) + "\n                  ") + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"content-shared\" data-v-659f50f3>", "</div>", [_vm._ssrNode("<p class=\"text-unidades\" style=\"margin-right: 10px\" data-v-659f50f3>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('productdetail_compartir')) + "\n                  ") + "</p> "), _vm._ssrNode("<a" + _vm._ssrAttr("href", this.sharingFacebook) + " target=\"_blank\" rel=\"noreferrer noopener\" class=\"btn-facebook\" data-v-659f50f3>", "</a>", [_c('facebook-icon', {
    staticClass: "wp-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"btn-whatsapp\" data-v-659f50f3>", "</button>", [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  })], 1)], 2)], 2)], 2)])], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section\" data-v-659f50f3>", "</div>", [_vm._ssrNode("<div class=\"features\" data-v-659f50f3>", "</div>", [_c('ko-description', {
    attrs: {
      "dataStore": _vm.dataStore,
      "data": _vm.data,
      "envio": _vm.envio
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-suggesProduct\" data-v-659f50f3>", "</div>", [_c('koSuggesProduct', {
    attrs: {
      "category": this.category.slice(0, 8)
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"responsive-purchase\" data-v-659f50f3>", "</div>", [_vm._ssrNode("<div class=\"ko-input\" data-v-659f50f3>", "</div>", [_vm._ssrNode("<div class=\"quantity-resposive\" data-v-659f50f3>", "</div>", [_vm._ssrNode("<button class=\"quantity_remove\" data-v-659f50f3>", "</button>", [_c('menos-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" <p class=\"quantity_value\" data-v-659f50f3>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p> "), _vm._ssrNode("<button class=\"quantity_add\" data-v-659f50f3>", "</button>", [_c('mas-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "slide-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.quantityValue == _vm.maxQuantityValue,
      expression: "quantityValue == maxQuantityValue"
    }],
    staticClass: "container-alert"
  }, [_c('span', {
    staticClass: "alert"
  }, [_vm._v(_vm._s(_vm.$t('cart_ultimaUnidad')))])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div style=\"width: 100%; margin-left: 10px\" data-v-659f50f3>", "</div>", [!_vm.spent && this.salesData.estado && (_vm.data.info.tipo_servicio == null || _vm.data.info.tipo_servicio == '0') ? _vm._ssrNode("<button id=\"AddToCartTag\" class=\"btn-responsive\" data-v-659f50f3>", "</button>", [_c('cartArrowDown', {
    staticClass: "card-icon-cart"
  }), _vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.$t('productdetail_btnAgregar')) + "\n          "))], 2) : _vm._e(), _vm._ssrNode(" " + (!this.salesData.estado ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-659f50f3>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n          ") + "</button>" : !_vm.spent && _vm.data.info.tipo_servicio == '1' ? "<button class=\"btn-responsive\" data-v-659f50f3>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n          ") + "</button>" : _vm.spent ? "<div class=\"content_buy_action-responsive\" data-v-659f50f3><p class=\"card-info-1-res\" data-v-659f50f3>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p></div>" : "<!---->"))], 2)], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/Ko-ProductDetail-1.vue?vue&type=template&id=659f50f3&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/productSlide.vue?vue&type=template&id=3b7a9f8e&scoped=true&
var productSlidevue_type_template_id_3b7a9f8e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-3b7a9f8e><div class=\"swiper-slide wrapper-image\" data-v-3b7a9f8e><img loading=\"lazy\"" + _vm._ssrAttr("src", _vm.idCloudinary(_vm.photo, 550, 550)) + " alt=\"Product img\" class=\"photo\" data-v-3b7a9f8e></div> " + _vm._ssrList(_vm.photos, function (photo) {
    return "<div class=\"swiper-slide\" data-v-3b7a9f8e><img loading=\"lazy\"" + _vm._ssrAttr("src", _vm.idCloudinary(photo.foto_cloudinary, 550, 550)) + " alt=\"Product img\" class=\"photo\" data-v-3b7a9f8e></div>";
  }) + " " + (_vm.idYoutube && _vm.idYoutube !== '' ? "<div class=\"swiper-slide\" data-v-3b7a9f8e><div class=\"youtube\" data-v-3b7a9f8e><button class=\"youtube__action_back\" data-v-3b7a9f8e><i class=\"material-icons\" data-v-3b7a9f8e></i></button> <iframe height=\"375\"" + _vm._ssrAttr("src", `https://www.youtube.com/embed/${_vm.idYoutube}?rel=0&controls=0&showinfo=0`) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\" style=\"max-width: 375px; width: 100%\" data-v-3b7a9f8e></iframe></div></div>" : "<!---->") + "</div>")]);
};
var productSlidevue_type_template_id_3b7a9f8e_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productdetails/productSlide.vue?vue&type=template&id=3b7a9f8e&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/productSlide.vue?vue&type=script&lang=js&
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


/* harmony default export */ var productSlidevue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'productSlide-details',
  props: ['photos', 'photo', 'idYoutube'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination'
        },
        setWrapperSize: true,
        paginationClickable: true,
        grabCursor: true
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    setPhoto(photo) {
      return photo;
    },
    changeSlide() {
      this.swiper.slidePrev(500, false);
    }
  }
});
// CONCATENATED MODULE: ./components/template5/_productdetails/productSlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_productSlidevue_type_script_lang_js_ = (productSlidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/_productdetails/productSlide.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(768)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productdetails_productSlidevue_type_script_lang_js_,
  productSlidevue_type_template_id_3b7a9f8e_scoped_true_render,
  productSlidevue_type_template_id_3b7a9f8e_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "3b7a9f8e",
  "f38023fa"
  
)

/* harmony default export */ var productSlide = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/selectGroup.vue?vue&type=template&id=eedf2ea6&scoped=true&
var selectGroupvue_type_template_id_eedf2ea6_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-select"
  }, [_vm._ssrNode("<h4 lang=\"es\" class=\"title-input\" data-v-eedf2ea6>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</h4> "), _vm._ssrNode("<div class=\"select\" data-v-eedf2ea6>", "</div>", [_vm._ssrNode("<select name=\"format\"" + _vm._ssrStyle(null, _vm.value == -1 || !_vm.value ? 'color: rgba(21, 20, 57, 0.4);' : '', null) + " data-v-eedf2ea6>", "</select>", [_vm._ssrNode("<option disabled=\"disabled\" data-v-eedf2ea6>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_seleccionarOpcion'))) + "</option> "), _vm._t("default")], 2)])], 2);
};
var selectGroupvue_type_template_id_eedf2ea6_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productdetails/selectGroup.vue?vue&type=template&id=eedf2ea6&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/selectGroup.vue?vue&type=script&lang=js&
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

/* harmony default export */ var selectGroupvue_type_script_lang_js_ = ({
  name: 'selectGroup-details',
  props: ['options', 'label', 'value', 'index', 'variantes'],
  mounted() {
    this.saveOption();
  },
  data() {
    return {};
  },
  methods: {
    updateValue() {
      this.$emit('input', this.$refs.format.value);
      if (this.$refs.format.value) {
        let variante = this.variantes[this.index].valores.filter(item => {
          return item.option == this.$refs.format.value;
        });
        this.$store.state.beforeCombination.splice(this.index, 1, variante[0].option);
      }
    },
    saveOption() {
      this.$store.state.beforeCombination.splice(this.index, 1, this.variantes[this.index].valores[0].option);
    }
  }
});
// CONCATENATED MODULE: ./components/template5/_productdetails/selectGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_selectGroupvue_type_script_lang_js_ = (selectGroupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template5/_productdetails/selectGroup.vue



function selectGroup_injectStyles (context) {
  
  var style0 = __webpack_require__(770)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var selectGroup_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_selectGroupvue_type_script_lang_js_,
  selectGroupvue_type_template_id_eedf2ea6_scoped_true_render,
  selectGroupvue_type_template_id_eedf2ea6_scoped_true_staticRenderFns,
  false,
  selectGroup_injectStyles,
  "eedf2ea6",
  "20c94f1c"
  
)

/* harmony default export */ var selectGroup = (selectGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/descriptionProduct.vue?vue&type=template&id=28c68c33&scoped=true&
var descriptionProductvue_type_template_id_28c68c33_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "description"
  }, [!_vm.activeClass ? _vm._ssrNode("<div class=\"left\" data-v-28c68c33>", "</div>", [_vm._ssrNode("<h3 class=\"text-desc\" data-v-28c68c33>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('productdetail_description')) + "\n    ") + "</h3> "), _vm.data.info.descripcion ? _vm._ssrNode("<div class=\"editor\" data-v-28c68c33>", "</div>", [_c('el-tiptap', {
    attrs: {
      "readonly": true,
      "extensions": _vm.extensions,
      "spellcheck": false,
      "charCounterCount": false,
      "tooltip": true,
      "showMenubar": false,
      "bubble": false
    },
    model: {
      value: _vm.data.info.descripcion,
      callback: function ($$v) {
        _vm.$set(_vm.data.info, "descripcion", $$v);
      },
      expression: "data.info.descripcion"
    }
  })], 1) : _vm._e()], 2) : _vm._ssrNode("<div class=\"left-empty\" data-v-28c68c33></div>"), _vm._ssrNode(" <div class=\"right\" data-v-28c68c33><div class=\"payments section\" data-v-28c68c33><div class=\"content\" data-v-28c68c33><h3 class=\"title-section\" data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_opcionesPago'))) + "</h3></div> <p data-v-28c68c33>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('productdetail_opcionesPagoMsg')) + "\n      ") + "</p> <ul style=\"list-style: none\" data-v-28c68c33>" + (_vm.mediospago.consignacion == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancaria'))) + "</h4> <p data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_consignacionBancariaMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.contraentrega == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContra'))) + "</h4> <p data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PagoContraMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.convenir == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenir'))) + "</h4> <p data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_pagoConvenirMsg'))) + "</p></li>" : "<!---->") + " " + (_vm.mediospago.credibanco == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionCredibanco'))) + "</h4> <p data-v-28c68c33>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionCredibancoMsg')) + "\n          ") + "</p> <a href=\"https://www.credibanco.com/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-28c68c33><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335270/Templates%20Modos%20de%20pago/Credibanco_lprsof.png\" alt=\"logo Credibanco\" class=\"logo-pasarela\" data-v-28c68c33></a></li>" : "<!---->") + " " + (_vm.mediospago.daviplata == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignaciondaviplata'))) + "</h4> <p data-v-28c68c33>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignaciondaviplataMsg')) + "\n          ") + "</p> <img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333767/Templates%20Modos%20de%20pago/5c89c897e1917d9209a762af_davi_qn90y9.png\" alt=\"logo daviPlata\" class=\"logo-pasarela-daviplata\" data-v-28c68c33></li>" : "<!---->") + " " + (_vm.mediospago.efecty == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfecty'))) + "</h4> <p data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_ConsignacionEfectyMsg'))) + "</p> <a href=\"https://www.efecty.com.co/web/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-28c68c33><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333023/Templates%20Modos%20de%20pago/Efecty-png_q3fvog.png\" alt=\"logo efecty\" class=\"logo-pasarela-efecty\" data-v-28c68c33></a></li>" : "<!---->") + " " + (_vm.mediospago.mercado_pago == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaMercado'))) + "</h4> <p data-v-28c68c33>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaMercadoMsg')) + "\n          ") + "</p> <a href=\"https://www.mercadopago.com\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-28c68c33><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606331948/Templates%20Modos%20de%20pago/mercadopago_jyalpa.png\" alt=\"logo mercadopago\" class=\"logo-pasarela-daviplata\" data-v-28c68c33></a></li>" : "<!---->") + " " + (_vm.mediospago.nequi == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionnequi'))) + "</h4> <p data-v-28c68c33>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_ConsignacionnequiMsg')) + "\n          ") + "</p> <a href=\"https://www.nequi.com.co/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"cursor_point\" data-v-28c68c33><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333553/Templates%20Modos%20de%20pago/Nequi_by_Bancolombia_hxhkhb.png\" alt=\"logo nequi\" class=\"logo-pasarela-daviplata\" data-v-28c68c33></a></li>" : "<!---->") + " " + (_vm.mediospago.payco == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaEpayco'))) + "</h4> <p data-v-28c68c33>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaEpaycoMsg')) + "\n          ") + "</p> <img loading=\"lazy\" src=\"https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png\" alt=\"Pasarela de pagos epayco\" class=\"logo-pasarela-payco\" data-v-28c68c33></li>" : "<!---->") + " " + (_vm.mediospago.payu == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_PasarelaPayu'))) + "</h4> <p data-v-28c68c33>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://www.payulatam.com/co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-28c68c33><img loading=\"lazy\" src=\"https://ecommerce.payulatam.com/logos/PayU_CO.png\" alt=\"PayU\" border=\"0\" class=\"logo-pasarela-payu\" data-v-28c68c33></a></li>" : "<!---->") + " " + (_vm.mediospago.wompi == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_Consignacionwompi'))) + "</h4> <p data-v-28c68c33>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_PasarelaPayuMsg')) + "\n          ") + "</p> <a href=\"https://wompi.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-28c68c33><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335739/Templates%20Modos%20de%20pago/wompi_jxuitu.png\" alt=\"wompi\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-28c68c33></a></li>" : "<!---->") + " " + (_vm.mediospago.wepay4u == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>WePay4U</h4> <p data-v-28c68c33>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('text_pago_WePay4U')) + "\n          ") + "</p> <a href=\"https://wepay4u.com/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-28c68c33><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/v1639078440/wePay4u/powered_by_z7sgqp.png\" alt=\"wePay4u\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-28c68c33></a></li>" : "<!---->") + " " + (_vm.mediospago.tu_compra == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>Tucompra</h4> <p data-v-28c68c33>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('text_pago_Tucompra')) + "\n          ") + "</p> <a href=\"https://tucompra.com.co/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-28c68c33><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/tucompra_ss0oys.png\" alt=\"tu_compra\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-28c68c33></a></li>" : "<!---->") + " " + (_vm.mediospago.flow == 1 ? "<li data-v-28c68c33><h4 data-v-28c68c33>Tucompra</h4> <p data-v-28c68c33>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('text_pago_flowInfo')) + "\n          ") + "</p> <a href=\"https://www.flow.cl/\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-28c68c33><img loading=\"lazy\" src=\"https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/flow_jevnwy.png\" alt=\"flow\" border=\"0\" class=\"logo-pasarela-wompi\" data-v-28c68c33></a></li>" : "<!---->") + "</ul></div> <div class=\"line\" data-v-28c68c33></div> " + (this.envios.envio_metodo ? "<div class=\"deliverys section\" data-v-28c68c33><div class=\"content\" data-v-28c68c33><h3 class=\"title-section\" data-v-28c68c33>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_opinionesEnvio')) + "\n        ") + "</h3></div> " + (this.envios.envio_metodo === 'precio_ciudad' ? "<div class=\"wrapper-method\" data-v-28c68c33><h4 class=\"capitalize\" data-v-28c68c33>" + _vm._ssrEscape("\n          • " + _vm._s(this.envios.envio_metodo.replace('_', ' por ')) + "\n        ") + "</h4> <p class=\"description-method\" data-v-28c68c33>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg1')) + "\n        ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'tarifa_plana' ? "<div class=\"wrapper-method\" data-v-28c68c33><h4 class=\"capitalize\" data-v-28c68c33>" + _vm._ssrEscape("\n          " + _vm._s(this.envios.envio_metodo.replace('_', ' ')) + "\n        ") + "</h4> <p class=\"description-method\" data-v-28c68c33>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_opinionesEnvioMsg2')) + "\n        ") + "</p> <p class=\"price\" data-v-28c68c33>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('cart_precio')) + "\n          " + _vm._s(_vm._f("currency")(this.envios.valor, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n        ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'precio' ? "<div class=\"wrapper-method\" data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_precioTotalCompra'))) + "</h4> <p class=\"description-method\" data-v-28c68c33>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('productdetail_precioTotalCompraMsg')) + "\n        ") + "</p></div>" : "<!---->") + " " + (this.envios.envio_metodo === 'gratis' ? "<div class=\"wrapper-method\" data-v-28c68c33><h4 data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_gratis'))) + "</h4> <p class=\"description-method\" data-v-28c68c33>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_gratisMsg'))) + "</p></div>" : "<!---->") + "</div>" : "<!---->") + "</div>")], 2);
};
var descriptionProductvue_type_template_id_28c68c33_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productdetails/descriptionProduct.vue?vue&type=template&id=28c68c33&scoped=true&

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(67);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/descriptionProduct.vue?vue&type=script&lang=js&
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



/* harmony default export */ var descriptionProductvue_type_script_lang_js_ = ({
  mixins: [elemenTiptap["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    dataStore: Object,
    data: {},
    envio: {}
  },
  data() {
    return {
      medioEnvio: '',
      envioproducto: ''
    };
  },
  computed: {
    mediospago() {
      return this.dataStore.medios_pago;
    },
    activeClass() {
      if (this.data.info.descripcion == '' || this.data.info.descripcion == null) {
        return true;
      } else {
        return false;
      }
    },
    envios() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.data.medioEnvio = JSON.parse(this.dataStore.medios_envio.valores);
      return this.data.medioEnvio;
    }
  },
  filters: {
    capitalize(value) {
      if (value) {
        value = value.toLowerCase();
        return value.replace(/^\w|\s\w/g, l => l.toUpperCase());
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template5/_productdetails/descriptionProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_descriptionProductvue_type_script_lang_js_ = (descriptionProductvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template5/_productdetails/descriptionProduct.vue



function descriptionProduct_injectStyles (context) {
  
  var style0 = __webpack_require__(772)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var descriptionProduct_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_descriptionProductvue_type_script_lang_js_,
  descriptionProductvue_type_template_id_28c68c33_scoped_true_render,
  descriptionProductvue_type_template_id_28c68c33_scoped_true_staticRenderFns,
  false,
  descriptionProduct_injectStyles,
  "28c68c33",
  "83f5cbd8"
  
)

/* harmony default export */ var descriptionProduct = (descriptionProduct_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/suggestionsProducto.vue?vue&type=template&id=2cf310cc&scoped=true&
var suggestionsProductovue_type_template_id_2cf310cc_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.category.length ? _c('div', {
    staticClass: "wrapper-ProductFavoritos"
  }, [_vm._ssrNode("<div class=\"content-title-ProductFavoritos\" data-v-2cf310cc><p class=\"title-ProductFavoritos\" data-v-2cf310cc>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('home_destacadosMsg')) + "\n    ") + "</p></div> "), _c('KoSwipper', {
    attrs: {
      "products": _vm.category
    }
  })], 2) : _vm._e();
};
var suggestionsProductovue_type_template_id_2cf310cc_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productdetails/suggestionsProducto.vue?vue&type=template&id=2cf310cc&scoped=true&

// EXTERNAL MODULE: ./components/template5/_productofavorito/productSlide.vue + 4 modules
var _productofavorito_productSlide = __webpack_require__(168);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/suggestionsProducto.vue?vue&type=script&lang=js&
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


/* harmony default export */ var suggestionsProductovue_type_script_lang_js_ = ({
  name: 'suggestionsProducto',
  props: {
    category: {}
  },
  components: {
    KoSwipper: _productofavorito_productSlide["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/template5/_productdetails/suggestionsProducto.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_suggestionsProductovue_type_script_lang_js_ = (suggestionsProductovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template5/_productdetails/suggestionsProducto.vue



function suggestionsProducto_injectStyles (context) {
  
  var style0 = __webpack_require__(774)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var suggestionsProducto_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_suggestionsProductovue_type_script_lang_js_,
  suggestionsProductovue_type_template_id_2cf310cc_scoped_true_render,
  suggestionsProductovue_type_template_id_2cf310cc_scoped_true_staticRenderFns,
  false,
  suggestionsProducto_injectStyles,
  "2cf310cc",
  "7df589fe"
  
)

/* harmony default export */ var suggestionsProducto = (suggestionsProducto_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/zoomImg.vue?vue&type=template&id=45ffdea8&scoped=true&
var zoomImgvue_type_template_id_45ffdea8_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('figure', {
    staticClass: "zoom",
    style: _vm.setBackground(_vm.idCloudinaryQuality(_vm.photo, 850, 850)),
    on: {
      "mousemove": _vm.zoom
    }
  }, [_vm._ssrNode("<img loading=\"lazy\"" + _vm._ssrAttr("src", _vm.idCloudinaryQuality(_vm.photo, 850, 850)) + " alt=\"Product Img\" class=\"photo_main\" data-v-45ffdea8>")]);
};
var zoomImgvue_type_template_id_45ffdea8_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productdetails/zoomImg.vue?vue&type=template&id=45ffdea8&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productdetails/zoomImg.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./components/template5/_productdetails/zoomImg.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productdetails_zoomImgvue_type_script_lang_js_ = (zoomImgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template5/_productdetails/zoomImg.vue



function zoomImg_injectStyles (context) {
  
  var style0 = __webpack_require__(776)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var zoomImg_component = Object(componentNormalizer["a" /* default */])(
  _productdetails_zoomImgvue_type_script_lang_js_,
  zoomImgvue_type_template_id_45ffdea8_scoped_true_render,
  zoomImgvue_type_template_id_45ffdea8_scoped_true_staticRenderFns,
  false,
  zoomImg_injectStyles,
  "45ffdea8",
  "426bd57f"
  
)

/* harmony default export */ var zoomImg = (zoomImg_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko-ProductDetail-1.vue?vue&type=script&lang=js&
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









/* harmony default export */ var Ko_ProductDetail_1vue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'Ko-ProductDetail-1',
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebookPixel: Object,
    settingByTemplate: Object
  },
  components: {
    selectGroup: selectGroup,
    koDescription: descriptionProduct,
    koSuggesProduct: suggestionsProducto,
    productSlide: productSlide,
    zoom: zoomImg
  },
  mounted() {
    this.$store.state.beforeCombination = [];
    if (this.productsData && this.productsData.length && this.productsData.length > 0) {
      this.getDataProduct();
    } else {
      this.getDataProductPrev();
    }
    if (Object.keys(this.dataStore.medios_envio).length) {
      this.setOptionEnvio();
    }
    if (this.$route.query && this.$route.query.userId && this.$route.query.userName) {
      this.userDropshipping.userId = this.$route.query.userId;
      this.userDropshipping.userName = this.$route.query.userName;
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
        slidesPerView: 5,
        spaceBetween: 10,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        },
        breakpoints: {
          1100: {
            slidesPerView: 4,
            spaceBetween: 17
          }
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
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    existPayments() {
      const mediosPago = this.dataStore.medios_pago;
      if (mediosPago.consignacion || mediosPago.convenir || mediosPago.payco || mediosPago.tienda || mediosPago.efecty) {
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
  methods: {
    changeSlide() {
      this.swiper.slidePrev(700, false);
    },
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
          this.setOptionEnvio();
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
    setOptionEnvio() {
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
      this.$router.push('/');
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
  watch: {
    productsData(value) {
      this.getDataProduct();
    },
    envios(value) {
      this.setOptionEnvio();
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
  filters: {
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase();
      }
      return '';
    }
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
// CONCATENATED MODULE: ./components/template5/Ko-ProductDetail-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var template5_Ko_ProductDetail_1vue_type_script_lang_js_ = (Ko_ProductDetail_1vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template5/Ko-ProductDetail-1.vue



function Ko_ProductDetail_1_injectStyles (context) {
  
  var style0 = __webpack_require__(778)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko_ProductDetail_1_component = Object(componentNormalizer["a" /* default */])(
  template5_Ko_ProductDetail_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Ko_ProductDetail_1_injectStyles,
  "659f50f3",
  "7ddf1802"
  
)

/* harmony default export */ var Ko_ProductDetail_1 = __webpack_exports__["default"] = (Ko_ProductDetail_1_component.exports);

/***/ })

};;
//# sourceMappingURL=51.js.map