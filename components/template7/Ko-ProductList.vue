<template>
  <div class="product-content" :style="[settingKProductList, settingGeneral]">
    <div
      class="producto-items-content"
      id="section"
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
          <span class="tittle">{{ settingKProductList.pre_title }}</span>
        </div>
        <div class="product-subtittle">
          <span class="subtittle">{{ settingKProductList.title }}</span>
        </div>
        <div class="product-description">
          <span class="description">
            {{ settingKProductList.description }}
          </span>
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-productos">
          <div class="product-conten-items">
            <div
              v-for="product in listProducts"
              :key="product.id"
              class="content-products"
            >
              <KoProductCard
                :product="product"
                :settingKProdutCard="settingKProdutCard"
                :settingGeneral="settingGeneral"
              ></KoProductCard>
            </div>
          </div>
          <div
            v-if="(this.listProducts.length == 0)"
            class="content-products-empty"
          >
            <div class="header-content-logo">
              <nuxt-link to="/productos" class="wrapper-logo">
                <img
                  :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
                  class="header-logo"
                  alt="Logo Img"
                  @click="clear"
                />
              </nuxt-link>
            </div>
            <p class="txt-products-empty">{{ $t('home_msgCatalogo') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoProductCard from './_productcard/ProductCard'

export default {
  components: {
    KoProductCard,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    settingKProductList: Object,
    settingGeneral: Object,
    settingKProdutCard: Object,
  },
  name: 'Ko-ProductList-1',
  mounted() {
    let domain = this.$route.fullPath
    if (domain === '/') {
      this.clear()
    }
  },
  computed: {
    listProducts() {
      return this.fullProducts.slice(0, 8)
    },
  },
  methods: {
    clear() {
      this.$store.commit('SET_CATEGORY_PRODCUTRO', '')
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', '')
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
    },
  },
  watch: {
    $route(to, from) {
      let domain = this.$route.fullPath
      if (domain === '/') {
        this.clear()
      }
    },
  },
}
</script>

<style scoped>
.product-content {
  @apply flex flex-col justify-center items-center w-full py-50;
  background: var(--background_color_1);
}
.product-text {
  @apply flex flex-col justify-center items-center w-full;
}
.product-conten-items {
  @apply flex flex-col justify-start items-start mt-30;
}
.product-tittle,
.product-subtittle,
.product-description,
.tittle,
.subtittle,
.description,
.producto-items-content {
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
  @apply gap-4;
}
.content-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 40px;
}
.content-item-productos {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.content-products-empty {
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.txt-products-empty {
  @apply mt-6;
  font-size: 20px;
  color: #3f3f3f;
  font-weight: 600;
  font-family: 'David Libre' !important;
}
@screen sm {
  .producto-items-content {
    @apply w-9/5;
  }
  .product-conten-items {
    @apply grid grid-cols-2;
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
  .product-conten-items {
    @apply grid grid-cols-3;
  }
  .subtittle {
    line-height: 46px;
    font-size: 36px;
  }
}
@screen lg {
  .product-text {
    @apply w-full;
  }
  .product-conten-items {
    @apply grid grid-cols-4;
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
@screen xml {
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
