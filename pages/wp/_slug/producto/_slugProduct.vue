<template lang="html">
  <div class="Wrapper-KoProductDetail-Slug-wapi">
    <KoProductDetail />
  </div>
</template>

<script>
import KoProductDetail from '../../../../components/valienta/Ko-ProductDetail-wa'

export default {
  layout: 'wp',
  components: {
    KoProductDetail,
  },
}
</script>

<style>
.Wrapper-KoProductDetail-Slug-wapi {
  width: 100%;
}
</style>
