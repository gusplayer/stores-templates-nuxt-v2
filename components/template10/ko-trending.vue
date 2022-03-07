<template>
  <div
    class="product-content"
    :style="[
      settingGeneral,
      trending,
      {
        '--font-style-1': settingGeneral.fount_1
          ? settingGeneral.fount_1
          : 'Roboto',
      },
    ]"
  >
    <div class="producto-items-content">
      <div class="product-text">
        <div class="product-tittle">
          <span class="tittle">{{ trending.title }}</span>
        </div>
        <div class="product-subtittle">
          <span class="subtittle">{{ trending.description }}</span>
        </div>
      </div>
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
        <div class="swiper-wrapper pb-10">
          <div
            v-for="product in fullProducts"
            :key="product.id"
            class="swiper-slide"
          >
            <KoproductCard
              :product="product"
              :cardProduct="cardProduct"
              :settingGeneral="settingGeneral"
              class="gifyload"
            />
          </div>
        </div>
        <div
          v-if="this.fullProducts.length == 0"
          class="content-products-empty"
        >
          <p>{{ $t('home_msgCatalogo') }}</p>
        </div>
      </div>
      <div class="btn-products" v-if="trending.visibleBtn">
        <nuxt-link :to="trending.url">
          <button class="btn">+ Ver todos los productos</button>
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
    trending: Array,
    settingGeneral: Object,
    cardProduct: Object,
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
  background: var(--background_color_1);
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
  font-family: var(--font-style-1) !important;
  color: var(--color_title);
}
.subtittle {
  font-family: var(--font-style-1) !important;
  color: var(--color_Description);
}
.btn-products {
  @apply w-full flex justify-center items-center mt-80;
}
.btn {
  color: #222222;
  font-size: 16px;
  font-family: var(--font-style-1) !important;
  box-shadow: inset 0px -50px 0px -41px var(--color_border);
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
    font-size: var(--fontSize);
    font-weight: var(--fontWeightTitle);
    @apply font-semibold;
  }
  .subtittle {
    font-weight: var(--fontWeightDescription);
    font-size: var(--fontSizeDescription);
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
    margin-bottom: var(--marginbottomTitle);
    @apply leading-50;
  }
  .subtittle {
    font-size: 15px;
    max-width: 560px;
    margin-bottom: var(--marginbottomDescription);
    @apply w-full leading-25;
  }
}
</style>
