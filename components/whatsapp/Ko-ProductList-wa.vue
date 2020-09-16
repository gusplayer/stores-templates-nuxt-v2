<template>
  <div class="wrapper-productlist">
    <div class="container">
      <div class="content-items-categorias">
        <div class="content-items-categorias-text">
          <p class="text-categorias" @click="clear">Catálogo</p>
          <p
            class="text-categorias-select"
            v-if="this.nameCategoryHeader"
            @click="breadcrumbsSendCategory(nameCategoryHeader)"
          >
            > {{ this.nameCategoryHeader }}
          </p>
          <p class="text-categorias-select" v-if="this.nameSubCategoryHeader">
            > {{ this.nameSubCategoryHeader }}
          </p>
        </div>
      </div>
      <div>
        <div class="content-item-productos">
          <div class="grid-products">
            <div
              v-for="product in filterProduct"
              :key="product.id"
              class="content-products"
            >
              <KoProductCard1
                :product="product"
                :dataStore="dataStore.tienda"
              ></KoProductCard1>
            </div>
          </div>
          <div
            v-if="(this.fullProducts.length == 0)"
            class="content-products-empty"
          >
            <p>No se encontraron productos relacionados.</p>
          </div>
          <div class="pagination-medium" v-if="products.length > 16">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="products.length"
              :page-size="16"
              :current-page.sync="currentPage"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoProductCard1 from './_productcard/Ko-ProductCard-1'
export default {
  components: {
    KoProductCard1,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
  },
  name: 'Ko-ProductList-1',
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
      const initial = this.currentPage * 16 - 16
      const final = initial + 16
      return this.fullProducts
        .filter((product) => product.categoria == this.select)
        .slice(initial, final)
    },
    filterProduct() {
      const initial = this.currentPage * 16 - 16
      const final = initial + 16
      return this.orderproduct.slice(initial, final)
    },
    orderproduct() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.products.sort(function (prev, next) {
        return next.orden - prev.orden
      })
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
.wrapper-productlist {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fafaf8;
  box-sizing: border-box;
  margin-top: 0px;
  padding-top: 5px;
}
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 780px;
  padding: 0px 20px 80px 20px;
  flex-direction: column;
}
.content-items-categorias {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 40px;
}
.content-items-categorias-text {
  display: flex;
  flex-direction: row;
}
.text-categorias {
  background: transparent;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;

  cursor: pointer;
  color: #4c4c4c;
  display: flex;
}
.text-categorias-select {
  background: transparent;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.4;
  color: rgb(46, 46, 46);
  align-self: flex-end;
  margin-right: 2px;
  margin-left: 5px;
  cursor: pointer;
  opacity: 0.6;
  display: flex;
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
  grid-template-columns: repeat(2, minmax(250px, 2fr));
  grid-gap: 15px;
  box-sizing: border-box;
}
.content-products {
  border-radius: 10px;
}
.content-products:hover,
.content-products:focus {
  box-shadow: -6px -6px 10px var(--background_color_2),
    6px 6px 10px rgba(0, 0, 0, 0.267);
}
.content-products-empty {
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.content-products-empty p {
  font-size: 18px;
  opacity: 0.6;
  font-weight: bold;
  color: black;
}
.pagination-medium {
  margin-top: 10px;
}
.pagination-medium >>> .el-pagination.is-background .btn-next {
  color: #2ec4a1;
  background-color: transparent;
}
.pagination-medium >>> .el-pagination.is-background .btn-prev {
  color: #2ec4a1;
  background-color: transparent;
}
.pagination-medium >>> .el-pagination.is-background .el-pager li {
  color: #2ec4a1;
  background-color: transparent;
}
.pagination-medium >>> .el-pagination.is-background .btn-next:hover {
  color: #2ec4a1;
}
.pagination-medium >>> .el-pagination.is-background .btn-prev:hover {
  color: #2ec4a1;
}
.pagination-medium
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: #2ec4a1;
}
.pagination-medium
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #2ec4a1;
  color: white;
}
@media (max-width: 770px) {
  .container {
    padding: 0px 0px 80px 0px;
  }
  .content-item-productos {
    padding: 15px;
  }
  .text-categorias {
    padding: 0 10px;
  }
}
@media (max-width: 700px) {
  .content-items-categorias {
    margin-left: 5px;
    margin-bottom: 0px;
  }
  .grid-products {
    grid-template-columns: repeat(1, minmax(250px, 2fr));
  }
}
@media (max-width: 450px) {
  .content-item-productos {
    padding: 5px;
  }
}
</style>
