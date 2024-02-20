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
          {{ data?.nombre }}
        </p>
      </div>
    </div>
    <div
      v-if="loading"
      class="w-full flex max-w-[1300px] flex-col justify-start items-center pt-25 px-10 pb-20 md:pt-50 md:px-30 md:pb-30"
    >
      <Skeleton />
    </div>
    <div
      v-else
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
                          v-lazy="idCloudinary(data.fotoCloudinary, 150, 150)"
                          class="w-full h-full cursor-pointer object-cover rounded-6 mb-10 align-top"
                          width="100"
                          height="100"
                          alt="Product Img"
                          @click="selectedPhoto(data.fotoCloudinary)"
                        />
                      </div>
                    </div>
                    <div
                      v-for="(photo, itemsPhoto) in data.productosFotos"
                      :key="itemsPhoto"
                      class="swiper-slide w-full h-full"
                    >
                      <div
                        class="w-full h-full flex flex-col justify-stretch max-h-[100px] max-w-[100px]"
                      >
                        <img
                          v-lazy="
                            idCloudinaryQuality(photo.fotoCloudinary, 850, 850)
                          "
                          class="w-full h-full cursor-pointer object-cover rounded-6 mb-10 align-top"
                          alt="Product Img"
                          @click="selectedPhoto(photo.fotoCloudinary)"
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
                  <div
                    v-if="data.productosFotos.length > 3"
                    class="swiper-prev"
                  >
                    <FlechaUp-icon class="icon-swiper" />
                  </div>
                  <div
                    v-if="data.productosFotos.length > 3"
                    class="swiper-next"
                  >
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
                  :photos="data.productosFotos"
                  :photo="data.fotoCloudinary"
                  :id-you-tube="idYoutube"
                />
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col justify-start items-start">
            <div class="flex flex-row justify-start items-center mb-1">
              <p
                v-if="
                  salesData.estado &&
                  salesData.unidades > 0 &&
                  salesData.precio > 0
                "
                class="text-14 font-bold text-green-500"
              >
                {{ $t('productdetail_stock') }}
              </p>
              <p v-else class="text-14 font-bold text-red-500">
                {{ $t('productdetail_Notstock') }}
              </p>
              <p
                v-if="spent && salesData.unidades == 0"
                class="ml-5 text-14 font-bold text-red-500"
              >
                {{ $t('productdetail_productoAgotado') }}
              </p>
            </div>
            <p
              class="mb-20"
              :style="`font-size:${settingByTemplate16[0].detailsProducts.color_title} !important; font-weight:${settingByTemplate16[0].detailsProducts.fontWeightTitle}; color:${settingByTemplate16[0].detailsProducts.color_title};`"
            >
              {{ data.nombre }}
            </p>
            <div class="w-full flex flex-row justify-start items-center mb-20">
              <p
                v-if="salesData.precio"
                :style="`font-size:${settingByTemplate16[0].detailsProducts.fontSizePrice}; font-weight:${settingByTemplate16[0].detailsProducts.fontWeightPrice}; color:${settingByTemplate16[0].detailsProducts.color_price};`"
              >
                {{
                  salesData.precio
                    | currency(
                      dataStore.tiendasInfo.paises.codigo,
                      dataStore.tiendasInfo.moneda
                    )
                }}
              </p>
              <div
                v-if="
                  data.productosInfo.tagPromocion == 1 &&
                  data.productosInfo.promocionValor &&
                  salesData.precio
                "
                class="w-full flex flex-row justify-start items-center"
              >
                <p
                  class="text-12 mx-5 bg-red-500 text-white-white px-3 py-5 rounded-4"
                >
                  {{ data.productosInfo.promocionValor }}% De Descuento
                </p>
                <p
                  class="line-through"
                  :style="`font-size:${settingByTemplate16[0].detailsProducts.fontSizePriceDescount}; font-weight:${settingByTemplate16[0].detailsProducts.fontWeightPriceDescount}; color:${settingByTemplate16[0].detailsProducts.color_priceDescount};`"
                >
                  {{
                    (data.productosInfo.tagPromocion == 1 &&
                    data.productosInfo.promocionValor
                      ? Math.trunc(
                          salesData.precio /
                            (1 - data.productosInfo.promocionValor / 100)
                        )
                      : 0)
                      | currency(
                        dataStore.tiendasInfo.paises.codigo,
                        dataStore.tiendasInfo.moneda
                      )
                  }}
                </p>
              </div>
            </div>
            <div class="w-full flex flex-col mb-10">
              <div
                v-if="data.categoriaProducto > 0"
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
                  {{ data.categoriaProducto2.nombreCategoriaProducto }}
                </p>
              </div>
              <div
                v-if="data.subcategoria > 0"
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
                  {{ data.subcategoria2.nombreSubcategoria }}
                </p>
              </div>
              <div
                v-if="data.productosInfo.garantia"
                class="flex flex-row justify-start items-center mb-10"
              >
                <p
                  class="text-16 font-bold mr-10"
                  :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
                >
                  {{ $t('productdetail_garantia') }}:
                </p>
                <p
                  class="text-14"
                  :style="`color:${settingByTemplate16[0].detailsProducts.color_subtext};`"
                >
                  {{ data.productosInfo.garantia }}
                </p>
              </div>
              <div
                v-if="
                  (data.productosInfo.largo != 0 &&
                    data.productosInfo.largo != null) ||
                  (data.productosInfo.largo != 0 &&
                    data.productosInfo.largo != null) ||
                  (data.productosInfo.alto != 0 &&
                    data.productosInfo.alto != null) ||
                  (data.productosInfo.peso > 0 &&
                    data.productosInfo.peso != null)
                "
                class="flex justify-start items-center mb-10"
              >
                <p
                  class="text-16 font-bold mr-10"
                  :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
                >
                  {{ $t('productdetail_dimensiones') }}
                </p>
              </div>
              <div
                class="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0"
              >
                <div
                  v-if="
                    data.productosInfo.largo != 0 &&
                    data.productosInfo.largo != null
                  "
                  class="flex flex-row justify-start items-center mb-10"
                >
                  <p
                    class="text-16 font-bold mr-10"
                    :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
                  >
                    {{ $t('productdetail_largo') }}:
                  </p>
                  <p
                    class="text-14"
                    :style="`color:${settingByTemplate16[0].detailsProducts.color_subtext};`"
                  >
                    {{ data.productosInfo.largo }} cm
                  </p>
                </div>
                <div
                  v-if="
                    data.productosInfo.ancho != 0 &&
                    data.productosInfo.ancho != null
                  "
                  class="flex flex-row justify-start items-center mb-10"
                >
                  <p
                    class="text-16 font-bold mr-10"
                    :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
                  >
                    {{ $t('productdetail_ancho') }}:
                  </p>
                  <p
                    class="text-14"
                    :style="`color:${settingByTemplate16[0].detailsProducts.color_subtext};`"
                  >
                    {{ data.productosInfo.ancho }} cm
                  </p>
                </div>
                <div
                  v-if="
                    data.productosInfo.alto != 0 &&
                    data.productosInfo.alto != null
                  "
                  class="flex flex-row justify-start items-center mb-10"
                >
                  <p
                    class="text-16 font-bold mr-10"
                    :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
                  >
                    {{ $t('productdetail_alto') }}:
                  </p>
                  <p
                    class="text-14"
                    :style="`color:${settingByTemplate16[0].detailsProducts.color_subtext};`"
                  >
                    {{ data.productosInfo.alto }} cm
                  </p>
                </div>
                <div
                  v-if="
                    data.productosInfo.peso != 0 &&
                    data.productosInfo.peso != null
                  "
                  class="flex flex-row justify-start items-center mb-10"
                >
                  <p
                    class="text-16 font-bold mr-10"
                    :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
                  >
                    {{ $t('productdetail_Peso') }}:
                  </p>
                  <p
                    class="text-14"
                    :style="`color:${settingByTemplate16[0].detailsProducts.color_subtext};`"
                  >
                    {{ data.productosInfo.peso }} cm
                  </p>
                </div>
              </div>
              <div
                v-if="data.envioGratis == 1 || envio.titulo == 'Envío gratis'"
                class="flex flex-row justify-start items-center mb-10"
              >
                <p
                  class="text-16 font-bold"
                  :style="`color:${settingByTemplate16[0].detailsProducts.color_text};`"
                >
                  {{ $t('home_cardGratis') }}
                </p>
              </div>
            </div>
            <div
              v-if="data.productosInfo.descripcionCorta"
              class="w-full mb-25 pt-10"
            >
              <p
                class="text-14"
                :style="` color:${settingByTemplate16[0].detailsProducts.color_subtext};`"
              >
                {{ data.productosInfo.descripcionCorta }}
              </p>
            </div>
            <div
              v-if="data.conVariante === 1 && variantes"
              class="w-full mb-15"
            >
              <div
                v-for="(variant, index) in variantes"
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
                  :variantes="variantes"
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
            <div
              class="fixed md:sticky w-full flex flex-row justify-start items-center mb-0 md:mb-20 left-0 bottom-0 px-6 py-10 md:px-0 md:py-0 border-t md:border-t-0 z-10 md:z-0"
              :style="`background-color: ${settingByTemplate16[0].detailsProducts['--background_color_1']};`"
            >
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
                  class="absolute py-3 px-5 bg-yellow-300 rounded-4 -bottom-35 w-full max-w-[120px] text-center"
                >
                  <span class="text-14 text-black">
                    {{ $t('cart_ultimaUnidad') }}
                  </span>
                </div>
              </div>
              <button
                v-if="shouldShowAddToCartButton"
                class="w-full flex justify-center items-center max-w-[300px] py-11 px-10 rounded-5"
                :style="`background-color: ${settingByTemplate16[0].detailsProducts.color_bg_btn}; color: ${settingByTemplate16[0].detailsProducts.color_text_btn}; border-radius: ${settingByTemplate16[0].settingsGeneral.radius};`"
                @click="addToCart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-5"
                  width="18"
                  height="18"
                  :fill="settingByTemplate16[0].detailsProducts.color_text_btn"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                  />
                </svg>
                {{ getAddToCartButtonLabel }}
              </button>

              <button
                v-else-if="shouldShowBuyButton"
                id="AddToCartTag"
                ref="colorBtn"
                class="w-full flex justify-center items-center max-w-[300px] py-11 px-10 rounded-5"
                :style="`background-color: ${settingByTemplate16[0].detailsProducts.color_bg_btn}; color: ${settingByTemplate16[0].detailsProducts.color_text_btn}; border-radius: ${settingByTemplate16[0].settingsGeneral.radius};`"
                @click="goToPayments"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  :fill="settingByTemplate16[0].detailsProducts.color_text_btn"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                  />
                </svg>
                {{ getBuyButtonLabel }}
              </button>
              <button
                v-else-if="spent"
                disabled
                class="w-full flex justify-center items-center max-w-[300px] py-11 px-10 rounded-5"
                :style="`background-color: ${settingByTemplate16[0].detailsProducts.color_bg_btn}; color: ${settingByTemplate16[0].detailsProducts.color_text_btn}; border-radius: ${settingByTemplate16[0].settingsGeneral.radius};`"
              >
                {{ $t('home_cardAgotado') }}
              </button>
              <button
                v-else-if="!salesData.estado || salesData.precio === 0"
                disabled
                class="w-full flex justify-center items-center max-w-[300px] py-11 px-10 rounded-5"
                :style="`background-color: ${settingByTemplate16[0].detailsProducts.color_bg_btn}; color: ${settingByTemplate16[0].detailsProducts.color_text_btn}; border-radius: ${settingByTemplate16[0].settingsGeneral.radius};`"
              >
                {{ $t('productdetail_btnANodisponible') }}
              </button>
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
              <button class="btn-whatsapp" @click="redirectWP">
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
          :setting-by-template="settingByTemplate16"
          :price="salesData"
        />

        <div class="w-full py-30">
          <KoSuggestProduct
            v-if="filterSuggestedProducts?.length > 0"
            :suggested-products="filterSuggestedProducts"
            :setting-general="settingByTemplate16[0].settingsGeneral"
            :setting-card-products="settingByTemplate16[0].cardProducts"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import idCloudinary from '@/mixins/idCloudinary'
