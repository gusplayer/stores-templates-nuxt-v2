<template lang="html">
  <div class="container-home" v-loading="loading">
    <KoHeaderWp :dataStore="dataStore" />
    <KCategory :dataStore="dataStore" />
    <KProductFavoritos v-if="this.stateBanner" />
    <KProductList :dataStore="dataStore" :fullProducts="fullProducts" />
    <KFooterWaLogo :dataStore="dataStore" />
    <KFooterWa :dataStore="dataStore" />
  </div>
</template>

<script>
import KoHeaderWp from '../../../../../components/headers/header_wp/header_wp1/Ko-Header-wa-1'
import KCategory from '../../../../../components/whatsapp/template1/Ko-Categories-wa'
import KProductFavoritos from '../../../../../components/whatsapp/template1/Ko-ProductFavoritos-1'
import KProductList from '../../../../../components/whatsapp/template1/Ko-ProductList-wa'
import KFooterWaLogo from '../../../../../components/footers/footerWa/footerWa1/ko-Footer-wa-logo'
import KFooterWa from '../../../../../components/footers/footerWa/footerWa1/ko-Footer-wa'

export default {
  name: 'indexWaTemp1',
  layout: 'wa',
  components: {
    KoHeaderWp,
    KCategory,
    KProductFavoritos,
    KProductList,
    KFooterWaLogo,
    KFooterWa,
  },
  data() {
    return {}
  },
  computed: {
    loading() {
      if (this.dataStore.length) {
        return true
      } else {
        return false
      }
    },
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    stateBanner() {
      return this.$store.state.stateBanner
    },
  },
}
</script>

<style scoped>
.container-home {
  width: 100%;
  max-width: 900px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;
}
</style>
