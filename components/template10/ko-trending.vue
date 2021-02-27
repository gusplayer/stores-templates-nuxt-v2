<template>
  <div class="product-content">
    <div class="producto-items-content">
      <div class="product-text">
        <div class="product-tittle">
          <span class="tittle">Tendencias de esta semana</span>
        </div>
        <div class="product-subtittle">
          <span class="subtittle"
            >Encuentre un brillante ideal que se adapte a sus gustos con nuestra
            gran selección de lámparas de suspensión, de pared, de piso y de
            mesa.</span
          >
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
      <div class="btn-products">
        <nuxt-link to="/productos">
          <button class="btn">
            + Ver todos los productos
          </button>
        </nuxt-link>
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
            slidesPerView: 4,
            spaceBetween: 40,
          },

          768: {
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
.gifyload:hover {
  @apply shadow-lg;
}
.product-content {
  @apply flex flex-col justify-center items-center w-full my-80;
}
.product-text {
  @apply flex flex-col justify-center items-center w-full text-center;
}
.product-tittle,
.product-subtittle,
.tittle,
.subtittle {
  @apply flex flex-col justify-center items-center text-center;
}

.tittle {
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  color: #222222;
}
.subtittle {
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  color: #666666;
}
.btn-products {
  @apply w-full flex justify-center items-center mt-80;
}
.btn {
  color: #222222;
  font-size: 16px;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  box-shadow: inset 0px -50px 0px -41px rgba(235, 112, 37, 0.3);
  @apply mr-20 px-8 font-semibold leading-20 transition-all ease-in duration-0.2;
}
.btn:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  @apply transition-all ease-in duration-0.2;
}
@screen sm {
  .producto-items-content {
    @apply w-9/0;
  }
  .tittle {
    font-size: 35px;
    @apply font-semibold;
  }
  .subtittle {
    font-size: 14px;
  }
  .product-text {
    @apply mb-40;
  }
}
@screen md {
  .producto-items-content {
    @apply w-9/5;
  }
  .subtittle {
    font-size: 15px;
  }
}
@screen lg {
  .product-text {
    @apply w-full;
  }
}
@media (min-width: 1400px) {
  .producto-items-content {
    width: 1400px;
  }
  .tittle {
    font-size: 42px;
    @apply pb-10 leading-50;
  }
  .subtittle {
    font-size: 15px;
    max-width: 560px;
    @apply w-full mb-50 leading-25;
  }
}
</style>
