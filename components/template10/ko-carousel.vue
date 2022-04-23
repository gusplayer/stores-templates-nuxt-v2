<template>
  <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
    <div class="swiper-wrapper z-auto">
      <client-only>
        <a
          class="swiper-slide"
          v-for="(banner, index) in banner.values"
          :class="banner.visbleBtn ? 'pointer-events-none' : 'cursorPointer'"
          :href="`${banner.visbleBtn ? '' : banner.url_redirect}`"
          :key="index"
          :id="`slide${index + 1}`"
          rel="noreferrer noopener"
        >
          <img
            class="slide-bgWeb"
            :src="idCloudinaryBanner(banner.url_img_background)"
            alt="Bg-Image"
          />
          <img
            class="slide-bgMovil"
            :src="idCloudinaryBanner(banner.url_img_background_res)"
            alt="Bg-Image"
          />
          <CarouselContent
            class="absolute"
            :banner="banner"
            :settingGeneral="settingGeneral"
          />
          <CarouselContent
            class="absolute"
            :banner="banner"
            :settingGeneral="settingGeneral"
          />
        </a>
      </client-only>
    </div>
    <div class="swiper-pagination" v-if="banner.visible_pagination"></div>
  </div>
</template>
<script>
import CarouselContent from '../../components/template10/_carouselBanner/banner-carousel'
import idCloudinaryBanner from '../../mixins/idCloudinary'
export default {
  components: {
    CarouselContent,
  },
  props: {
    banner: Object,
    settingGeneral: Object,
  },
  mixins: [idCloudinaryBanner],
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        slidesPerView: 'auto',
        effect: 'fade',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
      },
    }
  },
}
</script>
<style scoped>
.carousel-content >>> .swiper-pagination-bullet-active {
  opacity: 1;
  background: #2c2930;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 2px;
  display: inline-block;
  border-radius: 100%;
  background: white;
  opacity: 0.2;
}
.swiper-slide {
  @apply w-full flex justify-center items-center z-10;
}
.slide-bgWeb {
  display: initial;
  @apply w-full object-center object-cover;
}
.slide-bgMovil {
  display: none;
}

@media (min-width: 1400px) {
  .slide-bgWeb {
    max-height: 732px;
  }
  .slide-bgMovil {
    max-height: 732px;
  }
}
@media (max-width: 768px) {
  .slide-bgWeb {
    display: none;
  }
  .slide-bgMovil {
    display: initial;
    @apply w-full object-center object-cover;
  }
}
</style>
