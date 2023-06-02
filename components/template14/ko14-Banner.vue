<template>
  <div class="w-full justify-center items-center py-20">
    <div
      v-if="banner"
      ref="mySwiper"
      v-swiper:mySwiper="swiperOption"
      class="w-full max-w-7xl justify-center items-center wrapper-banner"
      :style="banner"
    >
      <div class="z-auto swiper-wrapper">
        <a
          :id="`slide${index + 1}`"
          :key="index"
          v-for="(item, index) in banner.values"
          :href="item.url_redirect"
          class="swiper-slide w-full flex justify-center items-center z-10"
          rel="noreferrer noopener"
        >
          <picture>
            <source media="(max-width: 799px)" :srcset="item.img_res" />
            <!-- :srcset="idCloudinaryBanner(item.img_res, 'bannerRes', 800)" -->

            <source media="(min-width: 800px)" :srcset="item.img" />
            <!-- :srcset="idCloudinaryBanner(item.img, 'banner')" -->

            <img v-lazy="item.img" alt="banner template13" class="w-full" />
          </picture>
        </a>
      </div>
      <div class="swiper-pagination" />
    </div>
  </div>
</template>
<script>
import idCloudinaryBanner from '../../mixins/idCloudinary'
export default {
  name: 'Ko14-Banner',
  props: {
    banner: Object,
    settingGeneral: Object,
  },
  mixins: [idCloudinaryBanner],
  data() {
    return {
      checkMobile: false,
      swiperOption: {
        autoHeight: true,
        effect: 'fade',
        slidesPerView: 'auto',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
}
</script>

<style scoped>
picture {
  width: 100%;
}
.wrapper-banner >>> .swiper-pagination-bullet-active {
  opacity: 1;
  background: var(--pagination_color);
}
</style>
