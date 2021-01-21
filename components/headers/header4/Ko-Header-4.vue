<template>
  <div class="header-container" id="navbar" :style="settingByTemplate">
    <div class="wrapper-header">
      <div class="header" id="headerid">
        <KoOrder :dataStore="dataStore" />
        <div class="header-item-menu" @click="openMenulateral">
          <menu-icon class="header-icon-menu nav-bar" />
          <span class="header-text-menu">{{ $t('header_menu') }}</span>
        </div>
        <div class="header-content-logo">
          <nuxt-link to="/" class="wrapper-logo">
            <img
              :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
              class="header-logo"
              alt="Logo Img"
              @click="clear"
            />
          </nuxt-link>
        </div>
        <div class="header-content-buttons">
          <div v-for="(item, index) in secciones" :key="`${index}${item.name}`">
            <nuxt-link :to="item.path" v-if="item.path" class="btn"
              >{{ $t(`${item.name}`) }}
            </nuxt-link>
          </div>
        </div>
        <div class="header-content-items">
          <div v-if="showSearch">
            <div class="search" @click="openSearch">
              <form class="header-search-icon">
                <svg
                  class="search-header"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </form>
            </div>
          </div>
          <div class="empty" v-if="showSearch"></div>
          <div class="header-content-icon">
            <div class="header-content-cart" @click="openOrder">
              <svg
                class="icon-shop"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div class="border-num-items">
              <span an class="num-items">{{ productsCart }}</span>
            </div>
          </div>
        </div>
        <KoSearch :dataStore="dataStore" />
        <KoMenu :dataStore="dataStore" class="responsive" />
      </div>
    </div>
  </div>
</template>

<script>
import KoOrder from '../../template7/_lateralMenu/orderRight'
import KoMenu from '../../template7/_lateralMenu/openMenuLeft'
import KoSearch from '../../template7/_lateralMenu/searchUp'

export default {
  components: {
    KoOrder,
    KoMenu,
    KoSearch,
  },
  name: 'Ko-Header-4',
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  mounted() {
    let domain = this.$route.fullPath
    let searchCategory = domain.slice(0, [11])
    let searchSubCategory = domain.slice(0, [14])
    let search = domain.slice(0, [9])
    if (domain == '/') {
      this.$store.commit('SET_STATEBANNER', true)
      this.showSearch = true
    } else if (searchCategory === '/?category=') {
      this.$store.commit('SET_STATEBANNER', false)
      this.showSearch = true
    } else if (searchSubCategory === '/?subcategory=') {
      this.$store.commit('SET_STATEBANNER', false)
      this.showSearch = true
    } else if (search === '/?search=') {
      this.$store.commit('SET_STATEBANNER', false)
      this.setSearch(domain)
      this.showSearch = true
    } else {
      this.showSearch = false
    }
    if (domain == '/' || domain != '/') {
      this.$store.commit('SET_STATESPACERHEADERK7', true)
    }

    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      var navbar = document.getElementById('navbar')
      var header = document.getElementById('headerid')

      if (currentScrollPos == 0) {
        if (screen.width >= 300) {
          header.style.width = '100%'
        }
        if (screen.width >= 1280) {
          header.style.width = '93%'
          navbar.style.zIndex = '20'
          navbar.style.top = '30px'
        }
        if (screen.width >= 1440) {
          header.style.width = '83%'
        }
        if (screen.width >= 1920) {
          header.style.width = '63%'
        }
        if (screen.width >= 2560) {
          header.style.width = '46%'
        }
      } else if (prevScrollpos > currentScrollPos && navbar) {
        // this.$store.commit('SET_STATESPACERHEADERK7', false)
        header.style.width = '100%'
        navbar.style.zIndex = '20'
        navbar.style.top = '0px'
      } else {
        // this.$store.commit('SET_STATESPACERHEADERK7', true)
        navbar.style.zIndex = '20'
        navbar.style.top = '-100px'
      }
      prevScrollpos = currentScrollPos
    }
  },
  data() {
    return {
      search: '',
      showSearch: false,
      secciones: [
        {
          name: 'header_inicio',
          path: '/',
        },
        {
          name: 'header_productos',
          path: '/productos',
        },
        {
          name: 'header_contacto',
          path: '/contacto',
        },
        {
          name: 'header_blog',
          path: '/blog',
        },
      ],
    }
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length
    },
    facebooPixel() {
      return this.$store.state.analytics_tagmanager
    },
  },
  methods: {
    openSearch() {
      this.$store.commit('SET_OPENSEARCH', true)
    },
    closedSearch() {
      this.$store.commit('SET_OPENSEARCH', false)
    },
    openOrder() {
      this.$store.commit('SET_OPENORDER', true)
    },
    openMenulateral() {
      this.$store.commit('SET_OPENORDERMENULEFT', true)
    },
    closed() {
      this.$store.commit('SET_OPENORDERMENULEFT', false)
    },
    clear() {
      this.$router.push({
        path: '/',
      })
      this.$store.commit('SET_STATEBANNER', true)
    },
    Searchproduct(search) {
      this.$store.commit('SET_SEARCHVALUE', search)
    },
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
    setSearch(value) {
      let category = value.replace('/?search=', '')
      let UrlCategory = category.replace(/-/g, ' ')
      let urlFiltrada = decodeURIComponent(UrlCategory)
      this.search = urlFiltrada
    },
    focusInput() {
      document.getElementById('SearchHeader').focus()
    },
  },
  watch: {
    search(value) {
      this.Searchproduct(value)
    },
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      let domain = this.$route.fullPath
      let searchCategory = domain.slice(0, [11])
      let searchSubCategory = domain.slice(0, [14])
      let search = domain.slice(0, [9])
      if (domain == '/') {
        this.$store.commit('SET_STATEBANNER', true)
        this.showSearch = true
      } else if (searchCategory === '/?category=') {
        this.$store.commit('SET_STATEBANNER', false)
        this.showSearch = true
      } else if (searchSubCategory === '/?subcategory=') {
        this.$store.commit('SET_STATEBANNER', false)
        this.showSearch = true
      } else if (search === '/?search=') {
        this.$store.commit('SET_STATEBANNER', false)
        this.setSearch(domain)
        this.showSearch = true
      } else {
        this.showSearch = false
      }
    },
  },
}
</script>

