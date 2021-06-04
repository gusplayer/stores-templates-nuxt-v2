<template>
  <div class="content-productoList">
    <div class="content-item-productList">
      <div class="content-items-product">
        <div class="content-categories">
          <p class="txt-catalogo">
            {{ $t('home_catalogo') }}
          </p>
          <p class="txt-category" v-if="this.nameCategoryHeader">
            {{ this.nameCategoryHeader }}
          </p>
        </div>
        <div class="content-grid-product">
          <div
            class="card-product"
            v-for="product in filterProduct"
            :key="product.id"
          >
            <ProductCard
              :product="product"
              :dataStore="dataStore"
            ></ProductCard>
          </div>
        </div>
        <div
          v-if="this.fullProducts.length == 0"
          class="content-products-empty"
        >
          <p>{{ $t('home_msgCatalogo') }}</p>
        </div>
        <br />
        <div class="pagination-content" v-if="products.length > 16">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="products.length"
            :page-size="18"
            :current-page.sync="currentPage"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from '../template2/productCard/ko-productCard'
export default {
  name: 'ProductListWa',
  props: {
    dataStore: Object,
    fullProducts: {},
  },
  components: { ProductCard },
  mounted() {
    this.$store.commit('products/SET_FILTER', this.$route.query)
    if (this.$store.getters['products/filterProducts']) {
      this.products = this.$store.getters['products/filterProducts']
      let maxTMP = 0
      this.products.forEach((product) => {
        if (maxTMP <= product.precio) {
          this.price[1] = product.precio
          this.range.max = parseInt(product.precio)
          maxTMP = product.precio
        }
      })
    }
    if (this.previousPage) {
      this.currentPage = this.previousPage
    }
  },
  data() {
    return {
      drawerleft: false,
      directionleft: 'ltr',
      add: true,
      search: '',
      productsCategory: [],
      price: [0, 1000000],
      range: {
        max: 0,
      },
      currentPage: 1,
      sub: -1,
      show: false,
      value: '',
      valuesub: '',
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexCategory: 0,
      indexSelect: '',
      indexSelect2: '',
    }
  },
  computed: {
    products: {
      get() {
        return this.dataStore.productos
      },
      set(value) {
        this.dataStore.productos = value
      },
    },
    categorias() {
      return this.dataStore.categorias
    },
    subcategories() {
      return this.dataStore.subcategorias
    },
    getProductsCategorie() {
      const initial = this.currentPage * 18 - 18
      const final = initial + 18
      return this.fullProducts
        .filter((product) => product.categoria == this.select)
        .slice(initial, final)
    },
    filterProduct() {
      const initial = this.currentPage * 18 - 18
      const final = initial + 18
      return this.products.slice(initial, final)
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
  },
  methods: {
    Allcategories() {
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
      this.currentPage = 1
    },
    Searchproduct(search) {
      if (search.length) {
        this.$store.commit('products/FILTER_BY', {
          type: 'search',
          data: search,
        })
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: 'all',
          data: '',
        })
      }
      this.currentPage = 1
    },
    breadcrumbsSendCategory(value) {
      let filtradoCategorias = this.categorias.find((element) => {
        if (element.nombre_categoria_producto == value) {
          return element
        }
      })
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', '')
      this.$store.commit('products/FILTER_BY', {
        type: 'category',
        data: filtradoCategorias.nombre_categoria_producto,
      })
    },
    clear() {
      this.$store.commit('SET_STATEBANNER', true)
      this.$store.commit('SET_CATEGORY_PRODCUTRO', '')
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', '')
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
      this.$emit('clear')
      this.nameCategory = ''
    },
    sendCategoryUrl(value) {
      let category = value.replace('/?category=', '')
      let UrlCategory = category.replace(/-/g, ' ')
      let urlFiltrada = decodeURIComponent(UrlCategory)
      this.$store.commit('products/FILTER_BY', {
        type: 'category',
        data: urlFiltrada,
      })
      if (this.$store.getters['products/filterProducts'].length) {
        this.$store.commit('SET_CATEGORY_PRODCUTRO', urlFiltrada)
      } else {
        this.$store.commit('SET_CATEGORY_PRODCUTRO', '')
      }
    },
    SendsubcategoryUrl(value) {
      let subcategory = value.replace('/?subcategory=', '')
      let UrlSubCategory = subcategory.replace(/-/g, ' ')
      let urlFiltrada = decodeURIComponent(UrlSubCategory)

      this.selectSubcategory = urlFiltrada

      let filtradoSubCategoria = this.subcategories.find(
        (element) => element.nombre_subcategoria == urlFiltrada
      )
      if (filtradoSubCategoria) {
        let filtradoCategorias = this.categorias.find(
          (element) => element.id == filtradoSubCategoria.categoria
        )

        this.$store.commit('products/FILTER_BY', {
          type: 'subcategory',
          data: filtradoSubCategoria.id,
        })
        if (this.$store.getters['products/filterProducts'].length) {
          this.$store.commit(
            'SET_CATEGORY_PRODCUTRO',
            filtradoCategorias.nombre_categoria_producto
          )
          this.$store.commit(
            'SET_SUBCATEGORY_PRODCUTRO',
            filtradoSubCategoria.nombre_subcategoria
          )
        } else {
          this.$store.commit('SET_CATEGORY_PRODCUTRO', '')
          this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', '')
        }
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: 'subcategory',
          data: '',
        })
      }
    },
  },
  watch: {
    fullProducts(value) {
      this.products = value
      let maxTMP = 0
      value.forEach((product) => {
        if (maxTMP <= product.precio) {
          this.price[1] = product.precio
          this.range.max = parseInt(product.precio)
          maxTMP = product.precio
        }
      })
    },
    search(value) {
      this.Searchproduct(value)
    },
    currentPage() {
      this.$store.commit('SET_PREVIOUSPAGE', this.currentPage)
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
      this.Searchproduct(value)
    },
  },
}
</script>
<style scoped>
.content-productoList {
  @apply w-full flex flex-col justify-center items-center;
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
    @apply w-full flex justify-start items-center font-semibold;
  }
  .txt-category {
    color: #818181;
    font-size: 14px;
    font-family: 'Poppins', sans-serif !important;
    @apply w-full flex justify-end items-center font-semibold;
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
  .pagination-content {
    @apply w-full mt-10 mb-40 overflow-x-auto;
  }
  .pagination-content::-webkit-scrollbar {
    @apply hidden;
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
}
@media (min-width: 430px) {
  .pagination-content {
    @apply w-full flex justify-center items-center;
  }
}
@media (min-width: 768px) {
  .content-grid-product {
    @apply grid grid-cols-3 gap-6;
  }
}
</style>
