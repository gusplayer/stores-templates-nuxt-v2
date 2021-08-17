<template>
  <div
    class="content-parallax"
    :style="[
      settingKparallax,
      settingGeneral,
      {
        '--font-style-1':
          this.settingGeneral && this.settingGeneral.fount_1
            ? this.settingGeneral.fount_1
            : 'Roboto',
      },
    ]"
  >
    <a
      :class="settingKparallax.visbleBtn ? '' : 'cursorPointer'"
      :href="`${
        settingKparallax.visbleBtn ? '' : settingKparallax.url_redirect
      }`"
      rel="noreferrer noopener"
      class="content-bg"
      :style="`background-image: url(${settingKparallax.url_img_background});`"
    >
      <div class="content-txt">
        <p class="txt-top">{{ settingKparallax.pretitle }}</p>
        <div class="separator"></div>
        <p class="txt-bottom">{{ settingKparallax.title }}</p>
        <div class="content-btn" v-if="settingKparallax.visbleBtn">
          <nuxt-link :to="settingKparallax.url_redirect">
            <button class="btn">
              {{ $t('home_comprarAhora') }}
            </button>
          </nuxt-link>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'Ko-Parallax',
  props: {
    settingKparallax: Object,
    settingGeneral: Object,
  },
}
</script>
<style scoped>
.content-parallax {
  @apply w-full flex flex-col justify-center items-center;
}
.content-bg {
  background-position: 50% 73.2661%;
  @apply w-full flex flex-col justify-center items-center bg-fixed bg-no-repeat bg-cover;
}
.content-txt {
  @apply w-full flex flex-col justify-center items-center;
}
.content-btn {
  @apply w-full flex flex-col justify-center items-center;
}
.cursorPointer {
  cursor: pointer;
}
@screen sm {
  .txt-top {
    color: var(--colorPretitle);
    font-size: 14px;
    font-family: var(--font-style-1);
    font-weight: var(--fontWeighPretitle);
    @apply tracking-1 capitalize text-center;
  }
  .txt-bottom {
    color: var(--colorTitle);
    font-size: 20px;
    font-family: var(--font-style-1);
    font-weight: var(--fontWeighTitle);
    @apply uppercase tracking-0 text-center mb-34;
  }
  .btn {
    color: var(--color_text_btn);
    background-color: var(--color_background_btn);
    font-size: 14px;
    @apply font-normal leading-21 uppercase px-15 py-10 cursor-pointer;
  }
  .btn:hover {
    color: #fff;
    background-color: #000;
  }
  .separator {
    background: var(--color_border);
    @apply w-60 h-1 my-10 uppercase;
  }
  .content-txt {
    @apply px-10 py-50;
  }
}
@screen md {
  .txt-top {
    font-size: var(--fontSizePretitle);
  }
  .txt-bottom {
    font-size: 40px;
  }
  .btn {
    font-size: 14px;
    letter-spacing: 0.4px;
    @apply px-15 py-10;
  }
  .content-txt {
    padding: 121px;
  }
}
@screen lg {
  .txt-bottom {
    font-size: var(--fontSizeTitle);
  }
  .btn {
    font-size: 14px;
    margin-top: var(--marginTopBtn);
  }
  .content-txt {
    padding: 171px 10px;
  }
}
@media (min-width: 1200px) {
  .content-txt {
    padding: 236px;
  }
  .txt-bottom {
    font-size: var(--fontSizeTitle);
  }
}
</style>
