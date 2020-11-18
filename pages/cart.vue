<template lang="html">
  <div style="overflow: hidden;">
    <KoCart
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
import KoCart from '../components/template5/Ko-Cart-1'

export default {
  components: {
    KoCart,
  },
  mounted() {
    if (this.facebooPixel != null) {
      window.fbq('track', 'ViewContent', {
        Descripcion: 'PageCart',
      })
    }
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
    facebooPixel() {
      return this.$store.state.analytics_tagmanager.pixel_facebook
    },
  },
}
</script>

<style></style>
