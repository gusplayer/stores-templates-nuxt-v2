<template>
  <div class="wrapper-productDetail">
    <div class="container-productDetail-loading" v-if="loading"></div>
    <div class="container-productDetail" v-else>
      <div class="banner-detail">
        <div class="crumb">
          <nuxt-link to="/productos">
            <p class="txt-crumb s1">{{ $t('header_inicio') }}</p>
          </nuxt-link>
          <p class="separatorCrumb">/</p>
          <p class="txt-crumb s2">
            {{ data.detalle.nombre }}
          </p>
        </div>
      </div>
      <div class="empty"></div>

      <div class="product-content">
        <div class="left">
          <div class="wrapper-left">
            <template>
              <div
                v-swiper:mySwiper="swiperOption"
                ref="mySwiper"
                class="photos"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide photos_selected">
                    <img
                      @click="selectedPhoto(data.detalle.foto_cloudinary)"
                      class="img-list"
                      :src="
                        idCloudinary(data.detalle.foto_cloudinary, 120, 120)
                      "
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
                      :src="foto.foto_cloudinary"
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
            <!-- Foto grande -->
            <div class="wrapper-photo_main">
              <div
                v-if="this.activeZoom"
                v-show="!existYoutube"
                class="photo_main"
              >
                <img
                  class="photo_main"
                  v-on:mouseover="activeZoom = !activeZoom"
                  :src="selectPhotoUrl"
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
              <ProductSlide
                :photos="data.fotos"
                :photo="data.detalle.foto_cloudinary"
                :idYoutube="idYoutube"
              ></ProductSlide>
            </div>
          </div>
          <!-- <div class="content-images">
            <div class="main-images">
              <img
                class="img-list"
                :src="idCloudinaryBanner(data.detalle.foto_cloudinary)"
                alt="Product Img"
              />
            </div>
          </div> -->
        </div>
        <div class="right">
          <div class="content-items-right">
            <div class="content-name">
              <p class="text-name">{{ data.detalle.nombre }}</p>
            </div>

            <div class="content-price">
              <p class="text-price" v-show="salesData.precio">
                {{
                  salesData.precio
                    | currency(
                      dataStore.tienda.codigo_pais,
                      dataStore.tienda.moneda
                    )
                }}
              </p>
              <!-- <p class="text-stock" v-if="salesData.unidades > 0">
                {{ $t('productdetail_stock') }}
              </p> -->
            </div>
            <div class="empty"></div>

            <!-- Unidades en stock -->
            <div class="content-stock">
              <p class="stock-text-1">{{ $t('productdetail_stock') }}:</p>
              <p class="stock-text-2">{{ salesData.unidades }}</p>
            </div>
            <div class="empty"></div>
            <!-- Variantes de prodcuto -->
            <div
              class="content-variant"
              v-if="this.data.detalle.con_variante > 0"
            >
              <div
                class="content-items-variant"
                v-for="(variant, index) in data.variantes"
                :key="index"
              >
                <label for="variant name" class="text-variant"
                  >{{ variant.nombre }}:</label
                >
                <SelectGroup :index="index" :variantes="data.variantes">
                  <option
                    v-for="item in variant.valores"
                    :key="item.option"
                    :value="item.option"
                  >
                    <p class="text-option">
                      {{ item.option }}
                    </p>
                  </option>
                </SelectGroup>
              </div>
            </div>
            <div class="content-direction-btns">
              <div
                class="content-quantity-boxes"
                :class="{ disabled: !salesData.estado }"
              >
                <div class="box-quantity">
                  <p class="txt-quantity">{{ quantityValue }}</p>
                </div>
                <div class="box-quantity-btns">
                  <div class="btn-quantity btn1" v-on:click="addQuantity()">
                    <FlechaUp-icon class="text-icon" />
                  </div>
                  <div class="btn-quantity btn2" v-on:click="removeQuantity()">
                    <Flechadown-icon class="text-icon" />
                  </div>
                </div>
              </div>
              <div class="content-addCart">
                <button
                  ref="colorBtn"
                  class="btn"
                  v-if="!spent"
                  v-on:click="addShoppingCart"
                  id="AddToCartTag"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="minicart-icon"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                    />
                  </svg>

                  <p class="text-addCart">
                    {{ $t('productdetail_añadiralcarrito') }}
                  </p>
                </button>
                <button disabled class="btn-disabled" v-if="spent">
                  <p class="text-addCart">
                    {{ $t('home_cardAgotado') }}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab">
        <OptionTab
          :dataStore="dataStore"
          :data="data"
          :envio="envio"
        ></OptionTab>
      </div>
      <!-- Productos relacionados  -->
      <div class="section-suggesProduct">
        <KoSuggesProduct :category="this.category.slice(0, 8)" />
      </div>
      <!-- Metas -->
      <div itemscope itemtype="http://schema.org/Product">
        <meta itemprop="productID" :content="`${data.detalle.id}`" />
        <meta itemprop="name" :content="`${data.detalle.nombre}`" />
        <meta itemprop="brand" :content="`${data.info.marca}`" />
        <meta
          itemprop="description"
          :content="`Producto de la tienda ${dataStore.tienda.nombre}`"
        />
        <meta itemprop="image" :content="`${data.detalle.foto_cloudinary}`" />
        <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
          <link itemprop="availability" href="in stock" />
          <link itemprop="itemCondition" href="new" />
          <meta itemprop="price" :content="`${this.salesData.precio}`" />
          <meta
            itemprop="priceCurrency"
            :content="`${dataStore.tienda.moneda}`"
          />
        </div>
        <meta itemprop="url" :content="`${this.sharing.url}`" />
      </div>
      <div>
        <meta property="product:catalog_id" :content="`${data.detalle.id}`" />
        <meta property="og:title" :content="`${data.detalle.nombre}`" />
        <meta property="product:brand" :content="`${data.info.marca}`" />
        <meta
          property="og:description"
          :content="`Producto de la tienda ${dataStore.tienda.nombre}`"
        />
        <meta
          property="og:image"
          :content="`${data.detalle.foto_cloudinary}`"
        />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />
        <meta
          property="product:price:amount"
          :content="`${this.salesData.precio}`"
        />
        <meta
          property="product:price:currency"
          :content="`${dataStore.tienda.moneda}`"
        />
        <meta property="og:url" :content="`${this.sharing.url}`" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import ProductSlide from './_productdetails/productSlide'
