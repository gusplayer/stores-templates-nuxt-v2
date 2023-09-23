exports.ids = [74];
exports.modules = {

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/K012-ProductDetail.vue?vue&type=template&id=692b4e04&scoped=true&
var render = function render() {
  var _this$settingByTempla, _this$settingByTempla2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modal-content",
    style: [{
      '--font-style-1': (_this$settingByTempla = (_this$settingByTempla2 = this.settingByTemplate12) === null || _this$settingByTempla2 === void 0 ? void 0 : _this$settingByTempla2.fontFamily) !== null && _this$settingByTempla !== void 0 ? _this$settingByTempla : 'Poppins'
    }]
  }, [_vm._ssrNode("<div class=\"modal-header\" data-v-692b4e04><p class=\"txt-Legal\" data-v-692b4e04>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_name'))) + "</p> <span class=\"close\" data-v-692b4e04>×</span></div> "), _vm.tempData ? _vm._ssrNode("<div data-v-692b4e04>", "</div>", [!_vm.loading ? _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "container-productDetail"
  }, [_vm._ssrNode("<div class=\"section\" data-v-692b4e04>", "</div>", [_vm._ssrNode("<div class=\"wrapper-left\" data-v-692b4e04>", "</div>", [_c('productSlide', {
    attrs: {
      "photos": _vm.data.fotos,
      "photo": _vm.data.detalle.foto_cloudinary,
      "id-youtube": _vm.idYoutube
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-right\" data-v-692b4e04>", "</div>", [_vm._ssrNode("<div class=\"content-right\" data-v-692b4e04>", "</div>", [_vm._ssrNode("<p class=\"text-name\" data-v-692b4e04>" + _vm._ssrEscape(_vm._s(_vm.data.detalle.nombre)) + "</p> <p class=\"text-marca\" data-v-692b4e04><strong data-v-692b4e04>" + _vm._ssrEscape(_vm._s(_vm.data.info.marca)) + "</strong></p> <p class=\"text-promocion\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-692b4e04>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor ? Math.trunc(_vm.salesData.precio / (1 - _vm.data.info.promocion_valor / 100)) : 0, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n            ") + "</p> <div" + _vm._ssrClass("wrapper-price", _vm.data.info.tag_promocion == 1 ? '' : 'wrapper-price_space') + " data-v-692b4e04><p class=\"text-precio\"" + _vm._ssrStyle(null, null, {
    display: _vm.salesData.precio ? '' : 'none'
  }) + " data-v-692b4e04>" + _vm._ssrEscape("\n                " + _vm._s(_vm._f("currency")(_vm.salesData.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n              ") + "</p> <p class=\"card-descuento\"" + _vm._ssrStyle(null, null, {
    display: _vm.data.info.tag_promocion == 1 && _vm.data.info.promocion_valor && _vm.salesData.precio ? '' : 'none'
  }) + " data-v-692b4e04>" + _vm._ssrEscape("\n                " + _vm._s(_vm.data.info.promocion_valor) + "% OFF\n              ") + "</p></div> <div class=\"content_buy_action\" data-v-692b4e04>" + (_vm.envio.titulo == 'Envío gratis' ? "<div data-v-692b4e04><p class=\"card-info-2\" data-v-692b4e04>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardGratis'))) + "</p></div>" : "<!---->") + " <div class=\"content_card-info\" data-v-692b4e04>" + (_vm.spent ? "<p class=\"card-info-1\" data-v-692b4e04>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                ") + "</p>" : "<!---->") + "</div></div> " + (_vm.data.info.descripcion_corta ? "<div style=\"margin-top: 10px; margin-bottom: 5px\" data-v-692b4e04><p class=\"text-marca\" data-v-692b4e04><strong data-v-692b4e04>" + _vm._ssrEscape(_vm._s(_vm.data.info.descripcion_corta)) + "</strong></p></div>" : "<!---->") + " "), this.data.detalle.con_variante > 0 ? _vm._ssrNode("<div class=\"container-variants\" data-v-692b4e04>", "</div>", _vm._l(_vm.data.variantes, function (variant, index) {
    return _vm._ssrNode("<div data-v-692b4e04>", "</div>", [_vm._ssrNode("<label for=\"variant name\" class=\"text-variant-type\" data-v-692b4e04>" + _vm._ssrEscape("\n                  " + _vm._s(variant.nombre) + ":\n                ") + "</label> "), _c('selectGroup', {
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
      }, [_vm._v("\n                    " + _vm._s(item.option) + "\n                  ")]);
    }), 0)], 2);
  }), 0) : _vm._e()], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-description\" data-v-692b4e04>", "</div>", [_vm.data.info.descripcion ? _vm._ssrNode("<div class=\"wrapper-description\" data-v-692b4e04>", "</div>", [_vm._ssrNode("<h3 class=\"text-variant\" data-v-692b4e04>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_description')) + "\n          ") + "</h3> "), _vm._ssrNode("<div class=\"editor content-text-desc\" data-v-692b4e04>", "</div>", [_c('el-tiptap', {
    attrs: {
      "extensions": _vm.extensions,
      "spellcheck": false,
      "readonly": true,
      "tooltip": false,
      "bubble": false,
      "showMenubar": false,
      "charCounterCount": false
    },
    model: {
      value: _vm.data.info.descripcion,
      callback: function ($$v) {
        _vm.$set(_vm.data.info, "descripcion", $$v);
      },
      expression: "data.info.descripcion"
    }
  })], 1)], 2) : _vm._e()]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"responsive-purchase\" data-v-692b4e04>", "</div>", [_vm._ssrNode("<div class=\"ko-input\" data-v-692b4e04>", "</div>", [!_vm.spent && _vm.salesData.estado ? _vm._ssrNode("<div class=\"quantity-resposive\" data-v-692b4e04>", "</div>", [_vm._ssrNode("<button class=\"quantity_remove\" data-v-692b4e04>", "</button>", [_c('menos-icon', {
    staticClass: "icon"
  })], 1), _vm._ssrNode(" <p class=\"quantity_value\" data-v-692b4e04>" + _vm._ssrEscape("\n              " + _vm._s(_vm.quantityValue) + "\n            ") + "</p> "), _vm._ssrNode("<button class=\"quantity_add\" data-v-692b4e04>", "</button>", [_c('mas-icon', {
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
  }, [_vm._v(_vm._s(_vm.$t('cart_ultimaUnidad')))])])])], 2) : _vm._e(), _vm._ssrNode(" " + (!_vm.spent && _vm.salesData.precio > 0 && _vm.salesData.estado && (_vm.data.info.tipo_servicio == null || _vm.data.info.tipo_servicio == '0') ? "<button class=\"btn-responsive\" data-v-692b4e04><span data-v-692b4e04>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n            ") + "</span></button>" : _vm.salesData.precio == 0 && !_vm.spent ? "<button class=\"btn-responsive\" data-v-692b4e04><span data-v-692b4e04>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_cotizar')) + "\n            ") + "</span></button>" : !_vm.salesData.estado ? "<button disabled=\"disabled\" class=\"btn-responsive\" data-v-692b4e04><span data-v-692b4e04>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_btnANodisponible')) + "\n            ") + "</span></button>" : !_vm.spent && _vm.data.info.tipo_servicio == '1' ? "<button id=\"AddToCartTag\" class=\"btn-responsive\" data-v-692b4e04>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('productdetail_btnComprar')) + "\n          ") + "</button>" : _vm.spent ? "<div class=\"wrapper-btn\" data-v-692b4e04><p class=\"card-info-1-res\" data-v-692b4e04>" + _vm._ssrEscape("\n              😥 " + _vm._s(_vm.$t('productdetail_productoAgotado')) + "\n            ") + "</p></div>" : "<!---->"))], 2)])], 2) : _vm._ssrNode("<div class=\"flex flex-col justify-center w-full items-center\" data-v-692b4e04><div class=\"spinner\" data-v-692b4e04><div class=\"dot1\" data-v-692b4e04></div> <div class=\"dot2\" data-v-692b4e04></div></div> <p class=\"text-2xl font-semibold text-black\" data-v-692b4e04>Cargando producto..</p></div>")]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template12/K012-ProductDetail.vue?vue&type=template&id=692b4e04&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./mixins/elemenTiptap.vue + 2 modules
var elemenTiptap = __webpack_require__(49);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/K012-ProductDetail.vue?vue&type=script&lang=js&



/* harmony default export */ var K012_ProductDetailvue_type_script_lang_js_ = ({
  name: 'Ko12ProductDetail',
  components: {
    selectGroup: () => __webpack_require__.e(/* import() */ 192).then(__webpack_require__.bind(null, 622)),
    ProductSlide: () => __webpack_require__.e(/* import() */ 73).then(__webpack_require__.bind(null, 1270))
  },
  filters: {
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase();
      }
      return '';
    }
  },
  mixins: [elemenTiptap["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    tempData: {
      type: Object,
      required: true
    },
    settingByTemplate12: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
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
      activeZoom: true
    };
  },
  computed: {
    productsData() {
      return this.$store.getters['products/allProduct'];
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
    envios() {
      return this.dataStore.medios_envio;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    precio() {
      if (this.data.detalle.precio) {
        return `$${this.data.detalle.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
      }
    },
    whatsapp() {
      return this.dataStore.tienda.whatsapp;
    },
    category() {
      return this.productsData.filter(product => product.categoria == this.data.detalle.categoria_producto.nombre_categoria_producto && product.id !== this.data.detalle.id);
    }
  },
  watch: {
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
  mounted() {
    this.$store.state.beforeCombination = [];
    if (this.productsData.length) {
      this.getDataProduct();
    } else {
      this.getDataProductPrev();
    }
    if (Object.keys(this.dataStore.medios_envio).length) {
      this.setOptionEnvio();
    }
  },
  methods: {
    closeModalpolitics() {
      this.$store.state.modalproductDetails = false;
    },
    getDataProduct() {
      const idOfSlug = this.tempData.id;
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
        envio_gratis: this.data.detalle.envio_gratis
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
      this.$store.state.modalproductDetails = false;
      this.$store.commit('SET_OPEN_ORDER', true);
      // this.$store.state.orderComponent = true
      this.$store.dispatch('SEND_ADD_TO_CART', 1);
    },
    GoPayments() {
      let objeto = {
        id: this.data.info.id,
        cantidad: this.quantityValue,
        combinacion: this.salesData && this.salesData.combinacion ? this.salesData.combinacion : undefined
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
        if (this.layourUnicentro) {
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
      let baseUrlMovil = 'https://api.whatsapp.com/send?phone=';
      let baseUrlPc = 'https://web.whatsapp.com/send?phone=';
      let urlProduct = window.location.href;
      let text = `Hola 😀, %0AEstoy en tu tienda ${this.dataStore.tienda.nombre} y me interesa el producto: ${this.data.detalle.nombre}%0A%0ALink de compra: ${urlProduct}%0A`;
      if (this.dataStore.tienda.whatsapp.charAt(0) == '+') {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp.slice(1);
        if (this.mobileCheck()) {
          window.open(`${baseUrlMovil}${phone_number_whatsapp}&text=${text}`, '_blank');
        } else {
          window.open(`${baseUrlPc}${phone_number_whatsapp}&text=${text}`, '_blank');
        }
      } else {
        if (this.mobileCheck()) {
          window.open(`${baseUrlMovil}57${this.dataStore.tienda.whatsapp}&text=${text}`, '_blank');
        } else {
          window.open(`${baseUrlPc}57${this.dataStore.tienda.whatsapp}&text=${text}`, '_blank');
        }
      }
    },
    WPQuotation() {
      let baseUrlMovil = 'https://api.whatsapp.com/send?phone=';
      let baseUrlPc = 'https://web.whatsapp.com/send?phone=';
      let urlProduct = window.location.href;
      let text = `Hola%20%F0%9F%98%80%2C%0AEstoy%20en%20tu%20tienda%20%2A${this.dataStore.tienda.nombre}%2A%20y%20quiero%20cotizar%20este%20producto%3A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.data.detalle.nombre}%2A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0ALink%3A%20${urlProduct}`;
      if (this.dataStore.tienda.whatsapp.charAt(0) == '+') {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp.slice(1);
        if (this.mobileCheck()) {
          window.open(`${baseUrlMovil}${phone_number_whatsapp}&text=${text}`, '_blank');
        } else {
          window.open(`${baseUrlPc}${phone_number_whatsapp}&text=${text}`, '_blank');
        }
      } else {
        if (this.mobileCheck()) {
          window.open(`${baseUrlMovil}57${this.dataStore.tienda.whatsapp}&text=${text}`, '_blank');
        } else {
          window.open(`${baseUrlPc}57${this.dataStore.tienda.whatsapp}&text=${text}`, '_blank');
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template12/K012-ProductDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var template12_K012_ProductDetailvue_type_script_lang_js_ = (K012_ProductDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template12/K012-ProductDetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(707)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template12_K012_ProductDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "692b4e04",
  "2f53cd35"
  
)

/* harmony default export */ var K012_ProductDetail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(708);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0ead701d", content, true, context)
};

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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "element-tiptap"
var external_element_tiptap_ = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./mixins/elemenTiptap.vue?vue&type=script&lang=js&

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
  "5e638259"
  
)

/* harmony default export */ var elemenTiptap = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K012_ProductDetail_vue_vue_type_style_index_0_id_692b4e04_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(426);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K012_ProductDetail_vue_vue_type_style_index_0_id_692b4e04_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K012_ProductDetail_vue_vue_type_style_index_0_id_692b4e04_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K012_ProductDetail_vue_vue_type_style_index_0_id_692b4e04_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_K012_ProductDetail_vue_vue_type_style_index_0_id_692b4e04_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-692b4e04]{font-family:var(--font-style-1)!important}.container-productDetail[data-v-692b4e04]{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:flex-start;padding:20px 30px 0;position:relative;width:100%}.section[data-v-692b4e04]{display:flex;justify-content:space-between;width:100%}.wrapper-description[data-v-692b4e04]{margin-top:20px;width:100%}.wrapper-left[data-v-692b4e04]{flex:1;flex-direction:row;margin-right:15px}.wrapper-left[data-v-692b4e04],.wrapper-right[data-v-692b4e04]{display:flex;padding-bottom:10px;width:100%}.wrapper-right[data-v-692b4e04]{flex:1;flex-direction:column}.content-right[data-v-692b4e04]{margin-left:20px}.text-name[data-v-692b4e04]{color:#445a64;color:#0f2930;font-size:17px;font-weight:600;line-height:20px}.text-marca[data-v-692b4e04]{color:rgba(21,20,57,.541);font-size:16px;font-stretch:semi-condensed;font-style:normal}.text-promocion[data-v-692b4e04]{color:rgba(55,4,4,.61);font-size:14px;font-weight:700;margin-top:10px;-webkit-text-decoration:line-through;text-decoration:line-through}.wrapper-price_space[data-v-692b4e04]{margin-top:10px}.wrapper-price[data-v-692b4e04]{align-items:flex-start;display:flex;flex-direction:row;justify-content:left;margin-bottom:12px}.wrapper-price>p[data-v-692b4e04]:nth-child(2){margin-left:5px}.text-precio[data-v-692b4e04]{color:#000;font-size:30px;font-weight:700;line-height:24px}.card-descuento[data-v-692b4e04]{border-radius:3px;color:#00a650;font-size:12px}.text-variant[data-v-692b4e04]{color:#0f2930;font-size:15px;font-weight:600}.content-text-desc[data-v-692b4e04]{color:#0f2930;font-size:14px;margin-bottom:10px;margin-top:10px}.text-desc[data-v-692b4e04]{color:rgba(21,20,57,.541);font-size:14px;font-weight:400;line-height:1.5;text-decoration-color:currentcolor;text-decoration-line:none;text-decoration-style:solid;-webkit-text-decoration:none;text-decoration:none}.content_buy_action[data-v-692b4e04]{display:flex;flex-direction:row}.card-info-2[data-v-692b4e04]{align-items:center;background:#35dd8d;border-radius:5px;color:#000;display:flex;font-size:12px;font-weight:700;justify-content:center;margin-bottom:10px;margin-right:10px;padding:1px 4px}.content_card-info[data-v-692b4e04]{display:inline;display:initial}.card-info-1[data-v-692b4e04]{align-items:center;background:#e71f77;border-radius:5px;color:#fff;display:flex;font-size:12px;justify-content:center;margin-bottom:10px;padding:1px 4px}.content-description[data-v-692b4e04]{display:flex;margin-bottom:20px;width:100%}.responsive-purchase[data-v-692b4e04]{bottom:0;justify-content:center;position:sticky;z-index:2}.ko-input[data-v-692b4e04],.responsive-purchase[data-v-692b4e04]{align-items:center;display:flex;width:100%}.ko-input[data-v-692b4e04]{background-color:#fafaf8;justify-content:space-between;padding:12px 0}.quantity-resposive[data-v-692b4e04]{display:flex;flex-direction:row}.quantity_remove[data-v-692b4e04]{border:1px solid #000;border-bottom-left-radius:var(--radius_btn);border-right-style:none;border-top-left-radius:var(--radius_btn);cursor:pointer;width:3em}.quantity_remove[data-v-692b4e04],.quantity_value[data-v-692b4e04]{background:transparent;height:38px}.quantity_value[data-v-692b4e04]{align-items:center;border-color:#000;border-style:solid none;border-width:1px;color:#000;display:flex;font-size:1em;justify-content:center;padding-left:10px;padding-right:10px;width:2.5em}.quantity_add[data-v-692b4e04]{background:transparent;border:1px solid #000;border-bottom-right-radius:var(--radius_btn);border-left-style:none;border-top-right-radius:var(--radius_btn);cursor:pointer;height:38px;width:3em}.btn-responsive[data-v-692b4e04]{background:#222;border:none;border-radius:var(--radius_btn);box-shadow:0 0 2px rgba(52,58,67,.1),0 2px 5px rgba(52,58,67,.08),0 5px 15px rgba(52,58,67,.08);color:#fff;cursor:pointer;font-size:14px;height:100%;margin-left:15px;padding:6px 10px;transition:all .2s ease-in;width:100%}.btn-responsive span[data-v-692b4e04]{font-size:16px;font-weight:600}.icon[data-v-692b4e04]{color:#000;font-size:16px;transition:all .2s ease-in}.icon[data-v-692b4e04]:hover{color:#128c7e}.wrapper-btn[data-v-692b4e04]{padding:5px 0}.card-info-1-res[data-v-692b4e04],.wrapper-btn[data-v-692b4e04]{align-items:center;display:flex;justify-content:center;width:100%}.card-info-1-res[data-v-692b4e04]{background:#cfcfcf;border-radius:var(--radius_btn);color:#4c4c4c;font-size:14px;font-weight:600;height:36px;padding:6px 10px}.container-alert[data-v-692b4e04]{align-items:center;background-color:#fae84b;border:1px solid #e6d542;border-radius:6px;color:#000;display:flex;font-size:14px;justify-content:center;left:5px;position:absolute;top:-33px;width:120px}.alert[data-v-692b4e04]{padding:5px;text-align:center}.container-variants[data-v-692b4e04]{margin-top:15px}.text-variant-type[data-v-692b4e04]{color:#0f2930;font-size:14px}.editor[data-v-692b4e04]{color:transparent;width:100%}.editor[data-v-692b4e04] .el-tiptap-editor>.el-tiptap-editor__content{background-color:transparent;border:none;padding:0 5px}.editor[data-v-692b4e04] .el-tiptap-editor__menu-bubble{display:none}.editor[data-v-692b4e04] .el-tiptap-editor__content h1{font-family:var(--font-style-1);font-size:2em}.editor[data-v-692b4e04] .el-tiptap-editor__content h2{font-family:var(--font-style-1);font-size:1.5em}.editor[data-v-692b4e04] .el-tiptap-editor__content h3{font-family:var(--font-style-1);font-size:1.17em}.editor[data-v-692b4e04] .el-tiptap-editor__content h4{font-family:var(--font-style-1);font-size:1.12em}.editor[data-v-692b4e04] .el-tiptap-editor__content h5{font-family:var(--font-style-1);font-size:.83em}.editor[data-v-692b4e04] .el-tiptap-editor__content blockquote,.editor[data-v-692b4e04] .el-tiptap-editor__content code,.editor[data-v-692b4e04] .el-tiptap-editor__content em,.editor[data-v-692b4e04] .el-tiptap-editor__content li,.editor[data-v-692b4e04] .el-tiptap-editor__content ol,.editor[data-v-692b4e04] .el-tiptap-editor__content p,.editor[data-v-692b4e04] .el-tiptap-editor__content pre,.editor[data-v-692b4e04] .el-tiptap-editor__content s,.editor[data-v-692b4e04] .el-tiptap-editor__content span,.editor[data-v-692b4e04] .el-tiptap-editor__content strong,.editor[data-v-692b4e04] .el-tiptap-editor__content ul{font-family:var(--font-style-1)}.editor[data-v-692b4e04] .el-tiptap-editor__content .image-view__body__image{cursor:none;pointer-events:none}.editor[data-v-692b4e04] .el-popper.el-tiptap-image-popper{display:none}@media (max-width:685px){.container-productDetail[data-v-692b4e04]{padding:0}.section[data-v-692b4e04]{flex-direction:column;justify-content:center}.wrapper-right[data-v-692b4e04]{align-items:center;justify-content:center;padding-bottom:0}.content-right[data-v-692b4e04]{margin-left:0;padding:5px 15px;width:100%}.text-name[data-v-692b4e04]{color:#445a64;font-size:18px;font-weight:500;margin-top:10px}.content-description[data-v-692b4e04]{padding:0 15px 20px}}@media (max-width:500px){.ko-input[data-v-692b4e04]{padding:12px 10px}}.modal-content[data-v-692b4e04]{-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:animatetop-692b4e04;animation-name:animatetop-692b4e04;background-color:#fefefe;border:1px solid #888;border-radius:8px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);margin:auto;max-height:600px;overflow-y:auto;padding:0;position:relative}.modal-content[data-v-692b4e04]::-webkit-scrollbar{width:10px}.modal-content[data-v-692b4e04]::-webkit-scrollbar-thumb{background:#a3a3a3;border-radius:4px}.modal-content[data-v-692b4e04]::-webkit-scrollbar-thumb:active{background-color:#777}.modal-content[data-v-692b4e04]::-webkit-scrollbar-thumb:hover{background:#686868;box-shadow:0 0 2px 1px rgba(0,0,0,.401)}@keyframes animatetop-692b4e04{0%{opacity:0;top:-300px}to{opacity:1;top:0}}.close[data-v-692b4e04]{color:#fff;float:right;font-size:28px;font-weight:600}.close[data-v-692b4e04]:focus,.close[data-v-692b4e04]:hover{color:#ccc;cursor:pointer;-webkit-text-decoration:none;text-decoration:none}.modal-header[data-v-692b4e04]{align-items:center;background-color:#222;color:#fff;display:flex;justify-content:space-between;padding:10px 20px;position:sticky;top:0;width:100%;z-index:2}.txt-Legal[data-v-692b4e04]{color:#fff;font-family:\"Poppins\",Helvetica,Arial,sans-serif!important;font-size:16px;font-weight:600}@media (min-width:300px){.modal-content[data-v-692b4e04]{width:100%}}@media (min-width:768px){.modal-content[data-v-692b4e04]{width:70%}}@media (min-width:1400px){.modal-content[data-v-692b4e04]{width:50%}}.card[data-v-692b4e04]{max-height:460px;min-height:460px}.spinner[data-v-692b4e04]{animation:sk-rotate-692b4e04 2s linear infinite;height:40px;margin:50px auto;position:relative;text-align:center;width:40px}.dot1[data-v-692b4e04],.dot2[data-v-692b4e04]{animation:sk-bounce-692b4e04 2s ease-in-out infinite;background-color:#4429b4;border-radius:100%;display:inline-block;height:60%;position:absolute;top:0;width:60%}.dot2[data-v-692b4e04]{animation-delay:-1s;bottom:0;top:auto}@keyframes sk-rotate-692b4e04{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@keyframes sk-bounce-692b4e04{0%,to{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template12-k012-product-detail.js.map