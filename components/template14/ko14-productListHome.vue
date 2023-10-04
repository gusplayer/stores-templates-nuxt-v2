<template>
  <div
    v-if="fullProducts.length > 0"
    class="w-full flex justify-center items-center py-15 lg:py-20 px-10"
    :style="`background-color: ${listProductsHome['--background_color_1']}`"
  >
    <div
      class="w-full h-auto relative max-w-7xl flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        class="w-full flex flex-row justify-between items-start md:items-center mb-25"
      >
        <p
          class="w-full text-start"
          :style="`color: ${listProductsHome.color_title}; font-size: ${listProductsHome.fontSizeTitle}; font-weight: ${listProductsHome.fontWeighTitle};`"
        >
          {{ listProductsHome.title }}
        </p>
        <nuxt-link
          :to="{ path: `/productos` }"
          class="w-full text-end"
          :style="`color: ${listProductsHome.color_text_btn}; font-size: ${listProductsHome.fontSizeTextBtn}; font-weight: ${listProductsHome.fontWeighTextBtn};`"
        >
          {{ listProductsHome.text_btn }}
          <FlechaRight-icon
            :style="`color: ${listProductsHome.color_text_btn}; font-size: ${listProductsHome.fontSizeTextBtn}; font-weight: ${listProductsHome.fontWeighTextBtn};`"
          />
        </nuxt-link>
      </div>
      <div
        ref="mySwiper"
        v-swiper:mySwiper="swiperOptions"
        class="w-full relative"
      >
        <div class="swiper-wrapper w-full">
          <div
            v-for="product in fullProducts.slice(0, 12)"
            :key="product.id"
            class="swiper-slide w-full"
          >
            <KoProductCard
              :product="product"
              :card-products="cardProducts"
              :setting-general="settingGeneral"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko14ProductListHome',
  components: {
    KoProductCard: () => import('./_cardProduct/ProductCard'),
  },
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
  data() {
    return {
      swiperOptions: {
        direction: 'horizontal',
        setWrapperSize: true,
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 26,
        grabCursor: true,
        breakpoints: {
          1250: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
          1060: {
            slidesPerView: 3,
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