import SelectGroup from './_productdetails/selectGroup'
// import OptionAcordion from './_productdetails/OptAcordion'
import OptionTab from './_productdetails/OptTab'
import KoSuggesProduct from './_productdetails/suggestionsProducto'
import Zoom from './_productdetails/zoomImg'
import idCloudinary from '../../mixins/idCloudinary'

export default {
  mixins: [idCloudinary],
  name: 'Ko-ProductDetail',
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebooPixel: Object,
  },
  components: {
    // OptionAcordion,
    OptionTab,
    SelectGroup,
    KoSuggesProduct,
    ProductSlide,
    Zoom,
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
    // window.addEventListener('scroll', function () {
    //   var sticky = document.getElementById('sticky')
    //   if (window.pageYOffset >= 1 && screen.width > 725 && sticky) {
    //     sticky.style.display = 'flex'
    //     sticky.style.flexDirection = 'column'
    //     sticky.style.position = 'fixed'
    //     sticky.style.top = '160px'
    //     sticky.style.width = '20%'
    //     sticky.style.overflow = 'hidden'

    //   }
    // })
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
        {
          network: 'twitter',
          icon: 'twitter-icon',
          color: '#00acee',
        },
      ],
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
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
    beforeCombination() {
      return this.$store.state.beforeCombination
    },

    // eslint-disable-next-line vue/return-in-computed-property
    precio() {
      if (this.data.detalle.precio) {
        return `$${this.data.detalle.precio
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      }
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
            if (this.facebooPixel && this.facebooPixel.pixel_facebook != null) {
              window.fbq('track', 'ViewContent', {
                content_type: 'product',
                content_ids: this.data.detalle.id,
                value: this.salesData.precio ? this.salesData.precio : 0,
                content_name: this.data.detalle.nombre,
                currency: this.dataStore.tienda.moneda,
                content_category:
                  this.data.detalle.categoria_producto &&
                  this.data.detalle.categoria_producto.nombre_categoria_producto
                    ? this.data.detalle.categoria_producto
                        .nombre_categoria_producto
                    : 'category',
                description: 'Description Product',
              })
            }
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
                desc: `Compra todo lo que quieras en nuestra tienda, el valor del envio siempre sera el mismo: Valor envio $${this.data.envioproducto.valor}`,
              }
              break
            case 'precio':
              this.envio = {
                titulo: 'Tarifa por precio',
                desc:
                  'Segun la suma del costo de tus productos te cobraran el envio',
              }
              break
            case 'precio_ciudad':
              this.envio = {
                titulo: 'Tarifa por ciudad',
                desc: 'Segun la ciudad te cobraran el envio',
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
      if (this.facebooPixel && this.facebooPixel.pixel_facebook != null) {
        window.fbq('track', 'AddToCart', {
          content_type: 'product',
          content_ids: this.data.detalle.id,
          value: this.salesData.precio,
          num_items: this.data.cantidad,
          content_name: this.data.detalle.nombre,
          currency: this.dataStore.tienda.moneda,
          description: 'Agregar al carrito el producto',
        })
      }
      this.$gtm.push({ event: 'AddToCart' })
      this.$store.commit('UPDATE_CONTENTCART')
      this.$router.push('/productos')
      this.$store.state.openOrder = true
      this.$store.state.orderComponent = true
    },
    evalStock(mq, qv) {
      return !(mq - qv < 0)
    },
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
    },
    productsData() {
      this.getDataProduct()
    },
    envios() {
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
.wrapper-left {
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}
.photo_main_zoom {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;
  cursor: zoom-in;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}

.wrapper-productDetail {
  background: #fff;
  @apply w-full flex justify-center items-center;
}
.container-productDetail-loading {
  height: calc(100vh - 420px);
  max-width: 1200px;
  padding: 50px 30px 30px 30px;
  background: #fff;
  @apply w-full flex flex-col justify-center items-center;
}
.container-productDetail {
  @apply w-full h-full flex flex-col justify-center items-center;
}
.left {
  @apply w-full flex flex-col justify-center items-center;
}
.content-images {
  @apply w-full grid grid-cols-1 gap-4 justify-center items-center;
}
.content-variant {
  @apply w-full flex flex-col justify-center items-start mt-30;
}
.content-items-variant {
  @apply w-full flex flex-row justify-start items-center;
}
.img-list {
  @apply w-auto h-auto object-cover overflow-hidden;
}
.aditional-images,
.main-images,
.youtuve-video {
  @apply w-full flex justify-center items-center;
}

.right {
  @apply w-full flex flex-col justify-start items-start;
}
.content-category,
.content-name,
.content-price,
.content-addCart {
  @apply w-full flex flex-row justify-start items-center;
}
.quantity {
  @apply flex flex-row justify-center items-center;
}
.section-suggesProduct {
  @apply w-full my-40;
}
.content-quantity-boxes {
  @apply w-full flex flex-row justify-start items-center;
}
.content-quantity-boxes {
  @apply w-full flex justify-start items-center my-30;
}
.txt-tittle-quantity {
  font-size: 12px;
  color: #666;
  min-width: 70px;
  @apply w-auto font-semibold uppercase mr-10;
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

.material-design-icon > .material-design-icon__svg {
  height: 1em;
  width: 1em;
  fill: #666;
  position: absolute;
  bottom: 0em;
}
.content-networks {
  @apply w-auto flex flex-row justify-start items-start mb-30;
}

.social-networks {
  @apply w-auto flex flex-row justify-start items-start mr-20;
}

.facebook-icon,
.twitter-icon,
.instagram-icon,
.youtube-icon {
  fill: #666;
  @apply transition-all ease-in duration-0.2 cursor-pointer;
}
.facebook-icon:hover {
  color: #eb7025;
  fill: #eb7025;
  transform: scale(1.5);
  @apply transition-all ease-in duration-0.2;
}
.twitter-icon:hover {
  color: #eb7025;
  fill: #eb7025;
  transform: scale(1.5);
  @apply transition-all ease-in duration-0.2;
}
.instagram-icon:hover {
  color: #eb7025;
  fill: #eb7025;
  transform: scale(1.5);
  @apply transition-all ease-in duration-0.2;
}
.youtube-icon:hover {
  color: #eb7025;
  fill: #eb7025;
  transform: scale(1.5);
  @apply transition-all ease-in duration-0.2;
}
@screen sm {
  .product-content {
    @apply w-9/0 flex-col justify-center items-center mt-40;
  }
  .content-direction-btns {
    @apply w-full flex flex-col justify-start items-start;
  }
  .video {
    width: 100%;
    height: 200px;
  }

  .content-name,
  .content-price {
    @apply mb-30;
  }
  .content-options {
    @apply flex;
  }
  .tab {
    @apply w-9/0 flex mt-40;
  }
  .content-cart {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f4f4f4;
    height: 54px;
    padding-bottom: 1px;
  }
  .content-free-shipping {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 54px;
    background: #f4f4f4;
    margin-top: 20px;
  }
  .content-options {
    @apply w-full flex flex-col justify-start items-center;
  }

  .btn {
    background-color: #000;
    transition: all 0.15s ease-in;
    @apply w-full h-54 flex flex-row justify-center items-center;
  }
  .btn-disabled {
    background-color: #2c2930;
    transition: all 0.15s ease-in;
    @apply w-full h-54 flex flex-row justify-center items-center;
  }

  .btn:hover .text-addCart {
    color: #fff;
    transition: all 0.15s ease-in;
  }
  .quantity {
    @apply w-full;
  }
  .quantity_remove,
  .quantity_add {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f4f4f4;
  }
  .text-name {
    color: #222;
    font-size: 22px;
    line-height: 1;
    font-family: 'Roboto', sans-serif !important;
    @apply font-medium capitalize;
  }
  .text-price {
    color: #222;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.3px;
    font-family: 'Roboto', sans-serif !important;
    @apply capitalize font-medium;
  }
  .text-stock {
    color: #92bb35;
    font-size: 14px;
    line-height: 1.42857143;
    letter-spacing: -0.02em;
    font-family: 'Roboto', sans-serif !important;
    @apply capitalize font-semibold ml-30;
  }
  .text-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    cursor: pointer;
  }
  .text-quantity_value {
    padding: 0 35px;
    border: none;
    font-size: 21px;
    @apply w-full flex justify-center items-center text-center font-semibold;
  }
  .text-addCart {
    font-family: 'Roboto', sans-serif !important;
    color: #fff;
    font-size: 12px;
    @apply font-semibold whitespace-nowrap uppercase;
  }
  .minicart-icon {
    fill: #fff;
    color: #fff;
    @apply mr-10 mb-5;
  }
  .text-variant {
    color: #222;
    font-size: 16px;
    transition: all 0.6s ease-in-out;
    font-family: 'Roboto', sans-serif !important;
    @apply font-semibold mr-10;
  }
  .text-option {
    color: #222;
    font-size: 16px;
    transition: all 0.6s ease-in-out;
    font-family: 'Roboto', sans-serif !important;
    @apply font-semibold;
  }
  .banner-detail {
    @apply hidden;
  }
  .section-suggesProduct {
    @apply w-9/0;
  }
  .content-items-right {
    @apply w-full flex flex-col justify-center items-center;
  }
  .empty {
    background-color: #e4e4e4;
    max-width: 1200px;
    @apply w-full h-1;
  }
  .content-stock {
    @apply w-full flex flex-row justify-start items-center my-26;
  }
  .stock-text-1 {
    color: #191919;
    font-size: 15px;
    font-family: 'Roboto', sans-serif !important;
    @apply font-normal text-left capitalize mr-20;
  }
  .stock-text-2 {
    color: #767676;
    font-size: 15px;
    font-family: 'Roboto', sans-serif !important;
    @apply font-normal text-left;
  }
  /* ------------------- DOWN ----------------------- */
}
@media (min-width: 425px) {
  .content-direction-btns {
    @apply flex flex-col;
  }
}
@media (min-width: 480px) {
  .content-cart {
    @apply w-4/0 mr-2;
  }
  .video {
    height: 250px;
  }
}
@screen md {
  .banner-detail {
    @apply w-full flex bg-cover bg-center bg-no-repeat justify-items-center items-center py-20;
  }
  .crumb {
    @apply w-full flex flex-row justify-center items-center;
  }
  .separatorCrumb {
    font-size: 9px;
    color: #222;
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
    @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
  }
  .txt-crumb {
    font-size: 15px;
    color: #222;
    font-family: 'Roboto', sans-serif !important;
    @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
  }
  .s1:hover {
    color: #eb7025;
    transition: all 0.25s ease;
  }
  .s2:hover {
    color: #eb7025;
    transition: all 0.25s ease;
  }
  .content-cart {
    width: 150px;
  }
  .content-addCart {
    width: 236px;
  }
  .video {
    height: 400px;
  }
  .tab {
    @apply w-9/5;
  }
  .product-content {
    @apply w-9/5 grid grid-cols-2 gap-4 justify-start items-start;
  }
  .right {
    @apply mt-40;
  }
  .section-suggesProduct {
    @apply w-9/5;
  }
}
@media (min-width: 850px) {
  .video {
    height: 480px;
  }
}
@screen lg {
  .video {
    height: 300px;
  }
  .content-options {
    @apply hidden;
  }
  .tab {
    @apply flex;
  }
  .content-free-shipping {
    width: 100%;
  }
  /* .product-content {
    @apply gap-;
  } */
  .content-direction-btns {
    @apply flex flex-col;
  }
}
@media (min-width: 1080px) {
  .content-options,
  .content-free-shipping {
    width: 100%;
  }
}

@media (max-width: 768px) {
  /* .wrapper-left {
    flex: 1;
  } */
  /* .photos {
    margin-right: 10px;
  } */
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

@media (min-width: 1200px) {
  .product-content,
  .tab,
  .section-suggesProduct {
    max-width: 1200px;
  }
}
</style>
