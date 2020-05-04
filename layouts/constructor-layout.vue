<template>
  <div id="default">
    <template>
      <nuxt />
    </template>
  </div>
</template>
<script>
export default {
  mounted() {
    // this.$store.dispatch('GET_SHOPPING_CART')
  },
}
</script>

<style>
#default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #2c3e50;
  background-color: var(--background_color);
  font-family: 'Poppins', sans-serif;
}
</style>
