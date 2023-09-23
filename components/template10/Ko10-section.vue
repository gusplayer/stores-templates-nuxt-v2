<template>
  <div
    class="content-section"
    :style="[
      section,
      settingGeneral,
      {
        '--font-style-1':
          settingGeneral && settingGeneral.fount_1
            ? settingGeneral.fount_1
            : 'Roboto',
      },
    ]"
  >
    <div class="content-wrapper">
      <a
        :href="
          section.values[0].url_redirect ? section.values[0].url_redirect : ''
        "
        rel="noreferrer noopener"
      >
        <div class="wrapper-left">
          <img
            v-lazy="
              idCloudinaryBanner(section.values[0].url_img_background, 'banner')
            "
            class="img-left"
            alt="banner-1"
          />
          <div
            class="txt-content"
            :style="`justify-content: ${section.values[0].justingText}; align-items: ${section.values[0].alingText};`"
          >
            <p
              class="txt-tittle"
              :style="`color: ${section.values[0].colorPretitle}; margin-bottom:${section.values[0].marginbottomPretitle};`"
            >
              {{ section.values[0].pretitle }}
            </p>
            <p
              class="txt-subtittle"
              :style="`color: ${section.values[0].colorTitle}; margin-bottom:${section.values[0].marginbottomTitle};`"
            >
              {{ section.values[0].title }}
            </p>
          </div>
        </div>
      </a>
      <a
        :href="
          section.values[1].url_redirect ? section.values[1].url_redirect : ''
        "
        rel="noreferrer noopener"
      >
        <div class="wrapper-center">
          <img
            v-lazy="
              idCloudinaryBanner(section.values[1].url_img_background, 'banner')
            "
            class="img-center"
            alt="banner-2"
          />
          <div
            class="txt-content"
            :style="`justify-content: ${section.values[1].justingText}; align-items: ${section.values[1].alingText};`"
          >
            <p
              class="txt-tittle"
              :style="`color: ${section.values[1].colorPretitle}; margin-bottom:${section.values[1].marginbottomPretitle};`"
            >
              {{ section.values[1].pretitle }}
            </p>
            <p
              class="txt-subtittle"
              :style="`color: ${section.values[1].colorTitle}; margin-bottom:${section.values[1].marginbottomTitle};`"
            >
              {{ section.values[1].title }}
            </p>
          </div>
        </div>
      </a>
      <a
        :href="
          section.values[2].url_redirect ? section.values[2].url_redirect : ''
        "
        rel="noreferrer noopener"
      >
        <div class="wrapper-right">
          <img
            v-lazy="
              idCloudinaryBanner(section.values[2].url_img_background, 'banner')
            "
            class="img-right"
            alt="banner-3"
          />
          <div
            class="txt-content"
            :style="`justify-content: ${section.values[2].justingText}; align-items: ${section.values[2].alingText};`"
          >
            <p
              class="txt-tittle"
              :style="`color: ${section.values[2].colorPretitle}; margin-bottom:${section.values[2].marginbottomPretitle};`"
            >
              {{ section.values[2].pretitle }}
            </p>
            <p
              class="txt-subtittle"
              :style="`color: ${section.values[2].colorTitle}; margin-bottom:${section.values[2].marginbottomTitle};`"
            >
              {{ section.values[2].title }}
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import idCloudinary from '../../mixins/idCloudinary'
export default {
  name: 'Ko10Section',
  mixins: [idCloudinary],
  props: {
    section: Object,
    settingGeneral: Object,
  },
}
</script>
<style scoped>
.content-section {
  background: var(--background_color_1);
  padding-top: var(--margintop);
  padding-bottom: var(--marginBottom);
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
    @apply mt-50 mx-35 pb-10 font-semibold;
  }
  .txt-subtittle {
    /* color: #777777; */
    font-size: 12px;
    font-family: var(--font-style-1) !important;
    @apply mx-35;
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
