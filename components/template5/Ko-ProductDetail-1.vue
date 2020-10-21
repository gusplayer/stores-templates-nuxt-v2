<template>
  <div class="wrapper-productDetail" :style="settingByTemplate">
    <div class="container-productDetail-loading" v-if="loading"></div>
    <div class="container-productDetail" v-else>
      <div class="section">
        <div class="wrapper-left">
          <template>
            <div v-swiper:mySwiper="swiperOption" ref="mySwiper" class="photos">
              <div class="swiper-wrapper">
                <div class="swiper-slide photos_selected">
                  <img
                    @click="selectedPhoto(data.detalle.foto_cloudinary)"
                    class="img-list"
                    :src="idCloudinary(data.detalle.foto_cloudinary, 120, 120)"
                    alt="Product Img"
                  />
                </div>
                <div
                  class="swiper-slide photos_selected"
                  v-for="(foto, itemsfoto) in data.fotos"
                  :key="itemsfoto"
                >
                  <img
                    @click="selectedPhoto(foto.foto_cloudinary)"
                    class="img-list"
                    :src="idCloudinary(foto.foto_cloudinary, 120, 120)"
                    alt="Product Img"
                  />
                </div>
                <div class="swiper-slide photos_selected">
                  <img
                    v-if="idYoutube"
                    :src="`https://img.youtube.com/vi/${idYoutube}/0.jpg`"
                    v-show="idYoutube"
                    v-on:mouseover="existYoutube = true"
                    class="video"
                    alt="Product Img"
                  />
                </div>
              </div>
              <div class="swiper-prev" v-if="data.fotos.length > 3">
                <FlechaUp-icon class="icon-swiper" />
              </div>
              <div class="swiper-next" v-if="data.fotos.length > 3">
                <Flechadown-icon class="icon-swiper" />
              </div>
            </div>
          </template>
          <div class="wrapper-photo_main">
            <div
              v-if="this.activeZoom"
              v-show="!existYoutube"
              class="photo_main"
            >
              <img
                class="photo_main"
                v-on:mouseover="activeZoom = !activeZoom"
                :src="idCloudinary(selectPhotoUrl, 645, 430)"
                alt="Product Zoom"
              />
            </div>
            <div
              v-if="!this.activeZoom"
              v-show="!existYoutube"
              class="photo_main"
            >
              <zoom
                v-on:mouseleave="activeZoom = !activeZoom"
                :photo="selectPhotoUrl"
              />
            </div>
            <iframe
              v-show="existYoutube"
              :src="`https://www.youtube.com/embed/${idYoutube}?rel=0&amp;controls=0&amp;showinfo=0`"
              frameborder="0"
              allowfullscreen
              class="photo_main"
            ></iframe>
          </div>
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
              ${{
                salesData.precio
                  | currency(
                    dataStore.tienda.codigo_pais,
                    dataStore.tienda.moneda
                  )
              }}
            </p> -->
            <p class="text-precio" v-show="salesData.precio">
              {{
                salesData.precio
                  | currency(
                    dataStore.tienda.codigo_pais,
                    dataStore.tienda.moneda
                  )
              }}
            </p>
            <!-- <p class="card-descuento">-50%</p> -->
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
            <div :class="{ disabled: !salesData.estado }">
              <div>
                <div class="quantity">
                  <p class="text-quantity">Cantidad:</p>
                  <button class="quantity_remove" v-on:click="removeQuantity()">
                    <menos-icon class="icon" />
                  </button>
                  <p class="quantity_value">{{ quantityValue }}</p>
                  <button class="quantity_add" v-on:click="addQuantity()">
                    <mas-icon class="icon" />
                  </button>

                  <div
                    class="container-alerta"
                    v-if="this.maxQuantityValue == this.quantityValue"
                  >
                    <span class="alerta">última Unidad!</span>
                  </div>
                </div>
                <div class="item-info-product">
                  <div v-if="data.info.garantia" class="content_buy_action">
                    <p class="text-unidades">Garantía:</p>
                    <span class="text-garantia">{{ data.info.garantia }}</span>
                  </div>
                  <!-- <div v-if="salesData.unidades" class="content_buy_action">
                    <p class="text-unidades">Unidades disponibles:</p>
                    <p class="text-garantia">{{ salesData.unidades }}</p>
                  </div>-->
                  <div class="content-button">
                    <button
                      ref="colorBtn"
                      class="btn"
                      v-if="!spent"
                      v-on:click="addShoppingCart"
                    >
                      Comprar
                    </button>
                    <button
                      disabled
                      class="btn-disabled"
                      v-if="spent"
                      v-on:click="addShoppingCart"
                    >
                      Agotado !
                    </button>
                  </div>
                  <div class="content-shared">
                    <p class="text-unidades" style="margin-right: 10px;">
                      Compartir:
                    </p>
                    <ShareNetwork
                      v-for="network in this.networks"
                      :network="network.network"
                      :key="network.network"
                      :url="sharing.url"
                      :title="sharing.title"
                      :description="sharing.description"
                      :quote="sharing.quote"
                      :style="{ color: network.color }"
                    >
                      <div :is="network.icon" class="icon-shared" />
                    </ShareNetwork>
                  </div>
                  <div class="content-float-info" id="sticky">
                    <p class="text-name">{{ data.detalle.nombre }}</p>
                    <p class="text-marca">
                      <strong>{{ data.info.marca }}</strong>
                    </p>
                    <!-- <p class="text-promocion" v-show="salesData.precio">
                      ${{ salesData.precio | currency }}
                    </p> -->
                    <p class="text-precio" v-show="salesData.precio">
                      {{
                        salesData.precio
                          | currency(
                            dataStore.tienda.codigo_pais,
                            dataStore.tienda.moneda
                          )
                      }}
                    </p>
                    <!-- <p class="card-descuento">-50%</p> -->
                    <div class="content_buy_action">
                      <div v-if="envio.titulo == 'Envío gratis'">
                        <p class="card-info-2">Envío gratis !</p>
                      </div>
                      <div class="content_card-info">
                        <p class="card-info-1" v-if="spent">Agotado !</p>
                      </div>
                    </div>
                    <div>
                      <button
                        ref="colorBtn"
                        class="btn"
                        v-if="!spent"
                        v-on:click="addShoppingCart"
                      >
                        Comprar
                      </button>
                      <button disabled class="btn-disabled" v-if="spent">
                        Agotado !
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="features">
          <ko-description
            :dataStore="dataStore"
            :data="data"
            :envio="envio"
          ></ko-description>
        </div>
      </div>
      <div class="section-suggesProduct">
        <koSuggesProduct :category="this.category.slice(0, 8)" />
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
import koDescription from './_productdetails/descriptionProduct.vue'
import koSuggesProduct from './_productdetails/suggestionsProducto'
import idCloudinary from '../../mixins/idCloudinary'

