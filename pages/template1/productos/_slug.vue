<template lang="html">
  <div class="home">
    <KoProductDetail />
  </div>
</template>

<script>
import KoProductDetail from '../../../components/template1/Ko-ProductDetail-1'

export default {
  name: 'detalle',
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
