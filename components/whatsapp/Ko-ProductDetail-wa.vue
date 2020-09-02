<template>
  <div class="wrapper-productDetail" :style="settingByTemplate">
    <div v-if="loading" v-loading="loading"></div>
    <div class="container-productDetail" v-else>
      <div class="section">
        <div class="wrapper-left">
          <div class="photos_responsive">
            <productSlide
              :photos="data.fotos"
              :photo="data.detalle.foto_cloudinary"
              :idYoutube="idYoutube"
            ></productSlide>
          </div>
        </div>
        <div class="wrapper-right">
          <div class="content-right">
            <p class="text-name">{{ data.detalle.nombre }}</p>
            <p class="text-marca">
              <strong>{{ data.info.marca }}</strong>
            </p>
            <!-- <p class="text-promocion" v-show="salesData.precio">
              ${{ salesData.precio | currency }}
            </p>-->
            <div class="wrapper-price">
              <p class="text-precio" v-show="salesData.precio">
                ${{ salesData.precio | currency }}
              </p>
              <!-- <p class="card-descuento">-50%</p> -->
            </div>
            <!-- <div
              class="content-text-desc"
              v-if="data.info.descripcion && data.info.descripcion.length > 12"
            >
              <p
                class="text-desc"
                v-html="`${data.info.descripcion.slice(0, 99)}`"
              ></p>
            </div>-->
            <div class="content_buy_action">
              <div v-if="envio.titulo == 'Envío gratis'">
                <p class="card-info-2">Envío gratis !</p>
              </div>
              <div class="content_card-info">
                <p class="card-info-1" v-if="spent">Agotado !</p>
              </div>
            </div>
            <div v-if="this.data.detalle.con_variante > 0">
              <div v-for="(variant, index) in data.variantes" :key="index">
                <label for="variant name" class="text-variant"
                  >{{ variant.nombre }}:</label
                >
                <selectGroup :index="index" :variantes="data.variantes">
                  <option
                    v-for="item in variant.valores"
                    :key="item.option"
                    :value="item.option"
                    >{{ item.option }}</option
                  >
                </selectGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="responsive-purchase">
        <div class="ko-input">
          <div class="quantity-resposive">
            <button class="quantity_remove" v-on:click="removeQuantity()">
              <menos-icon class="icon" />
            </button>
            <p class="quantity_value">{{ quantityValue }}</p>
            <button class="quantity_add" v-on:click="addQuantity()">
              <mas-icon class="icon" />
            </button>
            <transition name="slide-fade">
              <div
                class="container-alert"
                v-show="quantityValue == maxQuantityValue"
              >
                <span class="alert">última Unidad!</span>
              </div>
            </transition>
          </div>
          <div style="width: 100%; margin-left: 10px;">
            <div class="content_buy_action-responsive" v-if="spent">
              <p class="card-info-1-res">Agotado !</p>
            </div>
            <button
              class="btn-responsive"
              ref="color2"
              v-if="!spent"
              v-on:click="addShoppingCart"
            >
              <cartArrowDown class="card-icon-cart" />Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import productSlide from './_productdetails/productSlide'
import selectGroup from './_productdetails/selectGroup'
import idCloudinary from '../../mixins/idCloudinary'

