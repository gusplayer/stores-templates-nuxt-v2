exports.ids = [41,63,120,121];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productcard/Ko-ProductCard-1.vue?vue&type=template&id=1617f7c9&scoped=true&
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
  "5d59ce9d"
  
)

/* harmony default export */ var Ko_ProductCard_1 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_1617f7c9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_1617f7c9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_1617f7c9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_1617f7c9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_1617f7c9_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-card[data-v-1617f7c9]{align-items:center;background:#fff;border:1px solid hsla(0,0%,95%,.637);border-radius:5px;box-shadow:0 1px 1px #e2e2e2;box-sizing:border-box;display:flex;justify-content:center;width:100%}.container-card[data-v-1617f7c9]{align-items:flex-start;border-radius:5px;flex-direction:column}.container-card[data-v-1617f7c9],.wrapper-image[data-v-1617f7c9]{display:flex;overflow:hidden;position:relative;width:100%}.wrapper-image[data-v-1617f7c9]{align-items:center;justify-content:center;max-height:300px;min-height:250px}.product-image[data-v-1617f7c9]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.notproduct-image[data-v-1617f7c9]{height:294px;max-height:294px;width:300px}.product-image-soldOut[data-v-1617f7c9]{filter:grayscale(100%);-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.image_overlay[data-v-1617f7c9]{background:hsla(0,0%,41%,.165);height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}#product-card:hover .image_overlay[data-v-1617f7c9]{opacity:.7;transition:all .2s ease-out}.separador-stats[data-v-1617f7c9]{height:95px;width:100%}.stats-container[data-v-1617f7c9]{background:#fff;display:flex;flex-direction:column;height:120px;justify-content:space-between;left:0;padding:20px 12px 0;position:absolute;top:288px;transition:all .2s ease-out;width:100%}#product-card:hover .stats-container[data-v-1617f7c9]{top:241px;transition:all .2s ease-out}.card-info-1[data-v-1617f7c9]{background:#e71f77;color:#fff;top:-44px}.card-info-1[data-v-1617f7c9],.card-info-2[data-v-1617f7c9]{align-items:center;border-radius:var(--radius_btn);display:flex;font-size:12px;justify-content:center;padding:1px 4px;position:absolute;right:0;z-index:2}.card-info-2[data-v-1617f7c9]{background:#35dd8d;color:#000;font-weight:700;top:-22px}.content-name-product[data-v-1617f7c9]{align-items:flex-start;display:flex;justify-content:center;min-height:36px;text-align:center;width:100%}.card-title[data-v-1617f7c9]{color:#3f3f3f;font-size:15px;font-weight:500}.content-text-price[data-v-1617f7c9]{margin-top:5px;width:100%}.content-price[data-v-1617f7c9],.content-text-price[data-v-1617f7c9]{align-items:center;display:flex;justify-content:center}.content-price[data-v-1617f7c9]{flex-direction:row;max-height:29px;min-height:29px}.content-price-empty[data-v-1617f7c9]{margin-top:5px;max-height:29px;min-height:29px;width:100%}.text-price[data-v-1617f7c9]{color:#464646;font-size:20px;font-weight:500;line-height:1.4;text-align:center}.separator-price[data-v-1617f7c9]{color:#464646;margin-left:5px;margin-right:5px}.wrapper-btn-icon[data-v-1617f7c9]{flex-direction:row;width:100%}#add_cart[data-v-1617f7c9],.wrapper-btn-icon[data-v-1617f7c9]{align-items:center;display:flex;justify-content:center}#add_cart[data-v-1617f7c9]{background-color:var(--color_background_btn);border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);font-size:19px;font-weight:700;height:41px;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}#add_cart[data-v-1617f7c9]:hover{background-color:var(--btnhover);border:2px solid var(--btnhover);cursor:pointer}#product-card:hover #add_cart[data-v-1617f7c9]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.view_details[data-v-1617f7c9]{align-items:center;background-color:transparent;border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_background_btn);display:flex;font-size:19px;font-weight:700;height:41px;justify-content:center;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}.view_details[data-v-1617f7c9]:hover{border:2px solid var(--btnhover);color:var(--btnhover);cursor:pointer}#product-card:hover .view_details[data-v-1617f7c9]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.separador-btn[data-v-1617f7c9]{width:5px}.wrapper[data-v-1617f7c9]{display:inline;display:initial;width:100%}.wrapper-movil[data-v-1617f7c9]{display:none}.card-icon-cart-movil[data-v-1617f7c9]:hover{color:var(--btnhover)}.overlay-top[data-v-1617f7c9]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background:#fff;border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#35dd8d;font-size:13px;height:29px;left:100%;overflow:hidden;padding:5px;position:absolute;right:0;top:43px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:0}#product-card:hover .overlay-top[data-v-1617f7c9]{left:75%;width:67px}.overlay-free[data-v-1617f7c9]{background-color:#35dd8d;border-radius:.25rem;color:#fff;height:35px;left:100%;overflow:hidden;position:absolute;right:0;text-align:center;top:0;transition:.5s ease;width:0}.txt-free[data-v-1617f7c9]{font-size:13px;line-height:12px;margin-top:5px}#product-card:hover .overlay-free[data-v-1617f7c9]{left:55%;transition-delay:.7s;width:125px}.overlay-polygon[data-v-1617f7c9]{fill:#35dd8d;background-color:transparent;height:5%;left:100%;overflow:hidden;position:absolute;right:0;top:35px;width:0}#product-card:hover .overlay-polygon[data-v-1617f7c9]{left:90%;transition-delay:.95s;width:5%}@media (max-width:1270px){.separador-stats[data-v-1617f7c9]{height:105px}}@media (max-width:1249px){.separador-stats[data-v-1617f7c9]{height:98px}}@media (max-width:768px){.wrapper[data-v-1617f7c9]{display:none}.wrapper-movil[data-v-1617f7c9]{display:inline;display:initial;width:100%}.content-card-items[data-v-1617f7c9]{align-items:center;display:flex;flex-direction:column;height:75px;justify-content:space-between;padding:5px 10px;position:relative;width:100%}.card-title[data-v-1617f7c9]{font-size:13px}.content-text-price[data-v-1617f7c9]{margin-top:0}.text-price[data-v-1617f7c9]{font-size:15px}.icon-cart[data-v-1617f7c9]{margin-left:20px}.card-info-1[data-v-1617f7c9]{font-size:10px;top:-43px}.card-info-2[data-v-1617f7c9]{font-size:10px;top:-22px}.notproduct-image-res[data-v-1617f7c9]{height:357px;max-height:357px;width:100%}}@media (max-width:450px){.notproduct-image-res[data-v-1617f7c9]{height:170px;max-height:170px}.container-card[data-v-1617f7c9]{max-width:200px;width:100%}.wrapper-image[data-v-1617f7c9]{min-height:170px}}", ""]);
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
  add("74be56a6", content, true, context)
};

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5dc06203", content, true, context)
};

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1d5997fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1d5997fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1d5997fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1d5997fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productSlide_vue_vue_type_style_index_0_id_1d5997fa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productofavorito/productSlide.vue?vue&type=template&id=1d5997fa&scoped=true&
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
  "16660f82"
  
)

