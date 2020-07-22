<template lang="html">
  <div class="home">
    <component :is="indexTemplate" />
  </div>
</template>

<script>
import KoTemplate5 from './template5/index'
import KoTemplate6 from './template6/index'

export default {
  components: {
    KoTemplate5,
    KoTemplate6,
  },
  computed: {
    template() {
      return this.$store.state.template
    },
    indexTemplate() {
      let headerComponent = ''
      switch (this.template) {
        case 3:
          headerComponent = 'KoTemplate5'
          break
        case 4:
          headerComponent = 'KoTemplate6'
          break
      }
      return headerComponent
    },
  },
}
</script>

<style>
.home {
  overflow: hidden;
}
</style>
