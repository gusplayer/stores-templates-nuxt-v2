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
      :fullProducts="fullProducts"
    />
  </div>
</template>

<script>
import K05ProductList from '../../components/template6/Ko6-ProductList-2'
import K07ProductList from '../../components/template7/Ko-ProductList'

export default {
  components: {
    K05ProductList,
    K07ProductList,
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
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
          productListComponent = 'K05ProductList'
          break
        case 5:
          productListComponent = 'K05ProductList'
          break
        case 6:
          productListComponent = 'K05ProductList'
          break
        case 7:
          productListComponent = 'K07ProductList'
          break
      }
      return productListComponent
    },
  },
}
</script>
