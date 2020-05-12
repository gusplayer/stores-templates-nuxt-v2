<template lang="html">
  <div class="home">
    <KoTemplate />
  </div>
</template>

<script>
import KoTemplate from './template1/index'

export default {
  components: {
    KoTemplate,
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