export default {
  mixins: [idCloudinary],
  name: 'Ko-ProductDetail-wa',
  props: {
    settingByTemplate: Object,
  },
  components: {
    selectGroup,
    productSlide,
  },
  mounted() {
    this.$store.state.beforeCombination = []
    if (this.dataStore.productos.length) {
      this.getDataProduct()
    } else {
      this.getDataProductPrev()
    }
    if (Object.keys(this.dataStore.medios_envio).length) {
      this.setOptionEnvio()
    }
  },
  data() {
    return {
      id: this.$route.params.slug,
      loading: true,
      data: {},
      selectPhotoUrl: '',
      idYoutube: '',
      existYoutube: false,
      maxQuantityValue: 1,
      quantityValue: 1,
      productIndexCart: null,
      warranty: '',
      productCart: {},
      salesData: null,
      spent: false,
      envioproducto: '',
      envio: {
        titulo: '',
        desc: '',
      },
      activeZoom: true,
    }
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    productsData() {
      return this.dataStore.productos
    },
    existPayments() {
      const mediospago = this.dataStore.medios_pago
      if (
        mediospago.consignacion ||
        mediospago.convenir ||
        mediospago.payco ||
        mediospago.tienda ||
        mediospago.efecty
      ) {
        return true
      }
      return false
    },
    modalPayment() {
      return this.$store.state.togglePayment
    },
    beforeCombination() {
      return this.$store.state.beforeCombination
    },
    envios() {
      return this.dataStore.medios_envio
    },
    precio() {
      if (this.data.detalle.precio) {
        return `$${this.data.detalle.precio
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      }
    },
    whatsapp() {
      return this.dataStore.tienda.whatsapp
    },
    category() {
      return this.productsData.filter(
        (product) =>
          product.categoria ==
            this.data.detalle.categoria_producto.nombre_categoria_producto &&
          product.id !== this.data.detalle.id
      )
    },
  },
  methods: {
    searchIdForSlug() {
      const product = this.productsData.filter(
        (product) => product.slug === this.id
      )
      if (product.length) {
        return product[0].id
      }

      return this.productsData[0].id
    },
    getDataProduct() {
      const idOfSlug = this.searchIdForSlug()
      if (idOfSlug) {
        axios
          .get(`https://templates.komercia.co/api/producto/${idOfSlug}`)
          .then((response) => {
            this.selectedPhoto(response.data.detalle.foto_cloudinary)
            this.videoYoutube(response.data.info.video)
            this.data = response.data
            this.salesData = {
              precio: this.data.detalle.precio,
              unidades: this.data.info.inventario,
              sku: this.data.info.sku,
              estado: true,
            }
            this.maxQuantityValue = this.data.info.inventario
            this.setOptionEnvio()
            for (const [
              index,
              productCart,
            ] of this.$store.state.productsCart.entries()) {
              if (this.data.detalle.id == productCart.id) {
                this.productIndexCart = index
                this.productCart = productCart
                this.maxQuantityValue =
                  this.data.info.inventario - productCart.cantidad
              }
            }
            if (this.salesData.unidades == 0 || this.maxQuantityValue <= 0) {
              this.spent = true
            }
            this.loading = false
          })
      } else {
        this.selectedPhoto(this.productsData[0].foto_cloudinary)
        this.data.detalle = {
          foto_cloudinary: this.productsData[0].foto_cloudinary,
          nombre: this.productsData[0].nombre,
          precio: this.productsData[0].precio,
        }
        this.data.info = {
          marca: '',
          descripcion: '',
        }
        this.maxQuantityValue = 0
        this.salesData = {
          precio: 29998,
          unidades: 0,
          sku: '4a00',
        }
        this.spent = true
      }
    },
    getDataProductPrev() {
      this.data.detalle = {
        foto_cloudinary:
          'https://vignette.wikia.nocookie.net/la-bitacora-del-capitan/images/6/67/Not_found.png/revision/latest?cb=20190509042801&path-prefix=es',
        nombre: 'Producto de prueda',
        precio: 29999,
      }
      this.data.info = {
        marca: 'Marca de prueba',
        descripcion: 'Descripción de prueba',
      }
      this.maxQuantityValue = 0
      this.salesData = {
        precio: 29999,
        unidades: 0,
        sku: '4a00',
      }
      this.spent = true
    },
    togglePayment() {
      this.$store.state.togglePayment = !this.$store.state.togglePayment
    },
    setOptionEnvio() {
      if (this.data.detalle) {
        if (this.data.detalle.envio_gratis == 1) {
          this.envio = {
            titulo: 'Envío gratis',
            desc: 'Disfruta de este obsequio por parte de la tienda.',
          }
        } else {
          this.data.envioproducto = JSON.parse(this.envios.valores)
          switch (this.data.envioproducto.envio_metodo) {
            case 'gratis':
              this.envio = {
                titulo: 'Envío gratis',
                desc: 'Disfruta de este obsequio por parte de la tienda.',
              }
              break
            case 'tarifa_plana':
              this.envio = {
                titulo: 'Tarifa plana',
                desc: `Compra todo lo que quieras en nuestra tienda, el valor del envio siempre sera el mismo: Valor envio $${this.envios.valores.valor}`,
              }
              break
            case 'precio':
              this.envio = {
                titulo: 'Tarifa por precio',
                desc:
                  'Segun la suma del costo de tus productos te cobraran el envio',
              }
              break
            case 'peso':
              this.envio = {
                titulo: 'Tarifa por peso',
                desc: '',
              }
              break
            default:
          }
        }
      }
    },
    quantity(productCart) {
      this.quantityValue = productCart.cantidad
    },
    addQuantity() {
      if (this.maxQuantityValue > this.quantityValue) {
        this.quantityValue++
        this.data.cantidad = this.quantityValue
      } else {
        // Alerta de limite de sku
      }
    },
    removeQuantity() {
      if (this.data.cantidad >= 2) {
        this.quantityValue--
        this.data.cantidad = this.quantityValue
      }
    },
    setMiniPhoto(photo) {
      return photo
    },
    selectedPhoto(photo) {
      this.selectPhotoUrl = photo
      this.existYoutube = false
    },
    videoYoutube(url) {
      let myregexp = /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
      let id = ''
      if (url && url !== '' && url !== 'null') {
        this.validVideo = true
        id = url.match(myregexp)
        if (id) {
          this.idYoutube = id[1]
        }
      }
    },
    addShoppingCart() {
      if (!this.data.cantidad) {
        this.data.cantidad = this.quantityValue
      }
      const product = {
        id: this.data.detalle.id,
        precio: this.salesData.precio,
        cantidad: this.data.cantidad,
        foto_cloudinary: this.data.detalle.foto_cloudinary,
        nombre: this.data.detalle.nombre,
        combinacion: this.salesData.combinacion,
        envio_gratis: this.data.detalle.envio_gratis,
      }
      if (this.salesData) {
        product.limitQuantity = this.salesData.unidades
      } else {
        product.limitQuantity = this.data.info.inventario
      }
      if (typeof this.productIndexCart === 'number') {
        const mutableProduct = this.$store.state.productsCart[
          this.productIndexCart
        ]
        mutableProduct.cantidad += this.data.cantidad
        this.$store.state.productsCart.splice(
          this.productIndexCart,
          1,
          mutableProduct
        )
      } else {
        this.$store.state.productsCart.push(product)
      }
      this.$store.commit('UPDATE_CONTENTCART')
      this.$router.push('/wa')
      this.$store.state.openOrder = true
      this.$store.state.orderComponent = true
    },
    evalStock(mq, qv) {
      return !(mq - qv < 0)
    },
  },
  watch: {
    productsData(value) {
      this.getDataProduct()
    },
    envios(value) {
      this.setOptionEnvio()
    },
    quantityValue(value) {
      if (value > this.maxQuantityValue) {
        this.quantityValue = this.maxQuantityValue
      }
    },
    beforeCombination(value) {
      const combinationSelected = JSON.stringify(value)
      if (this.data.combinaciones) {
        if (
          this.data.combinaciones.combinaciones !== '[object Object]' &&
          this.data.detalle.con_variante > 0
        ) {
          const combinaciones = JSON.parse(
            this.data.combinaciones.combinaciones
          )
          const result = combinaciones.find(
            (combinacion) =>
              JSON.stringify(combinacion.combinacion) == combinationSelected
          )
          this.productCart = []
          this.productIndexCart = null
          for (const [
            index,
            productCart,
          ] of this.$store.state.productsCart.entries()) {
            if (
              this.data.detalle.id == productCart.id &&
              JSON.stringify(productCart.combinacion) ==
                JSON.stringify(result.combinacion)
            ) {
              this.productIndexCart = index
              this.productCart = productCart
            }
          }
          if (result) {
            this.spent = false
            this.maxQuantityValue = result.unidades
            if (result.unidades == 0) {
              this.spent = true
            }
            if (this.productCart.cantidad) {
              this.maxQuantityValue =
                parseInt(result.unidades) - this.productCart.cantidad
              if (this.maxQuantityValue <= 0) {
                this.spent = true
              }
            }
            this.salesData = result
            this.quantityValue = 1
          }
        }
      }
    },
  },
  filters: {
    currency(value) {
      if (value) {
        return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      }
      return 0
    },
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase()
      }
      return ''
    },
  },
}
</script>

