<template>
  <div
    class="advertising-wrapper"
    :style="[settingKAdvertising, settingGeneral]"
  >
    <div
      class="advertising-background"
      :style="[
        {
          '--font-style-2':
            this.settingGeneral && this.settingGeneral.fount_2
              ? this.settingGeneral.fount_2
              : 'Great Vibes',
        },
        {
          '--font-style-3':
            this.settingGeneral && this.settingGeneral.fount_3
              ? this.settingGeneral.fount_3
              : 'Lora',
        },
      ]"
    >
      <div class="advertising-items">
        <div class="advertising-border">
          <img
            class="max-w-auto"
            :src="settingKAdvertising.ur_img_card"
            alt="icon"
          />
          <div class="advertising-text">
            <span class="tittle">{{ settingKAdvertising.title }}</span>
            <div class="subtittles-items">
              <span class="subtittle">{{
                settingKAdvertising.description
              }}</span>
            </div>
          </div>
          <button class="content-bttns-shop">
            <nuxt-link :to="'/productos'">
              <span class="content-textbutton-shop">
                {{ $t('productdetail_btnComprar') }}
              </span>
            </nuxt-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ko-advertising',
  props: {
    dataStore: Object,
    settingGeneral: Object,
    settingKAdvertising: Object,
  },
}
</script>
<style scoped>
.advertising-wrapper {
  @apply w-full flex justify-center items-center;
  background: var(--background_color_1);
  margin-bottom: 70px;
}
.advertising-background {
  @apply flex justify-center items-center bg-advertisingbg bg-cover z-auto;
  padding-top: 66px;
  padding-bottom: 66px;
}
.advertising-items {
  @apply flex justify-center items-center shadow-2xl z-auto;
  background: var(--background_color_1_card);
  width: 596px;
  height: 449px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.advertising-border {
  @apply w-full h-full flex flex-col justify-center items-center border border-opacity-50 z-auto;
  border-color: var(--color_border);
}
.content-bttns-shop {
  @apply mr-2 rounded-full shadow-md justify-center items-center flex font-semibold uppercase tracking-wider;
  background: var(--color_background_btn_card);
  padding: 12px 20px;
}
.content-bttns-shop:hover {
  @apply bg-red-btnbannershophover;
  transition: all 0.2s ease-out;
}
.content-textbutton-shop {
  color: var(--color_text_btn_card);
  font-size: 13px;
  line-height: 18px;
}
.content-textbutton-shop {
  font-family: var(--font-style-3), serif !important;
}
.advertising-text {
  @apply w-full flex flex-col justify-center items-center;
}
.tittle {
  @apply py-4;
  font-family: var(--font-style-2), cursive !important;
  color: var(--color_text_card);
}
.subtittle {
  font-family: var(--font-style-3), serif !important;
  color: var(--color_subtext_card);
}
.subtittles-items {
  @apply flex flex-col justify-center items-center pb-4 w-full;
}
@screen sm {
  .advertising-background {
    @apply w-9/0 h-full;
  }
  .advertising-items {
    @apply w-8/5;
  }
  .tittle {
    line-height: 44px;
    font-size: 34px;
  }
  .subtittle {
    line-height: 24px;
    font-size: 14px;
  }
}
@screen md {
  .advertising-background {
    @apply w-9/5 h-full;
  }
  .advertising-items {
    @apply w-8/5;
  }
  .tittle {
    line-height: 50px;
    font-size: 40px;
  }
  .subtittle {
    line-height: 24px;
    font-size: 18px;
  }
}
@screen lg {
  .advertising-background {
    @apply w-9/7 h-full;
  }
  .advertising-items {
    @apply w-6/5;
  }
  .tittle {
    line-height: 60px;
    font-size: 50px;
  }
  .subtittle {
    line-height: 36px;
    font-size: 26px;
  }
}
@screen mlg {
  .advertising-background {
    @apply w-9/3 h-full;
  }
  .advertising-items {
    @apply w-5/0;
  }
}
@media (min-width: 1192px) {
  .advertising-background {
    width: 1192px;
  }
}
</style>
