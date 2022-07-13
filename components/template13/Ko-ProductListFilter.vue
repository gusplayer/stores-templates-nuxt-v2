<template>
  <div
    class="product-content"
    :style="[
      settingByTemplate13[0].setting13General,
      settingByTemplate13[0].productListFilter,
    ]"
    v-if="settingByTemplate13"
  >
    <div
      class="container-product-max-w"
      :style="[
        {
          '--font-style-1':
            this.settingByTemplate13[0].setting13General &&
            this.settingByTemplate13[0].setting13General.fount_1
              ? this.settingByTemplate13[0].setting13General.fount_1
              : 'Poppins',
        },
      ]"
    >
      <div class="content-shop-items">
        <div class="content-left">
          <nuxt-link class="content-home" to="/productos">
            <p class="txt-content-home" @click="clear">
              {{ $t('header_inicio') }}
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
            </el-collapse-item>
            <el-collapse-item
              :title="$t('home_fenvio')"
              name="4"
              v-show="stateShipping == false"
            >
              <div class="categorys-list">
                <button class="txt-Filter" @click="getProductsShippingFree()">
                  {{ $t('home_gratis') }}
                </button>
                <button class="txt-Filter" @click="getProductsNoShippingFree()">
                  {{ $t('home_Singratis') }}
                </button>
              </div>
            </el-collapse-item>
            <el-collapse-item :title="$t('home_fprecio')" name="5">
              <div class="categorys-list">
                <button class="txt-Filter" @click="getProductsHigherNumber()">
                  {{ $t('home_fpreciom') }}
                </button>
                <button class="txt-Filter" @click="getProductsSmallerNumber()">
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
                <p class=".btn-tittle-shop text-12">
                  {{ this.nameSubCategory }}
                </p>
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
                    <KoProductCardFilter
                      :product="product"
                      class="product-list"
                      :cardProduct="settingByTemplate13[0].cardProduct"
                      :settingGeneral="settingByTemplate13[0].setting13General"
                    ></KoProductCardFilter>
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
import KoProductCardFilter from './_productcard/Ko-ProductCard-1.vue'
import sendCategoryUrl from '../../mixins/sendCategoryUrl'
import SendsubcategoryUrl from '../../mixins/SendsubcategoryUrl'
export default {
  components: {
    KoProductCardFilter,
  },
  props: {
    settingByTemplate13: Array,
    dataStore: Object,
    fullProducts: {},
  },
  mixins: [sendCategoryUrl, SendsubcategoryUrl],
  name: 'Ko13-ProductList-Filter',
  mounted() {
    this.setOptionShipping()
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
      this.AllCategories()
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
      showSubCategory: false,
      stateSub: false,
      rangeSlide: [0, 1000000],
      add: true,
      search: '',
      price: [0, 1000000],
      range: {
        max: 0,
      },
      currentPage: 1,
      sub: -1,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexSelect: '',
      indexSelect2: '',
      numVistas: 15,
      activeNames: ['1', '2', '3', '4', '5'],
      stateShipping: false,
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
      const initial = this.currentPage * 15 - 15
      const final = initial + 15
      return this.fullProducts
        .filter((product) => product.categoria == this.select)
        .slice(initial, final)
    },
    filterProduct() {
      const initial = this.currentPage * 15 - 15
      const final = initial + 15
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
    getProductsShippingFree() {
      this.$store.commit('products/FILTER_BY', {
        type: 'ShippingFree',
        data: '',
      })
      this.currentPage = 1
    },
    getProductsNoShippingFree() {
      this.$store.commit('products/FILTER_BY', {
        type: 'NoShippingFree',
        data: '',
      })
      this.currentPage = 1
    },
    getProductsHigherNumber() {
      this.$store.commit('products/FILTER_BY', {
        type: 'higherNumber',
        data: '',
      })
      this.currentPage = 1
    },
    getProductsSmallerNumber() {
      this.$store.commit('products/FILTER_BY', {
        type: 'smallerNumber',
        data: '',
      })
      this.currentPage = 1
    },
    back() {
      this.clear()
      this.toggleCategories = true
      this.nameCategory = ''
    },
    AllCategories() {
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
      this.currentPage = 1
    },
    SearchProduct(search) {
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
      this.stateSub = false
      var stateCategory = document.getElementById('statecate')
      if (this.stateSub == false && stateCategory) {
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
      this.stateSub = true
      var stateCategory = document.getElementById('statecate')
      var catalogo = document.getElementById('homeCate')
      if (catalogo) {
        catalogo.style.color = '#8e8e8e'
        catalogo.style.fontWeight = '100'
      }
      if (this.stateSub == true && stateCategory) {
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
      this.stateSub = true
      var stateCategory = document.getElementById('statecate')
      var catalogo = document.getElementById('homeCate')
      if (this.stateSub == true && stateCategory) {
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
    handleChange(val) {
      // console.log(val);
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
      this.SearchProduct(value)
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
        this.AllCategories()
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
  max-width: 1300px;
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
/* .itemLeft-range-slide {
  @apply w-full flex justify-center items-center mb-20;
} */
/* .content-input-slide {
  @apply w-full flex flex-col justify-center items-center;
} */
.content-left >>> .el-collapse {
  border-top: 1px solid var(--color_icon);
  border-bottom: 1px solid var(--color_icon);
  @apply w-full;
}

.content-left >>> .el-collapse-item__wrap {
  will-change: height;
  background-color: transparent;
  border-bottom: 1px solid var(--color_icon);
}
.content-left >>> .el-collapse-item__header {
  font-size: 15px;
  font-family: var(--font-style-1) !important;
  color: var(--color_text);
  background-color: transparent;
  border-bottom: 1px solid var(--color_icon);
  @apply font-semibold;
}
.content-left >>> .el-collapse-item__header.is-active {
  border-bottom: none;
}

.content-left >>> .el-collapse-item__arrow {
  color: var(--color_icon);
}
.input-slide {
  font-size: 15px;
  color: var(--color_subtext);
  font-family: var(--font-style-1) !important;
  background: transparent;
  @apply w-full h-30 cursor-pointer border-none;
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
  @apply w-full grid grid-cols-1 gap-4 justify-start items-center;
}
.subcategory-list {
  @apply w-full grid grid-cols-1 gap-4 justify-start items-center transition-all ease-in duration-0.2;
}
.content-category-left {
  @apply w-full flex flex-col justify-start items-center;
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
  color: var(--pagination_color);
}
.product_pagination >>> .el-pagination.is-background .btn-prev:hover {
  color: var(--pagination_color);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: var(--pagination_color);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: var(--pagination_color);
  color: #fff;
}
.product-stock {
  cursor: default;
}

.product-list {
  @apply w-full;
}
/* .product-list:hover {
  @apply shadow-lg;
} */
@screen sm {
  .product-conten-items {
    @apply w-full grid grid-cols-2;
  }
  .btn-tittle-shop {
    font-size: 16px;
    @apply mb-10;
  }
  .content-shop-items {
    @apply w-full flex flex-row justify-start items-start px-10;
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
    @apply w-full px-20;
  }
  .bannerProduct {
    border-color: var(--color_icon);
    @apply w-full flex bg-cover bg-center bg-no-repeat justify-items-center items-center py-20 border-b;
  }
  .product-conten-items {
    @apply grid grid-cols-3;
  }
}
@screen lg {
  .product-text {
    @apply w-full;
  }
  .product-conten-items {
    @apply grid grid-cols-2 gap-8;
  }
  .content-items-categorias-text {
    @apply justify-start items-center;
  }
  .items-end {
    @apply flex pb-20;
  }
  .show-view-per-list {
    @apply w-auto grid grid-cols-2 gap-0 justify-center items-center;
  }
  .btn-tittle-shop {
    font-size: 20px;
  }
  .top-content {
    border-bottom: 1px solid var(--color_icon);
    @apply flex pt-0 pb-5;
  }
  .content-left {
    width: 300px;
    top: 162px;
    @apply mr-30 flex flex-col justify-between items-start sticky;
  }
  .content-banner-shop {
    @apply hidden;
  }
  .content-banner-shop-r {
    @apply flex pb-40;
  }
  .content-shop-items {
    @apply w-full flex flex-row justify-start items-start mt-40;
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
  .product-conten-items {
    @apply grid grid-cols-3 gap-2;
  }
}
</style>