/* harmony default export */ var productSlide = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductFavoritos_1_vue_vue_type_style_index_0_id_f043c2f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductFavoritos_1_vue_vue_type_style_index_0_id_f043c2f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductFavoritos_1_vue_vue_type_style_index_0_id_f043c2f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductFavoritos_1_vue_vue_type_style_index_0_id_f043c2f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductFavoritos_1_vue_vue_type_style_index_0_id_f043c2f2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-ProductFavoritos[data-v-f043c2f2]{align-items:center;background-color:var(--background_color_2);box-sizing:border-box;padding-top:20px}.swiper-container[data-v-f043c2f2],.wrapper-ProductFavoritos[data-v-f043c2f2]{display:flex;flex-direction:column;justify-content:center;width:100%}.swiper-container[data-v-f043c2f2]{align-items:flex-start;max-width:1300px;padding:10px 20px;z-index:1}.content-title-ProductFavoritos[data-v-f043c2f2]{align-items:center;display:flex;justify-content:flex-start;max-width:1300px;padding:10px 20px;width:100%}.title-ProductFavoritos[data-v-f043c2f2]{background:transparent;color:var(--color_subtext);cursor:pointer;font-size:18px;font-weight:700;line-height:1.4}@media (max-width:770px){.swiper-container[data-v-f043c2f2]{padding:20px 8px}.content-title-ProductFavoritos[data-v-f043c2f2]{padding:10px}}@media (max-width:380px){.swiper-container[data-v-f043c2f2]{padding:20px 5px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(238);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("38a03c57", content, true, context)
};

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(240);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6ae4f155", content, true, context)
};

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6217d025", content, true, context)
};

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko-ProductFavoritos-1.vue?vue&type=template&id=f043c2f2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.dataProductFavorite.length ? _c('div', {
    staticClass: "wrapper-ProductFavoritos"
  }, [_vm._ssrNode("<div class=\"content-title-ProductFavoritos\" data-v-f043c2f2><p class=\"title-ProductFavoritos\" data-v-f043c2f2>" + _vm._ssrEscape(_vm._s(_vm.$t('home_destacados'))) + "</p></div> "), _c('KoSwipper', {
    attrs: {
      "products": _vm.dataProductFavorite
    }
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/Ko-ProductFavoritos-1.vue?vue&type=template&id=f043c2f2&scoped=true&

// EXTERNAL MODULE: ./components/template5/_productofavorito/productSlide.vue + 4 modules
var productSlide = __webpack_require__(168);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko-ProductFavoritos-1.vue?vue&type=script&lang=js&

/* harmony default export */ var Ko_ProductFavoritos_1vue_type_script_lang_js_ = ({
  name: 'Ko-ProductFavoritos-1',
  components: {
    KoSwipper: productSlide["a" /* default */]
  },
  computed: {
    dataProductFavorite() {
      return this.$store.state.products.fullProducts.filter(product => product.favorito === 1);
    }
  }
});
// CONCATENATED MODULE: ./components/template5/Ko-ProductFavoritos-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var template5_Ko_ProductFavoritos_1vue_type_script_lang_js_ = (Ko_ProductFavoritos_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/Ko-ProductFavoritos-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(193)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template5_Ko_ProductFavoritos_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f043c2f2",
  "57bd4432"
  
)

/* harmony default export */ var Ko_ProductFavoritos_1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Banner_1_vue_vue_type_style_index_0_id_d1ab08ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Banner_1_vue_vue_type_style_index_0_id_d1ab08ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Banner_1_vue_vue_type_style_index_0_id_d1ab08ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Banner_1_vue_vue_type_style_index_0_id_d1ab08ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Banner_1_vue_vue_type_style_index_0_id_d1ab08ce_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "picture[data-v-d1ab08ce]{width:100%}.wrapper-banner[data-v-d1ab08ce]{background:var(--background_color_2)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionList_vue_vue_type_style_index_0_id_6ee55808_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(198);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionList_vue_vue_type_style_index_0_id_6ee55808_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionList_vue_vue_type_style_index_0_id_6ee55808_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionList_vue_vue_type_style_index_0_id_6ee55808_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionList_vue_vue_type_style_index_0_id_6ee55808_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-6ee55808]{background:transparent;padding:5px 0;width:100%}.accordion[data-v-6ee55808]{cursor:pointer;margin:0}.accordion[data-v-6ee55808],.accordion-items[data-v-6ee55808]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;width:100%}.accordion-items[data-v-6ee55808]{padding-top:3px}.content[data-v-6ee55808]{align-items:flex-start;display:flex;flex-direction:column;margin-top:10px;padding-left:2px;width:100%}.icon[data-v-6ee55808]{color:var(--color_icon);font-size:24px;position:relative;top:-3px}.icon[data-v-6ee55808]:hover{color:var(--color_hover_text)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_BannerFooter_1_vue_vue_type_style_index_0_id_5065ec3a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_BannerFooter_1_vue_vue_type_style_index_0_id_5065ec3a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_BannerFooter_1_vue_vue_type_style_index_0_id_5065ec3a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_BannerFooter_1_vue_vue_type_style_index_0_id_5065ec3a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_BannerFooter_1_vue_vue_type_style_index_0_id_5065ec3a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "picture[data-v-5065ec3a]{width:100%}.wrapper-banner[data-v-5065ec3a]{background:var(--background_color_2)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/_order1/_AccordionList.vue?vue&type=template&id=6ee55808&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper"
  }, [_vm._ssrNode("<div class=\"accordion\" data-v-6ee55808>", "</div>", [_vm._ssrNode("<div class=\"accordion-items\" data-v-6ee55808>", "</div>", [_vm._t("categorias"), _vm._ssrNode(" "), !_vm.show ? _c('Flechadown-icon', {
    staticClass: "icon"
  }) : _vm._e(), _vm._ssrNode(" "), _vm.show ? _c('FlechaUp-icon', {
    staticClass: "icon"
  }) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\"" + _vm._ssrStyle(null, null, {
    display: _vm.show ? '' : 'none'
  }) + " data-v-6ee55808>", "</div>", [_vm._t("subcategorias")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/headers/_order1/_AccordionList.vue?vue&type=template&id=6ee55808&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/_order1/_AccordionList.vue?vue&type=script&lang=js&
/* harmony default export */ var _AccordionListvue_type_script_lang_js_ = ({
  name: 'AccordionList-header',
  data: function () {
    return {
      show: false
    };
  },
  methods: {
    toggleItem: function () {
      this.show = !this.show;
    }
  }
});
// CONCATENATED MODULE: ./components/headers/_order1/_AccordionList.vue?vue&type=script&lang=js&
 /* harmony default export */ var _order1_AccordionListvue_type_script_lang_js_ = (_AccordionListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/headers/_order1/_AccordionList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(239)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _order1_AccordionListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6ee55808",
  "42831d3f"
  
)

/* harmony default export */ var _AccordionList = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(507);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("92cda5ec", content, true, context)
};

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(509);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("50e30422", content, true, context)
};

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(511);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("8e7c7f66", content, true, context)
};

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(513);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7f9ffdd8", content, true, context)
};

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(515);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6ff3b105", content, true, context)
};

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/ko-Banner-1.vue?vue&type=template&id=d1ab08ce&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.banner && _vm.banner.banner ? _c('div', {
    staticClass: "w-full h-full flex justify-center items-center"
  }, [_vm._ssrNode("<picture data-v-d1ab08ce>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.banner.banner, 'bannerRes', 800)) + " data-v-d1ab08ce> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.banner.banner, 'banner')) + " data-v-d1ab08ce> "), _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryBanner(_vm.banner.banner, 'banner'),
      expression: "idCloudinaryBanner(banner.banner, 'banner')"
    }],
    staticClass: "w-full h-full object-cover object-center",
    attrs: {
      "loading": "lazy",
      "alt": "Banner_tienda_template5"
    }
  }, [])], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/ko-Banner-1.vue?vue&type=template&id=d1ab08ce&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/ko-Banner-1.vue?vue&type=script&lang=js&

