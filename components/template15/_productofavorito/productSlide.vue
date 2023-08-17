<template>
  <div v-swiper:mySwiper="swiperOption" ref="mySwiper" class="w-full relative">
    <div class="swiper-wrapper w-full">
      <div
        class="swiper-slide w-full"
        v-for="(product, index) in this.products"
        :key="index"
      >
        <KoProductCard
          :product="product"
          :cardProducts="cardProducts"
          :settingsGeneral="settingsGeneral"
          class="w-full"
        />
      </div>
    </div>
    <div class="prev btnPrev" v-if="this.products.length > 1">
      <FlechaLeft-icon class="btn-icon" />
    </div>
    <div class="next btnNext" v-if="this.products.length > 1">
      <FlechaRight-icon class="btn-icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'productSlide15',
  components: {
    KoProductCard: () => import('../_cardProduct/ProductCard'),
  },
  props: { products: {}, settingsGeneral: Object, cardProducts: Object },
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
        },
        setWrapperSize: true,
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 26,
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
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
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
  methods: {
    changeSlide() {
      this.swiper.slidePrev(700, false)
    },
  },
}
</script>

<style scoped>
.btnPrev {
  position: absolute;
  z-index: 10;
  left: 0;
  border-radius: 25px;
  padding: 0px 22px;
  background: black;
  cursor: pointer;
}
.btnNext {
  position: absolute;
  z-index: 10;
  right: 0;
  border-radius: 25px;
  padding: 0px 22px;
  background: black;
  cursor: pointer;
}
.btn-icon {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  color: white;
  bottom: 0.125em;
}
.btn-icon:hover {
  color: grey;
}
</style>
