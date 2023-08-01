exports.ids = [113];
exports.modules = {

/***/ 1107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-ProductDetail.vue?vue&type=template&id=b563ca8a&scoped=true&
var render = function render() {
  var _this$settingByTempla, _this$settingByTempla2, _this$settingByTempla3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productDetail",
    style: [_vm.settingByTemplate11[0].detailsProduct, _vm.settingByTemplate11[0].settingGeneral, {
      '--font-style-1': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate11[0]) === null || _this$settingByTempla2 === void 0 ? void 0 : (_this$settingByTempla3 = _this$settingByTempla2.settingGeneral) === null || _this$settingByTempla3 === void 0 ? void 0 : _this$settingByTempla3.fount_1) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Roboto'
    }]
  }, [_vm.loading ? _vm._ssrNode("<div class=\"container-productDetail-loading\" data-v-b563ca8a>", "</div>") : _vm._ssrNode("<div class=\"container-productDetail\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"banner-detail\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-b563ca8a>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/productos"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-b563ca8a>/</p> <p class=\"txt-crumb s2\" data-v-b563ca8a>" + _vm._ssrEscape("\n          " + _vm._s(_vm.data.detalle.nombre) + "\n        ") + "</p>")], 2)]), _vm._ssrNode(" <div class=\"empty\" data-v-b563ca8a></div> "), _vm._ssrNode("<div class=\"product-content\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"left\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"wrapper-left\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"photos\" data-v-b563ca8a>", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper h-full\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"swiper-slide\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"photos_selected\" data-v-b563ca8a>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.data.detalle.foto_cloudinary, 150, 150),
      expression: "\n                        idCloudinary(data.detalle.foto_cloudinary, 150, 150)\n                      "
    }],
    staticClass: "img-list",
    attrs: {
      "alt": "Product Img"
    },
    on: {
      "click": function ($event) {
        return _vm.selectedPhoto(_vm.data.detalle.foto_cloudinary);
      }
    }
  }, [])])]), _vm._ssrNode(" "), _vm._l(_vm.data.fotos, function (foto, itemsfoto) {
    return _vm._ssrNode("<div class=\"swiper-slide h-full\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"photos_selected\" data-v-b563ca8a>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinaryQuality(foto.foto_cloudinary, 850, 850),
        expression: "\n                        idCloudinaryQuality(foto.foto_cloudinary, 850, 850)\n                      "
      }],
      staticClass: "img-list",
      attrs: {
        "alt": "Product Img"
      },
      on: {
        "click": function ($event) {
          return _vm.selectedPhoto(foto.foto_cloudinary);
        }
      }
    }, [])])]);
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide h-full\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"photos_selected\" data-v-b563ca8a>", "</div>", [_vm.idYoutube ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: `https://img.youtube.com/vi/${_vm.idYoutube}/0.jpg`,
      expression: "`https://img.youtube.com/vi/${idYoutube}/0.jpg`"
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.idYoutube,
      expression: "idYoutube"
    }],
    staticClass: "video",
    attrs: {
      "alt": "Product Img"
    },
    on: {
      "mouseover": function ($event) {
        _vm.existYoutube = true;
      }
    }
  }, []) : _vm._e()])])], 2), _vm._ssrNode(" "), _vm.data.fotos.length > 3 ? _vm._ssrNode("<div class=\"swiper-prev\" data-v-b563ca8a>", "</div>", [_c('FlechaUp-icon', {
    staticClass: "icon-swiper"
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.data.fotos.length > 3 ? _vm._ssrNode("<div class=\"swiper-next\" data-v-b563ca8a>", "</div>", [_c('Flechadown-icon', {
    staticClass: "icon-swiper"
  })], 1) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-photo_main\" data-v-b563ca8a>", "</div>", [this.activeZoom ? _vm._ssrNode("<div class=\"photo_main\"" + _vm._ssrStyle(null, null, {
    display: !_vm.existYoutube ? '' : 'none'
  }) + " data-v-b563ca8a>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinaryQuality(_vm.selectPhotoUrl, 850, 850),
      expression: "idCloudinaryQuality(selectPhotoUrl, 850, 850)"
    }],
    staticClass: "photo_main",
    attrs: {
      "alt": "Product Zoom"
    }
  }, [])]) : _vm._e(), _vm._ssrNode(" "), !this.activeZoom ? _vm._ssrNode("<div class=\"photo_main\"" + _vm._ssrStyle(null, null, {
    display: !_vm.existYoutube ? '' : 'none'
  }) + " data-v-b563ca8a>", "</div>", [_c('zoom', {
    attrs: {
      "photo": _vm.selectPhotoUrl
    }
  })], 1) : _vm._e(), _vm._ssrNode(" <iframe" + _vm._ssrAttr("src", `https://www.youtube.com/embed/${_vm.idYoutube}?rel=0&controls=0&showinfo=0`) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\" class=\"photo_main\"" + _vm._ssrStyle(null, null, {
    display: _vm.existYoutube ? '' : 'none'
  }) + " data-v-b563ca8a></iframe>")], 2), _vm._ssrNode(" "), _c('ProductSlide', {
    staticClass: "w-full h-full box-border photos_responsive",
    attrs: {
      "photos": _vm.data.fotos,
      "photo": _vm.data.detalle.foto_cloudinary,
      "idYoutube": _vm.idYoutube
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"right\"" + _vm._ssrStyle(null, `margin-top:${this.settingByTemplate11[0].detailsProduct['--marginTopTitle']};`, null) + " data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"content-items-right\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"content-name\" data-v-b563ca8a><p class=\"text-name\"" + _vm._ssrStyle(null, `font-size:${this.settingByTemplate11[0].detailsProduct['--fontSizeTitle']}; font-weight:${this.settingByTemplate11[0].detailsProduct['--fontWeighTitle']};`, null) + " data-v-b563ca8a>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.detalle.nombre) + "\n            ") + "</p></div> <div class=\"content-price\" data-v-b563ca8a><p class=\"text-price\"" + _vm._ssrStyle(null, `font-size:${this.settingByTemplate11[0].detailsProduct['--fontSizePrice']}; font-weight:${this.settingByTemplate11[0].detailsProduct['--fontWeighPrice']};`, {
    display: _vm.salesData.precio ? '' : 'none'
  }) + " data-v-b563ca8a>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.salesData.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p> <div class=\"flex flex-row justify-center items-center\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-b563ca8a><p class=\"card-discont\" data-v-b563ca8a>" + _vm._ssrEscape("\n                " + _vm._s(_vm.data.info.promocion_valor) + "% De Descuento\n              ") + "</p> <p class=\"text-promocion\" data-v-b563ca8a>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(_vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor ? Math.trunc(_vm.salesData.precio / (1 - _vm.data.info.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p></div></div> <div class=\"empty\" data-v-b563ca8a></div> <div class=\"content-stock\" data-v-b563ca8a><p class=\"stock-text-1\" data-v-b563ca8a>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_stock')) + ":") + "</p> <p class=\"stock-text-2\" data-v-b563ca8a>" + _vm._ssrEscape(_vm._s(_vm.salesData.unidades)) + "</p></div> " + (_vm.data.info.descripcion_corta ? "<div class=\"content-stock\" data-v-b563ca8a><p class=\"stock-text-1\" data-v-b563ca8a>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_informacion')) + ":") + "</p> <p class=\"stock-text-2\" data-v-b563ca8a>" + _vm._ssrEscape(_vm._s(_vm.data.info.descripcion_corta)) + "</p></div>" : "<!---->") + " <div class=\"empty\" data-v-b563ca8a></div> "), this.data.detalle.con_variante > 0 ? _vm._ssrNode("<div class=\"content-variant\" data-v-b563ca8a>", "</div>", _vm._l(_vm.data.variantes, function (variant, index) {
    return _vm._ssrNode("<div class=\"content-items-variant\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<label for=\"variant name\" class=\"text-variant\" data-v-b563ca8a>" + _vm._ssrEscape(_vm._s(variant.nombre) + ":") + "</label> "), _c('SelectGroup', {
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
  }), 0) : _vm._e(), _vm._ssrNode(" " + (_vm.userDropshipping.userName ? "<div class=\"w-full flex flex-row items-center my-8\" data-v-b563ca8a><p class=\"text-variant\" style=\"margin-right: 10px\" data-v-b563ca8a>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_dropshipping')) + "\n            ") + "</p> <p class=\"stock-text-2\" data-v-b563ca8a>" + _vm._ssrEscape("\n              " + _vm._s(_vm.userDropshipping.userName) + "\n            ") + "</p></div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"w-full flex flex-row items-center\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<p class=\"text-variant\" style=\"margin-right: 10px\" data-v-b563ca8a>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_compartir')) + "\n            ") + "</p> "), _vm._ssrNode("<a" + _vm._ssrAttr("href", this.sharingFacebook) + " target=\"_blank\" rel=\"noreferrer noopener\" class=\"btn-facebook\" data-v-b563ca8a>", "</a>", [_c('facebook-icon', {
    staticClass: "wp-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"btn-whatsapp\" data-v-b563ca8a>", "</button>", [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-direction-btns\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("content-quantity-boxes", {
    disabled: !_vm.salesData.estado
  }) + " data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"box-quantity\" data-v-b563ca8a><p class=\"txt-quantity\" data-v-b563ca8a>" + _vm._ssrEscape(_vm._s(_vm.quantityValue)) + "</p></div> "), _vm._ssrNode("<div class=\"box-quantity-btns\" data-v-b563ca8a>", "</div>", [_vm._ssrNode("<div class=\"btn-quantity btn1\" data-v-b563ca8a>", "</div>", [_c('FlechaUp-icon', {
    staticClass: "text-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn-quantity btn2\" data-v-b563ca8a>", "</div>", [_c('Flechadown-icon', {
    staticClass: "text-icon"
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"content-addCart\" data-v-b563ca8a>" + (!_vm.spent && this.salesData.estado == true && (_vm.data.info.tipo_servicio == null || _vm.data.info.tipo_servicio == '0') ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-b563ca8a><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"minicart-icon\" data-v-b563ca8a><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-b563ca8a></path></svg> <p class=\"text-addCart\" data-v-b563ca8a>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_añadiralcarrito')) + "\n                ") + "</p></button>" : !this.salesData.estado ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-b563ca8a><p class=\"text-addCart\" data-v-b563ca8a>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n                ") + "</p></button>" : !_vm.spent && _vm.data.info.tipo_servicio == '1' ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-b563ca8a><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"minicart-icon\" data-v-b563ca8a><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-b563ca8a></path></svg> <p class=\"text-addCart\" data-v-b563ca8a>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n                ") + "</p></button>" : _vm.spent ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-b563ca8a><p class=\"text-addCart\" data-v-b563ca8a>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                ") + "</p></button>" : "<!---->") + "</div>")], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tab\" data-v-b563ca8a>", "</div>", [_c('OptionTab', {
    attrs: {
      "dataStore": _vm.dataStore,
      "data": _vm.data,
      "envio": _vm.envio
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section-suggesProduct\" data-v-b563ca8a>", "</div>", [_c('KoSuggesProduct', {
    attrs: {
      "category": this.category.slice(0, 8)
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/ko-ProductDetail.vue?vue&type=template&id=b563ca8a&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(15);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-ProductDetail.vue?vue&type=script&lang=js&



/* harmony default export */ var ko_ProductDetailvue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  name: 'Ko-ProductDetail',
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebookPixel: Object,
    settingByTemplate11: Array
  },
  components: {
    OptionTab: () => __webpack_require__.e(/* import() */ 111).then(__webpack_require__.bind(null, 1124)),
    SelectGroup: () => __webpack_require__.e(/* import() */ 143).then(__webpack_require__.bind(null, 1125)),
    KoSuggesProduct: () => __webpack_require__.e(/* import() */ 75).then(__webpack_require__.bind(null, 990)),
    ProductSlide: () => __webpack_require__.e(/* import() */ 142).then(__webpack_require__.bind(null, 1126)),
    Zoom: () => __webpack_require__.e(/* import() */ 144).then(__webpack_require__.bind(null, 1127))
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
// CONCATENATED MODULE: ./components/template11/ko-ProductDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var template11_ko_ProductDetailvue_type_script_lang_js_ = (ko_ProductDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/ko-ProductDetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(853)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template11_ko_ProductDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b563ca8a",
  "2bff5f21"
  
)

/* harmony default export */ var ko_ProductDetail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(854);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("264ababf", content, true, context)
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

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetail_vue_vue_type_style_index_0_id_b563ca8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(441);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetail_vue_vue_type_style_index_0_id_b563ca8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetail_vue_vue_type_style_index_0_id_b563ca8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetail_vue_vue_type_style_index_0_id_b563ca8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetail_vue_vue_type_style_index_0_id_b563ca8a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-facebook[data-v-b563ca8a]{background-color:transparent;border:0;border-radius:5px;color:#1877f2;cursor:pointer;display:flex;justify-content:center;margin-right:20px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-facebook[data-v-b563ca8a]:hover{color:#000}.btn-whatsapp[data-v-b563ca8a]{background-color:transparent;border:0;border-radius:5px;color:#25d366;cursor:pointer;display:flex;justify-content:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-whatsapp[data-v-b563ca8a]:hover{color:#000}.wp-icon[data-v-b563ca8a]{bottom:3px;font-size:27px}.wrapper-left[data-v-b563ca8a]{align-items:flex-start;display:flex;flex:2;flex-direction:row;padding-bottom:10px;width:100%}.photos_responsive[data-v-b563ca8a]{display:none}.photos[data-v-b563ca8a]{display:flex;height:100%;margin-right:30px;max-height:442px;max-width:110px;min-height:442px;min-width:110px;overflow:hidden;position:relative;width:100%}.photos_selected[data-v-b563ca8a]{display:flex;flex-direction:column;height:100%;justify-content:stretch;max-height:100px;max-width:100px;min-height:100px;min-width:100px;width:100%}.img-list[data-v-b563ca8a]{border-radius:6px;cursor:pointer;height:100%;margin-bottom:10px;-o-object-fit:cover;object-fit:cover;vertical-align:top;width:100%}.swiper-prev[data-v-b563ca8a]{top:0}.swiper-next[data-v-b563ca8a],.swiper-prev[data-v-b563ca8a]{left:20px;position:absolute;z-index:2}.swiper-next[data-v-b563ca8a]{bottom:0;font-size:25px}.icon-swiper[data-v-b563ca8a]{color:var(--color_icon);cursor:pointer;font-size:60px}.icon-swiper[data-v-b563ca8a]:hover{color:var(--hover_text)}.video[data-v-b563ca8a]{border-radius:5px;height:100px;margin-bottom:10px;min-height:100px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100px}.wrapper-photo_main[data-v-b563ca8a]{margin-right:10px;max-height:442px;max-width:442px;position:relative;width:100%}.photo_main[data-v-b563ca8a]{border-radius:10px;height:100%;max-height:442px;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center;width:100%}.wrapper-productDetail[data-v-b563ca8a]{align-items:center;background:var(--background_color_1);display:flex;justify-content:center;width:100%}.container-productDetail-loading[data-v-b563ca8a]{height:calc(100vh - 420px);max-width:1200px;padding:50px 30px 30px}.container-productDetail[data-v-b563ca8a],.container-productDetail-loading[data-v-b563ca8a]{align-items:center;background:var(--background_color_1);display:flex;flex-direction:column;justify-content:center;width:100%}.container-productDetail[data-v-b563ca8a]{height:100%}.left[data-v-b563ca8a]{display:flex;flex-direction:column}.content-images[data-v-b563ca8a],.left[data-v-b563ca8a]{align-items:center;justify-content:center;width:100%}.content-images[data-v-b563ca8a]{grid-gap:1rem;display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr))}.content-variant[data-v-b563ca8a]{justify-content:center;margin-top:30px}.content-items-variant[data-v-b563ca8a],.content-variant[data-v-b563ca8a]{align-items:flex-start;display:flex;flex-direction:column;width:100%}.content-items-variant[data-v-b563ca8a]{justify-content:flex-start;margin-bottom:8px}.aditional-images[data-v-b563ca8a],.main-images[data-v-b563ca8a],.youtuve-video[data-v-b563ca8a]{align-items:center;display:flex;justify-content:center;width:100%}.right[data-v-b563ca8a]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.content-addCart[data-v-b563ca8a],.content-category[data-v-b563ca8a],.content-name[data-v-b563ca8a],.content-price[data-v-b563ca8a]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.quantity[data-v-b563ca8a]{align-items:center;display:flex;flex-direction:row;justify-content:center}.section-suggesProduct[data-v-b563ca8a]{margin-bottom:40px;margin-top:40px;width:100%}.content-quantity-boxes[data-v-b563ca8a]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:30px;margin-top:30px;width:100%}.box-quantity[data-v-b563ca8a]{background-color:transparent;border:1px solid var(--border);width:75px}.box-quantity[data-v-b563ca8a],.box-quantity-btns[data-v-b563ca8a]{align-items:center;display:flex;height:50px;justify-content:center;text-align:center}.box-quantity-btns[data-v-b563ca8a]{border:1px solid var(--color_background_btn);flex-direction:column}.box-quantity-btns[data-v-b563ca8a],.btn-quantity[data-v-b563ca8a]{background-color:var(--color_background_btn);width:25px}.btn-quantity[data-v-b563ca8a]{align-items:center;border-color:var(--color_background_btn);border-right-width:1px;border-top-width:1px;display:flex;height:25px;justify-content:center}.card-discont[data-v-b563ca8a]{background-color:var(--color_background_btn);color:var(--color_text_btn);font-size:16px;margin-left:5px;margin-right:5px;padding:2px 10px}.text-promocion[data-v-b563ca8a]{color:var(--color_subtext);font-size:14px;font-weight:700;-webkit-text-decoration:line-through;text-decoration:line-through}@media (min-width:300px){.product-content[data-v-b563ca8a]{align-items:center;flex-direction:column;justify-content:center;margin-top:40px;width:90%}.content-direction-btns[data-v-b563ca8a]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.video[data-v-b563ca8a]{height:200px;width:100%}.content-name[data-v-b563ca8a],.content-price[data-v-b563ca8a]{margin-bottom:20px}.tab[data-v-b563ca8a]{display:flex;margin-top:40px;width:90%}.content-options[data-v-b563ca8a]{flex-direction:column;justify-content:flex-start}.btn[data-v-b563ca8a],.content-options[data-v-b563ca8a]{align-items:center;display:flex;width:100%}.btn[data-v-b563ca8a],.btn-disabled[data-v-b563ca8a]{background-color:var(--color_background_btn);color:var(--color_text_btn);flex-direction:row;height:54px;justify-content:center;transition:all .15s ease-in}.btn-disabled[data-v-b563ca8a]{align-items:center;display:flex;width:100%}.btn:hover .text-addCart[data-v-b563ca8a]{background:var(--hover_Bg_btn);color:var(--hover_text_btn);transition:all .15s ease-in}.quantity[data-v-b563ca8a]{width:100%}.text-name[data-v-b563ca8a]{color:var(--color_text);line-height:1}.text-name[data-v-b563ca8a],.text-price[data-v-b563ca8a]{font-family:var(--font-style-1)!important}.text-price[data-v-b563ca8a]{color:var(--color_price);letter-spacing:.3px;line-height:26px}.text-stock[data-v-b563ca8a]{color:#92bb35;font-family:var(--font-style-1)!important;font-size:14px;font-weight:600;letter-spacing:-.02em;line-height:1.42857143;margin-left:30px}.text-icon[data-v-b563ca8a]{align-items:center;color:var(--color_text_btn);cursor:pointer;display:flex;justify-content:center;width:34px}.text-quantity_value[data-v-b563ca8a]{align-items:center;border:none;display:flex;font-size:21px;font-weight:600;justify-content:center;padding:0 35px;text-align:center;width:100%}.text-addCart[data-v-b563ca8a]{color:var(--color_text_btn);font-family:var(--font-style-1)!important;font-size:12px;font-weight:600;text-transform:uppercase;white-space:nowrap}.minicart-icon[data-v-b563ca8a]{fill:var(--color_text_btn);color:var(--color_text_btn);margin-bottom:5px;margin-right:10px}.text-variant[data-v-b563ca8a]{color:var(--color_subtext);font-size:16px;font-weight:600;margin-right:10px;transition:all .6s ease-in-out}.text-option[data-v-b563ca8a],.text-variant[data-v-b563ca8a]{font-family:var(--font-style-1)!important}.text-option[data-v-b563ca8a]{color:var(--color_subtext);font-size:16px;font-weight:600;transition:all .6s ease-in-out}.banner-detail[data-v-b563ca8a]{display:none}.section-suggesProduct[data-v-b563ca8a]{width:90%}.content-items-right[data-v-b563ca8a]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.empty[data-v-b563ca8a]{background-color:var(--border);height:1px;max-width:1200px}.content-stock[data-v-b563ca8a],.empty[data-v-b563ca8a]{width:100%}.content-stock[data-v-b563ca8a]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:8px;margin-top:8px}.stock-text-1[data-v-b563ca8a]{color:var(--color_subtext);font-size:16px;font-weight:600;margin-right:10px}.stock-text-1[data-v-b563ca8a],.stock-text-2[data-v-b563ca8a]{font-family:var(--font-style-1)!important}.stock-text-2[data-v-b563ca8a]{color:var(--color_subtext);font-size:15px;font-weight:400;text-align:left}}@media (min-width:425px){.content-direction-btns[data-v-b563ca8a]{display:flex;flex-direction:column}}@media (min-width:480px){.video[data-v-b563ca8a]{height:250px}}@media (min-width:768px){.banner-detail[data-v-b563ca8a]{background-position:50%;background-repeat:no-repeat;background-size:cover;justify-items:center;padding-bottom:20px;padding-top:20px}.banner-detail[data-v-b563ca8a],.crumb[data-v-b563ca8a]{align-items:center;display:flex;width:100%}.crumb[data-v-b563ca8a]{flex-direction:row;justify-content:center}.separatorCrumb[data-v-b563ca8a]{color:var(--breadCrumbs);cursor:pointer;font-size:9px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.separatorCrumb[data-v-b563ca8a],.txt-crumb[data-v-b563ca8a]{font-family:var(--font-style-1)!important}.txt-crumb[data-v-b563ca8a]{color:var(--breadCrumbs);cursor:pointer;font-size:15px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.s1[data-v-b563ca8a]:hover,.s2[data-v-b563ca8a]:hover{color:var(--hover_text);transition:all .25s ease}.content-addCart[data-v-b563ca8a]{width:236px}.video[data-v-b563ca8a]{height:400px}.product-content[data-v-b563ca8a],.tab[data-v-b563ca8a]{width:95%}.product-content[data-v-b563ca8a]{grid-gap:1rem;align-items:flex-start;display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:flex-start}.section-suggesProduct[data-v-b563ca8a]{width:95%}}@media (min-width:850px){.video[data-v-b563ca8a]{height:480px}}@media (min-width:1024px){.video[data-v-b563ca8a]{height:300px}.content-options[data-v-b563ca8a]{display:none}.tab[data-v-b563ca8a]{display:flex}.content-direction-btns[data-v-b563ca8a]{display:flex;flex-direction:column}}@media (min-width:1080px){.content-options[data-v-b563ca8a]{width:100%}}@media (max-width:768px){.photos[data-v-b563ca8a],.wrapper-photo_main[data-v-b563ca8a]{display:none}.photos_responsive[data-v-b563ca8a]{display:flex}}@media (min-width:1200px){.product-content[data-v-b563ca8a],.section-suggesProduct[data-v-b563ca8a],.tab[data-v-b563ca8a]{max-width:1200px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=113.js.map