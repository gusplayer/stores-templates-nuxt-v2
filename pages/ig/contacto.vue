<template lang="html">
  <div class="home">
    <KoContact :dataStore="dataStore" />
  </div>
</template>

<script>
import KoContact from '../../components/template5/Ko-Contact-1'

export default {
  layout: 'ig',
  components: {
    KoContact,
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
