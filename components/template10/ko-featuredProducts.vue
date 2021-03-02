<template>
  <div class="product-content">
    <div class="producto-items-content">
      <div class="product-text">
        <div class="product-tittle">
          <p class="tittle">Productos Destacados</p>
          <nuxt-link to="/productos">
            <p class="txt-newProducts">Nuevos Productos</p>
          </nuxt-link>
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
  name: 'Ko-featuredProducts',
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 20,
        // autoplay: {
        //   delay: 6000,
        //   disableOnInteraction: false,
        // },
        breakpoints: {
          10000: {
            slidesPerView: 4,
            spaceBetween: 40,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 20,
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
.product-content {
  @apply w-full flex flex-col justify-center items-center my-60;
}
.product-text {
  @apply w-full flex flex-col justify-start items-start;
}
.product-tittle {
  @apply w-full flex flex-row justify-between items-center text-center;
}
.tittle {
  @apply w-auto flex flex-col text-center;
}
.txt-newProducts {
  box-shadow: inset 0px -50px 0px -41px rgba(235, 112, 37, 0.3);
  @apply w-auto h-full flex flex-row text-center font-semibold px-10 cursor-pointer transition-all ease-in duration-0.2;
}
.txt-newProducts:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  @apply transition-all ease-in duration-0.2;
}
.tittle,
.txt-newProducts {
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  color: #222222;
}
.gifyload:hover {
  @apply shadow-lg;
}
@screen sm {
  .producto-items-content {
    @apply w-9/0;
  }
  .tittle {
    color: #222222;
    font-size: 25px;
    @apply justify-center items-center font-semibold mb-50;
  }
  .txt-newProducts {
    @apply justify-center items-center;
  }
  .product-text {
    @apply mb-40;
  }
  .product-tittle {
    @apply w-full flex flex-col justify-center items-center text-center;
  }
}
@screen md {
  .producto-items-content {
    @apply w-9/5;
  }
  .product-text {
    @apply mb-0;
  }
  .product-tittle {
    @apply flex flex-row justify-between mb-60;
  }
  .tittle {
    @apply mb-0;
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
    font-size: 40px;
    @apply leading-50 mb-0;
  }
  .txt-newProducts {
    font-size: 16px;
  }
}
</style>
