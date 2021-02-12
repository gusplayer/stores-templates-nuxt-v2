<template lang="html">
  <div class="home">
    <component :is="indexTemplate" v-bind="componentsProps" />
  </div>
</template>

<script>
import K05Blog from '../../components/blog/Ko-Blog'
import K07Blog from '../../components/template7/blog_page/Ko-Blog'
import K09Blog from '../../components/template9/blog_page/Ko-Blog'

export default {
  layout: 'default',
  components: { K05Blog, K07Blog, K09Blog },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    settingBase() {
      return this.$store.state.settingBase
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
    template() {
      return this.$store.state.template
    },
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
      }
      return productListComponent
    },
    settingByTemplate7() {
      return this.$store.state.settingByTemplate7
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral:
          this.settingByTemplate7 && this.settingByTemplate7.settingGeneral
            ? this.settingByTemplate7.settingGeneral
            : null,
        settingK07Blog:
          this.settingByTemplate7 && this.settingByTemplate7.blog1
            ? this.settingByTemplate7.blog1
            : null,
        settingK05Blog:
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings['--background_color_1']
            ? this.settingByTemplate.settings
            : this.settingBase,
      }
    },
  },
}
</script>

<style></style>
