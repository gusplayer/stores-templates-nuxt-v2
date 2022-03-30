<template lang="html">
  <div class="Wrapper-KoProductDetail-Slug-wapi" id="width">
    <KoProductDetail />
  </div>
</template>

<script>
import KoProductDetail from '../../../../components/whatsapp/Ko-ProductDetail-wa'

export default {
  layout: 'wa',
  name: 'WapiMEDetail',
  components: {
    KoProductDetail,
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
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
