<template>
  <div class="wrapper-productlist">
    <div class="container">
      <div class="content-title">
        <p class="title">Productos</p>
      </div>
      <div class="top-right">
        <div class="content-item-top">
          <ul>
            <li class="dropdown">
              <div class="content-filtrar">
                <a class="dropbtn">Categorías </a>
                <a class="dropbtn2" v-if="this.nameCategory">
                  - {{ this.nameCategory }}</a
                >
                <a class="dropbtn2" v-if="this.nameSubCategory">
                  - {{ this.nameSubCategory }}
                </a>
                <Flechadown class="header-icon-menu" />
              </div>
              <div class="dropdown-content">
                <!-- catálogo  -->
                <div class="content-item-catalogo">
                  <ul class="a-container">
                    <li @click="clear">
                      <p class="item-categoria">Todos</p>
                    </li>
                    <!-- item -->
                    <li
                      @mouseover="mouseOver(index)"
                      @mouseleave="mouseLeave"
                      v-for="(categoria, index) in categorias"
                      :key="categoria.id"
                    >
                      <label>
                        <p
                          class="item-categoria"
                          :class="
                            index == indexSelect ? 'item-categoria-active' : ''
                          "
                          @click="
                            sendCategory(
                              categoria,
                              categoria.id,
                              index,
                              (ref = false)
                            )
                          "
                        >
                          {{ categoria.nombre_categoria_producto }}
                        </p>
                        <div
                          :style="indexCategory == index ? '' : 'display: none'"
                          class="content-item-subcategorie"
                        >
                          <li
                            v-for="subcategory in selectedSubcategories"
                            @click="Sendsubcategory(subcategory.id)"
                            :class="
                              subcategory.id == indexSelect2
                                ? 'item-subcategorie-active'
                                : ''
                            "
                            :key="subcategory.id"
                          >
                            <p class="item-subcategorie">
                              {{ subcategory.nombre_subcategoria }}
                            </p>
                          </li>
                        </div>
                        <div
                          :class="{ popover: sub == index }"
                          v-if="sub == index"
                        ></div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <div class="top-input-search">
            <input v-model="search" type="email" placeholder="Buscar" />
            <i class="icon-search"></i>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-productos">
          <div class="grid-products">
            <div
              v-for="product in filterProduct"
              :key="product.id"
              class="content-products"
            >
              <KoProductCard1
                :product="product"
                data-aos="zoom-in"
              ></KoProductCard1>
            </div>
          </div>
          <div class="pagination-medium">
            <div class="product_pagination" v-if="products.length > 40">
              <el-pagination
                layout="prev, pager, next"
                :total="products.length"
                :page-size="40"
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
import KoProductCard1 from './_productcard/Ko-ProductCard-1'
export default {
  components: {
    KoProductCard1,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
  },
  name: 'Ko-ProductList-3',
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
      let timerTimeout = null
      timerTimeout = setTimeout(() => {
        timerTimeout = null
        window.scrollTo(0, 0)
      }, 250)
    },
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
      const initial = this.currentPage * 40 - 40
      const final = initial + 40
      return this.fullProducts
        .filter((product) => product.categoria == this.select)
        .slice(initial, final)
    },
    filterProduct() {
      const initial = this.currentPage * 40 - 40
      const final = initial + 40
      return this.products.slice(initial, final)
    },
    selectedCategory() {
      return this.$store.state.products.payload
    },
    selectedType() {
      return this.$store.state.products.type
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
    clear() {
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
      this.$emit('clear')
      this.addClass()
      this.nameCategory = ''
    },
  },
}
</script>

