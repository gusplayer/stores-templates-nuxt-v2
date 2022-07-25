<template>
  <div>
    <header
      class="wrapper-header"
      :class="isVariantLogo == true ? 'bg-white-white shadow' : ''"
    >
      <div class="header-content-logo">
        <nuxt-link
          to="/"
          class="wrapper-logo"
          :style="`max-width:${settingByTemplate12.logoSize};`"
        >
          <img
            :src="`${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
            class="header-logo"
            alt="Logo Img"
          />
        </nuxt-link>
      </div>
      <div class="content_car">
        <button
          style="margin-right: 20px"
          @click="openSearch"
          id="OpenCartTag"
          class="btn-cart content_car"
          :class="isVariantLogo == true ? 'text-1' : 'text-2'"
        >
          <search-icon class="icon" />
          <p style="font-size: 18px; margin-left: 2px">
            {{ $t('home_buscar') }}
          </p>
        </button>
        <button
          @click="openOrder"
          id="OpenCartTag"
          class="btn-cart content_car"
          :class="isVariantLogo == true ? 'text-1' : 'text-2'"
        >
          <cart-icon class="icon" />
          <p style="font-size: 18px; margin-left: 2px">
            {{ $t('footer_carrito') }}
          </p>
        </button>
      </div>
    </header>
    <KoOrder :dataStore="dataStore" />
    <KoSearch />
  </div>
</template>

<script>
import settingsProps from './mixins/ComponentProps'

export default {
  name: 'IHeader',
  components: {
    KoOrder: () => import('../headers/_order1/order1.vue'),
    KoSearch: () => import('../headers/header1/search.vue'),
  },
  mixins: [settingsProps],
  data() {
    return {
      isVariantLogo: false,
    }
  },
  async mounted() {
    window.addEventListener('scroll', await this.handleToggleLogo)
  },
  async beforeDestroy() {
    window.removeEventListener('scroll', await this.handleToggleLogo)
  },
  methods: {
    async handleToggleLogo() {
      await (this.isVariantLogo = !!(window.scrollY >= 120))
    },
    openOrder() {
      this.$gtm.push({
        event: 'OpenCart',
        action: 'click',
      })
      this.showMenu = false
      this.$store.commit('SET_OPEN_ORDER', true)
    },
    openSearch() {
      this.$store.commit('SET_OPEN_SEARCH', true)
    },
  },
}
</script>
<style scoped>
.wrapper-header {
  padding: 0 20px;
  transition: all 200ms ease-in-out;
  @apply flex fixed justify-between items-center transform-gpu top-0 left-0 w-full z-10;
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
  object-fit: contain;
  object-position: left;
}
.btn-cart {
  font-weight: normal;
  margin-right: 10px;
  cursor: pointer;
}
.content_car {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.icon {
  bottom: 0.125em;
  font-size: 19px;
}
.text-1 {
  color: black;
}
.text-2 {
  color: white;
}
.text-1:hover,
.text-2:hover {
  color: gray;
}
</style>
