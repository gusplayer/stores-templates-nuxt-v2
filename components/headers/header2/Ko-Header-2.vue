<template>
  <div class="header-container" :style="settingByTemplate">
    <div class="wrapper-header" @click="closeMenuCategory">
      <div class="header">
        <KoOrder :dataStore="dataStore" />
        <div class="header-content-logo">
          <nuxt-link to="/" class="wrapper-logo">
            <img
              :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
              class="header-logo"
              @click="clear"
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
            <div @click="openMenu(item.name)">
              <nuxt-link
                :to="item.path"
                v-if="item.path"
                class="header-text-center"
                >{{ $t(`${item.name}`) }}</nuxt-link
              >
              <div v-else>
                <div
                  v-if="dataStore.categorias.length > 0"
                  style="
                    margin-right: 20px;
                    display: flex;
                    flex-direction: row;
                  "
                >
                  <p class="header-text-center-icon">
                    {{ $t(`${item.name}`) }}
                  </p>
                  <div
                    class="header-text-center-icon"
                    v-if="showMenu == false"
                    :is="item.iconOpen"
                  />
                  <div
                    class="header-text-center-icon"
                    v-if="showMenu == true"
                    :is="item.iconClose"
                  />
                </div>
              </div>
            </div>
          </div>
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
          <form id="demo-2" style="position: relative;">
            <search-icon class="icon-s" @click="focusInput" />
            <input
              type="search"
              placeholder="¿Qué buscas?"
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
        <div class="header-item-menu" @click="openMenulateral">
          <menu-icon class="header-icon-menu nav-bar" />
        </div>
        <KoMenu :dataStore="dataStore" class="responsive" />
      </div>
    </div>
    <div class="menu-container" :class="showMenu ? 'animated' : 'hidden'">
      <div id="menu-collapse">
        <div class="wrapper-meni-grid">
          <li @click="clear">
            <p
              class="name-category-all"
              :class="
                idCategory == '' && indexSelect == ''
                  ? 'name-category-all-active'
                  : ''
              "
            >
              Todos los productos
            </p>
          </li>
          <div class="menu-grid">
            <div v-for="categoria in categorias" :key="categoria.id">
              <ul
                class="name-category"
                :class="
                  categoria.id == idCategory ? 'name-category-active' : ''
                "
              >
                <li
                  @click="sendCategory(categoria, categoria.id, (ref = false))"
                >
                  <p>
                    {{ categoria.nombre_categoria_producto }}
                  </p>
                </li>
                <ul class="subcategoria">
                  <template>
                    <div v-for="(subcategory, key) in subcategories" :key="key">
                      <li
                        v-if="subcategory.categoria == categoria.id"
                        @click="Sendsubcategory(subcategory.id)"
                        class="text-subcategoria"
                        :class="
                          subcategory.id == indexSelect
                            ? 'text-subcategoria-active'
                            : ''
                        "
                      >
                        {{ subcategory.nombre_subcategoria }}
                      </li>
                    </div>
                  </template>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div class="product-img-container" v-if="product.length">
          <div class="card-container">
            <div class="img-logo" v-if="product[0]">
              <img
                :src="product[0].foto_cloudinary"
                class="logo"
                alt="Product img"
              />
            </div>
            <div class="btn-container">
              <button @click="closeMenu()" class="btn">Comprar</button>
            </div>
          </div>
        </div>
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
  name: 'Ko-Header-2',
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  mounted() {
    this.toggle = true
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
          name: 'header_categorias',
          iconOpen: 'Flechadown-icon',
          iconClose: 'FlechaUp-icon',
        },
        {
          name: 'header_contacto',
          path: '/contacto',
        },
      ],
      cat: [],
      add: true,
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
    categorias() {
      return this.dataStore.categorias
    },
    subcategories() {
      return this.dataStore.subcategorias
    },
    product() {
      return this.dataStore.productos
    },
  },
  methods: {
    openOrder() {
      this.showMenu = false
      this.$store.state.openOrder = true
    },
    openMenulateral() {
      this.showMenu = false
      this.$store.state.openMenulateralRight = true
    },
    openMenu(name) {
      var intro = document.getElementById('menu-collapse')
      if (name == 'Categorías') {
        this.showMenu = !this.showMenu
      }
      if (this.showMenu == false) {
        intro.style.display = 'none'
      } else {
        intro.style.display = 'flex'
      }
      if (name == 'Inicio') {
        this.clear()
      }
      if (name == 'Contacto') {
        this.showMenu = false
      }
    },
    closeMenuCategory() {
      var intro = document.getElementById('menu-collapse')
      const element = event.target.className
      if (
        element === 'wrapper-header' ||
        element === 'header' ||
        element === 'header-content-items' ||
        element === 'header-content-logo' ||
        element === 'header-logo'
      ) {
        this.showMenu = false
      }
      if (this.showMenu == false) {
        intro.style.display = 'none'
      } else {
        intro.style.display = 'flex'
      }
    },
    closeMenu() {
      this.showMenu = false
      this.$router.push({
        path: '/productos/' + this.product[0].slug,
      })
    },
    Sendsubcategory(value) {
      this.indexSelect = value
      this.$router.push({
        path: '/',
      })
      this.$store.commit('SET_PREVIOUSPAGE', 1)
      this.$store.commit('SET_STATEBANNER', false)
      this.showMenu = false
      this.addClass()
      this.selectSubcategory = value
      let filtradoSubCategoria = this.subcategories.find(
        (element) => element.id == value
      )

      let filtradoCategorias = this.categorias.find(
        (element) => element.id == filtradoSubCategoria.categoria
      )
      this.$store.commit(
        'SET_CATEGORY_PRODCUTRO',
        filtradoCategorias.nombre_categoria_producto
      )
      this.nameSubCategory = filtradoSubCategoria.nombre_subcategoria
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', this.nameSubCategory)
      this.$store.commit('products/FILTER_BY', {
        type: 'subcategory',
        data: value,
      })
    },
    sendCategory(value, categoria, ref) {
      this.idCategory = categoria
      this.$router.push({
        path: '/',
      })
      this.$store.commit('SET_PREVIOUSPAGE', 1)
      this.showMenu = false
      this.$store.commit('SET_STATEBANNER', false)
      this.nameCategory = value.nombre_categoria_producto
      this.$store.commit('SET_CATEGORY_PRODCUTRO', this.nameCategory)
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', '')
      this.selectedSubcategories = []
      this.subcategories.find((subcategoria) => {
        if (subcategoria.categoria === categoria) {
          this.toggleCategories = false
          this.selectedSubcategories.push(subcategoria)
        }
      })
      if (this.selectedSubcategories.length === 0) {
        this.addClass()
      }
      if (ref) {
        this.addClass()
      }
      this.$store.commit('products/FILTER_BY', {
        type: 'category',
        data: value.nombre_categoria_producto,
      })
    },
    addClass() {
      this.add = !this.add
    },
    clear() {
      this.idCategory = ''
      this.indexSelect = ''
      this.showMenu = false
      this.$router.push({
        path: '/',
      })
      this.$store.commit('SET_STATEBANNER', true)
      this.$store.commit('SET_OPENORDERMENURIGTH', false)
      this.$store.commit('SET_CATEGORY_PRODCUTRO', '')
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
      this.$emit('clear')
      this.addClass()
      this.nameCategory = ''
    },
    Searchproduct(search) {
      this.$store.commit('SET_SEARCHVALUE', search)
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
      let urlFiltrada = decodeURIComponent(category)
      this.search = urlFiltrada
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
  width: 100%;
  height: 88px;
  overflow: hidden;
  background: var(--background_color_1);
  /* background-color: black; */
}
.menu-container {
  width: 100%;
  background: var(--background_color_1);
  top: 88px;
  display: flex;
  transition: all ease 0.6s;
  position: fixed;
  height: auto;
  z-index: 4;
}
.hidden {
  display: none;
}
.animated {
  opacity: 1;
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
#menu-collapse {
  display: none;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  padding: 10px 30px 10px 20px;
  border-top: 1px solid #aba4a466;
  margin: 0 auto;
}
.wrapper-meni-grid {
  flex: 2;
  width: 100%;
  max-width: 1000px;
  max-height: 560px;
  overflow-y: auto;
}
.menu-grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 10px;
}
.wrapper-meni-grid::-webkit-scrollbar {
  border: 1px solid rgba(202, 202, 202, 0.322);
  background: transparent;
  width: 6px;
}
.wrapper-meni-grid::-webkit-scrollbar-track {
  border-radius: 10px;
}
.wrapper-meni-grid::-webkit-scrollbar-thumb {
  background: rgb(44, 44, 44);
}
.wrapper-meni-grid::-webkit-scrollbar-thumb:hover {
  background: rgb(102, 102, 102);
  border-radius: 10px;
}
.name-category-all {
  font-size: 16px;
  font-weight: bold;
  color: var(--color_text);
  cursor: pointer;
  padding: 10px 0px;
}
.name-category-all-active {
  font-size: 16px;
  font-weight: bold;
  color: red;
  cursor: pointer;
  padding: 10px 0px;
}
.name-category-all:hover {
  color: var(--btnhover);
}
.name-category {
  color: var(--color_text);
  cursor: pointer;
}
.name-category-active {
  color: red;
  cursor: pointer;
}
.name-category li {
  font-weight: bold;
  padding: 10px 0px;
  font-size: 16px;
}
.name-category li:hover {
  color: var(--color_hover_text);
}
.subcategoria li {
  padding: 0px;
  margin-bottom: 8px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: 50;
}
.text-subcategoria {
  color: var(--color_subtext);
}
.text-subcategoria-active {
  color: red;
}
.text-subcategoria:hover {
  color: var(--color_hover_text);
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
  margin-top: 3px;
  display: flex;
  flex: 1;
  margin-left: 100px;
  justify-content: center;
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
.responsive {
  display: none;
}
.container-category {
  display: inline-block;
  padding-bottom: 10px;
  width: 100%;
}
.product-img-container {
  flex: 1;
  max-width: 250px;
}
.card-container {
  width: 100%;
  height: 265px;
  border-radius: 10px;
  box-shadow: 0 0 22px 3px #efeeeeb3;
  margin: 0 auto;
  position: relative;
}
.img-logo {
  height: 265px;
  max-width: 250px;
  width: 100%;
  position: relative;
}
.logo {
  height: 100%;
  border-radius: 10px;
  max-width: 250px;
  width: 100%;
  object-fit: cover;
}
.btn-container {
  position: absolute;
  bottom: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.btn {
  color: var(--color_text_btn);
  border-radius: var(--radius_btn);
  border: solid 1px var(--color_background_btn);
  background-color: var(--color_background_btn);
  color: white;
  padding: 8px 14px;
  font-size: 14px;
  width: 120px;
  height: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in;
  text-decoration: none;
  text-align: center;
}
.btn:hover {
  color: white;
  background-color: var(--btnhover);
  border: solid 1px var(--btnhover);
}
.card-container:hover,
.content-products:focus {
  box-shadow: 0px 0px 2px 1px var(--color_border);
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
  .header-content-items {
    margin-left: 30px;
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
  .menu-container {
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
