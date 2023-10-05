<template>
  <div
    v-if="listProducts.length > 0"
    class="product-content"
    :style="[productList, settingGeneral]"
  >
    <div
      class="producto-items-content"
      :style="[
        {
          '--font-style-1': settingGeneral.fount_1 ?? 'Poppins',
        },
        {
          '--font-style-2': settingGeneral.fount_2 ?? 'Roboto',
        },
      ]"
    >
      <div class="product-text">
        <span class="tittle">{{ productList.title }}</span>
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
                :product-list-card="productListCard"
                :setting-general="settingGeneral"
              />
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
  name: 'Ko09ProductList',
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

  computed: {
    listProducts() {
      return this.fullProducts.slice(0, 8)
    },
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.clear()
    },
  },
  mounted() {
    this.clear()
    var el = document.querySelector('.tittle')
    el.innerHTML = el.innerHTML.replace(/&nbsp;/g, ' ')
  },
  methods: {
    clear() {
      this.$store.commit('SET_CATEGORY_PRODUCTO', '')
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: '',
      })
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
  max-width: 470px;
  text-align: center;
  @apply w-full mb-30;
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
    @apply grid grid-cols-2 gap-4;
    width: 95%;
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
    width: 95vw;
    @apply grid grid-cols-4;
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
@media (max-width: 460px) {
  .product-text {
    width: 90%;
    /* height: auto; */
    /* word-wrap: break-word; */
    /* overflow: hidden; */
  }
}
</style>
