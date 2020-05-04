<template lang="html">
  <div class="home">
    <KoProductDetails />
  </div>
</template>

<script>
import KoProductDetails from '../components/template/detalle'

export default {
  components: {
    KoProductDetails,
  },
}
</script>

<style>
.home {
  overflow: hidden;
}
</style>
