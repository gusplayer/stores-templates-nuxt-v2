<template>
  <div class="home">
    <component :is="indexTemplate" v-bind="componentsProps" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  components: {
    K05Article: () => import('../../components/blog/Ko-articulo'),
    K07Article: () =>
      import('../../components/template7/blog_page/Ko-articulo'),
    K09Article: () =>
      import('../../components/template9/blog_page/Ko-articulo'),
    K10Article: () =>
      import('../../components/template10/blog_page/Ko-articulo'),
    K11Article: () =>
      import('../../components/template11/blog_page/Ko-articulo'),
    K13Article: () =>
      import('../../components/template13/_blog/Ko-articulo.vue'),
  },
  computed: {
    ...mapState([
      'dataStore',
      'settingBase',
      'settingByTemplate',
      'settingByTemplate7',
      'settingByTemplate9',
      'settingByTemplate10',
      'settingByTemplate11',
      'settingByTemplate13',
      'template',
    ]),
    indexTemplate() {
      let productListComponent = ''
      switch (this.template) {
        case 3:
          productListComponent = 'K05Article'
          break
        case 5:
          productListComponent = 'K05Article'
          break
        case 6:
          productListComponent = 'K05Article'
          break
        case 7:
          productListComponent = 'K07Article'
          break
        case 9:
          productListComponent = 'K09Article'
          break
        case 10:
          productListComponent = 'K10Article'
          break
        case 11:
          productListComponent = 'K11Article'
          break
        case 13:
          productListComponent = 'K13Article'
          break
      }
      return productListComponent
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral: this.settingByTemplate7?.settingGeneral || null,
        settingK07Blog: this.settingByTemplate7?.blog1 || null,
        settingK05Blog:
          this.settingByTemplate?.settings?.tipo_letra || this.settingBase,
        settingByTemplate11: this.settingByTemplate11
          ? [
              {
                cardProduct: this.settingByTemplate11?.blog || null,
                setting11General:
                  this.settingByTemplate11?.settingGeneral || null,
              },
            ]
          : null,
      }
    },
  },
}
</script>
