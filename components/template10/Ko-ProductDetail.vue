<template>
  <div
    class="wrapper-productDetail"
    :style="[
      settingByTemplate10[0].detailsProduct,
      settingByTemplate10[0].setting10General,
      {
        '--font-style-1':
          this.settingByTemplate10[0].setting10General &&
          this.settingByTemplate10[0].setting10General.fount_1
            ? this.settingByTemplate10[0].setting10General.fount_1
            : 'Roboto',
      },
    ]"
  >
    <div class="container-productDetail-loading" v-if="loading"></div>
    <div class="container-productDetail" v-else>
      <div class="banner-detail" id="BgProductlistF">
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
          </div>
        </div>
        <div class="right">
          <div class="content-items-right">
            <div class="content-name">
              <p class="text-name">{{ data.detalle.nombre }}</p>
            </div>
            <div class="content-networks">
              <a
                class="social-networks"
                target="_blank"
                rel="noreferrer noopener"
                :href="dataStore.tienda.red_facebook"
                v-if="dataStore.tienda.red_facebook != null"
              >
                <i>
                  <svg
                    class="facebook-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    width="18px"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"
                    />
                  </svg>
                </i>
              </a>
              <a
                class="social-networks"
                target="_blank"
                rel="noreferrer noopener"
                :href="dataStore.tienda.red_twitter"
                v-if="dataStore.tienda.red_twitter != null"
              >
                <svg
                  class="twitter-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  fill="currentColor"
                  height="18px"
                  width="18px"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
              <a
                class="social-networks"
                target="_blank"
                rel="noreferrer noopener"
                :href="dataStore.tienda.red_instagram"
                v-if="dataStore.tienda.red_instagram != null"
              >
                <svg
                  class="instagram-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  width="18px"
                  fill="currentColor"
                  viewBox="0 0 511 511.9"
                >
                  <path
                    d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"
                  />
                  <path
                    d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"
                  />
                  <path
                    d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"
                  />
                </svg>
              </a>
              <a
                class="social-networks"
                target="_blank"
                rel="noreferrer noopener"
                :href="dataStore.tienda.red_youtube"
                v-if="dataStore.tienda.red_youtube != null"
              >
                <svg
                  class="youtube-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="19px"
                  width="19px"
                  fill="currentColor"
                  viewBox="-21 -117 682.66672 682"
                >
                  <path
                    d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"
                  />
                </svg>
              </a>
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
              <div
                class="flex flex-col items-start"
                v-if="data.info.descripcion_corta"
              >
                <div class="txt-tittle-quantity">
                  {{ $t('productdetail_informacion') }}
                </div>
                <p class="txt-quantity">{{ data.info.descripcion_corta }}</p>
              </div>
              <div
                class="content-quantity-boxes"
                :class="{ disabled: !salesData.estado }"
              >
                <div class="txt-tittle-quantity">Cantidad:</div>
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
                  v-if="
                    !spent &&
                    this.salesData.estado == true &&
                    (data.info.tipo_servicio == null ||
                      data.info.tipo_servicio == '0')
                  "
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
                <button
                  disabled
                  class="btn-disabled"
                  v-else-if="this.salesData.estado == false"
                >
                  <p class="text-addCart">
                    {{ $t('productdetail_btnANodisponible') }}
                  </p>
                </button>
                <button
                  ref="colorBtn"
                  class="btn"
                  v-else-if="!spent && data.info.tipo_servicio == '1'"
                  v-on:click="GoPayments"
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
                    {{ $t('productdetail_btnComprar') }}
                  </p>
                </button>
                <button disabled class="btn-disabled" v-else-if="spent">
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
          :settingByTemplate10="settingByTemplate10"
        ></OptionTab>
      </div>
      <!-- Productos relacionados  -->
      <div class="section-suggesProduct">
        <KoSuggesProduct
          :category="this.category.slice(0, 8)"
          :cardProduct="settingByTemplate10[0].cardProduct"
          :settingGeneral="settingByTemplate10[0].setting10General"
        />
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
// import OptionAcordion from './_productdetails/OptAcordion'
import OptionTab from './_productdetails/OptTab'
import KoSuggesProduct from './_productdetails/suggestionsProducto'
// import Zoom from './_productdetails/zoomImg'
import idCloudinary from '../../mixins/idCloudinary'
import currency from '../../mixins/formatCurrent'
export default {
  mixins: [idCloudinary, currency],
  name: 'Ko-ProductDetail-1',
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebooPixel: Object,
    settingByTemplate10: Array,
  },
  components: {
    // OptionAcordion,
    OptionTab,
    SelectGroup,
    KoSuggesProduct,
    // ProductSlide,
    // Zoom,
  },
  mounted() {
    if (
      this.settingByTemplate10[0] &&
      this.settingByTemplate10[0].detailsProduct &&
      this.settingByTemplate10[0].detailsProduct.visible_bg == true
    ) {
      this.setBg(1)
    } else {
      this.setBg(2)
    }
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
    setBg(value) {
      var imagen = document.getElementById('BgProductlistF')
      if (imagen && imagen.style) {
        if (value == 1) {
          if (this.settingByTemplate10[0].detailsProduct.url_img_bg) {
            imagen.style.backgroundImage = `url(${this.settingByTemplate10[0].detailsProduct.url_img_bg})`
          } else {
            imagen.style.backgroundImage = `url(https://res.cloudinary.com/brahyanr10/image/upload/v1614233821/Temp10/Productos/bg-beagrumb_gxvk1i.jpg)`
          }
        } else if (value == 2) {
          imagen.style.backgroundImage = ''
        }
      }
    },
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
          .get(`${this.$store.state.urlTemplate}/api/producto/${idOfSlug}`)
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
                desc: 'Segun la suma del costo de tus productos te cobraran el envio',
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
      let myregexp =
        /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
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
        const mutableProduct =
          this.$store.state.productsCart[this.productIndexCart]
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
    GoPayments() {
      let objeto = {
        id: this.data.info.id,
        cantidad: this.quantityValue,
        combinacion:
          this.salesData && this.salesData.combinacion
            ? this.salesData.combinacion
            : undefined,
      }
      let json = {
        products: [objeto],
        tienda: {
          id: this.$store.state.tienda.id_tienda,
        },
        canal: 'KOMERCIA',
      }
      json = JSON.stringify(json)
      if (json) {
        if (this.layourUnicentro == true) {
          window.open(`https://checkout.komercia.co/?params=${json}`)
          if (this.facebooPixel && this.facebooPixel.pixel_facebook != null) {
            window.fbq('track', 'InitiateCheckout')
          }
          this.$gtm.push({ event: 'InitiateCheckout' })
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`
          if (this.facebooPixel && this.facebooPixel.pixel_facebook != null) {
            window.fbq('track', 'InitiateCheckout')
          }
          this.$gtm.push({ event: 'InitiateCheckout' })
        }
      }
    },
    evalStock(mq, qv) {
      return !(mq - qv < 0)
    },
  },
  watch: {
    settingByTemplate10() {
      if (
        this.settingByTemplate10[0] &&
        this.settingByTemplate10[0].detailsProduct &&
        this.settingByTemplate10[0].detailsProduct.visible_bg == true
      ) {
        this.setBg(1)
      } else {
        this.setBg(2)
      }
    },
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
  background: var(--background_color_1);
  @apply w-full flex justify-center items-center;
  padding-bottom: 40px;
}
.container-productDetail-loading {
  height: calc(100vh - 420px);
  max-width: 1400px;
  padding: 50px 30px 30px 30px;
  background: var(--background_color_1);
  @apply w-full flex flex-col justify-center items-center;
}
.container-productDetail {
  @apply w-full h-full flex flex-col justify-center items-center;
}
.product-content {
  @apply w-full flex;
}
.left {
  @apply w-full flex flex-col justify-center items-center;
}
.content-images {
  @apply w-full grid grid-cols-1 gap-4 justify-center items-center;
}
.content-variant {
  @apply w-auto flex flex-col justify-center items-start mb-8;
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
  background: var(--background_color_1);
  @apply w-full mt-40;
}
.content-quantity-boxes {
  @apply w-full flex justify-start items-center my-30;
}
.txt-tittle-quantity {
  font-size: 16px;
  color: var(--color_subtext);
  min-width: 70px;
  @apply w-auto font-bold mr-10;
}
.box-quantity {
  color: var(--color_subtext);
  background-color: transparent;
  border: 1px solid var(--border);
  @apply w-75 h-50 flex text-center justify-center items-center;
}
.box-quantity-btns {
  color: var(--color_subtext);
  background-color: transparent;
  border: 1px solid var(--border);
  @apply w-25 h-50 flex flex-col text-center justify-center items-center;
}
.btn-quantity {
  color: var(--color_subtext);
  background-color: transparent;
  border-color: var(--border);
  @apply w-25 h-25 flex justify-center items-center border-t border-r;
}

.material-design-icon > .material-design-icon__svg {
  height: 1em;
  width: 1em;
  fill: var(--color_icon);
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
  fill: var(--color_icon);
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
    @apply w-9/0 flex-col justify-center items-center;
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
  .text-addCart {
    color: var(--color_text_btn);
  }
  .btn {
    background-color: var(--color_background_btn);
    transition: all 0.15s ease-in;
    @apply w-full h-54 flex flex-row justify-center items-center;
  }
  .btn-disabled {
    background-color: var(--color_background_btn);
    transition: all 0.15s ease-in;
    @apply w-full h-54 flex flex-row justify-center items-center;
  }
  .btn:hover {
    background-color: #eb7025;
    transition: all 0.15s ease-in;
  }
  .btn:hover {
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
    margin-top: var(--marginTopTitle);
    color: var(--color_text);
    font-size: var(--fontSizeTitle);
    font-weight: var(--fontWeighTitle);
    letter-spacing: 0px;
    line-height: 1;
    font-family: var(--font-style-1) !important;
    @apply uppercase;
  }
  .text-price {
    color: var(--color_price);
    font-size: var(--fontSizePrice);
    font-weight: var(--fontWeighPrice);
    line-height: 1;
    letter-spacing: -0.03em;
    font-family: var(--font-style-1) !important;
    @apply capitalize;
  }
  .text-stock {
    font-family: var(--font-style-1) !important;
    color: #92bb35;
    font-size: 14px;
    line-height: 1.42857143;
    letter-spacing: -0.02em;
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
    font-family: var(--font-style-1) !important;

    font-size: 12px;
    @apply font-semibold whitespace-nowrap uppercase;
  }
  .minicart-icon {
    fill: var(--color_text_btn);
    color: var(--color_text_btn);
    @apply mr-10 mb-5;
  }
  .text-variant {
    color: var(--color_subtext);
    font-size: 16px;
    font-weight: 600;
    transition: all 0.6s ease-in-out;
    font-family: var(--font-style-1) !important;
  }
  .text-option {
    color: var(--color_subtext);
    font-size: 16px;
    font-weight: 600;
    transition: all 0.6s ease-in-out;
    font-family: var(--font-style-1) !important;
  }
  .banner-detail {
    @apply hidden;
  }
  .section-suggesProduct {
    @apply w-9/0;
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
    height: 220px;
    background-color: var(--background_color_2);
    @apply w-full flex bg-cover bg-center bg-no-repeat justify-items-center items-center;
  }
  .crumb {
    @apply w-full flex flex-row justify-center items-center;
  }
  .separatorCrumb {
    font-size: 9px;
    color: var(--breadCrumbs);
    font-family: var(--font-style-1) !important;
    @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
  }
  .txt-crumb {
    font-size: 15px;
    color: var(--breadCrumbs);
    font-family: var(--font-style-1) !important;
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
    @apply w-9/5 grid grid-cols-2 gap-4 justify-start items-start mt-60;
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
  .product-content {
    @apply gap-16;
  }
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

@media (min-width: 1350px) {
  .video {
    height: 480px;
  }
}
@media (min-width: 1400px) {
  .video {
    height: 520px;
  }
  .product-content,
  .tab,
  .section-suggesProduct {
    max-width: 1400px;
  }
}
</style>
