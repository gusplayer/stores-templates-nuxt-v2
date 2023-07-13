<template>
  <div
    class="wrapper-productDetail"
    :style="[
      settingByTemplate11[0].detailsProduct,
      settingByTemplate11[0].settingGeneral,
      {
        '--font-style-1':
          this.settingByTemplate11[0]?.settingGeneral?.fount_1 ?? 'Roboto',
      },
    ]"
  >
    <div v-if="loading" class="container-productDetail-loading" />
    <div v-else class="container-productDetail">
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
            <div class="photos">
              <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                <div class="swiper-wrapper h-full">
                  <div class="swiper-slide">
                    <div class="photos_selected">
                      <img
                        @click="selectedPhoto(data.detalle.foto_cloudinary)"
                        class="img-list"
                        v-lazy="
                          idCloudinary(data.detalle.foto_cloudinary, 150, 150)
                        "
                        alt="Product Img"
                      />
                    </div>
                  </div>
                  <div
                    class="swiper-slide h-full"
                    v-for="(foto, itemsfoto) in data.fotos"
                    :key="itemsfoto"
                  >
                    <div class="photos_selected">
                      <img
                        @click="selectedPhoto(foto.foto_cloudinary)"
                        class="img-list"
                        v-lazy="
                          idCloudinaryQuality(foto.foto_cloudinary, 850, 850)
                        "
                        alt="Product Img"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide h-full">
                    <div class="photos_selected">
                      <img
                        v-if="idYoutube"
                        v-lazy="`https://img.youtube.com/vi/${idYoutube}/0.jpg`"
                        v-show="idYoutube"
                        v-on:mouseover="existYoutube = true"
                        class="video"
                        alt="Product Img"
                      />
                    </div>
                  </div>
                </div>
                <div class="swiper-prev" v-if="data.fotos.length > 3">
                  <FlechaUp-icon class="icon-swiper" />
                </div>
                <div class="swiper-next" v-if="data.fotos.length > 3">
                  <Flechadown-icon class="icon-swiper" />
                </div>
              </div>
            </div>
            <div class="wrapper-photo_main">
              <div
                v-on:mouseover="activeZoom = !activeZoom"
                v-if="this.activeZoom"
                v-show="!existYoutube"
                class="photo_main"
              >
                <img
                  class="photo_main"
                  v-lazy="idCloudinaryQuality(selectPhotoUrl, 850, 850)"
                  alt="Product Zoom"
                />
              </div>
              <div
                v-on:mouseleave="activeZoom = !activeZoom"
                v-if="!this.activeZoom"
                v-show="!existYoutube"
                class="photo_main"
              >
                <zoom :photo="selectPhotoUrl" />
              </div>
              <iframe
                v-show="existYoutube"
                :src="`https://www.youtube.com/embed/${idYoutube}?rel=0&amp;controls=0&amp;showinfo=0`"
                frameborder="0"
                allowfullscreen
                class="photo_main"
              ></iframe>
            </div>
            <ProductSlide
              class="w-full h-full box-border photos_responsive"
              :photos="data.fotos"
              :photo="data.detalle.foto_cloudinary"
              :idYoutube="idYoutube"
            />
          </div>
        </div>
        <div
          class="right"
          :style="`margin-top:${this.settingByTemplate11[0].detailsProduct['--marginTopTitle']};`"
        >
          <div class="content-items-right">
            <div class="content-name">
              <p
                class="text-name"
                :style="`font-size:${this.settingByTemplate11[0].detailsProduct['--fontSizeTitle']}; font-weight:${this.settingByTemplate11[0].detailsProduct['--fontWeighTitle']};`"
              >
                {{ data.detalle.nombre }}
              </p>
            </div>
            <div class="content-price">
              <p
                class="text-price"
                :style="`font-size:${this.settingByTemplate11[0].detailsProduct['--fontSizePrice']}; font-weight:${this.settingByTemplate11[0].detailsProduct['--fontWeighPrice']};`"
                v-show="salesData.precio"
              >
                {{
                  salesData.precio
                    | currency(
                      dataStore.tienda.codigo_pais,
                      dataStore.tienda.moneda
                    )
                }}
              </p>
              <div
                class="flex flex-row justify-center items-center"
                v-show="
                  data.info.tag_promocion == 1 &&
                  data.info.promocion_valor &&
                  salesData.precio
                "
              >
                <p class="card-discont">
                  {{ data.info.promocion_valor }}% De Descuento
                </p>
                <p class="text-promocion">
                  {{
                    (data.info.tag_promocion == 1 && data.info.promocion_valor
                      ? Math.trunc(
                          salesData.precio /
                            (1 - data.info.promocion_valor / 100)
                        )
                      : 0)
                      | currency(
                        dataStore.tienda.codigo_pais,
                        dataStore.tienda.moneda
                      )
                  }}
                </p>
              </div>
            </div>
            <div class="empty"></div>
            <div class="content-stock">
              <p class="stock-text-1">{{ $t('productdetail_stock') }}:</p>
              <p class="stock-text-2">{{ salesData.unidades }}</p>
            </div>
            <div class="content-stock" v-if="data.info.descripcion_corta">
              <p class="stock-text-1">{{ $t('productdetail_informacion') }}:</p>
              <p class="stock-text-2">{{ data.info.descripcion_corta }}</p>
            </div>
            <div class="empty"></div>
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
            <div
              class="w-full flex flex-row items-center my-8"
              v-if="userDropshipping.userName"
            >
              <p class="text-variant" style="margin-right: 10px">
                {{ $t('productdetail_dropshipping') }}
              </p>
              <p class="stock-text-2">
                {{ userDropshipping.userName }}
              </p>
            </div>
            <div class="w-full flex flex-row items-center">
              <p class="text-variant" style="margin-right: 10px">
                {{ $t('productdetail_compartir') }}
              </p>
              <a
                :href="this.sharingFacebook"
                target="_blank"
                rel="noreferrer noopener"
                class="btn-facebook"
              >
                <facebook-icon class="wp-icon" />
              </a>
              <button class="btn-whatsapp" @click="redirectWP()">
                <whatsapp-icon class="wp-icon" />
              </button>
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
                  v-else-if="!this.salesData.estado"
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
        <OptionTab :dataStore="dataStore" :data="data" :envio="envio" />
      </div>
      <div class="section-suggesProduct">
        <KoSuggesProduct :category="this.category.slice(0, 8)" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import idCloudinary from '../../mixins/idCloudinary'
