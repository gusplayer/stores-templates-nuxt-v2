<template lang="html">
  <div class="home">
    <KoProductDetail />
  </div>
</template>

<script>
import KoProductDetail from '../../components/whatsapp/Ko-ProductDetail-1'

export default {
  layout: 'wa',
  components: {
    KoProductDetail,
  },
}
</script>

<style>
.home {
  overflow: hidden;
}
</style>
