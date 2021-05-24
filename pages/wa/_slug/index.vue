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
  name: 'index-wa',
  layout: 'wa',
  components: { WaTemplate1, WaTemplate2, WaTemplate3 },
  data() {
    return {
      componentNumber: 1,
    }
  },
  computed: {
    indexTemplate() {
      let componentTemplate = ''
      switch (this.componentNumber) {
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
      return componentTemplate
    },
  },
}
</script>

<style scoped>
.content-wa {
  @apply w-full flex flex-col justify-center items-center;
}
</style>