<style scoped>
.wrapper-productDetail {
  display: flex;
  width: 100%;
  background: white;
  justify-content: center;
  align-items: center;
}
.container-productDetail {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 780px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 80px 30px;
}
.section {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.wrapper-left {
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-right: 25px;
  padding-bottom: 10px;
}
.photos_responsive {
  width: 100%;
  height: 375px;
  max-width: 400px;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 10px;
}
.wrapper-right {
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 10px;
}
.content-right {
  margin-left: 20px;
}
.text-name {
  font-weight: bold;
  font-size: 25px;
  line-height: 24px;
  color: #000000;
}
.text-marca {
  font-size: 16px;
  font-stretch: semi-condensed;
  font-style: normal;
  color: rgba(21, 20, 57, 0.541);
}
.text-promocion {
  font-size: 14px;
  font-weight: bold;
  color: rgba(55, 4, 4, 0.61);
  text-decoration: line-through;
  margin-top: 5px;
}
.wrapper-price {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
}
.wrapper-price > p:nth-child(2) {
  margin-left: 5px;
}
.text-precio {
  font-size: 30px;
  font-weight: bold;
  color: #000000;
}
.card-descuento {
  font-size: 12px;
  color: white;
  background: #35dd8d;
  border-radius: 3px;
  padding: 0px 5px;
  margin-top: 10px;
}
.content-text-desc {
  margin-top: 10px;
  margin-bottom: 10px;
}
.text-desc {
  text-decoration-color: currentcolor;
  text-decoration-style: solid;
  text-decoration-line: none;
  font-size: 14px;
  font-weight: normal;
  color: rgba(21, 20, 57, 0.541);
  line-height: 1.5;
  text-decoration: none;
}
.content_buy_action {
  display: flex;
  flex-direction: row;
}
.card-info-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #35dd8d;
  padding: 1px 4px;
  border-radius: 5px;
  color: black;
  margin-right: 10px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
}
.content_card-info {
  display: initial;
}
.card-info-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e71f77;
  padding: 1px 4px;
  border-radius: 5px;
  color: white;
  font-size: 12px;
  margin-bottom: 10px;
}
.text-variant {
  font-size: 14px;
  font-weight: bold;
  color: rgba(21, 20, 57, 0.541);
}
.responsive-purchase {
  position: fixed;
  bottom: 60px;
  right: 0;
  width: 100%;
  z-index: 2;
  background: transparent;
  display: flex;
  justify-content: center;
}
.ko-input {
  display: flex;
  width: 100%;
  max-width: 320px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background: #00bb2d;
  border-radius: 10px;
  position: relative;
}
.quantity-resposive {
  display: flex;
  flex-direction: row;
}
.text-quantity {
  font-size: 14px;
  font-weight: bold;
  color: rgba(21, 20, 57, 0.541);
  margin-right: 5px;
  align-self: center;
}
.quantity_remove {
  border: 1px black;
  border-top-left-radius: var(--radius_btn);
  border-bottom-left-radius: var(--radius_btn);
  border-style: solid none solid solid;
  background: transparent;
  height: 38px;
  width: 3em;
}
.quantity_value {
  font-size: 1em;
  color: #000000;
  border: 1px black;
  padding-left: 10px;
  padding-right: 10px;
  border-style: solid none solid none;
  background: transparent;
  height: 38px;
  width: 2.5em;
  justify-content: center;
  display: flex;
  align-items: center;
}
.quantity_add {
  border: 1px black;
  border-top-right-radius: var(--radius_btn);
  border-bottom-right-radius: var(--radius_btn);
  border-style: solid solid solid none;
  background: transparent;
  height: 38px;
  width: 3em;
}
.icon {
  font-size: 16px;
  color: black;
  transition: all 200ms ease-in;
}
.icon:hover {
  color: #000000;
}
.card-info-1-res {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #e71f77; */
  background: gray;
  padding: 6px 10px;
  border-radius: var(--radius_btn);
  color: white;
  font-size: 16px;
  width: 100%;
}
.btn-responsive {
  border-radius: var(--radius_btn);
  color: white;
  border: solid 0px black;
  background-color: black;
  padding: 6px 10px;
  width: 100%;
  font-size: 16px;
}
.card-icon-cart {
  font-size: 20px;
  color: white;
  margin-right: 4px;
  cursor: pointer;
}
.container-alert {
  position: absolute;
  top: -33px;
  left: 5px;
  width: 120px;
  background-color: rgb(250, 232, 75);
  border: 1px solid rgb(230, 213, 66);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: black;
}
.alert {
  text-align: center;
  padding: 5px 5px;
  text-transform: capitalize;
}

@media (max-width: 670px) {
  .container-productDetail {
    padding: 10px 10px 90px 10px;
  }
  .wrapper-left {
    margin-right: 10px;
  }
}
@media (max-width: 630px) {
  .container-productDetail {
    padding: 5px 5px 150px 5px;
  }
  .section {
    flex-direction: column;
    justify-content: center;
  }
  .wrapper-left {
    justify-content: center;
    padding-bottom: 0px;
  }
  .wrapper-right {
    padding-bottom: 0px;
    justify-content: center;
    align-items: center;
  }
  .content-right {
    max-width: 260px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .text-name {
    font-weight: 500;
    font-size: 20px;
  }
}
</style>
