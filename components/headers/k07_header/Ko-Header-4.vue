<template>
  <header
    v-if="settingByTemplate7 && settingByTemplate7[0].setting7Header"
    id="navbar"
    class="header-container"
    :style="[
      settingByTemplate7[0].setting7Header,
      settingByTemplate7[0].setting7General,
      {
        '--font-style-1':
          settingByTemplate7[0]?.setting7General?.fount_1 ?? 'David libre',
      },
      {
        '--font-style-3':
          settingByTemplate7[0]?.setting7General?.fount_3 ?? 'Lora',
      },
    ]"
  >
    <div id="headbg" class="wrapper-header">
      <div id="headerid" class="header">
        <div class="header-item-menu" @click="openMenuLateral">
          <menu-icon class="header-icon-menu nav-bar" />
          <span class="header-text-menu">{{ $t('header_menu') }}</span>
        </div>
        <div class="header-content-logo">
          <nuxt-link to="/" class="wrapper-logo">
            <img
              :src="`${this.$store.state.urlKomercia}/logos/${dataStore.logo}`"
              class="header-logo"
              alt="Logo Img"
              @click="clear"
            />
          </nuxt-link>
        </div>
        <div class="header-content-buttons">
          <div v-for="(item, index) in secciones" :key="`${index}${item.name}`">
            <nuxt-link
              v-if="item.path"
              :to="item.path"
              class="btn"
              :class="btnSelect == item.path ? 'btn-active' : ''"
              @click="btnActivate(item.path)"
            >
              {{ $t(`${item.name}`) }}
            </nuxt-link>
            <nuxt-link
              v-else-if="item.href && stateListBLogs"
              :to="item.href"
              class="btn"
              :class="btnSelect == item.href ? 'btn-active' : ''"
              @click="btnActivate(item.href)"
            >
              {{ $t(`${item.name}`) }}
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
          <div v-if="showSearch" class="empty"></div>
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
              <span class="num-items">{{ productsCart }}</span>
            </div>
          </div>
        </div>
        <KoSearch
          :data-store="dataStore"
          :setting-card-products="settingByTemplate7[0].settingKProdutCard"
          :setting-general="settingByTemplate7[0].setting7General"
        />
        <KoMenu :data-store="dataStore" class="responsive" />
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'KoHeader4',
  components: {
    KoSearch: () => import('../_lateralMenu/_lateralMenu07/search-up.vue'),
    KoMenu: () => import('../_lateralMenu/_lateralMenu07/openMenuLeft.vue'),
  },
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    settingByTemplate7: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showSearch: false,
      btnSelect: '',
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
    ...mapState(['stateListBLogs']),
    ...mapState({
      productsCart: (state) => state.productsCart.length,
    }),
  },
  watch: {
    $route() {
      this.setMenu()
      this.showIconSearch()
    },
  },
  mounted() {
    this.setMenu()
    this.showIconSearch()
    let colorBg = ''
    if (this.settingByTemplate7 && this.settingByTemplate7[0].setting7Header) {
      colorBg =
        this.settingByTemplate7[0].setting7Header['--background_color_1']
    } else {
      colorBg = '#ffffff'
    }
    // var prevScrollpos = window.pageYOffset
    var navbar = document.getElementById('navbar')
    var header = document.getElementById('headerid')
    var bghead = document.getElementById('headbg')
    if (
      this.settingByTemplate7 &&
      this.settingByTemplate7[0].setting7Header &&
      this.settingByTemplate7[0].setting7Header.transparente
    ) {
      header.style.backgroundColor = 'transparent'
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset
        if (currentScrollPos == 0) {
          if (screen.width >= 300) {
            header.style.width = '100%'
            bghead.style.backgroundColor = 'transparent'
            header.style.backgroundColor = 'transparent'
            bghead.style.boxShadow = 'transparent'
            header.style.boxShadow = 'transparent'
          }
          if (screen.width >= 1280) {
            header.style.width = '93%'
            navbar.style.zIndex = '20'
            navbar.style.top = '30px'
          }
        } else {
          navbar.style.top = '0px'
          navbar.style.zIndex = '20'
          bghead.style.backgroundColor = 'transparent'
          header.style.backgroundColor = 'transparent'
          header.style.boxShadow = 'transparent'
          bghead.style.boxShadow = 'transparent'
          if (screen.width >= 300) {
            header.style.width = '100%'
          }
          if (screen.width >= 1280) {
            header.style.width = '93%'
          }
        }
        // prevScrollpos = currentScrollPos
      }
    } else {
      header.style.backgroundColor = colorBg
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset
        if (currentScrollPos == 0) {
          if (screen.width >= 300) {
            header.style.width = '100%'
            bghead.style.backgroundColor = 'transparent'
            bghead.style.boxShadow = '0px 0px 0px 0px'
            header.style.boxShadow =
              '0px 0px 22px 2px rgba(145, 145, 145, 0.57)'
          }
          if (screen.width >= 1280) {
            header.style.width = '93%'
            navbar.style.zIndex = '20'
            navbar.style.top = '30px'
          }
        } else {
          navbar.style.top = '0px'
          navbar.style.zIndex = '20'
          bghead.style.backgroundColor = colorBg
          header.style.boxShadow = '0px 0px 0px 0px'
          bghead.style.boxShadow = '0px 0px 10px 4px rgba(145,145,145,0.10)'
          if (screen.width >= 300) {
            header.style.width = '100%'
          }
          if (screen.width >= 1280) {
            header.style.width = '93%'
          }
        }
        // prevScrollpos = currentScrollPos
      }
    }
  },
  methods: {
    showIconSearch() {
      this.showSearch = this.btnSelect !== '/productos'
    },
    openSearch() {
      this.$store.commit('SET_OPEN_SEARCH', true)
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
    setMenu() {
      const routeMappings = {
        index: '/',
        productos: '/productos',
        contacto: '/contacto',
        micompra: '/micompra',
        blog: '/blog',
        cart: '/cart',
      }
      const currentRouteName = this.$route.name
      this.btnSelect = routeMappings[currentRouteName] || '/'
    },
  },
}
</script>

<style scoped>
.header-container {
  transition: all 0.5s ease-in-out;
  @apply w-full flex flex-col justify-center items-center fixed z-100 top-30;
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
  font-family: var(--font-style-3) !important;
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
.btn-active {
  color: var(--hover_text) !important ;
}
.btn {
  @apply mx-16 font-semibold uppercase tracking-wider;
  transition: all 0.25s ease;
  font-family: var(--font-style-1) !important ;
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
    padding-bottom: var(--padding);
    padding-top: var(--padding);
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
