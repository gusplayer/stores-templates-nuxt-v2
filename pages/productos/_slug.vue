<template lang="html">
  <div class="home">
    <KoProductDetail
      :style="
        this.settingByTemplate.settings &&
        this.settingByTemplate.settings['--background_color_1']
          ? this.settingByTemplate.settings
          : this.settingBase
      "
    />
  </div>
</template>

<script>
import KoProductDetail from '../../components/template5/Ko-ProductDetail-1'

export default {
  components: {
    KoProductDetail,
  },
  computed: {
    settingBase() {
      return this.$store.state.settingBase
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
  },
}
</script>

<style></style>
