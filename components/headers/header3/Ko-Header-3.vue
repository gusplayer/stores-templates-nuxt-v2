<template>
  <div class="header-container" :style="settingByTemplate">
    <div class="wrapper-header">
      <div class="header">
        <KoOrder :dataStore="dataStore" />
        <div class="header-items-icon-menu" @click="openMenulateralLeft">
          <menu-icon class="header-icon-menu nav-bar" />
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
        <div class="wrapper-items-icons">
          <div v-for="(item, index) in links" :key="`${index}${item.icon}`">
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div class="header-icon" :is="item.icon"
            /></a>
          </div>
        </div>
        <div class="search" v-if="showSearch">
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
        <div class="header-content-icon">
          <div class="header-content-cart" @click="openOrder">
            <cart-icon class="header-icon-cart" />
            <span class="num-items">{{ productsCart }}</span>
          </div>
        </div>
        <div class="header-item-menu" @click="openMenulateralRight">
          <menu-icon class="header-icon-menu nav-bar" />
        </div>
        <KoMenuRight class="responsive" :dataStore="dataStore" />
        <KoMenuLeft
          class="responsiveLeft"
          :dataStore="dataStore"
          :showMenu="showSearch"
        />
      </div>
    </div>
  </div>
</template>

<script>
import KoOrder from '../_order1/order1'
import KoMenuRight from '../_order1/openMenuRight'
import KoMenuLeft from '../_order1/openMenuLeft'

export default {
  components: {
    KoOrder,
    KoMenuRight,
    KoMenuLeft,
  },
  name: 'Ko-Header-3',
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
      showMenu: false,
      search: '',
      toggle: false,
      drawer: false,
      direction: 'rtl',
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
      cat: [],
      add: true,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
    }
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length
    },
    categorias() {
      return this.dataStore.categorias
    },
    subcategories() {
      return this.dataStore.subcategorias
    },
    product() {
      return this.dataStore.productos
    },
    fullPathServer() {
      return this.$store.state.fullPathServer
    },
    facebooPixel() {
      return this.$store.state.analytics_tagmanager
    },
  },
  methods: {
    initHeader() {
      if (this.$route.fullPath == '/') {
        this.$store.commit('SET_STATEBANNER', true)
        this.showSearch = true
      } else if (this.$route.query && this.$route.query.category) {
        this.$store.commit('SET_STATEBANNER', false)
        this.showSearch = true
      } else if (this.$route.query && this.$route.query.subcategory) {
        this.$store.commit('SET_STATEBANNER', false)
        this.showSearch = true
      } else if (this.$route.query && this.$route.query.search) {
        this.$store.commit('SET_STATEBANNER', false)
        this.setSearch(this.$route.query.search)
        this.showSearch = true
      } else {
        this.showSearch = false
      }
    },
    openOrder() {
      this.$store.state.openOrder = true
    },
    openMenulateralLeft() {
      this.$store.state.openMenulateralRight = true
      this.$store.state.openMenulateralLeft = true
    },
    openMenulateralRight() {
      this.$store.state.openMenulateralLeft = true
      this.$store.state.openMenulateralRight = true
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
      let urlFiltrada = decodeURIComponent(value)
      this.search = urlFiltrada
    },
    clear() {
      this.$router.push({
        path: '/',
      })
      this.$store.commit('SET_STATEBANNER', true)
      this.$store.commit('SET_CATEGORY_PRODCUTRO', '')
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
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
      this.Searchproduct(value)
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
  height: 91px;
  overflow: hidden;
  background: var(--background_color_1);
  /* background-color: black; */
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
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 2px 0px;
}
.header-logo {
  max-height: 70px;
  object-fit: contain;
  object-position: left;
}
.header-content-items {
  margin-top: 3px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-self: center;
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
}
.header-text-center-icon:hover {
  color: var(--color_hover_text);
}
.header-content-icon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.wrapper-items-icons {
  margin-top: 3px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
}
.header-icon {
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--color_icon);
  margin-left: 7px;
  cursor: pointer;
}
.header-icon:hover {
  color: var(--btnhover);
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
.header-icon-cart {
  font-size: 20px;
  color: var(--color_icon);
}
.header-icon-cart:hover {
  color: var(--btnhover);
}
.header-item-menu {
  display: none;
}
.header-items-icon-menu {
  display: flex;
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
  /* width: 15px; */
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
.header-icon-menu {
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--color_text);
  cursor: pointer;
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
  display: none;
}
.responsiveLeft {
  display: initial;
}
@media (max-width: 900px) {
  .header {
    padding: 10px 20px 0;
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
  .header-items-icon-menu {
    display: none;
  }
  .wrapper-logo {
    width: 100%;
  }
  /* menu lateral */
  .menu-container {
    display: none;
  }
  .responsive {
    display: initial;
  }
  .responsiveLeft {
    display: none;
  }
}
@media (max-width: 500px) {
  .wrapper-items-icons {
    display: none;
  }
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
