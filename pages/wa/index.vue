<template lang="html">
  <div class="container-home">
      <KoHeaderWp :dataStore="dataStore" />
    <KCategory :dataStore="dataStore"  />
    <KProductFavoritos />
  
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
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>

