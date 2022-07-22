<template>
  <div
    class="product-content"
    :style="[
      settingGeneral,
      productList,
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
          <p class="tittle">{{ productList.title }}</p>
          <a
            :href="productList.url_redirect ? productList.url_redirect : ''"
            v-if="productList.visibleBtn"
            rel="noreferrer noopener"
          >
            <p class="txt-newProducts">{{ productList.displayName }}</p>
          </a>
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
              :settingGeneral="settingGeneral"
              :cardProduct="cardProduct"
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
    productList: Object,
    settingGeneral: Object,
    cardProduct: Object,
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
  background: var(--background_color_1);
  @apply w-full flex flex-col justify-center items-center py-60;
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
  color: var(--colorTextBTn);
  box-shadow: inset 0px -50px 0px -41px var(--color_border);
  @apply w-auto h-full flex flex-row text-center font-semibold px-10 cursor-pointer transition-all ease-in duration-0.2;
}
.txt-newProducts:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  @apply transition-all ease-in duration-0.2;
}
.tittle,
.txt-newProducts {
  font-family: var(--font-style-1) !important;
}
.gifyload:hover {
  @apply shadow-lg;
}
@screen sm {
  .producto-items-content {
    @apply w-9/0;
  }
  .tittle {
    color: var(--color_title);
    font-weight: var(--fontWeightTitle);
    font-size: var(--fontSizeTitle);
    @apply justify-center items-center mb-50;
  }
  .txt-newProducts {
    @apply justify-center items-center;
  }
  .product-text {
    margin-bottom: var(--marginbottomTitle);
  }
  .product-tittle {
    @apply w-full flex flex-col justify-center items-center text-center;
  }
}
@screen md {
  .producto-items-content {
    @apply w-9/5;
  }
  /* .product-text {
    @apply mb-0;
  } */
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
    @apply leading-50 mb-0;
  }
  .txt-newProducts {
    font-size: 16px;
  }
}
</style>
