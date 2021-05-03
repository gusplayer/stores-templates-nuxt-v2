<template>
  <div
    class="wrapper-productDetail"
    :style="[
      settingByTemplate9[0].detailsProduct,
      settingByTemplate9[0].setting9General,
      settingByTemplate9[0].cardProduct,
    ]"
  >
    <div class="container-productDetail-loading" v-if="loading"></div>
    <div
      class="container-productDetail"
      v-else
      :style="[
        {
          '--font-style-2':
            this.settingByTemplate9 &&
            this.settingByTemplate9[0].setting9General &&
            this.settingByTemplate9[0].setting9General.fount_2
              ? this.settingByTemplate9[0].setting9General.fount_2
              : 'Roboto',
        },
      ]"
    >
      <div class="crumb">
        <nuxt-link to="/">
          <p class="txt-crumb s1">{{ $t('header_inicio') }}</p>
        </nuxt-link>
        <p class="txt-crumb">/</p>
        <p class="txt-crumb s2">{{ data.detalle.nombre }}</p>
      </div>
      <div class="product-content">
        <div class="left">
          <div class="content-images">
            <div class="main-images">
              <img
                class="img-list"
                :src="idCloudinaryBanner(data.detalle.foto_cloudinary)"
                alt="Product Img"
              />
            </div>
            <div
              class="aditional-images"
              v-for="(foto, itemsfoto) in data.fotos"
              :key="itemsfoto"
            >
              <img
                class="img-list"
                :src="idCloudinaryBanner(foto.foto_cloudinary)"
                alt="Product Img"
              />
            </div>
            <div class="youtuve-video">
              <!-- <img
                v-if="idYoutube"
                :src="`https://img.youtube.com/vi/${idYoutube}/0.jpg`"
                v-show="idYoutube"
                v-on:mouseover="existYoutube = true"
                class="video"
                alt="Product Img"
              /> -->
              <iframe
                v-show="idYoutube"
                :src="`https://www.youtube.com/embed/${idYoutube}?rel=0&amp;controls=0&amp;showinfo=0`"
                frameborder="0"
                allowfullscreen
                class="video"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="content-items-right">
            <div class="content-category">
              <p class="text-category">
                {{ data.detalle.categoria_producto.nombre_categoria_producto }}
              </p>
            </div>
            <div class="content-name">
              <p class="text-name">{{ data.detalle.nombre }}</p>
            </div>
            <div class="content-price">
              <p
                class="text-price-promo"
                v-show="
                  data.info.tag_promocion == 1 &&
                  data.info.promocion_valor &&
                  salesData.precio
                "
              >
                {{
                  (data.info.tag_promocion == 1 && data.info.promocion_valor
                    ? Math.trunc(
                        salesData.precio / (1 - data.info.promocion_valor / 100)
                      )
                    : 0)
                    | currency(
                      dataStore.tienda.codigo_pais,
                      dataStore.tienda.moneda
                    )
                }}
              </p>
              <p
                class="text-numero-promo"
                v-show="
                  data.info.tag_promocion == 1 &&
                  data.info.promocion_valor &&
                  salesData.precio
                "
              >
                {{ data.info.promocion_valor }}% OFF
              </p>
              <p class="text-price" v-show="salesData.precio">
                {{
                  salesData.precio
                    | currency(
                      dataStore.tienda.codigo_pais,
                      dataStore.tienda.moneda
                    )
                }}
              </p>
              <p class="text-stock" v-if="salesData.unidades > 0">
                {{ $t('productdetail_stock') }}
              </p>
            </div>
            <!-- Variantes de prodcuto -->
            <div
              class="content-variant"
              v-if="this.data.detalle.con_variante > 0"
            >
              <div v-for="(variant, index) in data.variantes" :key="index">
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
              <div class="content-cart">
                <div class="quantity" :class="{ disabled: !salesData.estado }">
                  <!-- <p class="text-quantity">{{ $t('cart_cantidad') }}</p> -->
                  <button class="quantity_remove" v-on:click="removeQuantity()">
                    <menos-icon class="text-icon" />
                  </button>
                  <p class="text-quantity_value">{{ quantityValue }}</p>
                  <button class="quantity_add" v-on:click="addQuantity()">
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
                    class="minicart-icon"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                  >
                    <path
                      d="M11,3V0H3V3H0V16H14V3H11ZM5,2H9V3H5V2Zm7,12H2V5H3V7H5V5H9V7h2V5h1v9Z"
                    ></path>
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
            <div class="content-options">
              <OptionAcordion
                :dataStore="dataStore"
                :data="data"
                :envio="envio"
              ></OptionAcordion>
            </div>
            <div class="tab">
              <OptionTab
                :dataStore="dataStore"
                :data="data"
                :envio="envio"
              ></OptionTab>
            </div>
            <div
              class="content-free-shipping"
              v-if="envio && envio.titulo == 'Gratis'"
            >
              <svg
                class="transporte-icon mr-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                fill="#2c2930"
              >
                <path
                  d="M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z"
                />
              </svg>
              <p class="text-shipping">{{ $t('footer_tarifaPrecio') }}</p>
            </div>
          </div>
        </div>
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
// import ProductSlide from './_productdetails/productSlide'
import SelectGroup from './_productdetails/selectGroup'
import OptionAcordion from './_productdetails/OptAcordion'
import OptionTab from './_productdetails/OptTab'
import KoSuggesProduct from './_productdetails/suggestionsProducto'
// import Zoom from './_productdetails/zoomImg'
import idCloudinary from '../../mixins/idCloudinary'

