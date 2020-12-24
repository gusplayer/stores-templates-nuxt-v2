<template>
  <div class="header-container" :style="settingByTemplate">
    <div class="wrapper-header">
      <div class="header">
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
            <div v-for="(item, index) in secciones"
                :key="`${index}${item.name}`">
              <nuxt-link
                :to="item.path"
                v-if="item.path"
                class="btn"
                >{{ $t(`${item.name}`) }}
                  </nuxt-link>
            </div>
          </div>
          <div class="header-content-items">
              <div v-if="showSearch">
                <div class="search">
                  <form class="header-search-icon">
                    <svg class="search-header" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </form>
                  <!-- <form id="demo-2" style="position: relative;">
                    <search-icon class="icon-s" @click="focusInput" />
                    <input
                      type="search"
                      :placeholder="$t('header_search')"
                      v-model="search"
                      @keyup.enter="getSearch(search)"
                      id="SearchHeader"
                    />
                  </form> -->
                </div>
              </div>
              <div class="header-content-icon">
                <div class="header-content-cart" @click="openOrder">
                  <svg class="h-6 w-6 text-gray-textHeader" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div class="border-num-items">
                    <span an class="num-items">{{ productsCart }}</span>
                </div>
              </div>
          </div>
        <KoMenu :dataStore="dataStore" class="responsive" />
      </div>
    </div>
  </div>
</template>

<script>
import KoOrder from '../_order1/order1'
import KoMenu from '../_order1/openMenuRight'

export default {
  components: {
    KoOrder,
    KoMenu,
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
        // {
        //   name: 'header_categorias',
        //   iconOpen: 'Flechadown-icon',
        //   iconClose: 'FlechaUp-icon',
        // },
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
    openOrder() {
      this.$store.commit('SET_OPENORDER', true)
    },
    openMenulateral() {
      this.$store.commit('SET_OPENORDERMENURIGTH', true)
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
  .header-container{
    @apply w-full flex flex-col justify-center items-center;
  }
  .header {
    @apply flex w-full justify-between px-10 shadow-lg bg-white-white;
  }
  .header-content-buttons {
    @apply w-auto flex flex-wrap gap-6 justify-center items-center;
  }
  .btn {
    @apply font-semibold text-gray-textHeader uppercase tracking-wider text-base;
  }
  .btn:hover {
    @apply text-red-btnhoverHeader;
  }
  .wrapper-header {
    @apply flex flex-col w-full justify-between items-center bg-headaerbg;
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
  .header-content-items {
    @apply flex flex-row justify-between items-center;
  }
  .header-content-icon {
    @apply flex flex-row justify-between;
  }
  .header-content-cart {
    @apply flex justify-center items-center w-9 h-9 box-border pb-1 ml-5 relative cursor-pointer;
  }
  .header-content-page {
    @apply flex grid grid-cols-2 gap-4;
  }
  .header-icon-cart {
    font-size: 20px;
    color: var(--color_icon);
  }
  .header-icon-cart:hover {
    color: var(--btnhover);
  }
  .border-num-items {
    @apply  bg-red-btnbannershop rounded-full h-4 w-auto flex justify-center items-center text-center -ml-3;
  }
  .num-items {
    @apply text-xs p-1 text-white-white;
  }
  .header-item-menu {
    @apply hidden;
  }
  .responsive {
    @apply hidden;
  }
  .header-search-icon {
    @apply w-6 h-6 text-gray-textHeader;
  }
  .search-header {
    @apply cursor-pointer text-gray-textHeader;
  }
  .btn {
    font-family: 'Lora', serif !important ;
  }
  .header-text-menu {
    font-family: 'Lora', serif !important;
  }
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
      @apply  pb-0 ml-0;
    }
    .header-text-menu{
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
  .responsive {
    display: initial;
  }
  }
  @screen md {
    .header-text-menu {
      @apply not-sr-only font-semibold text-xs uppercase tracking-widest pl-2;
    }
  }
  @screen lg {
    .header {
      @apply flex w-full;
    }
  }
  @screen xl {
    .header {
      @apply w-8/3 mt-8 py-2;
    }
    .header-content-page {
      @apply flex w-8/3;
    }
    .header-content-buttons {
      @apply not-sr-only;
    }
    .header-text-menu{
      @apply sr-only;
    }
    .search-header {
      @apply not-sr-only;
    }
    .header-item-menu {
      @apply sr-only;
    }
  }
  @screen xxl {
    .header {
      @apply flex w-4/6 mt-8 py-2;
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
