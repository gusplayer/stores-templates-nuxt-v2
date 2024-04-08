<template>
  <div
    class="product-content"
    :style="[
      settingByTemplate10[0].settingGeneral,
      settingByTemplate10[0].productListFilter,
      {
        '--font-style-1':
          settingByTemplate10[0]?.settingGeneral?.fount_1 ?? 'Roboto',
      },
    ]"
  >
    <div id="BgProductlistF10" class="bannerProduct">
      <div class="crumb">
        <nuxt-link to="/">
          <p class="txt-crumb s1">{{ $t('header_inicio') }}</p>
        </nuxt-link>
        <p class="separatorCrumb">/</p>
        <p class="txt-crumb s2" @click="clearFilters">
          {{ $t('header_productos') }}
        </p>
      </div>
    </div>
    <div class="container-product-max-w">
      <div class="content-shop-items">
        <div class="content-left">
          <nuxt-link class="content-home" to="/productos">
            <p class="txt-content-home" @click="clearFilters">
              {{ $t('header_buscar_limpiar') }}
            </p>
          </nuxt-link>
          <el-collapse v-model="activeNames">
            <el-collapse-item :title="$t('header_buscar_producto')" name="1">
              <input
                v-model="searchProduct"
                class="input-slide"
                type="search"
                :placeholder="$t('header_search')"
                @change="sendFilter"
                @keyup.enter="sendFilter"
              />
            </el-collapse-item>
            <el-collapse-item
              v-show="categorias?.length > 0"
              :title="$t('productdetail_categoria')"
              name="2"
            >
              <div class="categorys-list">
                <div v-for="(category, index) in categorias" :key="index">
                  <div @click="sendCategory(category)">
                    <p
                      class="txt-categorys"
                      :class="
                        category.nombreCategoriaProducto == filters.category
                          ? 'txt-categorys-active'
                          : ''
                      "
                    >
                      <span
                        class="rounded-list"
                        :class="
                          category.nombreCategoriaProducto == filters.category
                            ? 'txt-rounded-list-active'
                            : ''
                        "
                      ></span>
                      {{ category.nombreCategoriaProducto }}
                    </p>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item
              v-show="selectedSubcategories?.length"
              :title="$t('home_subcategory')"
              name="3"
            >
              <div class="subcategory-list">
                <div
                  v-for="(subcategory, index) in selectedSubcategories"
                  :key="index"
                >
                  <div @click="sendSubCategory(subcategory)">
                    <p
                      class="txt-categorys"
                      :class="
                        subcategory.id == filters.subcategory
                          ? 'txt-categorys-active'
                          : ''
                      "
                    >
                      <span
                        class="rounded-list"
                        :class="
                          subcategory.id == filters.subcategory
                            ? 'txt-rounded-list-active'
                            : ''
                        "
                      ></span>
                      {{ subcategory.nombreSubcategoria }}
                    </p>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <div
              v-for="(itemsTags, index) in tags"
              v-show="tags?.length > 0"
              :key="index"
            >
              <el-collapse-item
                v-if="
                  itemsTags &&
                  itemsTags.status === 1 &&
                  itemsTags.tagProperties.length > 0
                "
                :title="itemsTags.name"
                :name="6 + index"
              >
                <div class="categorys-list">
                  <button
                    v-for="itemsProperties in itemsTags.tagProperties"
                    v-show="itemsProperties.status === 1"
                    :key="itemsProperties.id"
                    class="txt-Filter"
                    :class="
                      itemsProperties.id == filters.tag
                        ? 'txt-categorys-active'
                        : ''
                    "
                    @click="sendTag(itemsProperties)"
                  >
                    {{ itemsProperties.name }}
                  </button>
                </div>
              </el-collapse-item>
            </div>
            <el-collapse-item
              v-show="!stateShipping"
              :title="$t('home_fenvio')"
              name="4"
            >
              <div class="w-full flex flex-row justify-between items-center">
                <input
                  v-model="filters.minPrice"
                  :min="minPrice"
                  :max="maxPrice"
                  placeholder="Mínimo"
                  class="block w-full rounded-4 px-4 py-4 text-gray-900 shadow-sm border border-[#DCDFE6] placeholder:text-gray-400"
                  onkeypress="return (event.charCode>47 && event.charCode<58) || (event.charCode>96 && event.charCode<105)"
                  @keyup.enter="sendFilter"
                  @change="sendFilter"
                />
                <span class="px-5 icon-price text-16">-</span>
                <input
                  v-model="filters.maxPrice"
                  :min="minPrice"
                  :max="maxPrice"
                  placeholder="Máximo"
                  class="block w-full rounded-4 px-4 py-4 text-gray-900 shadow-sm border border-[#DCDFE6] placeholder:text-gray-400"
                  onkeypress="return (event.charCode>47 && event.charCode<58) || (event.charCode>96 && event.charCode<105)"
                  @keyup.enter="sendFilter"
                  @change="sendFilter"
                />
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="w-full flex flex-col justify-center items-center">
          <div class="w-full flex flex-row justify-between items-center">
            <div class="w-full flex justify-start items-center">
              <p class="txt-content-home" @click="clearFilters">
                {{ $t('home_catalogo') }}
              </p>
              <p
                v-if="nameCategory"
                class="ml-4 txt-color"
                @click="breadcrumbsClear(1)"
              >
                <span class="font-normal pr-4">/</span>{{ nameCategory }}
              </p>
              <p
                v-if="nameSubCategory"
                class="txt-color"
                @click="breadcrumbsClear(2)"
              >
                <span class="font-normal pr-4">/</span>{{ nameSubCategory }}
              </p>
              <p v-if="tagProduct" class="txt-color">
                <span class="font-normal pr-4">/</span>{{ tagProduct }}
              </p>
            </div>
            <div class="w-full flex justify-end gap-x-2 items-center">
              <svg
                class="cursor-pointer p-12 show-icon hidden md:flex"
                :class="indexShowList === 3 ? 'show-icon-active' : ''"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="40px"
                height="40px"
                viewBox="0 0 12 12"
                @click="showList(3, false)"
              >
                <path d="M5,0H0v5h5V0z"></path>
                <path d="M12,0H7v5h5V0z"></path>
                <path d="M5,7H0v5h5V7z"></path>
                <path d="M12,7H7v5h5V7z"></path>
              </svg>
              <svg
                class="cursor-pointer p-12 show-icon hidden md:flex"
                :class="indexShowList === 1 ? 'show-icon-active' : ''"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="40px"
                height="40px"
                viewBox="0 0 12 12"
                @click="showList(1, true)"
              >
                <path d="M5,0H0v5h5V0z"></path>
                <rect x="7" y="0" width="5" height="2"></rect>
                <rect x="7" y="3" width="5" height="2"></rect>
                <rect x="7" y="7" width="5" height="2"></rect>
                <rect x="7" y="10" width="5" height="2"></rect>
                <path d="M5,7H0v5h5V7z"></path>
              </svg>
              <el-dropdown @command="sendOrder" :hide-on-click="false">
                <span
                  class="el-dropdown-link txt-color justify-center items-center"
                >
                  Ordenar por:
                  <span
                    v-if="sortingFilter?.label"
                    class="textSortingFilter"
                    @click="clearOrder"
                  >
                    {{ $t(sortingFilter.label) }}
                  </span>
                  <i class="el-icon-arrow-down el-icon--right leading-21"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="items in listOrderFilter"
                    v-show="!stateShipping"
                    :key="items.id"
                    :command="items"
                    :class="
                      sortingFilter?.id === items.id
                        ? 'bg-black text-white-white'
                        : ''
                    "
                  >
                    {{ $t(items.label) }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="w-full h-full flex flex-col justify-center items-center">
            <div
              class="w-full justify-start items-start text-center grid gap-4"
              :class="`grid-cols-1 sm:grid-cols-2 md:grid-cols-${indexShowList}`"
            >
              <div
                v-for="product in listProducts"
                :key="product.id"
                class="w-full h-full content-products"
              >
                <KoProductCardFilter
                  v-if="!showInList"
                  :product="product"
                  :setting-card-products="settingByTemplate10[0].cardProduct"
                  :setting-general="settingByTemplate10[0].settingGeneral"
                  class="w-full h-full product-list"
                />
                <KoProductCardFilerList
                  v-if="showInList"
                  :product="product"
                  :setting-card-products="settingByTemplate10[0].cardProduct"
                  :setting-general="settingByTemplate10[0].settingGeneral"
                  class="product-list"
                />
              </div>
            </div>
            <div
              v-if="listProducts.length === 0"
              class="content-products-empty"
            >
              <div class="header-content-logo">
                <nuxt-link to="/productos" class="wrapper-logo">
                  <img
                    :src="`${this.$store.state.urlKomercia}/logos/${dataStore.logo}`"
                    class="header-logo"
                    alt="Logo Img"
                    @click="clearFilters"
                  />
                </nuxt-link>
              </div>
              <p class="txt-products-empty">{{ $t('home_msgCatalogo') }}</p>
            </div>
          </div>
          <div
            v-if="totalProducts > filters.limit"
            class="mt-50 bg-transparent text-18 product_pagination"
          >
            <el-pagination
              background
              layout="prev, pager, next"
              class="pagination bg-transparent"
              :total="totalProducts"
              :page-size="filters.limit"
              :current-page.sync="previousPage"
              @current-change="changePage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mobileCheck from '@/mixins/mobileCheck'
import filters from '@/mixins/filterProducts'
export default {
  name: 'Ko10ProductListFilter',
  components: {
    KoProductCardFilter: () => import('./_productcard/ProductCard.vue'),
    KoProductCardFilerList: () =>
      import('./_productcard/ProductCardFilterList.vue'),
  },
  mixins: [mobileCheck, filters],
  props: {
    settingByTemplate10: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showInList: false,
      indexShowList: 3,
      activeNames: ['1', '2', '3', '4'],
    }
  },
  watch: {
    settingByTemplate10() {
      this.setBg()
    },
    previousPage() {
      let scrollTimeout = null

      if (scrollTimeout !== null) {
        clearTimeout(scrollTimeout)
      }

      scrollTimeout = setTimeout(() => {
        scrollTimeout = null
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }, 250)
    },
  },
  mounted() {
    this.setBg()
  },
  methods: {
    setBg() {
      if (this.settingByTemplate10) {
        if (!this.mobileCheck()) {
          var imagen = document.getElementById('BgProductlistF10')
          if (this.settingByTemplate10[0]?.productListFilter?.visible_bg) {
            if (this.settingByTemplate10[0].productListFilter.url_img_bg) {
              imagen.style.backgroundImage = `url(${this.settingByTemplate10[0].productListFilter.url_img_bg})`
            } else {
              imagen.style.backgroundImage = `url(https://res.cloudinary.com/brahyanr10/image/upload/v1614233821/Temp10/Productos/bg-beagrumb_gxvk1i.jpg)`
            }
          } else {
            imagen.style.backgroundImage = ''
          }
        }
      }
    },
    showList(index, state) {
      this.indexShowList = index
      this.showInList = state
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
  @apply flex flex-col justify-start items-center w-full pb-80;
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

.show-icon {
  fill: var(--color_icon);
}
.show-icon-active {
  fill: var(--hover_text);
  background-color: var(--background_color_1);
}
.show-icon:hover {
  fill: var(--hover_text);
  background-color: var(--background_color_1);
}
.show:focus .show-icon {
  fill: var(--hover_text);
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
.product-stock {
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
.content-left {
  position: sticky;
  top: 15px;
  transition: all 0.25s ease;
}

@screen sm {
  .content-shop-items {
    @apply w-9/0 flex flex-row justify-start items-start;
  }
  .content-left {
    @apply hidden;
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
  .txt-color {
    color: var(--color_text);
    font-family: var(--font-style-1) !important;
  }
  .textSortingFilter {
    color: var(--color_text);
    font-family: var(--font-style-1) !important ;
    transition: all 0.25s ease;
    @apply font-normal text-11 ml-5;
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

  .items-end {
    @apply flex pb-20;
  }
  .show-number-items {
    @apply w-full flex justify-end items-center;
  }

  .btn-tittle-shop {
    font-size: 20px;
  }

  .content-left {
    width: 400px;
    @apply mr-10 flex flex-col justify-between items-start;
  }
  .content-banner-shop {
    @apply hidden;
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
