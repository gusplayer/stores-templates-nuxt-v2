<template lang="html">
  <div class="Wrapper-KoProductDetail-Slug-wapi">
    <KoProductDetail />
  </div>
</template>

<script>
import KoProductDetail from '../../../../components/whatsapp/Ko-ProductDetail-wa'

export default {
  layout: 'wa',
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
