<template>
  <div class="w-full justify-center items-center" :style="settingKCarousel">
    <div
      ref="mySwiper"
      v-swiper:mySwiper="swiperOption"
      class="w-full justify-center items-center wrapper-banner"
    >
      <div class="z-auto swiper-wrapper w-full">
        <div
          v-for="(banner, index) in settingKCarousel.values"
          :key="index"
          class="swiper-slide w-full flex justify-center items-center z-10"
          :class="banner && banner.url_redirect ? 'cursor-pointer' : ''"
        >
          <template v-if="isInternalUrl(banner.url_redirect)">
            <nuxt-link
              class="w-full flex justify-center items-center"
              :to="`${banner?.url_redirect ? banner.url_redirect : ''}`"
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
                class="absolute bottom-0"
                :banner="banner"
                :setting-k-carousel="settingKCarousel"
                :setting-general="settingGeneral"
              />
            </nuxt-link>
          </template>
          <template v-else>
            <a
              class="w-full flex justify-center items-center"
              :href="`${banner?.url_redirect ? banner.url_redirect : ''}`"
              rel="noreferrer noopener"
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
                class="absolute bottom-0"
                :banner="banner"
                :setting-k-carousel="settingKCarousel"
                :setting-general="settingGeneral"
              />
            </a>
          </template>
        </div>
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
  methods: {
    isInternalUrl(url) {
      return url.startsWith('/')
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
