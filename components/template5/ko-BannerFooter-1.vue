<template>
  <div class="wrapper-banner">
    <div class="header-content-logo" v-if="this.banner">
      <div class="wrapper-banner" v-if="this.banner.banner_footer">
        <img
          :src="`${this.banner.banner_footer}`"
          class="banner"
          alt="Banner tienda"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-Banner-1',
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
  background: #eef1f4;
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
.banner {
  width: 100%;
  height: 100%;
  object-fit: hover;
  object-position: center;
}
.wrapper-logo-background {
  background: var(--purple);
  min-height: 400px;
}
</style>
