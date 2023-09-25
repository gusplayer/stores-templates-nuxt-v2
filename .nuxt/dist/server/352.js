exports.ids = [352];
exports.modules = {

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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7a1bf6dd", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    expiredDate(date) {
      Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
      if (date == null) {
        return true;
      } else {
        let x = date;
        let d1 = new Date();
        let d2 = new Date(x);
        //Vencido
        if (d1 > this.sumarDias(d2, 3)) {
          return false;
        }
        //Activo
        else {
          return true;
        }
      }
    },
    sumarDias(fecha, date) {
      fecha.setDate(fecha.getDate() + date);
      return fecha;
    }
  }
});

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icono_cesta.60de836.png";

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order1_vue_vue_type_style_index_0_id_43350ff8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order1_vue_vue_type_style_index_0_id_43350ff8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order1_vue_vue_type_style_index_0_id_43350ff8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order1_vue_vue_type_style_index_0_id_43350ff8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_thread_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_1_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order1_vue_vue_type_style_index_0_id_43350ff8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".width-drawer[data-v-43350ff8] .el-drawer__open .el-drawer.rtl{width:410px!important}@media (max-width:800px){.width-drawer[data-v-43350ff8] .el-drawer__open .el-drawer.rtl{width:100%!important}}.order_content[data-v-43350ff8]{align-items:center;animation:dispatch .2s linear 1;background-color:#fff;display:flex;flex:none;flex-direction:column;height:100vh;overflow:auto;overflow:hidden;padding-bottom:20px}.order_content[data-v-43350ff8],.order_content>div[data-v-43350ff8]{box-sizing:border-box;width:100%}.order_header[data-v-43350ff8]{align-items:center;border-bottom:1px solid #ededed;display:flex;flex:none;justify-content:space-between;padding:15px 23px}.leftright[data-v-43350ff8],.rightleft[data-v-43350ff8]{background:#2c2930}.order_header_close[data-v-43350ff8]{align-items:center;cursor:pointer;display:flex;height:20px;justify-content:center;position:relative;width:30px}.leftright[data-v-43350ff8]{--tw-rotate:-45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(-45deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.leftright[data-v-43350ff8],.rightleft[data-v-43350ff8]{border-radius:2px;height:4px;position:absolute;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,1,1);width:30px}.rightleft[data-v-43350ff8]{--tw-rotate:45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(45deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.order_header_close:hover .leftright[data-v-43350ff8],.order_header_close:hover .rightleft[data-v-43350ff8]{--tw-rotate:0deg;background:#000;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(0deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.order_header_close[data-v-43350ff8]:hover{color:gray}.order--wrapper[data-v-43350ff8]{display:grid;height:100%;overflow-y:auto}@media (max-height:740px){.order_products_list[data-v-43350ff8]{max-height:380px}.order_products_list-empty[data-v-43350ff8]{height:380px}}.order_products_list-empty[data-v-43350ff8]{align-items:center;display:flex;flex-direction:column;height:480px;justify-content:flex-end}.order_products_list[data-v-43350ff8]{list-style:none;max-height:480px;overflow-x:hidden;overflow-y:auto}.order_products_list[data-v-43350ff8]::-webkit-scrollbar{background:transparent;border:1px solid #ededed;width:6px}.order_products_list[data-v-43350ff8]::-webkit-scrollbar-track{border-radius:10px;box-shadow:inset 0 0 10px #2c2930}.order_products_list[data-v-43350ff8]::-webkit-scrollbar-thumb{background:#2c2930;border-radius:10px}.order_products_list_item[data-v-43350ff8]{align-items:center;border-bottom:1px solid #ededed;display:flex;justify-content:space-around;overflow-x:auto;padding:10px 23px}.order_products_list_item[data-v-43350ff8]::-webkit-scrollbar{background:transparent;max-height:8px;width:6px}.order_products_list_item[data-v-43350ff8]::-webkit-scrollbar-track{border-radius:10px;box-shadow:inset 0 0 10px #2c2930}.order_products_list_item[data-v-43350ff8]::-webkit-scrollbar-thumb{background:#2c2930;border-radius:10px}.img_product[data-v-43350ff8]{border-radius:5px;margin-right:5px;max-height:50px;max-width:50px;-o-object-fit:cover;object-fit:cover}.order_products_list_item .name[data-v-43350ff8]{box-sizing:border-box;max-width:190px;width:100%}.name[data-v-43350ff8] .el-tag{background-color:#2c2930;border:1px solid #2c2930;border-radius:5px;box-sizing:border-box;color:#fff;display:inline-block;font-size:12px;height:28px;margin-left:2px;padding:0 2px;text-align:center;white-space:nowrap}.order-text[data-v-43350ff8]{color:#2c2930;font-size:14px}.unidades[data-v-43350ff8]{color:#2c2930;font-size:13px;font-weight:500}.order-combincacion[data-v-43350ff8]{-moz-column-count:2;column-count:2;-moz-column-fill:balance;column-fill:balance;-moz-column-fill:initial;column-fill:initial;-moz-column-gap:5px;column-gap:5px;max-width:180px;width:100%}.order-combincacion-uni[data-v-43350ff8]{background-color:#2c2930;border:1px solid #fff;border-radius:10px;color:#fff}.order-combincacion-text[data-v-43350ff8]{color:#fff;font-size:10px;text-align:center}.price[data-v-43350ff8]{color:#2c2930;font-size:16px;max-width:100px;min-width:60px;width:100%}.icon-delete[data-v-43350ff8]{bottom:5px;color:#2c2930;cursor:pointer;font-size:20px;transition:.3s}.icon-delete[data-v-43350ff8]:hover{color:#df3e3e}.order_beforefreeshipping[data-v-43350ff8]{background-color:#ffd558;padding:5px 0;text-align:center}.order_freeshipping[data-v-43350ff8]{background-color:#45d482;padding:5px 0;text-align:center}.order_beforefreeshipping p[data-v-43350ff8],.order_beforefreeshipping p strong[data-v-43350ff8],.order_freeshipping p[data-v-43350ff8],.order_freeshipping p strong[data-v-43350ff8]{color:#2c2930}.content-remove-cart[data-v-43350ff8]{margin-top:10px;max-width:364px;padding:8px 10px;transition:all .3s ease}.content-remove-cart p[data-v-43350ff8]{color:#2c2930;font-size:14px;font-weight:300;text-decoration:underline;-webkit-text-decoration:underline #2c2930;text-decoration:underline #2c2930}.header-icon-cart[data-v-43350ff8]{bottom:.125em;color:#2c2930;font-size:14px;margin-right:5px}.content-remove-cart p[data-v-43350ff8]:hover{color:#df3e3e}.wrapper-items-remove[data-v-43350ff8]{background-color:rgba(0,0,0,.5);height:100vh;max-width:400px;position:absolute;top:0;z-index:10}.content-items-remove[data-v-43350ff8],.wrapper-items-remove[data-v-43350ff8]{align-items:center;display:flex;justify-content:center;width:100%}.content-items-remove[data-v-43350ff8]{background:#fff;border-radius:10px;flex-direction:column;margin:15px}.text-remove[data-v-43350ff8]{color:#2c2930;font-size:16px;font-weight:300;padding:20px;text-align:center}.content-btn-remove[data-v-43350ff8]{align-items:center;display:flex;flex-direction:row;justify-content:space-around;padding-bottom:20px;width:100%}.btn-remover-yes[data-v-43350ff8]{color:#fff;cursor:pointer;font-size:14px;font-weight:700;letter-spacing:1px;max-width:70px;outline:none;padding:4px 10px;transition:all .3s ease;width:100%}.btn-remover-yes[data-v-43350ff8],.btn-remover-yes[data-v-43350ff8]:hover{background-color:#2c2930;border:2px solid #2c2930}.btn-remover-no[data-v-43350ff8]{background-color:transparent;border:2px solid red;color:red;cursor:pointer;font-size:14px;font-weight:700;letter-spacing:1px;max-width:80px;outline:none;padding:4px 10px;transition:all .3s ease;width:100%}.btn-remover-no[data-v-43350ff8]:hover{border:2px solid #ededed;color:#2c2930}.order_total[data-v-43350ff8]{border-top:1px solid #ededed;padding:0 23px}.order_total_domicile[data-v-43350ff8],.order_total_net[data-v-43350ff8]{display:flex;justify-content:space-between;margin:15px 0}.order_total_domicile p[data-v-43350ff8]{color:#2c2930;font-size:14px;font-weight:300}.text-color[data-v-43350ff8]{color:#2c2930}.order_total_domicile[data-v-43350ff8] .text-TarifaPrecio{color:red;display:flex;justify-content:flex-end}.scroll_cart_summary_items_cities[data-v-43350ff8]{color:#2c2930;display:flex;flex-direction:column;max-height:150px;max-width:230px;overflow-y:auto}.scroll_cart_summary_items_cities li[data-v-43350ff8]{margin-right:5px}.scroll_cart_summary_items_cities[data-v-43350ff8]::-webkit-scrollbar{background:transparent;width:4px}.scroll_cart_summary_items_cities[data-v-43350ff8]::-webkit-scrollbar-track{border-radius:10px;box-shadow:inset 0 0 10px var(--background_color_2)}.scroll_cart_summary_items_cities[data-v-43350ff8]::-webkit-scrollbar-thumb{background:var(--color_icon);border-radius:10px}.without_shipping_cost[data-v-43350ff8]{color:#2c2930;font-size:13px}.domicilio-message[data-v-43350ff8],.order_total_net p[data-v-43350ff8]{color:#2c2930;font-weight:700}.domicilio-message[data-v-43350ff8]{background-color:transparent;border-style:none;flex:none;font-size:14px;letter-spacing:1px;margin-top:10px;max-width:280px;outline:none;padding:8px 10px;text-align:center;width:100%}.wrapper-Quotation[data-v-43350ff8]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.Quotation-message[data-v-43350ff8]{background-color:transparent;border-style:none;color:#2c2930;flex:none;font-size:14px;font-weight:700;letter-spacing:1px;margin-top:10px;max-width:364px;outline:none;padding:8px 10px;text-align:center;width:100%}.wp-icon[data-v-43350ff8]{bottom:4px;font-size:24px;margin-right:5px}.continue_shopping[data-v-43350ff8]{align-items:center;background-color:#2c2930;border:2px solid #2c2930;border-radius:var(--radius_btn);color:#fff;cursor:pointer;display:flex;flex:none;font-size:14px;font-weight:700;height:41px;justify-content:center;letter-spacing:1px;margin-top:10px;max-width:364px;outline:none;padding:8px 10px;transition:all .3s ease;width:100%}.continue_shopping[data-v-43350ff8]:hover{background-color:#a1a1a1;border:2px solid #a1a1a1;color:#2c2930}.conten-btn[data-v-43350ff8]{display:flex;justify-content:center;width:100%}.continue_shopping2[data-v-43350ff8]{background-color:transparent;border:2px solid #2c2930;border-radius:var(--radius_btn);color:#2c2930;cursor:pointer;flex:none;font-size:14px;font-weight:700;height:41px;letter-spacing:1px;margin-top:10px;max-width:364px;outline:none;padding:8px 10px;text-align:center;transition:all .3s ease;width:100%}.continue_shopping2[data-v-43350ff8]:hover{border:2px solid #a1a1a1;color:#a1a1a1}.photo[data-v-43350ff8]{border-radius:10px;height:120px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.text-empty[data-v-43350ff8]{color:#222;font-size:18px;font-weight:700;margin-bottom:10px;margin-top:15px}.text-empty2[data-v-43350ff8]{color:#222;font-size:16px;font-weight:400;margin-bottom:15px;max-width:300px;text-align:center}.fade-enter-active[data-v-43350ff8],.fade-leave-active[data-v-43350ff8]{transition:opacity .3s}.fade-enter[data-v-43350ff8],.fade-leave-to[data-v-43350ff8]{opacity:0}.slide-enter-active[data-v-43350ff8],.slide-leave-active[data-v-43350ff8]{transition:all .3s ease}.slide-enter[data-v-43350ff8],.slide-leave-to[data-v-43350ff8]{margin-left:150px;opacity:0}.content-button[data-v-43350ff8]{align-items:center;display:flex;flex-direction:column;justify-content:center}details[data-v-43350ff8]{align-self:center;color:#333;flex:1;font-size:13px;margin-left:30px}details summary[data-v-43350ff8]{cursor:pointer;font-size:14px;font-weight:700;outline:none;text-align:right}details ol[data-v-43350ff8]{display:flex;flex-direction:column;padding:5px 0}details ol li div[data-v-43350ff8]{display:flex;justify-content:space-between;padding:2px 4px}details ol li[data-v-43350ff8]:nth-child(2n){background-color:hsla(0,0%,40%,.1)}details[open] summary~*[data-v-43350ff8]{animation:sweep .5s ease-in-out}.continue_shopping_whatsapp[data-v-43350ff8]{align-items:center;background-color:#2c2930;border:2px solid #2c2930;border-radius:var(--radius_btn);color:#fff;cursor:pointer;display:flex;flex:none;font-size:14px;font-weight:700;height:41px;justify-content:center;letter-spacing:1px;margin-top:10px;max-width:364px;outline:none;padding:8px 10px;transition:all .3s ease;width:100%}.continue_shopping_whatsapp[data-v-43350ff8]:hover{background-color:#25d366;border:2px solid #25d366;color:#fff}.wrapper-items-form[data-v-43350ff8]{background-color:#fff;height:100vh;justify-content:space-between;max-width:400px;overflow-y:auto;padding:20px 0 45px;position:absolute;top:0;z-index:10}.content-items-form[data-v-43350ff8],.wrapper-items-form[data-v-43350ff8]{align-items:center;display:flex;flex-direction:column;width:100%}.content-items-form[data-v-43350ff8]{background:#fff;border-radius:10px;justify-content:center;padding:10px 0;position:relative}.items-form[data-v-43350ff8]{padding:10px 30px;width:100%}.form_close[data-v-43350ff8]{color:#25d366;cursor:pointer;font-size:30px;position:absolute;right:10px;top:0}.form_close[data-v-43350ff8]:hover{color:gray}.form-text[data-v-43350ff8]{color:#000;font-size:17px;font-weight:700;margin-bottom:15px}.form-subtext[data-v-43350ff8]{color:#7e7e7e;font-size:13px;font-weight:500;margin-bottom:2px}.content-input[data-v-43350ff8]{display:flex;flex-direction:column;width:100%}.is-required[data-v-43350ff8]:after{color:red;content:\"*\";font-weight:700;margin-left:3px}.input-text[data-v-43350ff8]{background-color:transparent;border:2px solid #c9c9c9;border-radius:8px;color:#7e7e7e;font-size:13px;padding:5px 14px;width:100%}.input-text[data-v-43350ff8]::-moz-placeholder{color:rgba(21,20,57,.541);opacity:.7}.input-text[data-v-43350ff8]::placeholder{color:rgba(21,20,57,.541);opacity:.7}.input-text[data-v-43350ff8]:-internal-autofill-selected{background-color:transparent!important;background-image:none!important;color:-internal-light-dark-color(#000,#fff)!important}.input-text[data-v-43350ff8]:-internal-autofill-selected{-webkit-appearance:menulist-button}.input-text[data-v-43350ff8]:active,.input-text[data-v-43350ff8]:focus{border:2px solid #000;outline:0}.text-error[data-v-43350ff8]{color:#cb2027;font-size:12px;margin-left:10px;width:100%}.continue_shopping_form[data-v-43350ff8]{align-items:center;background-color:#2c2930;border:2px solid #2c2930;border-radius:var(--radius_btn);bottom:8px;color:#fff;cursor:pointer;display:flex;font-size:16px;font-weight:400;height:44px;justify-content:center;max-width:340px;padding:8px 10px;position:fixed;text-align:center;-webkit-text-decoration:none;text-decoration:none;width:100%}.continue_shopping_form[data-v-43350ff8]:hover{background-color:#fff;border:2px solid #ccc;color:#2c2930}.continue_form_confirmation[data-v-43350ff8]{align-items:center;background-color:#2c2930;border:2px solid #2c2930;border-radius:var(--radius_btn);color:#fff;cursor:pointer;display:flex;font-size:16px;font-weight:400;height:44px;justify-content:center;margin-top:20px;max-width:340px;padding:8px 10px;text-align:center;-webkit-text-decoration:none;text-decoration:none;width:100%}.continue_form_confirmation[data-v-43350ff8]:hover{background-color:#fff;border:2px solid #ccc;color:#2c2930}.modal-confirmation[data-v-43350ff8]{align-items:center;background-color:rgba(0,0,0,.87);color:#fff;display:flex;flex-direction:column;height:100vh;justify-content:center;max-width:400px;position:absolute;text-align:center;top:0;width:100%;z-index:1001}.content-quantity[data-v-43350ff8]{max-width:126px}.quantity_remove[data-v-43350ff8]{border:1px solid #2c2930;border-bottom-left-radius:5px;border-right-style:none;border-top-left-radius:5px;height:30px;width:41px}.quantity_value[data-v-43350ff8]{border-color:#2c2930;border-style:solid none;border-width:1px;color:#2c2930;font-size:1em;height:30px;padding-left:10px;padding-right:10px;width:41px}.quantity_add[data-v-43350ff8]{border:1px solid #2c2930;border-bottom-right-radius:5px;border-left-style:none;border-top-right-radius:5px;height:30px;width:41px}.icon-quantity[data-v-43350ff8]{color:#2c2930;cursor:pointer}.icon-quantity[data-v-43350ff8]:hover{color:#eb7025;cursor:pointer}.container-alerta[data-v-43350ff8]{align-items:center;background-color:#fae84b;border:1px solid #e6d542;border-radius:6px;bottom:0;color:#000;display:flex;font-size:14px;justify-content:center;position:absolute;right:-133px;width:130px}.alerta[data-v-43350ff8]{padding:4px 5px;text-align:center}@media (max-width:800px){.wrapper-items-form[data-v-43350ff8]{max-width:100%;padding:20px 0 45px}}@media (max-width:500px){.wrapper-items-form[data-v-43350ff8]{padding:20px 0 300px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/_order1/order1.vue?vue&type=template&id=43350ff8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-drawer', {
    staticClass: "width-drawer",
    attrs: {
      "visible": _vm.openOrder,
      "withHeader": false,
      "direction": "rtl",
      "modalAppendToBody": false
    },
    on: {
      "update:visible": function ($event) {
        _vm.openOrder = $event;
      }
    }
  }, [_c('div', {
    staticClass: "relative",
    on: {
      "click": _vm.closeOrder
    }
  }, [_c('div', {
    staticClass: "order_content"
  }, [_c('div', {
    staticClass: "order_header"
  }, [_c('h3', [_vm._v(_vm._s(_vm.$t('footer_title')) + " (" + _vm._s(_vm.cantidadProductos) + ")")]), _vm._v(" "), _c('div', {
    staticClass: "order_header_close",
    on: {
      "click": _vm.closedOder
    }
  }, [_c('div', {
    staticClass: "leftright"
  }), _vm._v(" "), _c('div', {
    staticClass: "rightleft"
  })])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "slide"
    }
  }, [_vm.productsCart.length ? [_c('div', {
    staticClass: "order--wrapper"
  }, [_c('div', {
    staticClass: "order_products"
  }, [_c('ul', {
    staticClass: "order_products_list"
  }, _vm._l(_vm.productsCart, function (product, index) {
    return _c('li', {
      key: index,
      staticClass: "order_products_list_item"
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: _vm.idCloudinary(product.foto_cloudinary, 150, 150),
        expression: "idCloudinary(product.foto_cloudinary, 150, 150)"
      }],
      staticClass: "img_product",
      attrs: {
        "alt": "Product Img"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "w-full flex flex-col"
    }, [_c('div', {
      staticClass: "name"
    }, [_c('p', {
      staticClass: "order-text",
      staticStyle: {
        "font-weight": "bold"
      }
    }, [_vm._v("\n                        " + _vm._s(_vm._f("capitalize")(product.nombre)) + "\n                      ")]), _vm._v(" "), product.precio ? _c('span', [_c('b', {
      staticClass: "unidades"
    }, [_vm._v(_vm._s(_vm.$t('cart_cantidad')) + " " + _vm._s(product.cantidad))]), _vm._v(" "), _c('b', {
      staticClass: "unidades"
    }, [_vm._v("\n                          X" + _vm._s(_vm._f("currency")(product.precio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                        ")])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "w-full flex flex-col justify-center items-start mb-5"
    }, [_c('div', {
      staticClass: "flex flex-row relative box-border content-quantity"
    }, [_c('button', {
      staticClass: "bg-transparent quantity_remove",
      on: {
        "click": function ($event) {
          return _vm.removeQuantity(product);
        }
      }
    }, [_c('menos-icon', {
      staticClass: "icon-quantity"
    })], 1), _vm._v(" "), _c('p', {
      staticClass: "flex items-center justify-center bg-transparent quantity_value"
    }, [_vm._v("\n                            " + _vm._s(product.cantidad) + "\n                          ")]), _vm._v(" "), _c('button', {
      staticClass: "bg-transparent quantity_add",
      on: {
        "click": function ($event) {
          return _vm.addQuantity(product);
        }
      }
    }, [_c('mas-icon', {
      staticClass: "icon-quantity"
    })], 1), _vm._v(" "), product.limitQuantity == product.cantidad ? _c('div', {
      staticClass: "container-alerta"
    }, [_c('span', {
      staticClass: "alerta"
    }, [_vm._v("\n                              " + _vm._s(_vm.$t('cart_ultimaUnidad')))])]) : _vm._e()])]), _vm._v(" "), product.combinacion ? _c('div', {
      staticClass: "grid grid-flow-col auto-cols-max mb-5"
    }, _vm._l(product.combinacion, function (productCombinacion, index2) {
      return _c('el-tag', {
        key: index2
      }, [_vm._v("\n                          " + _vm._s(_vm._f("capitalize")(productCombinacion)) + "\n                        ")]);
    }), 1) : _vm._e(), _vm._v(" "), product.activo == 0 ? _c('el-tag', {
      staticStyle: {
        "background-color": "rgb(223, 62, 62)"
      },
      attrs: {
        "type": "danger"
      }
    }, [_vm._v("\n                        Producto agotado!\n                      ")]) : _vm._e(), _vm._v(" "), product.stock_disponible == 0 ? _c('el-tag', {
      staticStyle: {
        "background-color": "rgb(223, 62, 62)"
      },
      attrs: {
        "type": "danger"
      }
    }, [_vm._v("\n                        ¡No tiene las unidades disponibles!\n                      ")]) : _vm._e()], 1)]), _vm._v(" "), product.precio > 0 ? _c('div', {
      staticClass: "price"
    }, [_c('p', [_vm._v("\n                      " + _vm._s(_vm._f("currency")(product.precio * product.cantidad, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                    ")])]) : _c('div', {
      staticClass: "price"
    }), _vm._v(" "), _c('boteBasura-icon', {
      staticClass: "icon-delete",
      on: {
        "click": function ($event) {
          return _vm.deleteItemCart(index);
        }
      }
    })], 1);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "h-full flex flex-col justify-end"
  }, [_c('div', {
    staticClass: "w-full flex justify-center items-center"
  }, [_c('div', {
    staticClass: "w-full flex flex-row justify-center items-center text-center cursor-pointer content-remove-cart",
    on: {
      "click": function ($event) {
        _vm.remove = !_vm.remove;
      }
    }
  }, [_c('cart-icon', {
    staticClass: "header-icon-cart"
  }), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(_vm.$t('footer_vaciarCarrito')) + "\n                  ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "order_total"
  }, [_c('span', {
    staticClass: "order_total_domicile"
  }, [_c('p', {
    staticStyle: {
      "font-weight": "bold",
      "font-size": "16px"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('footer_costoDomicilio')) + "\n                  ")]), _vm._v(" "), _vm.rangosByCiudad.envio_metodo === 'precio_ciudad' && _vm.shippingCities.length > 0 && !_vm.getFreeShipping && !_vm.FreeShippingCart ? _c('details', [_c('summary', {
    staticClass: "text-color"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('footer_valorCiudad')) + "\n                    ")]), _vm._v(" "), _c('section', [_c('ol', {
    staticClass: "scroll_cart_summary_items_cities"
  }, _vm._l(_vm.rangosByCiudad.rangos, function (ciudad, index) {
    return _c('li', {
      key: ciudad.id
    }, [ciudad.price > 0 ? _c('div', [_c('b', [_vm._v("\n                              " + _vm._s(_vm.shippingCities[index].nombre_ciu === 'Sin especificar' ? 'Resto del país' : _vm.shippingCities[index].nombre_ciu) + ":\n                            ")]), _vm._v(" "), _c('p', [_vm._v("\n                              " + _vm._s(_vm._f("currency")(ciudad.price, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                            ")])]) : _vm._e()]);
  }), 0)])]) : _vm.rangosByCiudad.envio_metodo === 'tarifa_plana' && _vm.shipping > 0 && _vm.getFreeShipping && !_vm.FreeShippingCart ? _c('div', [_c('li', {
    staticClass: "text-color",
    staticStyle: {
      "list-style": "none"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('footer_tarifaPlana')) + "\n                      " + _vm._s(_vm._f("currency")(_vm.rangosByCiudades.valor, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                    ")])]) : _vm.rangosByCiudad.envio_metodo === 'precio' && _vm.getFreeShipping && !_vm.FreeShippingCart ? _c('div', [this.shippingTarifaPrecio > 0 ? _c('div', [_c('p', {
    staticClass: "text-color"
  }, [_vm._v("\n                        " + _vm._s(_vm._f("currency")(this.shippingTarifaPrecio, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                      ")])]) : this.shippingTarifaPrecio >= 0 ? _c('p', {
    staticClass: "text-color"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('footer_tarifaPrecio')) + "\n                    ")]) : _c('p', {
    staticClass: "text-TarifaPrecio"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('footer_encioNoconfig')) + "\n                    ")])]) : _vm.rangosByCiudad.envio_metodo === 'gratis' && _vm.shippingCities.length <= 0 && !_vm.getFreeShipping && !_vm.FreeShippingCart ? _c('p', {
    staticClass: "without_shipping_cost"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('footer_encioGratis')) + "\n                  ")]) : _vm.rangosByCiudad.envio_metodo === 'sintarifa' && _vm.shippingCities.length <= 0 && !_vm.getFreeShipping && !_vm.FreeShippingCart ? _c('p', {
    staticClass: "without_shipping_cost"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('footer_enviosPorPagar')) + "\n                  ")]) : _vm.rangosByCiudad.envio_metodo === 'sinEnvio' && _vm.shippingCities.length <= 0 && !_vm.getFreeShipping ? _c('p', {
    staticClass: "without_shipping_cost"
  }, [_vm._v("\n                    Pasas a recoger tu compra\n                  ")]) : _vm.FreeShippingCart ? _c('p', {
    staticClass: "without_shipping_cost"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('footer_tarifaPrecio')) + "\n                  ")]) : _vm._e()]), _vm._v(" "), _vm.discountDescuentos ? _c('span', {
    staticClass: "order_total_net"
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('footer_descuento')))]), _vm._v(" "), _c('p', [_vm._v("\n                    -\n                    " + _vm._s(_vm._f("currency")(_vm.discountDescuentos, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                  ")])]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "order_total_net"
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('cart_subtotal')))]), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(_vm._f("currency")(_vm.totalCart, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                  ")])]), _vm._v(" "), _c('span', {
    staticClass: "order_total_net"
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('footer_totalPagar')))]), _vm._v(" "), _c('p', [_vm._v("\n                    " + _vm._s(_vm._f("currency")(_vm.totalCart + (this.shipping ? this.shipping : 0) + (this.shippingTarifaPrecio && this.shippingTarifaPrecio != 'empty' && !this.FreeShippingCart ? this.shippingTarifaPrecio : 0) - this.discountDescuentos, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                  ")])])]), _vm._v(" "), _c('div', {
    staticClass: "content-button"
  }, [_vm.isQuotation() || !_vm.countryStore && _vm.productsCart.length && _vm.dataStore.tienda.estado == 1 ? _c('div', {
    staticClass: "wrapper-Quotation"
  }, [_c('p', {
    staticClass: "Quotation-message"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('footer_contactoMgs')) + "\n                  ")]), _vm._v(" "), !_vm.stateOrderWapi && _vm.expiredDate(_vm.dataStore.tienda.fecha_expiracion) ? _c('button', {
    staticClass: "continue_shopping_whatsapp",
    on: {
      "click": function ($event) {
        return _vm.modalBehaviorWhatsApp(true);
      }
    }
  }, [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  }), _vm._v("\n                    " + _vm._s(_vm.$t('footer_compraWhatsapp')) + "\n                  ")], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.productsCart.length && this.shippingTarifaPrecio == 'empty' && this.estadoShippingTarifaPrecio ? _c('p', {
    staticClass: "domicilio-message"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('footer_contactoMgs2')) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.dataStore.tienda.estado == 0 ? _c('p', {
    staticClass: "Quotation-message"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('footer_tiendaCerrada')) + "\n                ")]) : _vm._e(), _vm._v(" "), !_vm.IsMinValorTotal() && _vm.productsCart.length ? _c('p', {
    staticClass: "Quotation-message"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('cart_minimovalorProductos1')) + "\n                  " + _vm._s(_vm._f("currency")(this.dataStore.tienda.minimo_compra, _vm.dataStore.tienda.codigo_pais, _vm.dataStore.tienda.moneda)) + "\n                  " + _vm._s(_vm.$t('cart_minimovalorProductos2')) + "\n                ")]) : _vm._e(), _vm._v(" "), !_vm.stateOrderWapi && _vm.productsCart.length && !_vm.isQuotation() && _vm.dataStore.tienda.estado == 1 && !this.estadoShippingTarifaPrecio && _vm.countryStore && _vm.IsMinValorTotal() && _vm.expiredDate(_vm.dataStore.tienda.fecha_expiracion) ? _c('button', {
    staticClass: "continue_shopping",
    attrs: {
      "id": "InitiateCheckoutTag"
    },
    on: {
      "click": _vm.GoPayments
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('footer_finalizarCompra')) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.stateOrderWapi && _vm.productsCart.length && !_vm.isQuotation() && _vm.dataStore.tienda.estado == 1 && !this.estadoShippingTarifaPrecio && _vm.countryStore && _vm.IsMinValorTotal() && _vm.settingByTemplate.pago_online == 1 && _vm.expiredDate(_vm.dataStore.tienda.fecha_expiracion) ? _c('button', {
    staticClass: "continue_shopping2",
    style: `color: ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario ? _vm.settingByTemplate.color_primario : '#25D366'}; border:2px solid ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario ? _vm.settingByTemplate.color_primario : '#25D366'};`,
    attrs: {
      "id": "InitiateCheckoutTag"
    },
    on: {
      "click": _vm.GoPayments
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('footer_finalizarCompra')) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.stateOrderWapi && _vm.productsCart.length && !_vm.isQuotation() && _vm.IsMinValorTotal() && _vm.dataStore.tienda.estado == 1 && _vm.dataStore.tienda.whatsapp && _vm.expiredDate(_vm.dataStore.tienda.fecha_expiracion) ? _c('button', {
    staticClass: "continue_shopping_whatsapp",
    style: `background: ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario ? _vm.settingByTemplate.color_primario : '#25D366'}; color:${_vm.settingByTemplate && _vm.settingByTemplate.color_secundario ? _vm.settingByTemplate.color_secundario : '#FFFFFF'};
                border:2px solid ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario ? _vm.settingByTemplate.color_primario : '#25D366'};                  
                `,
    on: {
      "click": function ($event) {
        return _vm.modalBehaviorWhatsApp(true);
      }
    }
  }, [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  }), _vm._v("\n                  " + _vm._s(_vm.$t('footer_pedidoWhatsapp')) + "\n                ")], 1) : _vm._e(), _vm._v(" "), !_vm.stateOrderWapi ? _c('nuxt-link', {
    staticClass: "conten-btn",
    attrs: {
      "to": "/"
    },
    on: {
      "click": _vm.closeOrder
    }
  }, [_c('button', {
    staticClass: "continue_shopping2"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('footer_seguirCompra')) + "\n                  ")])]) : _vm._e()], 1)])])] : _c('div', {
    staticClass: "order--wrapper"
  }, [_c('div', {
    staticClass: "w-full flex flex-col justify-center items-center"
  }, [_c('img', {
    staticClass: "object-cover object-bottom",
    staticStyle: {
      "width": "220px"
    },
    attrs: {
      "src": __webpack_require__(54),
      "alt": "Product img"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "text-empty"
  }, [_vm._v(_vm._s(_vm.$t('footer_carritoVacio2')))]), _vm._v(" "), _c('p', {
    staticClass: "text-empty2"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('footer_carritoVacio3')) + "\n            ")])]), _vm._v(" "), _c('div', [_c('nuxt-link', {
    staticClass: "conten-btn",
    attrs: {
      "to": "/"
    },
    on: {
      "click": _vm.closeOrder
    }
  }, [_c('button', {
    staticClass: "continue_shopping2"
  }, [_vm._v("\n                " + _vm._s(_vm.$t('footer_seguirCompra')) + "\n              ")])])], 1)])], 2)], 1), _vm._v(" "), _vm.remove ? _c('div', {
    staticClass: "wrapper-items-remove"
  }, [_c('div', {
    staticClass: "content-items-remove"
  }, [_c('p', {
    staticClass: "text-remove"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('footer_contactoMgs3')) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "content-btn-remove"
  }, [_c('button', {
    staticClass: "btn-remover-no",
    on: {
      "click": function ($event) {
        _vm.remove = !_vm.remove;
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('footer_noCart')) + "\n          ")]), _vm._v(" "), _c('button', {
    staticClass: "btn-remover-yes",
    on: {
      "click": _vm.removeCartItems
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('footer_siCart')) + "\n          ")])])])]) : _vm._e(), _vm._v(" "), _vm.formOrdenWhatsAPP ? _c('div', {
    staticClass: "wrapper-items-form"
  }, [_c('div', {
    staticClass: "content-items-form"
  }, [_c('p', {
    staticClass: "form-text"
  }, [_vm._v(_vm._s(_vm.$t('footer_formtittle')))]), _vm._v(" "), _vm.inputCheckoutWPP && _vm.inputCheckoutWPP.length === 0 || _vm.inputCheckoutWPP === null || _vm.inputCheckoutWPP === undefined ? _c('ValidationObserver', {
    ref: "observer",
    staticClass: "items-form",
    attrs: {
      "tag": "form"
    }
  }, [_c('p', {
    staticClass: "form-subtext"
  }, [_vm._v(_vm._s(_vm.$t('footer_formNombre')))]), _vm._v(" "), _c('validation-provider', {
    staticClass: "content-input",
    attrs: {
      "name": "nombre",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.nombre,
            expression: "form.nombre"
          }],
          staticClass: "input-text",
          attrs: {
            "name": "nombre",
            "type": "text",
            "placeholder": _vm.$t('footer_formNombreMgs'),
            "id": "ContactName",
            "onkeypress": "return ((event.charCode>96 && event.charCode<123) || (event.charCode>64 && event.charCode<91) || (event.charCode==32) || (event.charCode==241) || (event.charCode==209))"
          },
          domProps: {
            "value": _vm.form.nombre
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form, "nombre", $event.target.value);
            }
          }
        }), _vm._v(" "), errors[0] ? _c('span', {
          staticClass: "text-error"
        }, [_vm._v("\n                " + _vm._s(errors[0]) + "\n              ")]) : _c('div', {
          staticStyle: {
            "margin-bottom": "18px"
          }
        })];
      }
    }], null, false, 321566256)
  }), _vm._v(" "), _c('p', {
    staticClass: "form-subtext"
  }, [_vm._v(_vm._s(_vm.$t('footer_formIdenti')))]), _vm._v(" "), _c('validation-provider', {
    staticClass: "content-input",
    attrs: {
      "name": "id",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.phone,
            expression: "form.phone"
          }],
          staticClass: "input-text",
          attrs: {
            "name": "id",
            "type": "number",
            "placeholder": _vm.$t('footer_formIdentiMgs'),
            "id": "ContactId",
            "onkeypress": "return ((event.charCode>47 && event.charCode<58))"
          },
          domProps: {
            "value": _vm.form.phone
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form, "phone", $event.target.value);
            }
          }
        }), _vm._v(" "), errors[0] ? _c('span', {
          staticClass: "text-error"
        }, [_vm._v("\n                " + _vm._s(errors[0]) + "\n              ")]) : _c('div', {
          staticStyle: {
            "margin-bottom": "18px"
          }
        })];
      }
    }], null, false, 2041082257)
  }), _vm._v(" "), _c('p', {
    staticClass: "form-subtext"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('footer_formCorreo')) + " (" + _vm._s(_vm.$t('footer_norquerido')) + ")\n          ")]), _vm._v(" "), _c('validation-provider', {
    staticClass: "content-input",
    attrs: {
      "name": "email"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.email,
            expression: "form.email"
          }],
          staticClass: "input-text",
          attrs: {
            "name": "email",
            "type": "text",
            "placeholder": _vm.$t('footer_formCorreoMgs'),
            "id": "ContactEmail"
          },
          domProps: {
            "value": _vm.form.email
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form, "email", $event.target.value);
            }
          }
        }), _vm._v(" "), errors[0] ? _c('span', {
          staticClass: "text-error"
        }, [_vm._v("\n                " + _vm._s(errors[0]) + "\n              ")]) : _c('div', {
          staticStyle: {
            "margin-bottom": "18px"
          }
        })];
      }
    }], null, false, 4051405107)
  }), _vm._v(" "), _c('p', {
    staticClass: "form-subtext"
  }, [_vm._v(_vm._s(_vm.$t('footer_formPhone')))]), _vm._v(" "), _c('validation-provider', {
    staticClass: "content-input",
    attrs: {
      "name": "phone",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.identificacion,
            expression: "form.identificacion"
          }],
          staticClass: "input-text",
          attrs: {
            "name": "telephone",
            "type": "text",
            "placeholder": _vm.$t('footer_formPhoneMgs'),
            "id": "ContactTelephone",
            "onkeypress": "return ((event.charCode>47 && event.charCode<58))"
          },
          domProps: {
            "value": _vm.form.identificacion
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form, "identificacion", $event.target.value);
            }
          }
        }), _vm._v(" "), errors[0] ? _c('span', {
          staticClass: "text-error"
        }, [_vm._v("\n                " + _vm._s(errors[0]) + "\n              ")]) : _c('div', {
          staticStyle: {
            "margin-bottom": "18px"
          }
        })];
      }
    }], null, false, 4168887464)
  }), _vm._v(" "), _c('P', {
    staticClass: "form-subtext"
  }, [_vm._v(" " + _vm._s(_vm.$t(`${_vm.placeholderDepart}`)))]), _vm._v(" "), _c('validation-provider', {
    staticClass: "content-input",
    attrs: {
      "name": "ciudad",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.ciudad,
            expression: "form.ciudad"
          }],
          staticClass: "input-text",
          attrs: {
            "name": "ciudad",
            "placeholder": _vm.$t('footer_formBarrioMgs'),
            "onkeypress": "return ((event.charCode>96 && event.charCode<123) || (event.charCode>64 && event.charCode<91) || (event.charCode==32) || (event.charCode==241) || (event.charCode==209))"
          },
          domProps: {
            "value": _vm.form.ciudad
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form, "ciudad", $event.target.value);
            }
          }
        }), _vm._v(" "), errors[0] ? _c('span', {
          staticClass: "text-error"
        }, [_vm._v("\n                " + _vm._s(errors[0]) + "\n              ")]) : _c('div', {
          staticStyle: {
            "margin-bottom": "18px"
          }
        })];
      }
    }], null, false, 3134828996)
  }), _vm._v(" "), _c('P', {
    staticClass: "form-subtext"
  }, [_vm._v(" " + _vm._s(_vm.$t(`${_vm.placeholderBarrio}`)))]), _vm._v(" "), _c('validation-provider', {
    staticClass: "content-input",
    attrs: {
      "name": "barrio",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.barrio,
            expression: "form.barrio"
          }],
          staticClass: "input-text",
          attrs: {
            "name": "barrio",
            "placeholder": _vm.$t(`${_vm.placeholderMsgBarrio}`),
            "onkeypress": "return ((event.charCode>96 && event.charCode<123) || (event.charCode>64 && event.charCode<91) || (event.charCode==32) || (event.charCode==241) || (event.charCode==209))"
          },
          domProps: {
            "value": _vm.form.barrio
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form, "barrio", $event.target.value);
            }
          }
        }), _vm._v(" "), errors[0] ? _c('span', {
          staticClass: "text-error"
        }, [_vm._v("\n                " + _vm._s(errors[0]) + "\n              ")]) : _c('div', {
          staticStyle: {
            "margin-bottom": "18px"
          }
        })];
      }
    }], null, false, 152498578)
  }), _vm._v(" "), _c('P', {
    staticClass: "form-subtext"
  }, [_vm._v(" " + _vm._s(_vm.$t('footer_formDireccion')))]), _vm._v(" "), _c('validation-provider', {
    staticClass: "content-input",
    attrs: {
      "name": "dirreccion",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        errors
      }) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.dirreccion,
            expression: "form.dirreccion"
          }],
          staticClass: "input-text",
          attrs: {
            "name": "dirreccion",
            "placeholder": _vm.$t('footer_formDireccionMgs')
          },
          domProps: {
            "value": _vm.form.dirreccion
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form, "dirreccion", $event.target.value);
            }
          }
        }), _vm._v(" "), errors[0] ? _c('span', {
          staticClass: "text-error"
        }, [_vm._v("\n                " + _vm._s(errors[0]) + "\n              ")]) : _c('div', {
          staticStyle: {
            "margin-bottom": "18px"
          }
        })];
      }
    }], null, false, 552572527)
  })], 1) : _c('div', {
    staticClass: "items-form"
  }, [_c('ValidationObserver', {
    ref: "observer",
    staticClass: "w-full",
    attrs: {
      "tag": "form"
    }
  }, _vm._l(_vm.inputCheckoutWPP, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "w-full"
    }, [_c('label', {
      staticClass: "form-subtext",
      class: item.requerid ? 'is-required' : ''
    }, [_vm._v("\n                " + _vm._s(item.textInput) + "\n              ")]), _vm._v(" "), _c('validation-provider', {
      staticClass: "content-input",
      scopedSlots: _vm._u([{
        key: "default",
        fn: function ({
          errors
        }) {
          return [item.type === 'checkbox' ? _c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.value,
              expression: "item.value"
            }],
            staticClass: "input-text",
            attrs: {
              "name": item.textInput,
              "required": item.requerid ? true : false,
              "type": "checkbox"
            },
            domProps: {
              "checked": Array.isArray(item.value) ? _vm._i(item.value, null) > -1 : item.value
            },
            on: {
              "change": function ($event) {
                var $$a = item.value,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false;
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v);
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(item, "value", $$a.concat([$$v]));
                  } else {
                    $$i > -1 && _vm.$set(item, "value", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                  }
                } else {
                  _vm.$set(item, "value", $$c);
                }
              }
            }
          }) : item.type === 'radio' ? _c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.value,
              expression: "item.value"
            }],
            staticClass: "input-text",
            attrs: {
              "name": item.textInput,
              "required": item.requerid ? true : false,
              "type": "radio"
            },
            domProps: {
              "checked": _vm._q(item.value, null)
            },
            on: {
              "change": function ($event) {
                return _vm.$set(item, "value", null);
              }
            }
          }) : _c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: item.value,
              expression: "item.value"
            }],
            staticClass: "input-text",
            attrs: {
              "name": item.textInput,
              "required": item.requerid ? true : false,
              "type": item.type
            },
            domProps: {
              "value": item.value
            },
            on: {
              "input": function ($event) {
                if ($event.target.composing) return;
                _vm.$set(item, "value", $event.target.value);
              }
            }
          }), _vm._v(" "), errors[0] ? _c('span', {
            staticClass: "text-error"
          }, [_vm._v("\n                    " + _vm._s(errors[0]) + "\n                  ")]) : _c('div', {
            staticStyle: {
              "margin-bottom": "18px"
            }
          })];
        }
      }], null, true)
    })], 1);
  }), 0)], 1), _vm._v(" "), _c('label', {
    staticClass: "form_close",
    attrs: {
      "for": "order_close"
    },
    on: {
      "click": function ($event) {
        return _vm.modalBehaviorWhatsApp(false);
      }
    }
  }, [_c('close-icon')], 1)], 1), _vm._v(" "), _c('button', {
    staticClass: "continue_shopping_form",
    staticStyle: {
      "margin-top": "15px"
    },
    style: `background: ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario ? _vm.settingByTemplate.color_primario : '#25D366'}; color:${_vm.settingByTemplate && _vm.settingByTemplate.color_secundario ? _vm.settingByTemplate.color_secundario : '#FFFFFF'};
        border:2px solid ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario ? _vm.settingByTemplate.color_primario : '#25D366'};          
        `,
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.setOrderWa();
      }
    }
  }, [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  }), _vm._v(" " + _vm._s(_vm.$t('footer_finalizarCompra')) + "\n      ")], 1)]) : _vm._e(), _vm._v(" "), this.modalConfirmation ? _c('div', {
    staticClass: "modal-confirmation"
  }, [_c('p', {
    staticClass: "text-16"
  }, [_vm._v(_vm._s(this.textConfirmation))]), _vm._v(" "), _vm.stateBtnConfirmation ? _c('div', {
    staticClass: "flex flex-col justify-center items-center my-2"
  }, [_c('p', {
    staticClass: "text-14 text-red-500"
  }, [_vm._v("\n          Es importante enviar la información al whatsApp dueño.\n        ")]), _vm._v(" "), _c('span', {
    staticClass: "text-14 text-gray-200 w-9/12 mt-3"
  }, [_vm._v("\n          Si no abre whatsApp escribirle al dueño de la tienda por tu numero\n          de order: " + _vm._s(this.numberOrder) + "\n        ")]), _vm._v(" "), _c('button', {
    staticClass: "continue_form_confirmation",
    staticStyle: {
      "margin-top": "15px"
    },
    style: `background: ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario ? _vm.settingByTemplate.color_primario : '#25D366'}; color:${_vm.settingByTemplate && _vm.settingByTemplate.color_secundario ? _vm.settingByTemplate.color_secundario : '#FFFFFF'};
        border:2px solid ${_vm.settingByTemplate && _vm.settingByTemplate.color_primario ? _vm.settingByTemplate.color_primario : '#25D366'};          
        `,
    on: {
      "click": _vm.redirectWP
    }
  }, [_c('whatsapp-icon', {
    staticClass: "wp-icon"
  }), _vm._v(" Enviar información al WhatsApp\n        ")], 1)]) : _vm._e()]) : _vm._e()])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/headers/_order1/order1.vue?vue&type=template&id=43350ff8&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./mixins/idCloudinary.js
