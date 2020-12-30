<template>
  <div class="wrapper-banner">
    <div class="header-content-logo">
      <p class="title">Prueba</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-prueba',
  computed: {
    banner() {
      return this.$store.state.settingByTemplate
    },
  },
}
</script>

<style scoped>
.wrapper-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--background_color_2);
}
.header-content-logo {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
}
.wrapper-banner {
  width: 100%;
}
.title {
  font-size: 14px;
  color: red;
}
</style>
