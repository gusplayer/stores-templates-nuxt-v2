<template>
  <div class="product-content">
    <div class="producto-items-content" id="section">
      <div class="product-text">
        <div class="product-tittle">
          <span class="tittle">Accesorios de madera.</span>
        </div>
        <div class="product-subtittle">
          <span class="subtittle">Productos Destacados</span>
        </div>
        <div class="product-description">
          <span class="description">
            Es un hecho establecido desde hace mucho tiempo que un lector se
            distraerá
          </span>
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-productos">
          <div class="product-conten-items">
            <div
              v-for="product in filterProduct"
              :key="product.id"
              class="content-products"
            >
              <KoProductCard :product="product"></KoProductCard>
            </div>
          </div>
          <div
            v-if="(this.fullProducts.length == 0)"
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
          <div class="pagination-medium">
            <div class="product_pagination" v-if="products.length > 16">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="products.length"
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

export default {
  components: {
    KoProductCard,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
  },
  name: 'Ko-ProductList-1',
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
    let domain = this.$route.fullPath
    let searchCategory = domain.slice(0, [11])
    let searchSubCategory = domain.slice(0, [14])
    if (searchCategory === '/?category=') {
      this.sendCategoryUrl(domain)
    } else if (searchSubCategory === '/?subcategory=') {
      this.SendsubcategoryUrl(domain)
    } else if (domain == '/') {
      this.Allcategories()
    }
    if (this.previousPage) {
      this.currentPage = this.previousPage
    }
    if (this.nameCategoryHeader && this.nameSubCategoryHeader == '') {
      this.$store.commit('SET_STATEBANNER', false)
      this.$store.commit('products/FILTER_BY', {
        type: 'category',
        data: this.nameCategoryHeader,
      })
    } else if (this.nameCategoryHeader && this.nameSubCategoryHeader) {
      this.$store.commit('SET_STATEBANNER', false)
      let filtradoSubCategoria = this.subcategories.find(
        (element) => element.nombre_subcategoria == this.nameSubCategoryHeader
      )
      if (filtradoSubCategoria) {
        this.categorias.find(
          (element) => element.id == filtradoSubCategoria.categoria
        )
        this.$store.commit('products/FILTER_BY', {
          type: 'subcategory',
          data: filtradoSubCategoria.id,
        })
      }
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
      const initial = this.currentPage * 16 - 16
      const final = initial + 16
      return this.fullProducts
        .filter((product) => product.categoria == this.select)
        .slice(initial, final)
    },
    filterProduct() {
      const initial = this.currentPage * 16 - 16
      const final = initial + 16
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
    back() {
      this.clear()
      this.toggleCategories = true
      this.nameCategory = ''
    },
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
    addClass() {
      this.add = !this.add
    },
    mouseOver(index) {
      this.sub = index
      this.show = true
    },
    mouseLeave() {
      this.sub = -1
      this.show = false
    },
    Sendsubcategory(value) {
      this.indexSelect2 = value
      this.addClass()
      this.selectSubcategory = value
      let filtradoCategoria = this.subcategories.find(
        (element) => element.id == value
      )
      this.nameSubCategory = filtradoCategoria.nombre_subcategoria
      this.$store.commit('products/FILTER_BY', {
        type: 'subcategory',
        data: value,
      })
    },
    sendCategory(value, categoria, index, ref) {
      this.indexSelect = index
      this.currentPage = 1
      this.nameCategory = value.nombre_categoria_producto
      this.indexCategory = index
      this.selectedSubcategories = []
      this.subcategories.find((subcategoria) => {
        if (subcategoria.categoria === categoria) {
          this.toggleCategories = false
          this.selectedSubcategories.push(subcategoria)
        }
      })
      if (this.selectedSubcategories.length === 0) {
        this.addClass()
      }
      if (ref) {
        this.addClass()
      }
      this.$store.commit('products/FILTER_BY', {
        type: 'category',
        data: value.nombre_categoria_producto,
      })
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
      this.addClass()
      this.nameCategory = ''
    },
    sendCategoryUrl(value) {
      let category = value.replace('/?category=', '')
      let urlFiltrada = decodeURIComponent(category)
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
      let urlFiltrada = decodeURIComponent(subcategory)
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
      let domain = this.$route.fullPath
      let searchCategory = domain.slice(0, [11])
      let searchSubCategory = domain.slice(0, [14])
      if (searchCategory === '/?category=') {
        this.sendCategoryUrl(domain)
      } else if (searchSubCategory === '/?subcategory=') {
        this.SendsubcategoryUrl(domain)
      } else if (domain == '/') {
        this.Allcategories()
      }
    },
    searchValue(value) {
      this.Searchproduct(value)
    },
  },
}
</script>

<style scoped>
.product-content {
  @apply flex flex-col justify-center items-center w-full my-80;
}
.product-text,
.product-conten-items {
  @apply flex flex-col justify-center items-center w-full;
}
.product-tittle,
.product-subtittle,
.product-description,
.tittle,
.subtittle,
.description,
.product-conten-items,
.producto-items-content {
  @apply flex flex-col justify-center items-center text-center;
}

.tittle {
  font-family: 'Great Vibes', cursive !important;
  color: #ed2353;
}
.subtittle {
  font-family: 'David Libre', serif !important;
  color: #2d2a2a;
}
.description {
  font-family: 'Lora', serif !important ;
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
  font-family: 'David Libre', serif !important;
}
.pagination-medium {
  margin-top: 10px;
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
  color: #ed2353;
}
.product_pagination >>> .el-pagination.is-background .btn-prev:hover {
  color: #ed2353;
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: #ed2353;
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #ed2353;
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
@screen xl {
  .producto-items-content {
    @apply w-8/3;
  }
}
@screen xml {
  .producto-items-content {
    @apply w-6/3;
  }

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
@screen xxl {
  .producto-items-content {
    @apply w-4/6;
  }
}
</style>
