<template>
  <div
    class="product-content"
    :style="[productList, settingGeneral]"
    v-if="this.listProducts.length > 0"
  >
    <div
      class="producto-items-content"
      id="section"
      :style="[
        {
          '--font-style-1':
            this.settingGeneral && this.settingGeneral.fount_1
              ? this.settingGeneral.fount_1
              : 'Poppins',
        },
        {
          '--font-style-2':
            this.settingGeneral && this.settingGeneral.fount_2
              ? this.settingGeneral.fount_2
              : 'Roboto',
        },
      ]"
    >
      <div class="product-text">
        <div class="product-tittle">
          <span class="tittle">{{ productList.title }}</span>
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
                :productListCard="productListCard"
                :settingGeneral="settingGeneral"
              ></KoProductCard>
            </div>
          </div>
          <nuxt-link to="/productos" class="cont-product">
            <button class="btn-products">
              {{ $t('home_allproducts') }}
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoProductCard from '../template9/_productcard/ProductCard'

export default {
  components: {
    KoProductCard,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    productList: Object,
    settingGeneral: Object,
    productListCard: Object,
  },
  name: 'Ko-ProductList',
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
    // eslint-disable-next-line no-unused-vars
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
  background: var(--background_color_1);
  @apply flex flex-col justify-center items-center w-full pt-70;
}
.producto-items-content {
  @apply w-full flex flex-col justify-center items-center text-center;
}
.product-conten-items {
  @apply flex flex-col justify-start items-start;
}
.product-text {
  @apply flex flex-col justify-center items-center w-full mb-30;
}
.product-tittle,
.tittle {
  @apply flex flex-col justify-center items-center;
}
.product-tittle {
  @apply mb-40;
}
.tittle {
  /* font-family: 'Poppins', Helvetica, Arial, sans-serif !important; */
  font-family: var(--font-style-1);
  color: var(--color_title);
  font-weight: 700;
}
.content-item {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
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
.btn-products {
  @apply px-5;
  margin-top: 80px;
  width: auto;
  height: 45px;
  border: 2px solid var(--color_background_btn);
  color: var(--color_text_btn);
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 1px;
  transition: all 150ms ease-in;
  /* font-family: 'Roboto', Helvetica, Arial, sans-serif !important; */
  font-family: var(--font-style-2);
}
.btn-products:hover {
  color: #fff;
  background-color: #2c2930;
  transition: all 150ms ease-in;
}
@screen sm {
  .product-conten-items {
    @apply grid grid-cols-1 gap-4;
    width: 75%;
  }
  .product-tittle {
    width: 75%;
  }
  .tittle {
    line-height: 34px;
    font-size: 30px;
  }
}
@media (min-width: 500px) {
  .product-conten-items {
    @apply w-9/0 grid grid-cols-2;
  }
}
@screen lg {
  .product-text {
    @apply w-full;
  }
  .product-conten-items {
    @apply grid grid-cols-3;
  }
}
@media (min-width: 1000px) {
  .product-conten-items {
    width: 95%;
  }
}
@media (min-width: 1160px) {
  .product-conten-items {
    @apply grid grid-cols-4;
    width: 95vw;
  }
}
@screen xml {
  .tittle {
    line-height: 34px;
    font-size: 36px;
  }
}
@screen xxl {
  .product-conten-items {
    @apply gap-10;
  }
}
</style>
