exports.ids = [79];
exports.modules = {

/***/ 1147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/ProductCard.vue?vue&type=template&id=65fd80c2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.product ? _c('div', {
    staticClass: "wrapper_card product_container",
    on: {
      "mouseenter": () => _vm.isHover = true,
      "mouseleave": () => _vm.isHover = false
    }
  }, [_vm._ssrNode("<div" + _vm._ssrClass("content-img-prodcut", _vm.settingByTemplate12.responsiveImages == true ? 'img_visileRes' : 'img_normal') + " data-v-65fd80c2>", "</div>", [!_vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.idCloudinary(_vm.product.foto_cloudinary, 150, 150),
      expression: "idCloudinary(product.foto_cloudinary, 150, 150)"
    }],
    staticClass: "product-image",
    class: _vm.settingByTemplate12.roundedImages == true ? 'img_rounded' : 'img_normal',
    attrs: {
      "role": "presentation",
      "alt": "Product Img"
    }
  }, []) : _vm._e(), _vm._ssrNode(" "), _vm.soldOut ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.product.foto_cloudinary,
      expression: "product.foto_cloudinary"
    }],
    staticClass: "product-image product-image-soldOut",
    class: _vm.settingByTemplate12.roundedImages == true ? 'img_rounded' : 'img_normal',
    attrs: {
      "role": "presentation",
      "alt": "Product Img soldOut"
    }
  }, []) : _vm._e()], 2), _vm._ssrNode(" <div class=\"wrapper-text\" data-v-65fd80c2><div class=\"product_header mb-1\" data-v-65fd80c2>" + (_vm.product.nombre ? "<h3 class=\"product_name font-semibold text-md\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.textColor};`, null) + " data-v-65fd80c2>" + _vm._ssrEscape("\n        " + _vm._s(_vm.product.nombre) + "\n      ") + "</h3>" : "<!---->") + "</div> <div class=\"product_description\" data-v-65fd80c2>" + (_vm.product.categoria ? "<p class=\"font-normal text-sm\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.descriptionColor};`, null) + " data-v-65fd80c2>" + _vm._ssrEscape("\n        " + _vm._s(_vm.product.categoria) + "\n      ") + "</p>" : "<!---->") + " " + (_vm.product.marca ? "<p class=\"font-normal text-xs\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.descriptionColor};`, null) + " data-v-65fd80c2>" + _vm._ssrEscape("\n        " + _vm._s(_vm.product.marca) + "\n      ") + "</p>" : "<!---->") + "</div></div> <div class=\"wrapper-price\" data-v-65fd80c2><span class=\"font-semibold\"" + _vm._ssrStyle(null, `color:${_vm.settingByTemplate12.priceColor};`, null) + " data-v-65fd80c2>" + _vm._ssrEscape("\n      " + _vm._s(_vm._f("currency")(_vm.product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n    ") + "</span></div>")], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/template12/ProductCard.vue?vue&type=template&id=65fd80c2&scoped=true&

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/template12/ProductCard.vue?vue&type=script&lang=js&


/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  name: 'ProductCard',
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */]],
  props: {
    product: {
      type: Object,
      required: true
    },
    dataStore: {
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
    settingByTemplate() {
      if (this.$store.state.settingByTemplate) {
        return this.$store.state.settingByTemplate;
      } else {
        return this.$store.state.settingBaseWapir;
      }
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
      if (!this.soldOut) {
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
            this.$message({
              showClose: true,
              message: 'Se agregó el producto correctamente',
              type: 'success'
            });
            this.$store.dispatch('SEND_ADD_TO_CART', 1);
          }
        }
      } else {
        this.$message({
          showClose: true,
          message: 'Este producto esta agotado',
          type: 'warning'
        });
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
              }
            }
          }
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/template12/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var template12_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/template12/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(716)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  template12_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "65fd80c2",
  "a03870da"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(717);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("dc63291e", content, true, context)
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

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_65fd80c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_65fd80c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_65fd80c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_65fd80c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_65fd80c2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper_card[data-v-65fd80c2]{align-items:flex-start;background-color:transparent;cursor:pointer;display:flex;flex-wrap:nowrap;margin-bottom:25px;position:relative;width:100%}.wrapper_card>div[data-v-65fd80c2]:first-child{max-width:100px}.wrapper_card>div[data-v-65fd80c2]:nth-child(3){max-width:130px}.product_container .content-img-prodcut>img[data-v-65fd80c2],.product_container .product_description[data-v-65fd80c2],.product_container .product_header[data-v-65fd80c2],.product_container .wrapper-price>span[data-v-65fd80c2]{transition:all .22s ease-in-out}.product_container:hover .content-img-prodcut>img[data-v-65fd80c2],.product_container:hover .product_description[data-v-65fd80c2],.product_container:hover .product_header[data-v-65fd80c2],.product_container:hover .wrapper-price>span[data-v-65fd80c2]{transform:translateX(.4rem)}.content-img-prodcut[data-v-65fd80c2]{align-items:center;display:flex;justify-content:center;width:100%}.product-image[data-v-65fd80c2]{margin-right:10px;max-height:80px;max-width:80px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.img_rounded[data-v-65fd80c2]{border-radius:100%}.img_normal[data-v-65fd80c2]{border-radius:2px}.product-image-soldOut[data-v-65fd80c2]{filter:grayscale(100%)}.wrapper-price[data-v-65fd80c2]{display:flex;justify-content:flex-end;width:100%}.wrapper-text[data-v-65fd80c2]{flex-direction:column;width:100%}.img_visileRes[data-v-65fd80c2]{display:flex}@media (max-width:768px){.wrapper_card[data-v-65fd80c2]{justify-content:flex-start}}@media (max-width:450px){.wrapper-text[data-v-65fd80c2]{margin-right:3px;max-width:160px}.wrapper_card[data-v-65fd80c2]{align-items:flex-start}.wrapper_card>div[data-v-65fd80c2]:first-child{margin-right:10px;max-width:80px}.wrapper_card>div[data-v-65fd80c2]:nth-child(3){max-width:100px}.product-image[data-v-65fd80c2]{max-height:70px;max-width:70px}.img_visileRes[data-v-65fd80c2]{display:none}.img_normal[data-v-65fd80c2]{display:flex}}@media (max-width:320px){.wrapper-text[data-v-65fd80c2]{max-width:120px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=template12-product-card.js.map