<template>
  <transition name="fade">
    <div class="order" v-show="openSearch">
      <div class="order_content">
        <div class="search-input-content">
          <form onsubmit="return false">
            <input
              type="search"
              :placeholder="$t('header_buscar_producto')"
              v-model="search"
              class="input-search"
              @keyup.enter="closedSearch()"
            />
          </form>
          <div class="close-container" @click="closedSearch">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
        </div>
        <div class="products-search">
          <KProducts
            :dataStore="dataStore"
            :fullProducts="fullProducts"
            :settingKProdutCard="settingKProdutCard"
            :settingGeneral="settingGeneral"
          ></KProducts>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import KProducts from '../../../template7/Ko-ProductListSearchUp.vue'
export default {
  name: 'Ko-Search-7',
  props: {
    dataStore: Object,
    showMenu: Boolean,
    settingGeneral: Object,
    settingKProdutCard: Object,
  },
  components: {
    KProducts,
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    logoImg() {
      return this.$store.state.dataStore.tienda.logo
    },
    openSearch() {
      return this.$store.state.openSearch
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    searchValue() {
      return this.$store.state.searchValue
    },
  },
  methods: {
    // getSearch(value) {
    //   if (value) {
    //     location.href = '?search=' + value
    //     if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
    //       window.fbq('track', 'Search', { value: value })
    //     }
    //   } else {
    //     location.href = '?search=' + ''
    //   }
    //   this.closedSearch()
    // },
    closedSearch() {
      this.$store.commit('SET_OPEN_SEARCH', false)
    },
    SearchProduct(search) {
      if (search.length) {
        this.search = search
        this.$router.push({
          path: '',
          query: { search: search },
        })
        this.$store.commit('products/FILTER_BY', {
          type: ['search'],
          data: search,
        })
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['all'],
          data: '',
        })
      }
      this.currentPage = 1
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
  @apply fixed top-0 left-0 w-10/0 flex justify-center items-center bg-black z-auto bg-opacity-50;
  height: 100vh;
}
.order_content {
  @apply box-border absolute w-full flex flex-col items-center flex-none overflow-auto;
}
.order_content {
  top: 120px;
  max-width: 100%;
  height: 100vh;
  background-color: white;
  padding-bottom: 10px;
  animation: dispatch 0.2s linear 1;
  z-index: auto;
}
.search-input-content {
  @apply w-full flex flex-row justify-center items-center shadow-lg z-20;
  padding-top: 16px;
  padding-bottom: 16px;
}
.input-search {
  @apply w-full py-16 text-center items-center text-5xl z-10;
}
::-webkit-input-placeholder {
  @apply text-gray-textHeader text-center items-center text-5xl;
  font-family: 'Lora' !important;
}
input[type='search'] {
  border: none;
  width: 100%;
}
.products-search {
  width: 100%;
  overflow-y: auto;
  z-index: 10;
}

.close-container {
  @apply relative w-50 h-50 cursor-pointer flex justify-center items-center;
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
