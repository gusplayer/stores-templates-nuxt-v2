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
    />
  </div>
</template>

<script>
import K05Contact from '../components/template5/Ko-Contact-1'
import K07Contact from '../components/template7/Ko-Contact'

export default {
  layout: 'default',

  components: {
    K05Contact,
    K07Contact,
  },
  mounted() {
    if (this.facebooPixel && this.facebooPixel.pixel_facebook != null) {
      window.fbq('track', 'ViewContent', {
        description: 'PageContact',
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
      return this.$store.state.analytics_tagmanager
    },
    template() {
      return this.$store.state.template
    },
    indexTemplate() {
      let productListComponent = ''
      switch (this.template) {
        case 3:
          productListComponent = 'K05Contact'
          break
        case 5:
          productListComponent = 'K05Contact'
          break
        case 6:
          productListComponent = 'K05Contact'
          break
        case 7:
          productListComponent = 'K07Contact'
          break
      }
      return productListComponent
    },
  },
}
</script>

<style></style>
