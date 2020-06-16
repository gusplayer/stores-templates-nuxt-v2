<template>
  <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <cld-image
          cloudName="komercia-store"
          :publicId="getIdCloudinary(setPhoto(photo))"
          dpr="auto"
          responsive="width"
          width="350"
          height="400"
          crop="scale"
          class="photo"
        >
          <cld-transformation
            width="350"
            height="400"
            crop="lpad"
            quality="auto"
            background="auto:border"
          />
        </cld-image>
      </div>
      <div class="swiper-slide" v-for="photo in photos" :key="photo.id">
        <img class="photo" :src="setPhoto(photo.foto_cloudinary)" />
      </div>
      <div class="swiper-slide" v-if="idYoutube && idYoutube !== ''">
        <div class="youtube">
          <button class="youtube__action_back" @click="changeSlide()">
            <i class="material-icons">keyboard_backspace</i>
          </button>
          <iframe
            style="max-width: 375px; width: 100%;"
            height="400"
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
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
        },
        setWrapperSize: true,
        paginationClickable: true,
        grabCursor: true,
        autoplay: 2500,

        banners: ['/1.jpg', '/2.jpg', '/3.jpg'],
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
.swiper-container {
  width: 100%;
  overflow: hidden;
  height: 400px;
}
.swiper-slide {
  height: 100%;
  text-align: center;
  font-size: 18px;
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

  width: 375px;
}
.swiper-slide .photo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin: 0 auto;
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
