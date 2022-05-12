<template>
  <div
    class="product-content"
    :style="[
      settingByTemplate11[0].setting11General,
      settingByTemplate11[0].productList,
      {
        '--font-style-1':
          this.settingByTemplate11[0].setting11General &&
          this.settingByTemplate11[0].setting11General.fount_1
            ? this.settingByTemplate11[0].setting11General.fount_1
            : 'Roboto',
      },
    ]"
  >
    <div class="bannerProduct">
      <div class="crumb">
        <nuxt-link to="/">
          <p class="txt-crumb s1">{{ $t('header_inicio') }}</p>
        </nuxt-link>
        <p class="separatorCrumb">/</p>
        <p class="txt-crumb s2" @click="clear">
          {{ $t('header_productos') }}
        </p>
      </div>
    </div>
    <div class="container-product-max-w">
      <div class="content-shop-items">
        <div class="content-left">
          <nuxt-link class="content-home" to="/productos">
            <p class="txt-content-home" @click="clear">
              {{ $t('header_inicio') }}
            </p>
          </nuxt-link>
          <div class="empty"></div>
          <div class="content-input-slide">
            <button class="item-tittle accordion">
              <p class="txt-tittles">
                {{ $t('header_buscar_producto') }}
              </p>
            </button>
            <div class="itemLeft-range-slide panel">
              <input
                class="input-slide"
                type="search"
                v-model="search"
                :placeholder="$t('header_search')"
              />
            </div>
          </div>
          <div class="empty"></div>
          <div class="content-category-left">
            <button class="item-tittle accordion">
              <p class="txt-tittles">
                {{ $t('productdetail_categoria') }}
              </p>
            </button>
            <div class="categorys-list panel">
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
            <button
              class="item-tittle accordion"
              v-show="showSubCategory && selectedSubcategories.length"
            >
              <p class="txt-tittles">
                {{ $t('home_subcategory') }}
              </p>
            </button>
            <div
              class="subcategory-list panel"
              v-show="showSubCategory && selectedSubcategories.length"
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
          <nuxt-link class="content-home hidd" to="/productos">
            <p class="txt-content-home" @click="clear">
              {{ $t('header_inicio') }}
            </p>
          </nuxt-link>
          <div class="empty hidd"></div>
          <div class="content-banner-shop-r">
            <div class="tittle-banner-shop">
              <p class="btn-tittle-shop" v-if="!this.nameCategoryHeader">
                {{ $t('header_productos') }}
              </p>
              <p class="btn-tittle-shop" v-else>
                {{ this.nameCategoryHeader }}
              </p>
            </div>
          </div>
          <div class="top-content">
            <div class="content-items-categorias">
              <div class="items-end">
                <div class="show-view-per-list">
                  <button class="show">
                    <svg
                      @click="showGrid3"
                      class="show-icon"
                      :class="indexshowList == 3 ? 'show-icon-active' : ''"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z"
                      />
                    </svg>
                  </button>
                  <button class="show">
                    <svg
                      @click="showList"
                      :class="indexshowList == 1 ? 'show-icon-active' : ''"
                      class="show-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z"
                      />
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
                    class="content-products h-full"
                  >
                    <KoProdcutCardFilter
                      :product="product"
                      v-if="!showinList"
                      class="product-list"
                      :settingKcardProduct="settingByTemplate11[0].cardProduct"
                      :settingGeneral="settingByTemplate11[0].setting11General"
                    ></KoProdcutCardFilter>
                    <KoProdcutCardFilerList
                      :product="product"
                      v-if="showinList"
                      class="product-list"
                      :settingKcardProduct="settingByTemplate11[0].cardProduct"
                      :settingGeneral="settingByTemplate11[0].setting11General"
                    ></KoProdcutCardFilerList>
                  </div>
                </div>
                <div
                  v-if="this.fullProducts.length == 0"
                  class="content-products-empty"
                >
                  <div class="header-content-logo">
                    <nuxt-link to="/productos" class="wrapper-logo">
                      <img
                        v-lazy="
                          `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`
                        "
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
  </div>
</template>

