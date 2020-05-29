<template>
  <div class="header-container">
    <div class="wrapper-header" ref="header">
      <div class="header">
        <KoOrder />
        <div class="header-content-logo">
          <nuxt-link to="/" class="wrapper-logo" id="tamaño-img">
            <img
              :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
              class="header-logo"
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
                >{{ item.name }}</nuxt-link
              >
              <div
                v-else
                style="margin-right: 20px; display: flex; flex-direction: row;"
              >
                <p class="header-text-center-icon">{{ item.name }}</p>
                <div class="header-text-center-icon" :is="item.icon" />
              </div>
            </div>
          </div>
        </div>
        <div class="search">
          <div>
            <input
              v-model="search"
              type="text"
              placeholder=" Buscar . . ."
              required
            />
          </div>
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
        <KoMenu :seccionesCart="seccionesCart" class="responsive" />
      </div>
    </div>
    <div class="menu-container" :class="showMenu ? 'animated' : 'hidden'">
      <div id="menu-collapse">
        <div class="menu-grid">
          <li @click="clear">
            <p class="name-category-all">Todos los productos</p>
          </li>
          <div
            class="container-category"
            v-for="categoria in categorias"
            :key="categoria.id"
          >
            <ul class="name-category">
              <li>
                <p
                  @click="sendCategory(categoria, categoria.id, (ref = false))"
                >
                  {{ categoria.nombre_categoria_producto }}
                </p>
              </li>
              <ul class="subcategoria">
                <template>
                  <div v-for="(subcategory, key) in subcategories" :key="key">
                    <li
                      v-if="subcategory.categoria == categoria.id"
                      @click="Sendsubcategory(subcategory.id)"
                    >
                      {{ subcategory.nombre_subcategoria }}
                    </li>
                  </div>
                </template>
              </ul>
            </ul>
          </div>
        </div>
        <div class="product-img-container" v-if="product.length">
          <div class="card-container">
            <div class="img-logo" v-if="product[0]">
              <img :src="product[0].foto_cloudinary" class="logo" />
            </div>
            <div class="btn-container">
              <button @click="closeMenu()" class="btn">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoOrder from './_order1/order1'
import KoMenu from './_order1/openMenu'

export default {
  components: {
    KoOrder,
    KoMenu,
  },
  name: 'Ko-Header-1',
  props: {
    dataStore: Object,
  },
  mounted() {
    this.toggle = true
  },
  data() {
    return {
      search: '',
      toggle: false,
      indexCategory: 0,
      drawer: false,
      direction: 'rtl',
      showMenu: false,
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
          name: 'Catálogo',
          icon: 'Flechadown',
        },
        {
          name: 'Contacto',
          path: '/template1/contacto',
        },
      ],
      seccionesCart: [
        {
          name: 'Inicio',
          path: '/',
        },
        // {
        //   name: 'Catálogo',
        //   path: '/',
        // },
        {
          name: 'Carrito',
          path: '/template1/cart',
        },
        {
          name: 'Contacto',
          path: '/template1/contacto',
        },
      ],
      cat: [],
      suma: '',
      add: true,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexCategory: 0,
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
    topHeader() {
      return this.$refs.header.offsetTop
    },
    heightHeader() {
      return this.$refs.header.offsetHeight
    },
  },
  methods: {
    openOrder() {
      this.showMenu = false
      this.$store.state.openOrder = true
    },
    openMenulateral() {
      this.showMenu = false
      this.$store.state.openMenulateral = true
    },
    openMenu(name) {
      var intro = document.getElementById('menu-collapse')
      if (name == 'Catálogo') {
        this.showMenu = !this.showMenu
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
        path: `/template1/productos/` + this.product[0].slug,
      })
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
    Sendsubcategory(value) {
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
      this.showMenu = false
      this.currentPage = 1
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
    back() {
      this.clear()
      this.toggleCategories = true
      this.nameCategory = ''
    },
    clear() {
      this.showMenu = false
      this.$store.commit('SET_CATEGORY_PRODCUTRO', '')
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
      this.$emit('clear')
      this.addClass()
      this.nameCategory = ''
    },
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
    },
    '$refs.header'() {
      this.suma = this.topHeader + this.heightHeader
    },
    search(value) {
      this.Searchproduct(value)
    },
  },
}
</script>

