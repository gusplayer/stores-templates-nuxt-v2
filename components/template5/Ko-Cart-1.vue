<template>
  <div class="wrapper-cart" ref="color" :style="settingByTemplate">
    <div class="contenedor" v-if="this.productsCart.length">
      <ul class="products_list">
        <li
          v-for="(product, index) in productsCart"
          :key="index"
          class="wrapper_item"
        >
          <div class="content_product_items">
            <div class="wrapper_item_photo">
              <img
                :src="setFoto(product)"
                class="products_item_photo"
                :alt="product.nombre"
              />
            </div>
            <div class="products_item_name">
              <p class="text-name">{{ product.nombre | capitalize }}</p>
            </div>
            <div class="products_item_details">
              <div class="content_variant">
                <p class="text-tittle">Variante:</p>
                <el-tag
                  v-for="(item, items) in product.combinacion"
                  :key="items"
                  class="text-variant"
                  style="margin-top: 3px;"
                >
                  {{ item }}
                </el-tag>
              </div>
              <div class="wrapper_quantity">
                <p class="text-tittle">Cantidad:</p>
                <div class="content_items_quantity">
                  <div class="quantity">
                    <button
                      class="quantity_remove"
                      v-on:click="removeQuantity(product)"
                    >
                      <menos-icon class="icon" />
                    </button>
                    <p class="quantity_value">{{ product.cantidad }}</p>
                    <button
                      class="quantity_add"
                      v-on:click="addQuantity(product)"
                    >
                      <mas-icon class="icon" />
                    </button>
                  </div>
                  <div
                    class="container-alert"
                    v-if="product.cantidad == product.limitQuantity"
                  >
                    <span class="alert">
                      última Unidad!
                      <div class="arrow"></div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="content_price">
              <div>
                <p class="text-tittle">Precio:</p>
                <p class="text-result">{{ product.precio | currency }}</p>
              </div>
              <div>
                <p class="text-tittle">Total:</p>
                <p class="text-result">
                  {{ (product.precio * product.cantidad) | currency }}
                </p>
              </div>
            </div>
            <div class="content_icon">
              <a v-on:click="deleteItemCart(index)">
                <window-close-icon class="cart-icon" />
              </a>
            </div>
          </div>
        </li>
        <div class="line"></div>
      </ul>
      <ul class="products_list_resposive">
        <li
          v-for="(product, index) in productsCart"
          :key="index"
          class="wrapper_item"
        >
          <div class="content_details">
            <div class="wrapper_item_photo">
              <img
                :src="setFoto(product)"
                class="products_item_photo"
                :alt="product.nombre"
              />
            </div>
            <div class="content_items_details">
              <div>
                <div class="wrapper_producto_tittle">
                  <p class="text-name">{{ product.nombre }}</p>
                </div>
                <div>
                  <div class="content_price">
                    <div>
                      <p class="text-tittle">Precio:</p>
                      <p class="text-result">{{ product.precio | currency }}</p>
                    </div>
                  </div>
                  <div class="content_variant" v-if="product.combinacion">
                    <p class="text-tittle">Variante:</p>
                    <el-tag
                      v-for="(item, items) in product.combinacion"
                      :key="items"
                      class="text-variant"
                      style="margin-top: 3px;"
                    >
                      {{ item }}
                    </el-tag>
                  </div>
                </div>
              </div>
              <div>
                <div class="content_icon">
                  <a v-on:click="deleteItemCart(index)">
                    <window-close-icon class="cart-icon" />
                  </a>
                </div>
                <div class="products_item_details">
                  <div class="wrapper_quantity">
                    <div
                      class="container-alert"
                      v-if="product.cantidad == product.limitQuantity"
                    >
                      <span class="alert">
                        última Unidad!
                        <div class="arrow"></div>
                      </span>
                    </div>
                    <div class="quantity">
                      <button
                        class="quantity_remove"
                        v-on:click="removeQuantity(product)"
                      >
                        <menos-icon class="icon" />
                      </button>
                      <p class="quantity_value">{{ product.cantidad }}</p>
                      <button
                        class="quantity_add"
                        v-on:click="addQuantity(product)"
                      >
                        <mas-icon class="icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <div class="line"></div>
      </ul>
      <div class="wrapper_cart_summary">
        <div class="content_cart_summary">
          <div class="content_tittle">
            <p class="text">RESUMEN</p>
          </div>
          <div class="cart_summary_body">
            <span class="cart_summary_items">
              <p class="cart_summary_tittle">Subtotal:</p>
              <p class="cart_summary_price">{{ totalCart | currency }}</p>
            </span>
            <span class="order_total">
              <span class="order_total_domicile">
                <p class="cart_summary_tittle">Costo domicilio:</p>
                <details
                  v-if="
                    rangosByCiudad.envio_metodo === 'precio_ciudad' &&
                    shippingCities.length > 0 &&
                    getFreeShipping == false
                  "
                >
                  <summary class="cart_summary_price">Valor por Ciudad</summary>
                  <ol class="scroll_cart_summary_items_cities">
                    <li
                      v-for="(ciudad, index) in rangosByCiudad.rangos"
                      :key="ciudad.id"
                      class="cart_summary_items_cities"
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
                </details>
                <div
                  v-else-if="
                    rangosByCiudad.envio_metodo === 'tarifa_plana' &&
                    shipping > 0 &&
                    getFreeShipping == true
                  "
                >
                  <li class="cart_summary_price">
                    Tarifa plana: {{ rangosByCiudades.valor | currency }}
                  </li>
                </div>
                <div
                  v-else-if="
                    rangosByCiudad.envio_metodo === 'precio' &&
                    getFreeShipping == true
                  "
                >
                  <section>
                    <ol class="scroll_cart_summary_items_cities">
                      <li
                        v-for="(ciudad, indexRangos) in rangosByCiudad.rangos"
                        :key="indexRangos"
                        class="cart_summary_price"
                      >
                        <b> {{ ciudad.inicial }} - {{ ciudad.final }}: </b>
                        {{ ciudad.precio | currency }}
                      </li>
                    </ol>
                  </section>
                </div>
                <p v-else-if="shipping && getFreeShipping == false">
                  {{ shipping | currency }}
                </p>
                <p
                  class="cart_summary_price"
                  v-if="
                    rangosByCiudad.envio_metodo === 'gratis' ||
                    (shippingCities.length <= 0 && getFreeShipping == false)
                  "
                >
                  Envío gratis en toda la tienda
                </p>
              </span>
            </span>
            <div class="line"></div>
            <div class="message-responsive">
              <p class="Quotation-message" v-if="isQuotation()">
                Contacte con la tienda para saber los precios de los productos
              </p>
            </div>
            <div class="wrapper_btn">
              <span class="cart_summary_items">
                <p class="cart_summary_tittle">Total a pagar:</p>
                <p class="cart_summary_price">
                  {{
                    (totalCart + (getFreeShipping ? 0 : shipping)) | currency
                  }}
                </p>
              </span>
              <p class="Quotation-message" v-if="isQuotation()">
                Contacte con la tienda para saber los precios de los productos
              </p>
              <p class="Quotation-message" v-if="dataStore.tienda.estado == 0">
                Tienda cerrada
              </p>
              <button
                ref="colorBtn"
                class="btn1"
                @click="GoPayments"
                v-if="!isQuotation() && dataStore.tienda.estado == 1"
              >
                Finalizar compra
              </button>
              <nuxt-link to="/" class="btn2">Seguir comprando</nuxt-link>
            </div>
            <div class="wrapper_btn_responsive">
              <span class="cart_summary_items">
                <p class="cart_summary_tittle">Total a pagar:</p>
                <p class="cart_summary_price">
                  {{
                    (totalCart + (getFreeShipping ? 0 : shipping)) | currency
                  }}
                </p>
              </span>
              <div class="content-btn">
                <button ref="colorBtn" class="btn2">Seguir comprando</button>
                <button
                  ref="colorBtn2"
                  class="btn1"
                  @click="GoPayments"
                  v-if="!isQuotation()"
                >
                  Finalizar compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="contenedor-vacio">
      <div class="wrapper_photo">
        <img :src="img" class="photo" />
      </div>
      <p>Tu carrito de compras ahora está vacío.</p>

      <nuxt-link to="/">
        <button ref="colorBtn" class="btn3">Agregar productos</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-Cart-1',
  props: {
    settingByTemplate: Object,
  },
  mounted() {
    this.$store.dispatch('GET_SHOPPING_CART')
    this.$store.dispatch('GET_CITIES')
    if (this.rangosByCiudad.envio_metodo === 'precio_ciudad') {
      this.filterCities()
    }
    this.$store.commit('CALCULATE_TOTALCART')
  },
  data() {
    return {
      img:
        'https://res.cloudinary.com/komerciaacademico/image/upload/v1583535445/komerciaAcademico/CARRITO_y2lbh6.png',

      envioProducto: '',
      layoutLogin: true,
      shippingCities: [],
      rangosByCiudades: [],
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
    setFoto(product) {
      return product.foto_cloudinary
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
.wrapper-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--background_color_2);
  box-sizing: border-box;
  flex-direction: column;
  padding-bottom: 10px;
}
.contenedor {
  display: flex;
  width: 100%;
  max-width: 1300px;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px 30px 20px;
}
.line {
  border-top: 1px solid var(--color_border);
  width: 100%;
}
.products_list {
  width: 100%;
  display: grid;
  margin-right: 10px;
}
.wrapper_item {
  width: 100%;
  display: flex;
  background-color: var(--background_color_2);
  padding: 20px 0px;
  border-top: 1px solid var(--color_border);
}
.content_product_items {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.wrapper_item_photo {
  position: relative;
  max-width: 150px;
  max-height: 150px;
}
.products_item_photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}
.products_item_name {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 2;
  margin-left: 10px;
}
.text-name {
  font-weight: bold;
  font-size: 18px;
  color: var(--color_text);
}
.products_item_details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 2;
}
.wrapper_quantity {
  display: flex;
  flex-direction: column;
}
.content_variant {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
.text-variant {
  font-size: 12px;
  color: var(--color_text);
}
.text-result {
  font-size: 14px;
  font-weight: bold;
  color: var(--color_text);
}
.text-tittle {
  font-size: 14px;
  font-weight: bold;
  color: var(--color_subtext);
}
.content_items_quantity {
  display: flex;
  flex-direction: row;
}
.quantity {
  display: flex;
  flex-direction: row;
}
.quantity_remove {
  border: 2px var(--color_border);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-style: solid;
  background: var(--background_color_2);
  height: 41px;
  width: 3em;
  box-sizing: border-box;
}
.quantity_value {
  font-size: 1em;
  color: var(--color_text);
  border: 2px var(--color_border);
  padding-left: 10px;
  padding-right: 10px;
  border-style: solid none solid none;
  background: var(--background_color_2);
  height: 41px;
  width: 2.5em;
  justify-content: center;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.quantity_add {
  border: 2px var(--color_border);
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-style: solid;
  background: var(--background_color_2);
  height: 41px;
  width: 3em;
  box-sizing: border-box;
}
.icon {
  font-size: 16px;
  color: var(--color_border);
  transition: all 200ms ease-in;
}
.icon:hover {
  color: var(--color_text);
}
.container-alert {
  background-color: rgb(250, 232, 75);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: black;
  margin-left: 10px;
}
.alert {
  text-align: center;
  padding: 5px 5px;
  text-transform: capitalize;
}
.content_price {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
}
.content_icon {
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: flex-end;
}
.cart-icon {
  font-size: 23px;
  color: var(--color_text);
  cursor: pointer;
  margin-right: 10px;
}
.cart-icon:hover {
  font-size: 24px;
  color: var(--color_subtext);
}
.cart-icon > .material-design-icon__svg {
  bottom: 0em;
}
.wrapper_cart_summary {
  display: flex;
  flex: 1;
  width: 100%;
  border-bottom: 1px solid var(--colorBorder);
  margin-top: 5px;
}
.content_cart_summary {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
}
.content_tittle {
  display: flex;
  flex: 2;
  flex-direction: column;
  width: 100%;
}
.cart_summary_body {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  margin-left: 145px;
}
.cart_summary_items {
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.text {
  font-weight: bold;
  font-size: 18px;
  color: var(--color_text);
}
.cart_summary_tittle {
  font-size: 14px;
  font-weight: bold;
  color: var(--color_subtext);
}
.scroll_cart_summary_items_cities {
  overflow-y: auto;
  height: 100%;
  max-height: 150px;
}
::-webkit-scrollbar {
  background: transparent;
  width: 5px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px var(--color_border);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(125deg, #e6e6e6, var(--color_text));
  border-radius: 10px;
}
.cart_summary_price {
  font-size: 14px;
  font-weight: bold;
  color: var(--color_text);
}
.cart_summary_items_cities {
  font-size: 14px;
  font-weight: bold;
  color: var(--color_text);
}
.order_total_domicile,
.order_total_net {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}
.wrapper_btn {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.message-responsive {
  display: none;
}
.Quotation-message {
  color: var(--color_text_btn);
  padding: 8px 12px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
}
.btn1 {
  border-radius: var(--radius_btn);
  color: var(--color_text_btn);
  border: solid 2px var(--color_background_btn);
  background-color: var(--color_background_btn);
  padding: 8px 12px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: all 200ms ease-in;
}
.btn1:hover {
  border: solid 2px var(--btnhover);
  background-color: var(--btnhover);
}
.btn2 {
  border-radius: var(--radius_btn);
  color: var(--color_background_btn);
  border: solid 2px var(--color_background_btn);
  background-color: transparent;
  padding: 8px 0px;
  text-align: center;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: all 200ms ease-in;
}
.btn2:hover {
  color: var(--btnhover);
  border: solid 2px var(--btnhover);
}
.contenedor-vacio {
  display: flex;
  width: 100%;
  height: calc(100vh - 345px - 88px);
  max-width: 1300px;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  justify-content: center;
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
.products_list_resposive {
  display: none;
}
.wrapper_btn_responsive {
  display: none;
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
@media (max-width: 500px) {
  .contenedor {
    padding: 10px 10px;
  }
  .products_list_resposive {
    width: 100%;
    display: grid;
  }
  .products_list {
    display: none;
  }
  .wrapper_item {
    padding: 10px 5px;
  }
  .content_details {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .wrapper_item_photo {
    position: relative;
    max-width: 90px;
    max-height: 90px;
  }
  .products_item_photo {
    width: 90px;
    height: 90px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }
  .content_items_details {
    display: flex;
    width: 100%;
    flex-direction: row;
  }
  .content_items_details > div:nth-child(1) {
    width: 100%;
    flex: 2;
  }
  .content_items_details > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    flex: 1;
  }
  .wrapper_producto_tittle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-left: 10px;
  }
  .content_price {
    margin-left: 10px;
    align-items: flex-start;
  }
  .text-name,
  .text-tittle,
  .text-result {
    font-size: 13px;
  }

  .products_item_details {
    flex: 1;
  }
  .wrapper_quantity {
    margin-top: 5px;
  }
  .content_cart_summary {
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  }
  .cart_summary_body {
    margin-left: 0px;
  }
  .cart_summary_items {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
  .cart_summary_tittle {
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .cart_summary_price {
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .btn {
    margin-top: 5px;
  }
  .line {
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .quantity_remove {
    height: 41px;
    width: 2.8em;
  }
  .quantity_value {
    height: 41px;
    width: 2.3em;
  }
  .quantity_add {
    height: 41px;
    width: 2.8em;
  }
  .container-alert {
    font-size: 12px;
    margin-left: 0px;
  }
  .alert {
    text-align: center;
    padding: 2px 2px;
    text-transform: capitalize;
  }
  .wrapper_btn {
    display: none;
  }
  .wrapper_btn_responsive {
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 30px 20px rgba(96, 125, 139, 0.068);
    background-color: var(--background_color_1);
    z-index: 3;
    flex-direction: column;
    padding: 5px 10px;
  }
  .content-btn {
    display: flex;
    width: 100%;
    flex-direction: row;
  }
  .content-btn > button:nth-child(2) {
    margin-left: 8px;
  }
  .message-responsive {
    display: initial;
  }
}
</style>
