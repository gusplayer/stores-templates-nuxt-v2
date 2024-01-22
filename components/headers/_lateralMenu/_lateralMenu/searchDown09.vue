<template>
  <transition name="fade">
    <div
      v-if="openSearch"
      class="fixed top-0 left-0 w-full h-screen flex justify-end bg-[#49494971] z-20"
      @click="closeOrder"
    >
      <div
        class="absolute top-0 w-full h-[200px] md:h-[300px] bg-white-white flex justify-center items-center box-border order_content overflow-hidden"
        :style="[
          {
            '--font-style-1':
              settingByTemplate[0]?.setting9General?.fount_1 ?? 'Poppins',
          },
          {
            '--font-style-2':
              settingByTemplate[0]?.setting9General?.fount_2 ?? 'Roboto',
          },
        ]"
      >
        <div
          class="absolute right-10 top-20 w-30 h-30 cursor-pointer flex justify-center items-center group"
          @click="closedSearch"
        >
          <div
            class="h-4 w-30 absolute bg-black rounded-2 transform -rotate-45 transition-all ease-in duration-200 group-hover:rotate-0"
          ></div>
          <div
            class="h-4 w-30 absolute bg-black rounded-2 transform rotate-45 transition-all ease-in duration-200 group-hover:rotate-0"
          ></div>
        </div>
        <div
          class="w-full max-w-8/0 flex flex-col md:flex-row justify-items-center items-center py-20"
        >
          <div class="w-full h-full flex flex-row justify-start items-center">
            <input
              v-model="searchProduct"
              type="search"
              required
              class="w-full h-full text-20 md:text-35 border-none"
              :placeholder="$t('home_buscar')"
              @change="getSuggestedProducts"
              @keyup.enter="getSuggestedProducts"
            />
          </div>
          <button
            class="bg-[#2c2930] px-10 py-5 text-center text-white-white text-20 md:text-35 w-full md:w-[145px] mt-10 md:mt-0"
            @click="closedSearch"
          >
            {{ $t('home_vamos') }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'KoSearch09',
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    settingByTemplate: {
      type: Array,
      required: true,
    },
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
        if (this.facebookPixel?.pixel_facebook != null) {
          window.fbq('track', 'Search', { search_string: value })
        }
      }
    },
  },
}
</script>

<style scoped>
* {
  font-family: var(--font-style-1) !important;
}
.order_content {
  animation: dispatch 0.2s linear 1;
}
@keyframes dispatch {
  0% {
    top: -300px;
  }
  100% {
    top: 0px;
  }
}
::-webkit-input-placeholder {
  @apply text-left text-20 md:text-35 text-[#2c2930];
}
</style>
