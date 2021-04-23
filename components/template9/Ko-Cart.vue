<template>
  <div class="content-cart">
    <div v-if="this.productsCart.length" class="conten-items-cart">
      <div class="cart-tittle">
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
              <div class="product-image">
                <img
                  v-lazy="idCloudinaryBanner(product.foto_cloudinary)"
                  class="product-photo"
                  :alt="product.nombre"
                />
              </div>
              <div class="content-items-product">
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
                      style="margin-top: 3px;"
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
                  <div class="product-quiantity">
                    <div class="txt-tittle-quantity">Cantidad</div>

                    <div class="content-quantity">
                      <div class="quantity">
                        <!-- <p class="text-quantity">{{ $t('cart_cantidad') }}</p> -->
                        <button
                          class="quantity_remove"
                          v-on:click="removeQuantity(product)"
                        >
                          <menos-icon class="text-icon" />
                        </button>
                        <p class="text-quantity_value">
                          {{ product.cantidad }}
                        </p>
                        <button
                          class="quantity_add"
                          v-on:click="addQuantity(product)"
                        >
                          <mas-icon class="text-icon" />
                        </button>
                        <!-- Anuncio ult unidad -->
                        <!-- <div
                              class="container-alerta"
                              v-if="this.maxQuantityValue == this.quantityValue"
                            >
                              <span class="alerta"> {{ $t('cart_ultimaUnidad') }}</span>
                            </div> -->
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
              <p class="txt-cart-summary">{{ $t('cart_subtotal') }}</p>
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
            <div class="order_total">
              <div class="order_total_domicile">
                <p class="txt_summary_tittle">
                  {{ $t('footer_costoDomicilio') }}
                </p>

                <!-- precio ciudad -->
                <div
                  class="content-byCity"
                  v-if="
                    rangosByCiudad.envio_metodo === 'precio_ciudad' &&
                    shippingCities.length > 0 &&
                    getFreeShipping == false
                  "
                >
                  <p class="txt_summary_tittle">
                    {{ $t('footer_valorCiudad') }}
                  </p>
                  <div
                    class="content-item-byCity"
                    v-for="(ciudad, index) in rangosByCiudad.rangos"
                    :key="ciudad.id"
                  >
                    <div class="price-by-city" v-if="ciudad.price > 0">
                      <p class="txt_summary_tittle">
                        {{
                          shippingCities[index].nombre_ciu === 'Sin especificar'
                            ? 'Resto del país'
                            : shippingCities[index].nombre_ciu
                        }}:
                      </p>
                      <p class="txt_summary_price">
                        {{
                          ciudad.price
                            | currency(
                              dataStore.tienda.codigo_pais,
                              dataStore.tienda.moneda
                            )
                        }}
                      </p>
                    </div>
                  </div>
                </div>
                <!-- tarifa plana -->
                <div
                  class="content-Plana"
                  v-else-if="
                    rangosByCiudad.envio_metodo === 'tarifa_plana' &&
                    shipping > 0 &&
                    getFreeShipping == true
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
                <!-- por precio -->
                <div
                  v-else-if="
                    rangosByCiudad.envio_metodo === 'precio' &&
                    getFreeShipping == true
                  "
                >
                  <div v-if="this.shippingTarifaPrecio > 0">
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
                    v-else-if="(this.shippingTarifaPrecio >= 0)"
                    class="txt_summary_price"
                  >
                    {{ $t('footer_tarifaPrecio') }}
                  </p>
                  <p v-else class="txt_summary_tittle">
                    {{ $t('footer_encioNoconfig') }}
                  </p>
                </div>
                <!-- envio -->
                <p
                  v-else-if="shipping && getFreeShipping == false"
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
                <!-- envio gratis tienda -->
                <div
                  class="contet-free-delivery"
                  v-if="
                    rangosByCiudad.envio_metodo === 'gratis' ||
                    (shippingCities.length <= 0 && getFreeShipping == false)
                  "
                >
                  <p class="txt_summary_tittle">
                    {{ $t('footer_encioGratis') }}
                  </p>
                  <p class="txt_summary_price">$0</p>
                </div>
              </div>
            </div>
            <div class="line"></div>
            <div class="message-responsive">
              <p class="Quotation-message" v-if="isQuotation()">
                {{ $t('footer_contactoMgs') }}
              </p>
            </div>
            <div class="content-btn">
              <div class="content-totalPay">
                <p class="txt_summary_tittle txt-total">
                  {{ $t('cart_totalpagar') }}
                </p>
                <p class="txt_summary_price">
                  {{
                    (totalCart + (this.shipping ? this.shipping : 0))
                      | currency(
                        dataStore.tienda.codigo_pais,
                        dataStore.tienda.moneda
                      )
                  }}
                </p>
              </div>
              <p class="Quotation-message" v-if="isQuotation()">
                {{ $t('footer_contactoMgs') }}
              </p>
              <p class="Quotation-message" v-if="dataStore.tienda.estado == 0">
                {{ $t('footer_tiendaCerrada') }}
              </p>
              <button
                ref="colorBtn"
                class="btn-buy-1"
                @click="GoPayments"
                v-if="!isQuotation() && dataStore.tienda.estado == 1"
              >
                {{ $t('footer_finalizarCompra') }}
              </button>
              <nuxt-link to="/" class="btn-buy-2">
                {{ $t('footer_seguirCompra') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="contenedor-vacio">
      <div class="wrapper_photo">
        <img v-lazy="img" class="photo" alt="Product img" />
      </div>
      <p>{{ $t('footer_carritoVacio') }}</p>
      <nuxt-link to="/productos">
        <button ref="colorBtn" class="btn3">
          {{ $t('cart_agregarProductos') }}
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Cart',
  props: {
    // settingByTemplate: Object,
  },
  mounted() {
    this.$store.dispatch('GET_SHOPPING_CART')
    this.$store.dispatch('GET_CITIES')
    if (this.rangosByCiudad.envio_metodo === 'precio_ciudad') {
      this.filterCities()
    }
    this.$store.commit('CALCULATE_TOTALCART')
    if (this.rangosByCiudades.envio_metodo == 'precio') {
      this.shippingPrecio()
    }
  },
  data() {
    return {
      img:
        'https://res.cloudinary.com/komerciaacademico/image/upload/v1583535445/komerciaAcademico/CARRITO_y2lbh6.png',
      envioProducto: '',
      layoutLogin: true,
      shippingCities: [],
      rangosByCiudades: [],
      shippingTarifaPrecio: '',
      estadoShippingTarifaPrecio: false,
    }
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    totalCart() {
      return this.$store.state.totalCart
    },
    productsCart() {
      return this.$store.state.productsCart
    },
    orderComponent() {
      return this.$store.state.orderComponent
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
      return free
    },
    rangosByCiudad() {
      this.rangosByCiudades = JSON.parse(this.$store.state.envios.valores)
      return this.rangosByCiudades
    },
    cities() {
      return this.$store.state.cities
    },
    shipping() {
      if (this.$store.state.envios.estado) {
        let shipping = JSON.parse(this.$store.state.envios.valores)
        switch (shipping.envio_metodo) {
          case 'gratis':
            return 0
            break
          case 'tarifa_plana':
            return shipping.valor
            break
          case 'precio_ciudad':
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
            break
          default:
            return 0
        }
      } else {
        return 0
      }
    },
  },
  methods: {
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
    addQuantity(product) {
      if (product.limitQuantity > product.cantidad) {
        product.cantidad++
        this.$store.commit('UPDATE_CONTENTCART')
        this.$store.commit('CALCULATE_TOTALCART')
      }
    },
    removeQuantity(product) {
      if (product.cantidad >= 2) {
        product.cantidad--
        this.$store.commit('UPDATE_CONTENTCART')
        this.$store.commit('CALCULATE_TOTALCART')
      }
    },
    deleteItemCart(i) {
      this.$store.state.productsCart.splice(i, 1)
      this.$store.commit('UPDATE_CONTENTCART')
    },
    GoPayments() {
      let json = {
        products: this.$store.state.productsCart,
        tienda: {
          id: this.$store.state.tienda.id_tienda,
          // nombre: this.$store.state.tienda.nombre,
          // logo: this.$store.state.tienda.logo,
          // location: window.location.href,
        },
        // tipo: 0,
        // total: this.$store.state.totalCart,
        // estado: 0,
        // direccion_entrega: 0,
      }
      json = JSON.stringify(json)
      if (this.$store.state.productsCart.length != 0) {
        location.href = `https://checkout.komercia.co/?params=${json}`
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
  },
  watch: {
    rangosByCiudad() {
      this.filterCities()
    },
    cities() {
      this.filterCities()
    },
    totalCart() {
      this.shippingPrecio()
    },
  },
  filters: {
    currency(value, codigo_pais, moneda) {
      let resultCurrent
      if (codigo_pais && moneda) {
        if (value && codigo_pais == 'co' && moneda == 'COP') {
          return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
        } else if (codigo_pais == 'internacional') {
          {
            resultCurrent = new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(value)
            return resultCurrent
          }
        } else {
          {
            resultCurrent = new Intl.NumberFormat(codigo_pais, {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(value)
            return resultCurrent
          }
        }
      } else {
        if (value) {
          return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
        }
      }
    },
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
  @apply w-full flex flex-col justify-center items-center pb-30 pt-50;
}
.conten-items-cart {
  @apply flex flex-col justify-center items-center;
}
.cart-tittle {
  @apply w-full flex flex-row justify-center items-center my-30;
}
.txt-cart {
  color: #222;
  font-size: 42px;
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

.txt-tittle-quantity {
  font-size: 12px;
  color: #222;
  min-width: 70px;
  @apply w-auto font-semibold mr-10;
}
.box-quantity {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  @apply w-75 h-50 flex text-center justify-center items-center;
}
.box-quantity-btns {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  @apply w-25 h-50 flex flex-col text-center justify-center items-center;
}
.btn-quantity {
  background-color: #fff;
  border-color: rgba(0, 0, 0, 0.15);
  @apply w-25 h-25 flex justify-center items-center border-t border-r;
}
.text-name,
.text-variant,
.text-tittle,
.text-result,
.txt-tittle-quantity,
.txt-quantity,
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
  @apply shadow-md;
}
.content-cart-product {
  @apply w-full flex-col justify-center items-center;
}
.cart-summary-items {
  @apply w-full flex flex-row justify-between items-center;
}

/* ------------------------------------ */
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
.content-byCity {
  @apply w-full flex flex-col justify-start items-center mb-20;
}
.content-item-byCity {
  @apply w-full flex flex-col justify-start items-center;
}
.price-by-city {
  @apply w-full flex flex-row justify-between items-center;
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
.quantity {
  @apply flex flex-row justify-center items-center;
}
.contenedor-vacio {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 480px);
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
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}
.btn3 {
  border-radius: var(--radius_btn);
  color: var(--color_background_btn);
  border: solid 2px var(--color_background_btn);
  background-color: transparent;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: all 200ms ease-in;
}
.btn3:hover {
  color: var(--btnhover);
  border: solid 2px var(--btnhover);
}
@screen sm {
  .content-cart {
    margin-top: 72px;
  }
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
    @apply w-full grid grid-cols-2 gap-4 justify-center items-start mb-40 border;
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
    background-color: #222;
    color: #fff;
  }
  .content-quantity {
    background: #f4f4f4;
    @apply w-full h-54 flex flex-col justify-center items-center pb-1;
  }
  .quantity {
    @apply w-full;
  }
  .quantity_remove,
  .quantity_add {
    background: #f4f4f4;
    @apply flex justify-center items-center;
  }
  .text-icon {
    @apply w-34 flex justify-center items-center cursor-pointer;
  }
  .text-quantity_value {
    padding: 0 35px;
    border: none;
    font-size: 21px;
    @apply w-full flex-col justify-center items-center text-center font-semibold;
  }
}
@media (min-width: 480px) {
  .content-quantity {
    @apply w-4/0 mr-2;
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
  .product-quiantity {
    @apply mt-0;
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
  .txt-tittle-quantity {
    font-size: 16px;
  }
  .txt-price-product {
    font-size: 20px;
    @apply font-semibold;
  }
  .btn-buy-1 {
    @apply w-8/0;
  }
  .btn-buy-2 {
    @apply w-8/0;
  }
  .content-quantity {
    width: 150px;
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
  .content-cart {
    margin-top: 160px;
  }
  .content-product-total {
    @apply w-full flex flex-row justify-center items-start;
  }
}
@screen mlg {
  .content-cart {
    margin-top: 0px;
  }
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
</style>
