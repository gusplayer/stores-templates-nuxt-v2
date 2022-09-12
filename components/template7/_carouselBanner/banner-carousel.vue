<template>
  <div
    class="wrapper-banner"
    :style="[settingKCarousel, banner, settingGeneral]"
  >
    <div class="banner">
      <div class="content-items-banner">
        <div
          class="banner-content-items"
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
          <div class="text-tittle">
            <span class="banner-text-tittle">
              {{ banner.tittle }}
            </span>
          </div>
          <div class="text-subtittle">
            <span class="banner-text-subtittle">
              {{ banner.description }}
            </span>
          </div>
        </div>
      </div>
      <div class="content-items-banner">
        <div class="banner-img" v-if="banner.url_img_right">
          <img
            class="img-girl"
            :src="idCloudinaryBanner(banner.url_img_right)"
            alt="banner-carousel"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import idCloudinary from '../../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  props: {
    banner: Object,
    settingKCarousel: Object,
    settingGeneral: Object,
  },
}
</script>

<style scoped>
.wrapper-banner {
  @apply w-full flex flex-col justify-center items-center;
}
.banner {
  display: grid;
  flex-direction: column;
  padding-top: 100px;
  width: 100%;
  grid-gap: 1.5rem;
  gap: 1.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 1300px;
}
.content-items-banner {
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-content-items {
  max-width: 420px;
  @apply w-full flex flex-col justify-center items-center;
}
.banner-img {
  max-width: 570px;
  @apply flex w-full justify-center items-center;
}
.img-girl {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.text-tittle {
  @apply flex justify-center items-center text-center leading-tight;
}
.banner-text-tittle {
  font-size: 64px;
  color: var(--color_text);
  font-family: var(--font-style-2) !important;
}
.text-subtittle {
  @apply flex justify-center items-center text-center break-all;
}
.banner-text-subtittle {
  font-size: 18px;
  color: var(--color_subtext);
  font-family: var(--font-style-3) !important;
  font-style: italic;
}
@media (max-width: 1500px) {
  .banner-img {
    max-width: 520px;
  }
}
@media (max-width: 1400px) {
  .banner-img {
    max-width: 420px;
  }
}
@media (max-width: 1300px) {
  .banner-text-tittle {
    font-size: 54px;
  }
  .banner-text-subtittle {
    font-size: 15px;
  }
}
@media (max-width: 1200px) {
  .banner {
    padding-top: 60px;
  }
}
@media (max-width: 1120px) {
  .banner {
    padding-top: 40px;
  }
  .banner-img {
    max-width: 380px;
  }
}
@media (max-width: 1024px) {
  .banner {
    padding-top: 40px;
  }
  .banner-text-tittle {
    font-size: 45px;
  }
  .banner-text-subtittle {
    font-size: 14px;
  }
  .banner-img {
    max-width: 350px;
  }
}
@media (max-width: 950px) {
  .wrapper-banner {
    display: none;
  }
}
</style>
