<template>
  <div class="header-container" id="navbar" :style="settingByTemplate">
    <div class="wrapper-header" id="headbg">
      <div class="header" id="headerid">
        <KoOrder :dataStore="dataStore" />

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
        <div class="header-contet">
          <button class="header-item-menu" @click="openMenulateral">
            <menu-icon class="header-icon-menu" />
          </button>
          <div class="contents">
            <div class="header-content-buttons">
              <div
                v-for="(item, index) in secciones"
                :key="`${index}${item.name}`"
              >
                <nuxt-link
                  :to="item.path"
                  v-if="item.path"
                  class="content-button"
                >
                  <p
                    class="btn"
                    @click="btnActivate(item.id)"
                    :class="btnSelect == item.id ? 'btn-active' : ''"
                  >
                    {{ $t(`${item.name}`) }}
                  </p>
                </nuxt-link>

                <nuxt-link
                  :to="item.href"
                  v-else-if="item.href && listArticulos > 0"
                  class="content-button"
                  ><p
                    class="btn"
                    @click="btnActivate(item.id)"
                    :class="btnSelect == item.id ? 'btn-active' : ''"
                  >
                    {{ $t(`${item.name}`) }}
                  </p>
                </nuxt-link>
              </div>
            </div>
            <div class="header-content-items">
              <div>
                <div class="search" v-if="searchSelect">
                  <i class="header-search-icon" @click="openSearch">
                    <svg
                      class="search-header"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      version="1.1"
                      width="20"
                      height="20"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                      style="enable-background: new 0 0 512 512;"
                      xml:space="preserve"
                    >
                      <title>Search</title>
                      <g
                        transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,9.536744585147972e-7,511.99998569488525)"
                      >
                        <path
                          d="M447.615,64.386C406.095,22.866,350.892,0,292.175,0s-113.92,22.866-155.439,64.386    C95.217,105.905,72.35,161.108,72.35,219.824c0,53.683,19.124,104.421,54.132,144.458L4.399,486.366    c-5.864,5.864-5.864,15.371,0,21.236C7.331,510.533,11.174,512,15.016,512s7.686-1.466,10.617-4.399l122.084-122.083    c40.037,35.007,90.775,54.132,144.458,54.132c58.718,0,113.919-22.866,155.439-64.386c41.519-41.519,64.385-96.722,64.385-155.439    S489.134,105.905,447.615,64.386z M426.379,354.029c-74.001,74-194.406,74-268.407,0c-74-74-74-194.407,0-268.407    c37.004-37.004,85.596-55.5,134.204-55.5c48.596,0,97.208,18.505,134.204,55.5C500.378,159.621,500.378,280.028,426.379,354.029z"
                        />
                      </g>
                    </svg>
                  </i>
                </div>
                <div class="search" v-if="!searchSelect">
                  <i class="header-search-icon" @click="closedSearch">
                    <svg
                      class="search-header"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </i>
                </div>
              </div>
              <div class="empty" v-if="showSearch"></div>
              <div class="header-content-icon" @click="openOrder">
                <i class="header-content-cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    class="icon-shop"
                    viewBox="0 0 16 16"
                  >
                    <title>Cart</title>
                    <path
                      d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                    />
                  </svg>
                </i>
                <div class="border-num-items">
                  <span class="num-items">{{ productsCart }}</span>
                </div>
              </div>
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
import KoOrder from '../_order1/order1'
import KoMenu from '../../template10/_lateralMenu/openMenuLeft'
import KoSearch from '../../template10/_lateralMenu/searchDown'

