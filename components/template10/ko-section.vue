<template>
  <div
    class="content-section"
    :style="[
      section,
      settingGeneral,
      {
        '--font-style-1':
          this.settingGeneral && this.settingGeneral.fount_1
            ? this.settingGeneral.fount_1
            : 'Roboto',
      },
    ]"
  >
    <div class="content-wrapper">
      <nuxt-link :to="this.section.values[0].url_redirect">
        <div class="wrapper-left">
          <img
            class="img-left"
            v-lazy="
              idCloudinaryBanner(this.section.values[0].url_img_background)
            "
            alt="banner-1"
          />
          <div
            class="txt-content"
            :style="`justify-content: ${this.section.values[0].justingText}; align-items: ${this.section.values[0].alingText};`"
          >
            <p
              class="txt-tittle"
              :style="`color: ${this.section.values[0].colorPretitle}; margin-bottom:${this.section.values[0].marginbottomPretitle};`"
            >
              {{ this.section.values[0].pretitle }}
            </p>
            <p
              class="txt-subtittle"
              :style="`color: ${this.section.values[0].colorTitle}; margin-bottom:${this.section.values[0].marginbottomTitle};`"
            >
              {{ this.section.values[0].title }}
            </p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link :to="this.section.values[1].url_redirect">
        <div class="wrapper-center">
          <img
            class="img-center"
            v-lazy="
              idCloudinaryBanner(this.section.values[1].url_img_background)
            "
            alt="banner-2"
          />
          <div
            class="txt-content"
            :style="`justify-content: ${this.section.values[1].justingText}; align-items: ${this.section.values[1].alingText};`"
          >
            <p
              class="txt-tittle"
              :style="`color: ${this.section.values[1].colorPretitle}; margin-bottom:${this.section.values[1].marginbottomPretitle};`"
            >
              {{ this.section.values[1].pretitle }}
            </p>
            <p
              class="txt-subtittle"
              :style="`color: ${this.section.values[1].colorTitle}; margin-bottom:${this.section.values[1].marginbottomTitle};`"
            >
              {{ this.section.values[1].title }}
            </p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link :to="this.section.values[2].url_redirect">
        <div class="wrapper-right">
          <img
            class="img-right"
            v-lazy="
              idCloudinaryBanner(this.section.values[2].url_img_background)
            "
            alt="banner-3"
          />
          <div
            class="txt-content"
            :style="`justify-content: ${this.section.values[2].justingText}; align-items: ${this.section.values[2].alingText};`"
          >
            <p
              class="txt-tittle"
              :style="`color: ${this.section.values[2].colorPretitle}; margin-bottom:${this.section.values[2].marginbottomPretitle};`"
            >
              {{ this.section.values[2].pretitle }}
            </p>
            <p
              class="txt-subtittle"
              :style="`color: ${this.section.values[2].colorTitle}; margin-bottom:${this.section.values[2].marginbottomTitle};`"
            >
              {{ this.section.values[2].title }}
            </p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import idCloudinary from '../../mixins/idCloudinary'
export default {
  props: {
    section: Object,
    settingGeneral: Object,
  },
  mixins: [idCloudinary],
}
</script>
<style scoped>
.content-section {
  background: var(--background_color_1);
  margin-top: var(--margintop);
  margin-bottom: var(--marginBottom);
  @apply w-full flex flex-col justify-center items-center;
}
.content-wrapper {
  @apply justify-center items-center;
}
.wrapper-left,
.wrapper-center,
.wrapper-right {
  @apply w-full h-auto relative flex justify-start cursor-pointer overflow-hidden transition-all ease-in duration-0.2;
}
.img-left,
.img-center,
.img-right {
  @apply w-full object-cover overflow-hidden transition-all ease-in duration-0.2;
}
.wrapper-left:hover .img-left {
  @apply relative overflow-hidden transition-all ease-in duration-0.2;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.wrapper-center:hover .img-center {
  @apply relative overflow-hidden transition-all ease-in duration-0.2;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.wrapper-right:hover .img-right {
  @apply relative overflow-hidden transition-all ease-in duration-0.2;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.txt-content {
  @apply absolute w-full h-full flex flex-col justify-start items-start;
}

@screen sm {
  .content-wrapper {
    @apply w-9/0 grid grid-cols-1 gap-6;
  }
  .wrapper-left:hover .txt-tittle {
    color: var(--hover_text);
  }
  .wrapper-center:hover .txt-tittle {
    color: var(--hover_text);
  }
  .wrapper-right:hover .txt-tittle {
    color: var(--hover_text);
  }
  .txt-tittle {
    /* color: #222222; */
    font-size: 25px;
    font-family: var(--font-style-1) !important;
    @apply mt-50 ml-35 pb-10 font-semibold;
  }
  .txt-subtittle {
    /* color: #777777; */
    font-size: 12px;
    font-family: var(--font-style-1) !important;
    @apply ml-35;
  }
}
@screen md {
  .content-wrapper {
    @apply w-9/5 grid grid-cols-3 gap-6;
  }
}
@media (min-width: 1400px) {
  .content-wrapper {
    max-width: 1400px;
  }
}
</style>
