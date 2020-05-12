<template lang="html">
  <div class="home">
    <kBanner :dataStore="dataStore" />
    <KProductList
      :dataStore="dataStore"
      :fullProducts="fullProducts"
    ></KProductList>
  </div>
</template>

<script>
import kBanner from '../../components/template1/ko-Banner-1'
import KProductList from '../../components/template1/Ko-ProductList-1'

export default {
  components: {
    kBanner,
    KProductList,
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

<style>
.home {
  overflow: hidden;
}
</style>
