<template lang="html">
  <div class="home">
    <KProductList
      :style="
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
import KProductList from '../../components/template6/Ko6-ProductList-2'

export default {
  components: {
    KProductList,
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
  },
}
</script>
