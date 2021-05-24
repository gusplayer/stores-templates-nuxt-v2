<template>
  <div class="content-home" v-loading="loading">
    <KoHeaderWa :dataStore="dataStore"></KoHeaderWa>
    <KoCategoriesWa :dataStore="dataStore"></KoCategoriesWa>
    <KoProductListWa
      :dataStore="dataStore"
      :fullProducts="fullProducts"
    ></KoProductListWa>
    <KoFooterWa :dataStore="dataStore"></KoFooterWa>
  </div>
</template>
<script>
import KoHeaderWa from '../../../../../components/headers/header_wp/header_wp2/Ko-Header-wa-2'
import KoCategoriesWa from '../../../../../components/whatsapp/template2/ko-slide-categorys'
import KoProductListWa from '../../../../../components/whatsapp/template2/ko-productList'
import KoFooterWa from '../../../../../components/footers/footerWa/footerWa2/ko-Footer-wa'

export default {
  name: 'indexWaTemp2',
  components: { KoHeaderWa, KoCategoriesWa, KoProductListWa, KoFooterWa },
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
.content-home {
  width: 100%;
  max-width: 900px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;
}
</style>
