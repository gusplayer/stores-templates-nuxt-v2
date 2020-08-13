<template>
  <div class="header-container">
    <div class="wrapper-header">
      <div class="header">
        <KoOrder :dataStore="dataStore" />
        <div class="header-items-icon-menu" @click="openMenulateralLeft">
          <menu-icon class="header-icon-menu nav-bar" />
        </div>
        <div class="header-content-logo">
          <nuxt-link to="/" class="wrapper-logo">
            <img
              :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
              class="header-logo"
            />
          </nuxt-link>
        </div>
        <div class="wrapper-items-icons">
          <div v-for="(item, index) in links" :key="`${index}${item.icon}`">
            <div class="header-icon" v-if="item.link" :is="item.icon" />
          </div>
        </div>
        <div class="search" v-if="showSearch">
          <form id="demo-2">
            <input
              type="search"
              placeholder="¿Qué buscas?"
              v-model="search"
              @keyup.enter="getSearch(search)"
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
  name: 'Ko-Header-1',
  props: {
    dataStore: Object,
  },
  mounted() {
    this.toggle = true
    let domain = this.$route.fullPath
    let searchCategory = domain.slice(0, [11])
    let searchSubCategory = domain.slice(0, [14])
    let search = domain.slice(0, [9])
    if (domain == '/') {
      this.showSearch = true
    } else if (searchCategory === '/?category=') {
      this.showSearch = true
    } else if (searchSubCategory === '/?subcategory=') {
      this.showSearch = true
    } else if (search === '/?search=') {
      this.setSearch(domain)
      this.showSearch = true
    } else {
      this.showSearch = false
    }
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
      secciones: [
        {
          name: 'Inicio',
          path: '/',
        },
        {
          name: 'Categorías',
          iconOpen: 'Flechadown-icon',
          iconClose: 'FlechaUp-icon',
        },
        {
          name: 'Contacto',
          path: '/contacto',
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
  },
  methods: {
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
      if (search.length) {
        this.$store.commit('products/FILTER_BY', {
          type: 'search',
          data: search,
        })
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: 'all',
          data: '',
        })
      }
      this.currentPage = 1
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value
      } else {
        location.href = '?search=' + ''
      }
    },
    setSearch(value) {
      let category = value.replace('/?search=', '')
      let UrlCategory = category.replace(/-/g, ' ')
      let urlFiltrada = decodeURIComponent(UrlCategory)
      this.search = urlFiltrada
      // if (urlFiltrada.length) {
      //   this.$store.commit('products/FILTER_BY', {
      //     type: 'search',
      //     data: urlFiltrada,
      //   })
      // } else {
      //   this.$store.commit('products/FILTER_BY', {
      //     type: 'all',
      //     data: '',
      //   })
      // }
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
    $route(to, from) {
      let domain = this.$route.fullPath
      let searchCategory = domain.slice(0, [11])
      let searchSubCategory = domain.slice(0, [14])
      let search = domain.slice(0, [9])
      if (domain == '/') {
        this.showSearch = true
      } else if (searchCategory === '/?category=') {
        this.showSearch = true
      } else if (searchSubCategory === '/?subcategory=') {
        this.showSearch = true
      } else if (search === '/?search=') {
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
div.header-container {
  --background_color_2: #f2f4f7;
}
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
.wrapper-logo {
  /* width: 100%; */
}
.header-logo {
  /* width: 100%; */
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
  color: var(--color_hover_text);
}
.header-content-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border: var(--color_shopping_cart) 2px solid;
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
  background-color: var(--color_shopping_cart);
  border: var(--color_shopping_cart) 1px;
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
  color: var(--color_hover_text);
}
.header-item-menu {
  display: none;
}
.header-items-icon-menu {
  display: flex;
}
/* search */

input {
  outline: none;
}
input[type='search'] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}
input[type='search'] {
  background: transparent
    url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat
    7px center;
  border: solid 2px var(--color_shopping_cart);
  padding: 6px 6px;
  width: 35px;
  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
input[type='search']:focus {
  background-color: #fff;
  border-color: var(--color_hover_text);
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