/* harmony default export */ var ko_Banner_1vue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-Banner-1',
  computed: {
    banner() {
      return this.$store.state.settingByTemplate;
    }
  }
});
// CONCATENATED MODULE: ./components/template5/ko-Banner-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var template5_ko_Banner_1vue_type_script_lang_js_ = (ko_Banner_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/ko-Banner-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(237)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template5_ko_Banner_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d1ab08ce",
  "23659ba0"
  
)

/* harmony default export */ var ko_Banner_1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/ko-BannerFooter-1.vue?vue&type=template&id=5065ec3a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.banner && _vm.banner.banner_footer ? _c('div', {
    staticClass: "w-full h-full flex justify-center items-center"
  }, [_vm._ssrNode("<picture data-v-5065ec3a>", "</picture>", [_vm._ssrNode("<source media=\"(max-width: 799px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.banner.banner_footer, 'bannerRes', 800)) + " data-v-5065ec3a> <source media=\"(min-width: 800px)\"" + _vm._ssrAttr("srcset", _vm.idCloudinaryBanner(_vm.banner.banner_footer, 'banner')) + " data-v-5065ec3a> "), _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryBanner(_vm.banner.banner_footer, 'banner'),
      expression: "idCloudinaryBanner(banner.banner_footer, 'banner')"
    }],
    staticClass: "w-full h-full object-cover object-center",
    attrs: {
      "loading": "lazy",
      "alt": "Banner_tienda_template5"
    }
  }, [])], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/ko-BannerFooter-1.vue?vue&type=template&id=5065ec3a&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/ko-BannerFooter-1.vue?vue&type=script&lang=js&

/* harmony default export */ var ko_BannerFooter_1vue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */]],
  name: 'Ko-Banner-1',
  computed: {
    banner() {
      return this.$store.state.settingByTemplate;
    }
  }
});
// CONCATENATED MODULE: ./components/template5/ko-BannerFooter-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var template5_ko_BannerFooter_1vue_type_script_lang_js_ = (ko_BannerFooter_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/ko-BannerFooter-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(241)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template5_ko_BannerFooter_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5065ec3a",
  "2f15abca"
  
)

