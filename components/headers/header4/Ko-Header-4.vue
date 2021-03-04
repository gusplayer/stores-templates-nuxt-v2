<template>
  <div
    class="header-container"
    id="navbar"
    :style="[settingByTemplate7h, settingByTemplate7General]"
  >
    <div
      class="wrapper-header"
      id="headbg"
      :style="[
        {
          '--font-style-1':
            this.settingByTemplate7General &&
            this.settingByTemplate7General.fount_1
              ? this.settingByTemplate7General.fount_1
              : 'David libre',
        },
        {
          '--font-style-3':
            this.settingByTemplate7General &&
            this.settingByTemplate7General.fount_3
              ? this.settingByTemplate7General.fount_3
              : 'Lora',
        },
      ]"
    >
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
            <nuxt-link
              :to="item.href"
              v-else-if="item.href && listArticulos > 0"
              class="btn"
              >{{ $t(`${item.name}`) }}</nuxt-link
            >
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
    settingByTemplate7h: Object,
    settingByTemplate7General: Object,
  },
  mounted() {
    let colorBg = ''
    if (this.settingByTemplate7h) {
      colorBg = this.settingByTemplate7h['--background_color_1']
    } else {
      colorBg = '#ffffff'
    }
    let domain = this.$route.fullPath
    let result = domain.split('/')
    let search = result[result.length - 1].slice(0, [8])
    if (domain == '/') {
      this.showSearch = true
    } else if (search == '?search=') {
      this.showSearch = true
      this.setSearch(domain)
    } else {
      this.showSearch = false
    }

    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      var navbar = document.getElementById('navbar')
      var header = document.getElementById('headerid')
      var bghead = document.getElementById('headbg')

      if (currentScrollPos == 0) {
        if (screen.width >= 300) {
          header.style.width = '100%'
          bghead.style.backgroundColor = 'transparent'
          bghead.style.boxShadow = '0px 0px 0px 0px'
          header.style.boxShadow =
            '0px 22px 11px -12px rgba(145, 145, 145, 0.57)'
        }
        if (screen.width >= 1280) {
          header.style.width = '93%'
          navbar.style.zIndex = '20'
          navbar.style.top = '30px'
        }
      } else if (prevScrollpos > currentScrollPos && navbar) {
        //sube
        navbar.style.top = '0px'
        navbar.style.zIndex = '20'
        bghead.style.backgroundColor = colorBg
        header.style.boxShadow = '0px 0px 0px 0px'
        bghead.style.boxShadow = '0px 22px 11px -12px rgba(145,145,145,0.57)'

        if (screen.width >= 300) {
          header.style.width = '100%'
        }
        if (screen.width >= 1280) {
          header.style.width = '93%'
        }
      } else {
        navbar.style.zIndex = '20'
        navbar.style.top = '-100px'
      }
      prevScrollpos = currentScrollPos
    }
  },
  data() {
    return {
      resizehead: false,
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
          href: '/blog',
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
    listArticulos() {
      return this.$store.state.listArticulos.length
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
      this.openSearch()
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
      let result = domain.split('/')
      let search = result[result.length - 1].slice(0, [8])
      if (domain == '/') {
        this.showSearch = true
      } else if (search == '?search=') {
        this.showSearch = true
        this.setSearch(domain)
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
  @apply w-full flex flex-col justify-center items-center fixed z-10 top-30;
}
.wrapper-header {
  @apply flex flex-col w-full justify-between items-center;
}
.header {
  @apply flex w-full justify-between;
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
  color: var(--color_text);
  font-family: var(--font-style-3), serif !important;
}
.header-content-logo {
  @apply flex justify-center items-center py-4;
}
.wrapper-logo {
  @apply w-full;
}
.header-logo {
  @apply object-contain object-left;
  width: 100%;
  max-width: var(--with_logo);
}
.header-content-buttons {
  @apply w-auto flex flex-wrap gap-6 justify-center items-center;
}
.btn {
  @apply mx-16 font-semibold uppercase tracking-wider;
  transition: all 0.25s ease;
  font-family: var(--font-style-1), serif !important ;
  font-size: 14px;
  color: var(--color_text);
}
.btn:hover {
  color: var(--hover_text);
  transition: all 0.25s ease;
}
.header-content-items {
  @apply flex flex-row justify-between items-center;
}
.header-search-icon {
  @apply w-24 h-24;
}
.search-header {
  cursor: pointer;
  color: var(--color_icon);
  transition: all 0.25s ease;
}
.search-header:hover {
  color: var(--hover_text);
  transition: all 0.25s ease;
}
.empty {
  @apply mx-8;
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
  transition: all 0.25s ease;
}
.icon-shop:hover {
  color: var(--hover_text);
  transition: all 0.25s ease;
}
.border-num-items {
  @apply rounded-full h-16 w-auto flex justify-center items-center text-center -ml-12 -mt-12;
  background: var(--color_badge_cart);
}
.num-items {
  @apply text-xs p-5;
  color: white;
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
}
@screen md {
  .header-text-menu {
    @apply not-sr-only font-semibold text-xs uppercase tracking-widest pl-8;
  }
}
@media (max-width: 768px) {
  .search {
    display: none;
  }
  /* .header-logo {
    max-width: 230px;
  } */
}
@screen lg {
  .header {
    @apply w-full;
  }
}
@screen mlg {
  .header {
    @apply w-9/3;
    padding-bottom: var(--padding);
    padding-top: var(--padding);
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
@media (min-width: 1192px) {
  .header {
    width: 100%;
    max-width: 1192px;
  }
  .header-content-page {
    width: 1192px;
  }
}
</style>
