<template>
  <div
    class="advertising-wrapper"
    :style="[settingKAdvertising, settingGeneral]"
  >
    <div class="separador-blog" v-if="settingKCarousel.visible == false"></div>
    <div
      class="advertising-background"
      id="BgAdvertising"
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
          <div class="wrapper-img">
            <img
              class="max-w-auto"
              :src="settingKAdvertising.ur_img_card"
              alt="icon"
            />
          </div>
          <div class="advertising-text">
            <span class="tittle">{{ settingKAdvertising.title }}</span>
            <div class="subtittles-items">
              <span class="subtittle">{{
                settingKAdvertising.description
              }}</span>
            </div>
          </div>
          <button class="content-bttns-shop">
            <a
              :href="`${settingKAdvertising.url_redirect}`"
              rel="noreferrer noopener"
              target="_blank"
            >
              <span class="content-textbutton-shop">
                {{ $t('productdetail_btnComprar') }}
              </span>
            </a>
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
    settingKCarousel: Object,
  },
  mounted() {
    if (
      this.settingKAdvertising &&
      this.settingKAdvertising['--url_img_background']
    ) {
      this.setBg()
    }
  },
  methods: {
    setBg() {
      if (this.settingKAdvertising['--url_img_background']) {
        var imagen = document.getElementById('BgAdvertising')
        imagen.style.backgroundImage = `url(${this.settingKAdvertising['--url_img_background']})`
      }
    },
  },
  watch: {
    settingKAdvertising() {
      if (
        this.settingKAdvertising &&
        this.settingKAdvertising['--url_img_background']
      ) {
        this.setBg()
      }
    },
  },
}
</script>
<style scoped>
.advertising-wrapper {
  background: var(--background_color_1);
  padding: 40px 0;
  flex-direction: column;
  @apply w-full flex justify-center items-center;
}
.separador-blog {
  padding-top: 100px;
}
.advertising-background {
  @apply flex justify-center items-center bg-cover z-auto;
  padding-top: 66px;
  padding-bottom: 66px;
}
.wrapper-img {
  max-width: 160px;
  max-height: 80px;
}
.advertising-items {
  background: var(--background_color_1_card);
  width: 596px;
  height: 449px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  @apply flex justify-center items-center shadow-2xl z-auto;
}
.advertising-border {
  border-color: var(--color_border);
  @apply w-full h-full flex flex-col justify-center items-center border border-opacity-50 z-auto;
}
.content-bttns-shop {
  background: var(--color_background_btn_card);
  border-radius: var(--radius_btn);
  padding: 10px 20px;
  @apply mt-20;
}
.content-bttns-shop:hover {
  @apply bg-red-btnbannershophover;
  transition: all 0.2s ease-out;
}
.content-textbutton-shop {
  color: var(--color_text_btn_card);
  font-size: 13px;
  line-height: 18px;
  font-family: var(--font-style-3) !important;
  @apply uppercase font-semibold;
}
.advertising-text {
  margin-top: 15px;
  text-align: center;
  padding: 2px;
  @apply w-full flex flex-col justify-center items-center;
}
.tittle {
  @apply py-4;
  font-family: var(--font-style-2) !important;
  color: var(--color_text_card);
}
.subtittle {
  font-family: var(--font-style-3) !important;
  color: var(--color_subtext_card);
  @apply text-center;
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