var idCloudinary = __webpack_require__(47);

// EXTERNAL MODULE: ./mixins/formatCurrent.js
var formatCurrent = __webpack_require__(48);

// EXTERNAL MODULE: ./mixins/expiredDate.js
var expiredDate = __webpack_require__(52);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js??ref--2-0!./node_modules/babel-loader/lib??ref--2-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/_order1/order1.vue?vue&type=script&lang=js&





/* harmony default export */ var order1vue_type_script_lang_js_ = ({
  mixins: [idCloudinary["a" /* default */], formatCurrent["a" /* default */], expiredDate["a" /* default */]],
  name: 'ko-Order1-cart-2',
  props: {
    dataStore: {
      type: Object,
      required: true
    },
    stateOrderWapi: {
      type: Boolean,
      required: false,
      default: () => false
    },
    quickSale: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },
  async mounted() {
    this.getCities();
    this.setPlaceholderDep();
    this.$store.dispatch('GET_DESCUENTOS');
    this.$store.dispatch('GET_SHOPPING_CART');
    this.$store.commit('CALCULATE_TOTAL_CART');
    if (this.rangosByCiudades.envio_metodo == 'precio') {
      this.shippingPrecio();
    }
    this.productsFreeShippingCart();
    this.IsMinValorTotal();
    this.obtainDiscountValue();
  },
  data() {
    return {
      // img: 'https://res.cloudinary.com/komerciaacademico/image/upload/v1583535445/komerciaAcademico/CARRITO_y2lbh6.png',
      shippingCities: [],
      rangosByCiudades: [],
      remove: false,
      shippingTarifaPrecio: '',
      estadoShippingTarifaPrecio: false,
      // formOrden: false,
      form: {
        nombre: '',
        identificacion: '',
        phone: '',
        email: '',
        ciudad: '',
        barrio: '',
        dirreccion: ''
      },
      formStringify: '',
      FreeShippingCart: false,
      placeholderBarrio: 'footer_formBarrio',
      placeholderMsgBarrio: 'footer_formBarrioMgs',
      stateBtnConfirmation: false,
      textConfirmation: '!Generando orden de compra!',
      modalConfirmation: false,
      discountDescuentos: 0,
      stateProductCart: 1,
      textDepartment: '',
      textCiudad: '',
      numberOrder: null
    };
  },
  computed: {
    layoutUniCentro() {
      return this.$store.state.layoutUnicentro;
    },
    openOrder: {
      get() {
        return this.$store.state.openOrder;
      },
      set(value) {
        this.$store.state.openOrder = value;
      }
    },
    formOrdenWhatsAPP: {
      get() {
        return this.$store.state.formOrdenWhatsAPP;
      },
      set(value) {
        this.$store.commit('SET_STATE_FORM_MODAL_WHATS_APP', value);
      }
    },
    // verifyProducts() {
    //   return this.$store.getters.verifyProducts
    // },
    userDropshipping() {
      return this.$store.getters.userDropshipping;
    },
    locationStore() {
      return this.$store.getters.locationStore;
    },
    cantidadProductos() {
      return this.$store.getters.cantidadProductos;
    },
    shippingDescuento() {
      return this.$store.getters.listaDescuentosProductos;
    },
    shippingDescuento2() {
      return this.$store.getters.listaDescuentosPrecio;
    },
    totalCart() {
      return this.$store.state.totalCart;
    },
    productsCart() {
      return this.$store.state.productsCart;
    },
    getFreeShipping() {
      let free = true;
      if (this.rangosByCiudad.envio_metodo === 'gratis') {
        free = false;
      }
      if (this.rangosByCiudad.envio_metodo === 'precio_ciudad') {
        free = false;
      }
      if (this.rangosByCiudad.envio_metodo === 'tarifa_plana') {
        free = true;
      }
      if (this.rangosByCiudad.envio_metodo === 'precio') {
        free = true;
      }
      if (this.rangosByCiudad.envio_metodo === 'sintarifa') {
        free = false;
      }
      if (this.rangosByCiudad.envio_metodo === 'sinEnvio') {
        free = false;
      }
      return free;
    },
    rangosByCiudad() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.rangosByCiudades = JSON.parse(this.$store.state.envios.valores);
      return this.rangosByCiudades;
    },
    cities() {
      return this.$store.state.cities;
    },
    shipping() {
      if (this.FreeShippingCart) {
        return 0;
      } else {
        if (this.$store.state.envios.estado) {
          let shipping = JSON.parse(this.$store.state.envios.valores);
          switch (shipping.envio_metodo) {
            case 'sinEnvio':
              return 0;
              // eslint-disable-next-line no-unreachable
              break;
            case 'sintarifa':
              return 0;
              // eslint-disable-next-line no-unreachable
              break;
            case 'gratis':
              return 0;
              // eslint-disable-next-line no-unreachable
              break;
            case 'tarifa_plana':
              return shipping.valor;
              // eslint-disable-next-line no-unreachable
              break;
            case 'precio_ciudad':
              // eslint-disable-next-line no-case-declarations
              let result = shipping.rangos.find(rango => {
                if (this.totalCart >= rango.inicial && this.totalCart <= rango.final) {
                  return rango;
                }
              });
              if (result) {
                return result.precio;
              } else {
                return 0;
              }
              // eslint-disable-next-line no-unreachable
              break;
            default:
              return 0;
          }
        } else {
          return 0;
        }
      }
    },
    facebookPixel() {
      return this.$store.state.analytics_tagmanager;
    },
    countryStore() {
      if (this.dataStore && this.dataStore.tienda.pais) {
        switch (this.dataStore.tienda.pais) {
          case 'Colombia':
            return true;
            // eslint-disable-next-line no-unreachable
            break;
          case 'Chile':
            return true;
            // eslint-disable-next-line no-unreachable
            break;
          case 'Perú':
            return true;
            // eslint-disable-next-line no-unreachable
            break;
          case 'Panamá':
            return true;
            // eslint-disable-next-line no-unreachable
            break;
          default:
            return false;
        }
      } else {
        return false;
      }
    },
    settingByTemplate() {
      if (this.$store.state.settingByTemplate) {
        return this.$store.state.settingByTemplate;
      } else {
        return this.$store.state.settingBaseWapir;
      }
    },
    inputCheckoutWPP() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      if (this.dataStore && this.dataStore.whatsapp_checkout && this.dataStore.whatsapp_checkout.configuration) {
        let myJSON = JSON.parse(this.dataStore.whatsapp_checkout.configuration);
        return myJSON;
      }
    }
    // stateModalPwd() {
    //   return this.$store.state.stateModalPwd
    // },
  },

  methods: {
    modalBehaviorWhatsApp(value) {
      if (this.quickSale && this.quickSale.state) {
        this.$store.commit('DELETE_ALL_ITEMS_CART');
        this.$store.commit('UPDATE_CONTENT_CART');
        this.$store.commit('SET_OPEN_ORDER', false);
        this.$store.commit('SET_STATE_FORM_MODAL_WHATS_APP', false);
      } else {
        this.formOrdenWhatsAPP = value;
      }
    },
    obtainDiscountValue() {
      let value1 = 0;
      let value2 = 0;
      if (this.shippingDescuento && this.shippingDescuento.tipo == 1) {
        value1 = this.shippingDescuento.valor ? this.shippingDescuento.valor : 0;
      } else if (this.shippingDescuento && this.shippingDescuento.tipo == 0) {
        value1 = this.shippingDescuento.valor ? Math.trunc(this.totalCart * this.shippingDescuento.valor / 100) : 0;
      }
      if (this.shippingDescuento2 && this.shippingDescuento2.precio) {
        if (this.shippingDescuento2.options == 0) {
          value2 = parseInt(this.shippingDescuento2.precio) ? Math.trunc(this.totalCart * parseInt(this.shippingDescuento2.precio) / 100) : 0;
        } else if (this.shippingDescuento2.options == 1) {
          value2 = this.shippingDescuento2.precio;
        }
      }
      this.discountDescuentos = value1 + value2;
    },
    shippingPrecio() {
      if (!this.FreeShippingCart) {
        if (this.rangosByCiudades.envio_metodo == 'precio') {
          let result = this.rangosByCiudades.rangos.find(rango => this.totalCart >= rango.inicial && this.totalCart <= rango.final);
          this.shippingTarifaPrecio = result ? result.precio : 'empty';
          this.estadoShippingTarifaPrecio = !result;
        }
      }
    },
    isQuotation() {
      let result = this.productsCart.some(product => product.precio === 0);
      return result;
    },
    IsMinValorTotal() {
      let result = false;
      if (this.dataStore.tienda.minimo_compra == 0 || this.dataStore.tienda.minimo_compra == null || this.totalCart >= this.dataStore.tienda.minimo_compra) {
        result = true;
      }
      return result;
    },
    addQuantity(product) {
      if (product.limitQuantity > product.cantidad) {
        product.cantidad++;
        this.$store.commit('UPDATE_CONTENT_CART');
        this.$store.commit('CALCULATE_TOTAL_CART');
        this.$store.dispatch('VERIFY_PRODUCTS');
      }
    },
    removeQuantity(product) {
      if (product.cantidad >= 2) {
        product.cantidad--;
        this.$store.commit('UPDATE_CONTENT_CART');
        this.$store.commit('CALCULATE_TOTAL_CART');
        this.$store.dispatch('VERIFY_PRODUCTS');
      }
    },
    deleteItemCart(i) {
      this.$store.commit('DELETEITEMCART', i);
      this.$store.commit('UPDATE_CONTENT_CART');
      this.$store.dispatch('VERIFY_PRODUCTS');
    },
    removeCartItems() {
      this.remove = false;
      location.reload(true);
      this.$store.commit('DELETE_ALL_ITEMS_CART');
      this.$store.commit('UPDATE_CONTENT_CART');
      this.$store.dispatch('VERIFY_PRODUCTS');
    },
    closeOrder(event) {
      const element = event.target.className;
      if (element === 'order' || element === 'continue_shopping' || element === 'continue_shopping2') {
        this.$store.commit('SET_OPEN_ORDER', false);
      }
    },
    closedOder() {
      this.$store.commit('SET_OPEN_ORDER', false);
    },
    GoPayments() {
      let objeto = {};
      objeto = JSON.parse(JSON.stringify(this.productsCart));
      objeto.map(element => {
        // DATOS IMPORTANTES A ENVIAR = ID - CANTIDAD - COMBINACION
        if (element.id) {
          delete element.envio_gratis;
          delete element.foto_cloudinary;
          delete element.limitQuantity;
          delete element.nombre;
          delete element.precio;
          delete element.activo;
          delete element.stock_disponible;
          delete element.con_variante;
          delete element.foto;
          delete element.informacion_producto;
          delete element.orden;
          delete element.tag;
          delete element.variantes;
          delete element.tag_promocion;
          delete element.promocion_valor;
        }
      });
      let json = {
        products: objeto,
        tienda: {
          id: this.$store.state.tienda.id_tienda
        },
        canal: 'KOMERCIA'
      };
      json = JSON.stringify(json);
      if (this.productsCart.length != 0) {
        this.$store.dispatch('SEND_ADD_TO_CART', 2);
        if (this.layoutUniCentro) {
          window.open(`https://checkout.komercia.co/?params=${json}`);
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`;
        }
      }
    },
    async getCities() {
      if (this.rangosByCiudad.envio_metodo === 'precio_ciudad') {
        try {
          const storeCities = JSON.parse(localStorage.getItem('storeCities'));
          if (storeCities) {
            this.$store.commit('SET_CITIES', storeCities);
            this.filterCities();
          } else {
            const {
              success
            } = await this.$store.dispatch('GET_CITIES');
            if (success) {
              this.filterCities();
            }
          }
        } catch (err) {
          const {
            success
          } = await this.$store.dispatch('GET_CITIES');
          if (success) {
            this.filterCities();
          }
        }
      }
    },
    filterCities() {
      if (this.rangosByCiudad.envio_metodo === 'precio_ciudad' && this.cities.length > 0) {
        this.rangosByCiudad.rangos.forEach((rango, index) => {
          this.cities.filter(city => {
            if (city.id === this.rangosByCiudad.rangos[index].id) {
              this.shippingCities.push(city);
            }
          });
        });
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
      let baseUrlPc = 'https://web.whatsapp.com/send?phone=';
      let productosCart = [];
      this.productsCart.map(element => {
        if (element.combinacion) {
          let combiString = JSON.stringify(element.combinacion);
          let combiList = combiString.replace(/"/g, '');
          let resultcombitList = combiList.replace(/,/g, ' - ');
          productosCart.push(`${element.cantidad} x ${element.nombre} = Variantes: ${resultcombitList} -> Valor: ${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${element.cantidad * element.precio}`);
        } else {
          productosCart.push(`${element.cantidad} x ${element.nombre} -> Valor: ${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${element.cantidad * element.precio}`);
        }
      });
      let productString = JSON.stringify(productosCart);
      let productList = productString.replace(/"/g, '');
      let resultproductList = productList.replace(/,/g, '%0A');
      let result = resultproductList.slice(1, -1);
      var text = '';
      if (this.inputCheckoutWPP && this.inputCheckoutWPP.length === 0 || this.inputCheckoutWPP === null || this.inputCheckoutWPP === undefined) {
        if (this.dataStore.tienda.lenguaje == 'es') {
          text = `Hola%2C%20soy%20${this.form.nombre}%2C%0Ahice%20este%20pedido%20en%20tu%20tienda%20${encodeURIComponent(this.dataStore.tienda.nombre)}%0ANumero%20de%20orden%3A%20${this.numberOrder}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADescuento%2A%3A%20${this.discountDescuentos ? this.dataStore.tienda.moneda == 'PEN' ? '- S/' : '- $' + this.discountDescuentos : 'No%20aplica'}%0A%2ASubtotal%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart}%0A%2ATOTAL%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart + (this.shipping ? this.shipping : 0) + (this.shippingTarifaPrecio && this.shippingTarifaPrecio != 'empty' && !this.FreeShippingCart ? this.shippingTarifaPrecio : 0) - this.discountDescuentos}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMi%20informaci%C3%B3n%2A%3A%0A%2ANombre%2A%3A%20${this.form.nombre}%0A%2AIdentificación%2A%3A%20${encodeURIComponent(this.form.phone)}%0A%2AE-mail%2A%3A%20${encodeURIComponent(this.form.email ? this.form.email : '')}%0A%2A${this.textDepartment}%2A%3A%20${encodeURIComponent(this.form.ciudad)}%0A%2A${encodeURIComponent(this.textCiudad)}%2A%3A%20${encodeURIComponent(this.form.barrio)}%0A%2ADirección%2A%3A%20${encodeURIComponent(this.form.dirreccion)}%0A%0A%2Avolver%20a%20la%20tienda%2A%3A%20${window.location}?clearCart=true`;
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          text = `Hello%2C%20I%20am%20${this.form.nombre}%2C%0AI%20made%20this%20order%20at%20your%20store%20${encodeURIComponent(this.dataStore.tienda.nombre)}%0AOrder%20number%3A%20${this.numberOrder}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADiscount%2A%3A%20${this.discountDescuentos ? this.dataStore.tienda.moneda == 'PEN' ? '- S/' : '- $' + this.discountDescuentos : 'Not%20applicable'}%0A%2ASubtotal%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart}%0A%2ATOTAL%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart + (this.shipping ? this.shipping : 0) + (this.shippingTarifaPrecio && this.shippingTarifaPrecio != 'empty' && !this.FreeShippingCart ? this.shippingTarifaPrecio : 0) - this.discountDescuentos}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMy%20information%2A%3A%0A%2AName%2A%3A%20${this.form.nombre}%0A%2AIdentification%2A%3A%20${encodeURIComponent(this.form.phone)}%0A%2AE-mail%2A%3A%20${encodeURIComponent(this.form.email ? this.form.email : '')}%0A%2A${this.textDepartment}%2A%3A%20${this.form.ciudad}%0A%2A${encodeURIComponent(this.textCiudad)}%2A%3A%20${this.form.barrio}%0A%2AAddres%2A%3A%20${encodeURIComponent(this.form.dirreccion)}%0A%0A%2Aback%20to%20the%20store%2A%3A%20${window.location}?clearCart=true`;
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          text = `Olá%2C%20aqui%20é%20${this.form.nombre}%2C%0Afiz%20esse%20pedido%20em%20sua%20loja%20Mustad%20Whatsapp%20${encodeURIComponent(this.dataStore.tienda.nombre)}%0AN%C3%BAmero%20do%20pedido%3A%20${this.numberOrder}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADesconto%2A%3A%20${this.discountDescuentos ? this.dataStore.tienda.moneda == 'PEN' ? '- S/' : '- $' + this.discountDescuentos : 'Não%20aplicável'}%0A%2ASubtotal%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart}%0A%2ATOTAL%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart + (this.shipping ? this.shipping : 0) + (this.shippingTarifaPrecio && this.shippingTarifaPrecio != 'empty' && !this.FreeShippingCart ? this.shippingTarifaPrecio : 0) - this.discountDescuentos}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMy%20Minhas%20informaçãoes%2A%3A%0A%2ANome%2A%3A%20${this.form.nombre}%0A%2Aidentificação%2A%3A%20${encodeURIComponent(this.form.phone)}%0A%2AE-mail%2A%3A%20${encodeURIComponent(this.form.email ? this.form.email : '')}%0A%2A${this.textDepartment}%2A%3A%20${encodeURIComponent(this.form.ciudad)}%0A%2A${encodeURIComponent(this.textCiudad)}%2A%3A%20${this.form.barrio}%0A%2AEndereço%2A%3A%20${encodeURIComponent(this.form.dirreccion)}%0A%0A%2Ade%20volta%20%C3%A0%20loja%2A%3A%20${window.location}?clearCart=true`;
        } else {
          text = `Hola%2C%20soy%20${this.form.nombre}%2C%0Ahice%20este%20pedido%20en%20tu%20tienda%20${encodeURIComponent(this.dataStore.tienda.nombre)}%0ANumero%20de%20orden%3A%20${this.numberOrder}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADescuento%2A%3A%20${this.discountDescuentos ? this.dataStore.tienda.moneda == 'PEN' ? '- S/' : '- $' + this.discountDescuentos : 'No%20aplica'}%0A%2ASubtotal%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart}%0A%2ATOTAL%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart + (this.shipping ? this.shipping : 0) + (this.shippingTarifaPrecio && this.shippingTarifaPrecio != 'empty' && !this.FreeShippingCart ? this.shippingTarifaPrecio : 0) - this.discountDescuentos}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMi%20informaci%C3%B3n%2A%3A%0A%2ANombre%2A%3A%20${this.form.nombre}%0A%2AIdentificación%2A%3A%20${encodeURIComponent(this.form.phone)}%0A%2AE-mail%2A%3A%20${encodeURIComponent(this.form.email ? this.form.email : '')}%0A%2A${this.textDepartment}%2A%3A%20${encodeURIComponent(this.form.ciudad)}%0A%2A${encodeURIComponent(this.textCiudad)}%2A%3A%20${encodeURIComponent(this.form.barrio)}%0A%2ADirección%2A%3A%20${encodeURIComponent(this.form.dirreccion)}%0A%0A%2Avolver%20a%20la%20tienda%2A%3A%20${window.location}?clearCart=true`;
        }
      } else {
        if (this.dataStore.tienda.lenguaje == 'es') {
          text = `Hola%20%F0%9F%91%8B.%0AHice%20este%20pedido%20%F0%9F%93%A6%20en%20tu%20tienda%20${encodeURIComponent(this.dataStore.tienda.nombre)}%0ANumero%20de%20orden%3A%20${this.numberOrder}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADescuento%2A%3A%20-${this.discountDescuentos ? this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$' + this.discountDescuentos : 'No%20aplica'}%0A%2ASubtotal%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart}%0A%2ATOTAL%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart + (this.shipping ? this.shipping : 0) + (this.shippingTarifaPrecio && this.shippingTarifaPrecio != 'empty' && !this.FreeShippingCart ? this.shippingTarifaPrecio : 0) - this.discountDescuentos}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMi%20informaci%C3%B3n%2A%3A%0A${this.formatDataCheckout()}%0A%0A%2Avolver%20a%20la%20tienda%2A%3A%20${this.quickSale && this.quickSale.state ? this.locationStore : window.location}?clearCart=true`;
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          text = `Hello%20%F0%9F%91%8B.%0AI%20placed%20this%20order%20%F0%9F%93%A6%20in%20your%20store.%20${encodeURIComponent(this.dataStore.tienda.nombre)}%0AOrder%20number%3A%20${this.numberOrder}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADiscount%2A%3A%20${this.discountDescuentos ? this.dataStore.tienda.moneda == 'PEN' ? '- S/' : '- $' + this.discountDescuentos : 'Not%20applicable'}%0A%2ASubtotal%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart}%0A%2ATOTAL%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart + (this.shipping ? this.shipping : 0) + (this.shippingTarifaPrecio && this.shippingTarifaPrecio != 'empty' && !this.FreeShippingCart ? this.shippingTarifaPrecio : 0) - this.discountDescuentos}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMy%20information%2A%3A%0A${this.formatDataCheckout()}%0A%0A%2Aback%20to%20the%20store%2A%3A%20${this.quickSale && this.quickSale.state ? this.locationStore : window.location}?clearCart=true`;
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          text = `Ol%C3%A1%20%F0%9F%91%8B.%0AEu%20coloquei%20este%20pedido%20%F0%9F%93%A6%20em%20sua%20loja.%20${encodeURIComponent(this.dataStore.tienda.nombre)}%0AN%C3%BAmero%20do%20pedido%3A%20${this.numberOrder}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADesconto%2A%3A%20-${this.discountDescuentos ? this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$' + this.discountDescuentos : 'Não%20aplicável'}%0A%2ASubtotal%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart}%0A%2ATOTAL%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart + (this.shipping ? this.shipping : 0) + (this.shippingTarifaPrecio && this.shippingTarifaPrecio != 'empty' && !this.FreeShippingCart ? this.shippingTarifaPrecio : 0) - this.discountDescuentos}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMy%20Minhas%20informaçãoes%2A%3A%0A${this.formatDataCheckout()}%0A%0A%2Ade%20volta%20%C3%A0%20loja%2A%3A%20${this.quickSale && this.quickSale.state ? this.locationStore : window.location}?clearCart=true`;
        } else {
          if (this.dataStore.tienda.lenguaje == 'es') {
            text = `Hola%20%F0%9F%91%8B.%0AHice%20este%20pedido%20%F0%9F%93%A6%20en%20tu%20tienda%20${encodeURIComponent(this.dataStore.tienda.nombre)}%0ANumero%20de%20orden%3A%20${this.numberOrder}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.translateDeliveryMethod()}%2A%0A%2ADescuento%2A%3A%20${this.discountDescuentos ? this.dataStore.tienda.moneda == 'PEN' ? '- S/' : '- $' + this.discountDescuentos : 'No%20aplica'}%0A%2ASubtotal%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart}%0A%2ATOTAL%2A%3A%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.totalCart + (this.shipping ? this.shipping : 0) + (this.shippingTarifaPrecio && this.shippingTarifaPrecio != 'empty' && !this.FreeShippingCart ? this.shippingTarifaPrecio : 0) - this.discountDescuentos}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMi%20informaci%C3%B3n%2A%3A%0A${this.formatDataCheckout()}%0A%0A%2Avolver%20a%20la%20tienda%2A%3A%20${this.quickSale && this.quickSale.state ? this.locationStore : window.location}?clearCart=true`;
          }
        }
      }
      if (this.quickSale && this.quickSale.state && this.quickSale.dataSeller.phone) {
        if (this.quickSale && this.quickSale.state) {
          if (this.quickSale.dataSeller.phone.charAt(0) == '+') {
            let phone_number_whatsapp = this.quickSale.dataSeller.phone.slice(1);
            if (this.mobileCheck()) {
              window.location.href = `${baseUrlMovil}${phone_number_whatsapp}&text=${text}`;
            } else {
              window.location.href = `${baseUrlPc}${phone_number_whatsapp}&text=${text}`;
            }
          }
        }
      } else {
        if (this.dataStore.tienda.whatsapp.charAt(0) == '+') {
          let phone_number_whatsapp = this.dataStore.tienda.whatsapp.slice(1);
          if (this.mobileCheck()) {
            window.location.href = `${baseUrlMovil}${phone_number_whatsapp}&text=${text}`;
          } else {
            window.location.href = `${baseUrlPc}${phone_number_whatsapp}&text=${text}`;
          }
        } else {
          if (this.mobileCheck()) {
            window.location.href = `${baseUrlMovil}57${this.dataStore.tienda.whatsapp}&text=${text}`;
          } else {
            window.location.href = `${baseUrlPc}57${this.dataStore.tienda.whatsapp}&text=${text}`;
          }
        }
      }
      setTimeout(() => {
        this.modalConfirmation = false;
        this.closedOder();
        this.$message({
          showClose: true,
          message: '¡Por falta de permisos no fue posible abrir WhatsApp para enviar la información!',
          type: 'error',
          duration: 9000
        });
        this.removeCartItems();
      }, 9000);
    },
    setOrderWa() {
      this.$refs.observer.validate().then(response => {
        if (response) {
          this.modalConfirmation = true;
          if (this.inputCheckoutWPP && this.inputCheckoutWPP.length === 0 || this.inputCheckoutWPP === null || this.inputCheckoutWPP === undefined) {
            let temp = {
              nombre: this.form.nombre,
              phone: this.form.phone,
              // Es la cedula
              correo: this.form.email,
              identificacion: this.form.identificacion,
              //Es el telefono
              ciudad: this.form.ciudad,
              barrio: this.form.barrio,
              direccion: this.form.dirreccion
            };
            this.formStringify = JSON.stringify(temp);
          } else {
            this.formStringify = JSON.stringify(this.inputCheckoutWPP);
          }
          this.eventFacebookPixel();
          const params = {
            canal: 1,
            usuario: 30866,
            tipo: 0,
            tienda: this.dataStore.tienda.id_tienda,
            total: this.totalCart + (this.shipping ? this.shipping : 0) + (this.shippingTarifaPrecio && this.shippingTarifaPrecio != 'empty' && !this.FreeShippingCart ? this.shippingTarifaPrecio : 0) - this.discountDescuentos,
            direccion_entrega: {
              type: 0,
              value: null
            },
            productos: this.productsCart,
            comentario: this.formStringify,
            costo_envio: this.setShipping(),
            metodo_pago: 7,
            descuento: this.discountDescuentos ? this.discountDescuentos : 0,
            reseller: this.userDropshipping ? Number(this.userDropshipping) : null
          };
          external_axios_default.a.post(`${this.$store.state.urlKomercia}/api/usuario/orden`, params).then(response => {
            this.numberOrder = response.data.data.id;
            this.textConfirmation = '¡Información enviada correctamente a la tienda!';
            this.stateBtnConfirmation = true;
          }).catch(() => {
            this.textConfirmation = 'Error al enviar los datos!';
            this.$message.error('Error al enviar los datos!');
          });
        }
      });
    },
    setShipping() {
      let resultShipping;
      if (this.rangosByCiudades && this.rangosByCiudades.envio_metodo == 'gratis') {
        resultShipping = 0;
      } else if (this.rangosByCiudades && this.rangosByCiudades.envio_metodo == 'sinEnvio') {
        resultShipping = this.rangosByCiudades.valor;
      } else if (this.rangosByCiudades && this.rangosByCiudades.envio_metodo == 'tarifa_plana') {
        resultShipping = this.rangosByCiudades.valor;
      } else if (this.rangosByCiudades && this.rangosByCiudades.envio_metodo == 'precio_ciudad') {
        resultShipping = 0;
      } else if (this.rangosByCiudades && this.rangosByCiudades.envio_metodo == 'precio') {
        resultShipping = this.shippingTarifaPrecio;
      } else if (this.rangosByCiudades && this.rangosByCiudades.envio_metodo == 'sintarifa') {
        resultShipping = 0;
      } else {
        resultShipping = 0;
      }
      return resultShipping;
    },
    translateDeliveryMethod() {
      let textFreeShippingCart;
      if (this.rangosByCiudades && this.rangosByCiudades.envio_metodo == 'gratis') {
        if (this.dataStore.tienda.lenguaje == 'es') {
          textFreeShippingCart = 'Env%C3%ADo%20gratis';
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          textFreeShippingCart = 'Free%20shippings';
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          textFreeShippingCart = 'Frete%20gr%C3%A1tis';
        }
      } else if (this.rangosByCiudades && this.rangosByCiudades.envio_metodo == 'tarifa_plana') {
        if (this.dataStore.tienda.lenguaje == 'es') {
          textFreeShippingCart = `Costo%20domicilio:%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.rangosByCiudades.valor}`;
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          textFreeShippingCart = `Shipping%cost:%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.rangosByCiudades.valor}`;
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          textFreeShippingCart = `Custos%20envio:%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.rangosByCiudades.valor}`;
        }
      } else if (this.rangosByCiudades && this.rangosByCiudades.envio_metodo == 'precio_ciudad') {
        if (this.dataStore.tienda.lenguaje == 'es') {
          textFreeShippingCart = 'Costos%20de%20Env%C3%ADo%20por%20separado';
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          textFreeShippingCart = 'Shipping%20cost%20separately';
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          textFreeShippingCart = 'Custos%20de%20envio%20negociar%20a%20parte';
        }
      } else if (this.rangosByCiudades && this.rangosByCiudades.envio_metodo == 'precio') {
        if (this.dataStore.tienda.lenguaje == 'es') {
          textFreeShippingCart = `Costo%20domicilio:%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.shippingTarifaPrecio}`;
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          textFreeShippingCart = `Shipping%cost:%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.shippingTarifaPrecio}`;
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          textFreeShippingCart = `Custos%20envio:%20${this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'}${this.shippingTarifaPrecio}`;
        }
      } else if (this.rangosByCiudades && this.rangosByCiudades.envio_metodo == 'sintarifa') {
        if (this.dataStore.tienda.lenguaje == 'es') {
          textFreeShippingCart = 'Costos%20de%20Env%C3%ADo%20por%20separado';
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          textFreeShippingCart = 'Shipping%20cost%20separately';
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          textFreeShippingCart = 'Custos%20de%20envio%20negociar%20a%20parte';
        }
      } else {
        if (this.dataStore.tienda.lenguaje == 'es') {
          textFreeShippingCart = 'Costos%20de%20Env%C3%ADo%20por%20separado';
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          textFreeShippingCart = 'Shipping%20cost%20separately';
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          textFreeShippingCart = 'Custos%20de%20envio%20negociar%20a%20parte';
        }
      }
      return textFreeShippingCart;
    },
    formatDataCheckout() {
      const temp = this.inputCheckoutWPP.filter(item => item.value).map(item => `\n${item.textInput}: ${item.value}`).join('');
      return encodeURIComponent(temp);
    },
    eventFacebookPixel() {
      let array = [];
      let content = [];
      this.productsCart.map(element => {
        if (element) {
          array.push(`${element.id}`);
          let temp = {
            id: `${element.id}`,
            quantity: element.cantidad
          };
          content.push(temp);
        }
      });
      if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
        window.fbq('track', 'Purchase', {
          content_type: 'product',
          content_ids: array,
          contents: content,
          description: `Comprar finalizada WhatsApp`,
          value: this.totalCart + (this.shipping ? this.shipping : 0) + (this.shippingTarifaPrecio && this.shippingTarifaPrecio != 'empty' && !this.FreeShippingCart ? this.shippingTarifaPrecio : 0) - this.discountDescuentos,
          currency: this.dataStore.tienda.moneda
        });
      }
    },
    productsFreeShippingCart() {
      if (this.productsCart) {
        let result = this.productsCart.filter(rango => rango.envio_gratis === 1);
        this.FreeShippingCart = this.productsCart.length == result.length;
      }
    },
    setPlaceholderDep() {
      switch (this.dataStore.tienda.id_pais) {
        //colombia
        case 1:
          this.placeholderDepart = 'footer_formDepartamento';
          this.placeholderBarrio = 'footer_formBarrio';
          this.placeholderMsgBarrio = 'footer_formBarrioMgs';
          this.textDepartment = 'Departamento', this.textCiudad = 'Cuidad / Barrio / Zona';
          break;
        //Mexico
        case 3:
          this.placeholderDepart = 'footer_formEstado';
          this.placeholderBarrio = 'footer_formBarrio1';
          this.placeholderMsgBarrio = 'footer_formBarrioMgs';
          this.textDepartment = 'Estado', this.textCiudad = 'Cuidad / Colonia / Zona';
          break;
        //Argentina
        case 6:
          this.placeholderDepart = 'footer_formRegion';
          this.placeholderBarrio = 'footer_formComuna';
          this.placeholderMsgBarrio = 'footer_formBarrioMgs';
          this.textDepartment = 'Región', this.textCiudad = 'Provincia / Comuna / Sector';
          break;
        //Chile
        case 7:
          this.placeholderDepart = 'footer_formRegion';
          this.placeholderBarrio = 'footer_formComuna';
          this.placeholderMsgBarrio = 'footer_formBarrioMgs';
          this.textDepartment = 'Región', this.textCiudad = 'Provincia / Comuna / Sector';
          break;
        //Puerto Rico
        case 8:
          this.placeholderDepart = 'footer_formMunicipios';
          this.placeholderBarrio = 'footer_formComuna';
          this.placeholderMsgBarrio = 'footer_formBarrioMgs';
          this.textDepartment = 'Municipio', this.textCiudad = 'Provincia / Comuna / Sector';
          break;
        //Perú
        case 9:
          this.placeholderDepart = 'footer_formDepartamento';
          this.placeholderBarrio = 'footer_formBarrio3';
          this.placeholderMsgBarrio = 'footer_formBarrioMgs';
          this.textDepartment = 'Departamento', this.textCiudad = 'Provincia / Cuidad / Zona';
          break;
        //Panama
        case 10:
          this.placeholderDepart = 'footer_formProvincia';
          this.placeholderBarrio = 'footer_formBarrio2';
          this.placeholderMsgBarrio = 'footer_formBarrioMgs';
          this.textDepartment = 'Provincia', this.textCiudad = 'Distritos / Zona';
          break;
      }
    }
  },
  watch: {
    rangosByCiudad() {
      this.filterCities();
    },
    // cities() {
    //   this.filterCities()
    // },
    productsCart() {
      if (this.productsCart) {
        this.tempCart = this.productsCart;
        this.shippingPrecio();
        this.productsFreeShippingCart();
      }
    },
    totalCart() {
      this.shippingPrecio();
      this.IsMinValorTotal();
      this.obtainDiscountValue();
    },
    shippingDescuento() {
      this.obtainDiscountValue();
    },
    shippingDescuento2() {
      this.obtainDiscountValue();
    },
    openOrder(value) {
      if (!value && this.quickSale && this.quickSale.state) {
        this.$store.commit('DELETE_ALL_ITEMS_CART');
        this.$store.commit('UPDATE_CONTENT_CART');
        this.$store.commit('SET_OPEN_ORDER', false);
        this.$store.commit('SET_STATE_FORM_MODAL_WHATS_APP', false);
      }
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
// CONCATENATED MODULE: ./components/headers/_order1/order1.vue?vue&type=script&lang=js&
 /* harmony default export */ var _order1_order1vue_type_script_lang_js_ = (order1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/headers/_order1/order1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _order1_order1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "43350ff8",
  "07d2b9e8"
  
)

/* harmony default export */ var order1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=352.js.map