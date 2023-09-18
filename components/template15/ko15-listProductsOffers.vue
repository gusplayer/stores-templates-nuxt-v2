<template>
  <div
    v-if="fullProducts.length > 0"
    class="w-full flex justify-center items-center py-30 lg:py-50 px-10"
    :style="`background-color: ${listProductsOffers['--background_color_1']}`"
  >
    <div
      class="w-full max-w-9/5 md:max-w-9/0 h-auto relative flex flex-col items-center justify-center overflow-hidden"
    >
      <p
        class="w-full text-center mb-25 text-25 md:text-30 lg:text-40"
        :style="`color: ${listProductsOffers.color_title_1}; font-weight: ${listProductsOffers.fontWeighTitle};`"
      >
        {{ listProductsOffers.title }}
      </p>
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper" class="w-full">
        <div class="swiper-wrapper w-full">
          <div
            v-for="(product, index) in fullProducts"
            :key="index"
            class="swiper-slide w-full"
          >
            <KoProductCard
              :product="product"
              :cardProducts="cardProducts"
              :settingGeneral="settingGeneral"
            />
          </div>
        </div>
        <div class="swiper-button-prev" v-if="fullProducts.length > 1" />
        <div class="swiper-button-next" v-if="fullProducts.length > 1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko15-listProductsOffers',
  props: {
    listProductsOffers: {
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
        direction: 'horizontal',
        setWrapperSize: true,
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 26,
        grabCursor: true,
        breakpoints: {
          1250: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
          1060: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          990: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          790: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
  max-width: 324px;
}
.swiper-button-prev,
.swiper-button-next {
  color: #ed6436;
}
</style>
