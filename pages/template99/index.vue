<template>
  <div class="content-wa">
    <component :is="indexTemplate" />
    <WCountry :dataStore="dataStore" />
  </div>
</template>
<script>
import WaTemplate1 from './templates/template1/index'
import WaTemplate2 from './templates/template2/index'
import WaTemplate3 from './templates/template3/index'
import WCountry from '../../components/footers/footer1/Ko-Footer-Country.vue'

export default {
  layout: 'wa',
  name: 'templateWhatsApp',
  components: { WaTemplate1, WaTemplate2, WaTemplate3, WCountry },
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
}
</script>
<style scoped>
* {
  font-family: 'Poppins', sans-serif !important;
}
.content-wa {
  @apply w-full flex flex-col justify-center items-center;
}
</style>
