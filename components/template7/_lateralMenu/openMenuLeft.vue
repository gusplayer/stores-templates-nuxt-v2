<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-show="openMenuLeft">
      <div class="order_content">
        <div class="order_header">
          <div class="w-16"></div>
          <div class="header-content-logo">
            <nuxt-link to="/" class="wrapper-logo" id="tamaño-img">
              <img
                :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
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
          <div class="search-icon-content">
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
              v-on:click="focusbtn = false"
            >
              {{ $t('header_menu') }}
            </button>
            <button class="btn-lateral-menu-right" v-on:click="focusbtn = true">
              {{ $t('header_categorias') }}
            </button>
          </div>
          <div class="conten-Menu" v-if="!focusbtn">
            <div class="header-content-buttons">
              <div
                v-for="(item, index) in secciones"
                :key="`${index}${item.name}`"
              >
                <nuxt-link :to="item.path" v-if="item.path" class="btn"
                  >{{ $t(`${item.name}`) }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <!-- <div class="content-Categorys" v-if="focusbtn">
            <div class="tab w-full overflow-hidden">
              <input
                class="absolute opacity-0"
                id="tab-multi-one"
                type="checkbox"
                name="tabs"
              />
              <div class="flex flex-row" @click="toggleItem">
                <label class="btn" for="tab-multi-one">{{
                  $t('header_categorias')
                }}</label>
                <button class="svg-content" for="tab-multi-one">
                  <label for="tab-multi-one">
                    <svg
                      v-if="!show"
                      class="svg-acordeon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      v-if="show"
                      class="svg-acordeon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </label>
                </button>
              </div>
              <div
                class="tab-content overflow-hidden border-l-2 leading-normal"
              >
                <div v-for="(item, index) in dataStore.categorias" :key="index">
                  <p
                    class="btn"
                    @click="sendCategory(item, item.id, index, (ref = false))"
                  >
                    {{ item.nombre_categoria_producto }}
                  </p>
                </div>
              </div>
            </div>
          </div> -->
          <div class="content-Categorys" v-if="focusbtn">
            <div class="header-content-buttons">
              <div v-for="(item, index) in dataStore.categorias" :key="index">
                <p
                  class="btn"
                  @click="sendCategory(item, item.id, index, (ref = false))"
                >
                  {{ item.nombre_categoria_producto }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'KoMenuLeft',
  props: {
    dataStore: Object,
    showMenu: Boolean,
  },
  components: {},
  mounted() {
    window.onload = function () {
      document.getElementById('btnfocus').focus()
    }
  },
  data() {
    return {
      focusbtn: false,
      add: true,
      show: false,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexSelect: '',
      search: '',
      indexSelect2: '',
      secciones: [
        {
          name: 'header_inicio',
          path: '/',
          //icon: 'menu-icon',
        },
        {
          name: 'header_contacto',
          path: '/contacto',
          //icon: 'account-icon',
        },
        {
          name: 'header_blog',
          path: '/blog',
          //icon: 'account-icon',
        },
        {
          name: 'header_carrito',
          path: '/cart',
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
  },
  methods: {
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
    toggleItem: function () {
      this.show = !this.show
    },
    focusInput() {
      document.getElementById('SearchHeader').focus()
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
    Searchproduct(search) {
      this.$store.commit('SET_SEARCHVALUE', search)
    },
    Sendsubcategory(value) {
      this.indexSelect2 = value
      this.$router.push({
        path: '/productos',
      })
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
        path: '/',
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
  },
}
</script>

<style scoped>
.close-container {
  @apply relative w-30 h-50 cursor-pointer flex justify-center items-center ml-12;
}
.leftright {
  @apply h-4 w-30 absolute rounded-2 transform -rotate-45 transition-all ease-in duration-200;
}
.rightleft {
  @apply h-4 w-30 absolute rounded-2 transform rotate-45 transition-all ease-in duration-200;
}
.close-container:hover .leftright {
  @apply transform rotate-0;
  background: var(--btnhover);
}
.close-container:hover .rightleft {
  @apply transform rotate-0;
  background: var(--btnhover);
}
.leftright,
.rightleft {
  background: var(--color_icon);
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
  font-family: 'Lora', serif !important;
  transition: background-color 0.25s ease, color 0.25s ease;
  border-bottom: 1px solid rgba(129, 129, 129, 0.2);
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
  font-family: 'Lora', serif !important;
  transition: background-color 0.25s ease, color 0.25s ease;
  border-bottom: 1px solid rgba(129, 129, 129, 0.2);
}
.btn-lateral-menu-left:focus {
  background-color: rgba(0, 0, 0, 0.05);
  color: #333;
  border-bottom: 2px solid #ed2353;
}
.btn-lateral-menu-right:focus {
  background-color: rgba(0, 0, 0, 0.05);
  color: #333;
  border-bottom: 2px solid #ed2353;
}
.conten-Menu,
.content-Categorys {
  @apply w-full flex flex-col justify-start items-center;
}
.text-acordion {
  @apply block leading-normal flex justify-between cursor-pointer;
}
.svg-content {
  @apply border-l border-b border-gray-textHeader text-gray-textHeader;
}
.svg-content:scope {
  @apply bg-red-btnbannershop text-white-white;
}
.svg-acordeon {
  @apply h-12 w-12 cursor-pointer;
}
.search-content {
  @apply flex flex-row w-full items-center shadow-xl py-2;
}
.search-input-content {
  @apply w-full;
}
.input-search {
  @apply px-2 py-2 w-full;
}
::-webkit-input-placeholder {
  @apply text-gray-textHeader;
}
.search-icon-content {
  @apply w-auto h-auto justify-center items-center px-3 cursor-pointer;
}
.icon-search {
  @apply w-6 h-6 text-gray-textHeader;
}
.order {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 15;
}
.order_content {
  @apply box-border absolute w-full flex flex-col items-center flex-none overflow-auto overflow-hidden;
}
.order_content {
  left: 0px;
  max-width: 300px;
  height: 100vh;
  background-color: var(--background_color_1);
  padding-bottom: 10px;
  animation: dispatch 0.2s linear 1;
}
.order_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color_border);
  padding: 5px 30px;
}
.wrapper-logo {
  width: 100%;
}
.header-logo {
  max-height: 60px;
  object-fit: contain;
  object-position: left;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(200px);
  margin-left: 150px;
  opacity: 0;
}
.header-content-buttons {
  @apply w-full grid grid-cols-1 justify-start items-center;
}
.btn {
  @apply w-full flex font-semibold text-gray-textHeader uppercase tracking-wider text-base py-3 pl-4;
  border-bottom: 1px solid rgba(129, 129, 129, 0.2);
}
.btn {
  font-family: 'Lora', serif !important ;
}
.text-acordion {
  font-family: 'Lora', serif !important ;
}

/* content - closed */
.tab-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
  /* -webkit-transition: min-height .35s;
    -o-transition: min-height .35s;
    transition: min-height .35s; */
}
/* :checked - resize to full height */
.tab input:checked ~ .tab-content {
  max-height: 100vh;
}
</style>
