<template>
  <el-carousel
    indicator-position="outside"
    interval="6000"
    class="w-full h-full wrapper-carouse"
  >
    <el-carousel-item class="w-full h-full">
      <img
        loading="lazy"
        v-lazy="idCloudinary(photo, 850, 850)"
        class="photo"
        alt="Product img"
        height="600px"
        width="600px"
      />
    </el-carousel-item>
    <el-carousel-item
      v-for="photo in photos"
      :key="photo.id"
      class="w-full h-full"
    >
      <img
        loading="lazy"
        v-lazy="idCloudinary(photo.foto_cloudinary, 850, 850)"
        class="photo"
        alt="Product img"
        height="600px"
        width="600px"
      />
    </el-carousel-item>
    <el-carousel-item v-if="idYoutube && idYoutube !== ''">
      <div class="youtube">
        <button class="youtube__action_back" @click="changeSlide()">
          <i class="material-icons">keyboard_backspace</i>
        </button>
        <iframe
          height="600px"
          width="600px"
          :src="`https://www.youtube.com/embed/${idYoutube}?rel=0&amp;controls=0&amp;showinfo=0`"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import idCloudinary from '../../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'productSlide-details-10',
  props: ['photos', 'photo', 'idYoutube'],
}
</script>

<style scoped>
.photo {
  height: 600px;
  width: 600px;
  overflow: hidden;
  -o-object-fit: cover;
  object-fit: cover;
  /* @apply w-full h-full; */
}
.wrapper-carouse {
  height: 620px;
}
.wrapper-carouse >>> .el-carousel__container {
  height: 620px;
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
@media (max-width: 850px) {
  .wrapper-carouse {
    height: 420px;
  }
  .wrapper-carouse >>> .el-carousel__container {
    height: 420px;
  }
  .photo {
    height: 420px;
    width: 420px;
  }
}
@media (max-width: 500px) {
  .wrapper-carouse {
    height: 400px;
    margin-top: 20px;
  }
  .wrapper-carouse >>> .el-carousel__container {
    height: 400px;
  }
  .photo {
    height: 400px;
    width: 400px;
  }
}
</style>
