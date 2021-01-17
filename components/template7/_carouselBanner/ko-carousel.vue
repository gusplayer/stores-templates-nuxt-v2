<template>
  <div class="carousel-content">
    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
      <div class="swiper-wrapper z-auto border">
        <div
          :class="`swiper-slide slide${index + 1}`"
          v-for="(banner, index) in this.Banners"
          :key="index"
        >
          <KObanner :banner="banner"></KObanner>
        </div>
      </div>
      <!-- <div
        class="swiper-pagination swiper-pagination-bullets"
        slot="pagination"
      ></div> -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
  <!-- <div class="carousel-content">
    <div class="carousel" v-for="(banner, index) in this.Banners" :key="index">
      <div class="carousel-inner">
        <input
          class="carousel-open"
          type="radio"
          :id="`carousel-${index + 1}`"
          name="carousel"
          aria-hidden="false"
          hidden=""
          checked="checked"
        />
        <div :class="`carousel-item slide${index + 1}`">
          <div class="banner-content">
            <KObanner class="trans" :banner="banner"></KObanner>
          </div>
        </div>
        <label for="carousel-3" class="carousel-control prev control-1"
          >‹</label
        >
        <label for="carousel-2" class="carousel-control next control-1"
          >›</label
        >
        <label for="carousel-1" class="carousel-control prev control-2"
          >‹</label
        >
        <label for="carousel-3" class="carousel-control next control-2"
          >›</label
        >
        <label for="carousel-2" class="carousel-control prev control-3"
          >‹</label
        >
        <label for="carousel-1" class="carousel-control next control-3"
          >›</label
        >

        <ol class="carousel-indicators">
          <li v-for="(list, index) in 3" :key="index">
            <label :for="`carousel-${index + 1}`" class="carousel-bullet">
              <span class="carousel-bullet-num">0{{ index + 1 }}</span>
              <span
                id="bullet-hover"
                :class="`carousel-bullet-${index + 1}`"
              ></span>
            </label>
          </li>
        </ol>
      </div>
    </div>
  </div> -->
</template>

<script>
import KObanner from '../../../components/template7/_carouselBanner/banner-carousel'
export default {
  components: {
    KObanner,
  },
  data() {
    return {
      Banners: [
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Carousel-Slider/flowers-slider-1-img.png',
          title: 'Hermosas flores para sus vacaciones.',
          description:
            'A volutpat nisl ante una parturient vestibulum parturient pretium velit egestas sit donec vestibulum.',
          id: '1',
        },
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Carousel-Slider/flowers-slider-2-img.png',
          title: 'Las mejores rosas en colores asombrosos.',
          description:
            'Cuando pides un ramo de flores, tu objetivo es impresionar a la persona especial que necesita.',
          id: '2',
        },
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Carousel-Slider/flowers-slider-3-img.png',
          title: 'Tulipanes frescos la elección perfecta.',
          description:
            'Un símbolo de amor simple, caridad, paraíso en la tierra, celestial y recordatorio de la pasión por la vida.',
          id: '3',
        },
      ],
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          // renderBullet(index, className) {
          //   return `
          //   <div class="">${index + 1}</div>
          //   <div  class="swiper-pagination-bullet-custom border"></div> `
          // },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
