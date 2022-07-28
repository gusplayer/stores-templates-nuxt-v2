<template>
  <div
    class="product-content"
    :style="[
      settingByTemplate9[0].setting9General,
      settingByTemplate9[0].productListFilter,
    ]"
  >
    <div
      class="content-banner-shop"
      :style="[
        {
          '--font-style-1':
            this.settingByTemplate9[0].setting9General &&
            this.settingByTemplate9[0].setting9General.fount_1
              ? this.settingByTemplate9[0].setting9General.fount_1
              : 'Poppins',
        },
        {
          '--font-style-2':
            this.settingByTemplate9[0].setting9General &&
            this.settingByTemplate9[0].setting9General.fount_2
              ? this.settingByTemplate9[0].setting9General.fount_2
              : 'Roboto',
        },
      ]"
    >
      <div class="crumb">
        <nuxt-link to="/">
          <p
            class="txt-crumb s1"
            :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
          >
            {{ $t('header_inicio') }}
          </p>
        </nuxt-link>
        <p
          class="txt-crumb"
          :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
        >
          /
        </p>
        <p
          class="txt-crumb s2"
          @click="clear"
          :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
        >
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
    <div
      class="content-shop-items"
      :style="[
        {
          '--font-style-1':
            this.settingByTemplate9[0].setting9General &&
            this.settingByTemplate9[0].setting9General.fount_1
              ? this.settingByTemplate9[0].setting9General.fount_1
              : 'Poppins',
        },
        {
          '--font-style-2':
            this.settingByTemplate9[0].setting9General &&
            this.settingByTemplate9[0].setting9General.fount_2
              ? this.settingByTemplate9[0].setting9General.fount_2
              : 'Roboto',
        },
      ]"
    >
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
                      itemsProperties.name
                    )
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
        <div class="content-banner-shop-r">
          <div class="crumb">
            <nuxt-link to="/">
              <p
                class="txt-crumb s1"
                :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
              >
                {{ $t('header_inicio') }}
              </p>
            </nuxt-link>
            <p
              class="txt-crumb"
              :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
            >
              /
            </p>
            <p
              class="txt-crumb s2"
              @click="clear"
              :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
            >
              {{ $t('header_productos') }}
            </p>
            <div
              class="flex flex-row justify-center items-center"
              v-if="
                this.etiqueta1 &&
                this.nameCategoryHeader == '' &&
                this.nameSubCategoryHeader == ''
              "
            >
              <p
                class="txt-crumb"
                :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
              >
                /
              </p>
              <p
                class="txt-crumb s2"
                :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
              >
                {{ this.etiqueta1 }}
              </p>
            </div>
            <div class="flex flex-row justify-center items-center" v-else>
              <p
                class="txt-crumb"
                :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
                v-if="this.nameCategoryHeader"
              >
                /
              </p>
              <p
                class="txt-crumb s2"
                :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
                v-if="this.nameCategoryHeader"
              >
                {{ this.nameCategoryHeader }}
              </p>
              <p
                class="txt-crumb"
                :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
                v-if="this.nameSubCategoryHeader"
              >
                /
              </p>
              <p
                class="txt-crumb s2"
                :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
                v-if="this.nameSubCategoryHeader"
              >
                {{ this.nameSubCategoryHeader }}
              </p>
              <p
                class="txt-crumb"
                :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
                v-if="this.etiqueta1"
              >
                /
              </p>
              <p
                class="txt-crumb s2"
                :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
                v-if="this.etiqueta1"
              >
                {{ this.etiqueta1 }}
              </p>
              <p
                class="txt-crumb"
                :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
                v-if="this.etiqueta2"
              >
                /
              </p>
              <p
                class="txt-crumb s2"
                :style="`color: ${settingByTemplate9[0].productListFilter.breadcrumbs};`"
                v-if="this.etiqueta2"
              >
                {{ this.etiqueta2 }}
              </p>
            </div>
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
            <div class="items-end">
              <div class="show-view-per-list">
                <button class="show">
                  <svg
                    @click="showGrid3"
                    class="show-icon"
                    :class="indexShowList == 3 ? 'show-icon-active' : ''"
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
                    :class="indexShowList == 1 ? 'show-icon-active' : ''"
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
                    :settingGeneral="settingByTemplate9[0].setting9General"
                    :productListCard="settingByTemplate9[0].cardProduct"
                    :product="product"
                    v-if="!showInList"
                    class="product-nolist"
                  ></KoProdcutCardFilter>
                  <KoProdcutCardFilerList
                    :settingGeneral="settingByTemplate9[0].setting9General"
                    :productListCard="settingByTemplate9[0].cardProduct"
                    :product="product"
                    v-if="showInList"
                  ></KoProdcutCardFilerList>
                </div>
              </div>
              <div
                v-if="this.fullProducts.length == 0"
                class="content-products-empty"
              >
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
</template>

