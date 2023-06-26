<template>
  <component :is="indexTemplate" v-bind="componentsProps" />
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  components: {
    K05Blog: () => import('../../components/blog/Ko-Blog'),
    K07Blog: () => import('../../components/template7/blog_page/Ko-Blog'),
    K09Blog: () => import('../../components/template9/blog_page/Ko-Blog'),
    K10Blog: () => import('../../components/template10/blog_page/Ko-Blog'),
    K11Blog: () => import('../../components/template11/blog_page/Ko-Blog'),
    K13Blog: () => import('../../components/template13/_blog/Ko-Blog'),
    K14Blog: () => import('../../components/template14/_cardBlog/Ko-index.vue'),
  },
  data() {
    return {
      componentMapping: {
        3: 'K05Blog',
        5: 'K05Blog',
        6: 'K05Blog',
        7: 'K07Blog',
        9: 'K09Blog',
        10: 'K10Blog',
        11: 'K11Blog',
        13: 'K13Blog',
        14: 'K14Blog',
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
      'settingByTemplate14',
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
        settingK05Blog: this.settingByTemplate?.settings ?? this.settingBase,
        settingByTemplate7: this.settingByTemplate7
          ? [
              {
                settingGeneral: this.settingByTemplate7?.settingGeneral ?? null,
                settingK07Blog: this.settingByTemplate7?.blog1 ?? null,
                settingK07Blog1: this.settingByTemplate7?.blog ?? null,
              },
            ]
          : null,
        settingByTemplate9: this.settingByTemplate9
          ? [
              {
                blog: this.settingByTemplate9?.blog ?? null,
                settingGeneral: this.settingByTemplate9?.settingGeneral ?? null,
              },
            ]
          : null,
        settingByTemplate11: this.settingByTemplate11
          ? [
              {
                blog: this.settingByTemplate11?.blog ?? null,
                setting11General:
                  this.settingByTemplate11?.settingGeneral ?? null,
              },
            ]
          : null,
        settingByTemplate13: this.settingByTemplate13
          ? [
              {
                setting13General:
                  this.settingByTemplate13?.settingGeneral ?? null,
              },
            ]
          : null,
        settingByTemplate14: this.settingByTemplate14
          ? [
              {
                settingGeneral:
                  this.settingByTemplate14?.settingGeneral ?? null,
                cardBlog: this.settingByTemplate14?.cardBlog ?? null,
              },
            ]
          : null,
      }
    },
  },
}
</script>
