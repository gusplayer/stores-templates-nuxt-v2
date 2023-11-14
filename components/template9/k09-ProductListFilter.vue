<template>
  <div
    class="product-content"
    :style="[
      settingByTemplate9[0].settingGeneral,
      settingByTemplate9[0].productListFilter,
      {
        '--font-style-1':
          settingByTemplate9[0]?.settingGeneral?.fount_1 ?? 'Poppins',
      },
      {
        '--font-style-2':
          settingByTemplate9[0]?.settingGeneral?.fount_2 ?? 'Roboto',
      },
    ]"
  >
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
            />
          </el-collapse-item>
          <el-collapse-item
            v-show="categorias?.length > 0"
            :title="$t('productdetail_categoria')"
            name="2"
          >
            <div class="categorys-list">
              <div v-for="(category, index) in categorias" :key="index">
                <p
                  class="txt-categorys"
                  :class="
                    category.nombreCategoriaProducto == filters.category
                      ? 'txt-categorys-active'
                      : ''
                  "
                  @click="sendCategory(category)"
                >
                  {{ category.nombreCategoriaProducto }}
                </p>
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
                <p
                  class="txt-categorys"
                  :class="
                    subcategory.id == filters.subcategory
                      ? 'txt-categorys-active'
                      : ''
                  "
                  @click="sendSubCategory(subcategory)"
                >
                  {{ subcategory.nombreSubcategoria }}
                </p>
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
      <div class="w-full">
        <div class="w-full flex flex-col justify-start items-start">
          <div class="w-full flex flex-row justify-start items-center">
            <p class="txt-color" @click="clearFilters">
              {{ $t('home_catalogo') }}
            </p>
            <div class="flex flex-row justify-center items-start">
              <p
                v-if="nameCategory"
                class="txt-color"
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
          </div>
          <div class="w-full flex justify-start items-start pt-6">
            <p class="btn-tittle-shop">
              {{ $t('header_productos') }}
            </p>
          </div>
        </div>
        <div
          class="w-full grid grid-cols-2 items-center top-content mb-20 md:mb-30"
        >
          <div class="w-full flex flex-row gap-x-1 justify-start items-center">
            <svg
              class="cursor-pointer p-12 show-icon"
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
              class="cursor-pointer p-12 show-icon"
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
          </div>
          <div class="w-full flex justify-end">
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
            :class="`grid-cols-2 md:grid-cols-${indexShowList}`"
          >
            <div
              v-for="product in listProducts"
              :key="product.id"
              class="w-full h-full content-products"
            >
              <KoProductCardFilter
                v-if="!showInList"
                :product="product"
                :setting-general="settingByTemplate9[0].settingGeneral"
                :setting-card-products="settingByTemplate9[0].cardProduct"
                class="w-full h-full"
              />
              <KoProductCardFilerList
                v-if="showInList"
                :setting-general="settingByTemplate9[0].settingGeneral"
                :setting-card-products="settingByTemplate9[0].cardProduct"
                :product="product"
              />
            </div>
          </div>
          <div
            v-if="listProducts.length === 0"
            class="w-full h-full flex flex-col justify-center items-center"
          >
            <p class="text-center font-bold text-20 txt-products-empty">
              {{ $t('home_msgCatalogo') }}
            </p>
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
  name: 'Ko9ProductListFilter',
  components: {
    KoProductCardFilter: () => import('./_productcard/ProductCard.vue'),
    KoProductCardFilerList: () =>
      import('./_productcard/ProductCardFilterList.vue'),
  },
  mixins: [mobileCheck, filters],
  props: {
    settingByTemplate9: {
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
    previousPage() {
      let timerTimeout = null
      // eslint-disable-next-line no-unused-vars
      timerTimeout = setTimeout(() => {
        timerTimeout = null
        window.scrollBy(0, -2500)
      }, 250)
    },
  },
  methods: {
    showList(index, state) {
      this.indexShowList = index
      this.showInList = state
    },
  },
}
</script>

<style scoped>
.product-content {
  background: var(--background_color_1);
  @apply flex flex-col justify-center items-center w-full pt-20 pb-40;
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
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 21px;
  transition: all 0.25s ease;
  font-family: var(--font-style-1);
  background: transparent;
  border-bottom: 1px solid var(--color_icon);
  @apply h-full w-full flex items-center justify-start cursor-pointer py-15;
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
  height: 30px;
  background: transparent;
  @apply w-full cursor-pointer border-none;
  /* border-bottom: 2px solid #2c2930; */
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
.txt-color {
  color: var(--color_subtext);
  font-family: var(--font-style-1) !important;
  @apply flex flex-row mr-6 font-semibold text-14 cursor-pointer;
}
.textSortingFilter {
  color: var(--color_subtext);
  font-family: var(--font-style-1) !important ;
  transition: all 0.25s ease;
  @apply font-normal text-11 ml-5;
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
  line-height: 1.3;
  font-family: var(--font-style-2);
  transition: all 0.25s ease;
  @apply w-full flex flex-row justify-start items-center pr-1 font-normal text-15 cursor-pointer;
}
.txt-categorys-active {
  color: var(--hover_text);
  transition: all 0.25s ease;
  @apply w-full flex flex-row justify-start items-center pr-1 text-14 font-bold cursor-pointer;
}

.show-icon {
  fill: var(--color_icon);
}
.show-icon-active {
  fill: var(--color_text);
}
.show-icon:hover {
  fill: var(--hover_text);
  background-color: #f8f8f8;
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
.content-products {
  border-bottom: 0.5px solid var(--color_icon);
}
.txt-products-empty {
  font-family: var(--font-style-2);
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
.top-content {
  border-bottom: 1px solid var(--color_icon);
}
@screen sm {
  .btn-tittle-shop {
    font-size: 36px;
  }
  .content-shop-items {
    @apply w-9/5 flex flex-row justify-start items-start;
  }
  .content-left {
    display: none;
  }
}

@screen md {
  .content-shop-items {
    @apply w-9/3;
  }
}
@screen lg {
  .btn-tittle-shop {
    font-size: 48px;
  }

  .content-left {
    @apply mr-20 flex flex-col justify-between items-start;
    width: 250px;
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
