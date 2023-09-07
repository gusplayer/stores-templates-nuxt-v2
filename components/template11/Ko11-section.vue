<template>
  <div
    class="content-section"
    :style="[
      settingKsection,
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
      <a
        :href="
          this.settingKsection.values[0].url_redirect
            ? this.settingKsection.values[0].url_redirect
            : ''
        "
        rel="noreferrer noopener"
      >
        <div class="wrapper-left">
          <img
            class="img-left"
            v-lazy="
              idCloudinaryBanner(
                this.settingKsection.values[0].url_img_background,
                'banner'
              )
            "
            alt="imagen-1"
          />
          <div
            class="txt-content"
            :style="`justify-content: ${this.settingKsection.values[0].justingText}; align-items: ${this.settingKsection.values[0].alingText};`"
          >
            <p
              class="txt-top"
              :style="`color: ${this.settingKsection.values[0].colorPretitle}; margin-bottom:${this.settingKsection.values[0].marginbottomPretitle};`"
            >
              {{
                this.settingKsection.values[0].pretitle.replace(/&nbsp;/g, ' ')
              }}
            </p>
            <p
              class="txt-bottom"
              :style="`color: ${this.settingKsection.values[0].colorTitle}; margin-bottom:${this.settingKsection.values[0].marginbottomTitle};`"
            >
              {{ this.settingKsection.values[0].title.replace(/&nbsp;/g, ' ') }}
            </p>
          </div>
        </div>
      </a>
      <a
        :href="
          this.settingKsection.values[1].url_redirect
            ? this.settingKsection.values[1].url_redirect
            : ''
        "
        rel="noreferrer noopener"
      >
        <div class="wrapper-center">
          <img
            class="img-center"
            v-lazy="
              idCloudinaryBanner(
                this.settingKsection.values[1].url_img_background,
                'banner'
              )
            "
            alt="imagen-2"
          />
          <div
            class="txt-content"
            :style="`justify-content: ${this.settingKsection.values[1].justingText}; align-items: ${this.settingKsection.values[1].alingText};`"
          >
            <p
              class="txt-top"
              :style="`color: ${this.settingKsection.values[1].colorPretitle}; margin-bottom:${this.settingKsection.values[1].marginbottomPretitle};`"
            >
              {{
                this.settingKsection.values[1].pretitle.replace(/&nbsp;/g, ' ')
              }}
            </p>
            <p
              class="txt-bottom"
              :style="`color: ${this.settingKsection.values[1].colorTitle}; margin-bottom:${this.settingKsection.values[1].marginbottomTitle};`"
            >
              {{ this.settingKsection.values[1].title.replace(/&nbsp;/g, ' ') }}
            </p>
          </div>
        </div>
      </a>
      <a
        :href="
          this.settingKsection.values[2].url_redirect
            ? this.settingKsection.values[2].url_redirect
            : ''
        "
        rel="noreferrer noopener"
      >
        <div class="wrapper-right">
          <img
            class="img-right"
            v-lazy="
              idCloudinaryBanner(
                this.settingKsection.values[2].url_img_background,
                'banner'
              )
            "
            alt="imagen-3"
          />
          <div
            class="txt-content"
            :style="`justify-content: ${this.settingKsection.values[2].justingText}; align-items: ${this.settingKsection.values[2].alingText};`"
          >
            <p
              class="txt-top"
              :style="`color: ${this.settingKsection.values[2].colorPretitle}; margin-bottom:${this.settingKsection.values[2].marginbottomPretitle};`"
            >
              {{
                this.settingKsection.values[2].pretitle.replace(/&nbsp;/g, ' ')
              }}
            </p>
            <p
              class="txt-bottom"
              :style="`color: ${this.settingKsection.values[2].colorTitle}; margin-bottom:${this.settingKsection.values[2].marginbottomTitle};`"
            >
              {{ this.settingKsection.values[2].title.replace(/&nbsp;/g, ' ') }}
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
  name: 'Ko11-section',
  props: {
    settingKsection: Object,
    settingGeneral: Object,
  },
  mixins: [idCloudinary],
}
</script>
<style scoped>
.content-section {
  background: var(--background_color_1);
  @apply w-full flex flex-col justify-center items-center py-40;
}
.content-wrapper {
  @apply justify-center items-center;
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
.txt-content {
  padding: 20px 20px 0 20px;
  @apply absolute w-full h-full flex flex-col;
}
@screen sm {
  .content-wrapper {
    @apply w-9/0 grid grid-cols-1 gap-6;
  }
  .txt-top {
    font-size: 13px;
    font-family: var(--font-style-1);
    @apply uppercase font-normal tracking-1;
  }
  .txt-bottom {
    font-size: 25px;
    font-family: var(--font-style-1);
    @apply font-bold uppercase;
  }
}
@screen md {
  .content-wrapper {
    @apply w-9/5 grid grid-cols-3 gap-6;
  }
  .txt-bottom {
    font-size: 20px;
  }
}
@screen lg {
  .txt-bottom {
    font-size: 25px;
  }
}
@media (min-width: 1400px) {
  .content-wrapper {
    max-width: 1200px;
  }
}
</style>
