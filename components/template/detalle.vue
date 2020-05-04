<template>
  <KoProductDetail1
    :dataStore="dataStore"
    :Settings="getSettingsCSS"
    :fullProducts="
      nameCurrentComponent.includes('ProductDetail') ? fullProducts : ''
    "
  ></KoProductDetail1>
</template>
<script>
export default {
  async mounted() {
    // this.$store.dispatch('GET_DATA')
    if (this.token.length) {
      this.$store.dispatch('GET_SETTINGS_COMPONENT', 102)
    }
  },
  data() {
    return {
      nameCurrentComponent: 'ProductDetail',
    }
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
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
  },
}
</script>
