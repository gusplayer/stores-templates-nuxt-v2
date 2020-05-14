<template>
  <div class="wrapper-header">
    <div class="header" data-aos="fade-down" data-aos-duration="500">
      <KoOrder />
      <div class="header-content-logo">
        <nuxt-link to="/" class="wrapper-logo">
          <img
            :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
            class="header-logo"
          />
        </nuxt-link>
      </div>
      <div class="header-content-items">
        <div
          v-for="(item, index) in secciones"
          :key="`${index}${item.nombre}`"
          class="header-buttons"
        >
          <!-- <p class="header-text-center">{{ item.nombre }}</p> -->
          <nuxt-link :to="item.path" class="header-text-center">{{
            item.name
          }}</nuxt-link>
        </div>
      </div>
      <div class="header-content-cart" @click="openOrder">
        <cart-icon class="header-icon-cart" />
        <span class="num-items">{{ productsCart }}</span>
      </div>
      <div class="header-item-menu" @click="drawerMenu = true">
        <menu-icon class="header-icon-menu nav-bar" />
      </div>
      <div
        class="toggle-sidebar"
        v-show="drawerMenu"
        @click="drawerMenu = !drawerMenu"
      ></div>
      <el-drawer
        :visible.sync="drawerMenu"
        :direction="direction"
        class="responsive"
      >
        <div id="sidebar">
          <div class="sidebar-container">
            <div class="header-content-logo-navbar">
              <div class="wrapper-logo">
                <img
                  :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
                  class="header-logo"
                />
              </div>
              <span @click="drawerMenu = false">
                <window-close-icon class="header-icon-menu" />
              </span>
            </div>
            <ul>
              <li>
                <div>
                  <div
                    v-for="(item, index) in secciones"
                    :key="`${index}${item.nombre}`"
                  >
                    <li>
                      <nuxt-link :to="item.path" class="header-text-center">{{
                        item.name
                      }}</nuxt-link>
                    </li>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import KoOrder from './_order1/order1'

export default {
  components: {
    KoOrder,
  },
  name: 'Ko-Header-2',
  props: {
    dataStore: Object,
  },
  data() {
    return {
      drawerMenu: false,
      direction: 'rtl',
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
        // {
        //   name: 'Carrito',
        //   path: '/template1/cart',
        // },
        {
          name: 'Contacto',
          path: '/template1/contacto',
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
      this.$store.state.openOrder = true
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
.wrapper-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--background_color_1);
  box-sizing: border-box;
}
.header {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  padding: 0 30px 0;
}
.header-content-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper-logo {
  max-width: var(--logo_width);
  padding-top: 10px;
  padding-bottom: 10px;
}

.header-logo {
  width: 100%;
  max-height: 65px;
  object-fit: contain;
  object-position: left;
}
.header-content-items {
  display: flex;
  flex: 1;
  margin-left: 10px;
  justify-content: flex-end;
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
  font-size: 16px;
  font-weight: normal;
  color: var(--color_hover_text);
  margin-right: 20px;
  cursor: pointer;
}
.header-content-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  max-width: 35px;
  width: 100%;
  height: 35px;
  border: var(--color_shopping_cart) 2px solid;
  border-radius: 50%;
  padding-bottom: 3px;
  margin-left: 20px;
  position: relative;
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
}
.header-icon-cart {
  font-size: 20px;
  color: var(--color_icon);
  cursor: pointer;
}
.header-icon-cart:hover {
  color: var(--color_hover_text);
}

.header-item-menu {
  display: none;
}
#sidebar {
  display: none;
}
.sidebar-container {
  position: relative;
  min-height: 100%;
  padding-right: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
}
.header-content-logo-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dfe3e8;
}
.sidebar-container ul {
  padding-top: 10px;
  font-family: 'Poppins', sans-serif;
}
.toggle-sidebar {
  display: none;
  background-color: rgba(7, 14, 27, 0.473);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.responsive {
  display: none;
}
@media (max-width: 730px) {
  .header-content-cart {
    margin-left: 0px;
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
  /* menu lateral */
  #sidebar {
    display: initial;
    position: fixed;
    max-width: 350px;
    width: 100%;
    height: 100vh;
    background: var(--background_color_1);
    right: 0px;
    top: 0;
  }
  #sidebar.active {
    right: -200px;
  }
  #sidebar ul li {
    font-size: 16px;
    font-weight: normal;
    color: var(--color_text);
    list-style: none;
    margin: 20px 0px;
  }
  .toggle-sidebar {
    display: initial;
  }
  .responsive {
    display: initial;
  }
}
</style>
