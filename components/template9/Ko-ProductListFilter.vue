<template>
  <div class="product-content">
    <div class="content-banner-shop">
      <div class="crumb">
        <nuxt-link to="/">
          <p class="txt-crumb s1">{{ $t('header_inicio') }}</p>
        </nuxt-link>
        <p class="txt-crumb">/</p>
        <p class="txt-crumb s2" @click="clear">{{ $t('header_productos') }}</p>
      </div>
      <div class="tittle-banner-shop">
        <p class="btn-tittle-shop" v-if="!this.nameCategoryHeader">
          {{ $t('header_productos') }}
        </p>
        <p class="btn-tittle-shop" v-else>
          {{ this.nameCategoryHeader }}
        </p>
      </div>
    </div>
    <div class="content-shop-items">
      <div class="content-left">
        <!-- <div class="content-input-slide">
          <div class="item-tittle">
            <p class="txt-tittles">
              {{ $t('home_filtrarpor') }}{{ $t('home_preciofilt') }}
            </p>
          </div>
          <div class="itemLeft-range-slide">
            <input
              class="input-slide"
              type="range"
              v-model="value"
              min="0"
              :max="range.max"
              value="1"
              id="myRange"
            />
          </div>

          <div class="value-range-slide">
            <div class="values-prices">
              <p class="value-price">
                {{ $t('cart_precio') }}
              </p>
              <p class="value-precio-change">
                <span class="price"> $0 — ${{ value }}</span>
                <span class="price" id="value-range"></span>
              </p>
            </div>
            <div class="btn-slider">
              <button class="btn-items-left" @click="filterProductPrice">
                {{ $t('home_filtrar') }}
              </button>
            </div>
          </div>
        </div>
        <div class="empty"></div> -->
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
        <div class="content-banner-shop-r">
          <div class="crumb">
            <nuxt-link to="/">
              <p class="txt-crumb s1">{{ $t('header_inicio') }}</p>
            </nuxt-link>
            <p class="txt-crumb">/</p>
            <p class="txt-crumb s2" @click="clear">
              {{ $t('header_productos') }}
            </p>
          </div>
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
            <!-- <div class="content-items-categorias-text">
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
            </div> -->

            <div class="items-end">
              <!-- <div class="show-number-items">
                <p class="product-stock">
                  {{ $t('home_mostrar') }}
                  <span class="separator-breadCrumbs">/</span>
                  {{ dataStore.productos.length }}
                  <span class="separator-breadCrumbs">/</span>
                </p>
              </div> -->

              <div class="show-view-per-list">
                <button class="show">
                  <svg
                    @click="showGrid3"
                    class="show-icon"
                    :class="indexshowList == 3 ? 'show-icon-active' : ''"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="40px"
                    height="40px"
                    viewBox="0 0 12 12"
                  >
                    <path d="M5,0H0v5h5V0z"></path>
                    <path d="M12,0H7v5h5V0z"></path>
                    <path d="M5,7H0v5h5V7z"></path>
                    <path d="M12,7H7v5h5V7z"></path>
                  </svg>
                </button>
                <button class="show">
                  <svg
                    @click="showList"
                    :class="indexshowList == 1 ? 'show-icon-active' : ''"
                    class="show-icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="40px"
                    height="40px"
                    viewBox="0 0 12 12"
                  >
                    <path d="M5,0H0v5h5V0z"></path>
                    <rect x="7" y="0" width="5" height="2"></rect>
                    <rect x="7" y="3" width="5" height="2"></rect>
                    <rect x="7" y="7" width="5" height="2"></rect>
                    <rect x="7" y="10" width="5" height="2"></rect>
                    <path d="M5,7H0v5h5V7z"></path>
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
    // KoSocialNet,
    KoProdcutCardFilter,
    KoProdcutCardFilerList,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
  },
  name: 'Ko-ProductList-Filter',
  mounted() {
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
    // var slider = document.getElementById('myRange')
    // var valueslide = document.getElementById('value-range')
    // slider.oninput = function () {
    //   valueslide.innerHTML = this.value
    // }

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
  margin-top: 72px;
}
.content-banner-shop {
  @apply w-full flex flex-col;
}
.content-banner-shop-r {
  @apply w-full flex flex-col justify-start items-start;
}
.itemLeft-range-slide {
  @apply w-full flex justify-center items-center;
  margin-bottom: 20px;
}
.content-input-slide {
  @apply w-full flex flex-col justify-center items-center;
}
.input-slide {
  @apply w-full cursor-pointer border-none;
  height: 30px;
  /* border-bottom: 2px solid #2c2930; */
}
.txt-tittles {
  @apply w-full flex justify-start items-center;
  color: #333;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0px;
  transition: all 0.25s ease;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  cursor: pointer;
}
.value-range-slide {
  @apply w-full flex flex-row justify-start items-center;
}
.values-prices {
  @apply w-8/0 flex flex-row justify-start items-center;
}
.value-price {
  @apply w-auto pr-1;
  color: #717171;
  font-size: 14px;
  font-family: 'Lora', serif !important ;
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
  color: #2d2a2a;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Lora', serif !important ;
  transition: all 0.25s ease;
  cursor: default;
}
.item-tittle {
  @apply w-full flex justify-start items-center;
}
.empty {
  @apply w-full;
  margin-bottom: 30px;
  border-bottom: 1px solid;
  border-color: rgba(129, 129, 129, 0.2);
}
.btn-slider {
  @apply w-3/0 flex justify-center items-center;
}
.btn-items-left {
  font-family: 'Lora', serif !important ;
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
  color: #333333;
  margin-right: 6px;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Lora', serif !important ;
  cursor: pointer;
}
.separator-breadCrumbs {
  width: auto;
  color: #8e8e8e;
  margin-right: 6px;
  margin-left: 6px;
  transition: all 0.25s ease;
  font-size: 14px;
  font-family: 'Lora', serif !important ;
  cursor: pointer;
}
.product-stock-text {
  color: #8e8e8e;
  font-weight: bold;
  font-size: 14px;
  font-family: 'Lora', serif !important ;
}
.product-stock-active {
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 15px;
  font-family: 'Lora', serif !important ;
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
  font-family: 'Lora', serif !important ;
  cursor: pointer;
}
#statecate {
  width: 100%;
  color: #333;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Lora', serif !important ;
  cursor: pointer;
}
#statesubcate {
  width: 100%;
  margin-left: 6px;
  transition: all 0.25s ease;
  color: #333;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Lora', serif !important ;
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
  @apply w-full flex flex-row justify-start items-center pr-1;
  color: #333;
  font-size: 15px;
  line-height: 1.3;
  font-weight: 400;
  font-family: 'Roboto', Helvetica, Arial, sans-serif !important ;
  transition: all 0.25s ease;
  cursor: pointer;
}
.txt-categorys-active {
  @apply w-full flex flex-row justify-start items-center pr-1;
  color: #000;
  font-size: 14px;
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
  font-family: 'Lora', serif !important ;
  cursor: pointer;
}
.show-view-per-list {
  @apply w-auto justify-center items-center;
}
.show {
  @apply w-full cursor-pointer mt-4;
}

