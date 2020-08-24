<template>
  <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(product, index) in this.products"
        :key="index"
      >
        <KoProductCard1 :product="product"></KoProductCard1>
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev btn">
      <FlechaLeft-icon class="btn-icon" />
    </div>
    <div class="swiper-button-next btn">
      <FlechaRight-icon class="btn-icon" />
    </div>
  </div>
</template>

<script>
import KoProductCard1 from '../_productcard/Ko-ProductCard-1'

export default {
  name: 'productSlide-productFavorito',
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
  position: relative;
}
.swiper-slide {
  width: 100%;
}
.swiper-pagination-bullet {
  background-color: rgba(15, 15, 15, 0.5);
}
.swiper-pagination-bullet-active {
  background-color: #fff;
}
.btn {
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
  color: var(--color_icon);
}
</style>
