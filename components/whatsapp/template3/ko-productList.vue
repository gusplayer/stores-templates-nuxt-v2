<template>
  <div class="content-productoList">
    <div class="content-item-productList">
      <div class="content-items-product">
        <div class="content-categories">
          <div class="content-items-categorias-text">
            <p class="txt-catalogo" @click="clear">
              {{ $t('home_catalogo') }}
            </p>
            <p class="txt-category mx-2" v-if="this.nameCategoryHeader">/</p>
            <p class="txt-category" v-if="this.nameCategoryHeader">
              {{ this.nameCategoryHeader }}
            </p>
            <p class="txt-category mx-2" v-if="this.nameSubCategoryHeader">/</p>
            <p class="txt-category" v-if="this.nameSubCategoryHeader">
              {{ this.nameSubCategoryHeader }}
            </p>
          </div>
          <div>
            <search-icon class="icon-s" @click="openSearch" />
            <menu-icon
              class="icon-s icon-responsive"
              @click="openMenuLateral"
            />
          </div>
        </div>
        <KoSearch :settingByTemplate="settingByTemplate" />
        <div class="content-grid-product">
          <div
            class="card-product"
            v-for="product in filterProduct"
            :key="product.id"
          >
            <ProductCard :product="product" :dataStore="dataStore" />
          </div>
        </div>
        <div
          v-if="this.fullProducts.length == 0"
          class="content-products-empty"
        >
          <p>{{ $t('home_msgCatalogo') }}</p>
        </div>
        <br />
        <div class="wrapper-pagination" v-if="fullProducts.length > 16">
          <div class="pagination-medium">
            <el-pagination
              background
              small
              layout="prev, pager, next"
              :total="fullProducts.length"
              :page-size="16"
              :current-page.sync="currentPage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from '../template3/productCard/ko-productCard'
