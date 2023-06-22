<template>
  <div
    v-if="this.fullProducts.length > 0"
    class="w-full flex justify-center items-center py-15 lg:py-20 px-10 md:px-0"
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
        <a
          v-if="listProductsHome.visible_btn"
          :href="listProductsHome?.url_redirect ?? ''"
          :style="`color: ${listProductsHome.color_text_btn}; font-size: ${listProductsHome.fontSizeTextBtn}; font-weight: ${listProductsHome.fontWeighTextBtn};`"
        >
          {{ listProductsHome.text_btn }}
          <FlechaRight-icon
            :style="`color: ${listProductsHome.color_text_btn}; font-size: ${listProductsHome.fontSizeTextBtn}; font-weight: ${listProductsHome.fontWeighTextBtn};`"
          />
        </a>
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
              :cardProduct="cardProduct"
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
import KoProductCard from './_cardProduct/ProductCard.vue'
export default {
  name: 'Ko14-productListHome',
  props: {
    listProductsHome: Object,
    settingGeneral: Object,
    cardProducts: Object,
    dataStore: Object,
    fullProducts: {},
  },
  components: {
    KoProductCard,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: '',
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        breakpoints: {
          10000: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 5,
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
