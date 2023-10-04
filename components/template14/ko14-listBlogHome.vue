<template>
  <div
    v-if="listArticulos.length > 0"
    class="w-full flex justify-center items-center py-20 lg:py-30 px-10"
    :style="`background-color: ${listBlogHome['--background_color_1']}`"
  >
    <div
      class="w-full h-auto relative max-w-7xl flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        class="w-full flex flex-row justify-between items-start md:items-center mb-25"
      >
        <p
          class="w-full text-start"
          :style="`color: ${listBlogHome.color_title}; font-size: ${listBlogHome.fontSizeTitle}; font-weight: ${listBlogHome.fontWeighTitle};`"
        >
          {{ listBlogHome.title }}
        </p>
        <nuxt-link
          :to="{ path: `/blog` }"
          class="w-full text-end"
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
        v-swiper:mySwiper="swiperOptions"
        class="w-full h-full"
      >
        <div class="swiper-wrapper w-full h-full">
          <div
            v-for="article in listArticulos"
            :key="article.id"
            class="swiper-slide w-full"
          >
            <KoBlogCard
              :article="article"
              :setting-general="settingGeneral"
              :card-blog="cardBlog"
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
  name: 'Ko14listBlogHome',
  components: {
    KoBlogCard: () => import('./_cardBlog/Ko_BlogCard.vue'),
  },
  props: {
    listBlogHome: {
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
    cardBlog: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          0: {
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
  height: 100%;
  max-width: 400px;
}
</style>
