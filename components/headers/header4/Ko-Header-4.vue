<template>
  <div class="header-container" :style="settingByTemplate">
    <div class="wrapper-header">
      <div class="header">
        <KoOrder :dataStore="dataStore" />
          <div class="header-item-menu" @click="openMenulateral">
                <menu-icon class="header-icon-menu nav-bar" />
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
                  <form id="demo-2" style="position: relative;">
                    <search-icon class="icon-s" @click="focusInput" />
                    <input
                      type="search"
                      :placeholder="$t('header_search')"
                      v-model="search"
                      @keyup.enter="getSearch(search)"
                      id="SearchHeader"
                    />
                  </form>
                </div>
              </div>
              <div class="header-content-icon">
                <div class="header-content-cart" @click="openOrder">
                  <cart-icon class="header-icon-cart" />
                  <span class="num-items">{{ productsCart }}</span>
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
    @apply font-semibold text-gray-textHeader;
  }
  .btn:hover {
    @apply text-red-btnhoverHeader;
  }
  .wrapper-header {
    @apply flex flex-col w-full justify-between items-center bg-blue-headerbg;
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
    @apply flex justify-center items-center w-9 h-9 box-border border-2 rounded-full pb-1 ml-5 relative cursor-pointer;
  }
  .header-content-page {
    @apply flex grid grid-cols-2 gap-4;
  }
  @screen sm {
    .header-container {
      @apply w-full;
    }
    .header-content-buttons {
      @apply sr-only;
    }
  }
  @screen md {
    .header-content-buttons {
      @apply not-sr-only;
    }
  }
  @screen lg {
    .header {
      @apply flex w-6/0 mt-6 py-2;
    }
    .header-content-page {
      @apply flex w-6/0;
    }
  }
.header-icon-cart {
  font-size: 20px;
  color: var(--color_icon);
}
.header-icon-cart:hover {
  color: var(--btnhover);
}
.num-items {
  font-size: 11px;
  position: absolute;
  right: -5px;
  top: -5px;
  color: var(--background_color_1);
  background-color: var(--color_icon);
  border: var(--color_icon) 1px;
  border-radius: 10px;
  line-height: 1;
  display: flex;
  padding: 3px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.header-item-menu {
  @apply hidden;
}
.responsive {
  @apply hidden;
}
.icon-s {
  font-size: 25px;
  color: var(--color_icon);
  position: absolute;
  top: 3px;
  left: 5px;
  cursor: pointer;
}
.icon-s:hover {
  color: var(--btnhover);
}
input[type='search']:focus {
  background-color: #fff;
  border-color: var(--btnhover);
}
input:-moz-placeholder {
  color: var(--color_text);
}
input::-webkit-input-placeholder {
  color: var(--color_text);
}
#demo-2 input[type='search'] {
  width: 35px;
  height: 35px;
  padding-left: 10px;
  color: transparent;
  cursor: pointer;
  box-sizing: border-box;
}
#demo-2 input[type='search']:hover {
  background-color: #fff;
}
#demo-2 input[type='search']:focus {
  width: 160px;
  padding-left: 32px;
  color: var(--color_text);
  background-color: #fff;
  cursor: auto;
}
#demo-2 input:-moz-placeholder {
  color: transparent;
}
#demo-2 input::-webkit-input-placeholder {
  color: transparent;
}
@media (max-width: 700px) {
  .header-item-menu {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
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
    color: var(--color_text);
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
@media (max-width: 767px) {
  .search {
    display: none;
  }
  .header-logo {
    max-width: 230px;
  }
}
</style>
