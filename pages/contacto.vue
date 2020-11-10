<template lang="html">
  <div style="overflow: hidden;">
    <KoContact
      :dataStore="dataStore"
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
import KoContact from '../components/template5/Ko-Contact-1'

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
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
  },
}
</script>

<style></style>
