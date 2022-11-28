<template>
  <div class="wrapper-content" :style="[settingKBlog, settingGeneral]">
    <div class="separador-blog" v-if="!settingKCarousel.visible"></div>
    <div
      class="wrapper-items-content"
      :style="[
        {
          '--font-style-2':
            this.settingGeneral && this.settingGeneral.fount_2
              ? this.settingGeneral.fount_2
              : 'Great Vibes',
        },
        {
          '--font-style-3':
            this.settingGeneral && this.settingGeneral.fount_3
              ? this.settingGeneral.fount_3
              : 'Lora',
        },
      ]"
      v-if="settingKBlog"
    >
      <div class="wrapper-content-items">
        <div class="wrapper-items-text">
          <div class="tittle">
            <span class="tittle-text">{{ settingKBlog.pre_title }}</span>
          </div>
          <div class="subtittle">
            <span class="subtittle-text">{{ settingKBlog.title }}</span>
          </div>
          <div class="description">
            <span class="description-text">
              {{ settingKBlog.description }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-items">
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
        <div class="swiper-wrapper">
          <div
            v-for="(article, index) in filteredList"
            :key="article.id"
            :class="`swiper-slide wrapper-${index + 1}`"
          >
            <Kblog
              :article="article"
              :settingKBlog="settingKBlog"
              :settingGeneral="settingGeneral"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Kblog from '../template7/_blog/blogcard'
export default {
  name: 'ko-Blog',
  components: {
    Kblog,
  },
  props: {
    dataStore: Object,
    settingKBlog: Object,
    settingGeneral: Object,
    settingKCarousel: Object,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: '',
        spaceBetween: 20,
        breakpoints: {
          10000: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          2560: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
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
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    listArticulos() {
      return this.$store.state.listArticulos
    },
    filterArticles() {
      const initial = this.currentPage * 12 - 12
      const final = initial + 12
      return this.filteredList.slice(initial, final)
    },
    filteredList() {
      if (this.search) {
        return this.listArticulos.filter((element) => {
          return element.titulo
            .toLowerCase()
            .includes(this.search.toLowerCase())
        })
      } else {
        return this.listArticulos
      }
    },
  },
  mounted() {
    this.mySwiper.slideTo(3, 1000, false)
  },
  watch: {},
}
</script>
<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.separador-blog {
  padding-top: 100px;
}
.wrapper-content {
  background: var(--background_color_1);
  @apply flex flex-col justify-center items-center w-full py-30;
}
.wrapper-items-content {
  @apply flex flex-col justify-center items-center;
}
.wrapper-content-items {
  @apply flex flex-col justify-center items-center w-full mb-48 text-center;
}
.wrapper-items-text {
  @apply w-full;
}
.tittle,
.subtittle,
.description {
  @apply flex flex-col justify-center items-center;
}
.tittle-text {
  font-family: var(--font-style-2) !important;
  color: var(--color_pre_title);
}
.subtittle-text {
  font-family: var(--font-style-3) !important;
  color: var(--color_title);
}
.description-text {
  font-family: var(--font-style-3) !important;
  color: var(--color_description);
}
@screen sm {
  .wrapper-items-content {
    @apply w-9/5;
  }
  .tittle {
    line-height: 34px;
    font-size: 24px;
  }
  .subtittle {
    line-height: 42px;
    font-size: 32px;
  }
  .description {
    line-height: 24px;
    font-size: 14px;
  }
  .wrapper-items {
    @apply w-9/5;
  }
}
@screen md {
  .subtittle {
    line-height: 46px;
    font-size: 36px;
  }
}
@screen mlg {
  .wrapper-items-content {
    @apply w-9/3;
  }
  .gify-text-content {
    @apply w-9/3;
  }
  .gify-slider-content {
    @apply w-6/3;
  }
  .tittle {
    line-height: 34px;
    font-size: 24px;
  }
  .subtittle {
    line-height: 48px;
    font-size: 35px;
  }
  .description {
    line-height: 24px;
    font-size: 14px;
  }
  .wrapper-items {
    @apply w-9/3;
  }
}
@media (min-width: 1192px) {
  .wrapper-items-content {
    width: 1192px;
  }
  .wrapper-items {
    width: 1192px;
  }
}
</style>
