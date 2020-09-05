<template lang="html">
  <div
    class="home"
    :style="
      this.$store.state.settingByTemplate &&
      this.$store.state.settingByTemplate['--background_color_1']
        ? this.$store.state.settingByTemplate
        : this.settingBase
    "
  >
    <kPrueba :dataStore="dataStore" />
  </div>
</template>

<script>
import kPrueba from '../../components/miCompra/Ko-miCompra-1'

export default {
  layout: 'miCompra',
  components: {
    kPrueba,
  },
  mounted() {},
  data() {
    return {}
  },
  computed: {
    template() {
      return this.$store.state.template
    },
    dataStore() {
      return this.$store.state.dataStore
    },
    settingBase() {
      return this.$store.state.settingBase
    },
  },
  methods: {},
  watch: {},
}
</script>

<style></style>
