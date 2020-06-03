<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-show="openOrder">
      <div class="order_content">
        <div class="order_header">
          <h3>Tu Orden</h3>
          <button @click="closeOrder" class="order_header_close">Cerrar</button>
        </div>
        <transition name="slide">
          <template>
            <div class="order--wrapper">
              <div class="order_products">
                <!-- <ul class="checkout_summary_products_list">
                  <li
                    class="checkout_summary_products__item"
                    v-for="(product, index) in productsCart"
                    :key="index"
                  >
                    <figure class="checkout_summary__item_photo">
                      <img :src="product.foto_cloudinary" alt />
                    </figure>
                    <div class="nombre_producto">
                      <p class="nombre_producto_text">
                        {{ product.nombre | capitalize }}
                      </p>
                      <span class="unidades">
                        <b>Cantidad:</b>
                        {{ product.cantidad }}
                        <b>X {{ product.precio | currency }}</b>
                      </span>
                      <br />
                      <div
                        class="producto_variantes"
                        v-if="product.combinacion"
                      >
                        <el-tag
                          class="producto-variantes-el-tag"
                          v-for="(variants, index) in product.combinacion"
                          :key="index"
                        >
                          {{ variants | capitalize }}
                        </el-tag>
                      </div>
                    </div>
                    <p class="pricing_products">
                      {{ (product.precio * product.cantidad) | formatCurrency }}
                    </p>
                  </li>
                </ul> -->

                <ul class="order_products_list">
                  <li
                    class="order_products_list_item"
                    v-for="(product, index) in productsCart"
                    :key="index"
                  >
                    <div class="photo">
                      <img :src="product.foto_cloudinary" />
                    </div>
                    <div class="name">
                      <p class="order-text" style="font-weight: bold;">
                        {{ product.nombre | capitalize }}
                      </p>
                      <span>
                        <b class="unidades">Cantidad: {{ product.cantidad }}</b>
                        <b class="unidades"
                          >X {{ product.precio | currency }}</b
                        >
                      </span>
                      <div v-if="product.combinacion">
                        <el-tag
                          v-for="(productCombinacion,
                          index2) in product.combinacion"
                          :key="index2"
                        >
                          {{ productCombinacion | capitalize }}
                        </el-tag>
                      </div>
                    </div>
                    <div class="price">
                      <p>
                        {{ (product.precio * product.cantidad) | currency }}
                      </p>
                    </div>
                    <delete-icon
                      class="material-icons delete"
                      v-on:click="deleteItemCart(index)"
                    ></delete-icon>
                  </li>
                </ul>
              </div>
              <template v-if="productsCart.length">
                <div class="order_total">
                  <span class="order_total_domicile">
                    <p>Costo domicilio</p>
                    <details
                      v-if="
                        rangosByCiudad.envio_metodo === 'precio_ciudad' &&
                        shippingCities.length > 0 &&
                        getFreeShipping == false
                      "
                    >
                      <summary class="text-color">Valor por Ciudad:</summary>
                      <section>
                        <ol class="scroll_cart_summary_items_cities">
                          <li
                            v-for="(ciudad, index) in rangosByCiudad.rangos"
                            :key="ciudad.id"
                          >
                            <b>
                              {{
                                shippingCities[index].nombre_ciu ===
                                'Sin especificar'
                                  ? 'Resto del país'
                                  : shippingCities[index].nombre_ciu
                              }}:
                            </b>
                            {{ ciudad.price | currency }}
                          </li>
                        </ol>
                      </section>
                    </details>
                    <p v-else-if="shipping && getFreeShipping == false">
                      {{ shipping | currency }}
                    </p>
                    <p
                      class="without_shipping_cost"
                      v-if="
                        rangosByCiudad.envio_metodo === 'gratis' ||
                        getFreeShipping == true
                      "
                    >
                      No tiene costo de envió
                    </p>
                  </span>
                  <span class="order_total_net">
                    <p>Total a pagar</p>
                    <p>
                      {{
                        (totalCart + (getFreeShipping ? 0 : shipping))
                          | currency
                      }}
                    </p>
                  </span>
                </div>
              </template>
              <template v-else>
                <div class="wrapper_photo">
                  <img :src="img" class="photo" />
                </div>
                <p class="text-cart-empty">
                  Tu carrito de compras ahora está vacío.
                </p>
              </template>
              <div class="content-button">
                <p class="Quotation-message" v-if="isQuotation()">
                  Contacte con la tienda para saber los precios de los productos
                </p>
                <button
                  v-if="productsCart.length && !isQuotation()"
                  class="continue_shopping"
                  @click="GoPayments"
                >
                  Finalizar compra
                </button>
                <nuxt-link class="conten-btn" to="/" @click="closeOrder">
                  <button class="continue_shopping2">
                    Seguir comprando
                  </button>
                </nuxt-link>
                <nuxt-link
                  to="/template1/cart"
                  class="conten-btn"
                  @click="closeOrder"
                >
                  <button class="continue_shopping2">
                    Ir al carrito
                  </button>
                </nuxt-link>
              </div>
            </div>
          </template>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  name: 'koOrder1',
  props: {},
  mounted() {
    //   this.$store.commit('UPDATE_CONTENTCART')

    this.$store.dispatch('GET_CITIES')
    if (this.rangosByCiudad.envio_metodo === 'precio_ciudad') {
      this.filterCities()
    }
  },
  data() {
    return {
      img:
        'https://res.cloudinary.com/komerciaacademico/image/upload/v1583535445/komerciaAcademico/CARRITO_y2lbh6.png',

      shippingCities: [],
      rangosByCiudades: [],
    }
  },
  computed: {
    configHttp() {
      return this.$store.state.configHttp
    },
    userData() {
      return this.$store.state.userData
    },
    openOrder() {
      return this.$store.state.openOrder
    },
    totalCart() {
      return this.$store.state.totalCart
    },
    productsCart() {
      return this.$store.state.productsCart
    },
    getFreeShipping() {
      let free = true
      this.productsCart.filter((product) => {
        if (product.envio_gratis == 0) {
          free = false
        }
      })
      if (this.rangosByCiudad.envio_metodo === 'precio_ciudad') {
        free = false
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
    isQuotation() {
      let result = false
      this.productsCart.forEach((product) => {
        if (product.precio === 0) result = true
      })
      return result
    },
    deleteItemCart(i) {
      this.$store.commit('DELETEITEMCART', i)
      this.$store.commit('UPDATE_CONTENTCART')
    },
    closeOrder(event) {
      const element = event.target.className

      if (
        element === 'order' ||
        element === 'order_header_close' ||
        element === 'continue_shopping' ||
        element === 'continue_shopping2'
      ) {
        this.$store.commit('SET_OPENORDER', false)
      }
    },
    GoPayments() {
      let json = {
        products: this.$store.state.productsCart,
        tienda: {
          id: this.$store.state.tienda.id_tienda,
          nombre: this.$store.state.tienda.nombre,
          logo: this.$store.state.tienda.logo,
          location: window.location.href,
        },
        tipo: 0,
        total: this.$store.state.totalCart,
        estado: 0,
        direccion_entrega: 0,
      }
      json = JSON.stringify(json)
      if (this.$store.state.productsCart.length != 0) {
        location.href = `https://checkout.komercia.co/?params=${json}`
      }
    },
    async createQuotation() {
      let quotation = {
        productos: this.$store.state.productsCart,
        tienda: this.$store.state.tienda.id_tienda,
        tipo: 1,
        total: this.$store.state.totalCart,
        estado: 0,
        direccion_entrega: 0,
        metodo_pago: '7',
        costo_envio: this.shipping || 0,
        usuario: this.userData.id,
      }
      const response = await axios.post(
        `https://api2.komercia.co/api/usuario/orden`,
        quotation,
        this.configHttp
      )
      this.$store.state.openOrder = false
      this.$store.state.productsCart = []
      this.$store.commit('UPDATE_CONTENTCART')
      this.$notify.success({
        title: 'Hemos recibido tu cotización!',
        message: 'Pronto te enviaremos la información a tu correo electrónico.',
      })
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
  },
  filters: {
    currency(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
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
.order {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
}
.order_content {
  position: absolute;
  right: 0px;
  max-width: 400px;
  width: 100%;
  height: 100vh;
  background-color: var(--background_color_1);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 10px;
  animation: dispatch 0.2s linear 1;
  overflow: hidden;
}
@keyframes dispatch {
  0% {
    right: -400px;
  }
  100% {
    right: 0px;
  }
}
.order_content > div {
  width: 100%;
  box-sizing: border-box;
}
.order_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--background_color_2);
  padding: 10px 5px;
  flex: none;
}
.order_header_close {
  padding: 5px 12px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: var(--color_shopping_cart);
  cursor: pointer;
  outline: none;
  flex: none;
  color: #fff;
  transition: all ease 0.3s;
}
.order_header_close:hover {
  background-color: var(--color_hover_text);
}
.order--wrapper {
  display: grid;
  overflow-y: auto;
}
.order_products_list {
  height: 380px;
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
}
.order_products_list::-webkit-scrollbar {
  background: var(--background_color_1);
  width: 6px;
}
.order_products_list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px var(--background_color_2);
  border-radius: 10px;
}
.order_products_list::-webkit-scrollbar-thumb {
  background: linear-gradient(125deg, #ffffff, var(--color_shopping_cart));
  border-radius: 10px;
}
.order_products_list_item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid var(--background_color_2);
  padding: 0px 5px;
  overflow-x: auto;
}
.order_products_list_item::-webkit-scrollbar {
  background: var(--background_color_1);
  width: 6px;
  max-height: 8px;
}
.order_products_list_item::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px var(--background_color_2);
  border-radius: 10px;
}
.order_products_list_item::-webkit-scrollbar-thumb {
  background: linear-gradient(125deg, #ffffff, var(--color_shopping_cart));
  border-radius: 10px;
}
.order_products_list_item .photo {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.order_products_list_item .photo img {
  max-width: 50px;
  max-height: 50px;
}
.order_products_list_item .name {
  max-width: 180px;
  width: 100%;
}
.order-text {
  color: var(--color_text);
  font-size: 14px;
}
.unidades {
  color: var(--color_text);
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
  background-color: var(--color_shopping_cart);
  color: #fff;
}
.order-combincacion-text {
  text-align: center;
  color: white;
  font-size: 10px;
}
.price {
  color: var(--color_shopping_cart);
  font-size: 16px;
}
.order_products_list_item .material-icons.delete {
  cursor: pointer;
  color: var(--color_icon);
  transition: 0.3s;
}
.order_products_list_item:hover .material-icons.delete {
  color: var(--color_hover_text);
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
  color: var(--color_text);
}
.order_total {
  border-top: 1px solid var(--background_color_2);
  padding: 0 5px;
  margin-bottom: 10px;
}
.order_total_domicile,
.order_total_net {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}
.order_total_domicile p {
  color: var(--color_text);
  font-weight: 300;
  font-size: 14px;
}
.text-color {
  color: var(--color_text);
}
.scroll_cart_summary_items_cities {
  color: var(--color_text);
  overflow-y: auto;
  max-height: 150px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar {
  background: var(--background_color_1);
  width: 4px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px var(--background_color_2);
  border-radius: 10px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar-thumb {
  background: linear-gradient(125deg, #ffffff, var(--color_shopping_cart));
  border-radius: 10px;
}
.without_shipping_cost {
  color: var(--main_color);
  font-size: 13px;
}
.order_total_net p {
  color: var(--color_text);
  font-weight: bold;
}
.p_button {
  justify-self: center;
  width: 80%;
  height: 40px;
  border-style: none;
  background: var(--color_shopping_cart);
  border-radius: 25px;
  display: inline-block;
  padding: 0 20px;
  color: var(--color_text);
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  flex: none;
  transition: 0.3s;
}
.p_button:hover {
  opacity: 0.8;
}
.Quotation-message {
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  border-style: none;
  background-color: transparent;
  padding: 8px 10px;
  width: 100%;
  max-width: 280px;
  color: var(--color_text);
  border-radius: 25px;
  font-size: 14px;
  letter-spacing: 1px;
  outline: none;
  flex: none;
}
.continue_shopping {
  margin-top: 10px;
  justify-self: center;
  border-style: none;
  background-color: transparent;
  padding: 8px 10px;
  width: 100%;
  max-width: 280px;
  border-radius: var(--radius_btn);
  color: var(--color_text_btn);
  border: solid 2px var(--color_border_btn);
  background-color: var(--color_background_btn);
  border-radius: 25px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  flex: none;
  transition: all ease 0.3s;
}
.continue_shopping:hover {
  border: solid 2px var(--btnhover);
  background-color: var(--btnhover);
}
.conten-btn {
  display: flex;
  width: 100%;
  justify-content: center;
}
.continue_shopping2 {
  margin-top: 10px;
  font-weight: bold;
  justify-self: center;
  border-style: none;
  background-color: transparent;
  padding: 8px 10px;
  width: 100%;
  max-width: 280px;
  color: var(--color_shopping_cart);
  border: 2px solid var(--color_shopping_cart);
  border-radius: 25px;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  flex: none;
  transition: all ease 0.3s;
}
.continue_shopping2:hover {
  color: var(--color_hover_text);
  border: 2px solid var(--color_hover_text);
}
.wrapper_photo {
  position: relative;
  display: flex;
  justify-content: center;
  align-self: center;
}
.photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}
.text-cart-empty {
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
</style>
