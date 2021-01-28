<template>
  <div class="wrapper-productDetail" :style="settingByTemplate">
    <div class="container-productDetail-loading" v-if="loading"></div>
    <div class="container-productDetail" v-else>
      <div class="section">
        <!-- Slider izq  -->
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
            <ProductSlide
              :photos="data.fotos"
              :photo="data.detalle.foto_cloudinary"
              :idYoutube="idYoutube"
            ></ProductSlide>
          </div>
        </div>
        <!-- Datos derecha -->
        <div class="wrapper-right" >
          <div class="content-right">
            <p class="text-name">{{ data.detalle.nombre }}</p>
            <!-- <p class="text-marca">
              <strong>{{ data.info.marca }}</strong>
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
            <!-- Envios gratis -->
            <div class="content_buy_action">
              <div v-if="data.detalle.envio_gratis == 1 && salesData.unidades > 0">
                <div class="transport-icon">
                  <svg
                    class="transporte-icon mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="#00a650"
                  >
                    <path
                      d="M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z"
                    />
                  </svg>
                  <p>{{ $t('footer_tarifaPrecio')}}</p>
                </div>
              </div>
              <!-- Producto agotado -->
              <div class="content_card-info" v-if="spent && salesData.unidades == 0">
                <div class="icon-card-info-sould">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  id="Layer_1" 
                  enable-background="new 0 0 512 512" 
                  height="50px" 
                  viewBox="0 0 512 512" 
                  width="50px"
                  >
                  <g><g><path d="m256 116.457h-16c-13.255 0-24-10.745-24-24 0-13.255 10.745-24 24-24h16c13.255 0 24 10.745 24 24 0 13.255-10.745 24-24 24z" fill="#cd3232"/></g><g><path d="m464 460.457h-416c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h416c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z" fill="#cd3232"/></g><g><path d="m432 460.457h-384c-17.673 0-32-14.327-32-32v-160c0-17.673 14.327-32 32-32h384c17.673 0 32 14.327 32 32v160c0 17.673-14.327 32-32 32z" fill="#ff4646"/></g><g><circle cx="96" cy="268.457" fill="#cd3232" r="16"/></g><g><circle cx="384" cy="268.457" fill="#cd3232" r="16"/></g><g><path d="m384.008 277.371c-2.993 0-5.916-1.507-7.6-4.243l-119.614-194.373c-3.562-5.789-9.998-9.384-16.794-9.384s-13.232 3.596-16.794 9.384l-119.615 194.373c-2.58 4.193-8.071 5.498-12.263 2.92-4.192-2.58-5.5-8.07-2.92-12.263l119.615-194.373c6.783-11.022 19.036-17.869 31.977-17.869s25.194 6.847 31.977 17.869l119.614 194.374c2.58 4.192 1.272 9.683-2.92 12.263-1.456.895-3.069 1.322-4.663 1.322z" fill="#463c4b"/></g><g><circle cx="240" cy="92.457" fill="#ff4646" r="24"/></g><g><g><path d="m72 416.457c-11.028 0-20-8.972-20-20v-8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 6.617 5.383 12 12 12s12-5.383 12-12v-22.111c0-4.575-2.542-8.688-6.634-10.733l-14.311-7.155c-6.819-3.411-11.055-10.265-11.055-17.89v-22.111c0-11.028 8.972-20 20-20s20 8.972 20 20v8c0 2.209-1.791 4-4 4s-4-1.791-4-4v-8c0-6.617-5.383-12-12-12s-12 5.383-12 12v22.111c0 4.575 2.542 8.688 6.634 10.733l14.311 7.155c6.819 3.41 11.055 10.265 11.055 17.889v22.111c0 11.029-8.972 20.001-20 20.001z" fill="#32283c"/></g><g><path d="m128 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z" fill="#32283c"/></g><g><path d="m304 416.457c-11.028 0-20-8.972-20-20v-80c0-11.028 8.972-20 20-20s20 8.972 20 20v80c0 11.028-8.972 20-20 20zm0-112c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12s12-5.383 12-12v-80c0-6.617-5.383-12-12-12z" fill="#e6e6eb"/></g><g><path d="m200 416.457h-16c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12h16c2.209 0 4 1.791 4 4s-1.791 4-4 4z" fill="#32283c"/></g><g><path d="m232 416.457h-16c-2.209 0-4-1.791-4-4v-112c0-2.209 1.791-4 4-4h16c11.028 0 20 8.972 20 20v80c0 11.028-8.972 20-20 20zm-12-8h12c6.617 0 12-5.383 12-12v-80c0-6.617-5.383-12-12-12h-12z" fill="#32283c"/></g><g><path d="m360 416.457c-11.028 0-20-8.972-20-20v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 6.617 5.383 12 12 12s12-5.383 12-12v-96c0-2.209 1.791-4 4-4s4 1.791 4 4v96c0 11.028-8.972 20-20 20z" fill="#e6e6eb"/></g><path d="m424 296.457h-32c-2.209 0-4 1.791-4 4s1.791 4 4 4h12v108c0 2.209 1.791 4 4 4s4-1.791 4-4v-108h12c2.209 0 4-1.791 4-4s-1.791-4-4-4z" fill="#e6e6eb"/></g></g></svg>
                </div>
                <div class="text-card-info-sould">
                  {{ $t('productdetail_productoAgotado') }}
                </div>
              </div>
            </div>
            
            <!-- Unidades en stock -->
            <div class="content_stock">
              <svg
                v-if="salesData.unidades > 0"
                class="icon-stock"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                />
              </svg>
              <svg
                v-else
                class="icon-stock"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
              <p class="stock-text">
                {{ salesData.unidades }} {{ $t('productdetail_stock') }}</span>
              </p>
            </div>
            <!-- Variantes de prodcuto -->
            <div v-if="this.data.detalle.con_variante > 0" class="content-variant">
              <div v-for="(variant, index) in data.variantes" :key="index">
                <label for="variant name" class="text-variant"
                  >{{ variant.nombre }}:</label
                >
                <SelectGroup :index="index" :variantes="data.variantes">
                  <option
                    v-for="item in variant.valores"
                    :key="item.option"
                    :value="item.option"
                    >{{ item.option }}</option
                  >
                </SelectGroup>
              </div>
            </div>
            <!-- Suma de productos -->
            <div :class="{ disabled: !salesData.estado }">
              <!-- Div quanti y btn -->
              <div class="content-quanti-btnShop" >
                <div class="quantity">
                  <!-- <p class="text-quantity">{{ $t('cart_cantidad') }}</p> -->
                  <button class="quantity_remove" v-on:click="removeQuantity()">
                    <menos-icon class="icon" />
                  </button>
                  <p class="quantity_value">{{ quantityValue }}</p>
                  <button class="quantity_add" v-on:click="addQuantity()">
                    <mas-icon class="icon" />
                  </button>

                  <!-- Anuncio ult unidad -->
                  <!-- <div
                    class="container-alerta"
                    v-if="this.maxQuantityValue == this.quantityValue"
                  >
                    <span class="alerta"> {{ $t('cart_ultimaUnidad') }}</span>
                  </div> -->
                </div>
                <!-- Btn comprar -->
                <div class="content-button ">
                  <button
                    ref="colorBtn"
                    class="btn"
                    v-if="!spent"
                    v-on:click="addShoppingCart"
                    id="AddToCartTag"
                  >
                    {{ $t('productdetail_añadiralcarrito') }}
                  </button>
                  <button
                    disabled
                    class="btn-disabled"
                    v-if="spent"
                    v-on:click="addShoppingCart"
                  >
                    {{ $t('home_cardAgotado') }}
                  </button>
                </div>
              </div>
              <!-- text de garantia -->
              <div class="item-info-product">
                <div v-if="data.info.garantia" class="content_buy_action">
                    <p class="text-unidades">
                      {{ $t('productdetail_garantia') }}
                    </p>
                    <span class="text-garantia">{{ data.info.garantia }}</span>
                </div>
                <!-- Categoria de producto -->
                <div class="category_product">
                    <p class="category-beffore">{{ $t('productdetail_categoria') }}:</p>
                    <p class="category-text">
                      {{
                        data.detalle.categoria_producto
                          .nombre_categoria_producto
                      }}
                    </p>
                </div>
                <!-- Compartir Redes -->
                <div class="content-shared">
                    <p class="text-unidades" style="margin-right: 10px;">
                      {{ $t('productdetail_compartir') }}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="features">
          <KoDescription
            :dataStore="dataStore"
            :data="data"
            :envio="envio"
          ></KoDescription>
        </div>
      </div>
      <!-- Productos relacionados -->
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
import KoDescription from './_productdetails/descriptionProduct'
import KoSuggesProduct from './_productdetails/suggestionsProducto'
import Zoom from './_productdetails/zoomImg'
import idCloudinary from '../../mixins/idCloudinary'