<style scoped>
div.wrapper-productlist {
  --background_color_1: #f2f4f7;
}
.wrapper-productlist {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--background_color_1);
  box-sizing: border-box;
}
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  padding: 30px 20px 0;
  flex-direction: column;
}
.content-title {
  width: 100%;
  display: flex;
}
.content-item-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.title {
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: -0.4px;
  color: var(--color_text);
  margin-bottom: 0px;
  margin-top: 10px;
}
.content-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 40px;
}
.content-item > div:nth-child(1) {
  flex: 1;
}
.content-item > div:nth-child(2) {
  flex: 2;
}

/* /////////////////filtro categorías///////////// */
.content-filtrar {
  display: flex;
  flex-direction: row;
}
.dropbtn {
  background: transparent;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.4;
  color: var(--color_subtext);
  align-self: flex-end;
  cursor: pointer;
  margin-right: 2px;
}
.dropbtn2 {
  display: initial;
  background: transparent;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.4;
  color: var(--color_subtext);
  opacity: 0.4;
  align-self: flex-end;
  margin-right: 2px;
  margin-left: 5px;
}
.dropdown-content {
  display: none;
  position: absolute;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 8px 20px 1px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown:hover .dropdown-content {
  display: block;
}

/* ///////categorias//////////// */
.content-item-catalogo {
  display: flex;
  align-self: baseline;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 205px;
  width: 100%;
  border-radius: 10px;
  background-color: var(--background_color_2);
}
.a-container {
  width: 205px;
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: var(--color_subtext);
  background-color: var(--background_color_2);
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  align-items: center;
  justify-content: center;
}
.item-categoria {
  cursor: pointer;
  padding: 0px 10px 0px 20px;
  background-color: var(--background_color_2);
}
.item-categoria-active {
  background: var(--color_background_hover);
  color: var(--color_hover_text);
}

.item-categoria:hover {
  background: var(--color_background_hover);
  color: var(--color_hover_text);
}
/*////// subcategoria //////*/
.content-item-subcategorie {
  background: var(--color_background_hover);
  padding-right: 10px;
  padding-left: 40px;
}
.item-subcategorie {
  font-size: 13px;
  cursor: pointer;
  user-select: none;
}
.item-subcategorie-active {
  background: var(--color_background_hover);
  color: var(--color_hover_text);
}
.item-subcategorie:hover {
  background: var(--color_background_hover);
  color: var(--color_hover_text);
}

/* ///////productos/////////// */

.content-products {
  border-radius: 10px;
}
.content-products:hover,
.content-products:focus {
  box-shadow: 0px 0px 2px 1px var(--color_border);
  border-radius: 10px;
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
  grid-gap: 25px;
  box-sizing: border-box;
}
/* //////buscador ///////// */

.top-right {
  width: 100%;
  padding-top: 0px;
  padding-bottom: 15px;
}
.header-icon-menu {
  font-size: 30px;
  cursor: pointer;
  color: var(--color_subtext);
}
.header-icon-close {
  font-size: 30px;
  color: rgba(21, 20, 57, 0.808);
  margin-left: 22px;
}
.top-input-search {
  position: relative;
  display: grid;
  align-content: start;
  justify-content: flex-end;
}
.top-input-search input {
  width: 100%;
  padding: 10px 35px 10px 15px;
  box-sizing: border-box;
  font-size: 14px;
  color: var(--color_subtext);
  border: solid 2px #afafaf;
  border-radius: var(--radius_btn);
  background-color: transparent;
}
.top-input-search input::placeholder {
  color: var(--color_subtext);
  opacity: 0.7;
}
.top-input-search input:focus,
.top-input-search input:active {
  border: solid 2px #afafaf;
  border-radius: var(--radius_btn);
  outline: 0;
}
.top-input-search i.icon-search {
  position: absolute;
  top: 9px;
  right: 15px;
  z-index: 2;
  color: var(--color_subtext);
  font-weight: bold;
}
.top-input-search .response {
  justify-self: start;
  padding: 0 10px;
  height: 32px;
  line-height: 30px;
  font-size: 12px;
  color: var(--color_subtext);
  border: solid 2px #d8d8d8;
  border-radius: var(--radius_btn);
  background-color: transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
  height: 28px;
  line-height: 26px;
}

/* //////paginacion//////// */
.pagination-medium {
  margin-top: 10px;
  background: var(--background_color_1);
}
.pagination {
  font-size: 18px;
  color: var(--color_text);
}
.el-pager li.active,
.el-pager li.hover,
.el-pager li.focus {
  color: var(--color_text);
}
.popover {
  width: 300px;
  background: var(--background_color_1);
  position: absolute;
  right: -240px;
  top: 0;
  z-index: 99;
  box-sizing: border-box;
}

@media (max-width: 1350px) {
  /* ///////productos/////////// */
  .content-item-catalogo {
    margin-right: 0px;
  }
  .grid-products {
    grid-template-columns: repeat(4, minmax(245px, 2fr));
    grid-gap: 20px;
  }
}
@media (max-width: 1320px) {
  /* ///////productos/////////// */
  .content-item-catalogo {
    margin-right: 0px;
  }
  .grid-products {
    grid-template-columns: repeat(4, minmax(240px, 2fr));
    grid-gap: 19px;
  }
}
@media (max-width: 1300px) {
  /* ///////productos/////////// */
  .content-item-catalogo {
    margin-right: 0px;
  }
  .grid-products {
    grid-template-columns: repeat(4, minmax(240px, 2fr));
    grid-gap: 18px;
  }
}
@media (max-width: 1290px) {
  /* ///////productos/////////// */
  .grid-products {
    grid-template-columns: repeat(4, minmax(240px, 2fr));
    grid-gap: 15px;
  }
}
@media (max-width: 1265px) {
  /* ///////productos/////////// */
  .grid-products {
    grid-template-columns: repeat(4, minmax(240px, 2fr));
    grid-gap: 10px;
  }
}
@media (max-width: 1250px) {
  /* ///////productos/////////// */
  .grid-products {
    grid-template-columns: repeat(3, minmax(250px, 2fr));
    grid-gap: 25px;
  }
}
@media (max-width: 1060px) {
  /* ///////productos/////////// */
  .grid-products {
    grid-template-columns: repeat(3, minmax(250px, 2fr));
    grid-gap: 20px;
  }
}
@media (max-width: 1050px) {
  /* ///////productos/////////// */
  .grid-products {
    grid-template-columns: repeat(3, minmax(240px, 2fr));
    grid-gap: 20px;
  }
}
@media (max-width: 1020px) {
  /* ///////productos/////////// */
  .grid-products {
    grid-template-columns: repeat(3, minmax(240px, 2fr));
    grid-gap: 15px;
  }
}
@media (max-width: 1010px) {
  /* ///////productos/////////// */
  .grid-products {
    grid-template-columns: repeat(3, minmax(240px, 2fr));
    grid-gap: 10px;
  }
}
@media (max-width: 1000px) {
  /* ///////productos/////////// */
  .grid-products {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-gap: 25px;
  }
}

@media (max-width: 790px) {
  /* ///////productos/////////// */
  .grid-products {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-gap: 20px;
  }
}
@media (max-width: 780px) {
  /* ///////productos/////////// */
  .grid-products {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-gap: 16px;
  }
}
@media (max-width: 775px) {
  /* ///////productos/////////// */
  .grid-products {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-gap: 10px;
  }
}

@media (max-width: 770px) {
  /* ///////productos/////////// */
  .container {
    padding: 0px;
  }
  .content-item-productos {
    padding: 15px;
  }
  .title {
    font-size: 25px;
  }
  .grid-products {
    grid-template-columns: repeat(2, minmax(10px, 2fr));
    /* grid-gap: 32px; */
  }
  .dropbtn {
    margin-left: 5px;
  }

  .top-right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .content-title {
    padding: 0px 15px;
  }
  .top-right {
    padding: 0px 15px;
  }
}
</style>
