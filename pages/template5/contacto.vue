<template lang="html">
  <div class="home">
    <KoContact
      :dataStore="dataStore"
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
import KoContact from '../../components/template5/Ko-Contact-1'

export default {
  components: {
    KoContact,
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
