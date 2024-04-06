<template>
  <el-drawer
    :visible.sync="openSearch"
    :before-close="handleClose"
    direction="btt"
    :with-header="false"
    :modal-append-to-body="false"
    class="width-drawer"
    size="80%"
  >
    <div
      class="box-border w-full h-screen flex flex-col items-center bg-white-white overflow-auto pb-10"
    >
      <div
        class="w-full flex flex-row justify-center items-center shadow-lg z-20 py-16 relative"
      >
        <input
          v-model="searchProduct"
          type="search"
          :placeholder="$t('header_buscar_producto')"
          class="input-search"
          @change="getSuggestedProducts"
          @keyup.enter="getSuggestedProducts"
        />
        <div
          class="absolute right-10 top-3/0 w-50 h-50 cursor-pointer flex justify-center items-center group"
          @click="closedSearch"
        >
          <div
            class="h-4 w-50 absolute bg-black rounded-2 transform -rotate-45 transition-all ease-in duration-200 group-hover:rotate-0"
          ></div>
          <div
            class="h-4 w-50 absolute bg-black rounded-2 transform rotate-45 transition-all ease-in duration-200 group-hover:rotate-0"
          ></div>
        </div>
      </div>
      <div class="w-full max-w-[1300px] overflow-y-auto z-10">
        <KProducts
          :data-store="dataStore"
          :search-products="ListProducts"
          :setting-card-products="settingCardProducts"
          :setting-general="settingGeneral"
        />
      </div>
    </div>
  </el-drawer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'KoSearch7',
  components: {
    KProducts: () =>
      import('@/components/template7/Ko-ProductListSearchUp.vue'),
  },
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
    settingCardProducts: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ListProducts: [],
    }
  },
  computed: {
    ...mapState(['openSearch']),
    ...mapState({
      facebookPixel: (state) => state.analytics_tagmanager,
    }),
    logoImg() {
      return this.$store.state.dataStore.logo
    },
    searchProduct: {
      get() {
        return this.$store.state.products.search_product
      },
      set(newValue) {
        this.$store.commit('products/SET_SEARCH_PRODUCT', newValue)
      },
    },
  },
  watch: {
    openSearch(value) {
      if (value === true) {
        this.getSuggestedProducts()
      }
    },
  },
  methods: {
    closedSearch() {
      this.$store.commit('SET_OPEN_SEARCH', false)
      this.$router.push({ path: '', query: '' })
    },
    handleClose() {
      this.$store.commit('SET_OPEN_SEARCH', false)
      this.$router.push({ path: '', query: '' })
    },
    async getSuggestedProducts() {
      const { success, data } = await this.$store.dispatch(
        'products/GET_ALL_PRODUCTS',
        {
          id_tienda: this.dataStore.id,
          page: 1,
          limit: 15,
          name: this.searchProduct || '',
        }
      )
      if (success) {
        this.ListProducts = data.publicProductList
        this.setInformationFromQuery({ page: 1, name: this.searchProduct })
        this.getSearch(this.searchProduct)
      } else {
        this.ListProducts = []
      }
    },
    async setInformationFromQuery({ page, name }) {
      const query = {}
      if (page !== null && page !== undefined) query.page = page
      if (name !== null) query.name = name
      try {
        await this.$router.push({ path: '', query })
      } catch (error) {
        console.error('Error navigating:', error)
      }
    },
    getSearch(value) {
      if (value) {
        if (this.facebookPixel?.pixel_facebook != null) {
          window.fbq('track', 'Search', { search_string: value })
        }
      }
    },
  },
}
</script>

<style scoped>
.input-search {
  @apply w-full max-w-[500px] py-16 text-center items-center text-5xl z-10;
}
::-webkit-input-placeholder {
  @apply text-gray-textHeader text-center items-center text-5xl;
  font-family: 'Lora' !important;
}
input[type='search'] {
  border: none;
  width: 100%;
}
</style>
