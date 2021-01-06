<template>
  <div class="wrapper-productlist">
    <div class="container">
      <div class="text-macrobrand" v-if="dataStore.tienda.id_tienda == 1100">
        <p>
          Envíos gratis a nivel nacional en compras superiores a $100.000 - Pago
          seguro - Tiempo de entrega 10 días hábiles.
        </p>
      </div>
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
      <div class="content-item">
        <div class="wrapper-filter">
          <div
            v-for="categoria in categorias"
            :key="categoria.id"
            class="content-categoria"
          >
            <BaseAccordian>
              <template v-slot:categorias>
                <li
                  class="text-categoria"
                  @click="
                    sendCategory(categoria, categoria.id, index, (ref = false))
                  "
                  :class="
                    categoria.id == indexSelect ? 'text-categoria-active' : ''
                  "
                >
                  {{ categoria.nombre_categoria_producto }}
                </li>
              </template>
              <template v-slot:subcategorias
                ><template>
                  <div v-for="(subcategory, key) in subcategories" :key="key">
                    <li
                      v-if="subcategory.categoria == categoria.id"
                      @click="Sendsubcategory(subcategory.id)"
                      class="text-subcategoria"
                      :class="
                        subcategory.id == indexSelect2
                          ? 'text-subcategoria-active'
                          : ''
                      "
                    >
                      {{ subcategory.nombre_subcategoria }}
                    </li>
                  </div>
                </template></template
              >
            </BaseAccordian>
          </div>
        </div>
        <div class="content-item-productos">
          <div class="grid-products">
            <div
              v-for="product in filterProduct"
              :key="product.id"
              class="content-products"
            >
              <KoProductCard1 :product="product"></KoProductCard1>
            </div>
          </div>
          <div
            v-if="(this.fullProducts.length == 0)"
            class="content-products-empty"
          >
            <p>No se encontraron productos relacionados.</p>
          </div>
          <div class="pagination-medium">
            <div class="product_pagination" v-if="products.length > 24">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="products.length"
                :page-size="24"
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
import KoProductCard1 from '../template5/_productcard/Ko-ProductCard-1'
import BaseAccordian from '../headers/_order1/_AccordionList'

