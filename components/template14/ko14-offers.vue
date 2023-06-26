<template>
  <div
    class="content-section w-full flex flex-col justify-center items-center py-20"
    :style="[offers, settingGeneral]"
  >
    <div
      class="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 items-center justify-center"
    >
      <a
        class="w-full"
        :href="this.offers.values[0]?.url_redirect ?? ''"
        rel="noreferrer noopener"
      >
        <div class="wrapper-left">
          <img
            class="img-left max-w-[416px] max-h-[238px]"
            v-lazy="idCloudinaryBanner(this.offers.values[0].img, 'banner')"
            alt="imagen-1"
          />
          <div
            class="absolute w-full h-full flex flex-col justify-center items-start pl-40 pr-10"
          >
            <p
              :style="`color: ${this.offers.values[0].color_title}; font-size: ${this.offers.values[0].fontSizeTitle}; font-weight: ${this.offers.values[0].fontWeighTitle};`"
            >
              {{ this.offers.values[0].title.replace(/&nbsp;/g, ' ') }}
            </p>
            <p
              :style="`color: ${this.offers.values[0].color_text}; font-size: ${this.offers.values[0].fontSizeText}; font-weight: ${this.offers.values[0].fontWeighText};`"
            >
              {{ this.offers.values[0].subTitle.replace(/&nbsp;/g, ' ') }}
            </p>
            <div
              class="border h-2 mt-5 md:mt-10 border-hover"
              :style="`border-color: ${this.offers.values[0].color_border};`"
            />
          </div>
        </div>
      </a>
      <a
        :href="this.offers.values[1]?.url_redirect ?? ''"
        rel="noreferrer noopener"
      >
        <div class="wrapper-center">
          <img
            class="img-center max-w-[416px] max-h-[238px]"
            v-lazy="idCloudinaryBanner(this.offers.values[1].img, 'banner')"
            alt="imagen-2"
          />
          <div
            class="absolute w-full h-full flex flex-col justify-center items-start pl-40 pr-10"
          >
            <p
              :style="`color: ${this.offers.values[1].color_title}; font-size: ${this.offers.values[1].fontSizeTitle}; font-weight: ${this.offers.values[1].fontWeighTitle};`"
            >
              {{ this.offers.values[1].title.replace(/&nbsp;/g, ' ') }}
            </p>
            <p
              :style="`color: ${this.offers.values[1].color_text}; font-size: ${this.offers.values[1].fontSizeText}; font-weight: ${this.offers.values[1].fontWeighText};`"
            >
              {{ this.offers.values[1].subTitle.replace(/&nbsp;/g, ' ') }}
            </p>
            <div
              class="border h-2 mt-5 md:mt-10 border-hover"
              :style="`border-color: ${this.offers.values[1].color_border};`"
            />
          </div>
        </div>
      </a>
      <a
        :href="this.offers.values[2]?.url_redirect ?? ''"
        rel="noreferrer noopener"
      >
        <div class="wrapper-right">
          <img
            class="img-right max-w-[416px] max-h-[238px]"
            v-lazy="idCloudinaryBanner(this.offers.values[2].img, 'banner')"
            alt="imagen-3"
          />
          <div
            class="absolute w-full h-full flex flex-col justify-center items-start pl-40 pr-10"
          >
            <p
              :style="`color: ${this.offers.values[2].color_title}; font-size: ${this.offers.values[2].fontSizeTitle}; font-weight: ${this.offers.values[2].fontWeighTitle};`"
            >
              {{ this.offers.values[2].title.replace(/&nbsp;/g, ' ') }}
            </p>
            <p
              :style="`color: ${this.offers.values[2].color_text}; font-size: ${this.offers.values[2].fontSizeText}; font-weight: ${this.offers.values[2].fontWeighText};`"
            >
              {{ this.offers.values[2].subTitle.replace(/&nbsp;/g, ' ') }}
            </p>
            <div
              class="border h-2 mt-5 md:mt-10 border-hover"
              :style="`border-color: ${this.offers.values[2].color_border};`"
            />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import idCloudinary from '@/mixins/idCloudinary'
export default {
  name: 'Ko14-Offers',
  props: {
    offers: Object,
    settingGeneral: Object,
    dataStore: Object,
  },
  mixins: [idCloudinary],
}
</script>
<style scoped>
.content-section {
  background: var(--background_color_1);
}
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
.wrapper-right:hover .border-hover,
.wrapper-center:hover .border-hover,
.wrapper-left:hover .border-hover {
  @apply w-100;
  -webkit-transition: all 600ms ease 0s;
}
.border-hover {
  @apply w-50;
  -webkit-transition: all 600ms ease 0s;
}
</style>
