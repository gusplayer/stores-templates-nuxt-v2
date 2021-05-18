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
                    :src="idCloudinary(data.detalle.foto_cloudinary, 100, 100)"
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
                    :src="idCloudinary(foto.foto_cloudinary, 100, 100)"
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
                :src="idCloudinaryDetalle(selectPhotoUrl, 645, 430)"
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
            <p
              class="text-promocion"
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
            <div
              class="wrapper-price"
              :class="data.info.tag_promocion == 1 ? '' : 'wrapper-price_space'"
            >
              <p class="text-precio" v-show="salesData.precio">
                {{
                  salesData.precio
                    | currency(
                      dataStore.tienda.codigo_pais,
                      dataStore.tienda.moneda
                    )
                }}
              </p>
              <p
                class="card-descuento"
                v-show="
                  data.info.tag_promocion == 1 &&
                  data.info.promocion_valor &&
                  salesData.precio
                "
              >
                {{ data.info.promocion_valor }}% OFF
              </p>
            </div>
            <div class="content_buy_action">
              <div
                v-if="envio.titulo == 'Envío gratis'"
                class="content_buy_action"
              >
                <p class="card-info-2">
                  <svg
                    class="transporte-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z"
                    /></svg
                  >{{ $t('home_cardGratis') }}
                </p>
              </div>
              <div class="content_card-info">
                <p class="card-info-1" v-if="spent">
                  {{ $t('home_cardAgotado') }}
                </p>
              </div>
            </div>
            <div v-if="data.info.descripcion_corta" style="margin-bottom: 5px;">
              <p class="text-marca">
                <strong>{{ data.info.descripcion_corta }}</strong>
              </p>
            </div>
            <div v-if="this.data.detalle.con_variante > 0">
              <div v-for="(variant, index) in data.variantes" :key="index">
                <label lang="es" for="variant name" class="text-variant"
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
                  <p class="text-quantity">{{ $t('cart_cantidad') }}</p>
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
                    <span class="alerta"> {{ $t('cart_ultimaUnidad') }}</span>
                  </div>
                </div>
                <div class="item-info-product">
                  <div v-if="data.info.garantia" class="content_buy_action">
                    <p class="text-unidades">
                      {{ $t('productdetail_garantia') }}
                    </p>
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
                      id="AddToCartTag"
                    >
                      {{ $t('productdetail_btnComprar') }}
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
                  <div class="content-shared">
                    <p class="text-unidades" style="margin-right: 10px;">
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
                  <div class="content-float-info" id="sticky">
                    <p class="text-name">{{ data.detalle.nombre }}</p>
                    <p class="text-marca">
                      <strong>{{ data.info.marca }}</strong>
                    </p>
                    <p
                      class="text-promocion"
                      v-show="
                        data.info.tag_promocion == 1 &&
                        data.info.promocion_valor &&
                        salesData.precio
                      "
                    >
                      {{
                        (data.info.tag_promocion == 1 &&
                        data.info.promocion_valor
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
                    <div
                      class="wrapper-price"
                      :class="
                        data.info.tag_promocion == 1
                          ? ''
                          : 'wrapper-price_space'
                      "
                    >
                      <p class="text-precio" v-show="salesData.precio">
                        {{
                          salesData.precio
                            | currency(
                              dataStore.tienda.codigo_pais,
                              dataStore.tienda.moneda
                            )
                        }}
                      </p>
                      <p
                        class="card-descuento"
                        v-show="
                          data.info.tag_promocion == 1 &&
                          data.info.promocion_valor &&
                          salesData.precio
                        "
                      >
                        {{ data.info.promocion_valor }}% OFF
                      </p>
                    </div>
                    <div class="content_buy_action">
                      <div
                        v-if="envio.titulo == 'Envío gratis'"
                        class="content_buy_action"
                      >
                        <p class="card-info-2">
                          <svg
                            class="transporte-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z"
                            /></svg
                          >{{ $t('home_cardGratis') }}
                        </p>
                      </div>
                      <div class="content_card-info">
                        <p class="card-info-1" v-if="spent">
                          {{ $t('home_cardAgotado') }}
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        ref="colorBtn"
                        class="btn"
                        v-if="!spent"
                        v-on:click="addShoppingCart"
                      >
                        {{ $t('productdetail_btnComprar') }}
                      </button>
                      <button disabled class="btn-disabled" v-if="spent">
                        {{ $t('home_cardAgotado') }}
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
                <span class="alert">{{ $t('cart_ultimaUnidad') }}</span>
              </div>
            </transition>
          </div>
          <div style="width: 100%; margin-left: 10px;">
            <div class="content_buy_action-responsive" v-if="spent">
              <p class="card-info-1-res">{{ $t('home_cardAgotado') }}</p>
            </div>
            <button
              class="btn-responsive"
              ref="color2"
              v-if="!spent"
              v-on:click="addShoppingCart"
            >
              <cartArrowDown class="card-icon-cart" />{{
                $t('home_cardAgregar')
              }}
            </button>
          </div>
        </div>
      </div>
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
import productSlide from './_productdetails/productSlide'
import selectGroup from './_productdetails/selectGroup'
import koDescription from './_productdetails/descriptionProduct.vue'
import koSuggesProduct from './_productdetails/suggestionsProducto'
import idCloudinary from '../../mixins/idCloudinary'
import idCloudinaryDetalle from '../../mixins/idCloudinary'

import zoom from './_productdetails/zoomImg'

export default {
  mixins: [idCloudinary, idCloudinaryDetalle],
  name: 'Ko-ProductDetail-1',
  props: {
    dataStore: Object,
    productsData: Array,
    whatsapp: String,
    envios: Object,
    facebooPixel: Object,
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
        quote: '',
      },
      sharingFacebook: '',
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
        promocion_valor: this.data.info.promocion_valor,
        tag_promocion: this.data.info.tag_promocion,
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
      this.$router.push('/')
      this.$store.state.openOrder = true
      this.$store.state.orderComponent = true
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
  margin-top: 10px;
}
.wrapper-price_space {
  margin-top: 10px;
}
.wrapper-price {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  margin-bottom: 12px;
}
.wrapper-price > p:nth-child(2) {
  margin-left: 5px;
}
.text-precio {
  font-size: 30px;
  font-weight: bold;
  /* color: var(--color_text); */
  color: #000000;
  line-height: 24px;
}
.card-descuento {
  font-size: 12px;
  color: #00a650;
  /* font-weight: bold; */
  border-radius: 3px;
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
  font-weight: bold;
  min-height: 24px;
  max-height: 24px;
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
  min-height: 24px;
  max-height: 24px;
}
.transporte-icon {
  fill: black;
  width: 22px;
  height: 22px;
  margin-right: 5px;
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
  bottom: 2px;
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
