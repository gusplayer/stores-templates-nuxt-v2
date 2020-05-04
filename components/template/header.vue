<template>
  <KoHeader2
    :dataStore="dataStore"
    :currentSettingsHeader="getSettingsCSS"
  ></KoHeader2>
</template>
<script>
export default {
  async mounted() {
    // this.$store.dispatch('GET_DATA')
    if (this.token.length) {
      this.$store.dispatch('GET_SETTINGS_COMPONENT', 92)
    }
  },
  data() {
    return {}
  },
  computed: {
    token() {
      return this.$store.state.accessToken
    },
    dataStore() {
      return this.$store.state.dataStore
    },
    getSettingsCSS() {
      return this.$store.getters.getSettingsCSS
    },
  },
}
</script>
