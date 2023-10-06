<template>
  <div
    class="product-content"
    :style="[
      settingByTemplate7[0].productListFilter,
      settingByTemplate7[0].settingGeneral,
      {
        '--font-style-1':
          settingByTemplate7[0]?.settingGeneral?.fount_1 ?? 'David Libre',
      },
      {
        '--font-style-2':
          settingByTemplate7[0]?.settingGeneral?.fount_2 ?? 'Great Vibes',
      },
      {
        '--font-style-3':
          settingByTemplate7[0]?.settingGeneral?.fount_3 ?? 'Lora',
      },
    ]"
  >
    <div id="BgProductlistF" class="content-banner-shop">
      <div class="tittle-banner-shop">
        <p class="btn-tittle-shop">
          {{ settingByTemplate7[0].productListFilter.title }}
        </p>
      </div>
    </div>
    <div class="content-shop-items">
      <div v-if="categorias && categorias.length > 0" class="content-left">
        <div class="content-category-left">
          <button class="item-tittle">
            <p class="txt-tittles">
              {{ $t('header_buscar_producto') }}
            </p>
          </button>
          <div class="itemLeft-range-slide">
            <input
              v-model="search"
              class="input-slide"
              type="search"
              :placeholder="$t('header_search')"
            />
          </div>
        </div>
        <div class="content-category-left">
          <div class="item-tittle">
            <p class="txt-tittles">
              {{ $t('productdetail_categoria') }}
            </p>
          </div>
          <div
            v-if="categorias.length > 7"
            class="btn-scroll"
            @click="scrollCategories(1)"
          >
            <FlechaUp-icon class="btn-scroll-icon" />
          </div>
          <div class="categorys-list" id="swiper-slide-categories">
            <p class="txt-categorys" @click="clear">Todos los productos</p>
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
          <div
            class="btn-scroll"
            v-if="categorias.length > 7"
            @click="scrollCategories(2)"
          >
            <Flechadown-icon class="btn-scroll-icon" />
          </div>
          <div
            v-if="showSubCategory && selectedSubcategories.length"
            class="item-tittle"
          >
            <p class="txt-tittles">
              {{ $t('home_subcategory') }}
            </p>
          </div>
          <div
            v-if="selectedSubcategories.length > 7"
            class="btn-scroll"
            @click="scrollSubCategories(1)"
          >
            <FlechaUp-icon class="btn-scroll-icon" />
          </div>
          <div
            v-if="showSubCategory && selectedSubcategories.length"
            id="swiper-slide-Subcategories"
            class="subcategory-list"
          >
            <div
              v-for="(subcategorys, index) in selectedSubcategories"
              :key="index"
            >
              <div @click="SendSubCategory(subcategorys.id)">
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
          <div
            v-if="selectedSubcategories.length > 7"
            class="btn-scroll"
            @click="scrollSubCategories(2)"
          >
            <Flechadown-icon class="btn-scroll-icon" />
          </div>
        </div>
        <div
          v-for="(itemsTags, index) in allTags"
          v-show="allTags && allTags.length > 0"
          :key="index"
        >
          <div
            v-if="
              itemsTags &&
              itemsTags.status === 1 &&
              itemsTags.properties.length > 0
            "
          >
            <div class="txt-tittles">
              {{ itemsTags.name }}
            </div>
            <div class="categorys-list">
              <button
                v-for="itemsProperties in itemsTags.properties"
                v-show="itemsProperties.status === 1"
                :key="itemsProperties.id"
                class="txt-categorys"
                :class="
                  itemsProperties.name == etiqueta1
                    ? 'txt-categorys-active'
                    : '' || itemsProperties.name == etiqueta2
                    ? 'txt-categorys-active'
                    : ''
                "
                @click="
                  getProductsFilter(
                    'tag',
                    itemsProperties.id,
                    itemsProperties.name,
                    false
                  )
                "
              >
                {{ itemsProperties.name }}
              </button>
            </div>
          </div>
        </div>
        <div v-if="!stateShipping" class="content-category-left">
          <button class="item-tittle">
            <p class="txt-tittles">
              {{ $t('home_fenvio') }}
            </p>
          </button>
          <div class="categorys-list">
            <button
              class="txt-categorys"
              @click="getProductsFilter('ShippingFree')"
            >
              {{ $t('home_gratis') }}
            </button>
            <button
              class="txt-categorys"
              @click="getProductsFilter('NoShippingFree')"
            >
              {{ $t('home_Singratis') }}
            </button>
          </div>
        </div>
        <div class="content-category-left">
          <button class="item-tittle">
            <p class="txt-tittles">
              {{ $t('home_fprecio') }}
            </p>
          </button>
          <div class="categorys-list">
            <button
              class="txt-categorys"
              @click="getProductsFilter('higherNumber')"
            >
              {{ $t('home_fpreciom') }}
            </button>
            <button
              class="txt-categorys"
              @click="getProductsFilter('smallerNumber')"
            >
              {{ $t('home_fprecioM') }}
            </button>
          </div>
        </div>
      </div>
      <client-only>
        <div class="content-right">
          <div class="top-content">
            <div class="content-items-categorias">
              <div class="content-items-categorias-text">
                <p class="text-categorias" id="homeCate07" @click="clear">
                  {{ $t('home_catalogo') }}
                </p>
                <div
                  v-if="
                    etiqueta1 &&
                    nameCategoryHeader == '' &&
                    nameSubCategoryHeader == ''
                  "
                  class="flex flex-row justify-center"
                >
                  <span v-if="etiqueta1" class="separator-breadCrumbs">/ </span>
                  <p
                    v-if="etiqueta1"
                    id="stateCate07"
                    class="text-categorias-select"
                  >
                    {{ etiqueta1 }}
                  </p>
                </div>
                <div v-else class="flex flex-row justify-center">
                  <span v-if="nameCategoryHeader" class="separator-breadCrumbs"
                    >/
                  </span>
                  <p
                    v-if="nameCategoryHeader"
                    id="stateCate07"
                    class="text-categorias-select"
                    @click="breadcrumbsSendCategory(nameCategoryHeader)"
                  >
                    {{ nameCategoryHeader }}
                  </p>
                  <span
                    v-if="nameSubCategoryHeader"
                    class="separator-breadCrumbs"
                    >/
                  </span>
                  <p
                    v-if="nameSubCategoryHeader"
                    id="stateSubCate"
                    class="text-categorias-select"
                  >
                    {{ nameSubCategoryHeader }}
                  </p>
                  <span v-if="etiqueta1" class="separator-breadCrumbs">/ </span>
                  <p
                    v-if="etiqueta1"
                    id="stateSubCate"
                    class="text-categorias-select"
                  >
                    {{ etiqueta1 }}
                  </p>
                  <span v-if="etiqueta2" class="separator-breadCrumbs">/ </span>
                  <p
                    v-if="etiqueta2"
                    id="stateSubCate"
                    class="text-categorias-select"
                  >
                    {{ etiqueta2 }}
                  </p>
                </div>
              </div>
              <div class="items-end">
                <div class="show-view-per-list">
                  <button class="show">
                    <svg
                      id="list-view"
                      class="show-icon"
                      :class="indexShowList == 1 ? 'show-icon-active' : ''"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      enable-background="new 0 0 18 18"
                      xml:space="preserve"
                      @click="showList"
                    >
                      <rect width="18" height="2"></rect>
                      <rect y="16" width="18" height="2"></rect>
                      <rect y="8" width="18" height="2"></rect>
                    </svg>
                  </button>
                  <button class="show">
                    <svg
                      id="Layer_1"
                      class="show-icon"
                      :class="indexShowList == 2 ? 'show-icon-active' : ''"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="19px"
                      height="19px"
                      viewBox="0 0 19 19"
                      enable-background="new 0 0 19 19"
                      xml:space="preserve"
                      @click="showGrid2"
                    >
                      <path d="M7,2v5H2V2H7 M9,0H0v9h9V0L9,0z"></path>
                      <path d="M17,2v5h-5V2H17 M19,0h-9v9h9V0L19,0z"></path>
                      <path d="M7,12v5H2v-5H7 M9,10H0v9h9V10L9,10z"></path>
                      <path
                        d="M17,12v5h-5v-5H17 M19,10h-9v9h9V10L19,10z"
                      ></path>
                    </svg>
                  </button>
                  <button class="show">
                    <svg
                      id="Layer_2"
                      :class="indexShowList == 3 ? 'show-icon-active' : ''"
                      class="show-icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="19px"
                      height="19px"
                      viewBox="0 0 19 19"
                      enable-background="new 0 0 19 19"
                      xml:space="preserve"
                      @click="showGrid3"
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
                      id="Layer_3"
                      :class="indexShowList == 4 ? 'show-icon-active' : ''"
                      class="show-icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="19px"
                      height="19px"
                      viewBox="0 0 19 19"
                      enable-background="new 0 0 19 19"
                      xml:space="preserve"
                      @click="showGrid4"
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
                <div class="product-content-items" id="grid-selection">
                  <div
                    v-for="product in filterProduct"
                    :key="product.id"
                    class="content-products"
                  >
                    <KoProductCardFilter
                      v-if="!showInList"
                      :product="product"
                      class="product-nolist"
                      :setting-general="settingByTemplate7[0].settingGeneral"
                      :settingKProductCard="settingByTemplate7[0].card"
                    />
                    <KoProductCardFilerList
                      v-if="showInList"
                      :product="product"
                    />
                  </div>
                </div>
                <div
                  v-if="fullProducts.length == 0"
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
                  <div
                    class="product_pagination"
                    v-if="fullProducts.length > numVistas"
                  >
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="fullProducts.length"
                      :page-size="numVistas"
                      :current-page.sync="currentPage"
                      class="pagination"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import KoProductCardFilter from './_productcard/ProductCard'
