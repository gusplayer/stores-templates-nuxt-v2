<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-show="openOrder">
      <div class="order_content">
        <div class="order_header">
          <h3>Tu orden</h3>
          <label
            for="order_close"
            @click="closeOrder"
            class="order_header_close"
          >
            <close-icon />
          </label>
        </div>
        <transition name="slide">
          <template>
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
                        :src="idCloudinary(product.foto_cloudinary, 100, 100)"
                        alt="Product Img"
                      />
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
                    <boteBasura-icon
                      class="material-icons delete"
                      v-on:click="deleteItemCart(index)"
                    />
                  </li>
                </ul>
              </div>
              <div v-if="productsCart.length" class="content-remove-cart">
                <p class="remove-cart" @click="remove = !remove">
                  Vaciar carrito de compras
                </p>
              </div>
              <template v-if="productsCart.length">
                <div class="order_total">
                  <span class="order_total_domicile">
                    <p style="font-weight: bold; font-size: 16px;">
                      Costo domicilio
                    </p>
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
                            <div v-if="ciudad.price > 0">
                              <b>
                                {{
                                  shippingCities[index].nombre_ciu ===
                                  'Sin especificar'
                                    ? 'Resto del país'
                                    : shippingCities[index].nombre_ciu
                                }}:
                              </b>
                              {{ ciudad.price | currency }}
                            </div>
                          </li>
                        </ol>
                      </section>
                    </details>
                    <div
                      v-else-if="
                        rangosByCiudad.envio_metodo === 'tarifa_plana' &&
                        shipping > 0 &&
                        getFreeShipping == true
                      "
                    >
                      <li class="text-color">
                        Tarifa plana: {{ rangosByCiudades.valor | currency }}
                      </li>
                    </div>
                    <details
                      v-else-if="
                        rangosByCiudad.envio_metodo === 'precio' &&
                        getFreeShipping == true
                      "
                    >
                      <summary class="text-color">Tarifa por precio:</summary>
                      <section>
                        <ol class="scroll_cart_summary_items_cities">
                          <li
                            v-for="(ciudad,
                            indexRangos) in rangosByCiudad.rangos"
                            :key="indexRangos"
                          >
                            <div>
                              <b>
                                {{ ciudad.inicial }} - {{ ciudad.final }}:
                              </b>
                              {{ ciudad.precio | currency }}
                            </div>
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
                        (shippingCities.length <= 0 && getFreeShipping == false)
                      "
                    >
                      Envío gratis en toda la tienda
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
                <div class="order_products_list-empty">
                  <div class="wrapper_photo">
                    <img :src="img" class="photo" alt="empty car" />
                  </div>
                  <p class="text-cart-empty">
                    Tu carrito de compras ahora está vacío.
                  </p>
                </div>
              </template>
              <div class="content-button">
                <p class="Quotation-message" v-if="isQuotation()">
                  Contacte con la tienda para saber los precios de los productos
                </p>
                <p
                  class="Quotation-message"
                  v-if="dataStore.tienda.estado == 0"
                >
                  Tienda cerrada
                </p>
                <button
                  v-if="
                    productsCart.length &&
                    !isQuotation() &&
                    dataStore.tienda.estado == 1
                  "
                  class="continue_shopping"
                  @click="GoPayments"
                >
                  Finalizar compra
                </button>
                <nuxt-link class="conten-btn" to="/ig" @click="closeOrder">
                  <button class="continue_shopping2">
                    Seguir comprando
                  </button>
                </nuxt-link>
              </div>
            </div>
          </template>
        </transition>
      </div>
      <div class="wrapper-items-remove" v-if="remove">
        <div class="content-items-remove">
          <p class="text-remove">
            ¿Realmente quiere eliminar todos los productos del carrito?
          </p>
          <div class="content-btn-remove">
            <button @click="remove = !remove" class="btn-remover-no">
              No
            </button>
            <button class="btn-remover-yes" @click="removeCartItems">
              Si
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import idCloudinary from '../../../../mixins/idCloudinary'

export default {
  mixins: [idCloudinary],
  name: 'koOrder1',
  props: {
    dataStore: Object,
  },
  mounted() {
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
      remove: false,
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
    removeCartItems() {
      this.remove = false
      location.reload(true)
      this.$store.commit('DELETEALLITEMSCART')
      this.$store.commit('UPDATE_CONTENTCART')
    },
    closeOrder(event) {
      const element = event.target.className
      if (
        element === 'order' ||
        element === 'order_header_close' ||
        element === 'continue_shopping' ||
        element === 'continue_shopping2' ||
        element.animVal === 'material-design-icon__svg' ||
        element.baseVal === 'material-design-icon__svg' ||
        element.animVal === '' ||
        element.baseVal === ''
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
  z-index: 10;
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
  padding: 10px 30px;
  flex: none;
}
.order_header_close {
  font-size: 30px;
  color: black;
  transition: 0.3s;
  cursor: pointer;
}
.order_header_close:hover {
  transform: rotate(90deg);
  color: gray;
}

.order--wrapper {
  display: grid;
  overflow-y: auto;
}
.order_products_list-empty {
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.order_products_list {
  max-height: 380px;
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
  background: linear-gradient(125deg, #e6e6e6, var(--color_shopping_cart));
  border-radius: 10px;
}
.order_products_list_item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid var(--background_color_2);
  padding: 10px 30px;
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
  background: linear-gradient(125deg, #e6e6e6, var(--color_shopping_cart));
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
  max-width: 190px;
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
  min-width: 60px;
  color: var(--color_shopping_cart);
  font-size: 16px;
}
.order_products_list_item .material-icons.delete {
  height: 17px;
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
.content-remove-cart {
  width: 100%;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.remove-cart {
  color: var(--color_text);
  font-weight: 300;
  font-size: 14px;
  cursor: pointer;
  transition: all ease 0.3s;
}
.remove-cart:hover {
  color: var(--btnhover);
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
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: var(--color_text);
  font-weight: 300;
  font-size: 16px;
}
.content-btn-remove {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
.btn-remover-yes {
  font-weight: bold;
  border-style: none;
  background-color: var(--color_shopping_cart);
  padding: 4px 10px;
  width: 100%;
  max-width: 70px;
  color: var(--color_text_btn);
  border: 2px solid var(--color_shopping_cart);
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  transition: all ease 0.3s;
}
.btn-remover-yes:hover {
  background-color: var(--btnhover);
  color: var(--color_text_btn);
  border: 2px solid var(--btnhover);
}
.btn-remover-no {
  font-weight: bold;
  border-style: none;
  background-color: transparent;
  padding: 4px 10px;
  width: 100%;
  max-width: 80px;
  color: var(--btnhover);
  border: 2px solid var(--btnhover);
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  transition: all ease 0.3s;
}
.btn-remover-no:hover {
  color: var(--color_shopping_cart);
  border: 2px solid var(--color_shopping_cart);
}
.order_total {
  border-top: 1px solid var(--background_color_2);
  padding: 0 30px;
}
.order_total_domicile,
.order_total_net {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
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
  display: flex;
  flex-direction: column;
  max-width: 230px;
}
.scroll_cart_summary_items_cities li {
  margin-right: 5px;
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
  background: linear-gradient(125deg, #e6e6e6, var(--color_shopping_cart));
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
  max-width: 340px;
  border-radius: var(--radius_btn);
  color: var(--color_text_btn);
  border: solid 2px var(--color_border_btn);
  background-color: var(--color_background_btn);
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
  max-width: 340px;
  color: var(--color_shopping_cart);
  border: 2px solid var(--color_shopping_cart);
  border-radius: var(--radius_btn);
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
</style>
