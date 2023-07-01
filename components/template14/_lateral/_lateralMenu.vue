<template>
  <el-drawer
    :visible.sync="openMenuLeft"
    direction="rtl"
    size="100%"
    :withHeader="false"
    :modal-append-to-body="false"
  >
    <div
      class="mt-15 px-10 pb-10 flex flex-col justify-between items-start w-full content-left"
    >
      <div class="w-full flex justify-between items-center pb-10">
        <p
          class="w-auto uppercase font-semibold cursor-pointer text-16 text-gray-800"
          @click="clear"
        >
          {{ $t('header_buscar_limpiar') }}
        </p>
        <button @click="closed">
          <close-icon class="text-25 text-gray-800" />
        </button>
      </div>
      <el-collapse v-model="activeNames">
        <el-collapse-item :title="$t('header_buscar_producto')" name="1">
          <input
            v-model="search"
            type="search"
            class="text-15 w-full h-30 cursor-pointer border-none bg-transparent"
            style="color: #222"
            :placeholder="$t('header_search')"
          />
        </el-collapse-item>
        <el-collapse-item
          :title="$t('productdetail_categoria')"
          name="2"
          v-show="categorias.length > 0"
        >
          <div
            class="w-full grid grid-cols-1 gap-4 justify-start items-center transition-all ease-in duration-0.2"
          >
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
          v-show="showSubCategory && selectedSubcategories.length"
          :title="$t('home_subcategory')"
          name="3"
        >
          <div
            v-show="showSubCategory && selectedSubcategories.length"
            class="w-full grid grid-cols-1 gap-4 justify-start items-center transition-all ease-in duration-0.2"
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
            <div
              class="w-full grid grid-cols-1 gap-4 justify-start items-center"
            >
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
          <div class="w-full grid grid-cols-1 gap-4 justify-start items-center">
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
          <div class="w-full grid grid-cols-1 gap-4 justify-start items-center">
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
  </el-drawer>
</template>

<script>
import filterProducts from '@/mixins/filterProducts'
export default {
  name: 'Ko-MenuLeft-14',
  mixins: [filterProducts],
  props: {
    dataStore: Object,
    settingByTemplate: Array,
  },
  components: {
    BaseAccordion: () =>
      import('../../headers/_lateralMenu/_BaseAccordion.vue'),
  },
  data() {
    return {
      search: '',
      currentPage: 1,
      showSubCategory: false,

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
    allTags() {
      return this.$store.getters['products/filterTags']
    },
    openMenuLeft() {
      return this.$store.state.openMenuLateralLeft
    },
    categorias() {
      return this.dataStore.categorias
    },
    subcategories() {
      return this.dataStore.subcategorias
    },
    etiqueta1() {
      return this.$store.state.products.payloadTagName
    },
    etiqueta2() {
      return this.$store.state.products.payloadTag2Name
    },
  },
  methods: {
    closed() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false)
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value
        if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
          window.fbq('track', 'Search', { search_string: value })
        }
      } else {
        location.href = '?search=' + ''
      }
    },
    SearchProduct(search) {
      this.$store.commit('SET_SEARCH_VALUE', search)
    },
    SendSubCategory(value) {
      this.indexSelect2 = value
      this.$store.commit('SET_PREVIOUS_PAGE', 1)
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false)
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
        path: '/productos',
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
    sendCategory(value, categoria, ref) {
      this.indexSelect = categoria
      this.$store.commit('SET_PREVIOUS_PAGE', 1)
      this.nameCategory = value.nombre_categoria_producto
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory)
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.$router.push({
        path: '/productos',
        query: { category: this.nameCategory },
      })
      this.selectedSubcategories = []
      this.subcategories.find((subcategory) => {
        if (subcategory.categoria === categoria) {
          this.selectedSubcategories.push(subcategory)
        }
      })
      if (this.selectedSubcategories.length === 0) {
        this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false)
      }
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto,
      })
    },
    clear() {
      this.$router.push({
        path: '/productos',
      })
      this.showMenu = false
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false)
      this.$store.commit('SET_CATEGORY_PRODUCTO', '')
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: '',
      })
      this.$emit('clear')
      this.nameCategory = ''
    },
  },
  watch: {
    search(value) {
      this.SearchProduct(value)
    },
  },
}
</script>

<style scoped>
.el-drawer__wrapper {
  top: 120px;
}
.content-left >>> .el-collapse {
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
  @apply w-full;
}
.content-left >>> .el-collapse-item__wrap {
  will-change: height;
  background-color: transparent;
  border-bottom: 1px solid #222;
}
.content-left >>> .el-collapse-item__header {
  font-size: 15px;
  color: #222;
  background-color: transparent;
  border-bottom: 1px solid #222;
  @apply font-semibold;
}
.content-left >>> .el-collapse-item__header.is-active {
  border-bottom: none;
}
.content-left >>> .el-collapse-item__arrow {
  color: #222;
}

.txt-Filter {
  color: #222;
  font-size: 15px;
  line-height: 1.3;
  @apply w-full flex flex-row justify-start items-center font-normal cursor-pointer pr-1 transition-all ease-in duration-0.2;
}
.txt-Filter:hover {
  color: #eb7025;
}
.txt-categorys {
  color: #222;
  font-size: 15px;
  line-height: 1.3;
  @apply w-full flex flex-row justify-start items-center font-normal cursor-pointer pr-1 transition-all ease-in duration-0.2;
}
.txt-categorys:hover {
  color: #eb7025;
}
.pagination {
  font-size: 18px;
  color: #222;
  background: transparent;
}
.wrapper_pagination >>> .el-pagination.is-background .btn-next {
  color: #222;
  background-color: transparent;
}
.wrapper_pagination >>> .el-pagination.is-background .btn-prev {
  color: #222;
  background-color: transparent;
}
.wrapper_pagination >>> .el-pagination.is-background .el-pager li {
  color: #222;
  background-color: transparent;
}
.wrapper_pagination >>> .el-pagination.is-background .btn-next:hover {
  color: #222;
}
.wrapper_pagination >>> .el-pagination.is-background .btn-prev:hover {
  color: #222;
}
.wrapper_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: #222;
}
.wrapper_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #222;
  color: #fff;
}
</style>
