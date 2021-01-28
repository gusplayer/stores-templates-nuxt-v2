<template>
  <div class="product-content">
    <div class="producto-items-content">
      <div class="product-text">
        <div class="product-tittle">
          <span class="tittle">Massa et semper litara.</span>
        </div>
        <div class="product-subtittle">
          <span class="subtittle">Nuestros productos Gify</span>
        </div>
        <div class="product-description">
          <span class="description">
            A laoreet ad litora consequat a luctus a suspendisse ruturm
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
  @apply flex flex-col justify-center items-center w-full my-80;
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
  font-family: 'Great Vibes', cursive !important;
  color: #ed2353;
}
.subtittle {
  font-family: 'David Libre', serif !important;
  color: #2d2a2a;
}
.description {
  font-family: 'Lora', serif !important ;
  color: #777;
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
@screen xl {
  .producto-items-content {
    @apply w-8/3;
  }
}
@screen xml {
  .producto-items-content {
    @apply w-6/3;
  }

  @screen xxl {
    .producto-items-content {
      @apply w-4/6;
    }
  }

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
