<template>
  <div v-if="settingByTemplate12">
    whatever components here
  </div>
</template>

<script>
export default {
  layout: 'default',
  components: {},
  mounted() {
    window.addEventListener('message', this.addEventListenertemplate)
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    listArticulos() {
      return this.$store.state.listArticulos
    },
    settingByTemplate12() {
      return this.$store.state.settingByTemplate12
    },
  },
  methods: {
    addEventListenertemplate() {},
  }
}
</script>

<style>

</style>
