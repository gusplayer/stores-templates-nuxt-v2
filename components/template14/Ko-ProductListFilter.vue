<template>
  <div
    v-if="settingByTemplate14"
    class="w-full pb-80 flex flex-col justify-center items-center product-content"
    :style="[
      settingByTemplate14[0].settingsGeneral,
      settingByTemplate14[0].listProductsFilter,
    ]"
  >
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
              v-lazy="
                idCloudinaryBanner(
                  settingByTemplate14[0].listProductsFilter.img,
                  'banner'
                )
              "
              alt="banner template14"
              class="object-cover h-full"
            />
          </picture>
        </div>
        <div v-else class="w-full h-[240px]"></div>
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
            <button class="text-14 font-bold" @click="clearFilters">
              {{ $t('header_productos') }}
            </button>
          </div>
        </div>
      </div>
      <div
        class="w-full h-full flex flex-row justify-start items-start px-10 md:px-5 mt-40 max-w-7xl"
      >
        <div
          class="w-full h-full flex flex-col justify-center items-center mr-0 md:mr-20"
        >
          <div class="w-full flex flex-row justify-between items-start pb-25">
            <div class="w-full flex flex-col justify-start items-start">
              <button
                class="font-semibold uppercase justify-start items-start"
                :style="`color: ${settingByTemplate14[0].listProductsFilter['--color_subCategories']};`"
                @click="clearFilters"
              >
                {{ $t('header_productos') }}
              </button>
              <button
                v-if="nameCategory"
                :style="`color: ${settingByTemplate14[0].listProductsFilter['--color_subCategories']};`"
                @click="breadcrumbsClear(1)"
              >
                {{ nameCategory }}
              </button>
              <button
                v-if="nameSubCategory"
                :style="`color: ${settingByTemplate14[0].listProductsFilter['--color_subCategories']};`"
                @click="breadcrumbsClear(2)"
              >
                <span class="font-normal pr-4">/</span>{{ nameSubCategory }}
              </button>
              <p
                v-if="tagProduct"
                :style="`color: ${settingByTemplate14[0].listProductsFilter['--color_subCategories']};`"
              >
                <span class="font-normal pr-4">/</span>{{ tagProduct }}
              </p>
            </div>
            <div class="w-full flex justify-end items-start gap-x-2">
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
                    class="font-normal text-11 ml-5"
                    :style="`color: ${settingByTemplate14[0].listProductsFilter['--color_subCategories']};`"
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
              <button class="flex md:hidden">
                <filterOutLine-icon
                  class="text-25"
                  :style="`color: ${settingByTemplate14[0].listProductsFilter['--color_icon']};`"
                  @click="openMenuLateral"
                />
              </button>
            </div>
          </div>
          <div class="w-full h-full flex flex-col justify-center items-center">
            <div
              class="w-full grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center text-center"
            >
              <div
                v-for="product in listProducts"
                :key="product.id"
                class="w-full h-full flex flex-col justify-center items-center"
              >
                <Ko14ProductCard
                  :product="product"
                  :setting-card-products="settingByTemplate14[0].cardProducts"
                  :setting-general="settingByTemplate14[0].settingsGeneral"
                  class="w-full h-full"
                />
              </div>
            </div>
            <div
              v-if="listProducts.length == 0"
              class="w-full h-full flex flex-col justify-center items-center text-center"
            >
              <nuxt-link to="/productos">
                <img
                  v-lazy="`${$store.state.urlKomercia}/logos/${dataStore.logo}`"
                  width="150"
                  class="max-w-[150px] max-h-[150px]"
                  alt="LogoStore img"
                  @click="clearFilters"
                />
              </nuxt-link>
              <p class="my-15 font-semibold text-20 text-gray-600">
                {{ $t('home_msgCatalogo') }}
              </p>
            </div>
            <div
              v-if="totalProducts > filters.limit"
              class="w-full flex justify-center items-center wrapper_pagination mt-20"
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
        <div
          class="hidden mr-30 md:flex flex-col justify-between items-start sticky w-full max-w-[250px] lg:max-w-[300px] transition-all ease-in duration-0.3 content-left"
          style="top: 140px"
        >
          <button
            class="w-full flex justify-between items-center pb-10 uppercase font-semibold cursor-pointer text-16 my-5"
            :style="`color: ${settingByTemplate14[0].listProductsFilter['--color_subCategories']};`"
            @click="clearFilters"
          >
            {{ $t('header_buscar_limpiar') }}
            <close-icon class="color_icon" />
          </button>
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
      </div>
    </div>
  </div>
</template>
<script>
import mobileCheck from '@/mixins/mobileCheck'
import filters from '@/mixins/filterProducts'
import idCloudinaryBanner from '@/mixins/idCloudinary'
export default {
  name: 'Ko14ProductListFilter',
  components: {
    Ko14ProductCard: () => import('./_cardProduct/ProductCard.vue'),
  },
  mixins: [mobileCheck, filters, idCloudinaryBanner],
  props: {
    settingByTemplate14: {
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
      let timerTimeout = null
      // eslint-disable-next-line no-unused-vars
      timerTimeout = setTimeout(() => {
        timerTimeout = null
        window.scrollBy(0, -1500)
      }, 250)
    },
  },
  methods: {
    openMenuLateral() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', true)
    },
  },
}
</script>

<style scoped>
.product-content {
  background: var(--background_color_1);
}
.content-left >>> .el-collapse {
  border-top: 1px solid var(--color_border);
  border-bottom: 1px solid var(--color_border);
  @apply w-full;
}

.content-left >>> .el-collapse-item__wrap {
  will-change: height;
  background-color: transparent;
  border-bottom: 1px solid var(--color_border);
}
.content-left >>> .el-collapse-item__header {
  font-size: 15px;
  color: var(--color_subCategories);
  background-color: transparent;
  border-bottom: 1px solid var(--color_border);
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
.color_icon {
  color: var(--color_icon);
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
