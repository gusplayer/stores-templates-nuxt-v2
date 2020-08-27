<template lang="html">
  <div class="home">
    <KoProductDetail
      :settingByTemplate="
        this.$store.state.settingByTemplate &&
        this.$store.state.settingByTemplate['--background_color_1']
          ? this.$store.state.settingByTemplate
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
  },
}
</script>

<style>
.home {
  overflow: hidden;
}
</style>
