<template>
  <div
    class="content-carousel"
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
    <div class="content-txt">
      <p class="txt-top" :style="`color: ${banner.colorPretitle};`">
        {{ banner.pretitle.replace(/&nbsp;/g, ' ') }}
      </p>
      <div
        class="separator"
        :style="`background: ${banner.color_border};`"
      ></div>
      <p class="txt-bottom" :style="`color: ${banner.colorTitle};`">
        {{ banner.title.replace(/&nbsp;/g, ' ') }}
      </p>
    </div>
    <div class="content-btn" v-if="banner.visbleBtn">
      <nuxt-link :to="banner.url_redirect">
        <button
          class="btn"
          :style="`background: ${banner.color_background_btn}; color: ${banner.color_text_btn}; margin-top:${banner.marginTopBtn};`"
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
    banner: Object,
    settingGeneral: Object,
  },
}
</script>
<style scoped>
.contet-carousel {
  @apply w-full flex flex-col justify-center items-center;
}
.content-txt {
  @apply w-full flex flex-col justify-center items-center;
}
.content-btn {
  @apply w-full flex flex-col justify-center items-center;
}
@media (max-width: 500px) {
  .btn {
    margin-top: 10px !important;
  }
}
@screen sm {
  .txt-top {
    font-size: 12px;
    @apply font-light tracking-1 capitalize;
  }
  .txt-bottom {
    font-size: 16px;
    @apply font-bold uppercase tracking-0;
  }
  .btn {
    font-size: 10px;
    border-radius: var(--radius_btn);
    @apply font-normal leading-21 uppercase px-14 py-4;
  }
  .btn:hover {
    color: var(--hover_text_btn);
    background-color: var(--hover_Bg_btn);
  }
  .separator {
    @apply w-60 h-1 my-10 uppercase;
  }
}
@screen md {
  .txt-top {
    font-size: 22px;
  }
  .txt-bottom {
    font-size: 35px;
  }
  .btn {
    font-size: 12px;
  }
}
@screen lg {
  .txt-bottom {
    font-size: 55px;
  }
  .btn {
    font-size: 14px;
  }
}
</style>
