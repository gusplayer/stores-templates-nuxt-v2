<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-show="openMenuLeft">
      <div class="order_content">
        <div class="order_header">
          <div class="header-content-logo">
            <nuxt-link to="/" class="wrapper-logo" id="tamaño-img">
              <img
                v-lazy="
                  `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`
                "
                class="header-logo"
                alt="Logo Img"
              />
            </nuxt-link>
          </div>
          <div class="close-container" @click="closed">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
        </div>
        <div class="content-lateral-menu">
          <div class="content-btns-lateral-menu">
            <button
              id="btnfocus"
              class="btn-lateral-menu-left"
              @click="selectTag1"
              :class="selecttag == 1 ? 'show-select-active' : ''"
            >
              {{ $t('header_inicio') }}
            </button>
            <button
              class="btn-lateral-menu-right"
              @click="selectTag2"
              :class="selecttag == 2 ? 'show-select-active' : ''"
              v-if="categorias && categorias.length > 0"
            >
              {{ $t('header_categorias') }}
            </button>
          </div>
          <div class="conten-Menu" v-if="!focusbtn">
            <div class="header-content-buttons">
              <div
                v-for="(item, index) in secciones"
                :key="`${index}${item.name}`"
                @click="closed"
              >
                <nuxt-link
                  :to="`/wa/${dataStore.tienda.id_tienda}${item.path}`"
                  v-if="item.path && item.state"
                  class="btn"
                >
                  {{ $t(`${item.name}`) }}
                </nuxt-link>
                <nuxt-link
                  :to="`/wa/${dataStore.tienda.id_tienda}${item.href}`"
                  v-else-if="item.href && listArticulos > 0 && item.state"
                  class="btn"
                >
                  {{ $t(`${item.name}`) }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="content-Categorys" v-if="focusbtn">
            <template>
              <div class="wrapper-category-all">
                <li @click="clear">
                  <p class="btn-category-all">
                    {{ $t('header_buscar_limpiar') }}
                  </p>
                </li>
                <div v-for="categoria in categorias" :key="categoria.id">
                  <BaseAccordian>
                    <template v-slot:categorias>
                      <li
                        class="btn-category"
                        @click="
                          sendCategory(categoria, categoria.id, (ref = false))
                        "
                        :class="
                          categoria.id == indexSelect
                            ? 'text-categoria-active'
                            : ''
                        "
                      >
                        {{ categoria.nombre_categoria_producto }}
                      </li>
                    </template>
                    <template v-slot:subcategorias>
                      <template>
                        <!-- <li
                          class="btn-category"
                          v-if="selectedSubcategories.length > 0"
                          @click="closed()"
                        >
                          Ver todo
                        </li> -->
                        <div
                          v-for="(subcategory, key) in subcategories"
                          :key="key"
                        >
                          <li
                            v-if="subcategory.categoria == categoria.id"
                            @click="SendSubCategory(subcategory.id)"
                            class="btn-category"
                            :class="
                              subcategory.id == indexSelect2
                                ? 'text-subcategoria-active'
                                : ''
                            "
                          >
                            <p class="txt-sub-li">
                              {{ subcategory.nombre_subcategoria }}
                            </p>
                          </li>
                        </div>
                      </template>
                    </template>
                  </BaseAccordian>
                </div>
                <div
                  v-for="(itemsTags, index) in allTags"
                  :key="index"
                  v-show="allTags && allTags.length > 0"
                >
                  <BaseAccordian
                    v-if="
                      itemsTags &&
                      itemsTags.status === 1 &&
                      itemsTags.properties.length > 0
                    "
                  >
                    <template v-slot:categorias>
                      <li class="btn-category">
                        {{ itemsTags.name }}
                      </li>
                    </template>
                    <template v-slot:subcategorias>
                      <template>
                        <div
                          v-for="itemsProperties in itemsTags.properties"
                          :key="itemsProperties.id"
                          v-show="itemsProperties.status === 1"
                        >
                          <li
                            class="btn-category"
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
                                ? 'text-subcategoria-active'
                                : '' || itemsProperties.name == etiqueta2
                                ? 'text-subcategoria-active'
                                : ''
                            "
                          >
                            <p class="txt-sub-li">
                              {{ itemsProperties.name }}
                            </p>
                          </li>
                        </div>
                      </template>
                    </template>
                  </BaseAccordian>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseAccordian from '../_BaseAccordion.vue'
import filterProducts from '../../../../mixins/filterProducts'
export default {
  name: 'Ko-MenuLeft-1',
  props: {
    dataStore: Object,
  },
  mixins: [filterProducts],
  components: {
    BaseAccordian,
  },
  data() {
    return {
      selecttag: 1,
      focusbtn: false,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexSelect: '',
      indexSelect2: '',
      secciones: [
        {
          name: 'header_inicio',
          path: '/',
          state: true,
        },
        {
          name: 'header_blog',
          href: '/blog',
          state: true,
        },
        {
          name: 'footer_micompra',
          path: '/micompra',
          state: true,
        },
      ],
    }
  },
  computed: {
    logoImg() {
      return this.$store.state.dataStore.tienda.logo
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
    listArticulos() {
      return this.$store.state.listArticulos.length
    },
    allTags() {
      return this.$store.getters['products/filterTags']
    },
    etiqueta1() {
      return this.$store.state.products.payloadTagName
    },
    etiqueta2() {
      return this.$store.state.products.payloadTag2Name
    },
  },
  methods: {
    selectTag1() {
      this.selecttag = 1
      this.focusbtn = false
    },
    selectTag2() {
      this.selecttag = 2
      this.focusbtn = true
    },
    closed() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false)
    },
    closeOrder(event) {
      const element = event.target.className
      console.log(element)
      if (
        element === 'order ' ||
        element === 'leftright' ||
        element === 'rightleft'
      ) {
        this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false)
      }
    },
    SendSubCategory(value) {
      this.indexSelect2 = value
      if (this.stateWapiME) {
        this.$router.push(`/wa/${this.dataStore.tienda.id_tienda}`)
      } else {
        this.$router.push(`/`)
      }
      this.$store.commit('SET_STATE_BANNER', false)
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false)
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
      this.$store.commit('SET_PREVIOUS_PAGE', 1)
    },
    sendCategory(value, categoria, ref) {
      this.indexSelect = categoria
      if (this.stateWapiME) {
        this.$router.push(`/wa/${this.dataStore.tienda.id_tienda}`)
      } else {
        this.$router.push(`/`)
      }
      this.$store.commit('SET_STATE_BANNER', false)
      this.nameCategory = value.nombre_categoria_producto
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory)
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
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
      this.$store.commit('SET_PREVIOUS_PAGE', 1)
      if (this.selectedSubcategories.length === 0) {
        this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false)
      }
    },
    clear() {
      this.$store.commit('SET_STATE_BANNER', true)
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false)
      this.$store.commit('SET_CATEGORY_PRODUCTO', '')
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: '',
      })
      this.$emit('clear')
      this.nameCategory = ''
    },
  },
}
</script>

