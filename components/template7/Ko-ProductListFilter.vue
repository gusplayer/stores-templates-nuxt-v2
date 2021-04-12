<template>
  <div class="product-content" :style="[settingK07ProductList, settingGeneral]">
    <div
      class="content-banner-shop"
      id="BgProductlistF"
      :style="[
        {
          '--font-style-1':
            this.settingGeneral && this.settingGeneral.fount_1
              ? this.settingGeneral.fount_1
              : 'David Libre',
        },
        {
          '--font-style-2':
            this.settingGeneral && this.settingGeneral.fount_2
              ? this.settingGeneral.fount_2
              : 'Great Vibes',
        },
        {
          '--font-style-3':
            this.settingGeneral && this.settingGeneral.fount_3
              ? this.settingGeneral.fount_3
              : 'Lora',
        },
      ]"
    >
      <div class="tittle-banner-shop">
        <p class="btn-tittle-shop">
          {{ settingK07ProductList.title }}
        </p>
      </div>
    </div>
    <div class="content-shop-items">
      <div class="content-left">
        <div class="content-category-left">
          <div class="item-tittle">
            <p class="txt-tittles">
              {{ $t('productdetail_categoria') }}
            </p>
          </div>
          <div class="categorys-list">
            <div
              v-for="(categorys, index) in categorias"
              :key="index"
              @click="showSubCategory = true"
            >
              <div
                @click="sendCategory(categorys, categorys.id, (ref = false))"
              >
                <p
                  class="txt-categorys"
                  :class="
                    categorys.id == indexSelect ? 'txt-categorys-active' : ''
                  "
                >
                  {{ categorys.nombre_categoria_producto }}
                </p>
              </div>
            </div>
          </div>
          <div class="empty"></div>

          <div
            class="item-tittle"
            v-if="showSubCategory && selectedSubcategories.length"
          >
            <p class="txt-tittles">
              {{ $t('home_subcategory') }}
            </p>
          </div>
          <div
            class="subcategory-list"
            v-if="showSubCategory && selectedSubcategories.length"
          >
            <div
              v-for="(subcategorys, index) in selectedSubcategories"
              :key="index"
            >
              <div @click="Sendsubcategory(subcategorys.id)">
                <p
                  class="txt-categorys"
                  :class="
                    subcategorys.id == indexSelect2
                      ? 'txt-categorys-active'
                      : ''
                  "
                >
                  {{ subcategorys.nombre_subcategoria }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="empty"
          v-if="showSubCategory && selectedSubcategories.length"
        ></div>
      </div>
      <div class="content-right">
        <div class="top-content">
          <div class="content-items-categorias">
            <div class="content-items-categorias-text">
              <p class="text-categorias" id="homeCate" @click="clear">
                {{ $t('home_catalogo') }}
                <span
                  v-if="this.nameCategoryHeader"
                  class="separator-breadCrumbs"
                  >/</span
                >
              </p>
              <p
                class="text-categorias-select"
                v-if="this.nameCategoryHeader"
                @click="breadcrumbsSendCategory(nameCategoryHeader)"
              >
                <span id="statecate">{{ this.nameCategoryHeader }}</span>
              </p>
              <span
                v-if="this.nameSubCategoryHeader"
                class="separator-breadCrumbs"
                >/
              </span>
              <p
                class="text-categorias-select"
                v-if="this.nameSubCategoryHeader"
              >
                <span id="statesubcate">{{ this.nameSubCategoryHeader }}</span>
              </p>
            </div>

            <div class="items-end">
              <div class="show-view-per-list">
                <button class="show">
                  <svg
                    @click="showList"
                    class="show-icon"
                    :class="indexshowList == 1 ? 'show-icon-active' : ''"
                    version="1.1"
                    id="list-view"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    enable-background="new 0 0 18 18"
                    xml:space="preserve"
                  >
                    <rect width="18" height="2"></rect>
                    <rect y="16" width="18" height="2"></rect>
                    <rect y="8" width="18" height="2"></rect>
                  </svg>
                </button>
                <button class="show">
                  <svg
                    @click="showGrid2"
                    class="show-icon"
                    :class="indexshowList == 2 ? 'show-icon-active' : ''"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="19px"
                    height="19px"
                    viewBox="0 0 19 19"
                    enable-background="new 0 0 19 19"
                    xml:space="preserve"
                  >
                    <path d="M7,2v5H2V2H7 M9,0H0v9h9V0L9,0z"></path>
                    <path d="M17,2v5h-5V2H17 M19,0h-9v9h9V0L19,0z"></path>
                    <path d="M7,12v5H2v-5H7 M9,10H0v9h9V10L9,10z"></path>
                    <path d="M17,12v5h-5v-5H17 M19,10h-9v9h9V10L19,10z"></path>
                  </svg>
                </button>
                <button class="show">
                  <svg
                    @click="showGrid3"
                    :class="indexshowList == 3 ? 'show-icon-active' : ''"
                    class="show-icon"
                    version="1.1"
                    id="Layer_2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="19px"
                    height="19px"
                    viewBox="0 0 19 19"
                    enable-background="new 0 0 19 19"
                    xml:space="preserve"
                  >
                    <rect width="5" height="5"></rect>
                    <rect x="7" width="5" height="5"></rect>
                    <rect x="14" width="5" height="5"></rect>
                    <rect y="7" width="5" height="5"></rect>
                    <rect x="7" y="7" width="5" height="5"></rect>
                    <rect x="14" y="7" width="5" height="5"></rect>
                    <rect y="14" width="5" height="5"></rect>
                    <rect x="7" y="14" width="5" height="5"></rect>
                    <rect x="14" y="14" width="5" height="5"></rect>
                  </svg>
                </button>
                <button class="show">
                  <svg
                    @click="showGrid4"
                    :class="indexshowList == 4 ? 'show-icon-active' : ''"
                    class="show-icon"
                    version="1.1"
                    id="Layer_3"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="19px"
                    height="19px"
                    viewBox="0 0 19 19"
                    enable-background="new 0 0 19 19"
                    xml:space="preserve"
                  >
                    <rect width="4" height="4"></rect>
                    <rect x="5" width="4" height="4"></rect>
                    <rect x="10" width="4" height="4"></rect>
                    <rect x="15" width="4" height="4"></rect>
                    <rect y="5" width="4" height="4"></rect>
                    <rect x="5" y="5" width="4" height="4"></rect>
                    <rect x="10" y="5" width="4" height="4"></rect>
                    <rect x="15" y="5" width="4" height="4"></rect>
                    <rect y="15" width="4" height="4"></rect>
                    <rect x="5" y="15" width="4" height="4"></rect>
                    <rect x="10" y="15" width="4" height="4"></rect>
                    <rect x="15" y="15" width="4" height="4"></rect>
                    <rect y="10" width="4" height="4"></rect>
                    <rect x="5" y="10" width="4" height="4"></rect>
                    <rect x="10" y="10" width="4" height="4"></rect>
                    <rect x="15" y="10" width="4" height="4"></rect>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="producto-items-content" id="section">
          <div class="content-item">
            <div class="content-item-productos">
              <div class="product-conten-items" id="grid-selection">
                <div
                  v-for="product in filterProduct"
                  :key="product.id"
                  class="content-products"
                >
                  <KoProdcutCardFilter
                    :product="product"
                    v-if="!showinList"
                    class="product-nolist"
                    :settingGeneral="settingGeneral"
                    :settingKProdutCard="settingKProdutCard"
                  ></KoProdcutCardFilter>
                  <KoProdcutCardFilerList
                    :product="product"
                    v-if="showinList"
                  ></KoProdcutCardFilerList>
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
                <div
                  class="product_pagination"
                  v-if="products.length > this.numVistas"
                >
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="products.length"
                    :page-size="this.numVistas"
                    :current-page.sync="currentPage"
                    class="pagination"
                  ></el-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoProdcutCardFilter from './_productcard/ProductCard'
import KoProdcutCardFilerList from './_productcard/ProductCardFilterList'
export default {
  components: {
    KoProdcutCardFilter,
    KoProdcutCardFilerList,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    settingGeneral: Object,
    settingK07ProductList: Object,
    settingKProdutCard: Object,
  },
  name: 'Ko-ProductList-Filter',
  mounted() {
    if (
      this.settingK07ProductList &&
      this.settingK07ProductList.img_background == true
    ) {
      this.setBg()
    }
    // this.$store.commit('products/SET_FILTER', this.$route.query)
    if (this.$store.getters['products/filterProducts']) {
      this.products = this.$store.getters['products/filterProducts']
      let maxTMP = 0
      this.products.forEach((product) => {
        if (maxTMP <= product.precio) {
          this.price[1] = product.precio
          this.rangeSlide[1] = product.precio
          this.range.max = parseInt(product.precio)
          maxTMP = product.precio
        }
      })
    }
    let domain = this.$route.fullPath
    let searchCategory = domain.slice(0, [20])
    let searchSubCategory = domain.slice(0, [23])
    if (searchCategory === '/productos?category=') {
      this.sendCategoryUrl(domain)
    } else if (searchSubCategory === '/productos?subcategory=') {
      this.SendsubcategoryUrl(domain)
    } else if (domain == '/productos') {
      this.Allcategories()
    }
    if (this.previousPage) {
      this.currentPage = this.previousPage
    }
    if (this.nameCategoryHeader && this.nameSubCategoryHeader == '') {
      this.$store.commit('SET_STATEBANNER', false)
    } else if (this.nameCategoryHeader && this.nameSubCategoryHeader) {
      this.$store.commit('SET_STATEBANNER', false)
    }
  },
  data() {
    return {
      showinList: false,
      showSubCategory: false,
      statesub: false,
      rangeSlide: [0, 1000000],
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
      indexshowList: 3,
      indexshowView: 3,
      numVistas: 16,
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
    ggetProductsCategorie() {
      const initial = this.currentPage * 16 - 16
      const final = initial + 16
      return this.fullProducts
        .filter((product) => product.categoria == this.select)
        .slice(initial, final)
    },
    listArticulos() {
      return this.$store.state.listArticulos.length
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
    showList() {
      this.indexshowList = 1
      this.showinList = true
      var gridselector = document.getElementById('grid-selection')
      if (gridselector) {
        gridselector.setAttribute(
          'style',
          'grid-template-columns: repeat(1, minmax(0, 1fr))'
        )
      }
    },
    shoView2() {
      this.indexshowView = 1
    },
    shoView4() {
      this.indexshowView = 2
    },
    shoView16() {
      this.indexshowView = 3
    },
    showGrid2() {
      this.indexshowList = 2
      this.showinList = false
      var gridselector = document.getElementById('grid-selection')
      if (gridselector) {
        gridselector.setAttribute(
          'style',
          'grid-template-columns: repeat(2, minmax(0, 1fr))'
        )
      }
    },
    showGrid3() {
      this.indexshowList = 3
      this.showinList = false
      var gridselector = document.getElementById('grid-selection')
      if (gridselector) {
        gridselector.setAttribute(
          'style',
          'grid-template-columns: repeat(3, minmax(0, 1fr))'
        )
      }
    },
    showGrid4() {
      this.indexshowList = 4
      this.showinList = false
      var dimension = screen.width
      var gridselector = document.getElementById('grid-selection')
      if (gridselector) {
        gridselector.setAttribute(
          'style',
          'grid-template-columns: repeat(4, minmax(0, 1fr))'
        )
        if (gridselector && dimension < 768) {
          gridselector.setAttribute(
            'style',
            'grid-template-columns: repeat(2, minmax(0, 1fr))'
          )
        }
      }
    },
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
      this.statesub = false
      var stateCategory = document.getElementById('statecate')
      if (this.statesub == false && stateCategory) {
        stateCategory.style.color = '#8e8e8e'
        stateCategory.style.fontWeight = '100'
      }

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
      this.$router.push({
        path: '',
        query: {
          subcategory: `${this.nameSubCategory}^${filtradoCategorias.id}`,
        },
      })
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', this.nameSubCategory)
      this.$store.commit('products/FILTER_BY', {
        type: 'subcategory',
        data: value,
      })
    },
    sendCategory(value, categoria, index, ref) {
      this.statesub = true
      var stateCategory = document.getElementById('statecate')
      var catalogo = document.getElementById('homeCate')
      if (catalogo) {
        catalogo.style.color = '#8e8e8e'
        catalogo.style.fontWeight = '100'
      }
      if (this.statesub == true && stateCategory) {
        stateCategory.style.color = '#333333'
        stateCategory.style.fontWeight = '600'
      }
      this.indexSelect = categoria
      this.currentPage = 1
      this.nameCategory = value.nombre_categoria_producto
      this.$store.commit('SET_CATEGORY_PRODCUTRO', this.nameCategory)
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', '')
      this.$router.push({
        path: '',
        query: { category: this.nameCategory },
      })
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
      this.statesub = true
      var stateCategory = document.getElementById('statecate')
      var catalogo = document.getElementById('homeCate')

      if (this.statesub == true && stateCategory) {
        catalogo.style.color = '#8e8e8e'
        catalogo.style.fontWeight = '100'

        stateCategory.style.color = '#333333'
        stateCategory.style.fontWeight = '600'
      }

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
      var catalogo = document.getElementById('homeCate')
      if (catalogo) {
        catalogo.style.color = '#333333'
        catalogo.style.fontWeight = '600'
      }
      this.indexSelect = ''
      this.indexSelect2 = ''
      this.$router.push({
        path: '',
        query: {},
      })
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
      let category = value.split('=')
      let urlFiltrada = decodeURIComponent(category[category.length - 1])
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
      let subcategory = value.split('=')
      let urlFiltradaTemp = decodeURIComponent(
        subcategory[subcategory.length - 1]
      )
      let resTemp = urlFiltradaTemp.split('^')
      let urlFiltrada = decodeURIComponent(resTemp[0])
      let filtradoSubCategoria = this.subcategories.find((element) => {
        if (
          element.categoria == parseInt(resTemp[1]) &&
          element.nombre_subcategoria == urlFiltrada
        ) {
          return element
        }
      })
      if (filtradoSubCategoria) {
        let filtradoCategorias = this.categorias.find(
          (element) => element.id == parseInt(resTemp[1])
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
    setBg() {
      if (this.settingK07ProductList.url_img) {
        var imagen = document.getElementById('BgProductlistF')
        imagen.style.backgroundImage = `url(${this.settingK07ProductList.url_img})`
      }
    },
  },
  watch: {
    banner() {
      if (
        this.settingK07ProductList &&
        this.settingK07ProductList.img_background == true
      ) {
        this.setBg()
      }
    },
    fullProducts(value) {
      this.products = value
      let maxTMP = 0
      value.forEach((product) => {
        if (maxTMP <= product.precio) {
          this.price[1] = product.precio
          this.rangeSlide[1] = product.precio
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
      let searchCategory = domain.slice(0, [20])
      let searchSubCategory = domain.slice(0, [23])
      if (searchCategory === '/productos?category=') {
        this.sendCategoryUrl(domain)
      } else if (searchSubCategory === '/productos?subcategory=') {
        this.SendsubcategoryUrl(domain)
      } else if (domain == '/productos') {
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
  @apply flex flex-col justify-center items-center w-full mb-80;
  background: var(--background_color_2);
}
.content-banner-shop {
  @apply w-full flex justify-center items-center bg-cover bg-no-repeat;
  /* background-image: var(--url_img); */
}
.itemLeft-range-slide {
  @apply w-full flex justify-center items-center;
  margin-bottom: 20px;
}
.content-input-slide {
  @apply w-full flex flex-col justify-center items-center;
}
.input-slide {
  @apply w-full cursor-pointer;
}
.txt-tittles {
  @apply w-full flex justify-start items-center;
  margin-bottom: 20px;
  color: var(--color_text);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.25s ease;
  font-family: var(--font-style-1) !important ;
  cursor: default;
}
.value-range-slide {
  @apply w-full flex flex-row justify-start items-center;
}
.values-prices {
  @apply w-8/0 flex flex-row justify-start items-center;
}
.value-price {
  @apply w-auto pr-1;
  color: var(--color_subtext);
  font-size: 14px;
  font-family: var(--font-style-3) !important ;
  transition: all 0.25s ease;
  cursor: default;
}
.value-precio-change {
  @apply w-full flex flex-row justify-start items-center;
}
.price {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: var(--color_text);
  font-weight: 600;
  font-size: 14px;
  font-family: var(--font-style-3) !important ;
  transition: all 0.25s ease;
  cursor: default;
}
.item-tittle {
  @apply w-full flex justify-start items-center;
}
.empty {
  @apply w-full;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid;
  border-color: rgba(129, 129, 129, 0.2);
}
.btn-slider {
  @apply w-3/0 flex justify-center items-center;
}
.btn-items-left {
  font-family: var(--font-style-3) !important ;
  transition: all 0.25s ease;
  display: flex;
  border-radius: 35px;
  background-color: #ededed;
  padding: 10px 14px;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  font-weight: 600;
  cursor: pointer;
}
.btn-items-left:hover {
  background-color: #e5e5e5;
}
.content-items-categorias {
  @apply w-full flex flex-row justify-between items-center;
}
.content-items-categorias-text {
  @apply w-full flex flex-row;
}
.text-categorias {
  display: flex;
  flex-direction: row;
  width: auto;
  color: var(--color_text);
  margin-right: 6px;
  font-weight: 600;
  font-size: 14px;
  font-family: var(--font-style-3) !important ;
  cursor: pointer;
}

.separator-breadCrumbs {
  width: auto;
  color: #8e8e8e;
  margin-right: 6px;
  margin-left: 6px;
  transition: all 0.25s ease;
  font-size: 14px;
  font-family: var(--font-style-3) !important ;
  cursor: pointer;
}
.product-stock-text {
  color: #8e8e8e;
  font-weight: bold;
  font-size: 14px;
  font-family: var(--font-style-3) !important ;
}
.product-stock-active {
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 15px;
  font-family: var(--font-style-3) !important ;
}
.text-categorias-select {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-right: 6px;
  color: #8e8e8e;
  font-weight: 100;
  transition: all 0.25s ease;
  font-size: 14px;
  font-family: var(--font-style-3) !important ;
  cursor: pointer;
}
#statecate {
  width: 100%;
  color: #333;
  font-weight: 600;
  font-size: 14px;
  font-family: var(--font-style-3) !important ;
  cursor: pointer;
}
#statesubcate {
  width: 100%;
  margin-left: 6px;
  transition: all 0.25s ease;
  color: #333;
  font-weight: 600;
  font-size: 14px;
  font-family: var(--font-style-3) !important ;
  cursor: pointer;
}
.top-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  max-width: 100%;
  width: 100%;
  font-size: 100%;
}
.categorys-list {
  @apply w-full grid grid-cols-1 gap-4 justify-start items-center;
  overflow: auto;
  max-height: 300px;
}
.subcategory-list {
  @apply w-full grid grid-cols-1 gap-4 justify-start items-center;
  overflow: auto;
  max-height: 300px;
}
.categorys-list::-webkit-scrollbar {
  width: 3px;
}
.categorys-list::-webkit-scrollbar-thumb {
  background: #a3a3a3;
  border-radius: 4px;
}
.categorys-list::-webkit-scrollbar-thumb:active {
  background-color: #777777;
}
.categorys-list::-webkit-scrollbar-thumb:hover {
  background: #686868;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.401);
}
.container::-webkit-scrollbar-track {
  background: #323232;
  border-radius: 4px;
}
.subcategory-list::-webkit-scrollbar {
  width: 3px;
}
.subcategory-list::-webkit-scrollbar-thumb {
  background: #a3a3a3;
  border-radius: 4px;
}
.subcategory-list::-webkit-scrollbar-thumb:active {
  background-color: #777777;
}
.subcategory-list::-webkit-scrollbar-thumb:hover {
  background: #686868;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.401);
}
.container::-webkit-scrollbar-track {
  background: #323232;
  border-radius: 4px;
}
.container::-webkit-scrollbar-track:hover,
.container::-webkit-scrollbar-track:active {
  background: #b52727;
}
.content-category-left {
  @apply w-full flex flex-col justify-start items-center;
}
.txt-categorys {
  @apply w-full flex flex-row justify-start items-center pr-4;
  color: var(--color_subtext);
  font-size: 14px;
  font-family: var(--font-style-3) !important ;
  transition: all 0.25s ease;
  cursor: pointer;
}
.txt-categorys-active {
  @apply w-full flex flex-row justify-start items-center pr-4;
  color: #0c0c0c;
  font-size: 14px;
  font-family: var(--font-style-3) !important ;
  transition: all 0.25s ease;
  cursor: pointer;
  font-weight: bold;
}
.product-stock {
  color: #333;
  margin-right: 6px;
  font-weight: 600;
  transition: all 0.25s ease;
  font-size: 14px;
  font-family: var(--font-style-3) !important ;
  cursor: pointer;
}
.show-view-per-list {
  @apply w-auto grid grid-cols-4 gap-4 justify-center items-center;
}
.show {
  @apply w-full cursor-pointer;
}
.show-icon {
  fill: #8e8e8e;
}
.show-icon-active {
  fill: #0c0c0c;
}
.show-icon:hover {
  fill: var(--color_text);
}
.show:focus .show-icon {
  fill: var(--color_text);
}
.items-end {
  @apply w-full flex flex-row justify-end items-center;
}
.tittle-banner-shop {
  @apply w-full flex flex-wrap justify-center items-center;
}
.btn-tittle-shop {
  color: var(--color_title);
  font-family: var(--font-style-1) !important ;
  font-weight: 400;
}
.txt-categorys:hover {
  color: #050505;
}
.product-text {
  @apply flex flex-col justify-center items-center w-full;
}
.product-conten-items {
  @apply flex flex-col justify-start items-start text-center  w-full;
}
.product-tittle,
.product-subtittle,
.product-description,
.tittle,
.subtittle,
.description {
  @apply flex flex-col justify-center items-center text-center;
}
.producto-items-content {
  @apply w-full;
}
.tittle {
  font-family: var(--font-style-2) !important;
  color: #ed2353;
}
.subtittle {
  font-family: var(--font-style-1) !important;
  color: var(--color_text);
}
.description {
  font-family: var(--font-style-3) !important ;
  color: #777;
}
.product-conten-items {
  @apply gap-4;
}
.content-item {
  display: flex;
  width: 100%;
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
.content-products {
  border-bottom: 0.5px solid #f2f2f2;
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
  font-family: var(--font-style-1) !important;
}
.pagination-medium {
  margin-top: 50px;
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

.show-number-items,
.product-stock,
.separator-breadCrumbs {
  cursor: default;
}
@screen sm {
  #grid-selection {
    @apply grid grid-cols-2;
  }
  .btn-tittle-shop {
    font-size: 36px;
  }
  .content-banner-shop {
    padding-top: 80px;
  }
  .tittle-banner-shop {
    @apply my-6;
  }
  .content-shop-items {
    @apply w-9/5 flex flex-col justify-center items-center;
  }
  .content-left {
    @apply hidden;
  }
  .content-right {
    @apply w-full;
  }
  .top-content {
    border-bottom: 1px solid #e8e8e8;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .items-end {
    @apply hidden;
  }
  .content-items-categorias-text {
    @apply justify-center items-center;
  }
  .text-categorias-select {
    @apply w-auto;
  }
}
@screen md {
  .product-conten-items {
    @apply grid grid-cols-3;
  }
  #grid-selection {
    @apply grid grid-cols-3;
  }
}
@screen lg {
  .product-text {
    @apply w-full;
  }
  .product-conten-items {
    @apply grid grid-cols-3;
  }
  .content-items-categorias-text {
    @apply justify-start items-center;
  }
  .items-end {
    @apply flex;
  }
  .show-number-items {
    @apply w-full flex justify-end items-center;
  }
  .show-view-per-list {
    @apply hidden;
  }
}
@screen mlg {
  .btn-tittle-shop {
    font-size: 78px;
  }
  .content-banner-shop {
    padding-top: 150px;
    padding-bottom: 70px;
    margin-bottom: 40px;
  }
  .tittle-banner-shop {
    @apply my-6;
  }
  .content-shop-items {
    @apply w-9/3 flex flex-row justify-start items-start;
  }
  .top-content {
    border-bottom: 1px solid #e8e8e8;
    padding-top: 0px;
    padding-bottom: 5px;
  }
  .content-left {
    @apply w-3/0 mr-24 flex flex-col justify-between items-start;
  }
  .show-view-per-list {
    @apply w-auto grid grid-cols-4 gap-4 justify-center items-center;
  }
  .show-number-items {
    @apply w-full flex justify-center items-center;
  }
  .text-categorias,
  .separator-breadCrumbs,
  ..text-categorias-select,
  #statecate {
    margin-bottom: 20px;
  }
}
@media (min-width: 1192px) {
  .content-shop-items {
    width: 1192px;
  }
}
</style>
