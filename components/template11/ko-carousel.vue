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
      <a
        class="swiper-slide w-full flex justify-center items-center z-10"
        :id="`slide${index + 1}`"
        v-for="(item, index) in this.settingKbanner.values"
        :key="index"
        :class="item.visbleBtn ? 'pointer-events-none' : 'cursorPointer'"
        :href="`${item.visbleBtn ? '' : item.url_redirect}`"
        rel="noreferrer noopener"
      >
        <picture>
          <source
            media="(max-width: 799px)"
            :srcset="
              idCloudinaryBanner(item.url_img_background_res, 'bannerRes', 800)
            "
          />
          <source
            media="(min-width: 800px)"
            :srcset="idCloudinaryBanner(item.url_img_background, 'banner')"
          />
          <img
            loading="lazy"
            v-lazy="idCloudinaryBanner(item.url_img_background, 'banner')"
            class="w-full h-full object-cover object-center"
            alt="Banner_tienda_template11"
          />
        </picture>
        <CarouselContent
          class="absolute"
          :banner="item"
          :settingGeneral="settingGeneral"
        />
      </a>
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
picture {
  width: 100%;
}
</style>
