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

export default {
  components: {
    KoTemplate5,
    KoTemplate6,
    KoTemplate7,
  },
  mounted() {
    if (this.facebooPixel != null) {
      window.fbq('track', 'ViewContent', {
        Descripcion: 'PageHome',
      })
    }
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
      }
      return productListComponent
    },
    facebooPixel() {
      return this.$store.state.analytics_tagmanager.pixel_facebook
    },
  },
}
</script>

<style></style>
