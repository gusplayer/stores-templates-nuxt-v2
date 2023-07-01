<template>
  <div
    v-if="this.fullProducts.length > 0"
    class="w-full flex justify-center items-center py-15 lg:py-20 px-10"
    :style="`background-color: ${listProductsHome['--background_color_1']}`"
  >
    <div
      class="w-full h-auto relative max-w-7xl flex flex-col items-center justify-center overflow-hidden"
    >
      <div class="w-full flex flex-row justify-between items-center mb-20">
        <p
          :style="`color: ${listProductsHome.color_title}; font-size: ${listProductsHome.fontSizeTitle}; font-weight: ${listProductsHome.fontWeighTitle};`"
        >
          {{ listProductsHome.title }}
        </p>
        <nuxt-link
          :to="{ path: `/productos` }"
          :style="`color: ${listProductsHome.color_text_btn}; font-size: ${listProductsHome.fontSizeTextBtn}; font-weight: ${listProductsHome.fontWeighTextBtn};`"
        >
          {{ listProductsHome.text_btn }}
          <FlechaRight-icon
            :style="`color: ${listProductsHome.color_text_btn}; font-size: ${listProductsHome.fontSizeTextBtn}; font-weight: ${listProductsHome.fontWeighTextBtn};`"
          />
        </nuxt-link>
      </div>
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
        <div class="swiper-wrapper">
          <div
            v-for="product in fullProducts.slice(0, 12)"
            :key="product.id"
            class="swiper-slide"
          >
            <KoProductCard
              :product="product"
              :cardProducts="cardProducts"
              :settingGeneral="settingGeneral"
              class="giftLoad"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko14-productListHome',
  props: {
    listProductsHome: {
      type: Object,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
    cardProducts: {
      type: Object,
      required: true,
    },
    dataStore: {
      type: Object,
      required: true,
    },
    fullProducts: {
      type: Array,
      required: true,
    },
  },
  components: {
    KoProductCard: () => import('./_cardProduct/ProductCard'),
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: '',
        spaceBetween: '',
        breakpoints: {
          10000: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
}
</script>

<style scoped>
.giftLoad,
.swiper-slide {
  max-width: 300px;
}
</style>
