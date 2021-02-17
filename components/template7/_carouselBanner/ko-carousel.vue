<template>
  <div class="carousel-content" :style="settingKCarousel">
    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
      <div class="swiper-wrapper z-auto">
        <!-- :class="`swiper-slide slide${index + 1}`" -->
        <div
          :class="`swiper-slide`"
          :id="`slide${index + 1}`"
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
  mounted() {
    var bgImage1 = document.getElementById('slide2')
    if (bgImage1) {
      bgImage1.style.backgroundColor = '#000'
    }
    if (this.settingKCarousel) {
      this.setBg()
    } else {
      console.log('No entro')
    }
  },
  methods: {
    setBg() {
      console.log('Entro en metodo')
      var bgImage = document.getElementById('slide1')
      if (bgImage) {
        bgImage.style.backgroundImage = `url(${this.settingKCarousel.values[1].url_img_background})`
      }
    },
  },
  watch: {
    // banner() {
    //   if (
    //     this.settingKCarousel &&
    //     this.settingKCarousel.values[0].url_img_background
    //   ) {
    //     this.setBg()
    //   }
    // },
  },
}
</script>
<style scoped>
.carousel-content,
.swiper-slide {
  @apply w-full flex justify-center items-center z-auto;
}
#slide1 {
  @apply border bg-no-repeat bg-center bg-cover;
  /* background-image: url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612320607/Template9/Carousel/slide-headphones-bg_atwvao.jpg'); */
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
</style>
