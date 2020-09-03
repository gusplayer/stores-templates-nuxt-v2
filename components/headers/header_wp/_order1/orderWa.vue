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
                    <window-close-icon
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
                        rangosByCiudad.envio_metodo === 'gratis' &&
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
                  @click="redirectWP"
                >
                  <whatsapp-icon class="wp-icon" />Finalizar compra
                </button>
                <nuxt-link class="conten-btn" to="/wa" @click="closeOrder">
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
import idCloudinary from '../../../../mixins/idCloudinary'

export default {
  mixins: [idCloudinary],
  name: 'koOrder1-cart',
  props: {
    dataStore: Object,
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
      let baseUrlPc = 'https://web.whatsapp.com/send?phone=57'
      let urlProduct
      if (this.dataStore.tienda.dominio) {
        urlProduct = `${this.dataStore.tienda.dominio}wa`
      } else {
        urlProduct = `http://${this.dataStore.tienda.subdominio}.komercia.store/wa`
      }
      let productosCart = {}
      this.$store.state.productsCart.map((element) => {
        if (element.nombre && element.precio) {
          Object.assign(productosCart, {
            [element.nombre]: element.precio,
          })
        }
      })
      let productString = JSON.stringify(productosCart)
      let productList = productString.replace(/[{}"]/g, '')
      let resultproductList = productList.replace(/,/g, '%0A')

      let text = `Hola%20%F0%9F%98%80%2C%20%0Aestoy%20finalizando%20una%20compra%20en%20tu%20tienda%0A${urlProduct}%0ATu%20orden%3A%0A%20%0A${resultproductList}%0A%0ATotal%3A%20${this.totalCart}%0A`
      if (this.dataStore.tienda.whatsapp.length > 10) {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp
        if (phone_number_whatsapp.charAt(0) === '+') {
          phone_number_whatsapp = phone_number_whatsapp.slice(1)
        }
        if (this.mobileCheck()) {
          window.open(
            `${baseUrlMovil}${phone_number_whatsapp}&text=${text}`,
            '_blank'
          )
        } else {
          window.open(
            `${baseUrlPc}${phone_number_whatsapp}&text=${text}`,
            '_blank'
          )
        }
      } else {
        if (this.mobileCheck()) {
          window.open(
            `${baseUrlMovil}${this.dataStore.tienda.whatsapp}&text=${text}`,
            '_blank'
          )
        } else {
          window.open(
            `${baseUrlPc}${this.dataStore.tienda.whatsapp}&text=${text}`,
            '_blank'
          )
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
  background-color: white;
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
  border-bottom: 1px solid rgba(112, 112, 117, 0.322);
  padding: 10px 30px;
  flex: none;
}
.order_header_close {
  font-size: 30px;
  color: #25d366;
  cursor: pointer;
}
.order_header_close:hover {
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
  background: transparent;
  width: 6px;
}
.order_products_list::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 10px rgba(112, 112, 117, 0.322); */
  border-radius: 10px;
}
.order_products_list::-webkit-scrollbar-thumb {
  background: linear-gradient(125deg, #2de470, #25d366);
  border-radius: 10px;
}
.order_products_list_item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid rgba(112, 112, 117, 0.322);
  padding: 10px 30px;
  overflow-x: auto;
}
.order_products_list_item::-webkit-scrollbar {
  background: transparent;
  width: 6px;
  max-height: 8px;
}
.order_products_list_item::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 10px rgba(112, 112, 117, 0.322); */
  border-radius: 10px;
}
.order_products_list_item::-webkit-scrollbar-thumb {
  background: linear-gradient(125deg, #2de470, #25d366);
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
  color: black;
  font-size: 14px;
}
.unidades {
  color: black;
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
  background-color: #25d366;
  color: #fff;
}
.order-combincacion-text {
  text-align: center;
  color: white;
  font-size: 10px;
}
.price {
  min-width: 60px;
  color: var(--color_subtext);
  font-size: 16px;
}
.order_products_list_item .material-icons.delete {
  height: 17px;
  cursor: pointer;
  color: #25d366;
  transition: 0.3s;
}
.order_products_list_item:hover .material-icons.delete {
  color: grey;
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
  color: black;
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
  color: black;
  font-weight: 300;
  font-size: 14px;
  cursor: pointer;
  transition: all ease 0.3s;
}
.remove-cart:hover {
  color: grey;
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
  padding: 20px;
  text-align: center;
  color: black;
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
  background-color: rgb(35, 100, 165);
  padding: 4px 10px;
  width: 100%;
  max-width: 70px;
  color: white;
  border: 2px solid rgb(35, 100, 165);
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  transition: all ease 0.3s;
}
.btn-remover-yes:hover {
  background-color: grey;
  border: 2px solid grey;
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
  color: #25d366;
  border: 2px solid #25d366;
}
.order_total {
  border-top: 1px solid rgba(112, 112, 117, 0.322);
  padding: 0 30px;
}
.order_total_domicile,
.order_total_net {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.order_total_domicile p {
  color: black;
  font-weight: 300;
  font-size: 14px;
}
.text-color {
  color: black;
}
.scroll_cart_summary_items_cities {
  color: black;
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
  /* box-shadow: inset 0 0 10px rgba(112, 112, 117, 0.322); */
  border-radius: 10px;
}
.scroll_cart_summary_items_cities::-webkit-scrollbar-thumb {
  background: linear-gradient(125deg, #2de470, #25d366);
  border-radius: 10px;
}
.without_shipping_cost {
  color: var(--main_color);
  font-size: 13px;
}
.order_total_net p {
  color: black;
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
  color: black;
  font-size: 14px;
  letter-spacing: 1px;
  outline: none;
  flex: none;
}
.continue_shopping {
  color: white;
  border-radius: 5px;
  border: solid 1px black;
  background-color: black;
  font-size: 14px;
  padding: 8px 10px;
  width: 100%;
  height: 41px;
  max-width: 340px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  transition: all ease 0.3s;
}
.continue_shopping:hover {
  border: solid 2px grey;
  background-color: grey;
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
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  flex: none;
  transition: all ease 0.3s;
}
.continue_shopping2:hover {
  color: grey;
  border: 2px solid grey;
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
  background-color: rgba(87, 87, 87, 0.1);
}
details[open] summary ~ * {
  animation: sweep 0.5s ease-in-out;
}
.wp-icon {
  font-size: 30px;
  bottom: 4px;
  margin-right: 5px;
}
</style>
