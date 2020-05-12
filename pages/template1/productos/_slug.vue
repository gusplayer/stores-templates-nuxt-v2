<template lang="html">
  <div class="home">
    <KoProductDetail :dataStore="dataStore" />
  </div>
</template>

<script>
import KoProductDetail from '../../../components/template1/Ko-ProductDetail-1'

export default {
  name: 'detalle',
  components: {
    KoProductDetail,
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
  },
}
</script>

<style>
.home {
  overflow: hidden;
}
</style>
