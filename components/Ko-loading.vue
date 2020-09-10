<template lang="html">
  <div class="loader" v-if="loading">
    <div class="loader-inner">
      <img
        src=" https://res.cloudinary.com/komercia-store/image/upload/v1551545737/komercia/preview.gif"
        alt="Logo Komercia"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.loader {
  background: white;
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;
}
.loader-inner {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}
</style>
