<template>
  <div class="w-full justify-center items-center" :style="settingKCarousel">
    <div
      ref="mySwiper"
      v-swiper:mySwiper="swiperOption"
      class="w-full justify-center items-center wrapper-banner"
    >
      <div class="z-auto swiper-wrapper">
        <a
          v-for="(banner, index) in settingKCarousel.values"
          :id="`slide${index + 1}`"
          :key="index"
          :href="`${banner && banner.url_redirect ? banner.url_redirect : ''}`"
          rel="noreferrer noopener"
          class="swiper-slide w-full flex justify-center items-center z-10"
          :class="banner && banner.url_redirect ? 'cursor-pointer' : ''"
        >
          <picture>
            <source
              media="(max-width: 799px)"
              :srcset="
                idCloudinaryBanner(
                  settingKCarousel.values[index].url_img_movil,
                  'bannerRes',
                  800
                )
              "
            />
            <source
              media="(min-width: 800px)"
              :srcset="
                idCloudinaryBanner(
                  settingKCarousel.values[index].url_img_background,
                  'banner'
                )
              "
            />
            <img
              :src="
                idCloudinaryBanner(
                  settingKCarousel.values[index].url_img_background,
                  'banner'
                )
              "
              alt="banner template7"
              class="w-full object-cover"
            />
          </picture>
          <KObanner
            class="absolute top-0"
            :banner="banner"
            :settingKCarousel="settingKCarousel"
            :setting-general="settingGeneral"
          />
        </a>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '@/mixins/idCloudinary'
export default {
  name: 'K07Carousel',
  components: {
    KObanner: () =>
      import('@/components/template7/_carouselBanner/bannerCarousel07.vue'),
  },
  mixins: [idCloudinary],
  props: {
    // dataStore: {
    //   type: Object,
    //   required: true,
    // },
    settingKCarousel: {
      type: Object,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        effect: 'fade',
        slidesPerView: 'auto',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
  background: black;
}
</style>
