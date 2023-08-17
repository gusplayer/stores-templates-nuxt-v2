<template>
  <div
    class="w-full flex justify-center items-center py-25 lg:py-40 px-10"
    :style="`background-color: ${categories['--background_color_1']}`"
  >
    <div
      class="w-full max-w-9/5 md:max-w-9/0 h-auto flex flex-col items-center justify-center overflow-hidden"
    >
      <p
        class="w-full text-center mb-25 text-25 md:text-30 lg:text-40"
        :style="`color: ${categories.color_title_1}; font-weight: ${categories.fontWeighTitle};`"
      >
        {{ categories.title }}
      </p>

      <div v-swiper:mySwiper="swiperOption" ref="mySwiper" class="w-full">
        <div class="swiper-wrapper w-full">
          <a
            :id="`slide${index + 1}`"
            v-for="(item, index) in categories.values"
            :key="index"
            :href="item.url_redirect"
            class="swiper-slide w-full"
            rel="noreferrer noopener"
          >
            <img
              :src="idCloudinary(item.img, 550, 550)"
              alt="banner template15"
              class="w-full h-full object-cover"
              :style="`border-radius: ${settingGeneral?.radius};`"
            />
            <div
              class="mt-10 text-center text-16 md:text-20 lg:text-22"
              :style="`color: ${item.color_title}; font-weight: ${item.fontWeighTitle};`"
            >
              <p>{{ item.title }}</p>
            </div>
          </a>
        </div>
        <div class="swiper-button-prev" v-if="categories.values.length > 1" />
        <div class="swiper-button-next" v-if="categories.values.length > 1" />
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '@/mixins/idCloudinary'
export default {
  name: 'Ko15-categories',
  mixins: [idCloudinary],
  props: {
    categories: {
      type: Object,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
    dataStore: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        setWrapperSize: true,
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 26,
        grabCursor: true,
        breakpoints: {
          1250: {
            slidesPerView: 5,
            spaceBetween: 35,
          },
          1060: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          990: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          790: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          770: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
}
</script>

<style scoped>
.giftLoad,
.swiper-slide {
  max-width: 324px;
}
.swiper-button-prev,
.swiper-button-next {
  color: #ed6436;
}
</style>
