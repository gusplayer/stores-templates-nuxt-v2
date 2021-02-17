<template>
  <div class="carousel-content" :style="settingKCarousel">
    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
      <div class="swiper-wrapper z-auto">
        <div
          :class="`swiper-slide`"
          :id="`slide${index + 1}`"
          v-for="(banner, index) in this.settingKCarousel.values"
          :key="index"
        >
          <img
            class="img-bg"
            :src="settingKCarousel.values[index].url_img_background"
            alt="bg"
          />
          <KObanner
            class="absolute"
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
      bg1: '',
      bg2: '',
      bg3: '',

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
@screen sm {
  .img-bg {
    width: 100%;
    height: 810px;
    object-fit: cover;
  }
}
@media (min-width: 375px) {
  .img-bg {
    height: 870px;
  }
}
@media (min-width: 425px) {
  .img-bg {
    height: 920px;
  }
}
@media (min-width: 480px) {
  .img-bg {
    height: 940px;
  }
}
@media (min-width: 520px) {
  .img-bg {
    height: 980px;
  }
}
@media (min-width: 620px) {
  .img-bg {
    height: 1050px;
  }
}
@screen md {
  .img-bg {
    height: 1120px;
  }
}
@media (min-width: 900px) {
  .img-bg {
    height: 1180px;
  }
}
@screen lg {
  .img-bg {
    height: 620px;
  }
}
@media (min-width: 1192px) {
  .img-bg {
    height: 750px;
  }
}
</style>
