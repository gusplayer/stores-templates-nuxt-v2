<template>
  <div class="header-container">
    <div class="wrapper-header">
      <div class="header">
        <KoOrder />
        <div class="headerLeft">
          <nuxt-link to="/ig">
            <img
              :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
              class="header-logo"
            />
          </nuxt-link>
          <nuxt-link to="/ig">
            <p class="title-menu">{{ dataStore.tienda.nombre }}</p>
          </nuxt-link>
        </div>
        <div class="headerRight">
          <div class="header-content-icon">
            <div class="header-content-cart" @click="openOrder">
              <cartShop-icon class="header-icon-cart" />
              <span class="num-items">{{ productsCart }}</span>
            </div>
          </div>
          <div class="header-item-menu" @click="openMenulateral">
            <menuDots-icon class="header-icon-menu" />
          </div>
        </div>
        <KoMenu :dataStore="dataStore" class="responsive" />
      </div>
    </div>
  </div>
</template>

<script>
import KoOrder from './_order1/order1'
import KoMenu from './_order1/openMenuRight'

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
      links: [
        {
          nombre: 'Instagram',
          icon: 'instagram-icon',
          link: this.dataStore.tienda.red_instagram,
        },
      ],
    }
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length
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
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
    },
  },
}
</script>

<style scoped>
.header-container {
  width: 100%;
  height: 50px;
  overflow: hidden;
  background: var(--background_color_1);
}
.menu-container {
  width: 100%;
  background: var(--background_color_1);
  top: 50px;
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
.title-menu {
  color: var(--color_text);
  font-size: 26px;
  font-weight: 300;
  cursor: pointer;
  font-family: 'instagram';
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
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
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
.headerLeft {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.headerRight {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
#menu-collapse {
  display: none;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  padding: 30px 30px 30px 20px;

  margin: 0 auto;
}
.menu-grid {
  flex: 2;
  width: 100%;
  max-width: 1000px;
  max-height: 700px;
  margin-right: 1px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  overflow-y: auto;
}
.menu-grid::-webkit-scrollbar {
  background: var(--background_color_1);
  width: 8px;
}
.menu-grid::-webkit-scrollbar-track {
  border-radius: 10px;
}
.menu-grid::-webkit-scrollbar-thumb {
  background: linear-gradient(125deg, #e6e6e6, var(--color_shopping_cart));
  border-radius: 10px;
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
  padding: 2px 0px;
}
.wrapper-logo {
  width: 100%;
}
.header-logo {
  /* width: 100%; */
  height: 30px;
  width: 30px;
  object-fit: contain;
  object-position: center;
  border-radius: 45px;
  margin-right: 8px;
  background-color: white;
  cursor: pointer;
}

.header-content-items {
  display: flex;
  flex: 1;
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
  margin-left: 5px;
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
  /* border: var(--color_shopping_cart) 2px solid; */
  /* border-radius: 50%; */
  /* padding-bottom: 3px; */
  margin-left: 20px;
  position: relative;
  cursor: pointer;
}
.num-items {
  font-size: 11px;
  position: absolute;
  right: -5px;
  top: -5px;
  color: var(--color_text);
  background-color: transparent;
  border: var(--color_shopping_cart) 1px solid;
  border-radius: 10px;
  line-height: 1;
  display: flex;
  padding: 3px 4px;
  justify-content: center;
  align-items: center;
}
.header-icon-cart {
  font-size: 22px;
  color: var(--color_icon);
}
.header-icon-cart:hover {
  color: var(--color_hover_text);
}
.header-item-menu {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
}
.header-icon-menu {
  font-size: 30px;
  color: var(--color_text);
  cursor: pointer;
  position: relative;
  top: -3px;
}
.header-icon-menu > .material-design-icon__svg {
  bottom: 0em;
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
  border: solid 1px var(--color_text);
  background-color: var(--color_text);
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
  .header-items-icons {
    display: none;
  }
  .menu-container {
    display: none;
  }
}
@media (max-width: 500px) {
  .header {
    padding: 10px 15px 0;
  }
  .headerLeft {
    flex: 1;
  }
  .headerRight {
    flex: 0;
  }
}
</style>
