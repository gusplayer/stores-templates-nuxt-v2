<template>
  <div class="carousel-content" :style="settingKCarousel">
    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
      <div class="swiper-wrapper z-auto">
        <div
          class="swiper-slide img-bg"
          :id="`slide${index + 1}`"
          v-for="(banner, index) in this.settingKCarousel.values"
          :key="index"
        >
          <img
            class="banner"
            :src="settingKCarousel.values[index].url_img_background"
            alt="bg"
            v-if="settingKCarousel.values[index].url_img_background"
          />
          <img
            class="banner-responsive"
            :src="settingKCarousel.values[index].url_img_movil"
            alt="bg"
            v-if="settingKCarousel.values[index].url_img_movil"
          />
          <KObanner
            class="absolute top-0"
            :banner="banner"
            :settingKCarousel="settingKCarousel"
            :settingGeneral="settingGeneral"
          ></KObanner>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import KObanner from '../../../components/template7/_carouselBanner/banner-carousel'
export default {
  components: {
    KObanner,
  },
  props: {
    dataStore: Object,
    settingKCarousel: Object,
    settingGeneral: Object,
  },
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
.carousel-content,
.swiper-slide {
  @apply w-full flex justify-center items-center z-auto;
}
#slide1 {
  @apply bg-no-repeat bg-center bg-cover;
}
#slide2 {
  @apply bg-no-repeat bg-center bg-cover;
}
#slide3 {
  @apply bg-no-repeat bg-center bg-cover;
}
.swiper-pagination {
  @apply flex justify-center items-center h-12;
}
.swiper-pagination-bullets {
  @apply flex h-12;
}
.swiper-pagination-bullet-custom {
  @apply bg-black;
}
.swiper-slide:hover .swiper-button-prev {
  @apply transform -translate-x-2 border;
}
.swiper-wrapper:hover .swiper-button-next {
  @apply transform translate-x-2;
}
.swiper-button-prev {
  @apply transition-all ease-in duration-200 transform -translate-x-16;
  left: 2%;
}
.swiper-button-next {
  @apply transition-all ease-in duration-200 transform translate-x-16;
  right: 2%;
}
.swiper-pagination >>> .swiper-pagination-bullet {
  background-color: grey;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: var(--pagination_color);
}
.img-bg {
  width: 100%;
  object-fit: cover;
  object-position: center;
  box-sizing: content-box;
  position: relative;
}
.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.banner-responsive {
  display: none;
}
@media (max-width: 950px) {
  .banner {
    display: none;
  }
  .banner-responsive {
    display: initial;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
