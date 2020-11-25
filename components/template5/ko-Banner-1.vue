<template>
  <div class="wrapper-banner">
    <div class="header-content-logo" v-if="this.banner">
      <div class="wrapper-banner" v-if="this.banner.banner">
        <no-ssr>
          <img
            v-lazy="idCloudinaryBanner(this.banner.banner)"
            class="banner"
            alt="Banner tienda"
          />
        </no-ssr>
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
.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
