<template lang="html">
  <div>
    <component :is="indexTemplate" v-bind="componentsProps" />
  </div>
</template>

<script>
import K05Cart from '../components/template5/Ko-Cart-1'
import K07Cart from '../components/template7/Ko-Cart'
import K09Cart from '../components/template9/Ko-Cart'
import K10Cart from '../components/template10/Ko-Cart'

export default {
  layout: 'default',

  components: {
    K05Cart,
    K07Cart,
    K09Cart,
    K10Cart,
  },
  mounted() {
    if (this.facebooPixel && this.facebooPixel.pixel_facebook != null) {
      window.fbq('track', 'ViewContent', {
        description: 'PageCart',
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
          productListComponent = 'K05Cart'
          break
        case 5:
          productListComponent = 'K05Cart'
          break
        case 6:
          productListComponent = 'K05Cart'
          break
        case 7:
          productListComponent = 'K07Cart'
          break
        case 9:
          productListComponent = 'K09Cart'
          break
        case 10:
          productListComponent = 'K10Cart'
          break
      }
      return productListComponent
    },
    settingByTemplate7() {
      return this.$store.state.settingByTemplate7
    },
    settingByTemplate9() {
      return this.$store.state.settingByTemplate9
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        settingK05Cart:
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings['--background_color_1']
            ? this.settingByTemplate.settings
            : this.settingBase,
        settingByTemplate7: this.settingByTemplate7
          ? [
              {
                settingGeneral:
                  this.settingByTemplate7 &&
                  this.settingByTemplate7.settingGeneral
                    ? this.settingByTemplate7.settingGeneral
                    : null,
                settingK07Cart:
                  this.settingByTemplate7 && this.settingByTemplate7.card1
                    ? this.settingByTemplate7.card1
                    : null,
              },
            ]
          : null,
        settingByTemplate9: this.settingByTemplate9
          ? [
              {
                setting9General:
                  this.settingByTemplate9 &&
                  this.settingByTemplate9.settingGeneral
                    ? this.settingByTemplate9.settingGeneral
                    : null,
              },
            ]
          : null,
      }
    },
  },
}
</script>

<style scoped></style>