<style scoped>
div.header-container {
  --heightlogo: 120px;
}
.header-container {
  width: 100%;
  overflow: hidden;
  height: var(--heightlogo);
}
.menu-container {
  width: 100%;
  background: var(--background_color_1);
  top: 79px;
  display: flex;
  opacity: 0;
  transition: all ease 0.6s;
  position: fixed;
  height: auto;
  z-index: 3;
}
.hidden {
  top: auto;
  display: none;
}
.animated {
  opacity: 1;
  top: var(--heightlogo);
}
.wrapper-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--background_color_1);
  flex-direction: column;
  position: fixed;
  top: 0px;
  z-index: 3;
}
.header {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  min-height: 120px;
  padding: 0 30px 0;
}

#menu-collapse {
  display: none;
  flex-direction: row;
  width: 100%;
  max-width: 1300px;
  padding: 30px 30px 30px 20px;
  border-top: 1px solid #aba4a466;
  margin: 0 auto;
}
.menu-grid {
  column-count: 3;
  column-gap: 30px;
  column-fill: initial;
  width: 100%;
  max-width: 1300px;
  max-height: 700px;
  overflow-y: auto;
}
.subcategoria {
  font-weight: 400;
}
.subcategoria li:hover {
  background: var(--color_background_hover);
  color: var(--color_hover_text);
  border-radius: 10px;
}
.name-category li:hover {
  background: var(--color_background_hover);
  color: var(--color_hover_text);
  border-radius: 10px;
}
.name-category {
  font-size: 16px;
  font-weight: 600;
  color: var(--color_text);
  cursor: pointer;
  padding: 2px 0px 2px 10px;
  list-style: disc;
}
.name-category-all {
  font-size: 16px;
  font-weight: 600;
  color: var(--color_text);
  cursor: pointer;
  padding: 2px 0px 2px 10px;
  list-style: disc;
}
.name-category-all:hover {
  color: var(--btnhover);
}
.subcategoria li:last-child {
  margin-bottom: 10px;
}
.header-content-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 120px;
}
.wrapper-logo {
  width: var(--logo_width);
  max-height: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.header-logo {
  width: 100%;
  height: 100%;
  max-height: 110px;
  object-fit: contain;
  object-position: left;
}
.header-content-items {
  display: flex;
  flex: 1;
  margin-left: 10px;
  justify-content: center;
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
  /* margin-right: 20px; */
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
.header-items-icons {
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

.responsive {
  display: none;
}
.container-category {
  display: inline-block;
  padding-bottom: 10px;
  width: 100%;
}
.subcategoria li {
  padding-left: 10px;
}
.product-img-container {
  width: 30%;
  height: 100%;
}
.img-logo {
  /* width: 100%; */
  height: 265px;
  max-width: 250px;
  width: 100%;
  position: absolute;
}
.logo {
  height: 100%;
  border-radius: 10px;
  max-width: 250px;
  width: 100%;
  object-fit: cover;
}
.card-container {
  border-radius: 10px;
  box-shadow: 0 0 22px 3px #efeeeeb3;
  max-width: 250px;
  width: 100%;
  height: 265px;
  margin: 0 auto;
}
.btn-container {
  margin-top: 10px;
  position: relative;
  top: 75%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.btn {
  color: var(--color_text_btn);
  border-radius: var(--radius_btn);
  border: solid 1px var(--color_text);
  background-color: var(--color_text);
  color: white;
  padding: 8px 14px;
  font-size: 14px;
  width: 120px;
  height: 40px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 0px;
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
  border-radius: 10px;
}
/* search */
.search {
  display: initial;
  margin-right: 15px;
}
.search > div {
  display: inline-block;
  position: relative;
}
.search > div:after {
  content: '';
  background: var(--color_text);
  width: 2px;
  height: 10px;
  position: absolute;
  top: 18px;
  right: -3px;
  transform: rotate(135deg);
}
.search > div > input {
  color: var(--color_text);
  font-size: 16px;
  background: transparent;
  width: 15px;
  height: 15px;
  padding: 8px;
  border: 1.7px solid var(--color_text);
  outline: none;
  border-radius: 35px;
  transition: width 0.5s;
}
.search > div > input::placeholder {
  color: var(--color_text);
  opacity: 1;
}
.search > div > input::-ms-placeholder {
  color: var(--color_text);
}
.search > div > input::-ms-input-placeholder {
  color: var(--color_text);
}
.search > div > input:focus,
.search > div > input:valid {
  width: 200px;
  height: 35px;
}

@media (max-width: 900px) {
  .product-img-container {
    display: none;
  }
}
@media (max-width: 700px) {
  .header-buttons {
    display: none;
  }
  .header-items-icons {
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
  /* menu lateral */

  .responsive {
    display: initial;
  }
  .menu-container {
    display: none;
  }
}
@media (max-width: 500px) {
  .search {
    display: none;
  }
}
</style>