export default {
  components: {
    KoOrder,
    KoMenu,
    KoSearch,
  },
  name: 'Ko-Header-6',
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
  },
  data() {
    return {
      searchSelect: true,
      btnSelect: 1,
      resizehead: false,
      search: '',
      showSearch: false,
      secciones: [
        {
          name: 'header_inicio',
          path: '/',
          id: 1,
        },
        {
          name: 'header_productos',
          path: '/productos',
          id: 2,
        },
        {
          name: 'header_contacto',
          path: '/contacto',
          id: 3,
        },
        {
          name: 'header_blog',
          href: '/blog',
          id: 4,
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
    openSearch() {
      this.searchSelect = false
      this.$store.commit('SET_OPENSEARCH', true)
    },
    closedSearch() {
      this.searchSelect = true
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
  border-bottom: 1px solid #ededed;
  @apply w-full flex flex-col justify-center items-center z-10 transition-all ease-in-out duration-0.5;
}
.wrapper-header {
  background-color: #fff;
  @apply flex flex-col w-full justify-between items-center fixed top-0 z-30 shadow-lg;
}
.header {
  background-color: #fff;
  @apply flex w-full justify-between;
}
.header-item-menu {
  @apply hidden;
}
.header-icon-menu {
  color: #222222;
  @apply w-auto h-30 font-normal;
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
.header-contet {
  @apply flex flex-row justify-between items-center;
}
.header-content-buttons {
  @apply w-auto flex flex-wrap gap-0 justify-center items-center;
}
.btn-active {
  box-shadow: inset 0px -50px 0px -44px rgba(235, 112, 37, 0.3);
}
.btn {
  color: #222222;
  font-size: 16px;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply mr-20 px-8 font-semibold leading-22 transition-all ease-in duration-0.3;
}
.btn:hover {
  color: #eb7025;
  box-shadow: inset 0px -50px 0px -44px rgba(235, 112, 37, 0.3);
  @apply transition-all ease-in duration-0.3;
}
.header-content-items {
  @apply flex flex-row justify-between items-center;
}
.header-search-icon {
  @apply w-36 h-auto flex justify-center items-center;
}

.search-header {
  color: #222222;
  @apply cursor-pointer transition-all ease-in duration-0.2;
}
.search-header:hover {
  color: #eb7025;
  @apply transition-all ease-in duration-0.2;
}
.empty {
  @apply mx-2;
}
.header-content-icon {
  @apply flex flex-row justify-center items-center cursor-pointer;
}
.header-content-cart {
  @apply w-36 h-auto flex justify-center items-center relative cursor-pointer;
}
.icon-shop {
  fill: #222222;
  @apply transition-all ease-in duration-0.2;
}
.header-content-icon:hover .icon-shop {
  fill: #eb7025;
  @apply transition-all ease-in duration-0.2;
}
.border-num-items {
  background: #eb7025;
  @apply w-auto h-12 flex justify-center items-center rounded-full -mt-20 -ml-8;
}
.num-items {
  color: #fff;
  font-size: 8px;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply pt-1 px-5 leading-12 capitalize tracking-0 font-semibold;
}
/* ***** */
@screen sm {
  .header {
    @apply w-full flex flex-col justify-center items-center px-4;
  }
  .header-container {
    @apply w-full;
  }
  .header-contet {
    @apply w-9/0 h-74 flex flex-row justify-between items-center;
  }
  .header-content-buttons {
    @apply hidden;
  }
  .header-content-cart {
    @apply pb-0 ml-0;
  }
  .header-item-menu {
    @apply flex flex-col justify-center items-center;
  }
  .header-item-menu:focus {
    background-color: #eb7025;
  }
  .header-item-menu:focus .header-icon-menu {
    color: #fff;
  }
  .header-icon-menu {
    @apply text-35;
  }
  .search-header {
    @apply flex;
  }
}
@screen lg {
  .header-content-buttons {
    @apply flex;
  }
  .header-item-menu {
    @apply hidden;
  }
}
@screen mlg {
  .header {
    @apply w-9/5 h-100 flex flex-row justify-between px-0;
  }
  .header-container,
  .wrapper-header {
    @apply h-100;
  }
  .header-contet {
    @apply w-auto h-auto flex flex-row justify-between items-center;
  }
  .header-content-buttons {
    @apply mr-60;
  }
}
@media (max-width: 768px) {
  .header-logo {
    max-width: 230px;
  }
}
@media (min-width: 1400px) {
  .header {
    @apply w-full;
    max-width: 1400px;
  }
}
</style>
