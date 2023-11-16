<template>
  <div
    class="w-full flex flex-col justify-center items-center mt-50 mb-[120px]"
  >
    <div
      id="section"
      class="w-9/0 flex flex-col justify-center items-center text-center"
    >
      <div class="flex flex-row items-center justify-between mb-40">
        <div class="w-full flex flex-col justify-center items-center">
          <div
            class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-start text-center gap-4"
          >
            <div v-for="product in searchProducts" :key="product.id">
              <KoProductCard
                :product="product"
                :setting-card-products="settingCardProducts"
                :setting-general="settingGeneral"
                class="h-full"
              />
            </div>
          </div>
          <div
            v-if="searchProducts.length === 0"
            class="w-full min-h-[200px] flex flex-col justify-center items-center"
          >
            <nuxt-link to="/productos">
              <img
                :src="`${this.$store.state.urlKomercia}/logos/${dataStore.logo}`"
                class="header-logo"
                alt="Logo Img"
              />
            </nuxt-link>
            <p class="txt-products-empty">{{ $t('home_msgCatalogo') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko7ProductListSearch',
  components: {
    KoProductCard: () => import('./_productcard/ProductCard'),
  },
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    searchProducts: {
      type: Array,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
    settingCardProducts: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.txt-products-empty {
  font-size: 20px;
  color: #3f3f3f;
  font-weight: 600;
  font-family: 'David Libre' !important;
  @apply mt-6;
}
.pagination {
  font-size: 18px;
  color: #3f3f3f;
  background: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next {
  color: #3f3f3f;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-prev {
  color: #3f3f3f;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .el-pager li {
  color: #3f3f3f;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next:hover {
  color: var(--hover_card);
}
.product_pagination >>> .el-pagination.is-background .btn-prev:hover {
  color: var(--hover_card);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: var(--hover_card);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: var(--hover_card);
  color: white;
}
</style>
