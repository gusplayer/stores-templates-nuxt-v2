<template>
  <div
    ref="mySwiper"
    v-swiper:mySwiper="swiperOption"
    class="wrapper-slider max-h-[375px]"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide wrapper-image">
        <img
          v-lazy="idCloudinary(photo, 550, 550)"
          class="photo"
          alt="Product img"
        />
      </div>
      <div v-for="photo in photos" :key="photo.id" class="swiper-slide">
        <img
          v-lazy="idCloudinary(photo.foto_cloudinary, 550, 550)"
          class="photo"
          alt="Product img"
        />
      </div>
      <div v-if="idYoutube && idYoutube !== ''" class="swiper-slide">
        <div class="youtube">
          <button class="youtube__action_back" @click="changeSlide()">
            <i class="material-icons"></i>
          </button>
          <iframe
            style="max-width: 375px; width: 100%"
            height="375"
            :src="`https://www.youtube.com/embed/${idYoutube}?rel=0&amp;controls=0&amp;showinfo=0`"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev" v-if="photos.length > 0" />
    <div class="swiper-button-next" v-if="photos.length > 0" />
  </div>
</template>

<script>
import idCloudinary from '../../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'productSlide-details',
  props: ['photos', 'photo', 'idYoutube'],
  data() {
    return {
      swiperOption: {
        slidesPerView: '1',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000,
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
    setPhoto(photo) {
      return photo
    },
  },
}
</script>

<style scoped>
.swiper-slide {
  width: 375px;
  max-width: 375px;
  object-position: center;
  box-sizing: border-box;
  overflow: hidden;
}
.photo {
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
.photos .responsive .swiper-pagination-bullet {
  background-color: rgba(255, 255, 255, 0.5);
}
.photos .responsive .swiper-pagination-bullet-active {
  background-color: #fff;
}
.youtube {
  width: 99%;
  max-width: 400px;
  display: grid;
  justify-items: start;
  grid-gap: 5px;
}
.youtube__action_back {
  background-color: var(--color_background_btn);
  color: var(--color_text_btn);
  border-style: none;
  outline: none;
}
.wrapper-slider >>> .swiper-pagination-bullet-active {
  opacity: 1;
  background: var(--color_background_btn);
}
.wrapper-slider >>> .swiper-button-prev,
.wrapper-slider >>> .swiper-button-next {
  color: var(--color_background_btn) !important;
}
</style>
