<template>
  <div class="carousel-content">
    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
      <div class="swiper-wrapper z-auto">
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
    </div>
  </div>
</template>
<script>
import CarouselContent from '../../components/template10/_carouselBanner/banner-carousel'
export default {
  components: {
    CarouselContent,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        // effect: 'fade',
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
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1613970941/Temp10/Carousel/h1-slide3_yreoo5.jpg',
          txt1: 'lighting',
          txt2: '2021',
          txt3: 'Etna',
          txt4: 'Desde',
          txt5: '$650.00',
        },
        {
          slide:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1614043937/Temp10/Carousel/h2-slide3_n3ulfi.jpg',
          txt1: 'Black',
          txt2: '2020',
          txt3: 'Etna',
          txt4: 'Desde',
          txt5: '$250.00',
        },
        {
          slide:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1613970941/Temp10/Carousel/h1-slide1_x7yvg6.jpg',
          txt1: 'Vibes',
          txt2: '2019',
          txt3: 'Etna',
          txt4: 'Desde',
          txt5: '$450.00',
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
@screen sm {
  .swiper-wrapper {
    padding-top: 140px;
  }
}
@screen mlg {
  .swiper-wrapper {
    padding-top: 0px;
  }
}
@media (min-width: 1400px) {
  .slide-bg {
    max-height: 837px;
  }
}
</style>
