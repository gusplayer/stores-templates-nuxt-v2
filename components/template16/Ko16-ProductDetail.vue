<template>
  <div
    class="w-full flex flex-col justify-center items-center mb-30"
    style="background-color: var(--background_color_1)"
    :style="[
      settingByTemplate16[0].detailsProducts,
      settingByTemplate16[0].settingsGeneral,
      {
        '--font-style-1':
          settingByTemplate16[0]?.settingsGeneral?.font ?? 'Poppins',
      },
    ]"
  >
    <div v-if="loading" />
    <div
      class="w-full box-content flex items-center justify-center"
      style="background-color: var(--background_color_2)"
    >
      <div
        class="w-full max-w-7xl flex flex-row items-center justify-start py-10 px-10 md:px-5"
        :style="`color: ${settingByTemplate16[0].detailsProducts.color_breadCrumbs};`"
      >
        <nuxt-link to="/" class="text-14">
          {{ $t('header_inicio') }}
        </nuxt-link>
        <p class="px-10 text-14 font-bold">></p>
        <nuxt-link to="/productos" class="text-14 font-bold">
          {{ $t('header_productos') }}
        </nuxt-link>
        <p class="px-10 text-14 font-bold">></p>
        <p v-if="!loading" class="text-14 font-bold">
          {{ data?.detalle?.nombre }}
        </p>
      </div>
    </div>
    <div
      v-if="!loading"
      class="w-full h-full flex justify-center items-center px-10 md:px-5 mt-40 max-w-7xl"
    >
      <div class="w-full h-full flex flex-col justify-center items-center">
        <div
          class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-start"
        >
          <div class="w-full flex flex-col justify-center items-center">
            <div class="w-full flex flex-row items-start pb-10">
              <div
                class="hidden md:flex w-full h-full relative overflow-hidden mr-30 max-w-[110px] max-h-[442px] min-h-[442px]"
              >
                <div ref="mySwiper" v-swiper:mySwiper="swiperOption">
                  <div class="swiper-wrapper w-full h-full">
                    <div class="swiper-slide w-full h-full">
                      <div
                        class="w-full h-full flex flex-col justify-stretch max-h-[100px] max-w-[100px]"
                      >
                        <img
                          v-lazy="
                            idCloudinary(data.detalle.foto_cloudinary, 150, 150)
                          "
                          class="w-full h-full cursor-pointer object-cover rounded-6 mb-10 align-top"
                          width="100"
                          height="100"
                          alt="Product Img"
                          @click="selectedPhoto(data.detalle.foto_cloudinary)"
                        />
                      </div>
                    </div>
                    <div
                      v-for="(foto, itemsFoto) in data.fotos"
                      :key="itemsFoto"
                      class="swiper-slide w-full h-full"
                    >
                      <div
                        class="w-full h-full flex flex-col justify-stretch max-h-[100px] max-w-[100px]"
                      >
                        <img
                          v-lazy="
                            idCloudinaryQuality(foto.foto_cloudinary, 850, 850)
                          "
                          class="w-full h-full cursor-pointer object-cover rounded-6 mb-10 align-top"
                          alt="Product Img"
                          @click="selectedPhoto(foto.foto_cloudinary)"
                        />
                      </div>
                    </div>
                    <div class="swiper-slide w-full h-full">
                      <div
                        class="w-full h-full flex flex-col justify-stretch max-h-[100px] max-w-[100px]"
                      >
                        <img
                          v-if="idYoutube"
                          v-lazy="
                            `https://img.youtube.com/vi/${idYoutube}/0.jpg`
                          "
                          class="w-full h-full cursor-pointer object-cover rounded-6 mb-10 align-top"
                          alt="Product video"
                          @mouseover="existYoutube = true"
                        />
                      </div>
                    </div>
                  </div>
                  <div v-if="data.fotos.length > 3" class="swiper-prev">
                    <FlechaUp-icon class="icon-swiper" />
                  </div>
                  <div v-if="data.fotos.length > 3" class="swiper-next">
                    <Flechadown-icon class="icon-swiper" />
                  </div>
                </div>
              </div>
              <div
                class="relative hidden md:flex w-full h-full max-w-[375px] max-h-[375px] mr-10"
              >
                <div
                  v-if="activeZoom && !existYoutube"
                  class="w-full h-full max-w-[375px] max-h-[375px] object-contain rounded-10 object-top"
                >
                  <img
                    v-lazy="idCloudinaryQuality(selectPhotoUrl, 850, 850)"
                    class="w-full h-full max-w-[375px] max-h-[375px] object-contain rounded-10 object-top"
                    alt="ProductImg grande"
                  />
                </div>
                <iframe
                  v-show="existYoutube"
                  :src="`https://www.youtube.com/embed/${idYoutube}?rel=0&amp;controls=0&amp;showinfo=0`"
                  frameborder="0"
                  allowfullscreen
                  class="w-full h-full max-w-[375px] max-h-[375px] object-contain rounded-10 object-top"
                ></iframe>
              </div>
              <div
                class="w-full h-full box-border flex md:hidden justify-start items-center"
              >
                <ProductSlide
                  class="w-full h-full max-w-[375px]"
                  :photos="data.fotos"
                  :photo="data.detalle.foto_cloudinary"
                  :id-youtube="idYoutube"
                />
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col justify-start items-start">
            <p
              class="mb-20"
              :style="`font-size:${settingByTemplate16[0].detailsProducts.color_title} !important; font-weight:${settingByTemplate16[0].detailsProducts.fontWeightTitle}; color:${settingByTemplate16[0].detailsProducts.color_title};`"
            >
              {{ data.detalle.nombre }}
            </p>
            <div class="w-full flex flex-row justify-start items-center mb-20">
              <p
                v-if="salesData.precio"
                :style="`font-size:${settingByTemplate16[0].detailsProducts.fontSizePrice}; font-weight:${settingByTemplate16[0].detailsProducts.fontWeightPrice}; color:${settingByTemplate16[0].detailsProducts.color_price};`"
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
                v-if="
                  data.info.tag_promocion == 1 &&
                  data.info.promocion_valor &&
                  salesData.precio
                "
                class="w-full flex flex-row justify-start items-center"
              >
                <p
                  class="text-12 mx-5 bg-red-500 text-white-white px-3 py-5 rounded-4"
                >
                  {{ data.info.promocion_valor }}% De Descuento
                </p>
                <p
                  class="line-through"
                  :style="`font-size:${settingByTemplate16[0].detailsProducts.fontSizePriceDescount}; font-weight:${settingByTemplate16[0].detailsProducts.fontWeightPriceDescount}; color:${settingByTemplate16[0].detailsProducts.color_priceDescount};`"
                >
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
            <div v-if="data.info.descripcion_corta" class="w-full mb-25 pt-10">
              <p
                class="text-14"
                :style="` color:${settingByTemplate16[0].detailsProducts.color_subtext};`"
              >
                {{ data.info.descripcion_corta }}
              </p>
            </div>
            <div v-if="data.detalle.con_variante > 0" class="w-full mb-15">
              <div
                v-for="(variant, index) in data.variantes"
                :key="index"
                class="flex flex-col justify-center items-start"
              >
                <label
                  for="variant name"
                  class="text-16 font-bold"
                  :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
                >
                  {{ variant.nombre }}:
                </label>
                <SelectGroup
                  :index="index"
                  :variantes="data.variantes"
                  :details-products="settingByTemplate16[0].detailsProducts"
                  :setting-general="settingByTemplate16[0].settingsGeneral"
                >
                  <option
                    v-for="item in variant.valores"
                    :key="item.option"
                    :value="item.option"
                  >
                    <p
                      class="text-14"
                      :style="`color:${settingByTemplate16[0].detailsProducts.color_subtext};`"
                    >
                      {{ item.option }}
                    </p>
                  </option>
                </SelectGroup>
              </div>
            </div>
            <div
              v-if="userDropshipping.userName"
              class="w-full flex flex-row items-center mb-30"
            >
              <p
                class="text-16 font-bold mr-10"
                :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
              >
                {{ $t('productdetail_dropshipping') }}
              </p>
              <p
                class="text-14"
                :style="`color:${settingByTemplate16[0].detailsProducts.color_subtext};`"
              >
                {{ userDropshipping.userName }}
              </p>
            </div>
            <div class="w-full flex flex-row justify-start items-center mb-20">
              <div
                class="flex flex-row justify-center items-center mr-20 border-2"
                :class="{ disabled: !salesData.estado }"
                :style="`border-color:${settingByTemplate16[0].detailsProducts.color_border}; border-radius: ${settingByTemplate16[0].settingsGeneral.radius};`"
              >
                <button
                  class="bg-transparent text-center text-14 px-15"
                  @click="removeQuantity()"
                >
                  <menos-icon
                    class="icon"
                    :style="`color:${settingByTemplate16[0].detailsProducts.color_icon};`"
                  />
                </button>
                <input
                  v-model="quantityValue"
                  name="quantityValue"
                  class="bg-transparent text-center text-14 py-11 px-10 max-w-[68px] font-bold"
                  type="text"
                  onkeypress="return (event.charCode>47 && event.charCode<58)"
                />
                <button
                  class="bg-transparent text-center text-14 px-15"
                  @click="addQuantity()"
                >
                  <mas-icon
                    class="icon"
                    :style="`color:${settingByTemplate16[0].detailsProducts.color_icon};`"
                  />
                </button>
                <!-- Anuncio ult unidad -->
                <div
                  v-if="maxQuantityValue == quantityValue"
                  class="absolute py-3 px-5 bg-yellow-300 rounded-4 -bottom-35 w-full max-w-[300px] text-center"
                >
                  <span class="text-14 text-black">
                    {{ $t('cart_ultimaUnidad') }}
                  </span>
                </div>
              </div>
              <button
                v-if="
                  !spent &&
                  salesData.estado == true &&
                  (data.info.tipo_servicio == null ||
                    data.info.tipo_servicio == '0')
                "
                id="AddToCartTag"
                ref="colorBtn"
                class="w-full flex justify-center items-center max-w-[300px] py-11 px-10 rounded-5"
                :style="`background-color: ${settingByTemplate16[0].detailsProducts.color_btn}; color: ${settingByTemplate16[0].detailsProducts.color_text_btn}; border-radius: ${settingByTemplate16[0].settingsGeneral.radius};`"
                @click="addShoppingCart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-5"
                  width="18"
                  height="18"
                  :fill="settingByTemplate16[0].detailsProducts.color_icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                  />
                </svg>
                {{ $t('productdetail_añadiralcarrito') }}
              </button>
              <button
                v-else-if="!salesData.estado"
                disabled
                class="w-full flex justify-center items-center max-w-[300px] py-11 px-10 rounded-5"
                :style="`background-color: ${settingByTemplate16[0].detailsProducts.color_btn}; color: ${settingByTemplate16[0].detailsProducts.color_text_btn}; border-radius: ${settingByTemplate16[0].settingsGeneral.radius};`"
              >
                {{ $t('productdetail_btnANodisponible') }}
              </button>
              <button
                v-else-if="!spent && data.info.tipo_servicio == '1'"
                id="AddToCartTag"
                ref="colorBtn"
                class="w-full flex justify-center items-center max-w-[300px] py-11 px-10 rounded-5"
                :style="`background-color: ${settingByTemplate16[0].detailsProducts.color_btn}; color: ${settingByTemplate16[0].detailsProducts.color_text_btn}; border-radius: ${settingByTemplate16[0].settingsGeneral.radius};`"
                @click="GoPayments"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  :fill="settingByTemplate16[0].detailsProducts.color_icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                  />
                </svg>
                {{ $t('productdetail_btnComprar') }}
              </button>
              <button
                v-else-if="spent"
                disabled
                class="w-full flex justify-center items-center max-w-[300px] py-11 px-10 rounded-5"
                :style="`background-color: ${settingByTemplate16[0].detailsProducts.color_btn}; color: ${settingByTemplate16[0].detailsProducts.color_text_btn}; border-radius: ${settingByTemplate16[0].settingsGeneral.radius};`"
              >
                {{ $t('home_cardAgotado') }}
              </button>
            </div>
            <div class="w-full flex flex-col mb-10">
              <div
                v-if="salesData.unidades > 0"
                class="flex flex-row justify-start items-center mb-10"
              >
                <p
                  class="text-16 font-bold mr-10"
                  :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
                >
                  {{ $t('productdetail_stock') }}:
                </p>
                <p
                  class="text-14"
                  :class="`${
                    salesData.unidades > 0 ? 'text-green-500' : 'text-red-500'
                  }`"
                >
                  {{ salesData.unidades > 0 ? 'In stock' : 'Out of stock' }}
                </p>
              </div>
              <div
                v-if="
                  data.detalle?.categoria_producto?.nombre_categoria_producto
                "
                class="flex flex-row justify-start items-center mb-10"
              >
                <p
                  class="text-16 font-bold mr-10"
                  :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
                >
                  {{ $t('productdetail_categoria') }}:
                </p>
                <p
                  class="text-14"
                  :style="`color:${settingByTemplate16[0].detailsProducts.color_subtext};`"
                >
                  {{
                    data.detalle.categoria_producto.nombre_categoria_producto
                  }}
                </p>
              </div>
              <div
                v-if="data.detalle?.subcategoria_producto?.nombre_subcategoria"
                class="flex flex-row justify-start items-center mb-10"
              >
                <p
                  class="text-16 font-bold mr-10"
                  :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
                >
                  {{ $t('home_subcategory') }}:
                </p>
                <p
                  class="text-14"
                  :style="`color:${settingByTemplate16[0].detailsProducts.color_subtext};`"
                >
                  {{ data.detalle.subcategoria_producto.nombre_subcategoria }}
                </p>
              </div>
              <div
                v-if="data.detalle?.subcategoria_producto?.nombre_subcategoria"
                class="flex flex-row justify-start items-center mb-10"
              >
                <p
                  class="text-16 font-bold mr-10"
                  :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
                >
                  {{ $t('home_cardGratis') }}
                </p>
              </div>
            </div>
            <div class="w-full flex flex-row items-center mb-10">
              <p
                class="text-16 font-bold mr-10"
                :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
              >
                {{ $t('productdetail_compartir') }}
              </p>
              <a
                :href="sharingFacebook"
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
          </div>
        </div>
        <OptionTab
          class="w-full"
          :data-store="dataStore"
          :data="data"
          :envio="envio"
          :setting-by-template16="settingByTemplate16"
        />
        <KoSuggestProduct
          class="w-full py-40"
          :category="category.slice(0, 12)"
          :card-products="settingByTemplate16[0].cardProducts"
          :details-products="settingByTemplate16[0].detailsProducts"
          :settings-general="settingByTemplate16[0].settingsGeneral"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import idCloudinary from '@/mixins/idCloudinary'
import currency from '@/mixins/formatCurrent'
export default {
  name: 'Ko15ProductDetail',
  components: {
    SelectGroup: () => import('./_productdetails/selectGroup'),
    ProductSlide: () => import('./_productdetails/productSlide'),
    OptionTab: () => import('./_productdetails/OptTab'),
    KoSuggestProduct: () => import('./_productdetails/suggestionsProducto'),
  },
  filters: {
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase()
      }
      return ''
    },
  },
  mixins: [idCloudinary, currency],
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    productsData: {
      type: Array,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    envios: {
      type: Object,
      required: true,
    },
    facebookPixel: {
      type: Object,
      default: null,
    },
    settingByTemplate16: {
      type: Array,
      required: true,
    },
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
      this.setOptionShipping()
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
      this.setOptionShipping()
    }
    if (this.$route.query.userId && this.$route.query.userName) {
      this.userDropshipping.userId = this.$route.query.userId
      this.userDropshipping.userName = this.$route.query.userName
    }
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
            this.setOptionShipping()
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
    setOptionShipping() {
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
* {
  font-family: var(--font-style-1) !important;
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
}
.btn-whatsapp:hover {
  color: black;
}
.wp-icon {
  font-size: 27px;
  bottom: 3px;
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
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
  object-position: center;
}

.icon:hover {
  color: var(--hover_text);
}

@screen sm {
  .video {
    width: 100%;
    height: 200px;
  }
}

@media (min-width: 480px) {
  .video {
    height: 250px;
  }
}
@screen md {
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
  .video {
    height: 300px;
  }
}
</style>
