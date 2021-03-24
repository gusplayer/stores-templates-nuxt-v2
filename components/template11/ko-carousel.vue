<template>
  <div class="content-carousel">
    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          :id="`slide${index + 1}`"
          v-for="(banner, index) in this.Banners"
          :key="index"
        >
          <img class="slide-bg" :src="banner.slide" alt="Bg-Image" />
          <CarouselContent class="absolute" :banner="banner"></CarouselContent>
        </div>
      </div>
      <!-- Add Arrows -->
      <!-- <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> -->
    </div>
  </div>
</template>
<script>
import CarouselContent from '../../components/template11/_carouselBanner/banner-carousel'
export default {
  components: {
    CarouselContent,
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
      Banners: [
        {
          slide:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1616108946/Template11/Carousel/sample-1_ltoymz.jpg',
          txt1: 'Tendencias de moda 2020',
          txt2: 'Ultimo atuendo de modas',
        },
        {
          slide:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1616108946/Template11/Carousel/sample-2_wp40pi.jpg',
          txt1: 'Tendencias de moda 2020',
          txt2: 'Explora el grado de modas',
        },
      ],
    }
  },
}
</script>
<style scoped>
.content-carousel {
  @apply w-full flex flex-col justify-center items-center;
}
.slide-bg {
  @apply w-full object-center object-cover;
}
.swiper-slide {
  @apply w-full flex justify-center items-center z-10;
}
</style>
