<template>
  <div
    v-if="listArticulos.length > 0"
    class="w-full flex justify-center items-center py-25 lg:py-40 px-10"
    :style="`background-color: ${listBlogHome['--background_color_1']}`"
  >
    <div
      class="w-full max-w-[1200px] h-auto relative flex flex-col items-center justify-center overflow-hidden mt-20"
    >
      <p
        class="w-full text-center mb-15 text-25 md:text-28 lg:text-32"
        :style="`color: ${listBlogHome.color_title}; font-weight: ${listBlogHome.fontWeighTitle}; font-size: ${listBlogHome.fontSizeTitle};`"
      >
        {{ listBlogHome.title }}
      </p>
      <p
        class="w-full text-center mb-50 text-14"
        :style="`color: ${listBlogHome.color_text}; font-weight: ${listBlogHome.fontWeighText}; font-size: ${listBlogHome.fontSizeText};`"
      >
        {{ listBlogHome.text }}
      </p>
      <div
        ref="mySwiper"
        v-swiper:mySwiper="swiperOption"
        class="w-full h-full"
      >
        <div class="swiper-wrapper w-full h-full">
          <div
            v-for="article in listArticulos"
            :key="article.id"
            class="swiper-slide w-full h-full"
          >
            <KoBlogCard
              :article="article"
              :settingGeneral="settingGeneral"
              :cardBlog="cardBlog"
              class="giftLoad w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko16-listBlogHome',
  props: {
    listBlogHome: Object,
    settingGeneral: Object,
    dataStore: Object,
    cardBlog: Object,
  },
  components: {
    KoBlogCard: () => import('./_cardBlog/blogCard'),
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        // autoplay: {
        //   delay: 7000,
        //   disableOnInteraction: false,
        // },
        breakpoints: {
          10000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1023: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          580: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    }
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos
    },
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
}
</script>