/* harmony default export */ var ko_BannerFooter_1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productslideBanner_vue_vue_type_style_index_0_id_50edb4f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productslideBanner_vue_vue_type_style_index_0_id_50edb4f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productslideBanner_vue_vue_type_style_index_0_id_50edb4f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productslideBanner_vue_vue_type_style_index_0_id_50edb4f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productslideBanner_vue_vue_type_style_index_0_id_50edb4f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-wrapper[data-v-50edb4f6]{position:relative;width:100%}.swiper-slide[data-v-50edb4f6]{width:100%}.swiper-pagination-bullet[data-v-50edb4f6]{background-color:hsla(0,0%,6%,.5)}.swiper-pagination-bullet-active[data-v-50edb4f6]{background-color:#fff}.banner[data-v-50edb4f6]{height:100%;max-height:600px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%}.swiper-pagination[data-v-50edb4f6] .swiper-pagination-bullet{background:orange}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Banner_macrobrand_vue_vue_type_style_index_0_id_6231a394_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(285);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Banner_macrobrand_vue_vue_type_style_index_0_id_6231a394_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Banner_macrobrand_vue_vue_type_style_index_0_id_6231a394_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Banner_macrobrand_vue_vue_type_style_index_0_id_6231a394_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_Banner_macrobrand_vue_vue_type_style_index_0_id_6231a394_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-banner[data-v-6231a394]{background:var(--background_color_2)}.header-content-logo[data-v-6231a394],.wrapper-banner[data-v-6231a394]{align-items:center;display:flex;justify-content:center}.banner[data-v-6231a394],.header-content-logo[data-v-6231a394],.wrapper-banner[data-v-6231a394]{width:100%}.banner[data-v-6231a394]{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_2_vue_vue_type_style_index_0_id_8021eaac_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_2_vue_vue_type_style_index_0_id_8021eaac_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_2_vue_vue_type_style_index_0_id_8021eaac_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_2_vue_vue_type_style_index_0_id_8021eaac_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_2_vue_vue_type_style_index_0_id_8021eaac_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".text-macrobrand[data-v-8021eaac]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:30px;margin-top:0}.text-macrobrand>p[data-v-8021eaac]{color:var(--color_text);font-size:20px;font-weight:700;padding:5px 20px;text-align:center}.wrapper-productlist[data-v-8021eaac]{align-items:center;background:var(--background_color_2);box-sizing:border-box}.container-productlist[data-v-8021eaac],.wrapper-productlist[data-v-8021eaac]{display:flex;justify-content:center;width:100%}.container-productlist[data-v-8021eaac]{flex-direction:column;max-width:1300px;padding:40px 20px}.content-item[data-v-8021eaac]{display:flex;flex-direction:row;justify-content:space-between}.content-item>div[data-v-8021eaac]:first-child{flex:1;max-width:300px}.content-item>div[data-v-8021eaac]:nth-child(2){flex:2}.content-categoria[data-v-8021eaac]{padding-right:20px;width:100%}.text-categoria[data-v-8021eaac]{color:var(--color_text);font-size:16px;width:100%}.text-subcategoria[data-v-8021eaac]{color:var(--color_subtext);cursor:pointer;font-size:16px;margin-bottom:10px;margin-left:5px;width:100%}.text-categoria-active[data-v-8021eaac],.text-subcategoria-active[data-v-8021eaac]{color:var(--color_hover_text)}.content-items-categorias-text[data-v-8021eaac]{display:flex;flex-direction:row;margin-bottom:15px}.text-categorias[data-v-8021eaac]{font-size:18px}.text-categorias[data-v-8021eaac],.text-categorias-select[data-v-8021eaac]{align-self:flex-start;background:transparent;color:var(--color_subtext);cursor:pointer;display:flex;font-weight:700;line-height:1.4;margin-right:2px}.text-categorias-select[data-v-8021eaac]{font-size:16px;margin-left:5px;opacity:.6}.content-item-productos[data-v-8021eaac]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.grid-products[data-v-8021eaac]{grid-column-gap:25px;grid-row-gap:30px;box-sizing:border-box;display:grid;grid-template-columns:repeat(3,minmax(250px,2fr));margin:0 auto;width:100%}.content-products-empty[data-v-8021eaac]{align-items:center;display:flex;justify-content:center;min-height:200px;text-align:center;width:100%}.content-products-empty p[data-v-8021eaac]{color:var(--color_subtext);font-size:18px;font-weight:700;opacity:.6}.wrapper-filter[data-v-8021eaac]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;list-style:none;width:100%}.pagination-medium[data-v-8021eaac]{background:transparent;margin-top:10px}.pagination[data-v-8021eaac]{background:transparent;color:var(--color_text);font-size:18px}.product_pagination[data-v-8021eaac] .el-pagination.is-background .btn-next,.product_pagination[data-v-8021eaac] .el-pagination.is-background .btn-prev,.product_pagination[data-v-8021eaac] .el-pagination.is-background .el-pager li{background-color:transparent;color:var(--color_text)}.product_pagination[data-v-8021eaac] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-8021eaac] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-8021eaac] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--btnhover)}.product_pagination[data-v-8021eaac] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--color_icon);color:#fff}@media (max-width:1290px){.grid-products[data-v-8021eaac]{grid-column-gap:15px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(240px,2fr))}}@media (max-width:1265px){.grid-products[data-v-8021eaac]{grid-column-gap:10px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(240px,2fr))}}@media (max-width:1250px){.grid-products[data-v-8021eaac]{grid-column-gap:25px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(250px,2fr))}}@media (max-width:1060px){.grid-products[data-v-8021eaac]{grid-column-gap:20px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(250px,2fr))}}@media (max-width:1050px){.grid-products[data-v-8021eaac]{grid-column-gap:20px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(240px,2fr))}}@media (max-width:1020px){.grid-products[data-v-8021eaac]{grid-column-gap:15px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(240px,2fr))}}@media (max-width:1010px){.grid-products[data-v-8021eaac]{grid-column-gap:10px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(240px,2fr))}}@media (max-width:1000px){.grid-products[data-v-8021eaac]{grid-column-gap:25px;grid-row-gap:30px;grid-template-columns:repeat(2,minmax(250px,2fr))}}@media (max-width:790px){.grid-products[data-v-8021eaac]{grid-column-gap:20px;grid-row-gap:30px;grid-template-columns:repeat(2,minmax(250px,2fr))}}@media (max-width:780px){.grid-products[data-v-8021eaac]{grid-column-gap:16px;grid-row-gap:30px;grid-template-columns:repeat(2,minmax(250px,2fr))}}@media (max-width:775px){.grid-products[data-v-8021eaac]{grid-column-gap:20px;grid-row-gap:20px;grid-template-columns:repeat(2,minmax(250px,2fr))}}@media (max-width:770px){.container-productlist[data-v-8021eaac]{padding:0}.content-items-categorias-text[data-v-8021eaac]{padding:20px 10px 10px}.content-item-productos[data-v-8021eaac]{padding:0 15px}.grid-products[data-v-8021eaac]{grid-template-columns:repeat(2,minmax(10px,2fr))}.wrapper-filter[data-v-8021eaac]{padding-left:10px}.content-categoria[data-v-8021eaac]{padding-right:0}}@media (max-width:700px){.content-items-categorias[data-v-8021eaac]{margin-bottom:0;margin-left:5px}.wrapper-filter[data-v-8021eaac]{display:none}}@media (max-width:450px){.grid-products[data-v-8021eaac]{grid-template-columns:repeat(2,minmax(160px,1fr))}.content-item-productos[data-v-8021eaac]{padding:5px}.text-macrobrand>p[data-v-8021eaac]{font-size:16px}.text-macrobrand[data-v-8021eaac]{margin-bottom:10px;margin-top:10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Content_macrobrand_vue_vue_type_style_index_0_id_492ae75c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(287);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Content_macrobrand_vue_vue_type_style_index_0_id_492ae75c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Content_macrobrand_vue_vue_type_style_index_0_id_492ae75c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Content_macrobrand_vue_vue_type_style_index_0_id_492ae75c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_Content_macrobrand_vue_vue_type_style_index_0_id_492ae75c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-content[data-v-492ae75c]{align-items:center;background-color:var(--background_color_2);box-sizing:border-box;display:flex;justify-content:center;width:100%}.container-content[data-v-492ae75c]{align-items:center;display:grid;flex-direction:row;flex-direction:column;grid-template:repeat(2,1fr) /repeat(2,1fr);justify-content:space-around;margin:0 auto;max-width:1300px;padding:30px 30px 50px;width:100%}.item .texto[data-v-492ae75c]{display:flex;justify-content:center;padding:0 20px}.item .texto[data-v-492ae75c],.item_last .texto[data-v-492ae75c]{box-sizing:border-box;width:100%}.wrapper-text[data-v-492ae75c]{max-width:400px}.text-titulo[data-v-492ae75c]{color:var(--color_text);font-size:35px;font-weight:700;line-height:1.45;margin-bottom:20px}.text-subtitulo[data-v-492ae75c],.text-titulo[data-v-492ae75c]{font-stretch:normal;font-style:normal;letter-spacing:normal}.text-subtitulo[data-v-492ae75c]{color:var(--color_subtext);font-size:20px;font-weight:400;line-height:1.63}.button[data-v-492ae75c]{background-color:var(--color_background_btn);border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);cursor:pointer;font-size:14px;font-weight:700;margin-top:20px;padding:8px 14px;transition:all .2s ease-in;width:140px}.button[data-v-492ae75c]:hover{background-color:var(--btnhover);border:2px solid var(--btnhover)}.item_image[data-v-492ae75c]{height:480px;max-height:480px;max-width:630px;overflow:hidden;position:relative;width:100%;z-index:1}.item_image img[data-v-492ae75c]{height:100%;max-height:500px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%;z-index:1}.item_content[data-v-492ae75c]{align-items:center;display:flex;justify-items:center}@media screen and (max-width:800px){.wrapper-text[data-v-492ae75c]{max-width:500px}.container-content[data-v-492ae75c]{grid-template:repeat(1,1fr) /4fr;padding:30px 0}.item_image[data-v-492ae75c]{margin:auto}.item_last[data-v-492ae75c]{order:3}.item .texto[data-v-492ae75c]{padding:20px 0}}@media screen and (max-width:700px){.text-titulo[data-v-492ae75c]{font-size:35px}.text-subtitulo[data-v-492ae75c]{font-size:18px}.item .texto[data-v-492ae75c]{padding:20px}}@media screen and (max-width:400px){.text-titulo[data-v-492ae75c]{font-size:30px}.text-subtitulo[data-v-492ae75c]{font-size:16px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_macrobrand_vue_vue_type_style_index_0_id_6e75e806_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_macrobrand_vue_vue_type_style_index_0_id_6e75e806_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_macrobrand_vue_vue_type_style_index_0_id_6e75e806_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_macrobrand_vue_vue_type_style_index_0_id_6e75e806_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_macrobrand_vue_vue_type_style_index_0_id_6e75e806_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".search-movil{display:none}input{outline:none}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;font-family:inherit;font-size:100%}input::-webkit-search-cancel-button,input::-webkit-search-decoration{display:none}input[type=search]{background:transparent;border:2px solid var(--color_icon);border-radius:10em;max-height:36px;padding:4px 7px;transition:all .5s;width:35px}#demo-1 input[type=search]{background:#fff;border:2px solid grey;border-radius:var(--radius_btn);box-sizing:border-box;padding:6px 4px 7px 38px;transition:all .5s;width:100%}#demo-1 input[type=search]:focus{background-color:#fff;border-color:var(--btnhover);box-sizing:border-box;width:100%}input[type=search]:focus{background-color:#fff;border-color:var(--color_hover_text)}input:-moz-placeholder{color:var(--color_text)}input::-webkit-input-placeholder{color:var(--color_text)}.space-search{display:none}.icon-search-tp{color:grey;cursor:pointer;font-size:25px;left:8px;position:absolute;top:3px}@media (max-width:500px){.space-search{display:flex;height:40px;width:100%}.search-movil{background:var(--background_color_1);display:flex;padding:8px 5px 0;position:fixed;top:88px;transition:all .8s;width:100%;z-index:3}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    // filtro etiqueta URL
    sendTagUrlMix(tag_id, tag_Name) {
      this.$store.commit('products/FILTER_BY', {
        type: ['tag'],
        data: ''
      });
      this.$store.state.products.payloadTag = parseInt(tag_id);
      this.$store.state.products.payloadTagName = tag_Name;
    },
    // filtro categoría URL
    sendCategoryUrlMix(value) {
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      let urlFiltrada = decodeURIComponent(value);
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: urlFiltrada
      });
      if (this.$store.getters['products/filterProducts'].length) {
        this.$store.commit('SET_CATEGORY_PRODUCTO', urlFiltrada);
      } else {
        this.$store.commit('SET_CATEGORY_PRODUCTO', '');
      }
    },
    // filtro subcategoría URL
    SendSubCategoryUrlMix(value, categories, subcategories) {
      let urlFiltradaTemp = decodeURIComponent(value);
      let resTemp = urlFiltradaTemp.split('^');
      let urlFiltrada = decodeURIComponent(resTemp[0]);
      let filtradoSubCategories = subcategories.find(element => {
        if (element.categoria == parseInt(resTemp[1]) && element.nombre_subcategoria == urlFiltrada) {
          return element;
        }
      });
      if (filtradoSubCategories) {
        let filtradoCategories = categories.find(element => element.id == parseInt(resTemp[1]));
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: filtradoSubCategories.id
        });
        if (this.$store.getters['products/filterProducts'].length) {
          this.$store.commit('SET_CATEGORY_PRODUCTO', filtradoCategories.nombre_categoria_producto);
          this.$store.commit('SET_SUBCATEGORY_PRODUCTO', filtradoSubCategories.nombre_subcategoria);
        } else {
          this.$store.commit('SET_CATEGORY_PRODUCTO', '');
          this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
        }
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: ''
        });
      }
    },
    // filtro categoría, subcategoría y etiqueta
    getProductsFilter(value, tag_id, tag_Name, Lateral) {
      this.$store.commit('SET_STATE_BANNER', false);
      let type = this.$store.state.products.type;
      let payload = this.$store.state.products.payload;
      if (type.length < 2) {
        this.$store.state.products.payloadTag = tag_id ? tag_id : this.$store.state.products.payloadTag ? this.$store.state.products.payloadTag : '';
        this.$store.state.products.payloadTagName = tag_Name ? tag_Name : this.$store.state.products.payloadTagName ? this.$store.state.products.payloadTagName : '';
      }
      if (type && type.length >= 1) {
        if (type[0] == 'category' || type[0] == 'subcategory' || type[0] == 'tag') {
          this.$store.commit('products/FILTER_BY', {
            type: [type[0], `${value}`],
            data: payload
          });
        }
        if (type[0] == 'category' || type[0] == 'subcategory') {
          if (type[1] == 'tag') {
            this.$store.commit('products/FILTER_BY', {
              type: [type[0], type[1], `${value}`],
              data: payload
            });
            this.$store.state.products.payloadTag2 = tag_id ? tag_id : this.$store.state.products.payloadTag2 ? this.$store.state.products.payloadTag2 : '';
            this.$store.state.products.payloadTag2Name = tag_Name ? tag_Name : this.$store.state.products.payloadTag2Name ? this.$store.state.products.payloadTag2Name : '';
          }
        } else {
          this.$store.state.products.type = [];
          this.$store.commit('products/FILTER_BY', {
            type: [`${value}`],
            data: ''
          });
          this.setURlTag(tag_id, tag_Name);
        }
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: [`${value}`],
          data: ''
        });
        this.setURlTag(tag_id, tag_Name);
      }
      this.currentPage = 1;
      if (Lateral === true) {
        this.$router.push({
          path: '/productos'
        });
        this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false);
      }
    },
    allCategories() {
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
      this.currentPage = 1;
    },
    SearchProduct(search) {
      if (search.length) {
        this.search = search;
        this.$router.push({
          path: '',
          query: {
            search: search
          }
        });
        this.$store.commit('products/FILTER_BY', {
          type: ['search'],
          data: search
        });
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['all'],
          data: ''
        });
      }
      this.currentPage = 1;
    },
    setURlTag(id, name) {
      if (this.$store.state.products.type[0] == 'tag') {
        this.$router.push({
          path: '',
          query: {}
        });
        this.$router.push({
          path: '',
          query: {
            tagId: id,
            tagName: name
          }
        });
      }
    }
  }
});

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
  add("41fe4fc2", content, true, context)
};

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/template6/index_macrobrand.vue?vue&type=template&id=6e75e806&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "home",
    style: this.$store.state.settingByTemplate && this.$store.state.settingByTemplate['--background_color_1'] ? this.$store.state.settingByTemplate : this.settingBase
  }, [_vm._ssrNode("<div" + _vm._ssrStyle(null, {
    '--font-style': this.settingByTemplate && this.settingByTemplate.settings && this.settingByTemplate.settings.tipo_letra ? this.settingByTemplate.settings.tipo_letra : 'Roboto'
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"space-search\"></div> "), _vm._ssrNode("<div id=\"navbar\" class=\"search-movil\">", "</div>", [_vm._ssrNode("<form id=\"demo-1\" style=\"width: 100%; position: relative\">", "</form>", [_c('search-icon', {
    staticClass: "icon-search-tp"
  }), _vm._ssrNode(" <input type=\"search\"" + _vm._ssrAttr("placeholder", _vm.$t('header_search')) + " id=\"SearchIndexTemplate\"" + _vm._ssrAttr("value", _vm.search) + ">")], 2)]), _vm._ssrNode(" "), this.stateBanner ? _c('kBanner') : _vm._e(), _vm._ssrNode(" "), _vm.dataStore.tienda.id_tienda == 1100 ? _c('kBannerMacrobrand') : _vm._e(), _vm._ssrNode(" "), this.stateBanner ? _c('KProductFavoritos') : _vm._e(), _vm._ssrNode(" "), _c('KProductList', {
    attrs: {
      "dataStore": _vm.dataStore,
      "fullProducts": _vm.fullProducts
    }
  }), _vm._ssrNode(" "), _vm.dataStore.tienda.id_tienda == 1100 ? _c('kContentMacrobrand') : _vm._e(), _vm._ssrNode(" "), _c('kBannerFooter')], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/template6/index_macrobrand.vue?vue&type=template&id=6e75e806&

// EXTERNAL MODULE: ./components/template5/ko-Banner-1.vue + 4 modules
var ko_Banner_1 = __webpack_require__(460);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template6/ko-Banner-macrobrand.vue?vue&type=template&id=6231a394&scoped=true&
var ko_Banner_macrobrandvue_type_template_id_6231a394_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-banner"
  }, [_vm._ssrNode("<div class=\"header-content-logo\" data-v-6231a394>", "</div>", [_vm._ssrNode("<div class=\"wrapper-banner\" data-v-6231a394>", "</div>", [_c('KoSwipper', {
    attrs: {
      "products": _vm.data
    }
  })], 1)])]);
};
var ko_Banner_macrobrandvue_type_template_id_6231a394_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template6/ko-Banner-macrobrand.vue?vue&type=template&id=6231a394&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template6/bannerMacrobrad/productslideBanner.vue?vue&type=template&id=50edb4f6&scoped=true&
var productslideBannervue_type_template_id_50edb4f6_scoped_true_render = function render() {
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
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-50edb4f6>" + _vm._ssrList(this.products, function (product, index) {
    return "<div class=\"swiper-slide\" data-v-50edb4f6><img" + _vm._ssrAttr("src", product.photo) + " alt=\"Banner tienda\" class=\"banner\" data-v-50edb4f6></div>";
  }) + "</div> <div slot=\"pagination\" class=\"swiper-pagination\" data-v-50edb4f6></div>")]);
};
var productslideBannervue_type_template_id_50edb4f6_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template6/bannerMacrobrad/productslideBanner.vue?vue&type=template&id=50edb4f6&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template6/bannerMacrobrad/productslideBanner.vue?vue&type=script&lang=js&
/* harmony default export */ var productslideBannervue_type_script_lang_js_ = ({
  name: 'productSlide-productFavorito',
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
        grabCursor: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
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
      this.swiper.slidePrev(800, false);
    }
  }
});
// CONCATENATED MODULE: ./components/template6/bannerMacrobrad/productslideBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var bannerMacrobrad_productslideBannervue_type_script_lang_js_ = (productslideBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template6/bannerMacrobrad/productslideBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(506)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bannerMacrobrad_productslideBannervue_type_script_lang_js_,
  productslideBannervue_type_template_id_50edb4f6_scoped_true_render,
  productslideBannervue_type_template_id_50edb4f6_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "50edb4f6",
  "9cf1f082"
  
)

