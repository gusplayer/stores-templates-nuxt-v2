exports.ids = [126];
exports.modules = {

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/Ko-ProductDetail.vue?vue&type=template&id=e0b2fe04&scoped=true&
var render = function render() {
  var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productDetail",
    style: [_vm.settingByTemplate9[0].detailsProduct, _vm.settingByTemplate9[0].setting9General]
  }, [_vm.loading ? _vm._ssrNode("<div class=\"container-productDetail-loading\" data-v-e0b2fe04>", "</div>") : _vm._ssrNode("<div class=\"container-productDetail\"" + _vm._ssrStyle(null, [{
    '--font-style-2': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate9[0]) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.setting9General) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.fount_2) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Roboto'
  }], null) + " data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-e0b2fe04>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"txt-crumb\" data-v-e0b2fe04>/</p> <p class=\"txt-crumb s2\" data-v-e0b2fe04>" + _vm._ssrEscape(_vm._s(_vm.data.detalle.nombre)) + "</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"product-content\" data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<div class=\"left\" data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<div class=\"content-images\" data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<div class=\"main-images\" data-v-e0b2fe04>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryQuality(_vm.data.detalle.foto_cloudinary, 850, 850),
      expression: "\n                idCloudinaryQuality(data.detalle.foto_cloudinary, 850, 850)\n              "
    }],
    staticClass: "img-list",
    attrs: {
      "alt": "Product Img"
    }
  }, [])]), _vm._ssrNode(" "), _vm._l(_vm.data.fotos, function (foto, itemsfoto) {
    return _vm._ssrNode("<div class=\"aditional-images\" data-v-e0b2fe04>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinaryQuality(foto.foto_cloudinary, 850, 850),
        expression: "idCloudinaryQuality(foto.foto_cloudinary, 850, 850)"
      }],
      staticClass: "img-list",
      attrs: {
        "alt": "Product Img"
      }
    }, [])]);
  }), _vm._ssrNode(" <div class=\"youtuve-video\" data-v-e0b2fe04><iframe" + _vm._ssrAttr("src", `https://www.youtube.com/embed/${_vm.idYoutube}?rel=0&controls=0&showinfo=0`) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\" class=\"video\"" + _vm._ssrStyle(null, null, {
    display: _vm.idYoutube ? '' : 'none'
  }) + " data-v-e0b2fe04></iframe></div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"right\" data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<div class=\"content-items-right\" data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<div class=\"content-category\" data-v-e0b2fe04><p class=\"text-category\" data-v-e0b2fe04>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.detalle.categoria_producto.nombre_categoria_producto) + "\n            ") + "</p></div> <div class=\"content-name\" data-v-e0b2fe04><p class=\"text-name\" data-v-e0b2fe04>" + _vm._ssrEscape(_vm._s(_vm.data.detalle.nombre)) + "</p></div> <div class=\"content-price\" data-v-e0b2fe04><p class=\"text-price-promo\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-e0b2fe04>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor ? Math.trunc(_vm.salesData.precio / (1 - _vm.data.info.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p> <p class=\"text-numero-promo\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-e0b2fe04>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.info.promocion_valor) + "% OFF\n            ") + "</p> <p class=\"text-price\"" + _vm._ssrStyle(null, null, {
    display: _vm.salesData.precio ? '' : 'none'
  }) + " data-v-e0b2fe04>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.salesData.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p> " + (_vm.salesData.unidades > 0 ? "<p class=\"text-stock\" data-v-e0b2fe04>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_stock')) + "\n            ") + "</p>" : "<!---->") + "</div> " + (_vm.data.info.descripcion_corta ? "<div class=\"flex flex-col mb-10 items-start\" data-v-e0b2fe04><p class=\"text-variant\" data-v-e0b2fe04>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_informacion'))) + "</p> <p class=\"text-option2\" data-v-e0b2fe04>" + _vm._ssrEscape(_vm._s(_vm.data.info.descripcion_corta)) + "</p></div>" : "<!---->") + " "), this.data.detalle.con_variante > 0 ? _vm._ssrNode("<div class=\"content-variant\" data-v-e0b2fe04>", "</div>", _vm._l(_vm.data.variantes, function (variant, index) {
    return _vm._ssrNode("<div data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<label for=\"variant name\" class=\"text-variant\" data-v-e0b2fe04>" + _vm._ssrEscape("\n                " + _vm._s(variant.nombre) + ":\n              ") + "</label> "), _c('SelectGroup', {
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
      }, [_c('p', {
        staticClass: "text-option"
      }, [_vm._v("\n                    " + _vm._s(item.option) + "\n                  ")])]);
    }), 0)], 2);
  }), 0) : _vm._e(), _vm._ssrNode(" " + (_vm.userDropshipping.userName ? "<div class=\"w-full flex flex-row items-center my-8\" data-v-e0b2fe04><p class=\"text-variant\" style=\"margin-right: 10px\" data-v-e0b2fe04>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_dropshipping')) + "\n            ") + "</p> <p class=\"text-option2\" data-v-e0b2fe04>" + _vm._ssrEscape("\n              " + _vm._s(_vm.userDropshipping.userName) + "\n            ") + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"flex flex-row mb-20 items-center\" data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<p class=\"text-variant\" style=\"margin-right: 10px\" data-v-e0b2fe04>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_compartir')) + "\n            ") + "</p> "), _vm._ssrNode("<a" + _vm._ssrAttr("href", this.sharingFacebook) + " target=\"_blank\" rel=\"noreferrer noopener\" class=\"btn-facebook\" data-v-e0b2fe04>", "</a>", [_c('facebook-icon', {
    staticClass: "wp-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"btn-whatsapp\" data-v-e0b2fe04>", "</button>", [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-direction-btns\" data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<div class=\"content-cart\" data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("quantity", {
    disabled: !_vm.salesData.estado
  }) + " data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<button class=\"quantity_remove\" data-v-e0b2fe04>", "</button>", [_c('menos-icon', {
    staticClass: "text-icon"
  })], 1), _vm._ssrNode(" <p class=\"text-quantity_value\" data-v-e0b2fe04>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p> "), _vm._ssrNode("<button class=\"quantity_add\" data-v-e0b2fe04>", "</button>", [_c('mas-icon', {
    staticClass: "text-icon"
  })], 1)], 2)]), _vm._ssrNode(" <div class=\"content-addCart\" data-v-e0b2fe04>" + (!_vm.spent && this.salesData.estado == true && (_vm.data.info.tipo_servicio == null || _vm.data.info.tipo_servicio == '0') ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-e0b2fe04><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"16\" viewBox=\"0 0 14 16\" class=\"minicart-icon\" data-v-e0b2fe04><path d=\"M11,3V0H3V3H0V16H14V3H11ZM5,2H9V3H5V2Zm7,12H2V5H3V7H5V5H9V7h2V5h1v9Z\" data-v-e0b2fe04></path></svg> <p class=\"text-addCart\" data-v-e0b2fe04>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_añadiralcarrito')) + "\n                ") + "</p></button>" : !this.salesData.estado ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-e0b2fe04><p class=\"text-addCart\" data-v-e0b2fe04>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n                ") + "</p></button>" : !_vm.spent && _vm.data.info.tipo_servicio == '1' ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-e0b2fe04><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"16\" viewBox=\"0 0 14 16\" class=\"minicart-icon\" data-v-e0b2fe04><path d=\"M11,3V0H3V3H0V16H14V3H11ZM5,2H9V3H5V2Zm7,12H2V5H3V7H5V5H9V7h2V5h1v9Z\" data-v-e0b2fe04></path></svg> <p class=\"text-addCart\" data-v-e0b2fe04>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n                ") + "</p></button>" : _vm.spent ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-e0b2fe04><p class=\"text-addCart\" data-v-e0b2fe04>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                ") + "</p></button>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"responsive-purchase\" data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<div class=\"ko-input\" data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<div class=\"quantity-resposive\" data-v-e0b2fe04>", "</div>", [_vm._ssrNode("<button class=\"quantity_remove_res\" data-v-e0b2fe04>", "</button>", [_c('menos-icon', {
    staticClass: "icon_res"
  })], 1), _vm._ssrNode(" <p class=\"quantity_value_res\" data-v-e0b2fe04>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p> "), _vm._ssrNode("<button class=\"quantity_add_res\" data-v-e0b2fe04>", "</button>", [_c('mas-icon', {
    staticClass: "icon_res"
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
  }, [_vm._v(_vm._s(_vm.$t('cart_ultimaUnidad')))])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div style=\"width: 100%; margin-left: 10px\" data-v-e0b2fe04>", "</div>", [_vm._ssrNode((_vm.spent ? "<div class=\"content_buy_action-responsive\" data-v-e0b2fe04><p class=\"card-info-1-res\" data-v-e0b2fe04>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p></div>" : "<!---->") + " "), !_vm.spent && this.salesData.estado ? _vm._ssrNode("<button class=\"btn-responsive\" data-v-e0b2fe04>", "</button>", [_c('cartArrowDown', {
    staticClass: "card-icon-cart"
  }), _vm._ssrNode(_vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgregar')) + "\n                "))], 2) : _vm._e(), _vm._ssrNode(" " + (!this.salesData.estado ? "<div class=\"content_buy_action-responsive\" data-v-e0b2fe04><p class=\"card-info-1-res\" data-v-e0b2fe04>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n                  ") + "</p></div>" : "<!---->"))], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-options\" data-v-e0b2fe04>", "</div>", [_c('OptionAcordion', {
    attrs: {
      "dataStore": _vm.dataStore,
      "data": _vm.data,
      "envio": _vm.envio,
      "settingByGeneral": this.settingByTemplate9[0].setting9General
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tab\" data-v-e0b2fe04>", "</div>", [_c('OptionTab', {
    attrs: {
      "dataStore": _vm.dataStore,
      "data": _vm.data,
      "envio": _vm.envio,
      "settingByGeneral": this.settingByTemplate9[0].setting9General
    }
  })], 1), _vm._ssrNode(" " + (_vm.envio && _vm.envio.titulo == 'Gratis' ? "<div class=\"content-free-shipping\" data-v-e0b2fe04><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"28px\" height=\"28px\" viewBox=\"0 0 24 24\" fill=\"#2c2930\" class=\"transporte-icon mr-2\" data-v-e0b2fe04><path d=\"M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z\" data-v-e0b2fe04></path></svg> <p class=\"text-shipping\" data-v-e0b2fe04>" + _vm._ssrEscape(_vm._s(_vm.$t('footer_tarifaPrecio'))) + "</p></div>" : "<!---->"))], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-suggesProduct\" data-v-e0b2fe04>", "</div>", [_c('KoSuggesProduct', {
    attrs: {
      "category": this.category.slice(0, 8),
      "cardProduct": this.settingByTemplate9[0].cardProduct
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template9/Ko-ProductDetail.vue?vue&type=template&id=e0b2fe04&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template9/Ko-ProductDetail.vue?vue&type=script&lang=js&



/* harmony default export */ var Ko_ProductDetailvue_type_script_lang_js_ = ({
  name: 'Ko9-ProductDetail-1',
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebookPixel: Object,
    settingByTemplate9: Array
  },
  components: {
    OptionAcordion: () => __webpack_require__.e(/* import() */ 127).then(__webpack_require__.bind(null, 1118)),
    OptionTab: () => __webpack_require__.e(/* import() */ 128).then(__webpack_require__.bind(null, 1119)),
    SelectGroup: () => __webpack_require__.e(/* import() */ 196).then(__webpack_require__.bind(null, 1120)),
    KoSuggesProduct: () => __webpack_require__.e(/* import() */ 80).then(__webpack_require__.bind(null, 988))
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
        slidesPerView: 4,
        spaceBetween: 10,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
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
  computed: {
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
// CONCATENATED MODULE: ./components/template9/Ko-ProductDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var template9_Ko_ProductDetailvue_type_script_lang_js_ = (Ko_ProductDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template9/Ko-ProductDetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(849)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template9_Ko_ProductDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e0b2fe04",
  "a72881c8"
  
)

/* harmony default export */ var Ko_ProductDetail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(850);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("a5bc5146", content, true, context)
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

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_e0b2fe04_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_e0b2fe04_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_e0b2fe04_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_e0b2fe04_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductDetail_vue_vue_type_style_index_0_id_e0b2fe04_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-facebook[data-v-e0b2fe04]{background-color:transparent;border:0;border-radius:5px;color:#1877f2;cursor:pointer;display:flex;justify-content:center;margin-right:20px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-facebook[data-v-e0b2fe04]:hover{color:#000}.btn-whatsapp[data-v-e0b2fe04]{background-color:transparent;border:0;border-radius:5px;color:#25d366;cursor:pointer;display:flex;justify-content:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-whatsapp[data-v-e0b2fe04]:hover{color:#000}.wp-icon[data-v-e0b2fe04]{bottom:3px;font-size:27px}.content-items-right[data-v-e0b2fe04]{width:100%}.wrapper-productDetail[data-v-e0b2fe04]{padding-top:20px}.container-productDetail-loading[data-v-e0b2fe04],.wrapper-productDetail[data-v-e0b2fe04]{align-items:center;background:var(--background_color_1);display:flex;justify-content:center;width:100%}.container-productDetail-loading[data-v-e0b2fe04]{flex-direction:column;height:calc(100vh - 420px);max-width:1460px;padding:50px 30px 30px}.container-productDetail[data-v-e0b2fe04]{align-items:center;display:flex;flex-direction:column;justify-content:center;max-width:1460px;padding:0 10px;width:100%}.crumb[data-v-e0b2fe04]{align-items:flex-start;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:40px;margin-top:40px}.txt-crumb[data-v-e0b2fe04]{color:var(--breadcrumbs);cursor:pointer;font-family:Arial,sans-serif;font-size:12px;line-height:14px;padding-right:6px;transition:all .25s ease}.s1[data-v-e0b2fe04]:hover,.s2[data-v-e0b2fe04]:hover{background-color:#2c2930;color:#fff;transition:all .25s ease}.product-content[data-v-e0b2fe04]{display:flex;width:100%}.left[data-v-e0b2fe04]{display:flex;flex-direction:column}.content-images[data-v-e0b2fe04],.left[data-v-e0b2fe04]{align-items:center;justify-content:center}.content-images[data-v-e0b2fe04]{grid-gap:1rem;display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr));width:100%}.content-variant[data-v-e0b2fe04]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center;margin-bottom:20px;width:auto}.img-list[data-v-e0b2fe04]{height:auto;-o-object-fit:contain;object-fit:contain;overflow:hidden;width:auto}.aditional-images[data-v-e0b2fe04],.main-images[data-v-e0b2fe04],.youtuve-video[data-v-e0b2fe04]{align-items:center;display:flex;justify-content:center;width:100%}.right[data-v-e0b2fe04]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start}.content-addCart[data-v-e0b2fe04],.content-category[data-v-e0b2fe04],.content-name[data-v-e0b2fe04]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.content-price[data-v-e0b2fe04]{grid-gap:0;align-items:center;display:grid;gap:0;grid-auto-flow:row;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr))}.quantity[data-v-e0b2fe04]{align-items:center;display:flex;flex-direction:row;justify-content:center}.section-suggesProduct[data-v-e0b2fe04]{margin-top:40px;width:100%}.responsive-purchase[data-v-e0b2fe04]{display:none}@media (min-width:300px){.product-content[data-v-e0b2fe04]{align-items:center;flex-direction:column;justify-content:center}.content-direction-btns[data-v-e0b2fe04]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.left[data-v-e0b2fe04]{width:90%}.video[data-v-e0b2fe04]{height:200px;width:100%}.right[data-v-e0b2fe04]{margin-top:4px;width:90%}.content-name[data-v-e0b2fe04],.content-price[data-v-e0b2fe04]{margin-bottom:25px}.tab[data-v-e0b2fe04]{display:flex;display:none}.content-cart[data-v-e0b2fe04]{background:var(--color_quantity_bg);flex-direction:column;padding-bottom:1px}.content-cart[data-v-e0b2fe04],.content-free-shipping[data-v-e0b2fe04]{align-items:center;display:flex;height:54px;justify-content:center;width:100%}.content-free-shipping[data-v-e0b2fe04]{background:#f4f4f4;flex-direction:row;margin-top:20px}.content-options[data-v-e0b2fe04]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.crumb[data-v-e0b2fe04]{width:90%}.btn[data-v-e0b2fe04],.btn-disabled[data-v-e0b2fe04]{align-items:center;background-color:var(--color_background_btn);display:flex;flex-direction:row;height:54px;justify-content:center;transition:all .15s ease-in;width:100%}.btn[data-v-e0b2fe04]:hover{background-color:var(--hover_bg)}.btn[data-v-e0b2fe04]:hover,.btn:hover .text-addCart[data-v-e0b2fe04]{color:var(--hover_text);transition:all .15s ease-in}.btn:hover .minicart-icon[data-v-e0b2fe04]{fill:var(--hover_text);transition:all .15s ease-in}.quantity[data-v-e0b2fe04]{width:100%}.quantity_add[data-v-e0b2fe04],.quantity_remove[data-v-e0b2fe04]{align-items:center;background:var(--color_quantity_bg);display:flex;justify-content:center}.text-category[data-v-e0b2fe04]{color:var(--color_category);font-family:var(--font-style-2);font-size:16px;font-weight:700;margin-bottom:4px;transition:all .6s ease-in-out}.text-name[data-v-e0b2fe04]{color:var(--color_title);font-weight:700;letter-spacing:0}.text-name[data-v-e0b2fe04],.text-price[data-v-e0b2fe04]{font-family:var(--font-style-2);font-size:36px;line-height:1}.text-price[data-v-e0b2fe04]{color:var(--color_price);font-weight:600;letter-spacing:-.03em}.text-stock[data-v-e0b2fe04]{color:#92bb35;font-size:14px}.text-price-promo[data-v-e0b2fe04],.text-stock[data-v-e0b2fe04]{font-family:var(--font-style-2);font-weight:600}.text-price-promo[data-v-e0b2fe04]{color:var(--color_price);font-size:18px;letter-spacing:-.03em;line-height:1;-webkit-text-decoration:line-through;text-decoration:line-through}.text-numero-promo[data-v-e0b2fe04]{color:#00a650;font-family:var(--font-style-2);font-size:14px;font-weight:600}.text-icon[data-v-e0b2fe04]{cursor:pointer;width:34px}.text-icon[data-v-e0b2fe04],.text-quantity_value[data-v-e0b2fe04]{align-items:center;color:var(--color_quantity_num);display:flex;justify-content:center}.text-quantity_value[data-v-e0b2fe04]{border:none;font-size:21px;font-weight:700;padding:0 35px;text-align:center;width:100%}.text-addCart[data-v-e0b2fe04]{color:var(--color_text_btn);font-family:var(--font-style-2);font-size:15px;font-weight:900;letter-spacing:1px;line-height:54px;white-space:nowrap}.minicart-icon[data-v-e0b2fe04]{fill:var(--color_text_btn);margin-right:20px}.text-shipping[data-v-e0b2fe04]{color:var(--color_title);font-family:var(--font-style-2);font-size:14px;font-weight:700;line-height:1px;margin-left:10px}.text-variant[data-v-e0b2fe04]{color:var(--color_title)}.text-option[data-v-e0b2fe04],.text-variant[data-v-e0b2fe04]{font-family:var(--font-style-2);font-size:16px;font-weight:700;transition:all .6s ease-in-out}.text-option[data-v-e0b2fe04]{color:#303030}.text-option2[data-v-e0b2fe04]{color:#303030;font-family:var(--font-style-2);font-size:15px;font-weight:500;transition:all .6s ease-in-out}}@media (min-width:450px){.content-direction-btns[data-v-e0b2fe04]{flex-direction:row}.content-cart[data-v-e0b2fe04]{margin-right:2px;width:40%}.video[data-v-e0b2fe04]{height:250px}}@media (min-width:768px){.left[data-v-e0b2fe04],.right[data-v-e0b2fe04]{width:95%}.content-cart[data-v-e0b2fe04]{width:150px}.content-addCart[data-v-e0b2fe04]{width:236px}.video[data-v-e0b2fe04]{height:400px}}@media (min-width:850px){.video[data-v-e0b2fe04]{height:480px}}@media (min-width:1024px){.product-content[data-v-e0b2fe04]{align-items:flex-start;flex-direction:row;justify-content:flex-start}.crumb[data-v-e0b2fe04],.product-content[data-v-e0b2fe04]{width:96%}.video[data-v-e0b2fe04]{height:300px}.left[data-v-e0b2fe04]{margin-right:50px;width:100%}.content-options[data-v-e0b2fe04]{display:none}.tab[data-v-e0b2fe04]{display:flex}.content-free-shipping[data-v-e0b2fe04]{width:100%}.right[data-v-e0b2fe04]{position:sticky;top:80px;width:55%}.content-direction-btns[data-v-e0b2fe04]{display:flex;flex-direction:column}}@media (min-width:1080px){.content-free-shipping[data-v-e0b2fe04],.content-options[data-v-e0b2fe04]{width:100%}.video[data-v-e0b2fe04]{height:320px}}@media (min-width:1135px){.video[data-v-e0b2fe04]{height:380px}}@media (min-width:1250px){.video[data-v-e0b2fe04]{height:420px}}@media (min-width:1280px){.content-direction-btns[data-v-e0b2fe04]{display:flex;flex-direction:row}.right[data-v-e0b2fe04]{width:50%}.product-content[data-v-e0b2fe04]{width:100%}}@media (min-width:1350px){.video[data-v-e0b2fe04]{height:480px}}@media (min-width:1460px){.video[data-v-e0b2fe04]{height:520px}.right[data-v-e0b2fe04]{width:55%}.crumb[data-v-e0b2fe04],.product-content[data-v-e0b2fe04]{width:100%}}@media (max-width:450px){.content-price[data-v-e0b2fe04]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start}.content-direction-btns[data-v-e0b2fe04]{display:none}.responsive-purchase[data-v-e0b2fe04]{background:var(--background_color_1);bottom:0;box-shadow:0 0 30px 50px rgba(96,125,139,.096);display:inline;display:initial;position:fixed;right:0;width:100%;z-index:2}.ko-input[data-v-e0b2fe04]{align-items:center;display:flex;justify-content:space-between;padding:8px 5px;width:100%}.quantity-resposive[data-v-e0b2fe04]{display:flex;flex-direction:row}.text-quantity[data-v-e0b2fe04]{align-self:center;color:rgba(21,20,57,.541);font-size:14px;font-weight:700;margin-right:5px}.quantity_remove_res[data-v-e0b2fe04]{background:transparent;border:1px solid hsla(240,5%,52%,.342);border-bottom-left-radius:var(--radius_btn);border-right-style:none;border-top-left-radius:var(--radius_btn);height:44px;width:3em}.quantity_value_res[data-v-e0b2fe04]{align-items:center;background:transparent;border-color:hsla(240,5%,52%,.342);border-style:solid none;border-width:1px;color:#000;display:flex;font-size:1em;height:44px;justify-content:center;padding-left:10px;padding-right:10px;width:2.5em}.quantity_add_res[data-v-e0b2fe04]{background:transparent;border:1px solid hsla(240,5%,52%,.342);border-bottom-right-radius:var(--radius_btn);border-left-style:none;border-top-right-radius:var(--radius_btn);height:44px;width:3em}.icon_res[data-v-e0b2fe04]{font-size:16px}.content_buy_action-responsive[data-v-e0b2fe04]{display:flex;width:100%}.card-info-1-res[data-v-e0b2fe04]{align-items:center;background:gray;border:1px solid gray;color:#fff;display:flex;justify-content:center}.btn-responsive[data-v-e0b2fe04],.card-info-1-res[data-v-e0b2fe04]{border-radius:var(--radius_btn);font-size:16px;padding:8px 10px;width:100%}.btn-responsive[data-v-e0b2fe04]{background-color:var(--color_background_btn);border:1px solid var(--color_background_btn);color:var(--color_text_btn)}.card-icon-cart[data-v-e0b2fe04]{color:var(--color_text_btn);cursor:pointer;font-size:20px;margin-right:4px}.container-alert[data-v-e0b2fe04]{align-items:center;background-color:#fae84b;border:1px solid #e6d542;border-radius:6px;color:#000;display:flex;font-size:14px;justify-content:center;left:45px;position:absolute;top:-55px;width:80px}.alert[data-v-e0b2fe04]{padding:5px;text-align:center}.features[data-v-e0b2fe04]{border-top:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=126.js.map