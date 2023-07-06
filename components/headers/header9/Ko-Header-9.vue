<template>
  <div
    id="navbar"
    v-if="settingByTemplate14"
    class="w-full max-h-[120px] md:max-h-10/0 flex justify-center items-center sticky top-0 px-10 wrapper-header"
    :style="[
      settingByTemplate14[0].setting14Header,
      settingByTemplate14[0].setting14General,
      {
        '--font-style-1':
          settingByTemplate14?.setting14General?.fount_1 ?? 'Poppins',
      },
    ]"
  >
    <div id="headbg" class="w-full max-w-7xl flex justify-between items-center">
      <KoOrder :dataStore="dataStore" />
      <div class="flex justify-center items-center max-h-[120px] md:max-h-10/0">
        <nuxt-link
          to="/"
          class="w-full flex justify-center items-center"
          style="max-width: var(--with_logo)"
        >
          <img
            :src="`${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
            class="w-full object-contain object-left"
            alt="LogoStore"
            @click="clear"
          />
        </nuxt-link>
      </div>
      <div
        id="swiper-slide-categories"
        v-if="settingByTemplate14[0].pages.values"
        class="hidden md:flex flex-row justify-start items-center box-border"
      >
        <div
          v-for="(item, index) in settingByTemplate14[0].pages.values"
          :key="`${index}${item.displayName}`"
        >
          <nuxt-link v-if="!item.isExternalLink" :to="item.url">
            <p
              class="mr-20 px-8 text-16 font-semibold leading-22 transition-all ease-in duration-0.3 btn"
              :class="btnSelect == item.url ? 'btn-active' : ''"
              @click="btnActivate(item.url)"
            >
              {{ item.displayName }}
            </p>
          </nuxt-link>
          <a v-else :href="item.url" rel="noreferrer noopener" target="_blank">
            <p class="btn">
              {{ item.displayName }}
            </p>
          </a>
        </div>
      </div>
      <div
        class="hidden md:flex flex-row justify-center items-center cursor-pointer transition-all ease-in duration-0.3"
        @click="openOrder"
      >
        <i
          class="w-36 h-auto flex justify-center items-center relative cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            :fill="settingByTemplate14[0].setting14Header['--color_icon']"
            class="transition-all ease-in duration-0.2 icon-shop"
            viewBox="0 0 16 16"
          >
            <title>Cart</title>
            <path
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
            />
          </svg>
        </i>
        <div
          class="w-auto h-15 flex justify-center items-center rounded-full -mt-20 -ml-8"
          style="background-color: var(--color_border)"
        >
          <span
            class="pt-1 px-4 text-white-white text-10 leading-12 tracking-0 font-semibold num-items"
          >
            {{ productsCart }}
          </span>
        </div>
      </div>
      <button class="flex md:hidden" @click="stateMenu = !stateMenu">
        <menu-icon class="text-25" />
      </button>
      <el-drawer
        :visible.sync="stateMenu"
        direction="ttb"
        :withHeader="false"
        :modal-append-to-body="false"
        size="23%"
      >
        <div class="w-full flex flex-col justify-center items-center h-full">
          <div
            v-if="settingByTemplate14[0].pages.values"
            class="w-full h-full max-h-[100px] max-w-[300px] flex flex-col justify-center items-center overflow-y-auto"
          >
            <div
              v-for="(item, index) in settingByTemplate14[0].pages.values"
              :key="`${index}${item.displayName}`"
            >
              <nuxt-link
                v-if="!item.isExternalLink"
                :to="item.url"
                class="my-5 block"
              >
                <p
                  class="px-8 text-16 font-semibold leading-22 transition-all ease-in duration-0.3"
                  :class="btnSelect == item.url ? 'btn-active' : ''"
                  @click="btnActivate(item.url)"
                >
                  {{ item.displayName }}
                </p>
              </nuxt-link>
              <a
                v-else
                :href="item.url"
                rel="noreferrer noopener"
                class="my-5 block"
                target="_blank"
              >
                <p class="btn">
                  {{ item.displayName }}
                </p>
              </a>
            </div>
          </div>
          <button
            class="w-full max-w-[300px] text-center bg-red-500 text-white-white rounded-8 px-5 py-3 mt-20"
            @click="stateMenu = !stateMenu"
          >
            Cerrar
          </button>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    KoOrder: () => import('../_order1/order1'),
  },
  name: 'Ko-Header-9',
  props: {
    settingByTemplate14: Array,
    dataStore: Object,
  },
  data() {
    return {
      searchSelect: true,
      btnSelect: '',
      search: '',
      showSearch: false,
      stateMenu: false,
    }
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length
    },
    FacebookPixel() {
      return this.$store.state.analytics_tagmanager
    },
  },
  methods: {
    initHeader() {
      if (this.$route.fullPath == '/') {
        this.$store.commit('SET_STATE_BANNER', true)
        this.showSearch = true
      } else if (this.$route.query && this.$route.query.category) {
        this.$store.commit('SET_STATE_BANNER', false)
        this.showSearch = true
      } else if (this.$route.query && this.$route.query.subcategory) {
        this.$store.commit('SET_STATE_BANNER', false)
        this.showSearch = true
      } else if (this.$route.query && this.$route.query.search) {
        this.$store.commit('SET_STATE_BANNER', false)
        this.setSearch(this.$route.query.search)
        this.showSearch = true
      } else {
        this.showSearch = false
      }
    },
    btnActivate(value) {
      this.btnSelect = value
    },
    openSearch() {
      this.searchSelect = false
      this.$store.commit('SET_OPEN_SEARCH', true)
    },
    closedSearch() {
      this.searchSelect = true
      this.$store.commit('SET_OPEN_SEARCH', false)
    },
    openOrder() {
      this.$store.commit('SET_OPEN_ORDER', true)
    },
    openMenuLateral() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', true)
    },
    closed() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false)
    },
    clear() {
      this.$router.push({
        path: '/',
      })
      this.$store.commit('SET_STATE_BANNER', true)
    },
    SearchProduct(search) {
      this.$store.commit('SET_SEARCH_VALUE', search)
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value
        if (this.FacebookPixel && this.FacebookPixel.pixel_facebook != null) {
          window.fbq('track', 'Search', { search_string: value })
        }
      } else {
        location.href = '?search=' + ''
      }
    },
    setSearch(value) {
      this.search = decodeURIComponent(value)
    },
    focusInput() {
      document.getElementById('SearchHeader').focus()
    },
    scrollLeft() {
      document.getElementById('swiper-slide-categories').scrollLeft -= 300
    },
    scrollRight() {
      document.getElementById('swiper-slide-categories').scrollLeft += 300
    },
  },
}
</script>

<style scoped>
* {
  font-family: var(--font-style-1) !important;
}
.wrapper-header {
  padding-top: var(--padding_logo);
  padding-bottom: var(--padding_logo);
  background-color: var(--background_color_1);
  z-index: 99999999999 !important;
}

.btn-active {
  box-shadow: inset 0px -48px 0px -44px var(--color_border);
}
.btn {
  color: var(--color_text);
}
.btn:hover {
  color: var(--hover_text);
  box-shadow: inset 0px -48px 0px -44px var(--color_border);
}
</style>
