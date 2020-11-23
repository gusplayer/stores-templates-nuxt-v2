<template>
  <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <cld-image
          cloudName="komercia-store"
          :publicId="getIdCloudinary(setPhoto(photo))"
          dpr="auto"
          width="380"
          height="375"
          crop="scale"
          class="photo"
        >
          <cld-transformation
            width="400"
            height="400"
            crop="lpad"
            quality="auto"
            background="auto:border"
          />
        </cld-image>
      </div>
      <div class="swiper-slide" v-for="photo in photos" :key="photo.id">
        <img
          class="photo"
          v-lazy-load
          :data-src="setPhoto(photo.foto_cloudinary)"
          alt="Product img"
        />
      </div>
      <div class="swiper-slide" v-if="idYoutube && idYoutube !== ''">
        <div class="youtube">
          <button class="youtube__action_back" @click="changeSlide()">
            <i class="material-icons">keyboard_backspace</i>
          </button>
          <iframe
            style="max-width: 375px; width: 100%;"
            height="375"
            :src="`https://www.youtube.com/embed/${idYoutube}?rel=0&amp;controls=0&amp;showinfo=0`"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
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
        autoplay: {
          delay: 2500,
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
.swiper-wrapper {
}
.swiper-slide {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  max-width: 370px;
  width: 100%;
}
.swiper-slide .photo {
  width: 100%;
  max-width: 370px;
  max-height: 100%;
  object-fit: contain;
  margin: 0 auto;
  object-position: center;
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
  background-color: var(--button_color);
  color: var(--button_text_color);
  border-style: none;
  outline: none;
}
</style>
