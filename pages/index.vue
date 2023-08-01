<template>
  <component :is="indexTemplate" />
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
    KoTemplate15: () => import('./template15/index'),
    KoTemplateWhatsApp: () => import('./template99/index'),
  },
  data() {
    return {
      componentMapping: {
        // 3: 'K05Contact',
        5: 'KoTemplate5',
        // 6: 'K05Contact',
        7: 'KoTemplate7',
        9: 'KoTemplate9',
        10: 'KoTemplate10',
        11: 'KoTemplate11',
        12: 'KoTemplate12',
        13: 'KoTemplate13',
        14: 'KoTemplate14',
        15: 'KoTemplate15',
        99: 'KoTemplateWhatsApp',
      },
    }
  },
  computed: {
    ...mapState(['template']),
    indexTemplate() {
      let productListComponent = ''
      if (this.componentMapping.hasOwnProperty(this.template)) {
        productListComponent = this.componentMapping[parseInt(this.template)]
      }
      return productListComponent
    },
  },
}
</script>
