<template lang="html">
  <div class="home">
    <component :is="indexTemplate" v-bind="componentsProps" />
  </div>
</template>

<script>
import K05Contact from '../components/template5/Ko-Contact-1'
import K07Contact from '../components/template7/Ko-Contact'
import K09Contact from '../components/template9/Ko-Contact'

export default {
  layout: 'default',

  components: {
    K05Contact,
    K07Contact,
    K09Contact,
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
        case 9:
          productListComponent = 'K09Contact'
          break
      }
      return productListComponent
    },
    settingByTemplate7() {
      return this.$store.state.settingByTemplate7
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        settingGeneral:
          this.settingByTemplate7 && this.settingByTemplate7.settingGeneral
            ? this.settingByTemplate7.settingGeneral
            : null,
        settingK07Contact:
          this.settingByTemplate7 && this.settingByTemplate7.contact
            ? this.settingByTemplate7.contact
            : null,
        settingK05Contact:
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings['--background_color_1']
            ? this.settingByTemplate.settings
            : this.settingBase,
      }
    },
  },
}
</script>

<style></style>