import KoProductCardFilerList from './_productcard/ProductCardFilterList'
import filterProducts from '../../mixins/filterProducts'
export default {
  name: 'K07ProductListFilter',
  components: {
    KoProductCardFilter,
    KoProductCardFilerList,
  },
  mixins: [filterProducts],
  props: {
    dataStore: Object,
    fullProducts: {},
    settingByTemplate7: Array,
    allTags: Array,
  },
  data() {
    return {
      showInList: false,
      showSubCategory: false,
      stateSub: false,
      search: '',
      currentPage: 1,
      show: false,
      value: '',
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      indexSelect: '',
      indexSelect2: '',
      indexShowList: 4,
      numVistas: 16,
      stateShipping: false,
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
    etiqueta1() {
      return this.$store.state.products.payloadTagName
    },
    etiqueta2() {
      return this.$store.state.products.payloadTag2Name
    },
  },
  watch: {
    settingByTemplate7() {
      if (
        this.settingByTemplate7[0] &&
        this.settingByTemplate7[0].productListFilter &&
        this.settingByTemplate7[0].productListFilter.img_background
      ) {
        this.setBg(1)
      } else {
        this.setBg(2)
      }
    },
    search(value) {
      this.SearchProduct2(value)
    },
    currentPage() {
      this.$store.commit('SET_PREVIOUS_PAGE', this.currentPage)
      let timerTimeout = null
      timerTimeout = setTimeout(() => {
        timerTimeout = null
        window.scrollBy(0, -2500)
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
      this.getQuery()
    },
    searchValue(value) {
      this.SearchProduct2(value)
    },
  },
  mounted() {
    this.setOptionShipping()
    if (
      this.settingByTemplate7[0] &&
      this.settingByTemplate7[0].productListFilter &&
      this.settingByTemplate7[0].productListFilter.img_background
    ) {
      this.setBg(1)
    } else {
      this.setBg(2)
    }
    this.getQuery()
    if (this.previousPage) {
      this.currentPage = this.previousPage
    }
  },
  methods: {
    getQuery() {
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
      } else if (this.$route.query && this.$route.query.search) {
        this.SearchProduct(decodeURIComponent(this.$route.query.search))
      } else if (this.$route.fullPath == '/') {
        this.allCategories()
      }
    },
    setOptionShipping() {
      if (this.dataStore && this.dataStore.medios_envio) {
        let shipping = JSON.parse(this.dataStore.medios_envio.valores)
        switch (shipping.envio_metodo) {
          case 'sintarifa':
            this.stateShipping = false
            break
          case 'gratis':
            this.stateShipping = true
            break
          case 'tarifa_plana':
            this.stateShipping = false
            break
          case 'precio':
            this.stateShipping = false
            break
          case 'precio_ciudad':
            this.stateShipping = false
            break
          case 'peso':
            this.stateShipping = false
            break
          default:
        }
      }
    },
    showList() {
      this.indexShowList = 1
      this.showInList = true
      var gridSelector = document.getElementById('grid-selection')
      if (gridSelector) {
        gridSelector.setAttribute(
          'style',
          'grid-template-columns: repeat(1, minmax(0, 1fr))'
        )
      }
    },
    showGrid2() {
      this.indexShowList = 2
      this.showInList = false
      var gridSelector = document.getElementById('grid-selection')
      if (gridSelector) {
        gridSelector.setAttribute(
          'style',
          'grid-template-columns: repeat(2, minmax(0, 1fr))'
        )
      }
    },
    showGrid3() {
      this.indexShowList = 3
      this.showInList = false
      var gridSelector = document.getElementById('grid-selection')
      if (gridSelector) {
        gridSelector.setAttribute(
          'style',
          'grid-template-columns: repeat(3, minmax(0, 1fr))'
        )
      }
    },
    showGrid4() {
      this.indexShowList = 4
      this.showInList = false
      var dimension = screen.width
      var gridSelector = document.getElementById('grid-selection')
      if (gridSelector) {
        gridSelector.setAttribute(
          'style',
          'grid-template-columns: repeat(4, minmax(0, 1fr))'
        )
        if (gridSelector && dimension < 768) {
          gridSelector.setAttribute(
            'style',
            'grid-template-columns: repeat(2, minmax(0, 1fr))'
          )
        }
      }
    },
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
      this.$store.commit('products/SET_PAYLOAD_TAG', '')
      this.$store.commit('products/SET_PAYLOAD_TAG2', '')
      this.stateSub = false
      var stateCategory = document.getElementById('stateCate07')
      if (!this.stateSub && stateCategory) {
        stateCategory.style.color = '#8e8e8e'
        stateCategory.style.fontWeight = '100'
      }
      this.indexSelect2 = value
      this.selectSubcategory = value
      let filtradoSubCategory = this.subcategories.find(
        (element) => element.id == value
      )
      let filtradoCategories = this.categorias.find(
        (element) => element.id == filtradoSubCategory.categoria
      )
      this.$store.commit(
        'SET_CATEGORY_PRODUCTO',
        filtradoCategories.nombre_categoria_producto
      )
      this.nameSubCategory = filtradoSubCategory.nombre_subcategoria
      this.$router.push({
        path: '',
        query: {
          subcategory: `${this.nameSubCategory}^${filtradoCategories.id}`,
        },
      })
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', this.nameSubCategory)
      this.$store.commit('products/FILTER_BY', {
        type: ['subcategory'],
        data: value,
      })
    },
    sendCategory(value, categoria, index, ref) {
      this.indexSelect = categoria
      this.currentPage = 1
      this.stateSub = true
      var stateCategory = document.getElementById('stateCate07')
      var catalogo = document.getElementById('homeCate07')
      if (catalogo) {
        catalogo.style.color = '#8e8e8e'
        catalogo.style.fontWeight = '100'
      }
      if (this.stateSub && stateCategory) {
        stateCategory.style.color = '#333333'
        stateCategory.style.fontWeight = '600'
      }
      this.nameCategory = value.nombre_categoria_producto
      this.nameSubCategory = ''
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory)
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.$store.commit('products/SET_PAYLOAD_TAG', '')
      this.$store.commit('products/SET_PAYLOAD_TAG2', '')
      this.$router.push({
        path: '',
        query: { category: this.nameCategory },
      })
      this.selectedSubcategories = []
      this.subcategories.find((subcategory) => {
        if (subcategory.categoria === categoria) {
          this.selectedSubcategories.push(subcategory)
        }
      })
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto,
      })
    },
    breadcrumbsSendCategory(value) {
      this.stateSub = true
      var stateCategory = document.getElementById('stateCate07')
      var catalogo = document.getElementById('homeCate07')
      if (this.stateSub && stateCategory) {
        catalogo.style.color = '#8e8e8e'
        catalogo.style.fontWeight = '100'
        stateCategory.style.color = '#333333'
        stateCategory.style.fontWeight = '600'
      }
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
      var catalogo = document.getElementById('homeCate07')
      if (catalogo) {
        catalogo.style.color = '#333333'
        catalogo.style.fontWeight = '600'
      }
      this.showSubCategory = false
      this.selectedSubcategories = []
      this.indexSelect = ''
      this.indexSelect2 = ''
      this.$router.push({
        path: '',
        query: {},
      })
      this.$store.commit('SET_CATEGORY_PRODUCTO', '')
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: '',
      })
      this.$emit('clear')
      this.nameCategory = ''
    },
    setBg(value) {
      if (this.settingByTemplate7) {
        if (!this.mobileCheck()) {
          var imagen = document.getElementById('BgProductlistF')
          if (value == 1) {
            if (this.settingByTemplate7[0].productListFilter.url_img) {
              imagen.style.backgroundImage = `url(${this.settingByTemplate7[0].productListFilter.url_img})`
            } else {
              imagen.style.backgroundImage = `url(https://res.cloudinary.com/brahyanr10/image/upload/v1611623008/Komercia/Shop/flowers-shoppage_jwuds4.jpg)`
            }
          } else if (value == 2) {
            imagen.style.backgroundImage = ''
          }
        }
      }
    },
    mobileCheck() {
      window.mobilecheck = function () {
        var check = false
        ;(function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            check = true
        })(navigator.userAgent || navigator.vendor || window.opera)
        return check
      }
      return window.mobilecheck()
    },
    scrollCategories(value) {
      if (value == 1) {
        document.getElementById('swiper-slide-categories').scrollTop -= 300
      } else if (value == 2) {
        document.getElementById('swiper-slide-categories').scrollTop += 300
      }
    },
    scrollSubCategories(value) {
      if (value == 1) {
        document.getElementById('swiper-slide-Subcategories').scrollTop -= 300
      } else if (value == 2) {
        document.getElementById('swiper-slide-Subcategories').scrollTop += 300
      }
    },
  },
}
</script>

<style scoped>
.btn-scroll {
  @apply w-full flex justify-center items-center cursor-pointer;
}
.btn-scroll-icon {
  font-size: 20px;
  color: var(--color_text);
  bottom: 0.125em;
  @apply w-full flex justify-center items-center;
}
.btn-scroll-icon:hover {
  color: var(--hover_text);
}
.product-content {
  @apply flex flex-col justify-center items-center w-full pb-80;
  background: var(--background_color_2);
}
.content-banner-shop {
  background: var(--background_color_1);
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
  @apply w-full flex justify-start items-center py-20;
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
#stateCate07 {
  /* width: 100%; */
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
  overflow-y: auto;
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
.product-content-items {
  @apply flex flex-col justify-start items-start text-center w-full;
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
.product-content-items {
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
  height: 100%;
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
  .product-content-items {
    @apply grid grid-cols-3;
  }
  #grid-selection {
    @apply grid grid-cols-4;
  }
}
@screen lg {
  .product-text {
    @apply w-full;
  }
  .product-content-items {
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
  #stateCate07 {
    margin-bottom: 20px;
  }
}
@media (min-width: 1192px) {
  .content-shop-items {
    width: 1192px;
  }
}
</style>
