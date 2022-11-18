<template>
  <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide wrapper-image">
        <img
          v-lazy="idCloudinary(photo, 550, 550)"
          class="photo"
          alt="Product img"
        />
      </div>
      <div class="swiper-slide" v-for="photo in photos" :key="photo.id">
        <img
          v-lazy="idCloudinary(photo.foto_cloudinary, 550, 550)"
          class="photo"
          alt="Product img"
        />
      </div>
      <div class="swiper-slide" v-if="idYoutube && idYoutube !== ''">
        <div class="youtube">
          <button class="youtube__action_back" @click="changeSlide()">
            <i class="material-icons">keyboard_backspace</i>
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
    <div class="swiper-pagination" slot="pagination" v-if="photos"></div>
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
        slidesPerView: 'auto',
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
        },
        setWrapperSize: true,
        paginationClickable: true,
        grabCursor: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
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
    changeSlide() {
      this.swiper.slidePrev(500, false)
    },
  },
}
</script>

<style scoped>
.swiper-wrapper {
  max-width: 360px;
  height: 360px;
  @apply w-full h-full;
}
.swiper-slide {
  max-width: 360px;
  height: 360px;
  @apply w-full h-full flex items-center justify-center box-border overflow-hidden relative;
}
.photo {
  @apply w-full h-full overflow-hidden object-cover;
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
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: rgb(12, 183, 89);
}
</style>
