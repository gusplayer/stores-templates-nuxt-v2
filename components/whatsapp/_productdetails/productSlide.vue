<template>
  <div class="wrapper-slider w-full h-full">
    <el-carousel height="400px" :interval="8000" class="w-full h-full">
      <el-carousel-item>
        <img
          v-lazy="idCloudinary(photo, 400, 400)"
          alt="Product img"
          class="photo"
        />
      </el-carousel-item>
      <el-carousel-item v-for="photo in photos" :key="photo.id">
        <img
          v-lazy="idCloudinary(photo.foto_cloudinary, 400, 400)"
          class="photo"
          alt="Product img"
        />
      </el-carousel-item>
      <el-carousel-item v-if="idYoutube && idYoutube !== ''">
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
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import idCloudinary from '../../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'productSlide-details',
  props: ['photos', 'photo', 'idYoutube'],
  methods: {
    setPhoto(photo) {
      return photo
    },
  },
}
</script>

<style scoped>
.wrapper-slider >>> .el-carousel__container {
  height: 400px;
}
.photo {
  @apply w-full h-full object-contain;
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
.wrapper-slider >>> .el-carousel__arrow {
  background-color: rgb(12, 183, 89);
  color: #fff;
}
.wrapper-slider >>> .el-carousel__button {
  background-color: rgb(12, 183, 89);
  width: 8px;
  height: 8px;
  border-radius: 100px;
}
</style>
