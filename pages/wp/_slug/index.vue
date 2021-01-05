<template lang="html">
  <div class="container-home" v-loading="loading">
    <KCategory :dataStore="dataStore" />
    <!-- <KProductFavoritos v-if="this.stateBanner" /> -->
    <KProductList :dataStore="dataStore" :fullProducts="fullProducts" />
    <KFooterWpLogo :dataStore="dataStore" />
    <!-- <KFooterWp :dataStore="dataStore" /> -->
  </div>
</template>

<script>
import KFooterWpLogo from '../../../components/footers/footerValienta/ko-Footer-valienta-logo'
// import KFooterWp from '../../../components/footers/footerValienta/ko-Footer-valienta'
import KCategory from '../../../components/valienta/Ko-Categories-valienta'
// import KProductFavoritos from '../../../components/valienta/Ko-ProductFavoritos-1'
import KProductList from '../../../components/valienta/Ko-ProductList-valienta'

export default {
  layout: 'wp',
  components: {
    KProductList,
    KCategory,
    // KProductFavoritos,
    // KFooterWp,
    KFooterWpLogo,
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
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;
}
</style>
