<template lang="html">
  <div class="home">
    <KoProductDetail
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
import KoProductDetail from '../../components/template5/Ko-ProductDetail-1'

export default {
  components: {
    KoProductDetail,
  },
  mounted() {
    if (this.facebooPixel != null) {
      window.fbq('track', 'ViewContent', {
        Descripcion: 'PageCart',
      })
    }
  },
  computed: {
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
