<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-show="openSearch">
      <div
        class="order_content"
        :style="[
          {
            '--font-style-1':
              this.settingByTemplate9 &&
              this.settingByTemplate9[0].setting9General &&
              this.settingByTemplate9[0].setting9General.fount_1
                ? this.settingByTemplate9[0].setting9General.fount_1
                : 'Poppins',
          },
          {
            '--font-style-2':
              this.settingByTemplate9 &&
              this.settingByTemplate9[0].setting9General &&
              this.settingByTemplate9[0].setting9General.fount_2
                ? this.settingByTemplate9[0].setting9General.fount_2
                : 'Roboto',
          },
        ]"
      >
        <div class="close-container" @click="closedSearch">
          <div class="content-close">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
        </div>
        <div class="products-search">
          <div class="search-input-content">
            <form class="form-search">
              <div class="cont-search-up">
                <p class="txt-search-up">{{ $t('home_buscar') }}</p>
              </div>
              <input
                type="search "
                :placeholder="$t('home_buscar')"
                v-model="search"
                class="input-search"
              />
            </form>
          </div>
          <div class="cont-btn">
            <button class="content-btn" @click="closedSearch">
              <span class="btn-txt">{{ $t('home_vamos') }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Ko-Search',
  props: {
    showMenu: Boolean,
    settingByTemplate9: Array,
  },
  components: {},

  data() {
    return {
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
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
  },
  methods: {
    focusInput() {
      document.getElementById('SearchHeader').focus()
    },
    closedSearch() {
      this.$store.commit('SET_OPEN_SEARCH', false)
    },
    closeOrder(event) {
      const element = event.target.className
      if (element === 'order') {
        this.$store.commit('SET_OPEN_SEARCH', false)
      }
    },
    SearchProduct(search) {
      this.$store.commit('SET_SEARCH_VALUE', search)
      if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
        window.fbq('track', 'Search', { search_string: search })
      }
      this.$router.push({
        path: '/productos',
        query: { search: search },
      })
    },
    SendSubCategory(value) {
      this.indexSelect2 = value
      this.$store.commit('SET_PREVIOUS_PAGE', 1)
      this.$store.commit('SET_OPEN_SEARCH', false)
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
      this.selectedSubcategories = []
      this.$router.push({
        path: '/productos',
        query: { category: this.nameCategory },
      })
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
    },
    clear() {
      this.$router.push({
        path: '/productos',
        query: {},
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
  position: absolute;
  top: 0px;
  width: 100%;
  height: 300px;
  /* background-color: var(--background_color_1); */
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: none;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 10px;
  animation: dispatch 0.2s linear 1;
  overflow: hidden;
}
@keyframes dispatch {
  0% {
    top: -300px;
  }
  100% {
    top: 0px;
  }
}
.products-search {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  z-index: 10;
}
input[type='search'] {
  border: none;
  width: 100%;
}
.search-input-content {
  @apply w-full flex flex-row justify-start items-center z-20;
  font-size: 40px;
  color: #000;
  font-weight: 800;
  /* font-family: 'Poppins', sans-serif; */
  font-family: var(--font-style-1) !important;
}
.input-search {
  @apply w-full items-center z-10;
}
::-webkit-input-placeholder {
  @apply text-left items-center;
  font-size: 40px;
  font-weight: 800;
  color: #000;
  padding-left: 5px;
  /* font-family: 'Poppins', sans-serif; */
  font-family: var(--font-style-1) !important;
}
.form-search:focus .cont-search-up {
  display: flex;
}
.cont-search-up {
  @apply -mt-4;
  display: none;
}
.txt-search-up {
  font-size: 40px;
  /* font-family: 'Poppins', sans-serif; */
  font-family: var(--font-style-1) !important;
  font-weight: 800;
  margin-left: 10px;
  color: #2c2930;
}
/* -----------------------BTN--------------------------- */
.cont-btn {
  @apply h-full flex flex-col justify-center items-center;
}
.content-btn {
  display: flex;
  justify-content: center;
  align-content: center;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #2c2930;
}
.content-btn:hover {
  @apply shadow-lg;
  background-color: #edeaea;
}
.content-btn:hover .btn-txt {
  color: #2c2930;
}
.btn-txt {
  color: #fff;
  /* font-family: 'Roboto', Helvetica, Arial, sans-serif; */
  font-family: var(--font-style-2) !important;
  font-size: 23px;
  font-weight: 800;
  /* padding-left: 60px;
  padding-right: 60px; */
}

/* ----------------------------------------------------- */
.close-container {
  @apply relative w-9/8 h-50 flex justify-end items-center;
}
.leftright {
  @apply h-2 w-20 absolute bg-black rounded-2 transform -rotate-45 transition-all ease-in duration-200;
}
.rightleft {
  @apply h-2 w-20 absolute bg-black rounded-2 transform rotate-45 transition-all ease-in duration-200;
}
.content-close {
  @apply flex justify-center items-center cursor-pointer;
  width: 20px;
  height: 20px;
}
.content-close:hover .leftright {
  @apply transform rotate-0;
}
.content-close:hover .rightleft {
  @apply transform rotate-0;
}
@screen sm {
  .products-search {
    @apply w-full flex flex-col justify-items-center items-center;
  }
  .search-input-content {
    @apply w-7/0;
  }
  .cont-btn {
    @apply w-7/0 h-auto;
  }
  .content-btn {
    @apply w-full;
    height: 48px;
  }
  .content-close {
    margin-right: 20px;
    margin-top: 20px;
  }
}
@media (min-width: 480px) {
  .products-search {
    @apply flex flex-row;
  }
  .search-input-content {
    @apply w-auto;
  }
  .cont-btn {
    @apply w-auto h-auto;
  }
  .content-btn {
    width: 80px;
    height: 48px;
  }
}
@media (min-width: 640px) {
  .content-btn {
    width: 180px;
  }
}
@screen md {
  .products-search {
    @apply -mt-6;
  }
  .search-input-content {
    @apply w-6/0;
  }
}
@screen xl {
  .search-input-content {
    @apply w-7/0;
  }
}
@screen xml {
  .search-input-content {
    @apply w-8/0;
  }
}
</style>
