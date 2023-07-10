exports.ids = [77];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/_productcard/Ko-ProductCard-1.vue?vue&type=template&id=ac8760aa&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-card"
  }, [_vm._ssrNode("<div id=\"product-card\" class=\"container-card\" data-v-ac8760aa>", "</div>", [_vm._ssrNode("<div class=\"wrapper\" data-v-ac8760aa>", "</div>", [_c('nuxt-link', {
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
  })], 1), _vm._ssrNode(" " + (this.product.tag_promocion == 1 && this.product.promocion_valor ? "<div data-v-ac8760aa><div class=\"overlay-top\" data-v-ac8760aa><div data-v-ac8760aa><p data-v-ac8760aa>" + _vm._ssrEscape(_vm._s(this.product.promocion_valor) + "% OFF") + "</p></div></div> <div class=\"overlay-free\" data-v-ac8760aa><p class=\"txt-free\" data-v-ac8760aa>" + _vm._ssrEscape(_vm._s(_vm.$t('home_pdescuento'))) + "</p></div> <div class=\"overlay-polygon\" data-v-ac8760aa><svg width=\"12px\" height=\"12px\" viewBox=\"0 0 255 255\" class=\"icon-overlay-free\" data-v-ac8760aa><polygon points=\"0,0 127.5,127.5 255,0\" data-v-ac8760aa></polygon></svg></div></div>" : "<!---->") + " <div class=\"separador-stats\" data-v-ac8760aa></div> "), _vm._ssrNode("<div class=\"stats\" data-v-ac8760aa>", "</div>", [_vm._ssrNode("<div class=\"stats-container\" data-v-ac8760aa>", "</div>", [_vm._ssrNode((_vm.soldOut ? "<p class=\"card-info-1\" data-v-ac8760aa>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_cardAgotado')) + "\n          ") + "</p>" : "<!---->") + " " + (!_vm.getFreeShipping ? "<p class=\"card-info-2\" data-v-ac8760aa>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('home_cardGratis')) + "\n          ") + "</p>" : "<!---->") + " <div class=\"content-name-product\" data-v-ac8760aa>" + (this.product.nombre.length >= 54 ? "<p class=\"card-title\" data-v-ac8760aa>" + _vm._ssrEscape("\n              " + _vm._s(`${this.product.nombre.slice(0, 54)}...`) + "\n            ") + "</p>" : "<p class=\"card-title\" data-v-ac8760aa>" + _vm._ssrEscape("\n              " + _vm._s(`${this.product.nombre.slice(0, 54)}`) + "\n            ") + "</p>") + "</div> " + (this.product.precio ? "<div class=\"content-text-price\" data-v-ac8760aa>" + (this.estadoCart == true && this.equalsPrice ? "<div data-v-ac8760aa>" + (this.minPrice ? "<p class=\"text-price\" data-v-ac8760aa>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p>" : "<!---->") + "</div>" : this.estadoCart == true && this.minPrice != this.maxPrice && !this.equalsPrice ? "<div class=\"content-price\" data-v-ac8760aa>" + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-ac8760aa>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</div>" : "<!---->") + " <p class=\"separator-price\" data-v-ac8760aa>-</p> " + (this.product.precio > 0 || this.product.precio ? "<div class=\"text-price\" data-v-ac8760aa>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</div>" : "<!---->") + "</div>" : "<div data-v-ac8760aa>" + (this.product.precio > 0 || this.product.precio ? "<p class=\"text-price\" data-v-ac8760aa>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p>" : "<!---->") + "</div>") + "</div>" : "<div class=\"content-price-empty\" data-v-ac8760aa></div>") + " "), _vm._ssrNode("<div class=\"wrapper-btn-icon\" data-v-ac8760aa>", "</div>", [_c('nuxt-link', {
    staticClass: "view_details",
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('home_cardvermas')))])]), _vm._ssrNode(" <div class=\"separador-btn\" data-v-ac8760aa></div> "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div id=\"add_cart\" data-v-ac8760aa>", "</div>", [_vm._ssrNode("<p style=\"height: 23px\" data-v-ac8760aa>", "</p>", [_c('cartArrowDown'), _vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.$t('home_cardAgregar')) + "\n              "))], 2)]) : _vm._e()], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-movil\" data-v-ac8760aa>", "</div>", [_c('nuxt-link', {
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
  }) : _vm._e()])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-card-items\" data-v-ac8760aa>", "</div>", [_vm._ssrNode((_vm.soldOut ? "<p class=\"card-info-1\" data-v-ac8760aa>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p>" : "<!---->") + " " + (!_vm.getFreeShipping ? "<p class=\"card-info-2\" data-v-ac8760aa>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('home_cardGratis')) + "\n        ") + "</p>" : "<!---->") + " "), _c('nuxt-link', {
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
  }, [_vm._v("\n            " + _vm._s(`${this.product.nombre.slice(0, 30)}`) + "\n          ")])]), _vm._ssrNode(" "), this.product.precio ? _vm._ssrNode("<div class=\"content-text-price\" data-v-ac8760aa>", "</div>", [_c('nuxt-link', {
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
  }, [_vm._v("\n                " + _vm._s(_vm._f("currency")(this.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ")]) : _vm._e()])]), _vm._ssrNode(" "), !this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div data-v-ac8760aa>", "</div>", [_c('cartArrowDown', {
    staticClass: "icon-cart",
    on: {
      "click": _vm.addShoppingCart
    }
  })], 1) : _vm._e()], 2) : _vm._ssrNode("<div class=\"separator-movil\" data-v-ac8760aa>", "</div>", [!this.estadoCart && !_vm.soldOut && !_vm.spent && (this.product.tipo_servicio == null || this.product.tipo_servicio == '0') ? _vm._ssrNode("<div data-v-ac8760aa>", "</div>", [_c('cartArrowDown', {
    on: {
      "click": _vm.addShoppingCart
    }
  })], 1) : _vm._e()])], 2)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/_productcard/Ko-ProductCard-1.vue?vue&type=template&id=ac8760aa&scoped=true&

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
                if (item.unidades) {
                  inventario += parseInt(item.unidades);
                }
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
  "ac8760aa",
  "5d59ce9d"
  
)

/* harmony default export */ var Ko_ProductCard_1 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_ac8760aa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_ac8760aa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_ac8760aa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_ac8760aa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_ac8760aa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-card[data-v-ac8760aa]{align-items:center;background:#fff;border:1px solid hsla(0,0%,95%,.637);border-radius:5px;box-shadow:0 1px 1px #e2e2e2;box-sizing:border-box;display:flex;justify-content:center;width:100%}.container-card[data-v-ac8760aa]{align-items:flex-start;border-radius:5px;flex-direction:column}.container-card[data-v-ac8760aa],.wrapper-image[data-v-ac8760aa]{display:flex;overflow:hidden;position:relative;width:100%}.wrapper-image[data-v-ac8760aa]{align-items:center;justify-content:center;max-height:300px;min-height:250px}.product-image[data-v-ac8760aa]{-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.notproduct-image[data-v-ac8760aa]{height:294px;max-height:294px;width:300px}.product-image-soldOut[data-v-ac8760aa]{filter:grayscale(100%);-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}.image_overlay[data-v-ac8760aa]{background:hsla(0,0%,41%,.165);height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}#product-card:hover .image_overlay[data-v-ac8760aa]{opacity:.7;transition:all .2s ease-out}.separador-stats[data-v-ac8760aa]{height:95px;width:100%}.stats-container[data-v-ac8760aa]{background:#fff;display:flex;flex-direction:column;height:120px;justify-content:space-between;left:0;padding:20px 12px 0;position:absolute;top:288px;transition:all .2s ease-out;width:100%}#product-card:hover .stats-container[data-v-ac8760aa]{top:241px;transition:all .2s ease-out}.card-info-1[data-v-ac8760aa]{background:#e71f77;color:#fff;top:-44px}.card-info-1[data-v-ac8760aa],.card-info-2[data-v-ac8760aa]{align-items:center;border-radius:var(--radius_btn);display:flex;font-size:12px;justify-content:center;padding:1px 4px;position:absolute;right:0;z-index:2}.card-info-2[data-v-ac8760aa]{background:#35dd8d;color:#000;font-weight:700;top:-22px}.content-name-product[data-v-ac8760aa]{align-items:flex-start;display:flex;justify-content:center;min-height:36px;text-align:center;width:100%}.card-title[data-v-ac8760aa]{color:#3f3f3f;font-size:15px;font-weight:500}.content-text-price[data-v-ac8760aa]{margin-top:5px;width:100%}.content-price[data-v-ac8760aa],.content-text-price[data-v-ac8760aa]{align-items:center;display:flex;justify-content:center}.content-price[data-v-ac8760aa]{flex-direction:row;max-height:29px;min-height:29px}.content-price-empty[data-v-ac8760aa]{margin-top:5px;max-height:29px;min-height:29px;width:100%}.text-price[data-v-ac8760aa]{color:#464646;font-size:20px;font-weight:500;line-height:1.4;text-align:center}.separator-price[data-v-ac8760aa]{color:#464646;margin-left:5px;margin-right:5px}.wrapper-btn-icon[data-v-ac8760aa]{flex-direction:row;width:100%}#add_cart[data-v-ac8760aa],.wrapper-btn-icon[data-v-ac8760aa]{align-items:center;display:flex;justify-content:center}#add_cart[data-v-ac8760aa]{background-color:var(--color_background_btn);border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_text_btn);font-size:19px;font-weight:700;height:41px;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}#add_cart[data-v-ac8760aa]:hover{background-color:var(--btnhover);border:2px solid var(--btnhover);cursor:pointer}#product-card:hover #add_cart[data-v-ac8760aa]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.view_details[data-v-ac8760aa]{align-items:center;background-color:transparent;border:2px solid var(--color_background_btn);border-radius:var(--radius_btn);color:var(--color_background_btn);display:flex;font-size:19px;font-weight:700;height:41px;justify-content:center;opacity:0;padding:10px 0;text-align:center;text-transform:uppercase;transition:all .2s ease-out;width:130px}.view_details[data-v-ac8760aa]:hover{border:2px solid var(--btnhover);color:var(--btnhover);cursor:pointer}#product-card:hover .view_details[data-v-ac8760aa]{font-size:15px;opacity:1;transition:all .2s ease-out;width:152px}.separador-btn[data-v-ac8760aa]{width:5px}.wrapper[data-v-ac8760aa]{display:inline;display:initial;width:100%}.wrapper-movil[data-v-ac8760aa]{display:none}.card-icon-cart-movil[data-v-ac8760aa]:hover{color:var(--btnhover)}.overlay-top[data-v-ac8760aa]{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background:#fff;border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:#35dd8d;font-size:13px;height:29px;left:100%;overflow:hidden;padding:5px;position:absolute;right:0;top:43px;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:0}#product-card:hover .overlay-top[data-v-ac8760aa]{left:75%;width:67px}.overlay-free[data-v-ac8760aa]{background-color:#35dd8d;border-radius:.25rem;color:#fff;height:35px;left:100%;overflow:hidden;position:absolute;right:0;text-align:center;top:0;transition:.5s ease;width:0}.txt-free[data-v-ac8760aa]{font-size:13px;line-height:12px;margin-top:5px}#product-card:hover .overlay-free[data-v-ac8760aa]{left:55%;transition-delay:.7s;width:125px}.overlay-polygon[data-v-ac8760aa]{fill:#35dd8d;background-color:transparent;height:5%;left:100%;overflow:hidden;position:absolute;right:0;top:35px;width:0}#product-card:hover .overlay-polygon[data-v-ac8760aa]{left:90%;transition-delay:.95s;width:5%}@media (max-width:1270px){.separador-stats[data-v-ac8760aa]{height:105px}}@media (max-width:1249px){.separador-stats[data-v-ac8760aa]{height:98px}}@media (max-width:768px){.wrapper[data-v-ac8760aa]{display:none}.wrapper-movil[data-v-ac8760aa]{display:inline;display:initial;width:100%}.content-card-items[data-v-ac8760aa]{align-items:center;display:flex;flex-direction:column;height:75px;justify-content:space-between;padding:5px 10px;position:relative;width:100%}.card-title[data-v-ac8760aa]{font-size:13px}.content-text-price[data-v-ac8760aa]{margin-top:0}.text-price[data-v-ac8760aa]{font-size:15px}.icon-cart[data-v-ac8760aa]{margin-left:20px}.card-info-1[data-v-ac8760aa]{font-size:10px;top:-43px}.card-info-2[data-v-ac8760aa]{font-size:10px;top:-22px}.notproduct-image-res[data-v-ac8760aa]{height:357px;max-height:357px;width:100%}}@media (max-width:450px){.notproduct-image-res[data-v-ac8760aa]{height:170px;max-height:170px}.container-card[data-v-ac8760aa]{max-width:200px;width:100%}.wrapper-image[data-v-ac8760aa]{min-height:170px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0ec59554", content, true, context)
};

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_1_vue_vue_type_style_index_0_id_1e9fbf19_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_1_vue_vue_type_style_index_0_id_1e9fbf19_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_1_vue_vue_type_style_index_0_id_1e9fbf19_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_1_vue_vue_type_style_index_0_id_1e9fbf19_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductList_1_vue_vue_type_style_index_0_id_1e9fbf19_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-productlist[data-v-1e9fbf19]{align-items:center;background:var(--background_color_2);box-sizing:border-box}.container-productlist[data-v-1e9fbf19],.wrapper-productlist[data-v-1e9fbf19]{display:flex;justify-content:center;width:100%}.container-productlist[data-v-1e9fbf19]{flex-direction:column;max-width:1300px;padding:0 20px}.content-title[data-v-1e9fbf19]{align-items:center;display:flex;justify-content:center;width:100%}.title[data-v-1e9fbf19]{color:var(--color_text);font-size:38px;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:-.4px;line-height:1.24;margin-bottom:10px;margin-top:10px}.content-item-top[data-v-1e9fbf19]{width:100%}.content-item[data-v-1e9fbf19],.content-item-top[data-v-1e9fbf19]{display:flex;flex-direction:row;justify-content:space-between}.content-item[data-v-1e9fbf19]{align-items:center;margin-bottom:40px}.content-item>div[data-v-1e9fbf19]:first-child{flex:1}.content-item>div[data-v-1e9fbf19]:nth-child(2){flex:2}.content-filtrar[data-v-1e9fbf19]{display:flex;flex-direction:row}.dropbtn[data-v-1e9fbf19]{align-self:flex-end;background:transparent;color:var(--color_subtext);cursor:pointer;font-size:16px;font-weight:700;line-height:1.4;margin-right:2px}.content-items-categorias[data-v-1e9fbf19]{align-items:center;justify-content:space-between;margin-bottom:20px}.content-items-categorias[data-v-1e9fbf19],.content-items-categorias-text[data-v-1e9fbf19]{display:flex;flex-direction:row}.text-categorias[data-v-1e9fbf19]{font-size:18px}.text-categorias[data-v-1e9fbf19],.text-categorias-select[data-v-1e9fbf19]{align-self:flex-start;background:transparent;color:var(--color_subtext);cursor:pointer;display:flex;font-weight:700;line-height:1.4;margin-right:2px}.text-categorias-select[data-v-1e9fbf19]{font-size:16px;margin-left:5px;margin-top:2px;opacity:.6}.dropdown-content[data-v-1e9fbf19]{background-color:#fff;border-radius:10px;box-shadow:0 8px 20px 1px rgba(0,0,0,.2);display:none;position:absolute;z-index:2}.dropdown:hover .dropdown-content[data-v-1e9fbf19]{display:block}.content-item-catalogo[data-v-1e9fbf19]{align-self:baseline;background-color:var(--background_color_2);border-radius:10px;display:flex;max-width:205px;padding-bottom:10px;padding-top:10px;width:100%}.a-container[data-v-1e9fbf19]{align-items:center;color:var(--color_subtext);display:block;font-size:16px;font-weight:700;justify-content:center;position:relative;transition:all .2s ease;width:205px}.a-container[data-v-1e9fbf19],.item-categoria[data-v-1e9fbf19]{background-color:var(--background_color_2);cursor:pointer}.item-categoria[data-v-1e9fbf19]{padding:0 10px 0 20px}.item-categoria-active[data-v-1e9fbf19],.item-categoria[data-v-1e9fbf19]:hover{background:var(--color_background_hover);color:var(--color_hover_text)}.content-item-subcategorie[data-v-1e9fbf19]{background:var(--color_background_hover);padding-left:40px;padding-right:10px}.item-subcategorie[data-v-1e9fbf19]{cursor:pointer;font-size:13px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.item-subcategorie-active[data-v-1e9fbf19],.item-subcategorie[data-v-1e9fbf19]:hover{background:var(--color_background_hover);color:var(--color_hover_text)}.content-item-productos[data-v-1e9fbf19]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.grid-products[data-v-1e9fbf19]{grid-column-gap:25px;grid-row-gap:30px;box-sizing:border-box;display:grid;grid-template-columns:repeat(4,minmax(250px,2fr));margin:0 auto;width:100%}.content-products-empty[data-v-1e9fbf19]{align-items:center;display:flex;justify-content:center;min-height:200px;text-align:center;width:100%}.content-products-empty p[data-v-1e9fbf19]{color:var(--color_subtext);font-size:18px;font-weight:700;opacity:.6}.top-right[data-v-1e9fbf19]{display:none}.header-icon-menu[data-v-1e9fbf19]{color:var(--color_subtext);cursor:pointer;font-size:30px}.header-icon-close[data-v-1e9fbf19]{color:rgba(21,20,57,.808);font-size:30px;margin-left:22px}.top-input-search[data-v-1e9fbf19]{align-content:start;display:grid;justify-content:flex-end;position:relative}.top-input-search input[data-v-1e9fbf19]{background-color:transparent;border:2px solid #afafaf;border-radius:var(--radius_btn);box-sizing:border-box;color:var(--color_subtext);font-size:14px;padding:10px 35px 10px 15px;width:100%}.top-input-search input[data-v-1e9fbf19]::-moz-placeholder{color:var(--color_subtext);opacity:.7}.top-input-search input[data-v-1e9fbf19]::placeholder{color:var(--color_subtext);opacity:.7}.top-input-search input[data-v-1e9fbf19]:active,.top-input-search input[data-v-1e9fbf19]:focus{border:2px solid var(--color_border_btn);border-radius:var(--radius_btn);outline:0}.top-input-search i.icon-search[data-v-1e9fbf19]{color:var(--color_subtext);font-weight:700;position:absolute;right:15px;top:9px;z-index:2}.top-input-search .response[data-v-1e9fbf19]{background-color:transparent;border:2px solid #d8d8d8;border-radius:var(--radius_btn);box-sizing:border-box;color:var(--color_subtext);font-size:12px;height:28px;justify-self:start;line-height:26px;padding:0 10px;white-space:nowrap}.pagination-medium[data-v-1e9fbf19]{background:transparent;display:inline;display:initial;margin-top:20px}.pagination-small[data-v-1e9fbf19]{display:none}.pagination[data-v-1e9fbf19]{background:transparent;color:var(--color_text);font-size:18px}.product_pagination[data-v-1e9fbf19] .el-pagination.is-background .btn-next,.product_pagination[data-v-1e9fbf19] .el-pagination.is-background .btn-prev,.product_pagination[data-v-1e9fbf19] .el-pagination.is-background .el-pager li{background-color:transparent;color:var(--color_text)}.product_pagination[data-v-1e9fbf19] .el-pagination.is-background .btn-next:hover,.product_pagination[data-v-1e9fbf19] .el-pagination.is-background .btn-prev:hover,.product_pagination[data-v-1e9fbf19] .el-pagination.is-background .el-pager li:not(.disabled):hover{color:var(--btnhover)}.product_pagination[data-v-1e9fbf19] .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:var(--color_icon);color:#fff}@media (max-width:1290px){.grid-products[data-v-1e9fbf19]{grid-column-gap:15px;grid-row-gap:30px;grid-template-columns:repeat(4,minmax(240px,2fr))}}@media (max-width:1265px){.grid-products[data-v-1e9fbf19]{grid-column-gap:10px;grid-row-gap:30px;grid-template-columns:repeat(4,minmax(240px,2fr))}}@media (max-width:1250px){.grid-products[data-v-1e9fbf19]{grid-column-gap:25px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(250px,2fr))}}@media (max-width:1060px){.grid-products[data-v-1e9fbf19]{grid-column-gap:20px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(250px,2fr))}}@media (max-width:1050px){.grid-products[data-v-1e9fbf19]{grid-column-gap:20px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(240px,2fr))}}@media (max-width:1020px){.grid-products[data-v-1e9fbf19]{grid-column-gap:15px;grid-row-gap:30px;grid-template-columns:repeat(3,minmax(240px,2fr))}}@media (max-width:1010px){.grid-products[data-v-1e9fbf19]{grid-column-gap:10px;grid-template-columns:repeat(3,minmax(240px,2fr))}}@media (max-width:1000px){.grid-products[data-v-1e9fbf19]{grid-column-gap:25px;grid-row-gap:30px;grid-template-columns:repeat(2,minmax(250px,2fr))}}@media (max-width:790px){.grid-products[data-v-1e9fbf19]{grid-column-gap:20px;grid-row-gap:30px;grid-template-columns:repeat(2,minmax(250px,2fr))}}@media (max-width:780px){.grid-products[data-v-1e9fbf19]{grid-column-gap:16px;grid-row-gap:30px;grid-template-columns:repeat(2,minmax(250px,2fr))}}@media (max-width:775px){.grid-products[data-v-1e9fbf19]{grid-column-gap:20px;grid-row-gap:20px;grid-template-columns:repeat(2,minmax(250px,2fr))}}@media (max-width:770px){.container-productlist[data-v-1e9fbf19]{padding:0}.content-item-productos[data-v-1e9fbf19]{padding:15px}.title[data-v-1e9fbf19]{font-size:25px;margin-top:20px}.grid-products[data-v-1e9fbf19]{grid-template-columns:repeat(2,minmax(10px,2fr))}.dropbtn[data-v-1e9fbf19]{margin-left:5px}.text-categorias[data-v-1e9fbf19]{padding:0 10px}.content-title[data-v-1e9fbf19]{padding:0 15px}}@media (max-width:700px){.content-items-categorias[data-v-1e9fbf19]{margin-bottom:0;margin-left:5px}}@media (max-width:450px){.grid-products[data-v-1e9fbf19]{grid-template-columns:repeat(2,minmax(160px,1fr))}.content-item-productos[data-v-1e9fbf19]{padding:5px}.pagination-medium[data-v-1e9fbf19]{display:none}.pagination-small[data-v-1e9fbf19]{background:transparent;display:inline;display:initial;margin-top:20px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko-ProductList-1.vue?vue&type=template&id=1e9fbf19&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productlist"
  }, [_vm._ssrNode("<div class=\"container-productlist\" data-v-1e9fbf19>", "</div>", [_vm._ssrNode("<div class=\"content-title\" data-v-1e9fbf19></div> <br data-v-1e9fbf19> <div class=\"content-items-categorias\" data-v-1e9fbf19><div class=\"content-items-categorias-text\" data-v-1e9fbf19><p class=\"text-categorias\" data-v-1e9fbf19>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('home_catalogo')) + "\n        ") + "</p> " + (this.nameCategoryHeader ? "<p class=\"text-categorias-select\" data-v-1e9fbf19>" + _vm._ssrEscape("\n          > " + _vm._s(this.nameCategoryHeader) + "\n        ") + "</p>" : "<!---->") + " " + (this.nameSubCategoryHeader ? "<p class=\"text-categorias-select\" data-v-1e9fbf19>" + _vm._ssrEscape("\n          > " + _vm._s(this.nameSubCategoryHeader) + "\n        ") + "</p>" : "<!---->") + "</div></div> "), _vm._ssrNode("<div class=\"content-item\" data-v-1e9fbf19>", "</div>", [_vm._ssrNode("<div class=\"content-item-productos\" data-v-1e9fbf19>", "</div>", [_vm._ssrNode("<div class=\"grid-products\" data-v-1e9fbf19>", "</div>", _vm._l(_vm.filterProduct, function (product) {
    return _vm._ssrNode("<div class=\"content-products\" data-v-1e9fbf19>", "</div>", [_c('KoProductCard1', {
      attrs: {
        "product": product
      }
    })], 1);
  }), 0), _vm._ssrNode(" " + (this.fullProducts.length == 0 ? "<div class=\"content-products-empty\" data-v-1e9fbf19><p data-v-1e9fbf19>" + _vm._ssrEscape(_vm._s(_vm.$t('home_msgCatalogo'))) + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"pagination-medium\" data-v-1e9fbf19>", "</div>", [_vm.fullProducts.length > 16 ? _vm._ssrNode("<div class=\"product_pagination\" data-v-1e9fbf19>", "</div>", [_c('el-pagination', {
    staticClass: "pagination",
    attrs: {
      "background": "",
      "layout": "prev, pager, next",
      "total": _vm.fullProducts.length,
      "page-size": 16,
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
  })], 1) : _vm._e()]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination-small\" data-v-1e9fbf19>", "</div>", [_vm.fullProducts.length > 16 ? _vm._ssrNode("<div class=\"product_pagination\" data-v-1e9fbf19>", "</div>", [_c('el-pagination', {
    staticClass: "pagination",
    attrs: {
      "background": "",
      "small": "",
      "layout": "prev, pager, next",
      "total": _vm.fullProducts.length,
      "page-size": 16,
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
  })], 1) : _vm._e()])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template5/Ko-ProductList-1.vue?vue&type=template&id=1e9fbf19&scoped=true&

// EXTERNAL MODULE: ./components/template5/_productcard/Ko-ProductCard-1.vue + 4 modules
var Ko_ProductCard_1 = __webpack_require__(109);

// EXTERNAL MODULE: ./mixins/filterProducts.js
var filterProducts = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template5/Ko-ProductList-1.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko_ProductList_1vue_type_script_lang_js_ = ({
  components: {
    KoProductCard1: Ko_ProductCard_1["a" /* default */]
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
      currentPage: 1,
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
      const initial = this.currentPage * 16 - 16;
      const final = initial + 16;
      return this.fullProducts.filter(product => product.categoria == this.select).slice(initial, final);
    },
    filterProduct() {
      const initial = this.currentPage * 16 - 16;
      const final = initial + 16;
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
    SendSubCategory(value) {
      this.indexSelect2 = value;
      this.selectSubcategory = value;
      let filtradoCategory = this.subcategories.find(element => element.id == value);
      this.nameSubCategory = filtradoCategory.nombre_subcategoria;
      this.$store.commit('products/FILTER_BY', {
        type: ['subcategory'],
        data: value
      });
    },
    sendCategory(value, categoria, index, ref) {
      this.indexSelect = index;
      this.currentPage = 1;
      this.nameCategory = value.nombre_categoria_producto;
      this.indexCategory = index;
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
      this.$router.push({
        path: '',
        query: {
          category: filtradoCategories.nombre_categoria_producto
        }
      });
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: filtradoCategories.nombre_categoria_producto
      });
    },
    clear() {
      this.$store.commit('SET_STATE_BANNER', true);
      this.$store.commit('SET_CATEGORY_PRODUCTO', '');
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '');
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: ''
      });
      this.$router.push({
        path: '',
        query: ''
      });
      this.$emit('clear');
      this.nameCategory = '';
    },
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
    }
  },
  watch: {
    searchValue(value) {
      this.SearchProduct2(value);
    },
    currentPage() {
      this.$store.commit('SET_PREVIOUS_PAGE', this.currentPage);
      let timerTimeout = null;
      timerTimeout = setTimeout(() => {
        timerTimeout = null;
        window.scrollBy(0, -1500);
      }, 250);
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
    }
  }
});
// CONCATENATED MODULE: ./components/template5/Ko-ProductList-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var template5_Ko_ProductList_1vue_type_script_lang_js_ = (Ko_ProductList_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template5/Ko-ProductList-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(228)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template5_Ko_ProductList_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1e9fbf19",
  "bd75bade"
  
)

/* harmony default export */ var Ko_ProductList_1 = __webpack_exports__["default"] = (component.exports);

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
  add("58421daa", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=77.js.map