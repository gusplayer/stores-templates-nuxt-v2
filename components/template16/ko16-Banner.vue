<template>
  <div
    class="w-full items-center justify-center"
    :style="`background-color: ${banner['--background_color_1']}`"
  >
    <div
      v-if="banner"
      ref="mySwiper"
      v-swiper:mySwiper="swiperOption"
      class="wrapper-banner w-full items-center justify-center"
      :style="banner"
    >
      <div class="swiper-wrapper z-auto">
        <template v-for="(item, index) in banner.values">
          <nuxt-link
            v-if="isInternalUrl(item.url_redirect)"
            :id="`slide${index + 1}`"
            :key="`internal-${index}`"
            :to="item.url_redirect"
            class="swiper-slide z-10 flex w-full items-center justify-center"
          >
            <picture>
              <source
                media="(max-width: 799px)"
                :srcset="idCloudinaryBanner(item.img_res, 'bannerRes', 800)"
              />
              <source
                media="(min-width: 800px)"
                :srcset="idCloudinaryBanner(item.img, 'banner')"
              />
              <img
                v-lazy="idCloudinaryBanner(item.img, 'banner')"
                alt="banner template16"
                class="w-full object-cover"
              />
            </picture>
            <div
              class="absolute flex w-full max-w-8/5 flex-col items-start justify-center lg:max-w-9/0 xl:max-w-7xl"
              style="z-index: 20"
            >
              <div class="flex flex-1 flex-col items-start justify-center">
                <p
                  v-if="item?.title"
                  class="mb-5 max-w-lg text-15 md:mb-10 md:max-w-2xl md:text-25 lg:text-40 xl:text-45"
                  :style="`color: ${item.color_title}; font-weight: ${item.fontWeighTitle};`"
                >
                  {{ item.title }}
                </p>
                <p
                  v-if="item?.text"
                  class="mt-10 max-w-md text-12 md:mt-25 md:max-w-lg md:text-14 xl:text-18"
                  :style="`color: ${item.color_text}; font-weight: ${item.fontWeighText};`"
                >
                  {{ item.text }}
                </p>
                <p
                  v-if="item.visible_btn"
                  class="mt-16 border px-20 py-5 text-12 md:mt-40 md:py-8 md:text-14 xl:text-16"
                  :style="`color: ${item.color_text_btn}; background-color: ${item.color_bg_btn}; border-color: ${item.color_border_btn}; border-radius: ${settingGeneral?.radius};`"
                >
                  {{ item.textBtn }}
                </p>
              </div>
            </div>
          </nuxt-link>
          <a
            v-else
            :id="`slide${index + 1}`"
            :key="`external-${index}`"
            :href="item.url_redirect || '#'"
            class="swiper-slide z-10 flex w-full items-center justify-center"
            rel="noreferrer noopener"
          >
            <picture>
              <source
                media="(max-width: 799px)"
                :srcset="idCloudinaryBanner(item.img_res, 'bannerRes', 800)"
              />
              <source
                media="(min-width: 800px)"
                :srcset="idCloudinaryBanner(item.img, 'banner')"
              />
              <img
                v-lazy="idCloudinaryBanner(item.img, 'banner')"
                alt="banner template16"
                class="w-full object-cover"
              />
            </picture>
            <div
              class="absolute flex w-full max-w-8/5 flex-col items-start justify-center lg:max-w-9/0 xl:max-w-7xl"
              style="z-index: 20"
            >
              <div class="flex flex-1 flex-col items-start justify-center">
                <p
                  v-if="item?.title"
                  class="mb-5 max-w-lg text-15 md:mb-10 md:max-w-2xl md:text-25 lg:text-40 xl:text-45"
                  :style="`color: ${item.color_title}; font-weight: ${item.fontWeighTitle};`"
                >
                  {{ item.title }}
                </p>
                <p
                  v-if="item?.text"
                  class="mt-10 max-w-md text-12 md:mt-25 md:max-w-lg md:text-14 xl:text-18"
                  :style="`color: ${item.color_text}; font-weight: ${item.fontWeighText};`"
                >
                  {{ item.text }}
                </p>
                <p
                  v-if="item.visible_btn"
                  class="mt-16 border px-20 py-5 text-12 md:mt-40 md:py-8 md:text-14 xl:text-16"
                  :style="`color: ${item.color_text_btn}; background-color: ${item.color_bg_btn}; border-color: ${item.color_border_btn}; border-radius: ${settingGeneral?.radius};`"
                >
                  {{ item.textBtn }}
                </p>
              </div>
            </div>
          </a>
        </template>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import idCloudinaryBanner from '@/mixins/idCloudinary'
export default {
  name: 'Ko16Banner',
  mixins: [idCloudinaryBanner],
  props: {
    banner: {
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
      if (typeof url !== 'string') {
        return false
      }

      const value = url.trim()

      if (!value) {
        return false
      }

      return /^[/?#]/.test(value)
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
  background: var(--color_pagination);
}
</style>
