exports.ids = [13];
exports.modules = {

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3f5635f4", content, true, context)
};

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_2c6659f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_2c6659f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_2c6659f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_2c6659f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_2c6659f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_container[data-v-2c6659f6]{background-color:var(--background_color_1)}.card-title[data-v-2c6659f6]{color:var(--color_title);font-size:16px;font-weight:var(--fontWeighTitle)}.card-title[data-v-2c6659f6]:hover{color:var(--hover_text);transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.separator-price[data-v-2c6659f6]{font-size:20px}.separator-price[data-v-2c6659f6],.text-price[data-v-2c6659f6]{color:var(--color_price)!important}.text-price[data-v-2c6659f6]{font-size:20px;font-weight:var(--fontWeighPrice);text-align:left;white-space:nowrap}.text-free[data-v-2c6659f6],.text-sould[data-v-2c6659f6]{transform:translate(-50%,-50%)}.btn[data-v-2c6659f6]:hover{background-color:var(--hover_Bg_btn);color:var(--hover_text_btn);transition-duration:.15s;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}.icon-shop[data-v-2c6659f6]{fill:var(--color_text_btn);margin-bottom:5px;margin-right:5px}#product-card:hover .wrapper_blur[data-v-2c6659f6],#product-card:hover .wrapper_btn[data-v-2c6659f6]{opacity:1;transition-duration:.15s;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1)}@media (min-width:300px){.overlay-top[data-v-2c6659f6]{--tw-bg-opacity:1;--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;box-shadow:0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);height:40px;overflow:hidden;position:absolute;top:10%;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:45px}.overlay-free[data-v-2c6659f6],.overlay-top[data-v-2c6659f6]{right:0}.overlay-free[data-v-2c6659f6]{background-color:#222;border-radius:.25rem;height:10%;overflow:hidden;position:absolute;top:0;transition:.5s ease;width:110px}.text-free[data-v-2c6659f6]{font-size:75%}.overlay-polygon[data-v-2c6659f6]{background-color:transparent;height:5%;right:15px;top:10%;width:5%}.overlay-polygon[data-v-2c6659f6],.overlay-sould[data-v-2c6659f6]{overflow:hidden;position:absolute}.overlay-sould[data-v-2c6659f6]{align-items:center;border-bottom-left-radius:.5rem;border-top-left-radius:.5rem;display:flex;height:20%;justify-content:center;left:60%;right:0;top:0;transition:.5s ease;width:35%}.svg-sould-out[data-v-2c6659f6]{height:40px;width:40px}.content-price[data-v-2c6659f6]{align-items:center;display:flex;flex-direction:row;justify-content:center;width:100%}.separator-price[data-v-2c6659f6]{margin-left:1px;margin-right:1px}}@media (min-width:768px){.text-free[data-v-2c6659f6]{font-size:100%}.svg-sould-out[data-v-2c6659f6]{height:60px;width:60px}.separator-price[data-v-2c6659f6]{margin-left:4px;margin-right:4px}}@media (min-width:1280px){.overlay-top[data-v-2c6659f6]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-2c6659f6]{left:85%;width:40px}.overlay-free[data-v-2c6659f6]{height:35px;left:100%;right:0;top:0;transition:.5s ease;width:0}.container:hover .overlay-free[data-v-2c6659f6]{left:68%;transition-delay:.7s;width:32%}.overlay-polygon[data-v-2c6659f6]{height:5%;left:100%;right:0;top:35px;width:0}.container:hover .overlay-polygon[data-v-2c6659f6]{left:90%;transition-delay:.95s;width:5%}.overlay-sould[data-v-2c6659f6]{height:20%;left:100%;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-2c6659f6]{left:65%;transition-delay:.7s;width:35%}.svg-sould-out[data-v-2c6659f6]{height:60px;width:60px}}@media (min-width:1920px){.overlay-top[data-v-2c6659f6]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-2c6659f6]{left:86%;width:40px}}@media (min-width:2560px){.overlay-top[data-v-2c6659f6]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-2c6659f6]{left:88%;width:40px}.overlay-sould[data-v-2c6659f6]{height:20%;left:100%;right:0;top:5%;transition:.5s ease;width:0}.container:hover .overlay-sould[data-v-2c6659f6]{left:75%;transition-delay:.7s;width:30%}}@media (min-width:3000px){.overlay-top[data-v-2c6659f6]{height:40px;left:100%;right:0;top:35px;width:0}.container:hover .overlay-top[data-v-2c6659f6]{left:89%;width:40px}}", ""]);
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

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/_cardProduct/ProductCard.vue?vue&type=template&id=2c6659f6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "h-full w-full flex flex-col justify-start items-center cursor-pointer relative wrapper_container",
    style: [_vm.settingGeneral, _vm.cardProducts],
    attrs: {
      "id": "product-card"
    }
  }, [_vm._ssrNode("<div class=\"relative max-w-full h-full shadow-sm border rounded-5 container\" data-v-2c6659f6>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.product.foto_cloudinary, 400, 400),
      expression: "idCloudinary(product.foto_cloudinary, 400, 400)"
    }],
    staticClass: "w-full object-cover overflow-hidden rounded-t-5 max-w-[300px] max-h-[350px]",
    class: !_vm.soldOut ? '' : 'grayscale',
    attrs: {
      "width": "294",
      "height": "294",
      "loading": "lazy",
      "alt": "Product Img"
    }
  })]), _vm._ssrNode(" " + (_vm.soldOut ? "<p class=\"absolute bottom-54 right-10 text-12 px-2 py-1 rounded-4 bg-red-500 text-white-white\" data-v-2c6659f6>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('home_cardAgotado')) + "\n    ") + "</p>" : "<!---->") + " " + (!_vm.getFreeShipping ? "<p class=\"absolute bottom-30 right-10 text-12 px-2 py-1 rounded-4 bg-green-500 text-white-white\" data-v-2c6659f6>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('home_cardGratis')) + "\n    ") + "</p>" : "<!---->") + " " + (_vm.product.tag_promocion == 1 && _vm.product.promocion_valor ? "<div class=\"absolute top-10 left-10 py-1 px-5 text-white-white uppercase text-12 bg-red-500 right-auto rounded-4\" data-v-2c6659f6><p class=\"block\" data-v-2c6659f6>" + _vm._ssrEscape(_vm._s(_vm.product.promocion_valor) + "% OFF") + "</p></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"w-full h-full flex flex-col justify-between items-center my-6 mx-10 cursor-default box-border\" data-v-2c6659f6>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('div', {
    staticClass: "w-full flex justify-center items-center"
  }, [_c('p', {
    staticClass: "h-full pt-10 transition-all ease-out duration-0.2 text-center min-h-[58px] max-h-[58px] card-title"
  }, [_vm._v("\n          " + _vm._s(_vm.product.nombre.slice(0, 54)) + "\n          " + _vm._s(_vm.product.nombre.length >= 54 ? '...' : '') + "\n        ")])])]), _vm._ssrNode(" <div class=\"mt-10\" data-v-2c6659f6>" + (_vm.estadoCart == true && _vm.equalsPrice ? "<div data-v-2c6659f6>" + (_vm.minPrice ? "<p class=\"text-price\" data-v-2c6659f6>" + _vm._ssrEscape("\n          " + _vm._s(_vm._f("currency")(_vm.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n        ") + "</p>" : "<!---->") + "</div>" : _vm.estadoCart == true && _vm.minPrice && _vm.maxPrice && !_vm.equalsPrice ? "<div class=\"content-price\" data-v-2c6659f6><div class=\"text-price\" data-v-2c6659f6>" + _vm._ssrEscape("\n          " + _vm._s(_vm._f("currency")(_vm.minPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n        ") + "</div> <p class=\"separator-price\" data-v-2c6659f6>-</p> <div class=\"text-price\" data-v-2c6659f6>" + _vm._ssrEscape("\n          " + _vm._s(_vm._f("currency")(_vm.maxPrice, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n        ") + "</div></div>" : "<div data-v-2c6659f6>" + (_vm.product.precio > 0 || _vm.product.precio ? "<p class=\"text-price\" data-v-2c6659f6>" + _vm._ssrEscape("\n          " + _vm._s(_vm._f("currency")(_vm.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n        ") + "</p>" : "<!---->") + "</div>") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"absolute right-20 top-15 opacity-0 flex flex-col justify-center items-center transition-all ease-in duration-0.3 z-10 wrapper_btn\" data-v-2c6659f6>", "</div>", [_c('nuxt-link', {
    staticClass: "px-12 py-8 shadow-lg rounded-full btn",
    style: `background-color:${_vm.cardProducts.color_btn};color:${_vm.cardProducts.color_icon};`,
    attrs: {
      "to": {
        path: `/productos/` + _vm.product.slug
      }
    }
  }, [_c('eye-outline-icon')], 1), _vm._ssrNode(" "), !_vm.estadoCart && !_vm.soldOut && !_vm.spent && (_vm.product.tipo_servicio == null || _vm.product.tipo_servicio == '0') ? _vm._ssrNode("<button class=\"mt-10 px-12 py-8 shadow-lg rounded-full btn\"" + _vm._ssrStyle(null, `background-color:${_vm.cardProducts.color_btn};color:${_vm.cardProducts.color_icon};`, null) + " data-v-2c6659f6>", "</button>", [_c('cart-icon')], 1) : _vm._e()], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template16/_cardProduct/ProductCard.vue?vue&type=template&id=2c6659f6&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template16/_cardProduct/ProductCard.vue?vue&type=script&lang=js&


/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  name: 'Ko16ProductCard',
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    product: {
      type: Object,
      required: true
    },
    cardProducts: {
      type: Object,
      required: true
    },
    settingGeneral: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false,
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
    if (this.product) {
      this.getDataProduct();
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
  }
});
// CONCATENATED MODULE: ./components/template16/_cardProduct/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var _cardProduct_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template16/_cardProduct/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(314)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _cardProduct_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2c6659f6",
  "766c91bb"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=template16-card-product-card.js.map