<script>
import KoProdcutCardFilter from './_productcard/ProductCard'
import KoProdcutCardFilerList from './_productcard/ProductCardFilterList'
import sendCategoryUrl from '../../mixins/sendCategoryUrl'
import SendsubcategoryUrl from '../../mixins/SendsubcategoryUrl'
export default {
  components: {
    KoProdcutCardFilter,
    KoProdcutCardFilerList,
  },
  props: {
    settingByTemplate11: Array,
    dataStore: Object,
    fullProducts: {},
  },
  mixins: [sendCategoryUrl, SendsubcategoryUrl],

  name: 'Ko-ProductList-Filter',
  mounted() {
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
    if (this.$route.query && this.$route.query.category) {
      this.sendCategoryUrl(this.$route.query.category)
    } else if (this.$route.query && this.$route.query.subcategory) {
      this.SendsubcategoryUrl(
        this.$route.query.subcategory,
        this.categorias,
        this.subcategories
      )
    } else if (this.$route.fullPath == '/') {
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
    var acc = document.getElementsByClassName('accordion')
    var i
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active')
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      })
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
      value: 1,
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
      pruebasss: [],
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
    filterProductPrice() {
      let result = {}
      if (this.filterProduct && this.value) {
        result = this.filterProduct.map((product) => {
          if (product.precio >= 0 && product.precio <= this.value) {
            return product
          }
        })
        this.pruebasss = []
        if (result) {
          result.map((element) => {
            if (element) {
              this.pruebasss.push(element)
            }
          })
        }
      }
    },
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
        this.search = search
        this.$router.push({
          path: '',
          query: { search: search },
        })
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
  },
  watch: {
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
      if (this.$route.query && this.$route.query.category) {
        this.sendCategoryUrl(this.$route.query.category)
      } else if (this.$route.query && this.$route.query.subcategory) {
        this.SendsubcategoryUrl(
          this.$route.query.subcategory,
          this.categorias,
          this.subcategories
        )
      } else if (this.$route.fullPath == '/') {
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
.container-product-max-w {
  max-width: 1400px;
  @apply w-full flex flex-col justify-center items-center;
}
.product-content {
  background: var(--background_color_1);
  @apply flex flex-col justify-center items-center w-full pb-80;
}
.content-banner-shop {
  @apply w-full flex flex-col;
}
.content-banner-shop-r {
  @apply w-full flex flex-col justify-start items-start;
}
.itemLeft-range-slide {
  @apply w-full flex justify-center items-center mb-20;
}
.content-input-slide {
  @apply w-full flex flex-col justify-center items-center;
}
.input-slide {
  font-family: var(--font-style-1) !important;
  @apply w-full h-30 cursor-pointer border-none;
  /* border-bottom: 2px solid #2c2930; */
}
.txt-tittles {
  color: var(--color_text);
  font-size: 15px;
  font-family: var(--font-style-1) !important;
  @apply w-full flex justify-start items-center font-semibold tracking-0 cursor-pointer uppercase transition-all ease-in duration-0.2;
}
.value-range-slide {
  @apply w-full flex flex-row justify-start items-center;
}
.values-prices {
  @apply w-8/0 flex flex-row justify-start items-center;
}
.value-price {
  color: #717171;
  font-size: 14px;
  font-family: var(--font-style-1) !important;
  @apply w-auto pr-1 cursor-default transition-all ease-in duration-0.2;
}
.value-precio-change {
  @apply w-full flex flex-row justify-start items-center;
}
.price {
  color: #2d2a2a;
  font-size: 14px;
  font-family: var(--font-style-1) !important;
  @apply flex flex-row justify-start items-center font-semibold transition-all ease-in duration-0.2 cursor-default;
}
.item-tittle {
  @apply w-full flex justify-start items-center;
}
.empty {
  margin-bottom: 30px;
  border-color: var(--border);
  @apply w-full mb-30 border-b;
}
.btn-slider {
  @apply w-3/0 flex justify-center items-center;
}
.btn-items-left {
  background-color: #ededed;
  font-size: 12px;
  border-radius: 35px;
  padding: 10px 14px;
  letter-spacing: 0.3px;
  font-family: var(--font-style-1) !important;
  @apply flex justify-center items-center text-center uppercase font-semibold cursor-pointer transition-all ease-in duration-0.2;
}
.btn-items-left:hover {
  background-color: #e5e5e5;
}
.content-items-categorias {
  @apply w-full flex flex-col justify-start items-center;
}
.content-items-categorias-text {
  @apply w-full flex flex-row;
}
.text-categorias {
  color: #333333;
  font-size: 14px;
  font-family: var(--font-style-1) !important;
  @apply w-auto flex flex-row mr-6 font-semibold cursor-pointer;
}
.separator-breadCrumbs {
  color: #8e8e8e;
  font-size: 14px;
  font-family: var(--font-style-1) !important;
  @apply w-auto mr-6 ml-6 cursor-pointer transition-all ease-in duration-0.2;
}
.product-stock-text {
  color: #8e8e8e;
  font-size: 14px;
  font-family: var(--font-style-1) !important;
  @apply font-semibold;
}
.product-stock-active {
  color: #000;
  font-size: 15px;
  font-family: var(--font-style-1) !important;
  @apply font-semibold;
}
.text-categorias-select {
  color: #8e8e8e;
  font-size: 14px;
  font-family: var(--font-style-1) !important;
  @apply w-full flex flex-row mr-6 font-normal cursor-pointer transition-all ease-in duration-0.2;
}
#statecate {
  color: #333;
  font-size: 14px;
  font-family: var(--font-style-1) !important;
  @apply w-full font-semibold cursor-pointer;
}
#statesubcate {
  color: #333;
  font-size: 14px;
  font-family: var(--font-style-1) !important;
  @apply w-full ml-6 font-semibold cursor-pointer transition-all ease-in duration-0.2;
}
.top-content {
  font-size: 100%;
  @apply w-full max-w-full flex justify-between items-center flex-wrap mb-20;
}
.categorys-list {
  max-height: 300px;
  @apply w-full grid grid-cols-1 gap-4 justify-start items-center overflow-auto;
}
.subcategory-list {
  max-height: 300px;
  @apply w-full grid grid-cols-1 gap-4 justify-start items-center overflow-auto;
}
.categorys-list::-webkit-scrollbar {
  @apply w-3;
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
  @apply w-3;
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
  color: var(--color_subtext);
  font-size: 15px;
  line-height: 1.3;
  font-family: var(--font-style-1) !important;
  @apply w-full flex flex-row justify-start items-center font-normal cursor-pointer pr-1 transition-all ease-in duration-0.2;
}
.txt-categorys:hover {
  color: #eb7025;
}
.txt-categorys-active {
  color: #eb7025;
  font-size: 14px;
  @apply w-full flex flex-row justify-start items-center pr-1 transition-all ease-in duration-0.2 font-semibold cursor-pointer;
}
.txt-categorys:hover .rounded-list {
  background-color: #eb7025;
  @apply transition-all ease-in duration-0.2;
}
.rounded-list {
  background-color: #e5e5e5;
  @apply w-10 h-10 rounded-full mr-10 transition-all ease-in duration-0.2;
}
.txt-rounded-list-active {
  background-color: #eb7025;
  @apply transition-all ease-in duration-0.2;
}
.product-stock {
  color: #333;
  font-size: 14px;
  font-family: var(--font-style-1) !important;
  @apply mr-6 font-semibold cursor-pointer transition-all ease-in duration-0.2;
}
.show-view-per-list {
  @apply w-auto justify-center items-center;
}
.show {
  @apply w-full cursor-pointer mt-4;
}
.show-icon {
  fill: var(--color_text);
  @apply p-3;
}
.show-icon-active {
  fill: var(--color_subtext);
  background-color: transparent;
}
.show-icon:hover {
  fill: #000;
  background-color: #f8f8f8;
}
.show:focus .show-icon {
  fill: #000;
}
.items-end {
  @apply w-full flex flex-row justify-start items-center;
}
.tittle-banner-shop {
  @apply w-full flex justify-start items-start;
}
.btn-tittle-shop {
  color: var(--color_text);
  font-family: var(--font-style-1) !important;
  @apply font-semibold uppercase justify-start items-start;
}
.product-text {
  @apply flex flex-col justify-center items-center w-full;
}

