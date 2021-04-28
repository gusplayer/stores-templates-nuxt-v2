<template>
  <div class="product-content" :style="[settingKGify, settingGeneral]">
    <div class="separador-blog" v-if="settingKCarousel.visible == false"></div>
    <div
      class="producto-items-content"
      :style="[
        {
          '--font-style-1':
            this.settingGeneral && this.settingGeneral.fount_1
              ? this.settingGeneral.fount_1
              : 'David Libre',
        },
        {
          '--font-style-2':
            this.settingGeneral && this.settingGeneral.fount_2
              ? this.settingGeneral.fount_2
              : 'Great Vibes',
        },
        {
          '--font-style-3':
            this.settingGeneral && this.settingGeneral.fount_3
              ? this.settingGeneral.fount_3
              : 'Lora',
        },
      ]"
    >
      <div class="product-text">
        <div class="product-tittle">
          <span class="tittle">{{ settingKGify.pre_title }}</span>
        </div>
        <div class="product-subtittle">
          <span class="subtittle">{{ settingKGify.title }}</span>
        </div>
        <div class="product-description">
          <span class="description">
            {{ settingKGify.description }}
          </span>
        </div>
      </div>
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
        <div class="swiper-wrapper">
          <div
            v-for="product in fullProducts"
            :key="product.id"
            class="swiper-slide"
          >
            <KoProductGifyCard
              :product="product"
              class="gifyload"
              :settingKProdutCard="settingKProdutCard"
              :settingGeneral="settingGeneral"
            ></KoProductGifyCard>
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
import KoProductGifyCard from './_productcard/ProductCard'
export default {
  components: {
    KoProductGifyCard,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    settingGeneral: Object,
    settingKProdutCard: Object,
    settingKGify: Object,
    settingKCarousel: Object,
  },
  name: 'Ko-gify-1',
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        breakpoints: {
          10000: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          2560: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
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
            slidesPerView: 2,
            slidesPerGroup: 2,
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
.product-content {
  @apply flex flex-col justify-center items-center w-full py-60;
  background: var(--background_color_1);
}
.separador-blog {
  padding-top: 100px;
}
.product-text,
.product-conten-items {
  @apply flex flex-col justify-center items-center w-full text-center;
}
.product-tittle,
.product-subtittle,
.product-description,
.tittle,
.subtittle,
.description,
.product-conten-items,
. border {
  @apply flex flex-col justify-center items-center text-center;
}

.tittle {
  font-family: var(--font-style-2) !important;
  color: var(--color_pre_title);
}
.subtittle {
  font-family: var(--font-style-1) !important;
  color: var(--color_title);
}
.description {
  font-family: var(--font-style-3) !important ;
  color: var(--color_description);
}
.product-conten-items {
  @apply flex flex-row;
}
@screen sm {
  .producto-items-content {
    @apply w-9/5;
  }
  .tittle {
    line-height: 34px;
    font-size: 24px;
  }
  .subtittle {
    line-height: 42px;
    font-size: 32px;
  }
  .description {
    line-height: 24px;
    font-size: 14px;
  }
}
@screen md {
  .subtittle {
    line-height: 46px;
    font-size: 36px;
  }
}
@screen lg {
  .product-text {
    @apply w-full;
  }
}
@screen mlg {
  .producto-items-content {
    @apply w-9/3;
  }
}
@media (min-width: 1192px) {
  .producto-items-content {
    width: 1192px;
  }
}
@screen xxl {
  .tittle {
    line-height: 34px;
    font-size: 24px;
  }
  .subtittle {
    line-height: 46px;
    font-size: 36px;
  }
  .description {
    line-height: 24px;
    font-size: 14px;
  }
}
</style>
