<template>
  <div
    class="content"
    :style="[
      settingGeneral,
      {
        '--font-style-1':
          this.settingGeneral && this.settingGeneral.fount_1
            ? this.settingGeneral.fount_1
            : 'Roboto',
      },
    ]"
  >
    <div class="content-items-top">
      <div
        class="empty-border-left fadeInLeft"
        :style="`background-color: ${banner.color_border};`"
      ></div>
      <div class="content-text-top">
        <div class="txt-banner-top">
          <p
            class="txt-1 fadeInLeft"
            :style="`color: ${banner.colorPretitle};`"
          >
            {{ banner.pretitle.replace(/&nbsp;/g, ' ') }}
          </p>
        </div>
        <div class="txt-banner-top">
          <p
            class="txt-2 fadeInLeft"
            :style="`color: ${banner.colorPretitle};`"
          >
            {{ banner.date }}
          </p>
        </div>
      </div>
    </div>
    <div class="content-text-medium">
      <p class="txt-3 fadeInRight" :style="`color: ${banner.colorTitle};`">
        {{ banner.title.replace(/&nbsp;/g, ' ') }}
      </p>
    </div>
    <div class="content-text-bottom">
      <div class="txt-banner-bottom">
        <p class="txt-4 fadeInLeft" :style="`color: ${banner.colorPrice};`">
          Desde
        </p>
      </div>
      <div class="txt-banner-bottom">
        <p class="txt-5 fadeInRight" :style="`color: ${banner.colorPrice};`">
          {{ banner.price }}
        </p>
      </div>
    </div>
    <div class="content-buttom" v-if="banner.visbleBtn">
      <nuxt-link :to="banner.url_redirect">
        <button
          class="btn"
          :style="`border-color: ${banner.color_border_btn}; color: ${banner.color_text_btn};`"
        >
          {{ $t('home_comprarAhora') }}
        </button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    banner: {},
    settingGeneral: Object,
  },
}
</script>
<style scoped>
.content {
  @apply flex flex-col justify-center items-start;
}
.txt-1,
.txt-2,
.txt-3,
.txt-4,
.txt-5 {
  font-family: var(--font-style-1) !important;
  @apply uppercase z-20;
}

.txt-1,
.txt-2,
.empty-border-left {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}
.txt-3 {
  -webkit-animation-duration: 4s;
  animation-duration: 4s;
}
.txt-4,
.txt-5 {
  -webkit-animation-duration: 4s;
  animation-duration: 4s;
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}
.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@screen sm {
  .content {
    @apply w-8/5;
  }
  .empty-border-left {
    @apply h-22 w-1;
  }
  .content-items-top {
    @apply w-7/0 flex flex-row justify-start items-start ml-8;
  }
  .content-text-top {
    @apply w-7/0 flex flex-col justify-start items-start pl-10;
  }
  .content-text-medium {
    @apply w-7/0 flex justify-start items-start;
  }
  .content-text-bottom {
    @apply hidden;
  }
  .btn {
    font-size: 10px;
    font-family: var(--font-style-1) !important;
    border-radius: var(--radius_btn);
    @apply px-10 py-2 border font-semibold truncate;
  }
  .btn:hover {
    color: var(--hover_text_btn);
    border-color: var(--hover_Bg_btn);
    @apply border;
  }
  .txt-1,
  .txt-2 {
    font-size: 8px;
    @apply w-full truncate tracking-1;
  }
  .txt-3 {
    font-size: 20px;
    @apply w-full mt-5 mb-10 truncate font-semibold tracking-3;
  }
}
@media (min-width: 425px) {
  .empty-border-left {
    @apply h-26;
  }
  .content-items-top {
    @apply ml-10;
  }
  .txt-1,
  .txt-2 {
    font-size: 10px;
  }
  .txt-3 {
    font-size: 30px;
  }
  .btn {
    font-size: 12px;
    @apply px-12 py-2 border font-semibold truncate;
  }
}
@screen md {
  .empty-border-left {
    @apply h-33;
  }
  .content-items-top {
    @apply ml-15;
  }
  .content-text-top {
    @apply pl-15;
  }
  .txt-1,
  .txt-2 {
    font-size: 13px;
    @apply tracking-0;
  }
  .txt-3 {
    font-size: 50px;
    @apply tracking-6 pb-20;
  }
  .btn {
    font-size: 12px;
    @apply px-12 py-7 ml-5 border-2 font-semibold truncate;
  }
  .btn:hover {
    @apply border-2;
  }
}
@screen lg {
  .content {
    @apply w-7/5;
  }
  .content-items-top {
    @apply ml-0;
  }
  .content-text-bottom {
    @apply w-7/0 flex flex-row justify-start items-end mb-20;
  }
  .txt-3 {
    font-size: 50px;
    @apply mb-0 mt-20 h-auto;
  }
  .txt-4 {
    font-size: 10px;
    @apply pr-5 pb-2;
  }
  .txt-5 {
    font-size: 15px;
  }
  .btn {
    font-size: 12px;
    @apply px-35 py-8 ml-0;
  }
}
@screen mlg {
  .empty-border-left {
    @apply h-35;
  }
  .txt-3 {
    font-size: 70px;
  }
}
@media (min-width: 1400px) {
  .empty-border-left {
    @apply h-50;
  }
  .txt-1,
  .txt-2 {
    font-size: 15px;
  }
  .txt-3 {
    font-size: 90px;
  }
  .txt-4 {
    font-size: 12px;
    @apply pr-8 pb-5;
  }
  .txt-5 {
    font-size: 24px;
  }
  .btn {
    font-size: 16px;
    @apply px-51 py-12 border-2;
  }
  .btn:hover {
    @apply border-2;
  }
}
</style>
