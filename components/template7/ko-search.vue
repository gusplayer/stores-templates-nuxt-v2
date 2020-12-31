<template>
  <transition name="fade">
    <div class="order" v-show="openSearch">
      <div class="order_content">
        <div class="search-input-content">
          <input
            type="text"
            :placeholder="$t('header_buscar_producto')"
            v-model="search"
            class="input-search"
          />
          <div class="close-container" @click="closedSearch">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'KoSearch',
  props: {
    dataStore: Object,
    showMenu: Boolean,
  },
  components: {},

  data() {
    return {
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
    openSearch() {
      return this.$store.state.openSearch
    },
    categorias() {
      return this.dataStore.categorias
    },
    subcategories() {
      return this.dataStore.subcategorias
    },
  },
  methods: {
    toggleItem: function () {
      this.show = !this.show
    },
    focusInput() {
      document.getElementById('SearchHeader').focus()
    },
    closedSearch() {
      this.$store.commit('SET_OPENSEARCH', false)
    },
    closeOrder(event) {
      const element = event.target.className
      if (element === 'order' || element === 'order_header_close') {
        this.$store.commit('SET_OPENSEARCH', false)
      }
    },
    Searchproduct(search) {
      this.$store.commit('SET_SEARCHVALUE', search)
    },
    Sendsubcategory(value) {
      this.indexSelect2 = value
      this.$router.push({
        path: '/',
      })
      this.$store.commit('SET_PREVIOUSPAGE', 1)
      this.$store.commit('SET_OPENSEARCH', false)
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
        path: '/',
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
.search-input-content {
  @apply w-full flex flex-row justify-start items-center shadow-lg;
}
.input-search {
  @apply w-full py-4 text-center items-center text-5xl;
}
::-webkit-input-placeholder {
  @apply text-gray-textHeader text-center items-center text-5xl;
}
.order {
  @apply fixed top-0 left-0 w-10/0 flex justify-center items-center bg-black z-auto bg-opacity-50;
  height: 100vh;
}
.order_content {
  @apply box-border absolute w-full flex flex-col items-center flex-none overflow-auto overflow-hidden;
}
.order_content {
  top: 120px;
  max-width: 100%;
  height: 100vh;
  background-color: var(--background_color_1);
  padding-bottom: 10px;
  animation: dispatch 0.2s linear 1;
  z-index: auto;
}
.order_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color_border);
  padding: 5px 30px;
  flex: none;
}
.order_header_close {
  @apply cursor-pointer transition duration-300;
  font-size: 30px;
}
.order_header_close:hover {
  color: gray;
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
  /* transform: translateX(200px); */
  margin-left: 150px;
  opacity: 0;
}
/* content - sclosedSearch */
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
.close-container {
  @apply relative w-50 h-50 cursor-pointer flex justify-center items-center mr-6;
}
.leftright {
  @apply h-4 w-50 absolute bg-black rounded-2 transform -rotate-45 transition-all ease-in duration-200;
}
.rightleft {
  @apply h-4 w-50 absolute bg-black rounded-2 transform rotate-45 transition-all ease-in duration-200;
}
.close-container:hover .leftright {
  @apply transform rotate-0;
}
.close-container:hover .rightleft {
  @apply transform rotate-0;
}
</style>
