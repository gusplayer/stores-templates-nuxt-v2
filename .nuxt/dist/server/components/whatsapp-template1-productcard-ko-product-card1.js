exports.ids = [323];
exports.modules = {

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(347);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2068926a", content, true, context)
};

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_68423b03_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(206);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_68423b03_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_68423b03_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_68423b03_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ko_ProductCard_1_vue_vue_type_style_index_0_id_68423b03_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper-card[data-v-68423b03]{align-items:center;background-color:#f8f9fb;border-bottom:1px solid hsla(0,0%,84%,.473);border-radius:0;box-sizing:border-box;display:flex;justify-content:center;padding-bottom:4px;transition:all .2s ease-in;width:100%}.container-card[data-v-68423b03]{align-items:flex-start;display:flex;overflow:hidden;width:100%}.wrapper-movil[data-v-68423b03]{display:flex;flex-direction:row;position:relative;width:100%}.wrapper-image[data-v-68423b03]{margin-right:5px;max-width:110px}.product-image[data-v-68423b03],.wrapper-image[data-v-68423b03]{border-radius:6px;height:100%;width:100%}.product-image[data-v-68423b03]{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.card-info-1[data-v-68423b03]{background:#e71f77;color:#fff;top:74px}.card-info-1[data-v-68423b03],.card-info-2[data-v-68423b03]{align-items:center;border-radius:var(--radius_btn);display:flex;font-size:10px;justify-content:center;left:0;padding:1px 2px;position:absolute;z-index:2}.card-info-2[data-v-68423b03]{background:#35dd8d;color:#000;font-weight:700;top:92px}.wrapper-text[data-v-68423b03]{justify-content:space-between}.content-name-product-movil[data-v-68423b03],.wrapper-text[data-v-68423b03]{display:flex;flex-direction:column;width:100%}.content-name-product-movil[data-v-68423b03]{align-items:flex-start;justify-content:flex-start;margin-top:1px;padding:0 10px}.card-text-movil-title[data-v-68423b03]{color:#0f2930;color:#445a64;font-size:15px;font-weight:500;line-height:1}.card-text-movil[data-v-68423b03]{color:#000;color:#0f2930;font-size:13px;font-weight:300}.content-text-price-movil-cart[data-v-68423b03]{align-items:center;display:flex;flex-direction:column;justify-content:space-between;width:100%}.wrapper-price[data-v-68423b03]{align-self:flex-start}.content-price[data-v-68423b03],.wrapper-price[data-v-68423b03]{align-items:center;display:flex;flex-direction:row;justify-content:center}.card-price-1-movil[data-v-68423b03]{color:#0f2930;text-align:center;-webkit-text-decoration:line-through;text-decoration:line-through}.card-price-1-movil[data-v-68423b03],.card-price-2[data-v-68423b03]{font-size:14px;font-weight:700;line-height:1}.card-price-2[data-v-68423b03]{color:#000;color:#0f2930;margin-top:8px;text-align:left}.separator-price[data-v-68423b03]{color:#4c4c4c;margin-left:5px;margin-right:5px;margin-top:8px;text-align:center}.card-descuento[data-v-68423b03]{align-self:flex-end;background:#fe5858;border-radius:3px;color:#fff;display:flex;font-size:12px;justify-content:center;margin-left:5px;padding:0 4px;position:relative;top:-8px}.Content-btn-movil[data-v-68423b03]{align-items:flex-start;align-self:flex-end;display:flex;height:40px}.content-soldOut[data-v-68423b03]{display:flex;flex-direction:row;justify-content:space-around;width:100%}.icon-shop[data-v-68423b03]{max-height:20px;max-width:20px}.btn[data-v-68423b03]{align-items:center;border-radius:4px;box-shadow:0 1px 3px rgba(84,81,81,.12),0 1px 2px rgba(82,82,82,.24);box-sizing:border-box;cursor:pointer;display:flex;font-size:12px;font-weight:600;justify-content:center;margin-right:4px;padding:6px 10px;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:all .3s cubic-bezier(.25,.8,.25,1)}.wp-icon[data-v-68423b03]{bottom:3px;font-size:20px}@media (max-width:330px){.wrapper-image[data-v-68423b03]{max-width:105px}.card-text-movil-title[data-v-68423b03]{font-size:15px}.card-info-1[data-v-68423b03]{top:70px}.card-info-2[data-v-68423b03]{top:88px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp/template1/_productcard/Ko-ProductCard-1.vue?vue&type=template&id=68423b03&scoped=true&
var render = function render() {
  var _vm$product;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper-card"
  }, [_vm._ssrNode("<div class=\"container-card\" data-v-68423b03>", "</div>", [_vm._ssrNode("<div class=\"wrapper-movil\" data-v-68423b03>", "</div>", [_vm._ssrNode((_vm.soldOut ? "<p class=\"card-info-1\" data-v-68423b03>" + _vm._ssrEscape(_vm._s(_vm.$t('home_cardAgotado'))) + "</p>" : "<!---->") + " " + (!_vm.getFreeShipping ? "<p class=\"card-info-2\" data-v-68423b03>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('home_cardGratis')) + "\n      ") + "</p>" : "<!---->") + " "), _c('nuxt-link', {
    staticClass: "wrapper-image",
    attrs: {
      "to": {
        path: `/wa/${_vm.dataStore.tienda.id_tienda}/productos/` + _vm.product.slug
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: ((_vm$product = _vm.product) === null || _vm$product === void 0 ? void 0 : _vm$product.foto_cloudinary) == 'sin_foto.jpeg' ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png' : _vm.idCloudinary(_vm.product.foto_cloudinary, 550, 550),
      expression: "\n            product?.foto_cloudinary == 'sin_foto.jpeg'\n              ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'\n              : idCloudinary(product.foto_cloudinary, 550, 550)\n          "
    }],
    staticClass: "product-image",
    class: !_vm.soldOut ? '' : 'grayscale',
    attrs: {
      "width": "265",
      "height": "265",
      "loading": "lazy",
      "alt": "Product Img"
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper-text\" data-v-68423b03>", "</div>", [_c('nuxt-link', {
    staticClass: "content-name-product-movil",
    attrs: {
      "to": {
        path: `/wa/${_vm.dataStore.tienda.id_tienda}/productos/` + _vm.product.slug
      }
    }
  }, [_vm.product.nombre.length >= 42 ? _c('p', {
    staticClass: "card-text-movil-title"
  }, [_vm._v("\n            " + _vm._s(`${_vm.product.nombre.slice(0, 42)}..`) + "\n          ")]) : _c('p', {
    staticClass: "card-text-movil-title"
  }, [_vm._v("\n            " + _vm._s(`${_vm.product.nombre.slice(0, 42)}`) + "\n          ")]), _vm._v(" "), _vm.product.marca ? _c('p', {
    staticClass: "card-text-movil"
  }, [_vm._v("\n            " + _vm._s(_vm.product.marca) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm.product.precio ? _c('div', {
    staticClass: "content-text-price-movil-cart"
  }, [_c('div', {
    staticClass: "wrapper-price"
  }, [_vm.estadoCart && _vm.minPrice != _vm.maxPrice ? _c('div', {
    staticClass: "content-price"
  }, [_vm.product.precio > 0 || _vm.product.precio ? _c('p', {
    staticClass: "card-price-2"
  }, [_vm._v("\n                  " + _vm._s(_vm._f("currency")(_vm.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                ")]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "separator-price"
  }, [_vm._v("-")]), _vm._v(" "), _vm.product.precio > 0 || _vm.product.precio ? _c('p', {
    staticClass: "card-price-2"
  }, [_vm._v("\n                  " + _vm._s(_vm._f("currency")(_vm.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                ")]) : _vm._e()]) : _c('div', [_vm.product.precio > 0 ? _c('p', {
    staticClass: "card-price-2"
  }, [_vm._v("\n                  " + _vm._s(_vm._f("currency")(_vm.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                ")]) : _vm._e()])])]) : _vm._e()]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"Content-btn-movil\" data-v-68423b03>", "</div>", [!_vm.estadoCart && !_vm.soldOut && !_vm.spent ? _vm._ssrNode("<div class=\"content-soldOut\" data-v-68423b03>", "</div>", [_vm.product.precio > 0 ? _vm._ssrNode("<div class=\"btn\"" + _vm._ssrStyle({
    "margin-right": "5px"
  }, `background: ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario ? _vm.settingByTemplate.color_primario : '#25D366'}; color:${_vm.settingByTemplate && _vm.settingByTemplate.color_secundario ? _vm.settingByTemplate.color_secundario : '#FFFFFF'};`, null) + " data-v-68423b03>", "</div>", [_c('shopWa-icon', {
    staticClass: "wp-icon"
  })], 1) : _vm._e(), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "btn",
    style: `background: ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario ? _vm.settingByTemplate.color_primario : '#25D366'}; color:${_vm.settingByTemplate && _vm.settingByTemplate.color_secundario ? _vm.settingByTemplate.color_secundario : '#FFFFFF'};`,
    attrs: {
      "to": {
        path: `/wa/${_vm.dataStore.tienda.id_tienda}/productos/` + _vm.product.slug
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.dataStore.tienda.id_tienda == 13015 ? _vm.$t('productdetail_btnComprar') : _vm.$t('home_cardvermas')) + "\n            ")])], 2) : _c('nuxt-link', {
    staticClass: "btn",
    style: `background: ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario ? _vm.settingByTemplate.color_primario : '#25D366'}; color:${_vm.settingByTemplate && _vm.settingByTemplate.color_secundario ? _vm.settingByTemplate.color_secundario : '#FFFFFF'};`,
    attrs: {
      "to": {
        path: `/wa/${_vm.dataStore.tienda.id_tienda}/productos/` + _vm.product.slug
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.dataStore.tienda.id_tienda == 13015 ? _vm.$t('productdetail_btnComprar') : _vm.$t('home_cardvermas')) + "\n          ")])], 1)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/whatsapp/template1/_productcard/Ko-ProductCard-1.vue?vue&type=template&id=68423b03&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/whatsapp/template1/_productcard/Ko-ProductCard-1.vue?vue&type=script&lang=js&


/* harmony default export */ var Ko_ProductCard_1vue_type_script_lang_js_ = ({
  name: 'KoWaProductCard1',
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    product: {
      type: Object,
      required: true
    },
    dataStore: {
      type: Object,
      required: true
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
      active: true
    };
  },
  computed: {
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
    },
    settingByTemplate() {
      if (this.$store.state.settingByTemplate) {
        return this.$store.state.settingByTemplate;
      } else {
        return this.$store.state.settingBaseWapir;
      }
    }
    // stateSeller() {
    //   if (
    //     this.dataStore.tienda.id_tienda === 1559 ||
    //     this.dataStore.tienda.id_tienda === 16436
    //   ) {
    //     if (this.product.dealer_whatsapp) {
    //       return true
    //     } else {
    //       return false
    //     }
    //   } else {
    //     return false
    //   }
    // },
  },

  watch: {
    productsCarts() {
      this.getDataProduct();
    }
  },
  mounted() {
    this.idSlug = this.product.id;
    this.productPrice();
    if (this.product.con_variante && this.product.variantes[0].variantes !== '[object Object]') {
      this.estadoCart = true;
    }
  },
  methods: {
    getDataProduct() {
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
    },
    addShoppingCart() {
      if (this.product) {
        this.productIndexCart = null;
        this.getDataProduct();
        if (this.product.id == this.idSlug) {
          let product = {
            id: this.product.id,
            precio: this.product.precio,
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
          this.$message({
            showClose: true,
            message: 'Se agregó el producto correctamente',
            type: 'success'
          });
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
              if (products.precio && products.estado) {
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
              }
            }
          }
        }
      }
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
      let baseUrlPc = 'https://web.whatsapp.com/send?phone=57';
      let urlProduct;
      if (this.dataStore.tienda.dominio) {
        urlProduct = `${this.dataStore.tienda.dominio}wa/${this.product.slug}`;
      } else {
        urlProduct = `http://${this.dataStore.tienda.subdominio}.komercia.store/wa/${this.product.slug}`;
      }
      let text = `text=Hola 😀, %0AEstoy en tu tienda y me interesa el producto: ${this.product.nombre}%0A%0ALink de compra: ${urlProduct}%0A`;
      if (this.dataStore.tienda.whatsapp.length > 10) {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp;
        if (phone_number_whatsapp.charAt(0) === '+') {
          phone_number_whatsapp = phone_number_whatsapp.slice(1);
        }
        if (this.mobileCheck()) {
          window.open(`${baseUrlMovil}${phone_number_whatsapp}&${text}`, '_blank');
        } else {
          window.open(`${baseUrlPc}${phone_number_whatsapp}&${text}`, '_blank');
        }
      } else {
        if (this.mobileCheck()) {
          window.open(`${baseUrlMovil}${this.dataStore.tienda.whatsapp}&${text}`, '_blank');
        } else {
          window.open(`${baseUrlPc}${this.dataStore.tienda.whatsapp}&${text}`, '_blank');
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/whatsapp/template1/_productcard/Ko-ProductCard-1.vue?vue&type=script&lang=js&
 /* harmony default export */ var _productcard_Ko_ProductCard_1vue_type_script_lang_js_ = (Ko_ProductCard_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/whatsapp/template1/_productcard/Ko-ProductCard-1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(346)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _productcard_Ko_ProductCard_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "68423b03",
  "7d20339c"
  
)

/* harmony default export */ var Ko_ProductCard_1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=whatsapp-template1-productcard-ko-product-card1.js.map