export default {
  components: {
    KoProductCard1,
    BaseAccordian,
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
  data() {
    return {
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
      const initial = this.currentPage * 24 - 24
      const final = initial + 24
      return this.fullProducts
        .filter((product) => product.categoria == this.select)
        .slice(initial, final)
    },
    filterProduct() {
      const initial = this.currentPage * 24 - 24
      const final = initial + 24
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
      let filtradoSubCategoria = this.subcategories.find(
        (element) => element.id == value
      )

      let filtradoCategorias = this.categorias.find(
        (element) => element.id == filtradoSubCategoria.categoria
      )
      this.$store.commit(
        'SET_CATEGORY_PRODCUTRO',
        filtradoCategorias.nombre_categoria_producto
      )
      this.nameSubCategory = filtradoSubCategoria.nombre_subcategoria
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', this.nameSubCategory)
      this.$store.commit('products/FILTER_BY', {
        type: 'subcategory',
        data: value,
      })
    },
    sendCategory(value, categoria, index, ref) {
      this.indexSelect = categoria
      this.currentPage = 1
      this.nameCategory = value.nombre_categoria_producto
      this.$store.commit('SET_CATEGORY_PRODCUTRO', this.nameCategory)
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', '')
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
      this.indexSelect = ''
      this.indexSelect2 = ''
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
      window.scrollBy(0, -3300)
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
.text-macrobrand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 30px;
}

.text-macrobrand > p {
  padding: 5px 20px;
  font-size: 20px;
  text-align: center;
  color: var(--color_text);
  font-weight: bold;
}
.wrapper-productlist {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background_color_2);
  box-sizing: border-box;
}
.container {
  width: 100%;
  max-width: 1300px;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.content-item {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.content-item > div:nth-child(1) {
  max-width: 300px;
  flex: 1;
}
.content-item > div:nth-child(2) {
  flex: 2;
}
/* categorias */
.content-categoria {
  width: 100%;
  padding-right: 20px;
}
.text-categoria {
  width: 100%;
  font-size: 16px;
  color: var(--color_text);
}
.text-subcategoria {
  width: 100%;
  font-size: 16px;
  color: var(--color_subtext);
  margin-bottom: 10px;
  margin-left: 5px;
  cursor: pointer;
}
.text-categoria-active {
  color: var(--color_hover_text);
}
.text-subcategoria-active {
  color: var(--color_hover_text);
}
.content-items-categorias-text {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}
.text-categorias {
  background: transparent;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  color: var(--color_subtext);
  align-self: flex-start;
  margin-right: 2px;
  cursor: pointer;
  display: flex;
}
.text-categorias-select {
  background: transparent;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.4;
  color: var(--color_subtext);
  align-self: flex-start;
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
  justify-content: flex-start;
  flex-direction: column;
}
.grid-products {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 2fr));
  grid-column-gap: 25px;
  grid-row-gap: 30px;
  box-sizing: border-box;
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
  color: var(--color_subtext);
}
.wrapper-filter {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
}

/* //////paginacion//////// */
.pagination-medium {
  margin-top: 10px;
  background: transparent;
}
.pagination {
  font-size: 18px;
  color: var(--color_text);
  background: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next {
  color: var(--color_text);
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-prev {
  color: var(--color_text);
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .el-pager li {
  color: var(--color_text);
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next:hover {
  color: var(--btnhover);
}
.product_pagination >>> .el-pagination.is-background .btn-prev:hover {
  color: var(--btnhover);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: var(--btnhover);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: var(--color_icon);
  color: white;
}
@media (max-width: 1290px) {
  .grid-products {
    grid-template-columns: repeat(3, minmax(240px, 2fr));
    grid-column-gap: 15px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1265px) {
  .grid-products {
    grid-template-columns: repeat(3, minmax(240px, 2fr));
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1250px) {
  .grid-products {
    grid-template-columns: repeat(3, minmax(250px, 2fr));
    grid-column-gap: 25px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1060px) {
  .grid-products {
    grid-template-columns: repeat(3, minmax(250px, 2fr));
    grid-column-gap: 20px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1050px) {
  .grid-products {
    grid-template-columns: repeat(3, minmax(240px, 2fr));
    grid-column-gap: 20px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1020px) {
  .grid-products {
    grid-template-columns: repeat(3, minmax(240px, 2fr));
    grid-column-gap: 15px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1010px) {
  .grid-products {
    grid-template-columns: repeat(3, minmax(240px, 2fr));
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1000px) {
  .grid-products {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-column-gap: 25px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 790px) {
  .grid-products {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-column-gap: 20px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 780px) {
  .grid-products {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-column-gap: 16px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 775px) {
  .grid-products {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}

@media (max-width: 770px) {
  .container {
    padding: 0px;
  }
  .content-items-categorias-text {
    padding: 20px 10px 10px 10px;
  }
  .content-item-productos {
    padding: 0px 15px;
  }
  .grid-products {
    grid-template-columns: repeat(2, minmax(10px, 2fr));
  }
  .wrapper-filter {
    padding-left: 10px;
  }
  .content-categoria {
    padding-right: 0px;
  }
}
@media (max-width: 700px) {
  .content-items-categorias {
    margin-left: 5px;
    margin-bottom: 0px;
  }
  .wrapper-filter {
    display: none;
  }
}
@media (max-width: 450px) {
  .grid-products {
    grid-template-columns: repeat(2, minmax(160px, 1fr));
  }
  .content-item-productos {
    padding: 5px;
  }
  .text-macrobrand > p {
    font-size: 16px;
  }
  .text-macrobrand {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
