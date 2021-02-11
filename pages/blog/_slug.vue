<template lang="html">
  <div class="home">
    <component
      :is="indexTemplate"
      :style="
        this.settingByTemplate &&
        this.settingByTemplate.settings &&
        this.settingByTemplate.settings['--background_color_1']
          ? this.settingByTemplate.settings
          : this.settingBase
      "
      :dataStore="dataStore"
    />
  </div>
</template>

<script>
import K05Article from '../../components/blog/Ko-articulo'
import K07Article from '../../components/template7/blog_page/Ko-articulo'
import K09Article from '../../components/template9/blog_page/Ko-articulo'

export default {
  layout: 'default',
  components: { K05Article, K07Article, K09Article },
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
      }
      return productListComponent
    },
  },
}
</script>
