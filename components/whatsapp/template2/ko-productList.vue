<template>
  <main class="content-productoList">
    <div class="content-item-productList">
      <div class="content-items-product">
        <div class="content-categories">
          <div class="content-items-categorias-text">
            <button class="txt-catalogo" @click="clearFilters">
              {{ $t('home_catalogo') }}
            </button>
            <div class="flex flex-row justify-center items-start">
              <button
                v-if="nameCategory"
                class="txt-category"
                @click="breadcrumbsClear(1)"
              >
                <span class="font-normal px-4">/</span>{{ nameCategory }}
              </button>
              <button
                v-if="nameSubCategory"
                class="txt-category"
                @click="breadcrumbsClear(2)"
              >
                <span class="font-normal px-4">/</span>{{ nameSubCategory }}
              </button>
              <p v-if="tagProduct" class="txt-category">
                <span class="font-normal px-4">/</span>{{ tagProduct }}
              </p>
            </div>
          </div>
          <div class="w-full flex flex-row justify-end items-center">
            <el-dropdown
              class="w-full flex justify-end items-center mt-2"
              :hide-on-click="false"
              @command="sendOrder"
            >
              <span
                class="el-dropdown-link txt-color justify-center items-center"
              >
                Ordenar por:
                <span
                  v-if="sortingFilter?.label"
                  class="font-normal text-11 ml-5 text-black"
                  @click="clearOrder"
                >
                  {{ $t(sortingFilter.label) }}
                </span>
                <i class="el-icon-arrow-down el-icon--right leading-21"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="items in listOrderFilter"
                  v-show="!stateShipping"
                  :key="items.id"
                  :command="items"
                  :class="
                    sortingFilter?.id === items.id
                      ? 'bg-black text-white-white'
                      : ''
                  "
                >
                  {{ $t(items.label) }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <search-icon class="icon-s mx-5" @click="openSearch" />
            <menu-icon class="icon-s" @click="openMenuLateral" />
          </div>
        </div>
        <KoSearch
          :data-store="dataStore"
          :setting-by-template="settingByTemplate"
        />
        <KoMenu
          :data-store="dataStore"
          :setting-by-template="settingByTemplate"
        />
        <div class="content-grid-product">
          <div
            v-for="product in listProducts"
            :key="product.id"
            class="card-product"
          >
            <KoProductCard2 :product="product" :data-store="dataStore" />
          </div>
        </div>
        <div v-if="listProducts.length === 0" class="content-products-empty">
          <p>{{ $t('home_msgCatalogo') }}</p>
        </div>
        <br />
        <div v-if="totalProducts > filters.limit" class="wrapper-pagination">
          <div class="pagination-medium">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalProducts"
              :page-size="filters.limit"
              :current-page.sync="previousPage"
              class="pagination bg-transparent"
              @current-change="changePage"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import filters from '@/mixins/filterProducts'
export default {
  name: 'ProductGridWa2',
  components: {
    KoProductCard2: () => import('../product-card/ko99-product-card'),
    KoMenu: () =>
      import('../../headers/_lateralMenu/_lateralMenu/openMenuLeftWapi.vue'),
    KoSearch: () => import('../ko99-search-wa.vue'),
  },
  mixins: [filters],
  props: {
    settingByTemplate: {
      type: Object,
      required: true,
    },
  },
  watch: {
    previousPage() {
      let timerTimeout = null
      // eslint-disable-next-line no-unused-vars
      timerTimeout = setTimeout(() => {
        timerTimeout = null
        window.scrollBy(0, -1500)
      }, 250)
    },
  },
  methods: {
    openMenuLateral() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', true)
    },
    openSearch() {
      this.$store.commit('SET_OPEN_SEARCH', true)
    },
  },
}
</script>
<style scoped>
.content-productoList {
  @apply w-full flex flex-col justify-start items-center;
}
.pagination-medium {
  margin-top: 20px;
  margin-bottom: 20px;
}
.pagination-medium >>> .el-pagination.is-background .btn-next {
  color: black;
  background-color: transparent;
}
.pagination-medium >>> .el-pagination.is-background .btn-prev {
  color: black;
  background-color: transparent;
}
.pagination-medium >>> .el-pagination.is-background .el-pager li {
  color: black;
  background-color: transparent;
}
.pagination-medium >>> .el-pagination.is-background .btn-next:hover {
  color: black;
}
.pagination-medium >>> .el-pagination.is-background .btn-prev:hover {
  color: black;
}
.pagination-medium
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: black;
}
.pagination-medium
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: black;
  color: white;
}
.wrapper-pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.content-items-categorias-text {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
}
.icon-s {
  font-size: 25px;
  color: black;
  cursor: pointer;
}
.icon-s:hover {
  color: grey;
}
@screen sm {
  .content-item-productList {
    width: 95%;
    @apply flex flex-col justify-center items-center;
  }
  .content-categories {
    @apply w-full flex flex-row justify-between items-center mb-10;
  }
  .txt-catalogo {
    color: #3d3d3d;
    font-size: 15px;
    font-family: 'Poppins', sans-serif !important;
    @apply font-semibold cursor-pointer;
  }
  .txt-category {
    color: #818181;
    font-size: 15px;
    font-family: 'Poppins', sans-serif !important;
    @apply font-semibold;
  }
  .content-items-product {
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-grid-product {
    @apply w-full h-full grid grid-cols-2 gap-4 justify-center items-start;
  }
  .card-product {
    @apply w-full h-full flex flex-col justify-start items-center;
  }
  .content-products-empty {
    padding: 0px 20px;
    min-height: 380px;
    @apply w-full flex justify-center items-center text-center;
  }
  .content-products-empty p {
    font-size: 18px;
    opacity: 0.6;
    font-weight: bold;
    color: black;
  }
}
@media (min-width: 768px) {
  .content-grid-product {
    @apply grid grid-cols-3 gap-6;
  }
}
</style>
