<template>
  <el-carousel
    indicator-position="outside"
    :interval="6000"
    class="w-full h-full wrapper-carouse"
  >
    <el-carousel-item class="w-full h-full">
      <img
        v-lazy="idCloudinaryQuality(photo, 850, 850)"
        loading="lazy"
        class="photo"
        alt="Product img"
        height="550px"
        width="550px"
      />
    </el-carousel-item>
    <el-carousel-item
      v-for="photo in photos"
      :key="photo.id"
      class="w-full h-full"
    >
      <img
        v-lazy="idCloudinaryQuality(photo.foto_cloudinary, 850, 850)"
        loading="lazy"
        class="photo"
        alt="Product img"
        height="550px"
        width="550px"
      />
    </el-carousel-item>
    <el-carousel-item v-if="idYoutube && idYoutube !== ''">
      <div class="youtube">
        <button class="youtube__action_back" @click="changeSlide()">
          <i class="material-icons"></i>
        </button>
        <iframe
          height="550px"
          width="550px"
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
  name: 'ProductSlideDetails10',
  mixins: [idCloudinary],
  props: ['photos', 'photo', 'idYoutube'],
}
</script>

<style scoped>
.photo {
  height: 550px;
  width: 550px;
  overflow: hidden;
  -o-object-fit: cover;
  object-fit: contain;
  /* @apply w-full h-full; */
}
.wrapper-carouse {
  max-width: 550px;
  max-height: 550px;
  height: 550px;
}
.wrapper-carouse >>> .el-carousel__container {
  height: 550px;
  max-width: 550px;
  max-height: 550px;
}
.youtube {
  width: 99%;
  max-width: 550px;
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
    max-width: 400px;
    max-height: 400px;
    height: 400px;
  }
  .wrapper-carouse >>> .el-carousel__container {
    max-width: 400px;
    max-height: 400px;
    height: 400px;
  }
  .photo {
    max-width: 400px;
    max-height: 400px;
    height: 400px;
  }
}
@media (max-width: 500px) {
  .wrapper-carouse {
    margin-top: 20px;
  }
}
</style>
