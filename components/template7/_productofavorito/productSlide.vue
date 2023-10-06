<template>
  <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="swiper-slide"
      >
        <client-only>
          <KoProductCard1
            :product="product"
            :setting-general="settingGeneral"
            :settingKProductCard="settingKProductCard"
          />
        </client-only>
      </div>
    </div>
    <div v-if="products.length > 1" class="prev btnPrev">
      <FlechaLeft-icon class="btn-icon" />
    </div>
    <div v-if="products.length > 1" class="next btnNext">
      <FlechaRight-icon class="btn-icon" />
    </div>
  </div>
</template>

<script>
import KoProductCard1 from '../../../components/template7/_productcard/ProductCard'

export default {
  name: 'K07ProductSlideProductFavorito',
  components: {
    KoProductCard1,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    settingKProductCard: {
      type: Object,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
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