<style scoped>
.header-container {
  transition: all 0.5s ease-in-out;
  @apply w-full flex flex-col justify-center items-center fixed z-10;
  top: 30px;
}
.wrapper-header {
  @apply flex flex-col w-full justify-between items-center;
}
.header {
  @apply flex w-full justify-between shadow-lg;
  background: var(--background_color_1);
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
  color: var(--color_text);
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
  color: #3f3f3f;
}
.nav-bar > .material-design-icon__svg {
  bottom: 0px;
  width: 24px;
  height: 24px;
}
.header-text-menu {
  font-family: 'Lora', serif !important;
}
.header-content-logo {
  @apply flex justify-center items-center py-1;
}
.wrapper-logo {
  @apply w-full;
}
.header-logo {
  @apply object-contain object-left max-h-16;
}
.header-content-buttons {
  @apply w-auto flex flex-wrap gap-6 justify-center items-center;
}
.btn {
  @apply mx-4 font-semibold uppercase tracking-wider text-base;
  color: var(--color_text);
  font-family: 'Lora', serif !important ;
}
.btn:hover {
  color: var(--btnhover);
}
.header-content-items {
  @apply flex flex-row justify-between items-center;
}
.header-search-icon {
  @apply w-6 h-6;
}
.search-header {
  @apply cursor-pointer;
  color: var(--color_icon);
}
.search-header:hover {
  color: var(--btnhover);
}
.empty {
  @apply mx-2;
}
.header-content-icon {
  @apply flex flex-row justify-between;
}
.header-content-cart {
  @apply flex justify-center items-center w-9 h-9 box-border pb-1 ml-5 relative cursor-pointer;
}
.icon-shop {
  @apply h-24 w-24;
  color: var(--color_icon);
}
.icon-shop:hover {
  color: var(--btnhover);
}
.border-num-items {
  @apply rounded-full h-16 w-auto flex justify-center items-center text-center -ml-3 -mt-3;
  background: var(--color_background_btn);
}
.num-items {
  @apply text-xs p-1;
  color: var(--color_text_btn);
}

/* .header-content-page {
  @apply flex grid grid-cols-2 gap-4;
}
.header-icon-cart {
  font-size: 20px;
  color: var(--color_icon);
}
.header-icon-cart:hover {
  color: var(--btnhover);
}
.responsive {
  @apply hidden;
} */

/* ***** */
@screen sm {
  .header {
    @apply w-full px-4;
  }
  .header-container {
    @apply w-full;
  }
  .header-content-buttons {
    @apply sr-only;
  }
  .header-content-cart {
    @apply pb-0 ml-0;
  }
  .header-text-menu {
    @apply sr-only;
  }
  .search-header {
    @apply sr-only;
  }
  .header-item-menu {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    /* margin-left: 20px; */
  }

  /* .responsive {
    display: initial;
  } */
}
@screen md {
  .header-text-menu {
    @apply not-sr-only font-semibold text-xs uppercase tracking-widest pl-2;
  }
}
@screen lg {
  .header {
    @apply w-full;
  }
}
@screen mlg {
  .header {
    @apply w-9/3 py-2;
  }
  .header-content-buttons {
    @apply not-sr-only;
  }
  .header-text-menu {
    @apply sr-only;
  }
  .search-header {
    @apply not-sr-only;
  }
  .header-item-menu {
    @apply sr-only;
  }
}
@screen xl {
  .header {
    @apply w-8/3;
  }
  .header-content-page {
    @apply flex w-8/3;
  }
}
@screen xml {
  .header {
    @apply w-6/3;
  }
  .header-content-page {
    @apply flex w-6/3;
  }
}

@screen xxl {
  .header {
    @apply w-4/6;
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
