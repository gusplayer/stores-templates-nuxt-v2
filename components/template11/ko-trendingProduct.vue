<template>
  <div
    class="product-content"
    :style="[
      settingKtrending,
      settingGeneral,
      {
        '--font-style-1':
          this.settingGeneral && this.settingGeneral.fount_1
            ? this.settingGeneral.fount_1
            : 'Roboto',
      },
    ]"
  >
    <div class="producto-items-content">
      <div class="product-text">
        <div class="product-tittle">
          <p class="tittle">{{ settingKtrending.title }}</p>
        </div>
      </div>
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
        <div class="swiper-wrapper pb-10">
          <div
            v-for="product in listProduct"
            :key="product.id"
            class="swiper-slide"
            style="margin-right: 40px; height: auto"
          >
            <KoproductCard
              :product="product"
              :settingKcardProduct="settingKcardProduct"
              :settingGeneral="settingGeneral"
              class="gifyload"
            ></KoproductCard>
          </div>
        </div>
        <div
          v-if="this.fullProducts.length == 0"
          class="content-products-empty"
        >
          <p>{{ $t('home_msgCatalogo') }}</p>
        </div>
        <div class="btn-products">
          <nuxt-link to="/productos">
            <button class="btn">Ver todos los productos</button>
          </nuxt-link>
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
    settingKtrending: Object,
    settingGeneral: Object,
    settingKcardProduct: Object,
  },
  name: 'Ko-trending',
  data() {
    return {
      swiperOption: {
        slidesPerView: '',
        spaceBetween: '',
        autoplay: {
          delay: 400000000,
          disableOnInteraction: false,
        },
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
    listProduct() {
      let tempfullProducts = this.fullProducts.slice(0, 12)
      return tempfullProducts.filter((product) => {
        if (product.tag_promocion != '1') {
          return product
        }
      })
    },
  },
}
</script>

<style scoped>
/* .gifyload:hover {
  @apply shadow-lg;
} */
.btn-products {
  @apply w-full flex justify-center items-center;
}
.btn {
  margin-bottom: 10px;
  border: 1px solid var(--color_title);
  padding: 8px 15px;
  color: var(--color_title);
  font-size: 16px;
  font-family: var(--font-style-1);
  @apply mr-20 px-8 font-semibold leading-20 transition-all ease-in duration-0.2;
}
.btn:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  @apply transition-all ease-in duration-0.2;
}
.product-content {
  background: var(--background_color_1);
  @apply flex flex-col justify-center items-center w-full pb-40;
}
.product-text {
  @apply flex flex-col justify-center items-center w-full text-center;
}
.product-tittle,
.tittle {
  @apply flex flex-col justify-center items-center text-center;
}
.content-products-empty {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.content-products-empty p {
  font-size: 18px;
  opacity: 0.6;
  font-weight: bold;
  color: var(--color_subtext);
  margin-bottom: 20px;
}
@screen sm {
  .producto-items-content {
    @apply w-9/0;
  }
  .tittle {
    color: var(--color_title);
    font-size: 20px;
    font-family: var(--font-style-1);
    font-weight: var(--fontWeight);
    @apply tracking-0;
  }
  .product-text {
    margin-bottom: var(--marginbottomTitle);
  }
}
@screen md {
  .producto-items-content {
    @apply w-9/5;
  }
  .tittle {
    font-size: var(--fontSize);
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
    font-size: var(--fontSize);
    @apply pb-10 leading-50;
  }
}
</style>
