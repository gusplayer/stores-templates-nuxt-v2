<template>
  <div
    v-if="settingByTemplate13"
    class="product-content"
    :style="[
      settingByTemplate13[0].settingGeneral,
      settingByTemplate13[0].productListFilter,
      {
        '--font-style-1':
          settingByTemplate13[0]?.settingGeneral?.fount_1 ?? 'Poppins',
      },
    ]"
  >
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
              v-show="categorias.length > 0"
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
          <div class="w-full flex justify-between items-center">
            <div class="w-full flex justify-start items-center">
              <button class="txt-content-home" @click="clearFilters">
                {{ $t('header_productos') }}
              </button>
              <button
                v-if="nameCategory"
                class="ml-4 txt-color"
                @click="breadcrumbsClear(1)"
              >
                <span class="font-normal pr-4">/</span>{{ nameCategory }}
              </button>
              <button
                v-if="nameSubCategory"
                class="txt-color"
                @click="breadcrumbsClear(2)"
              >
                <span class="font-normal pr-4">/</span>{{ nameSubCategory }}
              </button>
              <p v-if="tagProduct" class="txt-color">
                <span class="font-normal pr-4">/</span>{{ tagProduct }}
              </p>
            </div>
            <el-dropdown
              class="w-full flex justify-end items-center"
              :hide-on-click="false"
              @command="sendOrder"
            >
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
          <div class="w-full h-full flex flex-col justify-center items-center">
            <div
              class="w-full h-full justify-start items-start text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              <div
                v-for="product in listProducts"
                :key="product.id"
                class="w-full flex flex-col justify-center items-center"
              >
                <KoProductCardFilter
                  :product="product"
                  :setting-card-products="settingByTemplate13[0].cardProduct"
                  :setting-general="settingByTemplate13[0].settingGeneral"
                  class="w-full h-full"
                />
              </div>
            </div>
            <div
              v-if="listProducts.length == 0"
              class="w-full min-h-[200px] flex flex-col justify-center items-center text-center"
            >
              <img
                v-lazy="
                  `${this.$store.state.urlKomercia}/logos/${dataStore.logo}`
                "
                alt="Logo Img"
                @click="clearFilters"
              />
              <p class="txt-products-empty">{{ $t('home_msgCatalogo') }}</p>
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
  </div>
</template>

<script>
import mobileCheck from '@/mixins/mobileCheck'
import filters from '@/mixins/filterProducts'
export default {
  name: 'Ko13ProductListFilter',
  components: {
    KoProductCardFilter: () => import('./_productcard/Ko13-product-card.vue'),
  },
  mixins: [mobileCheck, filters],
  props: {
    settingByTemplate13: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeNames: ['1', '2', '3', '4'],
    }
  },
  watch: {
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
}
</script>

<style scoped>
.container-product-max-w {
  max-width: 1300px;
  @apply w-full flex flex-col justify-center items-center;
}
.product-content {
  background: var(--background_color_1);
  @apply min-h-full h-full flex flex-col justify-start items-center w-full;
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
/* .content-left {
  position: sticky;
  top: 130px;
  transition: all 0.25s ease;
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
  @apply w-full flex flex-col justify-start items-start;
}
.btn-tittle-shop {
  color: var(--color_text);
  font-family: var(--font-style-1) !important;
  @apply font-semibold uppercase justify-start items-start;
}
.product-text {
  @apply flex flex-col justify-center items-center w-full;
}

.product-content-items {
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
  color: var(--color_text);
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
  .product-content-items {
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
}
@media (min-width: 440px) {
  .product-content-items {
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
  .product-content-items {
    @apply grid grid-cols-3;
  }
}
@screen lg {
  .product-text {
    @apply w-full;
  }
  .product-content-items {
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
    top: 142px;
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
  .product-content-items {
    @apply grid grid-cols-3 gap-2;
  }
}
</style>