<style scoped>
.order {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  transition: all 0.25s ease;
}
.order_content {
  position: absolute;
  left: 0px;
  max-width: 300px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 10px;
  animation: dispatch 0.2s linear 1;
  overflow: hidden;
}
@keyframes dispatch {
  0% {
    left: -300px;
  }
  100% {
    left: 0px;
  }
}
.order_content > div {
  width: 100%;
  box-sizing: border-box;
  list-style: none;
}
.order_header {
  height: 80px;
  max-height: 80px;
  @apply relative flex flex-row justify-between items-center px-10;
  border-bottom: 1px solid rgba(129, 129, 129, 0.2);
}
.header-content-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper-logo {
  width: 100%;
}
.header-logo {
  max-height: 60px;
  object-fit: contain;
  object-position: left;
}
.wrapper-category-all {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: auto;
}
.text-categoria {
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #2c2930;
}
.text-subcategoria {
  margin-left: 3px;
  margin-bottom: 5px;
  width: 100%;
  font-size: 15px;
  color: #2c2930;
}
.text-categoria-active {
  color: #2c2930;
}
.text-subcategoria-active {
  color: #2c2930;
}
.close-container {
  right: 30px;
  max-width: 50px;
  @apply absolute h-50 cursor-pointer flex justify-center items-center z-10;
}
.leftright {
  @apply h-4 w-30 absolute rounded-2 transform -rotate-45 transition-all ease-in duration-200;
}
.rightleft {
  @apply h-4 w-30 absolute rounded-2 transform rotate-45 transition-all ease-in duration-200;
}
.close-container:hover .leftright {
  @apply transform rotate-0 bg-black;
}
.close-container:hover .rightleft {
  @apply transform rotate-0 bg-black;
}
.leftright,
.rightleft {
  background-color: #2c2930;
}
.content-lateral-menu {
  @apply w-full flex flex-col justify-center items-center;
}
.content-btns-lateral-menu {
  @apply w-full flex flex-row justify-center items-center;
}
.btn-lateral-menu-right:focus .conten-Menu {
  @apply hidden;
}
.btn-lateral-menu-left {
  padding: 18px 15px;
  max-width: 50%;
  width: 50%;
  color: #2c2930;
  text-align: center;
  letter-spacing: 0px;
  font-weight: 600;
  /* text-transform: capitalize; */
  font-size: 14px;
  cursor: pointer;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  transition: background-color 0.25s ease, color 0.25s ease;
  border-bottom: 3px solid #2c2930;
}
.btn-lateral-menu-right {
  padding: 18px 15px;
  max-width: 50%;
  width: 50%;
  color: #2c2930;
  text-align: center;
  letter-spacing: 0px;
  font-weight: 600;
  /* text-transform: capitalize; */
  font-size: 14px;
  cursor: pointer;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  transition: background-color 0.25s ease, color 0.25s ease;
  border-bottom: 3px solid #2c2930;
}
.show-select-active {
  background-color: #2c2930;
  color: #fff;
}
.conten-Menu,
.content-Categorys {
  margin-top: 20px;
  @apply w-full flex flex-col justify-start items-center;
}
.content-Categorys {
  max-height: 670px;
  overflow-y: scroll;
}
.collapse-category {
  @apply w-full;
}
.header-content-buttons {
  @apply w-full grid grid-cols-1 justify-start items-center;
}
.btn {
  @apply w-full flex font-semibold tracking-wider py-3 px-20;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0px;
  text-align: start;
  border-bottom: 1px solid #e7e7e7;
}
.btn:hover {
  border-bottom: 1px solid #000;
}
.btn-category {
  @apply w-full flex font-semibold  tracking-wider py-3 px-20;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0px;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
}
.btn-category-all {
  @apply w-full flex font-semibold  tracking-wider py-3 px-20;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0px;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
}
.txt-sub-li {
  font-size: 14px;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  font-weight: 400;
  color: #000;
}

/* @media (min-width: 1280px) {
  .order {
    @apply hidden;
  }
} */
</style>