import currency from '../../mixins/formatCurrent'
export default {
  mixins: [idCloudinary, currency],
  name: 'Ko-ProductDetail',
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebookPixel: Object,
    settingByTemplate11: Array,
  },
  components: {
    OptionTab: () => import('./_productdetails/OptTab'),
    SelectGroup: () => import('./_productdetails/selectGroup'),
    KoSuggesProduct: () => import('./_productdetails/suggestionsProducto'),
    ProductSlide: () => import('./_productdetails/productSlide'),
    Zoom: () => import('./_productdetails/zoomImg'),
  },
  mounted() {
    this.$store.state.beforeCombination = []
    if (
      this.productsData &&
      this.productsData.length &&
      this.productsData.length > 0
    ) {
      this.getDataProduct()
    } else {
      this.getDataProductPrev()
    }
    if (Object.keys(this.dataStore.medios_envio).length) {
      this.setOptionEnvio()
    }
    if (
      this.$route.query &&
      this.$route.query.userId &&
      this.$route.query.userName
    ) {
      this.userDropshipping.userId = this.$route.query.userId
      this.userDropshipping.userName = this.$route.query.userName
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
        quote: '',
      },
      sharingFacebook: '',
      userDropshipping: {
        userId: '',
        userName: '',
      },
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
            if (response && response.data) {
              this.sharing.url = window.location.href
              this.sharing.quote = `Explora%20el%20producto%20${response.data.detalle.nombre}%2C%20te%20van%20a%20encantar.%0ALink%20del%20producto%3A%20${this.sharing.url}`
              this.sharingFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.sharing.url}&quote=${this.sharing.quote}`
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
            if (
              this.facebookPixel &&
              this.facebookPixel.pixel_facebook != null
            ) {
              window.fbq('track', 'ViewContent', {
                content_type: 'product',
                content_ids: [`${this.data.detalle.id}`],
                contents: [
                  {
                    id: `${this.data.detalle.id}`,
                    quantity: this.quantityValue,
                  },
                ],
                value: this.salesData.precio ? this.salesData.precio : 0,
                currency: this.dataStore.tienda.moneda,
                content_name: this.data.detalle.nombre,
                content_category: 'otro',
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
        nombre: 'Producto de prueba',
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
            case 'sinEnvio':
              this.envio = {
                titulo: 'Sin envio',
                desc: 'Tienes que acercarte a la tienda a recoger tu pedido.',
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
                desc: 'Según la suma del costo de tus productos te cobraran el envio',
              }
              break
            case 'precio_ciudad':
              this.envio = {
                titulo: 'Tarifa por ciudad',
                desc: 'Según la ciudad te cobraran el envio',
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
        promocion_valor: this.data.info.promocion_valor,
        tag_promocion: this.data.info.tag_promocion,
        dropshipping: this.userDropshipping.userId,
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
      this.$store.commit('UPDATE_CONTENT_CART')
      this.$router.push('/productos')
      this.$store.commit('SET_OPEN_ORDER', true)
      // this.$store.state.orderComponent = true
      this.$store.dispatch('SEND_ADD_TO_CART', 1)
    },
    GoPayments() {
      let objeto = {
        id: this.data.info.id,
        cantidad: this.quantityValue,
        combinacion:
          this.salesData && this.salesData.combinacion
            ? this.salesData.combinacion
            : undefined,
        dropshipping: this.userDropshipping.userId,
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
        this.$store.dispatch('SEND_ADD_TO_CART', 2)
        if (this.layourUnicentro == true) {
          window.open(`https://checkout.komercia.co/?params=${json}`)
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`
        }
      }
    },
    evalStock(mq, qv) {
      return !(mq - qv < 0)
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
      let baseUrlMovil = 'https://api.whatsapp.com/send?'
      let baseUrlPc = 'https://web.whatsapp.com/send?'
      let urlProduct = window.location.href
      let text = `Hola 😀, %0AQuiero compartir contigo éste  producto, seguro te va a encantar: ${this.data.detalle.nombre}%0A%0ALink de compra: ${urlProduct}%0A`
      if (this.mobileCheck()) {
        window.open(`${baseUrlMovil}text=${text}`, '_blank')
      } else {
        window.open(`${baseUrlPc}text=${text}`, '_blank')
      }
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
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase()
      }
      return ''
    },
  },
  head() {
    return {
      title: `Vista del producto ${
        this.data && this.data.detalle ? this.data.detalle.nombre : ''
      }`,
      meta: [
        {
          hid: 'product:catalog_id',
          property: 'product:catalog_id',
          content: this.data && this.data.detalle ? this.data.detalle.id : '',
        },

        {
          hid: 'og:title',
          property: 'og:title',
          content:
            this.data && this.data.detalle ? this.data.detalle.nombre : '',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.sharing && this.sharing.url ? this.sharing.url : '',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            this.data && this.data.info ? this.data.info.descripcion_corta : '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            this.data && this.data.detalle
              ? this.data.detalle.foto_cloudinary
              : '',
        },
        {
          hid: 'og:price:amount',
          property: 'og:price:amount',
          content:
            this.salesData && this.salesData.precio
              ? this.salesData.precio
              : '',
        },
        {
          hid: 'og:price:currency',
          property: 'og:price:currency',
          content: this.dataStore.tienda.moneda
            ? this.dataStore.tienda.moneda
            : '',
        },
        {
          hid: 'product:brand',
          property: 'product:brand',
          content:
            this.data && this.data.info && this.data.info.marca
              ? this.data.info.marca
              : '',
        },
        {
          hid: 'product:availability',
          property: 'product:availability',
          content:
            this.salesData && this.salesData.unidades > 0
              ? 'in stock'
              : 'out of stock',
        },
        {
          hid: 'product:condition',
          property: 'product:condition',
          content: 'new',
        },
        {
          hid: 'product:price:amount',
          property: 'product:price:amount',
          content:
            this.salesData && this.salesData.precio
              ? this.salesData.precio
              : '',
        },
        {
          hid: 'product:price:currency',
          property: 'product:price:currency',
          content: this.dataStore.tienda.moneda
            ? this.dataStore.tienda.moneda
            : '',
        },
        {
          hid: 'product:sale_price:amount',
          property: 'product:sale_price:amount',
          content:
            this.data &&
            this.data.info &&
            this.data.info.tag_promocion == 1 &&
            this.data.info.promocion_valor
              ? Math.trunc(
                  this.salesData.precio /
                    (1 - this.data.info.promocion_valor / 100)
                )
              : '',
        },
        {
          hid: 'product:sale_price:currency',
          property: 'product:sale_price:currency',
          content: this.dataStore.tienda.moneda
            ? this.dataStore.tienda.moneda
            : '',
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      productID:
        this.data && this.data.detalle && this.data.detalle.id
          ? this.data.detalle.id
          : '',
      name:
        this.data && this.data.detalle && this.data.detalle.nombre
          ? this.data.detalle.nombre.slice(0, 149)
          : '',
      description:
        this.data && this.data.info && this.data.info.descripcion_corta
          ? this.data.info.descripcion_corta.slice(0, 9998)
          : `Producto de la tienda ${this.dataStore.tienda.nombre}`,
      url: this.sharing && this.sharing.url ? this.sharing.url : '',
      image:
        this.data && this.data.detalle && this.data.detalle.foto_cloudinary
          ? this.data.detalle.foto_cloudinary
          : '',
      brand:
        this.data && this.data.info && this.data.info.marca
          ? this.data.info.marca
          : '',
      sku:
        this.salesData && this.salesData.unidades
          ? this.salesData.unidades
          : '',
      offers: [
        {
          '@type': 'Offer',
          price:
            this.salesData && this.salesData.precio
              ? this.salesData.precio
              : '',
          priceCurrency: this.dataStore.tienda.moneda
            ? this.dataStore.tienda.moneda
            : '',
          itemCondition: 'https://schema.org/NewCondition',
          availability:
            this.salesData && this.salesData.unidades > 0
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
        },
      ],
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          propertyID: 'item_group_id',
          value:
            this.data && this.data.detalle
              ? `FB${this.data.detalle.categoria_producto.id}_${this.data.detalle.categoria_producto.nombre_categoria_producto}`
              : '',
          status: 'active',
        },
      ],
    }
  },
}
</script>

<style scoped>
.btn-facebook {
  color: #1877f2;
  border-radius: 5px;
  background-color: transparent;
  width: 10px;
  cursor: pointer;
  transition: all 200ms ease-in;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  border: 0px;
  margin-right: 20px;
}
.btn-facebook:hover {
  color: black;
}
.btn-whatsapp {
  color: #25d366;
  border-radius: 5px;
  background-color: transparent;
  width: 10px;
  cursor: pointer;
  transition: all 200ms ease-in;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  border: 0px;
}
.btn-whatsapp:hover {
  color: black;
}
.wp-icon {
  font-size: 27px;
  bottom: 3px;
}
.wrapper-left {
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  align-items: flex-start;
}
.photos_responsive {
  display: none;
}
.photos {
  min-width: 110px;
  max-width: 110px;
  min-height: 442px;
  max-height: 442px;
  margin-right: 30px;
  @apply w-full h-full flex relative overflow-hidden;
}
.photos_selected {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  max-height: 100px;
  max-width: 100px;
  min-height: 100px;
  min-width: 100px;
  @apply w-full h-full;
}
.img-list {
  vertical-align: top;
  @apply w-full h-full cursor-pointer object-cover rounded-6 mb-10;
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
  color: var(--hover_text);
}
.video {
  width: 100px;
  height: 100px;
  min-height: 100px;
  border-radius: 5px;
  margin-bottom: 10px;
  object-fit: cover;
  object-position: center;
}
.wrapper-photo_main {
  position: relative;
  max-width: 442px;
  max-height: 442px;
  width: 100%;
  margin-right: 10px;
}
.photo_main {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;
  max-height: 442px;
}
.wrapper-productDetail {
  background: var(--background_color_1);
  @apply w-full flex justify-center items-center;
}
.container-productDetail-loading {
  height: calc(100vh - 420px);
  max-width: 1200px;
  padding: 50px 30px 30px 30px;
  background: var(--background_color_1);
  @apply w-full flex flex-col justify-center items-center;
}
.container-productDetail {
  background: var(--background_color_1);
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
  margin-bottom: 8px;
  @apply w-full flex flex-col justify-start items-start;
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
.box-quantity {
  background-color: transparent;
  border: 1px solid var(--border);
  @apply w-75 h-50 flex text-center justify-center items-center;
}
.box-quantity-btns {
  background-color: var(--color_background_btn);
  border: 1px solid var(--color_background_btn);
  @apply w-25 h-50 flex flex-col text-center justify-center items-center;
}
.btn-quantity {
  background-color: var(--color_background_btn);
  border-color: var(--color_background_btn);
  @apply w-25 h-25 flex justify-center items-center border-t border-r;
}

.card-discont {
  color: var(--color_text_btn);
  background-color: var(--color_background_btn);
  padding: 2px 10px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
}
.text-promocion {
  font-size: 14px;
  font-weight: bold;
  color: var(--color_subtext);
  text-decoration: line-through;
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
    @apply mb-20;
  }
  .content-options {
    @apply flex;
  }
  .tab {
    @apply w-9/0 flex mt-40;
  }
  .content-options {
    @apply w-full flex flex-col justify-start items-center;
  }
  .btn {
    color: var(--color_text_btn);
    background-color: var(--color_background_btn);
    transition: all 0.15s ease-in;
    @apply w-full h-54 flex flex-row justify-center items-center;
  }
  .btn-disabled {
    color: var(--color_text_btn);
    background-color: var(--color_background_btn);
    transition: all 0.15s ease-in;
    @apply w-full h-54 flex flex-row justify-center items-center;
  }
  .btn:hover .text-addCart {
    color: var(--hover_text_btn);
    background: var(--hover_Bg_btn);
    transition: all 0.15s ease-in;
  }
  .quantity {
    @apply w-full;
  }
  .text-name {
    color: var(--color_text);
    /* font-size: 22px; */
    line-height: 1;
    font-family: var(--font-style-1) !important;
  }
  .text-price {
    color: var(--color_price);
    /* font-size: 20px; */
    line-height: 26px;
    letter-spacing: 0.3px;
    font-family: var(--font-style-1) !important;
  }
  .text-stock {
    color: #92bb35;
    font-size: 14px;
    line-height: 1.42857143;
    letter-spacing: -0.02em;
    font-family: var(--font-style-1) !important;
    @apply font-semibold ml-30;
  }
  .text-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    cursor: pointer;
    color: var(--color_text_btn);
  }
  .text-quantity_value {
    padding: 0 35px;
    border: none;
    font-size: 21px;
    @apply w-full flex justify-center items-center text-center font-semibold;
  }
  .text-addCart {
    font-family: var(--font-style-1) !important;
    color: var(--color_text_btn);
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
    transition: all 0.6s ease-in-out;
    font-family: var(--font-style-1) !important;
    @apply font-semibold mr-10;
  }
  .text-option {
    color: var(--color_subtext);
    font-size: 16px;
    transition: all 0.6s ease-in-out;
    font-family: var(--font-style-1) !important;
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
    background-color: var(--border);
    max-width: 1200px;
    @apply w-full h-1;
  }
  .content-stock {
    @apply w-full flex flex-row justify-start items-center my-8;
  }
  .stock-text-1 {
    color: var(--color_subtext);
    font-size: 16px;
    font-family: var(--font-style-1) !important;
    @apply font-semibold mr-10;
  }
  .stock-text-2 {
    color: var(--color_subtext);
    font-size: 15px;
    font-family: var(--font-style-1) !important;
    @apply font-normal text-left;
  }
}
@media (min-width: 425px) {
  .content-direction-btns {
    @apply flex flex-col;
  }
}
@media (min-width: 480px) {
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
    color: var(--hover_text);
    transition: all 0.25s ease;
  }
  .s2:hover {
    color: var(--hover_text);
    transition: all 0.25s ease;
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
  .content-direction-btns {
    @apply flex flex-col;
  }
}
@media (min-width: 1080px) {
  .content-options {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .photos {
    display: none;
  }
  .wrapper-photo_main {
    display: none;
  }
  .photos_responsive {
    /* width: 100%;
    height: 375px;
    max-width: 400px; */
    display: flex;
    /* box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 10px; */
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
