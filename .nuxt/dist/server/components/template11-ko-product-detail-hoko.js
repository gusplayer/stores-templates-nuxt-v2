exports.ids = [59];
exports.modules = {

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-ProductDetailHoko.vue?vue&type=template&id=a0726472&scoped=true&
var render = function render() {
  var _vm$settingByTemplate, _vm$settingByTemplate2, _vm$settingByTemplate3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-productDetail",
    style: [_vm.settingByTemplate11[0].detailsProduct, _vm.settingByTemplate11[0].settingGeneral, {
      '--font-style-1': (_vm$settingByTemplate = (_vm$settingByTemplate2 = _vm.settingByTemplate11[0]) === null || _vm$settingByTemplate2 === void 0 ? void 0 : (_vm$settingByTemplate3 = _vm$settingByTemplate2.settingGeneral) === null || _vm$settingByTemplate3 === void 0 ? void 0 : _vm$settingByTemplate3.fount_1) !== null && _vm$settingByTemplate !== void 0 ? _vm$settingByTemplate : 'Roboto'
    }]
  }, [_vm.loading ? _vm._ssrNode("<div class=\"container-productDetail-loading\" data-v-a0726472>", "</div>") : _vm._ssrNode("<div class=\"container-productDetail\" data-v-a0726472>", "</div>", [_vm._ssrNode("<div class=\"banner-detail\" data-v-a0726472>", "</div>", [_vm._ssrNode("<div class=\"crumb\" data-v-a0726472>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/productosHoko"
    }
  }, [_c('p', {
    staticClass: "txt-crumb s1"
  }, [_vm._v(_vm._s(_vm.$t('header_inicio')))])]), _vm._ssrNode(" <p class=\"separatorCrumb\" data-v-a0726472>/</p> " + (_vm.data.name ? "<p class=\"txt-crumb s2\" data-v-a0726472>" + _vm._ssrEscape("\n          " + _vm._s(_vm.data.name) + "\n        ") + "</p>" : "<!---->"))], 2)]), _vm._ssrNode(" <div class=\"empty\" data-v-a0726472></div> "), _vm._ssrNode("<div class=\"product-content\" data-v-a0726472>", "</div>", [_vm._ssrNode("<div class=\"left\" data-v-a0726472>", "</div>", [_vm._ssrNode("<div class=\"wrapper-left\" data-v-a0726472>", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }],
    ref: "mySwiper",
    staticClass: "photos"
  }, [_vm.data.images ? _vm._ssrNode("<div class=\"swiper-wrapper\" data-v-a0726472>", "</div>", _vm._l(_vm.data.images, function (foto, itemsfoto) {
    return _vm._ssrNode("<div class=\"swiper-slide photos_selected\" data-v-a0726472>", "</div>", [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: foto,
        expression: "foto"
      }],
      staticClass: "img-list",
      attrs: {
        "alt": "Product Img"
      }
    }, [])]);
  }), 0) : _vm._e()]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-photo_main\" data-v-a0726472>", "</div>", [_vm._ssrNode("<div class=\"photo_main\" data-v-a0726472>", "</div>", [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.selectPhotoUrl,
      expression: "selectPhotoUrl"
    }],
    staticClass: "photo_main",
    attrs: {
      "alt": "Product Zoom"
    }
  }, [])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"photos_responsive\" data-v-a0726472>", "</div>", [_c('ProductSlide', {
    attrs: {
      "photos": _vm.data.images
    }
  })], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"right\"" + _vm._ssrStyle(null, `margin-top:${_vm.settingByTemplate11[0].detailsProduct['--marginTopTitle']};`, null) + " data-v-a0726472>", "</div>", [_vm._ssrNode("<div class=\"content-items-right\" data-v-a0726472>", "</div>", [_vm._ssrNode("<div class=\"content-name\" data-v-a0726472><p class=\"text-name\"" + _vm._ssrStyle(null, `font-size:${_vm.settingByTemplate11[0].detailsProduct['--fontSizeTitle']}; font-weight:${_vm.settingByTemplate11[0].detailsProduct['--fontWeighTitle']};`, null) + " data-v-a0726472>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.name) + "\n            ") + "</p></div> <div class=\"content-price\" data-v-a0726472><p class=\"text-price\"" + _vm._ssrStyle(null, `font-size:${_vm.settingByTemplate11[0].detailsProduct['--fontSizePrice']}; font-weight:${_vm.settingByTemplate11[0].detailsProduct['--fontWeighPrice']};`, {
    display: _vm.data.price ? '' : 'none'
  }) + " data-v-a0726472>" + _vm._ssrEscape("\n              " + _vm._s(_vm._f("currency")(_vm.data.price)) + "\n            ") + "</p></div> <div class=\"empty\" data-v-a0726472></div> <div class=\"content-stock\" data-v-a0726472><p class=\"stock-text-1\" data-v-a0726472>" + _vm._ssrEscape(_vm._s(_vm.$t('productdetail_stock')) + ":") + "</p> " + (!_vm.spent ? "<p class=\"stock-text-2\" data-v-a0726472>" + _vm._ssrEscape("\n              " + _vm._s(_vm.data.stock.amount) + " Unidades\n            ") + "</p>" : "<p class=\"stock-text-2\" data-v-a0726472>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('home_cardAgotado')) + "\n            ") + "</p>") + "</div> <div class=\"empty\" data-v-a0726472></div> "), _vm._ssrNode("<div class=\"w-full flex flex-row items-center\" data-v-a0726472>", "</div>", [_vm._ssrNode("<p class=\"text-variant\" style=\"margin-right: 10px\" data-v-a0726472>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('productdetail_compartir')) + "\n            ") + "</p> "), _vm._ssrNode("<a" + _vm._ssrAttr("href", _vm.sharingFacebook) + " target=\"_blank\" rel=\"noreferrer noopener\" class=\"btn-facebook\" data-v-a0726472>", "</a>", [_c('facebook-icon', {
    staticClass: "wp-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<button class=\"btn-whatsapp\" data-v-a0726472>", "</button>", [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content-direction-btns mt-10\" data-v-a0726472>", "</div>", [_vm._ssrNode("<div class=\"content-quantity-boxes\" data-v-a0726472>", "</div>", [_vm._ssrNode("<div class=\"box-quantity\" data-v-a0726472><p class=\"txt-quantity\" data-v-a0726472>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.quantityValue) + "\n                ") + "</p></div> "), _vm._ssrNode("<div class=\"box-quantity-btns\" data-v-a0726472>", "</div>", [_vm._ssrNode("<div class=\"btn-quantity btn1\" data-v-a0726472>", "</div>", [_c('FlechaUp-icon', {
    staticClass: "text-icon"
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn-quantity btn2\" data-v-a0726472>", "</div>", [_c('Flechadown-icon', {
    staticClass: "text-icon"
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"content-addCart\" data-v-a0726472>" + (!_vm.spent ? "<button id=\"AddToCartTag\" class=\"btn\" data-v-a0726472><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"minicart-icon\" data-v-a0726472><path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\" data-v-a0726472></path></svg> <p class=\"text-addCart\" data-v-a0726472>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_comprarAhora')) + "\n                ") + "</p></button>" : _vm.spent ? "<button disabled=\"disabled\" class=\"btn-disabled\" data-v-a0726472><p class=\"text-addCart\" data-v-a0726472>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('home_cardAgotado')) + "\n                ") + "</p></button>" : "<!---->") + "</div>")], 2)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tab mb-20\" data-v-a0726472>", "</div>", [_c('K011-optTabHoko', {
    attrs: {
      "data-store": _vm.dataStore,
      "data": _vm.data.stock.product
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template11/ko-ProductDetailHoko.vue?vue&type=template&id=a0726472&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template11/ko-ProductDetailHoko.vue?vue&type=script&lang=js&


/* harmony default export */ var ko_ProductDetailHokovue_type_script_lang_js_ = ({
  name: 'Ko11ProductDetailHoko',
  components: {
    K011OptTabHoko: () => __webpack_require__.e(/* import() */ 70).then(__webpack_require__.bind(null, 1266)),
    ProductSlide: () => __webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(null, 1268))
  },
  filters: {
    currency(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
      }
      return '';
    },
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase();
      }
      return '';
    }
  },
  mixins: [idCloudinary["a" /* default */]],
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    whatsapp: {
      type: String,
      required: true
    },
    facebookPixel: {
      type: Object,
      required: true
    },
    settingByTemplate11: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      data: {},
      maxQuantityValue: 1,
      quantityValue: 1,
      loading: true,
      spent: false,
      selectPhotoUrl: '',
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
      sharingFacebook: ''
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    dataHoko() {
      return this.$store.state.dataHoko;
    }
  },
  watch: {
    quantityValue(value) {
      if (value > this.maxQuantityValue) {
        this.quantityValue = this.maxQuantityValue;
      }
    }
  },
  mounted() {
    this.asyncauthToken();
  },
  methods: {
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
      let text = `Hola 😀, %0AQuiero compartir contigo éste  producto, seguro te va a encantar: ${this.data.name}%0A%0ALink de compra: ${urlProduct}%0A`;
      if (this.mobileCheck()) {
        window.open(`${baseUrlMovil}text=${text}`, '_blank');
      } else {
        window.open(`${baseUrlPc}text=${text}`, '_blank');
      }
    },
    async asyncauthToken() {
      if (this.dataHoko.token) {
        this.getProductsHoko(this.$route.params.slug, this.dataHoko.token);
      }
    },
    async getProductsHoko(id, token) {
      let config = {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*'
        }
      };
      await external_axios_default.a.get(`https://hoko.com.co/api/member/myproducts/${id}`, config).then(response => {
        this.loading = false;
        this.data = response.data.product;
        if (this.data) {
          this.selectedPhoto(this.data.images[0]);
          this.maxQuantityValue = this.data.stock.amount;
          if (this.data.stock.amount == 0 || this.maxQuantityValue <= 0) {
            this.spent = true;
          }
          this.sharing.url = window.location.href;
          this.sharing.quote = `Explora%20el%20producto%20${this.data.name}%2C%20te%20van%20a%20encantar.%0ALink%20del%20producto%3A%20${this.sharing.url}`;
          this.sharingFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.sharing.url}&quote=${this.sharing.quote}`;
        }
      });
    },
    changeSlide() {
      this.swiper.slidePrev(700, false);
    },
    GoPayments() {
      let objeto = {
        id: this.data.id,
        cantidad: this.quantityValue,
        combinacion: undefined
      };
      let json = {
        products: [objeto],
        tienda: {
          id: this.$store.state.tienda.id_tienda
        },
        canal: 'HOKO'
      };
      json = JSON.stringify(json);
      if (json) {
        if (this.layourUnicentro) {
          window.open(`https://checkout.komercia.co/?params=${json}`);
          // if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
          //   window.fbq('track', 'InitiateCheckout')
          // }
          // this.$gtm.push({ event: 'InitiateCheckout' })
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`;
          // if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
          //   window.fbq('track', 'InitiateCheckout')
          // }
          // this.$gtm.push({ event: 'InitiateCheckout' })
        }
      }
    },

    addQuantity() {
      if (this.maxQuantityValue > this.quantityValue) {
        this.quantityValue++;
      } else {
        console.log('Alerta de limite de sku');
      }
    },
    removeQuantity() {
      if (this.quantityValue >= 2) {
        this.quantityValue--;
      }
    },
    selectedPhoto(photo) {
      this.selectPhotoUrl = photo;
    }
  }
});
// CONCATENATED MODULE: ./components/template11/ko-ProductDetailHoko.vue?vue&type=script&lang=js&
 /* harmony default export */ var template11_ko_ProductDetailHokovue_type_script_lang_js_ = (ko_ProductDetailHokovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template11/ko-ProductDetailHoko.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(683)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template11_ko_ProductDetailHokovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a0726472",
  "5509d89f"
  
)

/* harmony default export */ var ko_ProductDetailHoko = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(684);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0f2a52ce", content, true, context)
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

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetailHoko_vue_vue_type_style_index_0_id_a0726472_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(414);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetailHoko_vue_vue_type_style_index_0_id_a0726472_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetailHoko_vue_vue_type_style_index_0_id_a0726472_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetailHoko_vue_vue_type_style_index_0_id_a0726472_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ko_ProductDetailHoko_vue_vue_type_style_index_0_id_a0726472_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-facebook[data-v-a0726472]{background-color:transparent;border:0;border-radius:5px;color:#1877f2;cursor:pointer;display:flex;justify-content:center;margin-right:20px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-facebook[data-v-a0726472]:hover{color:#000}.btn-whatsapp[data-v-a0726472]{background-color:transparent;border:0;border-radius:5px;color:#25d366;cursor:pointer;display:flex;justify-content:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .2s ease-in;width:10px}.btn-whatsapp[data-v-a0726472]:hover{color:#000}.wp-icon[data-v-a0726472]{bottom:3px;font-size:27px}.wrapper-left[data-v-a0726472]{display:flex;flex:2;flex-direction:row;padding-bottom:30px;width:100%}.photos_responsive[data-v-a0726472]{display:none}.photos[data-v-a0726472]{display:flex;margin-right:30px;max-width:110px;position:relative}.swiper-wrapper[data-v-a0726472]{position:relative;width:100%}.swiper-prev[data-v-a0726472]{top:0}.swiper-next[data-v-a0726472],.swiper-prev[data-v-a0726472]{left:20px;position:absolute;z-index:2}.swiper-next[data-v-a0726472]{bottom:0;font-size:25px}.icon-swiper[data-v-a0726472]{color:var(--color_icon);cursor:pointer;font-size:60px}.icon-swiper[data-v-a0726472]:hover{color:var(--hover_text)}.photos_selected[data-v-a0726472]{display:flex;flex-direction:column;justify-content:stretch;max-height:100px;width:100%}.img-list[data-v-a0726472]{border-radius:6px;cursor:pointer;height:100px;margin-bottom:10px;-o-object-fit:contain;object-fit:contain;vertical-align:top;width:100px}.wrapper-photo_main[data-v-a0726472]{margin-right:25px;max-height:600px;max-width:650px;position:relative;width:100%}.photo_main[data-v-a0726472]{border-radius:10px;height:100%;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center;width:100%}.wrapper-productDetail[data-v-a0726472]{align-items:center;background:var(--background_color_1);display:flex;justify-content:center;width:100%}.container-productDetail-loading[data-v-a0726472]{height:calc(100vh - 420px);max-width:1200px;padding:50px 30px 30px}.container-productDetail[data-v-a0726472],.container-productDetail-loading[data-v-a0726472]{align-items:center;background:var(--background_color_1);display:flex;flex-direction:column;justify-content:center;width:100%}.container-productDetail[data-v-a0726472]{height:100%}.left[data-v-a0726472]{align-items:center;justify-content:center}.left[data-v-a0726472],.right[data-v-a0726472]{display:flex;flex-direction:column;width:100%}.right[data-v-a0726472]{align-items:flex-start;justify-content:flex-start}.content-addCart[data-v-a0726472],.content-name[data-v-a0726472],.content-price[data-v-a0726472]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%}.section-suggesProduct[data-v-a0726472]{margin-bottom:40px;margin-top:40px;width:100%}.content-quantity-boxes[data-v-a0726472]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:30px;margin-top:30px;width:100%}.box-quantity[data-v-a0726472]{background-color:transparent;border:1px solid var(--border);width:75px}.box-quantity[data-v-a0726472],.box-quantity-btns[data-v-a0726472]{align-items:center;display:flex;height:50px;justify-content:center;text-align:center}.box-quantity-btns[data-v-a0726472]{border:1px solid var(--color_background_btn);flex-direction:column}.box-quantity-btns[data-v-a0726472],.btn-quantity[data-v-a0726472]{background-color:var(--color_background_btn);width:25px}.btn-quantity[data-v-a0726472]{align-items:center;border-color:var(--color_background_btn);border-right-width:1px;border-top-width:1px;display:flex;height:25px;justify-content:center}.text-icon[data-v-a0726472]{align-items:center;color:var(--color_text_btn);cursor:pointer;display:flex;justify-content:center;width:34px}@media (min-width:300px){.wrapper-left[data-v-a0726472]{padding-bottom:15px}.product-content[data-v-a0726472]{align-items:center;flex-direction:column;justify-content:center;margin-top:40px;width:90%}.content-direction-btns[data-v-a0726472]{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.content-name[data-v-a0726472],.content-price[data-v-a0726472]{margin-bottom:30px}.tab[data-v-a0726472]{display:flex;margin-top:40px;width:90%}.btn[data-v-a0726472],.btn-disabled[data-v-a0726472]{align-items:center;background-color:var(--color_background_btn);color:var(--color_text_btn);display:flex;flex-direction:row;height:54px;justify-content:center;transition:all .15s ease-in;width:100%}.btn:hover .text-addCart[data-v-a0726472]{background:var(--hover_Bg_btn);color:var(--hover_text_btn);transition:all .15s ease-in}.text-name[data-v-a0726472]{color:var(--color_text);line-height:1}.text-name[data-v-a0726472],.text-price[data-v-a0726472]{font-family:var(--font-style-1)!important}.text-price[data-v-a0726472]{color:var(--color_price);letter-spacing:.3px;line-height:26px}.text-addCart[data-v-a0726472]{color:var(--color_text_btn);font-family:var(--font-style-1)!important;font-size:12px;font-weight:600;text-transform:uppercase;white-space:nowrap}.minicart-icon[data-v-a0726472]{fill:var(--color_text_btn);color:var(--color_text_btn);margin-bottom:5px;margin-right:10px}.text-variant[data-v-a0726472]{color:var(--color_subtext);font-family:var(--font-style-1)!important;font-size:16px;font-weight:600;margin-right:10px;transition:all .6s ease-in-out}.banner-detail[data-v-a0726472]{display:none}.section-suggesProduct[data-v-a0726472]{width:90%}.content-items-right[data-v-a0726472]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:20px;width:100%}.empty[data-v-a0726472]{background-color:var(--border);height:1px;max-width:1200px}.content-stock[data-v-a0726472],.empty[data-v-a0726472]{width:100%}.content-stock[data-v-a0726472]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:26px;margin-top:26px}.stock-text-1[data-v-a0726472]{color:var(--color_subtext);font-size:15px;font-weight:400;margin-right:20px;text-align:left}.stock-text-1[data-v-a0726472],.stock-text-2[data-v-a0726472]{font-family:var(--font-style-1)!important}.stock-text-2[data-v-a0726472]{color:var(--color_subtext);font-size:15px;font-weight:400;text-align:left}}@media (min-width:425px){.content-direction-btns[data-v-a0726472]{display:flex;flex-direction:column}}@media (min-width:768px){.banner-detail[data-v-a0726472]{background-position:50%;background-repeat:no-repeat;background-size:cover;justify-items:center;padding-bottom:20px;padding-top:20px}.banner-detail[data-v-a0726472],.crumb[data-v-a0726472]{align-items:center;display:flex;width:100%}.crumb[data-v-a0726472]{flex-direction:row;justify-content:center}.separatorCrumb[data-v-a0726472]{color:var(--breadCrumbs);cursor:pointer;font-size:9px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.separatorCrumb[data-v-a0726472],.txt-crumb[data-v-a0726472]{font-family:var(--font-style-1)!important}.txt-crumb[data-v-a0726472]{color:var(--breadCrumbs);cursor:pointer;font-size:15px;line-height:14px;padding-right:6px;transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.s1[data-v-a0726472]:hover,.s2[data-v-a0726472]:hover{color:var(--hover_text);transition:all .25s ease}.content-addCart[data-v-a0726472]{width:236px}.product-content[data-v-a0726472],.tab[data-v-a0726472]{width:95%}.product-content[data-v-a0726472]{grid-gap:1rem;align-items:flex-start;display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr));justify-content:flex-start}.section-suggesProduct[data-v-a0726472]{width:95%}}@media (min-width:1024px){.tab[data-v-a0726472]{display:flex}.content-direction-btns[data-v-a0726472]{display:flex;flex-direction:column}}@media (max-width:768px){.photos[data-v-a0726472],.wrapper-photo_main[data-v-a0726472]{display:none}.photos_responsive[data-v-a0726472]{box-sizing:border-box;display:flex;height:375px;margin-bottom:10px;max-width:400px;overflow:hidden;width:100%}}@media (min-width:1200px){.product-content[data-v-a0726472],.section-suggesProduct[data-v-a0726472],.tab[data-v-a0726472]{max-width:1200px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template11-ko-product-detail-hoko.js.map