<template>
  <div
    v-swiper:mySwiper="swiperOption"
    ref="mySwiper"
    :style="[
      {
        '--font-style-1':
          this.settingGeneral && this.settingGeneral.fount_1
            ? this.settingGeneral.fount_1
            : 'Roboto',
      },
    ]"
  >
    <div class="swiper-wrapper z-auto">
      <!-- <div
        
      > -->
      <a
        class="swiper-slide w-full flex justify-center items-center z-10"
        :id="`slide${index + 1}`"
        v-for="(item, index) in this.settingKbanner.values"
        :key="index"
        :class="item.visbleBtn ? 'pointer-events-none' : 'cursorPointer'"
        :href="`${item.visbleBtn ? '' : item.url_redirect}`"
        rel="noreferrer noopener"
      >
        <img
          class="slide-bgWeb"
          :src="idCloudinaryBanner(item.url_img_background)"
          alt="Bg-Image"
          v-if="item.url_img_background"
        />
        <img
          class="slide-bgMovil"
          :src="idCloudinaryBanner(item.url_img_background_res)"
          alt="Bg-Image"
          v-if="item.url_img_background_res"
        />
        <CarouselContent
          class="absolute"
          :banner="item"
          :settingGeneral="settingGeneral"
        />
      </a>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import CarouselContent from '../../components/template11/_carouselBanner/banner-carousel'
import idCloudinaryBanner from '../../mixins/idCloudinary'
export default {
  name: 'Ko-Banner',
  components: {
    CarouselContent,
  },
  props: {
    settingKbanner: Object,
    settingGeneral: Object,
  },
  mixins: [idCloudinaryBanner],
  mounted() {
    this.autoplayBanner()
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        effect: 'fade',
        slidesPerView: 'auto',
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
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
  methods: {
    autoplayBanner() {
      if (this.settingKCarousel && this.settingKCarousel.values.length == 1) {
        this.swiperOption.autoplay.delay = 900000000000000000
      } else {
        this.swiperOption.autoplay.delay = 6000
      }
    },
  },
  watch: {
    'settingKCarousel.values'() {
      this.autoplayBanner()
    },
  },
}
</script>
<style scoped>
.content-carousel {
  @apply w-full flex flex-col justify-center items-center;
}
/* .swiper-slide {
  @apply w-full flex justify-center items-center z-10;
} */
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
