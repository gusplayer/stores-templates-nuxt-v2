<template>
  <el-drawer
    :visible.sync="openSearch"
    direction="ttb"
    :withHeader="false"
    :modal-append-to-body="false"
    size="20%"
  >
    <div class="w-full px-20 flex justify-end my-15">
      <window-close-icon
        class="text-25 text-red-500 hover:text-red-800"
        @click="closedSearch"
      />
    </div>
    <div class="w-full flex flex-col justify-center items-center">
      <div
        class="w-full max-w-[350px] flex flex-col justify-center items-center"
      >
        <input
          v-model="searchProduct"
          type="search "
          :placeholder="$t('home_buscar')"
          class="w-full border-b border-gray-200 text-black"
          @change="getSuggestedProducts"
          @keyup.enter="getSuggestedProducts"
        />
        <button
          class="w-full text-center bg-black text-white-white rounded-8 px-5 py-3 mt-20"
          @click="closedSearch"
        >
          {{ $t('home_vamos') }}
        </button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Ko14Search',
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapState(['openSearch']),
    ...mapState({
      facebookPixel: (state) => state.analytics_tagmanager,
    }),
    searchProduct: {
      get() {
        return this.$store.state.products.search_product
      },
      set(newValue) {
        this.$store.commit('products/SET_SEARCH_PRODUCT', newValue)
      },
    },
  },
  methods: {
    closedSearch() {
      this.$store.commit('SET_OPEN_SEARCH', false)
    },
    closeOrder(event) {
      const element = event.target.className
      if (element === 'order') {
        this.closedSearch()
      }
    },
    async getSuggestedProducts() {
      this.setInformationFromQuery({ page: 1, name: this.searchProduct })
      this.getSearch(this.searchProduct)
    },
    async setInformationFromQuery({ page, name }) {
      const query = {}
      if (page !== null && page !== undefined) query.page = page
      if (name !== null) this.searchProduct = name
      try {
        this.$router.push({
          path: '/productos',
          query: { name: this.searchProduct },
        })
        this.closedSearch()
      } catch (error) {
        console.error('Error navigating:', error)
      }
    },
    getSearch(value) {
      if (value) {
        if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
          window.fbq('track', 'Search', { search_string: value })
        }
      }
    },
  },
}
</script>
