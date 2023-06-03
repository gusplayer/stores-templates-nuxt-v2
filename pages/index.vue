<template>
  <div class="home">
    <component :is="indexTemplate" />
  </div>
</template>
<script>
// import KoTemplate6 from './template6/index'
import { mapState } from 'vuex'
export default {
  components: {
    KoTemplate5: () => import('./template5/index'),
    // KoTemplate6: () => import('./template6/index_macrobrand'),
    KoTemplate7: () => import('./template7/index'),
    KoTemplate8: () => import('./template8/index'),
    KoTemplate9: () => import('./template9/index'),
    KoTemplate10: () => import('./template10/index'),
    KoTemplate11: () => import('./template11/index'),
    KoTemplate12: () => import('./template12/index'),
    KoTemplate13: () => import('./template13/index'),
    KoTemplate14: () => import('./template14/index'),
    KoTemplateWhatsApp: () => import('./template99/index'),
  },
  computed: {
    ...mapState(['template']),
    indexTemplate() {
      let productListComponent = ''
      switch (this.template) {
        // case 3:
        //   productListComponent = 'KoTemplate5'
        //   break
        case 5:
          productListComponent = 'KoTemplate5'
          break
        // Espacio para nueva plantillas 6 - 8
        case 7:
          productListComponent = 'KoTemplate7'
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
        case 12:
          productListComponent = 'KoTemplate12'
          break
        case 13:
          productListComponent = 'KoTemplate13'
          break
        case 14:
          productListComponent = 'KoTemplate14'
          break
        case 99:
          productListComponent = 'KoTemplateWhatsApp'
          break
        default:
          productListComponent = 'KoTemplate5'
      }
      return productListComponent
    },
  },
}
</script>
