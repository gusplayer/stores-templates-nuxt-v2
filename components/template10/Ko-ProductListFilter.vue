<template>
  <div
    class="product-content"
    :style="[
      settingByTemplate10[0].setting10General,
      settingByTemplate10[0].productListFilter,
      {
        '--font-style-1':
          this.settingByTemplate10[0].setting10General &&
          this.settingByTemplate10[0].setting10General.fount_1
            ? this.settingByTemplate10[0].setting10General.fount_1
            : 'Roboto',
      },
    ]"
  >
    <div class="bannerProduct" id="BgProductlistF">
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
              {{ $t('header_buscar_limpiar') }}
            </p>
          </nuxt-link>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item :title="$t('header_buscar_producto')" name="1">
              <input
                class="input-slide"
                type="search"
                v-model="search"
                :placeholder="$t('header_search')"
              />
            </el-collapse-item>
            <el-collapse-item
              :title="$t('productdetail_categoria')"
              name="2"
              v-show="categorias.length > 0"
            >
              <div class="categorys-list">
                <div
                  v-for="(categorys, index) in categorias"
                  :key="index"
                  @click="showSubCategory = true"
                >
                  <div
                    @click="
                      sendCategory(categorys, categorys.id, (ref = false))
                    "
                  >
                    <p
                      class="txt-categorys"
                      :class="
                        categorys.id == indexSelect
                          ? 'txt-categorys-active'
                          : ''
                      "
                    >
                      <span
                        class="rounded-list"
                        :class="
                          categorys.id == indexSelect
                            ? 'txt-rounded-list-active'
                            : ''
                        "
                      ></span>
                      {{ categorys.nombre_categoria_producto }}
                    </p>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item
              :title="$t('home_subcategory')"
              name="3"
              v-show="showSubCategory && selectedSubcategories.length"
            >
              <div
                class="subcategory-list"
                v-show="showSubCategory && selectedSubcategories.length"
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
                      <span
                        class="rounded-list"
                        :class="
                          subcategorys.id == indexSelect2
                            ? 'txt-rounded-list-active'
                            : ''
                        "
                      ></span>
                      {{ subcategorys.nombre_subcategoria }}
                    </p>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <div
              v-for="(itemsTags, index) in allTags"
              :key="index"
              v-show="allTags && allTags.length > 0"
            >
              <el-collapse-item
                :title="itemsTags.name"
                :name="6 + index"
                v-if="
                  itemsTags &&
                  itemsTags.status === 1 &&
                  itemsTags.properties.length > 0
                "
              >
                <div class="categorys-list">
                  <button
                    class="txt-Filter"
                    v-for="itemsProperties in itemsTags.properties"
                    :key="itemsProperties.id"
                    v-show="itemsProperties.status === 1"
                    @click="
                      getProductsFilter(
                        'tag',
                        itemsProperties.id,
                        itemsProperties.name,
                        false
                      )
                    "
                    :class="
                      itemsProperties.name == etiqueta1
                        ? 'txt-categorys-active'
                        : '' || itemsProperties.name == etiqueta2
                        ? 'txt-categorys-active'
                        : ''
                    "
                  >
                    {{ itemsProperties.name }}
                  </button>
                </div>
              </el-collapse-item>
            </div>
            <el-collapse-item
              :title="$t('home_fenvio')"
              name="4"
              v-show="stateShipping == false"
            >
              <div class="categorys-list">
                <button
                  class="txt-Filter"
                  @click="getProductsFilter('ShippingFree')"
                >
                  {{ $t('home_gratis') }}
                </button>
                <button
                  class="txt-Filter"
                  @click="getProductsFilter('NoShippingFree')"
                >
                  {{ $t('home_Singratis') }}
                </button>
              </div>
            </el-collapse-item>
            <el-collapse-item :title="$t('home_fprecio')" name="5">
              <div class="categorys-list">
                <button
                  class="txt-Filter"
                  @click="getProductsFilter('higherNumber')"
                >
                  {{ $t('home_fpreciom') }}
                </button>
                <button
                  class="txt-Filter"
                  @click="getProductsFilter('smallerNumber')"
                >
                  {{ $t('home_fprecioM') }}
                </button>
              </div>
            </el-collapse-item>
          </el-collapse>
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
              <div class="flex flex-col justify-start" v-else>
                <p class="btn-tittle-shop">
                  {{ this.nameCategoryHeader }}
                </p>
                <!-- v-if="selectSubcategory" -->
                <div class="flex flex-row">
                  <p class="text-12 mr-4" v-if="this.nameSubCategoryHeader">
                    {{ this.nameSubCategoryHeader }}
                  </p>
                  <p
                    class="text-12 mr-4"
                    v-if="this.nameSubCategoryHeader && this.etiqueta1"
                  >
                    /
                  </p>
                  <p class="text-12" v-if="this.etiqueta1">
                    {{ this.etiqueta1 }}
                  </p>
                  <p class="ml-4 text-12" v-if="this.etiqueta2">
                    / {{ this.etiqueta2 }}
                  </p>
                </div>
              </div>
              <div
                class="flex flex-col justify-start"
                v-if="
                  this.etiqueta1 &&
                  this.nameCategoryHeader == '' &&
                  this.nameSubCategoryHeader == ''
                "
              >
                <p class="text-12" v-if="this.etiqueta1">
                  {{ this.etiqueta1 }}
                </p>
              </div>
            </div>
          </div>
          <div class="top-content">
            <div class="content-items-categorias">
              <div class="items-end">
                <!-- <div class="show-number-items">
                <p class="product-stock">
                  {{ $t('home_mostrar') }}
                  <span class="separator-breadCrumbs">/</span>
                  {{ fullProducts.length }}
                  <span class="separator-breadCrumbs">/</span>
                </p>
              </div> -->

                <!-- Grilla de 3 o 1 -->
                <div class="show-view-per-list">
                  <button class="show">
                    <svg
                      @click="showGrid3"
                      class="show-icon"
                      :class="indexShowList == 3 ? 'show-icon-active' : ''"
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
                      :class="indexShowList == 1 ? 'show-icon-active' : ''"
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
                    class="content-products"
                  >
                    <KoProdcutCardFilter
                      :product="product"
                      v-if="!showInList"
                      class="product-list"
                      :cardProduct="settingByTemplate10[0].cardProduct"
                      :settingGeneral="settingByTemplate10[0].setting10General"
                    ></KoProdcutCardFilter>
                    <KoProdcutCardFilerList
                      :product="product"
                      v-if="showInList"
                      class="product-list"
                      :cardProduct="settingByTemplate10[0].cardProduct"
                      :settingGeneral="settingByTemplate10[0].setting10General"
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
                    v-if="fullProducts.length > this.numVistas"
                  >
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="fullProducts.length"
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
import filterProducts from '../../mixins/filterProducts'
export default {
  components: {
    // KoSocialNet,
    KoProdcutCardFilter,
    KoProdcutCardFilerList,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    settingByTemplate10: Array,
    allTags: Array,
  },
  mixins: [filterProducts],
  name: 'Ko-ProductList-Filter',
  mounted() {
    this.setOptionShipping()
    if (
      this.settingByTemplate10[0] &&
      this.settingByTemplate10[0].productListFilter &&
      this.settingByTemplate10[0].productListFilter.visible_bg == true
    ) {
      this.setBg(1)
    } else {
      this.setBg(2)
    }
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
      showInList: false,
      showSubCategory: false,
      stateSub: false,
      search: '',
      currentPage: 1,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexSelect: '',
      indexSelect2: '',
      indexShowList: 3,
      indexShowView: 3,
      numVistas: 15,
      stateShipping: false,
      activeNames: ['1', '2', '3', '4', '5'],
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
      const initial = this.currentPage * 15 - 15
      const final = initial + 15
      return this.fullProducts
        .filter((product) => product.categoria == this.select)
        .slice(initial, final)
    },
    filterProduct() {
      const initial = this.currentPage * 15 - 15
      const final = initial + 15
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
  methods: {
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
    setBg(value) {
      var imagen = document.getElementById('BgProductlistF')
      if (value == 1) {
        if (this.settingByTemplate10[0].productListFilter.url_img_bg) {
          imagen.style.backgroundImage = `url(${this.settingByTemplate10[0].productListFilter.url_img_bg})`
        } else {
          imagen.style.backgroundImage = `url(https://res.cloudinary.com/brahyanr10/image/upload/v1614233821/Temp10/Productos/bg-beagrumb_gxvk1i.jpg)`
        }
      } else if (value == 2) {
        imagen.style.backgroundImage = ''
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
    SendSubCategory(value) {
      this.$store.commit('products/SET_PAYLOAD_TAG', '')
      this.$store.commit('products/SET_PAYLOAD_TAG2', '')
      this.stateSub = false
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
      this.stateSub = true
      this.indexSelect = categoria
      this.currentPage = 1
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
      this.stateSub = true
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
      this.showSubCategory = false
      this.selectedSubcategories = []
      this.nameCategory = ''
    },
    handleChange(val) {
      // console.log(val);
    },
  },
  watch: {
    settingByTemplate10() {
      if (
        this.settingByTemplate10[0] &&
        this.settingByTemplate10[0].productListFilter &&
        this.settingByTemplate10[0].productListFilter.visible_bg == true
      ) {
        this.setBg(1)
      } else {
        this.setBg(2)
      }
    },
    search(value) {
      this.SearchProduct(value)
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
    searchValue(value) {
      this.SearchProduct(value)
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
.content-banner-shop-r {
  @apply w-full flex flex-col justify-start items-start;
}
.content-input-slide {
  @apply w-full flex flex-col justify-center items-center;
}
.content-left >>> .el-collapse {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  @apply w-full;
}
.content-left >>> .el-collapse-item__wrap {
  will-change: height;
  background-color: transparent;
  border-bottom: 1px solid var(--border);
  margin-left: 10px;
}
.content-left >>> .el-collapse-item__header {
  font-size: 16px;
  font-family: var(--font-style-1) !important;
  color: var(--color_text);
  background-color: transparent;
  border-bottom: 1px solid var(--border);
  text-transform: uppercase;
  @apply font-semibold;
}
.content-left >>> .el-collapse-item__header.is-active {
  border-bottom: none;
}
.content-left >>> .el-collapse-item__arrow {
  color: var(--color_icon);
}
.input-slide {
  font-family: var(--font-style-1) !important;
  @apply w-full h-30 cursor-pointer border-none;
  background: transparent;
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
.txt-Filter {
  color: var(--color_subtext);
  font-size: 15px;
  line-height: 1.3;
  font-family: var(--font-style-1) !important;
  @apply w-full flex flex-row justify-start items-center font-normal cursor-pointer pr-1 transition-all ease-in duration-0.2;
}
.txt-Filter:hover {
  color: #eb7025;
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
  color: var(--color_icon);
  font-size: 14px;
  @apply w-full flex flex-row justify-start items-center pr-1 transition-all ease-in duration-0.2 font-semibold cursor-pointer;
}
.txt-categorys:hover .rounded-list {
  background-color: var(--color_icon);
  @apply transition-all ease-in duration-0.2;
}
.rounded-list {
  background-color: #e5e5e5;
  @apply w-10 h-10 rounded-full mr-10 transition-all ease-in duration-0.2;
}
.txt-rounded-list-active {
  background-color: var(--color_icon);
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
  fill: var(--color_icon);
  @apply p-3;
}
.show-icon-active {
  fill: var(--breadCrumbs);
  background-color: var(--background_color_1);
}
.show-icon:hover {
  fill: #eb7025;
  background-color: var(--background_color_1);
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
  /* border-bottom: 0.5px solid var(--border); */
  @apply w-full h-full flex flex-col justify-center items-center;
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
  color: var(--pagination_Color);
  background: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next {
  color: var(--pagination_Color);
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-prev {
  color: var(--pagination_Color);
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .el-pager li {
  color: var(--pagination_Color);
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next:hover {
  color: var(--pagination_Color);
}
.product_pagination >>> .el-pagination.is-background .btn-prev:hover {
  color: var(--pagination_Color);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: var(--pagination_Color);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: var(--pagination_Color);
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
  color: #eb7025;
  transition: all 0.25s ease;
}
.s2:hover {
  color: #eb7025;
  transition: all 0.25s ease;
}
.product-list {
  @apply w-full h-full;
}
.product-list:hover {
  @apply shadow-lg;
}

@screen sm {
  .product-conten-items {
    @apply w-full grid grid-cols-1;
  }
  .btn-tittle-shop {
    font-size: 36px;
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
  .content-banner-shop-r {
    @apply mb-10;
  }
  .bannerProduct {
    @apply hidden;
  }
  .product-content {
    margin-top: 20px;
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
    color: #eb7025;
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
  .bannerProduct {
    height: 220px;
    background-color: var(--background_color_2);
    @apply w-full flex bg-cover bg-center bg-no-repeat justify-items-center items-center;
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
    width: 400px;
    @apply mr-10 flex flex-col justify-between items-start;
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
@media (max-width: 440px) {
  .btn-tittle-shop {
    font-size: 22px;
  }
}
</style>
