<template>
  <main class="content-productoList">
    <div class="content-item-productList">
      <div class="content-items-product">
        <div class="content-categories">
          <div class="content-items-categorias-text">
            <button class="txt-catalogo" @click="clearFilters">
              {{ $t('home_catalogo') }}
            </button>
            <div class="flex flex-row items-start justify-center">
              <button v-if="nameCategory" class="txt-category" @click="breadcrumbsClear(1)">
                <span class="px-4 font-normal">/</span>{{ nameCategory }}
              </button>
              <button v-if="nameSubCategory" class="txt-category" @click="breadcrumbsClear(2)">
                <span class="px-4 font-normal">/</span>{{ nameSubCategory }}
              </button>
              <p v-if="tagProduct" class="txt-category">
                <span class="px-4 font-normal">/</span>{{ tagProduct }}
              </p>
            </div>
          </div>





          <div class="flex w-full flex-row items-center justify-end gap-2">
            <el-dropdown class="mt-2 flex items-center justify-end" trigger="click" @command="sendOrder">
              <span class="el-dropdown-link txt-color items-center justify-center">
                Ordenar por:
                <span v-if="sortingFilter?.label" class="ml-5 text-11 font-normal text-black" @click="clearOrder">
                  {{ $t(sortingFilter.label) }}
                </span>
                <i class="el-icon-arrow-down el-icon--right leading-21"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="items in listOrderFilter" v-show="!stateShipping" :key="items.id"
                  :command="items" :class="sortingFilter?.id === items.id
                    ? 'bg-black text-white-white'
                    : ''
                    ">
                  {{ $t(items.label) }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div v-if="hasActiveFilters" class="badge-filtros flex items-center ml-2">
              <span class="badge-icon mr-1">🔎</span>
              <span class="badge-label">Filtros activos</span>
              <button class="badge-clear ml-1" @click="clearFilters" title="Limpiar filtros">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#25D366" />
                  <path d="M7 7L13 13M13 7L7 13" stroke="#fff" stroke-width="2" stroke-linecap="round" />
                </svg>
              </button>
            </div>
            <search-icon class="icon-s mx-5" @click="openSearch" />
            <menu-icon class="icon-s" @click="openMenuLateral" />
          </div>
        </div>
        <KoSearch :data-store="dataStore" :setting-by-template="settingByTemplate" />
        <KoMenu :logo-store="logoStore" :data-store="dataStore" :setting-by-template="settingByTemplate" />
        <div class="content-grid-product">
          <div v-for="product in listProducts" :key="product.id" class="card-product">
            <KoProductCard2 :product="product" :data-store="dataStore" />
          </div>
        </div>
        <div v-if="listProducts.length === 0" class="content-products-empty">
          <p>{{ $t('home_msgCatalogo') }}</p>
        </div>
        <br />
        <div v-if="totalProducts > filters.limit" class="wrapper-pagination">
          <div class="pagination-medium">
            <el-pagination background layout="prev, pager, next" :total="totalProducts" :page-size="filters.limit"
              :current-page.sync="previousPage" class="pagination bg-transparent" @current-change="changePage" />
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
    logoStore: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...filters.computed,
    hasActiveFilters() {
      // Considera filtros activos: búsqueda, categoría, subcategoría, tag, ordenamientos, precios, promociones, etc.
      return (
        (this.searchProduct && this.searchProduct !== '') ||
        (this.filters && (
          this.filters.category ||
          this.filters.subcategory ||
          this.filters.promotion ||
          this.filters.minPrice ||
          this.filters.maxPrice ||
          this.filters.freeShipping ||
          this.filters.tag ||
          this.filters.variants ||
          (this.filters.alphabetic && this.filters.alphabetic !== 'ASC') ||
          (this.filters.price && this.filters.price !== 'ASC') ||
          this.filters.topSales
        )) ||
        this.nameCategory ||
        this.nameSubCategory ||
        this.tagProduct ||
        this.sortingFilter
      )
    },
  },
  watch: {
    previousPage() {
      let scrollTimeout = null

      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout)
      }

      scrollTimeout = setTimeout(() => {
        scrollTimeout = null
        window.scrollTo({
          top: 0,
        })
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
/* Badge profesional de filtros activos */
.badge-filtros {
  background: #e8f8f1;
  border-radius: 16px;
  padding: 2px 10px 2px 8px;
  font-size: 13px;
  font-weight: 500;
  color: #25D366;
  border: 1px solid #25D36622;
  transition: box-shadow 0.2s;
  box-shadow: 0 1px 4px 0 #25d36622;
  margin-left: 8px;
}

.badge-filtros:hover {
  box-shadow: 0 2px 8px 0 #25d36633;
}

.badge-icon {
  font-size: 15px;
  vertical-align: middle;
}

.badge-label {
  color: #25D366;
  font-weight: 600;
  font-size: 13px;
  margin-right: 2px;
}

.badge-clear {
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
}

.badge-clear:hover {
  opacity: 0.7;
}

.content-productoList {
  @apply flex w-full flex-col items-center justify-start;
}

.pagination-medium {
  margin-top: 20px;
  margin-bottom: 20px;
}

.pagination-medium>>>.el-pagination.is-background .btn-next {
  color: black;
  background-color: transparent;
}

.pagination-medium>>>.el-pagination.is-background .btn-prev {
  color: black;
  background-color: transparent;
}

.pagination-medium>>>.el-pagination.is-background .el-pager li {
  color: black;
  background-color: transparent;
}

.pagination-medium>>>.el-pagination.is-background .btn-next:hover {
  color: black;
}

.pagination-medium>>>.el-pagination.is-background .btn-prev:hover {
  color: black;
}

.pagination-medium>>>.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: black;
}

.pagination-medium>>>.el-pagination.is-background .el-pager li:not(.disabled).active {
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
    @apply flex flex-col items-center justify-center;
  }

  .content-categories {
    @apply mb-10 flex w-full flex-row items-center justify-between;
  }

  .txt-catalogo {
    color: #3d3d3d;
    font-size: 15px;
    font-family: 'Poppins', sans-serif !important;
    @apply cursor-pointer font-semibold;
  }

  .txt-category {
    color: #818181;
    font-size: 15px;
    font-family: 'Poppins', sans-serif !important;
    @apply font-semibold;
  }

  .content-items-product {
    @apply flex w-full flex-col items-center justify-center;
  }

  .content-grid-product {
    @apply grid w-full grid-cols-2 items-start justify-center gap-4;
  }

  .card-product {
    @apply flex w-full flex-col items-center justify-start;
  }

  .content-products-empty {
    padding: 0px 20px;
    min-height: 380px;
    @apply flex w-full items-center justify-center text-center;
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
