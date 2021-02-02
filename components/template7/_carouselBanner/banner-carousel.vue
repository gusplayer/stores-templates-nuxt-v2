<template>
  <div class="banner" :style="settingByTemplate">
    <div class="banner-content-items">
      <div class="banner-content-img">
        <img
          class="img-banner"
          src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2018/11/flowers-slider-txt-element.jpg.png"
          alt="img-flor"
        />
      </div>
      <div class="text-tittle">
        <span :class="`banner-text-tittle banner-text-tittle-${banner.id}`">
          {{ banner.title }}
        </span>
      </div>
      <div class="text-subtittle">
        <span class="banner-text-subtittle">
          {{ banner.description }}
        </span>
      </div>
      <div class="banner-content-buttons">
        <button class="content-bttns-shop">
          <nuxt-link :to="'/productos'">
            <span class="content-textbutton-shop">
              {{ $t('productdetail_btnComprar') }}
            </span>
          </nuxt-link>
        </button>
        <button :class="`content-bttns-view${banner.id} content-bttns-view`">
          <span class="content-textbutton-viewmore">
            {{ $t('home_cardvermas') }}
          </span>
        </button>
      </div>
    </div>
    <div class="banner-img">
      <img class="img-girl" :src="banner.photo" alt="banner-carousel" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    banner: {},
    settingByTemplate: Object,
  },
}
</script>

<style scoped>
.banner {
  @apply flex flex-col justify-center items-center pt-20;
}
.banner-content-items {
  @apply w-full flex flex-col justify-center items-center;
}
.banner-content-buttons {
  @apply flex flex-row gap-3 justify-center items-center;
}
.content-bttns-shop {
  @apply mr-2 rounded-full bg-red-btnbannershop shadow-md justify-center items-center flex font-semibold uppercase tracking-wider;
  padding: 10px 20px;
}
.content-bttns-view {
  @apply ml-2 rounded-full border-2 shadow-md justify-center items-center flex font-semibold uppercase tracking-wider;
  padding: 10px 20px;
}
.content-bttns-view1 {
  @apply border-gray-btnbannerviewhover border-2;
}
.content-bttns-view2 {
  @apply border-coffe-headerpage border-2;
}
.content-bttns-view3 {
  @apply border-rose-btnbannerviewhover border-2;
}
.content-bttns-shop:hover {
  @apply bg-red-btnbannershophover;
  transition: all 0.2s ease-out;
}
.content-bttns-view1:hover {
  @apply bg-gray-btnbannerviewhover text-white-white;
  transition: all 0.2s ease-out;
}
.content-bttns-view2:hover {
  @apply bg-coffe-headerpage text-white-white;
  transition: all 0.2s ease-out;
}
.content-bttns-view3:hover {
  @apply bg-rose-btnbannerviewhover text-white-white;
  transition: all 0.2s ease-out;
}
.content-textbutton-shop {
  @apply text-white-white;
  font-size: 13px;
  line-height: 18px;
}
.banner-text-tittle-1 {
  @apply text-blue-headerpage;
}
.banner-text-tittle-2 {
  @apply text-coffe-headerpage;
}
.banner-text-tittle-3 {
  @apply text-rose-headerpage;
}
.banner-text-subtittle {
  @apply text-gray-btnbannerviewhover;
}
.text-tittle {
  @apply flex justify-center items-center text-center leading-tight;
}
.text-subtittle {
  @apply flex justify-center items-center text-center break-all;
}
.banner-content-img {
  @apply mb-6;
}
.banner-img {
  @apply flex w-full justify-center items-center;
}
.banner-text-tittle {
  font-family: 'Great Vibes', cursive !important;
}
.banner-text-subtittle {
  font-family: 'Lora', serif !important;
  font-style: italic;
}
.content-textbutton-shop {
  font-family: 'Lora', serif !important;
}
.content-textbutton-viewmore {
  font-family: 'Lora', serif !important;
}
@screen sm {
  .banner {
    @apply w-full;
  }
  .banner-text-tittle {
    @apply w-full text-5xl;
  }
  .banner-text-subtittle {
    @apply w-full text-lg;
  }
  .text-tittle {
    @apply w-9/0 leading-tight;
  }
  .text-subtittle {
    @apply w-9/0 mt-4;
  }
  .banner-content-items {
    @apply w-full;
  }
  .banner-content-img {
    @apply mt-6;
  }
  .banner-content-buttons {
    @apply mt-6 mb-10 w-9/0;
  }
  .content-textbutton-shop {
    @apply text-xs;
  }
  .content-textbutton-viewmore {
    @apply text-xs;
  }
  .banner-img {
    @apply w-9/0;
  }
}
@screen md {
  .banner {
    @apply w-8/0;
  }
  .banner-text-tittle {
    @apply w-5/0;
  }
  .banner-text-subtittle {
    @apply w-9/0 text-xl;
  }
  .banner-content-buttons {
    @apply mt-10 mb-12;
  }
}
@screen lg {
  .banner {
    @apply w-full grid grid-cols-2 gap-6;
  }
  .banner-text-tittle {
    @apply w-8/0 text-5xl;
  }
  .text-tittle {
    @apply w-8/0;
  }
}
@screen mlg {
  .banner {
    @apply w-9/3;
  }
  .banner-text-tittle {
    @apply w-9/0 text-6xl;
  }
  .banner-text-subtittle {
    @apply w-9/0 text-lg;
  }
}
@media (min-width: 1192px) {
  .banner {
    width: 1192px;
  }
}
@screen xl {
  .banner-text-tittle {
    @apply text-6xl;
  }
  .banner-text-subtittle {
    @apply w-8/0 text-base;
  }
  .text-tittle {
    @apply w-8/3;
  }
  .text-subtittle {
    @apply w-8/3 mt-4;
  }
  .banner-content-buttons {
    @apply my-6 w-9/0;
  }
  .banner-img {
    @apply w-full;
  }
}
@screen xml {
  .banner-text-tittle {
    @apply text-6xl;
  }
}
</style>
