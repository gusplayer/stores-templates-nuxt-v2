<template>
  <KoProductList1
    :dataStore="dataStore"
    :Settings="getSettingsCSS"
    :fullProducts="
      nameCurrentComponent.includes('ProductList') ? fullProducts : ''
    "
  ></KoProductList1>
</template>
<script>
export default {
  async mounted() {
    // this.$store.dispatch('GET_DATA')
    if (this.token.length) {
      this.$store.dispatch('GET_SETTINGS_COMPONENT', 103)
    }
  },
  data() {
    return {
      nameCurrentComponent: 'ProductList',
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
