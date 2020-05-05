<template>
  <KoFooter1 :dataStore="dataStore" :currentSettingsFooter="getSettingsCSS"></KoFooter1>
</template>
<script>
export default {
  mounted() {
    
      this.$store.dispatch('GET_SETTINGS_COMPONENT', 96)
    
  },
  data() {
    return {}
  },
  computed: {    
    dataStore() {
      return this.$store.state.dataStore
    },
    getSettingsCSS() {
      return this.$store.getters.getSettingsCSS
    },
  },
}
</script>
