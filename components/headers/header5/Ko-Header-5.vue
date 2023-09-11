<template>
  <div
    v-if="settingByTemplate9"
    id="navbar"
    class="header-container"
    :style="[
      settingByTemplate9[0].setting9Header,
      settingByTemplate9[0].setting9General,
      {
        '--font-style-1':
          this.settingByTemplate9 &&
          this.settingByTemplate9[0].setting9General &&
          this.settingByTemplate9[0].setting9General.fount_1
            ? this.settingByTemplate9[0].setting9General.fount_1
            : 'Poppins',
      },
    ]"
  >
    <div class="wrapper-header">
      <div class="header">
        <KoOrder :dataStore="dataStore" />
        <div class="header-item-menu">
          <menu-icon
            class="header-icon-menu nav-bar"
            @click="openMenuLateral"
          />
          <svg
            @click="openSearch"
            class="search-header-left"
            data-name="search-icon-small 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            width="15"
            height="15"
          >
            <rect
              x="11.73223"
              y="10.52513"
              width="2"
              height="4.41421"
              transform="translate(-5.27386 12.73223) rotate(-45)"
            ></rect>
            <path
              d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM7,12a5,5,0,1,1,5-5A5,5,0,0,1,7,12Z"
            ></path>
          </svg>
        </div>
        <div class="header-content-buttons">
          <div v-for="(item, index) in secciones" :key="`${index}${item.name}`">
            <button
              v-if="item.path && item.state"
              class="btn"
              @click="btnActivate(item.path)"
              :class="btnSelect == item.path ? 'btn-active' : ''"
            >
              {{ $t(`${item.name}`) }}
            </button>
            <nuxt-link
              :to="item.href"
              v-else-if="item.href && listArticulos > 0 && item.state"
              class="btn"
              >{{ $t(`${item.name}`) }}</nuxt-link
            >
          </div>
        </div>
        <div class="header-content-logo">
          <nuxt-link to="/" class="wrapper-logo">
            <img
              :src="`${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
              class="header-logo"
              alt="Logo Img"
              @click="clear"
            />
          </nuxt-link>
        </div>

        <div class="header-content-items">
          <div v-if="showSearch">
            <div class="search" @click="openSearch">
              <form class="header-search-icon">
                <svg
                  class="search-header"
                  data-name="search-icon-small 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 15"
                  width="15"
                  height="15"
                >
                  <rect
                    x="11.73223"
                    y="10.52513"
                    width="2"
                    height="4.41421"
                    transform="translate(-5.27386 12.73223) rotate(-45)"
                  ></rect>
                  <path
                    d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM7,12a5,5,0,1,1,5-5A5,5,0,0,1,7,12Z"
                  ></path>
                </svg>
              </form>
            </div>
          </div>
          <div class="empty" v-if="showSearch"></div>
          <div class="header-content-icon" @click="openOrder">
            <div class="header-content-cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon-shop"
                width="14"
                height="16"
                viewBox="0 0 14 16"
              >
                <path
                  d="M11,3V0H3V3H0V16H14V3H11ZM5,2H9V3H5V2Zm7,12H2V5H3V7H5V5H9V7h2V5h1v9Z"
                ></path>
              </svg>
            </div>
            <div class="border-num-items-up">
              <span an class="num-items-up">{{ productsCart }}</span>
            </div>
            <div class="txt-bag">
              <p class="btn-bag">Carrito</p>
            </div>
            <div class="border-num-items">
              <span an class="num-items">{{ productsCart }}</span>
            </div>
          </div>
        </div>
        <KoSearch
          :dataStore="dataStore"
          :settingByTemplate9="settingByTemplate9"
        />
        <KoMenu :dataStore="dataStore" class="responsive" />
      </div>
    </div>
  </div>
</template>

<script>
import KoOrder from '../_order1/order1'
import KoMenu from '../_lateralMenu/_lateralMenu/openMenuLeft.vue'
import KoSearch from '../_lateralMenu/_lateralMenu/searchDown09.vue'

