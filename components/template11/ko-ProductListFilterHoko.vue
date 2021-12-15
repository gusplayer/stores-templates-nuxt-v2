<template>
  <div
    class="product-content"
    :style="[
      settingByTemplate11[0].setting11General,
      settingByTemplate11[0].productList,
      {
        '--font-style-1':
          this.settingByTemplate11[0].setting11General &&
          this.settingByTemplate11[0].setting11General.fount_1
            ? this.settingByTemplate11[0].setting11General.fount_1
            : 'Roboto',
      },
    ]"
  >
    <div class="bannerProduct">
      <div class="crumb">
        <nuxt-link to="/">
          <p class="txt-crumb s1">{{ $t('header_inicio') }}</p>
        </nuxt-link>
        <p class="separatorCrumb">/</p>
        <p class="txt-crumb s2">
          {{ $t('header_productos') }}
        </p>
      </div>
    </div>
    <div class="container-product-max-w">
      <div class="content-shop-items">
        <div class="producto-items-content" id="section">
          <div class="content-item">
            <div class="content-item-productos">
              <div class="product-conten-items" id="grid-selection">
                <div
                  v-for="product in producthoko.data"
                  :key="product.id"
                  class="content-products h-full"
                >
                  <KoProdcutCardFilter
                    :product="product"
                    class="product-list"
                    :settingKcardProduct="settingByTemplate11[0].cardProduct"
                    :settingGeneral="settingByTemplate11[0].setting11General"
                  ></KoProdcutCardFilter>
                </div>
              </div>
              <div v-if="producthoko.total == 0" class="content-products-empty">
                <div class="header-content-logo">
                  <nuxt-link to="/productos" class="wrapper-logo">
                    <img
                      v-lazy="
                        `https://api2.komercia.co/logos/${dataStore.tienda.logo}`
                      "
                      class="header-logo"
                      alt="Logo Img"
                    />
                  </nuxt-link>
                </div>
                <p class="txt-products-empty">{{ $t('home_msgCatalogo') }}</p>
              </div>
              <div class="pagination-medium">
                <div class="product_pagination" v-if="producthoko.total > 10">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :hide-on-single-page="true"
                    :page-count="producthoko.last_page"
                    @current-change="currentChange"
                    :current-page="currentPage"
                    class="pagination"
                  ></el-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoProdcutCardFilter from './_productcard/ProductCardHoko.vue'
export default {
  components: {
    KoProdcutCardFilter,
  },
  props: {
    settingByTemplate11: Array,
    dataStore: Object,
  },
  name: 'Ko-ProductList-Filter',
  mounted() {
    if (this.previousPage) {
      this.currentPage = this.previousPage
    }
    this.currentChange(1)
  },
  data() {
    return {
      rangeSlide: [0, 1000000],
      price: [0, 1000000],
      range: {
        max: 0,
      },
      currentPage: 1,
      sub: -1,
      show: false,
      value: 1,
      valuesub: '',
      numVistas: 16,
    }
  },
  computed: {
    previousPage() {
      return this.$store.state.previousPage
    },
    producthoko() {
      return this.$store.state.producthoko
    },
  },
  methods: {
    currentChange(page) {
      this.$store.dispatch('GET_PRODUCTSHOKO', page)
      this.currentPage = page
    },
    mouseOver(index) {
      this.sub = index
      this.show = true
    },
    mouseLeave() {
      this.sub = -1
      this.show = false
    },
  },
  watch: {
    currentPage() {
      this.$store.commit('SET_PREVIOUSPAGE', this.currentPage)
      let timerTimeout = null
      timerTimeout = setTimeout(() => {
        timerTimeout = null
        window.scrollBy(0, -1500)
      }, 250)
    },
    previousPage() {
      if (this.previousPage) {
        this.currentPage = this.previousPage
      }
    },
  },
}
</script>

<style scoped>
.product-content {
  background: var(--background_color_1);
  @apply flex flex-col justify-center items-center w-full pb-80;
}
.crumb {
  @apply w-full flex flex-row justify-center items-center;
}
.txt-crumb {
  font-size: 15px;
  color: var(--breadCrumbs);
  font-family: var(--font-style-1) !important;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.s1:hover {
  color: #000;
  transition: all 0.25s ease;
}
.s2:hover {
  color: #000;
  transition: all 0.25s ease;
}
.separatorCrumb {
  font-size: 9px;
  color: var(--breadCrumbs);
  font-family: var(--font-style-1) !important;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.container-product-max-w {
  max-width: 1400px;
  @apply w-full flex flex-col justify-center items-center;
}
.product-conten-items {
  @apply justify-center items-center text-center gap-4;
}
.content-item {
  @apply w-full flex flex-row justify-center items-center mb-40;
}
.content-item-productos {
  @apply w-full flex flex-col justify-center items-center;
}
.content-products {
  /* border-bottom: 0.5px solid #f2f2f2; */
  @apply w-full flex flex-col justify-center items-center;
}
.content-products-empty {
  min-height: 200px;
  @apply w-full flex flex-col justify-center items-center text-center;
}
.txt-products-empty {
  font-size: 20px;
  color: #3f3f3f;
  font-family: var(--font-style-1) !important;
  @apply mt-6 font-semibold;
}
.pagination-medium {
  margin-top: 50px;
  background: transparent;
}
.pagination {
  font-size: 18px;
  color: #222;
  background: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next {
  color: #222;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-prev {
  color: #222;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .el-pager li {
  color: #222;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next:hover {
  color: #eb7025;
}
.product_pagination >>> .el-pagination.is-background .btn-prev:hover {
  color: #eb7025;
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: #eb7025;
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #eb7025;
  color: #fff;
}
@screen sm {
  .content-shop-items {
    @apply w-9/0 flex flex-row justify-start items-start mt-10;
  }
  .bannerProduct {
    @apply hidden;
  }
  .product-conten-items {
    @apply w-full grid grid-cols-1;
  }
}
@media (min-width: 440px) {
  .product-conten-items {
    @apply grid grid-cols-2;
  }
}
@screen md {
  .content-shop-items {
    @apply w-9/3 mt-20;
  }
  .bannerProduct {
    border-color: var(--border);
    @apply w-full flex bg-cover bg-center bg-no-repeat justify-items-center items-center py-20 border-b;
  }
}
@screen lg {
  .content-shop-items {
    @apply w-9/5 flex flex-row justify-start items-start mt-40;
  }
  .product-conten-items {
    @apply grid grid-cols-3 gap-10;
  }
}
@screen mlg {
  .product-content {
    @apply mt-0;
  }
}
</style>
