<template lang="html">
  <div class="content-wa">
    <component :is="indexTemplate" />
  </div>
</template>
<script>
import WaTemplate1 from './templates/template1/index'
import WaTemplate2 from './templates/template2/index'
import WaTemplate3 from './templates/template3/index'
export default {
  layout: 'wa',
  name: 'templateWhatsapp',
  components: { WaTemplate1, WaTemplate2, WaTemplate3 },
  computed: {
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
    indexTemplate() {
      let componentTemplate = ''
      if (this.settingByTemplate) {
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