import KoSearch from '../searchWa.vue'
import filterProducts from '../../../mixins/filterProducts'
import KoMenu from '../../headers/_lateralMenu/_lateralMenu/openMenuLeftWapi.vue'
export default {
  name: 'ProductListWa-3',
  props: {
    dataStore: Object,
    fullProducts: {},
  },
  mixins: [filterProducts],
  components: { ProductCard, KoSearch, KoMenu },
  mounted() {
    this.getQuery()
    if (this.previousPage) {
      this.currentPage = this.previousPage
    }
  },
  data() {
    return {
      search: '',
      currentPage: 1,
    }
  },
  computed: {
    categorias() {
      return this.dataStore.categorias
    },
    subcategories() {
      return this.dataStore.subcategorias
    },
    getProductsCategorie() {
      const initial = this.currentPage * 16 - 16
      const final = initial + 16
      return this.fullProducts
        .filter((product) => product.categoria == this.select)
        .slice(initial, final)
    },
    filterProduct() {
      const initial = this.currentPage * 16 - 16
      const final = initial + 16
      return this.fullProducts.slice(initial, final)
    },
    selectedCategory() {
      return this.$store.state.products.payload
    },
    selectedType() {
      return this.$store.state.products.type
    },
    heightHeader() {
      return this.$refs.header.offsetHeight
    },
    nameCategoryHeader() {
      return this.$store.state.category_producto_header
    },
    nameSubCategoryHeader() {
      return this.$store.state.subcategory_producto_header
    },
    searchValue() {
      return this.$store.state.searchValue
    },
    previousPage() {
      return this.$store.state.previousPage
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
  },
  methods: {
    openMenuLateral() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', true)
    },
    getQuery() {
      if (this.$route.query && this.$route.query.category) {
        this.sendCategoryUrlMix(this.$route.query.category)
      } else if (this.$route.query && this.$route.query.subcategory) {
        this.SendSubCategoryUrlMix(
          this.$route.query.subcategory,
          this.categorias,
          this.subcategories
        )
      } else if (
        this.$route.query &&
        this.$route.query.tagId &&
        this.$route.query.tagName
      ) {
        this.sendTagUrlMix(this.$route.query.tagId, this.$route.query.tagName)
      } else if (this.$route.query && this.$route.query.search) {
        this.SearchProduct(decodeURIComponent(this.$route.query.search))
      } else if (this.$route.fullPath == '/') {
        this.allCategories()
      }
    },
    openSearch() {
      this.$store.commit('SET_OPEN_SEARCH', true)
    },
    SearchProduct2(search) {
      if (search.length) {
        this.$store.commit('products/FILTER_BY', {
          type: ['search'],
          data: search,
        })
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['all'],
          data: '',
        })
      }
      this.currentPage = 1
    },
    breadcrumbsSendCategory(value) {
      let filtradoCategories = this.categorias.find((element) => {
        if (element.nombre_categoria_producto == value) {
          return element
        }
      })
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: filtradoCategories.nombre_categoria_producto,
      })
    },
    clear() {
      this.$store.commit('SET_STATE_BANNER', true)
      this.$store.commit('SET_CATEGORY_PRODUCTO', '')
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: '',
      })
      this.$emit('clear')
    },
    sendCategoryUrl(value) {
      let urlFiltrada = decodeURIComponent(value)
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: urlFiltrada,
      })
      if (this.$store.getters['products/filterProducts'].length) {
        this.$store.commit('SET_CATEGORY_PRODUCTO', urlFiltrada)
      } else {
        this.$store.commit('SET_CATEGORY_PRODUCTO', '')
      }
    },
    SendSubCategoryUrl(value) {
      let urlFiltradaTemp = decodeURIComponent(value)
      let resTemp = urlFiltradaTemp.split('^')
      let urlFiltrada = decodeURIComponent(resTemp[0])
      let filtradoSubCategory = this.subcategories.find((element) => {
        if (
          element.categoria == parseInt(resTemp[1]) &&
          element.nombre_subcategoria == urlFiltrada
        ) {
          return element
        }
      })
      if (filtradoSubCategory) {
        let filtradoCategories = this.categorias.find(
          (element) => element.id == parseInt(resTemp[1])
        )
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: filtradoSubCategory.id,
        })
        if (this.$store.getters['products/filterProducts'].length) {
          this.$store.commit(
            'SET_CATEGORY_PRODUCTO',
            filtradoCategories.nombre_categoria_producto
          )
          this.$store.commit(
            'SET_SUBCATEGORY_PRODUCTO',
            filtradoSubCategory.nombre_subcategoria
          )
        } else {
          this.$store.commit('SET_CATEGORY_PRODUCTO', '')
          this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
        }
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: '',
        })
      }
    },
  },
  watch: {
    search(value) {
      this.SearchProduct2(value)
    },
    currentPage() {
      this.$store.commit('SET_PREVIOUS_PAGE', this.currentPage)
      let timerTimeout = null
      timerTimeout = setTimeout(() => {
        timerTimeout = null
        window.scrollTo(0, 0)
      }, 250)
    },
    previousPage() {
      if (this.previousPage) {
        this.currentPage = this.previousPage
      }
    },
    nameCategoryHeader(value) {
      return value
    },
    nameSubCategoryHeader(value) {
      return value
    },
    searchValue(value) {
      this.SearchProduct2(value)
    },
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.getQuery()
    },
  },
}
</script>
<style scoped>
.content-productoList {
  @apply w-full flex flex-col justify-center items-center;
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
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-categories {
    @apply w-full flex flex-row justify-between items-center mb-10;
  }
  .txt-catalogo {
    color: #3d3d3d;
    font-size: 15px;
    font-family: 'Poppins', sans-serif !important;
    @apply font-semibold;
  }
  .txt-category {
    color: #818181;
    font-size: 15px;
    font-family: 'Poppins', sans-serif !important;
    @apply font-semibold;
  }
  .content-items-product {
    @apply w-9/5 flex flex-col justify-center items-center;
  }
  .content-grid-product {
    @apply w-full h-full grid grid-cols-1 gap-4 justify-center items-start;
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
    @apply grid grid-cols-2 gap-6;
  }
}
</style>
