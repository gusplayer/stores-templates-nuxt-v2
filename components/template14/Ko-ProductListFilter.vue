<template>
  <div
    v-if="settingByTemplate14"
    class="w-full pb-80 flex flex-col justify-center items-center product-content"
    :style="[
      settingByTemplate14[0].settingsGeneral,
      settingByTemplate14[0].listProductsFilter,
    ]"
  >
    <Ko14MenuLateral
      :dataStore="dataStore"
      :settingByTemplate="settingByTemplate14"
    />
    <div class="w-full flex flex-col items-center justify-center">
      <div class="w-full relative box-content hidden md:flex">
        <div v-if="settingByTemplate14[0].listProductsFilter.visible_img">
          <picture>
            <source
              media="(max-width: 799px)"
              :srcset="
                idCloudinaryBanner(
                  settingByTemplate14[0].listProductsFilter.img,
                  'bannerRes',
                  400
                )
              "
            />
            <source
              media="(min-width: 800px)"
              :srcset="
                idCloudinaryBanner(
                  settingByTemplate14[0].listProductsFilter.img,
                  'banner'
                )
              "
            />
            <img
              v-lazy="settingByTemplate14[0].listProductsFilter.img"
              alt="banner template14"
              class="object-cover h-full"
            />
          </picture>
        </div>
        <div v-else class="w-full h-100" />
        <div
          class="absolute top-2/5 lg:top-3/0 mlg:top-4/0 left-4/7 flex flex-col items-center"
        >
          <p
            class="font-bold text-30 mb-10"
            :style="`color: ${settingByTemplate14[0].listProductsFilter.color_title};`"
          >
            {{ settingByTemplate14[0].listProductsFilter.title }}
          </p>
          <div
            class="flex flex-row items-center justify-center"
            :style="`color: ${settingByTemplate14[0].listProductsFilter.color_breadCrumbs};`"
          >
            <nuxt-link to="/" class="text-14">
              {{ $t('header_inicio') }}
            </nuxt-link>
            <p class="px-10 text-14 font-bold">></p>
            <p class="text-14 font-bold">
              {{ $t('header_productos') }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="w-full h-full flex flex-row justify-start items-start px-10 md:px-5 mt-40 max-w-7xl"
      >
        <div
          class="w-full h-full flex flex-col justify-center items-center mr-0 md:mr-20"
        >
          <div class="w-full flex flex-row justify-between items-center pb-25">
            <div class="w-full flex flex-col justify-start items-start">
              <p
                class="font-semibold uppercase justify-start items-start"
                v-if="!nameCategoryHeader"
              >
                {{ $t('header_productos') }}
              </p>
              <div class="flex flex-col justify-start" v-else>
                <p class="font-semibold uppercase justify-start items-start">
                  {{ nameCategoryHeader }}
                </p>
                <div class="flex flex-row">
                  <p class="text-12 mr-4" v-if="nameSubCategoryHeader">
                    {{ nameSubCategoryHeader }}
                  </p>
                  <p
                    class="text-12 mr-4"
                    v-if="nameSubCategoryHeader && etiqueta1"
                  >
                    /
                  </p>
                  <p class="text-12" v-if="etiqueta1">
                    {{ etiqueta1 }}
                  </p>
                  <p class="ml-4 text-12" v-if="etiqueta2">/ {{ etiqueta2 }}</p>
                </div>
              </div>
              <div
                class="flex flex-col justify-start"
                v-if="
                  etiqueta1 &&
                  nameCategoryHeader == '' &&
                  nameSubCategoryHeader == ''
                "
              >
                <p class="text-12">
                  {{ etiqueta1 }}
                </p>
              </div>
            </div>
            <button class="flex md:hidden" @click="openMenuLateral">
              <menu-icon class="text-25" />
            </button>
          </div>
          <div class="w-full h-full flex flex-col justify-center items-center">
            <div
              class="w-full grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center text-center"
            >
              <div
                v-for="product in filterProduct"
                :key="product.id"
                class="w-full h-full flex flex-col justify-center items-center"
              >
                <Ko14ProductCard
                  class="w-full"
                  :product="product"
                  :cardProducts="settingByTemplate14[0].cardProducts"
                  :settingsGeneral="settingByTemplate14[0].settingsGeneral"
                />
              </div>
            </div>
            <div
              v-if="fullProducts.length == 0"
              class="w-full h-full flex flex-col justify-center items-center text-center"
            >
              <nuxt-link to="/productos">
                <img
                  v-lazy="
                    `${$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`
                  "
                  width="150"
                  class="max-w-[150px] max-h-[150px]"
                  alt="LogoStore img"
                  @click="clear"
                />
              </nuxt-link>
              <p class="my-15 font-semibold text-20 text-gray-600">
                {{ $t('home_msgCatalogo') }}
              </p>
            </div>
            <div
              v-if="fullProducts.length > numVistas"
              class="w-full flex justify-center items-center wrapper_pagination mt-20"
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
        <div
          class="hidden mr-30 md:flex flex-col justify-between items-start sticky w-full max-w-[250px] lg:max-w-[300px] transition-all ease-in duration-0.3 content-left"
          style="top: 140px"
        >
          <p
            class="w-auto pb-10 uppercase font-semibold cursor-pointer text-16"
            @click="clear"
          >
            {{ $t('header_buscar_limpiar') }}
          </p>
          <el-collapse v-model="activeNames">
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
              v-show="!stateShipping"
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import filterProducts from '@/mixins/filterProducts'
import idCloudinaryBanner from '@/mixins/idCloudinary'
export default {
  name: 'Ko14-ProductList-Filter',
  mixins: [filterProducts, idCloudinaryBanner],
  components: {
    Ko14ProductCard: () => import('./_cardProduct/ProductCard.vue'),
    Ko14MenuLateral: () => import('./_lateral/_lateralMenu.vue'),
  },
  props: {
    dataStore: Object,
    settingByTemplate14: Array,
    fullProducts: Array,
    allTags: Array,
  },
  mounted() {
    this.getQuery()
    if (this.previousPage) {
      this.currentPage = this.previousPage
    }
  },
  data() {
    return {
      search: '',
      currentPage: 1,
      showSubCategory: false,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      indexSelect: '',
      indexSelect2: '',
      numVistas: 15,
      activeNames: ['1', '2', '3', '4', '5'],
      stateShipping: false,
    }
  },
  computed: {
    ...mapState(['searchValue', 'previousPage']),
    categorias() {
      return this.dataStore.categorias
    },
    subcategories() {
      return this.dataStore.subcategorias
    },
    getProductsCategories() {
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
    etiqueta1() {
      return this.$store.state.products.payloadTagName
    },
    etiqueta2() {
      return this.$store.state.products.payloadTag2Name
    },
  },
  methods: {
    openMenuLateral() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', true)
    },
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
      } else if (this.$route.fullPath === '/') {
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
    SendSubCategory(value) {
      this.$store.commit('products/SET_PAYLOAD_TAG', '')
      this.$store.commit('products/SET_PAYLOAD_TAG2', '')
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
      this.nameCategory = ''
      this.showSubCategory = false
      this.selectedSubcategories = []
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
      this.getQuery()
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
}
.content-left >>> .el-collapse-item__header {
  font-size: 15px;
  color: var(--color_subCategories);
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
  color: var(--color_categories);
  background: transparent;
  @apply w-full h-30 cursor-pointer border-none;
}
.categorys-list {
  @apply w-full grid grid-cols-1 gap-4 justify-start items-center;
}
.subcategory-list {
  @apply w-full grid grid-cols-1 gap-4 justify-start items-center transition-all ease-in duration-0.2;
}
.txt-Filter {
  color: var(--color_categories);
  font-size: 15px;
  line-height: 1.3;
  @apply w-full flex flex-row justify-start items-center font-normal cursor-pointer pr-1 transition-all ease-in duration-0.2;
}
.txt-Filter:hover {
  color: #eb7025;
}
.txt-categorys {
  color: var(--color_categories);
  font-size: 15px;
  line-height: 1.3;
  @apply w-full flex flex-row justify-start items-center font-normal cursor-pointer pr-1 transition-all ease-in duration-0.2;
}
.txt-categorys:hover {
  color: #eb7025;
}
.pagination {
  font-size: 18px;
  color: var(--color_pagination);
  background: transparent;
}
.wrapper_pagination >>> .el-pagination.is-background .btn-next {
  color: var(--color_pagination);
  background-color: transparent;
}
.wrapper_pagination >>> .el-pagination.is-background .btn-prev {
  color: var(--color_pagination);
  background-color: transparent;
}
.wrapper_pagination >>> .el-pagination.is-background .el-pager li {
  color: var(--color_pagination);
  background-color: transparent;
}
.wrapper_pagination >>> .el-pagination.is-background .btn-next:hover {
  color: var(--color_pagination);
}
.wrapper_pagination >>> .el-pagination.is-background .btn-prev:hover {
  color: var(--color_pagination);
}
.wrapper_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: var(--color_pagination);
}
.wrapper_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: var(--color_pagination);
  color: #fff;
}
</style>
