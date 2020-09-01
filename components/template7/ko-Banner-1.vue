<template>
  <div class="wrapper-banner">
    <div class="header-content-logo" v-if="this.banner">
      <div class="wrapper-banner-img" v-if="this.banner.banner">
        <img
          :src="`${this.banner.banner}`"
          class="banner"
          alt="Banner tienda"
        />
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background_color_2);
}
.header-content-logo {
  width: 100%;
  height: 100%;
  max-width: 1260px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper-banner-img {
  width: 100%;
  max-height: 210px;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.banner {
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
</style>
