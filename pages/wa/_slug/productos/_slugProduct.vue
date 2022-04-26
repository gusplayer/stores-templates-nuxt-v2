<template lang="html">
  <div class="Wrapper-KoProductDetail-Slug-wapi" id="width">
    <KoProductDetail />
    <KFooterWaLogo v-bind="componentsProps" />
  </div>
</template>

<script>
import KoProductDetail from '../../../../components/whatsapp/Ko-ProductDetail-wa'
import KFooterWaLogo from '../../../../components/footers/footerWa/footerWa1/ko-Footer-wa-logo.vue'

export default {
  layout: 'wa',
  name: 'WapiMEDetail',
  components: {
    KoProductDetail,
    KFooterWaLogo,
  },
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
    componentsProps() {
      return {
        dataStore: this.dataStore,
        settingByTemplate:
          this.settingByTemplate &&
          this.settingByTemplate.tema &&
          this.settingByTemplate.estilo_categorias
            ? this.settingByTemplate
            : this.settingBaseWapi,
      }
    },
  },
  methods: {
    onResize() {
      const widthOutput = document.querySelector('#width')
      widthOutput.style.width = window.innerWidth + 'px'
      widthOutput.style.maxWidth = window.innerWidth + 'px'
    },
  },
}
</script>

<style>
.Wrapper-KoProductDetail-Slug-wapi {
  width: 100%;
}
</style>
