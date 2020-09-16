<template lang="html">
  <div class="home">
    <KoHeaderWp :dataStore="dataStore" />
    <KCategory :dataStore="dataStore" />
    <KProductFavoritos v-if="this.stateBanner" />
    <KProductList :dataStore="dataStore" :fullProducts="fullProducts" />
    <KFooterWa :dataStore="dataStore" />
  </div>
</template>

<script>
import KCategory from '../../components/whatsapp/Ko-Categories-wa'
import KProductFavoritos from '../../components/whatsapp/Ko-ProductFavoritos-1'
import KProductList from '../../components/whatsapp/Ko-ProductList-wa'
import KoHeaderWp from '../../components/headers/header_wp/Ko-Header-wa'
import KFooterWa from '../../components/footers/footerWa/ko-Footer-wa'

export default {
  layout: 'wa',
  components: {
    KProductList,
    KCategory,
    KProductFavoritos,
    KFooterWa,
    KoHeaderWp,
  },
  data() {
    return {}
  },
  computed: {
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
