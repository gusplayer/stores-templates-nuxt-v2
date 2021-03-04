<template>
  <div class="header-container" id="navbar" :style="settingByTemplate">
    <div class="wrapper-header" id="headbg">
      <div class="header" id="headerid">
        <KoOrder :dataStore="dataStore" />
        <div class="header-item-menu">
          <menu-icon
            class="header-icon-menu nav-bar"
            @click="openMenulateral"
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
              <p class="btn-bag">Bag</p>
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
import KoOrder from '../../template9/_lateralMenu/orderRight'
import KoMenu from '../../template9/_lateralMenu/openMenuLeft'
import KoSearch from '../../template9/_lateralMenu/searchDown'

export default {
  components: {
    KoOrder,
    KoMenu,
    KoSearch,
  },
  name: 'Ko-Header-5',
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
    // if (domain == '/' || domain != '/') {
    //   this.$store.commit('SET_STATESPACERHEADERK7', true)
    // }

    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      var navbar = document.getElementById('navbar')
      var header = document.getElementById('headerid')
      var bghead = document.getElementById('headbg')

      if (currentScrollPos == 0) {
        navbar.style.zIndex = '20'
        navbar.style.top = '0px'
      } else if (prevScrollpos > currentScrollPos && navbar) {
        //sube
        navbar.style.top = '0px'
        navbar.style.zIndex = '20'
        bghead.style.backgroundColor = '#ffffff'
        // header.style.boxShadow = '0px 22px 11px -12px rgba(145, 145, 145, 0.57)'
      } else {
        //baja
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
  @apply w-full flex flex-col justify-center items-center fixed top-0 z-10;
  border-bottom: 1px solid #ededed;
}
.wrapper-header {
  @apply flex flex-col w-full justify-between items-center;
}
.header {
  @apply flex w-full justify-between bg-white-white;
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
  color: #3f3f3f;
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
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
}
.header-content-logo {
  @apply flex justify-center items-center py-4;
}
.wrapper-logo {
  @apply w-full;
}
.header-logo {
  @apply object-contain object-left max-h-16;
}
.header-content-buttons {
  @apply w-auto flex flex-wrap gap-0 justify-center items-center;
}
.btn {
  margin-right: 20px;
  transition: all 0.1s ease;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  font-size: 14px;
  color: #303030;
  font-weight: 600;
}
.btn:hover {
  color: #000;
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
  fill: #303030;
  transition: all 0.25s ease;
}
.search-header:hover {
  fill: #000;
  transition: all 0.25s ease;
}
.search-header-left {
  @apply cursor-pointer;
  fill: #303030;
  transition: all 0.25s ease;
}
.search-header-left:hover {
  fill: #000;
  transition: all 0.25s ease;
}
.empty {
  @apply mx-2;
}
.btn-bag {
  margin-right: 15px;
  transition: all 0.1s ease;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  font-size: 14px;
  color: #303030;
  font-weight: 600;
}
.header-content-icon:hover .btn-bag {
  color: #000;
  transition: all 0.25s ease;
}
.header-content-icon {
  @apply flex flex-row justify-center items-center cursor-pointer;
}
.header-content-cart {
  @apply flex justify-center items-center w-36 h-36 box-border pb-4 ml-20 relative cursor-pointer;
}
.icon-shop {
  fill: #303030;
  transition: all 0.25s ease;
}
.header-content-icon:hover .icon-shop {
  fill: #000;
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
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  color: #333;
  font-size: 14px;
  line-height: 12px;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0px;
  padding-left: 10px;
  padding-right: 15px;
  border-left: 1px solid #000;
  border-left-color: rgba(0, 0, 0, 0.21);
}
.num-items-up {
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  color: #2c2930;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0px;
  margin-left: -5px;
  margin-top: -30px;
}
.header-content-icon:hover .num-items {
  color: #000;
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
