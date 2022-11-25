<template>
  <el-drawer
    :visible.sync="openOrder"
    :withHeader="false"
    direction="rtl"
    class="width-drawer"
    :modalAppendToBody="false"
  >
    <!-- <transition name="fade"> -->
    <div @click="closeOrder" class="relative">
      <div class="order_content">
        <div class="order_header">
          <h3>{{ $t('footer_title') }} ({{ cantidadProductos }})</h3>
          <div class="order_header_close" @click="closedOder">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
        </div>
        <transition name="slide">
          <template v-if="productsCart.length">
            <div class="order--wrapper">
              <div class="order_products">
                <ul class="order_products_list">
                  <li
                    class="order_products_list_item"
                    v-for="(product, index) in productsCart"
                    :key="index"
                  >
                    <div class="photo">
                      <img
                        v-lazy="idCloudinary(product.foto_cloudinary, 150, 150)"
                        alt="Product Img"
                      />
                    </div>
                    <div class="w-full flex flex-col">
                      <div class="name">
                        <p class="order-text" style="font-weight: bold">
                          {{ product.nombre | capitalize }}
                        </p>
                        <span v-if="product.precio">
                          <b class="unidades"
                            >{{ $t('cart_cantidad') }} {{ product.cantidad }}</b
                          >
                          <b class="unidades"
                            >X{{
                              product.precio
                                | currency(
                                  dataStore.tienda.codigo_pais,
                                  dataStore.tienda.moneda
                                )
                            }}
                          </b>
                        </span>
                        <div
                          class="w-full flex flex-col justify-center items-start mb-5"
                        >
                          <div
                            class="flex flex-row relative box-border content-quantity"
                          >
                            <button
                              class="bg-transparent quantity_remove"
                              v-on:click="removeQuantity(product)"
                            >
                              <menos-icon class="icon-quantity" />
                            </button>
                            <p
                              class="flex items-center justify-center bg-transparent quantity_value"
                            >
                              {{ product.cantidad }}
                            </p>
                            <button
                              class="bg-transparent quantity_add"
                              v-on:click="addQuantity(product)"
                            >
                              <mas-icon class="icon-quantity" />
                            </button>
                            <div
                              class="container-alerta"
                              v-if="product.limitQuantity == product.cantidad"
                            >
                              <span class="alerta">
                                {{ $t('cart_ultimaUnidad') }}</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="product.combinacion"
                          class="grid grid-flow-col auto-cols-max mb-5"
                        >
                          <el-tag
                            v-for="(
                              productCombinacion, index2
                            ) in product.combinacion"
                            :key="index2"
                          >
                            {{ productCombinacion | capitalize }}
                          </el-tag>
                        </div>
                        <el-tag
                          type="danger"
                          v-if="product.activo == 0"
                          style="background-color: rgb(223, 62, 62)"
                          >Producto agotado!
                        </el-tag>
                        <el-tag
                          type="danger"
                          style="background-color: rgb(223, 62, 62)"
                          v-if="product.stock_disponible == 0"
                          >¡No tiene las unidades disponibles!
                        </el-tag>
                      </div>
                    </div>
                    <div class="price" v-if="product.precio > 0">
                      <p>
                        {{
                          (product.precio * product.cantidad)
                            | currency(
                              dataStore.tienda.codigo_pais,
                              dataStore.tienda.moneda
                            )
                        }}
                      </p>
                    </div>
                    <div v-else class="price" />
                    <boteBasura-icon
                      class="icon-delete"
                      v-on:click="deleteItemCart(index)"
                    />
                  </li>
                </ul>
              </div>
              <div class="h-full flex flex-col justify-end">
                <div class="w-full flex justify-center items-center">
                  <div
                    class="w-full flex flex-row justify-center items-center text-center cursor-pointer content-remove-cart"
                    @click="remove = !remove"
                  >
                    <cart-icon class="header-icon-cart" />
                    <p>
                      {{ $t('footer_vaciarCarrito') }}
                    </p>
                  </div>
                </div>
                <div class="order_total">
                  <span class="order_total_domicile">
                    <p style="font-weight: bold; font-size: 16px">
                      {{ $t('footer_costoDomicilio') }}
                    </p>
                    <details
                      v-if="
                        rangosByCiudad.envio_metodo === 'precio_ciudad' &&
                        shippingCities.length > 0 &&
                        !getFreeShipping &&
                        !FreeShippingCart
                      "
                    >
                      <summary class="text-color">
                        {{ $t('footer_valorCiudad') }}
                      </summary>
                      <section>
                        <ol class="scroll_cart_summary_items_cities">
                          <li
                            v-for="(ciudad, index) in rangosByCiudad.rangos"
                            :key="ciudad.id"
                          >
                            <div v-if="ciudad.price > 0">
                              <b>
                                {{
                                  shippingCities[index].nombre_ciu ===
                                  'Sin especificar'
                                    ? 'Resto del país'
                                    : shippingCities[index].nombre_ciu
                                }}:
                              </b>
                              <p>
                                {{
                                  ciudad.price
                                    | currency(
                                      dataStore.tienda.codigo_pais,
                                      dataStore.tienda.moneda
                                    )
                                }}
                              </p>
                            </div>
                          </li>
                        </ol>
                      </section>
                    </details>
                    <div
                      v-else-if="
                        rangosByCiudad.envio_metodo === 'tarifa_plana' &&
                        shipping > 0 &&
                        getFreeShipping &&
                        !FreeShippingCart
                      "
                    >
                      <li class="text-color" style="list-style: none">
                        {{ $t('footer_tarifaPlana') }}
                        {{
                          rangosByCiudades.valor
                            | currency(
                              dataStore.tienda.codigo_pais,
                              dataStore.tienda.moneda
                            )
                        }}
                      </li>
                    </div>
                    <div
                      v-else-if="
                        rangosByCiudad.envio_metodo === 'precio' &&
                        getFreeShipping &&
                        !FreeShippingCart
                      "
                    >
                      <div v-if="this.shippingTarifaPrecio > 0">
                        <p class="text-color">
                          {{
                            this.shippingTarifaPrecio
                              | currency(
                                dataStore.tienda.codigo_pais,
                                dataStore.tienda.moneda
                              )
                          }}
                        </p>
                      </div>
                      <p
                        v-else-if="this.shippingTarifaPrecio >= 0"
                        class="text-color"
                      >
                        {{ $t('footer_tarifaPrecio') }}
                      </p>
                      <p v-else class="text-TarifaPrecio">
                        {{ $t('footer_encioNoconfig') }}
                      </p>
                    </div>
                    <!-- <div
                      v-else-if="
                        shipping &&
                        getFreeShipping == false &&
                        FreeShippingCart == false
                      "
                    >
                      <p>
                        {{
                          shipping
                            | currency(
                              dataStore.tienda.codigo_pais,
                              dataStore.tienda.moneda
                            )
                        }}
                      </p>
                    </div> -->
                    <p
                      class="without_shipping_cost"
                      v-else-if="
                        rangosByCiudad.envio_metodo === 'gratis' &&
                        shippingCities.length <= 0 &&
                        !getFreeShipping &&
                        !FreeShippingCart
                      "
                    >
                      {{ $t('footer_encioGratis') }}
                    </p>
                    <p
                      class="without_shipping_cost"
                      v-else-if="
                        rangosByCiudad.envio_metodo === 'sintarifa' &&
                        shippingCities.length <= 0 &&
                        !getFreeShipping &&
                        !FreeShippingCart
                      "
                    >
                      {{ $t('footer_enviosPorPagar') }}
                    </p>
                    <p
                      class="without_shipping_cost"
                      v-else-if="FreeShippingCart"
                    >
                      {{ $t('footer_tarifaPrecio') }}
                    </p>
                  </span>
                  <span class="order_total_net" v-if="discountDescuentos">
                    <p>{{ $t('footer_descuento') }}</p>
                    <p>
                      -
                      {{
                        discountDescuentos
                          | currency(
                            dataStore.tienda.codigo_pais,
                            dataStore.tienda.moneda
                          )
                      }}
                    </p>
                  </span>
                  <span class="order_total_net">
                    <p>{{ $t('cart_subtotal') }}</p>
                    <p>
                      {{
                        totalCart
                          | currency(
                            dataStore.tienda.codigo_pais,
                            dataStore.tienda.moneda
                          )
                      }}
                    </p>
                  </span>
                  <span class="order_total_net">
                    <p>{{ $t('footer_totalPagar') }}</p>
                    <p>
                      {{
                        (totalCart +
                          (this.shipping ? this.shipping : 0) +
                          (this.shippingTarifaPrecio &&
                          this.shippingTarifaPrecio != 'empty' &&
                          !this.FreeShippingCart
                            ? this.shippingTarifaPrecio
                            : 0) -
                          this.discountDescuentos)
                          | currency(
                            dataStore.tienda.codigo_pais,
                            dataStore.tienda.moneda
                          )
                      }}
                    </p>
                  </span>
                </div>
                <div class="content-button">
                  <!-- no tiene cobertura de pais, compra por whatsApp -->
                  <div
                    v-if="
                      isQuotation() ||
                      (!countryStore &&
                        productsCart.length &&
                        dataStore.tienda.estado == 1)
                    "
                    class="wrapper-Quotation"
                  >
                    <p class="Quotation-message">
                      {{ $t('footer_contactoMgs') }}
                    </p>
                    <button
                      v-if="
                        !stateOrderWapi &&
                        expiredDate(dataStore.tienda.fecha_expiracion)
                      "
                      class="continue_shopping_whatsapp"
                      @click="formOrden = !formOrden"
                    >
                      <whatsapp-icon class="wp-icon" />
                      {{ $t('footer_compraWhatsapp') }}
                    </button>
                  </div>
                  <!-- rango de domicilio no configurado -->
                  <p
                    class="domicilio-message"
                    v-if="
                      productsCart.length &&
                      this.shippingTarifaPrecio == 'empty' &&
                      this.estadoShippingTarifaPrecio
                    "
                  >
                    {{ $t('footer_contactoMgs2') }}
                  </p>
                  <!-- tienda cerrada -->
                  <p
                    class="Quotation-message"
                    v-if="dataStore.tienda.estado == 0"
                  >
                    {{ $t('footer_tiendaCerrada') }}
                  </p>
                  <!-- <p class="Quotation-message" v-if="verifyProducts == 0">
                    {{ $t('cart_limitProductos') }}
                  </p> -->
                  <!-- <p class="Quotation-message" v-if="!stateModalPwd">
                    {{ $t('footer_tiendaPwd') }}
                  </p> -->
                  <!-- limite de productos para comprar -->
                  <p
                    class="Quotation-message"
                    v-if="!IsMinValorTotal() && productsCart.length"
                  >
                    {{ $t('cart_minimovalorProductos1') }}
                    {{
                      this.dataStore.tienda.minimo_compra
                        | currency(
                          dataStore.tienda.codigo_pais,
                          dataStore.tienda.moneda
                        )
                    }}
                    {{ $t('cart_minimovalorProductos2') }}
                  </p>
                  <!-- ir al checkout -->
                  <button
                    v-if="
                      !stateOrderWapi &&
                      productsCart.length &&
                      !isQuotation() &&
                      dataStore.tienda.estado == 1 &&
                      !this.estadoShippingTarifaPrecio &&
                      countryStore &&
                      IsMinValorTotal() &&
                      expiredDate(dataStore.tienda.fecha_expiracion)
                    "
                    class="continue_shopping"
                    @click="GoPayments"
                    id="InitiateCheckoutTag"
                  >
                    {{ $t('footer_finalizarCompra') }}
                  </button>
                  <!-- ir al checkout whatsApp -->
                  <button
                    v-if="
                      stateOrderWapi &&
                      productsCart.length &&
                      !isQuotation() &&
                      dataStore.tienda.estado == 1 &&
                      !this.estadoShippingTarifaPrecio &&
                      countryStore &&
                      IsMinValorTotal() &&
                      settingByTemplate.pago_online == 1 &&
                      expiredDate(dataStore.tienda.fecha_expiracion)
                    "
                    class="continue_shopping2"
                    :style="`color: ${
                      settingByTemplate && settingByTemplate.color_primario
                        ? settingByTemplate.color_primario
                        : '#25D366'
                    }; border:2px solid ${
                      settingByTemplate && settingByTemplate.color_primario
                        ? settingByTemplate.color_primario
                        : '#25D366'
                    };`"
                    @click="GoPayments"
                    id="InitiateCheckoutTag"
                  >
                    {{ $t('footer_finalizarCompra') }}
                  </button>
                  <!-- Comprar whatsApp -->
                  <button
                    v-if="
                      stateOrderWapi &&
                      productsCart.length &&
                      !isQuotation() &&
                      IsMinValorTotal() &&
                      dataStore.tienda.estado == 1 &&
                      dataStore.tienda.whatsapp &&
                      expiredDate(dataStore.tienda.fecha_expiracion)
                    "
                    class="continue_shopping_whatsapp"
                    :style="`background: ${
                      settingByTemplate && settingByTemplate.color_primario
                        ? settingByTemplate.color_primario
                        : '#25D366'
                    }; color:${
                      settingByTemplate && settingByTemplate.color_secundario
                        ? settingByTemplate.color_secundario
                        : '#FFFFFF'
                    };
                  border:2px solid ${
                    settingByTemplate && settingByTemplate.color_primario
                      ? settingByTemplate.color_primario
                      : '#25D366'
                  };                  
                  `"
                    @click="formOrden = !formOrden"
                  >
                    <whatsapp-icon class="wp-icon" />
                    {{ $t('footer_pedidoWhatsapp') }}
                  </button>
                  <!-- seguir comprando, cerrar order -->
                  <nuxt-link
                    class="conten-btn"
                    to="/"
                    @click="closeOrder"
                    v-if="!stateOrderWapi"
                  >
                    <button class="continue_shopping2">
                      {{ $t('footer_seguirCompra') }}
                    </button>
                  </nuxt-link>
                  <!-- ir al carrito componente -->
                  <nuxt-link
                    to="/cart"
                    class="conten-btn"
                    @click="closeOrder"
                    v-if="
                      !stateOrderWapi &&
                      (dataStore.tienda.template != 12 ||
                        dataStore.tienda.template != 99)
                    "
                  >
                    <button class="continue_shopping2">
                      {{ $t('footer_irCarrito') }}
                    </button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </template>
          <div class="order--wrapper" v-else>
            <div class="w-full flex flex-col justify-center items-center">
              <div class="wrapper_photo">
                <img
                  src="../../../assets/img/icono_cesta.png"
                  class="photo"
                  alt="Product img"
                />
              </div>
              <p class="text-empty">{{ $t('footer_carritoVacio2') }}</p>
              <p class="text-empty2">
                {{ $t('footer_carritoVacio3') }}
              </p>
            </div>
            <div>
              <nuxt-link class="conten-btn" to="/" @click="closeOrder">
                <button class="continue_shopping2">
                  {{ $t('footer_seguirCompra') }}
                </button>
              </nuxt-link>
              <nuxt-link
                to="/cart"
                class="conten-btn"
                @click="closeOrder"
                v-if="dataStore.tienda.template != 12"
              >
                <button class="continue_shopping2">
                  {{ $t('footer_irCarrito') }}
                </button>
              </nuxt-link>
            </div>
          </div>
        </transition>
      </div>
      <div class="wrapper-items-remove" v-if="remove">
        <div class="content-items-remove">
          <p class="text-remove">
            {{ $t('footer_contactoMgs3') }}
          </p>
          <div class="content-btn-remove">
            <button @click="remove = !remove" class="btn-remover-no">
              {{ $t('footer_noCart') }}
            </button>
            <button class="btn-remover-yes" @click="removeCartItems">
              {{ $t('footer_siCart') }}
            </button>
          </div>
        </div>
      </div>
      <div class="wrapper-items-form" v-if="formOrden">
        <div class="content-items-form">
          <p class="form-text">{{ $t('footer_formtittle') }}</p>
          <ValidationObserver ref="observer" tag="form" class="items-form">
            <p class="form-subtext">{{ $t('footer_formNombre') }}</p>
            <validation-provider
              name="nombre"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  name="nombre"
                  type="text"
                  v-model="form.nombre"
                  class="input-text"
                  :placeholder="$t('footer_formNombreMgs')"
                  id="ContactName"
                  onkeypress="return ((event.charCode>96 && event.charCode<123) || (event.charCode>64 && event.charCode<91) || (event.charCode==32) || (event.charCode==241) || (event.charCode==209))"
                />
                <span class="text-error" v-if="errors[0]">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>
            <p class="form-subtext">{{ $t('footer_formIdenti') }}</p>
            <validation-provider
              name="id"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  name="id"
                  type="number"
                  v-model="form.phone"
                  class="input-text"
                  :placeholder="$t('footer_formIdentiMgs')"
                  id="ContactId"
                  onkeypress="return ((event.charCode>47 && event.charCode<58))"
                />
                <span class="text-error" v-if="errors[0]">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>

            <p class="form-subtext">
              {{ $t('footer_formCorreo') }} ({{ $t('footer_norquerido') }})
            </p>
            <validation-provider name="email" class="content-input">
              <template slot-scope="{ errors }">
                <input
                  name="email"
                  type="text"
                  v-model="form.email"
                  class="input-text"
                  :placeholder="$t('footer_formCorreoMgs')"
                  id="ContactEmail"
                />
                <span class="text-error" v-if="errors[0]">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>

            <p class="form-subtext">{{ $t('footer_formPhone') }}</p>
            <validation-provider
              name="phone"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  name="telephone"
                  type="text"
                  v-model="form.identificacion"
                  class="input-text"
                  :placeholder="$t('footer_formPhoneMgs')"
                  id="ContactTelephone"
                  onkeypress="return ((event.charCode>47 && event.charCode<58))"
                />
                <span class="text-error" v-if="errors[0]">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>
            <P class="form-subtext"> {{ $t(`${placeholderDepart}`) }}</P>
            <validation-provider
              name="ciudad"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  class="input-text"
                  name="ciudad"
                  :placeholder="$t('footer_formBarrioMgs')"
                  v-model="form.ciudad"
                  onkeypress="return ((event.charCode>96 && event.charCode<123) || (event.charCode>64 && event.charCode<91) || (event.charCode==32) || (event.charCode==241) || (event.charCode==209))"
                />
                <span class="text-error" v-if="errors[0]">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>
            <P class="form-subtext"> {{ $t(`${placeholderBarrio}`) }}</P>
            <validation-provider
              name="barrio"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  class="input-text"
                  name="barrio"
                  :placeholder="$t(`${placeholderMsgBarrio}`)"
                  v-model="form.barrio"
                  onkeypress="return ((event.charCode>96 && event.charCode<123) || (event.charCode>64 && event.charCode<91) || (event.charCode==32) || (event.charCode==241) || (event.charCode==209))"
                />
                <span class="text-error" v-if="errors[0]">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>
            <P class="form-subtext"> {{ $t('footer_formDireccion') }}</P>
            <validation-provider
              name="dirreccion"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  class="input-text"
                  name="dirreccion"
                  :placeholder="$t('footer_formDireccionMgs')"
                  v-model="form.dirreccion"
                />
                <span class="text-error" v-if="errors[0]">
                  {{ errors[0] }}
                </span>
                <div v-else style="margin-bottom: 18px"></div>
              </template>
            </validation-provider>
          </ValidationObserver>
          <label
            for="order_close"
            @click="formOrden = !formOrden"
            class="form_close"
          >
            <close-icon />
          </label>
        </div>
        <button
          class="continue_shopping_form"
          :style="`background: ${
            settingByTemplate && settingByTemplate.color_primario
              ? settingByTemplate.color_primario
              : '#25D366'
          }; color:${
            settingByTemplate && settingByTemplate.color_secundario
              ? settingByTemplate.color_secundario
              : '#FFFFFF'
          };
          border:2px solid ${
            settingByTemplate && settingByTemplate.color_primario
              ? settingByTemplate.color_primario
              : '#25D366'
          };          
          `"
          v-on:click.prevent="setOrderWa()"
          style="margin-top: 15px"
        >
          <whatsapp-icon class="wp-icon" /> {{ $t('footer_finalizarCompra') }}
        </button>
      </div>
      <div class="modal-confirmation" v-if="this.modalConfirmation">
        <p class="text-16">{{ this.textConfirmation }}</p>
        <div
          class="flex flex-col justify-center items-center my-2"
          v-if="stateBtnConfirmation"
        >
          <p class="text-14 text-red-500">
            Es importante enviar la información al whatsApp dueño.
          </p>
          <span class="text-14 text-gray-200 w-9/12 mt-3">
            Si no abre whatsApp escribirle al dueño de la tienda por tu numero
            de order: {{ this.numberOrder }}
          </span>
          <button
            class="continue_form_confirmation"
            :style="`background: ${
              settingByTemplate && settingByTemplate.color_primario
                ? settingByTemplate.color_primario
                : '#25D366'
            }; color:${
              settingByTemplate && settingByTemplate.color_secundario
                ? settingByTemplate.color_secundario
                : '#FFFFFF'
            };
          border:2px solid ${
            settingByTemplate && settingByTemplate.color_primario
              ? settingByTemplate.color_primario
              : '#25D366'
          };          
          `"
            @click="redirectWP"
            style="margin-top: 15px"
          >
            <whatsapp-icon class="wp-icon" /> Enviar información al WhatsApp
          </button>
        </div>
      </div>
    </div>
    <!-- </transition> -->
  </el-drawer>
</template>

<script>
import axios from 'axios'
import idCloudinary from '../../../mixins/idCloudinary'
import currency from '../../../mixins/formatCurrent'
import expiredDate from '../../../mixins/expiredDate'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  mixins: [idCloudinary, currency, expiredDate],
  name: 'ko-Order1-cart-2',
  props: {
    dataStore: Object,
    stateOrderWapi: {
      type: Boolean,
      default: () => false,
    },
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  async mounted() {
    this.setPlaceholderDep()
    this.$store.dispatch('GET_DESCUENTOS')
    this.$store.dispatch('GET_SHOPPING_CART')
    if (this.rangosByCiudad.envio_metodo === 'precio_ciudad') {
      const { success } = await this.$store.dispatch('GET_CITIES')
      if (success) {
        this.filterCities()
      }
    }
    this.$store.commit('CALCULATE_TOTAL_CART')
    if (this.rangosByCiudades.envio_metodo == 'precio') {
      this.shippingPrecio()
    }
    this.productsFreeShippingCart()
    this.IsMinValorTotal()
    this.obtainDiscountValue()
  },
  data() {
    return {
      // img: 'https://res.cloudinary.com/komerciaacademico/image/upload/v1583535445/komerciaAcademico/CARRITO_y2lbh6.png',
      shippingCities: [],
      rangosByCiudades: [],
      remove: false,
      shippingTarifaPrecio: '',
      estadoShippingTarifaPrecio: false,
      formOrden: false,
      form: {
        nombre: '',
        identificacion: '',
        phone: '',
        email: '',
        ciudad: '',
        barrio: '',
        dirreccion: '',
      },
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
      numberOrder: null,
    }
  },
  computed: {
    layourUnicentro() {
      return this.$store.state.layoutUnicentro
    },
    openOrder: {
      get() {
        return this.$store.state.openOrder
      },
      set(value) {
        this.$store.state.openOrder = value
      },
    },
    // verifyProducts() {
    //   return this.$store.getters.verifyProducts
    // },
    cantidadProductos() {
      return this.$store.getters.cantidadProductos
    },
    shippingDescuento() {
      return this.$store.getters.listaDescuentosProductos
    },
    shippingDescuento2() {
      return this.$store.getters.listaDescuentosPrecio
    },
    totalCart() {
      return this.$store.state.totalCart
    },
    productsCart() {
      return this.$store.state.productsCart
    },
    getFreeShipping() {
      let free = true
      if (this.rangosByCiudad.envio_metodo === 'gratis') {
        free = false
      }
      if (this.rangosByCiudad.envio_metodo === 'precio_ciudad') {
        free = false
      }
      if (this.rangosByCiudad.envio_metodo === 'tarifa_plana') {
        free = true
      }
      if (this.rangosByCiudad.envio_metodo === 'precio') {
        free = true
      }
      if (this.rangosByCiudad.envio_metodo === 'sintarifa') {
        free = false
      }
      return free
    },
    rangosByCiudad() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.rangosByCiudades = JSON.parse(this.$store.state.envios.valores)
      return this.rangosByCiudades
    },
    cities() {
      return this.$store.state.cities
    },
    shipping() {
      if (this.FreeShippingCart) {
        return 0
      } else {
        if (this.$store.state.envios.estado) {
          let shipping = JSON.parse(this.$store.state.envios.valores)
          switch (shipping.envio_metodo) {
            case 'sintarifa':
              return 0
              // eslint-disable-next-line no-unreachable
              break
            case 'gratis':
              return 0
              // eslint-disable-next-line no-unreachable
              break
            case 'tarifa_plana':
              return shipping.valor
              // eslint-disable-next-line no-unreachable
              break
            case 'precio_ciudad':
              // eslint-disable-next-line no-case-declarations
              let result = shipping.rangos.find((rango) => {
                if (
                  this.totalCart >= rango.inicial &&
                  this.totalCart <= rango.final
                ) {
                  return rango
                }
              })
              if (result) {
                return result.precio
              } else {
                return 0
              }
              // eslint-disable-next-line no-unreachable
              break
            default:
              return 0
          }
        } else {
          return 0
        }
      }
    },
    facebookPixel() {
      return this.$store.state.analytics_tagmanager
    },
    countryStore() {
      if (this.dataStore && this.dataStore.tienda.pais) {
        switch (this.dataStore.tienda.pais) {
          case 'Colombia':
            return true
            // eslint-disable-next-line no-unreachable
            break
          case 'Chile':
            return true
            // eslint-disable-next-line no-unreachable
            break
          case 'Perú':
            return true
            // eslint-disable-next-line no-unreachable
            break
          case 'Panamá':
            return true
            // eslint-disable-next-line no-unreachable
            break
          default:
            return false
        }
      } else {
        return false
      }
    },
    settingByTemplate() {
      if (this.$store.state.settingByTemplate) {
        return this.$store.state.settingByTemplate
      } else {
        return this.$store.state.settingBaseWapir
      }
    },
    // stateModalPwd() {
    //   return this.$store.state.stateModalPwd
    // },
  },
  methods: {
    obtainDiscountValue() {
      let value1 = 0
      let value2 = 0
      if (this.shippingDescuento && this.shippingDescuento.tipo == 1) {
        value1 = this.shippingDescuento.valor ? this.shippingDescuento.valor : 0
      } else if (this.shippingDescuento && this.shippingDescuento.tipo == 0) {
        value1 = this.shippingDescuento.valor
          ? Math.trunc((this.totalCart * this.shippingDescuento.valor) / 100)
          : 0
      }
      if (this.shippingDescuento2 && this.shippingDescuento2.precio) {
        if (this.shippingDescuento2.options == 0) {
          value2 = parseInt(this.shippingDescuento2.precio)
            ? Math.trunc(
                (this.totalCart * parseInt(this.shippingDescuento2.precio)) /
                  100
              )
            : 0
        } else if (this.shippingDescuento2.options == 1) {
          value2 = this.shippingDescuento2.precio
        }
      }
      this.discountDescuentos = value1 + value2
    },
    shippingPrecio() {
      if (this.rangosByCiudades.envio_metodo == 'precio') {
        let result = this.rangosByCiudades.rangos.find((rango) => {
          if (
            this.totalCart >= rango.inicial &&
            this.totalCart <= rango.final
          ) {
            return rango
          }
        })
        if (result) {
          this.shippingTarifaPrecio = result.precio
          this.estadoShippingTarifaPrecio = false
        } else {
          this.shippingTarifaPrecio = 'empty'
          this.estadoShippingTarifaPrecio = true
        }
      }
    },
    isQuotation() {
      let result = false
      this.productsCart.forEach((product) => {
        if (product.precio === 0) result = true
      })
      return result
    },
    IsMinValorTotal() {
      let result = false
      if (
        this.dataStore.tienda.minimo_compra == 0 ||
        this.dataStore.tienda.minimo_compra == null
      ) {
        result = true
      } else {
        if (this.totalCart >= this.dataStore.tienda.minimo_compra) {
          result = true
        }
      }
      return result
    },
    addQuantity(product) {
      if (product.limitQuantity > product.cantidad) {
        product.cantidad++
        this.$store.commit('UPDATE_CONTENT_CART')
        this.$store.commit('CALCULATE_TOTAL_CART')
        this.$store.dispatch('VERIFY_PRODUCTS')
      }
    },
    removeQuantity(product) {
      if (product.cantidad >= 2) {
        product.cantidad--
        this.$store.commit('UPDATE_CONTENT_CART')
        this.$store.commit('CALCULATE_TOTAL_CART')
        this.$store.dispatch('VERIFY_PRODUCTS')
      }
    },
    deleteItemCart(i) {
      this.$store.commit('DELETEITEMCART', i)
      this.$store.commit('UPDATE_CONTENT_CART')
      this.$store.dispatch('VERIFY_PRODUCTS')
    },
    removeCartItems() {
      this.remove = false
      location.reload(true)
      this.$store.commit('DELETEALLITEMSCART')
      this.$store.commit('UPDATE_CONTENT_CART')
      this.$store.dispatch('VERIFY_PRODUCTS')
    },
    closeOrder(event) {
      const element = event.target.className
      if (
        element === 'order' ||
        element === 'continue_shopping' ||
        element === 'continue_shopping2'
      ) {
        this.$store.commit('SET_OPEN_ORDER', false)
      }
    },
    closedOder() {
      this.$store.commit('SET_OPEN_ORDER', false)
    },
    GoPayments() {
      let objeto = {}
      objeto = JSON.parse(JSON.stringify(this.productsCart))
      objeto.map((element) => {
        // DATOS IMPORTANTES A ENVIAR = ID - CANTIDAD - COMBINACION
        if (element.id) {
          delete element.envio_gratis
          delete element.foto_cloudinary
          delete element.limitQuantity
          delete element.nombre
          delete element.precio
          delete element.activo
          delete element.stock_disponible
          delete element.con_variante
          delete element.foto
          delete element.informacion_producto
          delete element.orden
          delete element.tag
          delete element.variantes
          delete element.tag_promocion
          delete element.promocion_valor
        }
      })
      let json = {
        products: objeto,
        tienda: {
          id: this.$store.state.tienda.id_tienda,
        },
        canal: 'KOMERCIA',
      }
      json = JSON.stringify(json)
      if (this.$store.state.productsCart.length != 0) {
        if (this.layourUnicentro) {
          window.open(`https://checkout.komercia.co/?params=${json}`)
          this.$store.dispatch('SEND_ADD_TO_CART', 2)
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`
          this.$store.dispatch('SEND_ADD_TO_CART', 2)
        }
      }
    },
    filterCities() {
      if (
        this.rangosByCiudad.envio_metodo === 'precio_ciudad' &&
        this.cities.length > 0
      ) {
        this.rangosByCiudad.rangos.forEach((rango, index) => {
          this.cities.filter((city) => {
            if (city.id === this.rangosByCiudad.rangos[index].id) {
              this.shippingCities.push(city)
            }
          })
        })
      }
    },
    mobileCheck() {
      window.mobilecheck = function () {
        var check = false
        ;(function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            check = true
        })(navigator.userAgent || navigator.vendor || window.opera)
        return check
      }
      return window.mobilecheck()
    },
    redirectWP() {
      let baseUrlMovil = 'https://api.whatsapp.com/send?phone='
      let baseUrlPc = 'https://web.whatsapp.com/send?phone='
      let productosCart = []
      this.$store.state.productsCart.map((element) => {
        if (element.combinacion) {
          let combiString = JSON.stringify(element.combinacion)
          let combiList = combiString.replace(/"/g, '')
          let resultcombitList = combiList.replace(/,/g, ' - ')
          productosCart.push(
            `${element.cantidad} x ${
              element.nombre
            } = Variantes: ${resultcombitList} -> Valor: ${
              this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
            }${element.cantidad * element.precio}`
          )
        } else {
          productosCart.push(
            `${element.cantidad} x ${element.nombre} -> Valor: ${
              this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
            }${element.cantidad * element.precio}`
          )
        }
      })
      let productString = JSON.stringify(productosCart)
      let productList = productString.replace(/"/g, '')
      let resultproductList = productList.replace(/,/g, '%0A')
      let result = resultproductList.slice(1, -1)
      var text = ''
      let textFreeShippingCart
      // traduccion envios
      if (
        this.rangosByCiudades &&
        this.rangosByCiudades.envio_metodo == 'gratis'
      ) {
        if (this.dataStore.tienda.lenguaje == 'es') {
          textFreeShippingCart = 'Env%C3%ADo%20gratis'
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          textFreeShippingCart = 'Free%20shippings'
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          textFreeShippingCart = 'Frete%20gr%C3%A1tis'
        }
      } else if (
        this.rangosByCiudades &&
        this.rangosByCiudades.envio_metodo == 'tarifa_plana'
      ) {
        if (this.dataStore.tienda.lenguaje == 'es') {
          textFreeShippingCart = `Costo%20domicilio:%20${
            this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
          }${this.rangosByCiudades.valor}`
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          textFreeShippingCart = `Shipping%cost:%20${
            this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
          }${this.rangosByCiudades.valor}`
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          textFreeShippingCart = `Custos%20envio:%20${
            this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
          }${this.rangosByCiudades.valor}`
        }
      } else if (
        this.rangosByCiudades &&
        this.rangosByCiudades.envio_metodo == 'precio_ciudad'
      ) {
        if (this.dataStore.tienda.lenguaje == 'es') {
          textFreeShippingCart = 'Costos%20de%20Env%C3%ADo%20por%20separado'
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          textFreeShippingCart = 'Shipping%20cost%20separately'
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          textFreeShippingCart = 'Custos%20de%20envio%20negociar%20a%20parte'
        }
      } else if (
        this.rangosByCiudades &&
        this.rangosByCiudades.envio_metodo == 'precio'
      ) {
        if (this.dataStore.tienda.lenguaje == 'es') {
          textFreeShippingCart = `Costo%20domicilio:%20${
            this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
          }${this.shippingTarifaPrecio}`
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          textFreeShippingCart = `Shipping%cost:%20${
            this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
          }${this.shippingTarifaPrecio}`
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          textFreeShippingCart = `Custos%20envio:%20${
            this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
          }${this.shippingTarifaPrecio}`
        }
      } else if (
        this.rangosByCiudades &&
        this.rangosByCiudades.envio_metodo == 'sintarifa'
      ) {
        if (this.dataStore.tienda.lenguaje == 'es') {
          textFreeShippingCart = 'Costos%20de%20Env%C3%ADo%20por%20separado'
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          textFreeShippingCart = 'Shipping%20cost%20separately'
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          textFreeShippingCart = 'Custos%20de%20envio%20negociar%20a%20parte'
        }
      } else {
        if (this.dataStore.tienda.lenguaje == 'es') {
          textFreeShippingCart = 'Costos%20de%20Env%C3%ADo%20por%20separado'
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          textFreeShippingCart = 'Shipping%20cost%20separately'
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          textFreeShippingCart = 'Custos%20de%20envio%20negociar%20a%20parte'
        }
      }
      //traducción  texto
      if (this.dataStore.tienda.lenguaje == 'es') {
        text = `Hola%2C%20soy%20${
          this.form.nombre
        }%2C%0Ahice%20este%20pedido%20en%20tu%20tienda%20${encodeURIComponent(
          this.dataStore.tienda.nombre
        )}%0ANumero%20de%20orden%3A%20${
          this.numberOrder
        }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${encodeURIComponent(
          result
        )}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${textFreeShippingCart}%2A%0A%2ADescuento%2A%3A%20${
          this.discountDescuentos
            ? this.dataStore.tienda.moneda == 'PEN'
              ? 'S/'
              : '$' + this.discountDescuentos
            : 'No%20aplica'
        }%0A%2ASubtotal%2A%3A%20${
          this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
        }${this.totalCart}%0A%2ATOTAL%2A%3A%20${
          this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
        }${
          this.totalCart +
          (this.shipping ? this.shipping : 0) +
          (this.shippingTarifaPrecio &&
          this.shippingTarifaPrecio != 'empty' &&
          !this.FreeShippingCart
            ? this.shippingTarifaPrecio
            : 0) -
          this.discountDescuentos
        }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMi%20informaci%C3%B3n%2A%3A%0A%2ANombre%2A%3A%20${
          this.form.nombre
        }%0A%2AIdentificación%2A%3A%20${encodeURIComponent(
          this.form.phone
        )}%0A%2AE-mail%2A%3A%20${encodeURIComponent(
          this.form.email ? this.form.email : ''
        )}%0A%2A${this.textDepartment}%2A%3A%20${encodeURIComponent(
          this.form.ciudad
        )}%0A%2A${encodeURIComponent(
          this.textCiudad
        )}%2A%3A%20${encodeURIComponent(
          this.form.barrio
        )}%0A%2ADirección%2A%3A%20${encodeURIComponent(
          this.form.dirreccion
        )}%0A%0A%2Avolver%20a%20la%20tienda%2A%3A%20${
          window.location
        }?clearCart=true`
      } else if (this.dataStore.tienda.lenguaje == 'en') {
        text = `Hello%2C%20I%20am%20${
          this.form.nombre
        }%2C%0AI%20made%20this%20order%20at%20your%20store%20${encodeURIComponent(
          this.dataStore.tienda.nombre
        )}%0AOrder%20number%3A%20${
          this.numberOrder
        }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${encodeURIComponent(
          result
        )}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${textFreeShippingCart}%2A%0A%2ADiscount%2A%3A%20${
          this.discountDescuentos
            ? this.dataStore.tienda.moneda == 'PEN'
              ? 'S/'
              : '$' + this.discountDescuentos
            : 'Not%20applicable'
        }%0A%2ASubtotal%2A%3A%20${
          this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
        }${this.totalCart}%0A%2ATOTAL%2A%3A%20${
          this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
        }${
          this.totalCart +
          (this.shipping ? this.shipping : 0) +
          (this.shippingTarifaPrecio &&
          this.shippingTarifaPrecio != 'empty' &&
          !this.FreeShippingCart
            ? this.shippingTarifaPrecio
            : 0) -
          this.discountDescuentos
        }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMy%20information%2A%3A%0A%2AName%2A%3A%20${
          this.form.nombre
        }%0A%2AIdentification%2A%3A%20${encodeURIComponent(
          this.form.phone
        )}%0A%2AE-mail%2A%3A%20${encodeURIComponent(
          this.form.email ? this.form.email : ''
        )}%0A%2A${this.textDepartment}%2A%3A%20${
          this.form.ciudad
        }%0A%2A${encodeURIComponent(this.textCiudad)}%2A%3A%20${
          this.form.barrio
        }%0A%2AAddres%2A%3A%20${encodeURIComponent(
          this.form.dirreccion
        )}%0A%0A%2Aback%20to%20the%20store%2A%3A%20${
          window.location
        }?clearCart=true`
      } else if (this.dataStore.tienda.lenguaje == 'pt') {
        text = `Olá%2C%20aqui%20é%20${
          this.form.nombre
        }%2C%0Afiz%20esse%20pedido%20em%20sua%20loja%20Mustad%20Whatsapp%20${encodeURIComponent(
          this.dataStore.tienda.nombre
        )}%0AN%C3%BAmero%20do%20pedido%3A%20${
          this.numberOrder
        }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${encodeURIComponent(
          result
        )}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${textFreeShippingCart}%2A%0A%2ADesconto%2A%3A%20${
          this.discountDescuentos
            ? this.dataStore.tienda.moneda == 'PEN'
              ? 'S/'
              : '$' + this.discountDescuentos
            : 'Não%20aplicável'
        }%0A%2ASubtotal%2A%3A%20${
          this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
        }${this.totalCart}%0A%2ATOTAL%2A%3A%20${
          this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
        }${
          this.totalCart +
          (this.shipping ? this.shipping : 0) +
          (this.shippingTarifaPrecio &&
          this.shippingTarifaPrecio != 'empty' &&
          !this.FreeShippingCart
            ? this.shippingTarifaPrecio
            : 0) -
          this.discountDescuentos
        }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMy%20Minhas%20informaçãoes%2A%3A%0A%2ANome%2A%3A%20${
          this.form.nombre
        }%0A%2Aidentificação%2A%3A%20${encodeURIComponent(
          this.form.phone
        )}%0A%2AE-mail%2A%3A%20${encodeURIComponent(
          this.form.email ? this.form.email : ''
        )}%0A%2A${this.textDepartment}%2A%3A%20${encodeURIComponent(
          this.form.ciudad
        )}%0A%2A${encodeURIComponent(this.textCiudad)}%2A%3A%20${
          this.form.barrio
        }%0A%2AEndereço%2A%3A%20${encodeURIComponent(
          this.form.dirreccion
        )}%0A%0A%2Ade%20volta%20%C3%A0%20loja%2A%3A%20${
          window.location
        }?clearCart=true`
      } else {
        text = `Hola%2C%20soy%20${
          this.form.nombre
        }%2C%0Ahice%20este%20pedido%20en%20tu%20tienda%20${encodeURIComponent(
          this.dataStore.tienda.nombre
        )}%0ANumero%20de%20orden%3A%20${
          this.numberOrder
        }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${encodeURIComponent(
          result
        )}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${textFreeShippingCart}%2A%0A%2ADescuento%2A%3A%20${
          this.discountDescuentos
            ? this.dataStore.tienda.moneda == 'PEN'
              ? 'S/'
              : '$' + this.discountDescuentos
            : 'No%20aplica'
        }%0A%2ASubtotal%2A%3A%20${
          this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
        }${this.totalCart}%0A%2ATOTAL%2A%3A%20${
          this.dataStore.tienda.moneda == 'PEN' ? 'S/' : '$'
        }${
          this.totalCart +
          (this.shipping ? this.shipping : 0) +
          (this.shippingTarifaPrecio &&
          this.shippingTarifaPrecio != 'empty' &&
          !this.FreeShippingCart
            ? this.shippingTarifaPrecio
            : 0) -
          this.discountDescuentos
        }%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2AMi%20informaci%C3%B3n%2A%3A%0A%2ANombre%2A%3A%20${
          this.form.nombre
        }%0A%2AIdentificación%2A%3A%20${encodeURIComponent(
          this.form.phone
        )}%0A%2AE-mail%2A%3A%20${encodeURIComponent(
          this.form.email ? this.form.email : ''
        )}%0A%2A${this.textDepartment}%2A%3A%20${encodeURIComponent(
          this.form.ciudad
        )}%0A%2A${encodeURIComponent(
          this.textCiudad
        )}%2A%3A%20${encodeURIComponent(
          this.form.barrio
        )}%0A%2ADirección%2A%3A%20${encodeURIComponent(
          this.form.dirreccion
        )}%0A%0A%2Avolver%20a%20la%20tienda%2A%3A%20${
          window.location
        }?clearCart=true`
      }
      if (this.dataStore.tienda.whatsapp.charAt(0) == '+') {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp.slice(1)
        if (this.mobileCheck()) {
          window.location.href = `${baseUrlMovil}${phone_number_whatsapp}&text=${text}`
        } else {
          window.location.href = `${baseUrlPc}${phone_number_whatsapp}&text=${text}`
        }
      } else {
        if (this.mobileCheck()) {
          window.location.href = `${baseUrlMovil}57${this.dataStore.tienda.whatsapp}&text=${text}`
        } else {
          window.location.href = `${baseUrlPc}57${this.dataStore.tienda.whatsapp}&text=${text}`
        }
      }
      setTimeout(() => {
        this.modalConfirmation = false
        this.closedOder()
        this.$message({
          showClose: true,
          message:
            '¡Por falta de permisos no fue posible abrir WhatsApp para enviar la información!',
          type: 'error',
          duration: 9000,
        })
        this.removeCartItems()
      }, 5000)
    },
    setOrderWa() {
      this.$refs.observer.validate().then((response) => {
        if (response) {
          this.modalConfirmation = true
          let temp = {
            nombre: this.form.nombre,
            phone: this.form.phone, // Es la cedula
            correo: this.form.email,
            identificacion: this.form.identificacion, //Es el telefono
            ciudad: this.form.ciudad,
            barrio: this.form.barrio,
            direccion: this.form.dirreccion,
          }
          const myJSON = JSON.stringify(temp)
          let resultShipping
          if (
            this.rangosByCiudades &&
            this.rangosByCiudades.envio_metodo == 'gratis'
          ) {
            resultShipping = 0
          } else if (
            this.rangosByCiudades &&
            this.rangosByCiudades.envio_metodo == 'tarifa_plana'
          ) {
            resultShipping = this.rangosByCiudades.valor
          } else if (
            this.rangosByCiudades &&
            this.rangosByCiudades.envio_metodo == 'precio_ciudad'
          ) {
            resultShipping = 0
          } else if (
            this.rangosByCiudades &&
            this.rangosByCiudades.envio_metodo == 'precio'
          ) {
            resultShipping = this.shippingTarifaPrecio
          } else if (
            this.rangosByCiudades &&
            this.rangosByCiudades.envio_metodo == 'sintarifa'
          ) {
            resultShipping = 0
          } else {
            resultShipping = 0
          }
          this.eventFacebookPixel()
          const params = {
            canal: 1,
            usuario: 30866,
            tipo: 0,
            tienda: this.dataStore.tienda.id_tienda,
            total:
              this.totalCart +
              (this.shipping ? this.shipping : 0) +
              (this.shippingTarifaPrecio &&
              this.shippingTarifaPrecio != 'empty' &&
              !this.FreeShippingCart
                ? this.shippingTarifaPrecio
                : 0) -
              this.discountDescuentos,
            direccion_entrega: {
              type: 0,
              value: null,
            },
            productos: this.productsCart,
            comentario: myJSON,
            costo_envio: resultShipping,
            metodo_pago: 7,
            descuento: this.discountDescuentos ? this.discountDescuentos : 0,
          }
          axios
            .post(`${this.$store.state.urlKomercia}/api/usuario/orden`, params)
            .then((response) => {
              this.numberOrder = response.data.data.id
              this.textConfirmation =
                '¡Información enviada correctamente a la tienda!'
              this.stateBtnConfirmation = true
            })
            .catch(() => {
              this.textConfirmation = 'Error al enviar los datos!'
              this.$message.error('Error al enviar los datos!')
            })
        }
      })
    },
    eventFacebookPixel() {
      let array = []
      let content = []
      this.productsCart.map((element) => {
        if (element) {
          array.push(`${element.id}`)
          let temp = {
            id: `${element.id}`,
            quantity: element.cantidad,
          }
          content.push(temp)
        }
      })
      if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
        window.fbq('track', 'Purchase', {
          content_type: 'Product',
          content_ids: array,
          contents: content,
          description: `Comprar finalizada WhatsApp`,
          value:
            this.totalCart +
            (this.shipping ? this.shipping : 0) +
            (this.shippingTarifaPrecio &&
            this.shippingTarifaPrecio != 'empty' &&
            !this.FreeShippingCart
              ? this.shippingTarifaPrecio
              : 0) -
            this.discountDescuentos,
          currency: this.dataStore.tienda.moneda,
        })
      }
    },
    productsFreeShippingCart() {
      if (this.productsCart) {
        let result = this.productsCart.filter((rango) => {
          if (rango.envio_gratis === 1) {
            return rango
          }
        })
        if (this.productsCart.length == result.length) {
          this.FreeShippingCart = true
          // this.rangosByCiudad.envio_metodo = 'gratis'
        } else {
          this.FreeShippingCart = false
          // this.rangosByCiudad.envio_metodo = this.rangosByCiudad.envio_metodo
        }
      }
    },
    setPlaceholderDep() {
      switch (this.dataStore.tienda.id_pais) {
        //colombia
        case 1:
          this.placeholderDepart = 'footer_formDepartamento'
          this.placeholderBarrio = 'footer_formBarrio'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Departamento'),
            (this.textCiudad = 'Cuidad / Barrio / Zona')
          break
        //Mexico
        case 3:
          this.placeholderDepart = 'footer_formEstado'
          this.placeholderBarrio = 'footer_formBarrio1'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Estado'),
            (this.textCiudad = 'Cuidad / Colonia / Zona')
          break
        //Argentina
        case 6:
          this.placeholderDepart = 'footer_formRegion'
          this.placeholderBarrio = 'footer_formComuna'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Región'),
            (this.textCiudad = 'Provincia / Comuna / Sector')
          break
        //Chile
        case 7:
          this.placeholderDepart = 'footer_formRegion'
          this.placeholderBarrio = 'footer_formComuna'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Región'),
            (this.textCiudad = 'Provincia / Comuna / Sector')
          break
        //Puerto Rico
        case 8:
          this.placeholderDepart = 'footer_formMunicipios'
          this.placeholderBarrio = 'footer_formComuna'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Municipio'),
            (this.textCiudad = 'Provincia / Comuna / Sector')
          break
        //Perú
        case 9:
          this.placeholderDepart = 'footer_formDepartamento'
          this.placeholderBarrio = 'footer_formBarrio3'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Departamento'),
            (this.textCiudad = 'Provincia / Cuidad / Zona')
          break
        //Panama
        case 10:
          this.placeholderDepart = 'footer_formProvincia'
          this.placeholderBarrio = 'footer_formBarrio2'
          this.placeholderMsgBarrio = 'footer_formBarrioMgs'
          ;(this.textDepartment = 'Provincia'),
            (this.textCiudad = 'Distritos / Zona')
          break
      }
    },
  },
  watch: {
    rangosByCiudad() {
      this.filterCities()
    },
    cities() {
      this.filterCities()
    },
    productsCart() {
      if (this.productsCart) {
        this.tempCart = this.productsCart
        this.shippingPrecio()
        this.productsFreeShippingCart()
      }
    },
    totalCart() {
      this.shippingPrecio()
      this.IsMinValorTotal()
      this.obtainDiscountValue()
    },
    shippingDescuento() {
      this.obtainDiscountValue()
    },
    shippingDescuento2() {
      this.obtainDiscountValue()
    },
  },
  filters: {
    capitalize(value) {
      if (value) {
        value = value.toLowerCase()
        return value.replace(/^\w|\s\w/g, (l) => l.toUpperCase())
      }
    },
  },
}
</script>

<style scoped>
.width-drawer >>> .el-drawer__open .el-drawer.rtl {
  width: 410px !important;
}
@media (max-width: 800px) {
  .width-drawer >>> .el-drawer__open .el-drawer.rtl {
    width: 100% !important;
  }
}
.order_content {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 20px;
  animation: dispatch 0.2s linear 1;
  overflow: hidden;
}
.order_content > div {
  width: 100%;
  box-sizing: border-box;
}
.order_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededed;
  padding: 15px 25px;
  flex: none;
}
.leftright,
.rightleft {
  background: #2c2930;
}
.order_header_close {
  @apply relative w-30 h-20 cursor-pointer flex justify-center items-center;
}
.leftright {
  @apply h-4 w-30 absolute rounded-2 transform -rotate-45 transition-all ease-in duration-200;
}
.rightleft {
  @apply h-4 w-30 absolute rounded-2 transform rotate-45 transition-all ease-in duration-200;
}
.order_header_close:hover .leftright {
  @apply transform rotate-0;
  background: #000;
}
.order_header_close:hover .rightleft {
  @apply transform rotate-0;
  background: #000;
}
.order_header_close:hover {
  color: gray;
}
.order--wrapper {
  height: 100%;
  display: grid;
  overflow-y: auto;
}
@media (max-height: 740px) {
  .order_products_list {
    max-height: 380px;
  }
  .order_products_list-empty {
    height: 380px;
  }
}
.order_products_list-empty {
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.order_products_list {
  max-height: 480px;
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
}
.order_products_list::-webkit-scrollbar {
  border: 1px solid #ededed;
  background: transparent;
  width: 6px;
}
.order_products_list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px #2c2930;
  border-radius: 10px;
}
.order_products_list::-webkit-scrollbar-thumb {
  background: #2c2930;
  border-radius: 10px;
}
.order_products_list_item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #ededed;
  padding: 10px 25px;
  overflow-x: auto;
}
.order_products_list_item::-webkit-scrollbar {
  background: transparent;
  width: 6px;
  max-height: 8px;
}
.order_products_list_item::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px #2c2930;
  border-radius: 10px;
}
.order_products_list_item::-webkit-scrollbar-thumb {
  background: #2c2930;
  border-radius: 10px;
}
.order_products_list_item .photo {
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.order_products_list_item .photo img {
  max-width: 60px;
  max-height: 60px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 8px;
}
.order_products_list_item .name {
  max-width: 190px;
  width: 100%;
  box-sizing: border-box;
}
.name >>> .el-tag {
  border-color: #2c2930;
  background-color: #2c2930;
  color: #fff;
  display: inline-block;
  height: 28px;
  margin-left: 2px;
  padding: 0 2px;
  font-size: 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
}
.order-text {
  color: #2c2930;
  font-size: 14px;
}
.unidades {
  color: #2c2930;
  font-size: 13px;
  font-weight: 500;
}
.order-combincacion {
  width: 100%;
  max-width: 180px;
  column-count: 2;
  column-gap: 5px;
  column-fill: initial;
}
.order-combincacion-uni {
  border-radius: 10px;
  border: 1px solid white;
  background-color: #2c2930;
  color: #fff;
}
.order-combincacion-text {
  text-align: center;
  color: white;
  font-size: 10px;
}
.price {
  width: 100%;
  min-width: 60px;
  max-width: 100px;
  color: #2c2930;
  font-size: 16px;
}
.icon-delete {
  font-size: 20px;
  cursor: pointer;
  color: #2c2930;
  transition: 0.3s;
  bottom: 5px;
}
.icon-delete:hover {
  color: rgb(223, 62, 62);
}

.order_beforefreeshipping {
  text-align: center;
  background-color: #ffd558;
  padding: 5px 0;
}
.order_freeshipping {
  text-align: center;
  background-color: #45d482;
  padding: 5px 0;
}
.order_beforefreeshipping p,
.order_beforefreeshipping p strong,
.order_freeshipping p,
.order_freeshipping p strong {
  color: #2c2930;
}
.content-remove-cart {
  margin-top: 10px;
  max-width: 350px;
  padding: 8px 10px;
  transition: all ease 0.3s;
}
.content-remove-cart p {
  color: #2c2930;
  font-weight: 300;
  font-size: 14px;
  text-decoration: underline #2c2930;
}
.header-icon-cart {
  font-size: 14px;
  margin-right: 5px;
  color: #2c2930;
  bottom: 0.125em;
}
.content-remove-cart p:hover {
  color: rgb(223, 62, 62);
}
.wrapper-items-remove {
  position: absolute;
  height: calc(100vh);
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  top: 0;
}
.content-items-remove {
  width: 100%;
  margin: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
}
.text-remove {
  padding: 20px;
  text-align: center;
  color: #2c2930;
  font-weight: 300;
  font-size: 16px;
}
.content-btn-remove {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
}
.btn-remover-yes {
  font-weight: bold;
  border-style: none;
  background-color: #2c2930;
  padding: 4px 10px;
  width: 100%;
  max-width: 70px;
  color: white;
  border: 2px solid #2c2930;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  transition: all ease 0.3s;
}
.btn-remover-yes:hover {
  background-color: #2c2930;
  border: 2px solid #2c2930;
}
.btn-remover-no {
  font-weight: bold;
  border-style: none;
  background-color: transparent;
  padding: 4px 10px;
  width: 100%;
  max-width: 80px;
  color: red;
  border: 2px solid red;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  transition: all ease 0.3s;
}
.btn-remover-no:hover {
  color: #2c2930;
  border: 2px solid #ededed;
}
.order_total {
  border-top: 1px solid #ededed;
  padding: 0 25px;
}
.order_total_domicile,
.order_total_net {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.order_total_domicile p {
  color: #2c2930;
  font-weight: 300;
  font-size: 14px;
}
.text-color {
  color: #2c2930;
}
.order_total_domicile >>> .text-TarifaPrecio {
  display: flex;
  justify-content: flex-end;
  color: red;
}
.scroll_cart_summary_items_cities {
  color: #2c2930;
  overflow-y: auto;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  max-width: 230px;
}
.scroll_cart_summary_items_cities li {
  margin-right: 5px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar {
  background: transparent;
  width: 4px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px var(--background_color_2);
  border-radius: 10px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar-thumb {
  background: var(--color_icon);
  border-radius: 10px;
}
.without_shipping_cost {
  color: #2c2930;
  font-size: 13px;
}
.order_total_net p {
  color: #2c2930;
  font-weight: bold;
}
.domicilio-message {
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  border-style: none;
  background-color: transparent;
  padding: 8px 10px;
  width: 100%;
  max-width: 280px;
  color: #2c2930;
  font-size: 14px;
  letter-spacing: 1px;
  outline: none;
  flex: none;
}
.wrapper-Quotation {
  width: 100%;
  /* padding: 0 30px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Quotation-message {
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  border-style: none;
  background-color: transparent;
  padding: 8px 10px;
  width: 100%;
  max-width: 350px;
  color: #2c2930;
  font-size: 14px;
  letter-spacing: 1px;
  outline: none;
  flex: none;
}
.wp-icon {
  font-size: 24px;
  bottom: 4px;
  margin-right: 5px;
}
.continue_shopping {
  width: 100%;
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: var(--radius_btn);
  color: #fff;
  border: solid 2px #2c2930;
  background-color: #2c2930;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  flex: none;
  height: 41px;
  transition: all ease 0.3s;
}
.continue_shopping:hover {
  border: solid 2px #a1a1a1;
  background-color: #a1a1a1;
  color: #2c2930;
}
.conten-btn {
  display: flex;
  width: 100%;
  justify-content: center;
}
.continue_shopping2 {
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
  background-color: transparent;
  padding: 8px 10px;
  width: 100%;
  max-width: 350px;
  color: #2c2930;
  border: 2px solid #2c2930;
  border-radius: var(--radius_btn);
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  flex: none;
  height: 41px;
  transition: all ease 0.3s;
}
.continue_shopping2:hover {
  color: #a1a1a1;
  border: 2px solid #a1a1a1;
}
.wrapper_photo {
  position: relative;
  max-width: 600px;
  max-height: 600px;
}
.photo {
  /* width: 120px; */
  height: 120px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}
.text-empty {
  color: #222;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 18px;
}
.text-empty2 {
  color: #222;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 16px;
  max-width: 300px;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  /* transform: translateX(200px); */
  margin-left: 150px;
  opacity: 0;
}
.content-button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
details {
  color: #333;
  font-size: 13px;
  align-self: center;
  flex: 1;
  margin-left: 30px;
}
details summary {
  outline: none;
  cursor: pointer;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
}
details ol {
  display: flex;
  flex-direction: column;
  padding: 5px 0;
}
details ol li div {
  padding: 2px 4px;
  display: flex;
  justify-content: space-between;
}
details ol li:nth-child(even) {
  background-color: rgba(102, 102, 102, 0.1);
}
details[open] summary ~ * {
  animation: sweep 0.5s ease-in-out;
}
.continue_shopping_whatsapp {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 8px 10px;
  width: 100%;
  max-width: 350px;
  border-radius: var(--radius_btn);
  color: #fff;
  border: solid 2px #2c2930;
  background-color: #2c2930;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  flex: none;
  height: 41px;
  transition: all ease 0.3s;
}
.continue_shopping_whatsapp:hover {
  border: solid 2px #25d366;
  background-color: #25d366;
  color: #fff;
}

.wrapper-items-form {
  position: absolute;
  height: calc(100vh);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 10;
  top: 0;
  overflow-y: auto;
  padding: 20px 0 45px;
}
.content-items-form {
  width: 100%;
  padding: 10px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  position: relative;
}
.items-form {
  width: 100%;
  padding: 10px 30px;
}
.form_close {
  font-size: 30px;
  color: #25d366;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 10px;
}
.form_close:hover {
  color: gray;
}
.form-text {
  color: black;
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 15px;
}
.form-subtext {
  font-size: 13px;
  font-weight: 500;
  color: #7e7e7e;
  margin-bottom: 2px;
}
.content-input {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.input-text {
  font-size: 13px;
  color: #7e7e7e;
  border: solid 2px #c9c9c9;
  border-radius: 8px;
  background-color: transparent;
  padding: 5px 14px;
  width: 100%;
}
.input-text::placeholder {
  color: rgba(21, 20, 57, 0.541);
  opacity: 0.7;
}
.input-text:-internal-autofill-selected {
  -webkit-appearance: menulist-button;
  background-color: transparent !important;
  background-image: none !important;
  color: -internal-light-dark-color(black, white) !important;
}
.input-text:focus,
.input-text:active {
  outline: 0;
  border: solid 2px black;
}
.text-error {
  font-size: 12px;
  color: #cb2027;
  width: 100%;
  margin-left: 10px;
}
.continue_shopping_form {
  font-size: 16px;
  padding: 8px 10px;
  width: 100%;
  height: 44px;
  max-width: 340px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  position: fixed;
  bottom: 8px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: var(--radius_btn);
  color: #fff;
  border: solid 2px #2c2930;
  background-color: #2c2930;
}
.continue_shopping_form:hover {
  border: solid 2px #ccc;
  background-color: #fff;
  color: #2c2930;
}
.continue_form_confirmation {
  font-size: 16px;
  padding: 8px 10px;
  width: 100%;
  height: 44px;
  max-width: 340px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  border-radius: var(--radius_btn);
  color: #fff;
  border: solid 2px #2c2930;
  background-color: #2c2930;
}
.continue_form_confirmation:hover {
  border: solid 2px #ccc;
  background-color: #fff;
  color: #2c2930;
}
.modal-confirmation {
  width: 100%;
  height: 100vh;
  max-width: 400px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.87);
  color: white;
  z-index: 1001;
  top: 0;
}

.content-quantity {
  /* margin-top: 10px; */
  max-width: 126px;
  /* background: #f4f4f4; */
}
.quantity_remove {
  border: 1px #2c2930;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-style: solid none solid solid;
  height: 30px;
  width: 41px;
}
.quantity_value {
  font-size: 1em;
  color: #2c2930;
  border: 1px #2c2930;
  padding-left: 10px;
  padding-right: 10px;
  border-style: solid none solid none;
  height: 30px;
  width: 41px;
}
.quantity_add {
  border: 1px #2c2930;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-style: solid solid solid none;
  height: 30px;
  width: 41px;
}
.icon-quantity {
  color: #2c2930;
  @apply cursor-pointer;
}
.icon-quantity:hover {
  color: #eb7025;
  @apply cursor-pointer;
}
.container-alerta {
  position: absolute;
  bottom: 0px;
  right: -133px;
  width: 130px;
  background-color: rgb(250, 232, 75);
  border: 1px solid rgb(230, 213, 66);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: black;
}
.alerta {
  text-align: center;
  padding: 4px 5px;
  /* text-transform: capitalize; */
}
@media (max-width: 800px) {
  .wrapper-items-form {
    max-width: 100%;
    padding: 20px 0 45px;
  }
}
@media (max-width: 500px) {
  .wrapper-items-form {
    padding: 20px 0 300px;
  }
}
</style>