import currency from '@/mixins/formatCurrent'
import mobileCheck from '@/mixins/mobileCheck'
import { productHeadMixin } from '@/mixins/productHeadMixin'
export default {
  name: 'Ko15ProductDetail',
  components: {
    Skeleton: () => import('../_commonComponent/skeleton-detail.vue'),
    ProductSlide: () => import('../_commonComponent/product-slide.vue'),
    KoSuggestProduct: () =>
      import('../_commonComponent/suggestions-producto.vue'),
    SelectGroup: () => import('../_commonComponent/select-group-v2.vue'),

    OptionTab: () => import('../template14/_productdetails/OptTab.vue'),
  },
  filters: {
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase()
      }
      return ''
    },
  },
  mixins: [idCloudinary, currency, mobileCheck, productHeadMixin],
  props: {
    dataStore: {
      type: Object,
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
      shippingProduct: '',
      suggestedProducts: [],
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
    return this.generateHead()
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    beforeCombination() {
      return this.$store.state.beforeCombination
    },
    // eslint-disable-next-line vue/return-in-computed-property
    variantes() {
      if (this.data.conVariante === 1) {
        return JSON.parse(this.data.productosVariantes[0].variantes)
      }
    },
    shouldShowAddToCartButton() {
      return (
        !this.spent &&
        this.salesData.estado &&
        this.salesData.precio > 0 &&
        (this.data.productosInfo.tipoServicio == null ||
          this.data.productosInfo.tipoServicio == '0')
      )
    },
    shouldShowBuyButton() {
      return !this.spent && this.data.productosInfo.tipoServicio == '1'
    },
    getAddToCartButtonLabel() {
      return this.$t('productdetail_añadiralcarrito')
    },
    getBuyButtonLabel() {
      return this.$t('productdetail_btnComprar')
    },
    filterSuggestedProducts() {
      return this.suggestedProducts.filter(
        (product) => product.id !== this.data.id
      )
    },
  },
  watch: {
    envios() {
      this.setOptionShipping()
    },
    quantityValue(value) {
      if (value > this.maxQuantityValue) {
        this.quantityValue = this.maxQuantityValue
      }
    },
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.redes.facebook
      this.links[1].link = this.dataStore.redes.twitter
      this.links[2].link = this.dataStore.redes.instagram
      this.links[3].link = this.dataStore.redes.youtube
    },
    beforeCombination(value) {
      const combinationSelected = JSON.stringify(value)
      if (this.data.combinaciones) {
        if (
          this.data.combinaciones[0][0].combinaciones !== '[object Object]' &&
          this.data.conVariante > 0
        ) {
          const combinaciones = JSON.parse(
            this.data.combinaciones[0][0].combinaciones
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
              this.data.id == productCart.id &&
              JSON.stringify(productCart.combinacion) ==
                JSON.stringify(result.combinacion)
            ) {
              this.productIndexCart = index
              this.productCart = productCart
            }
          }
          if (result) {
            this.spent = false
            this.maxQuantityValue = parseInt(result.unidades)
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
            if (typeof this.salesData.unidades === 'string') {
              this.salesData.unidades = parseInt(this.salesData.unidades)
            }
            this.quantityValue = 1
          }
        }
      }
    },
  },
  mounted() {
    this.getDataProduct()
    this.$store.state.beforeCombination = []
    if (this.envios?.valores) {
      this.setOptionShipping()
    }
    if (this.$route.query.userId && this.$route.query.userName) {
      this.userDropshipping.userId = this.$route.query.userId
      this.userDropshipping.userName = this.$route.query.userName
    }
  },
  methods: {
    async getDataProduct() {
      const { success, data } = await this.$store.dispatch(
        'products/GET_DATA_PRODUCT',
        {
          slug: this.id,
        }
      )
      if (success && data.data) {
        this.loading = false
        this.data = data.data

        this.sendAnalyticsStore(data.data.id, 'VIEWED_PRODUCT')
        this.selectedPhoto(data.data.fotoCloudinary)
        this.videoYouTube(data.data.productosInfo.video)
        this.setOptionShipping()
        this.getSuggestedProducts()

        this.salesData = {
          precio: data.data.precio,
          unidades: data.data.productosInfo.inventario,
          sku: data.data.productosInfo.sku,
          estado: true,
        }
        this.maxQuantityValue = data.data.productosInfo.inventario
        for (const [
          index,
          productCart,
        ] of this.$store.state.productsCart.entries()) {
          if (data.data.id == productCart.id) {
            this.productIndexCart = index
            this.productCart = productCart
            this.maxQuantityValue =
              data.data.productosInfo.inventario - productCart.cantidad
          }
        }
        if (this.salesData.unidades == 0 || this.maxQuantityValue <= 0) {
          this.spent = true
        }
        this.sharing.url = window.location.href
        this.sharing.quote = `Explora%20el%20producto%20${data.data.nombre}%2C%20te%20van%20a%20encantar.%0ALink%20del%20producto%3A%20${this.sharing.url}`
        this.sharingFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.sharing.url}&quote=${this.sharing.quote}`
        if (this.facebookPixel?.pixel_facebook != null) {
          window.fbq('track', 'ViewContent', {
            content_type: 'product',
            content_ids: [`${data.data.id}`],
            contents: [
              {
                id: `${data.data.id}`,
                quantity: this.quantityValue,
              },
            ],
            value: data.data.precio ? this.salesData.precio : 0,
            currency: this.dataStore.tiendasInfo.moneda,
            content_name: data.data.nombre,
            content_category: 'otro',
          })
        }
      }
    },
    async sendAnalyticsStore(value, event) {
      await this.$store.dispatch('SEND_ANALYTICS_STORE', {
        storeId: this.dataStore.id,
        event: event,
        productId: value,
      })
    },
    setOptionShipping() {
      if (this.data.envioGratis == 1) {
        this.envio = {
          titulo: 'Envío gratis',
          desc: 'Disfruta de este obsequio por parte de la tienda.',
        }
      } else {
        this.data.shippingProduct = this.envios.valores
        switch (this.data.shippingProduct.envio_metodo) {
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
              desc: `Compra todo lo que quieras en nuestra tienda, el valor del envio siempre sera el mismo: Valor envio $${this.data.shippingProduct.valor}`,
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
    },
    quantity(productCart) {
      this.quantityValue = productCart.cantidad
    },
    addQuantity() {
      if (this.maxQuantityValue > this.quantityValue) {
        this.quantityValue++
        this.data.cantidad = this.quantityValue
      }
    },
    removeQuantity() {
      if (this.data.cantidad >= 2) {
        this.quantityValue--
        this.data.cantidad = this.quantityValue
      }
    },
    selectedPhoto(photo) {
      this.selectPhotoUrl = photo
      this.existYoutube = false
    },
    videoYouTube(url) {
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
    addToCart() {
      if (!this.data.cantidad) {
        this.data.cantidad = this.quantityValue
      }
      this.sendAnalyticsStore(this.data.id, 'ADDED_PRODUCT_TO_CART')
      const product = {
        id: this.data.id,
        precio: this.salesData.precio,
        cantidad: this.data.cantidad,
        foto_cloudinary: this.data.fotoCloudinary,
        nombre: this.data.nombre,
        combinacion: this.salesData.combinacion,
        envio_gratis: this.data.envioGratis,
        promocion_valor: this.data.productosInfo.promocionValor,
        tag_promocion: this.data.productosInfo.tagPromocion,
        dropshipping: this.userDropshipping.userId,
      }
      if (this.salesData) {
        product.limitQuantity = this.salesData.unidades
      } else {
        product.limitQuantity = this.data.productosInfo.inventario
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
    goToPayments() {
      this.sendAnalyticsStore(this.data.id, 'CLICKED_PAY_CART')
      let objeto = {
        id: this.data.id,
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
          id: this.dataStore.id,
        },
        canal: 'KOMERCIA',
      }
      json = JSON.stringify(json)
      if (json) {
        this.$store.dispatch('SEND_ADD_TO_CART', 2)
        if (this.layourUnicentro) {
          window.open(`https://checkout.komercia.co/?params=${json}`)
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`
        }
      }
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
    async getSuggestedProducts() {
      const { success, data } = await this.$store.dispatch(
        'products/GET_ALL_PRODUCTS',
        {
          id_tienda: this.dataStore.id,
          page: 1,
          limit: 12,
          category: this.data.categoriaProducto2.nombreCategoriaProducto,
          // subcategory: this.data.subcategoria,
        }
      )
      if (success) {
        this.suggestedProducts = data.publicProductList
      }
    },
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      productID: this.data?.id || '',
      name: (this.data?.nombre || '').slice(0, 149),
      description: (
        this.data?.productosInfo?.descripcionCorta ||
        `Producto de la tienda ${this.dataStore.nombre}`
      ).slice(0, 9998),
      url: this.sharing?.url || '',
      image: this.data?.fotoCloudinary || '',
      brand: this.data?.productosInfo?.marca || '',
      sku: this.salesData?.unidades || '',
      offers: [
        {
          '@type': 'Offer',
          price: this.salesData?.precio || '',
          priceCurrency: this.dataStore.tiendasInfo?.moneda || '',
          itemCondition: 'https://schema.org/NewCondition',
          availability:
            this.salesData?.unidades > 0
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
        },
      ],
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          propertyID: 'item_group_id',
          value:
            this.categoriaProducto > 0
              ? `FB${this.data.categoriaProducto}_${this.data.categoriaProducto2.nombreCategoriaProducto}`
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
