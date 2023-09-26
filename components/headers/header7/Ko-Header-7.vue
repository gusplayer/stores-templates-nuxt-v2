<template>
  <div
    v-if="settingByTemplate11"
    class="content-header"
    :style="[
      settingByTemplate11[0].setting11Header,
      settingByTemplate11[0].setting11General,
      {
        '--font-style-1':
          settingByTemplate11[0]?.setting11General?.fount_1 ?? 'Roboto',
      },
    ]"
  >
    <div class="content-header">
      <div class="content-items-header">
        <div class="item-logo">
          <nuxt-link to="/">
            <img
              :src="`${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
              class="header-logo"
              alt="Logo-tienda"
              @click="clear"
            />
          </nuxt-link>
        </div>
        <div class="content-items-btns">
          <div class="wrapper-content-btns">
            <div class="item-menu" @click="openMenuLateral">
              <svg
                class="icon-menu"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="25px"
                height="25px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div
              v-if="settingByTemplate11[0].pages.values.length > 6"
              class="btn-scroll"
              @click="scrollLeft()"
            >
              <FlechaLeft-icon class="btn-scroll-icon" />
            </div>
            <div
              v-if="settingByTemplate11[0].pages.values"
              id="swiper-slide-categories"
              class="item-btns"
            >
              <div
                v-for="(item, index) in settingByTemplate11[0].pages.values"
                :key="`${index}${item.displayName}`"
                class="content-btns"
              >
                <nuxt-link v-if="!item.isExternalLink" :to="item.url">
                  <button class="btn">
                    {{ item.displayName }}
                  </button>
                </nuxt-link>
                <a
                  v-else
                  :href="item.url"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p class="btn">
                    {{ item.displayName }}
                  </p>
                </a>
                <div class="separator"></div>
              </div>
            </div>
            <div
              v-if="settingByTemplate11[0].pages.values.length > 6"
              class="btn-scroll"
              @click="scrollRight()"
            >
              <FlechaRight-icon class="btn-scroll-icon" />
            </div>
            <div class="item-logo-md">
              <nuxt-link to="/">
                <img
                  :src="`${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
                  class="header-logo-md"
                  alt="Logo-tienda"
                  @click="clear"
                />
              </nuxt-link>
            </div>
            <div class="item-header">
              <div class="input-animated">
                <input
                  v-model="search"
                  type="text"
                  class="input-text"
                  placeholder="¿Que deseas buscar?"
                />
                <svg
                  class="svg-search"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="25px"
                  height="25px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  />
                </svg>
              </div>
              <div class="icon-shop">
                <svg
                  class="svg-shop"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="25px"
                  height="25px"
                  @click="openOrder"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                  />
                </svg>
                <div class="item-numCart">
                  <span class="txt-numCart">{{ productsCart }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <KoOrder :data-store="dataStore" />
      <KoMenu
        :data-store="dataStore"
        :setting-by-template="settingByTemplate11"
        class="responsive"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'KoHeader7',
  components: {
    KoOrder: () => import('../_order1/order1'),
    KoMenu: () => import('../_lateralMenu/_lateralMenu11/openMenuLeft.vue'),
  },
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    settingByTemplate11: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchSelect: true,
      search: '',
      showSearch: false,
    }
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length
    },
    facebookPixel() {
      return this.$store.state.analytics_tagmanager
    },
    listArticulos() {
      return this.$store.state.listArticulos.length
    },
  },
  watch: {
    search(value) {
      this.SearchProduct(value)
    },
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.initHeader()
    },
  },
  mounted() {
    this.initHeader()
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
      if (value == 1) {
        this.btnSelect = 1
      }
      if (value == 2) {
        this.btnSelect = 2
      }
      if (value == 3) {
        this.btnSelect = 3
      }
      if (value == 4) {
        this.btnSelect = 4
      }
    },
    openOrder() {
      this.$store.commit('SET_OPEN_ORDER', true)
    },
    openMenuLateral() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', true)
    },
    clear() {
      this.$router.push({
        path: '/',
      })
      this.$store.commit('SET_STATE_BANNER', true)
    },
    setSearch(value) {
      this.search = decodeURIComponent(value)
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
.btn-scroll {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  min-height: 50px;
  padding: 0px 6px;
  background: transparent;
  cursor: pointer;
}
.btn-scroll-icon {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: var(--color_tex);
  bottom: 0.125em;
}
.btn-scroll-icon:hover {
  color: var(--hover_text);
}
.item-btns {
  max-width: 850px;
}
.content-header {
  background: var(--background_color_1);
  @apply w-full flex flex-col justify-center items-center;
}
.content-btns {
  @apply w-auto flex flex-row justify-center items-center;
}
.btn {
  color: var(--color_tex);
  font-size: 14px;
  letter-spacing: 0.8px;
  font-family: var(--font-style-1) !important;
  @apply w-auto font-normal whitespace-nowrap uppercase py-20 px-30;
}
.btn:hover {
  color: var(--hover_text);
}
.item-header {
  @apply w-full flex flex-row justify-end items-center flex-1;
}
.input-animated {
  background: transparent;
  @apply h-45 flex flex-row justify-center items-center;
}
.input-animated:hover > .input-text {
  width: 180px;
  color: var(--color_tex);
  font-size: 16px;
  @apply pl-10;
}
.input-text {
  color: var(--color_tex);
  background: transparent;
  font-size: 0px;
  transition: 0.4s;
  font-family: var(--font-style-1) !important;
  @apply w-0 outline-none;
}
.input-text:focus {
  width: 180px;
  color: var(--color_tex);
  font-size: 16px;
  @apply pl-10;
}
.input-text:focus .input-animated {
  border-color: var(--color_tex);
  @apply border;
}
::-webkit-input-placeholder {
  color: var(--color_tex);
  font-family: var(--font-style-1) !important;
  @apply text-left items-center;
}
.svg-search {
  fill: var(--color_icon);
  @apply cursor-pointer;
}
.svg-search:hover {
  fill: var(--hover_text);
}
.svg-shop,
.icon-menu {
  color: var(--color_icon);
  @apply cursor-pointer;
}
.svg-shop:hover {
  color: var(--hover_text);
}
.icon-menu:hover {
  color: var(--hover_text);
}
.icon-shop {
  @apply w-auto flex flex-row justify-center items-center ml-20;
}
@screen sm {
  .content-items-header {
    @apply w-full flex flex-col justify-center items-center py-10;
  }
  .content-items-btns {
    @apply w-full flex flex-row justify-center items-center;
  }
  .wrapper-content-btns {
    @apply w-full flex flex-row justify-between items-center px-20;
  }
  .item-logo {
    max-width: var(--with_logo);
    padding-top: var(--padding_logo);
    padding-bottom: var(--padding_logo);
    @apply w-full flex flex-col justify-center items-center;
  }
  .header-logo {
    @apply object-contain object-left w-full;
  }
  .item-btns,
  .btn-scroll {
    @apply hidden;
  }

  .item-menu {
    @apply w-auto flex flex-col justify-center items-start flex-1;
  }
  .item-numCart {
    @apply w-auto h-25 flex justify-center items-center;
  }
  .txt-numCart {
    color: var(--color_icon);
    font-size: 13px;
    font-family: var(--font-style-1) !important;
    @apply ml-5;
  }
  .item-logo-md {
    @apply hidden;
  }
}
@screen md {
  .header-logo-md {
    max-width: var(--with_logo);
  }
  .item-logo {
    @apply hidden;
  }
  .item-logo-md {
    margin-top: var(--padding_logo);
    margin-bottom: var(--padding_logo);
    max-width: var(--with_logo);
    @apply w-full flex flex-col justify-center items-center;
  }
}
@screen lg {
  .content-items-header {
    @apply pb-0;
  }
  .content-items-btns {
    border-color: var(--color_border);
    @apply border-t;
  }
  .item-logo {
    @apply flex;
  }
  .item-logo-md {
    @apply hidden;
  }
  .item-menu {
    @apply hidden;
  }
  .btn-scroll {
    @apply flex;
  }
  .item-btns {
    overflow-x: auto;
    overflow-y: hidden;
    @apply w-auto flex flex-row justify-between items-center;
  }
  .item-btns::-webkit-scrollbar {
    width: 0 !important;
    display: none;
  }
  .item-btns::-webkit-scrollbar {
    background: transparent;
    height: 5px;
    border: 1px solid rgba(161, 161, 161, 0.589);
  }
  .item-btns::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px white;
    border-radius: 10px;
  }
  .item-btns::-webkit-scrollbar-thumb {
    background: #25d366;
    border-radius: 10px;
  }
  .item-btns::-webkit-scrollbar-thumb:hover {
    background: grey;
  }
  .separator {
    background-color: var(--color_border);
    @apply w-1 h-16 flex justify-center items-center;
  }
}
@media (min-width: 1200px) {
  .wrapper-content-btns {
    max-width: 1200px;
  }
}
@media (max-width: 1024px) {
  .item-btns {
    max-width: 700px;
  }
}
</style>