export default {
  mixins: [idCloudinary],
  name: 'Ko-ProductDetail-1',
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebooPixel: Object,
    settingByTemplate9: Array,
  },
  components: {
    OptionAcordion,
    OptionTab,
    SelectGroup,
    KoSuggesProduct,
    // ProductSlide,
    // Zoom,
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
    modalPayment() {
      return this.$store.state.togglePayment
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
            if (this.facebooPixel && this.facebooPixel.pixel_facebook != null) {
              window.fbq('track', 'ViewContent', {
                content_ids: this.data.detalle.id,
                name: this.data.detalle.nombre,
                quantity: this.data.cantidad,
                currency: this.dataStore.tienda.moneda,
                value: this.salesData.precio,
                content_type: 'product',
                description: 'Agregado detalle del producto',
              })
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
          content_ids: this.data.detalle.id,
          name: this.data.detalle.nombre,
          quantity: this.data.cantidad,
          currency: this.dataStore.tienda.moneda,
          value: this.salesData.precio,
          content_type: 'product',
          description: 'Vista del producto',
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
.wrapper-productDetail {
  display: flex;
  width: 100%;
  background: var(--background_color_1);
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
.container-productDetail-loading {
  height: calc(100vh - 420px);
  width: 100%;
  display: flex;
  max-width: 1460px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 30px 30px 30px;
  background: var(--background_color_1);
}
.container-productDetail {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1460px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}
.crumb {
  @apply flex flex-row justify-start items-start my-40;
}
.txt-crumb {
  font-family: Arial, sans-serif;
  font-size: 12px;
  color: var(--breadcrumbs);
  line-height: 14px;
  padding-right: 6px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.s1:hover {
  background-color: #2c2930;
  color: #fff;
  transition: all 0.25s ease;
}
.s2:hover {
  background-color: #2c2930;
  color: #fff;
  transition: all 0.25s ease;
}
.product-content {
  @apply w-full flex;
}
.left {
  @apply flex flex-col justify-center items-center;
}
.content-images {
  @apply w-full grid grid-cols-1 gap-4 justify-center items-center;
}
.content-variant {
  @apply w-auto flex flex-col justify-center items-start mb-32;
}
.img-list {
  object-fit: cover;
  overflow: hidden;
  width: auto;
  height: auto;
}
.aditional-images,
.main-images,
.youtuve-video {
  @apply w-full flex justify-center items-center;
}

.right {
  @apply flex flex-col justify-start items-start;
}
.content-category,
.content-name,
.content-addCart {
  @apply w-full flex flex-row justify-start items-center;
}
.content-price {
  align-items: center;
  @apply grid grid-flow-row grid-cols-2 grid-rows-2 gap-0;
}
.quantity {
  @apply flex flex-row justify-center items-center;
}
.section-suggesProduct {
  width: 100%;
  margin-top: 40px;
}
@screen sm {
  .product-content {
    @apply flex-col justify-center items-center;
  }
  .content-direction-btns {
    @apply w-full flex flex-col justify-start items-start;
  }
  .left {
    @apply w-9/0;
  }
  .video {
    width: 100%;
    height: 200px;
  }

  .right {
    @apply w-9/0 mt-4;
  }
  .content-name,
  .content-price {
    @apply mb-25;
  }
  .content-options {
    @apply flex;
  }
  .tab {
    @apply flex;
  }
  .tab {
    @apply hidden;
  }
  .content-cart {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color_quantity_bg);
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
  .crumb {
    @apply w-9/0;
  }
  .btn {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 54px;
    background-color: var(--color_background_btn);
    transition: all 0.15s ease-in;
  }
  .btn-disabled {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 54px;
    background-color: var(--color_background_btn);
    transition: all 0.15s ease-in;
  }
  .btn:hover {
    background-color: #f4f4f4;
    transition: all 0.15s ease-in;
  }
  .btn:hover .text-addCart {
    color: #2c2930;
    transition: all 0.15s ease-in;
  }
  .btn:hover .minicart-icon {
    fill: #2c2930;
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
    background: var(--color_quantity_bg);
  }

  .text-category {
    /* font-family: 'Roboto', Helvetica, Arial, sans-serif !important; */
    font-family: var(--font-style-2);
    color: var(--color_category);
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
    transition: all 0.6s ease-in-out;
  }
  .text-name {
    /* font-family: 'Roboto', Helvetica, Arial, sans-serif !important; */
    font-family: var(--font-style-2);
    color: var(--color_title);
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 1;
    text-transform: capitalize;
  }
  .text-price {
    /* font-family: 'Roboto', Helvetica, Arial, sans-serif !important; */
    font-family: var(--font-style-2);
    color: var(--color_price);
    font-size: 36px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.03em;
    text-transform: capitalize;
  }
  .text-stock {
    /* font-family: 'Roboto', Helvetica, Arial, sans-serif !important; */
    font-family: var(--font-style-2);
    color: #92bb35;
    font-size: 14px;
    font-weight: 600;
    /* line-height: 1.42857143;
    letter-spacing: -0.02em; */
    /* margin-left: 30px; */
    text-transform: capitalize;
  }
  .text-price-promo {
    /* font-family: 'Roboto', Helvetica, Arial, sans-serif !important; */
    font-family: var(--font-style-2);
    color: var(--color_price);
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.03em;
    text-decoration: line-through;
  }
  .text-numero-promo {
    font-family: var(--font-style-2);
    font-size: 12px;
    color: #00a650;
    font-size: 14px;
    font-weight: 600;
    /* line-height: 1.42857143; */
    /* letter-spacing: -0.02em; */
    /* margin-left: 100px; */
    text-transform: capitalize;
  }
  .text-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    cursor: pointer;
    colo: var(--color_quantity_num);
  }
  .text-quantity_value {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 0 35px;
    border: none;
    font-size: 21px;
    font-weight: 700;
    colo: var(--color_quantity_num);
  }
  .text-addCart {
    /* font-family: 'Roboto', Helvetica, Arial, sans-serif !important; */
    font-family: var(--font-style-2);
    color: var(--color_text_btn);
    font-size: 15px;
    font-weight: 900;
    line-height: 54px;
    letter-spacing: 1px;
    white-space: nowrap;
    text-transform: capitalize;
  }
  .minicart-icon {
    fill: var(--color_text_btn);
    margin-right: 20px;
  }
  .text-shipping {
    /* font-family: 'Roboto', Helvetica, Arial, sans-serif !important; */
    font-family: var(--font-style-2);
    color: var(--color_title);
    font-size: 14px;
    font-weight: 700;
    line-height: 1px;
    margin-left: 10px;
    text-transform: capitalize;
  }
  .text-variant {
    /* font-family: 'Roboto', Helvetica, Arial, sans-serif !important; */
    font-family: var(--font-style-2);
    color: var(--color_title);
    font-size: 16px;
    font-weight: 700;
    transition: all 0.6s ease-in-out;
  }
  .text-option {
    /* font-family: 'Roboto', Helvetica, Arial, sans-serif !important; */
    font-family: var(--font-style-2);
    color: #303030;
    font-size: 16px;
    font-weight: 700;
    transition: all 0.6s ease-in-out;
  }
  /* ------------------- DOWN ----------------------- */
}
@media (min-width: 480px) {
  .content-direction-btns {
    @apply flex-row;
  }
  .content-cart {
    @apply w-4/0 mr-2;
  }
  .video {
    height: 250px;
  }
}
@screen md {
  .left {
    @apply w-9/5;
  }
  .right {
    @apply w-9/5;
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
}
@media (min-width: 850px) {
  .video {
    height: 480px;
  }
}
@screen lg {
  .product-content {
    @apply w-9/6 flex-row justify-start items-start;
  }
  .crumb {
    @apply w-9/6;
  }
  .video {
    height: 300px;
  }
  .left {
    @apply w-full mr-50;
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
  .right {
    width: 55%;
    position: sticky;
    top: 80px;
  }
  /* .content-free-shipping {
    position: sticky;
    bottom: 20px;
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
  .video {
    height: 320px;
  }
}
@media (min-width: 1135px) {
  .video {
    height: 380px;
  }
}
@media (min-width: 1250px) {
  .video {
    height: 420px;
  }
}
@screen mlg {
  .content-direction-btns {
    @apply flex flex-row;
  }
  .right {
    width: 50%;
  }
  .product-content {
    @apply w-full;
  }
}
@media (min-width: 1350px) {
  .video {
    height: 480px;
  }
}
@media (min-width: 1460px) {
  .video {
    height: 520px;
  }
  .right {
    width: 55%;
  }
  .product-content {
    @apply w-full;
  }
  .crumb {
    @apply w-full;
  }
}
</style>
