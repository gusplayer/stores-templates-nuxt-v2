<template lang="html">
  <div class="home">
    <KoCart />
  </div>
</template>

<script>
import KoCart from '../../components/template1/Ko-Cart-1'

export default {
  components: {
    KoCart,
  },
  // computed: {
  //   dataStore() {
  //     return this.$store.state.dataStore
  //   },
  // },
}
</script>

<style>
.home {
  overflow: hidden;
}
</style>
