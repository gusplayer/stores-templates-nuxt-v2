<template>
  <div
    class="wrapper-content"
    :style="[
      settingGeneral,
      blog,
      {
        '--font-style-1': settingGeneral.fount_1
          ? settingGeneral.fount_1
          : 'Roboto',
      },
    ]"
  >
    <div class="wrapper-items-content">
      <div class="product-text">
        <div class="product-tittle">
          <p class="tittle">{{ blog.title }}</p>
        </div>
        <div class="product-subtittle">
          <p class="subtittle">
            {{ blog.description }}
          </p>
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
              v-if="article.estado == 1"
              :article="article"
              :blog="blog"
              :settingGeneral="settingGeneral"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Kblog from '../template10/_blog/blogcard'
export default {
  name: 'ko-Blog',
  components: {
    Kblog,
  },
  props: {
    blog: Object,
    dataStore: Object,
    settingGeneral: Object,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: '',
        spaceBetween: '',
        breakpoints: {
          10000: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 40,
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
  background: var(--background_color_1);

  /* Center slide text vertically */
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
.wrapper-content {
  @apply w-full flex flex-col justify-center items-center;
  padding-bottom: 64px;
  background-color: var(--background_color_1);
}
.wrapper-items-content {
  @apply flex flex-col justify-center items-center;
}
.product-text {
  @apply w-full flex flex-col justify-center items-center mb-30 text-center;
}
.product-tittle {
  @apply flex flex-col justify-center items-center;
}
.tittle {
  @apply flex flex-col justify-center items-center;
  font-family: var(--font-style-1) !important;
  font-size: var(--font-size);
  font-weight: var(--font-weight);
}
.subtittle {
  font-size: var(--font-size-d);
}
@screen sm {
  .wrapper-items-content,
  .wrapper-items {
    @apply w-9/0;
  }
  .tittle {
    line-height: 34px;
    font-size: 30px;
    color: var(--color_title);
    margin-bottom: var(--marginbottomTitle);
  }
  .subtittle {
    color: var(--color_description);
    font-size: 15px;
    font-weight: var(--font-weight-d);
    margin-bottom: var(--marginbottomDescription);
  }
}
@screen md {
  .wrapper-items-content,
  .wrapper-items {
    @apply w-9/5;
  }
}
@media (min-width: 1400px) {
  .wrapper-items {
    max-width: 1400px;
    @apply w-full h-auto;
  }
}
@screen xml {
  .product-tittle {
    width: 100%;
  }
  .tittle {
    line-height: 34px;
    font-size: 36px;
  }
}
</style>
