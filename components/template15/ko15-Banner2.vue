<template>
  <div
    class="w-full flex justify-center items-center py-25 lg:py-40"
    :style="`background-color: ${banner2['--background_color_1']}`"
  >
    <!-- <img
      :src="idCloudinaryBanner(banner2.imgBg, 'banner')"
      alt="banner template15"
      class="w-full h-full object-cover"
    /> -->
    <picture>
      <source
        media="(max-width: 799px)"
        :srcset="idCloudinaryBanner(banner2.imgBg, 'bannerRes', 800)"
      />
      <source
        media="(min-width: 800px)"
        :srcset="idCloudinaryBanner(banner2.imgBg, 'banner')"
      />
      <img
        v-lazy="banner2.imgBg"
        alt="banner template14"
        class="w-full object-cover"
      />
    </picture>
    <div
      class="w-full h-auto flex justify-center items-center overflow-hidden absolute"
    >
      <div
        class="w-full max-w-9/0 md:max-w-[600px] flex flex-col justify-center items-center text-center"
      >
        <p
          class="text-30 md:text-50 pb-10"
          :style="`color: ${banner2.color_title}; font-weight: ${banner2.fontWeighTitle}; `"
        >
          {{ banner2.title }}
        </p>
        <p
          class="text-14 md:text-20 pb-30"
          :style="`color: ${banner2.color_text}; font-weight: ${banner2.fontWeighText}; `"
        >
          {{ banner2.text }}
        </p>
        <div class="w-full grid grid-cols-2 gap-5">
          <a
            :href="banner2.url_redirect_1"
            class="px-20 py-5 md:py-8 text-12 md:text-14 xl:text-16"
            :style="`color: ${banner2.color_text_btn_1}; background-color: ${banner2.color_bg_btn_1}; border-radius: ${settingGeneral?.radius};`"
          >
            {{ banner2.text_btn_1 }}
          </a>
          <a
            :href="banner2.url_redirect_2"
            class="px-20 py-5 md:py-8 text-12 md:text-14 xl:text-16"
            :style="`color: ${banner2.color_text_btn_2}; background-color: ${banner2.color_bg_btn_2}; border-radius: ${settingGeneral?.radius};`"
          >
            {{ banner2.text_btn_2 }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinaryBanner from '@/mixins/idCloudinary'
export default {
  name: 'Ko15-Banner2',
  mixins: [idCloudinaryBanner],
  props: {
    banner2: Object,
    settingGeneral: Object,
    dataStore: Object,
  },
}
</script>
