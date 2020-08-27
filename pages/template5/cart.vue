<template lang="html">
  <div class="home">
    <KoCart
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
import KoCart from '../../components/template5/Ko-Cart-1'

export default {
  components: {
    KoCart,
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
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