/* harmony default export */ var productslideBanner = (component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template6/ko-Banner-macrobrand.vue?vue&type=script&lang=js&
// import idCloudinary from '../../mixins/idCloudinary'

/* harmony default export */ var ko_Banner_macrobrandvue_type_script_lang_js_ = ({
  // mixins: [idCloudinary],
  name: 'Ko-Banner-macrobrand',
  components: {
    KoSwipper: productslideBanner
  },
  data() {
    return {
      data: [{
        photo: 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,q_auto:best,f_auto/v1633014185/macroband/banner_03_lzwcca.png'
      }, {
        photo: 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,q_auto:best,f_auto/v1609802297/macroband/banner_02_lmmyse.png'
      }, {
        photo: 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,q_auto:best,f_auto/v1609802301/macroband/banner_01_s55h4i.jpg'
      },
      // {
      //   photo:
      //     'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,q_auto:best,f_auto/v1602278801/macroband/banner_web_macrobrand_tn8kra.jpg',
      // },
      {
        photo: 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,q_auto:best,f_auto/v1609802299/macroband/banner_03_vfdrvs.png'
      }]
    };
  },
  setting: {
    type: Object,
    default: function () {
      return {
        name: ''
      };
    }
  }
});
// CONCATENATED MODULE: ./components/template6/ko-Banner-macrobrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var template6_ko_Banner_macrobrandvue_type_script_lang_js_ = (ko_Banner_macrobrandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template6/ko-Banner-macrobrand.vue



function ko_Banner_macrobrand_injectStyles (context) {
  
  var style0 = __webpack_require__(508)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ko_Banner_macrobrand_component = Object(componentNormalizer["a" /* default */])(
  template6_ko_Banner_macrobrandvue_type_script_lang_js_,
  ko_Banner_macrobrandvue_type_template_id_6231a394_scoped_true_render,
  ko_Banner_macrobrandvue_type_template_id_6231a394_scoped_true_staticRenderFns,
  false,
  ko_Banner_macrobrand_injectStyles,
  "6231a394",
  "f6dd700a"
  
)

/* harmony default export */ var ko_Banner_macrobrand = (ko_Banner_macrobrand_component.exports);
// EXTERNAL MODULE: ./components/template5/Ko-ProductFavoritos-1.vue + 4 modules
var Ko_ProductFavoritos_1 = __webpack_require__(223);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template6/Ko-ProductList-2.vue?vue&type=template&id=8021eaac&scoped=true&
var Ko_ProductList_2vue_type_template_id_8021eaac_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productlist"
  }, [_vm._ssrNode("<div class=\"container-productlist\" data-v-8021eaac>", "</div>", [_vm._ssrNode((_vm.dataStore.tienda.id_tienda == 1100 ? "<div class=\"text-macrobrand\" data-v-8021eaac><p data-v-8021eaac>\n        Envíos gratis a nivel nacional en compras superiores a $100.000 - Pago\n        seguro - Tiempo de entrega 10 días hábiles.\n      </p></div>" : "<!---->") + " <div class=\"content-items-categorias-text\" data-v-8021eaac><p class=\"text-categorias\" data-v-8021eaac>Catálogo</p> " + (this.nameCategoryHeader ? "<p class=\"text-categorias-select\" data-v-8021eaac>" + _vm._ssrEscape("\n        > " + _vm._s(this.nameCategoryHeader) + "\n      ") + "</p>" : "<!---->") + " " + (this.nameSubCategoryHeader ? "<p class=\"text-categorias-select\" data-v-8021eaac>" + _vm._ssrEscape("\n        > " + _vm._s(this.nameSubCategoryHeader) + "\n      ") + "</p>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"content-item\" data-v-8021eaac>", "</div>", [_vm._ssrNode("<div class=\"wrapper-filter\" data-v-8021eaac>", "</div>", _vm._l(_vm.categorias, function (categoria) {
    return _vm._ssrNode("<div class=\"content-categoria\" data-v-8021eaac>", "</div>", [_c('BaseAccordian', {
      scopedSlots: _vm._u([{
        key: "categorias",
        fn: function () {
          return [_c('li', {
            staticClass: "text-categoria",
            class: categoria.id == _vm.indexSelect ? 'text-categoria-active' : '',
            on: {
              "click": function ($event) {
                _vm.sendCategory(categoria, categoria.id, _vm.index, _vm.ref = false);
              }
            }
          }, [_vm._v("\n                " + _vm._s(categoria.nombre_categoria_producto) + "\n              ")])];
        },
        proxy: true
      }, {
        key: "subcategorias",
        fn: function () {
          return [_vm._l(_vm.subcategories, function (subcategory, key) {
            return _c('div', {
              key: key
            }, [subcategory.categoria == categoria.id ? _c('li', {
              staticClass: "text-subcategoria",
              class: subcategory.id == _vm.indexSelect2 ? 'text-subcategoria-active' : '',
              on: {
                "click": function ($event) {
                  return _vm.SendSubCategory(subcategory.id);
                }
              }
            }, [_vm._v("\n                    " + _vm._s(subcategory.nombre_subcategoria) + "\n                  ")]) : _vm._e()]);
          })];
        },
        proxy: true
      }], null, true)
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-item-productos\" data-v-8021eaac>", "</div>", [_vm._ssrNode("<div class=\"grid-products\" data-v-8021eaac>", "</div>", _vm._l(_vm.filterProduct, function (product) {
    return _vm._ssrNode("<div class=\"content-products\" data-v-8021eaac>", "</div>", [_c('KoProductCard1', {
      attrs: {
        "product": product
      }
    })], 1);
  }), 0), _vm._ssrNode(" " + (this.fullProducts.length == 0 ? "<div class=\"content-products-empty\" data-v-8021eaac><p data-v-8021eaac>No se encontraron productos relacionados.</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-8021eaac>", "</div>", [_vm.fullProducts.length > 24 ? _vm._ssrNode("<div class=\"product_pagination\" data-v-8021eaac>", "</div>", [_c('el-pagination', {
    staticClass: "pagination",
    attrs: {
      "background": "",
      "layout": "prev, pager, next",
      "total": _vm.fullProducts.length,
      "page-size": 24,
      "current-page": _vm.currentPage
    },
    on: {
      "update:currentPage": function ($event) {
        _vm.currentPage = $event;
      },
      "update:current-page": function ($event) {
        _vm.currentPage = $event;
      }
    }
  })], 1) : _vm._e()])], 2)], 2)], 2)]);
};
var Ko_ProductList_2vue_type_template_id_8021eaac_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template6/Ko-ProductList-2.vue?vue&type=template&id=8021eaac&scoped=true&

// EXTERNAL MODULE: ./components/template5/_productcard/Ko-ProductCard-1.vue + 4 modules
var Ko_ProductCard_1 = __webpack_require__(109);

// EXTERNAL MODULE: ./components/headers/_order1/_AccordionList.vue + 4 modules
var _AccordionList = __webpack_require__(257);

// EXTERNAL MODULE: ./mixins/filterProducts.js
var filterProducts = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template6/Ko-ProductList-2.vue?vue&type=script&lang=js&



/* harmony default export */ var Ko_ProductList_2vue_type_script_lang_js_ = ({
  components: {
    KoProductCard1: Ko_ProductCard_1["a" /* default */],
    BaseAccordian: _AccordionList["a" /* default */]
  },
  props: {
    dataStore: Object,
    fullProducts: {}
  },
  mixins: [filterProducts["a" /* default */]],
  name: 'Ko-ProductList-1',
  mounted() {
    if (this.$route.query && this.$route.query.category) {
      this.sendCategoryUrlMix(this.$route.query.category);
    } else if (this.$route.query && this.$route.query.subcategory) {
      this.SendSubCategoryUrlMix(this.$route.query.subcategory, this.categorias, this.subcategories);
    } else if (this.$route.query && this.$route.query.tagId && this.$route.query.tagName) {
      this.sendTagUrlMix(this.$route.query.tagId, this.$route.query.tagName);
    } else if (this.$route.fullPath == '/') {
      this.allCategories();
    }
    if (this.previousPage) {
      this.currentPage = this.previousPage;
    }
    if (this.nameCategoryHeader && this.nameSubCategoryHeader == '') {
      this.$store.commit('SET_STATE_BANNER', false);
    } else if (this.nameCategoryHeader && this.nameSubCategoryHeader) {
      this.$store.commit('SET_STATE_BANNER', false);
    }
  },
  data() {
    return {
      search: '',
      productsCategory: [],
      price: [0, 1000000],
      range: {
        max: 0
      },
      currentPage: 1,
      sub: -1,
      show: false,
      value: '',
      valuesub: '',
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexCategory: 0,
      indexSelect: '',
      indexSelect2: ''
    };
  },
  computed: {
    categorias() {
      return this.dataStore.categorias;
    },
    subcategories() {
      return this.dataStore.subcategorias;
    },
    getProductsCategorie() {
      const initial = this.currentPage * 24 - 24;
      const final = initial + 24;
      return this.fullProducts.filter(product => product.categoria == this.select).slice(initial, final);
    },
    filterProduct() {
      const initial = this.currentPage * 24 - 24;
      const final = initial + 24;
      return this.fullProducts.slice(initial, final);
    },
    selectedCategory() {
      return this.$store.state.products.payload;
    },
    selectedType() {
      return this.$store.state.products.type;
    },
    heightHeader() {
      return this.$refs.header.offsetHeight;
    },
    nameCategoryHeader() {
      return this.$store.state.category_producto_header;
    },
    nameSubCategoryHeader() {
      return this.$store.state.subcategory_producto_header;
    },
    searchValue() {
      return this.$store.state.searchValue;
    },
    previousPage() {
      return this.$store.state.previousPage;
    }
  },
  methods: {
    SearchProduct2(search) {
      if (search.length) {
        this.$store.commit('products/FILTER_BY', {
          type: ['search'],
          data: search
        });
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['all'],
          data: ''
        });
      }
      this.currentPage = 1;
    },
    SendSubCategory(value) {
      this.indexSelect2 = value;
      this.selectSubcategory = value;
      let filtradoSubCategory = this.subcategories.find(element => element.id == value);
      let filtradoCategories = this.categorias.find(element => element.id == filtradoSubCategory.categoria);
      this.$store.commit('SET_CATEGORY_PRODUCTO', filtradoCategories.nombre_categoria_producto);
      this.nameSubCategory = filtradoSubCategory.nombre_subcategoria;
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', this.nameSubCategory);
      this.$store.commit('products/FILTER_BY', {
        type: ['subcategory'],
        data: value
      });
    },
    sendCategory(value, categoria, index, ref) {
      this.indexSelect = categoria;
      this.currentPage = 1;
      this.nameCategory = value.nombre_categoria_producto;
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory);
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.selectedSubcategories = [];
      this.subcategories.find(subcategory => {
        if (subcategory.categoria === categoria) {
          this.toggleCategories = false;
          this.selectedSubcategories.push(subcategory);
        }
      });
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto
      });
    },
    breadcrumbsSendCategory(value) {
      let filtradoCategories = this.categorias.find(element => {
        if (element.nombre_categoria_producto == value) {
          return element;
        }
      });
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: filtradoCategories.nombre_categoria_producto
      });
    },
    clear() {
      this.indexSelect = '';
      this.indexSelect2 = '';
      this.$store.commit('SET_STATE_BANNER', true);
      this.$store.commit('SET_CATEGORY_PRODUCTO', '');
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
      this.$emit('clear');
      this.nameCategory = '';
    }
  },
  watch: {
    search(value) {
      this.SearchProduct2(value);
    },
    currentPage() {
      this.$store.commit('SET_PREVIOUS_PAGE', this.currentPage);
      window.scrollBy(0, -3300);
    },
    previousPage() {
      if (this.previousPage) {
        this.currentPage = this.previousPage;
      }
    },
    nameCategoryHeader(value) {
      return value;
    },
    nameSubCategoryHeader(value) {
      return value;
    },
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      if (this.$route.query && this.$route.query.category) {
        this.sendCategoryUrlMix(this.$route.query.category);
      } else if (this.$route.query && this.$route.query.subcategory) {
        this.SendSubCategoryUrlMix(this.$route.query.subcategory, this.categorias, this.subcategories);
      } else if (this.$route.query && this.$route.query.tagId && this.$route.query.tagName) {
        this.sendTagUrlMix(this.$route.query.tagId, this.$route.query.tagName);
      } else if (this.$route.fullPath == '/') {
        this.allCategories();
      }
    },
    searchValue(value) {
      this.SearchProduct2(value);
    }
  }
});
// CONCATENATED MODULE: ./components/template6/Ko-ProductList-2.vue?vue&type=script&lang=js&
 /* harmony default export */ var template6_Ko_ProductList_2vue_type_script_lang_js_ = (Ko_ProductList_2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template6/Ko-ProductList-2.vue



function Ko_ProductList_2_injectStyles (context) {
  
  var style0 = __webpack_require__(510)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko_ProductList_2_component = Object(componentNormalizer["a" /* default */])(
  template6_Ko_ProductList_2vue_type_script_lang_js_,
  Ko_ProductList_2vue_type_template_id_8021eaac_scoped_true_render,
  Ko_ProductList_2vue_type_template_id_8021eaac_scoped_true_staticRenderFns,
  false,
  Ko_ProductList_2_injectStyles,
  "8021eaac",
  "27d8f4b1"
  
)

/* harmony default export */ var Ko_ProductList_2 = (Ko_ProductList_2_component.exports);
// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template6/Ko-Content-macrobrand.vue?vue&type=template&id=492ae75c&scoped=true&
var Ko_Content_macrobrandvue_type_template_id_492ae75c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-content"
  }, [_vm._ssrNode("<div class=\"container-content\" data-v-492ae75c><div class=\"item item_image\" data-v-492ae75c><img" + _vm._ssrAttr("src", _vm.setting.data[0].photo) + " data-v-492ae75c></div> <div class=\"item item_content\" data-v-492ae75c><div class=\"item texto\" data-v-492ae75c><div class=\"wrapper-text\" data-v-492ae75c><p class=\"text-titulo\" data-v-492ae75c>" + _vm._ssrEscape(_vm._s(_vm.setting.data[0].title_1)) + "</p> <p class=\"text-subtitulo\" data-v-492ae75c>" + _vm._ssrEscape(_vm._s(_vm.setting.data[0].description)) + "</p> <a" + _vm._ssrAttr("href", _vm.setting.data[0].redirect_url) + " data-v-492ae75c><button class=\"button\" data-v-492ae75c>" + _vm._ssrEscape("\n              " + _vm._s(_vm.setting.data[0].button_text) + "\n            ") + "</button></a></div></div></div> <div class=\"item item_content item_last\" data-v-492ae75c><div class=\"item texto\" data-v-492ae75c><div class=\"wrapper-text\" data-v-492ae75c><p class=\"text-titulo\" data-v-492ae75c>" + _vm._ssrEscape(_vm._s(_vm.setting.data[1].title_2)) + "</p> <p class=\"text-subtitulo\" data-v-492ae75c>" + _vm._ssrEscape(_vm._s(_vm.setting.data[1].description[0])) + "</p> <p class=\"text-subtitulo\" data-v-492ae75c>" + _vm._ssrEscape(_vm._s(_vm.setting.data[1].description[1])) + "</p> <p class=\"text-subtitulo\" data-v-492ae75c>" + _vm._ssrEscape(_vm._s(_vm.setting.data[1].description[2])) + "</p> <p class=\"text-subtitulo\" data-v-492ae75c>" + _vm._ssrEscape(_vm._s(_vm.setting.data[1].description[3])) + "</p> <a" + _vm._ssrAttr("href", _vm.setting.data[1].redirect_url) + " data-v-492ae75c><button class=\"button\" data-v-492ae75c>" + _vm._ssrEscape(_vm._s(_vm.setting.data[1].button_text)) + "</button></a></div></div></div> <div class=\"item item_image\" data-v-492ae75c><img" + _vm._ssrAttr("src", _vm.setting.data[1].photo) + " data-v-492ae75c></div></div>")]);
};
var Ko_Content_macrobrandvue_type_template_id_492ae75c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/template6/Ko-Content-macrobrand.vue?vue&type=template&id=492ae75c&scoped=true&

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template6/Ko-Content-macrobrand.vue?vue&type=script&lang=js&
/* harmony default export */ var Ko_Content_macrobrandvue_type_script_lang_js_ = ({
  name: 'Ko-Content-macrobrand',
  props: {
    dataStore: Object,
    setting: {
      type: Object,
      default: function () {
        return {
          name: '',
          data: [{
            title_1: 'Macrobrand',
            photo: 'https://res.cloudinary.com/komercia-store/image/upload/v1568416451/lcq1s1in57fepimxd6eq.png',
            description: 'Es una compañía dedicada a desarrollar estrategias para monetizar y elevar el valor de las marcas.',
            redirect_url: '/contacto',
            button_text: 'Contacto'
          }, {
            title_2: '¿Qué hace nuestra compañía?',
            photo: 'https://res.cloudinary.com/komercia-store/image/upload/v1568415336/q1cyx9muultgp4afbed3.png',
            description: ['-Estrategias de marketing digital.', '-Diagnóstico de experiencia de cliente.', '-Venta de producto en e-commerce.', '-Desarrollo de producto para monetizar marcas.'],
            redirect_url: '/contacto',
            button_text: 'Contacto'
          }]
        };
      }
    }
  },
  computed: {}
});
// CONCATENATED MODULE: ./components/template6/Ko-Content-macrobrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var template6_Ko_Content_macrobrandvue_type_script_lang_js_ = (Ko_Content_macrobrandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/template6/Ko-Content-macrobrand.vue



