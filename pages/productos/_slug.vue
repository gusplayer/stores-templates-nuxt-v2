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
    />
  </div>
</template>

<script>
import Ko5ProductDetail from '../../components/template5/Ko-ProductDetail-1'
import Ko7ProductDetail from '../../components/template7/Ko-ProductDetail'
import Ko9ProductDetail from '../../components/template9/Ko-ProductDetail'
import Ko10ProductDetail from '../../components/template10/Ko-ProductDetail'
import Ko11ProductDetail from '../../components/template11/ko-ProductDetail'

export default {
  components: {
    Ko5ProductDetail,
    Ko7ProductDetail,
    Ko9ProductDetail,
    Ko10ProductDetail,
    Ko11ProductDetail,
  },
  computed: {
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
          productListComponent = 'Ko5ProductDetail'
          break
        case 5:
          productListComponent = 'Ko5ProductDetail'
          break
        case 6:
          productListComponent = 'Ko5ProductDetail'
          break
        case 7:
          productListComponent = 'Ko7ProductDetail'
          break
        case 9:
          productListComponent = 'Ko9ProductDetail'
          break
        case 10:
          productListComponent = 'Ko10ProductDetail'
          break
        case 11:
          productListComponent = 'Ko11ProductDetail'
          break
      }
      return productListComponent
    },
  },
}
</script>

<style></style>