.product-conten-items {
  @apply justify-center items-center text-center gap-4;
}
.producto-items-content {
  @apply w-full;
}
.content-item {
  @apply w-full flex flex-row justify-center items-center mb-40;
}
.content-item-productos {
  @apply w-full flex flex-col justify-center items-center;
}
.content-products {
  /* border-bottom: 0.5px solid #f2f2f2; */
  @apply w-full flex flex-col justify-center items-center;
}
.content-products-empty {
  min-height: 200px;
  @apply w-full flex flex-col justify-center items-center text-center;
}
.txt-products-empty {
  font-size: 20px;
  color: #3f3f3f;
  font-family: var(--font-style-1) !important;
  @apply mt-6 font-semibold;
}
.pagination-medium {
  margin-top: 50px;
  background: transparent;
}
.pagination {
  font-size: 18px;
  color: #222;
  background: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next {
  color: #222;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-prev {
  color: #222;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .el-pager li {
  color: #222;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next:hover {
  color: #eb7025;
}
.product_pagination >>> .el-pagination.is-background .btn-prev:hover {
  color: #eb7025;
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: #eb7025;
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #eb7025;
  color: #fff;
}
.show-number-items,
.product-stock,
.separator-breadCrumbs {
  cursor: default;
}
.crumb {
  @apply w-full flex flex-row justify-center items-center;
}
.separatorCrumb {
  font-size: 9px;
  color: var(--breadCrumbs);
  font-family: var(--font-style-1) !important;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.txt-crumb {
  font-size: 15px;
  color: var(--breadCrumbs);
  font-family: var(--font-style-1) !important;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.s1:hover {
  color: #000;
  transition: all 0.25s ease;
}
.s2:hover {
  color: #000;
  transition: all 0.25s ease;
}
.accordion {
  font-size: 20px;
  transition: 0.4s;
  @apply w-full mb-0 border-none text-left outline-none cursor-pointer;
}
.accordion:after {
  content: '\002B';
  color: var(--border);
  font-weight: bold;
  float: right;
}
.active:after {
  content: '\2212';
}
.panel {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
}
.product-list {
  @apply w-full;
}
/* .product-list:hover {
  @apply shadow-lg;
} */
@screen sm {
  .product-conten-items {
    @apply w-full grid grid-cols-1;
  }
  .btn-tittle-shop {
    font-size: 16px;
    @apply mb-10;
  }
  .content-shop-items {
    @apply w-9/0 flex flex-row justify-start items-start;
  }
  .content-left {
    @apply hidden;
  }
  .content-right {
    @apply w-full flex flex-col justify-center items-center;
  }
  .top-content {
    @apply hidden;
  }
  .content-items-categorias-text {
    @apply justify-center items-center;
  }
  .text-categorias-select {
    @apply w-auto;
  }
  .content-banner-shop {
    @apply justify-start items-start my-8 pl-20;
  }
  .bannerProduct {
    @apply hidden;
  }
  .content-home {
    @apply w-full flex flex-col justify-start items-start;
  }
  .txt-content-home {
    font-family: var(--font-style-1) !important;
    color: var(--color_text);
    font-size: 16px;
    line-height: 1.1;
    @apply w-auto py-20 uppercase font-semibold cursor-pointer;
  }
  .txt-content-home:hover {
    color: #000;
  }
}
@media (min-width: 440px) {
  .product-conten-items {
    @apply grid grid-cols-2;
  }
}
@screen md {
  .btn-tittle-shop {
    font-size: 36px;
    @apply mb-0;
  }
  .content-shop-items {
    @apply w-9/3;
  }
  .bannerProduct {
    border-color: var(--border);
    @apply w-full flex bg-cover bg-center bg-no-repeat justify-items-center items-center py-20 border-b;
  }
}
@screen lg {
  .product-text {
    @apply w-full;
  }
  .product-conten-items {
    @apply grid grid-cols-3 gap-10;
  }
  .content-items-categorias-text {
    @apply justify-start items-center;
  }
  .items-end {
    @apply flex pb-20;
  }
  .show-number-items {
    @apply w-full flex justify-end items-center;
  }
  .show-view-per-list {
    @apply w-auto grid grid-cols-2 gap-0 justify-center items-center;
  }
  .btn-tittle-shop {
    font-size: 20px;
  }
  .top-content {
    border-bottom: 1px solid var(--border);
    @apply flex pt-0 pb-5;
  }
  .content-left {
    width: 300px;
    @apply mr-30 flex flex-col justify-between items-start;
  }
  .content-banner-shop {
    @apply hidden;
  }
  .content-banner-shop-r {
    @apply flex pb-40;
  }
  .content-shop-items {
    @apply w-9/5 flex flex-row justify-start items-start mt-40;
  }
  .hidd {
    @apply hidden;
  }
}
@screen mlg {
  .product-content {
    @apply mt-0;
  }
  .content-left {
    width: 400px;
  }
}
</style>