function Ko_Content_macrobrand_injectStyles (context) {
  
  var style0 = __webpack_require__(512)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Ko_Content_macrobrand_component = Object(componentNormalizer["a" /* default */])(
  template6_Ko_Content_macrobrandvue_type_script_lang_js_,
  Ko_Content_macrobrandvue_type_template_id_492ae75c_scoped_true_render,
  Ko_Content_macrobrandvue_type_template_id_492ae75c_scoped_true_staticRenderFns,
  false,
  Ko_Content_macrobrand_injectStyles,
  "492ae75c",
  "4eb35400"
  
)

/* harmony default export */ var Ko_Content_macrobrand = (Ko_Content_macrobrand_component.exports);
// EXTERNAL MODULE: ./components/template5/ko-BannerFooter-1.vue + 4 modules
var ko_BannerFooter_1 = __webpack_require__(461);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/template6/index_macrobrand.vue?vue&type=script&lang=js&






/* harmony default export */ var index_macrobrandvue_type_script_lang_js_ = ({
  layout: 'default',
  name: 'Ko-template6-m',
  components: {
    kBanner: ko_Banner_1["default"],
    KProductList: Ko_ProductList_2,
    KProductFavoritos: Ko_ProductFavoritos_1["default"],
    kBannerFooter: ko_BannerFooter_1["default"],
    kContentMacrobrand: Ko_Content_macrobrand,
    kBannerMacrobrand: ko_Banner_macrobrand
  },
  data() {
    return {
      search: ''
    };
  },
  computed: {
    template() {
      return this.$store.state.template;
    },
    dataStore() {
      return this.$store.state.dataStore;
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts'];
    },
    settingBase() {
      return this.$store.state.settingBase;
    },
    stateBanner() {
      return this.$store.state.stateBanner;
    },
    facebookPixel() {
      return this.$store.state.analytics_tagmanager;
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate;
    }
  },
  methods: {
    SearchProduct(search) {
      this.search = search;
      this.$store.commit('SET_SEARCH_VALUE', this.search);
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value;
        if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
          window.fbq('track', 'Search', {
            search_string: value
          });
        }
      } else {
        location.href = '?search=' + '';
      }
    }
  },
  watch: {
    search(value) {
      this.SearchProduct(value);
    }
  }
});
// CONCATENATED MODULE: ./pages/template6/index_macrobrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var template6_index_macrobrandvue_type_script_lang_js_ = (index_macrobrandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/template6/index_macrobrand.vue



function index_macrobrand_injectStyles (context) {
  
  var style0 = __webpack_require__(514)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var index_macrobrand_component = Object(componentNormalizer["a" /* default */])(
  template6_index_macrobrandvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  index_macrobrand_injectStyles,
  null,
  "0f61ecce"
  
)

/* harmony default export */ var index_macrobrand = __webpack_exports__["default"] = (index_macrobrand_component.exports);

/***/ })

};;
//# sourceMappingURL=index_macrobrand.js.map