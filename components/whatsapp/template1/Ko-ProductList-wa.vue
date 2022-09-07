<template>
  <div class="wrapper-productlist">
    <div class="container-productlist">
      <div class="content-items-categorias">
        <div class="content-items-categorias-text">
          <p class="text-categorias" @click="clear">
            {{ $t('home_catalogo') }}
          </p>
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
          <div div class="grid-products">
            <div
              v-for="product in filterProduct"
              :key="product.id"
              class="content-products"
            >
              <KoProductCard1
                :product="product"
                :dataStore="dataStore"
              ></KoProductCard1>
            </div>
          </div>
          <div
            v-if="this.fullProducts.length == 0"
            class="content-products-empty"
          >
            <p>{{ $t('home_msgCatalogo') }}</p>
          </div>
          <br />
          <div class="wrapper-pagination-web">
            <div class="pagination-medium" v-if="fullProducts.length > 16">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="fullProducts.length"
                :page-size="16"
                :current-page.sync="currentPage"
              ></el-pagination>
            </div>
          </div>
          <div
            class="wrapper-pagination-responsive"
            v-if="fullProducts.length > 16"
          >
            <div class="pagination-medium">
              <el-pagination
                small
                background
                layout="prev, pager, next"
                :total="fullProducts.length"
                :page-size="16"
                :current-page.sync="currentPage"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoProductCard1 from './_productcard/Ko-ProductCard-1'
import filterProducts from '../../../mixins/filterProducts'
export default {
  components: {
    KoProductCard1,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    settingByTemplate: Object,
  },
  mixins: [filterProducts],
  name: 'ProductGridWa-1',
  mounted() {
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
    } else if (this.$route.fullPath == '/') {
      this.allCategories()
    }
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
      this.$store.commit('SET_CATEGORY_PRODUCTO', '')
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: '',
      })
      this.$emit('clear')
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
      } else if (this.$route.fullPath == '/') {
        this.allCategories()
      }
    },
  },
}
</script>

<style scoped>
.wrapper-productlist {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  margin-top: 0px;
  padding-top: 5px;
}
.container-productlist {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0px 20px 30px 20px;
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
  width: 100%;
  border-radius: 10px;
}
.content-products:hover,
.content-products:focus {
  box-shadow: -6px -6px 10px var(--background_color_2),
    6px 6px 10px rgba(0, 0, 0, 0.267);
}
.content-products-empty {
  width: 100%;
  min-height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px 20px;
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
.wrapper-pagination-web {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.wrapper-pagination-responsive {
  display: none;
}
@media (max-width: 770px) {
  .container {
    padding: 0px 0px 10px 0px;
  }
  .content-item-productos {
    padding: 0px;
  }
  .text-categorias {
    padding: 0 0px;
  }
}
@media (max-width: 700px) {
  .content-items-categorias {
    /* margin-left: 10px; */
    margin-bottom: 10px;
  }
  .grid-products {
    grid-gap: 20px;
  }
}
@media (max-width: 555px) {
  .grid-products {
    grid-template-columns: repeat(1, minmax(250px, 2fr));
  }
  .wrapper-pagination-web {
    display: none;
  }
  .wrapper-pagination-responsive {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
@media (max-width: 450px) {
  .content-item-productos {
    padding: 0px 0px 20px;
  }
}
</style>