export default {
  components: {
    KoOrder,
    KoMenu,
    KoSearch,
  },
  name: 'Ko-Header-5',
  props: {
    dataStore: Object,
    settingByTemplate9: Array,
  },
  mounted() {
    this.setHoko()
    this.initHeader()
    if (this.$route.path) {
      let item = this.secciones.find((item) => {
        if (item && item.path) {
          return item.path === this.$route.path
        }
      })
      this.btnSelect = item && item.path ? item.path : ''
    }
    window.addEventListener('scroll', function () {
      var navbar = document.getElementById('navbar')
      if (window.pageYOffset > 0 && screen.width > 725 && navbar) {
        navbar.style.position = 'fixed'
      } else {
        navbar.style.position = 'static'
      }
    })
  },
  data() {
    return {
      btnSelect: '',
      search: '',
      showSearch: false,
      secciones: [
        {
          name: 'header_inicio',
          path: '/',
          state: true,
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
        },
        {
          name: 'header_blog',
          href: '/blog',
          state: true,
        },
      ],
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
    dataHoko() {
      return this.$store.state.dataHoko
    },
  },
  methods: {
    initHeader() {
      if (this.$route.fullPath == '/') {
        this.showSearch = true
      } else if (this.$route.query && this.$route.query.category) {
        this.showSearch = true
      } else if (this.$route.query && this.$route.query.subcategory) {
        this.showSearch = true
      } else if (this.$route.query && this.$route.query.search) {
        this.setSearch(this.$route.query.search)
        this.showSearch = true
      } else {
        this.showSearch = false
      }
    },
    btnActivate(value) {
      this.$router.push({
        path: value,
      })
      this.btnSelect = value
    },
    setHoko() {
      if (this.dataHoko && this.dataHoko.statehoko == 1) {
        this.secciones[2].state = true
      } else {
        this.secciones[2].state = false
      }
    },
    openSearch() {
      this.$store.commit('SET_OPEN_SEARCH', true)
    },
    // closedSearch() {
    //   this.$store.commit('SET_OPEN_SEARCH', false)
    // },
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
    },
    SearchProduct(search) {
      this.$store.commit('SET_SEARCH_VALUE', search)
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value
        if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
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
  },
  watch: {
    dataHoko() {
      this.setHoko()
    },
    search(value) {
      this.SearchProduct(value)
    },
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.initHeader()
    },
  },
}
</script>

