<template>
  <div
    class="content-newslatter"
    :style="[
      newsletter,
      setting11General,
      {
        '--font-style-1':
          this.setting11General && this.setting11General.fount_1
            ? this.setting11General.fount_1
            : 'Roboto',
      },
    ]"
  >
    <div
      class="content-bg"
      :style="`background-image: url(${newsletter.url_img_background});`"
    >
      <div class="content-txt">
        <p class="txt-top">Para actualizaciones diarias</p>
        <p class="txt-bottom">Suscríbete a nuestro boletin informativo</p>
        <div class="content-newsletter">
          <Newsletter
            :dataStore="dataStore"
            :newsletter="newsletter"
          ></Newsletter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Newsletter from '../../components/template11/_newsletter/newsletter'
export default {
  name: 'Ko-Newsletter',
  props: {
    dataStore: Object,
    newsletter: Object,
    setting11General: Object,
  },
  components: {
    Newsletter,
  },
}
</script>
<style scoped>
.content-newslatter {
  @apply w-full flex flex-col justify-center items-center mb-40;
}
.content-bg {
  background-position: 50% 72.0205%;
  /* background-image: url('https://res.cloudinary.com/brahyanr10/image/upload/v1616200598/Template11/Newslatter/newsletter-bg_cko8so.jpg'); */
  @apply w-full flex flex-col justify-center items-center bg-fixed bg-no-repeat bg-cover;
}
.content-txt {
  @apply w-full flex flex-col justify-center items-center;
}
@screen sm {
  .content-txt {
    @apply px-20 py-55;
  }
  .txt-top {
    color: var(--color_pretitle);
    font-size: 14px;
    font-family: var(--font-style-1);
    @apply w-full font-light tracking-1 text-center;
  }
  .txt-bottom {
    color: var(--color_title);
    font-size: 20px;
    font-family: var(--font-style-1);
    @apply w-full font-bold capitalize tracking-0 text-center mb-27 mt-20;
  }
  .btn {
    color: #000;
    background-color: #fff;
    font-size: 14px;
    @apply font-normal leading-21 uppercase px-15 py-10;
  }
  .btn:hover {
    color: #fff;
    background-color: #000;
  }
  .content-newsletter {
    @apply w-full flex flex-col justify-center items-center bg-transparent;
  }
}
@screen md {
  .content-txt {
    @apply p-80;
  }
  .txt-bottom {
    font-size: 28px;
  }
}
@screen lg {
  .content-txt {
    padding-right: 200px;
    padding-left: 200px;
    @apply py-100;
  }
  .txt-bottom {
    font-size: 34px;
  }
}
</style>
