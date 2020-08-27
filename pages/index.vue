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
      let productListComponent = ''
      switch (this.template) {
        case 3:
          productListComponent = 'KoTemplate5'
          break
        case 5:
          productListComponent = 'KoTemplate5'
          break
        case 6:
          productListComponent = 'KoTemplate6'
          break
      }
      return productListComponent
    },
  },
}
</script>

<style>
.home {
  overflow: hidden;
}
</style>
