<template>
  <component :is="indexTemplate" v-bind="componentsProps" />
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
  data() {
    return {
      componentMapping: {
        3: 'K05Article',
        5: 'K05Article',
        6: 'K05Article',
        7: 'K07Article',
        9: 'K09Article',
        10: 'K10Article',
        11: 'K11Article',
        13: 'K13Article',
        // 14: 'K14Contact',
      },
    }
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
      if (this.componentMapping.hasOwnProperty(this.template)) {
        productListComponent = this.componentMapping[parseInt(this.template)]
      }
      return productListComponent
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
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
