<template>
  <div class="header-container" :style="settingByTemplate">
    <div class="wrapper-header">
      <div class="header">
        <KoOrder :dataStore="dataStore" />
        <div class="header-content-logo">
          <nuxt-link to="/" class="wrapper-logo">
            <img
              :src="`${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
              class="header-logo"
              alt="Logo Img"
            />
          </nuxt-link>
        </div>
        <div class="header-content-items">
          <div
            v-for="(item, index) in secciones"
            :key="`${index}${item.name}`"
            class="header-buttons"
          >
            <div>
              <nuxt-link
                :to="item.path"
                v-if="item.path"
                class="header-text-center"
              >
                {{ $t(`${item.name}`) }}
              </nuxt-link>
              <div v-else>
                <div
                  v-if="dataStore.categorias.length > 0"
                  style="margin-right: 20px; display: flex; flex-direction: row"
                >
                  <p class="header-text-center-icon">
                    {{ $t(`${item.name}`) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="prueba" v-if="showSearch">
          <div class="search">
            <form id="demo-2" style="position: relative">
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
          <div class="header-content-cart" @click="openOrder" id="OpenCartTag">
            <cart-icon class="header-icon-cart" />
            <span class="num-items">{{ productsCart }}</span>
          </div>
        </div>
        <div class="header-item-menu" @click="openMenuLateral">
          <menu-icon class="header-icon-menu nav-bar" />
        </div>
        <KoMenu :dataStore="dataStore" class="responsive" />
      </div>
    </div>
  </div>
</template>

<script>
import KoOrder from '../_order1/order1'
import KoMenu from '../_order1/ko6-openMenuRight'

export default {
  components: {
    KoOrder,
    KoMenu,
  },
  name: 'Ko-Header-6',
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  mounted() {
    this.toggle = true
    this.initHeader()
  },
  data() {
    return {
      search: '',
      toggle: false,
      drawer: false,
      direction: 'rtl',
      showMenu: false,
      showSearch: false,
      links: [
        {
          nombre: 'Facebook',
          icon: 'facebook-icon',
          link: this.dataStore.tienda.red_facebook,
        },
        {
          nombre: 'Twitter',
          icon: 'twitter-icon',
          link: this.dataStore.tienda.red_twitter,
        },
        {
          nombre: 'Instagram',
          icon: 'instagram-icon',
          link: this.dataStore.tienda.red_instagram,
        },
        {
          nombre: 'Youtube',
          icon: 'youtube-icon',
          link: this.dataStore.tienda.red_youtube,
        },
      ],
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
      ],
      cat: [],
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      idCategory: '',
      toggleCategories: true,
      indexSelect: '',
    }
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length
    },
    facebookPixel() {
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
    openOrder() {
      this.$gtm.push({
        event: 'OpenCart',
      })
      this.showMenu = false
      this.$store.commit('SET_OPEN_ORDER', true)
    },
    openMenuLateral() {
      this.showMenu = false
      this.$store.state.openMenuLateralRight = true
    },
    SearchProduct(search) {
      this.$store.commit('SET_SEARCH_VALUE', search)
    },
    getSearch(value) {
      if (value) {
        location.href = '/productos/?search=' + value
        if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
          window.fbq('track', 'Search', { search_string: value })
        }
      } else {
        location.href = '/productos/?search=' + ''
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
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
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
  width: 100%;
  height: 88px;
  overflow: hidden;
  background: var(--background_color_1);
}
.wrapper-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--background_color_1);
  flex-direction: column;
  transition: all ease 1s;
  position: fixed;
  top: 0px;
  z-index: 4;
}
.header {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  padding: 10px 30px 0;
}
.header-content-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 0px;
}
.wrapper-logo {
  width: 100%;
}
.header-logo {
  /* width: 100%; */
  max-height: 70px;
  object-fit: contain;
  object-position: left;
}
.header-content-items {
  display: flex;
  flex: 1;
  margin-left: 10px;
  align-self: center;
  justify-content: flex-end;
  position: relative;
  top: 3px;
}
.header-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.header-text-center {
  font-size: 16px;
  font-weight: normal;
  color: var(--color_text);
  margin-right: 20px;
  cursor: pointer;
}
.header-text-center:hover {
  color: var(--color_hover_text);
}
.header-text-center-icon {
  font-size: 16px;
  font-weight: normal;
  color: var(--color_text);
  cursor: pointer;
  bottom: 2px;
}
.header-text-center-icon:hover {
  color: var(--color_hover_text);
}
.header-content-icon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header-content-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border: var(--color_icon) 2px solid;
  border-radius: 50%;
  padding-bottom: 3px;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
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
  display: none;
}
.responsive {
  display: none;
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
@media (max-width: 900px) {
  .header {
    padding: 10px 20px 0;
  }
  .product-img-container {
    display: none;
  }
}
@media (max-width: 700px) {
  .header-buttons {
    display: none;
  }

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
@media (max-width: 500px) {
  .search {
    display: none;
  }
  .header {
    padding: 10px 15px 0;
  }
  .header-logo {
    max-width: 230px;
  }
}
</style>
