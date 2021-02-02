<template>
  <div class="wrapper-banner">
    <div class="header-content-logo" v-if="this.banner">
      <div class="wrapper-banner" v-if="this.banner.length">
        <KoSwipper :Banners="banner"></KoSwipper>
      </div>
    </div>
  </div>
</template>

<script>
import KoSwipper from './_bannerSlider/productslideBanner'
export default {
  name: 'Ko6-Banner-1',
  components: {
    KoSwipper,
  },
  data() {
    return {}
  },
  computed: {
    banner() {
      return this.$store.state.settingByTemplate.banners
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