<script>
import KoProdcutCardFilter from './_productcard/ProductCard'
import KoProdcutCardFilerList from './_productcard/ProductCardFilterList'
import filterProducts from '../../mixins/filterProducts'
export default {
  components: {
    KoProdcutCardFilter,
    KoProdcutCardFilerList,
  },
  props: {
    dataStore: Object,
    fullProducts: {},
    settingByTemplate9: Array,
    allTags: Array,
  },
  mixins: [filterProducts],
  name: 'Ko-ProductList-Filter',
  mounted() {
    this.setOptionShipping()
    if (this.$route.query && this.$route.query.category) {
      this.sendCategoryUrlMix(this.$route.query.category)
    } else if (this.$route.query && this.$route.query.subcategory) {
      this.SendSubCategoryUrlMix(
        this.$route.query.subcategory,
        this.categorias,
        this.subcategories
      )
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
      numVistas: 18,
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
      const initial = this.currentPage * 18 - 18
      const final = initial + 18
      return this.fullProducts
        .filter((product) => product.categoria == this.select)
        .slice(initial, final)
    },
    filterProduct() {
      const initial = this.currentPage * 18 - 18
      const final = initial + 18
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
      var catalogo = document.getElementById('homeCate')
      if (catalogo) {
        catalogo.style.color = '#8e8e8e'
        catalogo.style.fontWeight = '100'
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
      var catalogo = document.getElementById('homeCate')
      if (this.stateSub == true) {
        catalogo.style.color = '#8e8e8e'
        catalogo.style.fontWeight = '100'
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
      this.$store.commit('SET_CATEGORY_PRODUCTO', '')
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: '',
      })
      this.$emit('clear')
      this.nameCategory = ''
      this.showSubCategory = false
      this.selectedSubcategories = []
    },
    handleChange(val) {
      // console.log(val);
    },
  },
  watch: {
    search(value) {
      this.SearchProduct(value)
    },
    currentPage() {
      this.$store.commit('SET_PREVIOUS_PAGE', this.currentPage)
      let timerTimeout = null
      timerTimeout = setTimeout(() => {
        timerTimeout = null
        window.scrollBy(0, -4500)
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
.product-content {
  background: var(--background_color_1);
  padding-top: 20px;
  @apply flex flex-col justify-center items-center w-full pb-40;
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
.content-left >>> .el-collapse {
  border-top: 1px solid var(--color_icon);
  border-bottom: 1px solid var(--color_icon);
  @apply w-full;
}
.content-left >>> .el-collapse-item__wrap {
  will-change: height;
  background-color: transparent;
  border-bottom: 1px solid var(--color_icon);
  margin-left: 10px;
}
.content-left >>> .el-collapse-item__header {
  color: var(--color_text);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0;
  transition: all 0.25s ease;
  font-family: var(--font-style-1);
  cursor: pointer;
}
.content-left >>> .el-collapse-item__header.is-active {
  border-bottom: none;
}
.content-left >>> .el-collapse-item__arrow {
  color: var(--color_icon);
}
.input-slide {
  color: var(--color_subtext);
  font-family: var(--font-style-1) !important;
  @apply w-full cursor-pointer border-none;
  height: 30px;
  /* border-bottom: 2px solid #2c2930; */
}
.txt-tittles {
  color: var(--color_text);
  @apply w-full flex justify-start items-center;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0px;
  transition: all 0.25s ease;
  /* font-family: 'Poppins', Helvetica, Arial, sans-serif !important; */
  font-family: var(--font-style-1);
  cursor: pointer;
}
.content-items-categorias {
  @apply w-full flex flex-row justify-between items-center;
}
.content-items-categorias-text {
  @apply w-full flex flex-row;
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
.txt-categorys {
  color: var(--color_subtext);
  @apply w-full flex flex-row justify-start items-center pr-1;
  font-size: 15px;
  line-height: 1.3;
  font-weight: 400;
  /* font-family: 'Roboto', Helvetica, Arial, sans-serif !important ; */
  font-family: var(--font-style-2);
  transition: all 0.25s ease;
  cursor: pointer;
}
.txt-categorys-active {
  color: #000;
  @apply w-full flex flex-row justify-start items-center pr-1;
  font-size: 14px;
  transition: all 0.25s ease;
  cursor: pointer;
  font-weight: bold;
}
.show-view-per-list {
  @apply w-auto justify-center items-center;
}
.show {
  @apply w-full cursor-pointer mt-16;
}
.show-icon {
  fill: var(--color_icon);
  @apply p-12;
}
.show-icon-active {
  fill: var(--color_text);
  /* background-color: #f8f8f8; */
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
  color: var(--color_text);
  /* font-family: 'Poppins', sans-serif; */
  font-family: var(--font-style-1);
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
.product-description {
  @apply justify-center items-center text-center gap-4;
}

.product-conten-items {
  @apply gap-4;
}
.producto-items-content {
  @apply w-full;
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
  border-bottom: 0.5px solid var(--color_icon);
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
}
.content-products-empty {
  width: 100%;
  min-height: 250px;
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
  /* font-family: 'David Libre' !important; */
  font-family: var(--font-style-2);
}
.pagination-medium {
  margin-top: 50px;
  background: transparent;
}
.pagination {
  font-size: 18px;
  color: var(--pagination_color);
  background: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next {
  color: var(--pagination_color);
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-prev {
  color: var(--pagination_color);
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .el-pager li {
  color: var(--pagination_color);
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next:hover {
  color: var(--color_icon);
}
.product_pagination >>> .el-pagination.is-background .btn-prev:hover {
  color: var(--color_icon);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: var(--color_icon);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: var(--color_icon);
  color: white;
}
.crumb {
  @apply w-full flex flex-row justify-start items-start;
}
.txt-crumb {
  font-family: Arial, sans-serif;
  font-size: 12px;
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
.content-left {
  position: sticky;
  top: 130px;
  transition: all 0.25s ease;
}
.content-home {
  @apply w-full flex flex-col justify-start items-start;
}
.txt-content-home {
  color: var(--color_text);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0;
  transition: all 0.25s ease;
  font-family: var(--font-style-1);
  cursor: pointer;
}
.txt-content-home:hover {
  color: #000;
}
@screen sm {
  .product-conten-items {
    @apply w-full grid grid-cols-2;
  }
  .btn-tittle-shop {
    font-size: 36px;
  }
  .content-shop-items {
    @apply w-9/5 flex flex-row justify-start items-start;
  }
  .content-left {
    display: none;
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
  .content-banner-shop {
    @apply justify-start items-start my-32;
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
    border-bottom: 1px solid var(--color_icon);
    padding-top: 0px;
    padding-bottom: 5px;
  }
  .content-left {
    @apply mr-20 flex flex-col justify-between items-start;
    width: 250px;
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
@screen mlg {
  .content-left {
    @apply mr-20;
    width: 250px;
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
