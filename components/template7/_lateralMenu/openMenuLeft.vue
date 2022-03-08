<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-show="openMenuLeft">
      <div class="order_content">
        <div class="order_header">
          <div class="empty"></div>
          <div class="header-content-logo">
            <nuxt-link to="/" class="wrapper-logo" id="tamaño-img">
              <img
                :src="`${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
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
        <div class="search-content">
          <div class="search-input-content">
            <form>
              <input
                type="text"
                :placeholder="$t('header_buscar_producto')"
                v-model="search"
                @keyup.enter="getSearch(search)"
                class="input-search"
              />
            </form>
          </div>
          <div class="search-icon-content" @click="getSearch(search)">
            <svg
              class="icon-search"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
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
              {{ $t('header_menu') }}
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
                  :to="item.path"
                  v-if="item.path && item.state"
                  class="btn"
                  >{{ $t(`${item.name}`) }}
                </nuxt-link>
                <nuxt-link
                  :to="item.href"
                  v-else-if="item.href && listArticulos > 0 && item.state"
                  class="btn"
                  >{{ $t(`${item.name}`) }}</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="content-Categorys" v-if="focusbtn">
            <template>
              <div class="wrapper-category-all">
                <li @click="clear">
                  <p class="btn-category-all">{{ $t('header_allProduct') }}</p>
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
                        <p>
                          {{ categoria.nombre_categoria_producto }}
                        </p>
                      </li>
                    </template>
                    <template v-slot:subcategorias
                      ><template>
                        <li
                          class="btn-category"
                          v-if="selectedSubcategories.length > 0"
                          @click="closed()"
                        >
                          Ver todo
                        </li>
                        <div
                          v-for="(subcategory, key) in subcategories"
                          :key="key"
                        >
                          <li
                            v-if="subcategory.categoria == categoria.id"
                            @click="Sendsubcategory(subcategory.id)"
                            class="btn-category"
                            :class="
                              subcategory.id == indexSelect2
                                ? 'text-subcategoria-active'
                                : ''
                            "
                          >
                            {{ subcategory.nombre_subcategoria }}
                          </li>
                        </div>
                      </template></template
                    >
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
import BaseAccordian from '../../template7/_lateralMenu/_BaseAccordion'
export default {
  name: 'KoMenuLeft',
  props: {
    dataStore: Object,
  },
  components: {
    BaseAccordian,
  },
  mounted() {
    this.setHoko()
  },
  data() {
    return {
      selecttag: 1,
      activeNames: [],
      focusbtn: false,
      search: '',
      add: true,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexSelect: '',
      indexSelect2: '',
      getSubcategory: false,
      secciones: [
        {
          name: 'header_inicio',
          path: '/',
          state: true,
          //icon: 'menu-icon',
        },
        {
          name: 'header_productos',
          path: '/productos',
          state: true,
        },
        {
          name: 'header_productos_hoko',
          path: '/productosHoko',
          state: false,
        },
        {
          name: 'header_contacto',
          path: '/contacto',
          state: true,
          //icon: 'account-icon',
        },
        {
          name: 'header_blog',
          href: '/blog',
          state: true,
          //icon: 'account-icon',
        },
        {
          name: 'header_carrito',
          path: '/cart',
          state: true,
          //icon: 'cart-icon',
        },
      ],
    }
  },
  computed: {
    logoImg() {
      return this.$store.state.dataStore.tienda.logo
    },
    openMenuLeft() {
      return this.$store.state.openMenulateralLeft
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
    dataHoko() {
      return this.$store.state.dataHoko
    },
  },
  methods: {
    setHoko() {
      if (this.dataHoko && this.dataHoko.statehoko == 1) {
        this.secciones[2].state = true
      } else {
        this.secciones[2].state = false
      }
    },
    selectTag1() {
      this.selecttag = 1
      this.focusbtn = false
    },
    selectTag2() {
      this.selecttag = 2
      this.focusbtn = true
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value
        if (this.facebooPixel && this.facebooPixel.pixel_facebook != null) {
          window.fbq('track', 'Search', { value: value })
        }
      } else {
        location.href = '?search=' + ''
      }
    },
    Searchproduct(search) {
      this.$store.commit('SET_SEARCHVALUE', search)
    },
    closed() {
      this.$store.commit('SET_OPENORDERMENULEFT', false)
    },
    closeOrder(event) {
      const element = event.target.className
      if (
        element === 'order responsive' ||
        element === 'order_header_close' ||
        element === 'continue_shopping' ||
        element === 'continue_shopping2'
      ) {
        this.$store.commit('SET_OPENORDERMENULEFT', false)
      }
    },
    Sendsubcategory(value) {
      this.indexSelect2 = value
      this.$router.push({
        path: '/productos',
      })
      this.$store.commit('SET_STATEBANNER', false)
      this.$store.commit('SET_PREVIOUSPAGE', 1)
      this.$store.commit('SET_OPENORDERMENULEFT', false)
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
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', this.nameSubCategory)
      this.$store.commit('products/FILTER_BY', {
        type: 'subcategory',
        data: value,
      })
    },
    sendCategory(value, categoria, ref) {
      this.indexSelect = categoria
      this.$router.push({
        path: '/productos',
      })
      this.$store.commit('SET_STATEBANNER', false)
      this.$store.commit('SET_PREVIOUSPAGE', 1)
      this.nameCategory = value.nombre_categoria_producto
      this.$store.commit('SET_CATEGORY_PRODCUTRO', this.nameCategory)
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', '')
      this.selectedSubcategories = []
      this.subcategories.find((subcategoria) => {
        if (subcategoria.categoria === categoria) {
          this.toggleCategories = false
          this.selectedSubcategories.push(subcategoria)
        }
      })
      if (this.selectedSubcategories.length === 0) {
        this.addClass()
        this.$store.commit('SET_OPENORDERMENULEFT', false)
      }
      if (ref) {
        this.addClass()
      }
      this.$store.commit('products/FILTER_BY', {
        type: 'category',
        data: value.nombre_categoria_producto,
      })
    },
    addClass() {
      this.add = !this.add
    },
    clear() {
      this.$router.push({
        path: '/productos',
      })
      this.showMenu = false
      this.$store.commit('SET_OPENORDERMENULEFT', false)
      this.$store.commit('SET_CATEGORY_PRODCUTRO', '')
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
      this.$emit('clear')
      this.addClass()
      this.nameCategory = ''
    },
  },
  watch: {
    search(value) {
      this.Searchproduct(value)
    },
    dataHoko() {
      this.setHoko()
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
  z-index: 6;
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
  padding: 5px 0px;
  @apply grid grid-cols-3 gap-4;
  justify-content: start;
  align-items: center;
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
.order_header_close {
  font-size: 30px;
  color: var(--color_icon);
  transition: 0.3s;
  cursor: pointer;
}
.order_header_close:hover {
  color: gray;
}
.wrapper-category-all {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: auto;
  /* padding: 10px 25px;
  margin-top: 10px; */
}
.name-category-all {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
}
.text-categoria {
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: var(--color_text);
}
.text-subcategoria-all {
  margin-left: 3px;
  margin-bottom: 5px;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: var(--color_text);
}
.text-subcategoria {
  margin-left: 3px;
  margin-bottom: 5px;
  width: 100%;
  font-size: 15px;
  color: var(--color_subtext);
}
.text-categoria-active {
  color: var(--color_hover_text);
}
.text-subcategoria-active {
  color: var(--color_hover_text);
}
.close-container {
  @apply relative h-40 cursor-pointer flex justify-center items-center;
}
.leftright {
  @apply h-4 w-30 absolute rounded-2 transform -rotate-45 transition-all ease-in duration-200;
}
.rightleft {
  @apply h-4 w-30 absolute rounded-2 transform rotate-45 transition-all ease-in duration-200;
}
.close-container:hover .leftright {
  @apply transform rotate-0 bg-red-btnhoverHeader;
}
.close-container:hover .rightleft {
  @apply transform rotate-0 bg-red-btnhoverHeader;
}
.leftright,
.rightleft {
  @apply bg-gray-textHeader;
}
.search-content {
  @apply flex flex-row w-full items-center shadow-xl py-14;
}
.search-input-content {
  @apply w-full;
}
.input-search {
  @apply px-10 py-2 w-full;
}
::-webkit-input-placeholder {
  font-family: 'Lora' !important;
  @apply text-gray-textHeader;
}
.search-icon-content {
  @apply w-auto h-auto justify-center items-center px-12 cursor-pointer;
}
.icon-search {
  @apply w-24 h-24 text-gray-textHeader;
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
  color: #909090;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  font-weight: 900;
  font-size: 14px;
  cursor: pointer;
  font-family: 'Lora' !important;
  transition: background-color 0.25s ease, color 0.25s ease;
  border-bottom: 1px solid rgba(129, 129, 129, 0.2);
  border-right: 1px solid rgba(129, 129, 129, 0.2);
}
.btn-lateral-menu-right {
  padding: 18px 15px;
  max-width: 50%;
  width: 50%;
  color: #909090;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  font-weight: 900;
  font-size: 14px;
  cursor: pointer;
  font-family: 'Lora' !important;
  transition: background-color 0.25s ease, color 0.25s ease;
  border-bottom: 1px solid rgba(129, 129, 129, 0.2);
}
.show-select-active {
  background-color: rgba(0, 0, 0, 0.05);
  color: #333;
  border-bottom: 2px solid #ed2353;
}
/* .btn-lateral-menu-right:focus {
  background-color: rgba(0, 0, 0, 0.05);
  color: #333;
  border-bottom: 2px solid #ed2353;
} */
.conten-Menu,
.content-Categorys {
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
  @apply w-full flex font-semibold  uppercase tracking-wider py-15 pl-20;
  border-bottom: 1px solid rgba(129, 129, 129, 0.2);
  font-family: 'Lora' !important;
  color: #2d2a2a;
  font-size: 13px;
}
.btn-category {
  @apply w-full flex font-semibold uppercase tracking-wider py-15 pl-20;
  color: #2d2a2a;
  font-size: 13px;
  font-family: 'Lora' !important;
}
.btn-category-all {
  @apply w-full flex font-semibold uppercase tracking-wider py-15 pl-20;
  color: #2d2a2a;
  font-size: 13px;
  font-family: 'Lora' !important;
  border-bottom: 1px solid rgba(129, 129, 129, 0.2);
}
@media (min-width: 1280px) {
  .order {
    @apply hidden;
  }
}
</style>
