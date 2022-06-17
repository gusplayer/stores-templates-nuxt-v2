<template lang="html">
  <div class="home">
    <component :is="indexTemplate" v-bind="componentsProps" />
  </div>
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
          productListComponent = 'K05Blog'
          break
        case 5:
          productListComponent = 'K05Blog'
          break
        case 6:
          productListComponent = 'K05Blog'
          break
        case 7:
          productListComponent = 'K07Blog'
          break
        case 9:
          productListComponent = 'K09Blog'
          break
        case 10:
          productListComponent = 'K10Blog'
          break
        case 11:
          productListComponent = 'K11Blog'
          break
        case 13:
          productListComponent = 'K13Blog'
          break
      }
      return productListComponent
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingK05Blog:
          this.settingByTemplate && this.settingByTemplate.settings
            ? this.settingByTemplate.settings
            : this.settingBase,
        settingByTemplate7: this.settingByTemplate7
          ? [
              {
                settingGeneral:
                  this.settingByTemplate7 &&
                  this.settingByTemplate7.settingGeneral
                    ? this.settingByTemplate7.settingGeneral
                    : null,
                settingK07Blog:
                  this.settingByTemplate7 && this.settingByTemplate7.blog1
                    ? this.settingByTemplate7.blog1
                    : null,
                settingK07Blog1:
                  this.settingByTemplate7 && this.settingByTemplate7.blog
                    ? this.settingByTemplate7.blog
                    : null,
              },
            ]
          : null,
        settingByTemplate9: this.settingByTemplate9
          ? [
              {
                blog:
                  this.settingByTemplate9 && this.settingByTemplate9.blog
                    ? this.settingByTemplate9.blog
                    : null,
                settingGeneral:
                  this.settingByTemplate9 &&
                  this.settingByTemplate9.settingGeneral
                    ? this.settingByTemplate9.settingGeneral
                    : null,
              },
            ]
          : null,
        settingByTemplate11: this.settingByTemplate11
          ? [
              {
                blog:
                  this.settingByTemplate11 && this.settingByTemplate11.blog
                    ? this.settingByTemplate11.blog
                    : null,
                setting11General:
                  this.settingByTemplate11 &&
                  this.settingByTemplate11.settingGeneral
                    ? this.settingByTemplate11.settingGeneral
                    : null,
              },
            ]
          : null,
        settingByTemplate13: this.settingByTemplate13
          ? [
              {
                setting13General:
                  this.settingByTemplate13 &&
                  this.settingByTemplate13.settingGeneral
                    ? this.settingByTemplate13.settingGeneral
                    : null,
              },
            ]
          : null,
      }
    },
  },
}
</script>

<style></style>
