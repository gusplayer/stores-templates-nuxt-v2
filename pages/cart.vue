<template lang="html">
  <div class="home">
    <KoCart />
  </div>
</template>

<script>
import KoCart from '../components/template/carrito'

export default {
  components: {
    KoCart,
  },
  mounted() {
    this.$store.dispatch('GET_SHOPPING_CART')
  },
}
</script>

<style>
.home {
  overflow: hidden;
}
</style>