import zoom from './_productdetails/zoomImg'

export default {
  mixins: [idCloudinary],
  name: 'Ko-ProductDetail-1',
  props: {
    settingByTemplate: Object,
  },
  components: {
    selectGroup,
    koDescription,
    koSuggesProduct,
    productSlide,
    zoom,
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
    window.addEventListener('scroll', function () {
      var sticky = document.getElementById('sticky')
      if (window.pageYOffset >= 376 && screen.width > 725 && sticky) {
        sticky.style.display = 'flex'
        sticky.style.position = 'fixed'
        sticky.style.top = '88px'
      } else {
        sticky.style.display = 'none'
        sticky.style.position = 'static'
        sticky.style.top = ''
      }
    })
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
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 10,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
      },
      sharing: {
        url: '',
        title: '',
        description: '',
        quote: '',
      },
      networks: [
        {
          network: 'facebook',
          icon: 'facebook-icon',
          color: '#1877f2',
        },
        {
          network: 'whatsapp',
          icon: 'whatsapp-icon',
          color: '#25d366',
        },
      ],
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
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
    changeSlide() {
      this.swiper.slidePrev(700, false)
    },
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
            this.sharing.url = window.location.href
            this.sharing.title = `Te recomiendo: ${response.data.detalle.nombre}`
            this.sharing.description = `Te recomiendo: ${response.data.detalle.nombre} de la tienda ${this.dataStore.tienda.nombre}, Link del producto ${window.location.href}`
            this.sharing.quote = `Te recomiendo: ${response.data.detalle.nombre} de la tienda ${this.dataStore.tienda.nombre}, Link del producto ${window.location.href}`
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
      this.$router.push('/')
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
    currency(value, codigo_pais, moneda) {
      let resultCurrent
      if (codigo_pais && moneda) {
        if (codigo_pais == 'internacional') {
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
        resultCurrent = new Intl.NumberFormat('co', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 0,
        }).format(value)
        return resultCurrent
      }
      //  if (value) {
      //   return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      //  }
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
  background: #efefef;
  /* background: var(--background_color_2); */
  justify-content: center;
  align-items: center;
}
.container-productDetail-loading {
  height: calc(100vh - 420px);
  width: 100%;
  display: flex;
  max-width: 1300px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px 30px 30px;
  background: #efefef;
}
.container-productDetail {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1300px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px 30px 30px;
}
.section {
  width: 100%;
  display: flex;
  box-shadow: 10px 14px 28px #ededed, -10px -14px 28px #f1f1f1;
}
.section-suggesProduct {
  z-index: 1 !important;
  width: 100%;
}
.wrapper-category {
  display: flex;
  margin-bottom: 5px;
}
.text-category {
  font-size: 14px;
  font-weight: bold;
  /* color: var(--color_subtext); */
  color: rgba(21, 20, 57, 0.541);
}
.wrapper-left {
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* margin-right: 25px; */
  padding-bottom: 10px;
}
.photos_responsive {
  display: none;
}
.photos {
  display: flex;
  margin-right: 30px;
  max-height: 430px;
  position: relative;
}
.swiper-wrapper {
  width: 100%;
  position: relative;
}
.swiper-prev {
  position: absolute;
  top: 0;
  left: 20px;
  z-index: 2;
}
.swiper-next {
  position: absolute;
  left: 20px;
  bottom: 0;
  z-index: 2;
  font-size: 25px;
}
.icon-swiper {
  color: var(--color_icon);
  font-size: 60px;
  cursor: pointer;
}
.icon-swiper:hover {
  color: var(--btnhover);
}
.photos_selected {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  max-height: 100px;
}
.img-list {
  cursor: pointer;
  vertical-align: top;
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
}
.video {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-bottom: 10px;
  object-fit: cover;
  object-position: center;
}
.wrapper-photo_main {
  position: relative;
  max-width: 650px;
  height: 450px;
  min-height: 450px;
  width: 100%;
  margin-right: 25px;
}
.photo_main {
  max-width: 645px;
  max-height: 430px;
  width: 100%;
  height: 430px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}
.photo_main_zoom {
  max-width: 645px;
  max-height: 430px;
  width: 100%;
  height: 430px;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;
  cursor: zoom-in;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}
.wrapper-right {
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 10px;
  /* border-left: 1px solid var(--color_border); */
  border-left: 1px solid rgba(127, 127, 139, 0.342);
}
.content-right {
  margin-left: 20px;
  position: sticky;
  top: 88px;
}
i.close {
  color: black;
  align-self: flex-end;
  cursor: pointer;
}
.text-name {
  font-weight: bold;
  font-size: 25px;
  line-height: 24px;
  color: #000000;
  /* color: var(--color_text); */
}
.text-marca {
  font-size: 16px;
  font-stretch: semi-condensed;
  font-style: normal;
  /* color: var(--color_subtext); */
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
  /* color: var(--color_text); */
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
  /* color: var(--color_subtext); */
  color: rgba(21, 20, 57, 0.541);
  line-height: 1.5;
  text-decoration: none;
}
.text-variant {
  font-size: 14px;
  font-weight: bold;
  /* color: var(--color_subtext); */
  color: rgba(21, 20, 57, 0.541);
}
.text-unidades {
  font-size: 14px;
  font-weight: bold;
  /* color: var(--color_subtext); */
  color: rgba(21, 20, 57, 0.541);

  margin-top: 5px;
}
.text-garantia {
  font-size: 14px;
  font-weight: bold;
  /* color: var(--color_text); */
  color: #000000;
  margin-top: 5px;
  margin-left: 5px;
}
.content_buy_action {
  display: flex;
  flex-direction: row;
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
.item-info-product {
  margin-top: 10px;
}
.content-button {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.content-shared {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.icon-shared {
  font-size: 25px;
  margin-right: 5px;
  bottom: 2px;
}
.icon-shared:hover {
  color: black;
}
.content-float-info {
  z-index: 3;
  width: 100%;
  max-width: 385px;
  padding-top: 10px;
  /* padding-bottom: 10px; */
  flex-direction: column;
  display: none;
  background: #efefef !important;
  transition: all 2s ease-out;
  border-radius: 5px;
}
.whatsapp {
  fill: #27d367;
  width: 30px;
  cursor: pointer;
  margin-left: 20px;
}
.btn {
  border-radius: var(--radius_btn);
  color: white;
  border: solid 2px black;
  background-color: black;
  padding: 6px 14px;
  width: 238px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn:hover {
  color: white;
  border: solid 2px var(--btnhover);
  background-color: var(--btnhover);
}
.btn-disabled {
  border-radius: var(--radius_btn);
  color: white;
  border: solid 2px gray;
  background-color: gray;
  padding: 6px 14px;
  width: 238px;
  font-size: 16px;
  font-weight: bold;
}
.quantity {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  position: relative;
  box-sizing: border-box;
  max-width: 240px;
  /* margin-bottom: 25px; */
}
.text-quantity {
  font-size: 14px;
  font-weight: bold;
  /* color: var(--color_subtext); */
  color: rgba(21, 20, 57, 0.541);
  margin-right: 15px;
  align-self: center;
}
.quantity_remove {
  /* border: 2px var(--color_border); */
  border: 2px rgba(127, 127, 139, 0.342);
  border-top-left-radius: var(--radius_btn);
  border-bottom-left-radius: var(--radius_btn);
  border-style: solid none solid solid;
  background: transparent;
  height: 41px;
  width: 55px;
}
.quantity_value {
  font-size: 1em;
  /* color: var(--color_text); */
  color: #000000;
  /* border: 2px var(--color_border); */
  border: 2px rgba(127, 127, 139, 0.342);

  padding-left: 10px;
  padding-right: 10px;
  border-style: solid none solid none;
  background: transparent;
  height: 41px;
  width: 55px;
  justify-content: center;
  display: flex;
  align-items: center;
}
.quantity_add {
  /* border: 2px var(--color_border); */
  border: 2px rgba(127, 127, 139, 0.342);
  border-top-right-radius: var(--radius_btn);
  border-bottom-right-radius: var(--radius_btn);
  border-style: solid solid solid none;
  background: transparent;
  height: 41px;
  width: 55px;
}
.icon {
  font-size: 16px;
  /* color: var(--color_border); */
  color: rgba(127, 127, 139, 0.342);
  transition: all 200ms ease-in;
}
.icon:hover {
  /* color: var(--color_text); */
  color: #000000;
}
.features {
  width: 100%;
  display: flex;
  /* border-top: 1px solid var(--color_border); */
  border-top: 1px solid rgba(127, 127, 139, 0.342);
}
.responsive-purchase {
  display: none;
}
.container-alerta {
  position: absolute;
  bottom: -32px;
  left: 95px;
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
  padding: 5px 5px;
  text-transform: capitalize;
}
@media (max-width: 1250px) {
  .photo_main {
    width: 600px;
  }
}
@media (max-width: 1185px) {
  .photo_main {
    width: 500px;
  }
}
@media (max-width: 1035px) {
  .photo_main {
    width: 450px;
  }
}
@media (max-width: 960px) {
  .photo_main {
    width: 400px;
  }
}
@media (max-width: 890px) {
  .photo_main {
    width: 350px;
  }
}
@media (max-width: 810px) {
  .photos {
    margin-right: 10px;
  }
  .wrapper-left {
    margin-right: 15px;
  }
}
@media (max-width: 768px) {
  .wrapper-left {
    flex: 1;
  }
  .photos {
    margin-right: 10px;
  }
  .photos {
    display: none;
  }
  .wrapper-photo_main {
    display: none;
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
}
@media (max-width: 725px) {
  .container-productDetail {
    padding: 0px;
    align-items: center;
    justify-content: center;
  }
  .section {
    flex-direction: column;
  }
  .wrapper-left {
    justify-content: center;
    align-items: center;
  }
  .wrapper-right {
    padding-bottom: 2px;
    border-left: 0px;
  }
  .product {
    position: relative;
    width: 100%;
    min-height: 97vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
  }
  i.close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .wrapper {
    padding: 15px;
  }
  .quantity {
    display: none;
  }
  .content-button {
    display: none;
  }
  .content_card-info {
    display: none;
  }
  .responsive-purchase {
    display: initial;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 0 30px 50px rgba(96, 125, 139, 0.096);
    background: var(--background_color_1);
    z-index: 2;
  }
  .ko-input {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 8px 5px;
  }
  .quantity-resposive {
    display: flex;
    flex-direction: row;
  }
  .text-quantity {
    font-size: 14px;
    font-weight: bold;
    /* color: var(--color_subtext); */
    color: rgba(21, 20, 57, 0.541);
    margin-right: 5px;
    align-self: center;
  }
  .quantity_remove {
    /* border: 1px var(--color_border); */
    border: 1px rgba(127, 127, 139, 0.342);
    border-top-left-radius: var(--radius_btn);
    border-bottom-left-radius: var(--radius_btn);
    border-style: solid none solid solid;
    background: transparent;
    height: 38px;
    width: 3em;
  }
  .quantity_value {
    font-size: 1em;
    /* color: var(--color_text); */
    color: #000000;
    /* border: 1px var(--color_border); */
    border: 1px rgba(127, 127, 139, 0.342);
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
    /* border: 1px var(--color_border); */
    border: 1px rgba(127, 127, 139, 0.342);
    border-top-right-radius: var(--radius_btn);
    border-bottom-right-radius: var(--radius_btn);
    border-style: solid solid solid none;
    background: transparent;
    height: 38px;
    width: 3em;
  }
  .icon {
    font-size: 16px;
  }
  .content_buy_action-responsive {
    display: flex;
    width: 100%;
  }
  .card-info-1-res {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: #e71f77; */
    background: gray;
    border: solid 1px gray;
    padding: 8px 10px;
    border-radius: var(--radius_btn);
    color: white;
    font-size: 16px;
    width: 100%;
  }
  .btn-responsive {
    border-radius: var(--radius_btn);
    color: var(--color_text_btn);
    border: solid 1px var(--color_background_btn);
    background-color: var(--color_background_btn);
    padding: 8px 10px;
    width: 100%;
    font-size: 16px;
  }
  .card-icon-cart {
    font-size: 20px;
    color: var(--color_text_btn);
    margin-right: 4px;
    cursor: pointer;
  }
  .container-alert {
    position: absolute;
    top: -55px;
    left: 45px;
    width: 80px;
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
  .features {
    border-top: none;
  }
}

@media (max-width: 600px) {
  .container-productDetail {
    padding: 0px;
  }
  .wrapper-left {
    padding-bottom: 0px;
  }
  .wrapper-right {
    margin-bottom: 15px;
  }
  .content-right {
    margin-left: 15px;
    margin-right: 15px;
  }
  .text-name {
    font-weight: 500;
    font-size: 20px;
  }
}
</style>
