<template>
  <div class="wrapper_content360" v-if="this.iframe">
    <div class="contenedor" v-if="this.iframe.iframe">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen="true"
        :src="this.iframe.iframe"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-Content360-1',
  computed: {
    iframe() {
      return this.$store.state.settingByTemplate
    },
  },
}
</script>

<style scoped>
.wrapper_content360 {
  width: 100%;
}
.contenedor {
  width: 100%;
  height: 450px;
  /* max-width: 1300px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 800px) {
  .contenedor {
    height: 350px;
  }
}
</style>
