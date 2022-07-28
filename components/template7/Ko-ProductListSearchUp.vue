<template>
  <div class="product-content">
    <div class="producto-items-content" id="section">
      <div class="content-item">
        <div class="content-item-productos">
          <div class="product-conten-items">
            <div
              v-for="product in filterProduct"
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
            v-if="this.fullProducts.length == 0"
            class="content-products-empty"
          >
            <div class="header-content-logo">
              <nuxt-link to="/productos" class="wrapper-logo">
                <img
                  :src="`${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
                  class="header-logo"
                  alt="Logo Img"
                  @click="clear"
                />
              </nuxt-link>
            </div>
            <p class="txt-products-empty">{{ $t('home_msgCatalogo') }}</p>
          </div>
          <div class="pagination-medium">
            <div class="product_pagination" v-if="fullProducts.length > 16">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="fullProducts.length"
                :page-size="16"
                :current-page.sync="currentPage"
                class="pagination"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoProductCard from './_productcard/ProductCard'
import filterProducts from '../../mixins/filterProducts'
export default {
  components: {
    KoProductCard,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    settingGeneral: Object,
    settingKProdutCard: Object,
  },
  mixins: [filterProducts],
  name: 'Ko-ProductList-1',
  data() {
    return {
      search: '',
      currentPage: 1,
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
  mounted() {
    if (this.$route.query && this.$route.query.category) {
      this.sendCategoryUrlMix(this.$route.query.category)
    } else if (this.$route.query && this.$route.query.subcategory) {
      this.SendSubCategoryUrlMix(
        this.$route.query.subcategory,
        this.categorias,
        this.subcategories
      )
    } else if (this.$route.fullPath == '/') {
      this.allCategories()
    }
    if (this.previousPage) {
      this.currentPage = this.previousPage
    }
    if (this.nameCategoryHeader && this.nameSubCategoryHeader == '') {
      this.$store.commit('SET_STATE_BANNER', false)
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: this.nameCategoryHeader,
      })
    } else if (this.nameCategoryHeader && this.nameSubCategoryHeader) {
      this.$store.commit('SET_STATE_BANNER', false)
      let filtradoSubCategory = this.subcategories.find(
        (element) => element.nombre_subcategoria == this.nameSubCategoryHeader
      )
      if (filtradoSubCategory) {
        this.categorias.find(
          (element) => element.id == filtradoSubCategory.categoria
        )
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: filtradoSubCategory.id,
        })
      }
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
  },
  methods: {
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
    SendSubCategory(value) {
      this.indexSelect2 = value
      this.selectSubcategory = value
      let filtradoCategory = this.subcategories.find(
        (element) => element.id == value
      )
      this.nameSubCategory = filtradoCategory.nombre_subcategoria
      this.$store.commit('products/FILTER_BY', {
        type: ['subcategory'],
        data: value,
      })
    },
    sendCategory(value, categoria, index, ref) {
      this.indexSelect = index
      this.currentPage = 1
      this.nameCategory = value.nombre_categoria_producto
      this.indexCategory = index
      this.selectedSubcategories = []
      this.subcategories.find((subcategory) => {
        if (subcategory.categoria === categoria) {
          this.toggleCategories = false
          this.selectedSubcategories.push(subcategory)
        }
      })
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto,
      })
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
      this.nameCategory = ''
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
        window.scrollBy(0, -1500)
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
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      if (this.$route.query && this.$route.query.category) {
        this.sendCategoryUrlMix(this.$route.query.category)
      } else if (this.$route.query && this.$route.query.subcategory) {
        this.SendSubCategoryUrlMix(
          this.$route.query.subcategory,
          this.categorias,
          this.subcategories
        )
      } else if (this.$route.fullPath == '/') {
        this.allCategories()
      }
    },
    searchValue(value) {
      this.SearchProduct2(value)
    },
  },
}
</script>

<style scoped>
.product-content {
  @apply w-full flex flex-col justify-center items-center mt-80;
  margin-bottom: 150px;
}
.product-conten-items {
  @apply flex flex-col justify-start items-start  w-full  text-center;
}
.product-text {
  @apply flex flex-col justify-center items-center w-full;
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
  font-family: 'Great Vibes' !important;
  color: #ed2353;
}
.subtittle {
  font-family: 'David Libre' !important;
  color: #2d2a2a;
}
.description {
  font-family: 'Lora' !important ;
  color: #777;
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
.grid-products {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 2fr));
  grid-column-gap: 25px;
  grid-row-gap: 30px;
  box-sizing: border-box;
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
.pagination-medium {
  margin-top: 40px;
  background: transparent;
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
