<template>
  <div
    class="content-section w-full flex flex-col justify-center items-center py-25 lg:py-40 px-10"
    :style="`background-color: ${content['--background_color_1']}`"
  >
    <div
      class="max-w-9/0 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 items-center justify-center"
    >
      <a
        class="w-full"
        :href="content.values[0]?.url_redirect ?? ''"
        rel="noreferrer noopener"
      >
        <div class="wrapper-left">
          <img
            v-lazy="idCloudinaryBanner(content.values[0].img, 'banner')"
            class="img-left"
            :style="`border-radius: ${settingGeneral?.radius};`"
            alt="imagen-1"
          />
          <div
            class="absolute w-full h-full flex flex-col justify-center items-start pl-30 md:pl-20 lg:pl-30 pr-10"
          >
            <p
              class="text-16 md:text-12 lg:text-15 xl:text-16 mb-10"
              :style="`color: ${content.values[0].color_text}; font-weight: ${content.values[0].fontWeighText};`"
            >
              {{ content.values[0].subTitle.replace(/&nbsp;/g, ' ') }}
            </p>
            <p
              class="text-32 md:text-18 lg:text-25 xl:text-32 max-w-[290px] leading-tight"
              :style="`color: ${content.values[0].color_title}; font-weight: ${content.values[0].fontWeighTitle};`"
            >
              {{ content.values[0].title.replace(/&nbsp;/g, ' ') }}
            </p>
            <p
              v-if="content.values[0].visible_btn"
              class="px-20 py-5 md:py-8 mt-20 md:mt-15 lg:mt-30 text-12 md:text-14 xl:text-16"
              :style="`color: ${content.values[0].color_text_btn}; background-color: ${content.values[0].color_bg_btn}; border-radius: ${settingGeneral?.radius};`"
            >
              {{ content.values[0].text_btn }}
            </p>
          </div>
        </div>
      </a>
      <a
        class="w-full"
        :href="content.values[1]?.url_redirect ?? ''"
        rel="noreferrer noopener"
      >
        <div class="wrapper-left">
          <img
            v-lazy="idCloudinaryBanner(content.values[1].img, 'banner')"
            class="img-left"
            :style="`border-radius: ${settingGeneral?.radius};`"
            alt="imagen-1"
          />
          <div
            class="absolute w-full h-full flex flex-col justify-center items-start pl-30 md:pl-20 lg:pl-30 pr-10"
          >
            <p
              class="text-16 md:text-12 lg:text-15 xl:text-16 mb-10"
              :style="`color: ${content.values[1].color_text}; font-weight: ${content.values[1].fontWeighText};`"
            >
              {{ content.values[1].subTitle.replace(/&nbsp;/g, ' ') }}
            </p>
            <p
              class="text-32 md:text-18 lg:text-25 xl:text-32 max-w-[290px] leading-tight"
              :style="`color: ${content.values[1].color_title}; font-weight: ${content.values[1].fontWeighTitle};`"
            >
              {{ content.values[1].title.replace(/&nbsp;/g, ' ') }}
            </p>
            <p
              v-if="content.values[1].visible_btn"
              class="px-20 py-5 md:py-8 mt-20 md:mt-15 lg:mt-30 text-12 md:text-14 xl:text-16"
              :style="`color: ${content.values[1].color_text_btn}; background-color: ${content.values[1].color_bg_btn}; border-radius: ${settingGeneral?.radius};`"
            >
              {{ content.values[1].text_btn }}
            </p>
          </div>
        </div>
      </a>
      <a
        class="w-full"
        :href="content.values[2]?.url_redirect ?? ''"
        rel="noreferrer noopener"
      >
        <div class="wrapper-left">
          <img
            v-lazy="idCloudinaryBanner(content.values[2].img, 'banner')"
            class="img-left"
            :style="`border-radius: ${settingGeneral?.radius};`"
            alt="imagen-1"
          />
          <div
            class="absolute w-full h-full flex flex-col justify-center items-start pl-30 md:pl-20 lg:pl-30 pr-10"
          >
            <p
              class="text-16 md:text-12 lg:text-15 xl:text-16 mb-10"
              :style="`color: ${content.values[2].color_text}; font-weight: ${content.values[2].fontWeighText};`"
            >
              {{ content.values[2].subTitle.replace(/&nbsp;/g, ' ') }}
            </p>
            <p
              class="text-32 md:text-18 lg:text-25 xl:text-32 max-w-[290px] leading-tight"
              :style="`color: ${content.values[2].color_title}; font-weight: ${content.values[2].fontWeighTitle};`"
            >
              {{ content.values[2].title.replace(/&nbsp;/g, ' ') }}
            </p>
            <p
              v-if="content.values[2].visible_btn"
              class="px-20 py-5 md:py-8 mt-20 md:mt-15 lg:mt-30 text-12 md:text-14 xl:text-16"
              :style="`color: ${content.values[2].color_text_btn}; background-color: ${content.values[2].color_bg_btn}; border-radius: ${settingGeneral?.radius};`"
            >
              {{ content.values[2].text_btn }}
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import idCloudinary from '@/mixins/idCloudinary'
export default {
  name: 'Ko15Content',
  mixins: [idCloudinary],
  props: {
    content: Object,
    settingGeneral: Object,
    dataStore: Object,
  },
}
</script>
<style scoped>
.wrapper-left,
.wrapper-center,
.wrapper-right {
  @apply w-full h-auto relative flex justify-start cursor-pointer overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
}
.img-left,
.img-center,
.img-right {
  @apply w-full object-cover overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
}
.wrapper-left:hover .img-left {
  @apply relative overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.wrapper-center:hover .img-center {
  @apply relative overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.wrapper-right:hover .img-right {
  @apply relative overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
