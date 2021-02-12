<template>
  <div class="carousel-content">
    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
      <div class="swiper-wrapper z-auto">
        <div
          :class="`swiper-slide slide${index + 1}`"
          v-for="(banner, index) in this.settingKCarousel.values"
          :key="index"
        >
          <KObanner
            :banner="banner"
            :settingKCarousel="settingKCarousel"
            :settingGeneral="settingGeneral"
          ></KObanner>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
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
  data() {
    return {
      swiperOption: {
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
}
</script>
<style scoped>
.carousel-content,
.swiper-slide {
  @apply w-full flex justify-center items-center z-auto;
}

.slide1 {
  @apply bg-bannerbg1 bg-no-repeat bg-center bg-cover;
}
.slide2 {
  @apply bg-bannerbg2 bg-no-repeat bg-center bg-cover;
}
.slide3 {
  @apply bg-bannerbg3 bg-no-repeat bg-center bg-cover;
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
</style>
