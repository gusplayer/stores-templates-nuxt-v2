<template>
  <div class="carousel-content">
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
                :class="`carousel-bullet-left${index + 1}`"
              ></span>
              <span
                id="bullet-hover"
                :class="`carousel-bullet-right${index + 1}`"
              ></span>
            </label>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import KObanner from '../../components/template7/Ko-banner-carousel'
// import Kocados from '../../components/template7/dos'
// import Kocatres from '../../components/template7/tres'

export default {
  components: {
    KObanner,
    // Kocados,
    // Kocatres,
  },
  data() {
    return {
      Banners: [
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/flowers-slider-1-img.png',
          title: 'Hermosas flores para sus vacaciones.',
          description:
            'A volutpat nisl ante una parturient vestibulum parturient pretium velit egestas sit donec vestibulum.',
          id: '1',
        },
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/flowers-slider-2-img.png',
          title: 'Las mejores rosas en colores asombrosos.',
          description:
            'Cuando pides un ramo de flores, tu objetivo es impresionar a la persona especial que necesita.',
          id: '2',
        },
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/flowers-slider-3-img.png',
          title: 'Tulipanes frescos la elección perfecta.',
          description:
            'Un símbolo de amor simple, caridad, paraíso en la tierra, celestial y recordatorio de la pasión por la vida.',
          id: '3',
        },
      ],
    }
  },
}
</script>
<style scoped>
.carousel-inner:hover .carousel-control.prev {
  @apply transform -translate-x-2;
}
.carousel-inner:hover .carousel-control.next {
  @apply transform translate-x-2;
}
.carousel-bullet-num {
  @apply absolute transition-all ease-in duration-300 transform -translate-x-8;
}
.carousel-bullet-left1,
.carousel-bullet-left2,
.carousel-bullet-left3 {
  @apply absolute transition-all ease-in duration-300 translate-x-1 h-2 w-9 bg-white-white;
}
.carousel-bullet-right1,
.carousel-bullet-right2,
.carousel-bullet-right3 {
  @apply absolute transition-all ease-in duration-300 transform h-2 w-9 bg-white-white;
}
.carousel-bullet:hover .carousel-bullet-left1 {
  @apply transform -translate-x-3;
}
.carousel-bullet:hover .carousel-bullet-left2 {
  @apply transform -translate-x-3;
}
.carousel-bullet:hover .carousel-bullet-left3 {
  @apply transform -translate-x-3;
}
.carousel-bullet:hover .carousel-bullet-num {
  @apply transform -translate-x-12;
}
.carousel-bullet:hover {
  @apply pl-4 transition-all ease-in duration-300;
}
.carousel-bullet:hover .carousel-bullet-num {
  @apply text-blue-headerpage;
}
.carousel-bullet:hover #bullet-hover {
  @apply bg-blue-headerpage;
}
.banner-content {
  @apply w-full flex justify-center items-center;
}
.carousel {
  @apply w-full flex justify-center items-center relative;
}
.carousel-inner {
  @apply relative overflow-hidden w-full transition-all ease-in duration-300;
}
.carousel-open:checked + .carousel-item {
  @apply static opacity-100;
}
.carousel-item {
  @apply absolute opacity-0 flex justify-center items-center w-full;
  -webkit-transition: opacity 1s ease-out;
  transition: opacity 1s ease-out;
}
.slide1 {
  @apply bg-bannerbg1;
}
.slide2 {
  @apply bg-bannerbg2;
}
.slide3 {
  @apply bg-bannerbg3;
}
.carousel-control {
  @apply w-auto flex justify-center items-center text-gray-headerinputph text-5xl cursor-pointer absolute text-center z-0;
  top: 45%;
}
.carousel-control.prev {
  @apply transition-all ease-in duration-200 transform -translate-x-16 hidden;
  left: 2%;
}
.carousel-control.next {
  @apply transition-all ease-in duration-200 transform translate-x-16 hidden;
  right: 2%;
}
.carousel-control:hover {
  @apply text-blue-headerpage;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  @apply list-none m-0 p-0 absolute text-center z-auto left-0 right-0;
  bottom: 2%;
}
.carousel-indicators li {
  @apply inline-block;
  margin: 0 5px;
}
.carousel-bullet {
  @apply text-white-white cursor-pointer text-4xl flex justify-center items-center z-auto mx-8 transition-all ease-in duration-300 h-30 w-full;
}
.carousel-bullet-num {
  @apply text-base p-1 z-auto font-bold;
}
.carousel-bullet-num {
  font-family: 'Lora', serif !important ;
}
#bullet-hover {
  font-family: 'Lora', serif !important ;
}
</style>