export default {
  mixins: [idCloudinary],
  name: 'Ko-ProductDetail-1',
  props: {
    settingByTemplate: Object,
  },
  components: {
    SelectGroup,
    KoDescription,
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
    facebooPixel() {
      return this.$store.state.analytics_tagmanager
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
  background: #efefef;
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
  /* box-shadow: 10px 14px 28px #ededed, -10px -14px 28px #f1f1f1; */
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
  color: rgba(21, 20, 57, 0.541);
}
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
  border-left: 1px solid rgba(129,129,129,.2);;
}
.content-right {
  margin-left: 20px;
}
.text-name {
  font-weight: 400;
  font-size: 34px;
  line-height: 1.2;
  color: #000000;
  font-family: 'David Libre', serif !important;
  margin-bottom: 20px;
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
  font-weight: 600;
  font-size: 22px;
  line-height: 1.2;
  font-family: 'Lora', serif !important;
  margin-bottom: 20px;
  color: #ed2353;
}

.content_stock {
  @apply flex flex-row justify-start items-center w-full;
}
.icon-stock {
  fill: #ed2353;
  margin-right: 5px;
}
.content-quanti-btnShop {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  padding-bottom: 30px;
  border-bottom: solid 1px rgba(129,129,129,.2);;
}
.stock-text {
  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  font-family: 'Lora', serif !important;
  color: #333;
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
  color: #333;
  line-height: 1.5;
  text-decoration: none;
}
.content-variant{
  margin-top: 15px;
  margin-bottom: 30px;
}
.text-variant {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
.text-unidades {
  font-weight: 600;
  font-size: 14px;
  font-family: 'Lora', serif !important;
  color: #333;
}
.text-garantia {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-left: 5px;
  font-family: 'Lora', serif !important;
}
.content_buy_action {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.transport-icon{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
  color: #00a650;
  font-family: 'Lora', serif !important;
}
.content_card-info {
  @apply w-full flex flex-row justify-start items-end;
  margin-bottom: 10px;
}
.text-card-info-sould{
  color: #ed2353;
  margin-left: 8px;
  font-weight: bold;
  /* line-height: 1.2; */
  font-size: 16px;
  font-family: 'Lora', serif !important;
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
  color: #333;
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
  margin-left: 15px;
}
.category_product {
  @apply flex flex-row justify-start items-center w-full;
  margin-top: 15px;
}
.category-beffore {
  font-weight: 600;
  line-height: 1.2;
  font-size: 14px;
  font-family: 'Lora', serif !important;
  color: #333;
}
.category-text {
  margin-left: 5px;
  font-weight: 400;
  line-height: 1.2;
  font-size: 14px;
  font-family: 'Lora', serif !important;
  color: #777;
}
.content-shared {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
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
  font-family: 'Lora', serif !important;
  color: white;
  border-radius: 35px;
  border: solid 2px #ed2353;
  background-color: #ed2353;
  padding: 12px 20px;
  font-size: 13px;
  line-height: 18px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  transition: color 0.25s ease, background-color 0.25s ease,
    border-color 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
}
.btn:hover {
  color: white;
  border: solid 2px #D7204B;
  background-color: #D7204B;
}
.btn-disabled {
  color: white;
  border-radius: 35px;
  border: solid 2px gray;
  background-color: gray;
  padding: 12px 20px;
  font-size: 13px;
  line-height: 18px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  transition: color 0.25s ease, background-color 0.25s ease,
    border-color 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
}
.quantity {
  display: flex;
  flex-direction: row;
  position: relative;
  box-sizing: border-box;
  max-width: 240px;
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
  border: 1px solid #777;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background: transparent;
  width: 30px;
  height: 42px;  
}
.quantity_value {
  font-size: 14px;
  color: #333;
  border: 1px solid #777;
  width: 30px;
  height: 42px;
  border-style: solid none solid none;
  background: transparent;
  justify-content: center;
  display: flex;
  align-items: center;
}
.quantity_add {
  border: 1px solid #777;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background: transparent;
  width: 30px;
  height: 42px; 
}
.quantity_add:hover {
  @apply bg-red-btnbannershop;
}
.quantity_remove:hover {
  @apply bg-red-btnbannershop;
}
.icon {
  font-size: 16px;
  color: #777;
}
.quantity_add:hover .icon{
  color: white;
}
.quantity_remove:hover .icon{
  color: white;
}
.features {
  width: 100%;
  display: flex;
  /* border-top: 1px solid var(--color_border); */
  border-top: 1px solid rgba(129,129,129,.2);
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
  .wrapper {
    padding: 15px;
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