<style scoped>
.header-container {
  border-bottom: 1px solid var(--background_color_1);
  background: var(--background_color_1);
  position: static;
  @apply w-full flex flex-col justify-center items-center top-0 z-10 transition-all ease-in-out duration-0.5;
}
.wrapper-header {
  background: var(--background_color_1);
  @apply flex flex-col w-full justify-between items-center z-10 shadow-lg;
}
.header {
  background: var(--background_color_1);
  @apply flex w-full justify-between;
}
.header-item-menu {
  @apply hidden;
}
.header-icon-menu {
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--color_icon);
}
.header-icon-menu > .material-design-icon__svg {
  bottom: 0em;
}
.nav-bar {
  width: 24px;
  height: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--color_icon);
}
.nav-bar > .material-design-icon__svg {
  bottom: 0px;
  width: 24px;
  height: 24px;
}
.header-text-menu {
  /* font-family: 'Poppins', Helvetica, Arial, sans-serif !important; */
  font-family: var(--font-style-1) !important;
}
.header-content-logo {
  margin-top: var(--padding);
  margin-bottom: var(--padding);
  @apply flex justify-center items-center;
}
.wrapper-logo {
  max-width: var(--with_logo);
  @apply w-full;
}
.header-logo {
  @apply object-contain object-left w-full;
}
.header-content-buttons {
  @apply w-auto flex flex-wrap gap-0 justify-center items-center;
}
.btn {
  margin-right: 20px;
  transition: all 0.1s ease;
  /* font-family: 'Poppins', Helvetica, Arial, sans-serif !important; */
  font-family: var(--font-style-1) !important;
  font-size: 14px;
  color: var(--color_text);
  font-weight: 600;
}
.btn-active {
  color: var(--hover_text);
  transition: all 0.1s ease;
  border-bottom: 2px solid #000;
}
.btn:hover {
  color: var(--hover_text);
  transition: all 0.1s ease;
  border-bottom: 2px solid #000;
}
.header-content-items {
  @apply flex flex-row justify-end items-center;
  flex: 1;
}
.header-search-icon {
  @apply flex justify-center items-center;
}
.search-header {
  @apply cursor-pointer;
  fill: var(--color_icon);
  transition: all 0.25s ease;
}
.search-header:hover {
  fill: var(--hover_text);
  transition: all 0.25s ease;
}
.search-header-left {
  @apply cursor-pointer;
  fill: var(--color_icon);
  transition: all 0.25s ease;
}
.search-header-left:hover {
  fill: var(--hover_text);
  transition: all 0.25s ease;
}
.empty {
  @apply mx-2;
}
.btn-bag {
  margin-right: 15px;
  transition: all 0.1s ease;
  /* font-family: 'Poppins', Helvetica, Arial, sans-serif !important; */
  font-family: var(--font-style-1) !important;
  font-size: 14px;
  color: var(--color_text);
  font-weight: 600;
}
.header-content-icon:hover .btn-bag {
  color: var(--hover_text);
  transition: all 0.25s ease;
}
.header-content-icon {
  @apply flex flex-row justify-center items-center cursor-pointer;
}
.header-content-cart {
  @apply flex justify-center items-center w-36 h-36 box-border pb-4 ml-20 relative cursor-pointer;
}
.icon-shop {
  fill: var(--color_icon);
  transition: all 0.25s ease;
}
.header-content-icon:hover .icon-shop {
  fill: var(--hover_text);
  transition: all 0.25s ease;
}
.border-num-items {
  @apply w-auto flex justify-center items-center text-center;
  /* background: var(--color_background_btn); */
}
.border-num-items-up {
  @apply w-auto flex justify-center items-center text-center;
  /* background: var(--color_background_btn); */
}
.num-items {
  /* font-family: 'Poppins', Helvetica, Arial, sans-serif !important; */
  font-family: var(--font-style-1) !important;
  color: var(--color_text);
  font-size: 14px;
  line-height: 12px;
  font-weight: 600;
  /* text-transform: capitalize; */
  letter-spacing: 0px;
  padding-left: 10px;
  padding-right: 15px;
  border-left: 1px solid var(--color_border);
  /* border-left-color: var(--color_border); */
}
.num-items-up {
  font-family: var(--font-style-1) !important;
  /* font-family: 'Poppins', Helvetica, Arial, sans-serif !important; */
  color: var(--color_text);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0px;
  margin-left: -5px;
  margin-top: -30px;
}
.header-content-icon:hover .num-items {
  color: var(--hover_text);
  transition: all 0.25s ease;
}
/* ***** */
@screen sm {
  .header {
    @apply w-full px-16;
  }
  .header-container {
    @apply w-full;
  }
  .header-content-buttons {
    @apply hidden;
  }
  .header-content-cart {
    @apply pb-0 ml-0;
  }
  .header-text-menu {
    @apply hidden;
  }
  .search-header {
    @apply hidden;
  }
  .header-item-menu {
    @apply flex flex-row justify-start items-center flex-1;
  }
  .search-header-left {
    @apply flex ml-16;
  }
  .txt-bag,
  .border-num-items {
    @apply hidden;
  }
}
@screen md {
  .header-text-menu {
    @apply flex font-semibold text-xs uppercase tracking-widest pl-8;
  }
}
@media (min-width: 640px) {
  .border-num-items-up {
    @apply hidden;
  }
  .txt-bag,
  .border-num-items {
    @apply flex;
  }
  .search-header-left {
    @apply ml-32;
  }
}
@screen lg {
  .header {
    @apply w-full;
  }
  .search-header-left {
    @apply hidden;
  }
  .search-header {
    @apply flex;
  }
  .header-content-buttons {
    @apply flex justify-start items-center flex-1;
  }
  .header-item-menu {
    @apply hidden;
  }
}
@media (max-width: 768px) {
  .search {
    display: none;
  }
  .header-logo {
    max-width: 230px;
  }
}
</style>
