<template>
  <div v-swiper:mySwiper="swiperOption" ref="mySwiper" class="max-w-[375px]">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          :src="idCloudinary(photo, 550, 550)"
          class="h-full w-full overflow-hidden object-cover"
          alt="Product img"
        />
      </div>
      <div v-for="itemPhoto in photos" :key="itemPhoto.id" class="swiper-slide">
        <img
          :src="idCloudinary(itemPhoto.fotoCloudinary, 550, 550)"
          class="h-full w-full overflow-hidden object-cover"
          alt="Product img"
        />
      </div>
      <div v-if="idYouTube && idYouTube !== ''" class="swiper-slide">
        <div class="grid w-9/9 min-w-[400px] items-start gap-1">
          <button class="youTube__action_back" @click="changeSlide()">
            <i class="material-icons"></i>
          </button>
          <iframe
            style="max-width: 375px; width: 100%"
            height="375"
            :src="`https://www.youtube.com/embed/${idYouTube}?rel=0&amp;controls=0&amp;showinfo=0`"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '@/mixins/idCloudinary'
export default {
  name: 'ProductSlideDetails',
  mixins: [idCloudinary],
  props: {
    photos: {
      type: Array,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    idYouTube: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      swiperOption: {
        // effect: 'fade',
        slidesPerView: 1,
        // setWrapperSize: true,
        grabCursor: true,
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
    changeSlide() {
      this.swiper.slidePrev(500, false)
    },
  },
}
</script>

<style scoped>
.photos .responsive .swiper-pagination-bullet {
  background-color: rgba(255, 255, 255, 0.5);
}
.photos .responsive .swiper-pagination-bullet-active {
  background-color: #fff;
}

.youTube__action_back {
  background-color: var(--color_background_btn);
  color: var(--color_text_btn);
  border-style: none;
  outline: none;
}
</style>
