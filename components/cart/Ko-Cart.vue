<template>
  <div
    class="content-cart"
    :class="
      this.template == 7
        ? 'margintopbytemplate07'
        : 'margintopbytemplategeneral'
    "
  >
    <div v-if="this.productsCart.length" class="conten-items-cart">
      <div class="cart-tittle">
        <cart-icon class="header-icon-cart" />
        <p class="txt-cart">{{ $t('home_tuCarrito') }}</p>
      </div>
      <div class="content-product-total">
        <div class="content-left">
          <div
            class="content-product-bag"
            v-for="(product, index) in productsCart"
            :key="index"
          >
            <div class="product">
              <div
                class="content-items-product content-items-product-resposive-img"
              >
                <img
                  v-lazy="idCloudinary(product.foto_cloudinary, 400, 400)"
                  class="product-photo"
                  :alt="product.nombre"
                />
              </div>
              <div class="content-items-product margin-items-product">
                <div class="product-items">
                  <div class="product-name">
                    <p class="text-name">{{ product.nombre | capitalize }}</p>
                    <div class="content_icon-sm" @click="deleteItemCart(index)">
                      <svg
                        class="icon-trash"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        fill="#222"
                      >
                        <title>Eliminar de carrito</title>
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="product-variant" v-if="product.combinacion">
                    <p class="text-tittle">{{ $t('cart_variante') }}</p>
                    <el-tag
                      v-for="(item, items) in product.combinacion"
                      :key="items"
                      class="text-variant"
                      style="margin-top: 3px"
                    >
                      {{ item }}
                    </el-tag>
                  </div>
                  <div class="content-price">
                    <div>
                      <p class="text-tittle">{{ $t('cart_precio') }}</p>
                      <p class="text-result">
                        {{
                          product.precio
                            | currency(
                              dataStore.tienda.codigo_pais,
                              dataStore.tienda.moneda
                            )
                        }}
                      </p>
                    </div>
                  </div>
                  <div class="wrapper-tag">
                    <el-tag type="danger" v-if="product.activo == 0">
                      Producto agotado!
                    </el-tag>
                    <el-tag type="danger" v-if="product.stock_disponible == 0">
                      ¡No tiene las unidades disponibles!
                    </el-tag>
                  </div>
                  <div class="product-quiantity">
                    <div class="txt-tittle-quantity">
                      {{ $t('cart_cantidad') }}
                    </div>
                    <div class="quantity">
                      <button
                        class="quantity_remove"
                        v-on:click="removeQuantity(product)"
                      >
                        <menos-icon class="icon-quantity" />
                      </button>
                      <!-- <p class="quantity_value">{{ product.cantidad }}</p> -->
                      <input
                        name="quantityValue"
                        class="quantity_value"
                        type="text"
                        placeholder=""
                        v-model="product.cantidad"
                        id="InputQuantityValue"
                        onkeypress="return (event.charCode>47 && event.charCode<58)"
                        @input="limitQuantity(product)"
                      />
                      <button
                        class="quantity_add"
                        v-on:click="addQuantity(product)"
                      >
                        <mas-icon class="icon-quantity" />
                      </button>
                      <div
                        class="container-alerta"
                        v-if="product.limitQuantity == product.cantidad"
                      >
                        <span class="alerta">
                          {{ $t('cart_ultimaUnidad') }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="producto-price-total">
                  <p class="txt-total-product">{{ $t('footer_totalPagar') }}</p>
                  <p class="txt-price-product">
                    {{
                      (product.precio * product.cantidad)
                        | currency(
                          dataStore.tienda.codigo_pais,
                          dataStore.tienda.moneda
                        )
                    }}
                  </p>
                </div>
              </div>
              <div class="content-product-priceIcon">
                <div class="producto-price-total-md">
                  <p class="txt-price-product">
                    {{
                      (product.precio * product.cantidad)
                        | currency(
                          dataStore.tienda.codigo_pais,
                          dataStore.tienda.moneda
                        )
                    }}
                  </p>
                </div>
                <div class="content_icon-md" @click="deleteItemCart(index)">
                  <svg
                    class="icon-trash"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    fill="#222"
                  >
                    <title>Eliminar de carrito</title>
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-right">
          <div class="content-txt-summary">
            <p class="txt-summary">{{ $t('cart_resumen') }}</p>
          </div>
          <div class="content-cart-product">
            <div class="cart-summary-items">
              <p class="txt-cart-summary" style="font-weight: bold">
                {{ $t('cart_items') }}
              </p>
              <p class="txt_summary_price">
                {{ this.cantidadProductos }}
              </p>
            </div>
            <span class="cart-summary-items" v-if="discountDescuentos">
              <p class="txt-cart-summary" style="font-weight: bold">
                {{ $t('footer_descuento') }}
              </p>
              <p class="txt_summary_price">
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
            <div class="order_total">
              <div class="order_total_domicile">
                <p class="txt_summary_tittle" style="font-weight: bold">
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
                  <summary class="txt-cart-summary">
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
                  class="content-Plana"
                  v-else-if="
                    rangosByCiudad.envio_metodo === 'tarifa_plana' &&
                    shipping > 0 &&
                    getFreeShipping &&
                    !FreeShippingCart
                  "
                >
                  <div class="content-list">
                    <p class="txt_summary_tittle">
                      {{ $t('footer_tarifaPlana') }}
                    </p>
                  </div>
                  <div class="content-list">
                    <p class="txt_summary_price">
                      {{
                        rangosByCiudades.valor
                          | currency(
                            dataStore.tienda.codigo_pais,
                            dataStore.tienda.moneda
                          )
                      }}
                    </p>
                  </div>
                </div>
                <div
                  v-else-if="
                    rangosByCiudad.envio_metodo === 'precio' &&
                    getFreeShipping &&
                    !FreeShippingCart
                  "
                  style="width: 100%"
                >
                  <div
                    class="content-Plana"
                    v-if="this.shippingTarifaPrecio > 0"
                  >
                    <div class="content-list">
                      <p class="txt_summary_tittle">
                        {{ $t('footer_Porprecio') }}
                      </p>
                    </div>
                    <p class="txt_summary_price">
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
                    class="txt_summary_price"
                  >
                    {{ $t('footer_tarifaPrecio') }}
                  </p>
                  <p v-else class="txt_summary_tittle">
                    {{ $t('footer_encioNoconfig') }}
                  </p>
                </div>
                <p
                  v-else-if="shipping && !getFreeShipping"
                  class="txt_summary_price"
                >
                  {{
                    shipping
                      | currency(
                        dataStore.tienda.codigo_pais,
                        dataStore.tienda.moneda
                      )
                  }}
                </p>
                <div
                  class="contet-free-delivery"
                  v-else-if="
                    rangosByCiudad.envio_metodo === 'gratis' &&
                    shippingCities.length <= 0 &&
                    !getFreeShipping &&
                    !FreeShippingCart
                  "
                >
                  <p class="txt_summary_tittle">
                    {{ $t('footer_encioGratis') }}
                  </p>
                  <p
                    class="txt_summary_price"
                    style="width: 100%; max-width: 180px"
                  >
                    {{
                      0
                        | currency(
                          dataStore.tienda.codigo_pais,
                          dataStore.tienda.moneda
                        )
                    }}
                  </p>
                </div>
                <div
                  class="contet-free-delivery"
                  v-else-if="
                    rangosByCiudad.envio_metodo === 'sintarifa' &&
                    shippingCities.length <= 0 &&
                    !getFreeShipping &&
                    !FreeShippingCart
                  "
                >
                  <p class="txt_summary_tittle">
                    {{ $t('footer_enviosPorPagar') }}
                  </p>
                  <p class="txt_summary_price">-</p>
                </div>
                <div class="contet-free-delivery" v-else-if="FreeShippingCart">
                  <p class="txt_summary_tittle">
                    {{ $t('footer_tarifaPrecio') }}
                  </p>
                  <p class="txt_summary_price">$0</p>
                </div>
              </div>
            </div>
            <div class="cart-summary-items">
              <p class="txt-cart-summary" style="font-weight: bold">
                {{ $t('cart_subtotal') }}
              </p>
              <p class="txt_summary_price">
                {{
                  totalCart
                    | currency(
                      dataStore.tienda.codigo_pais,
                      dataStore.tienda.moneda
                    )
                }}
              </p>
            </div>
            <div class="line"></div>
            <div class="content-btn">
              <div class="content-totalPay">
                <p class="txt_summary_tittle txt-total">
                  {{ $t('cart_totalpagar') }}
                </p>
                <p class="txt_summary_price">
                  {{
                    (totalCart +
                      (this.shipping ? this.shipping : 0) +
                      (this.shippingTarifaPrecio &&
                      this.shippingTarifaPrecio != 'empty' &&
                      !this.FreeShippingCart
                        ? this.shippingTarifaPrecio
                        : 0) -
                      discountDescuentos)
                      | currency(
                        dataStore.tienda.codigo_pais,
                        dataStore.tienda.moneda
                      )
                  }}
                </p>
              </div>
              <p
                class="Quotation-message"
                v-if="isQuotation() || (!countryStore && productsCart.length)"
              >
                {{ $t('footer_contactoMgs') }}
              </p>
              <p class="Quotation-message" v-if="dataStore.tienda.estado == 0">
                {{ $t('footer_tiendaCerrada') }}
              </p>
              <!-- <p class="Quotation-message" v-if="!stateModalPwd">
                {{ $t('footer_tiendaPwd') }}
              </p> -->
              <!-- <p class="Quotation-message" v-if="verifyProducts == 0">
                {{ $t('cart_limitProductos') }}
              </p> -->
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
              <!-- && verifyProducts == 1 -->
              <button
                ref="colorBtn"
                class="btn-buy-1"
                @click="GoPayments"
                v-if="
                  productsCart.length &&
                  !isQuotation() &&
                  dataStore.tienda.estado == 1 &&
                  !this.estadoShippingTarifaPrecio &&
                  countryStore &&
                  IsMinValorTotal() &&
                  expiredDate(dataStore.tienda.fecha_expiracion)
                "
              >
                {{ $t('footer_finalizarCompra') }}
              </button>
              <nuxt-link :to="`${this.redirectCart}`" class="btn-buy-2">
                {{ $t('footer_seguirCompra') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="contenedor-vacio">
      <div class="wrapper_photo">
        <img
          src="../../assets/img/icono_cesta.png"
          class="photo"
          alt="Product img"
        />
      </div>
      <p class="text-empty">{{ $t('footer_carritoVacio2') }}</p>
      <p class="text-empty2">
        {{ $t('footer_carritoVacio3') }}
      </p>
      <nuxt-link :to="`${this.redirectCart}`">
        <button ref="colorBtn" class="btn3">
          {{ $t('cart_agregarProductos') }}
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../mixins/idCloudinary'
import currency from '../../mixins/formatCurrent'
import expiredDate from '../../mixins/expiredDate'
// import { Empty } from 'element-ui'
export default {
  mixins: [idCloudinary, currency, expiredDate],
  name: 'Ko-Cart-G',
  props: {
    dataStore: Object,
  },
  async mounted() {
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
      envioProducto: '',
      layoutLogin: true,
      shippingCities: [],
      rangosByCiudades: [],
      shippingTarifaPrecio: '',
      estadoShippingTarifaPrecio: false,
      FreeShippingCart: false,
      discountDescuentos: 0,
    }
  },
  computed: {
    // stateModalPwd() {
    //   return this.$store.state.stateModalPwd
    // },
    cities() {
      return this.$store.state.cities
    },
    verifyProducts() {
      return this.$store.getters.verifyProducts
    },
    cantidadProductos() {
      return this.$store.getters.cantidadProductos
    },
    template() {
      return this.$store.state.template
    },
    totalCart() {
      return this.$store.state.totalCart
    },
    redirectCart() {
      let resultURl
      if (this.template == 5 || this.template == 6) {
        resultURl = '/'
      } else if (
        this.template == 7 ||
        this.template == 9 ||
        this.template == 10
      ) {
        resultURl = '/productos'
      }
      return resultURl
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
    productsCart() {
      return this.$store.state.productsCart
    },
    shippingDescuento() {
      return this.$store.getters.listaDescuentosProductos
    },
    shippingDescuento2() {
      return this.$store.getters.listaDescuentosPrecio
    },
    facebookPixel() {
      return this.$store.state.analytics_tagmanager
    },
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
    limitQuantity(product) {
      product.cantidad = parseInt(product.cantidad)
      if (product.cantidad > product.limitQuantity) {
        product.cantidad = product.limitQuantity
      } else if (product.cantidad == 0) {
        product.cantidad = 1
      } else if (product.cantidad == '') {
        product.cantidad = 1
      }
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
      this.$store.state.productsCart.splice(i, 1)
      this.$store.commit('UPDATE_CONTENT_CART')
      this.$store.dispatch('VERIFY_PRODUCTS')
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
    IsMinValorTotal() {
      let result = false
      if (
        this.dataStore.tienda.minimo_compra == 0 ||
        this.dataStore.tienda.minimo_compra == null
      ) {
        result = true
      } else {
        let tempTotal =
          this.totalCart +
          (this.shipping ? this.shipping : 0) +
          (this.shippingTarifaPrecio && this.shippingTarifaPrecio != 'empty'
            ? this.shippingTarifaPrecio
            : 0) -
          ((this.shippingDescuento &&
          this.shippingDescuento.valor &&
          this.shippingDescuento.tipo == 1
            ? this.shippingDescuento.valor
            : this.shippingDescuento &&
              this.shippingDescuento.valor &&
              this.shippingDescuento.tipo == 0
            ? Math.trunc((this.totalCart * this.shippingDescuento.valor) / 100)
            : 0) +
            (this.shippingDescuento2 && this.shippingDescuento2.precio
              ? this.shippingDescuento2.precio
              : 0))
        if (tempTotal >= this.dataStore.tienda.minimo_compra) {
          result = true
        }
      }
      return result
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
.content-cart {
  @apply w-full flex flex-col justify-center items-center pb-48;
}
.margintopbytemplate07 {
  @apply pt-100;
}
.margintopbytemplategeneral {
  @apply pt-30;
}
.conten-items-cart {
  @apply flex flex-col justify-center items-center;
}
.cart-tittle {
  @apply w-full flex flex-row justify-center items-center mt-40 mb-15;
}
.header-icon-cart {
  font-size: 30px;
  margin-right: 5px;
  color: #222;
  bottom: 0.125em;
}
.txt-cart {
  color: #222;
  font-size: 30px;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply w-full text-left font-semibold;
}
.content-right {
  border-color: #efefef;
  @apply w-full flex flex-col justify-start items-center p-20 border;
}
.content-left {
  @apply w-full flex flex-col justify-center items-start;
}
.quantity {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  position: relative;
  box-sizing: border-box;
  max-width: 240px;
  background: #f4f4f4;
}
.text-quantity {
  font-size: 14px;
  font-weight: bold;
  color: #2c2930;
  margin-right: 15px;
  align-self: center;
}
.quantity_remove {
  border: 1px #f4f4f4;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-style: solid none solid solid;
  background: transparent;
  height: 41px;
  width: 55px;
}
.quantity_value {
  font-size: 1em;
  color: #2c2930;
  border: 1px #f4f4f4;
  padding-left: 10px;
  padding-right: 10px;
  border-style: solid none solid none;
  background: transparent;
  height: 41px;
  width: 55px;
  /* justify-content: center;
  display: flex;
  align-items: center; */
  text-align: center;
}
.quantity_add {
  border: 1px #f4f4f4;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-style: solid solid solid none;
  background: transparent;
  height: 41px;
  width: 55px;
}
.container-alerta {
  position: absolute;
  bottom: 4px;
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
.icon-quantity {
  color: #2c2930;
  @apply cursor-pointer;
}
.icon-quantity:hover {
  color: #eb7025;
  @apply cursor-pointer;
}
.alerta {
  text-align: center;
  padding: 5px 5px;
  /* text-transform: capitalize; */
}
.product-variant >>> .el-tag {
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
.wrapper-tag >>> .el-tag {
  border-color: rgb(223, 62, 62);
  background-color: rgb(223, 62, 62);
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
.text-name,
.text-variant,
.text-tittle,
.text-result,
.txt-price-product,
.txt-total-product,
.txt-summary,
.txt-cart-summary,
.txt_summary_price,
.txt_summary_tittle {
  color: #222;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
}
.product-photo {
  object-position: center;
  width: 100%;
  /* max-height: 200px; */
  /* max-width: 200px; */
  object-fit: cover;
  border-radius: 6px;
  @apply shadow-md;
}
.content-cart-product {
  @apply w-full flex-col justify-center items-center;
}
.cart-summary-items {
  @apply w-full flex flex-row justify-between items-center;
}
.content-txt-summary {
  @apply w-full flex flex-col justify-center items-start mb-30;
}
.txt-summary {
  font-size: 20px;
  @apply font-semibold;
}
.order_total {
  @apply w-full flex flex-col justify-start items-center;
}
.order_total_domicile {
  @apply w-full flex flex-col justify-start items-start;
}
/* por-precio */
details {
  color: #333;
  font-size: 13px;
  align-self: flex-end;
  flex: 1;
  width: 100%;
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
.scroll_cart_summary_items_cities {
  color: #2c2930;
  overflow-y: auto;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.scroll_cart_summary_items_cities li {
  margin-right: 5px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar {
  background: transparent;
  width: 4px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px transparent;
  border-radius: 10px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
/* Tarifa-Plana */
.content-Plana {
  @apply w-full flex flex-row justify-between items-center mb-20;
}
.content-list {
  @apply flex flex-row justify-between items-end;
}
/* free-delivery */
.contet-free-delivery {
  @apply w-full flex flex-row justify-between items-center mb-20;
}
/* btns */
.content-totalPay {
  @apply w-full flex flex-row justify-between items-center my-20;
}
.txt-total {
  @apply font-semibold;
}
.content-btn {
  @apply w-full flex flex-col justify-center items-center;
}
.txt_summary_tittle {
  @apply w-full flex justify-start items-center;
}
.txt_summary_price {
  @apply w-auto flex justify-end items-end font-semibold;
}
.line {
  border-color: #666;
  @apply w-full border-t my-3;
}
.icon-trash:hover {
  fill: #eb7025;
  @apply cursor-pointer;
}
.contenedor-vacio {
  display: flex;
  width: 100%;
  height: 100%;
  height: calc(100vh - 416px);
  max-width: 1300px;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  justify-content: center;
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
.btn3 {
  border-radius: 5px;
  color: black;
  border: solid 2px black;
  background-color: transparent;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: all 200ms ease-in;
}
.btn3:hover {
  color: grey;
  border: solid 2px grey;
}
.Quotation-message {
  color: #222;
  padding: 8px 12px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
}
.text-empty {
  color: #222;
  margin-top: 15px;
  font-weight: 700;
  font-size: 18px;
}
.text-empty2 {
  color: #222;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 16px;
  max-width: 400px;
  text-align: center;
}
@screen sm {
  .conten-items-cart {
    @apply w-9/0;
  }
  .content-product-total {
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-product-bag {
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-items-product {
    @apply py-20;
  }
  .product {
    border-color: #efefef;
    @apply w-full grid grid-cols-2 justify-center items-start mb-20 border;
  }
  .product-items {
    @apply w-full grid grid-cols-1 gap-4 justify-center items-start;
  }
  .product-quiantity {
    @apply w-full flex flex-col justify-center items-start;
  }
  .product-name {
    @apply w-full flex flex-row justify-between items-center pr-10;
  }
  .content-box-items {
    @apply w-full flex flex-row justify-start items-center mt-10;
  }
  .producto-price-total {
    @apply w-full flex flex-col justify-center items-start mt-30;
  }
  .text-name {
    font-size: 16px;
    @apply font-semibold;
  }
  .txt-total-product {
    font-size: 16px;
  }
  .txt-price-product,
  .text-result {
    font-size: 16px;
    @apply font-semibold;
  }
  .content-product-priceIcon,
  .content_icon-md {
    @apply hidden;
  }
  .btn-buy-1 {
    background-color: #222;
    border-color: #222;
    color: #fff;
    @apply w-full h-40 flex justify-center items-center font-semibold border-2 rounded-md mb-10 mt-30;
  }
  .btn-buy-1:hover {
    background-color: #eb7025;
    border-color: #eb7025;
  }
  .btn-buy-2 {
    border-color: #222;
    color: #222;
    @apply w-full h-40 flex justify-center items-center font-semibold border-2 rounded-md;
  }
  .btn-buy-2:hover {
    border-color: #eb7025;
    color: #eb7025;
  }
}
@screen md {
  .product {
    @apply grid grid-cols-3;
  }
  .content-items-product {
    @apply p-25;
  }
  .producto-price-total {
    @apply hidden;
  }
  .content-product-priceIcon {
    @apply w-full flex flex-row justify-between items-center p-25;
  }
  .content_icon-sm {
    @apply hidden;
  }
  .content_icon-md {
    @apply w-auto flex;
  }
  .text-name {
    font-size: 20px;
    @apply font-semibold;
  }
  .txt-price-product {
    font-size: 20px;
    @apply font-semibold;
  }
}
@screen lg {
  .content-left {
    @apply mr-40;
  }
  .content-right {
    top: 160px;
    @apply w-6/0 sticky mb-40;
  }
  .content-product-total {
    @apply w-full flex flex-row justify-center items-start;
  }
}
@screen mlg {
  .content-right {
    top: 120px;
    @apply w-5/0;
  }
}
@media (min-width: 1400px) {
  .conten-items-cart {
    max-width: 1400px;
    @apply w-full;
  }
}
@media (max-width: 500px) {
  .product {
    @apply grid grid-cols-1;
  }
  .content-items-product-resposive-img {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .margin-items-product {
    margin-left: 20px;
  }
}
</style>
