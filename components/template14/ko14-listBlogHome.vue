<template>
  <div
    v-if="this.listArticulos.length > 0"
    class="w-full flex justify-center items-center py-15 lg:py-20 px-10 md:px-0"
    :style="`background-color: ${listBlogHome['--background_color_1']}`"
  >
    <div
      class="w-full h-auto relative max-w-7xl flex flex-col items-center justify-center overflow-hidden"
    >
      <div class="w-full flex flex-row justify-between items-center mb-20">
        <p
          :style="`color: ${listBlogHome.color_title}; font-size: ${listBlogHome.fontSizeTitle}; font-weight: ${listBlogHome.fontWeighTitle};`"
        >
          {{ listBlogHome.title }}
        </p>
        <a
          v-if="listBlogHome.visible_btn"
          :href="listBlogHome?.url_redirect ?? ''"
          :style="`color: ${listBlogHome.color_text_btn}; font-size: ${listBlogHome.fontSizeTextBtn}; font-weight: ${listBlogHome.fontWeighTextBtn};`"
        >
          {{ listBlogHome.text_btn }}
          <FlechaRight-icon
            :style="`color: ${listBlogHome.color_text_btn}; font-size: ${listBlogHome.fontSizeTextBtn}; font-weight: ${listBlogHome.fontWeighTextBtn};`"
          />
        </a>
      </div>
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
        <div class="swiper-wrapper">
          <div
            v-for="article in listArticulos"
            :key="article.id"
            class="swiper-slide"
          >
            <KoBlogCard
              :article="article"
              :settingGeneral="settingGeneral"
              :cardBlog="cardBlog"
              class="giftLoad"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoBlogCard from './_cardBlog/blogcard.vue'
export default {
  name: 'Ko14-listBlogHome',
  props: {
    listBlogHome: Object,
    settingGeneral: Object,
    dataStore: Object,
    cardBlog: Object,
  },
  components: {
    KoBlogCard,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: '',
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
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

<style scoped>
.giftLoad,
.swiper-slide {
  max-width: 300px;
}
</style>
