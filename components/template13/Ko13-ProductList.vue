<template>
  <div
    class="product-content"
    :style="[
      settingGeneral,
      productList,
      {
        '--font-style-1': settingGeneral?.fount_1 ?? 'Poppins',
      },
    ]"
  >
    <div class="producto-items-content">
      <div class="product-text">
        <div class="product-tittle">
          <span class="tittle">{{ productList.title }}</span>
        </div>
      </div>
      <div ref="mySwiper" v-swiper:mySwiper="swiperOption">
        <div v-if="listProducts.length > 0" class="swiper-wrapper pb-10">
          <div
            v-for="product in listProducts"
            :key="product.id"
            class="swiper-slide h-full ml-20"
          >
            <KoProductCard
              :product="product"
              :setting-card-products="cardProduct"
              :setting-general="settingGeneral"
              class="giftLoad h-full"
            />
          </div>
        </div>
        <div v-else class="content-products-empty">
          <p>{{ $t('home_msgCatalogo') }}</p>
        </div>
      </div>
      <div v-if="productList.visibleBtn" class="btn-products">
        <template v-if="isInternalUrl(productList.url_redirect)">
          <nuxt-link
            :to="productList.url_redirect ? productList.url_redirect : ''"
            class="btn"
          >
            {{ productList.displayName }}
          </nuxt-link>
        </template>
        <template v-else>
          <a
            :href="productList.url_redirect ? productList.url_redirect : ''"
            rel="noreferrer noopener"
            class="btn"
          >
            {{ productList.displayName }}
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko13ProductList',
  components: {
    KoProductCard: () => import('./_productcard/Ko13-product-card.vue'),
  },
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    productList: {
      type: Object,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
    cardProduct: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      listProducts: [],
      swiperOption: {
        direction: 'horizontal',
        setWrapperSize: true,
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 20,
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
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
  mounted() {
    this.currentChange()
  },
  methods: {
    isInternalUrl(url) {
      return url.startsWith('/')
    },
    async currentChange() {
      const { success, data } = await this.$store.dispatch(
        'products/GET_ALL_PRODUCTS',
        {
          id_tienda: this.dataStore.id,
          limit: 8,
          page: 1,
          topSales: 1,
        }
      )
      if (success) {
        this.listProducts = data.publicProductList
      }
    },
  },
}
</script>

<style scoped>
.giftLoad,
.swiper-slide {
  max-width: 300px;
}
.giftLoad:hover {
  @apply shadow-lg;
}
.product-content {
  background: var(--background_color_1);
  padding-top: var(--padding);
  padding-bottom: var(--padding);
  @apply flex flex-col justify-center items-center w-full;
}
.product-text {
  @apply flex flex-col justify-center items-center w-full text-center;
}
.product-tittle,
.product-subTittle,
.tittle {
  @apply flex flex-col justify-center items-center text-center;
}
.tittle {
  font-family: var(--font-style-1) !important;
  color: var(--color_title);
  font-size: var(--fontSizeTitle);
  font-weight: var(--fontWeightTitle);
  margin-bottom: var(--marginbottomTitle);
}
.btn-products {
  @apply w-full flex justify-center items-center mt-50;
}
.btn {
  border-radius: var(--radius_btn);
  font-size: 16px;
  color: var(--color_text_btn);
  text-decoration: underline;
  font-family: var(--font-style-1) !important;
  @apply mr-20 px-8 font-semibold leading-20 transition-all ease-in duration-0.2;
}
.btn:hover {
  color: var(--hover_text_btn);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  @apply transition-all ease-in duration-0.2;
}
@screen sm {
  .producto-items-content {
    @apply w-full px-10;
  }
  .product-text {
    @apply mb-30;
  }
}
@screen md {
  .producto-items-content {
    @apply w-full px-10;
  }
}
@screen lg {
  .product-text {
    @apply w-full;
  }
}
@media (min-width: 1400px) {
  .producto-items-content {
    width: 1300px;
    @apply px-20;
  }
  .tittle {
    /* font-size: 42px; */
    @apply leading-50;
  }
}
</style>
