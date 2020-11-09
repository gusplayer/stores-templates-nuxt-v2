<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-show="openOrder">
      <div class="order_content">
        <div class="order_header">
          <h3>{{ $t('footer_title') }}</h3>
          <div @click="closedOder" class="order_header_close">
            <close-icon />
          </div>
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
                      <p class="order-text">
                        {{ product.nombre | capitalize }}
                      </p>
                      <span>
                        <b class="unidades">{{ product.cantidad }}</b>
                        <b class="unidades"
                          >X
                          {{
                            product.precio
                              | currency(
                                dataStore.tienda.codigo_pais,
                                dataStore.tienda.moneda
                              )
                          }}
                        </b>
                      </span>
                      <div v-if="product.combinacion">
                        <el-tag
                          v-for="(productCombinacion,
                          index2) in product.combinacion"
                          :key="index2"
                          >{{ productCombinacion | capitalize }}</el-tag
                        >
                      </div>
                    </div>
                    <div v-if="product.precio > 0">
                      <div class="price">
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
                    </div>
                    <boteBasura-icon
                      class="icon-delete"
                      v-on:click="deleteItemCart(index)"
                    />
                  </li>
                </ul>
              </div>
              <template v-if="productsCart.length">
                <div class="order_total">
                  <span class="order_total_domicile">
                    <p
                      class="without_shipping_cost"
                      v-if="
                        rangosByCiudad.envio_metodo === 'gratis' &&
                        (shippingCities.length <= 0 && getFreeShipping == false)
                      "
                    >
                      {{ $t('footer_encioGratis') }}
                    </p>
                  </span>
                  <span class="order_total_net">
                    <p>{{ $t('footer_totalPagar') }}</p>
                    <p>
                      {{
                        (totalCart + (getFreeShipping ? 0 : shipping))
                          | currency(
                            dataStore.tienda.codigo_pais,
                            dataStore.tienda.moneda
                          )
                      }}
                    </p>
                  </span>
                </div>
              </template>
              <template v-else>
                <div class="order_products_list-empty">
                  <div class="wrapper_photo">
                    <img
                      src="../../../../assets/img/empty-cart.png"
                      class="photo-carrito"
                      alt="empty car"
                    />
                  </div>
                  <br />
                  <p class="text-cart-empty">
                    {{ $t('footer_carritoVacio') }}
                  </p>
                </div>
              </template>
              <div class="content-button">
                <p class="Quotation-message" v-if="isQuotation()">
                  {{ $t('footer_contactoMgs') }}
                </p>
                <p
                  class="Quotation-message"
                  v-if="dataStore.tienda.estado == 0"
                >
                  {{ $t('footer_tiendaCerrada') }}
                </p>
                <p
                  class="Quotation-message"
                  v-if="dataStore.tienda.whatsapp == ''"
                >
                  {{ $t('footer_noTieneWhatsapp') }}
                </p>
                <button
                  v-if="
                    productsCart.length &&
                    !isQuotation() &&
                    dataStore.tienda.estado == 1 &&
                    dataStore.tienda.pais == 'Colombia'
                  "
                  class="continue_shopping2"
                  @click="GoPayments"
                >
                  {{ $t('footer_pagarOnline') }}
                </button>
                <button
                  v-if="
                    productsCart.length &&
                    !isQuotation() &&
                    dataStore.tienda.estado == 1 &&
                    dataStore.tienda.whatsapp
                  "
                  class="continue_shopping"
                  @click="formOrden = !formOrden"
                >
                  <whatsapp-icon class="wp-icon" />
                  {{ $t('footer_pedidoWhatsapp') }}
                </button>
              </div>
            </div>
          </template>
        </transition>
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
                  v-model="nombre"
                  class="input-text"
                  :placeholder="$t('footer_formNombreMgs')"
                  id="ContactName"
                />
                <span class="text-error" v-show="errors[0]">
                  {{ errors[0] }}
                </span>
              </template>
            </validation-provider>
            <P class="form-subtext"> {{ $t('footer_formCiudad') }}</P>
            <validation-provider
              name="ciudad"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  class="input-text"
                  name="ciudad"
                  :placeholder="$t('footer_formCiudadMgs')"
                  v-model="ciudad"
                />
                <span class="text-error" v-show="errors[0]">
                  {{ errors[0] }}
                </span>
              </template>
            </validation-provider>
            <P class="form-subtext"> {{ $t('footer_formBarrio') }}</P>
            <validation-provider
              name="barrio"
              rules="required"
              class="content-input"
            >
              <template slot-scope="{ errors }">
                <input
                  class="input-text"
                  name="barrio"
                  :placeholder="$t('footer_formBarrioMgs')"
                  v-model="barrio"
                />
                <span class="text-error" v-show="errors[0]">
                  {{ errors[0] }}
                </span>
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
                  v-model="dirreccion"
                />
                <span class="text-error" v-show="errors[0]">
                  {{ errors[0] }}
                </span>
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
          v-on:click.prevent="redirectWP()"
          style="margin-top: 15px;"
        >
          <whatsapp-icon class="wp-icon" /> {{ $t('footer_ordenFormbtn') }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import idCloudinary from '../../../../mixins/idCloudinary'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  mixins: [idCloudinary],
  name: 'koOrder1-cart',
  props: {
    dataStore: Object,
  },
  components: {
    ValidationObserver,
    ValidationProvider,
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
      formOrden: false,
      nombre: '',
      numberphone: '',
      ciudad: '',
      barrio: '',
      dirreccion: '',
      productIndexCart: null,
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
      if (element === 'order' || element === 'continue_shopping2') {
        this.$store.commit('SET_OPENORDER', false)
      }
    },
    closedOder() {
      this.$store.commit('SET_OPENORDER', false)
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
    GoPayments() {
      let objeto = {}
      objeto = JSON.parse(JSON.stringify(this.productsCart))

      objeto.map((element) => {
        if (element.id) {
          delete element.envio_gratis
          delete element.foto_cloudinary
          delete element.limitQuantity
          delete element.nombre
          delete element.precio
        }
      })
      let json = {
        products: objeto,
        tienda: {
          id: this.$store.state.tienda.id_tienda,
        },
      }
      json = JSON.stringify(json)
      if (this.$store.state.productsCart.length != 0) {
        if (this.layourUnicentro == true) {
          window.open(`https://checkout.komercia.co/?params=${json}`)
          if (this.facebooPixel != null) {
            window.fbq('track', 'InitiateCheckout')
          }
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`
          if (this.facebooPixel != null) {
            window.fbq('track', 'InitiateCheckout')
          }
        }
      }
    },
    redirectWP() {
      this.$refs.observer.validate().then((response) => {
        if (response) {
          let baseUrlMovil = 'https://api.whatsapp.com/send?phone='
          let baseUrlPc = 'https://web.whatsapp.com/send?phone='
          let urlProduct
          if (this.dataStore.tienda.dominio) {
            urlProduct = `${this.dataStore.tienda.dominio}wa`
          } else {
            urlProduct = `http://${this.dataStore.tienda.subdominio}.komercia.store/wa`
          }
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
                  element.cantidad * element.precio
                }`
              )
            } else {
              productosCart.push(
                `${element.cantidad} x ${element.nombre} -> Valor: ${
                  element.cantidad * element.precio
                }`
              )
            }
          })

          let productString = JSON.stringify(productosCart)
          let productList = productString.replace(/"/g, '')
          let resultproductList = productList.replace(/,/g, '%0A')
          let result = resultproductList.slice(1, -1)

          let text = `Hola%2C%20soy%20${this.nombre}%2C%0Ahice%20este%20pedido%20en%20tu%20tienda%20WhatsApp:%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A${result}%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0ATOTAL%3A%20${this.totalCart}%0ACostos%20de%20Env%C3%ADo%20por%20separado%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0AMi%20informaci%C3%B3n%3A%0ANombre%3A%20${this.nombre}%0ACiudad%3A%20${this.ciudad}%0ABarrio%3A%20${this.barrio}%0ADirección%3A%20${this.dirreccion}`

          if (this.dataStore.tienda.whatsapp.charAt(0) == '+') {
            let phone_number_whatsapp = this.dataStore.tienda.whatsapp.slice(1)

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
                `${baseUrlMovil}57${this.dataStore.tienda.whatsapp}&text=${text}`,
                '_blank'
              )
            } else {
              window.open(
                `${baseUrlPc}57${this.dataStore.tienda.whatsapp}&text=${text}`,
                '_blank'
              )
            }
          }
        }
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
.order {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9996;
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
  font-size: 25px;
  color: #075e54;
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
  padding: 10px 10px;
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
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.order_products_list_item .photo img {
  /* max-width: 200px;
  max-height: 200px; */
  width: 60px;
}
.photo-carrito {
  width: 100%;
}
.order_products_list_item .name {
  max-width: 190px;
  width: 100%;
}
.order-text {
  color: black;
  font-size: 12px;
}
.unidades {
  color: black;
  font-size: 13px;
  font-weight: 500;
}
.name >>> .el-tag {
  border-color: #128c7e;
  background-color: #128c7e;
  color: white;
  display: inline-block;
  height: 28px;
  margin-left: 2px;
  padding: 0 4px;
  font-size: 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
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
  font-size: 14px;
}
.icon-delete {
  font-size: 20px;
  cursor: pointer;
  color: #128c7e;
  transition: 0.3s;
  bottom: 5px;
}
.icon-delete:hover {
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
.wrapper-items-form {
  width: 100%;
  max-width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 1000;
  padding: 20px 0 45px;
  overflow-y: auto;
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
  color: black;
  font-size: 15px;
  margin-bottom: 5px;
}
.content-input {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.input-text {
  font-size: 14px;
  color: rgba(21, 20, 57, 0.541);
  border: solid 2px #afafaf;
  border-radius: 5px;
  background-color: transparent;
  padding: 8px 14px;
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
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  padding: 8px 10px;
  width: 100%;
  height: 44px;
  max-width: 340px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  position: fixed;
  bottom: 8px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  /* background-image: linear-gradient(130deg, #128c7e 0, #2ec4a1 80%); */
  background: rgb(0, 191, 165);
}

.continue_shopping_form:hover {
  background-image: linear-gradient(130deg, #0f7c6f 0, #24a788 80%);
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
  position: fixed;
  z-index: 99;
  bottom: 8px;
  color: white;
  border-radius: 5px;
  border: none;
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
  background-image: linear-gradient(130deg, #128c7e 0, #2ec4a1 80%);
}
.continue_shopping:hover {
  background-image: linear-gradient(130deg, #0f7c6f 0, #24a788 80%);
}
.continue_shopping2 {
  position: fixed;
  z-index: 99;
  bottom: 60px;
  color: #128c7e;
  border-radius: 5px;
  background: transparent;
  font-size: 16px;
  padding: 8px 10px;
  width: 100%;
  height: 44px;
  max-width: 340px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: 2px solid #128c7e;
}
.continue_shopping2:hover {
  color: #24a788;
  border: 2px solid #24a788;
}
.conten-btn {
  display: flex;
  width: 100%;
  justify-content: center;
}
.wrapper_photo {
  position: relative;
  display: flex;
  justify-content: center;
  align-self: center;
}
.photo {
  object-fit: cover;
  object-position: center;
  border-radius: 45px;
  overflow: hidden;
  margin-right: 8px;
  box-shadow: 0 2px 5px rgba(155, 238, 205, 0.42);
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
  font-size: 24px;
  bottom: 4px;
  margin-right: 5px;
}
</style>
