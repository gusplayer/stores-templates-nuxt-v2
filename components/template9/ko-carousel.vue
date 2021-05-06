<template>
  <div class="contein-carousel" :style="[banner, settingGeneral]">
    <div
      class="carousel-content"
      :style="[
        {
          '--font-style-1':
            this.settingGeneral && this.settingGeneral.fount_1
              ? this.settingGeneral.fount_1
              : 'Poppins',
        },
        {
          '--font-style-2':
            this.settingGeneral && this.settingGeneral.fount_2
              ? this.settingGeneral.fount_2
              : 'Roboto',
        },
      ]"
      v-if="this.banner"
    >
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
        <div class="swiper-wrapper" v-if="this.banner.values">
          <div
            class="swiper-slide"
            v-for="(elementBannner, index) in this.banner.values"
            :key="index"
          >
            <div
              class="swiper-slide-1"
              :style="`background-image: url(${elementBannner['url_img_background']})`"
            >
              <div class="banner-content-items-1">
                <div class="content-items-1">
                  <div class="text-top">
                    <p
                      class="banner-text-top"
                      :style="`color: ${elementBannner['--color_pretitle']};`"
                    >
                      {{ elementBannner.pretitle }}
                    </p>
                  </div>
                  <div class="text-medium">
                    <p
                      class="banner-text-medium"
                      :style="`color: ${elementBannner['--color_title']};`"
                    >
                      {{ elementBannner.title }}
                    </p>
                  </div>
                  <div class="text-bottom">
                    <p
                      class="banner-text-bottom"
                      :style="`color: ${elementBannner['--color_description']};`"
                    >
                      {{ elementBannner.description }}
                    </p>
                  </div>
                  <div class="banner-button" v-if="elementBannner.url_redirect">
                    <a
                      :href="`${elementBannner.url_redirect}`"
                      rel="noreferrer noopener"
                      class="btn-shop"
                      :class="
                        elementBannner.url_redirect ? 'cursorPointer' : null
                      "
                    >
                      <span class="text-button">
                        {{ $t('home_comprarAhora') }}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataStore: Object,
    banner: Object,
    settingGeneral: Object,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        loop: true,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
      },
    }
  },
}
</script>
<style scoped>
.contein-carousel {
  @apply w-full flex flex-col justify-center items-center;
  /* margin-top: 72px; */
}
.carousel-content {
  @apply w-full flex justify-center items-center z-auto;
}
.cursorPointer {
  cursor: pointer;
}
.swiper-wrapper {
  @apply z-auto;
}
.swiper-slide-1 {
  height: 831px;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.text-button {
  color: var(--color_text_btn);
}
.banner-text-top,
.banner-text-medium {
  /* font-family: 'Poppins', sans-serif; */
  font-family: var(--font-style-1);
}
.banner-text-bottom,
.text-button {
  /* font-family: 'Roboto', Helvetica, Arial, sans-serif; */
  font-family: var(--font-style-2);
}
.btn-shop {
  transition: all 0.25s ease;
  background-color: var(--color_background_btn);
  border-radius: var(--radius_btn);
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-shop:hover {
  transition: all 0.25s ease;
  background-color: #ffffff;
}
.btn-shop:hover .text-button {
  transition: all 0.25s ease;
  color: #2c2930;
}
.carousel-content >>> .swiper-pagination-bullet-active {
  opacity: 1;
  background: #2c2930;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 2px;
  display: inline-block;
  border-radius: 100%;
  background: white;
  opacity: 0.2;
}
@screen sm {
  .swiper-slide-1 {
    @apply flex flex-col justify-center items-center z-auto;
  }
  .banner-content-items-1 {
    @apply w-9/0 flex flex-col justify-center items-center;
  }
  .content-items-1 {
    @apply w-full;
  }
  .text-top {
    @apply w-full flex justify-center items-center text-center mb-24;
  }
  .banner-text-top {
    font-size: 14px;
    @apply font-semibold uppercase;
  }
  .text-medium {
    @apply w-full flex flex-col justify-center items-center text-center mb-24;
  }
  .banner-text-medium {
    font-size: 38px;
    line-height: 0.9;
    font-weight: 700;
  }
  .text-bottom {
    @apply w-full flex flex-col justify-center items-center text-center mb-24;
  }
  .banner-text-bottom {
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
  }
  .banner-button {
    @apply w-full flex flex-col justify-center items-center text-center;
    margin-top: 30px;
  }
  .text-button {
    @apply px-24;
    transition: all 0.25s ease;
    letter-spacing: 1px;
    font-size: 15px;
    font-weight: 800;
    text-align: center;
    white-space: nowrap;
  }
}
@screen md {
  .banner-content-items-1 {
    @apply w-7/0;
  }
  .banner-text-top {
    font-size: 16px;
  }
  .banner-text-medium {
    font-size: 72px;
  }
  .banner-text-bottom {
    font-size: 16px;
  }
}
@screen lg {
  .swiper-slide-1 {
    @apply justify-center items-center z-auto;
  }
  .banner-content-items-1 {
    @apply w-9/8 justify-start items-start;
  }
  .content-items-1 {
    @apply w-5/0;
  }
  .text-top {
    @apply justify-start items-start text-left mb-0;
  }
  .text-medium {
    @apply justify-start items-start text-left;
  }
  .text-bottom {
    @apply justify-start items-start text-left mb-0;
  }
  .banner-button {
    @apply justify-start items-start text-center;
  }
}
@media (min-width: 1300px) {
  .banner-content-items-1 {
    @apply justify-start items-start;
    width: 1300px;
  }
  .content-items-1 {
    width: 47%;
  }
  .text-top {
    @apply mb-20;
  }
  .text-bottom {
    @apply mb-40;
  }
  .banner-text-medium {
    font-size: 90px;
  }
}
</style>
