<template>
  <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(product, index) in this.products"
        :key="index"
      >
        <img :src="product.photo" class="banner" alt="Banner tienda" />
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'productSlide-productFavorito',
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
        grabCursor: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
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
      this.swiper.slidePrev(800, false)
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
.banner {
  width: 100%;
  height: 100%;
  max-height: 600px;
  object-fit: hover;
  object-position: center;
}
.swiper-pagination >>> .swiper-pagination-bullet {
  background: orange;
}
</style>
