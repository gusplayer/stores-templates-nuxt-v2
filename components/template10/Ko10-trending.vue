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
            v-for="product in fullProducts.slice(0, 11)"
            :key="product.id"
            class="swiper-slide h-full"
          >
            <KoproductCard
              :product="product"
              :cardProduct="cardProduct"
              :settingGeneral="settingGeneral"
              class="gifyload h-full"
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
        <nuxt-link to="/productos">
          <button class="btn">{{ trending.displayName }}</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import KoproductCard from './_productcard/ProductCard'
export default {
  name: 'Ko10-trending',
  components: {
    KoproductCard,
  },
  props: {
    trending: Object,
    settingGeneral: Object,
    cardProduct: Object,
    dataStore: Object,
    fullProducts: {},
  },
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
  @apply flex flex-col justify-center items-center w-full py-40;
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
  font-size: var(--fontSize);
  font-weight: var(--fontWeightTitle);
  margin-bottom: var(--marginbottomTitle);
}
.subtittle {
  font-family: var(--font-style-1) !important;
  color: var(--color_Description);
  font-weight: var(--fontWeightDescription);
  font-size: var(--fontSizeDescription);
  margin-bottom: var(--marginbottomDescription);
}
.btn-products {
  @apply w-full flex justify-center items-center;
}
.btn {
  color: var(--colorTextBTn);
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
  .product-text {
    @apply mb-40;
  }
  .btn-products {
    @apply mt-20;
  }
}
@screen md {
  .producto-items-content {
    @apply w-9/5;
  }
  .btn-products {
    @apply mt-30;
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
    /* font-size: 42px; */
    @apply leading-50;
  }
  .subtittle {
    /* font-size: 15px; */
    max-width: 560px;
    @apply w-full leading-25;
  }
}
</style>
