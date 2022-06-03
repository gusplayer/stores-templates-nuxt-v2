<template>
  <div
    v-swiper:mySwiper="swiperOption"
    ref="mySwiper"
    style="position: relative"
  >
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(product, index) in this.products.data"
        :key="index"
      >
        <client-only>
          <KoProductCard1 :product="product"></KoProductCard1>
        </client-only>
      </div>
    </div>
    <div class="prev btnPrev" v-if="this.products.total > 1">
      <FlechaLeft-icon class="btn-icon" />
    </div>
    <div class="next btnNext" v-if="this.products.total > 1">
      <FlechaRight-icon class="btn-icon" />
    </div>
    <nuxt-link to="/productosHoko" class="w-full flex justify-center">
      <button class="btn-products">
        {{ $t('home_allproducts') }}
      </button>
    </nuxt-link>
  </div>
</template>

<script>
import KoProductCard1 from '../_productcard/Ko-ProductCardHoko-1.vue'

export default {
  name: 'productSlide-productFavorito-13',
  components: {
    KoProductCard1,
  },
  props: {
    products: {},
  },
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
        spaceBetween: 22,
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
            slidesPerView: 1,
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
.swiper-wrapper {
  width: 100%;
}
.swiper-slide {
  width: 100%;
}
.btnPrev {
  position: absolute;
  z-index: 10;
  left: 0;
  border-radius: 25px;
  padding: 0px 22px;
  background: var(--color_text);
  cursor: pointer;
}
.btnNext {
  position: absolute;
  z-index: 10;
  right: 0;
  border-radius: 25px;
  padding: 0px 22px;
  background: var(--color_text);
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
.btn-products {
  @apply px-6;
  margin-top: 30px;
  width: auto;
  height: 45px;
  border: 2px solid var(--color_background_btn);
  color: var(--color_background_btn);
  border-radius: var(--radius_btn);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 1px;
  transition: all 150ms ease-in;
  font-family: var(--font-style) !important;
}
.btn-products:hover {
  color: var(--btnhover);
  border: 2px solid var(--btnhover);
  transition: all 150ms ease-in;
}
</style>