.show-icon {
  @apply p-3;
  fill: #8e8e8e;
}
.show-icon-active {
  fill: #000;
  background-color: #f8f8f8;
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
  @apply w-full flex;
}
.btn-tittle-shop {
  color: #333;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.1;
}
.txt-categorys:hover {
  color: #050505;
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
.product-conten-items {
  @apply justify-center items-center text-center gap-4;
}
.producto-items-content {
  @apply w-full;
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
.content-item {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
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
  @apply w-full flex flex-col justify-center items-center;
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
  font-family: 'David Libre', serif !important;
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
.crumb {
  @apply w-full flex flex-row justify-start items-start;
}
.txt-crumb {
  font-family: Arial, sans-serif;
  font-size: 12px;
  color: #b3b3b3;
  line-height: 14px;
  padding-right: 6px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.s1:hover {
  background-color: #2c2930;
  color: #fff;
  transition: all 0.25s ease;
}
.s2:hover {
  background-color: #2c2930;
  color: #fff;
  transition: all 0.25s ease;
}
.accordion {
  cursor: pointer;
  margin-bottom: 0px;
  width: 100%;
  font-size: 20px;
  border: none;
  text-align: left;
  outline: none;
  transition: 0.4s;
  margin-bottom: 0px;
}
.accordion:after {
  content: '\002B';
  color: #000;
  font-weight: bold;
  float: right;
  /* margin-left: 5px; */
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
@screen sm {
  .product-conten-items {
    @apply w-full grid grid-cols-1;
  }
  .btn-tittle-shop {
    font-size: 36px;
  }
  .content-shop-items {
    @apply w-9/5 flex flex-row justify-start items-start;
  }
  .content-left {
    @apply hidden;
  }
  .content-right {
    @apply w-full;
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
    @apply justify-start items-start my-8;
    padding-left: 20px;
  }
  .tittle-banner-shop {
    @apply justify-start items-start;
    padding-top: 6px;
  }
  .content-banner-shop-r {
    @apply hidden;
  }
}
@media (min-width: 440px) {
  .product-conten-items {
    @apply grid grid-cols-2;
  }
}
@screen md {
  .content-shop-items {
    @apply w-9/3;
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
    @apply w-auto grid grid-cols-2 gap-0 justify-center items-center;
  }
  .btn-tittle-shop {
    font-size: 48px;
  }
  .top-content {
    display: flex;
    border-bottom: 1px solid #e8e8e8;
    padding-top: 0px;
    padding-bottom: 5px;
  }
  .content-left {
    @apply mr-70 flex flex-col justify-between items-start;
    width: 15vw;
  }
  .content-banner-shop {
    @apply hidden;
  }
  .content-banner-shop-r {
    @apply flex;
  }
  .content-shop-items {
    @apply flex flex-row justify-start items-start mt-40;
    width: 95vw;
  }
}
@media (min-width: 3000px) {
  .content-shop-items {
    width: 98vw;
  }
  .content-left {
    width: 10vw;
  }
}
</style>
