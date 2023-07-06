<template>
  <div
    v-if="this.listArticulos.length > 0"
    class="w-full flex justify-center items-center py-20 lg:py-30 px-10"
    :style="`background-color: ${listBlogHome['--background_color_1']}`"
  >
    <div
      class="w-full h-auto relative max-w-7xl flex flex-col items-center justify-center overflow-hidden"
    >
      <div class="w-full flex flex-row justify-between items-center mb-25">
        <p
          :style="`color: ${listBlogHome.color_title}; font-size: ${listBlogHome.fontSizeTitle}; font-weight: ${listBlogHome.fontWeighTitle};`"
        >
          {{ listBlogHome.title }}
        </p>
        <nuxt-link
          :to="{ path: `/blog` }"
          :style="`color: ${listBlogHome.color_text_btn}; font-size: ${listBlogHome.fontSizeTextBtn}; font-weight: ${listBlogHome.fontWeighTextBtn};`"
        >
          {{ listBlogHome.text_btn }}
          <FlechaRight-icon
            :style="`color: ${listBlogHome.color_text_btn}; font-size: ${listBlogHome.fontSizeTextBtn}; font-weight: ${listBlogHome.fontWeighTextBtn};`"
          />
        </nuxt-link>
      </div>
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
  name: 'Ko14-listBlogHome',
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
