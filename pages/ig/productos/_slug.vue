<template lang="html">
  <div class="home">
    <KoProductDetail />
  </div>
</template>

<script>
import KoProductDetail from '../../../components/instagram/Ko-ProductDetail-1'

export default {
  layout: 'ig',
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
