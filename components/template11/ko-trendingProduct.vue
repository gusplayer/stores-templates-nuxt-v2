<template>
  <div class="product-content">
    <div class="producto-items-content">
      <div class="product-text">
        <div class="product-tittle">
          <p class="tittle">Producto de tendencia</p>
        </div>
      </div>
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
        <div class="swiper-wrapper pb-10">
          <div
            v-for="product in fullProducts"
            :key="product.id"
            class="swiper-slide"
          >
            <KoproductCard :product="product" class="gifyload"></KoproductCard>
          </div>
        </div>
        <div
          v-if="(this.fullProducts.length == 0)"
          class="content-products-empty"
        >
          <p>{{ $t('home_msgCatalogo') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoproductCard from './_productcard/ProductCard'
export default {
  components: {
    KoproductCard,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
  },
  name: 'Ko-trending',
  data() {
    return {
      swiperOption: {
        slidesPerView: '',
        spaceBetween: '',
        // autoplay: {
        //   delay: 6000,
        //   disableOnInteraction: false,
        // },
        breakpoints: {
          10000: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
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
.gifyload:hover {
  @apply shadow-lg;
}
.product-content {
  @apply flex flex-col justify-center items-center w-full mb-40;
}
.product-text {
  @apply flex flex-col justify-center items-center w-full text-center;
}
.product-tittle,
.tittle {
  @apply flex flex-col justify-center items-center text-center;
}

@screen sm {
  .producto-items-content {
    @apply w-9/0;
  }
  .tittle {
    color: #000;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    @apply font-bold tracking-0 capitalize;
  }

  .product-text {
    @apply mb-40;
  }
}
@screen md {
  .producto-items-content {
    @apply w-9/5;
  }
  .tittle {
    font-size: 30px;
  }
}
@screen lg {
  .product-text {
    @apply w-full;
  }
}
@media (min-width: 1200px) {
  .producto-items-content {
    width: 1200px;
  }
  .tittle {
    font-size: 30px;
    @apply pb-10 leading-50;
  }
  .subtittle {
    font-size: 15px;
    max-width: 560px;
    @apply w-full mb-50 leading-25;
  }
}
</style>
