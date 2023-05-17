<template>
  <div
    v-if="banner && banner.banner"
    class="w-full h-full flex justify-center items-center"
  >
    <picture>
      <source
        media="(max-width: 799px)"
        :srcset="idCloudinaryBanner(banner.banner, 'bannerRes', 800)"
      />
      <source
        media="(min-width: 800px)"
        :srcset="idCloudinaryBanner(banner.banner, 'banner')"
      />
      <img
        loading="lazy"
        v-lazy="idCloudinaryBanner(banner.banner, 'banner')"
        class="w-full h-full object-cover object-center"
        alt="Banner_tienda_template5"
      />
    </picture>
  </div>
</template>

<script>
import idCloudinaryBanner from '../../mixins/idCloudinary'
export default {
  mixins: [idCloudinaryBanner],
  name: 'Ko-Banner-1',
  computed: {
    banner() {
      return this.$store.state.settingByTemplate
    },
  },
}
</script>

<style scoped>
picture {
  width: 100%;
}
.wrapper-banner {
  background: var(--background_color_2);
}
</style>
