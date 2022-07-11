<template lang="html">
  <div class="content-wa" id="width">
    <component :is="indexTemplate" />
    <WCountry :dataStore="dataStore" :valueWa="true" />
  </div>
</template>

<script>
import WaTemplate1 from '../../template99/templates/template1/index'
import WaTemplate2 from '../../template99/templates/template2/index'
import WaTemplate3 from '../../template99/templates/template3/index'
import WCountry from '../../../components/footers/footer1/Ko-Footer-Country.vue'

export default {
  name: 'WapiME',
  layout: 'wa',
  components: { WaTemplate1, WaTemplate2, WaTemplate3, WCountry },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
    indexTemplate() {
      let componentTemplate = ''
      if (this.settingByTemplate && this.settingByTemplate.tema) {
        switch (this.settingByTemplate.tema) {
          case 1:
            componentTemplate = 'WaTemplate1'
            break
          case 2:
            componentTemplate = 'WaTemplate2'
            break
          case 3:
            componentTemplate = 'WaTemplate3'
            break
        }
      } else {
        return (componentTemplate = 'WaTemplate1')
      }
      return componentTemplate
    },
  },
  methods: {
    onResize() {
      const widthOutput = document.querySelector('#width')
      if (window.innerWidth > 1300) {
        widthOutput.style.width = '900px'
      } else {
        widthOutput.style.width = window.innerWidth + 'px'
      }
    },
  },
}
</script>

<style scoped>
.content-wa {
  @apply w-full flex flex-col justify-center items-center;
}
</style>
