<template lang="html">
  <div class="home">
    <component :is="indexTemplate" />
  </div>
</template>

<script>
import KoTemplate5 from './template5/index'
import KoTemplate6 from './template6/index_macrobrand'
// import KoTemplate6 from './template6/index'
import KoTemplate7 from './template7/index'
import KoTemplate8 from './template8/index'
import KoTemplate9 from './template9/index'
import KoTemplate10 from './template10/index'
import KoTemplate11 from './template11/index'

export default {
  components: {
    KoTemplate5,
    KoTemplate6,
    KoTemplate7,
    KoTemplate8,
    KoTemplate9,
    KoTemplate10,
    KoTemplate11,
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
        case 7:
          productListComponent = 'KoTemplate7'
          break
        case 8:
          productListComponent = 'KoTemplate8'
          break
        case 9:
          productListComponent = 'KoTemplate9'
          break
        case 10:
          productListComponent = 'KoTemplate10'
          break
        case 11:
          productListComponent = 'KoTemplate11'
          break
      }
      return productListComponent
    },
  },
}
</script>

<style></style>
