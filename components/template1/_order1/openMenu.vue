<template>
  <transition name="fade">
    <div class="order" @click="openMenulateral" v-show="openMenu">
      <div class="order_content">
        <div class="order_header">
          <div class="wrapper-logo">
            <img
              :src="`https://api2.komercia.co/logos/${logoImg}`"
              class="header-logo"
            />
          </div>
          <button @click="openMenulateral" class="order_header_close">
            Cerrar
          </button>
        </div>
        <template>
          <div
            v-for="(item, index) in seccionesCart"
            :key="`${index}${item.name}`"
            class="content-secciones"
          >
            <li class="text">
              <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
            </li>
          </div>
        </template>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'KoMenu',
  props: { seccionesCart: {} },
  computed: {
    logoImg() {
      return this.$store.state.dataStore.tienda.logo
    },
    openMenu() {
      return this.$store.state.openMenulateral
    },
  },
  methods: {
    openMenulateral(event) {
      const element = event.target.className
      if (element === 'order' || element === 'order_header_close') {
        this.$store.commit('SET_OPENORDERMENU', false)
      }
    },
  },
  watch: {},
}
</script>

<style scoped>
.order {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 6;
}
.order_content {
  position: absolute;
  right: 0px;
  max-width: 400px;
  width: 100%;
  height: 100vh;
  background-color: var(--background_color_1);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 10px;
  animation: dispatch 0.2s linear 1;
  overflow: hidden;
}
@keyframes dispatch {
  0% {
    right: -400px;
  }
  100% {
    right: 0px;
  }
}
.order_content > div {
  width: 100%;
  box-sizing: border-box;
}
.order_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--background_color_2);
  padding: 10px 5px;
  flex: none;
}
.wrapper-logo {
  max-width: var(--logo_width);
  padding-top: 10px;
  padding-bottom: 10px;
}
.header-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
}
.order_header_close {
  padding: 5px 12px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: var(--color_shopping_cart);
  cursor: pointer;
  outline: none;
  flex: none;
  color: #fff;
  transition: all ease 0.3s;
}
.order_header_close:hover {
  background-color: var(--color_hover_text);
}
.content-secciones {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
}
.text {
  font-size: 16px;
  font-weight: normal;
  color: var(--color_text);
  cursor: pointer;
}
.text:hover {
  color: var(--color_hover_text);
}
</style>
